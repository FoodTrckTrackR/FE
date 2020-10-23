import React, {useState, useEffect} from 'react';
import {Switch, Route, Link} from "react-router-dom"
// import * as yup from "yup"
// import schema from "./Validation/form-schema"
import './App.css'
import logo from "./Images/food-truck-trackr_logo.png"
import SignUp from "./Components/SignUp"
import LogIn from "./Components/LogIn"
// import axios from 'axios';

import {connect} from 'react-redux'
// import {registerMe} from './actions'



const App = () => {
 

  return (
    <div className="App">
      <div className="nav-top">
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

      <div className="nav-bottom">
        <Link to="/">Home</Link>
        <Link to="SignUp">Sign-up</Link>
        <Link to="LogIn">Log-in</Link>
      </div>
    </div>
  );
}


export default connect((null), {})(App)
