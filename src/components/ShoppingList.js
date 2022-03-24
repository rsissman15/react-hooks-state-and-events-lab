import React from "react";
import { useState}  from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  const[itemsFilter, setFilter]=useState("All");


  const itemstoDisplay = items.filter((item) => {
    if (itemsFilter === "All") {
      return true;
    } else {
      return item.category === itemsFilter;
    }
  });

  function handleFilterChange(event) {
    setFilter(event.target.value);

  }
  

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleFilterChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemstoDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
