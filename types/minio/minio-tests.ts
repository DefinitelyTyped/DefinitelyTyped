import * as fs from 'fs';
import { Readable as ReadableStream } from 'stream';
import Minio = require('minio');

const minio = new Minio.Client({
    endPoint: 'localhost',
    port: 9000,
    useSSL: false,
    accessKey: 'iV7RAFOtxF',
    secretKey: 'Go1hhOkXnl',
    pathStyle: true,
});

// Helpers
function isLockConfig(value: Minio.Lock): value is Minio.LockConfig {
    return 'mode' in value && 'unit' in value && 'validity' in value;
}

function isEncryptionConfig(value: Minio.Encryption): value is Minio.EncryptionConfig {
    return 'Rule' in value;
}

function isRetentionOptions(value: Minio.Retention): value is Minio.RetentionOptions {
    return 'versionId' in value;
}

// Bucket operations
minio.makeBucket('testBucket', 'ap-southeast-2', { ObjectLocking: true }, (error: Error | null) => {
    console.log(error);
});
minio.makeBucket('testBucket', 'ap-southeast-2', (error: Error | null) => {
    console.log(error);
});
minio.makeBucket('testBucket', (error: Error | null) => {
    console.log(error);
});

(async () => {
    await minio.makeBucket('testBucket', 'eu-west-1', { ObjectLocking: false });
    await minio.makeBucket('testBucket', 'eu-west-1');
    await minio.makeBucket('testBucket');
})();

minio.listBuckets((error: Error | null, bucketList: Minio.BucketItemFromList[]) => {
    console.log(error, bucketList);
});
minio.listBuckets();

minio.bucketExists('testBucket', (error: Error | null, exists: boolean) => {
    console.log(error, exists);
});
minio.bucketExists('testBucket');

minio.removeBucket('testBucket', (error: Error | null) => {
    console.log(error);
});
minio.removeBucket('testBucket');

const objectList = minio.listObjects('testBucket');
objectList.on('data', item => {
    console.log(item.name);
});
minio.listObjects('testBucket', 'image_');
minio.listObjects('testBucket', 'audio_', true);

minio.listObjectsV2('testBucket');
minio.listObjectsV2('testBucket', 'image_');
minio.listObjectsV2('testBucket', 'audio_', true);

minio.listIncompleteUploads('testBucket');
minio.listIncompleteUploads('testBucket', 'image_');
minio.listIncompleteUploads('testBucket', 'audio_', true);

minio.getBucketVersioning('testBucket', (error: Error | null, result: Minio.VersioningConfig) => {
    console.log(error, Object.keys(result));
});
minio.getBucketVersioning('testBucket').then(result => {
    Object.keys(result);
});

minio.setBucketVersioning('testBucket', { Status: 'Enabled' }, (error: Error | null) => {
    console.log(error);
});
minio.setBucketVersioning('testBucket', { Status: 'Enabled' });

minio.getBucketTagging('testBucket', (error, tags) => {
    console.log(error, tags[0].Value);
});
minio.getBucketTagging('testBucket').then(tags => {
    console.log(tags[0].Value);
});

minio.setBucketTagging('testBucket', { tagKey: 'tagValue' }, (error: Error | null) => {
    console.log(error);
});
minio.setBucketTagging('testBucket', { tagKey: 'tagValue' });

minio.removeBucketTagging('testBucket', (error: Error | null) => {
    console.log(error);
});
minio.removeBucketTagging('testBucket');

minio.setBucketLifecycle('testBucket', { Rule: [] }, (error: Error | null) => {
    console.log(error);
});
minio.setBucketLifecycle('testBucket', { Rule: [] });
minio.setBucketLifecycle('testBucket', null);
minio.setBucketLifecycle('testBucket', '');

minio.getBucketLifecycle('testBucket', (error: Error | null, result: Minio.Lifecycle) => {
    console.log(error, result);
});
minio.getBucketLifecycle('testBucket').then(lifecycle => {
    if (lifecycle) {
        console.log(lifecycle.Rule);
    } else {
        console.log('Lifecycle is not set.');
    }
});

minio.removeBucketLifecycle('testBucket', (error: Error | null) => {
    console.log(error);
});
minio.removeBucketLifecycle('testBucket');

minio.setObjectLockConfig('testBucket', (error: Error | null) => {
    console.log(error);
});
minio.setObjectLockConfig('testBucket', {}, (error: Error | null) => {
    console.log(error);
});
minio.setObjectLockConfig('testBucket', { mode: 'COMPLIANCE', unit: 'Days', validity: 5 }, (error: Error | null) => {
    console.log(error);
});
minio.setObjectLockConfig('testBucket');
minio.setObjectLockConfig('testBucket', {});
minio.setObjectLockConfig('testBucket', { mode: 'COMPLIANCE', unit: 'Days', validity: 5 });

minio.getObjectLockConfig('testBucket', (error: Error | null, lockConfig: Minio.Lock) => {
    console.log(error, lockConfig);
});
minio.getObjectLockConfig('testBucket').then(lockConfig => {
    if (isLockConfig(lockConfig)) {
        console.log(lockConfig.mode, lockConfig.unit, lockConfig.validity);
    } else {
        console.log('Lock config is not set.');
    }
});

minio.getBucketEncryption('testBucket', (error: Error | null, ecnryptionConfig: Minio.Encryption) => {
    console.log(error, ecnryptionConfig);
});
minio.getBucketEncryption('testBucket').then(encryptionConfig => {
    if (isEncryptionConfig(encryptionConfig)) {
        console.log(encryptionConfig.Rule);
    } else {
        console.log('Encryption config is not set.');
    }
});

minio.setBucketEncryption('testBucket', { Rule: [] }, (error: Error | null) => {
    console.log(error);
});
minio.setBucketEncryption('testBucket', { Rule: [] });

minio.removeBucketEncryption('testBucket', (error: Error | null) => {
    console.log(error);
});
minio.removeBucketEncryption('testBucket');

minio.setBucketReplication('testBucket', { role: 'some:role', rules: [] }, (error: Error | null) => {
    console.log(error);
});
minio.setBucketReplication('testBucket', { role: 'some:role', rules: [] });

minio.getBucketReplication('testBucket', (error: Error | null, result: Minio.ReplicationConfig) => {
    console.log(error, result.role);
});
minio.getBucketReplication('testBucket').then(result => {
    console.log(result.role, result.rules);
});

minio.removeBucketReplication('testBucket', (error: Error | null) => {
    console.log(error);
});
minio.removeBucketReplication('testBucket');

// Object operations
minio.getObject('testBucket', 'hello.jpg', (error: Error | null, objectStream: ReadableStream) => {
    console.log(error, objectStream);
});
minio.getObject('testBucket', 'hello.jpg');

minio.getPartialObject('testBucket', 'hello.jpg', 10, (error: Error | null, objectStream: ReadableStream) => {
    console.log(error, objectStream);
});
minio.getPartialObject('testBucket', 'hello.jpg', 10, 20, (error: Error | null, objectStream: ReadableStream) => {
    console.log(error, objectStream);
});
minio.getPartialObject('testBucket', 'hello.jpg', 10);
minio.getPartialObject('testBucket', 'hello.jpg', 10, 20);

minio.fGetObject('testBucket', 'hello.jpg', 'file/path', (error: Error | null) => {
    console.log(error);
});
minio.fGetObject('testBucket', 'hello.jpg', 'file/path');

const metaData = {
    'Content-Type': 'text/html',
    'Content-Language': 123,
    'X-Amz-Meta-Testing': 1234,
    example: 5678,
};
minio.putObject(
    'testBucket',
    'hello.jpg',
    fs.createReadStream('hello.jpg'),
    (error: Error | null, objInfo: Minio.UploadedObjectInfo) => {
        console.log(error, objInfo.etag, objInfo.versionId);
    },
);
minio.putObject(
    'testBucket',
    'hello.jpg',
    new Buffer('string'),
    100,
    (error: Error | null, objInfo: Minio.UploadedObjectInfo) => {
        console.log(error, objInfo.etag, objInfo.versionId);
    },
);
minio.putObject(
    'testBucket',
    'hello.txt',
    'hello.txt content',
    100,
    metaData,
    (error: Error | null, objInfo: Minio.UploadedObjectInfo) => {
        console.log(error, objInfo.etag, objInfo.versionId);
    },
);
minio.putObject('testBucket', 'hello.jpg', fs.createReadStream('hello.jpg'));
minio.putObject('testBucket', 'hello.jpg', new Buffer('string'), 100);
minio.putObject('testBucket', 'hello.txt', 'hello.txt content', 100, metaData);
minio.putObject('testBucket', 'hello.txt', 'hello.txt content', metaData);

minio.fPutObject(
    'testBucket',
    'hello.jpg',
    'file/path',
    metaData,
    (error: Error | null, objInfo: Minio.UploadedObjectInfo) => {
        console.log(error, objInfo.etag, objInfo.versionId);
    },
);
minio.fPutObject('testBucket', 'hello.jpg', 'file/path', metaData);

const conditions = new Minio.CopyConditions();
conditions.setMatchETag('bd891862ea3e22c93ed53a098218791d');
minio.copyObject(
    'testBucket',
    'copy-of-hello.jpg',
    'hello.jpg',
    conditions,
    (error: Error | null, item: Minio.BucketItemCopy) => {
        console.log(error, item);
    },
);
minio.copyObject('testBucket', 'copy-of-hello.jpg', 'hello.jpg', conditions);

minio.statObject('testBucket', 'hello.jpg', (error: Error | null, stat: Minio.BucketItemStat) => {
    console.log(error, stat);
});
minio.statObject('testBucket', 'hello.jpg');

minio.removeObject('testBucket', 'hello.jpg', {}, (error: Error | null) => {
    console.log(error);
});
minio.removeObject('testBucket', 'hello.jpg', (error: Error | null) => {
    console.log(error);
});
minio.removeObject('testBucket', 'hello.jpg', {});
minio.removeObject('testBucket', 'hello.jpg', { versionId: "my-version" });
minio.removeObject('testBucket', 'hello.jpg', { versionId: "my-version", governanceBypass: false });
minio.removeObject('testBucket', 'hello.jpg', { governanceBypass: false });
minio.removeObject('testBucket', 'hello.jpg', { versionId: "my-version", governanceBypass: false }, (error: Error | null) => {
    console.log(error);
});
minio.removeObject('testBucket', 'hello.jpg');

minio.removeObjects('testBucket', ['hello.jpg', 'hello.txt'], (error: Error | null) => {
    console.log(error);
});
minio.removeObjects('testBucket', ['hello.jpg', 'hello.txt']);

minio.removeIncompleteUpload('testBucket', 'hello.jpg', (error: Error | null) => {
    console.log(error);
});
minio.removeIncompleteUpload('testBucket', 'hello.jpg');

minio.putObjectRetention('testBucket', 'hello.jpg', (error: Error | null) => {
    console.log(error);
});
minio.putObjectRetention('testBucket', 'hello.jpg', {}, (error: Error | null) => {
    console.log(error);
});
minio.putObjectRetention(
    'testBucket',
    'hello.jpg',
    { mode: 'COMPLIANCE', retainUntilDate: new Date().toISOString(), versionId: 'someVersion' },
    (error: Error | null) => {
        console.log(error);
    },
);
minio.putObjectRetention('testBucket', 'hello.jpg');
minio.putObjectRetention('testBucket', 'hello.jpg', {});
minio.putObjectRetention('testBucket', 'hello.jpg', {
    mode: 'COMPLIANCE',
    retainUntilDate: new Date().toISOString(),
    versionId: 'someVersion',
});

minio.getObjectRetention(
    'testBucket',
    'hello.jpg',
    { versionId: 'someVersion' },
    (error: Error | null, result: Minio.Retention) => {
        console.log(error, result);
    },
);
minio.getObjectRetention('testBucket', 'hello.jpg', { versionId: 'someVersion' }).then(result => {
    if (isRetentionOptions(result)) {
        console.log(result.versionId);
    } else {
        console.log('Retention options are not set.');
    }
});

minio.putObjectTagging('testBucket', 'hello.jpg', { tagName: 'tagValue' }, (error: Error | null) => {
    console.log(error);
});
minio.putObjectTagging(
    'testBucket',
    'hello.jpg',
    { tagName: 'tagValue' },
    { versionId: 'someVersion' },
    (error: Error | null) => {
        console.log(error);
    },
);
minio.putObjectTagging('testBucket', 'hello.jpg', { tagName: 'tagValue' });
minio.putObjectTagging('testBucket', 'hello.jpg', { tagName: 'tagValue' }, { versionId: 'someVersion' });

minio.setObjectTagging('testBucket', 'hello.jpg', { tagName: 'tagValue' }, (error: Error | null) => {
    console.log(error);
});
minio.setObjectTagging(
    'testBucket',
    'hello.jpg',
    { tagName: 'tagValue' },
    { versionId: 'someVersion' },
    (error: Error | null) => {
        console.log(error);
    },
);
minio.setObjectTagging('testBucket', 'hello.jpg', { tagName: 'tagValue' });
minio.setObjectTagging('testBucket', 'hello.jpg', { tagName: 'tagValue' }, { versionId: 'someVersion' });

minio.removeObjectTagging('testBucket', 'hello.jpg', (error: Error | null) => {
    console.log(error);
});
minio.removeObjectTagging('testBucket', 'hello.jpg', { versionId: 'someVersion' }, (error: Error | null) => {
    console.log(error);
});
minio.removeObjectTagging('testBucket', 'hello.jpg');
minio.removeObjectTagging('testBucket', 'hello.jpg', { versionId: 'someVersion' });

minio.getObjectTagging('testBucket', 'hello.jpg', (error: Error | null, tags: Minio.Tag[]) => {
    console.log(error, tags[0].Value);
});
minio.getObjectTagging(
    'testBucket',
    'hello.jpg',
    { versionId: 'someVersion' },
    (error: Error | null, tags: Minio.Tag[]) => {
        console.log(error, tags[0].Value);
    },
);
minio.getObjectTagging('testBucket', 'hello.jpg').then(tags => {
    console.log(tags[0].Value);
});
minio.getObjectTagging('testBucket', 'hello.jpg', { versionId: 'someVersion' }).then(tags => {
    console.log(tags[0].Value);
});

minio.getObjectLegalHold('testBucket', 'hello.jpg', (error: Error | null, result: Minio.LegalHoldOptions) => {
    console.log(error, result.status);
});
minio.getObjectLegalHold(
    'testBucket',
    'hello.jpg',
    { versionId: 'someVersion' },
    (error: Error | null, result: Minio.LegalHoldOptions) => {
        console.log(error, result.status);
    },
);
minio.getObjectLegalHold('testBucket', 'hello.jpg').then(result => {
    console.log(result.status);
});
minio.getObjectLegalHold('testBucket', 'hello.jpg', { versionId: 'someVersion' }).then(result => {
    console.log(result.status);
});

minio.setObjectLegalHold('testBucket', 'hello.jpg', (error: Error | null) => {
    console.log(error);
});
minio.setObjectLegalHold(
    'testBucket',
    'hello.jpg',
    { versionId: 'someVersion', status: 'OFF' },
    (error: Error | null) => {
        console.log(error);
    },
);
minio.setObjectLegalHold('testBucket', 'hello.jpg');
minio.setObjectLegalHold('testBucket', 'hello.jpg', { versionId: 'someVersion', status: 'OFF' });

const destObjConfig = new Minio.CopyDestinationOptions({ Bucket: 'testBucket', Object: '100MB.zip' });
const sourceObjList = [
    new Minio.CopySourceOptions({ Bucket: 'testBucket', Object: 'partA' }),
    new Minio.CopySourceOptions({ Bucket: 'testBucket', Object: 'partB' }),
    new Minio.CopySourceOptions({ Bucket: 'testBucket', Object: 'partC' }),
];

minio.composeObject(destObjConfig, sourceObjList, (error: Error | null, result: Minio.SourceObjectStats) => {
    console.log(error, result);
});
minio.composeObject(destObjConfig, sourceObjList);
minio.composeObject(destObjConfig, sourceObjList).then(result => {
    console.log(result);
});

minio.selectObjectContent(
    'testBucket',
    'hello.jpg',
    {
        expression: 'SELECT * FROM s3object s',
        expressionType: 'SQL',
        inputSerialization: { CSV: { FileHeaderInfo: 'USE' }, CompressionType: 'NONE' },
        outputSerialization: { CSV: { RecordDelimiter: '\n', FieldDelimiter: ',' } },
        requestProgress: { Enabled: true },
    },
    (error: Error | null) => {
        console.log(error);
    },
);
minio.selectObjectContent('testBucket', 'hello.jpg', {
    expression: 'SELECT * FROM s3object s',
    expressionType: 'SQL',
    inputSerialization: { CSV: { FileHeaderInfo: 'USE' }, CompressionType: 'NONE' },
    outputSerialization: { CSV: { RecordDelimiter: '\n', FieldDelimiter: ',' } },
    requestProgress: { Enabled: true },
});

// Presigned operations
minio.presignedUrl('GET', 'testBucket', 'hello.jpg', (error: Error | null, url: string) => {
    console.log(error, url);
});
minio.presignedUrl('GET', 'testBucket', 'hello.jpg', 84600, (error: Error | null, url: string) => {
    console.log(error, url);
});
minio.presignedUrl(
    'GET',
    'testBucket',
    'hello.jpg',
    84600,
    { prefix: 'data', 'max-keys': 1000 },
    (error: Error | null, url: string) => {
        console.log(error, url);
    },
);
minio.presignedUrl('GET', 'testBucket', 'hello.jpg');
minio.presignedUrl('GET', 'testBucket', 'hello.jpg', 84600);
minio.presignedUrl('GET', 'testBucket', 'hello.jpg', 84600, { prefix: 'data', 'max-keys': 1000 });

minio.presignedGetObject('testBucket', 'hello.jpg', (error: Error | null, url: string) => {
    console.log(error, url);
});
minio.presignedGetObject('testBucket', 'hello.jpg', 84600, (error: Error | null, url: string) => {
    console.log(error, url);
});
minio.presignedGetObject(
    'testBucket',
    'hello.jpg',
    84600,
    { 'content-disposition': 'attachment; filename="image.png"' },
    (error: Error | null, url: string) => {
        console.log(error, url);
    },
);
minio.presignedGetObject(
    'testBucket',
    'hello.jpg',
    84600,
    { 'content-disposition': 'attachment; filename="image.png"' },
    new Date(),
    (error: Error | null, url: string) => {
        console.log(error, url);
    },
);
minio.presignedGetObject('testBucket', 'hello.jpg');
minio.presignedGetObject('testBucket', 'hello.jpg', 84600);
minio.presignedGetObject('testBucket', 'hello.jpg', 84600, {
    'content-disposition': 'attachment; filename="image.png"',
});
minio.presignedGetObject(
    'testBucket',
    'hello.jpg',
    84600,
    { 'content-disposition': 'attachment; filename="image.png"' },
    new Date(),
);

minio.presignedPutObject('testBucket', 'hello.jpg', (error: Error | null, url: string) => {
    console.log(error, url);
});
minio.presignedPutObject('testBucket', 'hello.jpg', 84600, (error: Error | null, url: string) => {
    console.log(error, url);
});
minio.presignedPutObject('testBucket', 'hello.jpg');
minio.presignedPutObject('testBucket', 'hello.jpg', 84600);

const policy = minio.newPostPolicy();
policy.setBucket('testBucket');
policy.setKey('hello.jpg');
policy.setContentLengthRange(0, 100);
policy.setContentDisposition('testDisposition.jpg');
policy.setContentType('image/jpeg');
policy.setContentTypeStartsWith('image/');
policy.setUserMetaData({ key: 'value' });

minio.presignedPostPolicy(policy, (error: Error | null, data: Minio.PostPolicyResult) => {
    console.log(error, data);
});
minio.presignedPostPolicy(policy);

minio.getBucketNotification('testBucket', (error: Error | null, config: Minio.NotificationConfig) => {
    console.log(error, config);
});
minio.getBucketNotification('testBucket');

const notificationConfig = new Minio.NotificationConfig();
const arn: string = Minio.buildARN('aws', 'sns', 'us-west-2', '408065449417', 'resource');
const topic = new Minio.TopicConfig(arn);
notificationConfig.add(topic);
minio.setBucketNotification('testBucket', notificationConfig, (error: Error | null) => {
    console.log(error);
});
minio.setBucketNotification('testBucket', notificationConfig);

minio.removeAllBucketNotification('testBucket', (error: Error | null) => {
    console.log(error);
});
minio.removeAllBucketNotification('testBucket');

const poller = minio.listenBucketNotification('testBucket', 'pref_', '_suf', [Minio.ObjectCreatedAll]);
poller.start();
poller.stop();

minio.getBucketPolicy('testBucket', (error: Error | null, policy: string) => {
    console.log(error, policy);
});
minio.getBucketPolicy('testBucket');

const testPolicy = `{"Version":"2012-10-17","Statement":[{"Action":["s3:GetBucketLocation"],"Effect":"Allow",
"Principal":{"AWS":["*"]},"Resource":["arn:aws:s3:::bucketName"],"Sid":""},{"Action":["s3:ListBucket"],
"Condition":{"StringEquals":{"s3:prefix":["foo","prefix/"]}},"Effect":"Allow","Principal":{"AWS":["*"]},
"Resource":["arn:aws:s3:::bucketName"],"Sid":""},{"Action":["s3:GetObject"],"Effect":"Allow",
"Principal":{"AWS":["*"]},"Resource":["arn:aws:s3:::bucketName/foo*","arn:aws:s3:::bucketName/prefix/*"],"Sid":""}]}
`;
minio.setBucketPolicy('testBucket', testPolicy, (error: Error | null) => {
    console.log(error);
});
minio.setBucketPolicy('testBucket', testPolicy);

minio.extensions.listObjectsV2WithMetadata('testBucket');
minio.extensions.listObjectsV2WithMetadata('testBucket', 'test_');
minio.extensions.listObjectsV2WithMetadata('testBucket', 'test_', true);
minio.extensions.listObjectsV2WithMetadata('testBucket', 'test_', true, 'some_object.jpg');

// @ts-expect-error
minio.setRequestOptions();
minio.setRequestOptions({ auth: 'foo', port: 12345 });
