import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../Home';
import About from '../About';
import Topics from '../Topics';
import Category from '../Categories/Category';
import Products from '../Products/Products';
import Error404 from '../Error404';

export default () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route path="/topics" component={Topics} />
        <Route path="/category" component={Category} />
        <Route path="/products" component={Products} />
        <Route component={Error404} />
    </Switch> 
);
