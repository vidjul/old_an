import React from "react"
import { Link } from "gatsby"
import Image from "../components/image"
import SEO from "../components/seo"

import "./style.scss"

const IndexPage = () => (
  <div>
    <SEO title="Home" />
    <section className="hero is-success is-fullheight">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title" >Hi there!</h1>
          <p>Vidushan CHOORIYAKUMARAN, Software Engineer.</p>
        </div>
      </div>
    </section>
  </div>
)

export default IndexPage
