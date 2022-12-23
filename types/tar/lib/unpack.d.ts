import Parser = require('./parse');
import ReadEntry = require('./read-entry');

declare namespace Unpack {
    type Sync = UnpackSync;

    interface Options extends Parser.Options {
        cwd?: string[];
        newer?: boolean;
        keep?: boolean;
        preservePaths?: boolean;
        unlink?: boolean;
        strip?: boolean;
        umask?: number;
        dmode?: number;
        fmode?: number;
        dirCache?: Map<string, string>;
        maxMetaEntrySize?: number;
        preserveOwner?: boolean;
        win32?: boolean;
        uid?: number;
        gid?: number;
        noMtime?: boolean;
        transform?(entry: ReadEntry): NodeJS.WritableStream | undefined | false | null;
        noChmod?: boolean;
    }
}

declare class Unpack extends Parser {
    static Sync: typeof UnpackSync;

    constructor(opt?: Unpack.Options);
}

declare class UnpackSync extends Unpack {}

export = Unpack;
