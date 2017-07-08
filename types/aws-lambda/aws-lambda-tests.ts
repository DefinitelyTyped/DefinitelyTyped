var str: string = "any string";
var date: Date = new Date();
var anyObj: any = { abc: 123 };
var num: number = 5;
var error: Error = new Error();
var b: boolean = true;
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
var S3CreateEvent: AWSLambda.S3CreateEvent = {
    Records: [{
        eventVersion: 'string',
        eventSource: 'string',
        awsRegion: 'string',
        eventTime: 'string',
        eventName: 'string',
        userIdentity: {
            principalId: 'string'
        },
        requestParameters: {
            sourceIPAddress: 'string'
        },
        responseElements: {
            'x-amz-request-id': 'string',
            'x-amz-id-2': 'string'
        },
        s3: {
            s3SchemaVersion: 'string',
            configurationId: 'string',
            bucket: {
                name: 'string',
                ownerIdentity: {
                    principalId: 'string'
                },
                arn: 'string'
            },
            object: {
                key: 'string',
                size: 1,
                eTag: 'string',
                versionId: 'string',
                sequencer: 'string'
            }
        }
    }
    ]
};
var cognitoUserPoolEvent: AWSLambda.CognitoUserPoolEvent;
var cloudformationCustomResourceEvent: AWSLambda.CloudFormationCustomResourceEvent;
var cloudformationCustomResourceResponse: AWSLambda.CloudFormationCustomResourceResponse;

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

/* API Gateway CustomAuthorizer Event */
str = customAuthorizerEvt.type;
str = customAuthorizerEvt.authorizationToken;
str = customAuthorizerEvt.methodArn;

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
cognitoUserPoolEvent.triggerSource === "VerifyAuthChallengeResponse_Authentication";
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
cognitoUserPoolEvent.request.session[0].challengeName === "DEVICE_PASSWORD_VERIFIER";
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

/* CustomAuthorizerCallback */
function customAuthorizerCallback(cb: AWSLambda.CustomAuthorizerCallback) {
    cb();
    cb(null);
    cb(error);
    cb(null, authResponse);
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
let handler: AWSLambda.Handler = (event: any, context: AWSLambda.Context, cb: AWSLambda.Callback) => { };
let proxyHandler: AWSLambda.ProxyHandler = (event: AWSLambda.APIGatewayEvent, context: AWSLambda.Context, cb: AWSLambda.ProxyCallback) => { };
let CustomAuthorizerHandler: AWSLambda.CustomAuthorizerHandler = (event: AWSLambda.CustomAuthorizerEvent, context: AWSLambda.Context, cb: AWSLambda.CustomAuthorizerCallback) => { };
