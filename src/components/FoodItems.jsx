/* eslint-disable react/prop-types */
import { useState } from "react";
import Item from "./Item";
const FoodItems = ({ items }) => {
  const [activeItems, setActiveItems] = useState([]);

  let onBuyButton = (event, item) => {
    let newItems = [...activeItems, item];
    setActiveItems(newItems);
  };

  return (
    <div>
      <ul className="list-group">
        {items.map((item) => (
          <Item
            key={item}
            foodItem={item}
            bought={activeItems.includes(item)}
            handleBuyButton={(event) => onBuyButton(event, item)}
          />
        ))}
      </ul>
    </div>
  );
};

export default FoodItems;
