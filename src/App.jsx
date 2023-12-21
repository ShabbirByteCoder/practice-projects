import { useState } from "react";
import "./App.css";
import Container from "./components/Conntainer";
import ErrorMessage from "./components/ErrorMessage";
import FoodInput from "./components/FoodInput";
import FoodItems from "./components/FoodItems";

function App() {
  const [foodItems, setFoodItems] = useState([])

  const onKeyDown = (event) => {
    let newFoodItem = event.target.value
    // console.log(newFoodItem);
    if (event.key === "Enter") {
      let newItems = [...foodItems, newFoodItem];
      setFoodItems(newItems)
      event.target.value = ""
    }
}

  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy Food</h1>
        <FoodInput handleOnKeyDown={onKeyDown}/>
        <ErrorMessage items={foodItems} />
        <FoodItems items={foodItems} />
      </Container>

      {/* <Container>
        <p>
          Above is the list of healthy foods that are good for your health and
          well being.
        </p>
      </Container> */}
    </>
  );
}

export default App;
