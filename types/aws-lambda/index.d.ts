// Type definitions for AWS Lambda
// Project: http://docs.aws.amazon.com/lambda
// Definitions by: James Darbyshire <https://github.com/darbio/aws-lambda-typescript>, Michael Skarum <https://github.com/skarum>, Stef Heyenrath <https://github.com/StefH/DefinitelyTyped>, Toby Hede <https://github.com/tobyhede>, Rich Buggy <https://github.com/buggy>, Yoriki Yamaguchi <https://github.com/y13i>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// API Gateway "event"
interface APIGatewayEvent {
    body: string | null;
    headers: { [name: string]: string };
    httpMethod: string;
    isBase64Encoded: boolean;
    path: string;
    pathParameters: { [name: string]: string } | null;
    queryStringParameters: { [name: string]: string } | null;
    stageVariables: { [name: string]: string } | null;
    requestContext: {
        accountId: string;
        apiId: string;
        httpMethod: string;
        identity: {
            accessKey: string | null;
            accountId: string | null;
            apiKey: string | null;
            caller: string | null;
            cognitoAuthenticationProvider: string | null;
            cognitoAuthenticationType: string | null;
            cognitoIdentityId: string | null;
            cognitoIdentityPoolId: string | null;
            sourceIp: string;
            user: string | null;
            userAgent: string | null;
            userArn: string | null;
        },
        stage: string;
        requestId: string;
        resourceId: string;
        resourcePath: string;
    };
    resource: string;
}

// API Gateway CustomAuthorizer "event"
interface CustomAuthorizerEvent {
    type: string;
    authorizationToken: string;
    methodArn: string;
}

// SNS "event"
interface SNSMessageAttribute {
    Type: string;
    Value: string;
}

interface SNSMessageAttributes {
    [name: string]: SNSMessageAttribute;
}

interface SNSMessage {
    SignatureVersion: string;
    Timestamp: string;
    Signature: string;
    SigningCertUrl: string;
    MessageId: string;
    Message: string;
    MessageAttributes: SNSMessageAttributes;
    Type: string;
    UnsubscribeUrl: string;
    TopicArn: string;
    Subject: string;
}

interface SNSEventRecord {
    EventVersion: string;
    EventSubscriptionArn: string;
    EventSource: string;
    Sns: SNSMessage;
}

interface SNSEvent {
    Records: Array<SNSEventRecord>;
}

/**
 * S3Create event
 * https://docs.aws.amazon.com/AmazonS3/latest/dev/notification-content-structure.html
 */
interface S3CreateEvent {
    Records: [{
        eventVersion: string;
        eventSource: string;
        awsRegion: string
        eventTime: string;
        eventName: string;
        userIdentity: {
            principalId: string;
        },
        requestParameters: {
            sourceIPAddress: string;
        },
        responseElements: {
            'x-amz-request-id': string;
            'x-amz-id-2': string;
        },
        s3: {
            s3SchemaVersion: string;
            configurationId: string;
            bucket: {
                name: string;
                ownerIdentity: {
                    principalId: string;
                },
                arn: string;
            },
            object: {
                key: string;
                size: number;
                eTag: string;
                versionId: string;
                sequencer: string;
            }
        }
    }
    ];
}

/**
 * Cognito User Pool event
 * http://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-working-with-aws-lambda-triggers.html
 */
interface CognitoUserPoolEvent {
    version: number;
    triggerSource: "PreSignUp_SignUp" | "PostConfirmation_ConfirmSignUp" | "PreAuthentication_Authentication" | "PostAuthentication_Authentication" | "CustomMessage_SignUp" | "CustomMessage_AdminCreateUser" | "CustomMessage_ResendCode" | "CustomMessage_ForgotPassword" | "CustomMessage_UpdateUserAttribute" | "CustomMessage_VerifyUserAttribute" | "CustomMessage_Authentication" | "DefineAuthChallenge_Authentication" | "CreateAuthChallenge_Authentication" | "VerifyAuthChallengeResponse_Authentication";
    region: string;
    userPoolId: string;
    userName?: string;
    callerContext: {
        awsSdkVersion: string;
        clientId: string;
    };
    request: {
        userAttributes: {[key: string]: string};
        validationData?: {[key: string]: string};
        codeParameter?: string;
        usernameParameter?: string;
        newDeviceUsed?: boolean;
        session?: {
            challengeName: "CUSTOM_CHALLENGE" | "PASSWORD_VERIFIER" | "SMS_MFA" | "DEVICE_SRP_AUTH" | "DEVICE_PASSWORD_VERIFIER" | "ADMIN_NO_SRP_AUTH";
            challengeResult: boolean;
            challengeMetaData?: string;
        }[];
        challengeName?: string;
        privateChallengeParameters?: {[key: string]: string};
        challengeAnswer?: {[key: string]: string};
    };
    response: {
        autoConfirmUser?: boolean;
        smsMessage?: string;
        emailMessage?: string;
        emailSubject?: string;
        challengeName?: string;
        issueTokens?: boolean;
        failAuthentication?: boolean;
        publicChallengeParameters?: {[key: string]: string};
        privateChallengeParameters?: {[key: string]: string};
        challengeMetaData?: string;
        answerCorrect?: boolean;
    };
}

// Context
// http://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-context.html
interface Context {
    // Properties
    callbackWaitsForEmptyEventLoop: boolean;
    functionName: string;
    functionVersion: string;
    invokedFunctionArn: string;
    memoryLimitInMB: number;
    awsRequestId: string;
    logGroupName: string;
    logStreamName: string;
    identity?: CognitoIdentity;
    clientContext?: ClientContext;

    // Functions
    getRemainingTimeInMillis(): number;

    // Functions for compatibility with earlier Node.js Runtime v0.10.42
    // For more details see http://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-using-old-runtime.html#nodejs-prog-model-oldruntime-context-methods
    done(error?: Error, result?: any): void;
    fail(error: Error): void;
    fail(message: string): void;
    succeed(message: string): void;
    succeed(object: any): void;
    succeed(message: string, object: any): void;
}

interface CognitoIdentity {
    cognitoIdentityId: string;
    cognitoIdentityPoolId: string;
}

interface ClientContext {
    client: ClientContextClient;
    Custom?: any;
    env: ClientContextEnv;
}

interface ClientContextClient {
    installationId: string;
    appTitle: string;
    appVersionName: string;
    appVersionCode: string;
    appPackageName: string;
}

interface ClientContextEnv {
    platformVersion: string;
    platform: string;
    make: string;
    model: string;
    locale: string;
}

interface ProxyResult {
    statusCode: number;
    headers?: {
        [header: string]: boolean | number | string;
    },
    body: string;
}

/**
 * API Gateway CustomAuthorizer AuthResponse.
 * http://docs.aws.amazon.com/apigateway/latest/developerguide/use-custom-authorizer.html#api-gateway-custom-authorizer-output
 */
interface AuthResponse {
    principalId: string;
    policyDocument: PolicyDocument;
    context?: AuthResponseContext;
}

/**
 * API Gateway CustomAuthorizer AuthResponse.PolicyDocument.
 * http://docs.aws.amazon.com/apigateway/latest/developerguide/use-custom-authorizer.html#api-gateway-custom-authorizer-output
 */
interface PolicyDocument {
    Version: string;
    Statement: [Statement];
}

/**
 * API Gateway CustomAuthorizer AuthResponse.PolicyDocument.Statement.
 * http://docs.aws.amazon.com/apigateway/latest/developerguide/use-custom-authorizer.html#api-gateway-custom-authorizer-output
 */
interface Statement {
    Action: string | [string];
    Effect: string;
    Resource: string | [string];
}

/**
 * API Gateway CustomAuthorizer AuthResponse.PolicyDocument.Statement.
 * http://docs.aws.amazon.com/apigateway/latest/developerguide/use-custom-authorizer.html#api-gateway-custom-authorizer-output
 */
interface AuthResponseContext {
    [name: string]: string | number | boolean;
}

/**
 * AWS Lambda handler function.
 * http://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-handler.html
 *
 * @param event – event data.
 * @param context – runtime information of the Lambda function that is executing.
 * @param callback – optional callback to return information to the caller, otherwise return value is null.
 */
export type Handler = (event: any, context: Context, callback?: Callback) => void;
export type ProxyHandler = (event: APIGatewayEvent, context: Context, callback?: ProxyCallback) => void;
export type CustomAuthorizerHandler = (event: CustomAuthorizerEvent, context: Context, callback?: CustomAuthorizerCallback) => void;

/**
 * Optional callback parameter.
 * http://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-handler.html
 *
 * @param error – an optional parameter that you can use to provide results of the failed Lambda function execution.
 * @param result – an optional parameter that you can use to provide the result of a successful function execution. The result provided must be JSON.stringify compatible.
 */
export type Callback = (error?: Error, result?: any) => void;
export type ProxyCallback = (error?: Error, result?: ProxyResult) => void;
export type CustomAuthorizerCallback = (error?: Error, result?: AuthResponse) => void;

export as namespace AWSLambda;
