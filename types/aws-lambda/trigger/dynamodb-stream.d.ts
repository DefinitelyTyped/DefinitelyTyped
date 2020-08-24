import { Handler } from "../handler";

export type DynamoDBStreamHandler = Handler<DynamoDBStreamEvent, void>;

// http://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_streams_AttributeValue.html
export interface AttributeValue {
    B?: string;
    BS?: string[];
    BOOL?: boolean;
    L?: AttributeValue[];
    M?: { [id: string]: AttributeValue };
    N?: string;
    NS?: string[];
    NULL?: boolean;
    S?: string;
    SS?: string[];
}

// http://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_streams_StreamRecord.html
export interface StreamRecord {
    ApproximateCreationDateTime?: number;
    Keys?: { [key: string]: AttributeValue };
    NewImage?: { [key: string]: AttributeValue };
    OldImage?: { [key: string]: AttributeValue };
    SequenceNumber?: string;
    SizeBytes?: number;
    StreamViewType?: 'KEYS_ONLY' | 'NEW_IMAGE' | 'OLD_IMAGE' | 'NEW_AND_OLD_IMAGES';
}

// http://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_streams_Record.html
export interface DynamoDBRecord {
    awsRegion?: string;
    dynamodb?: StreamRecord;
    eventID?: string;
    eventName?: 'INSERT' | 'MODIFY' | 'REMOVE';
    eventSource?: string;
    eventSourceARN?: string;
    eventVersion?: string;
    userIdentity?: any;
}

// http://docs.aws.amazon.com/lambda/latest/dg/eventsources.html#eventsources-ddb-update
export interface DynamoDBStreamEvent {
    Records: DynamoDBRecord[];
}
