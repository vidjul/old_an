import React, { Component } from "react";
import ChessBoard from "chessboardjsx";
import Logic from "chess.js";

import styles from "../pages/style.scss";

const calcWidth = () => {
  if (window.innerWidth >= 1024) {
    return 480;
  } else if (window.innerWidth >= 768) {
    return 360;
  } else {
    return 240;
  }
};

const lightSquareStyle = {
  backgroundColor: styles.light,
};

const darkSquareStyle = {
  backgroundColor: styles.dark,
};

const boardStyle = {
  marginLeft: "auto",
  marginRight: "auto",
};

export class Chess extends Component {
  constructor(props) {
    super(props);
    this.state = {
      elo: "over 9k",
      fen: "start",
    };

    this.makeRandomMove = this.makeRandomMove.bind(this);
  }

  timer = () => window.setTimeout(this.makeRandomMove, 1000);

  async componentDidMount() {
    const res = await fetch("https://api.chess.com/pub/player/vidjul/stats");
    const resBody = await res.json();
    if (resBody && resBody.chess_blitz) {
      this.setState({
        elo: resBody.chess_blitz.last.rating,
      });
    }
    this.game = new Logic();
    setTimeout(() => this.makeRandomMove(), 1000);
  }

  componentWillUnmount() {
    window.clearTimeout(this.timer());
  }

  makeRandomMove() {
    const possibleMoves = this.game.moves();
    if (
      this.game.game_over() === true ||
      this.game.in_draw() === true ||
      possibleMoves.length === 0
    ) {
      return;
    }
    const randomIndex = Math.floor(Math.random() * possibleMoves.length);

    this.game.move(possibleMoves[randomIndex]);
    this.setState({ fen: this.game.fen() });
    this.timer();
  }

  render() {
    return (
      <section className="section extra-container">
        <div className="container">
          <div className="columns is-centered">
            <div className="column">
              <p className="is-size-5">
                ..playing chess! <br />I play mostly blitz chess on{" "}
                <a href="https://chess.com">Chess.com</a> and my current ELO is{" "}
                <strong>{this.state.elo}</strong>.
                <span className="hint">
                  (That value is retrieved from their API, I hope it's high
                  enough right now!)
                </span>
              </p>
              <br />
              <p className="is-size-5">
                My favorite piece is the Knight. (♞) I hope one day it will have
                its own emoji just like the pawn (
                <span role="img" aria-label="black pawn">
                  ♟️
                </span>
                ) !
              </p>
            </div>
            <div className="column">
              <ChessBoard
                calcWidth={calcWidth}
                lightSquareStyle={lightSquareStyle}
                darkSquareStyle={darkSquareStyle}
                boardStyle={boardStyle}
                position={this.state.fen}
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Chess;
