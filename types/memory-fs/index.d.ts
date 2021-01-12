// Type definitions for memory-fs 0.3.0
// Project: https://github.com/webpack/memory-fs
// Definitions by: e-cloud <https://github.com/e-cloud>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="node" />

declare class MemoryFileSystem {
    data: any;

    constructor(data?: any);

    meta(_path: string): any;

    existsSync(_path: string): boolean;

    statSync(_path: string): {
        isFile: () => boolean;
        isDirectory: () => boolean;
        isBlockDevice: () => boolean;
        isCharacterDevice: () => boolean;
        isSymbolicLink: () => boolean;
        isFIFO: () => boolean;
        isSocket: () => boolean;
    };

    readFileSync(_path: string, encoding?: string): any;

    readdirSync(_path: string): string[];

    mkdirpSync(_path: string): void;

    mkdirSync(_path: string): void;

    _remove(_path: string, name: string, testFn: ((part: string) => boolean)): void;

    rmdirSync(_path: string): void;

    unlinkSync(_path: string): void;

    readlinkSync(_path: string): string;

    writeFileSync(_path: string, content: string | Buffer, encoding?: string): void;

    createReadStream(
        path: string, options?: {
            start: number;
            end: number;
        }
    ): any;

    createWriteStream(path: string, options?: any): any;

    dirname?(arg0: string): string;

    exists(path: string, callback: (isExist: boolean) => void): void;

    writeFile(path: string, content: string | Buffer, callback: (err: Error | undefined) => void): void;
    writeFile(path: string, content: string | Buffer, encoding: string, callback: (err: Error | undefined) => void): void;
    writeFile(arg0: string,arg1: string | Buffer,arg2: (arg0?: NodeJS.ErrnoException) => void): void;

    join(path: string, request: string): string;
  	join?(arg0: string, arg1: string): string;

    pathToArray(path: string): string[];

    normalize(path: string): string;

    stat(path: string, callback: (err: Error | null, result?: any) => void): void;
    stat(arg0: string,arg1: (arg0?: NodeJS.ErrnoException, arg1?: FsStats) => void): void;

    readdir(path: string, callback: (err: Error | null, result?: any) => void): void;

    mkdirp(path: string, callback: (err: Error | null, result?: any) => void): void;

    rmdir(path: string, callback: (err: Error | null, result?: any) => void): void;

    unlink(path: string, callback: (err: Error | null, result?: any) => void): void;

    readlink(path: string, callback: (err: Error | null, result?: any) => void): void;

    mkdir(path: string, callback: (err: Error | null) => void): void;
    mkdir(path: string, optArg: {}, callback: (err: Error | null, result?: any) => void): void;
    mkdir(arg0: string, arg1: (arg0?: ErrnoException | undefined) => void): void;

    readFile(path: string, callback: (err: Error | null, result?: any) => void): void;
    readFile(path: string, optArg: {}, callback: (err: Error | null, result?: any) => void): void;
    readFile(arg0: string, arg1: (arg0?: NodeJS.ErrnoException, arg1?: Buffer) => void): void;

    relative(arg0: string, arg1: string): string;

}

export = MemoryFileSystem;
