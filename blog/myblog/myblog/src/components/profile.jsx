import react from 'react'
import React, { Component } from 'react'
import './Profilepage.css'
import axios from 'axios'
import Navbar from './navbar'
class Profilepage extends React.Component {
  state = {
    currentUser: [],
  }

  async componentDidMount() {
    const email = localStorage.getItem('userEmail')
    console.log(email)
    const { data: users } = await axios.get('http://localhost:3002/users/')
    const currentUser = users.filter((user) => user.userEmail == email)
    console.log(currentUser)
    this.setState({ currentUser })
  }

  render() {
    return (
      <react.Fragment>
        <div>
          <Navbar />
        </div>
        <div id="bg">
          <img src={require('./w4.jpg')} />
          <div id="profile">
            <form method="post">
              <div class="row">
                <div class="col-md-4"></div>
                <div class="col-md-6"></div>
              </div>

              <div class="container-fluid" id="img">
                <img
                  class="rounded-circle mt-5"
                  src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg "
                  width="150"
                ></img>
              </div>

              <div class="row">
                <div class="col-md-4">
                  <div class="profile-work">
                    <div class="row">
                      <div class="col-md-3">
                        <label>Name</label>
                      </div>
                      <div class="col-md-8">
                        <p>
                          <div>
                            {this.state.currentUser.map((user) => (
                              <div>{user.userName}</div>
                            ))}
                          </div>
                        </p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-3">
                        <label>Email</label>
                      </div>
                      <div class="col-md-8">
                        <p>
                          <div>
                            {this.state.currentUser.map((user) => (
                              <div>{user.userEmail}</div>
                            ))}
                          </div>
                        </p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-3">
                        <label>Phone</label>
                      </div>
                      <div class="col-md-8">
                        <p>
                          {' '}
                          <div>
                            {this.state.currentUser.map((user) => (
                              <div>{user.userPhone}</div>
                            ))}
                          </div>
                        </p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-3">
                        <label>Country</label>
                      </div>
                      <div class="col-md-8">
                        <p>
                          {' '}
                          <div>
                            {this.state.currentUser.map((user) => (
                              <div>{user.userCountry}</div>
                            ))}
                          </div>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div id="Add">
            <h3>Post a Blog</h3>
            <p>Post your own blogs on MYBLOG website</p>
            <a class="btn btn-primary" href="/blogTextEditor" id="aa">
              Compose Blog
            </a>
          </div>
        </div>
      </react.Fragment>
    )
  }
}

export default Profilepage
