
import React, { useContext } from "react";
import { ShopeContext } from "../Context/ShopeContext";
import { useParams } from "react-router-dom";
import Productdisplay from "../COMPONENT/Productdisplay/Productdisplay";
import Breadcrum from "../COMPONENT/Bredcrums/Bredcrum";
import Popular from "../COMPONENT/Popular/Popular";
// import Productdisplay from "../COMPONENT/Productdisplay/productdisplay";

const Product = () =>{
    const{New_data} = useContext (ShopeContext);
    const {productId} = useParams();
    const product = New_data.find((e) => e.id === Number(productId))
    return(
        <>
            <div>
                <Breadcrum product = {product}/>
                <Productdisplay product = {product}/>
            </div>
        </>
    )
}

export default Product;