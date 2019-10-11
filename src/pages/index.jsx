import React from "react";
import Particles from "react-particles-js";

import { Link } from "gatsby";
import Image from "../components/image";
import SEO from "../components/seo";

import "./style.scss";

const getBirthday = () => {
  return new Date().getFullYear() - new Date("06/04/1996").getFullYear();
};

const IndexPage = () => {
  const particlesParams = {
    particles: {
      number: {
        value: 160,
      },
    },
  };
  return (
    <div>
      <SEO title="Home" />
      <section className="hero is-success is-fullheight" id="particle-bg">
        <Particles params={particlesParams} />
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title">Hi there!</h1>
            <p>Vidushan CHOORIYAKUMARAN, Software Engineer.</p>
          </div>
        </div>
      </section>
      <section className="hero is-light is-fullheight" id="particle-bg">
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="columns">
              <div className="column">
                <h1 className="title">About me</h1>
                <p>
                  I'm a {getBirthday()} years old software engineer based in
                  Paris. I love <i>Final Fantasy 7</i>, <i>Death Note</i> and{" "}
                  <i>Testing stuffs on computer (like crafting this website)</i>
                  .
                </p>
              </div>
              <div className="column">
                <h1 className="title">Thanks for coming!</h1>
                <p>
                  I'm still working on this page. If you want to contact me,
                  don't hesitate to drop me an email at{" "}
                  <a href="mailto:vidush@n-c.dev">vidush@n-c.dev</a>. (Indeed, I
                  also enjoy creating{" "}
                  <a href="https://en.wikipedia.org/wiki/Domain_hack">
                    domain hacks!)
                  </a>
                  )
                </p>
              </div>
              <br />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IndexPage;
