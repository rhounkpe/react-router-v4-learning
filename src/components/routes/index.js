import React from 'react';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';

import Home from '../Home';
import About from '../About';
import Topics from '../Topics';
import NavMenu from '../NavMenu';

export default () => (
    <BrowserRouter
        basename="/calendar/"
    >
        <div>
            <Route component={NavMenu} />
            <Route exact path="/" component={Home} />
            <Route exaxt path="/about" component={About} />
            <Route path="/topics" component={Topics} />
        </div>  
    </BrowserRouter>  
);