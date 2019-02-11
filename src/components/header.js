import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "../images/Cradle-Solution_logo.png"




const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `white`,
      marginBottom: `0`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: '100%',
        padding: `1.45rem 1.0875rem`,
      }}
    >
      
        <Link
          to="/"
          style={{
            color: `black`,
            textDecoration: `none`,
          }}
        >
          <img src={Logo} alt="" style={{width: `350px`, height: `75px`}}/> 
        </Link>
        
       
     
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
