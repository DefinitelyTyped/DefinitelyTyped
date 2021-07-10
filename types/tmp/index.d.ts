// Type definitions for tmp 0.2
// Project: http://github.com/raszi/node-tmp
// Definitions by: Jared Klopper <https://github.com/optical>
//                 Gyusun Yeom <https://github.com/Perlmint>
//                 Alan Plum <https://github.com/pluma>
//                 Carsten Klein <https://github.com/silkentrance>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface TmpNameOptions {
    dir?: string | undefined;
    name?: string | undefined;
    postfix?: string | undefined;
    prefix?: string | undefined;
    template?: string | undefined;
    tmpdir?: string | undefined;
    tries?: number | undefined;
}

export interface FileOptions extends TmpNameOptions {
    detachDescriptor?: boolean | undefined;
    discardDescriptor?: boolean | undefined;
    keep?: boolean | undefined;
    mode?: number | undefined;
}

export interface DirOptions extends TmpNameOptions {
    keep?: boolean | undefined;
    mode?: number | undefined;
    unsafeCleanup?: boolean | undefined;
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
