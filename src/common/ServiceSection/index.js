import './index.scss';
import {Col, Container , Row } from 'react-bootstrap';
import { FaHotel ,FaUtensils ,FaSpa ,FaSwimmer ,FaGlassCheers ,FaDumbbell}  from 'react-icons/fa';


const Servicedata = [
  {
    key:1,
    icon:<><FaHotel/></>,
    textheading: 'Rooms & Appartment',
    textdetails: 'Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.'
  },
  {
    key:2,
    icon:<><FaUtensils/></>,
    textheading: 'Food & Restaurant',
    textdetails: 'Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.'
  },
  {
    key:3,
    icon:<><FaSpa/></>,
    textheading: 'Spa & Fitness',
    textdetails: 'Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.'
  },
  {
    key:4,
    icon:<><FaSwimmer/></>,
    textheading: 'Sports & Gaming',
    textdetails: 'Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.'
  },
  {
    key:5,
    icon:<><FaGlassCheers/></>,
    textheading: 'Event & Party',
    textdetails: 'Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.'
  },
  {
    key:6,
    icon:<><FaDumbbell/></>,
    textheading: 'GYM & Yoga',
    textdetails: 'Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.'
  },
]
function ServiceSection() {
  return (
    <>
      <Container className='py-5'>
        <div className='text-center section-header '>
          <h4 className='textPrimary back-Primary'>Our Services</h4>
          <h1 className='mb-5 font-weight-bold textDark'>
            Explore Our <span className="textPrimary text-uppercase">Services</span>
          </h1>
        </div>
        <Row>
          {Servicedata.map(item =>
            <Col key={item.key} md={6} lg={4} className='mt-4'>
              <div className='service-item  '>
                <div className='service-icon bg-transparent border rounded p-1'>
                  <div className='w-100 h-100 align-items-center justify-content-center d-flex  border rounded  fa-2x'>
                    {item.icon}
                  </div>
                </div >
                <h4 className='mb-3'>{item.textheading}</h4>
                <p className='text-body mb-0'>{item.textdetails}</p>
              </div>
            </Col>
            )
          }
        </Row>
      </Container>
    </>
    );
}

export default ServiceSection;
