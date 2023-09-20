import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './pagescss/StudentCreateAccount.css';

function StudentCreateAccountForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleCreateAccount = () => {
    if (firstName === '' || lastName === '' || email === '' || password === '') {
      alert('All fields are required');
    } else {
      alert('Account created successfully');
      navigate('/student-dashboard');
    }
  };

  return (
    <div className="create-account-page">
    <div className="create-account-box">
      <h2>Create Account</h2>
      <form>
      <div className="input-group">
        <label className="label" htmlFor="firstName">First Name:</label>
          <input
            name="firstName"
            id="firstName"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}/>
            </div>
      <div className="input-group">
        <label className="label" htmlFor="lastName">Last Name:</label>
          <input
            name="lastName"
            id="lastName"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}/>
            </div>
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
        <button type onClick={handleCreateAccount} className="create-account-button">
          SUMBIT
        </button>
        </div>
      </form>
      <div className="button-group">
      <Link to="/student-login" className="login-button">SIGN IN</Link>
      </div>
    </div>
    </div>
  );
}

export default StudentCreateAccountForm;
