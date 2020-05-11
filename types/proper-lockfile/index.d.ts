// Type definitions for proper-lockfile 4.1
// Project: https://github.com/moxystudio/node-proper-lockfile
// Definitions by: Nikita Volodin <https://github.com/qlonik>
//                 Linus Unnebäck <https://github.com/LinusU>
//                 ulrichb <https://github.com/ulrichb>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { OperationOptions } from "retry";

export interface LockOptions {
    stale?: number; // default: 10000
    update?: number; // default: stale/2
    retries?: number | OperationOptions; // default: 0
    realpath?: boolean; // default: true
    fs?: any; // default: graceful-fs
    onCompromised?: (err: Error) => any; // default: (err) => throw err
    lockfilePath?: string; // default: `${file}.lock`
}

export interface UnlockOptions {
    realpath?: boolean; // default: true
    fs?: any; // default: graceful-fs
    lockfilePath?: string; // default: `${file}.lock`
}

export interface CheckOptions {
    stale?: number; // default: 10000
    realpath?: boolean; // default: true
    fs?: any; // default: graceful-fs
    lockfilePath?: string; // default: `${file}.lock`
}

export function lock(file: string, options?: LockOptions): Promise<() => Promise<void>>;
export function unlock(file: string, options?: UnlockOptions): Promise<void>;
export function check(file: string, options?: CheckOptions): Promise<boolean>;

export function lockSync(file: string, options?: LockOptions): () => void;
export function unlockSync(file: string, options?: UnlockOptions): void;
export function checkSync(file: string, options?: CheckOptions): boolean;
