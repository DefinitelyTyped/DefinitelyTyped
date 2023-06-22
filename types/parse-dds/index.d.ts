// Type definitions for parse-dds 1.0
// Project: https://github.com/Jam3/parse-dds
// Definitions by: 4eb0da <https://github.com/4eb0da>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface DdsInfo {
    // width, height
    shape: [number, number];
    images: Array<{
        // byte offset
        offset: number;
        // by length
        length: number;
        // width, height
        shape: [number, number];
    }>;
    format: 'dxt1' | 'dxt3' | 'dxt5' | 'rgba32f';
    flags: number;
    cubemap: boolean;
}

declare function parse(buffer: ArrayBuffer): DdsInfo;

/**
 * Parse a buffer with dds and returns info about it
 */
export = parse;
