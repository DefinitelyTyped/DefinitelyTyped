/// <reference types="node" />

export = isExe;

declare function isExe(path: string, options?: isExe.Options): Promise<boolean>;
declare function isExe(
    path: string,
    callback: (error: NodeJS.ErrnoException | undefined, isExe: boolean) => void,
): void;
declare function isExe(
    path: string,
    options: isExe.Options,
    callback: (error: NodeJS.ErrnoException | undefined, isExe: boolean) => void,
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
