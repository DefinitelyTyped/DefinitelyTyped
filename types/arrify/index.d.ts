// Type definitions for arrify 1.0
// Project: https://github.com/sindresorhus/arrify
// Definitions by: AnJun Wang <https://github.com/wanganjun>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * @example
 * arrify(undefined) // returns []
 * @example
 * arrify(null)      // returns []
 * @example
 * arrify(1)         // returns [1]
 * @example
 * arrify([2, 3])    // returns [2, 3]
 */
declare function arrify<T>(val: undefined | null | T | T[]): T[];

/**
 * @example
 * // returns []
 * arrify<number, string>(undefined);
 * @example
 * // returns []
 * arrify<number, string>(null);
 * @example
 * let value: number | string[] = 2018;
 * // returns [2018]
 * arrify<number, string>(value);
 * @example
 * let value: number[] | string | string[] = ['a', 'b'];
 * // returns ['a', 'b']
 * arrify<number, string>(value);
 */
declare function arrify<T1, T2>(val: undefined | null | T1 | T2 | T1[] | T2[]): T1[] | T2[];

/**
 * @example
 * // returns []
 * arrify<boolean, number, string>(undefined);
 * @example
 * // returns []
 * arrify<boolean, number, string>(null);
 * @example
 * let value: boolean | number[] | string[] = true;
 * // returns [true]
 * arrify<boolean, number, string>(value);
 * @example
 * let value: boolean[] | number | string[] = ['a', 'b'];
 * // returns ['a', 'b']
 * arrify<boolean, number, string>(value);
 */
declare function arrify<T1, T2, T3>(val: undefined | null | T1 | T2 | T3 | T1[] | T2[] | T3[]): T1[] | T2[] | T3[];

/**
 * @example
 * // returns []
 * arrify<boolean, Date, number, string>(undefined);
 * @example
 * // returns []
 * arrify<boolean, Date, number, string>(null);
 * @example
 * let value: boolean | Date | number[] | string[] = new Date(2018);
 * // returns [ new Date(2018) ]
 * arrify<boolean, Date, number, string>(value);
 * @example
 * let value: boolean[] | Date[] | number | string = [true, false];
 * // returns [true, false]
 * arrify<boolean, Date, number, string>(value);
 */
declare function arrify<T1, T2, T3, T4>(val: undefined | null | T1 | T2 | T3 | T4 | T1[] | T2[] | T3[] | T4[]): T1[] | T2[] | T3[] | T4[];

/**
 * @example
 * // returns []
 * arrify<boolean, Date, number, RegExp, string>(undefined);
 * @example
 * // returns []
 * arrify<boolean, Date, number, RegExp, string>(null);
 * @example
 * let value: boolean | Date | number[] | RegExp | string[] = /test/;
 * // returns [ /test/ ]
 * arrify<boolean, Date, number, RegExp, string>(value);
 * @example
 * let value: boolean[] | Date[] | number | RegExp[] | string = [/test1/, /test2/];
 * // returns [/test1/, /test2/]
 * arrify<boolean, Date, number, RegExp, string>(value);
 */
declare function arrify<T1, T2, T3, T4, T5>(val: undefined | null | T1 | T2 | T3 | T4 | T5 | T1[] | T2[] | T3[] | T4[] | T5[]): T1[] | T2[] | T3[] | T4[] | T5[];

declare namespace arrify {}
export = arrify;
