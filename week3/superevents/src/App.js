import React from 'react';
import './App.css';
import Superhero from './Superhero'
import Superdata from './Superdata.json'


function App() {
    const Element = Superdata.map(element => {
      return <Superhero key={element.show} name={element.name} img={element.imageName} catchPhrase={element.catchPhrase}/>
    })
  return (
    <div className="App">
     {Element}
    </div>
  );
}

export default App;
