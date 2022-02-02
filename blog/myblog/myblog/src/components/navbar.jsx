import React, { Component } from 'react'
import './nav.css'

class Navbar extends React.Component {
  
logout=()=>{
  localStorage.clear()
}
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
                  <a class="nav-link " aria-current="page" href="/home">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/category">
                    Categories
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/bookmark">
                    Bookmark
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/profile">
                    Profile
                  </a>
                </li>
                <li class="nav-item">
                  <a onClick={()=>this.logout} class="nav-link" href="/loginForm">
                    Sign Out
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </React.Fragment>
    )
  }
}

export default Navbar
