// Type definitions for deep-assign 0.1
// Project: https://github.com/sindresorhus/deep-assign
// Definitions by: Ionut Costica <https://github.com/souldreamer>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Pretty much just returns the target object
 * @param target Base object
 */
declare function deepAssign<T>(target: T): T;
/**
 * Deeply assigns all the properties of the source object to the
 * target object
 * @param target Base object
 * @param source Extending object
 */
declare function deepAssign<T, U>(target: T, source: U): T & U;
/**
 * Deeply assigns all the properties of the source objects to the
 * target object
 * @param target Base object
 * @param source1 First extending object
 * @param source2 Second extending object
 */
declare function deepAssign<T, U, V>(target: T, source1: U, source2: V): T & U & V;
/**
 * Deeply assigns all the properties of the source objects to the
 * target object
 * @param target Base object
 * @param source1 First extending object
 * @param source2 Second extending object
 * @param source3 Third extending object
 */
declare function deepAssign<T, U, V, W>(target: T, source1: U, source2: V, source3: W): T & U & V & W;
/**
 * Deeply assigns all the properties of the source objects to the
 * target object
 * @param target Base object
 * @param source1 First extending object
 * @param source2 Second extending object
 * @param source3 Third extending object
 * @param source4 Fourth extending object
 */
declare function deepAssign<T, U, V, W, X>(target: T, source1: U, source2: V, source3: W, source4: X): T & U & V & W & X;
/**
 * Deeply assigns all the properties of the source objects to the
 * target object
 * @param target Base object
 * @param source1 First extending object
 * @param source2 Second extending object
 * @param source3 Third extending object
 * @param source4 Fourth extending object
 * @param source5 Fifth extending object
 */
declare function deepAssign<T, U, V, W, X, Y>(target: T, source1: U, source2: V, source3: W, source4: X, source5: Y): T & U & V & W & X & Y;
/**
 * Deeply assigns all the properties of the source objects to the
 * target object
 * @param target Base object
 * @param source1 First extending object
 * @param source2 Second extending object
 * @param source3 Third extending object
 * @param source4 Fourth extending object
 * @param source5 Fifth extending object
 * @param source6 Sixth extending object
 */
declare function deepAssign<T, U, V, W, X, Y, Z>(target: T, source1: U, source2: V, source3: W, source4: X, source5: Y, source6: Z): T & U & V & W & X & Y & Z;
/**
 * Deeply assigns all the properties of the source objects to the
 * target object
 * @param target Base object
 * @param sources Extending objects
 */
declare function deepAssign(target: any, ...sources: any[]): any;

declare namespace deepAssign {}
export = deepAssign;
