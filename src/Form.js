import React from 'react';
import { useState } from 'react';
import './Form.css';
import logo from './androidlogo.png';

const Form = () => {
 
  const [val, setVal] = useState({});
  const [invalid, setInvalid] = useState({});

 

  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    setInvalid(validate(val));
  };

  function validate(val) {
  let invalid = {};
  if (!val.userName) {
    invalid.userName = 'User Name cannot be empty';
  } else if (!/[a-z]||[A-Z]/.test(val.userName)) {
    invalid.userName = 'User Name  is invalid';
  }
  if (!val.password) {
    invalid.password = 'Password is required';
  } else if (val.password.length < 8) {
    invalid.password = 'Password must contain atleast 8 characters';
  }
  else if (!/[A-Z]/.test(val.password)){
    invalid.password='Password must contain atleast one capital letter'
  }
  else if(!/[`!@#$%^&*()_+\-=\]{};':"\\|,.<>?~]/.test(val.password)){
        invalid.password='Password must contain atleast one special character'
  }
  return invalid;
};

  const handleChange = (e) => {
    setVal(val => ({ ...val, [e.target.name]: e.target.value }));
  };

  
  return(
   <div className="container">
 <div className="logo">
 <span></span>
 <img className="lo" src={logo}/>
 </div>
 <div className="form-contains">
    <form className="form" onSubmit={handleSubmit} >
    <div className="log">
    <h1 >Log In</h1>
    </div>
    <div className="username">
      <input   type="text" name="userName" placeholder="username" onChange={handleChange} value={val.userName || ''} />
        {invalid.userName}
        </div>
        <div className="password">
    <input  type="password" name="password" placeholder="password" onChange={handleChange} value={val.password || ''} />
      {invalid.password}    
      </div>
      <div className="checkbox">
      <input type="checkbox"/>Remember me!
      </div>
      <div className="button">
       <button type="submit" >Submit</button>
     </div>
     <div className="rem">
       <p>Don't have an account?<a href="#">Register here</a></p>
     </div>
            </form>
             </div>
          </div>
          
    
  
  );
};

export default Form;