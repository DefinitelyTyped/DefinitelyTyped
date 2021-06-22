import * as AWS from 'aws-sdk';
import * as S3S from 's3-streams';

const s3 = new AWS.S3();
const ws = new S3S.WriteStream(
    s3,
    {
        Bucket: 'my-bucket',
        Key: 'my-key',
    },
    { highWaterMark: 42 },
);

const rs = new S3S.ReadStream(
    s3,
    {
        Bucket: 'my-bucket',
        Key: 'my-key',
    },
    { highWaterMark: 42 },
);

rs.pipe(ws);
