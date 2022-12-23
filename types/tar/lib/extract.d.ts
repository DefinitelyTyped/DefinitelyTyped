import ReadEntry = require('./read-entry');
import Unpack = require('./unpack');

declare namespace extract {
    interface FileOptions {
        file: string;
    }

    interface SyncOptions {
        sync: boolean;
    }

    interface FileSyncOptions extends FileOptions, SyncOptions {}

    interface Options extends Partial<FileSyncOptions> {
        cwd?: string[];
        strict?: boolean;
        filter?(path: string, entry: unknown): boolean;
        newer?: boolean;
        keep?: boolean;
        preservePaths?: boolean;
        unlink?: boolean;
        strip?: boolean;
        onwarn?(code: string, message: string, data?: Buffer): void;
        preserveOwner?: boolean;
        uid?: number;
        gid?: number;
        noMtime?: boolean;
        transform?(entry: ReadEntry): NodeJS.WritableStream | undefined | false | null;
        onentry?(entry: ReadEntry): void;
        noChmod?: boolean;

        // Internal
        maxReadSize?: number;
        umask?: number;
        dmode?: number;
        fmode?: number;
        dirCache?: Map<string, string>;
        maxMetaEntrySize?: number;
    }
}

type Files = string[] | string;

type Callback = (...args: unknown[]) => void;

type ReturnType<O> = O extends extract.FileSyncOptions
    ? undefined
    : O extends extract.FileOptions
    ? Promise<unknown>
    : O extends extract.SyncOptions
    ? Unpack.Sync
    : Unpack;

interface Extract {
    (files?: Files): ReturnType<unknown>;
    <O extends extract.Options>(opt_: O, cb?: (...args: unknown[]) => void): ReturnType<O>;
    <O extends extract.Options>(opt_: O, files: Files, cb?: Callback): ReturnType<O>;
}

declare const extract: Extract;

export = extract;
