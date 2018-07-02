// Type definitions for yesql 3.2
// Project: https://github.com/pihvi/yesql#readme
// Definitions by: Lluís Ulzurrun de Asanza Sáez <https://github.com/Sumolari>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

export function readSqlFiles(
    dir: string,
    options?: {
        pg?: boolean,
        type?: 'pg' | 'mysql'
    }
): string;

export function pg(query: string): (data: object) => string;
export function mysql(query: string): (data: object) => string;
