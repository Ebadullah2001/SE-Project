// import React, { Component } from "react";
// import "./readmore.css";
// import Navbar from "./navbar";
// import Home from "./home";
// import axios from "axios";

// class Readmoreadmin extends React.Component {
//   state = {
//     currentBlog: [],
//   };

//   async componentDidMount() {
//     //localStorage.setItem("user_id", 1234)
//     const blogid = localStorage.getItem("blogId");
//     console.log(blogid);
//     const { data: blogs } = await axios.get(
//       "http://localhost:3002/blog/adminblogs"
//     );
//     const currentBlog = blogs.filter((blog) => blog._id === blogid);
//     console.log(currentBlog);
//     this.setState({ currentBlog });
//   }
//   render() {
//     return (
//       <React.Fragment>
//         <div class="container-sm" id="chjknbk">
//           <p>
//             <p>
//               <h2>
//                 {this.state.currentBlog.map((blog, index) => (
//                   <div key={index}>{blog.blogCategory}</div>
//                 ))}
//               </h2>
//             </p>
//           </p>
//           <p>
//             <p>
//               <h3>
//                 {this.state.currentBlog.map((blog, index) => (
//                   <div key={index}>{blog.blogContent}</div>
//                 ))}
//               </h3>
//             </p>
//           </p>
//         </div>
//       </React.Fragment>
//     );
//   }
// }

// export default Readmoreadmin;

import React, { Component } from "react";
import "./readmore.css";
import AdminNavbar from "./AdminNavbar";
import axios from "axios";

class Readmore extends Component {
  state = {
    currentBlog: [],
    htmlStr: "",
  };

  addBookmark = () => {
    console.log("hello");
    const email = localStorage.getItem("userEmail");
    console.log(email);
    const bookmark = this.state.currentBlog;
    console.log(bookmark);
    const combined = { userEmail: email, userBookmark: bookmark };
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ data: combined }),
    };
    fetch("http://localhost:3002/users/bookmarkcombined", requestOptions)
      .then((response) => response.json())
      .then((data) => this.setState({ data: combined }));
  };

  async componentDidMount() {
    const blogid = localStorage.getItem("blogId");
    const { data: blogs } = await axios.get("http://localhost:3002/blog/adminblogs");
    const currentBlog = blogs.filter((blog) => blog._id === blogid);
    const htmlStr = currentBlog[0].blogContent;
    this.setState({ currentBlog, htmlStr });
  }

  render() {
    const blogContent = this.state.htmlStr;
    return (
      <div>
        <div className="container-fluid">
          <AdminNavbar />
        </div>
        <div
          class="container-sm border border-warning rounded-3 border-5"
          id="chjknbk"
        >
          <div>
            <h2>
              {this.state.currentBlog.map((blog, index) => (
                <div key={index}>{blog.blogTitle}</div>
              ))}
            </h2>
          </div>
          <div dangerouslySetInnerHTML={{ __html: blogContent }}></div>
         
        </div>
      </div>
    );
  }
}

export default Readmore;
