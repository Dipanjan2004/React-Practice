import React from 'react'
import Button from './components/Button.jsx'
import Card from './components/Card.jsx'

const App = () => {
  const user = ["dip","raj","dev","devansh","kartik"]
  console.log(user)
  return (
    <div className='min-h-screen bg-black text-white '>


      {user.map(function(elem) {
        return <Card text={elem}/>
      })}


    </div>
  )
}

export default App
