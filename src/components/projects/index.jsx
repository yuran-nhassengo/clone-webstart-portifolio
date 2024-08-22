import React, { useState } from 'react'


import {projectsData} from "../../data"
import {projectsNav} from "../../data"

export const Projects = () => {

    const [item,setItem] = useState({name:"all"});
    const [projects,setProjects] =useState([]);
    const [active,setActive] = useState(0);

  return (
    <div>
      <nav>
        <ul>

            {projectsNav.map((item,index) => {
                return <li>{item.name}</li>
            })}
            
        </ul>
      </nav>
    </div>
  )
}


