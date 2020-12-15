import React, {Component} from 'react';

class Button extends Component {
    render(){
        return(
            <button onClick = {function(){
                alert("CLicked");
            }}> CLick me</button>
        )
    }
}

export default Button; 
