import "./App.css";
import Header from "./Components/Header.jsx";
import Balance from "./Components/Balance.jsx";
import IncomeExpense from "./Components/IncomeExpense.jsx";
import TransactionList from "./Components/TransactionList.jsx";
import AddTransaction from "./Components/AddTransaction.jsx";
import { GlobalProvider } from "./Context/GlobalState.jsx";

const App = () => {
  return (
    <GlobalProvider>
      <Header />

      <div className="container">
        <Balance />
        <IncomeExpense />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
};

export default App;
