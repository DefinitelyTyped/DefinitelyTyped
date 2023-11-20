declare function pick(
    obj: object,
    paths: string | ReadonlyArray<string | ReadonlyArray<string>>,
    separator?: string,
): object;
export = pick;
