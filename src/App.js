import React from "react";

import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Signup from "./components/Signup";
import Login from "./components/Login";
import QRScanner from "./pages/QRScanner";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/about-us" component={AboutUs} />
          <Route exact path="/qr-scanner" component={QRScanner} />
        </Switch>
      </Router>
      <ToastContainer theme="colored" />
    </div>
  );
}

export default App;
