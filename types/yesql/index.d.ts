declare function readSqlFiles(
    dir: string,
    options?: {
        pg?: boolean | undefined;
        type?: "pg" | "mysql" | undefined;
    },
): string;

declare namespace readSqlFiles {
    type AnyParams = Record<string, any>;
    interface Options {
        useNullForMissing?: boolean | undefined;
    }
    function pg<TParams extends object = AnyParams>(
        query: string,
        options?: Options,
    ): (params: TParams) => { text: string; values: Array<TParams[keyof TParams]> };
    function mysql<TParams extends object = AnyParams>(
        query: string,
        options?: Options,
    ): (params: TParams) => { sql: string; values: Array<TParams[keyof TParams]> };
}

export = readSqlFiles;
