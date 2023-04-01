import React from 'react'
import"./Footer.css"
import{FaFacebookF,FaTwitter}from"react-icons/fa"
import{SiGmail}from"react-icons/si"
import{ImLocation}from"react-icons/im"
export default function Footer() {
  return (
    <div id="footer">
    <div className="cont">
      <a href='#'><FaFacebookF/></a>
      <a href='#'><FaTwitter/></a>
      <a href='#'><SiGmail/></a>
      <a href='#'><ImLocation/></a>
      
      </div>
      <p>Created By Esraa </p>
      <br></br>
      <h6> &copy 2023 Allright Reserved</h6>
    </div>
  )
}
