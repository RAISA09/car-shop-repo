import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import ManageAllOrder from '../ManageAllOrder/ManageAllOrder';

const ManageAllOrders = () => {
    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetch('https://frozen-earth-63601.herokuapp.com/purchases')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    // DELETE AN USER
    const handleDeleteOrder = id => {
        const proceed = window.confirm('Are you sure, you want to delete order.....');
        if (proceed) {
            const url = `https://frozen-earth-63601.herokuapp.com/purchases/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted order successfully....');
                        const remainingOrders = orders.filter(order => order._id !== id);
                        setOrders(remainingOrders);
                    }
                });
        }
    }
    return (
        <div className="col py-3">
            <Container>
                <div className='row'>
                    {
                        orders.map(order => <ManageAllOrder
                            order={order}
                            key={order.key}
                            handleDeleteOrder={handleDeleteOrder}
                        ></ManageAllOrder>)
                    }
                </div>
            </Container>
        </div>
    );
};

export default ManageAllOrders;