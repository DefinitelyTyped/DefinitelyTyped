/**
 * Adds two values. Equivalent to `a + b` but curried.
 *
 * @example
 * ```typescript
 * R.add(2, 3);       //=>  5
 * R.add(7)(10);      //=> 17
 * ```
 */
declare function add(a: number, b: number): number;
declare function add(a: number): (b: number) => number;

export { add };
export default add;
