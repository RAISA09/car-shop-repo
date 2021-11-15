import React from 'react';
import { Card } from 'react-bootstrap';

const ManageAllOrder = ({ order, handleDeleteOrder }) => {
    const { _id, name, productName, img, email, price, adress, phone } = order;

    return (

        <div className='col-md-4'>
            <Card.Img variant="top" src={img} className='img-hover' />
            <Card.Body>
                <h1 className='text-danger'>${price}</h1>
                <Card.Text className='text-secondary'>
                    Client Name: {name}
                </Card.Text >
                <Card.Text className='text-secondary'>
                    Client Email:{email}
                </Card.Text >
                <Card.Text className='text-secondary'>
                    Client Phone:{phone}
                </Card.Text >
                <Card.Text className='text-secondary'>
                    Client Adress:{adress}
                </Card.Text >
                <Card.Text className='text-secondary'>
                    Modal:{productName}
                </Card.Text >


            </Card.Body>

            <button className="bg-dark text-white ms-3" onClick={() => handleDeleteOrder(_id)}>Delete</button>

        </div>

    );
};

export default ManageAllOrder;