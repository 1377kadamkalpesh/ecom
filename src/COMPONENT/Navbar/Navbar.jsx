import React, { useState } from "react";
import logo from "../ASSET/maain logo2.jpg";
import cart from "../ASSET/cartimg.png";
import "./Navbar.css"
import { Link } from "react-router-dom";
const Navbar = () =>{
    const [menu , setmenu]= useState("shope")
    return(
        <>
        <div className="navbar">

            <div className="nav-logo">
            <img className="logo-img" src={logo} alt="" />
            <p>SHOPER</p>
            </div>
            <ul className="nav-menu">
                <li onClick={() => { setmenu ("shope")}} > <Link style={{textDecoration:'none'}} to="/">Shope </Link>  {menu === "shope"?<hr />:<></>} </li>
                <li onClick={() => { setmenu ("Mens")}} > <Link style={{textDecoration:'none'}} to="/mens">Men </Link>   {menu === "Mens"?<hr />:<></>} </li>
                <li onClick={() => { setmenu ("Womens")}}> <Link style={{textDecoration:'none'}} to="/womens"> Women </Link>    {menu === "Womens"?<hr />:<></>} </li>
                <li onClick={() => { setmenu ("Kids")}} > <Link style={{textDecoration:'none'}} to="/Kids"> Kids </Link>  {menu === "Kids"?<hr />:<></>}  </li>
            </ul>
            <div className="nav-login-cart">
  <Link to="/Login"> <button>Login</button></Link>
  {/* <Link to="/cart"> <img className="logo-img"  src={cart} alt="" /></Link> */}
  

{/* <div className="nav-cart-count">0</div> */}



</div>
        </div>
        </>
    )
}

export default Navbar ;