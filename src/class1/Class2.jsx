import React from 'react'

const Class2 = () => {
    const array = []
    function maths(num1 , num2){
      const array = []
      const add = num1 + num2 
      const sub = num1 - num2 
      const mul = num1 * num2 
      const div = num1 / num2 
      array.push(add , sub , mul, div)
      console.log(array);
    }
    maths(5 , 10)
  return (
    <div></div>
  )
}

export default Class2