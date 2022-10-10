import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import {Button, Form} from 'react-bootstrap'

const ApiCall = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        axios.get('http://localhost:3000/users').then((res) => {
            setData(res.data);
        }).catch(err => alert(err))
    }, [loading])
    const [values, setValues] = useState({
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setValues((state) => ({
            ...state,
            [name]: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:3000/users/', values).then((res) => {
            setLoading(!loading)
        }).catch(err => { console.log(err) })
    }
    return (
        <div style={{ display: "flex" }}>
            <form style={{ display: "flex", flexDirection: "column", alignItems: 'flex-start', padding: "50px 55px", gap: "30px", flex: '1' }} onSubmit={handleSubmit}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '25px', width: "100%" }}>
                    <label htmlFor="email">Email</label>
                    <Form.Control className='w-50' type="email" id='email' name='email' onChange={handleChange} placeholder='Email' />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '25px', width: "100%"  }}>
                    <label htmlFor="password">Password</label>
                    <Form.Control className='w-50' type="password" name='password' id="password" onChange={handleChange} placeholder='Password' />
                </div>
                <Button>Submit</Button>
            </form>
            <div style={{ flex: '1', textAlign: '' }}>
                <h1>Users</h1>
                {
                    data && data.map((item) => {
                        return (
                            <div key={item.id}>
                                    {item.email}
                                    <Button onClick={() => {
                                        axios.delete(`http://localhost:3000/users/${item.id}`).then(res => setLoading(!loading)).catch(err => alert(err))
                                    }}>Delete</Button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ApiCall