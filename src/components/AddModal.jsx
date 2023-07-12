import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from "react-bootstrap/Form"

const AddModal = (props) => {

const {show,onHide,name} = props;

const submitData = () =>{
  return "";
}
  return (
    <Modal
    show={show}
    onHide={onHide}
    size="md"
    aria-labelledby="contained-modal-title-vcenter"
    centered
   
  >
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter" className='text-danger'>
      Appointment for {name}
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
    <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Patient Name</Form.Label>
      <Form.Control type="email" placeholder="Enter your name" id="name-id"/>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Day&Time</Form.Label>
      <Form.Control type="datetime-local"  id="date-id"/>
    </Form.Group>
    <div className='d-flex justify-content-center gap-2'>
    <Button variant="primary" type="submit" onClick={submitData}>
    Submit
  </Button>
  <Button variant="danger" onClick={props.onHide} >
  Close
  </Button>
    </div>
   
  </Form>
    </Modal.Body>
      
  </Modal>
  )
}

export default AddModal