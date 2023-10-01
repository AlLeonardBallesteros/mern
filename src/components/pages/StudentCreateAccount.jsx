import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './pagescss/StudentCreateAccount.css';

function StudentCreateAccountForm() {
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleCreateAccount = async () => {
    if (firstname === '' || lastname === '' || email === '' || password === '') {
      alert('All fields are required');
    } else {
      try {
        const response = await axios.post('http://localhost:4000/user/signup', {
          firstname,
          lastname,
          email,
          password,
        });

        if (response.status === 200) {
          alert('Account created successfully');
          navigate('/student-login');
        } else {
          alert('Registration failed');
        }
      } catch (error) {
        console.error('Error during registration:', error);
        alert('Registration failed');
      }
    }
  };

  return (
    <div className="create-account-page">
      <div className="create-account-box">
        <h2>Create Account</h2>
        <form>
          <div className="input-group">
            <label className="label" htmlFor="firstName">
              First Name:
            </label>
            <input
              name="firstName"
              id="firstName"
              type="text"
              value={firstname}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label className="label" htmlFor="lastName">
              Last Name:
            </label>
            <input
              name="lastName"
              id="lastName"
              type="text"
              value={lastname}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label className="label" htmlFor="email">
              Email:
            </label>
            <input
              name="email"
              id="email"
              type="email"
              autoComplete="off"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label className="label" htmlFor="password">
              Password:
            </label>
            <input
              name="password"
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="button-group">
            <button
              type="button"
              onClick={handleCreateAccount}
              className="create-account-button"
            >
              SUBMIT
            </button>
          </div>
        </form>
        <div className="button-group">
          <Link to="/student-login" className="login-button">
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
}

export default StudentCreateAccountForm;
