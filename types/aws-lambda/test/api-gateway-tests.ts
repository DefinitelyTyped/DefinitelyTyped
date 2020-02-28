import {
    APIGatewayEvent,
    APIGatewayEventRequestContext,
    APIGatewayProxyHandler,
    APIGatewayProxyResult,
    AuthResponseContext,
    Context,
    CustomAuthorizerHandler,
    CustomAuthorizerResult,
    PolicyDocument,
    ProxyHandler,
    ProxyCallback,
    Statement,
} from "aws-lambda";

let proxyHandler: APIGatewayProxyHandler = async (event, context, callback) => {
    strOrNull = event.body;
    str = event.headers['example'];
    str = event.multiValueHeaders['example'][0];
    str = event.httpMethod;
    bool = event.isBase64Encoded;
    str = event.path;
    str = event.pathParameters!['example'];
    str = event.queryStringParameters!['example'];
    str = event.multiValueQueryStringParameters!['example'][0];
    str = event.stageVariables!['example'];
    let requestContext: APIGatewayEventRequestContext;
    requestContext = event.requestContext;
    str = event.resource;

    str = requestContext.protocol;
    str = requestContext.accountId;
    str = requestContext.apiId;
    const authContext: AuthResponseContext | null | undefined = requestContext.authorizer;
    numOrUndefined = requestContext.connectedAt;
    strOrUndefined = requestContext.connectionId;
    strOrUndefined = requestContext.domainName;
    strOrUndefined = requestContext.eventType;
    strOrUndefined = requestContext.extendedRequestId;
    str = requestContext.httpMethod;
    strOrNull = requestContext.identity.accessKey;
    strOrNull = requestContext.identity.accountId;
    strOrNull = requestContext.identity.apiKey;
    strOrNull = requestContext.identity.apiKeyId;
    strOrNull = requestContext.identity.caller;
    strOrNull = requestContext.identity.cognitoAuthenticationProvider;
    strOrNull = requestContext.identity.cognitoAuthenticationType;
    strOrNull = requestContext.identity.cognitoIdentityId;
    strOrNull = requestContext.identity.cognitoIdentityPoolId;
    strOrNull = requestContext.identity.principalOrgId;
    str = requestContext.identity.sourceIp;
    strOrNull = requestContext.identity.user;
    strOrNull = requestContext.identity.userAgent;
    strOrNull = requestContext.identity.userArn;
    strOrUndefined = requestContext.messageDirection;
    strOrUndefinedOrNull = requestContext.messageId;
    str = requestContext.path;
    str = requestContext.stage;
    str = requestContext.requestId;
    strOrUndefined = requestContext.requestTime;
    str = requestContext.resourceId;
    str = requestContext.resourcePath;
    strOrUndefined = requestContext.routeKey;

    let result: APIGatewayProxyResult = {
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
        multiValueHeaders: {
            [str]: [str, bool, num],
        },
        isBase64Encoded: true,
        body: str,
    };

    callback(new Error());
    callback(null, result);
    return result;
};

const authorizerHandler: CustomAuthorizerHandler = async (event, context, callback) => {
    str = event.type;
    str = event.methodArn;
    strOrUndefined = event.authorizationToken;
    strOrUndefined = event.resource;
    strOrUndefined = event.path;
    strOrUndefined = event.httpMethod;
    str = event.headers![str];
    str = event.multiValueHeaders![str][num];
    str = event.pathParameters![str];
    str = event.queryStringParameters![str];
    str = event.multiValueQueryStringParameters![str][num];
    str = event.stageVariables![str];
    let requestContext: APIGatewayEventRequestContext;
    requestContext = event.requestContext!;
    strOrUndefined = event.domainName;
    strOrUndefined = event.apiId;

    let statement: Statement = {
        Action: str,
        Effect: str,
        Resource: str,
    };

    // $ExpectError
    statement = { Effect: str, Action: str, Principal: 123, };

    // Bad Resource
    // $ExpectError
    statement = { Effect: str, Action: str, Resource: 123, };

    // Bad Resource with valid Principal
    // $ExpectError
    statement = { Effect: str, Action: str, Principal: { Service: str }, Resource: 123, };

    // Bad principal with valid Resource
    // $ExpectError
    statement = { Effect: str, Action: str, Principal: 123, Resource: str, };

    // No Effect
    // $ExpectError
    statement = { Action: str, Principal: str };

    statement = {
        Sid: str,
        Action: [str, str],
        Effect: str,
        Resource: [str, str],
        Condition: {
            condition1: { key: 'value' },
            condition2: [
                {
                    key1: 'value',
                    key2: 'value',
                },
                {
                    key3: 'value',
                },
            ],
        },
        Principal: [str, str],
        NotPrincipal: [str, str],
    };

    statement = { Action: str, Principal: str, Effect: str };

    statement = { Action: str, NotPrincipal: { Service: str }, Effect: str };

    statement = { Effect: str, NotAction: str, NotResource: str };

    let policyDocument: PolicyDocument = { Version: str, Statement: [statement] };

    policyDocument = { Version: str, Statement: [statement, statement] };

    const authResponseContext: AuthResponseContext = {
        stringKey: str,
        numberKey: num,
        booleanKey: bool,
    };

    let result: CustomAuthorizerResult = {
        principalId: str,
        policyDocument,
        context: authResponseContext,
    };

    result = {
        principalId: str,
        policyDocument,
    };

    callback(new Error());
    callback(null, result);
    return result;
};

// Test old names
const oldNameProxyHandler: ProxyHandler = (event: APIGatewayEvent, context: Context, cb: ProxyCallback) => {};

proxyHandler = oldNameProxyHandler;
