import { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState.jsx";

const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const balance = transactions
    .map((t) => t.amount)
    .reduce((acc, item) => acc + item, 0);

  return (
    <div>
      <h4>Your Balance</h4>
      <h1 id="balance">₹{balance}</h1>
    </div>
  );
};

export default Balance;
