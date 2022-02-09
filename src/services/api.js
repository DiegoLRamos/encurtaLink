import axios from 'axios';

export const key = 'beb8cc013252e1454b16f05c9537e4fbbe091e81';

const api = axios.create({
  baseURL: 'https://api-ssl.bitly.com/v4/',
  headers: {
    'Authorization': `Bearer ${key}`
  }
});

export default api;