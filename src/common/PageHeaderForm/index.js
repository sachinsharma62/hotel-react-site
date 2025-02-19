import './index.scss';
import {Col, Container , Row } from 'react-bootstrap';
import Datetime from "react-datetime";
import React, { useState } from 'react';

function PageHeaderForm() {

  const [selectedDateTime, setSelectedDateTime] = useState(null);

  const handleDateTimeChange = (date) => {
    setSelectedDateTime(date);
  };

  const [selectedDateTime2, setSelectedDateTime2] = useState(null);

  const handleDateTimeChange2 = (date) => {
    setSelectedDateTime2(date);
  };

  
  return (
    <>
    <Container className='pb-5 header-form'>
      <div className='bg-white shadow  header-form-inner'>
        <Row className='g-2'>
          <Col md={10}>
            <Row className='g-2'>
              <Col md={3}> 
                <Datetime
                  value={selectedDateTime2}
                  onChange={handleDateTimeChange2}
                  dateFormat="YYYY-MM-DD"
                  timeFormat="HH:mm"
                  inputProps={{ placeholder: 'Check in' }}
                />
              </Col>
              <Col md={3}> 
                <Datetime
                    value={selectedDateTime}
                    onChange={handleDateTimeChange}
                    dateFormat="YYYY-MM-DD"
                    timeFormat="HH:mm"
                    inputProps={{ placeholder: 'Check out' }}
                  />
              </Col>
              <Col md={3}> 
                <select className='form-select'>
                    <option selected="">Adult</option>
                    <option value="1">Adult 1</option>
                    <option value="2">Adult 2</option>
                    <option value="3">Adult 3</option>
                </select>
              </Col>
              <Col md={3}> 
                <select className='form-select'>
                    <option selected="">Child</option>
                    <option value="1">Child 1</option>
                    <option value="2">Child 2</option>
                    <option value="3">Child 3</option>
                </select>
              </Col>
            </Row>
          </Col>
          <Col md={2}><button href="#home" className='btn-primary text-uppercase w-100 text-white btn '> Submit </button></Col>
        </Row>
      </div>
    </Container>
    </>
    );
}

export default PageHeaderForm;
