import { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState.jsx";
import Transaction from "./Transaction.jsx";

const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <div>
      <h3>Transaction History</h3>
      <ul className="list">
        {transactions.map((t) => (
          <Transaction key={t.id} transaction={t} />
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
