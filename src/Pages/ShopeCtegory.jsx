import Item from '../COMPONENT/ITEMS/Item';
import New_data from '../COMPONENT/ASSET/New_data';
import { ShopeContext } from '../Context/ShopeContext';
import React, { useContext } from "react";
import dropwon from '../COMPONENT/ASSET/dropdown.png'
import "./CSS/Shopectegory.css"
const ShopeCtegory = (props) =>{
    const {New_data} = useContext (ShopeContext);
    return(
        <>
     <div className="shope-category">
        <img className='shopecategory-banner' src={props.banner} alt="" />
        <div className="shopecategory-indexSort">
            <p>
                <span>
                    Showing1-12
                </span> out of 36 Product
            </p>
            <div className="shopcategory-sort">
                sort by <img  className='dropdown' src={dropwon } alt="" />
            </div>
        </div>
<div className="shopcategory-product">
    {New_data.map((ele , i )=>{
if(props.category === ele.category){
    return <Item kye ={i} id ={ele.id} name = {ele.name} image = {ele.image} new_price = {ele.new_price} old_price = {ele.old_price} />
}
else{
    return null
}
    })}
</div>
<div className="shopcategory-loadmore">
    Explore more 
</div>
     </div>
     
        </>
    )
}

export default ShopeCtegory ;