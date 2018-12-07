import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import gatsbyMyLogo from '../images/gatsby-icon.png'

const Root = styled.div`
  background: #524763;
  margin-bottom: 1.45rem;
`
const Container = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1rem;
  img {
    width: 100px;
    margin-bottom: 0;
  }
`
const StyledLink = styled(Link)`
  color: white;
  text-decoration: 'none';
`

const Header = ({ siteTitle }) => (
  <Root>
    <Container>
      <img src={gatsbyMyLogo} alt="" />
      <h1 style={{ margin: 0 }}>
        <StyledLink to="/">{siteTitle}</StyledLink>
      </h1>
    </Container>
  </Root>
)

export default Header
