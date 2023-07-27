/* eslint-disable react/jsx-no-undef */
import { useState, useEffect } from "react";
import "./App";
import {ViewTable} from "./Components/ViewTable";
import { Form } from "./Components/Form"; 
import { SearchBar } from "./Components/SearchBar";
function App() {
  // eslint-disable-next-line no-unused-vars
  const [transactions, setTransactions] = useState([]);
  const [search,setSearch] =useState("")
  useEffect(() => {
    fetch("http://localhost:8001/transactions?q=" + search)
      .then((response) => response.json())
      .then((data) => setTransactions(data));

  }, [search]);
  
  function handleSearch(e){
    setSearch(e.target.value)
  }
  console.log (transactions);
  return (
    <>
    <SearchBar handleSearch={handleSearch}/>
      <Form transactions={transactions}/>
      <ViewTable transactions={transactions} />
    </>
  );
}

export default App;
