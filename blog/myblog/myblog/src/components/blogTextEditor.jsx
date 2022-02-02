import React, { Component } from "react";
import "./blogTextEditor.css";
import axios from "axios";
import Navbar from "./navbar";
import { modules } from "../commons/EditorToolbar";
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";
import Quill from "quill";
import ReactQuill from "react-quill";
import ImageResize from "quill-image-resize-module-react";
import "react-quill/dist/quill.snow.css";
Quill.register("modules/ImageResize", ImageResize);

class BlogTextEditor extends Component {
  state = {
    blog: {
      blogTitle: "",
      blogDescription: "",
      blogContent: "",
      blogCategory: "",
      createDate: new Date(),
      isPublish: "false",
      lastModified: new Date(),
      userEmail: "",
    },
  };
  submitblog = () => {
    const blogsubmitted = this.state.blog;

    const email = localStorage.getItem("userEmail");
    console.log(email);
    const combined = { blog: blogsubmitted, userEmail: email };

    axios
      .post("http://localhost:3002/blog/blogsubmitted", combined)
      .then(function (response) {
        console.log(response);
      });
  };

  modules = modules();

  onChangeBlogTitle = (value) => {
    this.setState({
      blog: {
        ...this.state.blog,
        blogTitle: value,
      },
    });
  };

  onChangeBlogContent = (value) => {
    this.setState({
      blog: {
        ...this.state.blog,
        blogContent: value,
      },
    });
  };

  onChangeBlogDescription = (value) => {
    this.setState({
      blog: {
        ...this.state.blog,
        blogDescription: value,
      },
    });
  };

  onChangeBlogCategory = (value) => {
    this.setState({
      blog: {
        ...this.state.blog,
        blogCategory: value,
      },
    });
  };

  render() {
    return (
      <React.Fragment>
        <div>
          <Navbar />
        </div>
        <div id="bp">
          <div class="container-lg" id="cc1">
            <Row>
              <Col>
                <Card id="uniqueCard">
                  <CardBody>
                    <FormGroup>
                      <Label>Title</Label>
                      <Input
                        type="text"
                        name="blogTitle"
                        id="blogTitle"
                        placeholder="Enter Blog Title Here"
                        onChange={(e) => this.onChangeBlogTitle(e.target.value)}
                        value={this.state.blog.blogTitle}
                      ></Input>
                    </FormGroup>
                  </CardBody>
                </Card>
              </Col>
              <Col>
                <Card id="uniqueCard">
                  <CardBody>
                    <FormGroup>
                      <Label>Description</Label>
                      <Input
                        type="text"
                        name="blogDescription"
                        id="blogDescription"
                        placeholder="Enter Blog Description Here"
                        onChange={(e) =>
                          this.onChangeBlogDescription(e.target.value)
                        }
                        value={this.state.blog.blogDescription}
                      ></Input>
                    </FormGroup>
                  </CardBody>
                </Card>
              </Col>
              <Col>
                <Card id="uniqueCard">
                  <CardBody>
                    <FormGroup>
                      <Label>Category</Label>
                      <Input
                        type="select"
                        name="category"
                        id="category"
                        value={this.state.blog.blogCategory}
                        onChange={(e) =>
                          this.onChangeBlogCategory(e.target.value)
                        }
                      >
                        <option></option>
                        <option>entertainment</option>
                        <option>fashion</option>
                        <option>fitness</option>
                        <option>food</option>
                        <option>lifestyle</option>
                        <option>music</option>
                        <option>political</option>
                        <option>sports</option>
                        <option>travel</option>
                      </Input>
                    </FormGroup>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>

          <div class="container-lg" id="cc1">
            <Row>
              <Col>
                <FormGroup className="mt-3">
                  <ReactQuill
                    ref={(el) => (this.quill = el)}
                    value={this.state.blog.blogContent}
                    onChange={(e) => this.onChangeBlogContent(e)}
                    theme="snow"
                    placeholder="Enter Blog Content Here..........."
                    modules={this.modules}
                  ></ReactQuill>
                </FormGroup>
              </Col>
              </Row>
              <Row>
              <button
              style={{width:"20%"}}
              onClick={this.submitblog}
              className="btn btn-lg mb-5"
              id="btn1"
            >
              Submit Blog
            </button>
            </Row>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BlogTextEditor;
