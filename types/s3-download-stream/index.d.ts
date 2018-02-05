// Type definitions for s3-download-stream 0.1
// Project: https://github.com/jb55/s3-download-stream
// Definitions by: Caleb Everett <https://github.com/everettcaleb>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />
import { Readable } from "stream";
import { S3 } from "aws-sdk";

declare namespace s3Stream {
    interface S3StreamDownloaderOptions {
        client: S3,
        concurrency?: number,
        chunkSize?: string,
        params: S3.GetObjectRequest
    }
}

declare function s3Stream(options: s3Stream.S3StreamDownloaderOptions): Readable;
export = s3Stream;
