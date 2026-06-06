export = RequestInfo;
/**
 * RequestInfo类
 * 构造供request库调用的请求信息对象
 *
 * @constructor
 */
declare class RequestInfo {
    constructor(path: any, params: any, method: any, isHttp: any, headers: any);
    isHttp: any;
    method: any;
    host: string;
    path: any;
    params: any;
    createDate: Date;
    mergeHeaders: any;
    devAccessToken: any;
    setHost(host: any): void;
    initCommonHeader(): void;
    headers: {};
    makeDevOptions(devAccessToken: any): void;
    makeBceOptions(ak: any, sk: any): void;
    getUTCDateStr(): string;
    getAccessToken(): any;
    getUrl(): string;
    getPureUrl(): string;
    getHttpsUrl(): string;
    getHttpUrl(): string;
}
