// Type definitions for tar-js 0.3
// Project: https://github.com/beatgammit/tar-js
// Definitions by: Narazaka <https://github.com/Narazaka>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare class Tar {
    written: number;
    out: Uint8Array;
    constructor(recordsPerBlock?: number);
    append(filepath: string, input: string | Uint8Array, opts?: Tar.TarOptions, callback?: (out: Uint8Array) => any): Uint8Array;
    append(filepath: string, input: string | Uint8Array, callback?: (out: Uint8Array) => any): Uint8Array;
    clear(): void;
}

declare namespace Tar {
    interface TarOptions {
        mode?: number | undefined;
        mtime?: number | undefined;
        uid?: number | undefined;
        gid?: number | undefined;
        owner?: string | undefined;
        group?: string | undefined;
    }
}

export = Tar;
