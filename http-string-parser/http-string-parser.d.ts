// Type definitions for http-string-parser
// Project: https://github.com/apiaryio/http-string-parser
// Definitions by: MIZUNE Pine <https://github.com/pine613>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module "http-string-parser" {
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

    export function parseRequest(requestString: string): ParseRequestResult;
    export function parseResponse(responseString: string): ParseResponseResult;
    export function parseRequestLine(requestLineString: string): ParseRequestLineResult;
    export function parseStatusLine(statusLine: string): ParseStatusLineResult;
    export function parseHeaders(headerLines: string[]): { [key: string]: string };
}
