declare function naturalCompare(
    a: string,
    b: string,
    options?: { caseInsensitive?: boolean | undefined; alphabet?: string | undefined },
): number;

export = naturalCompare;
