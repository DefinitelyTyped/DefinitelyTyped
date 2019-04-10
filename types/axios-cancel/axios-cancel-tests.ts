import axios, { AxiosPromise } from "axios"
import axiosCancel from "axios-cancel";

axiosCancel(axios);

axios.get(
    'https://jsonplaceholder.typicode.com/users', {
        requestId: "test id"
    }
); // $ExpectType Promise<any>

axios.cancel("test id");
