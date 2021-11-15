import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import ManageOrder from '../ManageOrder/ManageOrder';

const ManageOrders = () => {
    const { user } = useAuth();
    const [manageOrders, setManageOrders] = useState([])

    useEffect(() => {
        const url = `https://frozen-earth-63601.herokuapp.com/singleOrder?email=${user.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => setManageOrders(data));
    }, [])

    const handleDeleteOrder = id => {
        const proceed = window.confirm('Are you sure, you want to delete order.....');
        if (proceed) {
            const url = `https://frozen-earth-63601.herokuapp.com/purchases/${id}?email=${user.email}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted order successfully....');
                        const remainingmanageOrders = manageOrders.filter(manageOrder => manageOrder._id !== id);
                        setManageOrders(remainingmanageOrders);
                    }
                });
        }
    }

    return (
        <div className="col py-3">
            <Container>
                <div className='row'>
                    {
                        manageOrders.map(manageOrder => <ManageOrder
                            manageOrder={manageOrder}
                            key={manageOrder.key}
                            handleDeleteOrder={handleDeleteOrder}
                        ></ManageOrder>)
                    }
                </div>

            </Container>
        </div>
    );
};

export default ManageOrders;