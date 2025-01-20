export = HttpClientVoiceASR;
/**
 * HttpClientVoice类
 * 百度语音接口调用封装
 * 参考文档：http://speech.baidu.com/docs/asr/57
 *
 * @class
 * @extends HttpClient
 * @constructor
 */
declare class HttpClientVoiceASR extends HttpClient {
    createBody(param: any): string;
    genMd5(str: any): any;
}
import HttpClient = require("./httpClient");
