import React, { useState } from 'react';
import "./App.css"
function App() {
 
  const [input, setInput] = useState("");
  
  return (
    <div class="App-header">
      <p>Digite su nombre: {input} </p>
      <div class= "App-input">
        <input class ="App-input" value={input} onInput={e => setInput(e.target.value)}/>
        
      </div>
    </div>
    
  );
 
}
export default App