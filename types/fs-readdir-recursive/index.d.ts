declare function readdirRecursive(
    path: string,
    filter?: (name: string, index: number, dir: string) => boolean,
    files?: string[],
    prefix?: string,
): string[];

export = readdirRecursive;
