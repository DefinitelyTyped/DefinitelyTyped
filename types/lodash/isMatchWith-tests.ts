import { isMatchWith } from "lodash";

/**
 * Customizer returns a string (truthy value) — should compile and return boolean.
 */
const result1 = isMatchWith({ a: 1 }, { a: 1 }, () => "yes");
// $ExpectType boolean

/**
 * Customizer returns 0 (falsy value) — should compile and return boolean.
 */
const result2 = isMatchWith({ a: 1 }, { a: 1 }, () => 0);
// $ExpectType boolean

/**
 * Customizer returns null (falsy value) — should compile and return boolean.
 */
const result3 = isMatchWith({ a: 1 }, { a: 1 }, () => null);
// $ExpectType boolean

/**
 * Invalid customizer: number instead of function.
 * Should raise a type error since customizer must be a function.
 */
// @ts-expect-error
isMatchWith({ a: 1 }, { a: 1 }, 123);

/**
 * Invalid customizer: object instead of function.
 * Should raise a type error.
 */
// @ts-expect-error
isMatchWith({ a: 1 }, { a: 1 }, {});

/**
 * Invalid customizer: string instead of function.
 * Should raise a type error.
 */
// @ts-expect-error
isMatchWith({ a: 1 }, { a: 1 }, "not a function");