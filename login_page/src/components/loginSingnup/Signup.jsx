import axios from 'axios';
import './signup.css'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useState } from 'react';

function Signup() {

  const [formData, setFormData] = useState({ username: '', email: '', password: '' });

  const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
      e.preventDefault();
      try {
          await axios.post('/signup', formData);
          alert('User registered successfully');
      } catch (error) {
          alert('Error registering user');
      }
  };


  

  return (
    
        <>
        <form className='addUser'>
                <h2  style={{textAlign:'center', fontSize:'bold'}}>Sign Up</h2>
            <div className='inputgroup'>
                <label htmlFor='name'>Name:</label>
                <input type='text' id='name' onChange={handleChange} placeholder='Enter your name'></input>

                <label htmlFor='name'>Email:</label>
                <input type='text' id='name' onChange={handleChange} placeholder='Enter Email address'></input>

                <label htmlFor='name'>Password:</label>
                <input type='text' id='name'  onChange={handleChange} placeholder='Enter password'></input>
                <Button className='mt-3 mb-3' onChange={handleSubmit}  variant="success" type='submit'>Sign up</Button>{' '}

                <div className='login'>
                    <p>Already have a account?</p>
                    <Link to='/login'>
                    <Button  className="btn-sm " variant="primary">Login</Button>{' '}
                    </Link>
                </div>
                </div>    

        </form>
        </>
  
  )
}

export default Signup