declare function readdirRecursive(
    path: string,
    filter?: (name: string, index: number, dir: string) => boolean,
): string[];

export = readdirRecursive;
