import React from "react";

import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Signup from "./components/Signup";
import Login from "./components/Login";
import QRScanner from "./pages/QRScanner";
import UserProfileCard from './UserProfileCard/UserProfileCard'; 
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    avatarUrl: 'https://example.com/avatar.jpg',
  };

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

      <UserProfileCard
        name={user.name}
        email={user.email}
        avatarUrl={user.avatarUrl}
      />
      <ToastContainer theme="colored" />
    </div>
  );
}

export default App;
