import React from "react";
import styles from "./Form.module.css";
import { MdSend } from "react-icons/md";
import { useExpanseContext } from "../context/expense-context";

const Form = () => {
  const {
    handleSubmit,
    charge,
    handleCharge,
    amount,
    handleAmount,
    isEditing,
  } = useExpanseContext();

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.center}>
        <div className={styles.group}>
          <label htmlFor="charge">charge</label>
          <input
            type="text"
            id="charge"
            name="charge"
            placeholder="e.g. rent"
            value={charge}
            onChange={handleCharge}
          />
        </div>
        <div className={styles.group}>
          <label htmlFor="amount">amount</label>
          <input
            type="number"
            id="amount"
            name="amount"
            placeholder="e.g. 100"
            value={amount}
            onChange={handleAmount}
          />
        </div>
      </div>
      <button className={styles.submit_btn}>
        {isEditing ? "edit" : "submit"}
        <MdSend className={styles.submit_btn_icon} />
      </button>
    </form>
  );
};

export default Form;
