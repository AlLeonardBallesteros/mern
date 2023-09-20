import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './pagescss/StudentAdminLogin.css';

function StudentLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === '') {
      alert('Email is required');
      return;
    } else if (password === '') {
      alert('Password is required');
      return;
    }

    if (email === 'student@gmail.com' && password === 'student') {
      setIsLoggedIn(true);
      navigate('/student-dashboard/home');
    } else {
      alert('Invalid email or password');
    }
  };

  if (isLoggedIn) {
    navigate('/student-dashboard/home');
  }

  return (
    <div className="login-page">
       <div className="login-box">
      <h2>login</h2>
      <form>
        <div className="input-group">
        <label className="label" htmlFor="email">Email:</label>
          <input
            name="email"
            id="email"
            type="email"
            autoComplete="off"
            value={email}
            onChange={(e) => setEmail(e.target.value)}/>
        </div>
      <div className="input-group">
        <label className="label" htmlFor="password">Password:</label>
          <input
            name="password"
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <div className="button-group">
        <button type="button" onClick={handleLogin} className="login-button" >
          Sign In
        </button>
        </div>
        </form>
        <div className="button-group">
        <Link to="/student-create-account" className="create-account-button" >Create Account</Link>
        </div>
        </div>
     </div>
  
  );
}

export default StudentLogin;
