import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://sky-scrapper.p.rapidapi.com/api/search',
  params: { from: '', to: '', date: '' },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY,
    'X-RapidAPI-Host': 'sky-scrapper.p.rapidapi.com'
  }
};

export const fetchFlights = async (from, to, date) => {
  try {
    const response = await axios.request({ ...options, params: { from, to, date } });
    return response.data;
  } catch (error) {
    console.error('Error fetching flight data:', error);
    throw error;
  }
};
