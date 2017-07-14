// Type definitions for gzip-size 3.0
// Project: https://github.com/sindresorhus/gzip-size
// Definitions by: York Yao <https://github.com/plantain-00>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

declare function gzipSize(input: string | Buffer, callback: (error: Error, size: number) => void): string;
export = gzipSize;
declare namespace gzipSize {
    function sync(input: string | Buffer): number;
    function stream(): NodeJS.ReadWriteStream;
}
