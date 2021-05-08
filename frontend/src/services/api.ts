import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://sds3-gleydson.herokuapp.com'
});