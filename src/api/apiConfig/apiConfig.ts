import axios from 'axios';

export const instance = axios.create({
    baseURL: 'https://a60f-178-126-194-89.eu.ngrok.io'
})