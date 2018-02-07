// Type definitions for tmp 0.0
// Project: https://www.npmjs.com/package/tmp
// Definitions by: Jared Klopper <https://github.com/optical>, Gyusun Yeom <https://github.com/Perlmint>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface Options extends SimpleOptions {
    mode?: number;
    discardDescriptor?: boolean;
    detachDescriptor?: boolean;
}

export interface SimpleOptions {
    prefix?: string;
    postfix?: string;
    template?: string;
    dir?: string;
    tries?: number;
    keep?: boolean;
    unsafeCleanup?: boolean;
}

export interface SynchrounousResult {
    name: string;
    fd: number;
    removeCallback(): void;
}

export function file(callback: (err: any, path: string, fd: number, cleanupCallback: () => void) => void): void;
export function file(config: Options, callback?: (err: any, path: string, fd: number, cleanupCallback: () => void) => void): void;

export function fileSync(config?: Options): SynchrounousResult;

export function dir(callback: (err: any, path: string, cleanupCallback: () => void) => void): void;
export function dir(config: Options, callback?: (err: any, path: string, cleanupCallback: () => void) => void): void;

export function dirSync(config?: Options): SynchrounousResult;

export function tmpName(callback: (err: any, path: string) => void): void;
export function tmpName(config: SimpleOptions, callback?: (err: any, path: string) => void): void;

export function tmpNameSync(config?: SimpleOptions): string;

export function setGracefulCleanup(): void;
