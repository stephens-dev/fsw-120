import React from 'react';
import logo from './logo.svg';
import './App.css';

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
    this.prevent = this.prevent.bind(this)
  }

    handleClick() {
      this.setState({num1: Math.floor(Math.random() * 6)})
      this.setState({num2: Math.floor(Math.random() * 6)})
      this.setState({num3: Math.floor(Math.random() * 6)})
      this.setState({num4: Math.floor(Math.random() * 6)})
      this.setState({num5: Math.floor(Math.random() * 6)})
      
    }
    prevent() {
      
    }

    render() {
      
        return (
          <div>
            <h1 onClick={this.prevent}>{this.state.num1}</h1>
            <h1 >{this.state.num2}</h1>
            <h1>{this.state.num3}</h1>
            <h1>{this.state.num4}</h1>
            <h1 >{this.state.num5}</h1>
            <button onClick={this.handleClick}>Random</button>
          </div>
        )
      }
    }


export default App;
