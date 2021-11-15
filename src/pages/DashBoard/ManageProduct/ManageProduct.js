import React from 'react';
import { Card } from 'react-bootstrap';

const ManageProduct = ({ manageOrder, handleDeleteOrder }) => {
    const { name, exterior, price, img, _id } = manageOrder;
    return (
        <div className='col-md-4'>
            <Card.Img variant="top" src={img} className='img-hover' />
            <Card.Body>
                <h1 className='text-danger'>${price}</h1>
                <Card.Text className='text-secondary'>
                    Model: {name}
                </Card.Text >
                <Card.Text className='text-secondary'>
                    Exterior: {exterior}
                </Card.Text >

            </Card.Body>

            <button className="bg-dark text-white ms-3" onClick={() => handleDeleteOrder(_id)}>Delete</button>
        </div>
    );
};

export default ManageProduct;