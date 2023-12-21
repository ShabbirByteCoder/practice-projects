/* eslint-disable react/prop-types */
import styles from "./item.module.css";
const Item = ({ foodItem, handleBuyButton, bought }) => {
  return (
    <li className={`list-group-item ${bought && "active"}`}>
      <span className={styles.item}>{foodItem}</span>
      <button
        type="button"
        className={`${styles.button} btn btn-info`}
        onClick={handleBuyButton}
      >
        Buy
      </button>
    </li>
  );
};

export default Item;
