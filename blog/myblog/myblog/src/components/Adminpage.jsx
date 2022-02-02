import React, { Component } from "react";
import AdminNavbar from "./AdminNavbar";
import axios from "axios";
import "./Adminpage.css";

class Adminpage extends React.Component {
  state = {
    adminblogs: [],
  };

  catchId = (blgid) => {
    console.log(blgid);
    localStorage.setItem("blogId", blgid);
  };

  rejectId = (blgid) => {
    console.log(blgid);
    console.log("hello");
    const combined = { _id: blgid };
    console.log(combined);
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(combined),
    };
    fetch("http://localhost:3002/blog/blogreject", requestOptions)
      .then((response) => response.json())
      .then((data) => this.setState({ data: combined }));
  };

  acceptId = (blgid) => {
    const blogid = { _id: blgid };
    axios
      .post("http://localhost:3002/blog/blogaccept", blogid)
      .then(function (response) {
        console.log(response);
      });
  };
  async componentDidMount() {
    const { data: adminblogs } = await axios.get(
      "http://localhost:3002/blog/adminblogs"
    );
    console.log(adminblogs);
    this.setState({ adminblogs });
  }
  render() {
    return (
      <React.Fragment>
        <AdminNavbar />
        <div class="container-fluid" id="image">
          <img src={require("./123.jpg")} class="img-fluid" />
          <h3 class="content">
            "Reading is the Gateway skill that makes all the possible learning"
          </h3>
        </div>
        <div class="container-fluid" id="blog">
          {this.state.adminblogs.map((item, index) => {
            return (
              <div class="oneblog" key={index}>
                <div>
                  <span class="heading">{item.blogTitle}</span>
                  <div></div>
                  <span>
                    <img src={require("./bookmark.png")} class="icon" />
                  </span>
                </div>

                <div>
                  <h6 class="material">{item.blogDescription}</h6>
                </div>
                <div>
                  <button
                    onClick={() => this.rejectId(item._id)}
                    href="/"
                    id="readmore"
                    class="btn btn-primary"
                  >
                    Reject
                  </button>
                </div>

                <div>
                  <button
                    onClick={() => this.acceptId(item._id)}
                    href="/"
                    id="readmore"
                    class="btn btn-primary"
                  >
                    Accept
                  </button>
                </div>
                <div>
                  <a
                    onClick={() => this.catchId(item._id)}
                    href="/readmoreadmin"
                    id="readmore"
                    class="btn btn-primary"
                  >
                    Read More
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}

export default Adminpage;
