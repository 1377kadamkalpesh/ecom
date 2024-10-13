import React from "react";
import handimg from '../ASSET/hello-inp-hero.avif'
import newArrow from '../ASSET/newarro.png'
import SEC2IMG from '../ASSET/SEC2IMG.png'
import './Hero.css'
const Hero = () =>{
    return(
        <>
<div className="hero">
    <div className="hero-left">
<h2>NEW ARRIVALS ONLY</h2>
<div>
    <div className="hero-hand-icon">
        <p>new</p>
<img className="handimg" src={handimg} alt="handlogo..." />
    </div>
    <p>Collection</p>
    <p>For everyone</p>
</div>
<div className="hero-latest-btn">
    <div>Latest Collection</div>
    <img className="handimg2" src={newArrow } alt="" />
</div>
    </div>
    <div className="hero-right">
        <img className="hero-img" src={SEC2IMG} alt="" />
    </div>
</div>
        </>
    )
}

export default Hero ;