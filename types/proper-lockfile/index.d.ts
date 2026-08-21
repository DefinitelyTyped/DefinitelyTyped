import { OperationOptions } from "retry";

export interface LockOptions {
    stale?: number | undefined; // default: 10000
    update?: number | undefined; // default: stale/2
    retries?: number | OperationOptions | undefined; // default: 0
    realpath?: boolean | undefined; // default: true
    fs?: any; // default: graceful-fs
    onCompromised?: ((err: Error) => any) | undefined; // default: (err) => throw err
    lockfilePath?: string | undefined; // default: `${file}.lock`
}

export interface UnlockOptions {
    realpath?: boolean | undefined; // default: true
    fs?: any; // default: graceful-fs
    lockfilePath?: string | undefined; // default: `${file}.lock`
}

export interface CheckOptions {
    stale?: number | undefined; // default: 10000
    realpath?: boolean | undefined; // default: true
    fs?: any; // default: graceful-fs
    lockfilePath?: string | undefined; // default: `${file}.lock`
}

export function lock(file: string, options?: LockOptions): Promise<() => Promise<void>>;
export function unlock(file: string, options?: UnlockOptions): Promise<void>;
export function check(file: string, options?: CheckOptions): Promise<boolean>;

export function lockSync(file: string, options?: LockOptions): () => void;
export function unlockSync(file: string, options?: UnlockOptions): void;
export function checkSync(file: string, options?: CheckOptions): boolean;
