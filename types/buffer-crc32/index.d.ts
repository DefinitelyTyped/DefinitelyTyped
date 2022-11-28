// Type definitions for buffer-crc32 0.2
// Project: https://github.com/brianloveswords/buffer-crc32
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

export = crc32;

declare function crc32(input: string | Buffer, partialCrc?: Buffer | number): Buffer;

declare namespace crc32 {
    function signed(buffer: string | Buffer, partialCrc?: Buffer | number): number;
    function unsigned(buffer: string | Buffer, partialCrc?: Buffer | number): number;
}
