import type { FileAndDirCandidates, FileCandidates } from './types';

export class FailedToResolvePathError extends Error {
    candidates: FileAndDirCandidates;
    constructor(candidates: FileAndDirCandidates);
}

export class FailedToResolveNameError extends Error {
    dirPaths: ReadonlyArray<string>;
    extraPaths: ReadonlyArray<string>;
    constructor(dirPaths: ReadonlyArray<string>, extraPaths: ReadonlyArray<string>);
}

export class InvalidPackageError extends Error {
    /**
     * The file candidates we tried to find to resolve the `main` field of the
     * package. Ex. `/js/foo/beep(.js|.json)?` if `main` is specifying `./beep`
     * as the entry point.
     */
    fileCandidates: FileCandidates;

    /**
     * The 'index' file candidates we tried to find to resolve the `main` field of
     * the package. Ex. `/js/foo/beep/index(.js|.json)?` if `main` is specifying
     * `./beep` as the entry point.
     */
    indexCandidates: FileCandidates;

    /**
     * The module path prefix we where trying to resolve. For example './beep'.
     */
    mainPrefixPath: string;

    /**
     * Full path the package we were trying to resolve.
     * Ex. `/js/foo/package.json`.
     */
    packageJsonPath: string;

    constructor(opts: Readonly<{
        fileCandidates: FileCandidates;
        indexCandidates: FileCandidates;
        mainPrefixPath: string;
        packageJsonPath: string;
    }>);
}
