// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

import _ = require("../index");

declare namespace Lodash {
    /**
     * Creates an array of function property names from own and inherited
     * enumerable properties of `object`.
     *
     * @category Object
     * @param object The object to inspect.
     * @returns Returns the new array of property names.
     * @example
     *
     * function Foo() {
     *   this.a = _.constant('a');
     *   this.b = _.constant('b');
     * }
     *
     * Foo.prototype.c = _.constant('c');
     *
     * _.functionsIn(new Foo);
     * // => ['a', 'b', 'c']
     */
    type FunctionsIn = <T extends {}>(object: any) => string[];
}

declare const functionsIn: Lodash.FunctionsIn;
export = functionsIn;
