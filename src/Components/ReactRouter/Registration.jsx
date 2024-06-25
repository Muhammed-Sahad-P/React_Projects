import React from "react";
import { useNavigate } from "react-router-dom";

const Registration = () => {

const navigate = useNavigate()
  const handleSubmit = (event) => {
      event.preventDefault();
      navigate('/login')

  };

  return (
    <div className="regdiv">
      <h1>Registration Form</h1>
      <form className="regform">
        <div>
          <label for="first-name">
            Enter First Name:{" "}
            <input name="first-name" type="text" placeholder="first" required />
          </label>
        </div>
        <div>
          <label for="last-name">
            Enter Last Name:{" "}
            <input name="last-name" type="text" placeholder="last" required />
          </label>
        </div>
        <div>
          <label for="Email">
            Enter Valid E-Mail:{" "}
            <input name="Email" type="email" placeholder="email" required />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input type="password" name="password" />
          </label>
        </div>
        <div>
          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Registration;
