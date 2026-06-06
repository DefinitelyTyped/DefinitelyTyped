export = HttpClientVoiceTTS;
/**
 * HttpClientVoice类
 * 百度语音接口调用封装
 * 参考文档：http://speech.baidu.com/docs/asr/57
 *
 * @class
 * @extends HttpClient
 * @constructor
 */
declare class HttpClientVoiceTTS extends HttpClient {
    genMd5(str: any): any;
}
import HttpClient = require("./httpClient");
