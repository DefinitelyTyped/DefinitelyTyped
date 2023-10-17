declare function logRotate(file: string, options: logRotate.Options, cb: logRotate.Callback): void;
declare function logRotate(file: string, cb: logRotate.Callback): void;
declare namespace logRotate {
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

export = logRotate;
