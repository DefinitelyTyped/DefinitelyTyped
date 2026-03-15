/**
 * Adds a static `extend` method to a class, to simplify inheritance.
 * Extends the static properties, prototype properties, and descriptors
 * from a Parent constructor onto Child constructors.
 *
 * @param Parent - The parent constructor function
 * @param extendFn - Optional custom merge function
 * @returns A function that extends child constructors from the parent
 */
declare function staticExtend(
    Parent: (...args: any[]) => any,
    extendFn?: (Child: (...args: any[]) => any, Parent: (...args: any[]) => any) => void,
): (Ctor: (...args: any[]) => any, proto?: object) => void;

export = staticExtend;
