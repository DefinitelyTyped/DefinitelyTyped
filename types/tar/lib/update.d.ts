import zlib = require('zlib');

declare namespace update {
    interface SyncOptions {
        sync?: boolean;
    }

    interface Options extends SyncOptions {
        file: string;
        onwarn?(code: string, message: string, data?: Buffer): void;
        strict?: boolean;
        cwd?: string[];
        prefix?: string;
        gzip?: boolean | zlib.ZlibOptions;
        filter?(path: string, stat: unknown): boolean;
        portable?: boolean;
        preservePaths?: boolean;
        maxReadSize?: number;
        noDirRecurse?: boolean;
        follow?: boolean;
        noPax?: boolean;
        noMtime?: boolean;
        mtime?: Date;
    }
}

type Files = string[] | string;

type Callback = (...args: unknown[]) => void;

type ReturnType<O> = O extends update.SyncOptions ? undefined : Promise<unknown>;

interface Update {
    <O extends update.Options>(opt_: O, files: Files, cb?: Callback): ReturnType<O>;
}

declare const update: Update;

export = update;
