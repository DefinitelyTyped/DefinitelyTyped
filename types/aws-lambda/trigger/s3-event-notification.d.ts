import { EventBridgeEvent } from './eventbridge';
import { Handler } from '../handler';

export interface S3ObjectAccessTierChangedNotificationEventDetail {
    version: '0';
    bucket: {
        name: string;
    };
    object: {
        key: string;
        size: number;
        etag: string;
        'version-id': string;
    };
    'request-id': string;
    requester: string;
    'destination-access-tier': 'ARCHIVE_ACCESS' | 'DEEP_ARCHIVE_ACCESS'; // https://docs.aws.amazon.com/AmazonS3/latest/API/API_Tiering.html
}

export interface S3ObjectACLUpdatedNotificationEventDetail {
    version: '0';
    bucket: {
        name: string;
    };
    object: {
        key: string;
        etag: string;
        'version-id': string;
    };
    'request-id': string;
    requester: string;
    'source-ip-address': string;
}

export interface S3ObjectCreatedNotificationEventDetail {
    version: '0';
    bucket: {
        name: string;
    };
    object: {
        key: string;
        size: number;
        etag: string;
        'version-id': string;
        sequencer: string;
    };
    'request-id': string;
    requester: string;
    'source-ip-address': string;
    reason: 'PutObject' | 'POST Object' | 'CopyObject' | 'CompleteMultipartUpload';
}

export interface S3ObjectDeletedNotificationEventLifecycleExpirationDetail {
    version: '0';
    bucket: {
        name: string;
    };
    object: {
        key: string;
        etag: string;
        'version-id': string;
        sequencer: string;
    };
    'request-id': string;
    requester: string;
    reason: 'Lifecycle Expiration';
    'deletion-type': 'Permanently Deleted' | 'Delete Marker Created';
}

export interface S3ObjectDeletedNotificationEventDeleteObjectDetail {
    version: '0';
    bucket: {
        name: string;
    };
    object: {
        key: string;
        etag: string;
        'version-id': string;
        sequencer: string;
    };
    'request-id': string;
    requester: string;
    'source-ip-address': string;
    reason: 'DeleteObject';
    'deletion-type': 'Permanently Deleted' | 'Delete Marker Created';
}

export type S3ObjectDeletedNotificationEventDetail =
    | S3ObjectDeletedNotificationEventLifecycleExpirationDetail
    | S3ObjectDeletedNotificationEventDeleteObjectDetail;

export interface S3ObjectRestoreCompletedNotificationEventDetail {
    version: '0';
    bucket: {
        name: string;
    };
    object: {
        key: string;
        size: number;
        'version-id': string;
        etag: string;
    };
    'request-id': string;
    requester: 's3.amazonaws.com';
    'restore-expiry-time': string;
    'source-storage-class':
        | 'STANDARD'
        | 'REDUCED_REDUNDANCY'
        | 'STANDARD_IA'
        | 'ONEZONE_IA'
        | 'INTELLIGENT_TIERING'
        | 'GLACIER'
        | 'DEEP_ARCHIVE'
        | 'OUTPOSTS'
        | 'GLACIER_IR'; // https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObject.html#API_PutObject_RequestSyntax
}

export interface S3ObjectRestoreExpiredNotificationEventDetail {
    version: '0';
    bucket: {
        name: string;
    };
    object: {
        key: string;
        'version-id': string;
        etag: string;
    };
    'request-id': string;
    requester: 's3.amazonaws.com';
}

export interface S3ObjectRestoreInitiatedNotificationEventDetail {
    version: '0';
    bucket: {
        name: string;
    };
    object: {
        key: string;
        size: number;
        'version-id': string;
        etag: string;
    };
    'request-id': string;
    requester: string;
    'source-ip-address': string;
    'source-storage-class':
        | 'STANDARD'
        | 'REDUCED_REDUNDANCY'
        | 'STANDARD_IA'
        | 'ONEZONE_IA'
        | 'INTELLIGENT_TIERING'
        | 'GLACIER'
        | 'DEEP_ARCHIVE'
        | 'OUTPOSTS'
        | 'GLACIER_IR'; // https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObject.html#API_PutObject_RequestSyntax
}

export interface S3ObjectStorageClassChangedNotificationEventDetail {
    version: '0';
    bucket: {
        name: string;
    };
    object: {
        key: string;
        size: number;
        'version-id': string;
        etag: string;
    };
    'request-id': string;
    requester: string;
    'destination-storage-class':
        | 'STANDARD'
        | 'REDUCED_REDUNDANCY'
        | 'STANDARD_IA'
        | 'ONEZONE_IA'
        | 'INTELLIGENT_TIERING'
        | 'GLACIER'
        | 'DEEP_ARCHIVE'
        | 'OUTPOSTS'
        | 'GLACIER_IR'; // https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObject.html#API_PutObject_RequestSyntax
}

export interface S3ObjectTagsAddedNotificationEventDetail {
    version: '0';
    bucket: {
        name: string;
    };
    object: {
        key: string;
        'version-id': string;
        etag: string;
    };
    'request-id': string;
    requester: string;
    'source-ip-address': string;
}

export interface S3ObjectTagsDeletedNotificationEventDetail {
    version: '0';
    bucket: {
        name: string;
    };
    object: {
        key: string;
        'version-id': string;
        etag: string;
    };
    'request-id': string;
    requester: string;
    'source-ip-address': string;
}

export interface S3ObjectAccessTierChangedNotificationEvent
    extends EventBridgeEvent<'Object Access Tier Changed', S3ObjectAccessTierChangedNotificationEventDetail> {
    source: 'aws.s3';
}

export interface S3ObjectACLUpdatedNotificationEvent
    extends EventBridgeEvent<'Object ACL Updated', S3ObjectACLUpdatedNotificationEventDetail> {
    source: 'aws.s3';
}

export interface S3ObjectCreatedNotificationEvent
    extends EventBridgeEvent<'Object Created', S3ObjectCreatedNotificationEventDetail> {
    source: 'aws.s3';
}

export interface S3ObjectDeletedNotificationEvent
    extends EventBridgeEvent<'Object Deleted', S3ObjectDeletedNotificationEventDetail> {
    source: 'aws.s3';
}

export interface S3ObjectRestoreCompletedNotificationEvent
    extends EventBridgeEvent<'Object Restore Completed', S3ObjectRestoreCompletedNotificationEventDetail> {
    source: 'aws.s3';
}

export interface S3ObjectRestoreExpiredNotificationEvent
    extends EventBridgeEvent<'Object Restore Expired', S3ObjectRestoreExpiredNotificationEventDetail> {
    source: 'aws.s3';
}

export interface S3ObjectRestoreInitiatedNotificationEvent
    extends EventBridgeEvent<'Object Restore Initiated', S3ObjectRestoreInitiatedNotificationEventDetail> {
    source: 'aws.s3';
}

export interface S3ObjectStorageClassChangedNotificationEvent
    extends EventBridgeEvent<'Object Storage Class Changed', S3ObjectStorageClassChangedNotificationEventDetail> {
    source: 'aws.s3';
}

export interface S3ObjectTagsAddedNotificationEvent
    extends EventBridgeEvent<'Object Tags Added', S3ObjectTagsAddedNotificationEventDetail> {
    source: 'aws.s3';
}

export interface S3ObjectTagsDeletedNotificationEvent
    extends EventBridgeEvent<'Object Tags Deleted', S3ObjectTagsDeletedNotificationEventDetail> {
    source: 'aws.s3';
}

export type S3NotificationEvent =
    | S3ObjectAccessTierChangedNotificationEvent
    | S3ObjectACLUpdatedNotificationEvent
    | S3ObjectCreatedNotificationEvent
    | S3ObjectDeletedNotificationEvent
    | S3ObjectRestoreCompletedNotificationEvent
    | S3ObjectRestoreExpiredNotificationEvent
    | S3ObjectRestoreInitiatedNotificationEvent
    | S3ObjectStorageClassChangedNotificationEvent
    | S3ObjectTagsAddedNotificationEvent
    | S3ObjectTagsDeletedNotificationEvent;

export type S3NotificationEventBridgeHandler<EventType extends S3NotificationEvent = S3NotificationEvent> = Handler<
    EventBridgeEvent<EventType['detail-type'], EventType['detail']> & {
        source: 'aws.s3';
    },
    void
>;
