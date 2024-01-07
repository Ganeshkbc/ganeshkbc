
import {useState} from 'react'
import gogreen from './gogreen.png'
import './left.css';

function Left() {
    const[data,setData]=useState(0)
    function updatedata(){
        setData(data+1 )
    }
          
    
    return (
        <div>
            <div className='img'>
                 <img src={gogreen} alt='images' className='img1'></img>
            </div>
            <div className='text'>Let's Grow Plants Together And Make India Gogreen</div>
            <ul>
                 <li><a href='https://www.mygov.in/details-4.html'>To Know More About Green India</a></li>
            </ul>
            <div className='btngroup'>
            <button onClick={updatedata} className='btn'>Like </button> <p className='lik'>Like:{data}❤️</p>
            </div>
        </div>
    )
}

export default Left