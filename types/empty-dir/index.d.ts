/// <reference types="node" />

export = emptyDir;

declare function emptyDir(
    dir: string | readonly string[],
    cb: (err: NodeJS.ErrnoException, isEmpty: boolean) => void,
): void;
declare function emptyDir(
    dir: string | readonly string[],
    filter: (path: string) => boolean,
    cb: (err: NodeJS.ErrnoException, isEmpty: boolean) => void,
): void;
declare function emptyDir(
    dir: string | readonly string[],
    filter?: (path: string) => boolean,
): Promise<boolean>;

declare namespace emptyDir {
    function sync(dir: string | readonly string[], filter?: (path: string) => boolean): boolean;
}
