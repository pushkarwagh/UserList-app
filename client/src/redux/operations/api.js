import axios from 'axios';

const API = axios.create({
  baseURL: 'https://userlist-app.herokuapp.com',
    
});

// API.interceptors.request.use(function (config) {
//   const token = localStorage.getItem('token');
//   config.headers.Authorization =  token ? `Bearer ${token}` : '---';
//   return config;
// });

export default API;