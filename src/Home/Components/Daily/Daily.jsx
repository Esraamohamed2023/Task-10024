import React from 'react'
import"./Daily.css"
import title from"../../../Images/title.png"
import Posts from '../../../Components/Posts/Posts'
import { Postsdata } from '../../../Components/Posts/Postsdata'

export default function Daily() {
  return (
    <div className='daily'>
    
    <div className="head">
      
      <div className="image">
      <img src={title} alt="not found"/>
      <h2>DAILY POSTS</h2>
      </div>
      
    </div>
    <div className="posttag" data-aos="fade-down">
    {Postsdata.map((ele)=>{
        return(<Posts key={ele.id} img={ele.img}/>)
    })}
    </div>
    </div>
    
  )
}
