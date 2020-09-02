import React, { useState } from 'react'
import axios from 'axios'

function PersonList (){
    const [covidCases, setCovidCases] = useState([]);
    const [city, setCity] = useState("");
    const [date, setDate] = useState("");
    const getCovid =() => {
        axios
        .get("https://www.datos.gov.co/resource/gt2j-8ykr.json?ciudad_de_ubicaci_n="+city+"&fecha_diagnostico="+ date +"T00:00:00.000" )
        .then((res)=>{
            setCovidCases(res.data)
        })
    }
    return(
        <div className="Container">
            <div className="row">
                <div className="col">
                <h3 className="my-4 text-center">Consulta sobre pacientes con Covid-19 en el Oriente Antioqueño</h3>
                <div className="row">
                    <div className="col-3 offset-2">
                        <input class ="form-control" placeholder="Municipio" type="text" value={city} onInput={e => setCity(e.target.value)}/>  
                    </div>
                    <div className="col-3">
                        <input class ="form-control" type = "date" value={date} onInput={d => setDate(d.target.value)}/>
                    </div>
                    <div className="col-3">
                        <button className = "btn btn-secondary" onClick={getCovid}>Search</button>
                    </div>
                </div>
                <table className="table mt-5" >
                    <thead className="thead-dark">
                        <tr>
                            <th className="header" scope="col">Edad</th>
                            <th className="header" scope="col">Sexo</th>
                            <th className="header" scope="col">Tipo</th>
                            <th className="header" scope="col">Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        {covidCases.map((covidCases, index) => {
                            return(
                                <tr key={index}>
                                    <td className="col" >{covidCases.edad}</td>
                                    <td className="col" >{covidCases.sexo}</td>
                                    <td className="col" >{covidCases.tipo}</td>
                                    <td className="col" >{covidCases.estado}</td>
                                </tr>
                            )
                        })} 
                    </tbody>
                </table>
            </div>
        </div>
    </div>)
}
export default PersonList