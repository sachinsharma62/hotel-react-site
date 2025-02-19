import './index.scss';
import {Col, Container , Row } from 'react-bootstrap';
import  CountUp  from 'react-countup';
import { FaHotel, FaUsers, FaUsersCog} from 'react-icons/fa';
import imgcol1 from '../../assets/images/about-1.jpg';
import imgcol2 from '../../assets/images/about-2.jpg';
import imgcol3 from '../../assets/images/about-3.jpg';
import imgcol4 from '../../assets/images/about-4.jpg';



function AboutSection() {
  return (
    <>
      <Container className='py-5'>
        <Row className='g-4'>
          <Col lg={6} className='about-section-details'>
            <div className='sub-section-header text-uppercase'>
              <h4 className='textPrimary back-Primary'>Our Team</h4>
              <h1 className='mb-4 font-weight-bold textDark'>
              Welcome to <span className="textPrimary text-uppercase">HOTELWOW</span>
              </h1>
              <p className='mb-4'>
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet
              </p>
            </div>
            <Row className='g-3 pb-4 '>
              <Col sm={4} >
                <div className='border rounded p-1'>
                  <div className='border rounded p-4 text-center'>
                    <FaHotel className='mb-2 textPrimary'/>
                    <h1 className='mb-1 textDark'><CountUp end={1234} duration={5} /> </h1>
                    <p className='mb-0 f-19'>Rooms</p>
                  </div>
                </div>
              </Col>
              <Col sm={4}>
                <div className='border rounded p-1'>
                  <div className='border rounded p-4 text-center'>
                    <FaUsersCog className='mb-2 textPrimary'/>
                    <h1 className='mb-1 textDark'><CountUp end={1234} duration={5} /> </h1>
                    <p className='mb-0 f-19'>Staffs</p>
                  </div>
                </div>
              </Col>
              <Col sm={4}>
                <div className='border rounded p-1'>
                  <div className='border rounded p-4 text-center'>
                    <FaUsers className='mb-2 textPrimary'/>
                    <h1 className='mb-1 textDark'><CountUp end={1234} duration={5} /> </h1>
                    <p className='mb-0 f-19'>Clients</p>
                  </div>
                </div>
              </Col>
            </Row>
            <Col sm={12} className='mt-3'>
              <a href='#home' className='btn-primary text-uppercase text-white py-3 px-5 f-19'> EXPLORE MORE </a>
            </Col>
          </Col>
          <Col lg={6}>
            <Row className='g-3 about-img-part'>
              <Col span={6} xs={6} className='text-end'><img src={imgcol1} alt={imgcol1} className='w-75 img-fluid first-img'/> </Col>
              <Col span={6} xs={6} className='text-start'><img src={imgcol2} alt={imgcol2} className='w-100 img-fluid'/> </Col>
              <Col span={6} xs={6} className='text-end'><img src={imgcol3} alt={imgcol3} className='w-50 img-fluid'/> </Col>
              <Col span={6} xs={6} className='text-start'><img src={imgcol4} alt={imgcol4} className='w-75 img-fluid'/> </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
    );
}

export default AboutSection;
