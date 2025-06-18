declare function httpBuildQuery(
    queryData: { [param: string]: string | number | null },
    numericPrefix?: string,
    argSeparator?: string,
    tempKey?: string,
): string;

export = httpBuildQuery;
