import React from 'react'


import {skills} from '../../data'

export const Skills = () => {
  return (
    <section className="bg-tertiary py-12">
            <div className="container mx-auto">
                <div className="grid grid-cols-8 md:grid-flow-row">
                    {skills.map((item,index) =>{
                        return (
                            <div className="flex items-center justify-center" key={index}>
                                <img src={item.image} alt="skill" />
                            </div>
                            );
                    })}
                </div>
            </div>
    </section>
  )
}

