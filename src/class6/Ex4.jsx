import React, { Component } from 'react'



class Ex4 extends Component {
    state = {
        text: ""
    };
   
    render() {
        return (
            <div className='h-100 w-100 d-flex align-items-center flex-column gap-2 justify-content-center'>
                <h2>Disabled Button</h2>
                <form className='d-flex flex-column gap-5' onSubmit={(e) => {
                    e.preventDefault();
                        alert(this.state.text)
                }}>
                    <label htmlFor="">Type Something unlock Button</label>
                    <input placeholder='Type Something'  type="text" name="" id="" value={this.state.text} minLength={8} onChange={(e) => {
                        this.setState({ text: e.target.value })
                    }} />
                    <button className={this.state.text.length < 8 ? " p-2 rounded   " : 'bg-danger text-white p-2 rounded'} disabled={this.state.text.length < 8 ? true : false }>Submit</button>
                </form>
            </div>
        )
    }


}


export default Ex4