import React, { Component } from "react";
import { graphql } from "gatsby";
import Helmet from "react-helmet";

import PostLink from "../components/PostLink";
import Navbar from "../components/Navbar";
import SEO from "../components/seo";

const blog = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />);
  return (
    <div>
      <Navbar />
      <Helmet>
        <html className="has-navbar-fixed-top"></html>
      </Helmet>
      <SEO title="Blog" />
      <div className="section">
        <div className="container">{Posts}</div>
      </div>
    </div>
  );
};

export default blog;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
          }
        }
      }
    }
  }
`;
