import React from "react";
import './Productdisplay.css'
import starimg from '../ASSET/starimg.avif'
const Productdisplay = (props) => {
    const {product} = props
return(
    <>
    <div className="productdisplay">
<div className="display-left">
    <div className="imglist">
        <img src={product.image} alt="" />
        <img src={product.image} alt="" />
        <img src={product.image} alt="" />
        <img src={product.image} alt="" />
            </div>
            <div className="productdisplay-img">
                <img className="product-dislpay-mainimg" src={product.image} alt="" />
            </div>
</div>
<div className="display-right">
    <h1>{product.name}</h1>
    <div className="product-display-star">
    <img className="starname" src={starimg} alt="" />
    <img className="starname" src={starimg} alt="" />
    <img className="starname" src={starimg} alt="" />
    <img className="starname" src={starimg} alt="" />
    <img className="starname" src={starimg} alt="" />
<p>(122)</p>
    </div>
    <div className="productdisplay-right-price">
<div className="productdisplay-right-prise-old">
    ${product.old_price}
</div>
<div className="productdisplay-right-prise-new">
    ${product.new_price}
</div>
    </div>
    <div className="productdisplay-right-discription">
        
Before you begin writing or hire a writer: Know your audience. Find your tone.
As you're writing: Tell a story. Use emotional language. Engage the senses.
    </div>
    <div className="product-diplay-size">
        <h1>select Size</h1>
        <div className="product-right-size">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
        </div>
<button>ADD TO CART</button>
<p className="productdisplay-right-category"> <span>category : </span>  Men, t-shirt ,shirt </p>
<p className="productdisplay-right-category"> <span>Tag : </span>  modern , latest , </p>
    </div>
</div>
    </div>
    </>
)
}

export default Productdisplay ; 