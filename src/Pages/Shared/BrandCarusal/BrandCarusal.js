import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import brand1 from '../../../assets/brand1.jpg'
import brand2 from '../../../assets/brand2.jpg'
import brand3 from '../../../assets/brand3.jpg'

const BrandCarusal = () => {
    return (
        <div>
            <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={brand3}
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src={brand2}
          alt="Second slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={brand1}
          alt="Third slide"
        />
        
      </Carousel.Item>
    </Carousel>
        </div>
    );
};

export default BrandCarusal;