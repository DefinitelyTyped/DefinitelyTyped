// can't test because it depends on axios which makes Travis CI be unable to compile with the error "expect TypeScript@next compile error: Cannot find module 'axios'."

import axios, { AxiosPromise } from "axios"
import axiosCancel, { AxiosStatic } from "axios-cancel";

axiosCancel(axios); // $ExpectType void

axios.get(
    'https://jsonplaceholder.typicode.com/users', {
        requestId: "test id"
    }
); // $ExpectType AxiosPromise<any>

axios.cancel("test id"); // $ExpectType void

axios.cancelAll(); // $ExpectType void
