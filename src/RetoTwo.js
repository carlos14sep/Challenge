import React, { useState } from 'react'
import axios from 'axios'

function PersonList (){
    const [Covid, setCovid] = useState([]);
    const getCovid =() => {
        axios
        .get("https://www.datos.gov.co/resource/gt2j-8ykr.json?ciudad_de_ubicaci_n=Marinilla&fecha_diagnostico=2020-08-01T00:00:00.000" )
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
                <li>
                {Covid.map((Covid) => {
                    return(
                        <ul>
                        {(date + "T00:00:00.000" === Covid.fecha_de_notificaci_n) && (input === Covid.ciudad_de_ubicaci_n)  && (
                            <table class="table">
                                <thead class="thead-dark">
                                    <tr>
                                        <th class="header" scope="col">Edad</th>
                                        <th class="header" scope="col">Sexo</th>
                                        <th class="header" scope="col">Tipo</th>
                                        <th class="header" scope="col">Estado</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="col" >{Covid.edad}</td>
                                        <td class="col" >{Covid.sexo}</td>
                                        <td class="col" >{Covid.tipo}</td>
                                        <td class="col" >{Covid.estado}</td>
                                    </tr> 
                                </tbody>
                            </table>
                        )}</ul>
                    )          
                })}</li>  
            </div>
        </div>
    )
}
export default PersonList