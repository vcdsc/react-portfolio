import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
      <Link className="navbar-brand" to="/">
        Vanessa Correia
      </Link>
      <div>
        <ul className="navbar-nav ">
          <li className="nav-item">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/project-gallery"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Project Gallery
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/contacts"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Contacts
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
