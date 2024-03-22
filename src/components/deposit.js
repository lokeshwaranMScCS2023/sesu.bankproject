import React,  { useState, useContext } from "react";
import { UserContext, Card } from "./context";
import "./deposit.css";
function Deposit(){
    const [depositAmount, setDepositAmount] = useState(0)
    const ctx = useContext(UserContext);
    let activeUser = ctx.activeUser;
    // console.log('deposit amount:',typeof depositAmount);

function makeDeposit(){
    // console.log(typeof activeUser.balance);
    // console.log('deposit amount:',typeof depositAmount);
    if(depositAmount > 0) {
        activeUser.balance += depositAmount;
        alert('The deposit was successfully received.');  
    } else {
        alert('Deposit values cannot be negative.');
    };  
    setDepositAmount(0);
    document.getElementById('deposit').value='';
    // the last two lines make the balance update, by changing state, and reset the input field
}

    return(
        <div className="container4">
        <div className="info">
          <h1>Deposit</h1>
          <div>
            <h2>Account Balance:${activeUser ? activeUser.balance : "--"}</h2>
          </div>
          <br />
          <div>
            <h2>Deposit Amount</h2>
            <br />
            <input
              type="number"
              className="form-control1"
              id="deposit"
              placeholder="Enter amount"
              onChange={(e) => setDepositAmount(Number(e.currentTarget.value))}
            />
            <br />
            <button
              type="submit"
              className="btn1 btn-light"
              onClick={makeDeposit}
              disabled={depositAmount ? false : true}
            >
              Deposit
            </button>
          </div>
        </div>
      </div>
      
    );
}

export default Deposit;

//input is a string, even though the state is initialized to the number 0. It was not obvious with the withdraw because 100 - "90" is 10, but in the deposit 100 + "90" is 10090. Thats is why I am adding Number() to the onChange.