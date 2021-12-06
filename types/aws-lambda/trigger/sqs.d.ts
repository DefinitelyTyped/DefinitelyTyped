import { Handler } from '../handler';

// tslint:disable-next-line:void-return
export type SQSHandler = Handler<SQSEvent, SQSBatchResponse | void>;

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
    AWSTraceHeader?: string | undefined;
    ApproximateReceiveCount: string;
    SentTimestamp: string;
    SenderId: string;
    ApproximateFirstReceiveTimestamp: string;
    SequenceNumber?: string | undefined;
    MessageGroupId?: string | undefined;
    MessageDeduplicationId?: string | undefined;
}

export type SQSMessageAttributeDataType = 'String' | 'Number' | 'Binary' | string;

export interface SQSMessageAttribute {
    stringValue?: string | undefined;
    binaryValue?: string | undefined;
    stringListValues: never[]; // Not implemented. Reserved for future use.
    binaryListValues: never[]; // Not implemented. Reserved for future use.
    dataType: SQSMessageAttributeDataType;
}

export interface SQSMessageAttributes {
    [name: string]: SQSMessageAttribute;
}

// https://docs.aws.amazon.com/lambda/latest/dg/with-sqs.html#services-sqs-batchfailurereporting
export interface SQSBatchResponse {
    batchItemFailures: SQSBatchItemFailure[];
}

export interface SQSBatchItemFailure {
    itemIdentifier: string;
}
