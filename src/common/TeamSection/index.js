import './index.scss';
import {Col, Container , Row } from 'react-bootstrap';
import { FaFacebookF,FaInstagram,FaTwitter}  from 'react-icons/fa';
import Teamimg1 from '../../assets/images/team-1.jpg';
import Teamimg2 from '../../assets/images/team-2.jpg';
import Teamimg3 from '../../assets/images/team-3.jpg';
import Teamimg4 from '../../assets/images/team-4.jpg';


const Teamdata = [
  {
    key:1,
    teamimg:Teamimg1,
    memberName: 'Ajay Gokhle',
    memberpost: 'ceo',
  },
  {
    key:2,
    teamimg:Teamimg2,
    memberName: 'Vinay Tailor',
    memberpost: 'Manager',
  },
  {
    key:3,
    teamimg:Teamimg3,
    memberName: 'Shubham Sen',
    memberpost: 'Accountent',
  },
  {
    key:4,
    teamimg:Teamimg4,
    memberName: 'Pratik Bhawsar',
    memberpost: 'Designer',
  },
  
]
function TeamSection() {
  return (
    <>
      <Container className='py-5'>
        <div className='text-center section-header '>
          <h4 className='textPrimary back-Primary'>Our Team</h4>
          <h1 className='mb-5 font-weight-bold textDark'>
            Explore Our <span className="textPrimary text-uppercase">Team</span>
          </h1>
        </div>
        <Row>
          {Teamdata.map(item =>
            <Col key={item.key} md={6} lg={3} className='mt-4'>
              <div className='team-item rounded shadow overflow-hidden'>
                <div className='position-relative'>
                  <div className='overflow-hidden'>
                    <img className='img-fluid' src={item.teamimg} alt={item.teamimg} />
                  </div>
                  <div className='d-flex align-items-center position-absolute translate-middle top-100 start-50'>
                    <a href='#home' className='mx-1 social-btn btn-primary'><FaFacebookF /></a>
                    <a href='#home' className='mx-1 social-btn btn-primary'><FaTwitter /></a>
                    <a href='#home' className='mx-1 social-btn btn-primary'><FaInstagram /></a>
                  </div>
                </div>
                <div className='text-center p-4 mt-3'>
                  <h4>{item.memberName}</h4>
                  <p>{item.memberpost}</p>
                </div>
              </div>
            </Col>
            )
          }
        </Row>
      </Container>
    </>
    );
}

export default TeamSection;
