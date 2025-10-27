import { Handler } from "../handler";

// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
export type DynamoDBStreamHandler = Handler<DynamoDBStreamEvent, DynamoDBBatchResponse | void>;

// eslint-disable-next-line @definitelytyped/strict-export-declare-modifiers, @definitelytyped/no-single-element-tuple-type
type Merge<T> = [{ [K in keyof T]: T[K] }][number];

// eslint-disable-next-line @definitelytyped/strict-export-declare-modifiers
type ExclusivePropertyUnion<T, P = keyof T> = P extends any
    ? Merge<{ [K in Extract<keyof T, P>]: T[K] } & { [K in Exclude<keyof T, P>]?: never }>
    : never;

// http://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_streams_AttributeValue.html
export type AttributeValue = ExclusivePropertyUnion<{
    B: string;
    BOOL: boolean;
    BS: string[];
    L: AttributeValue[];
    M: Record<string, AttributeValue>;
    N: string;
    NS: string[];
    NULL: boolean;
    S: string;
    SS: string[];
}>;

// http://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_streams_StreamRecord.html
export interface StreamRecord {
    ApproximateCreationDateTime?: number | undefined;
    Keys?: { [key: string]: AttributeValue } | undefined;
    NewImage?: { [key: string]: AttributeValue } | undefined;
    OldImage?: { [key: string]: AttributeValue } | undefined;
    SequenceNumber?: string | undefined;
    SizeBytes?: number | undefined;
    StreamViewType?: "KEYS_ONLY" | "NEW_IMAGE" | "OLD_IMAGE" | "NEW_AND_OLD_IMAGES" | undefined;
}

// http://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_streams_Record.html
export interface DynamoDBRecord {
    awsRegion?: string | undefined;
    dynamodb?: StreamRecord | undefined;
    eventID?: string | undefined;
    eventName?: "INSERT" | "MODIFY" | "REMOVE" | undefined;
    eventSource?: string | undefined;
    eventSourceARN?: string | undefined;
    eventVersion?: string | undefined;
    userIdentity?: any;
}

// http://docs.aws.amazon.com/lambda/latest/dg/eventsources.html#eventsources-ddb-update
export interface DynamoDBStreamEvent {
    Records: DynamoDBRecord[];
}

// https://docs.aws.amazon.com/lambda/latest/dg/with-ddb.html#services-ddb-batchfailurereporting
export interface DynamoDBBatchResponse {
    batchItemFailures: DynamoDBBatchItemFailure[];
}

export interface DynamoDBBatchItemFailure {
    itemIdentifier: string;
}
