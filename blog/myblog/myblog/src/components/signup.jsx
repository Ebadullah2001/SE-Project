import React, { Component } from 'react'
import './signup.css'

class Signup extends React.Component {
  render() {
    return (
      <div class="container-fluid" id="image">
        <img src={require('./w4.jpg')} />
        <div class="container">
          <main class="form-signin">
            s
            <form>
              <h1 class="h3 mb-3 fw-normal">MyBlog</h1>
              <h2 class="h3 mb-3 fw-normal">Please sign up</h2>
              <div class="form-floating">
                <input
                  type="id"
                  class="form-control"
                  id="floatingInput"
                  placeholder="abc123"
                />
                <label for="floatingInput">User Id</label>
              </div>
              <div class="form-floating">
                <input
                  type="name"
                  class="form-control"
                  id="floatingInput"
                  placeholder="abc"
                />
                <label for="floatingInput">Name</label>
              </div>
              <div class="form-floating">
                <input
                  type="email"
                  class="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label for="floatingInput">Email address</label>
              </div>
              <div class="form-floating">
                <input
                  type="number"
                  class="form-control"
                  id="floatingInput"
                  placeholder="032XXXXXXX"
                />
                <label for="floatingInput">Phone Number</label>
              </div>{' '}
              <div class="form-floating">
                <input
                  type="country"
                  class="form-control"
                  id="floatingInput"
                  placeholder="Pakistan"
                />
                <label for="floatingInput">Country</label>
              </div>
              <div class="form-floating">
                <input
                  type="password"
                  class="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                />
                <label for="floatingPassword">Password</label>
              </div>
              <button class="btn btn-lg btn-primary" type="submit">
                Sign up
              </button>
            </form>
          </main>
        </div>
      </div>
    )
  }
}

export default Signup
