// Type definitions for @stamp/is 1.0
// Project: https://github.com/stampit-org/stamp/tree/master/packages/is
// Definitions by: Harris Lummis <https://github.com/lummish>
// Definitions: https://github.con/DefinitelyTyped/DefinitelyTyped
/// <reference types="node" />

declare module "@stamp/is" {
  /**
   * Check if argument is an array
   * @param arg - the argument to check
   * @returns true if argument is an array
   */
  function isArray(arg: any): boolean;
  /**
   * Check if argument is a composable
   * @param arg - the argument to check
   * @returns true if argument is a composable
   */
  function isComposable(arg: any): boolean;
  /**
   * Check if argument is a descriptor
   * @param arg - the argument to check
   * @returns true if argument is a descriptor
   */
  function isDescriptor(arg: any): boolean;
  /**
   * Check if argument is an object
   * @param arg - the argument to check
   * @returns true if argument is an object
   */
  function isObject(arg: any): boolean;
  /**
   * Check if argument is a function
   * @param arg - the argument to check
   * @returns true if argument is a function
   */
  function isFunction(arg: any): boolean;
  /**
   * Check if argument is a plain object
   * @param arg - the argument to check
   * @returns true if argument is a plain object
   */
  function isPlainObject(arg: any): boolean;
  /**
   * Check if argument is a stamp
   * @param arg - the argument to check
   * @returns true if argument is a stamp
   */
  function isStamp(arg: any): boolean;
  /**
   * Check if argument is a string
   * @param arg - the argument to check
   * @returns true if argument is a string
   */
  function isString(arg: any): boolean;
}

declare module "@stamp/is/array" {
  import { isArray } from "@stamp/is";
  export = isArray;
}

declare module "@stamp/is/composable" {
  import { isObject } from "@stamp/is";
  export = isObject;
}

declare module "@stamp/is/descriptor" {
  import { isObject } from "@stamp/is";
  export = isObject;
}

declare module "@stamp/is/function" {
  import { isFunction } from "@stamp/is";
  export = isFunction;
}

declare module "@stamp/is/object" {
  import { isObject } from "@stamp/is";
  export = isObject;
}

declare module "@stamp/is/plain-object" {
  import { isPlainObject } from "@stamp/is";
  export = isPlainObject;
}

declare module "@stamp/is/stamp" {
  import { isStamp } from "@stamp/is";
  export = isStamp;
}

declare module "@stamp/is/string" {
  import { isString } from "@stamp/is";
  export = isString;
}
