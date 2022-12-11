// Type definitions for log-rotate 0.2
// Project: https://github.com/dstokes/log-rotate#readme
// Definitions by: sandrewtx08 <https://github.com/sandrewTx08>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function LogRotate(file: string, options: LogRotate.Options, cb: LogRotate.Callback): void;
declare function LogRotate(file: string, cb: LogRotate.Callback): void;
declare namespace LogRotate {
    type Callback = (err: Error | null, rotated?: string) => void;
    interface Options {
        /**
         * Compress rotated files with gzip
         */
        compress?: boolean;
        /**
         * Move a log file while incrementing existing indexed / rotated logs
         */
        count?: number;
        matcher?: RegExp;
    }
}

export = LogRotate;
