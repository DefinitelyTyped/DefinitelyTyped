// Type definitions for yesql 3.2
// Project: https://github.com/pihvi/yesql#readme
// Definitions by: Lluís Ulzurrun de Asanza Sáez <https://github.com/Sumolari>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

declare function readSqlFiles(
    dir: string,
    options?: {
        pg?: boolean,
        type?: 'pg' | 'mysql'
    }
): string;

declare namespace readSqlFiles {
    function pg(query: string): (data: object) => {text: string, values: any[]};
    function mysql(query: string): (data: object) => {sql: string, values: any[]};
}

export = readSqlFiles;
