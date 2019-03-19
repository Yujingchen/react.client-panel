import React, { Component } from "react";
import { Link } from "react-router-dom";
class AppNavbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-md navbar-dark bg-primary mb4">
        <div className="container">
          <Link to="/" className="navbar-brand">
            ClientPanel
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapese"
            data-target="#navbarMain"
          >
            <span className="navbar-toggle-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarMain">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to="/" />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default AppNavbar;
