import React from "react";
import { useExpanseContext } from "../../context/expense-context";
import styles from "./Alert.module.css";

const Alert = () => {
  const {
    alert: { type, text },
  } = useExpanseContext();

  return <div className={styles[`alert_div_${type}`]}>{text}</div>;
};

export default Alert;
