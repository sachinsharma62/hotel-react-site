import './index.scss';
import ServiceSection from '../../common/ServiceSection';
import RoomSection from '../../common/RoomSection';
import AboutSection from '../../common/AboutSection';
import TeamSection from '../../common/TeamSection';
import Carousal from '../../common/Carousal';
import TestimonialSection from '../../common/TestimonialSection';
import { Col, Container, Row } from 'react-bootstrap';


const Dashboard = () => {
  return (
    <>
    <Carousal />
      <div  className='main-container'> 
        <AboutSection />
        <RoomSection />
          <Container fluid="xxl" className='py-5 px-0 video-section'>
            <Row className='g-0'>
              <Col md={6} className='back-dark d-flex align-items-center'>
                <div className="p-4 sub-section-header">
                  <h6 className=" text-start textLight text-uppercase mb-3">Luxury Living</h6>
                  <h1 className="textLight mb-4">Discover A Brand Luxurious Hotel</h1>
                  <p className="textLight mb-4 f-19">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                  <button  className="btn btn-primary rounded-0 py-md-3 px-md-5 me-3 f-19">Our Rooms</button>
                  <button  className="btn btn-light rounded-0 py-md-3 px-md-5 f-19">Book A Room</button>
                </div>
              </Col>
              <Col md={6}>
                <div className="video">
                    <button type="button" className="btn-play" >
                        <span></span>
                    </button>
                </div>
              </Col>
            </Row>
          </Container>
        <ServiceSection />
        <TeamSection />
        <TestimonialSection />
      </div>
    </>
  )
}

export default Dashboard;
