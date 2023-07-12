import React from 'react'
import "./../index.css"
import {doctorData,appointmentData} from "./../helpers/Data"
import Doctors from '../components/Doctors'
import { useState } from 'react'
import AddModal from '../components/AddModal'
import AppointmentList from '../components/AppointmentList'

const Home = () => {
    const [modalShow, setModalShow] = useState(false);
    const [doctorInfo, setdoctorInfo] = useState({name:""});
    const [appointment, setAppointment] = useState(appointmentData);
    //{doctorName:doctorInfo,patientName:"",appointmentTime:"",consulted:false}

  return (
    <div>
    {modalShow&& <AddModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        name={doctorInfo.name}
        appointment={appointment}
        setAppointment={setAppointment}
      />}
    
    <h1 className='text-danger text-center mt-2'>CLARUS HOSPITAL</h1>
    <h2 className='text-center doctors-title'>Our Doctors</h2>
    <div className='container mt-5'>
    <div className='row row-cols-lg-4 justify-content-between g-2'>
    {
        doctorData.map((doctor)=>
            (<Doctors key={doctor.id} {...doctor} modal={setModalShow} doctorInfo={setdoctorInfo} /> )
        )
    }
    </div>
    </div>
    <h2 className='text-center doctors-title mt-2'>Appointment List</h2>
    <div className='mt-3'>
    {
      appointment.map((appo) =>{
        console.log(appo);
       return <AppointmentList {...appo} key={appo.id}/>
      })
    }
    </div>
    </div>
  )
}

export default Home