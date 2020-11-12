import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import TableToDoList from '../components/TableToDoList'
import { v4 as uuidv4 } from 'uuid'
import ModalNewHomeWork from '../components/ModalNewHomeWork'

function Todolist() {
  const [homeWorks, setHomeWorks] = useState([])
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    // Actualiza el título del documento usando la API del navegador
    document.title = `you have ${count} taks`
  },[count])
  
  const addHomeWork = (homeWork) => {
    homeWork.id = uuidv4()
    setHomeWorks([...homeWorks, homeWork])
    setCount(count+1)
  }
  //elimina usuarios
  const deleteUser = (id) => {
    setHomeWorks(homeWorks.filter(homeWork => homeWork.id !== id))
    setCount(count-1)
  }
  return (    
    <div className="container h-100"> 
      <div className="row">
      <h2 className="col-6 mt-3">List of tasks {homeWorks.length} </h2>
        
        <div className="col-6 mt-3">
          <div>
            <ModalNewHomeWork addHomeWork={addHomeWork} />
          </div>
        </div>
      </div>
      <div>
        <div>
          <TableToDoList
            homeWorks={homeWorks}
            setHomeWorks={setHomeWorks}
            deleteUser={deleteUser}
            setCount={setCount}
            count={count}
          />
        </div>
      </div>
    </div> 
  )
}
export default Todolist