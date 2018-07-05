// Type definitions for stream-series
// Project: https://github.com/rschmukler/stream-series
// Definitions by: Keita Kagurazaka <https://github.com/k-kagurazaka>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />


declare function series<T extends NodeJS.ReadableStream>(...streams: T[]): NodeJS.ReadWriteStream;
export = series;
