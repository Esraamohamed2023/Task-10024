import React, { Fragment, useState } from 'react'
import{BsTelephoneFill}from"react-icons/bs"
import{AiOutlineMail}from"react-icons/ai"
import Contactfun from './Contactfun'
import { contactdata } from './Contactdata'
import Validation from './Validation'

export default function Contactus() {
  const[values,setvalues]=useState(
    {name:"",
  email:"",
number:""})
function handleinput(event){
  const newobject={...values,[event.target.name]:event.target.name}
  setvalues(newobject)
}
const [errors,seterrors]=useState({})
function handelvalidation(event){
  event.preventDefault();
  seterrors(Validation(values))
}
  return (
    <Fragment>
    
    <div className="container">
    <section className="contactmap">
    {contactdata.map((ele)=>{
    return(<Contactfun id={ele.id} name={ele.name}
    icon={ele.icon}
     tel1={ele.tel1}
     tel2={ele.tel2}/>)
    }
     )
    }
    </section>
    <section  className="form">
<h2>GET IN TOUCH</h2>
     <form action='path.html' method='post'onSubmit={handelvalidation} >
<input type={"text"}   name="username"  placeholder='FULLNAME'  onChange={handleinput}/>
{errors.name&&<p style={{color:"white"}}>{errors.name}</p>}
<input type={"text"}   name="the text"  placeholder='EMAIL' onChange={handleinput}/>
{errors.email&&<p style={{color:"white"}}>{errors.email}</p>}
<input type={"text"}   name="the text"  placeholder='PASSWORD' onChange={handleinput}/>
{errors.password&&<p style={{color:"white"}}>{errors.password}</p>}
<input type={"text"}   name="the text"  placeholder='ENTER YOUR MESSAGE'/>

    <input type={'submit'} value= "SEND MESSAGE" />
    
     </form> 
     </section>
    </div>
    
    </Fragment>
  )
}
