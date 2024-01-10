// RegistrationPage.js

import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegistrationPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  

  async function registerUser() {
    // Check if passwords match before sending the request
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    const newUser = {
      name,
      email,
      password
    };

    try {
      const response = await axios.post('http://localhost:3005/api/users/register', newUser);

      const result = response.data;
      alert('Success')

      // Use React Router to navigate to the login page after successful registration
      
    } catch (err) {
      console.error(err);
      alert('error')
    }
  }

  return (
    <div className="grid-container">
      <div className="left-column">
        <div>
          <h2>Register</h2>
          <form>
            <label>
              Name:
              <br />
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <br />
            <label>
              Email:
              <br />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <br />
            <label>
              Password:
              <br />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <br />
            <label>
              Confirm Password:
              <br />
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </label>
            <br />
            <button type="button" onClick={registerUser}>
              Register
            </button>
          </form>
        </div>
      </div>
      <div className="right-column">{/* Additional content for the right column */}</div>
    </div>
  );
};

export default RegistrationPage;
