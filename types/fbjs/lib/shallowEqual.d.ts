/**
 * Performs equality by iterating through keys on an object and returning false
 * when any key has values which are not strictly equal between the arguments.
 * Returns true when the values of all keys are strictly equal.
 */
declare function shallowEqual(objA: any, objB: any): boolean;
declare namespace shallowEqual {}
export = shallowEqual;
