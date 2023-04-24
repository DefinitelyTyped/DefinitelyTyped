import FacebookAdsApi from './api';
import APIRequest from './api-request';
declare class FacebookAdsApiBatch {
    _api: FacebookAdsApi;
    _files: Array<Record<string, any>>;
    _batch: Array<Record<string, any>>;
    _successCallbacks: Array<(...args: any[]) => any>;
    _failureCallbacks: Array<(...args: any[]) => any>;
    _requests: APIRequest[];
    constructor(
        api: FacebookAdsApi,
        successCallback?: (...args: any[]) => any,
        failureCallback?: (...args: any[]) => any,
    );
    add(
        method: string,
        relativePath: string[] | string,
        params?: Record<string, any>,
        files?: Record<string, any>,
        successCallback?: (...args: any[]) => any,
        failureCallback?: (...args: any[]) => any,
        request?: APIRequest,
    ): {
        attachedFiles?: string;
        body?: string;
        method: string;
        name: any;
        relative_url: string;
    };
    addRequest(
        request: APIRequest,
        successCallback?: (...args: any[]) => any,
        failureCallback?: (...args: any[]) => any,
    ): {
        attachedFiles?: string;
        body?: string;
        method: string;
        name: any;
        relative_url: string;
    };
    execute(): Promise<unknown>;
}
export default FacebookAdsApiBatch;
