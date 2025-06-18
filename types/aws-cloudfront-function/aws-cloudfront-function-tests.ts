const cloudFrontFunctionValue: AWSCloudFrontFunction.ValueObject = {
    key1: { value: "text/plain" },
    key2: {
        value: "t1",
        multiValue: [
            { value: "t1" },
            { value: "t2" },
        ],
    },
};

const cloudFrontFunctionResponseCookie: AWSCloudFrontFunction.ResponseCookie = {
    id: {
        value: "text/plain",
        attributes: "Expires=Wed, 05 Apr 2021 07:28:00 GMT",
    },
    cookie1: {
        value: "val1",
        attributes: "Secure; Domain=example.com; Expires=Wed, 05 Apr 2021 07:28:00 GMT",
        multiValue: [
            {
                value: "val1",
                attributes: "Secure; Domain=example.com; Expires=Wed, 05 Apr 2021 07:28:00 GMT",
            },
            {
                value: "val2",
                attributes: "Path=/cat; Domain=example.com; Expires=Wed, 10 Jan 2021 07:28:00 GMT",
            },
        ],
    },
};

const cloudFrontFunctionRequest: AWSCloudFrontFunction.Request = {
    method: "GET",
    uri: "/test",
    querystring: cloudFrontFunctionValue,
    headers: cloudFrontFunctionValue,
    cookies: cloudFrontFunctionValue,
};

const cloudFrontResponse: AWSCloudFrontFunction.Response = {
    statusCode: 200,
    statusDescription: "OK",
    headers: cloudFrontFunctionValue,
    cookies: cloudFrontFunctionResponseCookie,
};

const cloudFrontFunctionViewer: AWSCloudFrontFunction.Viewer = {
    ip: "192.168.0.1",
};

const cloudFrontFunctionContext: AWSCloudFrontFunction.Context = {
    distributionDomainName: "d111111abcdef8.cloudfront.net",
    distributionId: "EDFDVBD6EXAMPLE",
    eventType: "viewer-response",
    requestId: "EXAMPLEntjQpEXAMPLE_SG5Z-EXAMPLEPmPfEXAMPLEu3EqEXAMPLE==",
};

const cloudFrontFunctionEvent: AWSCloudFrontFunction.Event = {
    version: "1.0",
    context: cloudFrontFunctionContext,
    viewer: cloudFrontFunctionViewer,
    request: cloudFrontFunctionRequest,
    response: cloudFrontResponse,
};

function handler1(event: AWSCloudFrontFunction.Event): AWSCloudFrontFunction.Request {
    const { request } = event;

    const pathSegments = request.uri
        .split("/")
        .filter(x => x);

    if (pathSegments[pathSegments.length - 1].indexOf(".") !== -1) {
        request.uri = `/${pathSegments[0]}/${pathSegments.slice(2).join("/")}`;
        return request;
    }

    request.uri = `/${pathSegments[0]}/index.html`;
    return request;
}

function handler2(event: AWSCloudFrontFunction.Event): AWSCloudFrontFunction.Request | AWSCloudFrontFunction.Response {
    const { request } = event;

    const isSecondPathSegmentApi = (pathSegments: string[]) => !!(pathSegments?.[1]?.toLowerCase() === "api");

    const response = (locale: string, requestUri: string) => (
        {
            statusCode: 302,
            statusDescription: "Found",
            headers: {
                location: {
                    value: `/${locale}${requestUri}`,
                },
            },
        }
    );

    const pathSegments = request.uri
        .split("/")
        .filter(x => x);

    if (isSecondPathSegmentApi(pathSegments)) {
        return request;
    }

    const cookieValue = request.cookies?.locale?.value;

    const locale = /^[a-z]{2}-[A-Z]{2}$/.test(cookieValue) ? cookieValue : "en-US";

    return response(locale, request.uri);
}

import cf from "cloudfront";

const kvsHandle = cf.kvs("example-kvs-id");

async function handler3(
    event: AWSCloudFrontFunction.Event,
): Promise<AWSCloudFrontFunction.Request | AWSCloudFrontFunction.Response> {
    const _value1 = await kvsHandle.get("key");
    const _value2 = await kvsHandle.get("key", { format: "string" });
    const _value3 = await kvsHandle.get("key", { format: "bytes" });
    const _value4 = await kvsHandle.get("key", { format: "json" });

    const _exists = await kvsHandle.exists("key");

    const _meta = await kvsHandle.meta();

    return event.request;
}

function testUpdateRequestOrigin() {
    const params: Parameters<typeof cf.updateRequestOrigin>[0] = {
        domainName: "example.com",
        originPath: "/new-path",
        customHeaders: { "x-custom-header": "value" },
        connectionAttempts: 3,
        originShield: {
            enabled: true,
            region: "us-east-1",
        },
        originAccessControlConfig: {
            enabled: true,
            signingBehavior: "always",
            signingProtocol: "sigv4",
            originType: "s3",
        },
        timeouts: {
            readTimeout: 30,
            keepAliveTimeout: 15,
            connectionTimeout: 10,
        },
        customOriginConfig: {
            port: 443,
            protocol: "https",
            sslProtocols: ["TLSv1.2", "TLSv1.1"],
        },
    };
    cf.updateRequestOrigin(params);
}

function testSelectRequestOriginById() {
    const originId: Parameters<typeof cf.selectRequestOriginById>[0] = "example-origin-id";
    cf.selectRequestOriginById(originId);
}

function testCreateRequestOriginGroup() {
    const params: Parameters<typeof cf.createRequestOriginGroup>[0] = {
        originIds: ["origin-1", "origin-2"],
        failoverCriteria: {
            statusCodes: [500, 502, 503, 504],
        },
    };
    cf.createRequestOriginGroup(params);
}
