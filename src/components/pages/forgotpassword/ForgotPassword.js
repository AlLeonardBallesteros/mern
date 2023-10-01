import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../forgotpasswordcss/ResetPassword.css';

function ForgotPassword() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault();
    
      try {
        const response = await axios.post('https://localhost:3000/api/forgot-password', { email });
        setMessage(response.data.message);
      } catch (error) {
        setMessage('Email not found');
      }
    };
  
    return (
      <div className="container">
        <div className="box">
          <h1>Forgot Password</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            </form>
            <div>
        <button className="button"><Link to="/forgot-password" className="small-text">Submit
          </Link></button>
        </div>
          {message && <p>{message}</p>}
        </div>
      </div>
    );
  }
  
  export default ForgotPassword;
  