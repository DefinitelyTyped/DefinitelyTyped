/// <reference types="aws-lambda" />

var str: string = "any string";
var date: Date = new Date();
var anyObj: any = { abc: 123 };
var num: number = 5;
var error: Error = new Error();
var b: boolean = true;
var clientCtx: AWSLambda.ClientContext;
var clientContextEnv: AWSLambda.ClientContextEnv;
var clientContextClient: AWSLambda.ClientContextClient;
var context: AWSLambda.Context;
var identity: AWSLambda.CognitoIdentity;

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
