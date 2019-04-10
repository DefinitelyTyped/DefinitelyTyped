import axios, {AxiosPromise} from "axios"
import axiosCancel from "axios-cacel";

axiosCancel(axios);

axios.get(
    'https://jsonplaceholder.typicode.com/users', {
        requestId: "test id"
    }
) // $ExpectType AxiosPromise<any>
