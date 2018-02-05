import * as S3Stream from "s3-download-stream";
import * as AWS from "aws-sdk";
import * as fs from "fs";

// Documentation for "params":
// http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#getObject-property
var config = {
    client: new AWS.S3({}),
    concurrency: 6,
    chunkSize: '512KB',
    params: {
        Key: 'key-name',
        Bucket: 'bucket-name'
    }
}

S3Stream(config)
    .pipe(fs.createWriteStream('/path/to/a/file'));
