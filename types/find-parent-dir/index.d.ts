// Type definitions for find-parent-dir 0.3
// Project: https://github.com/thlorenz/find-parent-dir
// Definitions by: Ika <https://github.com/ikatyang>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Finds the first parent directory that contains a given file or directory.
 */
declare function findParentDir(
    currentFullPath: string,
    clue: string,
    cb: (err: any, dir: string | null) => void
): void;

declare namespace findParentDir {
    function sync(currentFullPath: string, clue: string): string | null;
}

export = findParentDir;
