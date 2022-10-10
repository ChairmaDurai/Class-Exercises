import React, { useState } from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import { Container, Form } from 'react-bootstrap'

const ReRender = () => {
    const [value, setValue] = useState('')
    const [count , setCount] = useState(0)
    const pre = useRef()
    useEffect(()=>{
        pre.current = value
    }, [value])
  return (
      <Container fluid style={{height: "100vh", width: "100vw", display : "flex", flexDirection : "column", alignItems: "flex-start", justifyContent : "center", gap: "20px", padding: "0px 55px" } }>
      <div>Re Render</div>
    <Form.Control  style={{height : "30px",width : "25%" }} type="text" name="" id="" value={value} placeholder="Type Something..." onChange={(e)=>{
        setValue(e.target.value);
        setCount(count + 1);
    }} />
    <h1 style={{display: 'flex', textAlign: 'start', width : "50%"}}>Current Value  {value}</h1>
    <h1 style={{display: 'flex', textAlign: 'start', width : "50%"}}>Pre Value  {pre.current}</h1>
    <h1 style={{display: 'flex', textAlign: 'start', width : "50%"}}>ReRendered   {count} Times</h1>
   </Container>
  )
}

export default ReRender