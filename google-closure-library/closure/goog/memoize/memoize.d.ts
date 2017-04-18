declare module goog {
    function require(name: 'goog.memoize'): typeof goog.memoize;
}

declare module goog {

    /**
     * Decorator around functions that caches the inner function's return values.
     *
     * To cache parameterless functions, see goog.functions.cacheReturnValue.
     *
     * @param {Function} f The function to wrap. Its return value may only depend
     *     on its arguments and 'this' context. There may be further restrictions
     *     on the arguments depending on the capabilities of the serializer used.
     * @param {function(number, Object): string=} opt_serializer A function to
     *     serialize f's arguments. It must have the same signature as
     *     goog.memoize.simpleSerializer. It defaults to that function.
     * @this {Object} The object whose function is being wrapped.
     * @return {!Function} The wrapped function.
     */
    function memoize(f: Function, opt_serializer?: (arg0: number, arg1: Object) => string): void;
}

declare module goog.memoize {

    /**
     * Clears the memoization cache on the given object.
     * @param {Object} cacheOwner The owner of the cache. This is the {@code this}
     *     context of the memoized function.
     */
    function clearCache(cacheOwner: Object): void;

    /**
     * Simple and fast argument serializer function for goog.memoize.
     * Supports string, number, boolean, null and undefined arguments. Doesn't
     * support \x0B characters in the strings.
     * @param {number} functionUid Unique identifier of the function whose result
     *     is cached.
     * @param {Object} args The arguments that the function to memoize is called
     *     with. Note: it is an array-like object, because supports indexing and
     *     has the length property.
     * @return {string} The list of arguments with type information concatenated
     *     with the functionUid argument, serialized as \x0B-separated string.
     */
    function simpleSerializer(functionUid: number, args: Object): string;
}
