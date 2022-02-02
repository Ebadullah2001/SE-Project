// import React from 'react'
// import Joi from 'joi-browser'
// import Form from '../commons/form'
// import './signup.css'

// class Register extends Form {
//   state = {
//     data: {
//       userName: '',
//       userPassword: '',
//       userEmail: '',
//       userPhone: '',
//       userCountry: '',
//       userBookmark: []
//     },
//     errors: { error: '' },
//   }

//   schema = {
//     userName: Joi.string().required(),
//     userPassword: Joi.string().min(5).required(),
//     userEmail: Joi.string().email().required(),
//     userPhone: Joi.string().required(),
//     userCountry: Joi.string().required(),
//   }

//   doSubmit = () => {
//     console.log(this.state.data)
//     const datas = this.state.data
//     const requestOptions = {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         Accept: 'application/json',
//       },
//       body: JSON.stringify({ data: datas }),
//     }
//     fetch('http://localhost:3002/users/edit', requestOptions)
//       .then((response) => {
//         console.log('response: ' + response)
//         response.json()
//       })
//       .then((data) => {
//         console.log('data: ' + data)
//         this.setState({ data: data })
//       })
//   }

//   render() {
//     return (
//       <div className="container-fluid" id="image">
//         <img src={require('./w4.jpg')} />
//         <div className="container">
//           <h1 className="h1">Register</h1>
//           <form onSubmit={this.handleSubmit}>
//             {this.renderInput('userName', 'Username')}
//             {this.renderInput('userPassword', 'Password', 'password')}
//             {this.renderInput('userEmail', 'Email')}
//             {this.renderInput('userPhone', 'Contact Number')}
//             {this.renderInput('userCountry', 'Country')}
//             {this.renderButton('Register')}
//           </form>
//         </div>
//       </div>
//     )
//   }
// }

// export default Register

import React from "react";
import Joi from "joi-browser";
import Form from "../commons/form";
import "./signup.css";

class Register extends Form {
  state = {
    data: {
      userName: "",
      userPassword: "",
      userEmail: "",
      userPhone: "",
      userCountry: "",
      userBookmark: [],
    },
    errors: { error: "" },
  };

  schema = {
    userName: Joi.string().required(),
    userPassword: Joi.string().min(5).required(),
    userEmail: Joi.string().email().required(),
    userPhone: Joi.string().required(),
    userCountry: Joi.string().required(),
    userBookmark: Joi
  };

  doSubmit = () => {
    console.log(this.state.data);
    const datas = this.state.data;
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ data: datas }),
    };
    fetch("http://localhost:3002/users/edit", requestOptions)
      .then((response) => {
        console.log("response: " + response);
        response.json();
      })
      .then((data) => {
        console.log("data: " + data);
        this.setState({ data: data });
      });
  };

  render() {
    return (
      <div className="container-fluid" id="image">
        <img src={require("./w4.jpg")} />
        <div className="container">
          <h1 className="h1">Register</h1>
          <form onSubmit={this.handleSubmit}>
            {this.renderInput("userName", "Username")}
            {this.renderInput("userPassword", "Password", "password")}
            {this.renderInput("userEmail", "Email")}
            {this.renderInput("userPhone", "Contact Number")}
            {this.renderInput("userCountry", "Country")}
            {this.renderButton("Register")}
          </form>
        </div>
      </div>
    );
  }
}

export default Register;
