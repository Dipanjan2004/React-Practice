import React, { useState } from "react";

const App = () => {
  const [name, setname] = useState("");
  const [allUser, setallUser] = useState([]);
  let newAllUser = [...allUser];

  const submitHandler = (e) => {
    newAllUser.push(name);
    console.log(newAllUser);
    setallUser(newAllUser);
    setname("");

    e.preventDefault();
  };
  return (
    <div>
      <form
        action=""
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <input
          required
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => {
            setname(e.target.value);
          }}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
