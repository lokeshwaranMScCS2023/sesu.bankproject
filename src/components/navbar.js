// NavBar.js
import React, { useContext, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { UserContext } from "./context";
import './NavBar.css';

function NavBar() {
    const ctx = useContext(UserContext);
    const navigate = useNavigate();

    function loadHome() {
        navigate('/home');
    }

    function handleClick() {
        navigate('/createaccount');
        ctx.setActiveUser(null);
    }

    return (
        <div>
            <div className="box">
                <nav>
                    <h2 className="logo">MS <span>Sesu</span></h2>
                    {ctx.activeUser ? (
                        <ul>
                            <li>
                                <a href="#/home">Home</a>
                            </li>
                            <li>
                                <a href="#/deposit">Deposit</a>
                            </li>
                            <li>
                                <a href="#/withdraw">Withdraw</a>
                            </li>
                            <li>
                                <a href="#/allData">AllData</a>
                            </li>
                            <li>
                                <button
                                    type="submit"
                                    onClick={handleClick}
                                    className="nav-ul-li-button"
                                >
                                    Sign Out
                                </button>
                            </li>
                        </ul>
                    ) : (
                        <div>
                            <ul>
                                <li>
                                    <a href="#/createaccount">Create Account</a>
                                </li>
                            </ul>
                        </div>
                    )}
                </nav>
            </div>
        </div>
    );
}

export default NavBar;
