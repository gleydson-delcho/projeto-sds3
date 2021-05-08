import axios from 'axios';
import 'dotenv/config'

export const api = axios.create({
    baseURL: process.env.BACKEND_URL ?? 'http://localhost:8080'
});