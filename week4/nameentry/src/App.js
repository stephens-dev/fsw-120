import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(){
      super()
      this.state = {
        name: ""
      }
      this.handleChange = this.handleChange.bind(this)
      this.submit = this.submit.bind(this)
    }

    handleChange(event) {
      this.setState({
        [event.target.name]: event.target.value
      })
    }

    submit(event) {
       event.preventDefault()
      
      let parent = document.getElementById("ul")
      let list = document.createElement("li")
      parent.append(this.state.name,list)
    }

    render() {
      return (
        <form>
          <input 
          id="input"
          type="text"
          value={this.state.name}
          name="name"
          placeholder="Enter Name"
          onChange={this.handleChange}
          />
          <button onClick={this.submit}>Submit</button>
          <h1>{this.state.name}</h1>
          <ul id="ul">

          </ul>

        </form>
      )
    }
}


export default App;
