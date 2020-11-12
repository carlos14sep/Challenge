import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";

const NewHomeWork = (props) => {
  const [show, setShow] = useState(false);
  const { register, errors, handleSubmit } = useForm();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onSubmit = (data, e) => {
    props.addHomeWork(data);
    handleClose();
    //limpiar campos
    e.target.reset();
  };
  return (
    <div>
      <Button className="btn btn-secondary btn-lg" onClick={handleShow}>
        Create task
      </Button>
      <Modal show={show}>
        <form onSubmit={handleSubmit(onSubmit)}>
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
                  ref={register({
                    required: { value: true, message: "Required field" },
                  })}
                />
                <div>{errors?.name?.message}</div>
              </div>
              <div className="col-6">
                <label>Description</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder=" Description"
                  name="description"
                  ref={register({
                    required: { value: true, message: "Required field" },
                  })}
                />
                <div>{errors?.description?.message}</div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            
            <Button variant="primary" type="submit">
              Save Changes
            </Button>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </div>
  );
};
export default NewHomeWork;