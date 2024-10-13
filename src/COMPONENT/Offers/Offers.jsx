import React from "react";
import './Offers.css'
import offerimg from '../ASSET/offerimg.png'
const Offers = () =>{
    return(
        <>
<div className="Offers">
    <div className="offers-left">
<h1>Exclusive</h1>
<h1>Offer For You</h1>
<p>ONLY ON BEST SELLERS PRODUCTS</p>
<button>Check Cow</button>
    </div>
    <div className="offers-right">
        <img src={offerimg} alt="" />
    </div>
</div>

        </>
    )
}

export default Offers;