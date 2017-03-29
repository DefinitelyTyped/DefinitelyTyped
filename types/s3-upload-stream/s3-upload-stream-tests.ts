import * as fs from 'fs';
import * as S3Stream from 's3-upload-stream';
import * as AWS from 'aws-sdk';

var s3Stream = S3Stream(new AWS.S3());

var read = fs.createReadStream('/path/to/a/file');
var upload = s3Stream.upload({
  Bucket: "bucket-name",
  Key: "key-name",
  ACL: "public-read",
  StorageClass: "REDUCED_REDUNDANCY",
  ContentType: "binary/octet-stream"
});

upload.concurrentParts(5);

read.pipe(upload);
