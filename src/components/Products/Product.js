import React from 'react';
import Error404 from '../Error404';
const slugify = require('slugify');

const Product = ({ match, data}) => {
    var product = data.find(p => {
        return slugify(p.name, {
            replacement: '-', // replace spaces with replacement
            remove: /[$*_+~.()'"!\-:@?]/g,    // regex to remove characters
            lower: true      // result in lower case
        }) === match.params.slug
    });
    var productData;

    if(product) {
        productData = (
            <div>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <hr />
                <h4>{product.status}</h4>
            </div>
        );
    }
    else {
        productData = <Error404 />
    }

    return (
        <div>
            {productData}
        </div>
    );
};

export default Product;