import zlib = require('zlib');
import MiniPass = require('minipass');
import ReadEntry = require('./read-entry');
import Warner = require('./warn-mixin');

declare namespace Pack {
    type Sync = PackSync;

    interface Options {
        onwarn?(code: string, message: string, data?: Buffer): void;
        strict?: boolean;
        cwd?: string[];
        prefix?: string;
        gzip?: boolean | zlib.ZlibOptions;
        filter?(path: string, stat: unknown): boolean;
        portable?: boolean;
        preservePaths?: boolean;
        linkCache?: Map<string, string>;
        statCache?: Map<string, string>;
        readdirCache?: Map<string, string>;
        jobs?: number;
        maxReadSize?: number;
        noDirRecurse?: boolean;
        follow?: boolean;
        noPax?: boolean;
        noMtime?: boolean;
        mtime?: Date;
    }
}

interface Pack extends MiniPass<ReadEntry | string>, Warner {
    linkCache: Map<string, string>;
    readdirCache: Map<string, string>;
    statCache: Map<string, string>;

    add(path: string): this;
    pause(): void;
}

declare const Pack: {
    Sync: typeof PackSync;

    new (opt?: Pack.Options): Pack;
};

declare class PackSync extends Pack {
    // pause/resume are no-ops in sync streams.
    pause(): void;
    resume(): void;
}

export = Pack;
