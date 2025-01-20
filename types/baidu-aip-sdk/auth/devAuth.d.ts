export = DevAuth;
/**
 * devAuth类
 * 百度开发者token获取类
 */
declare class DevAuth {
    constructor(ak: string, sk: string);
    ak: string;
    sk: string;
    httpClient: HttpClient;
    gotData(data: any): DevAuthToken;
    gotDataError(err: any): void;
    getToken(): any;
}
declare namespace DevAuth {
    let EVENT_ERRTYPE_ILLEGAL_RESPONSE: string;
    let EVENT_ERRTYPE_NETWORK: string;
    let EVENT_ERRTYPE_NORMAL: string;
}
import HttpClient = require("../http/httpClient");
import DevAuthToken = require("./devAuthToken");
