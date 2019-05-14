// Type definitions for AWS Lambda 8.10
// Project: http://docs.aws.amazon.com/lambda
// Definitions by: James Darbyshire <https://github.com/darbio/aws-lambda-typescript>
//                 Michael Skarum <https://github.com/skarum>
//                 Stef Heyenrath <https://github.com/StefH/DefinitelyTyped>
//                 Toby Hede <https://github.com/tobyhede>
//                 Rich Buggy <https://github.com/buggy>
//                 Yoriki Yamaguchi <https://github.com/y13i>
//                 wwwy3y3 <https://github.com/wwwy3y3>
//                 Ishaan Malhi <https://github.com/OrthoDex>
//                 Michael Marner <https://github.com/MichaelMarner>
//                 Daniel Cottone <https://github.com/daniel-cottone>
//                 Kostya Misura <https://github.com/kostya-misura>
//                 Markus Tacker <https://github.com/coderbyheart>
//                 Palmi Valgeirsson <https://github.com/palmithor>
//                 Danilo Raisi <https://github.com/daniloraisi>
//                 Simon Buchan <https://github.com/simonbuchan>
//                 David Hayden <https://github.com/Haydabase>
//                 Chris Redekop <https://github.com/repl-chris>
//                 Aneil Mallavarapu <https://github.com/aneilbaboo>
//                 Jeremy Nagel <https://github.com/jeznag>
//                 Louis Larry <https://github.com/louislarry>
//                 Daniel Papukchiev <https://github.com/dpapukchiev>
//                 Oliver Hookins <https://github.com/ohookins>
//                 Trevor Leach <https://github.com/trevor-leach>
//                 James Gregory <https://github.com/jagregory>
//                 Erik Dalén <https://github.com/dalen>
//                 Loïk Gaonac'h <https://github.com/loikg>
//                 Roberto Zen <https://github.com/skyzenr>
//                 Grzegorz Redlicki <https://github.com/redlickigrzegorz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

// API Gateway "event" request context
export interface APIGatewayEventRequestContext {
    accountId: string;
    apiId: string;
    authorizer?: AuthResponseContext | null;
    connectedAt?: number;
    connectionId?: string;
    domainName?: string;
    eventType?: string;
    extendedRequestId?: string;
    httpMethod: string;
    identity: {
        accessKey: string | null;
        accountId: string | null;
        apiKey: string | null;
        apiKeyId: string | null;
        caller: string | null;
        cognitoAuthenticationProvider: string | null;
        cognitoAuthenticationType: string | null;
        cognitoIdentityId: string | null;
        cognitoIdentityPoolId: string | null;
        sourceIp: string;
        user: string | null;
        userAgent: string | null;
        userArn: string | null;
    };
    messageDirection?: string;
    messageId?: string | null;
    path: string;
    stage: string;
    requestId: string;
    requestTime?: string;
    requestTimeEpoch: number;
    resourceId: string;
    resourcePath: string;
    routeKey?: string;
}

// API Gateway "event"
export interface APIGatewayProxyEvent {
    body: string | null;
    headers: { [name: string]: string };
    multiValueHeaders: { [name: string]: string[] };
    httpMethod: string;
    isBase64Encoded: boolean;
    path: string;
    pathParameters: { [name: string]: string } | null;
    queryStringParameters: { [name: string]: string } | null;
    multiValueQueryStringParameters: { [name: string]: string[] } | null;
    stageVariables: { [name: string]: string } | null;
    requestContext: APIGatewayEventRequestContext;
    resource: string;
}
export type APIGatewayEvent = APIGatewayProxyEvent; // Old name

// https://docs.aws.amazon.com/elasticloadbalancing/latest/application/lambda-functions.html
export interface ALBEventRequestContext {
    elb: {
        targetGroupArn: string;
    };
}
export interface ALBEvent {
    requestContext: ALBEventRequestContext;
    httpMethod: string;
    path: string;
    queryStringParameters?: { [parameter: string]: string }; // URL encoded
    headers?: { [header: string]: string };
    multiValueQueryStringParameters?: { [parameter: string]: string[] }; // URL encoded
    multiValueHeaders?: { [header: string]: string[] };
    body: string | null;
    isBase64Encoded: boolean;
}

// API Gateway CustomAuthorizer "event"
export interface CustomAuthorizerEvent {
    type: string;
    methodArn: string;
    authorizationToken?: string;
    resource?: string;
    path?: string;
    httpMethod?: string;
    headers?: { [name: string]: string };
    multiValueHeaders?: { [name: string]: string[] };
    pathParameters?: { [name: string]: string } | null;
    queryStringParameters?: { [name: string]: string } | null;
    multiValueQueryStringParameters?: { [name: string]: string[] } | null;
    stageVariables?: { [name: string]: string };
    requestContext?: APIGatewayEventRequestContext;
    domainName?: string;
    apiId?: string;
}

// Context
// http://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_streams_AttributeValue.html
export interface AttributeValue {
    B?: string;
    BS?: string[];
    BOOL?: boolean;
    L?: AttributeValue[];
    M?: { [id: string]: AttributeValue };
    N?: string;
    NS?: string[];
    NULL?: boolean;
    S?: string;
    SS?: string[];
}

// Context
// http://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_streams_StreamRecord.html
export interface StreamRecord {
    ApproximateCreationDateTime?: number;
    Keys?: { [key: string]: AttributeValue };
    NewImage?: { [key: string]: AttributeValue };
    OldImage?: { [key: string]: AttributeValue };
    SequenceNumber?: string;
    SizeBytes?: number;
    StreamViewType?: 'KEYS_ONLY' | 'NEW_IMAGE' | 'OLD_IMAGE' | 'NEW_AND_OLD_IMAGES';
}

// Context
// http://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_streams_Record.html
export interface DynamoDBRecord {
    awsRegion?: string;
    dynamodb?: StreamRecord;
    eventID?: string;
    eventName?: 'INSERT' | 'MODIFY' | 'REMOVE';
    eventSource?: string;
    eventSourceARN?: string;
    eventVersion?: string;
    userIdentity?: any;
}

// AWS Lambda Stream event
// Context
// http://docs.aws.amazon.com/lambda/latest/dg/eventsources.html#eventsources-ddb-update
export interface DynamoDBStreamEvent {
    Records: DynamoDBRecord[];
}

// SNS "event"
export interface SNSMessageAttribute {
    Type: string;
    Value: string;
}

export interface SNSMessageAttributes {
    [name: string]: SNSMessageAttribute;
}

export interface SNSMessage {
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

export interface SNSEventRecord {
    EventVersion: string;
    EventSubscriptionArn: string;
    EventSource: string;
    Sns: SNSMessage;
}

export interface SNSEvent {
    Records: SNSEventRecord[];
}

/**
 * S3Create event
 * https://docs.aws.amazon.com/AmazonS3/latest/dev/notification-content-structure.html
 */
export interface S3EventRecord {
    eventVersion: string;
    eventSource: string;
    awsRegion: string;
    eventTime: string;
    eventName: string;
    userIdentity: {
        principalId: string;
    };
    requestParameters: {
        sourceIPAddress: string;
    };
    responseElements: {
        'x-amz-request-id': string;
        'x-amz-id-2': string;
    };
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
    };
}

export interface S3Event {
    Records: S3EventRecord[];
}
export type S3CreateEvent = S3Event; // old name

/**
 * Cognito User Pool event
 * http://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-working-with-aws-lambda-triggers.html
 */
export interface CognitoUserPoolTriggerEvent {
    version: number;
    triggerSource:
    | "PreSignUp_SignUp"
    | "PostConfirmation_ConfirmSignUp"
    | "PreAuthentication_Authentication"
    | "PostAuthentication_Authentication"
    | "CustomMessage_SignUp"
    | "CustomMessage_AdminCreateUser"
    | "CustomMessage_ResendCode"
    | "CustomMessage_ForgotPassword"
    | "CustomMessage_UpdateUserAttribute"
    | "CustomMessage_VerifyUserAttribute"
    | "CustomMessage_Authentication"
    | "DefineAuthChallenge_Authentication"
    | "CreateAuthChallenge_Authentication"
    | "VerifyAuthChallengeResponse_Authentication"
    | "PreSignUp_AdminCreateUser"
    | "PostConfirmation_ConfirmForgotPassword"
    | "TokenGeneration_HostedAuth"
    | "TokenGeneration_Authentication"
    | "TokenGeneration_NewPasswordChallenge"
    | "TokenGeneration_AuthenticateDevice"
    | "TokenGeneration_RefreshTokens"
    | "UserMigration_Authentication"
    | "UserMigration_ForgotPassword";
    region: string;
    userPoolId: string;
    userName?: string;
    callerContext: {
        awsSdkVersion: string;
        clientId: string;
    };
    request: {
        userAttributes: { [key: string]: string };
        validationData?: { [key: string]: string };
        codeParameter?: string;
        usernameParameter?: string;
        newDeviceUsed?: boolean;
        session?: Array<{
            challengeName: "CUSTOM_CHALLENGE" | "PASSWORD_VERIFIER" | "SMS_MFA" | "DEVICE_SRP_AUTH" | "DEVICE_PASSWORD_VERIFIER" | "ADMIN_NO_SRP_AUTH";
            challengeResult: boolean;
            challengeMetadata?: string;
        }>;
        challengeName?: string;
        privateChallengeParameters?: { [key: string]: string };
        challengeAnswer?: string;
        password?: string;
    };
    response: {
        autoConfirmUser?: boolean;
        smsMessage?: string;
        emailMessage?: string;
        emailSubject?: string;
        challengeName?: string;
        issueTokens?: boolean;
        failAuthentication?: boolean;
        publicChallengeParameters?: { [key: string]: string };
        privateChallengeParameters?: { [key: string]: string };
        challengeMetadata?: string;
        answerCorrect?: boolean;
        userAttributes?: { [key: string]: string };
        finalUserStatus?: "CONFIRMED" | "RESET_REQUIRED";
        messageAction?: "SUPPRESS";
        desiredDeliveryMediums?: Array<"EMAIL" | "SMS">;
        forceAliasCreation?: boolean;
    };
}
export type CognitoUserPoolEvent = CognitoUserPoolTriggerEvent;

/**
 * CloudFormation Custom Resource event and response
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/crpg-ref.html
 */
export interface CloudFormationCustomResourceEventCommon {
    ServiceToken: string;
    ResponseURL: string;
    StackId: string;
    RequestId: string;
    LogicalResourceId: string;
    ResourceType: string;
    ResourceProperties: {
        ServiceToken: string;
        [Key: string]: any;
    };
}

export interface CloudFormationCustomResourceCreateEvent extends CloudFormationCustomResourceEventCommon {
    RequestType: "Create";
}

export interface CloudFormationCustomResourceUpdateEvent extends CloudFormationCustomResourceEventCommon {
    RequestType: "Update";
    PhysicalResourceId: string;
    OldResourceProperties: {
        [Key: string]: any;
    };
}

export interface CloudFormationCustomResourceDeleteEvent extends CloudFormationCustomResourceEventCommon {
    RequestType: "Delete";
    PhysicalResourceId: string;
}

export type CloudFormationCustomResourceEvent = CloudFormationCustomResourceCreateEvent | CloudFormationCustomResourceUpdateEvent | CloudFormationCustomResourceDeleteEvent;

export interface CloudFormationCustomResourceResponseCommon {
    PhysicalResourceId: string;
    StackId: string;
    RequestId: string;
    LogicalResourceId: string;
    Data?: {
        [Key: string]: any;
    };
}

export interface CloudFormationCustomResourceSuccessResponse extends CloudFormationCustomResourceResponseCommon {
    Status: "SUCCESS";
    Reason?: string;
}

export interface CloudFormationCustomResourceFailedResponse extends CloudFormationCustomResourceResponseCommon {
    Status: "FAILED";
    Reason: string;
}

export type CloudFormationCustomResourceResponse = CloudFormationCustomResourceSuccessResponse | CloudFormationCustomResourceFailedResponse;

/**
 * See https://docs.aws.amazon.com/lambda/latest/dg/eventsources.html#eventsources-scheduled-event
 */
export interface ScheduledEvent {
    account: string;
    region: string;
    detail: any;
    "detail-type": string;
    source: string;
    time: string;
    id: string;
    resources: string[];
}

/**
 * See http://docs.aws.amazon.com/lambda/latest/dg/eventsources.html#eventsources-cloudwatch-logs
 */
export interface CloudWatchLogsEvent {
    awslogs: CloudWatchLogsEventData;
}

export interface CloudWatchLogsEventData {
    data: string;
}

export interface CloudWatchLogsDecodedData {
    owner: string;
    logGroup: string;
    logStream: string;
    subscriptionFilters: string[];
    messageType: string;
    logEvents: CloudWatchLogsLogEvent[];
}

/**
 * See http://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/SubscriptionFilters.html#LambdaFunctionExample
 */
export interface CloudWatchLogsLogEvent {
    id: string;
    timestamp: number;
    message: string;
    extractedFields?: {[key: string]: string};
}

// Context
// http://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-context.html
export interface Context {
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
    fail(error: Error | string): void;
    succeed(messageOrObject: any): void;
    succeed(message: string, object: any): void;
}

export interface CognitoIdentity {
    cognitoIdentityId: string;
    cognitoIdentityPoolId: string;
}

export interface ClientContext {
    client: ClientContextClient;
    custom?: any;
    env: ClientContextEnv;
}

export interface ClientContextClient {
    installationId: string;
    appTitle: string;
    appVersionName: string;
    appVersionCode: string;
    appPackageName: string;
}

export interface ClientContextEnv {
    platformVersion: string;
    platform: string;
    make: string;
    model: string;
    locale: string;
}

export interface APIGatewayProxyResult {
    statusCode: number;
    headers?: {
        [header: string]: boolean | number | string;
    };
    multiValueHeaders?: {
        [header: string]: Array<boolean | number | string>;
    };
    body: string;
    isBase64Encoded?: boolean;
}
export type ProxyResult = APIGatewayProxyResult; // Old name

export interface ALBResult {
    statusCode: number;
    statusDescription: string;
    headers?: { [header: string]: boolean | number | string };
    multiValueHeaders?: { [header: string]: Array<boolean | number | string> };
    body: string;
    isBase64Encoded: boolean;
}

/**
 * API Gateway CustomAuthorizer AuthResponse.
 * http://docs.aws.amazon.com/apigateway/latest/developerguide/use-custom-authorizer.html#api-gateway-custom-authorizer-output
 */
export interface CustomAuthorizerResult {
    principalId: string;
    policyDocument: PolicyDocument;
    context?: AuthResponseContext;
    usageIdentifierKey?: string;
}
export type AuthResponse = CustomAuthorizerResult;

/**
 * API Gateway CustomAuthorizer AuthResponse.PolicyDocument.
 * https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-lambda-authorizer-output.html
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements.html#Condition
 */
export interface PolicyDocument {
    Version: string;
    Id?: string;
    Statement: Statement[];
}

/**
 * API Gateway CustomAuthorizer AuthResponse.PolicyDocument.Condition.
 * https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-control-access-policy-language-overview.html
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition.html
 */
export interface ConditionBlock {
    [condition: string]: Condition | Condition[];
}

export interface Condition {
    [key: string]: string | string[];
}

/**
 * API Gateway CustomAuthorizer AuthResponse.PolicyDocument.Statement.
 * https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-control-access-policy-language-overview.html
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements.html
 */
export type Statement = BaseStatement & StatementAction & (StatementResource | StatementPrincipal);

export interface BaseStatement {
    Effect: string;
    Sid?: string;
    Condition?: ConditionBlock;
}

export type PrincipalValue = { [key: string]: string | string[]; } | string | string[];
export interface MaybeStatementPrincipal {
    Principal?: PrincipalValue;
    NotPrincipal?: PrincipalValue;
}
export interface MaybeStatementResource {
    Resource?: string | string[];
    NotResource?: string | string[];
}
export type StatementAction = { Action: string | string[] } | { NotAction: string | string[] };
export type StatementResource = MaybeStatementPrincipal & ({ Resource: string | string[] } | { NotResource: string | string[] });
export type StatementPrincipal = MaybeStatementResource & ({ Principal: PrincipalValue } | { NotPrincipal: PrincipalValue });
/**
 * API Gateway CustomAuthorizer AuthResponse.PolicyDocument.Statement.
 * http://docs.aws.amazon.com/apigateway/latest/developerguide/use-custom-authorizer.html#api-gateway-custom-authorizer-output
 */
export interface AuthResponseContext {
    [name: string]: any;
}

/**
 * CodePipeline events
 * https://docs.aws.amazon.com/codepipeline/latest/userguide/actions-invoke-lambda-function.html
 */
export interface S3ArtifactLocation {
    bucketName: string;
    objectKey: string;
}
export interface S3ArtifactStore {
    type: 'S3';
    s3Location: S3ArtifactLocation;
}

export type ArtifactLocation = S3ArtifactStore;

export interface Artifact {
    name: string;
    revision: string | null;
    location: ArtifactLocation;
}

export interface Credentials {
    accessKeyId: string;
    secretAccessKey: string;
    sessionToken?: string;
}

export interface EncryptionKey {
    type: string;
    id: string;
}

export interface CodePipelineEvent {
    "CodePipeline.job": {
        id: string;
        accountId: string;
        data: {
            actionConfiguration: {
                configuration: {
                    FunctionName: string;
                    UserParameters: string;
                }
            };
            inputArtifacts: Artifact[];
            outputArtifacts: Artifact[];
            artifactCredentials: Credentials;
            encryptionKey?: EncryptionKey & { type: 'KMS' };
            continuationToken?: string;
        };
    };
}

/**
 * CodePipeline CloudWatch Events
 * https://docs.aws.amazon.com/codepipeline/latest/userguide/detect-state-changes-cloudwatch-events.html
 *
 * The above CodePipelineEvent is when a lambda is invoked by a CodePipeline.
 * These events are when you subsribe to CodePipeline events in CloudWatch.
 *
 * Their documentation says that detail.version is a string, but it is actually an integer
 */
export type CodePipelineState =
    | 'STARTED'
    | 'SUCCEEDED'
    | 'RESUMED'
    | 'FAILED'
    | 'CANCELED'
    | 'SUPERSEDED';

export type CodePipelineStageState =
    | 'STARTED'
    | 'SUCCEEDED'
    | 'RESUMED'
    | 'FAILED'
    | 'CANCELED';

export type CodePipelineActionState =
    | 'STARTED'
    | 'SUCCEEDED'
    | 'FAILED'
    | 'CANCELED';

export interface CodePipelineCloudWatchPipelineEvent {
    version: string;
    id: string;
    'detail-type': 'CodePipeline Pipeline Execution State Change';
    source: 'aws.codepipeline';
    account: string;
    time: string;
    region: string;
    resources: string[];
    detail: {
        pipeline: string;
        version: number;
        state: CodePipelineState;
        'execution-id': string;
    };
}

export interface CodePipelineCloudWatchStageEvent {
    version: string;
    id: string;
    'detail-type': 'CodePipeline Stage Execution State Change';
    source: 'aws.codepipeline';
    account: string;
    time: string;
    region: string;
    resources: string[];
    detail: {
        pipeline: string;
        version: number;
        'execution-id': string;
        stage: string;
        state: CodePipelineStageState;
    };
}

export type CodePipelineActionCategory =
    | 'Approval'
    | 'Build'
    | 'Deploy'
    | 'Invoke'
    | 'Source'
    | 'Test';

export interface CodePipelineCloudWatchActionEvent {
    version: string;
    id: string;
    'detail-type': 'CodePipeline Action Execution State Change';
    source: 'aws.codepipeline';
    account: string;
    time: string;
    region: string;
    resources: string[];
    detail: {
        pipeline: string;
        version: number;
        'execution-id': string;
        stage: string;
        action: string;
        state: CodePipelineActionState;
        type: {
            owner: 'AWS' | 'Custom' | 'ThirdParty';
            category: CodePipelineActionCategory;
            provider: string;
            version: number;
        };
    };
}

export type CodePipelineCloudWatchEvent =
    | CodePipelineCloudWatchPipelineEvent
    | CodePipelineCloudWatchStageEvent
    | CodePipelineCloudWatchActionEvent;

/**
 * CloudFront events
 * http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/lambda-event-structure.html
 * Bear in mind that the "example" event structure in the page above includes
 * both an S3 and a Custom origin, which is not strictly allowed. Only one
 * of these per event may be present.
 */
export interface CloudFrontHeaders {
    [name: string]: Array<{
        key?: string;
        value: string;
    }>;
}

export type CloudFrontOrigin =
    | { s3: CloudFrontS3Origin, custom?: never }
    | { custom: CloudFrontCustomOrigin, s3?: never };

export interface CloudFrontCustomOrigin {
    customHeaders: CloudFrontHeaders;
    domainName: string;
    keepaliveTimeout: number;
    path: string;
    port: number;
    protocol: 'http' | 'https';
    readTimeout: number;
    sslProtocols: string[];
}

export interface CloudFrontS3Origin {
    authMethod: 'origin-access-identity' | 'none';
    customHeaders: CloudFrontHeaders;
    domainName: string;
    path: string;
    region: string;
}

export interface CloudFrontResponse {
    status: string;
    statusDescription: string;
    headers: CloudFrontHeaders;
}

export interface CloudFrontRequest {
    clientIp: string;
    method: string;
    uri: string;
    querystring: string;
    headers: CloudFrontHeaders;
    origin?: CloudFrontOrigin;
}

export interface CloudFrontEvent {
    config: {
        distributionDomainName: string;
        distributionId: string;
        eventType: 'origin-request' | 'origin-response' | 'viewer-request' | 'viewer-response';
        requestId: string;
    };
}

// https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/lambda-generating-http-responses.html#lambda-generating-http-responses-object
export interface CloudFrontResultResponse {
    status: string;
    statusDescription?: string;
    headers?: CloudFrontHeaders;
    bodyEncoding?: 'text' | 'base64';
    body?: string;
}

export interface CloudFrontResponseEvent {
    Records: Array<{
        cf: CloudFrontEvent & {
            request: CloudFrontRequest;
            response: CloudFrontResponse;
        }
    }>;
}

export type CloudFrontRequestResult = undefined | null | CloudFrontResultResponse | CloudFrontRequest;

export interface CloudFrontRequestEvent {
    Records: Array<{
        cf: CloudFrontEvent & {
            request: CloudFrontRequest;
        }
    }>;
}

export type CloudFrontResponseResult = undefined | null | CloudFrontResultResponse;

// Kinesis Streams
// https://docs.aws.amazon.com/lambda/latest/dg/eventsources.html#eventsources-kinesis-streams
export interface KinesisStreamRecordPayload {
    approximateArrivalTimestamp: number;
    data: string;
    kinesisSchemaVersion: string;
    partitionKey: string;
    sequenceNumber: string;
}

export interface KinesisStreamRecord {
    awsRegion: string;
    eventID: string;
    eventName: string;
    eventSource: string;
    eventSourceARN: string;
    eventVersion: string;
    invokeIdentityArn: string;
    kinesis: KinesisStreamRecordPayload;
}

export interface KinesisStreamEvent {
    Records: KinesisStreamRecord[];
}

// Kinesis Data Firehose Event
// https://docs.aws.amazon.com/lambda/latest/dg/eventsources.html#eventsources-kinesis-firehose
// https://docs.aws.amazon.com/firehose/latest/dev/data-transformation.html
// https://aws.amazon.com/blogs/compute/amazon-kinesis-firehose-data-transformation-with-aws-lambda/
// Examples in the lambda blueprints
export interface FirehoseTransformationEvent {
    invocationId: string;
    deliveryStreamArn: string;
    region: string;
    records: FirehoseTransformationEventRecord[];
}

export interface FirehoseTransformationEventRecord {
    recordId: string;
    approximateArrivalTimestamp: number;
    /** Base64 encoded */
    data: string;
    kinesisRecordMetadata?: FirehoseRecordMetadata;
}

export interface FirehoseRecordMetadata {
    shardId: string;
    partitionKey: string;
    approximateArrivalTimestamp: string;
    sequenceNumber: string;
    subsequenceNumber: string;
}

export type FirehoseRecordTransformationStatus = 'Ok' | 'Dropped' | 'ProcessingFailed';

export interface FirehoseTransformationResultRecord {
    recordId: string;
    result: FirehoseRecordTransformationStatus;
    /** Encode in Base64 */
    data: string;
}

export interface FirehoseTransformationResult {
    records: FirehoseTransformationResultRecord[];
}

// SQS
// https://docs.aws.amazon.com/lambda/latest/dg/invoking-lambda-function.html#supported-event-source-sqs
export interface SQSRecord {
    messageId: string;
    receiptHandle: string;
    body: string;
    attributes: SQSRecordAttributes;
    messageAttributes: SQSMessageAttributes;
    md5OfBody: string;
    eventSource: string;
    eventSourceARN: string;
    awsRegion: string;
}

export interface SQSEvent {
    Records: SQSRecord[];
}

export interface SQSRecordAttributes {
    ApproximateReceiveCount: string;
    SentTimestamp: string;
    SenderId: string;
    ApproximateFirstReceiveTimestamp: string;
}

export type SQSMessageAttributeDataType = 'String' | 'Number' | 'Binary' | string;

export interface SQSMessageAttribute {
    stringValue?: string;
    binaryValue?: string;
    stringListValues: never[]; // Not implemented. Reserved for future use.
    binaryListValues: never[]; // Not implemented. Reserved for future use.
    dataType: SQSMessageAttributeDataType;
}

export interface SQSMessageAttributes {
    [name: string]: SQSMessageAttribute;
}

// Lex
// https://docs.aws.amazon.com/lambda/latest/dg/invoking-lambda-function.html#supported-event-source-lex
export interface LexEvent {
    currentIntent: {
        name: string;
        slots: { [name: string]: string | null };
        slotDetails: LexSlotDetails;
        confirmationStatus: 'None' | 'Confirmed' | 'Denied';
    };
    bot: {
        name: string;
        alias: string;
        version: string;
    };
    userId: string;
    inputTranscript: string;
    invocationSource: 'DialogCodeHook' | 'FulfillmentCodeHook';
    outputDialogMode: 'Text' | 'Voice';
    messageVersion: '1.0';
    sessionAttributes: { [key: string]: string };
    requestAttributes: { [key: string]: string } | null;
}

export interface LexSlotResolution {
    value: string;
}

export interface LexSlotDetails {
    [name: string]: {
        // The following line only works in TypeScript Version: 3.0, The array should have at least 1 and no more than 5 items
        // resolutions: [LexSlotResolution, LexSlotResolution?, LexSlotResolution?, LexSlotResolution?, LexSlotResolution?];
        resolutions: LexSlotResolution[]
        originalValue: string;
    };
}

export interface LexGenericAttachment {
    title: string;
    subTitle: string;
    imageUrl: string;
    attachmentLinkUrl: string;
    buttons: Array<{
        text: string;
        value: string;
    }>;
}

export interface LexDialogActionBase {
    type: 'Close' | 'ElicitIntent' | 'ElicitSlot' | 'ConfirmIntent';
    message?: {
        contentType: 'PlainText' | 'SSML' | 'CustomPayload';
        content: string;
    };
    responseCard?: {
        version: number;
        contentType: 'application/vnd.amazonaws.card.generic';
        genericAttachments: LexGenericAttachment[];
    };
}

export interface LexDialogActionClose extends LexDialogActionBase {
    type: 'Close';
    fulfillmentState: 'Fulfilled' | 'Failed';
}

export interface LexDialogActionElicitIntent extends LexDialogActionBase {
    type: 'ElicitIntent';
}

export interface LexDialogActionElicitSlot extends LexDialogActionBase {
    type: 'ElicitSlot';
    intentName: string;
    slots: { [name: string]: string | null };
    slotToElicit: string;
}

export interface LexDialogActionConfirmIntent extends LexDialogActionBase {
    type: 'ConfirmIntent';
    intentName: string;
    slots: { [name: string]: string | null };
}

export interface LexDialogActionDelegate {
    type: 'Delegate';
    slots: { [name: string]: string | null };
}

export type LexDialogAction = LexDialogActionClose | LexDialogActionElicitIntent | LexDialogActionElicitSlot | LexDialogActionConfirmIntent | LexDialogActionDelegate;

export interface LexResult {
    sessionAttributes?: { [key: string]: string };
    dialogAction: LexDialogAction;
}

/**
 * AWS Lambda handler function.
 * http://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-handler.html
 *
 * @param event – event data.
 * @param context – runtime information of the Lambda function that is executing.
 * @param callback – optional callback to return information to the caller, otherwise return value is null.
 * @return In the node8.10 runtime, a promise for the lambda result.
 */
export type Handler<TEvent = any, TResult = any> = (
    event: TEvent,
    context: Context,
    callback: Callback<TResult>,
) => void | Promise<TResult>;

/**
 * Optional callback parameter.
 * http://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-handler.html
 *
 * @param error – an optional parameter that you can use to provide results of the failed Lambda function execution.
 *                It can be a string for Lambda Proxy Integrations
 *                https://docs.aws.amazon.com/apigateway/latest/developerguide/handle-errors-in-lambda-integration.html
 * @param result – an optional parameter that you can use to provide the result of a successful function execution. The result provided must be JSON.stringify compatible.
 */
export type Callback<TResult = any> = (error?: Error | null | string, result?: TResult) => void;

// Begin defining Handler and Callback types for each API trigger type.
// Ordered by https://docs.aws.amazon.com/lambda/latest/dg/invoking-lambda-function.html
// though that list is incomplete.

export type S3Handler = Handler<S3Event, void>;

export type DynamoDBStreamHandler = Handler<DynamoDBStreamEvent, void>;

export type SNSHandler = Handler<SNSEvent, void>;

// No SESHandler: SES event source is delivered as SNS notifications
// https://docs.aws.amazon.com/lambda/latest/dg/invoking-lambda-function.html#supported-event-source-ses

// Result type is weird: docs and samples say to return the mutated event, but it only requires an object
// with a "response" field, the type of which is specific to the event.triggerType. Leave as any for now.
export type CognitoUserPoolTriggerHandler = Handler<CognitoUserPoolTriggerEvent>;
// TODO: Different event/handler types for each event trigger so we can type the result?

export type SQSHandler = Handler<SQSEvent, void>;

// TODO: CognitoSync

export type CloudFormationCustomResourceHandler = Handler<CloudFormationCustomResourceEvent, void>;

// TODO: CloudWatchEvents

export type CloudWatchLogsHandler = Handler<CloudWatchLogsEvent, void>;

// TODO: CodeCommit

export type ScheduledHandler = Handler<ScheduledEvent, void>;

// TODO: AWS Config

// TODO: Alexa

export type LexHandler = Handler<LexEvent, LexResult>;
export type LexCallback = Callback<LexResult>;

export type APIGatewayProxyHandler = Handler<APIGatewayProxyEvent, APIGatewayProxyResult>;
export type APIGatewayProxyCallback = Callback<APIGatewayProxyResult>;
export type ProxyHandler = APIGatewayProxyHandler; // Old name
export type ProxyCallback = APIGatewayProxyCallback; // Old name

export type ALBHandler = Handler<ALBEvent, ALBResult>;
export type ALBCallback = Callback<ALBResult>;

// TODO: IoT

export type CodePipelineHandler = Handler<CodePipelineEvent, void>;

export type CodePipelineCloudWatchHandler = Handler<CodePipelineCloudWatchEvent, void>;
export type CodePipelineCloudWatchPipelineHandler = Handler<CodePipelineCloudWatchPipelineEvent, void>;
export type CodePipelineCloudWatchStageHandler = Handler<CodePipelineCloudWatchStageEvent, void>;
export type CodePipelineCloudWatchActionHandler = Handler<CodePipelineCloudWatchActionEvent, void>;

export type CloudFrontRequestHandler = Handler<CloudFrontRequestEvent, CloudFrontRequestResult>;
export type CloudFrontRequestCallback = Callback<CloudFrontRequestResult>;

export type CloudFrontResponseHandler = Handler<CloudFrontResponseEvent, CloudFrontResponseResult>;
export type CloudFrontResponseCallback = Callback<CloudFrontResponseResult>;

export type KinesisStreamHandler = Handler<KinesisStreamEvent, void>;

export type FirehoseTransformationCallback = Callback<FirehoseTransformationResult>;
export type FirehoseTransformationHandler = Handler<FirehoseTransformationEvent, FirehoseTransformationResult>;

export type CustomAuthorizerHandler = Handler<CustomAuthorizerEvent, CustomAuthorizerResult>;
export type CustomAuthorizerCallback = Callback<CustomAuthorizerResult>;

export as namespace AWSLambda;
