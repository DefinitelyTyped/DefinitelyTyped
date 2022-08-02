const cloudFrontFunctionValue: AWSCloudFrontFunction.ValueObject = {
    key1: { value: 'text/plain' },
    key2: {
        value: 't1',
        multiValue: [
            { value: 't1' },
            { value: 't2' },
        ]
    },
};

const cloudFrontFunctionResponseCookie: AWSCloudFrontFunction.ResponseCookie = {
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

const cloudFrontFunctionRequest: AWSCloudFrontFunction.Request = {
    method: 'GET',
    uri: '/test',
    querystring: cloudFrontFunctionValue,
    headers: cloudFrontFunctionValue,
    cookies: cloudFrontFunctionValue,
};

const cloudFrontResponse: AWSCloudFrontFunction.Response = {
    statusCode: 200,
    statusDescription: 'OK',
    headers: cloudFrontFunctionValue,
    cookies: cloudFrontFunctionResponseCookie,
};

const cloudFrontFunctionViewer: AWSCloudFrontFunction.Viewer = {
    ip: '192.168.0.1',
};

const cloudFrontFunctionContext: AWSCloudFrontFunction.Context = {
    distributionDomainName: 'd111111abcdef8.cloudfront.net',
    distributionId: 'EDFDVBD6EXAMPLE',
    eventType: 'viewer-response',
    requestId: 'EXAMPLEntjQpEXAMPLE_SG5Z-EXAMPLEPmPfEXAMPLEu3EqEXAMPLE==',
};

const cloudFrontFunctionEvent: AWSCloudFrontFunction.Event = {
    version: '1.0',
    context: cloudFrontFunctionContext,
    viewer: cloudFrontFunctionViewer,
    request: cloudFrontFunctionRequest,
    response: cloudFrontResponse,
};

function handler1(event: AWSCloudFrontFunction.Event): AWSCloudFrontFunction.Request {
    const { request } = event;

    const pathSegments = request.uri
        .split('/')
        .filter(x => x);

    if (pathSegments[pathSegments.length - 1].indexOf('.') !== -1) {
        request.uri = `/${pathSegments[0]}/${pathSegments.slice(2).join('/')}`;
        return request;
    }

    request.uri = `/${pathSegments[0]}/index.html`;
    return request;
}

function handler2(event: AWSCloudFrontFunction.Event): AWSCloudFrontFunction.Request | AWSCloudFrontFunction.Response {
    const { request } = event;

    const isSecondPathSegmentApi = (pathSegments: string[]) =>
    !!(pathSegments?.[1]?.toLowerCase() === 'api');

    const response = (locale: string, requestUri: string) => (
        {
            statusCode: 302,
            statusDescription: 'Found',
            headers: {
                location: {
                value: `/${locale}${requestUri}`
                }
            }
        }
    );

    const pathSegments = request.uri
      .split('/')
      .filter(x => x);

    if (isSecondPathSegmentApi(pathSegments)) {
      return request;
    }

    const cookieValue = request.cookies?.locale?.value;

    const locale = /^[a-z]{2}-[A-Z]{2}$/.test(cookieValue) ? cookieValue : 'en-US';

    return response(locale, request.uri);
  }
