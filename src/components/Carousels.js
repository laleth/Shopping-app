import Carousel from 'react-bootstrap/Carousel';
import "../style/carousel.css"

function CarouselReact() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/free-vector/realistic-3d-sale-background_52683-62689.jpg"
          alt="First slide"
          height={600}
        />
        <Carousel.Caption >
            <div className='Carousel-content'>
          <h5>Mega Sale</h5>
          <p>Get Up to 50% Offers on All Products.</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://enthavende.com/wp-content/uploads/2020/05/electronics.jpg"
          alt="Second slide"
          height={600}
        />
        <Carousel.Caption >
            <div className='Carousel-content'>
          <h5>ELECTRONICS</h5>
          <p>Get 50% - 60% Offers on Electronic Gadgents.</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/premium-photo/travel-clothing-accessories-apparel-along-wooden-floor_11304-1128.jpg?w=2000"
          alt="Third slide"
          height={600}
        />
        <Carousel.Caption >
            <div className='Carousel-content'>
          <h5>CLOTHINGS</h5>
          <p>
            Get upto 50% Offer on Clothes above 500.
          </p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselReact;