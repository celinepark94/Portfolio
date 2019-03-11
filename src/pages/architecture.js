import React from 'react'
import { Link } from 'gatsby'


import '../components/section.css'
import '../components/globalStyle.css'


import Header from '../components/header'
import ProjectCard from '../components/projectCard.js'

const ArchitectureSection = () => (
  <div className= "ArchitectureSectionGroup">

    <Header />


    <div className="section">

      <div className= "sectionText">
        <h2 className="sectionTitle">ARCHITECTURAL DESIGN</h2>
        <div className="sectionBody">
          <p>
            I went to the Cooper Union for a degree in Architecture. These are some projects I did while I was still in school. As an architect, I was looking for the emotional connection between people and thier spaces. I thought of a building as a series of experiences that not only allowed people to do what they needed to do, but would define thier behaivor. 
          </p>
        </div>
      </div>

      <div className= "SectionImages">
        <ProjectCard
          Background={require('../img/projectDinner.jpg')}
          Name="DINNER PARTIES"
          Text="a study on the spaces in which we eat"
        />

        <ProjectCard
          Background={require('../img/projectArt.jpg')}
          Name="THE ART SPACE"
          Text="bridging a severed community"
        />
        <ProjectCard
          Background={require('../img/projectPlayhouse.jpg')}
          Name="THE PLAYHOUSE"
          Text="a small house for children"
        />

      </div>



    </div>

  </div>
)

export default ArchitectureSection
