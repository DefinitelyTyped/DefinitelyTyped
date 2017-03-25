// Type definitions for memory-fs 0.3.0
// Project: https://github.com/webpack/memory-fs
// Definitions by: e-cloud <https://github.com/e-cloud>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

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

    readlinkSync(_path: string): void;

    writeFileSync(_path: string, content: string | Buffer, encoding?: string): void;

    createReadStream(
        path: string, options: {
            start: number;
            end: number;
        }
    ): any;

    createWriteStream(path: string, options: any): any;

    exists(path: string, callback: (isExist: boolean) => any): any;

    writeFile(path: string, content: string | Buffer, callback: (err?: Error) => any): any;

    writeFile(path: string, content: string | Buffer, encoding: string, callback: (err?: Error) => any): any;

    join(path: string, request: string): string;

    pathToArray(path: string): string[];

    normalize(path: string): string;

    stat(path: string, callback: (err?: Error, result?: any) => any): void;

    readdir(path: string, callback: (err?: Error, result?: any) => any): void;

    mkdirp(path: string, callback: (err?: Error, result?: any) => any): void;

    rmdir(path: string, callback: (err?: Error, result?: any) => any): void;

    unlink(path: string, callback: (err?: Error, result?: any) => any): void;

    readlink(path: string, callback: (err?: Error, result?: any) => any): void;

    mkdir(path: string, optArg: {}, callback: (err?: Error, result?: any) => any): void;

    readFile(path: string, optArg: {}, callback: (err?: Error, result?: any) => any): void;
}

export = MemoryFileSystem;
