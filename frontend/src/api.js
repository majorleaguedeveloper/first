import axios from 'axios';

// Create an axios instance with the base URL from the environment variable
const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL
});

export default api;
