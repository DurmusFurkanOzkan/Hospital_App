import React from 'react'
import { useState } from 'react';

const AppointmentList = ({patient,doctor,day,consulted}) => {
  const [stateConsulted, setstateConsulted] = useState(consulted);

  let date;
  let time;
  if(Object.prototype.toString.call(day) === "[object Date]"){
    date=day.getDay()+"."+day.getMonth()+"."+day.getYear();
    time=day.getHours()+"."+day.getMinutes()+"."+day.getSeconds();
  }else{
    date=day.substring(8, 10)+"."+day.substring(5, 7)+"."+day.substring(0, 4);
    time=day.substring(11, 13)+"."+day.substring(14)
    console.log(day);
  }
  
  const removeList = (e) =>{
    e.target.parentElement.parentElement.remove();

  }

  const makeConsulted = () =>{
    if(stateConsulted){
      setstateConsulted(false);
    }else{
      setstateConsulted(true);
    }
  }

  return (
    <div className='container d-flex justify-content-between align-items-center g-2 mb-4 appo-list' onDoubleClick={makeConsulted} >
    <div className=' ms-3'>
    {
      stateConsulted&& <div className='hr'>sda</div>
    }
    <h3 className='text-danger'>{patient}</h3>
    <h4>{doctor}</h4>
    </div>
    <div>
    <p className=' fs-4 '>Date:{date}</p>
    {/*day.getDay()+"."+day.getMonth()+"."+day.getYear()*/}
    {/*day.getHours()+"."+day.getMinutes()+"."+day.getSeconds()*/}
    <p className=' fs-5'>Time:{time}</p>
    {
      stateConsulted&& <div className='consulted-class'>CONSULTED</div>
    }
    </div>
    <div>
    <i className="fa fa-close" style={{fontSize : '48px', color : 'red'}} onClick={removeList}></i>
    </div>

    </div>
  )
}

export default AppointmentList