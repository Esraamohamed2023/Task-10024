import React from 'react'
import "./Landing.css"
import "../../../Components/Menue/menue.css"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import product1 from "../../../Images/product1.png"
import product2 from "../../../Images/product2.png"
import product from "../../../Images/product.png"
import product4 from "../../../Images/product4.png"
import title from'../../../Images/title.png'
import About from '../../../Components/About/About';
import { Aboutdata } from '../../../Components/About/Aboutdata';
import Daily from '../Daily/Daily';

export default function Landing() {
  return (
    <div id='Allpart'>
    <div className="elements">
    <div className='slider'>
    <Swiper  
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="myswiper"
   >
        <SwiperSlide><img src={product1} /></SwiperSlide>
        <SwiperSlide><img src={product2}/></SwiperSlide>
        <SwiperSlide><img src={product}/></SwiperSlide>
        <SwiperSlide><img src={product4}/></SwiperSlide>
        
      </Swiper>

    
      </div>
      <div className="about" id="About">
      <div className="head">
      
      <div className="image">
      <img src={title} alt="not found"/>
      <h2>ABOUT</h2>
     
      
      </div>
      </div>
     
      <div className="twopart">
      <div className="img">
      <img src={product} alt="not found"/>
      </div>
      <div className="text">
      <h3>STEP INTO BURGER HEAVEN</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi doloribus exercitationem delectus quae velit, id ea mollitia eos porro, numquam dolore sapiente. Ut rerum animi iusto fuga minus cum atque?</p>
      <div className="aboutmap">
      {Aboutdata.map((ele)=>{return (<About key={ele.id}
        title={ele.title}/>)})}
        </div>
      <button id="btn">READ MORE</button>
      </div>
      </div>
      </div>
      <div className="dailyposts">
      <Daily/>
      </div>
    </div>
    </div>
    
  )
}
