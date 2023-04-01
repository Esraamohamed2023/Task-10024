import React from 'react'
import"./About.css"
import{GiCheckMark}from"react-icons/gi"
export default function About({title}) {
  return (
    <div className='aboutfun'>
    <div className="mix">
      <GiCheckMark className='mixicon' />
      <p>{title}</p>
    </div>
    </div>
  )
}
