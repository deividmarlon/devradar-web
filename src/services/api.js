import axios from 'axios';

const api = axios.create({
    baseURL: 'https://devradar-server.herokuapp.com'
});

export default api;