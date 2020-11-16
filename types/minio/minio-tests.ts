import * as fs from 'fs';
import { Readable as ReadableStream } from 'stream';
import Minio = require('minio');

const minio = new Minio.Client({
    endPoint: 'localhost',
    port: 9000,
    useSSL: false,
    accessKey: 'iV7RAFOtxF',
    secretKey: 'Go1hhOkXnl',
});

minio.makeBucket('testBucket', 'ap-southeast-2', (error: Error|null) => { console.log(error); });
minio.makeBucket('testBucket', 'eu-west-1');
minio.makeBucket('testBucket', 'region-not-from-list');

minio.listBuckets((error: Error|null, bucketList: Minio.BucketItemFromList[]) => { console.log(error, bucketList); });
minio.listBuckets();

minio.bucketExists('testBucket', (error: Error|null, exists: boolean) => { console.log(error, exists); });
minio.bucketExists('testBucket');

minio.removeBucket('testBucket', (error: Error|null) => { console.log(error); });
minio.removeBucket('testBucket');

const objectList = minio.listObjects('testBucket');
objectList.on('data', (item) => { console.log(item.name); });
minio.listObjects('testBucket', 'image_');
minio.listObjects('testBucket', 'audio_', true);
minio.listObjectsV2('testBucket');
minio.listObjectsV2('testBucket', 'image_');
minio.listObjectsV2('testBucket', 'audio_', true);

minio.listIncompleteUploads('testBucket');
minio.listIncompleteUploads('testBucket', 'image_');
minio.listIncompleteUploads('testBucket', 'audio_', true);

minio.getObject('testBucket', 'hello.jpg', (error: Error|null, objectStream: ReadableStream) => { console.log(error, objectStream); });
minio.getObject('testBucket', 'hello.jpg');

minio.getPartialObject('testBucket', 'hello.jpg', 10, (error: Error|null, objectStream: ReadableStream) => { console.log(error, objectStream); });
minio.getPartialObject('testBucket', 'hello.jpg', 10, 20, (error: Error|null, objectStream: ReadableStream) => { console.log(error, objectStream); });
minio.getPartialObject('testBucket', 'hello.jpg', 10);
minio.getPartialObject('testBucket', 'hello.jpg', 10, 20);

minio.fGetObject('testBucket', 'hello.jpg', 'file/path', (error: Error|null) => { console.log(error); });
minio.fGetObject('testBucket', 'hello.jpg', 'file/path');

const metaData = {
    'Content-Type': 'text/html',
    'Content-Language': 123,
    'X-Amz-Meta-Testing': 1234,
    example: 5678
};
minio.putObject('testBucket', 'hello.jpg', fs.createReadStream('hello.jpg'), (error: Error|null, etag: string) => { console.log(error, etag); });
minio.putObject('testBucket', 'hello.jpg', new Buffer('string'), 100, (error: Error|null, etag: string) => { console.log(error, etag); });
minio.putObject('testBucket', 'hello.txt', 'hello.txt content', 100, metaData, (error: Error|null, etag: string) => { console.log(error, etag); });
minio.putObject('testBucket', 'hello.jpg', fs.createReadStream('hello.jpg'));
minio.putObject('testBucket', 'hello.jpg', new Buffer('string'), 100);
minio.putObject('testBucket', 'hello.txt', 'hello.txt content', 100, metaData);
minio.putObject('testBucket', 'hello.txt', 'hello.txt content', metaData);

minio.fPutObject('testBucket', 'hello.jpg', 'file/path', metaData, (error: Error|null, etag: string) => { console.log(error, etag); });
minio.fPutObject('testBucket', 'hello.jpg', 'file/path', metaData);

const conditions = new Minio.CopyConditions();
conditions.setMatchETag('bd891862ea3e22c93ed53a098218791d');
minio.copyObject('testBucket', 'copy-of-hello.jpg', 'hello.jpg', conditions, (error: Error|null, item: Minio.BucketItemCopy) => { console.log(error, item); });
minio.copyObject('testBucket', 'copy-of-hello.jpg', 'hello.jpg', conditions);

minio.statObject('testBucket', 'hello.jpg', (error: Error|null, stat: Minio.BucketItemStat) => { console.log(error, stat); });
minio.statObject('testBucket', 'hello.jpg');

minio.removeObject('testBucket', 'hello.jpg', (error: Error|null) => { console.log(error); });
minio.removeObject('testBucket', 'hello.jpg');

minio.removeObjects('testBucket', ['hello.jpg', 'hello.txt'], (error: Error|null) => { console.log(error); });
minio.removeObjects('testBucket', ['hello.jpg', 'hello.txt']);

minio.removeIncompleteUpload('testBucket', 'hello.jpg', (error: Error|null) => { console.log(error); });
minio.removeIncompleteUpload('testBucket', 'hello.jpg');

minio.presignedUrl('GET', 'testBucket', 'hello.jpg', (error: Error|null, url: string) => { console.log(error, url); });
minio.presignedUrl('GET', 'testBucket', 'hello.jpg', 84600, (error: Error|null, url: string) => { console.log(error, url); });
minio.presignedUrl('GET', 'testBucket', 'hello.jpg', 84600, { prefix: 'data', 'max-keys': 1000 }, (error: Error|null, url: string) => { console.log(error, url); });
minio.presignedUrl('GET', 'testBucket', 'hello.jpg');
minio.presignedUrl('GET', 'testBucket', 'hello.jpg', 84600);
minio.presignedUrl('GET', 'testBucket', 'hello.jpg', 84600, { prefix: 'data', 'max-keys': 1000 });

minio.presignedGetObject('testBucket', 'hello.jpg', (error: Error|null, url: string) => { console.log(error, url); });
minio.presignedGetObject('testBucket', 'hello.jpg', 84600, (error: Error|null, url: string) => { console.log(error, url); });
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

minio.presignedPutObject('testBucket', 'hello.jpg', (error: Error|null, url: string) => { console.log(error, url); });
minio.presignedPutObject('testBucket', 'hello.jpg', 84600, (error: Error|null, url: string) => { console.log(error, url); });
minio.presignedPutObject('testBucket', 'hello.jpg');
minio.presignedPutObject('testBucket', 'hello.jpg', 84600);

const policy = minio.newPostPolicy();
policy.setBucket('testBucket');
policy.setKey('hello.jpg');
minio.presignedPostPolicy(policy, (error: Error|null, data: Minio.PostPolicyResult) => { console.log(error, data); });
minio.presignedPostPolicy(policy);

minio.getBucketNotification('testBucket', (error: Error|null, config: Minio.NotificationConfig) => { console.log(error, config); });
minio.getBucketNotification('testBucket');

const notificationConfig = new Minio.NotificationConfig();
const arn: string = Minio.buildARN('aws', 'sns', 'us-west-2', '408065449417', 'resource');
const topic = new Minio.TopicConfig(arn);
notificationConfig.add(topic);
minio.setBucketNotification('testBucket', notificationConfig, (error: Error|null) => { console.log(error); });
minio.setBucketNotification('testBucket', notificationConfig);

minio.removeAllBucketNotification('testBucket', (error: Error|null) => { console.log(error); });
minio.removeAllBucketNotification('testBucket');

minio.listenBucketNotification('testBucket', 'pref_', '_suf', [ Minio.ObjectCreatedAll ]);

minio.getBucketPolicy('testBucket', (error: Error|null, policy: string) => { console.log(error, policy); });
minio.getBucketPolicy('testBucket');

const testPolicy = `{"Version":"2012-10-17","Statement":[{"Action":["s3:GetBucketLocation"],"Effect":"Allow",
"Principal":{"AWS":["*"]},"Resource":["arn:aws:s3:::bucketName"],"Sid":""},{"Action":["s3:ListBucket"],
"Condition":{"StringEquals":{"s3:prefix":["foo","prefix/"]}},"Effect":"Allow","Principal":{"AWS":["*"]},
"Resource":["arn:aws:s3:::bucketName"],"Sid":""},{"Action":["s3:GetObject"],"Effect":"Allow",
"Principal":{"AWS":["*"]},"Resource":["arn:aws:s3:::bucketName/foo*","arn:aws:s3:::bucketName/prefix/*"],"Sid":""}]}
`;
minio.setBucketPolicy('testBucket',  testPolicy, (error: Error|null) => { console.log(error); });
minio.setBucketPolicy('testBucket', testPolicy);
