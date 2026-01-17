import "./App.css";
import Header from "./Components/Header.jsx";
import Balance from "./Components/Balance.jsx";
import IncomeExpense from "./Components/IncomeExpense.jsx";
import TransactionList from "./Components/TransactionList.jsx";
import AddTransaction from "./Components/AddTransaction.jsx";

const App = () => {
  return (
    <div>
      <Header />

      <div className="container">
        <Balance />
        <IncomeExpense />
        <TransactionList />
        <AddTransaction />
      </div>
    </div>
  );
};

export default App;
