import React from 'react'
// import img from"../../Images/product3.png"
import "./Posts.css"
export default function Posts({img}) {
  return (
    <div id="posts">
      <img src={img}/>
      <h4>BLOG TITLE GOES HERRE</h4>
      <p>Lorem ipsum dolor sit amet consectetureos dictaconsequatur ullam, eum, enim earum tempore. Eius, soluta.</p>
      <button id='btn'>READ MORE</button>
    </div>
  )
}
