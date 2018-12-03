import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import './layout.css'

const Archive = ({ children }) => (
  <StaticQuery
    query={graphql`
      query BlogPostArchive {
        allMarkdownRemark {
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
    `}
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
                <li key={slug}>{title} 123</li>
              )
            )}
          </ul>
        </aside>
      </>
    )}
  />
)

Archive.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Archive
