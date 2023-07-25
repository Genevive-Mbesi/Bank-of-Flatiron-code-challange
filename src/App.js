import React, { useState, useEffect, useCallback } from "react";
import { v4 as uuidv4 } from "uuid";
import TransactionTable from "./components/TransactionTable";
import AddTransactionForm from "./components/AddTransactionForm";
import SearchBar from "./components/SearchBar";
import "./App.css";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [transactions, setTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);

  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = async () => {
    try {
      // Assuming "transactions.json" is the file containing your data
      const response = await fetch("http://localhost:8001/transactions.json");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      const transactionsWithIds = data.map((transaction) => ({ ...transaction, id: uuidv4() }));
      setTransactions(transactionsWithIds);
    } catch (error) {
      console.error("Error fetching transactions:", error);
    }
  };

  const handleAddTransaction = (newTransaction) => {
    const transactionWithId = { ...newTransaction, id: uuidv4() };
    setTransactions([...transactions, transactionWithId]);
  };

  const handleDeleteTransaction = (id) => {
    const updatedTransactions = transactions.filter((transaction) => transaction.id !== id);
    setTransactions(updatedTransactions);
  };

  const handleSort = (sortBy) => {
    const sortedTransactions = [...transactions];
    sortedTransactions.sort((a, b) => {
      if (sortBy === "date") {
        return new Date(a[sortBy]) - new Date(b[sortBy]);
      } else if (sortBy === "amount") {
        return a[sortBy] - b[sortBy];
      } else {
        return a[sortBy].localeCompare(b[sortBy]);
      }
    });
    setTransactions(sortedTransactions);
  };

  const filterTransactions = useCallback(() => {
    const filtered = transactions.filter((transaction) =>
      transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredTransactions(filtered);
  }, [searchTerm, transactions]);

  useEffect(() => {
    filterTransactions();
  }, [searchTerm, transactions, filterTransactions]);

  return (
    <div>
      <h1>Bank of Flatiron</h1>
      <SearchBar onSearch={setSearchTerm} />
      <TransactionTable
        transactions={filteredTransactions} // Display filtered transactions
        onDeleteTransaction={handleDeleteTransaction}
        onSort={handleSort}
      />
      <AddTransactionForm onAddTransaction={handleAddTransaction} />
    </div>
  );
};

export default App;
