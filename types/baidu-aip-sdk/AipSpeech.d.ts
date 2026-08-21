export = AipSpeech;
/**
 * AipSpeech类，构造调用语音接口
 *
 * @param {string} appid appid.
 * @param {string} ak  access key.
 * @param {string} sk  security key.
 */
declare class AipSpeech extends BaseClient {
    constructor(appId: string, ak: string, sk: string);
    recognizePro(buffer: any, format: any, rate: any, options: any): any;
    recognize(buffer: any, format: any, rate: any, options: any): any;
    recognizeByUrl(url: any, callback: any, format: any, rate: any, options: any): any;
    asrImpl(param: any): any;
    asrImplPro(param: any): any;
    asrImplPath(param: any, url: any): any;
    text2audio(text: any, options: any): any;
    ttsImpl(param: any): any;
}
import BaseClient = require("./client/baseClient");
