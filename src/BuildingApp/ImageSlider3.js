import React from 'react';
import './homePage.css';
import image18 from './image18.jpg';
import Slider4 from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default class ImageSlider extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 7,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
        <Slider4 {...settings}>
            <img alt="" src={image18} className="image18" />
            <img alt="" src={image18} className="image18" />
            <img alt="" src={image18} className="image18" />
            <img alt="" src={image18} className="image18" />
            <img alt="" src={image18} className="image18" />
            <img alt="" src={image18} className="image18" />
            <img alt="" src={image18} className="image18" />
            <img alt="" src={image18} className="image18" />
            <img alt="" src={image18} className="image18" />
            <img alt="" src={image18} className="image18" />
            <img alt="" src={image18} className="image18" />
            <img alt="" src={image18} className="image18" />
            <img alt="" src={image18} className="image18" />
            <img alt="" src={image18} className="image18" />
        </Slider4>
    );
  }
}