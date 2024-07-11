/// <reference types="node" />

import { ServerResponse } from "http";

export = httpHeaders;

/**
 * Parse the start-line and headers from an HTTP request or response.
 *
 * - Auto-detects and ignores body if present
 * - Fully [RFC 2068](http://www.rfc-base.org/txt/rfc-2068.txt) compliant
 * - Support multi-line headers (lines will be joined with a space)
 * - Support repeating headers
 *
 * @param data The data to parse.
 * @param [onlyHeaders=false] If `true`, only the headers object will be returned.
 *
 * @example
 * import * as net from 'net'
 * import httpHeaders = require('http-headers')
 *
 * // create TCP server
 * net.createServer((c) => {
 *   const buffers: Buffer[] = []
 *   c.on('data', buffers.push.bind(buffers))
 *   c.on('end', () => {
 *     const data = Buffer.concat(buffers)
 *
 *     // parse incoming data as an HTTP request and extra HTTP headers
 *     console.log(httpHeaders(data))
 *   })
 * }).listen(8080)
 *
 * @example
 * // If given an instance of `http.ServerResponse`, the response headers are
 * // automatically extracted, parsed and returned:
 *
 * import * as http from 'http'
 * import httpHeaders = require('http-headers')
 *
 * http.createServer((req, res) => {
 *   res.end('Hello World')
 *   console.log(httpHeaders(res))
 * }).listen(8080)
 */
declare function httpHeaders(
    data: string | Buffer | ServerResponse,
    onlyHeaders?: boolean,
): httpHeaders.RequestData | httpHeaders.ResponseData | httpHeaders.Headers;

declare namespace httpHeaders {
    interface RequestData {
        method: string;
        url: string;
        version: HttpVersion;
        headers: Headers;
    }

    interface ResponseData {
        version: HttpVersion;
        statusCode: number;
        statusMessage: string;
        headers: Headers;
    }

    interface HttpVersion {
        major: number;
        minor: number;
    }

    type Headers = {
        "set-cookie"?: string[] | undefined;
    } & { [key in string]?: string | undefined };
}
