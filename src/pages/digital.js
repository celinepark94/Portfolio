import React from 'react'
import { Link } from 'gatsby'


import '../components/section.css'
import '../components/globalStyle.css'


import Header from '../components/header'
import ProjectCard from '../components/projectCard.js'
import Test from '../components/test'

const DigitalSection = () => (
  <div className= "DigitalSectionGroup">

    <Header />

    <div className="section">

      <div className= "sectionText">
        <h2 className="sectionTitle">DIGITAL DESIGN</h2>
        <div className="sectionBody">
          <p>
            Lorem ipsum dolor amet microdosing vape etsy jean shorts mumblecore man bun gastropub sartorial. Raw denim kitsch church-key neutra typewriter stumptown you probably haven't heard of them trust fund vape YOLO. Truffaut neutra art party waistcoat helvetica biodiesel 90's hot chicken. Man bun artisan biodiesel microdosing enamel pin. Swag edison bulb banh mi meh master cleanse butcher cronut chillwave, put a bird on it hoodie.
            <br></br>
            <br></br>
            Narwhal thundercats neutra williamsburg mustache vexillologist austin drinking vinegar iceland squid food truck mlkshk. Meh slow-carb intelligentsia truffaut try-hard bespoke cardigan godard fingerstache pork belly vape vice plaid.
          </p>
        </div>
      </div>

      <div className= "SectionImages">

        <Link to= "../productPages/infura">
          <ProjectCard
            Icon={require('../img/projectInfura.svg')}
            Name="INFURA"
            Text="a developer dashboard for decentralized apps"
          />
        </Link>

        <Link to= "../productPages/metamask">
          <ProjectCard
            Icon={require('../img/projectMetaMask.svg')}
            Name="METAMASK"
            Text="transactions on ethereum"
          />
        </Link>

        <ProjectCard
          Icon={require('../img/projectLiquality.png')}
          Name="LIQUALITY"
          Text="peer to peer atomic swaps"
        />
        <ProjectCard
          Icon={require('../img/projectInfura.svg')}
          Name="ETHEREUM MAP"
          Text="a comprehensive view of the blockchain"
        />
        <ProjectCard
          Icon={require('../img/projectLocalties.png')}
          Name="LOCALTIES"
          Text="app to boost local economies"
        />
        <ProjectCard
          Icon={require('../img/projectGraphics.svg')}
          Name="GRAPHICS"
          Text="t-shirts, brand designs, and other pretty things"
        />

      </div>



    </div>

  </div>
)

export default DigitalSection
