import React, { Component } from "react";
// the bind below give it a specific 'this statement that only works for this component to not confuse with others or using this.state as a principle.

class BrokenClick extends Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e){
      this.setState({clicked: true})
  }
  
  render() {
    return (
      <div>
        <h1>{this.state.clicked ? "Clicked" : "NOT CLICKED!"}</h1>

        <button onClick= {this.handleClick}>CLICK ME!</button>
      </div>
    );
  }
}

export default BrokenClick;


