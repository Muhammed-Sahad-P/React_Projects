import React from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    

    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/home')
    };

  return (
    <div className='logdiv'>
     <h1>Login</h1>
     <form className='logform'>
        <div>
        <label for="Email">
            Enter Valid E-Mail:{" "}
            <input name="Email" type="email" required />
          </label>
        </div>
        <div>
        <label>
            Password:
            <input type="password" name="password" required/>
          </label>
        </div>
     <button onClick={handleSubmit}>Login</button>
     </form>

    </div>
  )
}

export default Login
