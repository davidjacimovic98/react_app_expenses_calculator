import Alert from "./components/Alert/Alert";
import Form from "./components/Form/Form";
import List from "./components/List/List";
import styles from "./App.module.css";
import { useExpanseContext } from "./components/context/expense-context";

function App() {
  const { expenses, alert } = useExpanseContext();

  return (
    <div className={styles.container}>
      {alert.show && <Alert />}
      <h1>expenses calculator</h1>
      <div className={styles.main}>
        <Form />
        <List />
      </div>
      <h1>
        total expenses :{" "}
        <span>
          ${" "}
          {expenses.reduce((prev, curr) => {
            return (prev += +curr.amount);
          }, 0)}
        </span>
      </h1>
    </div>
  );
}

export default App;
