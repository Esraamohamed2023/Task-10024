import React from 'react'
import {AiTwotoneStar}from"react-icons/ai"
import product from"../../Images/product.png"
import"./menue.css"
export default function Menuefun({img}) {
  return (
    <div className='menuefun'>
      <img src={img} alt="not found"/>
  <div className="stars">
  <AiTwotoneStar/>
  <AiTwotoneStar/>
  <AiTwotoneStar/>
  <AiTwotoneStar/>
  <AiTwotoneStar/>
  </div>
  <h4>cheese hamburger</h4>
  <div className='small'><small>$99.99</small></div>
  <button id='btn'>ORDER NOW</button>
    </div>
  )
}
