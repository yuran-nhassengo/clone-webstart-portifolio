import React from 'react'


import Image from '../../assets/img/about.webp'


export const About = () => {
  return (
    <section className="section bg-secondary">
        <div className="container mx-auto">
            <div className="flex flex-col xl:flex-row gap-24">
                <img className="object-cover h-full w-[566px] md:mx-auto lg:mx-0
                rounded-2xl" src={Image} alt="imagem" />
            </div>
        </div>
    </section>
  )
}


