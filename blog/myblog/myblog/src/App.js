// import Login from "./components/loginForm";
import Register from "./components/registerForm";

import "./App.css";
import { Route, Switch } from "react-router-dom";
import AdminNavbar from "./components/AdminNavbar";
import Navbar from "./components/navbar";
import Home from "./components/home";
import Catergory from "./components/category";
import sports from "./components/sports";
import Bookmark from "./components/bookmark";
import Sigin from "./components/signin";
import Profilepage from "./components/profile";
import { BrowserRouter } from "react-router-dom";
import Entertainment from "./components/entertainment";
import Lifestyle from "./components/lifestyle";
import Fashion from "./components/fashion";
import Travel from "./components/travel";
import Food from "./components/food";
import Political from "./components/political";
import Fitness from "./components/fitness";
import Music from "./components/music";
import Login from "./components/loginForm";
import Readmore from "./components/readmore";

import Adminpage from "./components/Adminpage";
import userManage from "./components/Usermanage";
import userActivity from "./components/useractivity";
import BlogTextEditor from "./components/blogTextEditor";
import Readmoreadmin from "./components/readmoreadmin";

function App() {
  return (
    <div>
      {/* <Navbar /> */}
      <BrowserRouter>
        <Switch>
          <Route path={"/home"} exact component={Home} />
          <Route path={"/registerform"} exact component={Register} />
          <Route path={"/Adminpage"} exact component={Adminpage} />
          <Route path={"/usermanage"} component={userManage} />
          <Route path={"/blogTextEditor"} component={BlogTextEditor} />
          <Route path={"/useractivity"} component={userActivity} />
          <Route path={"/sports"} component={sports} />
          <Route path={"/fitness"} component={Fitness} />
          <Route path={"/music"} component={Music} />
          <Route path={"/political"} component={Political} />
          <Route path={"/entertainment"} component={Entertainment} />
          <Route path={"/food"} component={Food} />
          <Route path={"/lifestyle"} component={Lifestyle} />
          <Route path={"/fashion"} component={Fashion} />
          <Route path={"/travel"} component={Travel} />
          <Route path={"/category"} component={Catergory} />
          <Route path={"/bookmark"} component={Bookmark} />
          <Route path={"/profile"} component={Profilepage} />
          <Route path={"/"} component={Login} />
          <Route path={"/readmore"} component={Readmore} />
          <Route path={"/readmoreadmin"} component={Readmoreadmin} />
        </Switch>
      </BrowserRouter>
    </div>

    // <div>
    //   {/* <Login></Login> */}
    //   {/* <Register></Register> */}
    // </div>
  );
}
export default App;
