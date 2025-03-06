import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import PageHeader from "../PageHeader";

function Bookings() {

  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const savedBookings = JSON.parse(localStorage.getItem("bookedRooms")) || [];
    setBookings(savedBookings);
  }, []);

  return (
    <>
    <PageHeader />
    <Container className='py-5'>
      
      <Row>
        {bookings.length > 0 ? (
          bookings.map((room, index) => (
            <Col key={index} md={6} lg={4} className='mt-4'>
              <div className='room-item shadow rounded p-3'>
                {/* ✅ Sirf card wali booking ki image dikhao */}
                {room.bookedVia === "card" && (
                  <img className='img-fluid' src={room.roomimg} alt={room.textheading} />
                )}
                <h5 className='mt-2'>{room.textheading}</h5>
                <p>{room.roomrate}</p>
                <p>Check-in: {room.checkin}</p>
                <p>Check-out: {room.checkout}</p>
                <p>Adults: {room.adults}</p>
                <p>Children: {room.children}</p>
              </div>
            </Col>
          ))
        ) : (
          <p className='text-center'>No bookings found.</p>
        )}
      </Row>
    </Container>
    </>
  );
}


export default Bookings;
