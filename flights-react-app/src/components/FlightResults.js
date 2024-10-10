import React from 'react';

const FlightResults = ({ flights }) => {
  return (
    <div>
      {flights.map((flight, index) => (
        <div key={index} className="flight-result">
          <p>From: {flight.from}</p>
          <p>To: {flight.to}</p>
          <p>Price: {flight.price}</p>
          <p>Departure: {flight.departureTime}</p>
          <p>Arrival: {flight.arrivalTime}</p>
        </div>
      ))}
    </div>
  );
};

export default FlightResults;
