import React from 'react'

export const Project = ({item}) => {
  return (
    <div key={item.id} className="flex flex-col items-center text-center">
        <div className="mb-8">
            <img src={item.image} alt="projectImage" />
        </div>
       
    </div>
  )
}


