// Type definitions for fuzzaldrin-plus
// Project: https://github.com/jeancroy/fuzzaldrin-plus/
// Definitions by: Jean Christophe Roy <https://github.com/jeancroy>, Jason Killian <https://github.com/jkillian>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace fuzzaldrin;

export interface IQueryOptions {
    pathSeparator?: string;
    optCharRegEx?: RegExp;
}

export interface IScoringOptions extends IQueryOptions {
    allowErrors?: boolean;
    isPath?: boolean;
    useExtensionBonus?: boolean;
}

export interface IFilterOptions extends IScoringOptions {
    key?: string;
    maxResults?: number;
}

export type PreparedQuery = { __internalAPIBrand: string; };

export function filter<T>(data: T[], query: string, options?: IFilterOptions): T[];
export function score(str: string, query: string, preparedQuery?: PreparedQuery, options?: IScoringOptions): number;
export function match(str: string, query: string, preparedQuery?: PreparedQuery, options?: IScoringOptions): number[];
export function prepQuery(query: string, options?: IQueryOptions): PreparedQuery;
