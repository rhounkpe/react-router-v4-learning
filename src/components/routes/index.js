import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../Home';
import About from '../About';
import Topics from '../Topics';
import Category from '../Categories/Category';
import Products from '../Products/Products';

export default () => (
    <div>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exaxt path="/about" component={About} />
            <Route exaxt path="/topics" component={Topics} />
            <Route path="/category" component={Category} />
            <Route path="/products" component={Products} />
        </Switch> 
    </div> 
);
