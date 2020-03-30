import { Matcher } from './matches';
import * as queries from './queries';

export type BoundFunction<T> = T extends (
    attribute: string,
    element: HTMLElement,
    text: infer P,
    options: infer Q,
) => infer R
    ? (text: P, options?: Q) => R
    : T extends (a1: any, text: infer P, options: infer Q, waitForElementOptions: infer W) => infer R
    ? (text: P, options?: Q, waitForElementOptions?: W) => R
    : T extends (a1: any, text: infer P, options: infer Q) => infer R
    ? (text: P, options?: Q) => R
    : never;
export type BoundFunctions<T> = { [P in keyof T]: BoundFunction<T[P]> };

export type Query = (
    container: HTMLElement,
    ...args: any[]
) => Error | Promise<HTMLElement[]> | Promise<HTMLElement> | HTMLElement[] | HTMLElement | null;

export interface Queries {
    [T: string]: Query;
}

export function getQueriesForElement<T extends Queries = typeof queries>(
    element: HTMLElement,
    queriesToBind?: T,
): BoundFunctions<T>;
