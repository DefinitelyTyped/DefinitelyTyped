export = containsPath;

declare function containsPath(
    filepath: string,
    substr: string,
    options?: containsPath.Options,
): boolean;

declare namespace containsPath {
    interface Options {
        nocase?: boolean | undefined;
        partialMatch?: boolean | undefined;
    }
}
