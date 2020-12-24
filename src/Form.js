import React, { Component } from "react";


class Form extends Component {
// in a form that requires an input that is a state type of thing since name input will vary you need a constructor and put state in there. 
constructor(props){
    super(props);
    this.state = {username: ''}; 
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this); 
}
/// you need a handle change for the onChange event of the input value. here it is below. 
//Basically it retrieves value of whatever input it was called on.
//In this case, it’s your input element so whatever you insert in your
//input can be accessed through event.target.value
handleChange(evt){
this.setState({username : evt.target.value}); 

}
// you have to reset the state after the form button alert is finished. below this does it. 
handleSubmit(evt){
    evt.preventDefault();
alert (`You typed: ${this.state.username}`); 
this.setState({username: '' }); 

}
    render(){
        return(
            <div>
                <h1> Form Demo </h1>
                <form onSubmit = {this.handleSubmit}>
                    <label htmlFor = 'username'>Username</label>
                    <input type = 'text' value = {this.state.username}
                        onChange = {this.handleChange}
                        id='username' /> 
                     <button>Submit </button>
                </form>
            </div>
        )
    }
}
//The onChange event in React detects when the value of an input
// element changes. 
// onSubmit is making something happen when a submit button or something is done. or form submitted


export default Form; 