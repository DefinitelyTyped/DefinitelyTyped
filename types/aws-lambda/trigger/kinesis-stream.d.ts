import { Handler } from "../handler";

// tslint:disable-next-line:void-return
export type KinesisStreamHandler = Handler<KinesisStreamEvent, KinesisStreamBatchResponse | void>;

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

// https://docs.aws.amazon.com/lambda/latest/dg/with-kinesis.html
export interface KinesisStreamBatchResponse {
    batchItemFailures: KinesisStreamBatchItemFailure[];
}

export interface KinesisStreamBatchItemFailure {
    itemIdentifier: string;
}
