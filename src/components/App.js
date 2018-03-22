import React from 'react';

import { BrowserRouter, Route, NavLink } from 'react-router-dom';

import './App.css';

import Home from './Home';
import About from './About';
import Topics from './Topics';


const App = () => {
    const getConfirmation = (message, callback) => {
        const allowTransition = window.confirm(message);
        callback(allowTransition);
    }

    const supportsHistory = 'pushState' in window.history;

    const checkActive = (match, location) => false;

    return (
        <BrowserRouter
            basename="/calendar/"
            getUserConfirmation={getConfirmation}
            forceRefresh={!supportsHistory}
        >
            <div>
                <ul>
                    <li>
                        <NavLink 
                            to="/"
                            activeClassName="navactive"
                            isActive={checkActive}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/about"
                            activeClassName="navactive"
                        >
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/topics"
                            activeClassName="navactive"
                        >
                            Topics
                        </NavLink>
                    </li>
                </ul>

                <hr />

                <Route exact path="/" component={Home} />
                <Route exaxt path="/about" component={About} />
                <Route path="/topics" component={Topics} />
            </div>
        </BrowserRouter>
    );
};

export default App;