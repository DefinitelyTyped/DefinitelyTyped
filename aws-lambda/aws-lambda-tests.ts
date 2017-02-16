/// <reference types="aws-lambda" />

var str: string = "any string";
var date: Date = new Date();
var anyObj: any = { abc: 123 };
var num: number = 5;
var error: Error = new Error();
var b: boolean = true;
var apiGwEvt: AWSLambda.APIGatewayEvent;
var clientCtx: AWSLambda.ClientContext;
var clientContextEnv: AWSLambda.ClientContextEnv;
var clientContextClient: AWSLambda.ClientContextClient;
var context: AWSLambda.Context;
var identity: AWSLambda.CognitoIdentity;
var proxyResult: AWSLambda.ProxyResult;

/* API Gateway Event */
str = apiGwEvt.body;
str = apiGwEvt.headers["example"];
str = apiGwEvt.httpMethod;
b = apiGwEvt.isBase64Encoded;
str = apiGwEvt.path;
str = apiGwEvt.pathParameters["example"];
str = apiGwEvt.queryStringParameters["example"];
str = apiGwEvt.stageVariables["example"];
str = apiGwEvt.requestContext.accountId;
str = apiGwEvt.requestContext.apiId;
str = apiGwEvt.requestContext.httpMethod;
str = apiGwEvt.requestContext.identity.accessKey;
str = apiGwEvt.requestContext.identity.accountId;
str = apiGwEvt.requestContext.identity.apiKey;
str = apiGwEvt.requestContext.identity.caller;
str = apiGwEvt.requestContext.identity.cognitoAuthenticationProvider;
str = apiGwEvt.requestContext.identity.cognitoAuthenticationType;
str = apiGwEvt.requestContext.identity.cognitoIdentityId;
str = apiGwEvt.requestContext.identity.cognitoIdentityPoolId;
str = apiGwEvt.requestContext.identity.sourceIp;
str = apiGwEvt.requestContext.identity.user;
str = apiGwEvt.requestContext.identity.userAgent;
str = apiGwEvt.requestContext.identity.userArn;
str = apiGwEvt.requestContext.stage;
str = apiGwEvt.requestContext.requestId;
str = apiGwEvt.requestContext.resourceId;
str = apiGwEvt.requestContext.resourcePath;
str = apiGwEvt.resource;

/* Lambda Proxy Result */
num = proxyResult.statusCode;
str = proxyResult.headers["example"];
str = proxyResult.body

/* Context */
b = context.callbackWaitsForEmptyEventLoop;
str = context.functionName;
str = context.functionVersion;
str = context.invokedFunctionArn;
num = context.memoryLimitInMB;
str = context.awsRequestId;
str = context.logGroupName;
str = context.logStreamName;
identity = context.identity;
clientCtx = context.clientContext;

/* CognitoIdentity */
str = identity.cognitoIdentityId;
str = identity.cognitoIdentityPoolId;

/* ClientContext */
clientContextClient = clientCtx.client;
anyObj = clientCtx.Custom;
clientContextEnv = clientCtx.env;

/* ClientContextEnv */
str = clientContextEnv.locale;
str = clientContextEnv.make;
str = clientContextEnv.model;
str = clientContextEnv.platform;
str = clientContextEnv.platformVersion;

/* ClientContextClient */
str = clientContextClient.appPackageName;
str = clientContextClient.appTitle;
str = clientContextClient.appVersionCode;
str = clientContextClient.appVersionName;
str = clientContextClient.installationId;

/* Callback */
function callback(cb: AWSLambda.Callback) {
    cb();
    cb(null);
    cb(error);
    cb(null, anyObj);
}

/* Proxy Callback */
function proxyCallback(cb: AWSLambda.ProxyCallback) {
    cb();
    cb(null);
    cb(error);
    cb(null, proxyResult);
}

/* Compatibility functions */
context.done();
context.done(error);
context.done(error, anyObj);
context.succeed(str);
context.succeed(anyObj);
context.succeed(str, anyObj);
context.fail(error);
context.fail(str);

/* Handler */
let handler: AWSLambda.Handler = (event: any, context: AWSLambda.Context, cb: AWSLambda.Callback) => {};
let proxyHandler: AWSLambda.ProxyHandler = (event: AWSLambda.APIGatewayEvent, context: AWSLambda.Context, cb: AWSLambda.ProxyCallback) => {};
