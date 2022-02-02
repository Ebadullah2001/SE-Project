import React, { Component } from "react";
import Navbar from "./navbar";
import "./category.css";

class Catergory extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div class="container-fluid">
          <Navbar />
        </div>
        <div class="container-md">
          <table class="table">
            <tbody>
              <tr>
                <td>
                  <div class="container-fluid" id="cat">
                    {" "}
                    <div class="container-md">
                      <div class="card">
                        <img
                          src={require("./enter.jpg")}
                          class="card-img-top"
                          alt="..."
                        />
                        <div class="card-body">
                          <h5 class="card-title">Entertainment</h5>
                          <p class="card-text">
                            View all entertainment blogs here.
                          </p>
                          <a href="/entertainment" class="btn btn-primary">
                            View
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <div class="container-fluid" id="cat">
                    {" "}
                    <div class="container-sm">
                      <div class="card">
                        <img
                          src={require("./food.jpg")}
                          class="card-img-top"
                          alt="..."
                        />
                        <div class="card-body">
                          <h5 class="card-title">Food</h5>
                          <p class="card-text">
                            View all food related blogs here.
                          </p>
                          <a href="/food" class="btn btn-primary">
                            View
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <div class="container-fluid" id="cat">
                    {" "}
                    <div class="container-sm">
                      <div class="card">
                        <img
                          src={require("./sport.jpg")}
                          class="card-img-top"
                          alt="..."
                        />
                        <div class="card-body">
                          <h5 class="card-title">Sports</h5>
                          <p class="card-text">
                            View all sports related blogs here.
                          </p>
                          <a href="/sports" class="btn btn-primary">
                            View
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="container-fluid" id="cat">
                    {" "}
                    <div class="container-sm">
                      <div class="card">
                        <img
                          src={require("./travel.jpg")}
                          class="card-img-top"
                          alt="..."
                        />
                        <div class="card-body">
                          <h5 class="card-title">Travel</h5>
                          <p class="card-text">
                            View all travel related blogs here.
                          </p>
                          <a href="/travel" class="btn btn-primary">
                            View
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <div class="container-fluid" id="cat">
                    {" "}
                    <div class="container-sm">
                      <div class="card">
                        <img
                          src={require("./lifestyle.jpg")}
                          class="card-img-top"
                          alt="..."
                        />
                        <div class="card-body">
                          <h5 class="card-title">Lifestyle</h5>
                          <p class="card-text">
                            View all lifestyle related blogs here.
                          </p>
                          <a href="/lifestyle" class="btn btn-primary">
                            View
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <div class="container-fluid" id="cat">
                    {" "}
                    <div class="container-sm">
                      <div class="card">
                        <img
                          src={require("./music.jpg")}
                          class="card-img-top"
                          alt="..."
                        />
                        <div class="card-body">
                          <h5 class="card-title">Music</h5>
                          <p class="card-text">
                            View all music related blogs here.
                          </p>
                          <a href="/music" class="btn btn-primary">
                            View
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="container-fluid" id="cat">
                    {" "}
                    <div class="container-sm">
                      <div class="card">
                        <img
                          src={require("./political.png")}
                          class="card-img-top"
                          alt="..."
                        />
                        <div class="card-body">
                          <h5 class="card-title">Political</h5>
                          <p class="card-text">
                            View all political blogs here.
                          </p>
                          <a href="/political" class="btn btn-primary">
                            View
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <div class="container-fluid" id="cat">
                    {" "}
                    <div class="container-sm">
                      <div class="card">
                        <img
                          src={require("./fitness.jpg")}
                          class="card-img-top"
                          alt="..."
                        />
                        <div class="card-body">
                          <h5 class="card-title">Fitness</h5>
                          <p class="card-text">
                            View all fitness related blogs here.
                          </p>
                          <a href="/fitness" class="btn btn-primary">
                            View
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <div class="container-fluid" id="cat">
                    {" "}
                    <div class="container-sm">
                      <div class="card">
                        <img
                          src={require("./fashion.jpeg")}
                          class="card-img-top"
                          alt="..."
                        />
                        <div class="card-body">
                          <h5 class="card-title">Fashion</h5>
                          <p class="card-text">
                            View all fashion related blogs here.
                          </p>
                          <a href="/fashion" class="btn btn-primary">
                            View
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </React.Fragment>
    );
  }
}

export default Catergory;
