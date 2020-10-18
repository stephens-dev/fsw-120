import React from 'react'

function HandleClick(event) {
    event.preventDefault()
    let p = document.getElementById("badge")
    let a = document.createElement("h1")
    let b = document.createElement("h1")
    let d = document.createElement("h1")
    let e = document.createElement("h1")
    let f = document.createElement("h1")
    let g = document.createElement("h1")
    let c = document.createElement("h1")

    a.textContent = this.state.firstName
    p.append(a)
    
    b.textContent = this.state.lastName
    p.append(b)
    
    c.textContent = this.state.email
    p.append(c)
    
    d.textContent = this.state.birth
    p.append(d)

    e.textContent = this.state.phone
    p.append(e)

    f.textContent = this.state.food
    p.append(f)

    g.textContent = this.state.area
    p.append(g)
    // var x = document.getElementsByTagName("h1")[0].className = "fuck"

    

  }

export default HandleClick