/// <reference path="aws-lambda.d.ts" />

import lambda = require('aws-lambda');

var str: string = "any string";
var date: Date = new Date();
var anyObj: any = { abc: 123 };
var num: number = 5;
var identity: lambda.CognitoIdentity;
var error: Error = new Error();
var b: boolean = true;
var clientCtx: lambda.ClientContext;

/* Context */
var context: lambda.Context;

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
var identity: lambda.CognitoIdentity;

str = identity.cognitoIdentityId;
str = identity.cognitoIdentityPoolId;

/* Callback */
function callback(cb: lambda.Callback) {
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