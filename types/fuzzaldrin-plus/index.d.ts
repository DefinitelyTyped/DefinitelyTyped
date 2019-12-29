// Type definitions for fuzzaldrin-plus 0.6.0
// Project: https://github.com/jeancroy/fuzzaldrin-plus/
// Definitions by:  Jean Christophe Roy <https://github.com/jeancroy>,
//                  Jason Killian <https://github.com/jkillian>
//                  Ronald Rey <https://github.com/reyronald>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

export as namespace fuzzaldrin

export class Query {
    $$__internal: Symbol
}

export interface IOptions {
    allowErrors?: boolean
    usePathScoring?: boolean
    useExtensionBonus?: boolean
    pathSeparator?: '/' | '\\' | string
    optCharRegEx?: RegExp
    wrap?: { tagOpen?: string; tagClass?: string; tagClose?: string }
    preparedQuery?: Query
}

export type IFilterOptions = IOptions & {
    key?: string
    maxResults?: number
    maxInners?: number
}

export function filter<T>(
    data: T[],
    query: string,
    options?: IFilterOptions
): T[]
export function score(str: string, query: string, options?: IOptions): number
export function match(str: string, query: string, options?: IOptions): number[]
export function wrap(str: string, query: string, options?: IOptions): string
export function prepareQuery(query: string, options?: IOptions): Query
