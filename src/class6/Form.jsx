import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import "./class6.css"
import FormInput from './FormInput'

const Form = () => {
    const [valid, setValid] = useState(false)
    const usernameRef = useRef()
    const passRef = useRef()
    const emailRef = useRef()

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(usernameRef.current.value, emailRef.current.value, passRef.current.value);
    }
    return (
        <>
        <div className='app d-flex flex-column gap-2'>
            <h2 className='text-center '>Ref Form</h2>
            <form onSubmit={handleSubmit}   >
                <FormInput type="text" name='username' id='username' minLength={8} refer={usernameRef} label={"Username"} required placeholder={"Username"} />
                <FormInput  type="email" name='email' id='email' required refer={emailRef} label={"Email"} placeholder={"Email"} />
                <FormInput minLength={8} name='password' id='password' required type='password' refer={passRef} label={"Password"} placeholder={"Password"} />
                <button className='bg-danger p-2 text-white rounded fw-bolder'>Submit</button>
            </form>
        </div>
        </>

    )
}

export default Form