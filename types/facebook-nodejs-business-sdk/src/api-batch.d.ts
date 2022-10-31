import FacebookAdsApi from './api';
import APIRequest from './api-request';
declare class FacebookAdsApiBatch {
    _api: FacebookAdsApi;
    _files: Array<Record<string, any>>;
    _batch: Array<Record<string, any>>;
    _successCallbacks: Array<(...args: Array<any>) => any>;
    _failureCallbacks: Array<(...args: Array<any>) => any>;
    _requests: Array<APIRequest>;
    constructor(
        api: FacebookAdsApi,
        successCallback?: (...args: Array<any>) => any,
        failureCallback?: (...args: Array<any>) => any,
    );
    add(
        method: string,
        relativePath: Array<string> | string,
        params?: Record<string, any>,
        files?: Record<string, any>,
        successCallback?: (...args: Array<any>) => any,
        failureCallback?: (...args: Array<any>) => any,
        request?: APIRequest,
    ): {
        attachedFiles: undefined | string;
        body: undefined | string;
        method: string;
        name: any;
        relative_url: string;
    };
    addRequest(
        request: APIRequest,
        successCallback?: (...args: Array<any>) => any,
        failureCallback?: (...args: Array<any>) => any,
    ): {
        attachedFiles: undefined | string;
        body: undefined | string;
        method: string;
        name: any;
        relative_url: string;
    };
    execute(): Promise<unknown>;
}
export default FacebookAdsApiBatch;
