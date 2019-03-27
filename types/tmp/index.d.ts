// Type definitions for tmp 0.1
// Project: http://github.com/raszi/node-tmp
// Definitions by: Jared Klopper <https://github.com/optical>
//                 Gyusun Yeom <https://github.com/Perlmint>
//                 Alan Plum <https://github.com/pluma>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare interface TmpNameOptions {
    prefix?: string;
    postfix?: string;
    template?: string;
    dir?: string;
    tries?: number;
}

declare interface FileOptions extends TmpNameOptions {
    mode?: number;
    keep?: boolean;
    discardDescriptor?: boolean;
    detachDescriptor?: boolean;
}

declare interface DirOptions extends TmpNameOptions {
    mode?: number;
    keep?: boolean;
    unsafeCleanup?: boolean;
}

declare interface FileResult {
    name: string;
    fd: number;
    removeCallback: () => void;
}

declare interface DirResult {
    name: string;
    removeCallback: () => void;
}

declare type FileCallback = (
    err: any,
    name: string,
    fd: number,
    removeCallback: () => void
) => void;

declare type DirCallback = (
    err: any,
    name: string,
    removeCallback: () => void
) => void;

declare type TmpNameCallback = (err: any, name: string) => void;

export function file(options: FileOptions, cb: FileCallback): void;
export function file(cb: FileCallback): void;

export function fileSync(options?: FileOptions): FileResult;

export function dir(options: DirOptions, cb: DirCallback): void;
export function dir(cb: DirCallback): void;

export function dirSync(options?: DirOptions): DirResult;

export function tmpName(options: TmpNameOptions, cb: TmpNameCallback): void;
export function tmpName(cb: TmpNameCallback): void;

export function tmpNameSync(options?: TmpNameOptions): string;

export function setGracefulCleanup(): void;
