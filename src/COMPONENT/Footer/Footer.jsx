import React from "react";
import './Footer.css'
import wp from '../ASSET/wp.png'
import insta from '../ASSET/inssst.png'
import printrest from '../ASSET/print.png'
const Footer = () =>{
    return(
        <>
        <div className="footer">
            <div className="footer-logo">
                <img src="" alt="" />
                <p>SHOPPER</p>
            </div>
            <ul className="footer-links">
                <li>Compony</li>
                <li>Products</li>
                <li>Office</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        

        <div className="footer-social-icon">
            <div className="footer-container">
                <img className="imgesss" src={insta} alt="instagram" />
            </div>
            <div className="footer-container">
                <img className="imgesss" src={printrest} alt="pintrest" />
            </div>
            <div className="footer-container">
                <img className="imgesss" src={wp} alt="whatsapp" />
            </div>
            </div>
            <div className="footer-copy">
                <hr />
                <p>Copyright @2024 - All Right Reserved</p>
            </div>
        
        </div>

        </>
    )
};

export default Footer;