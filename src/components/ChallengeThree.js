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
  //elimina usuarios
  const deleteUser = (id) => {
    setHomeWorks(homeWorks.filter(homeWork => homeWork.id !== id))
  }

  return (
    <div className="container h-100">
      <div className="row">
        <h2 className="col-6 mt-3">List of tasks</h2>
        <div className="col-6 mt-3">
          <div>
            <ModalNewHomeWork addHomeWork={addHomeWork} />
          </div>
        </div>
      </div>
      <div>
        <div>
          <TableToDoList
            TodoData={TodoData}
            homeWorks={homeWorks}
            setHomeWorks={setHomeWorks}
            deleteUser={deleteUser}
          />
        </div>
      </div>
    </div>
  )
}

export default Todolist