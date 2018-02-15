declare let str: string;
declare let strOrNull: string | null;
declare let strOrUndefined: string | undefined;
declare let date: Date;
declare let anyObj: any;
declare let num: number;
declare let error: Error;
declare let bool: boolean;
declare let boolOrUndefined: boolean | undefined;
declare let apiGwEvtReqCtx: AWSLambda.APIGatewayEventRequestContext;
declare let apiGwEvt: AWSLambda.APIGatewayEvent;
declare let customAuthorizerEvt: AWSLambda.CustomAuthorizerEvent;
declare let clientCtx: AWSLambda.ClientContext;
declare let clientCtxOrUndefined: AWSLambda.ClientContext | undefined;
declare let clientContextEnv: AWSLambda.ClientContextEnv;
declare let clientContextClient: AWSLambda.ClientContextClient;
declare let context: AWSLambda.Context;
declare let identity: AWSLambda.CognitoIdentity;
declare let identityOrUndefined: AWSLambda.CognitoIdentity | undefined;
declare let proxyResult: AWSLambda.ProxyResult;
declare let authResponse: AWSLambda.AuthResponse;
declare let policyDocument: AWSLambda.PolicyDocument;
declare let statement: AWSLambda.Statement;
declare let authResponseContext: AWSLambda.AuthResponseContext;
declare let authResponseContextOpt: AWSLambda.AuthResponseContext | null | undefined;
declare let snsEvt: AWSLambda.SNSEvent;
declare let snsEvtRecs: AWSLambda.SNSEventRecord[];
declare let snsEvtRec: AWSLambda.SNSEventRecord;
declare let snsMsg: AWSLambda.SNSMessage;
declare let snsMsgAttr: AWSLambda.SNSMessageAttribute;
declare let snsMsgAttrs: AWSLambda.SNSMessageAttributes;
const S3EvtRec: AWSLambda.S3EventRecord = {
    eventVersion: '2.0',
    eventSource: 'aws:s3',
    awsRegion: 'us-east-1',
    eventTime: '1970-01-01T00:00:00.000Z',
    eventName: 'ObjectCreated:Put',
    userIdentity: {
        principalId: 'AIDAJDPLRKLG7UEXAMPLE'
    },
    requestParameters: {
        sourceIPAddress: '127.0.0.1'
    },
    responseElements: {
        'x-amz-request-id': 'C3D13FE58DE4C810',
        'x-amz-id-2': 'FMyUVURIY8/IgAtTv8xRjskZQpcIZ9KG4V5Wp6S7S/JRWeUWerMUE5JgHvANOjpD'
    },
    s3: {
        s3SchemaVersion: '1.0',
        configurationId: 'testConfigRule',
        bucket: {
            name: 'mybucket',
            ownerIdentity: {
                principalId: 'A3NL1KOZZKExample'
            },
            arn: 'arn:aws:s3:::mybucket'
        },
        object: {
            key: 'HappyFace.jpg',
            size: 1024,
            eTag: 'd41d8cd98f00b204e9800998ecf8427e',
            versionId: '096fKKXTRTtl3on89fVO.nfljtsv6qko',
            sequencer: '0055AED6DCD90281E5'
        }
    }
};

const S3CreateEvent: AWSLambda.S3CreateEvent = {
    Records: [S3EvtRec]
};
declare const cognitoUserPoolEvent: AWSLambda.CognitoUserPoolEvent;
declare const cloudformationCustomResourceEvent: AWSLambda.CloudFormationCustomResourceEvent;
declare const cloudformationCustomResourceResponse: AWSLambda.CloudFormationCustomResourceResponse;
declare const cloudwatchLogsEvent: AWSLambda.CloudWatchLogsEvent;
declare const cloudwatchLogsDecodedData: AWSLambda.CloudWatchLogsDecodedData;
declare const scheduledEvent: AWSLambda.ScheduledEvent;

/* API Gateway Event request context */
str = apiGwEvtReqCtx.accountId;
str = apiGwEvtReqCtx.apiId;
authResponseContextOpt = apiGwEvtReqCtx.authorizer;
str = apiGwEvtReqCtx.httpMethod;
strOrNull = apiGwEvtReqCtx.identity.accessKey;
strOrNull = apiGwEvtReqCtx.identity.accountId;
strOrNull = apiGwEvtReqCtx.identity.apiKey;
strOrNull = apiGwEvtReqCtx.identity.caller;
strOrNull = apiGwEvtReqCtx.identity.cognitoAuthenticationProvider;
strOrNull = apiGwEvtReqCtx.identity.cognitoAuthenticationType;
strOrNull = apiGwEvtReqCtx.identity.cognitoIdentityId;
strOrNull = apiGwEvtReqCtx.identity.cognitoIdentityPoolId;
str = apiGwEvtReqCtx.identity.sourceIp;
strOrNull = apiGwEvtReqCtx.identity.user;
strOrNull = apiGwEvtReqCtx.identity.userAgent;
strOrNull = apiGwEvtReqCtx.identity.userArn;
str = apiGwEvtReqCtx.stage;
str = apiGwEvtReqCtx.requestId;
str = apiGwEvtReqCtx.resourceId;
str = apiGwEvtReqCtx.resourcePath;

/* API Gateway Event */
strOrNull = apiGwEvt.body;
str = apiGwEvt.headers["example"];
str = apiGwEvt.httpMethod;
bool = apiGwEvt.isBase64Encoded;
str = apiGwEvt.path;
str = apiGwEvt.pathParameters!["example"];
str = apiGwEvt.queryStringParameters!["example"];
str = apiGwEvt.stageVariables!["example"];
apiGwEvtReqCtx = apiGwEvt.requestContext;
str = apiGwEvt.resource;

/* API Gateway CustomAuthorizer Event */
str = customAuthorizerEvt.type;
str = customAuthorizerEvt.methodArn;
strOrUndefined = customAuthorizerEvt.authorizationToken;
str = apiGwEvt.pathParameters!["example"];
str = apiGwEvt.queryStringParameters!["example"];
str = apiGwEvt.stageVariables!["example"];
apiGwEvtReqCtx = apiGwEvt.requestContext;

/* DynamoDB Stream Event */
const dynamoDBStreamEvent: AWSLambda.DynamoDBStreamEvent = {
    Records: [
        {
            eventID: '1',
            eventVersion: '1.0',
            dynamodb: {
                Keys: {
                    Id: {
                        N: '101'
                    }
                },
                NewImage: {
                    Message: {
                        S: 'New item!'
                    },
                    Id: {
                        N: '101'
                    }
                },
                StreamViewType: 'NEW_AND_OLD_IMAGES',
                SequenceNumber: '111',
                SizeBytes: 26
            },
            awsRegion: 'us-west-2',
            eventName: 'INSERT',
            eventSourceARN:
                'arn:aws:dynamodb:us-west-2:account-id:table/ExampleTableWithStream/stream/2015-06-27T00:48:05.899',
            eventSource: 'aws:dynamodb'
        },
        {
            eventID: '2',
            eventVersion: '1.0',
            dynamodb: {
                OldImage: {
                    Message: {
                        S: 'New item!'
                    },
                    Id: {
                        N: '101'
                    }
                },
                SequenceNumber: '222',
                Keys: {
                    Id: {
                        N: '101'
                    }
                },
                SizeBytes: 59,
                NewImage: {
                    Message: {
                        S: 'This item has changed'
                    },
                    Id: {
                        N: '101'
                    }
                },
                StreamViewType: 'NEW_AND_OLD_IMAGES'
            },
            awsRegion: 'us-west-2',
            eventName: 'MODIFY',
            eventSourceARN:
                'arn:aws:dynamodb:us-west-2:account-id:table/ExampleTableWithStream/stream/2015-06-27T00:48:05.899',
            eventSource: 'aws:dynamodb'
        },
        {
            eventID: '3',
            eventVersion: '1.0',
            dynamodb: {
                Keys: {
                    Id: {
                        N: '101'
                    }
                },
                SizeBytes: 38,
                SequenceNumber: '333',
                OldImage: {
                    Message: {
                        S: 'This item has changed'
                    },
                    Id: {
                        N: '101'
                    }
                },
                StreamViewType: 'NEW_AND_OLD_IMAGES'
            },
            awsRegion: 'us-west-2',
            eventName: 'REMOVE',
            eventSourceARN:
                'arn:aws:dynamodb:us-west-2:account-id:table/ExampleTableWithStream/stream/2015-06-27T00:48:05.899',
            eventSource: 'aws:dynamodb'
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
proxyResult.headers!["example"] = str;
proxyResult.headers!["example"] = bool;
proxyResult.headers!["example"] = num;
boolOrUndefined = proxyResult.isBase64Encoded;
str = proxyResult.body;

/* API Gateway CustomAuthorizer AuthResponse */
authResponseContext = {
    stringKey: str,
    numberKey: num,
    booleanKey: bool
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
    policyDocument,
    context: authResponseContext
};

authResponse = {
    principalId: str,
    policyDocument,
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
cognitoUserPoolEvent.triggerSource === "VerifyAuthChallengeResponse_Authentication";
cognitoUserPoolEvent.triggerSource === "PreSignUp_AdminCreateUser";
cognitoUserPoolEvent.triggerSource === "PostConfirmation_ConfirmForgotPassword";
cognitoUserPoolEvent.triggerSource === "TokenGeneration_HostedAuth";
cognitoUserPoolEvent.triggerSource === "TokenGeneration_Authentication";
cognitoUserPoolEvent.triggerSource === "TokenGeneration_NewPasswordChallenge";
cognitoUserPoolEvent.triggerSource === "TokenGeneration_AuthenticateDevice";
cognitoUserPoolEvent.triggerSource === "TokenGeneration_RefreshTokens";
str = cognitoUserPoolEvent.region;
str = cognitoUserPoolEvent.userPoolId;
strOrUndefined = cognitoUserPoolEvent.userName;
str = cognitoUserPoolEvent.callerContext.awsSdkVersion;
str = cognitoUserPoolEvent.callerContext.clientId;
str = cognitoUserPoolEvent.request.userAttributes["email"];
str = cognitoUserPoolEvent.request.validationData!["k1"];
strOrUndefined = cognitoUserPoolEvent.request.codeParameter;
strOrUndefined = cognitoUserPoolEvent.request.usernameParameter;
boolOrUndefined = cognitoUserPoolEvent.request.newDeviceUsed;
cognitoUserPoolEvent.request.session![0].challengeName === "CUSTOM_CHALLENGE";
cognitoUserPoolEvent.request.session![0].challengeName === "PASSWORD_VERIFIER";
cognitoUserPoolEvent.request.session![0].challengeName === "SMS_MFA";
cognitoUserPoolEvent.request.session![0].challengeName === "DEVICE_SRP_AUTH";
cognitoUserPoolEvent.request.session![0].challengeName === "DEVICE_PASSWORD_VERIFIER";
cognitoUserPoolEvent.request.session![0].challengeName === "ADMIN_NO_SRP_AUTH";
bool = cognitoUserPoolEvent.request.session![0].challengeResult;
strOrUndefined = cognitoUserPoolEvent.request.session![0].challengeMetaData;
strOrUndefined = cognitoUserPoolEvent.request.challengeName;
str = cognitoUserPoolEvent.request.privateChallengeParameters!["answer"];
str = cognitoUserPoolEvent.request.challengeAnswer!["answer"];
boolOrUndefined = cognitoUserPoolEvent.response.answerCorrect;
strOrUndefined = cognitoUserPoolEvent.response.smsMessage;
strOrUndefined = cognitoUserPoolEvent.response.emailMessage;
strOrUndefined = cognitoUserPoolEvent.response.emailSubject;
strOrUndefined = cognitoUserPoolEvent.response.challengeName;
boolOrUndefined = cognitoUserPoolEvent.response.issueTokens;
boolOrUndefined = cognitoUserPoolEvent.response.failAuthentication;
str = cognitoUserPoolEvent.response.publicChallengeParameters!["captchaUrl"];
str = cognitoUserPoolEvent.response.privateChallengeParameters!["answer"];
strOrUndefined = cognitoUserPoolEvent.response.challengeMetaData;
boolOrUndefined = cognitoUserPoolEvent.response.answerCorrect;

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
strOrUndefined = cloudformationCustomResourceResponse.Reason;
str = cloudformationCustomResourceResponse.RequestId;
str = cloudformationCustomResourceResponse.StackId;
str = cloudformationCustomResourceResponse.Status;

/* ScheduledEvent */
str = scheduledEvent.account;
anyObj = scheduledEvent.detail;
str = scheduledEvent.id;
str = scheduledEvent.region;
str = scheduledEvent.resources[0];
str = scheduledEvent.source;
str = scheduledEvent.time;

/* Context */
bool = context.callbackWaitsForEmptyEventLoop;
str = context.functionName;
str = context.functionVersion;
str = context.invokedFunctionArn;
num = context.memoryLimitInMB;
str = context.awsRequestId;
str = context.logGroupName;
str = context.logStreamName;
identityOrUndefined = context.identity;
clientCtxOrUndefined = context.clientContext;

/* CognitoIdentity */
str = identity.cognitoIdentityId;
str = identity.cognitoIdentityPoolId;

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
    cb(null, bool);
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
const CloudFrontRequestEvent: AWSLambda.CloudFrontRequestEvent = {
  Records: [
    {
      cf: {
        config: {
          distributionId: "EDFDVBD6EXAMPLE",
          requestId: "MRVMF7KydIvxMWfJIglgwHQwZsbG2IhRJ07sn9AkKUFSHS9EXAMPLE=="
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
              sslProtocols: [
                "TLSv1",
                "TLSv1.1"
              ]
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

const CloudFrontResponseEvent: AWSLambda.CloudFrontResponseEvent = {
    Records: [
        {
            cf: {
                config: {
                    distributionId: "EDFDVBD6EXAMPLE",
                    requestId: "xGN7KWpVEmB9Dp7ctcVFQC4E-nrcOcEKS3QyAez--06dV7TEXAMPLE=="
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
                                value: "sessionToken=abc123; Expires=Wed, 09 Jun 2021 10:18:14 GMT"
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
let handler: AWSLambda.Handler = (event: any, context: AWSLambda.Context, cb: AWSLambda.Callback) => { };

// async methods return Promise, test assignability
let asyncHandler: AWSLambda.Handler = async (event: any, context: AWSLambda.Context, cb: AWSLambda.Callback) => { };

let inferredHandler: AWSLambda.S3Handler = (event, context, cb) => {
    // $ExpectType S3Event
    event;
    str = event.Records[0].eventName;
    // $ExpectType Context
    context;
    str = context.functionName;
    // $ExpectType Callback<void>
    cb;
    cb();
    cb(null);
    cb(new Error());
    // $ExpectError
    cb(null, { });
};

// Test using default Callback type still works.
let defaultCallbackHandler: AWSLambda.APIGatewayProxyHandler = (event: AWSLambda.APIGatewayEvent, context: AWSLambda.Context, cb: AWSLambda.Callback) => { };

// Specific types
let s3Handler: AWSLambda.S3Handler = (event: AWSLambda.S3Event, context: AWSLambda.Context, cb: AWSLambda.Callback<void>) => {};
// Test old name
let s3CreateHandler: AWSLambda.S3Handler = (event: AWSLambda.S3CreateEvent, context: AWSLambda.Context, cb: AWSLambda.Callback<void>) => {};
s3Handler = s3CreateHandler;

let dynamoDBStreamHandler: AWSLambda.DynamoDBStreamHandler = (event: AWSLambda.DynamoDBStreamEvent, context: AWSLambda.Context, cb: AWSLambda.Callback<void>) => {};

let snsHandler: AWSLambda.SNSHandler = (event: AWSLambda.SNSEvent, context: AWSLambda.Context, cb: AWSLambda.Callback<void>) => {};

let cognitoUserPoolHandler: AWSLambda.CognitoUserPoolTriggerHandler = (event: AWSLambda.CognitoUserPoolEvent, context: AWSLambda.Context, cb: AWSLambda.Callback<void>) => {};

let cloudFormationCustomResourceHandler: AWSLambda.CloudFormationCustomResourceHandler =
    (event: AWSLambda.CloudFormationCustomResourceEvent, context: AWSLambda.Context, cb: AWSLambda.Callback<void>) => {};

let cloudWatchLogsHandler: AWSLambda.CloudWatchLogsHandler = (event: AWSLambda.CloudWatchLogsEvent, context: AWSLambda.Context, cb: AWSLambda.Callback<void>) => {};

let scheduledHandler: AWSLambda.ScheduledHandler = (event: AWSLambda.ScheduledEvent, context: AWSLambda.Context, cb: AWSLambda.Callback<void>) => {};

let apiGtwProxyHandler: AWSLambda.APIGatewayProxyHandler = (event: AWSLambda.APIGatewayProxyEvent, context: AWSLambda.Context, cb: AWSLambda.APIGatewayProxyCallback) => { };
// Test old names
let proxyHandler: AWSLambda.ProxyHandler = (event: AWSLambda.APIGatewayEvent, context: AWSLambda.Context, cb: AWSLambda.ProxyCallback) => { };
apiGtwProxyHandler = proxyHandler;

let cloudFrontRequestHandler: AWSLambda.CloudFrontRequestHandler = (event: AWSLambda.CloudFrontRequestEvent, context: AWSLambda.Context, cb: AWSLambda.CloudFrontRequestCallback) => { };

let cloudFrontResponseHandler: AWSLambda.CloudFrontResponseHandler = (event: AWSLambda.CloudFrontResponseEvent, context: AWSLambda.Context, cb: AWSLambda.CloudFrontResponseCallback) => { };

let customAuthorizerHandler: AWSLambda.CustomAuthorizerHandler = (event: AWSLambda.CustomAuthorizerEvent, context: AWSLambda.Context, cb: AWSLambda.CustomAuthorizerCallback) => { };

interface CustomEvent { eventString: string; eventBool: boolean; }
interface CustomResult { resultString: string; resultBool?: boolean; }
type CustomCallback = AWSLambda.Callback<CustomResult>;
let customHandler: AWSLambda.Handler<CustomEvent, CustomResult> = (event, context, cb) => {
    // $ExpectType CustomEvent
    event;
    str = event.eventString;
    bool = event.eventBool;
    // $ExpectType Context
    context;
    // $ExpectType Callback<CustomResult>
    cb;
    cb(null, { resultString: str, resultBool: bool });
    // $ExpectError
    cb(null, { resultString: bool });
};
