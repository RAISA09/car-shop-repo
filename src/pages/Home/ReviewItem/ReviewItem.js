import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';

const ReviewItem = () => {
    const [reviews, serReviews] = useState([])
    useEffect(() => {
        fetch('https://frozen-earth-63601.herokuapp.com/review')
            .then(res => res.json())
            .then(data => serReviews(data))
    }, [])
    return (
        <div>
            <Container>
                <div className='row'>

                    <h1>Reviews</h1>
                    {
                        reviews.map(review =>
                            <ul>
                                <li>{review.reviewSingleItem}</li>
                            </ul>
                        )
                    }
                </div>
            </Container>


        </div>
    );
};

export default ReviewItem;