/**
 * Raised when an api request fails.
 */
export class FacebookRequestError extends FacebookError {
    /**
     * @param  {Object}  response
     * @param  {String}   method
     * @param  {String}   url
     * @param  {Object}   data
     */
    constructor(response: any, method: string, url: string, data: any);
    status: any;
    response: any;
    headers: any;
    method: string;
    url: string;
    data: any;
}
declare function FacebookError(error: any): void;
declare class FacebookError {
    constructor(error: any);
    name: string;
    message: any;
    stack: string;
}
export {};
