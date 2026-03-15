/**
 * Visit a method over the items in an object, or map visit over the objects in an array.
 *
 * @param collection - The target collection object
 * @param method - The method name to call
 * @param val - Value(s) to pass; array triggers mapVisit, object triggers visit
 * @returns The collection object
 */
declare function visit<T extends object>(collection: T, method: string, val: any): T;

export = visit;
