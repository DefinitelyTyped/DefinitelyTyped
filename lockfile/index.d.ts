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

export declare function lock(path: string, opts: Options, callback: (err: Error) => void): void;
export declare function lock(path: string, callback: (err: Error) => void): void;
export declare function lockSync(path: string, opts: Options): void;

export declare function unlock(path: string, callback: (err: Error) => void): void;
export declare function unlockSync(path: string): void;

export declare function check(path: string, opts: Options, callback: (err: Error, isLocked: boolean) => void): void;
export declare function check(path: string, callback: (err: Error, isLocked: boolean) => void): void;
export declare function checkSync(path: string, opts: Options): boolean;
