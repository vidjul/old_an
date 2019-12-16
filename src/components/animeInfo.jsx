import React, { Component } from "react";
import Typing from "react-typing-animation";

export class AnimeInfo extends Component {
  render() {
    return (
      <Typing onFinishedTyping={this.props.typingFinished}>
        ..watching anime!
        <Typing.Delay ms={3000} />
        <Typing.Backspace count={17} />
      </Typing>
    );
  }
}

export default AnimeInfo;
