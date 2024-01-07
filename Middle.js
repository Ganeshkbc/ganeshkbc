import React from 'react'
import './middle.css';

function Middle(props) {
  return (
    <div className='main1'>
        <div className='photocon'>
            <img src={props.img} alt='images' className='photo'></img>
        </div>
        <div className='content'>
            <p className='pcon'>{props.label}</p>
            <a href={props.link} alt='aadhaar link'>Clik Here</a>

        </div>
       
    </div>
  )
}

export default Middle