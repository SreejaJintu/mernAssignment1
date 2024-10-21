import React from 'react'
import Button from 'react-bootstrap/Button';
import './login.css'
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div>

     <form className='addUser'>
                <h2  style={{textAlign:'center', fontSize:'bold'}}>Login</h2>
            <div className='inputgroup'>
                <label htmlFor='name'>Name:</label>
                <input type='text' id='name' placeholder='Enter your name'></input>

                <label htmlFor='name'>Password:</label>
                <input type='text' id='name' placeholder='Enter password'></input>
                <Button className='mt-3 mb-3' variant="success" type='submit'>Login</Button>{' '}

                <div className='login'>
                    <p>Dont have a account?</p>
                    <Link to='/'>
                    <Button  className="btn-sm " variant="primary">Sign up</Button>{' '}
                    </Link>
                </div>
                </div>    

        </form>
  
    </div>
  )
}

export default Login