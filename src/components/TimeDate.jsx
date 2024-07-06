import React, { useEffect, useState } from 'react'




const TimeDate = () => {
 
 const [currentDate,setCurrentDate]=  useState(new Date());

 useEffect(()=>{
 
  let intervalId=setInterval(()=>{
    setCurrentDate(new Date());
  },1000);
  
  return () =>{
    clearInterval(intervalId);
  }
 },[]);

  return (
    <h2 className='text-red-500 text-4xl mt-2'>This is Current Date and Time - {currentDate.toLocaleDateString()}
     - {currentDate.toLocaleTimeString()}</h2>
  )
}

export default TimeDate