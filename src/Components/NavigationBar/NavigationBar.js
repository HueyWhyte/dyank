import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import "./style.css";

export default class NavigationBar extends Component {
  render() {
    return (
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
        <NavLink to="/" className="navbar-brand">
          LOGO
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          style={{ backgroundColor: "white" }}
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
        >
          <ul
            style={{
              width: "60%",
              marginLeft: "auto",
              marginRight: "auto",
              justifyContent: "space-evenly",
            }}
            className="navbar-nav mr-auto"
          >
            <li className="nav-item active">
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/services" className="nav-link">
                Services
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/booking" className="nav-link">
                Booking
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/pricing" className="nav-link">
                Pricing
              </NavLink>
            </li>
          </ul>
          {/* <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form> */}
        </div>
      </nav>
    );
  }
}
