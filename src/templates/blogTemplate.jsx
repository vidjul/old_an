import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";

import Navbar from "../components/Navbar";
import "../pages/blog.scss";

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark;
  const featuredImgFluid = frontmatter.featuredImage.childImageSharp.fluid;
  return (
    <React.Fragment>
      <Navbar />
      <div className="hero is-primary has-background">
        <Img
          className="hero-background is-transparent"
          fluid={featuredImgFluid}
        />
      </div>
      <div className="blog-bg section">
        <div className="container">
          <section className="section">
            <div className="blog container">
              <h1 className="title is-size-1">{frontmatter.title}</h1>
              <h2 className="subtitle">{frontmatter.date}</h2>
              <div
                className="blog-post-content"
                dangerouslySetInnerHTML={{ __html: html }}
              />
            </div>
          </section>
        </div>
      </div>
    </React.Fragment>
  );
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
