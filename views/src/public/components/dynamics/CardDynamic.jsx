import React, { Component } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel1 from '../../assets/img/asset1.png';
import Carousel2 from '../../assets/img/asset2.png';
import BookIcon from '../../assets/icon/book-regular-24.png';
import './change.js'

export default class CardDynamic extends Component {
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
                <div className='carousel'>
                    <div className="card-container container" id='card-container'>
                        <div className="row contents-cards">
                            <div className="col-md-5" id='col-1'>
                                <img src={Carousel2} alt="carousel" className='img-carousel mx-auto' />
                            </div>
                            <div className="col-md-7 content-card-items" id='col-2'>
                                <img src={BookIcon} alt="book" className='bookIcon' id='icon' />
                                <h5>Dibujos Abstractos</h5>
                                <p className='text-content'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit corporis repudiandae, labore nesciunt exercitationem tempora? Debitis repellat saepe quibusdam fugiat, nulla ducimus. Odio quisquam eos corporis obcaecati rerum consectetur ut!</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='carousel'>
                    <div className="card-container container" id='card-container'>
                        <div className="row contents-cards">
                            <div className="col-md-5" id='col-3'>
                                <img src={Carousel1} alt="carousel" className='img-carousel mx-auto' />
                            </div>
                            <div className="col-md-7 content-card-items" id='col-4'>
                                <img src={BookIcon} alt="book" className='bookIcon' id='icon' />
                                <h5>La novela</h5>
                                <p className='text-content'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit corporis repudiandae, labore nesciunt exercitationem tempora? Debitis repellat saepe quibusdam fugiat, nulla ducimus. Odio quisquam eos corporis obcaecati rerum consectetur ut!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
        )
    }
}