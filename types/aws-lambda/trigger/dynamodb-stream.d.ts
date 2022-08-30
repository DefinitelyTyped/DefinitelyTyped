import { Handler } from "../handler";

// tslint:disable-next-line:void-return
export type DynamoDBStreamHandler = Handler<DynamoDBStreamEvent, DynamoDBBatchResponse | void>;

// http://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_streams_AttributeValue.html
export interface AttributeValue {
    B?: string | undefined;
    BS?: string[] | undefined;
    BOOL?: boolean | undefined;
    L?: AttributeValue[] | undefined;
    M?: { [id: string]: AttributeValue } | undefined;
    N?: string | undefined;
    NS?: string[] | undefined;
    NULL?: boolean | undefined;
    S?: string | undefined;
    SS?: string[] | undefined;
}

// http://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_streams_StreamRecord.html
export interface StreamRecord {
    ApproximateCreationDateTime?: number | undefined;
    Keys?: { [key: string]: AttributeValue } | undefined;
    NewImage?: { [key: string]: AttributeValue } | undefined;
    OldImage?: { [key: string]: AttributeValue } | undefined;
    SequenceNumber?: string | undefined;
    SizeBytes?: number | undefined;
    StreamViewType?: 'KEYS_ONLY' | 'NEW_IMAGE' | 'OLD_IMAGE' | 'NEW_AND_OLD_IMAGES' | undefined;
}

// http://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_streams_Record.html
export interface DynamoDBRecord {
    awsRegion?: string | undefined;
    dynamodb?: StreamRecord | undefined;
    eventID?: string | undefined;
    eventName?: 'INSERT' | 'MODIFY' | 'REMOVE' | undefined;
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
