import _ = require("../index");
declare module "../index" {
    interface LoDashStatic {
        /**
         * Creates an array of function property names from own enumerable properties
         * of `object`.
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
         * _.functions(new Foo);
         * // => ['a', 'b']
         */
        functions(object: any): string[];
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.functions
         */
        functions(): LoDashImplicitWrapper<string[]>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.functions
         */
        functions(): LoDashExplicitWrapper<string[]>;
    }
}