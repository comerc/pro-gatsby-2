import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Archive from './Archive'
import Header from './header'
import './layout.css'

const StyledMain = styled.main`
  margin: 0 auto;
  max-width: 90%;
  display: grid;
  grid-template-columns: 4fr 1fr;
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
        allMarkdownRemark {
          edges {
            node {
              excerpt
              html
              frontmatter {
                date(formatString: "MMMM DD, YYYY")
                title
              }
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <StyledMain>
          {/* <div>{data.allMarkdownRemark.edges[0].node.excerpt}</div>
          <div>{data.allMarkdownRemark.edges[0].node.frontmatter.date}</div>
          <div
            dangerouslySetInnerHTML={{
              __html: data.allMarkdownRemark.edges[0].node.html,
            }}
          /> */}
          <div>{children}</div>
          <Archive />
        </StyledMain>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
