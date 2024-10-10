import React, { useState } from 'react';
import './App.css';
import { fetchFlights } from './api/flights';
import SearchForm from './components/SearchForm';
import FlightResults from './components/FlightResults';

function App() {
  const [flights, setFlights] = useState([]);

  const handleSearch = async (from, to, date) => {
    const results = await fetchFlights(from, to, date);
    setFlights(results.flights || []); // Update to point to the correct structure
  };
  

  return (
    <div className="App">
      <h1>Flight Search</h1>
      <SearchForm onSearch={handleSearch} />
      <FlightResults flights={flights} />
    </div>
  );
}

export default App;
