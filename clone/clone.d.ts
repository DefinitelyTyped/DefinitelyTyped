// Type definitions for clone 0.1.11
// Project: https://github.com/pvorb/node-clone
// Definitions by: Kieran Simpson <https://github.com/kierans/DefinitelyTyped>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/**
 * See clone JS source for API docs
 */
declare module "clone" {
    /**
     * @param parent
     * @param circular If not given, defaults to true in JS lib.
     */
    function clone(parent: Object, circular?: boolean): Object

    export = clone
}
