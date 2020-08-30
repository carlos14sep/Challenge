import React, { useState } from 'react'
import axios from 'axios'

function PersonList (){
    const [Covid, setCovid] = useState([]);
    const getCovid =() => {
        axios
        .get("https://www.datos.gov.co/resource/gt2j-8ykr.json?ciudad_de_ubicaci_n=Marinilla&fecha_diagnostico=2020-08-06T00:00:00.000" )
        .then((res)=>{
            setCovid(res.data)
        })
    }
    const [input, setInput] = useState("");
    const [date, setDate] = useState("");

    return(
        <div class="Help-header">
            <p>Consulta sobre pacientes con Covid-19 en el Oriente Antioqueño</p>
            <div class= "Help-input">
                <input class ="Help-input" type="text" value={input} onInput={e => setInput(e.target.value)}/>
                <input class ="Help-input" type = "date" value={date} onInput={d => setDate(d.target.value)}/>
                <button class = "button-input" onClick={getCovid}>Search</button>
                <br/>
                <ul>
                    {Covid.map((Covid) => {
                        return(
                            <li>
                                {(date + "T00:00:00.000" === Covid.fecha_diagnostico) && (input === Covid.ciudad_de_ubicaci_n) && (  
                                                    
                                    <div class="row row-cols-1 row-cols-sm-4 row-cols-md-4" > 
                                        
                                        <div class="col col-lg ">Edad: {Covid.edad} </div>
                                        <div class="col col-lg">Sexo: {Covid.sexo}</div>
                                        <div class="col col-lg">Tipo: {Covid.tipo}</div>
                                        <div class="col col-lg">Estado: {Covid.estado}</div>
                                    </div>
                                )}
                            </li>
                        )          
                    })}
                </ul>
            </div>
        </div>
    )
}
export default PersonList