import React from 'react'
// import PropTypes from 'prop-types'
import { StaticQuery, graphql, Link } from 'gatsby'
import './layout.css'

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
          <ul>
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
          </ul>
        </aside>
      </>
    )}
  />
)

// Archive.propTypes = {
//   children: PropTypes.node.isRequired,
// }

export default Archive
