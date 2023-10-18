declare function parsePreferHeader(
    preferHeader: string | ReadonlyArray<string> | null | undefined,
): { [key: string]: string | true };

export = parsePreferHeader;
