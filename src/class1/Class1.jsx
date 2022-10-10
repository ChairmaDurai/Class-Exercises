import React, { useState } from 'react'

const Class1 = () => {
    const [value, setValue] = useState("")
    const handleChange = (e)=>{
        setValue(e.target.value);
    }
    
    // const [add, sub , mul, div] = maths(15 ,5)
    // console.log(add, sub , mul, div);
  return (
    <div>
        Input
        <input type="text" onChange={handleChange}  />
        <input type="submit"  value="Submit" disabled={value == "" ? true : false} />
    </div>
  )
}

export default Class1