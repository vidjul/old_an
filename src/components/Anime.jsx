import React, { Component } from "react";

export class Anime extends Component {
  render() {
    return (
      <section className="section extra-container">
        <div className="container">
          <div className="columns is-centered">
            <div className="column">
              <p className="is-size-5">
                ..watching anime! My favorite anime is Death Note.{" "}
                <span className="hint">(Oh, I've already said that)</span>
              </p>
              <br />
              <p className="is-size-5">
                You can have a look to the list of animes I have watched so far
                on my{" "}
                <a href="https://myanimelist.net/profile/Vidjul">MyAnimeList</a>{" "}
                profile page.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Anime;
