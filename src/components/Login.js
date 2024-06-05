// src/Login.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/App.css'; // Import the central styles file

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
    navigate('/home');
  };

  return (
    <div className="login-page">
      <header className="header">
        <h1>Login to WizzardRush</h1>
      </header>
      <div className="login-content">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="button">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
