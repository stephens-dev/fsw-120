import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor() {
    super()

  }

  render() {
    return(
      <div>
        <form>
          <input 
            type="text"
            placeholder="First Name"
            className="first"
            />
              <input 
            type="text"
            placeholder="Last Name"
            className="last"
            />
              <input 
            type="email"
            placeholder="Email"
            className="email"
            />
            <input 
            type="text"
            placeholder="Place of Birth"
            className="birth"
            />
            <input 
            type="phone"
            placeholder="Phone"
            className="phone"
            />
              <input 
            type="text"
            placeholder="Favorite Food"
            className="food"
            />
            <textarea
            placeholder="Tell us about yourself"
            className="area"
            />
        </form>
            <button>Submit</button>

            

      </div>
    )
}
}

export default App;
