import React, { useState } from "react";

function UserForm() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  const [error,setError] = useState('')

  const submitHandler = (e) => {
    e.preventDefault();
    setError(`Hello ${firstname} ${lastname}`);
    
  };

  return (
    
    <div>
        <h4 style={{color:"red"}}>UserForm-Custom-hook</h4>
      <form onSubmit={submitHandler}>
        <div>
          <label>First name</label>
          <input value={firstname} onChange={e => setFirstname (e.target.value)} type="text" />
        </div>
        <div>
          <label>Last name</label>
          <input  value={lastname} onChange={e => setLastname (e.target.value)} type="text" />
        </div>
        <button>Submit</button>
      </form>
      <p>{error}</p>
    </div>
  );
}

export default UserForm;
