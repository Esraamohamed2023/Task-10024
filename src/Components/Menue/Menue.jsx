import React from 'react'
import"./menue.css"
import Head from '../../Home/Components/Header/Header'
import title from'../../Images/title.png'
import Menuefun from './Menuefun'
import { data } from './Menuedata'

export default function Menue() {
  return (
    <div id='All_section' >
    
      <div className="container_elements">
     
      <div className="head">
      <div className="image">
      <img src={title} alt="not found"/>
      <h2>OUR MENUE</h2>
     
      </div>
     
      </div>
      <div className='menue_list' >
     {data.map((ele)=>{return(<Menuefun key={ele.id} img={ele.img}/>)})}
      </div>
    </div>
    </div>
    
  )
}
