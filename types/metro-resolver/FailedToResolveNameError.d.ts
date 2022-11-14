export class FailedToResolveNameError extends Error {
    dirPaths: ReadonlyArray<string>;
    extraPaths: ReadonlyArray<string>;
    constructor(dirPaths: ReadonlyArray<string>, extraPaths: ReadonlyArray<string>);
}
