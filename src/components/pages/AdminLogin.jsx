import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './pagescss/StudentAdminLogin.css';

function AdminLogin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === '') {
      alert('Email is required');
      return;
    } else if (password === '') {
      alert('Password is required');
      return;
    }

    if (email === 'admin@gmail.com' && password === 'admin') {
      setIsLoggedIn(true);
      navigate('/admin-dashboard/dashboard');
    } else {
      alert('Invalid email or password');
    }
  };

  if (isLoggedIn) {
    navigate('/admin-dashboard/dashboard');
  }

  return (
    <div className="login-page">
      <div className="login-box">
        <h2>login</h2>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label htmlFor="email">Email:</label>
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
            <label htmlFor="password">Password:</label>
            <input
              name="password"
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="button-group">
            <button type="submit" className="login-button">
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;
