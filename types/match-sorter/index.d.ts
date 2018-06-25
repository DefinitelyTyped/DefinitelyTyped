// Type definitions for match-sorter 2.2
// Project: https://github.com/kentcdodds/match-sorter#readme
// Definitions by: Claas Ahlrichs <https://github.com/claasahl>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export namespace rankings {
    const CASE_SENSITIVE_EQUAL: 9;
    const EQUAL: 8;
    const STARTS_WITH: 7;
    const WORD_STARTS_WITH: 6;
    const STRING_CASE: 5;
    const STRING_CASE_ACRONYM: 4;
    const CONTAINS: 3;
    const ACRONYM: 2;
    const MATCHES: 1;
    const NO_MATCH: 0;
}

interface MinRanking {
    minRanking: number,
    key: string
}

interface MaxRanking {
    maxRanking: number,
    key: string
}

interface MinMaxRanking {
    minRanking: number,
    maxRanking: number,
    key: string
}

interface Options<T> {
    keys?: (string | ((item: T) => string) | MinRanking | MaxRanking | MinMaxRanking)[],
    threshold?: number,
    keepDiacritics?: boolean
}

/**
 * Takes an array of items and a value and returns a new array with the items that match the given value
 * @param {Array} items - the items to sort
 * @param {String} value - the value to use for ranking
 * @param {Options} options - Some options to configure the sorter
 * @return {Array} - the new sorted array
 */
export default function matchSorter<T>(items: T[], value: string, options?: Options<T>): T[];


/*~ If this module is a UMD module that exposes a global variable 'myLib' when
 *~ loaded outside a module loader environment, declare that global here.
 *~ Otherwise, delete this declaration.
 */
export as namespace myLib;

/*~ If this module has methods, declare them as functions like so.
 */
export function myMethod(a: string): string;
export function myOtherMethod(a: number): number;

/*~ You can declare types that are available via importing the module */
export interface someType {
    name: string;
    length: number;
    extras?: string[];
}

/*~ You can declare properties of the module using const, let, or var */
export const myField: number;

/*~ If there are types, properties, or methods inside dotted names
 *~ of the module, declare them inside a 'namespace'.
 */
export namespace subProp {
    /*~ For example, given this definition, someone could write:
     *~   import { subProp } from 'yourModule';
     *~   subProp.foo();
     *~ or
     *~   import * as yourMod from 'yourModule';
     *~   yourMod.subProp.foo();
     */
    export function foo(): void;
}