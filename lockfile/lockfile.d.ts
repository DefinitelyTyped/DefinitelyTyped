// Type definitions for lockfile v0.4.2
// Project: https://github.com/isaacs/lockfile
// Definitions by: Bart van der Schoor <https://github.com/Bartvds>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


export interface Options {
    wait?: number;
    stale?: number;
    retries?: number;
    retryWait?: number;
}

declare export function lock(path: string, opts: Options, callback: (err: Error) => void): void;
declare export function lock(path: string, callback: (err: Error) => void): void;
declare export function lockSync(path: string, opts: Options): void;

declare export function unlock(path: string, callback: (err: Error) => void): void;
declare export function unlockSync(path: string): void;

declare export function check(path: string, opts: Options, callback: (err: Error, isLocked: boolean) => void): void;
declare export function check(path: string, callback: (err: Error, isLocked: boolean) => void): void;
declare export function checkSync(path: string, opts: Options): boolean;
