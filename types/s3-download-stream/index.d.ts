/// <reference types="node" />

import { S3 } from "aws-sdk2-types";
import { Readable } from "stream";

declare namespace s3Stream {
    interface S3StreamDownloaderOptions {
        client: S3;
        concurrency?: number | undefined;
        chunkSize?: string | undefined;
        params: S3.GetObjectRequest;
    }
}

declare function s3Stream(options: s3Stream.S3StreamDownloaderOptions): Readable;
export = s3Stream;
