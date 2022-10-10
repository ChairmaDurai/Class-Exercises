import React from 'react'
import Educated from '../educated.svg'
import { Container, Form, Button } from 'react-bootstrap'
// import '../class1/style.css'
const Body = () => {
    return (
        <Container fluid className='d-flex flex-lg-row flex-column mt-5 justify-content-between w-100 h-100 align-items-center'>
            <div className=''>
                <img src={Educated} alt="" className='w-100' />
            </div>
            <Form  className=' w-100 d-flex mb-5 flex-column justify-content-center align-items-center'>
                <h3 className='mt-5'>Login</h3>
                <Form.Group className="mb-3 mt-5 w-50" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
            
                </Form.Group>

                <Form.Group className="mb-3 w-50" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3 w-50" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button className='w-25' variant="dark" bg='secondary' type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    )
}

export default Body