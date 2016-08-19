/// <reference path="aws-lambda.d.ts" />

import lambda = require('aws-lambda');

var str: string;
var date: Date;
var sns: lambda.SNS;
var kinesis: lambda.Kinesis;
var recordsList: lambda.Record[];
var anyObj: any;
var num: number;
var identity: lambda.Identity;
var error: Error;

/* Records */
var records: lambda.Records;

recordsList = records.Records;

/* Record */
var record: lambda.Record;

str = record.EventVersion;
str = record.EventSubscriptionArn;
str = record.EnventSource;
sns = record.Sns;
kinesis = record.kinesis;

/* SNS */
str = sns.Type;
str = sns.MessageId;
str = sns.TopicArn;
str = sns.Subject;
str = sns.Message;
date = sns.Timestamp;

/* Kinesis */
var kinesis: lambda.Kinesis;

str = kinesis.data;

/* Context */
var context: lambda.Context;

context.log(str, anyObj);
context.fail(str);
context.succeed(str);
context.succeed(anyObj);
context.succeed(str, anyObj);
str = context.awsRequestId;
num = context.getRemainingTimeInMillis();
identity = context.identity;

/* Identity */
var identity: lambda.Identity;

str = identity.cognitoIdentityId;
str = identity.cognitoIdentityPoolId;

/* Callback */
function callback(cb: lambda.Callback) {
    cb();
    cb(null);
    cb(error);
    cb(null, anyObj);
}