// Type definitions for untar.js 0.3
// Project: https://github.com/antimatter15/untar.js
// Definitions by: Andrew Branch <https://github.com/andrewbranch>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface TarLocalFile {
    readonly isValid: true;
    readonly name: string;
    readonly mode: string;
    readonly uid: string;
    readonly gid: string;
    readonly size: number;
    readonly mtime: string;
    readonly chksum: string;
    readonly typeflag: string;
    readonly linkname: string;
    readonly maybeMagic: string;
    readonly filename: string;
    readonly fileData: Uint8Array;

    readonly version?: string;
    readonly uname?: string;
    readonly gname?: string;
    readonly devmajor?: string;
    readonly devminor?: string;
    readonly prefix?: string;
}

export function untar(buffer: ArrayBuffer): TarLocalFile[];
