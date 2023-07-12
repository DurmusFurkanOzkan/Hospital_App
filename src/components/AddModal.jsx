import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from "react-bootstrap/Form"

const AddModal = (props) => {

const {show,onHide,name,appointment,setAppointment} = props;

const submitData = (event) =>{
  event.preventDefault();
  console.log(appointment);
  const appointmentObj={id:new Date(),patient:event.target.elements.patientname.value,day:event.target.elements.date.value,consulted:false,doctor:name};
  appointment.push(appointmentObj);
  setAppointment(appointment)
  console.log(appointment);
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
    <Form onSubmit={submitData}>
    <Form.Group className="mb-3" controlId="formBasic" >
      <Form.Label>Patient Name</Form.Label>
      <Form.Control type="text" placeholder="Enter your name" name="patientname"/>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword" >
      <Form.Label>Day&Time</Form.Label>
      <Form.Control type="datetime-local" name="date"/>
    </Form.Group>
    <div className='d-flex justify-content-center gap-2'>
    <Button variant="primary" type="submit" >
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