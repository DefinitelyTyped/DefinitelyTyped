import { Callback, Context, S3BatchEvent, S3BatchResult, S3CreateEvent, S3EventRecord, S3Handler } from "aws-lambda";

// TODO: Update test to read event properties, like the user will
let handler: S3Handler = async (event, context, callback) => {
    callback(new Error());
};

// Test old event name
handler = (event: S3CreateEvent, context: Context, cb: Callback<void>) => {};

const record: S3EventRecord = {
    eventVersion: '2.1',
    eventSource: 'aws:s3',
    awsRegion: 'us-east-1',
    eventTime: '1970-01-01T00:00:00.000Z',
    eventName: 'ObjectRestore:Completed',
    userIdentity: {
        principalId: 'AIDAJDPLRKLG7UEXAMPLE',
    },
    requestParameters: {
        sourceIPAddress: '127.0.0.1',
    },
    responseElements: {
        'x-amz-request-id': 'C3D13FE58DE4C810',
        'x-amz-id-2': 'FMyUVURIY8/IgAtTv8xRjskZQpcIZ9KG4V5Wp6S7S/JRWeUWerMUE5JgHvANOjpD',
    },
    s3: {
        s3SchemaVersion: '1.0',
        configurationId: 'testConfigRule',
        bucket: {
            name: 'mybucket',
            ownerIdentity: {
                principalId: 'A3NL1KOZZKExample',
            },
            arn: 'arn:aws:s3:::mybucket',
        },
        object: {
            key: 'HappyFace.jpg',
            size: 1024,
            eTag: 'd41d8cd98f00b204e9800998ecf8427e',
            versionId: '096fKKXTRTtl3on89fVO.nfljtsv6qko',
            sequencer: '0055AED6DCD90281E5',
        },
    },
    glacierEventData: {
        restoreEventData: {
            lifecycleRestorationExpiryTime: '1970-01-01T00:00:00.000Z',
            lifecycleRestoreStorageClass: 'glacier-deep-archive',
        },
    },
};

const event: S3CreateEvent = {
    Records: [record],
};

/**
 * S3 Batch Operations event
 * https://docs.aws.amazon.com/AmazonS3/latest/dev/batch-ops-invoke-lambda.html
 */
const batchEvent: S3BatchEvent = {
    invocationSchemaVersion: '1.0',
    invocationId: 'foo_invocation_id',
    job: { id: 'foo_job_id' },
    tasks: [
        {
            taskId: '11111',
            s3Key: 'example.json',
            s3BucketArn: 'arn:aws:s3:::foo-bucket',
            s3VersionId: null,
        },
        {
            taskId: '11111',
            s3Key: 'example.json',
            s3BucketArn: 'arn:aws:s3:::foo-bucket',
            s3VersionId: 'asdf',
        },
    ],
};

const batchResult: S3BatchResult = {
    invocationSchemaVersion: '1.0',
    treatMissingKeysAs: 'PermanentFailure',
    invocationId: 'foo_invocation_id',
    results: [
        {
            taskId: '11111',
            resultCode: 'Succeeded',
            resultString: 'foo',
        },
        {
            taskId: '22222',
            resultCode: 'TemporaryFailure',
            resultString: 'Error: failure',
        },
        {
            taskId: '33333',
            resultCode: 'PermanentFailure',
            resultString: 'Error: failure',
        },
    ],
};
