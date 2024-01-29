import FacebookAdsApi from './api';
import APIRequest from './api-request';
/**
 * Facebook Ads API Batch
 */
declare class FacebookAdsApiBatch {
    _api: FacebookAdsApi;
    _files: Array<Record<any, any>>;
    _batch: Array<Record<any, any>>;
    _successCallbacks: any[];
    _failureCallbacks: any[];
    _requests: APIRequest[];
    /**
     * @param {FacebookAdsApi} api
     * @param {Function} successCallback
     * @param {Function} failureCallback
     */
    constructor(api: FacebookAdsApi, successCallback?: any, failureCallback?: any);
    /**
     * Adds a call to the batch.
     * @param  {string} method The HTTP method name (e.g. 'GET').
     * @param  {string[]|string} relativePath An array of path tokens or
     *   a relative URL string. An array will be translated to a url as follows:
     *     <graph url>/<tuple[0]>/<tuple[1]>...
     *   It will be assumed that if the path is not a string, it will be iterable.
     * @param  {Object} [params] A mapping of request parameters
     *   where a key is the parameter name and its value is a string or an object
     *   which can be JSON-encoded.
     * @param {Object} [files] An optional mapping of file names to binary open
     *   file objects. These files will be attached to the request.
     * @param {Function} [successCallback] A callback function which will be
     *   called with the response of this call if the call succeeded.
     * @param {Function} [failureCallback] A callback function which will be
     *   called with the response of this call if the call failed.
     * @param {APIRequest} [request] The APIRequest object
     * @return {Object} An object describing the call
     */
    add(method: string, relativePath: string[] | string, params?: Record<any, any>, files?: Record<any, any>, successCallback?: any, failureCallback?: any, request?: APIRequest): {
        attachedFiles: undefined | string;
        body: undefined | string;
        method: string;
        name: any;
        relative_url: string;
    };
    /**
     * Interface to add a APIRequest to the batch.
     * @param  {APIRequest} request The APIRequest object to add
     * @param  {Function} [successCallback] A callback function which
     *   will be called with response of this call if the call succeeded.
     * @param  {Function} [failureCallback] A callback function which
     *   will be called with the FacebookResponse of this call if the call failed.
     * @return {Object} An object describing the call
     */
    addRequest(request: APIRequest, successCallback?: any, failureCallback?: any): {
        attachedFiles: undefined | string;
        body: undefined | string;
        method: string;
        name: any;
        relative_url: string;
    };
    /**
     * Makes a batch call to the api associated with this object.
     * For each individual call response, calls the success or failure callback
     * function if they were specified.
     * Note: Does not explicitly raise exceptions. Individual exceptions won't
     * be thrown for each call that fails. The success and failure callback
     * functions corresponding to a call should handle its success or failure.
     * @return {FacebookAdsApiBatch|None} If some of the calls have failed,
     *   returns a new FacebookAdsApiBatch object with those calls.
     *   Otherwise, returns None.
     */
    execute(): undefined | Promise<unknown>;
}
export default FacebookAdsApiBatch;
