import React, { useState } from "react";

const AddTransactionForm = ({ onAddTransaction }) => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form fields before adding the transaction
    if (!description || !amount || !category) {
      setErrorMessage("Please fill in all fields.");
      return;
    }

    // Convert the amount to a number (float)
    const parsedAmount = parseFloat(amount);
    if (isNaN(parsedAmount) || parsedAmount <= 0) {
      setErrorMessage("Please enter a valid positive amount.");
      return;
    }

    // Create the new transaction object
    const newTransaction = {
      description,
      amount: parsedAmount,
      category,
    };

    // Add the new transaction and reset the form
    onAddTransaction(newTransaction);
    setDescription("");
    setAmount("");
    setCategory("");
    setErrorMessage("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div>
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
      </div>
      <div>
        <button type="submit">Add Transaction</button>
      </div>
      {errorMessage && <div>{errorMessage}</div>}
    </form>
  );
};

export default AddTransactionForm;