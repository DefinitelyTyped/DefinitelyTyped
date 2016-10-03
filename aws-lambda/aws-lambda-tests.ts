/// <reference path="aws-lambda.d.ts" />

import lambda = require('aws-lambda');

var str: string;
var date: Date;
var anyObj: any;
var num: number;
var identity: lambda.CognitoIdentity;
var error: Error;
var b: boolean;
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