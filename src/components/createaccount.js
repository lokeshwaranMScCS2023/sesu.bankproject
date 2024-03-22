// CreateAccount.js
import React, { useState, useContext } from "react";
import md5 from "md5"; // Import md5 library for hashing
import { UserContext } from "./context";
import "./CreateAccount.css";
import m11Image from "./money1.jpg";

function CreateAccount() {
  // State variables
  const [show, setShow] = useState(true);
  const [status, setStatus] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const ctx = useContext(UserContext);

  // Validation function
  function validate(field, label) {
    if (!field) {
      setStatus("Error: " + label + " required");
      setTimeout(() => setStatus(""), 3000);
      return false;
    }
    if (field === password && field.length < 8) {
      alert("Password must be 8 or more characters long");
      return false;
    }
    if (field === email) {
      var emailFormat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
      if (field.match(emailFormat)) {
        return true;
      } else {
        alert("Enter a valid email address");
        return false;
      }
    }

    return true;
  }

  // Account number generation function
  function generateAccountNumber(email, password) {
    const combinedString = email + password;
    const hash = md5(combinedString);
    const numericString = hash.replace(/\D/g, ''); // Extract only numeric characters
    const accountNumber = Number(numericString.substring(0, 15));
    return accountNumber;
  }

  // Create account function
  function handleCreate() {
    if (!validate(name, "name")) return;
    if (!validate(email, "email")) return;
    if (!validate(password, "password")) return;

    const accountNumber = generateAccountNumber(email, password);

    // Additional logic can be added here...

    ctx.setUsers((existingState) => [
      ...existingState,
      { name, email, password, balance: 0, accountNumber },
    ]);

    alert("Successfully created account!");
    setShow(false);
  }

  // Clear form function
  function clearForm() {
    setName("");
    setEmail("");
    setPassword("");
    setShow(true);
  }

  // Sign-in function
  function handleSignIn() {
    let data = ctx.users;
    let matchingUser = data.find(
      (user) => email === user.email && password === user.password
    );
    alert("Successfully Signn")
    ctx.setActiveUser(matchingUser);
    if (matchingUser === undefined) {
      alert("User not found.");
    }
  }

  // JSX for the component
  return (
    <div className="container">
      <div className="bg"></div>
      <div className="form-wrapper">
        <img src={m11Image} alt="Money" />
        <form className="contact-form">
          <div className="toggle-links">
            <span
              className={`toggle-link ${show ? "signup" : "signin"}`}
              onClick={() => setShow(true)}
            >
              Sign Up
            </span>
            <span>/</span>
            <span
              className={`toggle-link ${show ? "signin" : "signup"}`}
              onClick={() => setShow(false)}
            >
              Sign In
            </span>
          </div>
          <div className="inputs">
            {show && (
              <>
                <input
                  type="text"
                  className="input-field hide"
                  placeholder="First Name"
                  value={name}
                  onChange={(e) => setName(e.currentTarget.value)}
                />
                <input
                  type="text"
                  className="input-field hide"
                  placeholder="Last Name"
                />
              </>
            )}
            <input
              type="email"
              className={`input-field ${show ? "display" : "hide"}`}
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
            />
            <input
              type="password"
              className={`input-field ${show ? "display" : "hide"}`}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.currentTarget.value)}
            />
            {show && (
              <div className="checkbox hide">
                <input type="checkbox" id="check" />
                <label htmlFor="check">
                  I agree <span>Terms of Service</span>
                </label>
              </div>
            )}
          </div>
          <button
            className="submit"
            type="button"
            onClick={show ? handleCreate : handleSignIn}
          >
            {show ? "Sign Up" : "Sign In"}
          </button>

          <div className="social-media">
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-linkedin-in"></i>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateAccount;