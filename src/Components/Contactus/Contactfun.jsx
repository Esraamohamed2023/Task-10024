import React from 'react'
import"./Contactus.css"

export default function Contactfun({icon,name,tel1,tel2}) {
  return (
    <div>
    <div className='contact'>
    <div className="icon">{icon}
    </div>
    <h5>{name}</h5>
    
    <div>{tel1}</div>
    <div>{tel2}</div>
    </div>
    </div>
  )
}
