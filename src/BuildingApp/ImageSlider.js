import React from 'react';
import './homePage.css';
import image7 from './image7.jpg';
import image8 from './image8.jpg';
import image9 from './image9.jpg';
import image10 from './image10.jpg';
import image11 from './image11.jpg';
import { GrMoney } from 'react-icons/gr';
import { SiTimescale } from 'react-icons/si';
import Slider3 from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default class ImageSlider extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
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
            slidesToScroll: 2,
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
        <Slider3 {...settings}>
        <div className="imageBox">
            <img alt="" src={image7} className="img" />
            <div className="image7SideBox1">
              <p className="image7Text1">ROOFING WORKS</p>
              <p className="image7Text2">PRE WORK</p>
              <div className="image7SideBox2">
                <p className="budget">
                  <GrMoney />
                  &nbsp;&nbsp;
                  <span className="budgetText">BUDGET: $10 000</span>
                </p>
                <p className="duration">
                  <SiTimescale />
                  &nbsp;&nbsp;
                  <span className="durationText">DURATION: 2 MONTHS</span>
                </p>
              </div>
            </div>
            <div className="transparentBox">+</div>
          </div>
          <div className="imageBox">
            <img alt="" src={image8} className="img" />
            <div className="image7SideBox1">
              <p className="image7Text1">CONSTRUCTON WORKS</p>
              <p className="image7Text2">PRE WORK</p>
              <div className="image7SideBox2">
                <p className="budget">
                  <GrMoney />
                  &nbsp;&nbsp;
                  <span className="budgetText">BUDGET: $10 000</span>
                </p>
                <p className="duration">
                  <SiTimescale />
                  &nbsp;&nbsp;
                  <span className="durationText">DURATION: 2 MONTHS</span>
                </p>
              </div>
            </div>
            <div className="transparentBox">+</div>
          </div>
          <div className="imageBox">
            <img alt="" src={image9} className="img" />
            <div className="image7SideBox1">
              <p className="image7Text1">RENOVATION WORKS</p>
              <p className="image7Text2">PRE WORK</p>
              <div className="image7SideBox2">
                <p className="budget">
                  <GrMoney />
                  &nbsp;&nbsp;
                  <span className="budgetText">BUDGET: $10 000</span>
                </p>
                <p className="duration">
                  <SiTimescale />
                  &nbsp;&nbsp;
                  <span className="durationText">DURATION: 2 MONTHS</span>
                </p>
              </div>
            </div>
            <div className="transparentBox">+</div>
          </div>
          <div className="imageBox">
            <img alt="" src={image10} className="img" />
            <div className="image7SideBox1">
              <p className="image7Text1">BUILDING WORKS</p>
              <p className="image7Text2">PRE WORK</p>
              <div className="image7SideBox2">
                <p className="budget">
                  <GrMoney />
                  &nbsp;&nbsp;
                  <span className="budgetText">BUDGET: $10 000</span>
                </p>
                <p className="duration">
                  <SiTimescale />
                  &nbsp;&nbsp;
                  <span className="durationText">DURATION: 2 MONTHS</span>
                </p>
              </div>
            </div>
            <div className="transparentBox">+</div>
          </div>
          <div className="imageBox">
            <img alt="" src={image11} className="img" />
            <div className="image7SideBox1">
              <p className="image7Text1">ACHITECT WORKS</p>
              <p className="image7Text2">PRE WORK</p>
              <div className="image7SideBox2">
                <p className="budget">
                  <GrMoney />
                  &nbsp;&nbsp;
                  <span className="budgetText">BUDGET: $10 000</span>
                </p>
                <p className="duration">
                  <SiTimescale />
                  &nbsp;&nbsp;
                  <span className="durationText">DURATION: 2 MONTHS</span>
                </p>
              </div>
            </div>
            <div className="transparentBox">+</div>
          </div>
        </Slider3>
    );
  }
}