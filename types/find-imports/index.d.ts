declare function findImports(
    files: readonly string[] | string,
    options?: {
        flatten?: boolean;
        packageImports?: boolean;
        absoluteImports?: boolean;
        relativeImports?: boolean;
    },
): Record<string, string[]>;

export = findImports;
