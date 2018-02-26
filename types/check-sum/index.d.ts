// Type definitions for check-sum 0.1
// Project: https://github.com/stream-utils/check-sum
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />
import { Readable } from 'stream';

export = checksum;

declare function checksum(stream: Readable, hashes: checksum.Hashes, callback: (error: checksum.ChecksumError | any) => void): (fn: () => void) => void;
declare function checksum(path: string, hashes: checksum.Hashes, callback: (error: checksum.ChecksumError | Error | undefined) => void): (fn: () => void) => void;

declare namespace checksum {
    interface ChecksumError {
        algorithm: string;
        expected: string;
        actual: string;
    }

    interface Hashes {
        [algorithm: string]: string | Buffer;
    }
}
