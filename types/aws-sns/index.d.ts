// Type definitions for aws-sns 1.0
// Project: https://docs.aws.amazon.com/sns/
// Definitions by: Jan Sauer <https://github.com/jansauer>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export type SNSMessage =
    | SNSSubscriptionConfirmationMessage
    | SNSNotificationMessage
    | SNSUnsubscribeConfirmationMessage;

// @See https://docs.aws.amazon.com/sns/latest/dg/sns-message-and-json-formats.html#http-subscription-confirmation-json
export interface SNSSubscriptionConfirmationMessage {
    Type: 'SubscriptionConfirmation';
    MessageId: string;
    Token: string;
    TopicArn: string;
    Message: string;
    SubscribeURL: string;
    Timestamp: string;
    SignatureVersion: '1' | '2';
    Signature: string;
    SigningCertURL: string;
}

// @See https://docs.aws.amazon.com/sns/latest/dg/sns-message-and-json-formats.html#http-notification-json
export interface SNSNotificationMessage {
    Type: 'Notification';
    MessageId: string;
    TopicArn: string;
    Subject?: string;
    Message: string;
    Timestamp: string;
    SignatureVersion: '1' | '2';
    Signature: string;
    SigningCertURL: string;
    UnsubscribeURL: string;
    MessageAttributes?: SNSMessageAttributes;
}

export interface SNSMessageAttributes {
    [name: string]: SNSMessageAttribute;
}

export interface SNSMessageAttribute {
    Type: string;
    Value: string;
}

// @See https://docs.aws.amazon.com/sns/latest/dg/sns-message-and-json-formats.html#http-unsubscribe-confirmation-json
export interface SNSUnsubscribeConfirmationMessage {
    Type: 'UnsubscribeConfirmation';
    MessageId: string;
    Token: string;
    TopicArn: string;
    Message: string;
    SubscribeURL: string;
    Timestamp: string;
    SignatureVersion: '1' | '2';
    Signature: string;
    SigningCertURL: string;
}

export as namespace AWSSns;
