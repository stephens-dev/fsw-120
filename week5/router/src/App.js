import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from "./pages/Home"
import Services from "./pages/Services"
import About from "./pages/About"
import Header from "./components/Header"
import Footer from "./components/Footer"
import {Switch, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
     <Header />

     <Switch>
       <Route exact path="/">
         <Home />
       </Route>
       <Route path="/about">
         <About />
       </Route>
       <Route path="/services">
         <Services />
       </Route>
     </Switch>

     <Footer />
    </div>
  );
}

export default App;
