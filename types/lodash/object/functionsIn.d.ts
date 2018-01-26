import * as _ from "..";
declare module ".." {
    interface LoDashStatic {
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
        functionsIn<T extends {}>(object: any): string[];
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.functionsIn
         */
        functionsIn(): LoDashImplicitWrapper<string[]>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.functionsIn
         */
        functionsIn(): LoDashExplicitWrapper<string[]>;
    }
}