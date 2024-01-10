// LoginPage.js

import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

 

 async function Login() {
    const user = {
        email,
        password
    };

    try {
        
      const response = await axios.post('http://localhost:3005/api/users/login', user);

        const result = response.data;
        alert("sucess")
        
        

        // Use React Router to navigate to the home page
        
    } catch (err) {
        console.error(err);
        alert("error")
        
    }
}


  return (
    <div className="grid-container">
      <div className="left-column">
        <div>
          <h2>Login</h2>
          <form>
            <label>
              Email:
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <br />
            <label>
              Password:
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <br />
            <button type="button" onClick={Login}>
              Login
            </button>
          </form>
        </div>
      </div>
      <div className="right-column">
        
      </div>
    </div>
  );
};

export default LoginPage;
