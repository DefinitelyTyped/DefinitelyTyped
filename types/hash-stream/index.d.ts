// Type definitions for hash-stream 1.2
// Project: https://github.com/stream-utils/hash-stream#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />
import * as stream from 'stream';

export = hashStream;

declare function hashStream(stream: stream.Readable, algorithm: string, callback?: (error: any, hash: Buffer) => void): Promise<Buffer>;
declare function hashStream(filename: string, algorithm: string, callback?: (error: Error | null, hash: Buffer) => void): Promise<Buffer>;
