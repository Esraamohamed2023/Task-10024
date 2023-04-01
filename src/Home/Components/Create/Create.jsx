import React from 'react'
import"./Create.css"
export default function Create() {
  return (
    <div id="create" data-aos="fade-down">
    <div className="contain">
          <form action='path' method='post'>
          <caption>Registration</caption>
          <div className="name">
          <label>First Name</label>
          <input  type="text" name="firstname" required checked />
          </div>
          
          <div className="name">
          <label>Last Name</label>
          <input  type="text" name="firstname" required />
          </div>
          <div className="name">
          <label>Address</label>
          <input  type="text" name="address" required/>
          </div>
          <div className="name">
          <label>Phone Number</label>
          <input  type="number" name="number" required/>
          </div>
          <div className="button">
          <input type="submit" value="Create"/>
          <input type="submit" value="Cancel"/>
          </div>
          </form>
        </div>
        </div>
  )
}
