import React, { useState } from 'react'
import EditUserForm from '../components/EditUserForm.js'

const ListTable = (props) => {
  const [show, setShow] = useState(false);
  const [currentHomeWork, setCurrentHomeWork] = useState(null);
 
  const handleShow = () => {
    setShow(!show)
  }
  const EditUser = () => {
    const newUser = props.homeWorks.map((homeWork) => {
      if (homeWork.id === currentHomeWork.id && currentHomeWork.checked === true) {
        return currentHomeWork
      } else {
        return homeWork
      }
    });
    { props.setHomeWorks(newUser) }
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
              <tr key={homeWork.id} className={homeWork.checked ? 'homeWork-checked' : ""}>
                <td >{homeWork.name}</td>
                <td>{homeWork.description}</td>
                <button className="btn btn-warning btn-md"
                  onClick={() => {
                    setCurrentHomeWork(homeWork)
                    handleShow()
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
        show={show}
        setShow={setShow}
        handleShow={handleShow}
        currentHomeWork={currentHomeWork}
        setCurrentHomeWork={setCurrentHomeWork}
        EditUser={EditUser}
      />
    </>
  )
}
export default ListTable