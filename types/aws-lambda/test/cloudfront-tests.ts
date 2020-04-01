import {
    CloudFrontHeaders,
    CloudFrontRequestEvent,
    CloudFrontRequestHandler,
    CloudFrontRequestResult,
    CloudFrontResponseEvent,
    CloudFrontResponseHandler,
    CloudFrontResponseResult,
    CloudFrontS3Origin,
    CloudFrontCustomOrigin,
} from "aws-lambda";

// TODO: Update test to read all event properties, and write all result
//       properties, like the user will.

const cloudFrontHeaders: CloudFrontHeaders = {
    'content-type': [{ value: 'text/plain' }],
    'x-foo-bar': [{ key: 'X-Foo-Bar', value: 'example' }],
};

const requestHandler: CloudFrontRequestHandler = async (event, context, cb) => {
    event = requestWithCustomOriginEvent;
    // $ExpectType CloudFrontRequestEvent
    event;
    let request = event.Records[0].cf.request;

    let s3Origin: CloudFrontS3Origin = {
        authMethod: 'none',
        customHeaders: {},
        domainName: 'example.com',
        path: '/',
        region: 'us-east-1',
    };

    if (request.origin && request.origin.custom) {
        request.origin.custom.domainName;
        request.origin.custom.domainName = 'example2.com';

        // $ExpectError
        s3Origin = request.origin.s3;

        // $ExpectError
        request.origin.s3.path = '/';
    }

    let customOrigin: CloudFrontCustomOrigin = {
        customHeaders: {},
        domainName: 'example.com',
        keepaliveTimeout: 60,
        path: '/',
        port: 80,
        protocol: 'http',
        readTimeout: 30,
        sslProtocols: [],
    };

    event = requestWithS3OriginEvent;
    // $ExpectType CloudFrontRequestEvent
    event;
    request = event.Records[0].cf.request;
    if (request.origin && request.origin.s3) {
        request.origin.s3.path;
        request.origin.s3.path = '/new_path';

        // $ExpectError
        customOrigin = request.origin.custom;

        // $ExpectError
        request.origin.custom.path = '/';
    }

    let result: CloudFrontRequestResult;
    // Result can be either nullish (use current request), a replaced request, or an immediate response
    result = undefined;
    result = null;
    result = { clientIp: str, method: str, uri: str, querystring: str, headers: cloudFrontHeaders };
    result = { status: str };
    result = { status: str, statusDescription: str, headers: cloudFrontHeaders, bodyEncoding: "text", body: str };
    // $ExpectError
    result = {};

    cb(new Error());
    cb(null, result);
    return result;
};

const responseHandler: CloudFrontResponseHandler = async (event, context, callback) => {
    let result: CloudFrontResponseResult;
    // Result can be either nullish (use current response) or a replaced response, but not a request
    result = undefined;
    result = null;
    result = { status: str };
    // $ExpectError
    result = { clientIp: str, method: str, uri: str, querystring: str, headers: cloudFrontHeaders };
    result = { status: str, statusDescription: str, headers: cloudFrontHeaders, bodyEncoding: "text", body: str };
    result = { status: str, bodyEncoding: "base64", body: str };
    // $ExpectError
    result = { status: str, bodyEncoding: "invalid-encoding", body: str };

    callback(new Error());
    callback(null, result);
    return result;
};

/* CloudFront events, see http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/lambda-event-structure.html */

const requestWithCustomOriginEvent: CloudFrontRequestEvent = {
    Records: [
        {
            cf: {
                config: {
                    distributionDomainName: 'd123.cloudfront.net',
                    distributionId: 'EDFDVBD6EXAMPLE',
                    eventType: 'viewer-request',
                    requestId: 'MRVMF7KydIvxMWfJIglgwHQwZsbG2IhRJ07sn9AkKUFSHS9EXAMPLE==',
                },
                request: {
                    body: {
                        action: 'read-only',
                        data: 'eyJ1c2VybmFtZSI6IkxhbWJkYUBFZGdlIiwiY29tbWVudCI6IlRoaXMgaXMgcmVxdWVzdCBib2R5In0=',
                        encoding: 'base64',
                        inputTruncated: false,
                    },
                    clientIp: '2001:0db8:85a3:0:0:8a2e:0370:7334',
                    querystring: 'size=large',
                    uri: '/picture.jpg',
                    method: 'GET',
                    headers: {
                        host: [
                            {
                                key: 'Host',
                                value: 'd111111abcdef8.cloudfront.net',
                            },
                        ],
                        'user-agent': [
                            {
                                key: 'User-Agent',
                                value: 'curl/7.51.0',
                            },
                        ],
                    },
                    origin: {
                        custom: {
                            customHeaders: {
                                'my-origin-custom-header': [
                                    {
                                        key: 'My-Origin-Custom-Header',
                                        value: 'Test',
                                    },
                                ],
                            },
                            domainName: 'example.com',
                            keepaliveTimeout: 5,
                            path: '/custom_path',
                            port: 443,
                            protocol: 'https',
                            readTimeout: 5,
                            sslProtocols: ['TLSv1', 'TLSv1.1'],
                        },
                    },
                },
            },
        },
    ],
};

const requestWithS3OriginEvent: CloudFrontRequestEvent = {
    Records: [
        {
            cf: {
                config: {
                    distributionDomainName: 'd123.cloudfront.net',
                    distributionId: 'EDFDVBD6EXAMPLE',
                    eventType: 'viewer-request',
                    requestId: 'MRVMF7KydIvxMWfJIglgwHQwZsbG2IhRJ07sn9AkKUFSHS9EXAMPLE==',
                },
                request: {
                    body: {
                        action: 'read-only',
                        data: 'eyJ1c2VybmFtZSI6IkxhbWJkYUBFZGdlIiwiY29tbWVudCI6IlRoaXMgaXMgcmVxdWVzdCBib2R5In0=',
                        encoding: 'base64',
                        inputTruncated: false,
                    },
                    clientIp: '2001:0db8:85a3:0:0:8a2e:0370:7334',
                    querystring: 'size=large',
                    uri: '/picture.jpg',
                    method: 'GET',
                    headers: {
                        host: [
                            {
                                key: 'Host',
                                value: 'd111111abcdef8.cloudfront.net',
                            },
                        ],
                        'user-agent': [
                            {
                                key: 'User-Agent',
                                value: 'curl/7.51.0',
                            },
                        ],
                    },
                    origin: {
                        s3: {
                            authMethod: 'origin-access-identity',
                            customHeaders: {
                                'my-origin-custom-header': [
                                    {
                                        key: 'My-Origin-Custom-Header',
                                        value: 'Test',
                                    },
                                ],
                            },
                            domainName: 'my-bucket.s3.amazonaws.com',
                            path: '/s3_path',
                            region: 'us-east-1',
                        },
                    },
                },
            },
        },
    ],
};

const responseEvent: CloudFrontResponseEvent = {
    Records: [
        {
            cf: {
                config: {
                    distributionDomainName: 'd123.cloudfront.net',
                    distributionId: 'EDFDVBD6EXAMPLE',
                    eventType: 'viewer-response',
                    requestId: 'xGN7KWpVEmB9Dp7ctcVFQC4E-nrcOcEKS3QyAez--06dV7TEXAMPLE==',
                },
                request: {
                    clientIp: '2001:0db8:85a3:0:0:8a2e:0370:7334',
                    method: 'GET',
                    uri: '/picture.jpg',
                    querystring: 'size=large',
                    headers: {
                        host: [
                            {
                                key: 'Host',
                                value: 'd111111abcdef8.cloudfront.net',
                            },
                        ],
                        'user-agent': [
                            {
                                key: 'User-Agent',
                                value: 'curl/7.18.1',
                            },
                        ],
                    },
                },
                response: {
                    status: '200',
                    statusDescription: 'OK',
                    headers: {
                        server: [
                            {
                                key: 'Server',
                                value: 'MyCustomOrigin',
                            },
                        ],
                        'set-cookie': [
                            {
                                key: 'Set-Cookie',
                                value: 'theme=light',
                            },
                            {
                                key: 'Set-Cookie',
                                value: 'sessionToken=abc123; Expires=Wed, 09 Jun 2021 10:18:14 GMT',
                            },
                        ],
                    },
                },
            },
        },
    ],
};
