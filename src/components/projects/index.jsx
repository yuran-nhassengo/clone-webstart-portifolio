import React, { useEffect, useState } from 'react'


import {projectsData} from "../../data"
import {projectsNav} from "../../data"
import { Project } from './project';

export const Projects = () => {

    const [item,setItem] = useState({name:"all"});
    const [projects,setProjects] =useState([]);
    const [active,setActive] = useState(0);

    useEffect(()=>{
        if(item.name == "all"){
            setProjects(projectsData);
        }else{
            const newProject = projectsData.filter((project)=> {return project.category.toLowerCase()
        === item.name;
            });
            setProjects(newProject);
        }
    },[item]);

    const handleClick = (e,index) =>{
        setItem({name: e.target.textContent.toLowerCase()});
        setActive(index);
    }

  return (
    <div>
      <nav className="mb-12 max-w-xl mx-auto">
        <ul className="flex flex-col md:flex-row
        justify-evenly items-center text-white">

            {projectsNav.map((item,index) => {
                return <li onClick={(e) => {
                    handleClick(e,index);
                }}
                className={`${active === index ? "active" : ""} cursor-pointer
                capitalize m-4`}
                 key={index}>{item.name}</li>
            })}
            
        </ul>
      </nav>
       <section>
        {projects.map((item)=>{
            return <Project item={item} key={item.id}/>
        })}
       </section>
    </div>
  )
}


