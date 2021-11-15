import React, { useState } from 'react';
import './LogIn.css'
import {  Form, Spinner } from 'react-bootstrap';
import { Link,useLocation,useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const LogIn = () => {
  const [loginData, setLoginData] = useState({});
  const { user, loginUser,googleSinIn, isLoading, authError } = useAuth();

  const location = useLocation();
  const history = useHistory();

  const handleOnChange = e => {
      const field = e.target.name;
      const value = e.target.value;
      const newLoginData = { ...loginData };
      newLoginData[field] = value;
      setLoginData(newLoginData);
  }
  const handleLoginSubmit = e => {
      loginUser(loginData.email, loginData.password, location, history);
      e.preventDefault();
  }
  const handleGoogleSignin=()=>{
    googleSinIn(location,history)
  }
    return (
        <div className='form-control'>
        { !isLoading &&  <Form onSubmit={handleLoginSubmit} className='form'>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control name='email' onChange={handleOnChange} type="email" placeholder="Enter email" />
    
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control name='password' onChange={handleOnChange} type="password" placeholder="Password" />
  </Form.Group>
 
 
 
  <button className='btn btn-danger' type="submit">
    LogIn
  </button> 
  {user?.email && <h4 className='text-success pt-3'> User Register Succesfully</h4>}<br/>
{authError && <h4 className='text-danger pt-3'>{authError}</h4>}
  
  <Link className='register' to='/register'>New user? Please Register</Link>
  <p>-----------------------------------</p>
<button onClick={handleGoogleSignin}>google</button>
</Form>}
{isLoading && <Spinner animation="border" variant="danger" />}<br/>

        </div>
    );
};

export default LogIn;