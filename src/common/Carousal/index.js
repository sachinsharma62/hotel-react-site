import './index.scss';
import {Carousel } from 'react-bootstrap';
import carouselimg1 from '../../assets/images/carousel-1.jpg';
import carouselimg2 from '../../assets/images/carousel-2.jpg';
import PageHeaderForm from '../PageHeaderForm'

function Carousal() {
  const items = [
    {
      src: carouselimg1 ,
      alt: 'Image 1',
      caption: (
        <>
          <div className='section-header text-white text-uppercase mb-3'><h4>Luxury Living</h4></div>
          <h1 className='mb-3'>Discover A Brand Luxurious Hotel</h1>
          <button className='btn btn-primary px-md-5 py-md-3 me-3 text-uppercase f-19'>Our Rooms</button>
          <button className='btn btn-light px-md-5 py-md-3 text-uppercase f-19'>Book A Room</button>
        </>
      ),
    },
    {
      src: carouselimg2,
      alt: 'Image 2',
      caption: (
        <>
          <div className='section-header text-white text-uppercase mb-3'><h4>Luxury Living</h4></div>
          <h1 className='mb-3'>Discover A Brand Luxurious Hotel</h1>
          <button className='btn btn-primary px-md-5 py-md-3 me-3 text-uppercase f-19'>Our Rooms</button>
          <button className='btn btn-light px-md-5 py-md-3 text-uppercase f-19'>Book A Room</button>
        </>
      ),
    },
    // Add more items as needed
  ];
  return (
    <>
     <Carousel className='mb-5'>
      {items.map((item, index) => (
        <Carousel.Item key={index}>
          <img className="d-block " src={item.src} alt={item.alt} />
          <Carousel.Caption as="div" className='d-flex flex-column justify-content-center align-items-center'><div className='carousel-text p-2'>{item.caption}</div></Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
    <PageHeaderForm />
    </>
    );
}

export default Carousal;
