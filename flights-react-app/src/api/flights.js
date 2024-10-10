import axios from 'axios';

export const fetchFlights = async (originSkyId, destinationSkyId, originEntityId, destinationEntityId, cabinClass, adults, sortBy, currency, market, countryCode, date) => {
    const options = {
      method: 'GET',
      url: 'https://sky-scrapper.p.rapidapi.com/api/v2/flights/searchFlightsWebComplete',
      params: {
        originSkyId,
        destinationSkyId,
        originEntityId,
        destinationEntityId,
        cabinClass,
        adults,
        sortBy,
        currency,
        market,
        countryCode,
        date
      },
      headers: {
        'X-Rapidapi-Key': process.env.REACT_APP_RAPIDAPI_KEY,
        'X-Rapidapi-Host': 'sky-scrapper.p.rapidapi.com'
      }
    };
  
    try {
      const response = await axios.request(options);
      console.log('API response:', response.data); // Log the entire response
      return response.data; // Adjust this based on the actual structure
    } catch (error) {
      console.error('Error fetching flight data:', error);
      throw error;
    }
  };
  