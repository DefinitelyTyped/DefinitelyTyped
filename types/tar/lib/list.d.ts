import Parse = require('./parse');
import ReadEntry = require('./read-entry');

declare namespace list {
    interface FileOptions {
        file: string;
    }

    interface FileSyncOptions extends FileOptions {
        sync: boolean;
    }

    interface Options extends Partial<FileSyncOptions> {
        strict?: boolean;
        filter?(path: string, entry: ReadEntry): boolean;
        onentry?: (entry: ReadEntry) => void;
        maxReadSize?: number;
        noResume?: boolean;
        onwarn?(code: string, message: string, data?: Buffer): void;
    }
}

type Files = string[] | string;

type Callback = (...args: unknown[]) => void;

type ReturnType<O> = O extends list.FileSyncOptions ? undefined : O extends list.FileOptions ? Promise<unknown> : Parse;

interface List {
    (files?: Files): ReturnType<unknown>;
    <O extends list.Options>(opt_: O, cb?: Callback): ReturnType<O>;
    <O extends list.Options>(opt_: O, files: Files, cb?: Callback): ReturnType<O>;
}

declare const list: List;

export = list;
