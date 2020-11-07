import React, {prevState} from 'react'
import {Modal } from 'react-bootstrap'
import { useForm } from 'react-hook-form'

function EditUserFrom(props) {
  const {handleSubmit} = useForm()


  const onSubmit = (data) => {
    // console.log(data)
    props.abrirCerrar()  
  }
    
    const EditUser = () => {
      
      const dataUser = props.data;
      dataUser.map(homeWork=> {
        if (homeWork.id === props.currentHomeWork.id){
          homeWork.name = props.currentHomeWork.name
          homeWork.description = props.currentHomeWork.description
        }
      })
    }
    const handleInputChange = (e) => {
       const {name, value} = e.target
       props.setCurrentHomeWork (prevState =>({
        ...prevState,
        [name]: value
      })) 
      EditUser();        
    }
  return (
    <>
    <div>
      <Modal show={props.modal}>
        <Modal.Header>
          <Modal.Title>Registre los campos de la tabla</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="" onSubmit={handleInputChange}>
            <div className="form-row">
              <div className="col-6">
                <label>Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  name="name"
                  value={props.currentHomeWork?props.setCurrentHomeWork.name:""}
                  onChange={handleInputChange}
                />

              </div>
              <div className="col-6">
                <label>Description</label>
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Description" 
                  name="description"
                  value={props.currentHomeWork?props.setCurrentHomeWork.description:""}                  
                  onChange={handleInputChange}
                />

              </div>
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary my-2" onClick={() => handleInputChange()}> Save Changes</button>
              <button className="btn btn-dark"
                onClick={() => onSubmit()}>Close</button>
            </div>
          </form>
        </Modal.Body>
     
      </Modal>
     
    </div>
    </>
  )}
export default EditUserFrom