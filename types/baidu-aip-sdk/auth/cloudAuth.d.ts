export = CloudAuth;
/**
 * CloudAuth类
 *
 * 百度云鉴权签名类，依赖百度云签名实现(bceAuth目录)
 * @see https://github.com/baidubce/bce-sdk-js
 * @see http://gollum.baidu.com/AuthenticationMechanism#生成CanonicalQueryString
 * @constructor
 * @param {string} ak The access key.
 * @param {string} sk The security key.
 */
declare class CloudAuth {
    constructor(ak: any, sk: any);
    ak: any;
    sk: any;
    authProxy: BceAuth;
    getAuthorization(method: any, uri: any, params: any, headers: any, time: any): string;
}
import BceAuth = require("./bceAuth/auth");
