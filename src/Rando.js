

import React, { Component } from 'react';


class Rando extends Component{
    constructor(props){
        super(props)
        this.state ={num: 0};
        this.makeTimer()
    }
    makeTimer(){
        setInterval(() => {
            let rand= Math.floor(Math.random() * this.props.maxNum);
          this.setState({num :rand})  
        }, 1000);
    }
    
    render(){
        return <h1>{this.state.num}</h1>
    }

}
// the setState in the setInterval function is updating the state since I put the original number set to 0 this updates the state of num: 0 
//this.setState num : rand is reassigning the new state to num so the set interval function works. 
export default Rando; 