import logo from './logo.svg';
import './App.css';
import React from "react"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      num1: [],
      num2: [],
      com: []
    }
    this.handleChange = this.handleChange.bind(this)
    
    // let num3 = this.state.num1
    // let num4 = this.state.num2
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
      
    })
  }  
    Add = () =>{
    let res = parseInt(this.state.num1) + parseInt(this.state.num2)
    this.setState({com: res})
  }
  Subtract = () =>{
    let res = parseInt(this.state.num1) - parseInt(this.state.num2)
    this.setState({com: res})
  }
  Multiply = () =>{
    let res = parseInt(this.state.num1) * parseInt(this.state.num2)
    this.setState({com: res})
  }
  Divide = () =>{
    let res = parseInt(this.state.num1) / parseInt(this.state.num2)
    this.setState({com: res})
  }
  Clear = () => {
    this.setState({num1: [], num2: [], com: []})
  }
    

  render() {
    return(
  <div className="App">
    <h1>Calculator</h1>
    <h4>1ST Number</h4>
     <input  
     onChange={this.handleChange}
      value={this.state.num1}
       type="number"
       name="num1"
       />
     <h4>2ND Number</h4>
     <input 
     type="number" 
     onChange={this.handleChange} 
     value={this.state.num2} 
     name="num2"
     />
     <div className="but">
     <button onClick={this.Add}>Add</button>
     <button onClick={this.Subtract}>Subtract</button>
     <button onClick={this.Multiply}>Multiply</button>
     <button onClick={this.Divide}>Divide</button>
     <button onClick={this.Clear}>Clear</button>
     <h1>
      {this.state.com}
     </h1>
     </div>


    </div>
    
  )
}
}

export default App;
