import React from "react"
import { Link, graphql } from "gatsby"

const Menu = props => {
  return (
    <div style={{ paddingTop: "10px" }}>
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <li style={{ border: "1px solid purple", padding: "10px" }}>
          <Link
            to="/"
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
          >
            Home
          </Link>
        </li>
        <li style={{ border: "1px solid purple", padding: "10px" }}>
          <Link
            to="/"
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
          >
            Blog
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Menu
export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
