import React from 'react'


import {brands} from '../../data'

export const Brands = () => {
  return (
     <section className="min-h-[146px]
    bg-tertiary flex items-center">
        <div className="container mx-auto flex md:justify-between items-center 
        flex-wrap justify-evenly ">
            {brands.map((brand, index) => {
                return <div key={index}>
                    <img src={brand.img} alt="imagens" />
                </div>
            })}
        </div>
    </section>
  )
}


