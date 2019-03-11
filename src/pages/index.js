import React from 'react'
import { Link } from 'gatsby'

import '../components/globalStyle.css'
import Header from '../components/header'
import Image from '../components/image'


const Home = () => (
  <div className="homeGroup">

  <Header />
    <div className="body">

      <div className="intro">
        <p>I’m a UX designer but once upon a time I studied, and loved, architecture.
          <br></br>
        I like to make things and here are some of the things I made.</p>
      </div>

      <div className="contentLinks">

        <div className="architectureLink">
          {/* image here */}
          <Link to="/architecture/">Physical Space</Link>
          <p>like where you're siting right now</p>
        </div>

        <div className="digitalLink">
          {/* image here */}
          <Link to="/digital/">White Space</Link>
          <p>like on this screen you're looking at</p>
        </div>

        <div className="writingLink">
          {/* image here */}
          <Link to="/writing/">Space Bar</Link>
          <p>like the one on your keyboard</p>
        </div>

      </div>

      <div className="contactLink">
        {/* little arrow icon here */}
        <Link to="/contact/">My Personal Space</Link>
        <p> come invade it why don't you?</p>
      </div>

    </div>

  </div>

)

export default Home
