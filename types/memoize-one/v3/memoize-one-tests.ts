import memoizeOne, { EqualityFn } from 'memoize-one';

declare function add(a: number, b: number): number ;
declare function lousyEqualityFn(a: any, b: any): boolean;
declare function strictEqualityFn<T>(a: T, b: T): boolean;

/**
 * Accepts a second argument.
 */
memoizeOne(add); // $ExpectType (a: number, b: number) => number
memoizeOne(add, lousyEqualityFn); // $ExpectType (a: number, b: number) => number
memoizeOne(add, strictEqualityFn); // $ExpectType (a: number, b: number) => number

/**
 * The second argument can be, but doesn't have to be strictly typed.
 */
memoizeOne(add, (a, b) => a === b); // $ExpectType (a: number, b: number) => number
memoizeOne(add, (a: string, b: string) => a === b); // $ExpectType (a: number, b: number) => number

/**
 * Function passed as the second argument accepts exactly two arguments.
 */
memoizeOne(add, (a: number, b: number, c: number) => a === b || c); // $ExpectError

/**
 * Function passed as the second argument returns a boolean.
 */
memoizeOne(add, (a: string, b: string) => 0); // $ExpectError

/**
 * The `EqualityFn` type is publicly accessible.
 */
const simpleIsEqual: EqualityFn = (x: number, y: number): boolean => (x === y);
