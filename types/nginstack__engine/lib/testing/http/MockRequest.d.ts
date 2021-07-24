export = MockRequest;
declare function MockRequest(opt_options: {
    path?: string;
    method?: string;
    headers?: any;
    params?: any;
    body?: string | Record<string, any>;
}): void;
declare class MockRequest {
    constructor(opt_options: {
        path?: string;
        method?: string;
        headers?: any;
        params?: any;
        body?: string | Record<string, any>;
    });
    path_: string;
    host_: any;
    method_: any;
    params_: any;
    content_: string;
    position_: number;
    limitReadSize_: number;
    headers_: {};
    private getHeader;
    private getHeaders;
    private getParams;
    private getMethod;
    private getMethodType;
    private getPath;
    private getHost;
    private getContent;
    private getContentType;
    private getContentLength;
    private getBody;
    private read;
}
