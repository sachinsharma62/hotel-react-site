import './index.scss';
import { Container, Nav, Navbar, NavDropdown, Col, Row } from 'react-bootstrap';
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import { BsFacebook, BsInstagram, BsSkype, BsSnapchat, BsTelegram } from 'react-icons/bs';
import { useState } from 'react'; // Import useState
import { Link } from 'react-router-dom'; // Use React Router Links

const PageMenu = () => {
  const [expanded, setExpanded] = useState(false); // State to track navbar open/close

  return (
    <>
      <Container fluid className='p-0 back-dark'>
        <Row className='gx-0'>
          <Col lg={3} className='d-none d-lg-block'>
            <Navbar.Brand as={Link} to="/" className='logo d-flex justify-content-center align-items-center h-100 textPrimary'>
              <h1 className='m-0 text-uppercase'>HOTELWOW</h1>
            </Navbar.Brand>
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
                <div className='d-flex align-items-center justify-content-end py-2'>
                  <a href='instagram' className='me-3'><BsInstagram /></a>
                  <a href='skype' className='me-3'><BsSkype /></a>
                  <a href='facebook' className='me-3'><BsFacebook /></a>
                  <a href='telegram' className='me-3'><BsTelegram /></a>
                  <a href='snapchat' className='me-3'><BsSnapchat /></a>
                </div>
              </Col>
            </div>
            
            {/* Navbar */}
            <Navbar expanded={expanded} expand="lg" className="p-lg-0 p-3 navbar-dark">
              <Navbar.Brand as={Link} to="/" className='logo d-block d-lg-none'>
                <h1 className='m-0 text-uppercase'>HOTELWOW</h1>
              </Navbar.Brand>

              {/* Toggle Button */}
              <Navbar.Toggle onClick={() => setExpanded(expanded ? false : true)} aria-controls="basic-navbar-nav" />

              {/* Navbar Links */}
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link as={Link} to="/" onClick={() => setExpanded(false)}>Home</Nav.Link>
                  <Nav.Link as={Link} to="/about" onClick={() => setExpanded(false)}>About</Nav.Link>
                  <Nav.Link as={Link} to="/services" onClick={() => setExpanded(false)}>Services</Nav.Link>
                  <Nav.Link as={Link} to="/rooms" onClick={() => setExpanded(false)}>Rooms</Nav.Link>
                  <NavDropdown title="Pages" id="basic-nav-dropdown">
                    <NavDropdown.Item as={Link} to="/action1" onClick={() => setExpanded(false)}>Action</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/action2" onClick={() => setExpanded(false)}>Another action</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/something" onClick={() => setExpanded(false)}>Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item as={Link} to="/separated" onClick={() => setExpanded(false)}>Separated link</NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link as={Link} to="/contact" onClick={() => setExpanded(false)}>Contact</Nav.Link>
                </Nav>

                <a href='phonepe://pay?amount=10&phonenumber=6265480149' className='premium-btn btn btn-primary px-5 py-4 rounded-0 d-none d-lg-block h-100'>
                  Premium
                </a>
              </Navbar.Collapse>
            </Navbar>

          </Col>
        </Row>
      </Container>
    </>
  );
}

export default PageMenu;
