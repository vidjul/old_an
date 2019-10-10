import React from "react"
import Particles from 'react-particles-js';

import { Link } from "gatsby"
import Image from "../components/image"
import SEO from "../components/seo"

import "./style.scss"

const IndexPage = () => {
  const particlesParams = {
    particles: {
      number: {
        value: 160,
      },
    },
  }
  return (
    <div>
      <SEO title="Home" />
      <section className="hero is-success is-fullheight" id="particle-bg">
        <Particles params={particlesParams} />
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title" >Hi there!</h1>
            <p>Vidushan CHOORIYAKUMARAN, Software Engineer.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default IndexPage
