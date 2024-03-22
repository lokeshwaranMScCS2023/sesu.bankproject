import React, { useState, useContext } from "react";
import { UserContext } from "./context";
import "./Withdraw.css";

function Withdraw() {
  const [withdrawAmount, setWithdrawAmount] = useState(0);
  const ctx = useContext(UserContext);
  let activeUser = ctx.activeUser;

  function makeWithdraw() {
    if (0 < withdrawAmount && withdrawAmount <= activeUser.balance) {
      activeUser.balance -= withdrawAmount;
      alert('The withdraw was processed.');
      setWithdrawAmount(0);
    } else if (0 > withdrawAmount) {
      alert('Enter a positive number.');
    } else {
      alert('Insufficient funds.');
    }
  }

  return (
    <div className="container3">
      <div className="info" style={{ backgroundColor: "info" }}>
        <h1>Withdraw</h1>
        <div>
          <h2>Account Balance: ${activeUser ? activeUser.balance : "--"}</h2>
        </div>
        <br />
        <div>
          <h2>Withdraw Amount</h2>
          <br />
          <input
            type="number"
            className="form-control"
            placeholder="Enter amount"
            onChange={(e) => setWithdrawAmount(Number(e.currentTarget.value))}
          /><br/>
          <button
            type="submit"
            className="btn btn-light"
            onClick={makeWithdraw}
            disabled={withdrawAmount ? false : true}
          >
            Withdraw
          </button>
        </div>
      </div>
    </div>
  );
}

export default Withdraw;
