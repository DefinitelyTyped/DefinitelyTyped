/// <reference types="node" />

import AWS = require("aws-sdk2-types");
import stream = require("stream");

declare namespace s3Stream {
    interface S3StreamUploader {
        upload(destinationDetails: AWS.S3.PutObjectRequest, sessionDetails?: any): S3WriteStream;
    }

    interface S3WriteStream extends stream.Writable {
        maxPartSize(sizeInBytes: number): void;
        concurrentParts(numberOfParts: number): void;
    }
}

declare function s3Stream(client: AWS.S3): s3Stream.S3StreamUploader;
export = s3Stream;
