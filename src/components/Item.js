import React from "react";
import { useState}  from "react"

function Item({ name, category }) {

  const [item,handleItem]=useState(true);

  const shop=()=>{
    handleItem(!item)


  }


  const itemCart= item ? "Add to Cart" : "Remove from Cart"

  return (
    <li className= {item ? "Add to Cart" : "in-cart"}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={shop} className="add">{itemCart}</button>
    </li>
  );
}

export default Item;
