import { FaAngleRight, FaEnvelope,  FaFacebookF,  FaLinkedinIn, FaMapMarked, FaPhoneAlt, FaTwitter, FaYoutube } from 'react-icons/fa';
import './index.scss';
import { Container,  Col, Row, Button } from 'react-bootstrap';


const Footer = () => {
  return (
    <>
     <Container className='newsletter'>
      <Row className='justify-content-center'>
        <Col xs={10}>
          <div className='border rounded p-1'>
            <div className='border rounded p-1'>
              <div className='bg-white rounded p-5 text-center'>
                <h4 className='mb-4'>
                  Subscribe Our 
                  <span className='textPrimary text-uppercase'> NEWSLETTER</span>
                </h4>
                <div className='mx-auto position-relative'>
                  <input className='form-control w-100 py-3 rounded-0' type='text' placeholder='Enter Your Email'/>
                  <Button type='button' className='btn-primary rounded-0 position-absolute position-xs-none py-2 px-5 top-0 end-0 mt-2 me-2'>Submit</Button>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
     </Container>
     <Container fluid className='footer back-dark textLight'>
      <Container className='pb-5'>
        <Row className='g-5'>
          <Col md={6} lg={4}>
            <div className='p-4 rounded back-primary'>
              <a href='#home'>
                <h1 className='text-white text-uppercase mb-3'>Hotelwow</h1>
              </a>
              <p className='mb-0'>
              Download Hotelwow – Premium Version, build a professional website for your hotel business and grab the attention of new visitors upon your site’s launch.
              </p>
            </div>
          </Col>
          <Col md={6} lg={3}>
            <h6 className='section-title text-start textPrimary text-uppercase mb-4'>
              Contact
            </h6>
            <p className='mb-2 d-flex align-items-center'>
              < FaMapMarked className='me-3'/>
              123 Street, Soyat, India
            </p>
            <p className='mb-2 d-flex align-items-center'>
              < FaPhoneAlt className='me-3'/>
              +916265480149
            </p>
            <p className='mb-2 d-flex align-items-center'>
              < FaEnvelope className='me-3'/>
              sach@gmail.com
            </p>
            <div className='d-flex pt-2'>
              <a className='social-btn btn me-1' href='twitter'>
                <FaTwitter />
              </a>
              <a className='social-btn btn me-1' href='youtube'>
                <FaYoutube />
              </a>
              <a className='social-btn btn me-1' href='linkedin'>
                <FaLinkedinIn />
              </a>
              <a className='social-btn btn me-1' href='facebook'>
                <FaFacebookF />
              </a>
            </div>
          </Col>
          <Col lg={5}>
            <Row className='gy-5 g-4'>
            < Col md={6}>
              <h6 className="section-title text-start textPrimary text-uppercase mb-4">Company</h6>
              <a href='#about' className='footer-link'> <FaAngleRight />About Us</a>
              <a href='#about' className='footer-link'> <FaAngleRight />Contact Us</a>
              <a href='#about' className='footer-link'> <FaAngleRight />Privacy Policy</a>
              <a href='#about' className='footer-link'> <FaAngleRight />Terms & Condition</a>
              <a href='#about' className='footer-link'> <FaAngleRight />Support</a>

            </Col>
            < Col md={6}>
              <h6 className="section-title text-start textPrimary text-uppercase mb-4">Services</h6>
              <a href='#about' className='footer-link'> <FaAngleRight />Food & Restaurant</a>
              <a href='#about' className='footer-link'> <FaAngleRight />Spa & Fitness</a>
              <a href='#about' className='footer-link'> <FaAngleRight />Sports & Gaming</a>
              <a href='#about' className='footer-link'> <FaAngleRight />Event & Party</a>
              <a href='#about' className='footer-link'> <FaAngleRight />GYM & Yoga</a>
            </Col>

            </Row>
          </Col>
        </Row>
      </Container>
      <Container>
        <div className='copyright'>
          <Row>
            <Col md={12} className='text-center text-md-start mb-3 mb-md-0'>
              <a href='@_sachin_sharma62'>&copy; Created By Sachin Sharma</a>
            </Col>
          </Row>
        </div>
      </Container>
     </Container>
    </>
  )
}

export default Footer;
