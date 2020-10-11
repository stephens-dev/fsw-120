import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dicebox from './Dicebox'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      num1: 0,
      num2: 0,
      num3: 0,
      num4: 0,
      num5: 0
    }
    this.handleClick = this.handleClick.bind(this)
    
  }

    handleClick() {
      this.setState({num1: Math.floor(Math.random() * 6)})
      this.setState({num2: Math.floor(Math.random() * 6)})
      this.setState({num3: Math.floor(Math.random() * 6)})
      this.setState({num4: Math.floor(Math.random() * 6)})
      this.setState({num5: Math.floor(Math.random() * 6)})
      
    }
    

    render() {
      
        return (
          <div>
           
            <Dicebox dice={this.state.num1}/>
            <Dicebox dice={this.state.num2}/>
            <Dicebox dice={this.state.num3}/>
            <Dicebox dice={this.state.num4}/>
            <Dicebox dice={this.state.num5}/>
           
            <button onClick={this.handleClick}>Random</button>
          </div>
        )
      }
    }


export default App;
