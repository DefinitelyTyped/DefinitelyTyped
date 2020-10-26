// Type definitions for clone 2.1
// Project: https://github.com/pvorb/node-clone
// Definitions by: Kieran Simpson <https://github.com/kierans>
//                 DG-za <https://github.com/DG-za>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * See clone JS source for API docs
 */

/**
 * @param val the value that you want to clone, any type allowed
 * @param circular Call clone with circular set to false if you are certain that obj contains no circular references. This will give better performance if needed. There is no error if undefined or null is passed as obj.
 * @param depth to which the object is to be cloned (optional, defaults to infinity)
 * @param prototype Sets the prototype to be used when cloning an Object (optional, defaults to __proto__)
 * @param includeNonEnumerable Set to true if the non-enumerable properties should be cloned as well (optional, defaults to false)
 */
declare function clone<T>(val: T, circular?: boolean, depth?: number, prototype?: any, includeNonEnumerable?: boolean): T;

/**
 * @param val the value that you want to clone, any type allowed
 * @param opts a single object that specifies circular, depth, prototype and includeNonEnumerable.
 * @param opts.circular Call clone with circular set to false if you are certain that obj contains no circular references. This will give better performance if needed. There is no error if undefined or null is passed as obj.
 * @param opts.depth Sets depth to which the object is to be cloned (optional, defaults to infinity)
 * @param opts.prototype Sets the prototype to be used when cloning an Object (optional, defaults to __proto__)
 * @param opts.includeNonEnumerable Set to true if the non-enumerable properties should be cloned as well (optional, defaults to false)
 */
declare function clone<T>(val: T, opts: CloneOpts): T;

interface CloneOpts {
    circular?: boolean,
    depth?: number,
    prototype?: any,
    includeNonEnumerable?: boolean
}

declare namespace clone {
    /**
     * @param obj the object that you want to clone
     */
    function clonePrototype<T>(obj: T): T;
}

export = clone
