import React from 'react'
import { Link } from 'react-router-dom'

const Exercises = () => {
  return (
    <div className='d-flex h-100 justify-content-center align-items-center  gap-5' >
        <Link style={{
            height : "30px", cursor: "pointer", padding: "5px",  display:"flex", alignItems : "center",  backgroundColor : "red" , color : "white", fontWeight : "bolder",fontSize : "large", borderRadius : "5px" 
        }} to="/exercise_1">
            Exercise 1
        </Link>
        <Link style={{
            height : "30px", cursor: "pointer", padding: "5px",  display:"flex", alignItems : "center",  backgroundColor : "red" , color : "white", fontWeight : "bolder",fontSize : "large", borderRadius : "5px" 
        }} to="/exercise_2">
            Exercise 2
        </Link>
        <Link style={{
            height : "30px", cursor: "pointer", padding: "5px",  display:"flex", alignItems : "center",  backgroundColor : "red" , color : "white", fontWeight : "bolder",fontSize : "large", borderRadius : "5px" 
        }} to="/exercise_3">
            Exercise 3
        </Link>
        <Link style={{
            height : "30px", cursor: "pointer", padding: "5px",  display:"flex", alignItems : "center",  backgroundColor : "red" , color : "white", fontWeight : "bolder",fontSize : "large", borderRadius : "5px" 
        }} to="/exercise_4">
            Exercise 4
        </Link>
        <Link style={{
            height : "30px", cursor: "pointer", padding: "5px",  display:"flex", alignItems : "center",  backgroundColor : "red" , color : "white", fontWeight : "bolder",fontSize : "large", borderRadius : "5px" 
        }} to="/exercise_5">
            Exercise 5
        </Link>
        <Link style={{
            height : "30px", cursor: "pointer", padding: "5px",  display:"flex", alignItems : "center",  backgroundColor : "red" , color : "white", fontWeight : "bolder",fontSize : "large", borderRadius : "5px" 
        }} to="/exercise_6">
            Exercise 6
        </Link>
        <Link style={{
            height : "30px", cursor: "pointer", padding: "5px",  display:"flex", alignItems : "center",  backgroundColor : "red" , color : "white", fontWeight : "bolder",fontSize : "large", borderRadius : "5px" 
        }} to="/exercise_7">
            Exercise 7
        </Link>
        <Link style={{
            height : "30px", cursor: "pointer", padding: "5px",  display:"flex", alignItems : "center",  backgroundColor : "red" , color : "white", fontWeight : "bolder",fontSize : "large", borderRadius : "5px" 
        }} to="/exercise_8">
            Exercise 8
        </Link>
        <Link style={{
            height : "30px", cursor: "pointer", padding: "5px",  display:"flex", alignItems : "center",  backgroundColor : "red" , color : "white", fontWeight : "bolder",fontSize : "large", borderRadius : "5px" 
        }} to="/exercise_9">
            Exercise 9
        </Link>
    </div>
  )
}

export default Exercises