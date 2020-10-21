import React from "react"
import {Link} from "react-router-dom"
import logo from "../Images/food-truck-trackr_logo.png"

export default function LogIn (props) {
    const { values, change, submit, errors } = props

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
        <form className="signup-container" onSubmit={onSubmit}>
            <div className="title-container">
                <img src={logo} alt="Logo" />
                <h2>Log-in</h2>
                <div className="error-container">
                    <div>{errors.username}</div>
                    <div>{errors.password}</div>
                </div>
            </div>
            <div className="input-container">
                <label>Username:
                    <input name="username" type="text" placeholder="username" onChange={onChange} value={values.username} />
                </label>
                <label>Password:
                    <input name="password" type="password" placeholder="password" onChange={onChange} value={values.password} />
                </label>
            </div>
            <div className="submit-container">
                <button>Submit</button>
            </div>
            <Link to="/SignUp" className="already-link">Not a member yet?</Link>
        </form>
    )
}