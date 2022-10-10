import React from 'react'
import { useContext } from 'react'
import { context } from './Context'

const Component3 = () => {
    const user = useContext(context)
  return (
    <>
    <div>
        <h1>Component3</h1>
        <h1>{user}</h1>
    </div>
    </>
  )
}

export default Component3