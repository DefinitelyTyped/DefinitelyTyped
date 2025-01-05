export = HttpClientExt;
/**
 * HttpClientExt类
 * 图像审核某个接口调用需要json的Content-type,请求body为json字符串
 *
 * @class
 * @extends HttpClient
 * @constructor
 */
declare class HttpClientExt extends HttpClient {
    createBody(param: any): string;
}
import HttpClient = require("./httpClient");
