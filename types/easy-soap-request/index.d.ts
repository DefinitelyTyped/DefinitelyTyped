import { AxiosError, AxiosProxyConfig, AxiosRequestConfig, AxiosResponse } from "axios";

interface Options {
    /**
     * HTTP request method
     * @default 'POST'
     */
    method?: string | undefined;

    /**
     * endpoint URL
     */
    url: string;

    /**
     * HTTP headers, can be string or object
     */
    headers?: object | string | undefined;

    /**
     *  SOAP envelope, can be read from file or passed as string
     */
    xml: string;

    /**
     * Milliseconds before timing out request
     * @default 10000
     */
    timeout?: number | undefined;

    /**
     * Object with proxy configuration
     */
    proxy?: AxiosProxyConfig | undefined;

    /**
     * Limit body size being sent(bytes)
     * @default Infinity
     */
    maxBodyLength?: number | undefined;

    /**
     * Limit content size being sent(bytes)
     * @default Infinity
     */
    maxContentLength?: number | undefined;

    /**
     * Object of additional axios parameters.
     */
    extraOpts?: AxiosRequestConfig | undefined;
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
