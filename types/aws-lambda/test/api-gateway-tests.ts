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
    APIGatewayTokenAuthorizerHandler,
    APIGatewayRequestAuthorizerHandler,
    APIGatewayAuthorizerHandler,
    APIGatewayAuthorizerResult,
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

const authorizer: APIGatewayAuthorizerHandler = async (event, context, callback) => {
    if (event.type === "TOKEN") {
        str = event.methodArn;
        str = event.authorizationToken;
        str = event.resource; // $ExpectError
    } else {
        event.type; // $ExpectType "REQUEST"
        str = event.methodArn; // $ExpectError
        str = event.resource;
    }

    const result = createAuthorizerResult();

    callback(new Error());
    callback(null, result);
    return result;
};

const tokenAuthorizer: APIGatewayTokenAuthorizerHandler = async (event, context, callback) => {
    event.type; // $ExpectType "TOKEN"

    str = event.type;
    str = event.methodArn;
    str = event.authorizationToken;
    strOrUndefined = event.resource; // $ExpectError
    // etc...

    const result = createAuthorizerResult();

    callback(new Error());
    callback(null, result);
    return result;
};

const requestAuthorizer: APIGatewayRequestAuthorizerHandler = async (event, context, callback) => {
    event.type; // $ExpectType "REQUEST"

    str = event.type;
    str = event.methodArn; // $ExpectError
    str = event.authorizationToken; // $ExpectError
    str = event.resource;
    str = event.path;
    str = event.httpMethod;
    if (event.headers !== null)
        str = event.headers[str];
    if (event.multiValueHeaders !== null)
        str = event.multiValueHeaders[str][num];
    if (event.pathParameters !== null)
        str = event.pathParameters[str];
    if (event.queryStringParameters !== null)
        str = event.queryStringParameters[str];
    if (event.multiValueQueryStringParameters !== null)
        str = event.multiValueQueryStringParameters[str][num];
    if (event.stageVariables !== null)
        str = event.stageVariables[str];
    const requestContext: APIGatewayEventRequestContext = event.requestContext;
    str = event.domainName;
    str = event.apiId;

    const result = createAuthorizerResult();

    callback(new Error());
    callback(null, result);
    return result;
};

const legacyAuthorizerHandler: CustomAuthorizerHandler = async (event, context, callback) => {
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

    const result = createAuthorizerResult();

    callback(new Error());
    callback(null, result);
    return result;
};

function createAuthorizerResult(): APIGatewayAuthorizerResult {
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

    return result;
}

// Test old names
const oldNameProxyHandler: ProxyHandler = (event: APIGatewayEvent, context: Context, cb: ProxyCallback) => {};

proxyHandler = oldNameProxyHandler;
