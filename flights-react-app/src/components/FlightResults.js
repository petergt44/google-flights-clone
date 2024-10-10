import React from "react";

const FlightResults = ({ flights }) => {
    console.log('Flights prop:', flights); // Log the flights prop to check its value
    // Ensure flights is an array before using .map
    if (!Array.isArray(flights) || flights.length === 0) {
        return <div>No flights found</div>;
    }

    return (
        <div>
            {flights.map((flight, index) => (
                <div key={index}>
                    <h3>Flight {index + 1}</h3>
                    <p>Price: {flight.price.formatted}</p>
                    <p>Origin: {flight.legs[0].origin.name}</p>
                    <p>Destination: {flight.legs[0].destination.name}</p>
                    <p>Departure: {new Date(flight.legs[0].departure).toLocaleString()}</p>
                    <p>Arrival: {new Date(flight.legs[0].arrival).toLocaleString()}</p>
                </div>
            ))}
        </div>
    );
};

export default FlightResults;
