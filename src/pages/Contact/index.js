import './index.scss';
import { FaEnvelopeOpen } from 'react-icons/fa';
import React from "react";
import GoogleMapReact from 'google-map-react';
import { Container, Form, Button, Row, Col, FloatingLabel } from 'react-bootstrap';
import PageHeader from '../../common/PageHeader'

const AnyReactComponent = ({ text }) => <div>{text}</div>;
const Contact = () => {
  // const defaultProps = {
  //   center: {
  //     lat: 10.99835602,
  //     lng: 77.01502627
  //   },
  //   zoom: 11
  // };
  return (
    <>
      <PageHeader />
      <Container className='contact-page'>
        <div className='text-center section-header mt-5'>
          <h4 className='textPrimary back-Primary'>CONTACT US</h4>
          <h1 className='mb-5 font-weight-bold textDark'>
            <span className="textPrimary text-uppercase">CONTACT</span> For Any Query
          </h1>
        </div>
        <Row className='g-4 mb-5'>
          <Col xs={12}>
            <Row className='gy-4'>
              <Col md={4} className='sub-section-header'>
                <h6 className='textPrimary'>BOOKING</h6>
                <div className='d-flex align-items-center'>
                  <FaEnvelopeOpen className='me-2 textPrimary' />
                  <p className='mb-0'>book@example.com</p>
                </div>
              </Col>
              <Col md={4} className='sub-section-header'>
                <h6 className='textPrimary'>GENERAL</h6>
                <div className='d-flex align-items-center'>
                  <FaEnvelopeOpen className='me-2 textPrimary' />
                  <p className='mb-0'>tech@example.com</p>
                </div>
              </Col>
              <Col md={4} className='sub-section-header'>
                <h6 className='textPrimary'>TECHNICAL</h6>
                <div className='d-flex align-items-center'>
                  <FaEnvelopeOpen className='me-2 textPrimary' />
                  <p className='mb-0'>info@example.com</p>
                </div>
              </Col>
            </Row>
          </Col>
          <Col md={6}>
            {/* <GoogleMapReact
              bootstrapURLKeys={{ key: "" }}
              defaultCenter={defaultProps.center}
              defaultZoom={defaultProps.zoom}
            >
              <AnyReactComponent
                lat={59.955413}
                lng={30.337844}
                text="My Marker"
              />
            </GoogleMapReact> */}
          </Col>
          <Col md={6} className='contact-form'>
            <Form>
              <Row className='g-3'>
                <Col md={6}>
                  <FloatingLabel controlId="Name" label="Name" className="mb-3">
                    <Form.Control type="text" placeholder='Name' />
                  </FloatingLabel>
                </Col>

                <Col md={6}>
                  <FloatingLabel controlId="Email" label="Email" className="mb-3">
                    <Form.Control type="email" placeholder='Email' />
                  </FloatingLabel>
                </Col>
                <Col md={12}>
                  <FloatingLabel controlId="subject" label="Subject" className="mb-3">
                    <Form.Control type="text" placeholder='Subject' />
                  </FloatingLabel>
                </Col>

                <Col md={12}>
                  <FloatingLabel controlId="message" label="Message" className="mb-3">
                    <Form.Control as="textarea" rows={10} placeholder=" Message"/>
                  </FloatingLabel>
                </Col>

                <Col md={12}>
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Col>

              </Row>
            </Form>
          </Col>
        </Row>

      </Container>
    </>
  );
};
export default Contact;
