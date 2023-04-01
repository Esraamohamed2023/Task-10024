import React from 'react'

export default function Validation(values) {
  const errors={}
  const email_pattern=/^[^/s@+@[^\s@]+\.[^\s@]{2,6}$/;
  const password_pattern=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;
  if(values.name===""){
    errors.name="Name is Required"
  }
  if(values.email===""){
    errors.email="Email is Required"
  }
  else if(!email_pattern.test(values.email))
  {errors.email="Email is not Correct"}


if(values.password_pattern==="")
{errors.password="Password  Required"}
else if(!password_pattern.test(values.password))
  {errors.password="Password is not Correct"}
  return errors
}