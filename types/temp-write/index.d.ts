// Type definitions for temp-write 3.3
// Project: https://github.com/sindresorhus/temp-write#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />
export = tempWrite;

declare function tempWrite(input: string | Buffer | NodeJS.ReadableStream, filepath?: string): Promise<string>;

declare namespace tempWrite {
    function sync(input: string | Buffer, filepath?: string): string;
}
