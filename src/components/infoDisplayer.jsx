import React, { Component } from "react";

import ChessInfo from "./chessInfo";
import AnimeInfo from "./animeInfo";

export class InfoDisplayer extends Component {
  intervalId;
  currentIndex = 0;

  updateDisplayedInfo() {
    if (this.currentIndex >= this.state.infos.length) {
      this.currentIndex = 0;
    }
    this.setState({
      currentInfo: this.state.infos[this.currentIndex],
    });
    this.currentIndex++;
  }

  constructor(props) {
    super(props);
    this.state = {
      infos: [
        <ChessInfo typingFinished={this.updateDisplayedInfo.bind(this)} />,
        <AnimeInfo typingFinished={this.updateDisplayedInfo.bind(this)} />,
      ],
      currentInfo: 0,
    };
  }

  componentDidMount() {
    this.updateDisplayedInfo();
  }

  render() {
    return <div className="is-size-5">{this.state.currentInfo}</div>;
  }
}

export default InfoDisplayer;
