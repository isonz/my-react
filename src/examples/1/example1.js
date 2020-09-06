import React from "react";
import './example1.css';
import logo from './logo.svg';
import {Link} from 'react-router-dom';

function Example1(props) {
    return (
        <div className="examples example-1">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <Link to="/about">About....</Link>
            </header>
        </div>
    );
}

export default Example1;
