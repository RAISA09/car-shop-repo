import axios from 'axios';
import React from 'react';

import { useForm } from 'react-hook-form';
const Review = () => {

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://frozen-earth-63601.herokuapp.com/review', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert("Added successfully")
                    reset()

                }
            })
    }



    return (
        <div>
            <h1>Reviews</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <textarea className="h-100" input {...register("reviewSingleItem", { required: true, maxLength: 200 })} />
                <br />

                <input type="submit" />
            </form>

        </div>
    );
};

export default Review;