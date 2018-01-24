import * as _ from "..";
declare module ".." {
    interface LoDashStatic {
        /**
         * Checks if `path` is a direct or inherited property of `object`.
         *
         * @category Object
         * @param object The object to query.
         * @param path The path to check.
         * @returns Returns `true` if `path` exists, else `false`.
         * @example
         *
         * var object = _.create({ 'a': _.create({ 'b': _.create({ 'c': 3 }) }) });
         *
         * _.hasIn(object, 'a');
         * // => true
         *
         * _.hasIn(object, 'a.b.c');
         * // => true
         *
         * _.hasIn(object, ['a', 'b', 'c']);
         * // => true
         *
         * _.hasIn(object, 'b');
         * // => false
         */
        hasIn<T>(
            object: T,
            path: PropertyPath
        ): boolean;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.hasIn
         */
        hasIn(path: PropertyPath): boolean;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.hasIn
         */
        hasIn(path: PropertyPath): LoDashExplicitWrapper<boolean>;
    }
}