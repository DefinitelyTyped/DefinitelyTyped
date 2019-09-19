// Type definitions for empty-dir 2.0
// Project: https://github.com/gulpjs/empty-dir
// Definitions by: BendingBender <https://github.com/BendingBender>
//                 Daniel Cassidy <https://github.com/djcsdy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

export = emptyDir;

declare function emptyDir(
    dir: string,
    cb: (err: NodeJS.ErrnoException, isEmpty: boolean) => void
): void;
declare function emptyDir(
    dir: string,
    filter: (path: string) => boolean,
    cb: (err: NodeJS.ErrnoException, isEmpty: boolean) => void
): void;
declare function emptyDir(
    dir: string,
    filter?: (path: string) => boolean
): Promise<boolean>;

declare namespace emptyDir {
    function sync(dir: string, filter?: (path: string) => boolean): boolean;
}
