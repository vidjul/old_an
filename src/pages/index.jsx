import React from "react";

import { Link } from "gatsby";
import Image from "../components/image";
import SEO from "../components/seo";

import "./style.scss";
import ParticleHero from "../components/particleHero";

const getBirthday = () => {
  return new Date().getFullYear() - new Date("06/04/1996").getFullYear();
};

const IndexPage = () => {
  return (
    <div>
      <SEO title="Home" />
      <ParticleHero />
      <section className="section">
        <section className="section">
          <div className="container has-text-centered">
            <div className="columns">
              <div className="column is-6">
                <h1 className="title">About me</h1>
                <p>
                  I'm a {getBirthday()} years old software engineer based in
                  Paris. I love <i>Final Fantasy 7</i>, <i>Death Note</i> and{" "}
                  <i>Testing stuffs on computer (like crafting this website)</i>
                  .
                </p>
              </div>
              <div className="column is-6">
                <h1 className="title">Some links!</h1>
                <div className="ul">
                  <li>
                    <a href="https://github.com/vidjul">Github</a>
                  </li>
                  <li>
                    <a href="https://linkedin.com/in/c-vidushan">LinkedIn</a>
                  </li>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <h1 className="title">Thanks for coming!</h1>
            <p>
              I'm still working on this page. If you want to contact me, don't
              hesitate to drop me an email at{" "}
              <a href="mailto:vidush@n-c.dev">vidush@n-c.dev</a>. (Indeed, I
              also enjoy creating{" "}
              <a href="https://en.wikipedia.org/wiki/Domain_hack">
                domain hacks!)
              </a>
              )
            </p>
          </div>
        </section>
      </section>
    </div>
  );
};

export default IndexPage;
