import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './Banner.css'


const Banner = () => {
    return (
        <div className='mt-2'>
            <div className='banner '>
                <Container>
                    <div className='row'>
                        <h2 className='py-3'>  <span className='text-danger'>Car</span> <span className='text-light'>Shop</span></h2>
                        <div className='col-md-7 '>
                            <div className='bg-light box'>
                                <h3>Best Rated Classified</h3>
                                <h1 className='text-danger car-title'>Automotive Car Dealer WordPress Theme</h1>
                            </div>
                            <p className='text-light paragraph'>Flexible & Powerful Classified Ads Theme for Car Dealers and all type of classified businesses. Its been developed with mind set of having more opportunities for the website owners to earn revenue.</p>

                            <Link to='/products'> <button className='btn btn-danger btn-lg mb-5'>View Car</button></Link>

                        </div>

                        <div className='col-md-5'>

                        </div>

                    </div>
                </Container>
            </div>



        </div>
    );
};

export default Banner;