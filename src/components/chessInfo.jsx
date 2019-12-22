import React, { Component } from "react";
import Typing from "react-typing-animation";

export class ChessInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      elo: null,
    };
  }
  async componentDidMount() {
    const res = await fetch("https://api.chess.com/pub/player/vidjul/stats");
    const resBody = await res.json();
    let elo =
      "over 9k! (Uh-oh, the API failed to properly send me the data :()";
    if (resBody && resBody.chess_blitz) {
      elo = resBody.chess_blitz.last.rating;
    }
    this.setState({
      elo,
    });
  }
  render() {
    if (this.state.elo) {
      return (
        <Typing
          className="is-size-5"
          onFinishedTyping={this.props.onFinished}
          loop
        >
          ..playing blitz chess on <a href="chess.com">Chess.com</a> (and my
          current ELO is {this.state.elo})
          <Typing.Backspace count={64} />
        </Typing>
      );
    }
    return <span className="is-size-5">..</span>;
  }
}

export default ChessInfo;
