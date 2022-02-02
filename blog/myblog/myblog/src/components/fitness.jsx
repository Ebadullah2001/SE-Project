import React, { Component } from "react";
import Navbar from "./navbar";
import "./bookmark.css";
import axios from "axios";

class Fitness extends React.Component {
  state = {
    fitness: [],
  };

  catchId = (blgid) => {
    console.log(blgid);
    localStorage.setItem("blogId", blgid);
  };

  async componentDidMount() {
    const { data: fitness } = await axios.get(
      "http://localhost:3002/blog/fitness"
    );
    console.log(fitness);
    this.setState({ fitness });
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
        <div class="container-fluid" id="blog">
          <div>
            <h1>Fitness</h1>
          </div>
          {this.state.fitness.map((item, index) => {
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

export default Fitness;
