// Type definitions for non-npm package AWS CloudFront Functions 1.0
// Project: https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/functions-event-structure.html
// Definitions by: Jakub Zelenka <https://github.com/bukka>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

export interface CloudFrontFunctionEvent {
    version: "1.0";
    context: CloudFrontFunctionContext;
    viewer: CloudFrontFunctionViewer;
    request: CloudFrontFunctionRequest;
    response: CloudFrontFunctionResponse;
}

export interface CloudFrontFunctionContext {
    distributionDomainName: string;
    distributionID: string;
    eventType: "viewer-request" | "viewer-response";
    requestId: string;
}

export interface CloudFrontFunctionViewer {
    ip: string;
}

export interface CloudFrontFunctionRequest {
    method: string;
    uri: string;
    querystring: CloudFrontFunctionValueObject;
    headers: CloudFrontFunctionValueObject;
    cookies: CloudFrontFunctionValueObject;
}

export interface CloudFrontFunctionResponse {
    statusCode: number;
    statusDescription?: string;
    headers: CloudFrontFunctionValueObject;
    cookies: CloudFrontFunctionResponseCookie;
}

export interface CloudFrontFunctionValueObject {
    [name: string]: {
        value: string;
        multiValue?: Array<{
            value: string;
        }>;
    };
}

export interface CloudFrontFunctionResponseCookie {
    [name: string]: {
        value: string;
        attributes: string;
        multiValue?: Array<{
            value: string;
            attributes: string;
        }>;
    };
}
