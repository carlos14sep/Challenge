import React from 'react'
import { Modal } from 'react-bootstrap'

function EditUserFrom(props) {

  const onSubmit = (event) => {
    event.preventDefault()
    props.handleShow()
  }
  const handleInputChange = (e) => {
    const { name, value, checked, type } = e.target
    props.setCurrentHomeWork({
      ...props.currentHomeWork, 
      [name]: type === "checkbox" ? checked : value
    });
  };
  return (
    <div>
      <Modal show={props.show}>
        <Modal.Header>
          <Modal.Title>Register the table fields</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={onSubmit}>
            <div className="form-row">
              <div className="col-6">
                <label>Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder=" Name"
                  name="name"
                  value={props.currentHomeWork && props.currentHomeWork.name}
                  required={true}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-6">
                <label>Description</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder=" Description"
                  name="description"
                  value={props.currentHomeWork && props.currentHomeWork.description}
                  required={true}
                  onChange={handleInputChange}
                />
              </div>
              <div className="custom-control custom-checkbox">
                <input
                  name="checked"
                  type="checkbox"
                  class="custom-control-input"
                  id="customCheck1"
                  onChange={handleInputChange} />
                <label class="custom-control-label" for="customCheck1">Confirm changes</label>
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary my-2"
                onClick={() => props.EditUser()}>Save Changes</button>
              <button className="btn btn-dark"
                onClick={props.handleClose}>Close</button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default EditUserFrom