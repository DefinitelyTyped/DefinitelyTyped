import { Callback, Handler } from "../handler";

export type FirehoseTransformationHandler = Handler<FirehoseTransformationEvent, FirehoseTransformationResult>;
export type FirehoseTransformationCallback = Callback<FirehoseTransformationResult>;

// Kinesis Data Firehose Event
// https://docs.aws.amazon.com/lambda/latest/dg/eventsources.html#eventsources-kinesis-firehose
// https://docs.aws.amazon.com/firehose/latest/dev/data-transformation.html
// https://aws.amazon.com/blogs/compute/amazon-kinesis-firehose-data-transformation-with-aws-lambda/
// Examples in the lambda blueprints
export interface FirehoseTransformationEvent {
    invocationId: string;
    deliveryStreamArn: string;
    sourceKinesisStreamArn?: string | undefined;
    region: string;
    records: FirehoseTransformationEventRecord[];
}

export interface FirehoseTransformationEventRecord {
    recordId: string;
    approximateArrivalTimestamp: number;
    /** Base64 encoded */
    data: string;
    kinesisRecordMetadata?: FirehoseRecordMetadata | undefined;
}

export interface FirehoseRecordMetadata {
    shardId: string;
    partitionKey: string;
    approximateArrivalTimestamp: number;
    sequenceNumber: string;
    subsequenceNumber: string;
}

export type FirehoseRecordTransformationStatus = 'Ok' | 'Dropped' | 'ProcessingFailed';

export interface FirehoseTransformationMetadata {
    partitionKeys: { [name: string]: string };
}

export interface FirehoseTransformationResultRecord {
    recordId: string;
    result: FirehoseRecordTransformationStatus;
    /** Encode in Base64 */
    data: string;
    metadata?: FirehoseTransformationMetadata;
}

export interface FirehoseTransformationResult {
    records: FirehoseTransformationResultRecord[];
}
