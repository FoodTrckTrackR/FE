import React from "react"
import logo from "../Images/food-truck-trackr_logo.png"
import {Link} from "react-router-dom"
import "./SignUp.css"
import { connect } from "react-redux"


const SignUp = (props) => {
    const { values, change, submit, errors, disabled, Users } = props

    const onChange = evt => {
        const { name, value, type, checked } = evt.target
        const valueToUse = type === "checkbox" ? checked : value
        change(name, valueToUse)
    }

    const onSubmit = evt => {
        evt.preventDefault()
        // submit()
        console.log('test');
        props.registerMe(Users)
    }

    return (
        <form className="signup-container" onSubmit={onSubmit} >
            <div className="title-container">
                <img src={logo} alt="Logo" />
                <h2>Sign-up</h2>
                <div className="error-container">
                    <div>{errors.username}</div>
                    <div>{errors.password}</div>
                    <div>{errors.email}</div>
                    <div>{errors.tos}</div>
                </div>
            </div>
            <div className="input-container">
                <label>Username:
                    <input name="username" type="text" placeholder="username" onChange={onChange} value={values.username} />
                </label>
                <label>Password:
                    <input name="password" type="password" placeholder="password" onChange={onChange} value={values.password} />
                </label>
                <label>E-Mail:
                    <input name="email" type="email" placeholder="email" onChange={onChange} value={values.email} />
                </label>
                <label id="tos">Terms Of Service
                    <input name="tos" type="checkbox" onChange={onChange} checked={values.tos} />
                </label>
            </div>
            <div className="submit-container">
                <button disabled={disabled}>Submit</button>
            </div>
            <Link to="/LogIn" className="already-link">Already a member?</Link>
        </form>
    )
}

// const mapStateToProps = state => {
//     console.log(state);
//     return {
//       FormValues: state.FormValues,
//       FormErrors: state.FormErrors,
//       Users: state.Users,
//       Disabled: state.Disabled
  
//     }
//   }

export default connect(null, {}) (SignUp)