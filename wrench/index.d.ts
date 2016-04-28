// Type definitions for wrench
// Project: https://github.com/ryanmcgrath/wrench-js
// Definitions by: Carlos Ballesteros Velasco <https://github.com/soywiz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// Imported from: https://github.com/soywiz/typescript-node-definitions/wrench.d.ts


export declare function readdirSyncRecursive(baseDir: string): string[];
export declare function rmdirSyncRecursive(path: string, failSilent?: boolean): void;
export declare function copyDirSyncRecursive(sourceDir: string, newDirLocation: string, opts?: { preserve?: boolean; }): void;
export declare function chmodSyncRecursive(sourceDir: string, filemode: number): void;
export declare function chownSyncRecursive(sourceDir: string, uid: number, gid: number): void;
export declare function mkdirSyncRecursive(path: string, mode: number): void;

export declare function readdirRecursive(baseDir: string, fn: (err: Error, files: string[]) => void): void;
export declare function rmdirRecursive(path: string, fn: (err: Error) => void): void;
export declare function copyDirRecursive(srcDir: string, newDir: string, fn: (err: Error) => void): void;

export declare class LineReader {
    constructor(filename: string, bufferSize?: number);

    getBufferAndSetCurrentPosition(position: number): number;
    hasNextLine(): boolean;
    getNextLine(): string;
}
