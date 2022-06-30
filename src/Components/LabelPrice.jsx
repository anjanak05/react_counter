import React from "react";

const LabelPrice = ({name, price}) => {
  return (
    <div
      style={{ display: "flex", justifyContent: "space-between", width: "30%" }}
    >
      <h4>{name}</h4>

      <p>₹ {price}</p>
    </div>
  );
};

export default LabelPrice;
