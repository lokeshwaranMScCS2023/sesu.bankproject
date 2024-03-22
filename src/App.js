import React, { useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { UserContext } from "./components/context";
import NavBar from "./components/navbar";
import Home from "./components/home";
import CreateAccount from "./components/createaccount";
import Login from "./components/login";
import Deposit from "./components/deposit";
import Withdraw from "./components/withdraw";
import AllData from "./components/alldata";
import "./App.css";

// Selga contributed the UserProvider function. This sets up the context with additional state features that are used in other components.
function UserProvider({ children }) {
  let [users, setUsers] = useState([
    { name: "sesu", email: "sesu@gmail.com", password: "sesu1234", accountNumber : 678954328756432 ,balance: 100 },
  ]);
  let [activeUser, setActiveUser] = useState(null);
  let context = { users, setUsers, activeUser, setActiveUser };
  // console.log(children);
  return <UserContext.Provider value={context}>{children}</UserContext.Provider>;
}

function App() {
  return (
    <HashRouter>
      <UserProvider>
        <NavBar />
        <Routes>
  <Route path="/home/" element={<Home />} />
  <Route path="/CreateAccount/" element={<CreateAccount />} />
  <Route path="/login/" element={<Login />} />
  <Route path="/deposit/" element={<Deposit />} />
  <Route path="/withdraw/" element={<Withdraw />} />
  {/* <Route path="/balance/" element={<Balance />} /> */}
  <Route path="/AllData/" element={<AllData />} />
</Routes>
      </UserProvider>
    </HashRouter>
  );
}

export default App;
