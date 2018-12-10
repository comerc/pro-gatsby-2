import React from 'react'
// import PropTypes from 'prop-types'
import styled from 'styled-components'
import { StaticQuery, graphql, Link } from 'gatsby'
import './layout.css'

const StyledUl = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  a {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-size: 0.8rem;
    text-decoration: underline;
    color: #524763;
  }
`

const POST_ARCHIVE_QUERY = graphql`
  query BlogPostArchive {
    allMarkdownRemark(
      limit: 5
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            slug
            title
          }
        }
      }
    }
  }
`

const Archive = ({ children }) => (
  <StaticQuery
    query={POST_ARCHIVE_QUERY}
    render={({ allMarkdownRemark }) => (
      <>
        <aside>
          <h2>Archive</h2>
          <StyledUl>
            {allMarkdownRemark.edges.map(
              ({
                node: {
                  frontmatter: { title, slug },
                },
              }) => (
                <li key={slug}>
                  <Link to={`/posts${slug}`}>{title}</Link>
                </li>
              )
            )}
          </StyledUl>
        </aside>
      </>
    )}
  />
)

// Archive.propTypes = {
//   children: PropTypes.node.isRequired,
// }

export default Archive
