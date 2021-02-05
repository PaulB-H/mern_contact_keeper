import { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <div class="container">
          <Switch></Switch>
        </div>
      </Fragment>
    </Router>
  );
};

export default App;
