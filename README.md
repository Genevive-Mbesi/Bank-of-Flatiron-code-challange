# Bank of Flartion App

This is a mini web app built with React to practice components, props, state, events, and data fetching. It allows users to perform the following actions:

- View a table of all transactions.
- Add a new transaction by filling out and submitting the form. The new transaction will be added to the table (not persisted to the backend).
- Filter transactions by typing into the search bar. Only transactions with a description matching the search term will be shown in the transactions table.
- Sort transactions alphabetically by category or description.
- Delete a transaction, which removes it from the table.

## Getting Started

Follow the instructions below to set up and run the Transaction App on your local machine.

### Prerequisites

Make sure you have the following software installed:

- Node.js: https://nodejs.org

### Installation

1. Clone this repository to your local machine using:

   ```bash
   git clone https://github.com/your-username/transaction-app.git
   ```

   Alternatively, you can download the ZIP file and extract it.

2. Navigate to the project directory:

   ```bash
   cd transaction-app
   ```

3. Install the required dependencies:

   ```bash
   npm install
   ```

### Running the App

1. Start the local JSON server to serve transaction data:

   ```bash
   json-server --watch db.json --port 8000
   ```

2. In a new terminal, start the React development server:

   ```bash
   npm start
   ```

3. The app should now be running on http://localhost:3000.

### How to Use

1. View the table of transactions on the home page.
2. To add a new transaction, fill out the form with the transaction details (description, category, and amount) and click the "Add Transaction" button. The new transaction will be added to the table.
3. To filter transactions, type a keyword in the search bar, and the table will display only transactions with descriptions containing that keyword.
4. To sort transactions alphabetically, click on the "Category" or "Description" column header.
5. To delete a transaction, click the "Delete" button in the corresponding row of the table. The transaction will be removed from the table.

### Credits

The Transaction App was created for learning purposes by [Genevive-Mbesi]. It utilizes React, data fetching, and json-server to simulate a local JSON database server.

### License

This project is licensed under the [MIT License](LICENSE). Feel free to modify and use it for personal or educational purposes.
