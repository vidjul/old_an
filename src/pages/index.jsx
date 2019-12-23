import React from "react";
import Loadable from "react-loadable";
import Carousel from "nuka-carousel";

import { Link } from "gatsby";
import Image from "../components/image";
import SEO from "../components/seo";

import "./style.scss";
import ParticleHero from "../components/particleHero";
import Anime from "../components/Anime";

const LoadableChess = Loadable({
  loader: () => import("../components/Chess"),
  loading: function Loading() {
    return <div>Loading...</div>;
  },
});

const getBirthday = () => {
  return new Date().getFullYear() - new Date("06/04/1996").getFullYear();
};

const IndexPage = () => {
  return (
    <div>
      <SEO title="Home" />
      <ParticleHero />
      <section className="section">
        <div className="container">
          <h1 className="title">About me</h1>
          <p className="is-size-5">
            I'm a {getBirthday()} years old software engineer based in Paris. I
            love <i>Final Fantasy 7</i>, <i>Death Note</i> and{" "}
            <i>Testing stuffs on computer (like crafting this website)</i>. If
            you want to know more about me, please check my{" "}
            <a href="https://github.com/vidjul">Github</a> or{" "}
            <a href="https://linkedin.com/in/c-vidushan">LinkedIn</a> profile.
          </p>{" "}
          <br />
          <p className="is-size-5">
            When I'm not in front of VSCode (a.k.a the best editor), one of the
            things I like to do is...
          </p>
        </div>
      </section>
      <Carousel
        renderCenterLeftControls={false}
        renderCenterRightControls={false}
      >
        <LoadableChess />
        <Anime />
      </Carousel>
      <section className="section">
        <div className="container">
          <h1 className="title">Thanks for coming!</h1>
          <p className="is-size-5">
            I'm still working on this page. If you want to contact me, don't
            hesitate to drop me an email at{" "}
            <a href="mailto:vidush@n-c.dev">vidush@n-c.dev</a>. (Indeed, I also
            enjoy creating{" "}
            <a href="https://en.wikipedia.org/wiki/Domain_hack">
              domain hacks!
            </a>
            )
          </p>
        </div>
      </section>
    </div>
  );
};

export default IndexPage;
