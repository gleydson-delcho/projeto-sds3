import axios from 'axios';

export const api = axios.create({
    baseURL: process.env.NODE_ENV_BACKEND_URL ?? 'http://localhost:8080'
});