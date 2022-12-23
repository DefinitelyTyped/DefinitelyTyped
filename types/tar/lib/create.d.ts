import zlib = require('zlib');
import Pack = require('./pack.js');

declare namespace create {
    interface FileOptions {
        file: string;
    }

    interface SyncOptions {
        sync: boolean;
    }

    interface FileSyncOptions extends FileOptions, SyncOptions {}

    interface Options extends Partial<FileSyncOptions> {
        onwarn?(code: string, message: string, data?: Buffer): void;
        strict?: boolean;
        cwd?: string[];
        prefix?: string;
        gzip?: boolean | zlib.ZlibOptions;
        filter?(path: string, stat: unknown): boolean;
        portable?: boolean;
        preservePaths?: boolean;
        mode?: number;
        noDirRecurse?: boolean;
        follow?: boolean;
        noPax?: boolean;
        noMtime?: boolean;
        mtime?: Date;

        // Internal
        linkCache?: Map<string, string>;
        statCache?: Map<string, string>;
        readdirCache?: Map<string, string>;
        jobs?: number;
        maxReadSize?: number;
    }
}

type Files = string[] | string;

type Callback = (...args: unknown[]) => void;

type ReturnType<O> = O extends create.FileSyncOptions
    ? undefined
    : O extends create.FileOptions
    ? Promise<unknown>
    : O extends create.SyncOptions
    ? Pack.Sync
    : Pack;

interface Create {
    (files?: Files): ReturnType<unknown>;
    <O extends create.Options>(opt_: O, cb?: Callback): ReturnType<O>;
    <O extends create.Options>(opt_: O, files: Files, cb?: Callback): ReturnType<O>;
}

declare const create: Create;

export = create;
