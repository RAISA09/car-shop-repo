import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }

    const handleAdminSubmit = e => {
        const user = { email };
        fetch('https://frozen-earth-63601.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    setEmail('')
                    setSuccess(true);
                }

            })
        e.preventDefault(user)
    }
    return (
        <div>
            <h2>He is a make admin</h2>
            <form onSubmit={handleAdminSubmit}>
                <input
                    type="email"
                    name="email"
                    onBlur={handleOnBlur} />
                <br />
                <button type="submit" className="my-2 btn-primary">Make Admin</button>
            </form>
            {success && <Alert severity='success'>Made Admin Successfully</Alert>}<br />
        </div>
    );
};

export default MakeAdmin;