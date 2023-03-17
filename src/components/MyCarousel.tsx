import Carousel from 'react-bootstrap/Carousel';
import brasil from '../images/brasil.jpg'

function MyCarousel() {
  return (
    <Carousel>
      <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-1/12"
          src={brasil}
          alt="First slide"
        />
      </Carousel.Item>
      </Carousel>
      
      <Carousel.Item>
        <img
          className="d-block w-1/12"
          src={brasil}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-1/12"
          src={brasil}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-1/12"
          src={brasil}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-1/12"
          src={brasil}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-1/12"
          src={brasil}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-1/12"
          src={brasil}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-1/12"
          src={brasil}
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default MyCarousel;