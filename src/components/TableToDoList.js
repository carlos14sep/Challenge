import React, { useState } from 'react'
import EditUserForm from '../components/EditUserForm.js'

const ListTable = (props) => {
  const [modal, setModal] = useState(false);
  const [currentHomeWork, setCurrentHomeWork] = useState(null);
  const abrirCerrar = () => {
    setModal(!modal)
  }
  const EditUser = () => {
    const dataUser = props.homeWorks.map((homeWork) => {
      if (homeWork.id===currentHomeWork.id && currentHomeWork.checked===true) {
        return currentHomeWork
      } else {
        return homeWork
      }
    });
    { props.setHomeWorks(dataUser) }
  }
  return (
    <>
      <table className="table table-bordered thead-light mt-5">
        <thead className="thead-dark">
          <tr>
            <th scope="col-4">Name</th>
            <th scope="col-4">Description</th>
            <th scope="col-4">Actions</th>
          </tr>
        </thead>
        <tbody >
          {props.homeWorks.length > 0 ? (
            props.homeWorks.map((homeWork) => (
              <tr key={homeWork.id} className={homeWork.checked?'homeWork-checked':""}>
                <td >{homeWork.name}</td>
                <td>{homeWork.description}</td>
                <button className="btn btn-warning btn-md"
                  onClick={() => {
                    setCurrentHomeWork(homeWork)
                    abrirCerrar()
                  }}
                >Edit User</button>
                <button className="btn btn-danger btn-md"
                  onClick={() => { props.deleteUser(homeWork.id) }}>Delete</button>
              </tr>
            ))
          ) : (
              <tr>
                <td colSpan={3}>No task logs</td>
              </tr>
            )}
        </tbody>
      </table>
      <EditUserForm
        modal={modal}
        setModal={setModal}
        abrirCerrar={abrirCerrar}
        currentHomeWork={currentHomeWork}
        setCurrentHomeWork={setCurrentHomeWork}
        EditUser={EditUser}
      />
    </>
  )
}
export default ListTable