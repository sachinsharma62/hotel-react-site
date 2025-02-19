import './index.scss';
import { Container, Nav, Navbar, NavDropdown, Col, Row } from 'react-bootstrap';
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import { BsFacebook, BsInstagram, BsSkype, BsSnapchat, BsTelegram } from 'react-icons/bs';


const PageMenu = () => {
  return (
    <>
      <Container fluid className='p-0 back-dark'>
        <Row className='gx-0'>
          <Col lg={3} className='d-none d-lg-block'>
            <Navbar.Brand href="#home" className='logo d-flex justify-content-center align-items-center h-100 textPrimary'><h1 className='m-0 text-uppercase'>HOTELWOW</h1></Navbar.Brand>
          </Col>
          <Col lg={9}>
            <div className='bg-white d-lg-flex d-none '>
              <Col lg={7} className='text-start px-5 py-2'>
                <div className="d-inline-flex align-items-center me-4">
                  < FaEnvelope className='me-2 textPrimary' />
                  <p className='mb-0'>sach@gmail.com</p>
                </div>
                <div className="d-inline-flex align-items-center me-3">
                  < FaPhoneAlt className='me-2 textPrimary' />
                  <p className='mb-0'>+916265480149</p>
                </div>
              </Col>
              <Col lg={5} className='text-end px-5 '>
                <div className='d-flex alin-items-center justify-content-end py-2'>
                  <a href='instagram' className='me-3'><BsInstagram /></a>
                  <a href='skype' className='me-3'><BsSkype /></a>
                  <a href='facebook' className='me-3'><BsFacebook /></a>
                  <a href='telegram' className='me-3'><BsTelegram /></a>
                  <a href='snapchat' className='me-3'><BsSnapchat /></a>
                </div>
              </Col>
            </div>
            <Navbar expand="lg" className=" p-lg-0 p-3 navbar-dark">
              <Navbar.Brand href="#home" className='logo d-block d-lg-none'><h1 className='m-0 text-uppercase'>HOTELWOW</h1></Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className=''>
                  <Nav className="me-auto">
                    <Nav.Link href="#/">Home</Nav.Link>
                    <Nav.Link href="#/About">About</Nav.Link>
                    <Nav.Link href="#/Service">Services</Nav.Link>
                    <Nav.Link href="#/Rooms">Rooms</Nav.Link>
                    <NavDropdown title="Pages" id="basic-nav-dropdown">
                      <NavDropdown.Item href="#action/3.1">Action </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">
                        Another action
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action/3.4">
                        Separated link
                      </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#/Contact">Contact</Nav.Link>

                  </Nav>
                  <a href='phonepe://pay?amount=10&phonenumber=6265480149' className='premium-btn btn btn-primary px-5 py-4 rounded-0 d-none d-lg-block h-100'>
                    premium
                  </a>
                </Navbar.Collapse>
                
            </Navbar>
          </Col>
        </Row >
      </Container >
    </>
  )
}

export default PageMenu;
