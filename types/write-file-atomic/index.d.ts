// Type definitions for write-file-atomic 2.1
// Project: https://github.com/iarna/write-file-atomic
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

export = writeFile;

declare function writeFile(filename: string, data: string | Buffer, options: writeFile.Options, callback: (error?: Error) => void): void;
declare function writeFile(filename: string, data: string | Buffer, callback: (error?: Error) => void): void;

declare namespace writeFile {
    function sync(filename: string, data: string | Buffer, options?: Options): void;

    interface Options {
        chown?: {
            uid: number;
            gid: number;
        };
        encoding?: string;
        fsync?: boolean;
        mode?: number;
    }
}
