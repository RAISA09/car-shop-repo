import axios from 'axios';
import './PurchaseProduct.css'
import React, { useEffect, useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';

const PurchaseProduct = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = data => {
    console.log(data);
    axios.post('https://frozen-earth-63601.herokuapp.com/purchase', data)
      .then(res => {
        if (res.data.insertedId) {
          alert("Added successfully")
          reset();
        }
      })
  }


  //load product details
  const { user } = useAuth()
  const { purchaseId } = useParams()
  const [productPurchase, setProductPurchase] = useState([])
  useEffect(() => {
    fetch(`https://frozen-earth-63601.herokuapp.com/products/${purchaseId}`)
      .then(res => res.json())
      .then(data => setProductPurchase(data))
  }, [])
  const { name, key, img, exterior, price } = productPurchase;
  return (
    <div>
      <Container>
        {user.email}
        <div className='row'>
          <div className='col-md-6'> <Card style={{ width: '30rem' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
              <Card.Title className='d-flex'><h4>{name}</h4> <h3 className='px-3 text-danger'>${price}</h3></Card.Title>
              <Card.Text>
                {exterior}
              </Card.Text>


            </Card.Body>
          </Card></div>
          <div className='col-md-6 froms'>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input className='w-75' {...register("name", { required: true, maxLength: 20 })} defaultValue={user.displayName} placeholder='Your Name' />
              <input className='w-75' {...register("productName", { required: true, maxLength: 20 })} defaultValue={name} />
              < input className='w-75'  {...register("adress")} placeholder='adress' />
              < input className='w-75'  {...register("phone")} placeholder='phone' />
              < input className='w-75'  {...register("email", { required: true })} placeholder='Email' defaultValue={user.email} />
              <input className='w-75' {...register("key", { required: true })} defaultValue={key} />
              <input className='w-75' type="number" {...register("price", { required: true })} defaultValue={price} />
              <input {...register("img", { required: true })} defaultValue={img} />
              <br />
              <input type="submit" />
            </form>
          </div>

        </div>
      </Container>
    </div>
  );
};

export default PurchaseProduct;