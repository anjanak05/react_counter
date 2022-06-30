import React from "react";
import LabelPrice from "./LabelPrice";
import Quantity from "./Quantity";

const CartItems = ({id,handleQty, name, qty, price}) => {
  return <div style={{display:"flex",margin:"auto", width:"100%", border:"1px solid green", justifyContent:"space-evenly"}}>
<LabelPrice name={name} price={price}>/</LabelPrice>

<Quantity handleQty={handleQty}  qty={qty} id={id}></Quantity>

  </div>;
};

export default CartItems;
