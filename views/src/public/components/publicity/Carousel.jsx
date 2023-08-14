import React, {Component} from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel1 from '../../assets/img/carousel1.png';
import Carousel2 from '../../assets/img/carousel2.png';

export default class Carousel extends Component {
    render () {
        const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className='carousel-content'>
            <Slider {...settings}>
                <div className='carousel-container'>
                    <img src={Carousel1} alt="logo.png" className='carousel' />
                </div>
                <div className='carousel-container'>
                    <img src={Carousel2} alt="logo.png" className='carousel' />
                </div>
            </Slider>
        </div>
        )
    }
}

