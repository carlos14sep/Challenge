import React, { useState } from 'react';
import Challenger1 from "../src/Challenger1.js"
import Challenge2 from "../src/Challenger2.js"
import PersonList from '../src/PersonList.js';

function Reto (){
  return(
    <div>
      <Challenger1/>
      {/* <Challenge2/> */}
      <PersonList/>
    </div>
  )
}

export default Reto