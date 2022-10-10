import React, { useState } from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import {Form} from 'react-bootstrap'
const Ref = () => {
    const [value, setValue] = useState('')
    const pre = useRef()
    console.log("Helo");
    useEffect(()=>{
        pre.current = value
    }, [value])
  return (
    <form>
    <div>Ref</div>
    <Form.Control type="text" placeholder='Type Something...' style={{width : "30%"}} name="" id="" value={value} onChange={(e)=>{
        setValue(e.target.value)
    }} />
    <h1>Current Vlaue   {value}</h1>
    <h1>Pre Value   {pre.current}</h1>
    </form>

  )
}

export default Ref