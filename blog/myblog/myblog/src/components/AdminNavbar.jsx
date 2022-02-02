import React, { Component } from "react";
import "./nav.css";

class AdminNavbar extends React.Component {
  render() {
    return (
      <React.Fragment>
        <nav class="navbar fixed-top navbar-expand-lg">
          <div class="container-fluid">
            <a class="navbar-brand">MyBlog</a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link " aria-current="page" href="/Adminpage">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" aria-current="page" href="/usermanage">
                    Users
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" aria-current="page" href="/loginform">
                    Sign Out
                  </a>
                </li>
               
              </ul>
            </div>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default AdminNavbar;
