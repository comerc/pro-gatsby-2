/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path')

exports.createPages = ({ graphql, actions: { createPage } }) => {
  return graphql(`
    {
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
  `).then(({ data: { allMarkdownRemark: { edges } } }) => {
    edges.forEach(({ node: { frontmatter: { slug, title } } }) => {
      createPage({
        path: `/posts${slug}`,
        component: path.resolve('./src/components/PostLayout.js'),
        context: { slug, title },
      })
    })
  })
}
