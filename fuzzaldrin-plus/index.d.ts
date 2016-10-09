// Type definitions for fuzzaldrin-plus
// Project: https://github.com/jeancroy/fuzzaldrin-plus/
// Definitions by: Jean Christophe Roy <https://github.com/jeancroy>, Jason Killian <https://github.com/jkillian>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace fuzzaldrin;

export interface QueryOptions {
    pathSeparator?: string;
    optCharRegEx?: RegExp;
}

export interface ScoringOptions extends QueryOptions {
    allowErrors?: boolean;
    usePathScoring?: boolean;
    preparedQuery?: PreparedQuery;
    useExtensionBonus?: boolean;
}

export interface FilterOptions extends ScoringOptions {
    key?: string;
    maxInners?: number;
    maxResults?: number;
}

export interface WrapOptions extends ScoringOptions {
    wrap?: {tagClass: string, tagOpen: string, tagClose: string}; 
}

export type PreparedQuery = { __internalAPIBrand: string; };

export function filter<T>(data: T[], query: string, options?: FilterOptions): T[];
export function score(str: string, query: string, options?: ScoringOptions): number;
export function match(str: string, query: string, options?: ScoringOptions): number[];
export function wrap(str: string, query: string, options?: WrapOptions): string;
export function prepareQuery(query: string, options?: QueryOptions): PreparedQuery;
