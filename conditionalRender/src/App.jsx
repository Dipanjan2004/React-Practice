import React from "react";
import Men from './components/Men.jsx'
import Women from './components/Women.jsx'

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
    
    {user2.gender=='male'?<Men/>:<Women/>}

  </div>;
};

export default App;
