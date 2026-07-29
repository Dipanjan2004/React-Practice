import React, { useState } from "react";

const Button = () => {
  const [num, setnum] = useState(0);
  return (
    <div>
      <h1>{num}</h1>
      <div className="btn">
        <button
          onClick={() => {
            setnum(num + 1);
          }}
        >
          Increase
        </button>
        <button
          onClick={() => {
            setnum((num - 1));
          }}
        >
          Decrease
        </button>
        <button
          onClick={() => {
            setnum(num * 5);
          }}
        >
          Jump
        </button>
        <button onClick={()=>{
            setnum(0)
        }}>Reset</button>
      </div>
    </div>
  );
};

export default Button;
