declare function parsePreferHeader(
    preferHeader: string | readonly string[] | null | undefined,
): { [key: string]: string | true };

export = parsePreferHeader;
