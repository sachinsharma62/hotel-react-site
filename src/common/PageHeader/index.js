import './index.scss';
import {Col, Container , Row } from 'react-bootstrap';
import PageHeaderForm from '../PageHeaderForm';
function PageHeader() {
  return (
    <>
    <Container fluid className='page-header p-0 mb-5 text-center'>
      <div className='page-header-inner py-5'>
        <Row className='m-0'>
          <Col span={12} className='pb-5'>
            <h1>Text</h1>
            <small className='textPrimary'>Home <span >/</span>Home <span>/</span><span>Text</span></small>
          </Col>
        </Row>
      </div>
    </Container>
    <PageHeaderForm />
    </>
    );
}

export default PageHeader;
