import { Handler } from "../handler";

export type S3Handler = Handler<S3Event, void>;

/**
 * S3Create event
 * https://docs.aws.amazon.com/AmazonS3/latest/dev/notification-content-structure.html
 */

export interface S3EventRecordGlacierRestoreEventData {
    lifecycleRestorationExpiryTime: string;
    lifecycleRestoreStorageClass: string;
}

export interface S3EventRecordGlacierEventData {
    restoreEventData: S3EventRecordGlacierRestoreEventData;
}

export interface S3EventRecord {
    eventVersion: string;
    eventSource: string;
    awsRegion: string;
    eventTime: string;
    eventName: string;
    userIdentity: {
        principalId: string;
    };
    requestParameters: {
        sourceIPAddress: string;
    };
    responseElements: {
        "x-amz-request-id": string;
        "x-amz-id-2": string;
    };
    s3: {
        s3SchemaVersion: string;
        configurationId: string;
        bucket: {
            name: string;
            ownerIdentity: {
                principalId: string;
            };
            arn: string;
        };
        object: {
            key: string;
            size: number;
            eTag: string;
            versionId?: string | undefined;
            sequencer: string;
        };
    };
    glacierEventData?: S3EventRecordGlacierEventData | undefined;
}

export interface S3Event {
    Records: S3EventRecord[];
}

export type S3CreateEvent = S3Event; // old name
