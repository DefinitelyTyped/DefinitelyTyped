import axios, { AxiosPromise } from "axios";
import axiosCancel from "axios-cancel";

axiosCancel(axios); // $ExpectType void

axios.get(
    'https://jsonplaceholder.typicode.com/users', {
        requestId: "test id"
    }
);

axios.cancel("test id"); // $ExpectType void

axios.cancelAll(); // $ExpectType void
