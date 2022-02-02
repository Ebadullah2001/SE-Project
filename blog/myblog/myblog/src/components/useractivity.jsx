import React, { Component } from "react";
import AdminNavbar from "./AdminNavbar";

import "./Adminpage.css";

class userActivity extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div class="container-fluid">
          <AdminNavbar />
        </div>

        <div class="container-fluid" id="blog">
          <div id="username">
            <h1>Username:Muhammad Hamza</h1>
          </div>

          <div class="oneblog">
            <div>
              <span class="heading">Anthony's Story</span>
              <span>
                <img src={require("./bookmark.png")} class="icon" />
              </span>
            </div>
            <div>
              <h4 class="username">Posted by:Muhammad Hamza</h4>
            </div>

            <div>
              <h6 class="material">
                After Years Of Using Drugs, One Morning Anthony Realized He Was
                In The Fierce Grip Of Addiction— And It Was Getting Worse.
                Before Long, Everything That He Had Worked For Was Falling
                Apart… He Found Himself Hopeless And Spiritually Bankrupt. “I
                Knew I Needed Help. As A Self-Employed Electrician......
              </h6>
            </div>
            <div>
              <button class="btn btn-primary ">Read more</button>
            </div>
          </div>

          <div class="oneblog">
            <div>
              <span class="heading">Anthony's Story</span>
              <span>
                <img src={require("./bookmark.png")} class="icon" />
              </span>
            </div>
            <div>
              <h4 class="username">Posted by:Muhammad Hamza</h4>
            </div>

            <div>
              <h6 class="material">
                After Years Of Using Drugs, One Morning Anthony Realized He Was
                In The Fierce Grip Of Addiction— And It Was Getting Worse.
                Before Long, Everything That He Had Worked For Was Falling
                Apart… He Found Himself Hopeless And Spiritually Bankrupt. “I
                Knew I Needed Help. As A Self-Employed Electrician......
              </h6>
            </div>
            <div>
              <button class="btn btn-primary ">Read more</button>
            </div>
          </div>

          <div class="oneblog">
            <div>
              <span class="heading">Anthony's Story</span>
              <span>
                <img src={require("./bookmark.png")} class="icon" />
              </span>
            </div>
            <div>
              <h4 class="username">Posted by:Muhammad Hamza</h4>
            </div>

            <div>
              <h6 class="material">
                After Years Of Using Drugs, One Morning Anthony Realized He Was
                In The Fierce Grip Of Addiction— And It Was Getting Worse.
                Before Long, Everything That He Had Worked For Was Falling
                Apart… He Found Himself Hopeless And Spiritually Bankrupt. “I
                Knew I Needed Help. As A Self-Employed Electrician......
              </h6>
            </div>
            <div>
              <button class="btn btn-primary ">Read more</button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default userActivity;
