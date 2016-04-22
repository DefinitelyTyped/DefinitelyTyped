// Type definitions for wrench
// Project: https://github.com/ryanmcgrath/wrench-js
// Definitions by: Carlos Ballesteros Velasco <https://github.com/soywiz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// Imported from: https://github.com/soywiz/typescript-node-definitions/wrench.d.ts


declare export function readdirSyncRecursive(baseDir: string): string[];
declare export function rmdirSyncRecursive(path: string, failSilent?: boolean): void;
declare export function copyDirSyncRecursive(sourceDir: string, newDirLocation: string, opts?: { preserve?: boolean; }): void;
declare export function chmodSyncRecursive(sourceDir: string, filemode: number): void;
declare export function chownSyncRecursive(sourceDir: string, uid: number, gid: number): void;
declare export function mkdirSyncRecursive(path: string, mode: number): void;

declare export function readdirRecursive(baseDir: string, fn: (err: Error, files: string[]) => void): void;
declare export function rmdirRecursive(path: string, fn: (err: Error) => void): void;
declare export function copyDirRecursive(srcDir: string, newDir: string, fn: (err: Error) => void): void;

declare export class LineReader {
    constructor(filename: string, bufferSize?: number);

    getBufferAndSetCurrentPosition(position: number): number;
    hasNextLine(): boolean;
    getNextLine(): string;
}
