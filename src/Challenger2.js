import React, { useState } from 'react';
import "./App.css"

function App() {
  const [help, setHelp] = useState(true);
  const numbers = [1, 2, 3, 4, 5];

  return (
    
    <div class="Help-header">
      <p>Consulta sobre pacientes con Covid-19 en el Oriente Antioqueño{help} </p>
    
      <div class= "Help-input">
        <input class ="Help-input" type="text"/>
        <input class ="Help-input" type="date" />
        <button class = "button-input" 
                value={help} 
                onInput={e => setHelp(e.target.value)}> 
                Buscar </button>
      </div>
    </div>
  );
  
}
export default App