import {
    S3NotificationEventBridgeHandler,
    S3ObjectAccessTierChangedNotificationEvent,
    S3ObjectAccessTierChangedNotificationEventDetail,
    S3ObjectACLUpdatedNotificationEvent,
    S3ObjectACLUpdatedNotificationEventDetail,
    S3ObjectCreatedNotificationEvent,
    S3ObjectCreatedNotificationEventDetail,
    S3ObjectDeletedNotificationEvent,
    S3ObjectDeletedNotificationEventDetail,
    S3ObjectRestoreCompletedNotificationEvent,
    S3ObjectRestoreCompletedNotificationEventDetail,
    S3ObjectRestoreExpiredNotificationEvent,
    S3ObjectRestoreExpiredNotificationEventDetail,
    S3ObjectRestoreInitiatedNotificationEvent,
    S3ObjectRestoreInitiatedNotificationEventDetail,
    S3ObjectStorageClassChangedNotificationEvent,
    S3ObjectStorageClassChangedNotificationEventDetail,
    S3ObjectTagsAddedNotificationEvent,
    S3ObjectTagsAddedNotificationEventDetail,
    S3ObjectTagsDeletedNotificationEvent,
    S3ObjectTagsDeletedNotificationEventDetail,
} from 'aws-lambda';

// EventBridgeEvent structure is tested in eventbridge-tests.ts
// testing only source, detail and detail-type here
declare let eventBridgeEventSource: 'aws.s3';

const S3ObjectAccessTierChangedNotificationEventHandler: S3NotificationEventBridgeHandler<
    S3ObjectAccessTierChangedNotificationEvent
> = async (event, context, callback) => {
    eventBridgeEventSource = event.source;
    const detailType: 'Object Access Tier Changed' = event['detail-type'];
    const detail: S3ObjectAccessTierChangedNotificationEventDetail = event.detail;

    const exampleEvent: S3ObjectAccessTierChangedNotificationEvent = {
        version: '0',
        id: 'b0484f24-4f9d-3a49-de3b-e8b56b954cdd',
        'detail-type': 'Object Access Tier Changed',
        source: 'aws.s3',
        account: '123456789012',
        time: '2021-11-12T00:00:00Z',
        region: 'ca-central-1',
        resources: ['arn:aws:s3:::example-bucket'],
        detail: {
            version: '0',
            bucket: {
                name: 'example-bucket',
            },
            object: {
                key: 'example-key',
                size: 5,
                etag: 'b1946ac92492d2347c6235b4d2611184',
                'version-id': 'NX.DRp5klxcEVaJ5RC_fO0994Hl.JHOY',
            },
            'request-id': '2MMR4GXSXJGZ5THF',
            requester: 's3.amazonaws.com',
            'destination-access-tier': 'ARCHIVE_ACCESS',
        },
    };

    exampleEvent.detail['destination-access-tier'] = 'DEEP_ARCHIVE_ACCESS';

    const result: undefined = undefined;
    callback(new Error());
    callback(null, result);
    return result;
};

const S3ObjectACLUpdatedNotificationEventHandler: S3NotificationEventBridgeHandler<
    S3ObjectACLUpdatedNotificationEvent
> = async (event, context, callback) => {
    eventBridgeEventSource = event.source;
    const detailType: 'Object ACL Updated' = event['detail-type'];
    const detail: S3ObjectACLUpdatedNotificationEventDetail = event.detail;

    const exampleEvent: S3ObjectACLUpdatedNotificationEvent = {
        version: '0',
        id: '7382f94d-cdb4-ae90-8411-e79d33d0d2c9',
        'detail-type': 'Object ACL Updated',
        source: 'aws.s3',
        account: '123456789012',
        time: '2021-11-12T00:00:00Z',
        region: 'ca-central-1',
        resources: ['arn:aws:s3:::example-bucket'],
        detail: {
            version: '0',
            bucket: {
                name: 'example-bucket',
            },
            object: {
                key: 'example-key',
                etag: 'b1946ac92492d2347c6235b4d2611184',
                'version-id': 'Xd_29e0Da7c0h8APYtG8ZsGpnPtNDewu',
            },
            'request-id': '8NZP164VNA76D82R',
            requester: '123456789012',
            'source-ip-address': '1.2.3.4',
        },
    };

    const result: undefined = undefined;
    callback(new Error());
    callback(null, result);
    return result;
};

const S3ObjectCreatedNotificationEventHandler: S3NotificationEventBridgeHandler<
    S3ObjectCreatedNotificationEvent
> = async (event, context, callback) => {
    eventBridgeEventSource = event.source;
    const detailType: 'Object Created' = event['detail-type'];
    const detail: S3ObjectCreatedNotificationEventDetail = event.detail;

    const exampleEvent: S3ObjectCreatedNotificationEvent = {
        version: '0',
        id: '17793124-05d4-b198-2fde-7ededc63b103',
        'detail-type': 'Object Created',
        source: 'aws.s3',
        account: '123456789012',
        time: '2021-11-12T00:00:00Z',
        region: 'ca-central-1',
        resources: ['arn:aws:s3:::example-bucket'],
        detail: {
            version: '0',
            bucket: {
                name: 'example-bucket',
            },
            object: {
                key: 'example-key',
                size: 5,
                etag: 'b1946ac92492d2347c6235b4d2611184',
                'version-id': 'IYV3p45BT0ac8hjHg1houSdS1a.Mro8e',
                sequencer: '00617F08299329D189',
            },
            'request-id': 'N4N7GDK58NMKJ12R',
            requester: '123456789012',
            'source-ip-address': '1.2.3.4',
            reason: 'PutObject',
        },
    };

    exampleEvent.detail.reason = 'POST Object';
    exampleEvent.detail.reason = 'CopyObject';
    exampleEvent.detail.reason = 'CompleteMultipartUpload';

    const result: undefined = undefined;
    callback(new Error());
    callback(null, result);
    return result;
};

const S3ObjectDeletedNotificationEventHandler: S3NotificationEventBridgeHandler<
    S3ObjectDeletedNotificationEvent
> = async (event, context, callback) => {
    eventBridgeEventSource = event.source;
    const detailType: 'Object Deleted' = event['detail-type'];
    const detail: S3ObjectDeletedNotificationEventDetail = event.detail;

    const deleteObjectExampleEvent: S3ObjectDeletedNotificationEvent = {
        version: '0',
        id: 'ad1de317-e409-eba2-9552-30113f8d88e3',
        'detail-type': 'Object Deleted',
        source: 'aws.s3',
        account: '123456789012',
        time: '2021-11-12T00:00:00Z',
        region: 'ca-central-1',
        resources: ['arn:aws:s3:::example-bucket'],
        detail: {
            version: '0',
            bucket: {
                name: 'example-bucket',
            },
            object: {
                key: 'example-key',
                etag: 'd41d8cd98f00b204e9800998ecf8427e',
                'version-id': 'mtB0cV.jejK63XkRNceanNMC.qXPWLeK',
                sequencer: '00617B398000000000',
            },
            'request-id': '20EB74C14654DC47',
            requester: 's3.amazonaws.com',
            'source-ip-address': '1.2.3.4',
            reason: 'DeleteObject',
            'deletion-type': 'Delete Marker Created',
        },
    };
    deleteObjectExampleEvent.detail['deletion-type'] = 'Permanently Deleted';

    const lifecycleExpirationExampleEvent2: S3ObjectDeletedNotificationEvent = {
        version: '0',
        id: 'ad1de317-e409-eba2-9552-30113f8d88e3',
        'detail-type': 'Object Deleted',
        source: 'aws.s3',
        account: '123456789012',
        time: '2021-11-12T00:00:00Z',
        region: 'ca-central-1',
        resources: ['arn:aws:s3:::example-bucket'],
        detail: {
            version: '0',
            bucket: {
                name: 'example-bucket',
            },
            object: {
                key: 'example-key',
                etag: 'd41d8cd98f00b204e9800998ecf8427e',
                'version-id': 'mtB0cV.jejK63XkRNceanNMC.qXPWLeK',
                sequencer: '00617B398000000000',
            },
            'request-id': '20EB74C14654DC47',
            requester: 's3.amazonaws.com',
            reason: 'Lifecycle Expiration',
            'deletion-type': 'Delete Marker Created',
        },
    };
    lifecycleExpirationExampleEvent2.detail['deletion-type'] = 'Permanently Deleted';

    const result: undefined = undefined;
    callback(new Error());
    callback(null, result);
    return result;
};

const S3ObjectRestoreCompletedNotificationEventHandler: S3NotificationEventBridgeHandler<
    S3ObjectRestoreCompletedNotificationEvent
> = async (event, context, callback) => {
    eventBridgeEventSource = event.source;
    const detailType: 'Object Restore Completed' = event['detail-type'];
    const detail: S3ObjectRestoreCompletedNotificationEventDetail = event.detail;

    const exampleEvent: S3ObjectRestoreCompletedNotificationEvent = {
        version: '0',
        id: '6924de0d-13e2-6bbf-c0c1-b903b753565e',
        'detail-type': 'Object Restore Completed',
        source: 'aws.s3',
        account: '123456789012',
        time: '2021-11-12T00:00:00Z',
        region: 'ca-central-1',
        resources: ['arn:aws:s3:::example-bucket'],
        detail: {
            version: '0',
            bucket: {
                name: 'example-bucket',
            },
            object: {
                key: 'example-key',
                size: 5,
                etag: 'b1946ac92492d2347c6235b4d2611184',
                'version-id': 'KKsjUC1.6gIjqtvhfg5AdMI0eCePIiT3',
            },
            'request-id': '189F19CB7FB1B6A4',
            requester: 's3.amazonaws.com',
            'restore-expiry-time': '2021-11-13T00:00:00Z',
            'source-storage-class': 'GLACIER',
        },
    };

    exampleEvent.detail['source-storage-class'] = 'DEEP_ARCHIVE';
    exampleEvent.detail['source-storage-class'] = 'GLACIER_IR';
    exampleEvent.detail['source-storage-class'] = 'STANDARD';
    exampleEvent.detail['source-storage-class'] = 'ONEZONE_IA';
    exampleEvent.detail['source-storage-class'] = 'STANDARD_IA';
    exampleEvent.detail['source-storage-class'] = 'INTELLIGENT_TIERING';
    exampleEvent.detail['source-storage-class'] = 'OUTPOSTS';
    exampleEvent.detail['source-storage-class'] = 'REDUCED_REDUNDANCY';

    const result: undefined = undefined;
    callback(new Error());
    callback(null, result);
    return result;
};

const S3ObjectRestoreExpiredNotificationEventHandler: S3NotificationEventBridgeHandler<
    S3ObjectRestoreExpiredNotificationEvent
> = async (event, context, callback) => {
    eventBridgeEventSource = event.source;
    const detailType: 'Object Restore Expired' = event['detail-type'];
    const detail: S3ObjectRestoreExpiredNotificationEventDetail = event.detail;

    const exampleEvent: S3ObjectRestoreExpiredNotificationEvent = {
        version: '0',
        id: 'fc79357e-5b95-4caa-d604-ea69d02c0f34',
        'detail-type': 'Object Restore Expired',
        source: 'aws.s3',
        account: '123456789012',
        time: '2021-11-12T00:00:00Z',
        region: 'ca-central-1',
        resources: ['arn:aws:s3:::example-bucket'],
        detail: {
            version: '0',
            bucket: {
                name: 'example-bucket',
            },
            object: {
                key: 'example-key',
                etag: 'b1946ac92492d2347c6235b4d2611184',
                'version-id': '_vgOnRkretlur2Szh189LnGKvP975qk4',
            },
            'request-id': '3293B6761671D228',
            requester: 's3.amazonaws.com',
        },
    };

    const result: undefined = undefined;
    callback(new Error());
    callback(null, result);
    return result;
};

const S3ObjectRestoreInitiatedNotificationEventHandler: S3NotificationEventBridgeHandler<
    S3ObjectRestoreInitiatedNotificationEvent
> = async (event, context, callback) => {
    eventBridgeEventSource = event.source;
    const detailType: 'Object Restore Initiated' = event['detail-type'];
    const detail: S3ObjectRestoreInitiatedNotificationEventDetail = event.detail;

    const exampleEvent: S3ObjectRestoreInitiatedNotificationEvent = {
        version: '0',
        id: 'ed4edb9f-fe10-a6a0-c1a3-66aa1aba83b1',
        'detail-type': 'Object Restore Initiated',
        source: 'aws.s3',
        account: '123456789012',
        time: '2021-11-12T00:00:00Z',
        region: 'ca-central-1',
        resources: ['arn:aws:s3:::example-bucket'],
        detail: {
            version: '0',
            bucket: {
                name: 'example-bucket',
            },
            object: {
                key: 'example-key',
                size: 5,
                etag: 'b1946ac92492d2347c6235b4d2611184',
                'version-id': 'KKsjUC1.6gIjqtvhfg5AdMI0eCePIiT3',
            },
            'request-id': '5S39P9B0KSYERSCH',
            requester: '123456789012',
            'source-ip-address': '1.2.3.4',
            'source-storage-class': 'GLACIER',
        },
    };

    exampleEvent.detail['source-storage-class'] = 'DEEP_ARCHIVE';
    exampleEvent.detail['source-storage-class'] = 'GLACIER_IR';
    exampleEvent.detail['source-storage-class'] = 'STANDARD';
    exampleEvent.detail['source-storage-class'] = 'ONEZONE_IA';
    exampleEvent.detail['source-storage-class'] = 'STANDARD_IA';
    exampleEvent.detail['source-storage-class'] = 'INTELLIGENT_TIERING';
    exampleEvent.detail['source-storage-class'] = 'OUTPOSTS';
    exampleEvent.detail['source-storage-class'] = 'REDUCED_REDUNDANCY';

    const result: undefined = undefined;
    callback(new Error());
    callback(null, result);
    return result;
};

const S3ObjectStorageClassChangedNotificationEventHandler: S3NotificationEventBridgeHandler<
    S3ObjectStorageClassChangedNotificationEvent
> = async (event, context, callback) => {
    eventBridgeEventSource = event.source;
    const detailType: 'Object Storage Class Changed' = event['detail-type'];
    const detail: S3ObjectStorageClassChangedNotificationEventDetail = event.detail;

    const exampleEvent: S3ObjectStorageClassChangedNotificationEvent = {
        version: '0',
        id: 'e9a74d79-7549-f534-88d9-d2d9cd9bfd52',
        'detail-type': 'Object Storage Class Changed',
        source: 'aws.s3',
        account: '123456789012',
        time: '2021-11-12T00:00:00Z',
        region: 'ca-central-1',
        resources: ['arn:aws:s3:::example-bucket'],
        detail: {
            version: '0',
            bucket: {
                name: 'example-bucket',
            },
            object: {
                key: 'example-key',
                size: 5,
                etag: 'b1946ac92492d2347c6235b4d2611184',
                'version-id': 'J1BDI6bMR4RgWJsmT15166nv0HhDT7zo',
            },
            'request-id': '42E9A4AA619F920B',
            requester: 's3.amazonaws.com',
            'destination-storage-class': 'GLACIER',
        },
    };

    exampleEvent.detail['destination-storage-class'] = 'DEEP_ARCHIVE';
    exampleEvent.detail['destination-storage-class'] = 'GLACIER_IR';
    exampleEvent.detail['destination-storage-class'] = 'STANDARD';
    exampleEvent.detail['destination-storage-class'] = 'ONEZONE_IA';
    exampleEvent.detail['destination-storage-class'] = 'STANDARD_IA';
    exampleEvent.detail['destination-storage-class'] = 'INTELLIGENT_TIERING';
    exampleEvent.detail['destination-storage-class'] = 'OUTPOSTS';
    exampleEvent.detail['destination-storage-class'] = 'REDUCED_REDUNDANCY';

    const result: undefined = undefined;
    callback(new Error());
    callback(null, result);
    return result;
};

const S3ObjectTagsAddedNotificationEventHandler: S3NotificationEventBridgeHandler<
    S3ObjectTagsAddedNotificationEvent
> = async (event, context, callback) => {
    eventBridgeEventSource = event.source;
    const detailType: 'Object Tags Added' = event['detail-type'];
    const detail: S3ObjectTagsAddedNotificationEventDetail = event.detail;

    const exampleEvent: S3ObjectTagsAddedNotificationEvent = {
        version: '0',
        id: '5b566166-43e6-d36e-ab5a-5083af1fda09',
        'detail-type': 'Object Tags Added',
        source: 'aws.s3',
        account: '123456789012',
        time: '2021-11-12T00:00:00Z',
        region: 'ca-central-1',
        resources: ['arn:aws:s3:::example-bucket'],
        detail: {
            version: '0',
            bucket: {
                name: 'example-bucket',
            },
            object: {
                key: 'example-key',
                etag: 'b1946ac92492d2347c6235b4d2611184',
                'version-id': 'Xd_29e0Da7c0h8APYtG8ZsGpnPtNDewu',
            },
            'request-id': '5EQMSMKAMC3Z1NH9',
            requester: '123456789012',
            'source-ip-address': '1.2.3.4',
        },
    };

    const result: undefined = undefined;
    callback(new Error());
    callback(null, result);
    return result;
};

const S3ObjectTagsDeletedNotificationEventHandler: S3NotificationEventBridgeHandler<
    S3ObjectTagsDeletedNotificationEvent
> = async (event, context, callback) => {
    eventBridgeEventSource = event.source;
    const detailType: 'Object Tags Deleted' = event['detail-type'];
    const detail: S3ObjectTagsDeletedNotificationEventDetail = event.detail;

    const exampleEvent: S3ObjectTagsDeletedNotificationEvent = {
        version: '0',
        id: '16b4a621-0c02-2315-7a02-0182de80c2df',
        'detail-type': 'Object Tags Deleted',
        source: 'aws.s3',
        account: '123456789012',
        time: '2021-11-12T00:00:00Z',
        region: 'ca-central-1',
        resources: ['arn:aws:s3:::example-bucket'],
        detail: {
            version: '0',
            bucket: {
                name: 'example-bucket',
            },
            object: {
                key: 'example-key',
                etag: 'b1946ac92492d2347c6235b4d2611184',
                'version-id': 'Xd_29e0Da7c0h8APYtG8ZsGpnPtNDewu',
            },
            'request-id': 'FSYT108D6ZGFKMCW',
            requester: '123456789012',
            'source-ip-address': '1.2.3.4',
        },
    };

    const result: undefined = undefined;
    callback(new Error());
    callback(null, result);
    return result;
};
