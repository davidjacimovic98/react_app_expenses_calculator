import React from "react";
import styles from "./List.module.css";
import Item from "../Item/Item";
import { FaTrash } from "react-icons/fa";
import { useExpanseContext } from "../../context/expense-context";

const List = () => {
  const { expenses, handleClearList } = useExpanseContext();
  return (
    <div className={styles.list_container}>
      <ul>
        {expenses.map((expense) => {
          return <Item key={expense.id} {...expense} />;
        })}
      </ul>
      {expenses.length > 0 && (
        <button className={styles.btn} onClick={handleClearList}>
          clear list <FaTrash className={styles.btn_icon} />
        </button>
      )}
    </div>
  );
};

export default List;
