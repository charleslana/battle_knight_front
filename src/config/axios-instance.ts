import axios from 'axios';

const api = axios.create({
  baseURL: '/api',
  timeout: 60000,
  headers: {
    Client_id: import.meta.env.VITE_CLIENT_ID,
    Client_secret: import.meta.env.VITE_CLIENT_SECRET,
  },
});

export default api;
