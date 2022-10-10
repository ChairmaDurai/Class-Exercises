import React from 'react'
import "./class6.css"

const FormInput = (props) => {
  return (
    <div className='formInput'>
        <label htmlFor={props.id}>{props.label}</label>
        <input  ref={props.refer} type={props.type} {...props}  />
    </div>
  )
}

export default FormInput