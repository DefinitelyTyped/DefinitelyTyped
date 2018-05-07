// Type definitions for check-types 7.3
// Project: https://github.com/philbooth/check-types.js
// Definitions by: idchlife <https://github.com/idchlife>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped/
// TypeScript Version: 2.2

type NegationFunction = (val: any) => boolean;

type MaybeFunction = <T>(val: T) => boolean | T;

interface ArrayFunction {
  (a: any): a is any[];

  // TODO: Maybe there is a way to create type guards for array type checks
  // Since syntax is like check.array.of.number(2) - it's not yet clear to me how this even works, so...
  // I might use of: CheckType, but it will just return type guards for primitives and object type
  // and will make variable simply non array type in conditionals.
  of: {
    [method: string]: boolean;
  };
}

interface ArrayLikeFunction {
  (a: any): a is ArrayLike<any>;

  // See in array explanation of this type
  of: {
    [method: string]: boolean;
  };
}

interface IterableFunction {
  (a: any): a is Iterable<any>;

  // See in array explanation of this type
  of: {
    [method: string]: boolean;
  };
}

interface ObjectFunction {
  (a: any): a is object;

  // See in array explanation of this type
  of: {
    [method: string]: boolean;
  };
}

interface AssertFunction extends CheckType {
  <T>(possibleFalsy: T, message?: string, errorType?: { new(...args: any[]): any }): T;
}

interface CheckType {
  /* General predicates */

  equal(a: any, b: any): boolean;
  null(a: any): a is null;
  undefined(a: any): a is undefined;
  assigned(a: any): boolean;
  primitive(a: any): a is number | string | boolean | null | undefined | symbol;
  hasLength(a: any, length: number): boolean;

  /* String predicates */

  string(a: any): a is string;
  emptyString(a: string): boolean;
  nonEmptyString(a: string): boolean;
  contains(a: string, substring: string): boolean;
  match(a: string, b: RegExp): boolean;

  /* Number predicates */

  number(a: any): a is number;
  integer(a: any): a is number;
  zero(a: any): boolean;
  infinity(a: any): boolean;
  greater(num: number, greaterThan: number): boolean;
  greaterOrEqual(num: number, greaterOrEqual: number): boolean;
  less(num: number, lessThan: number): boolean;
  lessOrEqual(num: number, lessOrEqual: number): boolean;
  /**
   * Excluding a and b. Any order of a, b
   */
  between(num: number, a: number, b: number): boolean;
  /**
   * Including a, b. Any order of a, b
   */
  inRange(num: number, a: number, b: number): boolean;
  positive(num: number): boolean;
  negative(num: number): boolean;
  odd(num: number): boolean;
  even(num: number): boolean;

  /* Boolean predicates */

  boolean(a: any): a is boolean;

  /* Object predicates */

  object: ObjectFunction;
  emptyObject(a: object): boolean;
  nonEmptyObject(a: object): boolean;
  /**
   * Checking via instanceof
   */
  instanceStrict<T extends object>(a: any, prototype: T): a is T;
  /**
   * Checking via instanceof, fallback constructor.name and .toString()
   */
  instance<T extends object>(a: any, prototype: T): a is T;
  /**
   * Duck type checking. Structural in other words. Checking if a has all properties of duck
   */
  like<T extends object>(a: any, duck: T): a is T;

  /* Array predicates */

  array: ArrayFunction;
  emptyArray(a: any[]): boolean;
  nonEmptyArray(a: any[]): boolean;
  arrayLike: ArrayLikeFunction;
  iterable: IterableFunction;
  includes(a: any[], value: any): boolean;

  /* Date predicates */

  date(a: any): a is Date;

  /* Function predicates */

  function(a: any): a is (...args: any[]) => any;

  /* Modifiers (some of them in their respected sections) */
  not: CheckType & NegationFunction;
  maybe: CheckType & MaybeFunction;
  assert: AssertFunction;

  /* Batch operations */

  /**
   * Applying predicate to every element of array and returning resulting array
   *
   * Example: apply([2, 3, "four"], check.number) => [true, true, false]
   */
  apply<T>(arr: any[], predicate: (...args: any[]) => T): T[];

  // Also some difficulties with returning object with only defined in predicates object propertis.
  // Will gladly accept help or ideas. Now using any for returned object
  map<T extends { [k: string]: any }>(
    arr: T,
    predicates: Partial<{ [k in keyof T]: (...args: any[]) => boolean }>
  ): Partial<{ [k in keyof T]: any }>;

  all(arr: boolean[] | { [k: string]: boolean }): boolean;

  any(arr: boolean[] | { [k: string]: boolean }): boolean;
}

declare const check: CheckType;

export = check;
