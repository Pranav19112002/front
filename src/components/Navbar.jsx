// Navbar.js

import { Button } from 'react-bootstrap';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem('currentuser'));
  const admin = JSON.parse(localStorage.getItem('currentadmin'));

  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem('currentuser');
    localStorage.removeItem('currentadmin');
    navigate('/login');
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/home">DABS</a>

        <Button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon">
            <FontAwesomeIcon icon={faBars} style={{ color: 'white' }} />
          </span>
        </Button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto mr-5">
           
           
              <>
                <li className="nav-item active">
                  <a className="nav-link" href="/">Register</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/login">Login</a>
                </li>
              </>
            
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
