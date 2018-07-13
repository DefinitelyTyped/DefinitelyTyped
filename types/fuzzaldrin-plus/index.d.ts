// Type definitions for fuzzaldrin-plus 0.6.0
// Project: https://github.com/jeancroy/fuzzaldrin-plus/
// Definitions by:  Jean Christophe Roy <https://github.com/jeancroy>,
//                  Jason Killian <https://github.com/jkillian>
//                  Ronald Rey <https://github.com/reyronald>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace fuzzaldrin

export class Query {
    $$__internal: Symbol
}

export interface IFuzzaldrinPlusOptions {
    allowErrors?: boolean
    usePathScoring?: boolean
    useExtensionBonus?: boolean
    pathSeparator?: '/' | '\\' | string
    optCharRegEx?: RegExp
    wrap?: { tagOpen?: string; tagClass?: string; tagClose?: string }
    preparedQuery?: Query
}

export type IFuzzaldrinPlusFilterOptions = IFuzzaldrinPlusOptions & {
    key?: string
    maxResults?: number
    maxInners?: number
}

export function filter<T>(
    data: T[],
    query: string,
    options?: IFuzzaldrinPlusFilterOptions
): T[]
export function score(
    str: string,
    query: string,
    options?: IFuzzaldrinPlusOptions
): number
export function match(
    str: string,
    query: string,
    options?: IFuzzaldrinPlusOptions
): number[]
export function wrap(
    str: string,
    query: string,
    options?: IFuzzaldrinPlusOptions
): string
export function prepareQuery(
    query: string,
    options?: IFuzzaldrinPlusOptions
): Query
