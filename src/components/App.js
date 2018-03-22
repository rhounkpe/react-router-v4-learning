import React from 'react';
import Routes from './routes';
import { NavLink } from 'react-router-dom';

import './App.css';


const App = () => {
    const getConfirmation = (message, callback) => {
        const allowTransition = window.confirm(message);
        callback(allowTransition);
    }

    const supportsHistory = 'pushState' in window.history;

    return (
        <Routes />
    );
};

export default App;