import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";

const AddProducts = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://frozen-earth-63601.herokuapp.com/product', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert("Added successfully")
                    reset()

                }
            })
    }
    return (
        <div>
            <h1>Please add a product</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} />
                <br />
                < input {...register("exterior")} placeholder='Exterior' />
                <br />
                <input {...register("key")} placeholder="key" />
                <br />
                <input type="number" {...register("price",)} placeholder='Price' />
                <br />
                <input {...register("img")} placeholder='image url' />
                <br />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddProducts;