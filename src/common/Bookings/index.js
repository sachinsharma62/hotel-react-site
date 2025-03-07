import React, { useState, useEffect } from "react";
import { Container, Table } from "react-bootstrap";

function Bookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const storedBookings = JSON.parse(localStorage.getItem("bookedRooms")) || [];
    setBookings(storedBookings);
  }, []);

  return (
    <Container className="py-5">
      <h2 className="mb-4 text-center">Latest Bookings</h2>

      {bookings.length === 0 ? (
        <p className="text-center">No bookings found.</p>
      ) : (
        <Table striped bordered hover responsive>
          <thead className="bg-primary text-white text-center">
            <tr>
              <th>#</th>
              <th>Customer Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Room Type</th>
              <th>Price</th>
              <th>Check-In</th>
              <th>Check-Out</th>
              <th>Adults</th>
              <th>Children</th>
              <th>WiFi</th>
              <th>Bed</th>
              <th>Bathroom</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {bookings.map((booking, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{booking.customerName}</td>
                <td>{booking.email}</td>
                <td>{booking.phone}</td>
                <td>{booking.roomType}</td>
                <td>{booking.roomRate}</td>
                <td>{booking.checkIn}</td>
                <td>{booking.checkOut}</td>
                <td>{booking.adults}</td>
                <td>{booking.children}</td>
                <td>{booking.wifi}</td>
                <td>{booking.bedType}</td>
                <td>{booking.bathroom}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Container>
  );
}

export default Bookings;
