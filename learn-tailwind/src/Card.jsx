import React from "react";

const Card = () => {
  const name = ["dip", "raj", "sappy", "sayan", "debo"];
  return (
    <div>
      {name.map(function (elem) {
        return <h1 className="text-3xl">{elem}</h1>;
      })}
    </div>
  );
};

export default Card;
