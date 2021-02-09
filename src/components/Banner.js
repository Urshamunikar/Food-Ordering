import React from 'react'
import { Carousel } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {DataProvider} from './Context'

import banner1 from '../assets/images/banner/banner1.jpg'
import banner2 from '../assets/images/banner/banner2.jpg'
import banner3 from '../assets/images/banner/banner3.jpg'

const Banner = () => {
    return (


        <Carousel className="banner">
            <Carousel.Item interval={1000}>
                <img
                    className="d-block w-100 slider-img"
                    src={banner1}
                    alt="First slide"
                />
                
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img
                    className="d-block w-100 slider-img"
                    src={banner2}
                    alt="second slide"
                />
               
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 slider-img"
                    src={banner3}
                    alt="Third slide"
                />
                
            </Carousel.Item>
        </Carousel>
    )
}

export default Banner
