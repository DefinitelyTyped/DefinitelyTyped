/**
 * Encapsulates an http response from Facebook's Graph API.
 */
declare class APIResponse {
    _body: Record<any, any>;
    _httpStatus: string;
    _headers: Record<any, any>;
    _call: Record<any, any>;
    _response: Record<any, any>;
    constructor(response: Record<any, any>, call?: Record<any, any>);
    /**
     * @return {Object} The response body
     */
    get body(): any;
    get headers(): any;
    get etag(): any;
    get status(): string;
    get isSuccess(): boolean;
    get error(): any;
}
export default APIResponse;
