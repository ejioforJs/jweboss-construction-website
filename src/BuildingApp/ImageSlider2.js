import React from 'react';
import './homePage.css';
import image20 from './image20.jpg';
import image21 from './image21.jpg';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Slider2 from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default class ImageSlider2 extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
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
        <Slider2 {...settings}>
          <div className="author1Box authorBox">
            <div className="image20Box">
              <img alt="" src={image20} className="image20" />
              <div className="author1Name">JENNY DUREN</div>
            </div>
            <div className="comment1">
              <i>
                Duis autem vel eum iriure dolor in hendrerit in vulputate velit
                esse molestie consequat, vel ilium dolor eu feugiat nulla
                facilisis at vero eros et accumsan et iusto odio dignisim qui
                blandit praesent luptatum zzril delenit augue duis dolore te
                feugiat nulia facilisi.
              </i>
            </div>
          </div>
          <div className="author2Box authorBox">
            <div className="image21Box">
              <img alt="" src={image21} className="image21" />
              <div className="author2Name">ALBERT EISTIEN</div>
            </div>
            <div className="comment2">
              <i>
                Duis autem vel eum iriure dolor in hendrerit in vulputate velit
                esse molestie consequat, vel ilium dolor eu feugiat nulla
                facilisis at vero eros et accumsan et iusto odio dignisim qui
                blandit praesent luptatum zzril delenit augue duis dolore te
                feugiat nulia facilisi.
              </i>
            </div>
          </div>
          <div className="author1Box authorBox ">
            <div className="image20Box">
              <img alt="" src={image20} className="image20" />
              <div className="author1Name">JENNY DUREN</div>
            </div>
            <div className="comment1">
              <i>
                Duis autem vel eum iriure dolor in hendrerit in vulputate velit
                <br />
                esse molestie consequat, vel ilium dolor eu feugiat nulla
                <br />
                facilisis at vero eros et accumsan et iusto odio dignisim qui
                <br />
                blandit praesent luptatum zzril delenit augue duis dolore te
                <br />
                feugiat nulia facilisi.
              </i>
            </div>
          </div>
          <div className="author2Box authorBox">
            <div className="image21Box">
              <img alt="" src={image21} className="image21" />
              <div className="author2Name">ALBERT EISTIEN</div>
            </div>
            <div className="comment2">
              <i>
                Duis autem vel eum iriure dolor in hendrerit in vulputate velit
                <br />
                esse molestie consequat, vel ilium dolor eu feugiat nulla
                <br />
                facilisis at vero eros et accumsan et iusto odio dignisim qui
                <br />
                blandit praesent luptatum zzril delenit augue duis dolore te
                <br />
                feugiat nulia facilisi.
              </i>
            </div>
          </div>
        </Slider2>
    );
  }
}