import React from 'react'


import {skills} from '../../data'

export const Skills = () => {
  return (
    <section className="bg-tertiary py-12">
            <div className="container mx-auto">
                <div>
                    {skills.map((item,index) =>{
                        return <div>
                            <img src={item.image} alt="skill" />
                        </div>
                    })}
                </div>
            </div>
    </section>
  )
}

