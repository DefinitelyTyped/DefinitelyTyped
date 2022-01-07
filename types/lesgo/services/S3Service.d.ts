import S3 = require('aws-sdk/clients/s3');

// { ClientConfiguration, BucketName, ObjectKey, GetObjectOutput }

export interface S3ServiceParams {
    accessKeyId: S3.ClientConfiguration['accessKeyId'];
    secretAccessKey: S3.ClientConfiguration['secretAccessKey'];
    region: S3.ClientConfiguration['region'];
}

export default class S3Service {
    s3Instance: S3;

    constructor(opts?: S3ServiceParams);

    getObject(key: S3.ObjectKey, bucketName: S3.BucketName): Promise<S3.GetObjectOutput>;
}
