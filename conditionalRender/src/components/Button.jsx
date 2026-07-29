import React from "react";

const Button = () => {
  function btnClick() {
    console.log("Button is clicked");
    
  }
  return (
    <div
      onClick={()=>{
        btnClick()
      }}
      className="active:scale-95 bg-emerald-400 w-fit text-5xl px-4 py-2 rounded "
    >
      <h1>Click to Download</h1>
    </div>
  );
};

export default Button;
