import React from 'react'

const Quantity = ({qty, id, handleQty}) => {
  return (
    <div style={{display:"flex"}}> 
        <button style={{padding:"0.5rem"}}  onClick={()=> handleQty(id, -1)}>-</button>
     <h6 style={{padding:"0.5rem"}}>{qty}</h6>
    
    <button style={{padding:"0.5rem"}} onClick={()=> handleQty(id, +1)} >+</button>
    
    </div>
  )
}

export default Quantity