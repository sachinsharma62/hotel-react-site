import './index.scss';
import React from "react";
import { Container,Row } from 'react-bootstrap';
import Slider from "react-slick";
import testimonialimg1 from '../../assets/images/testimonial-1.jpg';
import testimonialimg2 from '../../assets/images/testimonial-2.jpg';
import testimonialimg3 from '../../assets/images/testimonial-3.jpg';
import testimonialimg4 from '../../assets/images/testimonial-4.jpg';
import { FaQuoteRight } from 'react-icons/fa';

const Testimonial = [
  {
    key:1,
    textdetails: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vestibulum pharetra convallis. Ut sit amet elementum nulla, vitae malesuada ipsum.',
    Testimonialimg: testimonialimg1,
    Name:'Varitha Giva',
    profesion: 'Developer',
  },
  {
    key:2,
    textdetails: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vestibulum pharetra convallis. Ut sit amet elementum nulla, vitae malesuada ipsum.',
    Testimonialimg: testimonialimg2,
    Name:'Varitha Giva',
    profesion: 'Developer',
  },
  {
    key:3,
    textdetails: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vestibulum pharetra convallis. Ut sit amet elementum nulla, vitae malesuada ipsum.',
    Testimonialimg: testimonialimg3,
    Name:'Varitha Giva',
    profesion: 'Developer',
  },
  {
    key:4,
    textdetails: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vestibulum pharetra convallis. Ut sit amet elementum nulla, vitae malesuada ipsum.',
    Testimonialimg: testimonialimg4,
    Name:'Varitha Giva',
    profesion: 'Developer',
  },
  
]
const TestimonialSection = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <>
      <div className='testimonial mt-5 py-5 bg-dark'>
        <Container>
          <Row>
            <Slider {...settings} className='testimonial-wrapper py-5'>
              {Testimonial.map(item =>
                <div key={item.key} >
                  <div className='testimonial-item '>
                    <p className='testimonial-details'>{item.textdetails}</p>
                    <div className='d-flex'>
                        <img src={item.Testimonialimg} alt={item.alt}/>
                        <div className='ms-3'>
                            <h6>{item.Name}</h6>
                            <p className='mb-0'>{item.profesion}</p>
                        </div>
                    </div>
                    <FaQuoteRight />
                  </div>
                </div>
              )
              }
            </Slider>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default TestimonialSection;
