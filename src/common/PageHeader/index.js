import './index.scss';
import { Col, Container, Row } from 'react-bootstrap';
import PageHeaderForm from '../PageHeaderForm';
import { useLocation } from 'react-router-dom';

function PageHeader() {
  const location = useLocation();

  // ✅ Function to get Page Title dynamically
  const getPageTitle = () => {
    const path = location.pathname;
    switch (path) {
      case "/":
        return "Home";
      case "/about":
        return "About Us";
      case "/rooms":
        return "Our Rooms";
      case "/contact":
        return "Contact Us";
        case "/bookings":
          return "Your Bookings";
          case "/services":
        return "Our Services";
      default:
        return path.replace("/", "").replace("-", " ") || "Page Not Found";
    }
  };

  return (
    <>
      <Container fluid className='page-header p-0 mb-5 text-center'>
        <div className='page-header-inner py-5'>
          <Row className='m-0'>
            <Col span={12} className='pb-5'>
              <h1>{getPageTitle()}</h1>
              <small className='textPrimary'>
                Home <span>/</span> {getPageTitle()}
              </small>
            </Col>
          </Row>
        </div>
      </Container>
      <PageHeaderForm />
    </>
  );
}

export default PageHeader;
