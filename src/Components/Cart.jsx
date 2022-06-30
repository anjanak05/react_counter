import React, { useState } from "react";
import CartItems from "./CartItems";
import Total from "./Total";

const initData = [
  {id: 1,product_name: "Noodles",price: 30,qty: 1},
{id: 2,product_name: "Biriyani",price: 90,qty: 2},
{id: 3,product_name: "Chips",price: 10,qty: 3},
]

function TotalCost(prod){
  return prod.reduce((acc, e)=>
  acc + (e.qty*e.price),0)
}




export const Cart = () => {
  const [data, setData] = useState(initData)

 const handleQty = (id, quant) =>{
   let updteData = data.map((elem)=>{
if(elem.id===id){
return{
  ...elem,
  qty:elem.qty + quant
}
}else{
  return elem
}
   }) 

   setData(updteData)
 }
  return (
    <div style={{ width:"50%", margin:"auto", border:"1px solid red"}}>
 
 <div>
   {
     data.map((e)=>
<CartItems handleQty={handleQty} id={e.id} name={e.product_name}  qty={e.qty} price={e.price}></CartItems>
     )
   }
 </div>
      
      <Total cost={TotalCost(data)}> </Total>
    </div>
  );
};
