import React from "react";
import './Popular.css'

import data_product from "../ASSET/data";
import Item from "../ITEMS/Item";

const Popular = () =>{
    return(
<>   
<div className="Popular">
    <h1>POPULAR IN MEN</h1>
    <hr />
    <div className="popular-item">
        {data_product.map((item,i) => {
            return <Item kye ={i} id = {item.id} name = {item.name} image = {item.image} new_price = {item.new_price}  old_price = {item.old_price}  />
        })}
    </div>
</div>

</>
    )
}

export default Popular ;
