import  { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import Datetime from "react-datetime";
import { Col, Container, Row } from "react-bootstrap";

function PageHeaderForm() {
  const navigate = useNavigate();
  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);
  const [selectedAdult, setSelectedAdult] = useState("1");
  const [selectedChild, setSelectedChild] = useState("0");
  const [roomType, setRoomType] = useState("Deluxe");
  const [customerName, setCustomerName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!customerName || !email || !phone || !checkIn || !checkOut) {
      alert("Please fill all fields before submitting.");
      return;
    }

    let bookings = JSON.parse(localStorage.getItem("bookedRooms")) || [];

    let newBooking = {
      customerName,
      email,
      phone,
      textheading: roomType,
      roomrate: roomRate,
      checkin: checkIn ? checkIn.format("YYYY-MM-DD HH:mm") : "Not Selected",
      checkout: checkOut ? checkOut.format("YYYY-MM-DD HH:mm") : "Not Selected",
      adults: selectedAdult,
      children: selectedChild,
      roomimg: "", 
      bookedVia: "form",
    };

    bookings.push(newBooking);
    localStorage.setItem("bookedRooms", JSON.stringify(bookings));
    alert("Booking Successful!");

    navigate("/bookings"); 
  };

  return (
    <Container className="pb-5 header-form">
      <div className="bg-white shadow header-form-inner p-4">
        <h3 className="mb-3 text-center">Book Your Room</h3>
        <Row className="g-3">
          <Col md={6}>
            <input type="text" className="form-control" placeholder="Full Name" value={customerName} onChange={(e) => setCustomerName(e.target.value)} />
          </Col>
          <Col md={6}>
            <input type="email" className="form-control" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </Col>
          <Col md={6}>
            <input type="tel" className="form-control" placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} />
          </Col>
          <Col md={6}>
            <select className="form-select" value={roomType} onChange={(e) => setRoomType(e.target.value)}>
              <option value="Deluxe">Deluxe Room</option>
              <option value="Suite">Suite Room</option>
              <option value="Standard">Standard Room</option>
            </select>
          </Col>
          <Col md={3}>
            <Datetime value={checkIn} onChange={setCheckIn} inputProps={{ placeholder: "Check-in" }} />
          </Col>
          <Col md={3}>
            <Datetime value={checkOut} onChange={setCheckOut} inputProps={{ placeholder: "Check-out" }} />
          </Col>
          <Col md={3}>
            <select className="form-select" value={selectedAdult} onChange={(e) => setSelectedAdult(e.target.value)}>
              <option value="1">1 Adult</option>
              <option value="2">2 Adults</option>
              <option value="3">3 Adults</option>
            </select>
          </Col>
          <Col md={3}>
            <select className="form-select" value={selectedChild} onChange={(e) => setSelectedChild(e.target.value)}>
              <option value="0">No Child</option>
              <option value="1">1 Child</option>
              <option value="2">2 Children</option>
            </select>
          </Col>
          <Col md={12}>
            <button type="button" className="btn btn-primary w-100 text-uppercase" onClick={handleSubmit}>
              Submit Booking
            </button>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default PageHeaderForm;
