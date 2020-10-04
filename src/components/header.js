import PropTypes from "prop-types"
import React from "react"
import { NavLink, Flex } from 'theme-ui'
import Logo from '../images/southern-tire-masters-logo.jpg'

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#fff`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
  <img src={Logo} alt="Southern Tire Masters logo" width="150" height="150"/>
  <Flex as='nav'>
      <NavLink href='/' p={2}>
        Home
      </NavLink>
      <NavLink href='/tires' p={2}>
        Tires
      </NavLink>
      <NavLink href='/wheels' p={2}>
        Wheels
      </NavLink>
      <NavLink href='/services' p={2}>
        Services
      </NavLink>
      <NavLink href='/financing' p={2}>
        Financing
      </NavLink>
      <NavLink href='/contact' p={2}>
        Contact
      </NavLink>
    </Flex>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
