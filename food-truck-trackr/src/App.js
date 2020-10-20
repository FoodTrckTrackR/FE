import React, {useState, useEffect} from 'react';
import {Switch, Route, Link} from "react-router-dom"
import * as yup from "yup"
import schema from "./Validation/form-schema"
import './App.css'
import logo from "./Images/food-truck-trackr_logo.png"
import SignUp from "./Components/SignUp"
import LogIn from "./Components/LogIn"
import Axios from 'axios';

import {connect} from 'react-redux'

const initialFormValues = {
  username: "",
  password: "",
  email: "",
  tos: false,
}

const initialFormErrors = {
  username: "",
  password: "",
  email: "",
  tos: "",
}

const initialUsers = []
const initialDisabled = true

const App = (props) => {
  console.log(props);
  const [users, setUsers] = useState(initialUsers)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  const inputChange = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        })
      })
      .catch(err => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        })
      })

    setFormValues({
      ...formValues,
      [name]: value,
    })
  }

  const formSubmit =() => {
    let newUser = {
      name: formValues.username.trim(),
      password: formValues.password,
      email: formValues.email.trim(),
      tos: formValues.tos,
    }
    Axios.post("https://reqres.in/api/users", newUser)
      .then(res => {
        console.log(res)
        setUsers([...users, res.data])
        setFormValues(initialFormValues)
      })
      .catch(err => {
        console.log(err)
      })
  }

  useEffect(() => {
    schema.isValid(formValues).then(valid => {
      setDisabled(!valid)
    })
  }, [formValues])

  return (
    <div className="App">
      <div className="nav-top">
        <Link to="/">Home</Link>
        <Link to="SignUp">Sign-up</Link>
        <Link to="LogIn">Log-in</Link>
      </div>

      <Switch>
        <Route path="/SignUp">
          <SignUp values={formValues} change={inputChange} submit={formSubmit} errors={formErrors} disabled={disabled} />
        </Route>

        <Route path="/LogIn">
          <LogIn values={formValues} change={inputChange} submit={formSubmit} errors={formErrors} disabled={disabled} />
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

const mapToStateProps = state => {
  console.log(state);
  return {
    initialFormValues: state.initialFormValues,
    initialFormErrors: state.initialFormErrors

  }
}
export default connect((mapToStateProps), {})(App)