import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Banner from '../Banner/Banner';
import CardCar from '../CardCar/CardCar';
import HomeProduct from '../HomeProduct/HomeProduct';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Home.css'

const Home = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://frozen-earth-63601.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <Banner></Banner>
            <Container>
                <div className='row'>
                    {
                        products.slice(0, 6).map(product => <HomeProduct
                            product={product}
                            key={product._id}

                        ></HomeProduct>)
                    }
                </div>
            </Container>



            <CardCar></CardCar>

            <div className="homeReview mx-3">
                <ReviewItem></ReviewItem>
            </div>
        </div>
    );
};

export default Home;