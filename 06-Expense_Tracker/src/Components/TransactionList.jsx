const TransactionList = () => {
  return (
    <div>
      <h3>Transaction History</h3>
      <ul className="list">
        <li className="minus">
          Cash <span>-$400</span>
          <button className="delete-btn">x</button>
        </li>
      </ul>
    </div>
  );
};

export default TransactionList;
