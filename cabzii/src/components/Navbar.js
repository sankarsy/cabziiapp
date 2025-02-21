import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar({ isLoggedIn, setIsLoggedIn }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/login');
  };

  return (
    <div className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <p>cabzii</p>
        <div className="navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <Link to={'/'}>
              <li className="nav-item">
                <a className="btn" aria-current="page">
                  Home
                </a>
              </li>
            </Link>

            {!isLoggedIn && (
              <>
                <Link to={'/register'}>
                  <li className="nav-item">
                    <a className="btn">Register</a>
                  </li>
                </Link>
                <Link to={'/login'}>
                  <li className="nav-item">
                    <a className="btn">Login</a>
                  </li>
                </Link>
              </>
            )}

            {isLoggedIn && (
              <>
                <Link to={'/profile'}>
                  <li className="nav-item">
                    <a className="nav-link">Profile</a>
                  </li>
                </Link>
                <Link to={'/admin'}>
                  <li className="nav-item">
                    <a className="nav-link">Admin</a>
                  </li>
                </Link>
                <li className="nav-item">
                  <button className="btn btn-link nav-link" onClick={handleLogout}>
                    Logout
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
