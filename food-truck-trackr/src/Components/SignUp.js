import React from "react"
import logo from "../Images/food-truck-trackr_logo.png"
import {Link} from "react-router-dom"
import "./SignUp.css"

export default function SignUp () {
    return (
        <form className="signup-container">
            <div className="title-container">
                <img src={logo} alt="Logo" />
                <h2>Sign-up</h2>
            </div>
            <div className="input-container">
                <label>Username:
                    <input name="username" type="text" placeholder="username" />
                </label>
                <label>Password:
                    <input name="password" type="text" placeholder="password" />
                </label>
                <label>E-Mail:
                    <input name="email" type="text" placeholder="email" />
                </label>
                <label id="tos">Terms Of Service
                    <input name="tos" type="checkbox" />
                </label>
            </div>
            <div className="submit-container">
                <button>Submit</button>
            </div>
            <Link to="/LogIn" id="already-a-member">Already a member?</Link>
        </form>
    )
}