import axios from "axios";
import applyConverters from "axios-case-converter";

applyConverters(); // $ExpectError

applyConverters(axios.create()); // $ExpectType AxiosInstance
