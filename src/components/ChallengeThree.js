import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import TableToDoList from '../components/TableToDoList'
import { v4 as uuidv4 } from 'uuid'
import ModalNewHomeWork from '../components/ModalNewHomeWork'

function Todolist() {
  const TodoData = []

  const [homeWorks, setHomeWorks] = useState(TodoData)

  const addHomeWork = (homeWork) => {
    homeWork.id = uuidv4()
    setHomeWorks([...homeWorks, homeWork])
  }

  return (
    <div className="container h-100">
      <div className="row">
        <h2 className="col-6 mt-3">Listado de Tareas</h2>
        <div className="col-6 mt-3">
          <ModalNewHomeWork addHomeWork={addHomeWork} />
        </div>
      </div>
      <div>
        <div>
          <TableToDoList homeWorks={homeWorks} />
        </div>
      </div>
    </div>
  )
}

export default Todolist