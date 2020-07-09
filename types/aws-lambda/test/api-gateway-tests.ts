import {
    APIGatewayAuthorizerHandler,
    APIGatewayAuthorizerResult,
    APIGatewayAuthorizerResultContext,
    APIGatewayAuthorizerWithContextHandler,
    APIGatewayAuthorizerWithContextResult,
    APIGatewayEvent,
    APIGatewayEventDefaultAuthorizerContext,
    APIGatewayEventLambdaAuthorizerContext,
    APIGatewayEventRequestContext,
    APIGatewayEventRequestContextWithAuthorizer,
    APIGatewayProxyEvent,
    APIGatewayProxyHandler,
    APIGatewayProxyResult,
    APIGatewayProxyEventV2,
    APIGatewayProxyHandlerV2,
    APIGatewayProxyResultV2,
    APIGatewayProxyWithLambdaAuthorizerEventRequestContext,
    APIGatewayProxyWithLambdaAuthorizerHandler,
    APIGatewayRequestAuthorizerHandler,
    APIGatewayRequestAuthorizerWithContextHandler,
    APIGatewayTokenAuthorizerHandler,
    APIGatewayTokenAuthorizerWithContextHandler,
    AuthResponseContext,
    Context,
    CustomAuthorizerHandler,
    CustomAuthorizerResult,
    PolicyDocument,
    ProxyCallback,
    ProxyHandler,
    Statement,
    APIGatewayProxyStructuredResultV2,
} from "aws-lambda";

interface CustomAuthorizerContext extends APIGatewayAuthorizerResultContext {
    valid: string | number | boolean | null | undefined;
    str: string;
    num: number;
    bool: boolean;
    numOrNull: number | null;
    numOrUndefined: number | undefined;
    und: undefined;
}

// Can't serialize objects in the response from an authorizer
interface CustomAuthorizerInvalidResponseContext extends APIGatewayAuthorizerResultContext {
    valid: string | number | boolean | null | undefined;
    // $ExpectError
    invalid: {
        id: number;
    };
}

// Enforce custom response contexts extend APIGatewayAuthorizerResultContext for use in authorizer,
// $ExpectError
type InvalidCustomAuthorizerHandler = APIGatewayAuthorizerWithContextHandler<{
    valid: string | number | boolean | null | undefined;
    invalid: {
        id: number;
    };
}>;

// but don't care about in proxy, since it's overkill to force extending an interface if
// its not defined in the same codebase
type ProbablyInvalidCustomProxyHandler = APIGatewayProxyWithLambdaAuthorizerHandler<{
    valid: string | number | boolean | null | undefined;
    invalid: {
        id: number;
    };
}>;

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
    let requestContextWithCustomAuthorizer: APIGatewayEventRequestContextWithAuthorizer<CustomAuthorizerContext>;
    // $ExpectError
    requestContextWithCustomAuthorizer = event.requestContext;
    str = event.resource;

    str = requestContext.protocol;
    str = requestContext.accountId;
    str = requestContext.apiId;
    const authContext: APIGatewayEventDefaultAuthorizerContext = requestContext.authorizer;
    if (authContext) {
        // Anything goes by default
        str = authContext.claims[str];
        str = authContext.principalId;
        num = authContext.integrationLatency;
        // Even probable mistakes: lambda contexts properties are converted to string
        num = authContext.num;
    }
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

    const result = createProxyResult();

    callback(new Error());
    callback(null, result);
    return result;
};

const proxyHandlerV2: APIGatewayProxyHandlerV2 = async (event, context, callback) => {
    strOrUndefined = event.body;
    str = event.headers['example'];
    str = event.routeKey;
    bool = event.isBase64Encoded;
    str = event.rawPath;
    str = event.rawQueryString;
    strOrUndefined = event.cookies ? event.cookies[0] : undefined;
    strOrUndefined = event.queryStringParameters ? event.queryStringParameters['example'] : undefined;
    strOrUndefined = event.pathParameters ? event.pathParameters['example'] : undefined;
    strOrUndefined = event.stageVariables ? event.stageVariables['example'] : undefined;

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

    const result = createProxyResultV2();

    callback(new Error());
    callback(null, result);
    return result;
};

const proxyHandlerWithCustomAuthorizer: APIGatewayProxyWithLambdaAuthorizerHandler<CustomAuthorizerContext> = async (event, context, callback) => {
    // standard fields...
    strOrNull = event.body;
    str = event.headers['example'];
    str = event.multiValueHeaders['example'][0];

    // It seems like it would be easy to make this mistake, but it's still a useful type.
    let requestContextWithAuthorizerDirectly: APIGatewayEventRequestContextWithAuthorizer<CustomAuthorizerContext>;
    // $ExpectError
    requestContextWithAuthorizerDirectly = event.requestContext;

    // Check assignable to named types
    let requestContext: APIGatewayProxyWithLambdaAuthorizerEventRequestContext<CustomAuthorizerContext>;
    requestContext = event.requestContext;

    let authorizer: APIGatewayEventLambdaAuthorizerContext<CustomAuthorizerContext>;
    authorizer = requestContext.authorizer;

    // And it can be converted down to the basic type
    const basicEvent: APIGatewayProxyEvent = event;
    const basicRequestContext: APIGatewayEventRequestContext = event.requestContext;

    // All non-null or undefined types are converted to string.
    str = authorizer.valid;
    str = authorizer.str;
    str = authorizer.num;
    str = authorizer.bool;
    strOrNull = authorizer.numOrNull;
    strOrUndefined = authorizer.numOrUndefined;
    // And these extra properties are added
    str = authorizer.principalId;
    num = authorizer.integrationLatency;

    const result = createProxyResult();

    callback(new Error());
    callback(null, result);

    return result;
};

function createProxyResult(): APIGatewayProxyResult {
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
    return result;
}

function createProxyResultV2(): APIGatewayProxyResultV2 {
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

const proxyHandlerV2ForStringResult: APIGatewayProxyHandlerV2 = async (event, context, callback) => {
    const result = createProxyStringResultV2();

    callback(new Error());
    callback(undefined, result);
    return result;
};

function createProxyStringResultV2(): APIGatewayProxyResultV2 {
    const result = 'example';
    return result;
}

interface Response {
    example: string;
}

const proxyHandlerV2ForObjectResult: APIGatewayProxyHandlerV2<Response> = async (event, context, callback) => {
    const result = createProxyStringResultV2();

    callback(new Error());
    callback(undefined, result);
    return result;
};

function createProxyObjectResultV2(): APIGatewayProxyResultV2<Response> {
    const result: Response = {
        example: 'example squared'
    };
    return result;
}

// $ExpectError
const proxyHandlerV2ForObjectResultFailure: APIGatewayProxyHandlerV2<Response> = async (event, context, callback) => {
    const result = {
        wrongExample: 'wrong example'
    };

    callback(new Error());
    callback(undefined, result); // $ExpectError
    return result;
};

// $ExpectError
const proxyHandlerV2ForObjectResultFailure2: APIGatewayProxyHandlerV2 = async (event, context, callback) => {
    const result = {
        wrongExample: 'wrong example',
    };

    callback(new Error());
    callback(undefined, result); // $ExpectError
    return result;
};

const authorizer: APIGatewayAuthorizerHandler = async (event, context, callback) => {
    if (event.type === "TOKEN") {
        str = event.methodArn;
        str = event.authorizationToken;
        str = event.resource; // $ExpectError
    } else {
        event.type; // $ExpectType "REQUEST"
        str = event.resource;
    }

    let result: APIGatewayAuthorizerResult = createAuthorizerResult();
    // Can convert down to existing type
    result = createAuthorizerResultWithCustomContext();

    callback(new Error());
    callback(null, result);
    return result;
};

const authorizerWithCustomContext: APIGatewayAuthorizerWithContextHandler<CustomAuthorizerContext> = async (event, context, callback) => {
    if (event.type === "TOKEN") {
        str = event.methodArn;
        str = event.authorizationToken;
        str = event.resource; // $ExpectError
    } else {
        event.type; // $ExpectType "REQUEST"
        str = event.resource;
    }

    let result: APIGatewayAuthorizerWithContextResult<CustomAuthorizerContext>;
    result = createAuthorizerResultWithCustomContext();

    // Can't convert up from existing type
    // $ExpectError
    result = createAuthorizerResult();

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

const tokenAuthorizerWithCustomContext: APIGatewayTokenAuthorizerWithContextHandler<CustomAuthorizerContext> = async (event, context, callback) => {
    event.type; // $ExpectType "TOKEN"

    str = event.type;
    str = event.methodArn;
    str = event.authorizationToken;
    strOrUndefined = event.resource; // $ExpectError
    // etc...

    const result = createAuthorizerResultWithCustomContext();

    callback(new Error());
    callback(null, result);
    return result;
};

const requestAuthorizer: APIGatewayRequestAuthorizerHandler = async (event, context, callback) => {
    event.type; // $ExpectType "REQUEST"

    str = event.type;
    str = event.methodArn;
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
    if (requestContext.domainName != null) {
        str = requestContext.domainName;
    }
    str = requestContext.apiId;

    const result = createAuthorizerResult();

    callback(new Error());
    callback(null, result);
    return result;
};

const requestAuthorizerWithCustomContext: APIGatewayRequestAuthorizerWithContextHandler<CustomAuthorizerContext> = async (event, context, callback) => {
    event.type; // $ExpectType "REQUEST"

    str = event.type;
    str = event.methodArn;
    str = event.authorizationToken; // $ExpectError

    const result = createAuthorizerResultWithCustomContext();

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

function createPolicyDocument(): PolicyDocument {
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

    return policyDocument;
}

function createAuthorizerResultWithCustomContext(): APIGatewayAuthorizerWithContextResult<CustomAuthorizerContext> {
    let result: APIGatewayAuthorizerWithContextResult<CustomAuthorizerContext>;

    // Requires context
    // $ExpectError
    result = {
        principalId: str,
        policyDocument: createPolicyDocument(),
        usageIdentifierKey: strOrUndefinedOrNull,
    };

    // Invalid context
    result = {
        principalId: str,
        policyDocument: createPolicyDocument(),
        context: {}, // $ExpectError
        usageIdentifierKey: strOrUndefinedOrNull,
    };

    result = {
        principalId: str,
        policyDocument: createPolicyDocument(),
        context: {
            valid: [str, num, bool, null, undefined][num],
            str,
            num,
            bool,
            numOrNull: [num, null][num],
            numOrUndefined: [num, undefined][num],
            und: undefined,
        },
    };

    return result;
}

function createAuthorizerResult(): APIGatewayAuthorizerResult {
    const policyDocument = createPolicyDocument();

    const authResponseContext: AuthResponseContext = {
        stringKey: str,
        numberKey: num,
        booleanKey: bool,
        [str]: [str, num, bool][num], // string | number | bool
    };

    let result: CustomAuthorizerResult = {
        principalId: str,
        policyDocument,
        context: authResponseContext,
        usageIdentifierKey: strOrUndefinedOrNull,
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
