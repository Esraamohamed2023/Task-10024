import React, { useState } from 'react'
import"./Header.css"
import "../../../index.css"
import headerlogo from"../../../Images/headerlogo.jpg"
import {AiTwotoneHeart}from"react-icons/ai"
import {BsTelephoneOutboundFill}from"react-icons/bs"
import  {FaUserAlt,FaBars} from"react-icons/fa"
import { Link, NavLink } from 'react-router-dom'

export default function Head() {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
     
      setIsActive(current => !current);
  }
  return (
    <div id='header'>
    
    <div className='container_elements'>
    <div className='image'>
<img src={headerlogo} alt="Not found"/>
</div>


    <ul>
 
    <li> <NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/menue">Menue</NavLink></li>
    <li><a href='#About'>About </a></li>
    
    
    
    <li><NavLink to="/contact us">Contact </NavLink></li>
    </ul>
    <span  className='header_icons'>
    <AiTwotoneHeart className='icon' title="Love" style={{fontSize:"25px",color:isActive?"red":""}} onClick={handleClick} />
    
    <a href="tel:005678"><BsTelephoneOutboundFill className='icon' title="Call Us"/> </a>
    
    <a href="#" title="Registration"> <NavLink to="/create"><FaUserAlt className='icon'/></NavLink></a>
  
    </span>
    </div>
    </div>
      
    
  )
}
