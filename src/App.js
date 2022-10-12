//rafce to create a simple react functional component 
import React from 'react'
import {About, Header, Skills,Work, Contact} from "./container";  
import {Navbar} from "./components"; 
import "./app.scss"
const App = () => {
  return (
      <div className="app">
        
        <Navbar/>
        <Header/>
        <About /> 
        <Work/> 
        <Skills/>
        <Contact/>
      </div>
  );
}

export default App;