import axios from 'axios';

export const instance = axios.create({
    baseURL: 'https://bf49-178-126-210-0.eu.ngrok.io/',
})