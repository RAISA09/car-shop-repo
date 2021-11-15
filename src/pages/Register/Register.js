import React, { useState } from 'react';
import { Form, Spinner } from 'react-bootstrap';
import { Link ,useHistory} from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Register = () => {
  const {registerUser,googleSinIn,isLoading,authError,user}=useAuth()
    const [loginData,setLoginData]=useState({})
    
  const history = useHistory();

const handleOnBlur=(e)=>{

const field=e.target.name
const value=e.target.value
const newLoginData={...loginData}
newLoginData[field]=value;
console.log(newLoginData)
setLoginData(newLoginData)


}

    const handleLogInSudsbmit=(e)=>{
       
     
     
      registerUser(loginData.email, loginData.password,loginData.name,history)
        e.preventDefault()

    }
    return (
        <div className='form-control'>
           {!isLoading &&<Form onSubmit={handleLogInSudsbmit} className='form'>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Name</Form.Label>
    <Form.Control name='name' onBlur={handleOnBlur} type="name" placeholder="Enter Name" />
    
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control name='email' onBlur={handleOnBlur} type="email" placeholder="Enter email" />
    
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control name='password' onBlur={handleOnBlur} type="password" placeholder="Password" />
  </Form.Group>
 
 
 
  <button className='btn btn-danger' type="submit">
    Register
  </button> 
  {user?.email && <h4 className='text-success pt-3'> User Register Succesfully</h4>}<br/>
{authError && <h4 className='text-danger pt-3'>{authError}</h4>}
  
  <Link className='register' to='/login'>Already user? Please Login</Link>
  <p>-----------------------------------</p>
<button onClick={googleSinIn}>google</button>
</Form>}<br/>
{isLoading && <Spinner animation="border" variant="danger" />}<br/>



        </div>
    );
};

export default Register;