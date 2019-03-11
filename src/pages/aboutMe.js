import React from 'react'
import { Link } from 'gatsby'

import '../components/globalStyle.css'
import '../components/aboutMe.css'

import Header from '../components/header.js'

const AboutMe = () => (
  <div className= "aboutMeGroup">

    <Header/>

    <div className="aboutMeContent">

      <div className="contactLinks">
        <img src={require('../img/link.png')} className="linkImg" />

        <p> Email </p>
        <p> LinkdIn </p>
        <p> Dribble </p>
        <p> Medium </p>
        <p> Resume </p>
      </div>

      <div className="aboutMeText">
        <h2> WHO IS ME? </h2>
        <p>
          I am a product designer who loves to makes things. I believe in designs that are born of iterative processes. Design thinking, and design research. I am a generalist, with a little bit of experience in research, visual, and product design.
          <br></br>
          <br></br>
          The user is the most important part of any project. When working on a product, it is imperitive to constantly check in with our users through research, and stay aligned as a team through design thinking. Between user imput and team direction, the product emerges as a product of iterative design.
          <br></br>
          <br></br>
          Im still learning, but I love doing this, and I can't wait to keep moving forward.
        </p>
      </div>

    </div>

  </div>
)

export default AboutMe
