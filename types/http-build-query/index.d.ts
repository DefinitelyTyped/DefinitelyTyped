// Type definitions for http-build-query 0.7
// Project: https://github.com/vladzadvorny/http-build-query
// Definitions by: Alex Ungureanu <https://github.com/alexu740>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function httpBuildQuery(
    queryData: { [param: string]: string | number },
    numericPrefix?: string,
    argSeparator?: string,
    tempKey?: string,
): string;

export = httpBuildQuery;
