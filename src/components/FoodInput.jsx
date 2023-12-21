/* eslint-disable react/prop-types */
import styles from "./FoodInput.module.css";

const FoodInput = ({handleOnKeyDown}) => {
   
  return (
    <input
      type="text"
      placeholder="Enter Food Item here"
      className={styles.foodInput}
      onKeyDown={handleOnKeyDown}
    />
  );
};

export default FoodInput;
