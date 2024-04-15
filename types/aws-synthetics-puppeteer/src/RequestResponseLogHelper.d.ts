// js installs to root of node_modules
// eslint-disable-next-line @definitelytyped/no-single-declare-module
declare module "RequestResponseLogHelper" {
    /**
     * Handles the fine grained configuration and creation of string representations of request and response payloads
     */
    class RequestResponseLogHelper {
        request: {
            url: boolean;
            resourceType: boolean;
            method: boolean;
            headers: boolean;
            postData: boolean;
        };
        response: {
            status: boolean;
            statusText: boolean;
            url: boolean;
            remoteAddress: boolean;
            headers: boolean;
        };
        withLogRequestUrl(logRequestUrl: any): RequestResponseLogHelper;
        withLogRequestResourceType(logRequestResourceType: any): RequestResponseLogHelper;
        withLogRequestMethod(logRequestMethod: any): RequestResponseLogHelper;
        withLogRequestHeaders(logRequestHeaders: any): RequestResponseLogHelper;
        withLogRequestPostData(logRequestPostData: any): RequestResponseLogHelper;
        withLogResponseStatus(logResponseStatus: any): RequestResponseLogHelper;
        withLogResponseStatusText(logResponseStatusText: any): RequestResponseLogHelper;
        withLogResponseUrl(logResponseUrl: any): RequestResponseLogHelper;
        withLogResponseRemoteAddress(logResponseRemoteAddress: any): RequestResponseLogHelper;
        withLogResponseHeaders(logResponseHeaders: any): RequestResponseLogHelper;
        getLogRequestString(request: any): string;
        getLogResponseString(response: any): string;
    }
}
