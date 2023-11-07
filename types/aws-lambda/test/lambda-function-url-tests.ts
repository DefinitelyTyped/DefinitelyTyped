import {
    APIGatewayEventRequestContextIAMAuthorizer,
    APIGatewayEventRequestContextV2,
    APIGatewayEventRequestContextV2WithAuthorizer,
    APIGatewayProxyEventV2,
    APIGatewayProxyResultV2,
    APIGatewayProxyStructuredResultV2,
    LambdaFunctionURLHandler,
    LambdaFunctionURLHandlerWithIAMAuthorizer,
} from "aws-lambda";

const lambdaFnHandler: LambdaFunctionURLHandler = async (event, context, callback) => {
    str = event.version;
    strOrUndefined = event.body;
    str = event.headers["example"]!;
    str = event.routeKey;
    bool = event.isBase64Encoded;
    str = event.rawPath;
    str = event.rawQueryString;
    strOrUndefined = event.cookies ? event.cookies[0] : undefined;
    strOrUndefined = event.queryStringParameters ? event.queryStringParameters["example"] : undefined;
    strOrUndefined = event.pathParameters ? event.pathParameters["example"] : undefined;
    strOrUndefined = event.stageVariables ? event.stageVariables["example"] : undefined;

    str = event.requestContext.http.protocol;
    str = event.requestContext.http.sourceIp;
    str = event.requestContext.http.method;
    str = event.requestContext.http.userAgent;
    str = event.requestContext.accountId;
    str = event.requestContext.apiId;
    str = event.requestContext.domainName;
    str = event.requestContext.domainPrefix;
    str = event.requestContext.stage;
    str = event.requestContext.requestId;
    str = event.requestContext.time;
    num = event.requestContext.timeEpoch;

    if (event.requestContext.authentication) {
        str = event.requestContext.authentication.clientCert.clientCertPem;
        str = event.requestContext.authentication.clientCert.issuerDN;
        str = event.requestContext.authentication.clientCert.serialNumber;
        str = event.requestContext.authentication.clientCert.subjectDN;
        str = event.requestContext.authentication.clientCert.validity.notAfter;
        str = event.requestContext.authentication.clientCert.validity.notBefore;
    }

    const result = createLambdaFunctionURLResult();

    callback(new Error());
    callback(null, result);
    return result;
};

const proxyHandlerv2WithIAMAuthorizer: LambdaFunctionURLHandlerWithIAMAuthorizer = async (
    event,
    context,
    callback,
) => {
    // standard fields...
    strOrUndefined = event.body;
    strOrUndefined = event.headers["example"];

    // It seems like it would be easy to make this mistake, but it's still a useful type.
    let requestContextWithAuthorizerDirectly: APIGatewayEventRequestContextIAMAuthorizer;
    // @ts-expect-error
    requestContextWithAuthorizerDirectly = event.requestContext;

    // Check assignable to named types
    let requestContext: APIGatewayEventRequestContextV2WithAuthorizer<APIGatewayEventRequestContextIAMAuthorizer>;
    requestContext = event.requestContext;

    let authorizer: APIGatewayEventRequestContextIAMAuthorizer;
    authorizer = requestContext.authorizer;

    // And it can be converted down to the basic type
    const basicEvent: APIGatewayProxyEventV2 = event;
    const basicRequestContext: APIGatewayEventRequestContextV2 = event.requestContext;

    // All non-null or undefined types are converted to string.
    str = authorizer.iam.accessKey;
    str = authorizer.iam.accountId;
    str = authorizer.iam.callerId;
    nullOrUndefined = authorizer.iam.cognitoIdentity;
    str = authorizer.iam.principalOrgId;
    str = authorizer.iam.userArn;
    str = authorizer.iam.userId;

    const result = createLambdaFunctionURLResult();

    callback(new Error());
    callback(null, result);

    return result;
};

const proxyHandlerV2ForStringResult: LambdaFunctionURLHandler = async (event, context, callback) => {
    const result = "hello";

    callback(new Error());
    callback(undefined, result);
    return result;
};

const proxyHandlerV2ForObjectResult: LambdaFunctionURLHandler<{ message: string }> = async (
    event,
    context,
    callback,
) => {
    const result = { message: "hello" };

    callback(new Error());
    callback(undefined, result);
    return result;
};

function createLambdaFunctionURLResult(): APIGatewayProxyResultV2 {
    let result: APIGatewayProxyStructuredResultV2 = {
        statusCode: num,
        body: str,
    };
    result = {
        statusCode: num,
        headers: {
            [str]: str,
            [str]: bool,
            [str]: num,
        },
        isBase64Encoded: true,
        body: str,
    };
    return result;
}
