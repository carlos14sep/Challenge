import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const NewHomeWork = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [data, setData] = useState({
    name: '',
    description: ''
  })
  const handleInputChange = (event) => {
    const { name, value } = event.target
    setData({
      ...data, [name]: value
    });
  }
  const onSubmit = (event) => {
    event.preventDefault()
    props.addHomeWork(data);
    handleClose();
    //limpiar campos
    event.target.reset();
  };
  return (
    <div>
      <Button className="btn btn-secondary btn-lg" onClick={handleShow}>
        Create task
      </Button>
      <Modal show={show}>
        <form onSubmit={onSubmit}>
          <Modal.Header>
            <Modal.Title>Register the table fields</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="form-row">
              <div className="col-6">
                <label>Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder=" Name"
                  name="name"
                  required="required"
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
                  required="required"
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              Save Changes
            </Button>
          </Modal.Footer>
        </form>

      </Modal>
    </div>
  );
};
export default NewHomeWork;