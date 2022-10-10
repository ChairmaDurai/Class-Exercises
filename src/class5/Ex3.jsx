import React, { Component } from "react";



class Ex3 extends Component {
    state = {
        count: 0
    };
    render() {
        return (
            <div className='d-flex flex-column w-100 justify-content-center align-items-center'>
                {this.state.count}
                <div className="w-100 d-flex h-100 align-items-center justify-content-center gap-2">
                    <button className="bg-danger text-white  fw-bolder rounded p-2 " onClick={() => {
                        if (this.state.count === 0) {
                            this.setState({count : this.state.count +1});
                        }
                    }}>Like</button>
                    <button className="bg-danger text-white  fw-bolder rounded p-2 " onClick={() => {
                        if (this.state.count === 1) {
                            this.setState({count : this.state.count - 1})
                        }
                    }} >Dis Like</button>
                </div>
            </div>
        )
    }
}



export default Ex3




