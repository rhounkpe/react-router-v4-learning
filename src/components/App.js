import React from 'react';

import { BrowserRouter, Route, Link } from 'react-router-dom';

import Home from './Home';
import About from './About';
import Topics from './Topics';


const App = () => {
    const getConfirmation = (message, callback) => {
        const allowTransition = window.confirm(message);
        callback(allowTransition);
    }

    const supportsHistory = 'pushState' in window.history;

    return (
        <BrowserRouter
            basename="/calendar/"
            getUserConfirmation={getConfirmation}
            forceRefresh={!supportsHistory}
        >
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/topics">Topics</Link>
                    </li>
                </ul>

                <hr />

                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/topics" component={Topics} />
            </div>
        </BrowserRouter>
    );
};

export default App;