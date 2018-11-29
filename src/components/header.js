import React from 'react'
import { Link } from 'gatsby'
import gatsbyMyLogo from '../images/gatsby-icon.png'

const logoInlineStyle = { width: '100px' }

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem',
    }}
  >
    <img src={gatsbyMyLogo} alt="" style={logoInlineStyle} />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </div>
)

export default Header
