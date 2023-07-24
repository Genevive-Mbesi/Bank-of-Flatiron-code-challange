import React, { useState, useEffect } from 'react';
import TransactionTable from './components/TransactionTable';
import TransactionForm from './components/TransactionForm';
import SearchBar from './components/SearchBar';

const App = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    // Fetch data from the local JSON server
    fetch('http://localhost:8001/transactions')
      .then((response) => response.json())
      .then((data) => setTransactions(data));
  }, []);

  const addTransaction = (newTransaction) => {
    // Update the transactions state with the new transaction
    setTransactions([...transactions, newTransaction]);
  };

  const handleSearch = (searchTerm) => {
    // Filter transactions based on the search term
    const filteredTransactions = transactions.filter((transaction) =>
      transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    // Update the transactions state with the filtered transactions
    setTransactions(filteredTransactions);
  };

  return (
    <div>
      <h1>Bank of Flatiron</h1>
      <TransactionForm addTransaction={addTransaction} />
      <SearchBar handleSearch={handleSearch} />
      <TransactionTable transactions={transactions} />
    </div>
  );
};

export default App;
