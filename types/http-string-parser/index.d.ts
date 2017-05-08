// Type definitions for http-string-parser
// Project: https://github.com/apiaryio/http-string-parser
// Definitions by: MIZUNE Pine <https://github.com/pine613>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


interface ParseRequestResult {
    method: string;
    uri: string;
    headers: { [key: string]: string };
    body: string;
}

interface ParseResponseResult {
    statusCode: string;
    statusMessage: string;
    headers: { [key: string]: string };
    body: string;
}

interface ParseRequestLineResult {
    method: string;
    uri: string;
    protocol: string;
}

interface ParseStatusLineResult {
    protocol: string;
    statusCode: string;
    statusMessage: string;
}

export declare function parseRequest(requestString: string): ParseRequestResult;
export declare function parseResponse(responseString: string): ParseResponseResult;
export declare function parseRequestLine(requestLineString: string): ParseRequestLineResult;
export declare function parseStatusLine(statusLine: string): ParseStatusLineResult;
export declare function parseHeaders(headerLines: string[]): { [key: string]: string };
