/**
 * Finds the first parent directory that contains a given file or directory.
 */
declare function findParentDir(
    currentFullPath: string,
    clue: string,
    cb: (err: any, dir: string | null) => void,
): void;

declare namespace findParentDir {
    function sync(currentFullPath: string, clue: string): string | null;
}

export = findParentDir;
