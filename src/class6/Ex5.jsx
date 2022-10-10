import React from 'react'
import { useState } from 'react'
import Form from './Form'

const Ex5 = () => {
    const [data, setData] = useState({
        username : '',
        email : '',
        password : ''
    })
    const [error , setError] = useState({
        usernameErr : '',
        emailSrr : '',
        passwordErr : ''
    })

  return(
    <Form setData={setData} setError={setError} data={data} error={error} />
  )
}

export default Ex5