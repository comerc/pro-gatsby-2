import React, { Component } from 'react'
import { graphql } from 'gatsby'
import Layout from './layout'

// Static Query
// Used anywhere, doesn't accept variables, can't use context

// Page Query
// Must be used on pages

class PostLayout extends Component {
  render() {
    const { data } = this.props
    console.log(data)
    return (
      <Layout>
        <h1>Post Layout</h1>
      </Layout>
    )
  }
}

export default PostLayout

export const query = graphql`
  query PostLayout {
    markdownRemark(frontmatter: { slug: { eq: "/third-post" } }) {
      html
      frontmatter {
        slug
        title
        date
      }
    }
  }
`
