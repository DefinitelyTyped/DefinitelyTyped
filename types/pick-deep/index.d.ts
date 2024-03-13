declare function pick(
    obj: object,
    paths: string | ReadonlyArray<string | readonly string[]>,
    separator?: string,
): object;
export = pick;
