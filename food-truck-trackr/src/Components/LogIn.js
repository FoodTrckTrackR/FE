import React from "react"
import {Link} from "react-router-dom"
import logo from "../Images/food-truck-trackr_logo.png"

export default function LogIn (props) {
    return (
        <form className="signup-container">
            <div className="title-container">
                <img src={logo} alt="Logo" />
                <h2>Log-in</h2>
            </div>
            <div className="input-container">
                <label>Username:
                    <input name="username" type="text" placeholder="username" />
                </label>
                <label>Password:
                    <input name="password" type="text" placeholder="password" />
                </label>
            </div>
            <div className="submit-container">
                <button>Submit</button>
            </div>
            <Link to="/SignUp" className="already-link">Not a member yet?</Link>
        </form>
    )
}