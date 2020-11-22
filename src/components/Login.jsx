import React, { useState } from "react";
import "../Login.css";
function Login() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });
  const [isMousedOver, setMouseOver] = useState(false);

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setContact((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  }
  function handleMouseOver() {
    setMouseOver(true);
  }
  function handleMouseOut() {
    setMouseOver(false);
  }
  function handleClick() {
    console.log(contact);
  }
  return (
    <div className="login-container">
      <input
        onChange={handleChange}
        name="fName"
        placeholder="First Name"
        type="text"
      />
      <input
        onChange={handleChange}
        type="text"
        name="lName"
        placeholder="Last Name"
      />
      <input
        onChange={handleChange}
        type="email"
        name="email"
        placeholder="Email"
      />
      <button
        style={{ backgroundColor: isMousedOver ? "#777" : "white" }}
        onClick={handleClick}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        Login
      </button>
    </div>
  );
}

export default Login;
