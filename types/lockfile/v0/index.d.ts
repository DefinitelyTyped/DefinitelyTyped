export interface Options {
    wait?: number | undefined;
    stale?: number | undefined;
    retries?: number | undefined;
    retryWait?: number | undefined;
}

export function lock(path: string, opts: Options, callback: (err: Error) => void): void;
export function lock(path: string, callback: (err: Error) => void): void;
export function lockSync(path: string, opts: Options): void;

export function unlock(path: string, callback: (err: Error) => void): void;
export function unlockSync(path: string): void;

export function check(path: string, opts: Options, callback: (err: Error, isLocked: boolean) => void): void;
export function check(path: string, callback: (err: Error, isLocked: boolean) => void): void;
export function checkSync(path: string, opts: Options): boolean;
