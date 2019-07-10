// Type definitions for contains-path 1.0
// Project: https://github.com/jonschlinkert/contains-path
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = containsPath;

declare function containsPath(
    filepath: string,
    substr: string,
    options?: containsPath.Options
): boolean;

declare namespace containsPath {
    interface Options {
        nocase?: boolean;
        partialMatch?: boolean;
    }
}
