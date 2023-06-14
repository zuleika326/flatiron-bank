/* eslint-disable react/jsx-no-undef */
import { useState, useEffect } from "react";
import "./App";
import {ViewTable} from "./Components/ViewTable";
import { Form } from "./Components/Form"; 

function App() {
  // eslint-disable-next-line no-unused-vars
  const [transactions, setTransactions] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8001/transactions")
      .then((response) => response.json())
      .then((data) => setTransactions(data));
  }, []);
  return (
    <>
      <Form/>
      <ViewTable transactions={transactions} />
    </>
  );
}

export default App;
