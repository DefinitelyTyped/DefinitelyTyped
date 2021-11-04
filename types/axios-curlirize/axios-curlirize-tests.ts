import curlirize from 'axios-curlirize';
import axios from 'axios';

const Axios = axios.create({});
curlirize(Axios);
curlirize(Axios, (res, _err) => {
    const { command: string } = res;
});
