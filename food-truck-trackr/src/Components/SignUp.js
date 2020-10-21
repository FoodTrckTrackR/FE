import React from "react"
import logo from "../Images/food-truck-trackr_logo.png"
import {Link} from "react-router-dom"
import "./SignUp.css"

export default function SignUp (props) {
    const { values, change, submit, errors, disabled } = props

    const onChange = evt => {
        const { name, value, type, checked } = evt.target
        const valueToUse = type === "checkbox" ? checked : value
        change(name, valueToUse)
    }

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
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
                    <div>{errors.role}</div>
                    <div>{errors.tos}</div>
                </div>
            </div>
            <div className="input-container">
                <label>Username:
                    <input name="username" type="text" placeholder="username" onChange={onChange} value={values.username} />
                </label>
                <label>Password:
                    <input name="password" type="text" placeholder="password" onChange={onChange} value={values.password} />
                </label>
                <label>E-Mail:
                    <input name="email" type="email" placeholder="email" onChange={onChange} value={values.email} />
                </label>
                <label>Role:
                    <select name="role" value={values.role} onChange={onChange}>
                        <option value="">--select role--</option>
                        <option value="diner">Diner</option>
                        <option value="operator">Operator</option>
                    </select>
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