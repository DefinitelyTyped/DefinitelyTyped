// Type definitions for yesql 3.2
// Project: https://github.com/pihvi/yesql#readme
// Definitions by: Lluís Ulzurrun de Asanza Sáez <https://github.com/Sumolari>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

declare function readSqlFiles(
    dir: string,
    options?: {
        pg?: boolean;
        type?: 'pg' | 'mysql';
    },
): string;

declare namespace readSqlFiles {
    type AnyParams = Record<string, any>;
    function pg<TParams extends object = AnyParams>(
        query: string,
    ): (params: TParams) => { text: string; values: Array<TParams[keyof TParams]> };
    function mysql<TParams extends object = AnyParams>(
        query: string,
    ): (params: TParams) => { sql: string; values: Array<TParams[keyof TParams]> };
}

export = readSqlFiles;
