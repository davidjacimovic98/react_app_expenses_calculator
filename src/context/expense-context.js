import React, { useContext, useEffect, useState } from "react";
import { v4 as uuid } from "uuid";

const ExpanseContext = React.createContext();

const initialExpenses = localStorage.getItem("expenses")
  ? JSON.parse(localStorage.getItem("expenses"))
  : [];

export const ExpanseProvider = ({ children }) => {
  const [expenses, setExpenses] = useState(initialExpenses);
  const [charge, setCharge] = useState("");
  const [amount, setAmount] = useState("");
  const [alert, setAlert] = useState({ show: false });
  const [isEditing, setIsEditing] = useState(false);
  const [editingID, setEditingID] = useState(null);

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const handleCharge = (e) => {
    setCharge(e.target.value);
  };

  const handleAmount = (e) => {
    setAmount(e.target.value);
  };

  const handleAlert = ({ type, text }) => {
    setAlert({ show: true, type, text });
    setTimeout(() => {
      setAlert({ show: false });
    }, 4000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (charge !== "" && amount > 0) {
      if (isEditing) {
        let tempExpenses = expenses.map((item) => {
          return item.id === editingID ? { ...item, charge, amount } : item;
        });
        setExpenses(tempExpenses);
        setIsEditing(false);
        handleAlert({ type: "success", text: "item edited!" });
      } else {
        const newExpense = { id: uuid(), charge, amount };
        setExpenses([...expenses, newExpense]);
        handleAlert({ type: "success", text: "item added!" });
      }
      setCharge("");
      setAmount("");
    } else {
      handleAlert({
        type: "danger",
        text: "Charge and amount inputs cannot be empty, and amount field must be bigger than zero!",
      });
    }
  };

  const handleClearList = () => {
    setExpenses([]);
    handleAlert({ type: "danger", text: "expenses list cleared!" });
  };

  const handleDeleteSingleItem = (id) => {
    const newList = expenses.filter((item) => item.id !== id);
    setExpenses(newList);
    handleAlert({ type: "danger", text: "item removed!" });
  };

  const handleEditItem = (id) => {
    setIsEditing(true);
    setEditingID(id);
    let expense = expenses.find((item) => item.id === id);
    let { charge, amount } = expense;
    setCharge(charge);
    setAmount(amount);
  };

  return (
    <ExpanseContext.Provider
      value={{
        expenses,
        charge,
        amount,
        handleCharge,
        handleAmount,
        handleSubmit,
        alert,
        setAlert,
        handleAlert,
        handleClearList,
        handleDeleteSingleItem,
        isEditing,
        handleEditItem,
      }}
    >
      {children}
    </ExpanseContext.Provider>
  );
};

export const useExpanseContext = () => {
  return useContext(ExpanseContext);
};
