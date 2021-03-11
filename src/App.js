import React, { useState } from 'react';
import Clima from './components/Clima';
import Navbar from './components/Navbar'
import './App.css';


function App () {

  const [ciuIn, setciuIn] = useState("");

  const CambioR = (value) => {
    setciuIn(value)
  }
  
    return (
      <div className="App">
        <Navbar CambioR={CambioR} />
        <div className="container">
          <Clima ciuIn={ciuIn} />           
        </div>
      </div>
    );
  }


export default App;
