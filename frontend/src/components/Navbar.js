import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar({ user, handleLogout }) {
  return (
    <nav className="navbar">
      <div className="nav-title">Lost & Found</div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/add">Add Item</Link>
        <Link to="/about">About</Link>
        {user ? (
          <>
            <span style={{ marginLeft: "15px", fontWeight: "bold" }}>
              Hi, {user.name}
            </span>
            <button
              onClick={handleLogout}
              style={{
                background: "white",
                color: "teal",
                border: "none",
                borderRadius: "5px",
                marginLeft: "10px",
                padding: "5px 10px",
                cursor: "pointer",
              }}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
