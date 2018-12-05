import React from 'react'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const SecondPage = data => {
  console.log(data)
  return (
    <Layout>
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      Lorem, ipsum dolor.
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default SecondPage

export const query = graphql`
  query SecondPage {
    markdownRemark(frontmatter: { slug: { eq: "/second-post" } }) {
      html
      frontmatter {
        slug
        title
        date
      }
    }
  }
`
