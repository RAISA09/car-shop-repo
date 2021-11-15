import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HomeProduct = ({product}) => {
    const {name,exterior,price,img,_id}=product
    return (
     <div className='col-md-4'>
       <Card.Img variant="top" src={img} className='img-hover'/>
       <Card.Body>
    <h1 className='text-danger'>${price}</h1>
    <Card.Text className='text-secondary'>
      Model: {name}
    </Card.Text >
    <Card.Text className='text-secondary'>
     Exterior: {exterior}
    </Card.Text >
    <Link to={`/products/${_id}`}><button variant="primary">Purches</button></Link>
  </Card.Body>

     </div>
    )
};

export default HomeProduct;