import { Handler } from "../handler";

export type SQSHandler = Handler<SQSEvent, void>;

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
    AWSTraceHeader?: string;
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
