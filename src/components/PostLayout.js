import React, { Component } from 'react'
import { graphql } from 'gatsby'
import Layout from './layout'

// Static Query
// Used anywhere, doesn't accept variables, can't use context

// Page Query
// Must be used on pages

class PostLayout extends Component {
  render() {
    const {
      data: { markdownRemark },
      location,
    } = this.props
    return (
      <Layout location={location}>
        <h1>{markdownRemark.frontmatter.title}</h1>
        <div>---</div>
        <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
      </Layout>
    )
  }
}

export default PostLayout

export const query = graphql`
  query PostLayout($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        slug
        title
        date
      }
    }
  }
`
