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
    private path_;
    private host_;
    private method_;
    private params_;
    private content_;
    private position_;
    private limitReadSize_;
    private headers_;
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
