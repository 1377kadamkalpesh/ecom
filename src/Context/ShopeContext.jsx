import React, { createContext, useState } from "react";
import New_data from "../COMPONENT/ASSET/New_data";
export const ShopeContext = createContext(null);

const getDefaultCart = () =>{
    let cart = {};
    for(let index = 0 ; index <New_data; index++){
cart [index]= 0 ;
    }
    return cart
    }

const ShopeContextProvider = (props) =>{
    const [Crtitem , setitem] = useState (getDefaultCart);

    const contextvalue = {New_data,Crtitem};
    console.log(Crtitem )

    
    return(
        <ShopeContext.Provider value={contextvalue}>
            {props.children}
        </ShopeContext.Provider>
    )
}


export default ShopeContextProvider ;