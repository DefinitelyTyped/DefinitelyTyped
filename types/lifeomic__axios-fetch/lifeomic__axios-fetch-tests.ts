import axios from 'axios';
import { buildAxiosFetch } from '@lifeomic/axios-fetch';

const instance = axios.create();

const fetch = buildAxiosFetch(instance, config => {
    config.timeout = 1000;
    return config;
});

fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    },
}).then(response => {
    return response.json();
});
