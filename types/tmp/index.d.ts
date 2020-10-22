// Type definitions for tmp 0.2
// Project: http://github.com/raszi/node-tmp
// Definitions by: Jared Klopper <https://github.com/optical>
//                 Gyusun Yeom <https://github.com/Perlmint>
//                 Alan Plum <https://github.com/pluma>
//                 Carsten Klein <https://github.com/silkentrance>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface TmpNameOptions {
    dir?: string;
    name?: string;
    postfix?: string;
    prefix?: string;
    template?: string;
    tmpdir?: string;
    tries?: number;
}

export interface FileOptions extends TmpNameOptions {
    detachDescriptor?: boolean;
    discardDescriptor?: boolean;
    keep?: boolean;
    mode?: number;
}

export interface DirOptions extends TmpNameOptions {
    keep?: boolean;
    mode?: number;
    unsafeCleanup?: boolean;
}

export interface FileResult {
    name: string;
    fd: number;
    removeCallback: () => void;
}

export interface DirResult {
    name: string;
    removeCallback: () => void;
}

export type FileCallback = (
    err: Error|null,
    name: string,
    fd: number,
    removeCallback: () => void
) => void;

export type DirCallback = (
    err: Error|null,
    name: string,
    removeCallback: () => void
) => void;

export type TmpNameCallback = (err: Error|null, name: string) => void;

export const tmpdir: string;

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
