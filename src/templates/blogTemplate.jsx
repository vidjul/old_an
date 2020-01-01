import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";

import Navbar from "../components/Navbar";
import "../pages/blog.scss";
import Helmet from "react-helmet";

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark;
  const featuredImgFluid = frontmatter.featuredImage.childImageSharp.fluid;
  return (
    <React.Fragment>
      <Helmet>
        <title>{frontmatter.title}</title>
      </Helmet>
      <Navbar />
      <div className="hero is-medium has-background is-medium">
        <Img className="hero-background" fluid={featuredImgFluid} />
      </div>
      <div className="section">
        <div className="container">
          <section className="blog section">
            <div className="container">
              <div className="blog-header has-text-centered">
                <h1 className="title is-size-1 blog-heading">
                  {frontmatter.title}
                </h1>
                <h2 className="subtitle">{frontmatter.date}</h2>
              </div>
              <hr />
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
