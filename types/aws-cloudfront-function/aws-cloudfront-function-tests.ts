import {
    CloudFrontFunctionEvent,
    CloudFrontFunctionContext,
    CloudFrontFunctionViewer,
    CloudFrontFunctionRequest,
    CloudFrontFunctionResponse,
    CloudFrontFunctionValueObject,
    CloudFrontFunctionResponseCookie,
} from 'aws-cloudfront-function';

const cloudFrontFunctionValue: CloudFrontFunctionValueObject = {
    key1: { value: 'text/plain' },
    key2: {
        value: 't1',
        multiValue: [
            { value: 't1' },
            { value: 't2' },
        ]
    },
};

const cloudFrontFunctionResponseCookie: CloudFrontFunctionResponseCookie = {
    id: {
        value: 'text/plain',
        attributes: "Expires=Wed, 05 Apr 2021 07:28:00 GMT",
    },
    cookie1: {
        value: 'val1',
        attributes: "Secure; Domain=example.com; Expires=Wed, 05 Apr 2021 07:28:00 GMT",
        multiValue: [
            {
                value: 'val1',
                attributes: "Secure; Domain=example.com; Expires=Wed, 05 Apr 2021 07:28:00 GMT",
            },
            {
                value: "val2",
                attributes: "Path=/cat; Domain=example.com; Expires=Wed, 10 Jan 2021 07:28:00 GMT",
            }
        ]
    },
};

const cloudFrontFunctionRequest: CloudFrontFunctionRequest = {
    method: 'GET',
    uri: '/test',
    querystring: cloudFrontFunctionValue,
    headers: cloudFrontFunctionValue,
    cookies: cloudFrontFunctionValue,
};

const cloudFrontResponse: CloudFrontFunctionResponse = {
    statusCode: 200,
    statusDescription: 'OK',
    headers: cloudFrontFunctionValue,
    cookies: cloudFrontFunctionResponseCookie,
};

const cloudFrontFunctionViewer: CloudFrontFunctionViewer = {
    ip: '192.168.0.1',
};

const cloudFrontFunctionContext: CloudFrontFunctionContext = {
    distributionDomainName: 'd111111abcdef8.cloudfront.net',
    distributionID: 'EDFDVBD6EXAMPLE',
    eventType: 'viewer-response',
    requestId: 'EXAMPLEntjQpEXAMPLE_SG5Z-EXAMPLEPmPfEXAMPLEu3EqEXAMPLE==',
};

const cloudFrontFunctionEvent: CloudFrontFunctionEvent = {
    version: '1.0',
    context: cloudFrontFunctionContext,
    viewer: cloudFrontFunctionViewer,
    request: cloudFrontFunctionRequest,
    response: cloudFrontResponse,
};
