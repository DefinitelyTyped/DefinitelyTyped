import { AsyncHandler, Handler } from "../handler";

/**
 * {@link KinesisStreamAsyncHandler} Is the new version of this
 * @deprecated No longer available as of Node.js 24 Runtime {@link https://aws.amazon.com/blogs/compute/node-js-24-runtime-now-available-in-aws-lambda/}
 */
export type KinesisStreamHandler = Handler<
    KinesisStreamEvent,
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    KinesisStreamBatchResponse | void
>;
export type KinesisStreamAsyncHandler = AsyncHandler<
    KinesisStreamEvent,
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    KinesisStreamBatchResponse | void
>;

/**
 * {@link KinesisStreamTumblingWindowAsyncHandler} Is the new version of this
 * @deprecated No longer available as of Node.js 24 Runtime {@link https://aws.amazon.com/blogs/compute/node-js-24-runtime-now-available-in-aws-lambda/}
 */
export type KinesisStreamTumblingWindowHandler = Handler<
    KinesisStreamTumblingWindowEvent,
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    KinesisStreamStateResponse | void
>;
export type KinesisStreamTumblingWindowAsyncHandler = AsyncHandler<
    KinesisStreamTumblingWindowEvent,
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    KinesisStreamStateResponse | void
>;

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

// https://docs.aws.amazon.com/lambda/latest/dg/with-kinesis.html#services-kinesis-windows
export interface KinesisStreamTumblingWindowEvent extends KinesisStreamEvent {
    window: { start: string; end: string };
    state?: { [key: string]: any };
    isFinalInvokeForWindow: boolean;
    isWindowTerminatedEarly: boolean;
}

export interface KinesisStreamStateResponse extends Partial<KinesisStreamBatchResponse> {
    state: { [key: string]: any };
}

// https://docs.aws.amazon.com/lambda/latest/dg/with-kinesis.html#services-kinesis-batchfailurereporting
export interface KinesisStreamBatchResponse {
    batchItemFailures: KinesisStreamBatchItemFailure[];
}

export interface KinesisStreamBatchItemFailure {
    itemIdentifier: string;
}
