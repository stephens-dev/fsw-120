import React from 'react';
import './App.css';
import Square from './Square'
class App extends React.Component {
  constructor() {
    super()
      this.state = {
        colors: ["black","white","white","black"]
      }
      this.smallTime = this.smallTime.bind(this)
      this.party = this.party.bind(this)
      this.professional1 = this.professional1.bind(this)
      this.professional2 = this.professional2.bind(this)
      this.pink = this.pink.bind(this)
      this.green = this.green.bind(this)
      this.yellow = this.yellow.bind(this)
      this.red = this.red.bind(this)
  }

    smallTime = function() {
      this.setState(prevState => {
        if(prevState.colors[0]!== "white") {
        return{
        colors: ["white", "white" ,"white ","white"]}
      }else {this.setState({colors: ["black","black","black","black"]})}
})
}
    party = function() {
      
      this.setState( {
        colors: ["purple","purple","white","white"]
      })
    }
    professional1 = function() {
      this.setState({
        colors:["prevState","prevState","blue","prevState"]
      })
    }
    professional2 = function() {
      this.setState({
        colors: ["prevState","prevState","prevState","blue"]
      })
    }
    pink = function() {
      this.setState({
        colors: ["prevState","prevState","prevState","pink"]
      })
    }
    green = function() {
      this.setState({
        colors: ["prevState","prevState","green","prevState"]
      })
    }
    red = function() {
      this.setState({
        colors: ["prevState","red","prevState","prevState"]
      })
    }
    yellow = function() {
      this.setState({
        colors: ["yellow","prevState","prevState","prevState"]
      })
    }
  
  render() {
  return (
    <div className="App">
      <div className="container">
        <Square className="box1" color =  {this.state.colors[0]}/>
        <Square className="box2" color =  {this.state.colors[1]}/>
        <Square className="box3" color =  {this.state.colors[2]}/>
        <Square className="box4" color =  {this.state.colors[3]}/>
      </div>
        <button onClick={this.smallTime}>Small Time</button>
        <button onClick={this.party}>Party</button>
        <button onClick={this.professional1}>Professional: 1</button>
        <button onClick={this.professional2}>Professional: 2</button>
        <button onClick={this.red}>Red</button>
        <button onClick={this.pink}>Pink</button>
        <button onClick={this.green}>Green</button>
        <button onClick={this.yellow}>Yellow</button>
    </div>
  );
}
}

export default App;
