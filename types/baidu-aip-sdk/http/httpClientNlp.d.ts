export = HttpClientNlp;
/**
 * HttpClientNlp类
 * nlp接口调用使用GBK编码解码实现,依赖iconv-lite库
 * @see https://github.com/ashtuchkin/iconv-lite
 *
 * @class
 * @extends HttpClient
 * @constructor
 */
declare class HttpClientNlp extends HttpClient {
    createBody(param: any): any;
}
import HttpClient = require("./httpClient");
