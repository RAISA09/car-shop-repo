import React, { useEffect, useState } from 'react';
import { Card, CardGroup, Container } from 'react-bootstrap';
import Product from '../Product/Product';

const Products = () => {
    const [products, serProducts] = useState([])
    useEffect(() => {
        fetch('https://frozen-earth-63601.herokuapp.com/products')
            .then(res => res.json())
            .then(data => serProducts(data))
    }, [])
    return (
        <Container>
            <div className='row'>
                {
                    products.map(product => <Product
                        product={product}
                        key={Product.key}
                    ></Product>)
                }
            </div>
        </Container>



    );
};

export default Products;