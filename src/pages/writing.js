import React from 'react'
import { Link } from 'gatsby'

import '../components/globalStyle.css'
import Header from '../components/header'

const SecondPage = () => (
  <div className= "SecondPageGroup">

    <Header />

    <p>Welcome to writing</p>
    <Link to="/">Go back home</Link>

  </div>
)

export default SecondPage
