import "./index.scss";
import { Col, Container, Row, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import roomimg1 from "../../assets/images/room-1.jpg";
import roomimg2 from "../../assets/images/room-2.jpg";
import roomimg3 from "../../assets/images/room-3.jpg";
import { FaBed, FaStar, FaStarHalf, FaWifi, FaBath } from "react-icons/fa";

const Roomsdata = [
  {
    key: 1,
    roomimg: roomimg1,
    roomrate: "$100/Night",
    textheading: "Super Deluxe",
    star: (
      <>
        <FaStar /> <FaStar /> <FaStar /> <FaStarHalf />
      </>
    ),
    bed: "2 Bed",
    bath: "2 Bath",
    Wifi: "Wifi",
    textdetails:
      "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.",
  },
  {
    key: 2,
    roomimg: roomimg2,
    roomrate: "$100/Night",
    textheading: "Super Deluxe",
    star: (
      <>
        <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStarHalf />
      </>
    ),
    bed: "3 Bed",
    bath: "2 Bath",
    Wifi: "Wifi",
    textdetails:
      "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.",
  },
  {
    key: 3,
    roomimg: roomimg3,
    roomrate: "$100/Night",
    textheading: "Junior Suite",
    star: (
      <>
        <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
      </>
    ),
    bed: "4 Bed",
    bath: "1 Bath",
    Wifi: "Wifi",
    textdetails:
      "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.",
  },
];

function RoomSection() {
  const navigate = useNavigate();

  const handleBooking = (room) => {
    const roomData = { 
      textheading: room.textheading,  
      roomrate: room.roomrate,  
      roomimg: room.roomimg,  
      bedType: room.bed,  
      bath: room.bath,  
      Wifi: room.Wifi,  
      textdetails: room.textdetails  
    };
    
    navigate("/booking-form", { state: { roomDetails: roomData } });
  };
  
  return (
    <Container className="py-5">
      <div className="text-center section-header ">
        <h4 className="textPrimary back-Primary">Our Rooms</h4>
        <h1 className="mb-5 font-weight-bold textDark">
          Explore Our <span className="textPrimary text-uppercase">Rooms</span>
        </h1>
      </div>
      <Row>
        {Roomsdata.map((item) => (
          <Col key={item.key} md={6} lg={4} className="mt-4">
            <div className="room-item shadow rounded">
              <div className="position-relative">
                <img
                  className="img-fluid"
                  src={item.roomimg}
                  alt={item.textheading}
                />
                <small className="position-absolute start-0 top-100 translate-middle-y back-primary text-white py-1 px-3 ms-4">
                  {item.roomrate}
                </small>
              </div>
              <div className="p-4 mt-2">
                <div className="d-flex justify-content-between mb-3">
                  <h5 className="textDark font-weight-bold">
                    {item.textheading}
                  </h5>
                  <div className="textPrimary ps-2">{item.star}</div>
                </div>
                <div className="d-flex mb-3">
                  <small className="border-end me-3 pe-3 d-flex align-items-center">
                    <FaBed className="textPrimary me-3 f-19" />
                    {item.bed}
                  </small>
                  <small className="border-end me-3 pe-3 d-flex align-items-center">
                    <FaBath className="textPrimary me-3 f-19" />
                    {item.bath}
                  </small>
                  <small className="me-3 pe-3 d-flex align-items-center">
                    <FaWifi className="textPrimary me-3 f-19" />
                    {item.Wifi}
                  </small>
                </div>
                <p className="text-body mb-3 f-19">{item.textdetails}</p>
                <div className="d-flex justify-content-between">
                  <Button type="button" className="btn-primary rounded-0 py-2 px-4">
                    View Detail
                  </Button>
                  <Button
                    type="button"
                    className="btn-dark rounded-0 py-2 px-4"
                    onClick={() => handleBooking(item)}
                  >
                    Book Now
                  </Button>
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default RoomSection;
