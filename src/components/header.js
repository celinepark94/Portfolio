import React from 'react'
import { Link } from 'gatsby'
import '../components/header.css'

const Header = ({ siteTitle }) => (

  <div className="header">
    <div className= "nameAndContact">
      <div id="name">
        <h1>
          <Link to= "../">CELINE  PARK</Link>
        </h1>
      </div>

      <div id="contact">
        <p>
          hmu:<Link to= "mailto:thisiscelinepark@gmail.com"> <span id= "headerEmail"> thisiscelinepark@gmail.com</span></Link>
        </p>
      </div>
    </div>

    <div className="nav">

        <h2>\\<Link to="/digital/">PRODUCT DESIGN</Link></h2>
        <h2>\\<Link to="/architecture/">ARCHITECTURE</Link></h2>
        <h2>\\<Link to="/aboutMe/">ABOUT ME</Link></h2>

    </div>

  </div>

)

export default Header
