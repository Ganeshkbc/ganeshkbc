import React, {useState,useEffect} from 'react'
import './Right.css';

function Right() {
    let size= 20;
    let[dynamicSize,setdynamicSize]=useState(size)
    useEffect(()=>{
        if(dynamicSize ===120)
        {
            alert("Plant Grown uccessfully")
        }
    else if(dynamicSize >120)
    {
       alert("please stop clicking button")
    }
    
    },[dynamicSize])
    
    const watering = () =>{
        setdynamicSize(dynamicSize+20)
     
    }
    return (

        <div className='tab'>
            <h3 className='h3'>Let's Grow a plant</h3>
            <div className='plant'>
                <span className='icon'style={{fontSize:`${dynamicSize}px`}}>🌱</span>
            </div>    
                <span className='line'><hr /></span>
                <button className='btn' onClick={watering}>let's Water the plant</button>
            <h3 className='con'>Let's Make Together India Green</h3>

        </div>

    )
}

export default Right