import React from 'react';
import './App.css';
// import HandleClick from './HandleClick'
class App extends React.Component {
  constructor() {
    super()
      this.state = {
        firstName: "",
        lastName: "",
        email: "",
        birth: "",
        phone: "",
        food: "",
        area: "",
      }
      this.handleClick = this.handleClick.bind(this)
      this.handleChange = this.handleChange.bind(this)


  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
      
    })
  }  
  

  handleClick(event) {
    event.preventDefault()
    let p = document.getElementById("badge")
    let a = document.createElement("h1")
    let d = document.createElement("h1")
    let e = document.createElement("h1")
    let f = document.createElement("h1")
    let g = document.createElement("h1")
    let c = document.createElement("h1")

    a.textContent = "Name:" + " "+ this.state.firstName +" "+ this.state.lastName
    p.append(a)
    
    c.textContent = "Email:" +" "+ this.state.email
    p.append(c)
    
    d.textContent =  "Place of Birth:"+" "+this.state.birth
    p.append(d)

    e.textContent = "Phone Number:"+" " +this.state.phone
    p.append(e)

    f.textContent = "Favorite Food:"+" " +this.state.food
    p.append(f)

    g.textContent = this.state.area
    p.append(g)
     document.getElementsByTagName("h1")[0].className = "first1"
     document.getElementsByTagName("h1")[1].className = "email1"
      document.getElementsByTagName("h1")[2].className = "birth1"
      document.getElementsByTagName("h1")[3].className = "phone1"
    document.getElementsByTagName("h1")[4].className = "food1"
     document.getElementsByTagName("h1")[5].className = "area1"

    

  }

  render() {
    return(
      <div>
        <form>
          <input 
            name="firstName"
            type="text"
            placeholder="First Name"
            className="first"
            value={this.state.firstName}
            onChange={this.handleChange}
            />
              <input 
              
            type="text"
            name="lastName"
            placeholder="Last Name"
            className="last"
            value={this.state.lastName}
            onChange={this.handleChange}

            />
              <input 
            type="email"
            name="email"
            placeholder="Email"
            className="email"
            value={this.state.email}           
            onChange={this.handleChange}

            />
            <input 
            type="text"
            name="birth"
            placeholder="Place of Birth"
            className="birth"
            value={this.state.birth}
            
            onChange={this.handleChange}

            />
            <input 
            type="number"
            name="phone"
            
            placeholder="Phone"
            className="phone"
            value={this.state.phone}
            onChange={this.handleChange}

            />
              <input 
            type="text"
            name="food"
            placeholder="Favorite Food"
            className="food"
            value={this.state.food}
            onChange={this.handleChange}

            />
            <textarea
            placeholder="Tell us about yourself"
            name="area"
            className="area"
            value={this.state.area} 
            onChange={this.handleChange}

             />
        </form>
            <button onClick={this.handleClick}>Submit</button>

        <div id="badge">
        </div>

      </div>
    )
}
}

export default App;
