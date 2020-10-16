import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api-simp.herokuapp.com/',
});

export default api;