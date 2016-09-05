// Type definitions for s3-upload-stream
// Project: https://github.com/nathanpeck/s3-upload-stream
// Definitions by: Joshua DeVinney <https://github.com/geoffreak>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />
/// <reference path="../aws-sdk/index.d.ts" />

import * as stream from 'stream';
import * as AWS from 'aws-sdk';

interface IS3Stream {
    (client: AWS.S3): IS3StreamUploader
}

interface IS3StreamUploader {
    upload(destinationDetails: AWS.s3.PutObjectRequest, sessionDetails?: any): IS3WriteStream;
}

interface IS3WriteStream extends stream.Writable {
    maxPartSize(sizeInBytes: number): void;
    concurrentParts(numberOfParts: number): void;
}

declare var s3Stream: IS3Stream;
export = s3Stream;
