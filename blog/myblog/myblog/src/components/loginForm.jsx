import React from "react";
import Joi from "joi-browser";
import Form from "../commons/form";
import axios from "axios";
import Home from "./home";
import { Redirect } from "react-router-dom";
import './signin.css'
class Login extends Form {
  state = {
    data: { userEmail: "", userPassword: "" },
    errors: {},
    redirect: false,
    redirectAdmin: false,
    //length:{}
  };

  schema = {
    userEmail: Joi.string().email().required(),
    userPassword: Joi.string().required(),
  };
  doSubmit = async () => {
    const email = this.state.data.userEmail;
    const password = this.state.data.userPassword;
    const { data: users } = await axios.get("http://localhost:3002/users/");
    const currentUser = users.filter(
      (user) => user.userEmail == email && user.userPassword == password
    );
    console.log(currentUser);
    const length = currentUser.length;
    console.log(length);
    if (length != 0) {
      if (email == "admin@gmail.com" && password == "admin") {
        this.setState({ redirectAdmin: true });
      } else {
        this.setState({ redirect: true });
        console.log(this.state.data.userEmail);
        localStorage.setItem("userEmail", this.state.data.userEmail);
      }
    }
    console.log(length);
    //this.setState(length);
    // const currentUser = users.filter(function(user){
    //   if (user.userEmail==email && user.userPassword==password){
    //     console.log("successful")
    //   }
    // });
  };

  // doSubmit = () => {
  //   const {userEmail}=this.state.data;
  //   console.log(userEmail);
  //   localStorage.setItem("userEmail", userEmail);

  //   console.log(this.state.data);
  //   const datas = this.state.data;
  //   const requestOptions = {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //     },
  //     body: JSON.stringify({ data: datas }),
  //   };
  //   fetch("http://localhost:3002/users/auth", requestOptions)
  //     .then((response) => response.json())
  //     .then((data) => this.setState({ data: datas }));
  // };

  render() {
    return (
      <React.Fragment>
        <div className="container-fluid" id="image">
        <img src={require('./w4.jpg')} />
        <div className="container" id="login">
          <h1 className="h1">Login</h1>
          <form onSubmit={this.handleSubmit}>
            
            {this.renderInput("userEmail", "Email")}
            {this.renderInput("userPassword", "Password", "password")}
            <div className="signup">
                <a href="/registerform" id="signup">
                  for Signup
                </a>
              </div>
            {this.renderButton("Login")}

          </form>
          {this.state.redirect ? <Redirect push to="/home" /> : null}
          {this.state.redirectAdmin ? <Redirect push to="/Adminpage" /> : null}
        </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Login;

// import React from "react";
// import Joi from "joi-browser";
// import Form from "../commons/form";

// class Login extends Form {
//   state = { data: { userEmail: "", userPassword: "" }, errors: {} };

//   schema = {
//     userEmail: Joi.string().email().required(),
//     userPassword: Joi.string().required(),
//   };

//   doSubmit = () => {
//     const {userEmail}=this.state.data;
//     console.log(userEmail);
//     localStorage.setItem("userEmail", userEmail);

//     console.log(this.state.data);
//     const datas = this.state.data;
//     const requestOptions = {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//       },
//       body: JSON.stringify({ data: datas }),
//     };
//     fetch("http://localhost:3002/users/auth", requestOptions)
//       .then((response) => response.json())
//       .then((data) => this.setState({ data: datas }));
//   };

//   render() {
//     return (
//       <div className="container">
//         <h1>Login</h1>
//         <form onSubmit={this.handleSubmit}>
//           {this.renderInput("userEmail", "Email")}
//           {this.renderInput("userPassword", "Password", "password")}
//           {this.renderButton("Login")}
//         </form>
//       </div>
//     );
//   }
// }

// export default Login;
