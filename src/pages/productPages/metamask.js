import React from 'react'
import { Link } from 'gatsby'

import '../../components/globalStyle.css'
import '../../components/product.css'

import Header from '../../components/header'


const productInfura = () => (
  <div className= "productMetamaskGroup">

    <Header />

    <div className="product">

      <div className="productText">

        <h2> METAMASK: A DIFFERENT KIND OF TRANSACTION </h2>

        <br></br>
        GOAL :
        <br></br>
        <b>Build an app that is intuitve and educational, without the user ever feeling confused by an unfamiliar technology. </b>
        <br></br>
        <br></br>
        <p> Metamask is currently the most popular ethereum wallet. It provides an interface for users to send and recieve crypto, like Ether or other tokens, on the Ethereum Blockchain.
        <br></br>
        <br></br>
        Many users will try ethereum for the first time with Metamask. Cash or credit card transactions are straightforward, and most people have engaged in them countless times. However, ethereum transactions are a bit different.
        <br></br>
        <br></br>
        For example, everytime crypto-assets are sent, a "gas fee" needs to be chosen and attached. It's something like a postage stamp for the transaction that not only ensures the transaction is processed, but also effects how quickly it is verified.
        <br></br>
        <br></br>
        While the explation is a bit complicated, for now lets say that these new and unfamiliar  situations are necessary to create a more secure and decentralized blockchain.
        </p>

        <p><Link to= "/digital/"> Back </Link></p>

      </div>

      <div className="productImg">

        <img src={require('../../img/projectDinner.jpg')} />

      </div>

    </div>
  </div>

      )

export default productInfura
