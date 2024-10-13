import React from "react";
import './CSS/Login.css'
const LoginSingup = () =>{
    return(
        <>
     <div className="loginsignup">
        <div className="loginsignup-container">
            <h1>Sing Up</h1>
            <div className="loginsingh-fields">
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Email Address" />
            <input type="password" placeholder="Password" />
            </div>
            <button>Continue</button>
            <p className="loginsignup-login">
                Alredy have an account <span>Login here</span>
            </p>
            <div className="loginsignup-agree">
                <input type="checkbox"  name="" id=""/>
                <p>By continuning , i agree to the terms of use & privacy</p>
            </div>
        </div>
     </div>
     
        </>
    )
}

export default LoginSingup ;