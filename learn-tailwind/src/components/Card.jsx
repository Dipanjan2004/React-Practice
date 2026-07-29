import React from 'react'

const Card = (props) => {
  return (
    <div className='w-80 h-96 p-6 bg-gray-900 border border-gray-700 rounded-xl shadow-lg'>
      {props.text }
    </div>
  )
}

export default Card
