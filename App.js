import React,  {useState} from 'react';
import logo from './logo.svg';
function App () {
    const[
    statecasilla,setStatecasilla] = useState (false)
      return (
        
        <div className="App">
            <h1>Hellos mundo {statecasilla === true ? "input" :""}</h1>
            <input type="text" placeholder="" />
        </div>
        
      ) } 
    export default App
