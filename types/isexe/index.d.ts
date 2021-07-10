// Type definitions for isexe 2.0
// Project: https://github.com/isaacs/isexe#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

export = isExe;

declare function isExe(path: string, options?: isExe.Options): Promise<boolean>;
declare function isExe(
    path: string,
    callback: (error: NodeJS.ErrnoException | undefined, isExe: boolean) => void
): void;
declare function isExe(
    path: string,
    options: isExe.Options,
    callback: (error: NodeJS.ErrnoException | undefined, isExe: boolean) => void
): void;

declare namespace isExe {
    function sync(path: string, options?: Options): boolean;

    interface Options {
        ignoreErrors?: boolean | undefined;
        uid?: number | undefined;
        gid?: number | undefined;
        pathExt?: string | undefined;
    }
}
