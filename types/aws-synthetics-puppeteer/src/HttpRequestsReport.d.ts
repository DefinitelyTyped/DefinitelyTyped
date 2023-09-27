// js installs to root of node_modules
// eslint-disable-next-line @definitelytyped/no-single-declare-module
declare module "HttpRequestsReport" {
    /**
     * This class handles the creation of http requests report.
     * This report is generated and uploaded to S3 bucket by Synthetics.
     */
    class HttpCallResult {
        requestNum: number;
        requestUrl: string;
        request: HttpRequestResult;
        response: HttpResponseResult;
        httpTimings: HttpTimingsResult;
        withRequestNum(requestNum: any): HttpCallResult;
        getRequestNum(): number;
        withRequestUrl(requestUrl: any): HttpCallResult;
        getRequestUrl(): string;
        withRequest(request: any): HttpCallResult;
        getRequest(): HttpRequestResult;
        withResponse(response: any): HttpCallResult;
        getResponse(): HttpResponseResult;
        withHttpTimings(httpTimings: any): HttpCallResult;
        getHttpTimings(): HttpTimingsResult;
        withStep(step: any): HttpCallResult;
        step: any;
        getStep(): any;
    }
    class HttpRequestResult {
        static buildRequestResult(options: any, requestBody: any, syntheticsConfiguration: any): HttpRequestResult;
        headers: any;
        path: any;
        body: any;
        hostname: any;
        host: any;
        method: any;
        protocol: any;
        port: any;
        sizeInBytes: {
            headers: number;
            body: number;
        };
        withHeaders(headers: any): HttpRequestResult;
        getHeaders(): any;
        withPath(path: any): HttpRequestResult;
        getPath(): any;
        withBody(body: any): HttpRequestResult;
        getBody(): any;
        withHost(host: any): HttpRequestResult;
        getHost(): any;
        withHostName(hostName: any): HttpRequestResult;
        getHostName(): any;
        withMethod(method: any): HttpRequestResult;
        getMethod(): any;
        withPort(port: any): HttpRequestResult;
        getPort(): any;
        withProtocol(protocol: any): HttpRequestResult;
        getProtocol(): any;
        withHeadersSize(headersSize: any): HttpRequestResult;
        getHeadersSize(): number;
        withBodySize(bodySize: any): HttpRequestResult;
        getBodySize(): number;
    }
    class HttpResponseResult {
        headers: any;
        content: {
            body: string;
            encoding: string;
            contentType: string;
        };
        statusCode: string;
        statusMessage: string;
        error: string;
        sizeInBytes: {
            headers: number;
            body: number;
        };
        withHeaders(responseHeaders: any, syntheticsConfiguration: any): HttpResponseResult;
        withBody(responseBody: any, syntheticsConfiguration: any): HttpResponseResult;
        withStatusCode(statusCode: any): HttpResponseResult;
        withStatusMessage(statusMessage: any): HttpResponseResult;
        withError(error: any): HttpResponseResult;
        withHeadersSize(headersSize: any): HttpResponseResult;
        withBodySize(bodySize: any): HttpResponseResult;
        withContentEncoding(contentEncoding: any): HttpResponseResult;
        withContentType(contentType: any): HttpResponseResult;
        getHeadersSize(): number;
        getBodySize(): number;
        getHeaders(): any;
        getBody(): string;
        getStatusCode(): string;
        getStatusMessage(): string;
        getError(): string;
        getContentEncoding(): string;
        getContentType(): string;
    }
    class HttpTimingsResult {
        startedAt: any;
        endedAt: any;
        dnsLookUpTimeInMs: any;
        tcpConnectionTimeInMs: any;
        tlsHandshakeTimeInMs: any;
        firstByteTimeInMs: any;
        contentTransferTimeInMs: any;
        totalDurationInMs: any;
        withStartedAt(startedAt: any): HttpTimingsResult;
        withEndedAt(endedAt: any): HttpTimingsResult;
        withDnsLookupTime(dnsLookUpTime: any): HttpTimingsResult;
        withTcpConnectionTime(tcpConnectionTime: any): HttpTimingsResult;
        withTlsHandshakeTime(tlsHandshakeTime: any): HttpTimingsResult;
        withFirstByteTime(firstByteTime: any): HttpTimingsResult;
        withContentTransferTime(contentTransferTime: any): HttpTimingsResult;
        withTotalDuration(totalDuration: any): HttpTimingsResult;
        getStartedAt(): any;
        getEndedAt(): any;
        getDnsLookUpTime(): any;
        getTcpConnectionTime(): any;
        getTlsHandshakeTime(): any;
        getFirstByteTime(): any;
        getContentTransferTime(): any;
        getTotalDuration(): any;
    }
    class HttpRequestUrl {
        static buildRequestUrl(options: any, urlObj: any): HttpRequestUrl;
        constructor(protocol: any, hostname: any, path: any);
        protocol: any;
        hostname: any;
        path: any;
        getHostName(): any;
        getProtocol(): any;
        getPath(): any;
        getLogString(skipQueryString?: boolean): any;
    }
}
