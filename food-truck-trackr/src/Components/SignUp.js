import React, {useState, useEffect} from "react"
import logo from "../Images/food-truck-trackr_logo.png"
import {Link} from "react-router-dom"
import "./SignUp.css"
import * as yup from "yup"
import schema from "../Validation/form-schema"
import { connect } from "react-redux"
import { registerMe } from '../actions'


const initialFormValues = {
    username: "",
    password: "",
    email: "",
    role: "",
    tos: false,
  }
  
  const initialFormErrors = {
    username: "",
    password: "",
    email: "",
    role: "",
    tos: "",
  }
  
//   const newUsers = []
  const initialDisabled = true

const SignUp = (props) => {
    // const [users, setUsers] = useState(newUsers)
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
    
    
    useEffect(() => {
        schema.isValid(formValues).then(valid => {
            setDisabled(!valid)
        })
    }, [formValues])
    
    const onChange = evt => {
        const { name, value, type, checked } = evt.target
        const valueToUse = type === "checkbox" ? checked : value
        inputChange(name, valueToUse)
    }
    
    // const formSubmit = () => {
    // }
    
    const onSubmit = evt => {
        evt.preventDefault()
        let newUser = {
            name: formValues.username.trim(),
            password: formValues.password,
            email: formValues.email.trim(),
            role: formValues.role,
            tos: formValues.tos,
        }
        props.registerMe(newUser)
        // submit();
        console.log('test');
    }
    
    return (
        <form className="signup-container" onSubmit={onSubmit} >
            <div className="title-container">
                <img src={logo} alt="Logo" />
                <h2>Sign-up</h2>
                <div className="error-container">
                    <div>{formErrors.username}</div>
                    <div>{formErrors.password}</div>
                    <div>{formErrors.email}</div>
                    <div>{formErrors.role}</div>
                    <div>{formErrors.tos}</div>
                </div>
            </div>
            <div className="input-container">
                <label>Username:
                    <input name="username" type="text" placeholder="username" onChange={onChange} value={formValues.username} />
                </label>
                <label>Password:
                    <input name="password" type="text" placeholder="password" onChange={onChange} value={formValues.password} />
                </label>
                <label>E-Mail:
                    <input name="email" type="email" placeholder="email" onChange={onChange} value={formValues.email} />
                </label>
                <label>Role:
                    <select name="role" value={formValues.role} onChange={onChange}>
                        <option value="">--select role--</option>
                        <option value="diner">Diner</option>
                        <option value="operator">Operator</option>
                    </select>
                </label>
                <label id="tos">Terms Of Service
                    <input name="tos" type="checkbox" onChange={onChange} checked={formValues.tos} />
                </label>
            </div>
            <div className="submit-container">
                <button disabled={disabled}>Submit</button>
            </div>
            <Link to="/LogIn" className="already-link">Already a member?</Link>
        </form>
    )
}

export default connect(null, {registerMe}) (SignUp)