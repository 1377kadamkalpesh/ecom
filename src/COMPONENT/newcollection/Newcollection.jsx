import React from "react";
import './Newcollection.css'
import new_collection from "../ASSET/new_collectiondata";
import Item from "../ITEMS/Item";
const Newcollection = () =>{
    return(
        <>
 <div className="new-collection">
<h1>NEW COLLECTION</h1>
<hr />
<div className="collection">
{new_collection.map((ele,i)=>{
return <Item kye ={i} id ={ele.id} name = {ele.name} image = {ele.image} new_price = {ele.new_price} old_price = {ele.old_price}/>
})}
</div>
 </div>

                </>
    )
};

export default Newcollection;