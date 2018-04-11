// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

type Assign =
    /**
     * Assigns own enumerable properties of source objects to the destination
     * object. Source objects are applied from left to right. Subsequent sources
     * overwrite property assignments of previous sources.
     *
     * **Note:** This method mutates `object` and is loosely based on
     * [`Object.assign`](https://mdn.io/Object/assign).
     *
     * @category Object
     * @param object The destination object.
     * @param [sources] The source objects.
     * @returns Returns `object`.
     * @example
     *
     * function Foo() {
     *   this.c = 3;
     * }
     *
     * function Bar() {
     *   this.e = 5;
     * }
     *
     * Foo.prototype.d = 4;
     * Bar.prototype.f = 6;
     *
     * _.assign({ 'a': 1 }, new Foo, new Bar);
     * // => { 'a': 1, 'c': 3, 'e': 5 }
     */
    (object: ReadonlyArray<any>) => any;

declare const assignAll: Assign;
export = assignAll;
