import React from 'react'
import { Link } from 'gatsby'

import '../components/projectCard.css'

const ProjectCard = props => (
  <div className="projectCardGroup">

    <img className="background" src={props.Background} />

    <div className="projectCardContent">

      <img className="icon" src={props.Icon} />
      <h2>{props.Name}</h2>
      <p>{props.Text}</p>

    </div>

  </div>

)

export default ProjectCard
