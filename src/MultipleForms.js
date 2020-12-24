import React, { Component } from "react";


class MultipleForms extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", email:"" , password:""};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  /// you need a handle change for the onChange event of the input value. here it is below.
  //Basically it retrieves value of whatever input it was called on.
  //In this case, it’s your input element so whatever you insert in your
  //input can be accessed through event.target.value

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    alert(`You typed: ${this.state.username}`);
    this.setState({ username: "" });
  }

  render() {
    return (
      <div>
        <h1> Form with Multiple inputs </h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name = 'username'
            value={this.state.username}
            onChange={this.handleChange}
          />
          <button>Submit Me Duder</button>
          <input type ="email" placeholder="email"
                name = 'email'
                value = {this.state.email} 
                onChange={this.handleChange}/>
          <input type ="password" placeholder="password" 
                name = "password"
                value = {this.state.password}
                onChange = {this.handleChange}/>
        </form>
      </div>
    );
  }
}
export default MultipleForms; 
