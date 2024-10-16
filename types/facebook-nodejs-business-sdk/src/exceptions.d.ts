declare function FacebookError(error: any): void;
declare namespace FacebookError {
    var prototype: any;
}
/**
 * Raised when an api request fails.
 */
export declare class FacebookRequestError extends FacebookError {
    /**
     * @param  {[Object}  response
     * @param  {String}   method
     * @param  {String}   url
     * @param  {Object}   data
     */
    constructor(response: any, method: any, url: any, data: any);
}
export {};
