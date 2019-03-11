import React from 'react'
import { Link } from 'gatsby'

import '/Users/celine/Desktop/Github/Portfolio/src/components/globalStyle.css'
import '/Users/celine/Desktop/Github/Portfolio/src/components/product.css'

import Header from '/Users/celine/Desktop/Github/Portfolio/src/components/header'


const productInfura = () => (
  <div className= "productInfuraGroup">

    <Header />

    <div className="product">

      <div className="productText">

        <h2> INFURA: DEVELOPER DASHBOARD </h2>
        <p>
          GOAL :
          <br></br>
          <b>Create a dashboard to help developers track thier appliation metrics, and use that information to help them write more efficient, less expensive code.</b>
          <br></br>
          <br></br>
          Infura provides a critical layer of infrastructure for the Ethereum Blockchain. It spins up nodes that developers can connect to and access the blockchain database.
          <br></br>
          <br></br>
          On Ethereum, and other decentralized blockchains, it is important that all data stored is as small and efficient as possible to prevent bloat. In order to reinforce this, all code stored and executed needs to be paid for in Ether.
          <br></br>
          <br></br>

          <br></br>
          <br></br>
          While the explation is a bit complicated, for now lets say that these new and unfamiliar  situations are necessary to create a more secure and decentralized blockchain.
        </p>

        <p><Link to= "/digital/"> Back </Link></p>


          </div>

          <div className="productImg">

            <img src={require('/Users/celine/Desktop/Github/Portfolio/src/img/projectDinner.jpg')} />

      </div>

    </div>
  </div>

      )

export default productInfura
