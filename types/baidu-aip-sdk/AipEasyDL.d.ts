export = AipEasyDL;
/**
 * AipEasyDL类
 *
 * @class
 * @extends BaseClient
 * @constructor
 * @param {string} appid appid.
 * @param {string} ak  access key.
 * @param {string} sk  security key.
 */
declare class AipEasyDL extends BaseClient {
    constructor(appId: any, ak: any, sk: any);
    commonImpl(param: any): any;
    requestImage(url: any, image: any, options: any): any;
    requestSound(url: any, sound: any, options: any): any;
}
import BaseClient = require("./client/baseClient");
