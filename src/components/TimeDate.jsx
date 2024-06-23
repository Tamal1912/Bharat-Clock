import React from 'react'

let currentDate=new Date()

const TimeDate = () => {
  return (
    <h2 className='text-red-500 text-4xl mt-2'>This is Current Date and Time - {currentDate.toLocaleDateString()}
     - {currentDate.toLocaleTimeString()}</h2>
  )
}

export default TimeDate