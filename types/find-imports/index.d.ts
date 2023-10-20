declare function findImports(
    files: ReadonlyArray<string> | string,
    options?: {
        flatten?: boolean;
        packageImports?: boolean;
        absoluteImports?: boolean;
        relativeImports?: boolean;
    },
): Record<string, string[]>;

export = findImports;
