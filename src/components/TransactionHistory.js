// TransactionHistory.js
import React, { useContext } from "react";
import { UserContext } from "./context";

function TransactionHistory() {
  const ctx = useContext(UserContext);
  const activeUser = ctx.activeUser;

  console.log("Active User:", activeUser);
  const userTransactions = ctx.users.filter((user) => user.name === activeUser?.name);

  return (
    <div>
      <h2>Transaction History</h2>
      {userTransactions.length === 0 ? (
        <p>No transaction history available.</p>
      ) : (
        <ul>
          {userTransactions.map((user, index) => (
            <li key={index}>
              {user.name} - Deposit: ${user.depositAmount}, Withdraw: ${user.withdrawAmount}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TransactionHistory;
