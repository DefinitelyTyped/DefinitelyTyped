import axios from "axios";
import curlirize from "axios-curlirize";

const Axios = axios.create({});
curlirize(Axios);
curlirize(Axios, (res, _err) => {
    const { command: string } = res;
});
