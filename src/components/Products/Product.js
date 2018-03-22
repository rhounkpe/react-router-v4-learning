import React from 'react';
import Error404 from '../Error404';

const Product = ({ match, data}) => {
    var product = data.find(p => p.id == match.params.productId);
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