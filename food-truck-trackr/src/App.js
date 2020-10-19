import React from 'react';
import {Switch, Route, Link} from "react-router-dom"
import './App.css';
import logo from "./Images/food-truck-trackr_logo.png"
import SignUp from "./Components/SignUp"
import LogIn from "./Components/LogIn"

export default function App() {
  return (
    <div className="App">
      <div className="nav">
        <Link to="/">Home</Link>
        <Link to="SignUp">Sign-up</Link>
        <Link to="LogIn">Log-in</Link>
      </div>

      <Switch>
        <Route path="/SignUp">
          <SignUp />
        </Route>

        <Route path="/LogIn">
          <LogIn />
        </Route>

        <Route path="/">
          <div className="title-container">
            <img src={logo} alt="Logo" />
            <h1>Food Truck<br></br>TrackR</h1>
          </div>
        </Route>
      </Switch>
      
      <div className="nav">
        <Link to="/">Home</Link>
        <Link to="Sign-up">Sign-up</Link>
        <Link to="Log-in">Log-in</Link>
      </div>
    </div>
  );
}
