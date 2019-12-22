import React, { Component } from "react";
import Typing from "react-typing-animation";

import ChessInfo from "./chessInfo";
import AnimeInfo from "./animeInfo";

export class InfoDisplayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
    };

    this.updateDisplayedInfo = this.updateDisplayedInfo.bind(this);

    this.infos = [
      <ChessInfo onFinished={this.updateDisplayedInfo} />,
      <AnimeInfo onFinished={this.updateDisplayedInfo} />,
    ];
  }

  updateDisplayedInfo = () => {
    const newState = {
      currentIndex: this.state.currentIndex,
    };
    if (this.state.currentIndex === this.infos.length - 1) {
      newState.currentIndex = 0;
    } else {
      newState.currentIndex++;
    }
    this.setState(newState);
  };

  render() {
    return this.infos[this.state.currentIndex];
  }
}

export default InfoDisplayer;
