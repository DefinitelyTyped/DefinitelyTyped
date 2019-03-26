// Type definitions for tmp 0.1
// Project: http://github.com/raszi/node-tmp
// Definitions by: Jared Klopper <https://github.com/optical>
//                 Gyusun Yeom <https://github.com/Perlmint>
//                 Alan Plum <https://github.com/pluma>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface TmpNameOptions {
    prefix?: string;
    postfix?: string;
    template?: string;
    dir?: string;
    tries?: number;
}

interface FileOptions extends TmpNameOptions {
    mode?: number;
    keep?: boolean;
    discardDescriptor?: boolean;
    detachDescriptor?: boolean;
}

interface DirOptions extends TmpNameOptions {
    mode?: number;
    keep?: boolean;
    unsafeCleanup?: boolean;
}

interface FileResult {
    name: string;
    fd: number;
    removeCallback: () => void;
}

interface DirResult {
    name: string;
    removeCallback: () => void;
}

type FileCallback = (
    err: any,
    name: string,
    fd: number,
    removeCallback: () => void
) => void;

type DirCallback = (err: any, name: string, removeCallback: () => void) => void;

type TmpNameCallback = (err: any, name: string) => void;

declare const tmp: {
    file(options: FileOptions, cb: FileCallback): void;
    file(cb: FileCallback): void;

    fileSync(options?: FileOptions): FileResult;

    dir(options: DirOptions, cb: DirCallback): void;
    dir(cb: DirCallback): void;

    dirSync(options?: DirOptions): DirResult;

    tmpName(options: TmpNameOptions, cb: TmpNameCallback): void;
    tmpName(cb: TmpNameCallback): void;

    tmpNameSync(options?: TmpNameOptions): string;

    setGracefulCleanup(): void;
};

export = tmp;
