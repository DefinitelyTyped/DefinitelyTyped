import { AsyncHandler, Handler } from "../handler";

/**
 * {@link SNSAsyncHandler} Is the new version of this
 * @deprecated No longer available as of Node.js 24 Runtime {@link https://aws.amazon.com/blogs/compute/node-js-24-runtime-now-available-in-aws-lambda/}
 */
export type SNSHandler = Handler<SNSEvent, void>;
export type SNSAsyncHandler = AsyncHandler<SNSEvent, void>;

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
    SigningCertUrl: string; // Not SigningCertURL; see https://github.com/DefinitelyTyped/DefinitelyTyped/pull/73817#issuecomment-3367340170
    MessageId: string;
    Message: string;
    MessageAttributes: SNSMessageAttributes;
    Type: string;
    UnsubscribeUrl: string; // Not UnsubscribeURL; see https://github.com/DefinitelyTyped/DefinitelyTyped/pull/73817#issuecomment-3367340170
    TopicArn: string;
    Subject?: string;
    Token?: string;
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
