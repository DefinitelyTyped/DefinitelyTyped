import { Matcher, MatcherOptions } from './matches';

export interface SelectorMatcherOptions extends MatcherOptions {
    selector?: string;
}

export type QueryByAttribute = (
    attribute: string,
    container: HTMLElement,
    id: Matcher,
    options?: MatcherOptions,
) => HTMLElement | null;

export type AllByAttribute = (
    attribute: string,
    container: HTMLElement,
    id: Matcher,
    options?: MatcherOptions,
) => HTMLElement[];

export const queryByAttribute: QueryByAttribute;
export const queryAllByAttribute: AllByAttribute;
export function getElementError(message: string, container: HTMLElement): Error;

/**
 * query methods have a common call signature. Only the return type differs.
 */
export type QueryMethod<Arguments extends any[], Return> = (container: HTMLElement, ...args: Arguments) => Return;
export type QueryBy<Arguments extends any[]> = QueryMethod<Arguments, HTMLElement | null>;
export type GetAllBy<Arguments extends any[]> = QueryMethod<Arguments, HTMLElement[]>;
export type FindAllBy<Arguments extends any[]> = QueryMethod<Arguments, Promise<HTMLElement[]>>;
export type GetBy<Arguments extends any[]> = QueryMethod<Arguments, HTMLElement>;
export type FindBy<Arguments extends any[]> = QueryMethod<Arguments, Promise<HTMLElement>>;

export type BuiltQueryMethods<Arguments extends any[]> = [
    QueryBy<Arguments>,
    GetAllBy<Arguments>,
    GetBy<Arguments>,
    FindAllBy<Arguments>,
    FindBy<Arguments>
];
export function buildQueries<Arguments extends any[]>(
    queryByAll: GetAllBy<Arguments>,
    getMultipleError: (container: HTMLElement, ...args: Arguments) => string,
    getMissingError: (container: HTMLElement, ...args: Arguments) => string,
): BuiltQueryMethods<Arguments>;
