import React, {Component} from 'react' ;
import Game from './Game';
import Demo from './Demo';
import Rando from './Rando'
import Button from './Button'
import BrokenClick from './BrokenClick'
import './App.css';
import ScoreKeeper from './ScoreKeeper';
import IconList from './IconList';
import AnnoyingForm from "./AnnoyingForm"
import DontCopyMe from './DontCopyMe'
import Form from './Form'

class App extends Component{
  render(){ 
    return(
      <div className ="App">
      
   <Form /> 
      </div>
      ); 
  }

}
// the maxNum {7} in Rando component is the props that is being passed. 
export default App;
