import React from 'react'

const Button = (props) => {

    console.log(props)
  return (
    <div className='text-blue-800 text-7xl w-64 h-40 p-6 bg-amber-800 '>
      {props.text}
    </div>
  )
}

export default Button
