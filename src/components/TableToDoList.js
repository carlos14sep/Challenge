import React from 'react'

const ListTable = (props) => {
  console.log(props.homeWorks)
  return (
    <table className="table table-bordered thead-light mt-5">
      <thead className="thead-dark">
        <tr>
          <th scope="col-4">Name</th>
          <th scope="col-4">Description</th>
          <th scope="col-4">Actions</th>
          
        </tr>
      </thead>
      <tbody>
        {props.homeWorks.length > 0 ? (
          props.homeWorks.map((homeWork) => (
            <tr key={homeWork.id}>
            <td>{homeWork.name}</td>
            <td>{homeWork.description}</td>
            <button className="btn btn-warning btn-md">Edit</button>
            <button className="btn btn-danger btn-md">Delete</button>
          </tr>
          ))
        ): (
          <tr>
            <td colSpan={3}>No hay resgistros de tareas </td>
          </tr>
        )}          
      </tbody>
    </table>
  )
}

export default ListTable