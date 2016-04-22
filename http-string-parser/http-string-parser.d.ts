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

declare export function parseRequest(requestString: string): ParseRequestResult;
declare export function parseResponse(responseString: string): ParseResponseResult;
declare export function parseRequestLine(requestLineString: string): ParseRequestLineResult;
declare export function parseStatusLine(statusLine: string): ParseStatusLineResult;
declare export function parseHeaders(headerLines: string[]): { [key: string]: string };
