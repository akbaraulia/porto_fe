import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../home.css';

function HomeCarousel() {
  return (
    <Carousel
      controls={false}
      interval={3000}
      className='mt-50'
      indicatorClassName='custom-indicators'
    >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/1300x800"
          alt="First slide"
        />
        <Carousel.Caption>
          <div className="carousel-caption container">
            <div className="row">
              <div className="col-md-12 text-center">
                <div className="slides-text">
                  <h2>Less is more.</h2>
                  <p>
                    <a href="https://uicookies.com/" target="_blank" className="btn btn-primary">
                      Get Started
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/1900x600"
          alt="Second slide"
        />
        <Carousel.Caption>
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <div className="slides-text">
                  <h2>Black is elegant.</h2>
                  <p>
                    <a href="https://uicookies.com/" target="_blank" className="btn btn-primary">
                      Get Started
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/1900x600"
          alt="Third slide"
        />
        <Carousel.Caption>
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <div className="slides-text">
                  <h2>Whitespace is clever.</h2>
                  <p>
                    <a href="https://uicookies.com/" target="_blank" className="btn btn-primary">
                      Get Started
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeCarousel;
