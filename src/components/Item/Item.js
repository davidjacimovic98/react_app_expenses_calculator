import React from "react";
import styles from "./Item.module.css";
import { MdEdit } from "react-icons/md";
import { FaTrash } from "react-icons/fa";
import { useExpanseContext } from "../../context/expense-context";

const Item = ({ id, charge, amount }) => {
  const { handleDeleteSingleItem, handleEditItem } = useExpanseContext();

  return (
    <li className={styles.item}>
      <div className={styles.info}>
        <span className={styles.charge}>{charge}</span>
        <span className={styles.amount}>$ {amount}</span>
      </div>
      <div>
        <button className={styles.edit_btn} onClick={() => handleEditItem(id)}>
          <MdEdit />
        </button>
        <button
          className={styles.delete_btn}
          onClick={() => handleDeleteSingleItem(id)}
        >
          <FaTrash />
        </button>
      </div>
    </li>
  );
};

export default Item;
