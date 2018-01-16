var str: string = "any string";
var date: Date = new Date();
var anyObj: any = { abc: 123 };
var num: number = 5;
var error: Error = new Error();
var b: boolean = true;
var apiGwEvtReqCtx: AWSLambda.APIGatewayEventRequestContext;
var apiGwEvt: AWSLambda.APIGatewayEvent;
var customAuthorizerEvt: AWSLambda.CustomAuthorizerEvent;
var clientCtx: AWSLambda.ClientContext;
var clientContextEnv: AWSLambda.ClientContextEnv;
var clientContextClient: AWSLambda.ClientContextClient;
var context: AWSLambda.Context;
var identity: AWSLambda.CognitoIdentity;
var proxyResult: AWSLambda.ProxyResult;
var authResponse: AWSLambda.AuthResponse;
var policyDocument: AWSLambda.PolicyDocument;
var statement: AWSLambda.Statement;
var authResponseContext: AWSLambda.AuthResponseContext;
var snsEvt: AWSLambda.SNSEvent;
var snsEvtRecs: AWSLambda.SNSEventRecord[];
var snsEvtRec: AWSLambda.SNSEventRecord;
var snsMsg: AWSLambda.SNSMessage;
var snsMsgAttr: AWSLambda.SNSMessageAttribute;
var snsMsgAttrs: AWSLambda.SNSMessageAttributes;
var S3EvtRec: AWSLambda.S3EventRecord = {
    eventVersion: "2.0",
    eventSource: "aws:s3",
    awsRegion: "us-east-1",
    eventTime: "1970-01-01T00:00:00.000Z",
    eventName: "ObjectCreated:Put",
    userIdentity: {
        principalId: "AIDAJDPLRKLG7UEXAMPLE"
    },
    requestParameters: {
        sourceIPAddress: "127.0.0.1"
    },
    responseElements: {
        "x-amz-request-id": "C3D13FE58DE4C810",
        "x-amz-id-2":
            "FMyUVURIY8/IgAtTv8xRjskZQpcIZ9KG4V5Wp6S7S/JRWeUWerMUE5JgHvANOjpD"
    },
    s3: {
        s3SchemaVersion: "1.0",
        configurationId: "testConfigRule",
        bucket: {
            name: "mybucket",
            ownerIdentity: {
                principalId: "A3NL1KOZZKExample"
            },
            arn: "arn:aws:s3:::mybucket"
        },
        object: {
            key: "HappyFace.jpg",
            size: 1024,
            eTag: "d41d8cd98f00b204e9800998ecf8427e",
            versionId: "096fKKXTRTtl3on89fVO.nfljtsv6qko",
            sequencer: "0055AED6DCD90281E5"
        }
    }
};

var S3CreateEvent: AWSLambda.S3CreateEvent = {
    Records: [S3EvtRec]
};
var cognitoUserPoolEvent: AWSLambda.CognitoUserPoolEvent;
var cloudformationCustomResourceEvent: AWSLambda.CloudFormationCustomResourceEvent;
var cloudformationCustomResourceResponse: AWSLambda.CloudFormationCustomResourceResponse;
var cloudwatchLogsEvent: AWSLambda.CloudWatchLogsEvent;
var cloudwatchLogsDecodedData: AWSLambda.CloudWatchLogsDecodedData;
var scheduledEvent: AWSLambda.ScheduledEvent;

/* API Gateway Event request context */
str = apiGwEvtReqCtx.accountId;
str = apiGwEvtReqCtx.apiId;
authResponseContext = apiGwEvtReqCtx.authorizer;
str = apiGwEvtReqCtx.httpMethod;
str = apiGwEvtReqCtx.identity.accessKey;
str = apiGwEvtReqCtx.identity.accountId;
str = apiGwEvtReqCtx.identity.apiKey;
str = apiGwEvtReqCtx.identity.caller;
str = apiGwEvtReqCtx.identity.cognitoAuthenticationProvider;
str = apiGwEvtReqCtx.identity.cognitoAuthenticationType;
str = apiGwEvtReqCtx.identity.cognitoIdentityId;
str = apiGwEvtReqCtx.identity.cognitoIdentityPoolId;
str = apiGwEvtReqCtx.identity.sourceIp;
str = apiGwEvtReqCtx.identity.user;
str = apiGwEvtReqCtx.identity.userAgent;
str = apiGwEvtReqCtx.identity.userArn;
str = apiGwEvtReqCtx.stage;
str = apiGwEvtReqCtx.requestId;
str = apiGwEvtReqCtx.resourceId;
str = apiGwEvtReqCtx.resourcePath;

/* API Gateway Event */
str = apiGwEvt.body;
str = apiGwEvt.headers["example"];
str = apiGwEvt.httpMethod;
b = apiGwEvt.isBase64Encoded;
str = apiGwEvt.path;
str = apiGwEvt.pathParameters["example"];
str = apiGwEvt.queryStringParameters["example"];
str = apiGwEvt.stageVariables["example"];
apiGwEvtReqCtx = apiGwEvt.requestContext;
str = apiGwEvt.resource;

/* API Gateway CustomAuthorizer Event */
str = customAuthorizerEvt.type;
str = customAuthorizerEvt.methodArn;
str = customAuthorizerEvt.authorizationToken;
str = apiGwEvt.pathParameters["example"];
str = apiGwEvt.queryStringParameters["example"];
str = apiGwEvt.stageVariables["example"];
apiGwEvtReqCtx = apiGwEvt.requestContext;

/* DynamoDB Stream Event */
var dynamoDBStreamEvent: AWSLambda.DynamoDBStreamEvent = {
    Records: [
        {
            eventID: "1",
            eventVersion: "1.0",
            dynamodb: {
                Keys: {
                    Id: {
                        N: "101"
                    }
                },
                NewImage: {
                    Message: {
                        S: "New item!"
                    },
                    Id: {
                        N: "101"
                    }
                },
                StreamViewType: "NEW_AND_OLD_IMAGES",
                SequenceNumber: "111",
                SizeBytes: 26
            },
            awsRegion: "us-west-2",
            eventName: "INSERT",
            eventSourceARN:
                "arn:aws:dynamodb:us-west-2:account-id:table/ExampleTableWithStream/stream/2015-06-27T00:48:05.899",
            eventSource: "aws:dynamodb"
        },
        {
            eventID: "2",
            eventVersion: "1.0",
            dynamodb: {
                OldImage: {
                    Message: {
                        S: "New item!"
                    },
                    Id: {
                        N: "101"
                    }
                },
                SequenceNumber: "222",
                Keys: {
                    Id: {
                        N: "101"
                    }
                },
                SizeBytes: 59,
                NewImage: {
                    Message: {
                        S: "This item has changed"
                    },
                    Id: {
                        N: "101"
                    }
                },
                StreamViewType: "NEW_AND_OLD_IMAGES"
            },
            awsRegion: "us-west-2",
            eventName: "MODIFY",
            eventSourceARN:
                "arn:aws:dynamodb:us-west-2:account-id:table/ExampleTableWithStream/stream/2015-06-27T00:48:05.899",
            eventSource: "aws:dynamodb"
        },
        {
            eventID: "3",
            eventVersion: "1.0",
            dynamodb: {
                Keys: {
                    Id: {
                        N: "101"
                    }
                },
                SizeBytes: 38,
                SequenceNumber: "333",
                OldImage: {
                    Message: {
                        S: "This item has changed"
                    },
                    Id: {
                        N: "101"
                    }
                },
                StreamViewType: "NEW_AND_OLD_IMAGES"
            },
            awsRegion: "us-west-2",
            eventName: "REMOVE",
            eventSourceARN:
                "arn:aws:dynamodb:us-west-2:account-id:table/ExampleTableWithStream/stream/2015-06-27T00:48:05.899",
            eventSource: "aws:dynamodb"
        }
    ]
};

/* SNS Event */
snsEvtRecs = snsEvt.Records;

str = snsEvtRec.EventSource;
str = snsEvtRec.EventSubscriptionArn;
str = snsEvtRec.EventVersion;
snsMsg = snsEvtRec.Sns;

str = snsMsg.SignatureVersion;
str = snsMsg.Timestamp;
str = snsMsg.Signature;
str = snsMsg.SigningCertUrl;
str = snsMsg.MessageId;
str = snsMsg.Message;
snsMsgAttrs = snsMsg.MessageAttributes;
str = snsMsg.Type;
str = snsMsg.UnsubscribeUrl;
str = snsMsg.TopicArn;
str = snsMsg.Subject;

snsMsgAttrs["example"] = snsMsgAttr;

str = snsMsgAttr.Type;
str = snsMsgAttr.Value;

/* Lambda Proxy Result */
num = proxyResult.statusCode;
proxyResult.headers["example"] = str;
proxyResult.headers["example"] = b;
proxyResult.headers["example"] = num;
b = proxyResult.isBase64Encoded;
str = proxyResult.body;

/* API Gateway CustomAuthorizer AuthResponse */
authResponseContext = {
    stringKey: str,
    numberKey: num,
    booleanKey: b
};

statement = {
    Action: str,
    Effect: str,
    Resource: str
};

statement = {
    Action: [str, str],
    Effect: str,
    Resource: [str, str]
};

policyDocument = {
    Version: str,
    Statement: [statement]
};

authResponse = {
    principalId: str,
    policyDocument: policyDocument,
    context: authResponseContext
};

authResponse = {
    principalId: str,
    policyDocument: policyDocument
};

// CognitoUserPoolEvent
num = cognitoUserPoolEvent.version;
cognitoUserPoolEvent.triggerSource === "PreSignUp_SignUp";
cognitoUserPoolEvent.triggerSource === "PostConfirmation_ConfirmSignUp";
cognitoUserPoolEvent.triggerSource === "PreAuthentication_Authentication";
cognitoUserPoolEvent.triggerSource === "PostAuthentication_Authentication";
cognitoUserPoolEvent.triggerSource === "CustomMessage_SignUp";
cognitoUserPoolEvent.triggerSource === "CustomMessage_AdminCreateUser";
cognitoUserPoolEvent.triggerSource === "CustomMessage_ResendCode";
cognitoUserPoolEvent.triggerSource === "CustomMessage_ForgotPassword";
cognitoUserPoolEvent.triggerSource === "CustomMessage_UpdateUserAttribute";
cognitoUserPoolEvent.triggerSource === "CustomMessage_VerifyUserAttribute";
cognitoUserPoolEvent.triggerSource === "CustomMessage_Authentication";
cognitoUserPoolEvent.triggerSource === "DefineAuthChallenge_Authentication";
cognitoUserPoolEvent.triggerSource === "CreateAuthChallenge_Authentication";
cognitoUserPoolEvent.triggerSource ===
    "VerifyAuthChallengeResponse_Authentication";
str = cognitoUserPoolEvent.region;
str = cognitoUserPoolEvent.userPoolId;
str = cognitoUserPoolEvent.userName;
str = cognitoUserPoolEvent.callerContext.awsSdkVersion;
str = cognitoUserPoolEvent.callerContext.clientId;
str = cognitoUserPoolEvent.request.userAttributes["email"];
str = cognitoUserPoolEvent.request.validationData["k1"];
str = cognitoUserPoolEvent.request.codeParameter;
str = cognitoUserPoolEvent.request.usernameParameter;
b = cognitoUserPoolEvent.request.newDeviceUsed;
cognitoUserPoolEvent.request.session[0].challengeName === "CUSTOM_CHALLENGE";
cognitoUserPoolEvent.request.session[0].challengeName === "PASSWORD_VERIFIER";
cognitoUserPoolEvent.request.session[0].challengeName === "SMS_MFA";
cognitoUserPoolEvent.request.session[0].challengeName === "DEVICE_SRP_AUTH";
cognitoUserPoolEvent.request.session[0].challengeName ===
    "DEVICE_PASSWORD_VERIFIER";
cognitoUserPoolEvent.request.session[0].challengeName === "ADMIN_NO_SRP_AUTH";
b = cognitoUserPoolEvent.request.session[0].challengeResult;
str = cognitoUserPoolEvent.request.session[0].challengeMetaData;
str = cognitoUserPoolEvent.request.challengeName;
str = cognitoUserPoolEvent.request.privateChallengeParameters["answer"];
str = cognitoUserPoolEvent.request.challengeAnswer["answer"];
b = cognitoUserPoolEvent.response.answerCorrect;
str = cognitoUserPoolEvent.response.smsMessage;
str = cognitoUserPoolEvent.response.emailMessage;
str = cognitoUserPoolEvent.response.emailSubject;
str = cognitoUserPoolEvent.response.challengeName;
b = cognitoUserPoolEvent.response.issueTokens;
b = cognitoUserPoolEvent.response.failAuthentication;
str = cognitoUserPoolEvent.response.publicChallengeParameters["captchaUrl"];
str = cognitoUserPoolEvent.response.privateChallengeParameters["answer"];
str = cognitoUserPoolEvent.response.challengeMetaData;
b = cognitoUserPoolEvent.response.answerCorrect;

// CloudFormation Custom Resource
switch (cloudformationCustomResourceEvent.RequestType) {
    case "Create":
        str = cloudformationCustomResourceEvent.LogicalResourceId;
        str = cloudformationCustomResourceEvent.RequestId;
        anyObj = cloudformationCustomResourceEvent.ResourceProperties;
        str = cloudformationCustomResourceEvent.ResourceProperties.ServiceToken;
        str = cloudformationCustomResourceEvent.ResourceType;
        str = cloudformationCustomResourceEvent.ResponseURL;
        str = cloudformationCustomResourceEvent.ServiceToken;
        str = cloudformationCustomResourceEvent.StackId;
        break;
    case "Update":
        anyObj = cloudformationCustomResourceEvent.OldResourceProperties;
        break;
    case "Delete":
        str = cloudformationCustomResourceEvent.PhysicalResourceId;
        break;
}
anyObj = cloudformationCustomResourceResponse.Data;
str = cloudformationCustomResourceResponse.LogicalResourceId;
str = cloudformationCustomResourceResponse.PhysicalResourceId;
str = cloudformationCustomResourceResponse.Reason;
str = cloudformationCustomResourceResponse.RequestId;
str = cloudformationCustomResourceResponse.StackId;
str = cloudformationCustomResourceResponse.Status;

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

/* Scheduled Event */
str = scheduledEvent.account;
anyObj = scheduledEvent.detail;
str = scheduledEvent.id;
str = scheduledEvent.region;
str = scheduledEvent.resources[0];
str = scheduledEvent.source;
str = scheduledEvent.time;

/* CloudWatch Logs */
str = cloudwatchLogsEvent.awslogs.data;

str = cloudwatchLogsDecodedData.owner;
str = cloudwatchLogsDecodedData.logGroup;
str = cloudwatchLogsDecodedData.logStream;
str = cloudwatchLogsDecodedData.subscriptionFilters[0];
str = cloudwatchLogsDecodedData.messageType;
str = cloudwatchLogsDecodedData.logEvents[0].id;
num = cloudwatchLogsDecodedData.logEvents[0].timestamp;
str = cloudwatchLogsDecodedData.logEvents[0].message;

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
    cb(null, b);
    cb(null, str);
    cb(null, num);
}

/* Proxy Callback */
function proxyCallback(cb: AWSLambda.ProxyCallback) {
    cb();
    cb(null);
    cb(error);
    cb(null, proxyResult);
}

/* CustomAuthorizerCallback */
function customAuthorizerCallback(cb: AWSLambda.CustomAuthorizerCallback) {
    cb();
    cb(null);
    cb(error);
    cb(null, authResponse);
}

/* CloudFront events, see http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/lambda-event-structure.html */
var CloudFrontRequestEvent: AWSLambda.CloudFrontRequestEvent = {
    Records: [
        {
            cf: {
                config: {
                    distributionId: "EDFDVBD6EXAMPLE",
                    requestId:
                        "MRVMF7KydIvxMWfJIglgwHQwZsbG2IhRJ07sn9AkKUFSHS9EXAMPLE=="
                },
                request: {
                    clientIp: "2001:0db8:85a3:0:0:8a2e:0370:7334",
                    method: "GET",
                    uri: "/picture.jpg",
                    querystring: "size=large",
                    headers: {
                        host: [
                            {
                                key: "Host",
                                value: "d111111abcdef8.cloudfront.net"
                            }
                        ],
                        "user-agent": [
                            {
                                key: "User-Agent",
                                value: "curl/7.51.0"
                            }
                        ]
                    },
                    origin: {
                        custom: {
                            customHeaders: {
                                "my-origin-custom-header": [
                                    {
                                        key: "My-Origin-Custom-Header",
                                        value: "Test"
                                    }
                                ]
                            },
                            domainName: "example.com",
                            keepaliveTimeout: 5,
                            path: "/custom_path",
                            port: 443,
                            protocol: "https",
                            readTimeout: 5,
                            sslProtocols: ["TLSv1", "TLSv1.1"]
                        },
                        s3: {
                            authMethod: "origin-access-identity",
                            customHeaders: {
                                "my-origin-custom-header": [
                                    {
                                        key: "My-Origin-Custom-Header",
                                        value: "Test"
                                    }
                                ]
                            },
                            domainName: "my-bucket.s3.amazonaws.com",
                            path: "/s3_path",
                            region: "us-east-1"
                        }
                    }
                }
            }
        }
    ]
};

var CloudFrontResponseEvent: AWSLambda.CloudFrontResponseEvent = {
    Records: [
        {
            cf: {
                config: {
                    distributionId: "EDFDVBD6EXAMPLE",
                    requestId:
                        "xGN7KWpVEmB9Dp7ctcVFQC4E-nrcOcEKS3QyAez--06dV7TEXAMPLE=="
                },
                request: {
                    clientIp: "2001:0db8:85a3:0:0:8a2e:0370:7334",
                    method: "GET",
                    uri: "/picture.jpg",
                    querystring: "size=large",
                    headers: {
                        host: [
                            {
                                key: "Host",
                                value: "d111111abcdef8.cloudfront.net"
                            }
                        ],
                        "user-agent": [
                            {
                                key: "User-Agent",
                                value: "curl/7.18.1"
                            }
                        ]
                    }
                },
                response: {
                    status: "200",
                    statusDescription: "OK",
                    headers: {
                        server: [
                            {
                                key: "Server",
                                value: "MyCustomOrigin"
                            }
                        ],
                        "set-cookie": [
                            {
                                key: "Set-Cookie",
                                value: "theme=light"
                            },
                            {
                                key: "Set-Cookie",
                                value:
                                    "sessionToken=abc123; Expires=Wed, 09 Jun 2021 10:18:14 GMT"
                            }
                        ]
                    }
                }
            }
        }
    ]
};

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
let handler: AWSLambda.Handler = (
    event: any,
    context: AWSLambda.Context,
    cb: AWSLambda.Callback
) => {};
let asyncHandler: AWSLambda.Handler = async (
    event: any,
    context: AWSLambda.Context,
    cb: AWSLambda.Callback
) => {};
let proxyHandler: AWSLambda.ProxyHandler = (
    event: AWSLambda.APIGatewayEvent,
    context: AWSLambda.Context,
    cb: AWSLambda.ProxyCallback
) => {};
let asyncProxyHandler: AWSLambda.ProxyHandler = async (
    event: AWSLambda.APIGatewayEvent,
    context: AWSLambda.Context,
    cb: AWSLambda.ProxyCallback
) => {};
let customAuthorizerHandler: AWSLambda.CustomAuthorizerHandler = (
    event: AWSLambda.CustomAuthorizerEvent,
    context: AWSLambda.Context,
    cb: AWSLambda.CustomAuthorizerCallback
) => {};
let asyncCustomAuthorizerHandler: AWSLambda.CustomAuthorizerHandler = async (
    event: AWSLambda.CustomAuthorizerEvent,
    context: AWSLambda.Context,
    cb: AWSLambda.CustomAuthorizerCallback
) => {};
