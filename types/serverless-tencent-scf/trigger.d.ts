/**
 * Trigger Event Message Structure
 *
 * https://intl.cloud.tencent.com/document/product/583/31439
 */
import { Handler } from './handler';

// API Gateway Trigger Handler
export type APIGatewayHandler<T> = Handler<APIGatewayEvent, T>;

// API Gateway Trigger Event
export interface APIGatewayEvent {
    requestContext: APIGatewayRequestContext;
    headers: { [name: string]: string };
    body?: string | null;
    pathParameters: { [name: string]: string } | null;
    queryStringParameters: { [name: string]: string } | null;
    headerParameters: { [name: string]: string } | null;
    stageVariables: {
        stage: string;
    };
    path: string;
    queryString: { [name: string]: string } | null;
    httpMethod: string;
}

// API Gateway Trigger Event RequestContext
export interface APIGatewayRequestContext {
    serviceId: string;
    path: string;
    httpMethod: string;
    requestId?: string;
    identity: {
        secretId?: string;
    };
    sourceIp: string;
    stage: string;
}

// Timer Trigger Handler
export type TimerHandler<T> = Handler<TimerEvent, T>;

// Timer Trigger Event
export interface TimerEvent {
    Type: string;
    TriggerName: string;
    Time: string;
    Message: string;
}

// COS Trigger
export type COSHandler<T> = Handler<COSEvent, T>;

export interface COSEvent {
    Records: COSEventRecord[];
}

export interface COSEventRecord {
    cos: {
        cosSchemaVersion: string;
        cosObject: {
            url: string;
            meta: {
                [name: string]: string;
            };
            vid: string;
            key: string;
            size: number;
        };
        cosBucket: {
            region: string;
            name: string;
            appid: string;
        };
        cosNotificationId: string;
    };
    event: {
        eventName: string;
        eventVersion: string;
        eventTime: number;
        eventSource: string;
        requestParameters: {
            requestSourceIP: string;
            requestHeaders: {
                [name: string]: string;
            };
        };
        eventQueue: string;
        reservedInfo: string;
        reqid: number;
    };
}

// CMQ Topic Trigger
export type CMQTopicHandler<T> = Handler<CMQTopicEvent, T>;

export interface CMQTopicEvent {
    Records: CMQTopicEventRecord[];
}

export interface CMQTopicEventRecord {
    CMQ: {
        type: string;
        topicOwner: number;
        topicName: string;
        subscriptionName: string;
        publishTime: string;
        msgId: string;
        requestId: string;
        msgBody: string;
        msgTag: string;
    };
}

// CKafka Trigger
export type CKafkaHandler<T> = Handler<CKafkaEvent, T>;

export interface CKafkaEvent {
    Records: CKafkaEventRecord[];
}

export interface CKafkaEventRecord {
    Ckafka: {
        topic: string;
        partition: number;
        offset: number;
        msgKey: string;
        msgBody: string;
    };
}
