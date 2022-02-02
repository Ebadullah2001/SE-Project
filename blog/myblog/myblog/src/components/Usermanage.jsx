import React, { Component } from 'react'
import './Usermanage.css'
import axios from 'axios'
import AdminNavbar from './AdminNavbar'

class userManage extends Component {
  state = {
    users: [],
  }
  async componentDidMount() {
    //localStorage.setItem("user_id", 1234)

    const { data: users } = await axios.get('http://localhost:3002/users/')

    console.log(users)
    this.setState({ users })
    // console.log(users);

    // const url="https://cloud.mongodb.com/v2/61e8e9abc7e564416ac364b1#metrics/replicaSet/61e8ee5852b83505fc051f47/explorer/MyBlog/blog"
    // const response=await fetch(url);
    // const data=await response.json();
    // this.setState({person:data[0],loading:false});
  }

  render() {
    return (
      <React.Fragment>
        <AdminNavbar />

        {/* <div class="container-md" id="tt">
          <table class="table table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td colspan="2">Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="container-fluid">
          <div class="container-xl">
            <td>
              <div class="table-responsive">
                <div class="table-wrapper">
                  <div class="table-title">
                    <div class="row">
                      <div class="col-sm-8">
                        <h1>User Details</h1>
                      </div>
                    </div>
                  </div>
                  <table>
                    {this.state.users.map((user) => {
                      return (
                        <div>
                          <thead>
                            <tr>
                              <th>#</th>
                              <th>Name </th>
                              <th>Email</th>

                              <th>Country </th>
                            </tr>
                          </thead>

                          <tbody>
                            <tr>
                              <td>1</td>
                              <td>{user.userName}</td>

                              <td>{user.userEmail}</td>
                              <td>{user.userCountry}</td>
                            </tr>
                          </tbody>
                        </div>
                      )
                    })}
                  </table>
                </div>
              </div>
            </td>
          </div>
        </div> */}

        <div id="qq">
          <div className="hh">
            <span className="eee">#</span>
            <span className="eee">Name </span>
            <span className="eee">Email</span>
            <span className="eee">Country </span>
          </div>
          {this.state.users.map((user) => {
            return (
              <div className="dd">
                <span className="ee">1</span>
                <span className="ee">{user.userName}</span>
                <span className="ee">{user.userEmail}</span>
                <span className="ee">{user.userCountry}</span>
              </div>
            )
          })}
        </div>
      </React.Fragment>
    )
  }
}

export default userManage
