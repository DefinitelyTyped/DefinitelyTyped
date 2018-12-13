// Type definitions for empty-dir 1.0
// Project: https://github.com/js-cli/js-empty-dir
// Definitions by: BendingBender <https://github.com/BendingBender>
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

declare namespace emptyDir {
    function sync(dir: string, filter?: (path: string) => boolean): boolean;
}
