declare namespace sn_ws {
    interface RESTAPIRequest {
        readonly body: RESTAPIRequestBody;
        readonly pathParams: { [paramName: string]: string };
        readonly queryParams: { [paramName: string]: string[] };
        readonly queryString: string;
        readonly uri: string;
        readonly url: string;
        readonly headers: { [paramName: string]: string };
        getHeader(header: string): string;
        getSupportedResponseContentTypes(): string[];
    }
}
