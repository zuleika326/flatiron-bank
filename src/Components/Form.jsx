/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import propTypes from "prop-types";

export const Form = ({ transactions }) => {
  const date = useRef();
  const description = useRef();
  const category = useRef();
  const amount = useRef(0);

  function handleSubmit(e) {
    e.preventDefault();
    const newDate = date.current.value;
    const newDescription = description.current.value;
    const newCategory = category.current.value;
    const newAmount = amount.current.value;
    fetch("http://localhost:8001/transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        date: newDate,
        description: newDescription,
        category: newCategory,
        amount: newAmount,
      }),
    })
      .then((response) => response.json())
      .then((data) => setTransactions(...transactionsdata));
  }
  return (
    <>
      <form
        className="shadow m-8 border flex flex-col justify-center items-center"
        onSubmit={handleSubmit}
      >
        <div className="flex justify-around w-full m-8">
          <input
            type="date"
            ref={date}
            className="border border-gray-500 p-2 rounded text-center"
          />
          <input
            type="text"
            ref={description}
            placeholder="Description"
            className="border border-gray-400 p-2 rounded text-center"
          />
          <input
            type="text"
            ref={category}
            placeholder="Category"
            className="border border-gray-400 p-2 rounded text-center"
          />
          <input
            type="number"
            ref={amount}
            placeholder="Amount"
            className="border border-gray-400 p-2 rounded text-center"
          />
        </div>
        <button className="bg-gray-400 py-2 px-4 my-4">Add Transaction</button>
      </form>
    </>
  );
};
Form.propTypes = {
  transactions: propTypes.array,
};
