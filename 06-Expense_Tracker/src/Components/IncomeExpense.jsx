import { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState.jsx";

const IncomeExpense = () => {
  const { transactions } = useContext(GlobalContext);
  const amount = transactions.map((t) => t.amount);

  const income = amount.filter((t) => t > 0).reduce((acc, t) => acc + t, 0);
  const expense = amount.filter((t) => t < 0).reduce((acc, t) => acc + t, 0);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p id="money-plus" className="money plus">
          ₹{income}
        </p>
      </div>
      <div>
        <h4>Expense</h4>
        <p id="money-minus" className="money minus">
          ₹{Math.abs(expense)}
        </p>
      </div>
    </div>
  );
};

export default IncomeExpense;
