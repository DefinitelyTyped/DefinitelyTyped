// Type definitions for Serverless.com Serverless Framework
// Project: http://serverless.com/
// Definitions by: Jake Thompson <https://github.com/jatsrt>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = Serverless;
export as namespace Serverless;

declare namespace Serverless {
    interface LambdaContext {
        awsRequestId: string
        invokeId: string
        functionName: string
        functionVersion: string
        isDefaultFunctionVersion: boolean
        invokedFunctionArn: string
        logGroupName: string
        logStreamName: string
        memoryLimitInMB: number
    }

    type Event = APIGatewayProxyRequestEvent | SNSEvent | KinesisEvent | S3Event | ConfigEvent | CognitoEvent;

    export interface APIGatewayProxyRequestEvent {
        resource: string
        path: string
        httpMethod: string
        headers: HTTPHeaders
        queryStringParameters: APIGQueryStringParameters
        pathParameters: APIGPathParameters
        stageVariables: APIGStageVariables
        requestContext: APIGProxyRequestContext
        body: string
        isBase64Encoded: boolean
    }

    interface APIGProxyRequestContext {
        accountId: string
        resourceId: string
        stage: string
        requestId: string
        identity: RequestIdentity
        resourcePath: string
        httpMethod: string
        apiId: string
    }

    interface RequestIdentity {
        cognitoIdentityPoolId: string
        accountId: string
        cognitoIdentityId: string
        caller: string
        apiKey: string
        sourceIp: string
        accessKey: string
        cognitoAuthenticationType: string
        cognitoAuthenticationProvider: string
        userArn: string
        userAgent: string
        user: string
    }

    interface DynamoDBEvent {
        records: Array<DynamoDBStreamRecord>
    }

    interface DynamoDBStreamRecord extends DynamoDBRecord {
        eventSourceArn: string
    }

    interface DynamoDBRecord { [key: string]: any }

    interface SNSEvent {
        records: Array<SNSRecord>
    }

    interface SNSRecord {
        eventSource: string
        eventSubscriptionArd: string
        eventVersion: string
        sns: SNSMessage
    }

    interface SNSMessage {
        message: string
        messageAttributes: SNSMessageAttributes
        messageId: string
        signature: string
        signingCertUrl: string
        subject: string
        timestamp: string
        topicArn: string
        type: string
        unsubscribeUrl: string
    }

    interface SNSMessageAttribute {
        type: string
        value: string
    }

    interface KinesisEvent {
        records: Array<KinesisEventRecord>
    }

    interface KinesisEventRecord {
        awsRegion: string
        eventId: string
        eventName: string
        eventSource: string
        eventSourceArn: string
        eventVersion: string
        invokeIdentityArn: string
        kinesis: any //KinesisRecord
    }

    interface S3Event {
        eventVersion: string
        eventSource: string
        awsRegion: string
        eventTime: string
        eventName: string
        userIdentity: S3UserIdentity
        requestParmeters: S3RequestParameters
        responseElements: S3ResponseElements
        s3: S3Entity
    }

    interface S3UserIdentity {
        principalId: string
    }

    interface S3RequestParameters {
        sourceIpAddress: string
    }

    interface S3Entity {
        s3SchemeVersion: string
        configurationId: string
        bucket: S3Bucket
        object: S3Object

    }

    interface S3Bucket {
        name: string
        arn: string
        ownerIdentity: S3UserIdentity
    }

    interface S3Object {
        key: string
        size: number
        eTag: string
        versionId: string
    }

    export interface CognitoEvent {
        datasetName: string
        datasetRecords: CognitoDatasetRecords
        eventType: string
        identityId: string
        identityPoolId: string
        region: string
        version: number
    }

    interface CognitoDatasetRecord {
        newValue: string
        oldValue: string
        op: string
    }

    export interface ConfigEvent {
        accountId: string
        configRuleArn: string
        configRuleId: string
        configRuleName: string
        eventLeftScope: boolean
        executionRoleArn: string
        invokingEvent: string
        resultToken: string
        ruleParameters: string
        version: string
    }

    interface Response { }

    type HTTPHeaders = { [key: string]: string }
    type APIGQueryStringParameters = { [key: string]: string }
    type APIGPathParameters = { [key: string]: string }
    type APIGStageVariables = { [key: string]: string }
    type CognitoDatasetRecords = { [key: string]: CognitoDatasetRecord }
    type SNSMessageAttributes = { [key: string]: SNSMessageAttribute }
    type S3ResponseElements = { [key: string]: string }

    export interface APIGatewayProxyResponse extends Response {
        statusCode: number
        headers?: HTTPHeaders
        body: string
    }

    export type Callback<R> = (error: Error, body: R) => void;
    export type Handler<E, R> = <E extends Event>(event: E, context: LambdaContext, callback: Callback<R>) => void;
}