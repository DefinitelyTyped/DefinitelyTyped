// Type definitions for find-imports 1.1
// Project: https://github.com/cheton/find-imports
// Definitions by: Chris Lui <https://github.com/compact>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function findImports(
    files: ReadonlyArray<string> | string,
    options?: {
        flatten?: boolean;
        packageImports?: boolean;
        absoluteImports?: boolean;
        relativeImports?: boolean;
    }
): Record<string, string[]>;

export = findImports;
