import React, { Component } from "react";
import Typing from "react-typing-animation";

export class AnimeInfo extends Component {
  render() {
    return (
      <Typing
        className="is-size-5"
        onFinishedTyping={this.props.onFinished}
        loop
      >
        ..watching anime
        <Typing.Backspace count={16} />
      </Typing>
    );
  }
}

export default AnimeInfo;
