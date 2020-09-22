import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { useForm } from 'react-hook-form'

const NewHomeWork = (props) => {
  const [modal, setmodal] = useState(false)
  const { register, errors, handleSubmit } = useForm()

  const abrirCerrar = () => {
    setmodal(!modal)
  }

  const onSubmit = (data, e) => {
    console.log(data)
    props.addHomeWork(data)
    abrirCerrar()
    //limpiar campos
    e.target.reset()
  }

  return (
    <div>
      <Button className="btn btn-secondary btn-lg" onClick={() => abrirCerrar()}>
        Crear Tarea
      </Button>

      <Modal show={modal}>
        <Modal.Header>
          <Modal.Title>Registre los campos de la tabla</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form  className="" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-row">
              <div className="col-6">
                <label>Name</label>
                <input type="text" className="form-control" placeholder=" Name" name="name"
                  ref={register({required: {value: true, message: 'Campo Requerido' }})} />
                <div>{errors?.name?.message}</div>
              </div>
              <div className="col-6">
                <label>Description</label>
                <input type="text" className="form-control" placeholder=" Description" name="description"
                  ref={register({required: {value: true, message: 'Campo Requerido' }})}/>
                <div>{errors?.description?.message}</div>
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary my-2">Save Changes</button>
              <button className="btn btn-dark" onClick={() => abrirCerrar()}>Close</button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default NewHomeWork