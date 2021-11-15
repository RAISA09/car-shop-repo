import React from 'react';
import './CardCar.css'
import car1 from '../../../images/card,car/ads1.jpg'
import car2 from '../../../images/card,car/ads3.jpg'
import car3 from '../../../images/card,car/ads4.jpg'
import car4 from '../../../images/card,car/ads5.jpg'
import { Container } from 'react-bootstrap';

const CardCar = () => {
    return (
        <div className='bg'>
            <Container>
            <div className='row '>
            <div className='col-md-3'>
          
            <div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">
      <img className='cardcar' src={car1} alt="Avatar" />
    </div>
    <div className="flip-card-back  ">
      <div className='d-flex mt-3 justify-content-center'><h2 className='bgt p-3'>	Mercedes‑Benz </h2></div>
      <div>
      <button className='btn btn-danger'>  Products</button>
      </div>
      
    </div>
  
  </div>
</div>
            
            </div>
            <div className='col-md-3'>
          
            <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img className='cardcar' src={car2} alt="Avatar" />
    </div>
    <div class="flip-card-back  ">
      <div className='d-flex mt-3 justify-content-center'><h2 className='bgt p-3'>Audi A8</h2></div>
      <div>
      <button className='btn btn-danger'>  Products</button>
      </div>
      
    </div>
  
  </div>
</div>
            
            </div>
            <div className='col-md-3'>
          
            <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img className='cardcar' src={car3} alt="Avatar" />
    </div>
    <div class="flip-card-back  ">
      <div className='d-flex mt-3 justify-content-center'><h2 className='bgt p-3'>GMC Acadia</h2></div>
      <div>
      <button className='btn btn-danger'>  Products</button>
      </div>
      
    </div>
  
  </div>
</div>
            
            </div>
            <div className='col-md-3'>
          
            <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img className='cardcar' src={car4} alt="Avatar" />
    </div>
    <div class="flip-card-back  ">
      <div className='d-flex mt-3 justify-content-center'><h2 className='bgt p-3'>Nissan Altima</h2></div>
      <div>
      <button className='btn btn-danger'>  Products</button>
      </div>
      
    </div>
  
  </div>
</div>
            
            </div>
          
        </div>
        </Container>
        </div>
        
    );
};

export default CardCar;