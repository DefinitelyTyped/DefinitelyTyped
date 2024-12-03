export = AipImageCensor;
/**
 * AipContentCensor类，构造调用图像审核对象
 *
 * @param {string} appid appid.
 * @param {string} ak  access key.
 * @param {string} sk  security key.
 */
declare class AipImageCensor extends BaseClient {
    constructor(appId: string, ak: string, sk: string);
    commonImpl(param: any): any;
    jsonRequestImpl(param: any): any;
    imageCensorUserDefined(image: any, type: any): any;
    textCensorUserDefined(text: any, type: any): any;
    report(feedback: any): any;
}
import BaseClient = require("./client/baseClient");
