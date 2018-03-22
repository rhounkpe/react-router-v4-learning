import React from 'react';
import { Link, Route } from 'react-router-dom';
import { AllProducts } from '../../database/Products';
import Product from './Product';

const Products = ({ match }) => {
    console.log(AllProducts);

    const linkList = AllProducts.map(product => <li key={product.id}>
            <Link to={`${match.url}/${product.id}`}>
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

            <Route path={`${match.url}/:productId`}
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