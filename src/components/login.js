// Login.js
import React, { useState, useContext } from "react";
import { UserContext, Card } from "./context";

function Login() {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const ctx = useContext(UserContext);

  function findUser() {
    let data = ctx.users;
    let matchingUser = data.find(user => loginEmail === user.email && loginPassword === user.password);
    ctx.setActiveUser(matchingUser);
    if (matchingUser === undefined) {
      alert('User not found.');
    }
  }

  const logoutUser = () => {
    ctx.setActiveUser(null);
    setLoginEmail('');
    setLoginPassword('');
  };

  return (
    <div>
      <Card
        bgcolor="info"
        header="Login"
        body={!ctx.activeUser ? (
          <>
            Email address<br />
            <input
              type="email"
              placeholder="Enter email"
              value={loginEmail}
              onChange={e => setLoginEmail(e.currentTarget.value)}
            /><br />
            Password<br />
            <input
              type="password"
              placeholder="Enter password"
              value={loginPassword}
              onChange={e => setLoginPassword(e.currentTarget.value)}
            /><br />
            <button type="submit" onClick={findUser}>Login</button>
          </>
        ) : (
          <>
            Welcome {ctx.activeUser.name}!<br /><br />
            <button type="submit" onClick={logoutUser}>Logout</button>
          </>
        )}
      />
    </div>
  );
}

export default Login;
