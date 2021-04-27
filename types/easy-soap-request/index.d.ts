// Type definitions for easy-soap-request 4.1
// Project: https://github.com/circa10a/easy-soap-request
// Definitions by: Steven Snoeijen <https://github.com/stevensnoeijen>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { AxiosProxyConfig, AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";

interface Options {
    /**
     * HTTP request method
     * @default 'POST'
     */
    method?: string;

    /**
     * endpoint URL
     */
    url: string;

    /**
     * HTTP headers, can be string or object
     */
    headers?: object | string;

    /**
     *  SOAP envelope, can be read from file or passed as string
     */
    xml: string;

    /**
     * Milliseconds before timing out request
     * @default 10000
     */
    timeout?: number;

    /**
     * Object with proxy configuration
     */
    proxy?: AxiosProxyConfig;

    /**
     * Limit body size being sent(bytes)
     * @default Infinity
     */
    maxBodyLength?: number;

    /**
     * Limit content size being sent(bytes)
     * @default Infinity
     */
    maxContentLength?: number;

    /**
     * Object of additional axios parameters.
     */
    extraOpts?: AxiosRequestConfig;
}

interface Response {
    response: {
        headers: any;
        body: any;
        statusCode: number;
    };
}

/**
 * @returns parsed from a AxiosResponse
 * @throws {any|AxiosError} response from AxiosError.response.data
 */
declare function soapRequest(options: Options): Promise<Response>;

export = soapRequest;
