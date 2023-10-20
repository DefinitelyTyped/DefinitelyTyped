declare function requireindex(
    path: string,
    basenames?: ReadonlyArray<string>,
): { [filename: string]: any };

export = requireindex;
