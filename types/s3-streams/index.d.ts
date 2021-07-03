// Type definitions for s3-streams 0.4
// Project: https://github.com/izaakschroeder/s3-streams
// Definitions by: Carl Fürstenberg <https://github.com/azatoth>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { S3 } from 'aws-sdk';
import { Readable, Writable } from 'stream';

export interface StreamOptions {
    /**
     * Number of bytes to read or write before emitting a chunk to the stream.
     * Must be above 5MB for {@link WriteStream}
     *
     * @default 4MB for {@link ReadStream}
     * @default 10MB for {@link WriteStream}
     */
    highWaterMark?: number;
}

export class ReadStream extends Readable {
    constructor(client: S3, options: S3.GetObjectRequest, streamOptions?: StreamOptions);
}

export class WriteStream extends Writable {
    constructor(client: S3, options: S3.CreateMultipartUploadRequest, streamOptions?: StreamOptions);
}
