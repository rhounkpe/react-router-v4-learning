import React from 'react';
import { Link, Route } from 'react-router-dom';
import { AllProducts } from '../../database/Products';
import Product from './Product';
const slugify = require('slugify');

const Products = ({ match }) => {
    const linkList = AllProducts.map(product => <li key={product.id}>
            <Link to={`${match.url}/${slugify(product.name, {
                replacement: '-', // replace spaces with replacement
                remove: /[$*_+~.()'"!\-:@?]/g,    // regex to remove characters
                lower: true      // result in lower case
            })}`}>
                {product.name}
            </Link>
        </li>
    );

    return (
        <div>
            <div>
                <h2>Products</h2>
                <ul>
                    {linkList}
                </ul>
            </div>

            <Route path={`${match.url}/:slug`}
                render={props => <Product data={AllProducts} {...props} />}
            />

            <Route exact path={match.url}
                render={() => (
                    <div>Please select a product.</div>
                )}
            />
         
        </div>
    );
};

export default Products;