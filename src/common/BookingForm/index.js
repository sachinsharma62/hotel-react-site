import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Container, Form, Button } from "react-bootstrap";

function BookingForm() {
  const location = useLocation();
  const roomDetails = location.state?.roomDetails || {}; // Room details receive

  const [formData, setFormData] = useState({
    customerName: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    adults: "",
    children: "",
    roomType: roomDetails?.textheading || "", 
    roomRate: roomDetails?.roomrate || "",   
    wifi: roomDetails?.Wifi || "",    
    bedType: roomDetails?.bedType || "",
    bathroom: roomDetails?.bath || "", 
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let bookings = JSON.parse(localStorage.getItem("bookedRooms")) || [];
    bookings.unshift(formData); // Latest booking sabse upar add hogi
    localStorage.setItem("bookedRooms", JSON.stringify(bookings));
    alert("Booking Successful!");
  };

  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">Book Your Room</h2>
      <Form onSubmit={handleSubmit} action="/bookings">
        <Form.Group>
          <Form.Label>Room Type</Form.Label>
          <Form.Control type="text" value={formData.roomType} required />
        </Form.Group>
        <Form.Group>
          <Form.Label>Room Price</Form.Label>
          <Form.Control type="text" value={formData.roomRate} required />
        </Form.Group>
        <Form.Group>
          <Form.Label>Bed</Form.Label>
          <Form.Control type="text" value={formData.bedType} required />
        </Form.Group>
        <Form.Group>
          <Form.Label>Bathroom</Form.Label>
          <Form.Control type="text" value={formData.bathroom} required />
        </Form.Group>
        <Form.Group>
          <Form.Label>WiFi</Form.Label>
          <Form.Control type="text" value={formData.wifi} required />
        </Form.Group>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="customerName" value={formData.customerName} onChange={handleChange} required />
        </Form.Group>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} required />
        </Form.Group>
        <Form.Group>
          <Form.Label>Phone</Form.Label>
          <Form.Control type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
        </Form.Group>
        <Form.Group>
          <Form.Label>Check-In Date</Form.Label>
          <Form.Control type="date" name="checkIn" value={formData.checkIn} onChange={handleChange} required />
        </Form.Group>
        <Form.Group>
          <Form.Label>Check-Out Date</Form.Label>
          <Form.Control type="date" name="checkOut" value={formData.checkOut} onChange={handleChange} required />
        </Form.Group>
         {/* ✅ Children Selection */}
         <Form.Group>
          <Form.Label>Children</Form.Label>
          <Form.Select name="children" value={formData.children} onChange={handleChange} required>
            <option value="0">No Children</option>
            <option value="1">1 Child</option>
            <option value="2">2 Children</option>
            <option value="3">3 Children</option>
          </Form.Select>
        </Form.Group>
       
        <Form.Group>
          <Form.Label>Adults</Form.Label>
          <Form.Select name="adults" value={formData.adults} onChange={handleChange} required>
            <option value="1">1 Adult</option>
            <option value="2">2 Adults</option>
            <option value="3">3 Adults</option>
            <option value="4">4 Adults</option>
          </Form.Select>
        </Form.Group>
        <Button type="submit" className="mt-3">Confirm Booking</Button>
      </Form>
    </Container>
  );
}

export default BookingForm;
