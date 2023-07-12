import React from 'react'

const Doctors = (props) => {

    const viewModal = (e) => {
        props.modal(true);
        props.doctorInfo({name:e.target.nextSibling.innerText});
        console.log();
    }

    const {img,name,dep} = props;
  return (
    <div className='col doctor-info'>
    <img src={img} alt="" className='doctor-image' onClick={viewModal}/>
    <h4 className='text-center mt-2'>{name}</h4>
    <h6 className='text-center'>{dep}</h6>
    </div>
  )
}

export default Doctors