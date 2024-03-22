import React, { useContext } from "react";
import { UserContext } from "./context";
import "./alldata.css"; // Import the CSS file for styles

function AllData() {
  const ctx = useContext(UserContext);
  const users = ctx.users;

  return (
    <div className="container1">
      <h1>All Data</h1>
      <table className="table" border="4" cellSpacing="3" width="50%" height="100px" style={{ textAlign: 'center' }}>
        <thead>
          <tr className="th">
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Account Number</th>
            <th scope="col">Balance</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user, index) => (
              <tr key={index} className="td">
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.accountNumber}</td>
                <td>{user.balance}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No data available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default AllData;
