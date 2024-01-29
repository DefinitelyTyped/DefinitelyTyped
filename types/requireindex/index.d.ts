declare function requireindex(
    path: string,
    basenames?: readonly string[],
): { [filename: string]: any };

export = requireindex;
