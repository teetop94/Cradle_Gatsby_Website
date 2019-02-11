import React from 'react'
import { Link } from "gatsby"

const Menu = () => (
    <div style={{
        background: '#213355',
        paddingTop: '10px'
    }}>

    <ul style = {{
        listStyle: 'none',
        display: 'flex',
        justifyContent: 'space-evenly'
    }}>
        <l1><Link to="/">Home</Link></l1>
        <l1><Link to="/about">About Us</Link></l1>
        <l1><Link to="/software">Software</Link></l1>
        <l1><Link to="/service">Oil & Gas Services</Link></l1>
        <li><Link to="/training">Training</Link></li>
        <li><Link to="/consulting">Consulting</Link></li>
    </ul>

      
    </div>
  )

  export default Menu

