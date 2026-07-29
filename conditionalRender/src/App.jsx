import React from "react";
import Men from './components/Men.jsx'
import Women from './components/Women.jsx'
import Button from './components/Button.jsx'
const App = () => {
  const user1={
    name:"Dip",
    gender:"male"
  }
  const user2={
    name:"Sheya",
    gender:"female"
  }
  return <div className="min-h-screen bg-black text-white">
    
    <Button/>

  </div>;
};

export default App;
