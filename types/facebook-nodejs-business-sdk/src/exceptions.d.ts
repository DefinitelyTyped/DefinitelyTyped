declare function FacebookError(error: any): void;
declare namespace FacebookError {
    var prototype: any;
}
/**
 * Raised when an api request fails.
 */
export declare class FacebookRequestError extends FacebookError {
    /**
     * @param  {Object}  response
     * @param  {String}   method
     * @param  {String}   url
     * @param  {Object}   data
     */
    constructor(response: any, method: any, url: any, data: any);

    name: string;
    message: string;
    stack: string;
    status: number;
    response: {
        message: string;
        type: string;
        code: number;
        fbtrace_id: string;
    }
    headers: { [key: string]: string };
    method: string;
    url: string;
    data: { data: object[], id: string };
}
export { };
