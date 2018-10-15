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
strOrNull = apiGwEvtReqCtx.identity.apiKeyId;
strOrNull = apiGwEvtReqCtx.identity.caller;
strOrNull = apiGwEvtReqCtx.identity.cognitoAuthenticationProvider;
strOrNull = apiGwEvtReqCtx.identity.cognitoAuthenticationType;
strOrNull = apiGwEvtReqCtx.identity.cognitoIdentityId;
strOrNull = apiGwEvtReqCtx.identity.cognitoIdentityPoolId;
str = apiGwEvtReqCtx.identity.sourceIp;
strOrNull = apiGwEvtReqCtx.identity.user;
strOrNull = apiGwEvtReqCtx.identity.userAgent;
strOrNull = apiGwEvtReqCtx.identity.userArn;
str = apiGwEvtReqCtx.path;
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

// $ExpectError
statement = {
    Effect: str,
    Action: str,
    Principal: 123
};

// Bad Resource
// $ExpectError
statement = {
    Effect: str,
    Action: str,
    Resource: 123
};

// Bad Resource with valid Principal
// $ExpectError
statement = {
    Effect: str,
    Action: str,
    Principal: { Service: str},
    Resource: 123
};

// Bad principal with valid Resource
// $ExpectError
statement = {
    Effect: str,
    Action: str,
    Principal: 123,
    Resource: str
};

// No Effect
// $ExpectError
statement = {
    Action: str,
    Principal: str
};

statement = {
    Sid: str,
    Action: [str, str],
    Effect: str,
    Resource: [str, str],
    Condition: {
        condition1: { key: "value" },
        condition2: [{
                key1: "value",
                key2: "value"
        }, {
            key3: "value"
        }]
    },
    Principal: [str, str],
    NotPrincipal: [str, str]
};

statement = {
    Action: str,
    Principal: str,
    Effect: str
};

statement = {
    Action: str,
    NotPrincipal: {
        Service: str
    },
    Effect: str
};

statement = {
    Effect: str,
    NotAction: str,
    NotResource: str
};

policyDocument = {
    Version: str,
    Statement: [statement]
};

policyDocument = {
    Version: str,
    Statement: [statement, statement]
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
strOrUndefined = cognitoUserPoolEvent.request.session![0].challengeMetadata;
strOrUndefined = cognitoUserPoolEvent.request.challengeName;
str = cognitoUserPoolEvent.request.privateChallengeParameters!["answer"];
str = cognitoUserPoolEvent.request.challengeAnswer!;
boolOrUndefined = cognitoUserPoolEvent.response.answerCorrect;
strOrUndefined = cognitoUserPoolEvent.response.smsMessage;
strOrUndefined = cognitoUserPoolEvent.response.emailMessage;
strOrUndefined = cognitoUserPoolEvent.response.emailSubject;
strOrUndefined = cognitoUserPoolEvent.response.challengeName;
boolOrUndefined = cognitoUserPoolEvent.response.issueTokens;
boolOrUndefined = cognitoUserPoolEvent.response.failAuthentication;
str = cognitoUserPoolEvent.response.publicChallengeParameters!["captchaUrl"];
str = cognitoUserPoolEvent.response.privateChallengeParameters!["answer"];
strOrUndefined = cognitoUserPoolEvent.response.challengeMetadata;
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
str = cloudwatchLogsDecodedData.logEvents[0].extractedFields!["example"];

/* ClientContext */
clientContextClient = clientCtx.client;
anyObj = clientCtx.custom;
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
    cb(str); // https://docs.aws.amazon.com/apigateway/latest/developerguide/handle-errors-in-lambda-integration.html
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

/* CodePipeline events https://docs.aws.amazon.com/codepipeline/latest/userguide/actions-invoke-lambda-function.html#actions-invoke-lambda-function-json-event-example */
const CodePipelineEvent: AWSLambda.CodePipelineEvent = {
    "CodePipeline.job": {
        id: "11111111-abcd-1111-abcd-111111abcdef",
        accountId: "111111111111",
        data: {
            actionConfiguration: {
                configuration: {
                    FunctionName: "MyLambdaFunctionForAWSCodePipeline",
                    UserParameters: "some-input-such-as-a-URL"
                }
            },
            inputArtifacts: [
                {
                    location: {
                        s3Location: {
                            bucketName: "the name of the bucket configured as the pipeline artifact store in Amazon S3, for example codepipeline-us-east-2-1234567890",
                            objectKey: "the name of the application, for example CodePipelineDemoApplication.zip"
                        },
                        type: "S3"
                    },
                    revision: null,
                    name: "ArtifactName"
                }
            ],
            outputArtifacts: [],
            artifactCredentials: {
                secretAccessKey: "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY",
                sessionToken: `MIICiTCCAfICCQD6m7oRw0uXOjANBgkqhkiG9w
 0BAQUFADCBiDELMAkGA1UEBhMCVVMxCzAJBgNVBAgTAldBMRAwDgYDVQQHEwdTZ
 WF0dGxlMQ8wDQYDVQQKEwZBbWF6b24xFDASBgNVBAsTC0lBTSBDb25zb2xlMRIw
 EAYDVQQDEwlUZXN0Q2lsYWMxHzAdBgkqhkiG9w0BCQEWEG5vb25lQGFtYXpvbi5
 jb20wHhcNMTEwNDI1MjA0NTIxWhcNMTIwNDI0MjA0NTIxWjCBiDELMAkGA1UEBh
 MCVVMxCzAJBgNVBAgTAldBMRAwDgYDVQQHEwdTZWF0dGxlMQ8wDQYDVQQKEwZBb
 WF6b24xFDASBgNVBAsTC0lBTSBDb25zb2xlMRIwEAYDVQQDEwlUZXN0Q2lsYWMx
 HzAdBgkqhkiG9w0BCQEWEG5vb25lQGFtYXpvbi5jb20wgZ8wDQYJKoZIhvcNAQE
 BBQADgY0AMIGJAoGBAMaK0dn+a4GmWIWJ21uUSfwfEvySWtC2XADZ4nB+BLYgVI
 k60CpiwsZ3G93vUEIO3IyNoH/f0wYK8m9TrDHudUZg3qX4waLG5M43q7Wgc/MbQ
 ITxOUSQv7c7ugFFDzQGBzZswY6786m86gpEIbb3OhjZnzcvQAaRHhdlQWIMm2nr
 AgMBAAEwDQYJKoZIhvcNAQEFBQADgYEAtCu4nUhVVxYUntneD9+h8Mg9q6q+auN
 KyExzyLwaxlAoo7TJHidbtS4J5iNmZgXL0FkbFFBjvSfpJIlJ00zbhNYS5f6Guo
 EDmFJl0ZxBHjJnyp378OD8uTs7fLvjx79LjSTbNYiytVbZPQUQ5Yaxu2jXnimvw
 3rrszlaEXAMPLE=`,
                accessKeyId: "AKIAIOSFODNN7EXAMPLE"
            },
            continuationToken: "A continuation token if continuing job"
        }
    }
};

CodePipelineEvent["CodePipeline.job"].data.encryptionKey = { type: 'KMS', id: 'key' };

/* CloudFront events, see http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/lambda-event-structure.html */
const CloudFrontRequestWithCustomOriginEvent: AWSLambda.CloudFrontRequestEvent = {
  Records: [
    {
      cf: {
        config: {
          distributionDomainName: "d123.cloudfront.net",
          distributionId: "EDFDVBD6EXAMPLE",
          eventType: "viewer-request",
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
            }
          }
        }
      }
    }
  ]
};

const CloudFrontRequestWithS3OriginEvent: AWSLambda.CloudFrontRequestEvent = {
  Records: [
    {
      cf: {
        config: {
          distributionDomainName: "d123.cloudfront.net",
          distributionId: "EDFDVBD6EXAMPLE",
          eventType: "viewer-request",
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
                    distributionDomainName: "d123.cloudfront.net",
                    distributionId: "EDFDVBD6EXAMPLE",
                    eventType: "viewer-response",
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

/* Kinesis Data Stream Events */
declare let kinesisStreamEvent: AWSLambda.KinesisStreamEvent;
declare let kinesisStreamRecord: AWSLambda.KinesisStreamRecord;
declare let kinesisStreamRecordPayload: AWSLambda.KinesisStreamRecordPayload;

kinesisStreamRecord = kinesisStreamEvent.Records[0];

str = kinesisStreamRecord.awsRegion;
str = kinesisStreamRecord.eventID;
str = kinesisStreamRecord.eventName;
str = kinesisStreamRecord.eventSource;
str = kinesisStreamRecord.eventSourceARN;
str = kinesisStreamRecord.eventVersion;
str = kinesisStreamRecord.invokeIdentityArn;
kinesisStreamRecordPayload = kinesisStreamRecord.kinesis;

num = kinesisStreamRecordPayload.approximateArrivalTimestamp;
str = kinesisStreamRecordPayload.data;
str = kinesisStreamRecordPayload.kinesisSchemaVersion;
str = kinesisStreamRecordPayload.partitionKey;
str = kinesisStreamRecordPayload.sequenceNumber;

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
const handler: AWSLambda.Handler = (event: any, context: AWSLambda.Context, cb: AWSLambda.Callback) => { };

/* In node8.10 runtime, handlers may return a promise for the result value, so existing async
 * handlers that return Promise<void> before calling the callback will now have a `null` result.
 * Be safe and make that badly typed with a major verson bump to 8.10 so users expect the breaking change,
 * since the upgrade effort should be pretty low in most cases, and it points them at a nicer solution.
 */
// $ExpectError
const legacyAsyncHandler: AWSLambda.APIGatewayProxyHandler = async (
    event: AWSLambda.APIGatewayProxyEvent,
    context: AWSLambda.Context,
    cb: AWSLambda.Callback<AWSLambda.APIGatewayProxyResult>,
) => {
    cb(null, { statusCode: 200, body: 'No longer valid' });
};

const node8AsyncHandler: AWSLambda.APIGatewayProxyHandler = async (
    event: AWSLambda.APIGatewayProxyEvent,
    context: AWSLambda.Context,
    cb: AWSLambda.Callback<AWSLambda.APIGatewayProxyResult>,
) => {
    return { statusCode: 200, body: 'Is now valid!' };
};

const inferredHandler: AWSLambda.S3Handler = (event, context, cb) => {
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
const defaultCallbackHandler: AWSLambda.APIGatewayProxyHandler = (event: AWSLambda.APIGatewayEvent, context: AWSLambda.Context, cb: AWSLambda.Callback) => { };

// Specific types
let s3Handler: AWSLambda.S3Handler = (event: AWSLambda.S3Event, context: AWSLambda.Context, cb: AWSLambda.Callback<void>) => {};
// Test old name
const s3CreateHandler: AWSLambda.S3Handler = (event: AWSLambda.S3CreateEvent, context: AWSLambda.Context, cb: AWSLambda.Callback<void>) => {};
s3Handler = s3CreateHandler;

const dynamoDBStreamHandler: AWSLambda.DynamoDBStreamHandler = (event: AWSLambda.DynamoDBStreamEvent, context: AWSLambda.Context, cb: AWSLambda.Callback<void>) => {};

const snsHandler: AWSLambda.SNSHandler = (event: AWSLambda.SNSEvent, context: AWSLambda.Context, cb: AWSLambda.Callback<void>) => {};

const cognitoUserPoolHandler: AWSLambda.CognitoUserPoolTriggerHandler = (event: AWSLambda.CognitoUserPoolEvent, context: AWSLambda.Context, cb: AWSLambda.Callback<void>) => {};

const cloudFormationCustomResourceHandler: AWSLambda.CloudFormationCustomResourceHandler =
    (event: AWSLambda.CloudFormationCustomResourceEvent, context: AWSLambda.Context, cb: AWSLambda.Callback<void>) => {};

const cloudWatchLogsHandler: AWSLambda.CloudWatchLogsHandler = (event: AWSLambda.CloudWatchLogsEvent, context: AWSLambda.Context, cb: AWSLambda.Callback<void>) => {};

const scheduledHandler: AWSLambda.ScheduledHandler = (event: AWSLambda.ScheduledEvent, context: AWSLambda.Context, cb: AWSLambda.Callback<void>) => {};

let apiGtwProxyHandler: AWSLambda.APIGatewayProxyHandler = (event: AWSLambda.APIGatewayProxyEvent, context: AWSLambda.Context, cb: AWSLambda.APIGatewayProxyCallback) => { };
// Test old names
const proxyHandler: AWSLambda.ProxyHandler = (event: AWSLambda.APIGatewayEvent, context: AWSLambda.Context, cb: AWSLambda.ProxyCallback) => { };
apiGtwProxyHandler = proxyHandler;

const codePipelineHandler: AWSLambda.CodePipelineHandler = (event: AWSLambda.CodePipelineEvent, context: AWSLambda.Context, cb: AWSLambda.Callback<void>) => {};

const cloudFrontRequestHandler: AWSLambda.CloudFrontRequestHandler = (event: AWSLambda.CloudFrontRequestEvent, context: AWSLambda.Context, cb: AWSLambda.CloudFrontRequestCallback) => {
    event = CloudFrontRequestWithCustomOriginEvent;
    // $ExpectType CloudFrontRequestEvent
    event;
    let request = event.Records[0].cf.request;

    let s3Origin: AWSLambda.CloudFrontS3Origin = {
        authMethod: 'none',
        customHeaders: {},
        domainName: 'example.com',
        path: '/',
        region: 'us-east-1'
    };

    if (request.origin && request.origin.custom) {
        request.origin.custom.domainName;
        request.origin.custom.domainName = "example2.com";

        // $ExpectError
        s3Origin = request.origin.s3;

        // $ExpectError
        request.origin.s3.path = '/';
    }

    let customOrigin: AWSLambda.CloudFrontCustomOrigin = {
        customHeaders: {},
        domainName: 'example.com',
        keepaliveTimeout: 60,
        path: '/',
        port: 80,
        protocol: 'http',
        readTimeout: 30,
        sslProtocols: []
    };

    event = CloudFrontRequestWithS3OriginEvent;
    // $ExpectType CloudFrontRequestEvent
    event;
    request = event.Records[0].cf.request;
    if (request.origin && request.origin.s3) {
        request.origin.s3.path;
        request.origin.s3.path = "/new_path";

        // $ExpectError
        customOrigin = request.origin.custom;

        // $ExpectError
        request.origin.custom.path = '/';
    }

    cb();
    cb(null);
    cb(new Error(''));
    cb(null, { clientIp: str, method: str, uri: str, querystring: str, headers: { } });
    cb(null, { status: str });
    // $ExpectError
    cb(null, { });
};

const cloudFrontResponseHandler: AWSLambda.CloudFrontResponseHandler = (event: AWSLambda.CloudFrontResponseEvent, context: AWSLambda.Context, cb: AWSLambda.CloudFrontResponseCallback) => { };

const customAuthorizerHandler: AWSLambda.CustomAuthorizerHandler = (event: AWSLambda.CustomAuthorizerEvent, context: AWSLambda.Context, cb: AWSLambda.CustomAuthorizerCallback) => { };

interface CustomEvent { eventString: string; eventBool: boolean; }
interface CustomResult { resultString: string; resultBool?: boolean; }
type CustomCallback = AWSLambda.Callback<CustomResult>;
const customHandler: AWSLambda.Handler<CustomEvent, CustomResult> = (event, context, cb) => {
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

const kinesisStreamHandler: AWSLambda.KinesisStreamHandler = (event: AWSLambda.KinesisStreamEvent, context: AWSLambda.Context, cb: AWSLambda.Callback<void>) => { };

const SQSMessageHandler: AWSLambda.SQSHandler = (event: AWSLambda.SQSEvent, context: AWSLambda.Context, cb: AWSLambda.Callback<void>) => { };

// See https://docs.aws.amazon.com/lambda/latest/dg/eventsources.html#eventsources-sqs
const SQSEvent: AWSLambda.SQSEvent = {
    Records: [
        {
            messageId: "c80e8021-a70a-42c7-a470-796e1186f753",
            receiptHandle: "AQEBJQ+/u6NsnT5t8Q/VbVxgdUl4TMKZ5FqhksRdIQvLBhwNvADoBxYSOVeCBXdnS9P+",
            body: "{\"foo\":\"bar\"}",
            attributes: {
                ApproximateReceiveCount: "3",
                SentTimestamp: "1529104986221",
                SenderId: "594035263019",
                ApproximateFirstReceiveTimestamp: "1529104986230"
            },
            messageAttributes: {},
            md5OfBody: "9bb58f26192e4ba00f01e2e7b136bbd8",
            eventSource: "aws:sqs",
            eventSourceARN: "arn:aws:sqs:us-west-2:594035263019:NOTFIFOQUEUE",
            awsRegion: "us-west-2"
        }
    ]
};

const SQSMessageLegacyAsyncHandler: AWSLambda.SQSHandler = async (
    event: AWSLambda.SQSEvent,
    context: AWSLambda.Context,
    cb: AWSLambda.Callback<void>,
) => {
    // $ExpectType SQSEvent
    event;
    str = event.Records[0].messageId;
    anyObj = event.Records[0].body;
    // $ExpectType Context
    context;
    str = context.functionName;
    // $ExpectType Callback<void>
    cb;
    cb();
    cb(null);
    cb(new Error());
};

const SQSMessageNode8AsyncHandler: AWSLambda.SQSHandler = async (
    event: AWSLambda.SQSEvent,
    context: AWSLambda.Context
) => {
    // $ExpectType SQSEvent
    event;
    str = event.Records[0].messageId;
    anyObj = event.Records[0].body;
    // $ExpectType Context
    context;
    str = context.functionName;
    return;
};

const firehoseEventHandler: AWSLambda.FirehoseTransformationHandler = (
    event: AWSLambda.FirehoseTransformationEvent,
    context: AWSLambda.Context,
    callback: AWSLambda.FirehoseTransformationCallback
) => {
    // $ExpectType FirehoseTransformationEvent
    event;
    str = event.records[0].recordId;

    // $ExpectType Context
    context;
    str = context.functionName;
    callback(null, {
        records: [
            {
                recordId: event.records[0].recordId,
                result: 'Ok' as AWSLambda.FirehoseRecordTransformationStatus,
                data: 'eyJmb28iOiJiYXIifQ==',
            }
        ]
    });
};
