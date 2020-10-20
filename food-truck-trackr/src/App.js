import React, {useState} from 'react';
import {Switch, Route, Link} from "react-router-dom"
import './App.css'
import logo from "./Images/food-truck-trackr_logo.png"
import SignUp from "./Components/SignUp"
import LogIn from "./Components/LogIn"

const initialFormValues = {
  username: "",
  password: "",
  email: "",
  tos: false,
}

const initialUsers = []

export default function App() {
  const [users, setUsers] = useState(initialUsers)
  const [formValues, setFormValues] = useState(initialFormValues)

  const inputChange = (name, value) => {
    setFormValues({
      ...formValues,
      [name]: value,
    })
  }

  const postNewUser = newUser => {
    setUsers(users.concat(newUser))
    setFormValues(initialFormValues)
  }

  const formSubmit =() => {
    const newUser = {
      name: formValues.username.trim(),
      password: formValues.password,
      email: formValues.email.trim(),
      tos: formValues.tos,
    }
    postNewUser(newUser)
  }
  console.log(users)
  return (
    <div className="App">
      <div className="nav-top">
        <Link to="/">Home</Link>
        <Link to="SignUp">Sign-up</Link>
        <Link to="LogIn">Log-in</Link>
      </div>

      <Switch>
        <Route path="/SignUp">
          <SignUp values={formValues} change={inputChange} submit={formSubmit} />
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
