import React, {Component} from 'react'

class AnnoyingForm extends Component{
    handleKeyUp(evt){
        
        if(evt.keyCode === 56){
            alert("Yasss I love PIZZA")
        }
        else{
            alert("NO YASS MAN")
        }
    }
    render(){
        return(
            <div>

                <h3> Try typing In Here: </h3>
                <textarea onKeyUp ={this.handleKeyUp} /> 
            </div>
        )
    }
}

export default AnnoyingForm; 