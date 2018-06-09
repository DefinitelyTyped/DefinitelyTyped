// Type definitions for @stamp/core 1.0
// Project: https://github.com/stampit-org/stamp/tree/master/packages/core
// Definitions by: Harris Lummis <https://github.com/lummish>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

// Documentation for assign function taken from eslib documentation
// Documentation for merge function taken from lodash merge documentation

declare module "@stamp/core" {
  /**
   * Copy the values of all of the enumerable own properties from one or more source objects to a
   * target object. Returns the target object.
   * @param target The target object to copy to.
   * @param source The source object from which to copy properties.
   * @returns the target object
   */
  function assign<T, U>(target: T, source: U): T & U;
  /**
   * Copy the values of all of the enumerable own properties from one or more source objects to a
   * target object. Returns the target object.
   * @param target The target object to copy to.
   * @param source1 The first source object from which to copy properties.
   * @param source2 The second source object from which to copy properties.
   * @returns the target object
   */
  function assign<T, U, V>(target: T, source1: U, source2: V): T & U & V;
  /**
   * Copy the values of all of the enumerable own properties from one or more source objects to a
   * target object. Returns the target object.
   * @param target The target object to copy to.
   * @param source1 The first source object from which to copy properties.
   * @param source2 The second source object from which to copy properties.
   * @param source3 The third source object from which to copy properties.
   * @returns the target object
   */
  function assign<T, U, V, W>(target: T, source1: U, source2: V, source3: W): T & U & V & W;
  /**
   * Copy the values of all of the enumerable own properties from one or more source objects to a
   * target object. Returns the target object.
   * @param target The target object to copy to.
   * @param sources One or more source objects from which to copy properties.
   * @returns the target object
   */
  function assign(target: object, ...sources: any[]): any;

  /**
   * Recursively merges own and inherited enumerable properties of source
   * objects into the destination object, skipping source properties that resolve
   * to `undefined`. Array and plain object properties are merged recursively.
   * Other objects and value types are overridden by assignment. Source objects
   * are applied from left to right. Subsequent sources overwrite property
   * assignments of previous sources.
   * @param dst The destination object to merge to
   * @param src The source object to merge from
   * @returns the destination object
   */
  function merge<T, U>(
    dst: T,
    src: U
  ): T & U;
  /**
   * Recursively merges own and inherited enumerable properties of source
   * objects into the destination object, skipping source properties that resolve
   * to `undefined`. Array and plain object properties are merged recursively.
   * Other objects and value types are overridden by assignment. Source objects
   * are applied from left to right. Subsequent sources overwrite property
   * assignments of previous sources.
   * @param dst The destination object to merge to
   * @param src1 The first source object to merge from
   * @param src2 The second source object to merge from
   * @returns the destination object
   */
  function merge<T, U, V>(
    dst: T,
    src1: U,
    src2: V,
  ): T & U & V;
  /**
   * Recursively merges own and inherited enumerable properties of source
   * objects into the destination object, skipping source properties that resolve
   * to `undefined`. Array and plain object properties are merged recursively.
   * Other objects and value types are overridden by assignment. Source objects
   * are applied from left to right. Subsequent sources overwrite property
   * assignments of previous sources.
   * @param dst The destination object to merge to
   * @param src1 The first source object to merge from
   * @param src2 The second source object to merge from
   * @param src3 The third source object to merge from
   * @returns the destination object
   */
  function merge<T, U, V, W>(
    dst: T,
    source1: U,
    source2: V,
    source3: W,
  ): T & U & V & W;
  /**
   * Recursively merges own and inherited enumerable properties of source
   * objects into the destination object, skipping source properties that resolve
   * to `undefined`. Array and plain object properties are merged recursively.
   * Other objects and value types are overridden by assignment. Source objects
   * are applied from left to right. Subsequent sources overwrite property
   * assignments of previous sources.
   * @param dst The destination object to merge to
   * @param srcs One or more source objects to merge from
   * @returns the destination object
   */
  function merge(dst: object, ...srcs: any[]): any;
}

declare module "@stamp/core/assign" {
  import { assign } from "@stamp/core";
  export = assign;
}

declare module "@stamp/core/merge" {
  import { merge } from "@stamp/core";
  export = merge;
}
