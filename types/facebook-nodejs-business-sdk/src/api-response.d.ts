declare class APIResponse {
    _body: Record<string, any>;
    _httpStatus: string;
    _headers: Record<string, any>;
    _call: Record<string, any>;
    _response: Record<string, any>;
    constructor(response: Record<string, any>, call?: Record<string, any>);
    get body(): any;
    get headers(): any;
    get etag(): any;
    get status(): string;
    get isSuccess(): boolean;
    get error(): any;
}
export default APIResponse;
