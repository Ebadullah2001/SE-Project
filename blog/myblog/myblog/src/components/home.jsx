import React, { Component } from "react";
import Navbar from "./navbar";
import "./home.css";
import axios from "axios";

class Home extends React.Component {
  state = {
    blogs: [],
  };

  catchId = (blgid) => {
    console.log(blgid);
    localStorage.setItem("blogId", blgid);
  };

  async componentDidMount() {
    const { data: blogs } = await axios.get("http://localhost:3002/blog/list");
    console.log(blogs);
    this.setState({ blogs });
  }
  
  render() {
    return (
      <React.Fragment>
        <div class="container-fluid">
          <Navbar />
        </div>
        <div class="container-fluid" id="image">
          <img src={require("./123.jpg")} class="img-fluid" />
          <h3 class="content">
            "Reading is the Gateway skill that makes all the possible learning"
          </h3>
        </div>
        <div id="blog">
          {this.state.blogs.map((item, index) => {
            return (
              <div class="oneblog" key={index}>
                <div>
                  <span class="heading">{item.blogTitle}</span>
                  <span>
                    <img src={require("./bookmark.png")} class="icon" />
                  </span>
                </div>

                <div>
                  <h6 class="material">{item.blogDescription}</h6>
                  <a
                    onClick={() => this.catchId(item._id)}
                    href="/readmore"
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

export default Home;
