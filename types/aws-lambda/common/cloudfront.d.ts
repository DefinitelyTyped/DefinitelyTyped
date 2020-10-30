/**
 * CloudFront events
 * http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/lambda-event-structure.html
 * Bear in mind that the "example" event structure in the page above includes
 * both an S3 and a Custom origin, which is not strictly allowed. Only one
 * of these per event may be present.
 */
export interface CloudFrontHeaders {
    [name: string]: Array<{
        key?: string;
        value: string;
    }>;
}

export type CloudFrontOrigin =
    | { s3: CloudFrontS3Origin; custom?: never }
    | { custom: CloudFrontCustomOrigin; s3?: never };

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
    body?: {
        action: 'read-only' | 'replace';
        data: string;
        encoding: 'base64' | 'text';
        readonly inputTruncated: boolean;
    };
    readonly clientIp: string;
    readonly method: string;
    uri: string;
    querystring: string;
    headers: CloudFrontHeaders;
    origin?: CloudFrontOrigin;
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
    statusDescription?: string;
    headers?: CloudFrontHeaders;
    bodyEncoding?: 'text' | 'base64';
    body?: string;
}
