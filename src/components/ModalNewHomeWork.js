import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { useForm } from 'react-hook-form'

const NewHomeWork = (props) => {
  const [modal, setModal] = useState(false)
  const [close, setClose] = useState(false)
  const { register, errors, handleSubmit } = useForm()
    const abrirCerrar = () => {
      setModal(!modal)
    }
  const onSubmit = (data, e) => {
    console.log(close)
    if (close === true){
      setClose(!close)
      abrirCerrar()
      }else{
        props.addHomeWork(data)
        abrirCerrar()
      }
      abrirCerrar()
    //limpiar campos
    e.target.reset()  
  }
  return (
    <div>
      <Button className="btn btn-secondary btn-lg" onClick={() => abrirCerrar()} >
      Create task
      </Button>
      <Modal show={modal} >
        <Modal.Header>
          <Modal.Title>Register the table fields</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form  className="" onSubmit={handleSubmit(onSubmit)} >
            <div className="form-row">
              <div className="col-6">
                <label>Name</label>
                <input type="text" className="form-control" placeholder=" Name" name="name" 
                  ref={register({required: {value: true, message: 'Required field' } })} />
                <div>{errors?.name?.message}</div>
              </div>
              <div className="col-6">
                <label>Description</label>
                <input type="text" className="form-control" placeholder=" Description" name="description" 
                  ref={register({required: {value: true, message: 'Required field' }})}/>
                <div>{errors?.description?.message}</div>
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary my-2">Save Changes</button>
              <button className="btn btn-dark" onClick={() => setClose(!close)}>Close</button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  )
}
export default NewHomeWork