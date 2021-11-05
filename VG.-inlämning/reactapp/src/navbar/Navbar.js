import React from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light" >
        <div className=" container">
          <NavLink className="navbar-brand" to="/">Start</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
              <NavLink className="nav-link" to="/" exact activeClassName="active">Registrera Dig</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/Customer" exact activeClassName="active" >Kunder</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav> 
    )
}

export default Navbar
