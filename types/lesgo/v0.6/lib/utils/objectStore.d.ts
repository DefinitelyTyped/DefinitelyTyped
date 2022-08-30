import { BucketName, ObjectKey, GetObjectOutput } from 'aws-sdk/clients/s3';
import S3Service from '../services/S3Service';

export function getObject(key: ObjectKey, bucketName: BucketName): Promise<GetObjectOutput>;

declare const s3: S3Service;
export default s3;
