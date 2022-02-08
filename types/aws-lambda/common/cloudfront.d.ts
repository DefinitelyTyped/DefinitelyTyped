/**
 * CloudFront events
 * http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/lambda-event-structure.html
 * Bear in mind that the "example" event structure in the page above includes
 * both an S3 and a Custom origin, which is not strictly allowed. Only one
 * of these per event may be present.
 */
export interface CloudFrontHeaders {
    [name: string]: Array<{
        key?: string | undefined;
        value: string;
    }>;
}

export type CloudFrontOrigin =
    | { s3: CloudFrontS3Origin; custom?: never | undefined }
    | { custom: CloudFrontCustomOrigin; s3?: never | undefined };

export interface CloudFrontCustomOrigin {
    customHeaders: CloudFrontHeaders;
    domainName: string;
    keepaliveTimeout: number;
    path: string;
    port: number;
    protocol: 'http' | 'https';
    readTimeout: number;
    sslProtocols: string[];
}

export interface CloudFrontS3Origin {
    authMethod: 'origin-access-identity' | 'none';
    customHeaders: CloudFrontHeaders;
    domainName: string;
    path: string;
    region: string;
}

export interface CloudFrontResponse {
    status: string;
    statusDescription: string;
    headers: CloudFrontHeaders;
}

export interface CloudFrontRequest {
    body?:
        | {
              action: 'read-only' | 'replace';
              data: string;
              encoding: 'base64' | 'text';
              readonly inputTruncated: boolean;
          }
        | undefined;
    readonly clientIp: string;
    readonly method: string;
    uri: string;
    querystring: string;
    headers: CloudFrontHeaders;
    origin?: CloudFrontOrigin | undefined;
}

export interface CloudFrontEvent {
    config: {
        readonly distributionDomainName: string;
        readonly distributionId: string;
        readonly eventType: 'origin-request' | 'origin-response' | 'viewer-request' | 'viewer-response';
        readonly requestId: string;
    };
}

/**
 * Generated HTTP response in viewer request event or origin request event
 *
 * https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/lambda-generating-http-responses-in-requests.html#lambda-generating-http-responses-object
 */
export interface CloudFrontResultResponse {
    status: string;
    statusDescription?: string | undefined;
    headers?: CloudFrontHeaders | undefined;
    bodyEncoding?: 'text' | 'base64' | undefined;
    body?: string | undefined;
}

/** @see https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/functions-event-structure.html#functions-event-structure-query-header-cookie */
export interface CloudFrontFunctionsCookies {
    [key: string]: {
        value: string;
        attributes?: string;
        multiValue?: Array<{ value: string; attributes?: string }>;
    };
}

/** @see https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/functions-event-structure.html#functions-event-structure-query-header-cookie */
export interface CloudFrontFunctionsQuerystring {
    [key: string]: { value: string; multiValue?: Array<{ value: string }> };
}

/** @see https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/functions-event-structure.html#functions-event-structure-query-header-cookie */
export interface CloudFrontFunctionsHeaders {
    [key: string]: { value: string; multiValue?: Array<{ value: string }> };
}

/**
 * @see https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/functions-event-structure.html
 *
 * @usage
 * ```ts
 * export const handler = async (event: CloudFrontFunctionsEvent) => {
 *   var response = event.response;
 *   var headers = response.headers;
 *   // Set the cache-control header
 *   headers["cache-control"] = { value: "public,max-age=31536000,immutable" };
 *   // Return response to viewers
 *   return response
 * };
 * ```
 */
export interface CloudFrontFunctionsEvent {
    /**
     * ## Version field
     * The version field contains a string that specifies the version of the
     * CloudFront Functions event object. The current version is 1.0.
     */
    version: string;
    /**
     * ## Context object
     * The `context` object contains contextual information about the event. It includes the following fields:
     * - `distributionDomainName`
     * - `distributionId`
     * - `eventType`
     * - `requestId`
     */
    context: {
        /** The CloudFront domain name (for example, d111111abcdef8.cloudfront.net) of the distribution that’s associated with the event. */
        distributionDomainName: string;
        /** The ID of the distribution (for example, EDFDVBD6EXAMPLE) that’s associated with the event. */
        distributionId: string;
        /** The event type, either `viewer-request` or `viewer-response`. */
        eventType: 'viewer-request' | 'viewer-response';
        /** A string that uniquely identifies a CloudFront request (and its associated response). */
        requestId: string;
    };
    /**
     * ## Viewer object
     * The `viewer` object contains an `ip` field whose value is the IP address of the viewer (client) that sent the request.
     * If the viewer request came through an HTTP proxy or a load balancer, the value is the IP address of the proxy or load balancer.
     */
    viewer: {
        ip: string;
    };
    /**
     * ## Request object
     * The `request` object contains a representation of a viewer-to-CloudFront HTTP request.
     * In the `event` object that’s passed to your function, the `request` object represents the
     * actual request that CloudFront received from the viewer.
     *
     * If your function code returns a `request` object to CloudFront, it must use this same structure.
     *
     * The `request` object contains the following fields:
     * - `method`
     * - `uri`
     * - `querystring`
     * - `headers`
     * - `cookies`
     */
    request: {
        /** The HTTP method of the request. If your function code returns a `request`, it cannot modify this field. This is the only read-only field in the `request` object. */
        method: string;
        /**
         * The relative path of the requested object. If your function modifies the `uri value, note the following:
         * - The new `uri` value must begin with a forward slash (`/`)`.
         * - When a function changes the `uri` value, it changes the object that the viewer is requesting.
         * - When a function changes the `uri` value, it doesn’t change the cache behavior for the request or the origin that an origin request is sent to.
         */
        uri: string;
        /**
         * An object that represents the query string in the request. If the request doesn’t include a query string,
         * the `request` object still includes an empty `querystring` object.
         *
         * The `querystring` object contains one field for each query string parameter in the request.
         * Query string parameter names are converted to lowercase.
         */
        querystring: CloudFrontFunctionsQuerystring;
        /**
         * An object that represents the HTTP headers in the request. If the request contains any `Cookie` headers,
         * those headers are not part of the `headers` object. Cookies are represented separately in the `cookies` object.
         *
         * The `headers` object contains one field for each header in the request. Header names are converted to lowercase.
         */
        headers: CloudFrontFunctionsHeaders;
        /**
         * An object that represents the cookies in the request (`Cookie` headers).
         *
         * The `cookies` object contains one field for each cookie in the request. Cookie names are converted to lowercase.
         */
        cookies: CloudFrontFunctionsCookies;
    };
    /**
     * ## Response object
     *
     * The `response` object contains a representation of a CloudFront-to-viewer HTTP response.
     * In the `event` object that’s passed to your function, the `response` object represents CloudFront’s actual response to a viewer request.
     *
     * If your function code returns a `response` object, it must use this same structure.
     *
     * The `response` object contains the following fields:
     */
    response: {
        /**
         * The HTTP status code of the response. This value is an integer, not a string.
         *
         * If the function is associated with a _viewer response_ event type, your function code cannot change
         * the `statusCode` that it received. If the function is associated with a _viewer request_ event type
         * and [generates an HTTP response](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/writing-function-code.html#function-code-generate-response),
         * your function code can set the `statusCode`.
         */
        statusCode: number;
        /** The HTTP status description of the response. If your function code generates a response, this field is optional. */
        statusDescription?: string;
        /**
         * An object that represents the HTTP headers in the response. If the response contains any `Set-Cookie` headers,
         * those `headers` are not part of the headers object. Cookies are represented separately in the `cookies` object.
         *
         * The `headers` object contains one field for each header in the response. Header names are converted to lowercase.
         */
        headers: CloudFrontFunctionsHeaders;
        /**
         * An object that represents the cookies in the response (`Set-Cookie` headers).
         * The `cookies` object contains one field for each cookie in the response. Cookie names are converted to lowercase.
         */
        cookies: CloudFrontFunctionsCookies;
    };
}
