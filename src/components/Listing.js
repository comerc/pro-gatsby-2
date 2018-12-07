import React from 'react'
import { StaticQuery, Link, graphql } from 'gatsby'

const Listing = () => (
  <StaticQuery
    query={graphql`
      query Listing {
        allMarkdownRemark(
          limit: 5
          sort: { fields: [frontmatter___date], order: DESC }
        ) {
          edges {
            node {
              excerpt
              frontmatter {
                slug
                title
                date(formatString: "MMMM DD, YYYY")
              }
            }
          }
        }
      }
    `}
    render={data => (
      <div>
        {data.allMarkdownRemark.edges.map(
          ({
            node: {
              frontmatter: { slug, title, date },
              excerpt,
            },
          }) => (
            <article key={slug}>
              <h1>
                <Link to={`/posts${slug}`}>{title}</Link>
              </h1>
              <p>{date}</p>
              <p>{excerpt}</p>
              <Link to={`/posts${slug}`}>Read More</Link>
            </article>
          )
        )}
      </div>
    )}
  />
)

export default Listing
