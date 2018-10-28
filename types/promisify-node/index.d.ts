// Type definitions for promisify-node 0.4.0
// Project: https://github.com/nodegit/promisify-node
// Definitions by: Borek Bernard <https://github.com/borekb>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


export = promisify;

/**
 * Public API for Promisify.  Will resolve modules names using `require`.
 *
 * @param {*} name - Can be a module name, object, or function.
 * @param {Function} test - Optional function to identify async methods.
 * @param {Boolean} noMutate - Optional set to true to avoid mutating the target.
 * @returns {*} exports - The resolved value from require or passed in value.
 */
declare function promisify(name: string | Object | Function, test?: Function, noMutate?: boolean): any;
