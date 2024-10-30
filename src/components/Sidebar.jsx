import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = () => {
  return (
      <div className="sidebar-div">
          <h1 className="title-text">The Cat Hub 🐈</h1>
          <div className="sidebar-options">
          <Link to="/" className="btn-block">
                <button><h2>Dashboard</h2></button>
              </Link>
              <Link to="/search" className="btn-block">
                <button><h2>Search</h2></button>
              </Link>
              <Link to="/about" className="btn-block">
                <button><h2>About</h2></button>
              </Link>
          </div>
      </div>
  )
}

export default SideBar;