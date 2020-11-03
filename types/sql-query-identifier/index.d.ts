// Type definitions for sql-query-identifier 1.1
// Project: https://github.com/maxcnunes/sql-query-identifier
// Definitions by: Matthew Peveler <https://github.com/MasterOdin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface Options {
    /**
     * Disables strict mode which will ignore unknown types (defaults to true).
     */
    strict: boolean;
}

export interface Result {
    start: number;
    end: number;
    text: string;
    type: 'SELECT' | 'INSERT' | 'UPDATE' | 'DELETE' | 'CREATE_TABLE' | 'CREATE_DATABASE' | 'DROP_TABLE' | 'DROP_DATABASE' | 'TRUNCATE' | 'UNKNOWN';
    executionType: 'LISTING' | 'MODIFICATION' | 'UNKNOWN';
}

export function identify(query: string, options?: Options): Result[];
