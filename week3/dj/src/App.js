import React from 'react';
import './App.css';
import Square from './Square'
class App extends React.Component {
  constructor() {
    super()
      this.state = {
        colors: ["black","white","white","white"]
      }
      this.smallTime = this.smallTime.bind(this)
  }

    smallTime = function() {
      this.state.colors[0] = this.state.colors[2]
      alert()
      this.render()
    }

  
  render() {
  return (
    <div className="App">
      <div className="container">
        <Square className="box1" color =  {this.state.colors[0]}/>
        <Square color =  {this.state.colors[1]}/>
        <Square color =  {this.state.colors[2]}/>
        <Square color =  {this.state.colors[3]}/>
      </div>
        <button onClick={this.smallTime}>Small Time</button>
    </div>
  );
}
}

export default App;
