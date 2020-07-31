// Type definitions for fuzzaldrin-plus 0.6.0
// Project: https://github.com/jeancroy/fuzzaldrin-plus/
// Definitions by:  Jean Christophe Roy <https://github.com/jeancroy>,
//                  Jason Killian <https://github.com/jkillian>
//                  Ronald Rey <https://github.com/reyronald>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

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

export type IFilterOptions<T> = IOptions & {
    key?: T extends string ? never : keyof T
    maxResults?: number
    maxInners?: number
}

export function filter<T>(
    data: T[],
    query: string,
    options?: IFilterOptions<T>
): T[]
export function score(str: string, query: string, options?: IOptions): number
export function match(str: string, query: string, options?: IOptions): number[]
export function wrap(str: string, query: string, options?: IOptions): string
export function prepareQuery(query: string, options?: IOptions): Query
