declare module goog {
    function require(name: 'goog.object'): typeof goog.object;
}

declare module goog.object {

    /**
     * Calls a function for each element in an object/map/hash.
     *
     * @param {Object<K,V>} obj The object over which to iterate.
     * @param {function(this:T,V,?,Object<K,V>):?} f The function to call
     *     for every element. This function takes 3 arguments (the element, the
     *     index and the object) and the return value is ignored.
     * @param {T=} opt_obj This is used as the 'this' object within f.
     * @template T,K,V
     */
    function forEach<T, K, V>(obj: {[index: string]: V}, f: (arg0: V, arg1: any, arg2: {[index: string]: V}) => any, opt_obj?: T): void;

    /**
     * Calls a function for each element in an object/map/hash. If that call returns
     * true, adds the element to a new object.
     *
     * @param {Object<K,V>} obj The object over which to iterate.
     * @param {function(this:T,V,?,Object<K,V>):boolean} f The function to call
     *     for every element. This
     *     function takes 3 arguments (the element, the index and the object)
     *     and should return a boolean. If the return value is true the
     *     element is added to the result object. If it is false the
     *     element is not included.
     * @param {T=} opt_obj This is used as the 'this' object within f.
     * @return {!Object<K,V>} a new object in which only elements that passed the
     *     test are present.
     * @template T,K,V
     */
    function filter<T, K, V>(obj: {[index: string]: V}, f: (arg0: V, arg1: any, arg2: {[index: string]: V}) => boolean, opt_obj?: T): {[index: string]: V};

    /**
     * For every element in an object/map/hash calls a function and inserts the
     * result into a new object.
     *
     * @param {Object<K,V>} obj The object over which to iterate.
     * @param {function(this:T,V,?,Object<K,V>):R} f The function to call
     *     for every element. This function
     *     takes 3 arguments (the element, the index and the object)
     *     and should return something. The result will be inserted
     *     into a new object.
     * @param {T=} opt_obj This is used as the 'this' object within f.
     * @return {!Object<K,R>} a new object with the results from f.
     * @template T,K,V,R
     */
    function map<T, K, V, R>(obj: {[index: string]: V}, f: (arg0: V, arg1: any, arg2: {[index: string]: V}) => R, opt_obj?: T): {[index: string]: R};

    /**
     * Calls a function for each element in an object/map/hash. If any
     * call returns true, returns true (without checking the rest). If
     * all calls return false, returns false.
     *
     * @param {Object<K,V>} obj The object to check.
     * @param {function(this:T,V,?,Object<K,V>):boolean} f The function to
     *     call for every element. This function
     *     takes 3 arguments (the element, the index and the object) and should
     *     return a boolean.
     * @param {T=} opt_obj This is used as the 'this' object within f.
     * @return {boolean} true if any element passes the test.
     * @template T,K,V
     */
    function some<T, K, V>(obj: {[index: string]: V}, f: (arg0: V, arg1: any, arg2: {[index: string]: V}) => boolean, opt_obj?: T): boolean;

    /**
     * Calls a function for each element in an object/map/hash. If
     * all calls return true, returns true. If any call returns false, returns
     * false at this point and does not continue to check the remaining elements.
     *
     * @param {Object<K,V>} obj The object to check.
     * @param {?function(this:T,V,?,Object<K,V>):boolean} f The function to
     *     call for every element. This function
     *     takes 3 arguments (the element, the index and the object) and should
     *     return a boolean.
     * @param {T=} opt_obj This is used as the 'this' object within f.
     * @return {boolean} false if any element fails the test.
     * @template T,K,V
     */
    function every<T, K, V>(obj: {[index: string]: V}, f: (arg0: V, arg1: any, arg2: {[index: string]: V}) => boolean, opt_obj?: T): boolean;

    /**
     * Returns the number of key-value pairs in the object map.
     *
     * @param {Object} obj The object for which to get the number of key-value
     *     pairs.
     * @return {number} The number of key-value pairs in the object map.
     */
    function getCount(obj: Object): number;

    /**
     * Returns one key from the object map, if any exists.
     * For map literals the returned key will be the first one in most of the
     * browsers (a know exception is Konqueror).
     *
     * @param {Object} obj The object to pick a key from.
     * @return {string|undefined} The key or undefined if the object is empty.
     */
    function getAnyKey(obj: Object): string|void;

    /**
     * Returns one value from the object map, if any exists.
     * For map literals the returned value will be the first one in most of the
     * browsers (a know exception is Konqueror).
     *
     * @param {Object<K,V>} obj The object to pick a value from.
     * @return {V|undefined} The value or undefined if the object is empty.
     * @template K,V
     */
    function getAnyValue<K, V>(obj: {[index: string]: V}): V|void;

    /**
     * Whether the object/hash/map contains the given object as a value.
     * An alias for goog.object.containsValue(obj, val).
     *
     * @param {Object<K,V>} obj The object in which to look for val.
     * @param {V} val The object for which to check.
     * @return {boolean} true if val is present.
     * @template K,V
     */
    function contains<K, V>(obj: {[index: string]: V}, val: V): boolean;

    /**
     * Returns the values of the object/map/hash.
     *
     * @param {Object<K,V>} obj The object from which to get the values.
     * @return {!Array<V>} The values in the object/map/hash.
     * @template K,V
     */
    function getValues<K, V>(obj: {[index: string]: V}): Array<V>;

    /**
     * Returns the keys of the object/map/hash.
     *
     * @param {Object} obj The object from which to get the keys.
     * @return {!Array<string>} Array of property keys.
     */
    function getKeys(obj: Object): Array<string>;

    /**
     * Get a value from an object multiple levels deep.  This is useful for
     * pulling values from deeply nested objects, such as JSON responses.
     * Example usage: getValueByKeys(jsonObj, 'foo', 'entries', 3)
     *
     * @param {!Object} obj An object to get the value from.  Can be array-like.
     * @param {...(string|number|!Array<number|string>)} var_args A number of keys
     *     (as strings, or numbers, for array-like objects).  Can also be
     *     specified as a single array of keys.
     * @return {*} The resulting value.  If, at any point, the value for a key
     *     is undefined, returns undefined.
     */
    function getValueByKeys(obj: Object, ...var_args: (string|number|Array<number|string>)[]): any;

    /**
     * Whether the object/map/hash contains the given key.
     *
     * @param {Object} obj The object in which to look for key.
     * @param {*} key The key for which to check.
     * @return {boolean} true If the map contains the key.
     */
    function containsKey(obj: Object, key: any): boolean;

    /**
     * Whether the object/map/hash contains the given value. This is O(n).
     *
     * @param {Object<K,V>} obj The object in which to look for val.
     * @param {V} val The value for which to check.
     * @return {boolean} true If the map contains the value.
     * @template K,V
     */
    function containsValue<K, V>(obj: {[index: string]: V}, val: V): boolean;

    /**
     * Searches an object for an element that satisfies the given condition and
     * returns its key.
     * @param {Object<K,V>} obj The object to search in.
     * @param {function(this:T,V,string,Object<K,V>):boolean} f The
     *      function to call for every element. Takes 3 arguments (the value,
     *     the key and the object) and should return a boolean.
     * @param {T=} opt_this An optional "this" context for the function.
     * @return {string|undefined} The key of an element for which the function
     *     returns true or undefined if no such element is found.
     * @template T,K,V
     */
    function findKey<T, K, V>(obj: {[index: string]: V}, f: (arg0: V, arg1: string, arg2: {[index: string]: V}) => boolean, opt_this?: T): string|void;

    /**
     * Searches an object for an element that satisfies the given condition and
     * returns its value.
     * @param {Object<K,V>} obj The object to search in.
     * @param {function(this:T,V,string,Object<K,V>):boolean} f The function
     *     to call for every element. Takes 3 arguments (the value, the key
     *     and the object) and should return a boolean.
     * @param {T=} opt_this An optional "this" context for the function.
     * @return {V} The value of an element for which the function returns true or
     *     undefined if no such element is found.
     * @template T,K,V
     */
    function findValue<T, K, V>(obj: {[index: string]: V}, f: (arg0: V, arg1: string, arg2: {[index: string]: V}) => boolean, opt_this?: T): V;

    /**
     * Whether the object/map/hash is empty.
     *
     * @param {Object} obj The object to test.
     * @return {boolean} true if obj is empty.
     */
    function isEmpty(obj: Object): boolean;

    /**
     * Removes all key value pairs from the object/map/hash.
     *
     * @param {Object} obj The object to clear.
     */
    function clear(obj: Object): void;

    /**
     * Removes a key-value pair based on the key.
     *
     * @param {Object} obj The object from which to remove the key.
     * @param {*} key The key to remove.
     * @return {boolean} Whether an element was removed.
     */
    function remove(obj: Object, key: any): boolean;

    /**
     * Adds a key-value pair to the object. Throws an exception if the key is
     * already in use. Use set if you want to change an existing pair.
     *
     * @param {Object<K,V>} obj The object to which to add the key-value pair.
     * @param {string} key The key to add.
     * @param {V} val The value to add.
     * @template K,V
     */
    function add<K, V>(obj: {[index: string]: V}, key: string, val: V): void;

    /**
     * Returns the value for the given key.
     *
     * @param {Object<K,V>} obj The object from which to get the value.
     * @param {string} key The key for which to get the value.
     * @param {R=} opt_val The value to return if no item is found for the given
     *     key (default is undefined).
     * @return {V|R|undefined} The value for the given key.
     * @template K,V,R
     */
    function get<K, V, R>(obj: {[index: string]: V}, key: string, opt_val?: R): V|R|void;

    /**
     * Adds a key-value pair to the object/map/hash.
     *
     * @param {Object<K,V>} obj The object to which to add the key-value pair.
     * @param {string} key The key to add.
     * @param {V} value The value to add.
     * @template K,V
     */
    function set<K, V>(obj: {[index: string]: V}, key: string, value: V): void;

    /**
     * Adds a key-value pair to the object/map/hash if it doesn't exist yet.
     *
     * @param {Object<K,V>} obj The object to which to add the key-value pair.
     * @param {string} key The key to add.
     * @param {V} value The value to add if the key wasn't present.
     * @return {V} The value of the entry at the end of the function.
     * @template K,V
     */
    function setIfUndefined<K, V>(obj: {[index: string]: V}, key: string, value: V): V;

    /**
     * Sets a key and value to an object if the key is not set. The value will be
     * the return value of the given function. If the key already exists, the
     * object will not be changed and the function will not be called (the function
     * will be lazily evaluated -- only called if necessary).
     *
     * This function is particularly useful for use with a map used a as a cache.
     *
     * @param {!Object<K,V>} obj The object to which to add the key-value pair.
     * @param {string} key The key to add.
     * @param {function():V} f The value to add if the key wasn't present.
     * @return {V} The value of the entry at the end of the function.
     * @template K,V
     */
    function setWithReturnValueIfNotSet<K, V>(obj: {[index: string]: V}, key: string, f: () => V): V;

    /**
     * Compares two objects for equality using === on the values.
     *
     * @param {!Object<K,V>} a
     * @param {!Object<K,V>} b
     * @return {boolean}
     * @template K,V
     */
    function equals<K, V>(a: {[index: string]: V}, b: {[index: string]: V}): boolean;

    /**
     * Does a flat clone of the object.
     *
     * @param {Object<K,V>} obj Object to clone.
     * @return {!Object<K,V>} Clone of the input object.
     * @template K,V
     */
    function clone<K, V>(obj: {[index: string]: V}): {[index: string]: V};

    /**
     * Clones a value. The input may be an Object, Array, or basic type. Objects and
     * arrays will be cloned recursively.
     *
     * WARNINGS:
     * <code>goog.object.unsafeClone</code> does not detect reference loops. Objects
     * that refer to themselves will cause infinite recursion.
     *
     * <code>goog.object.unsafeClone</code> is unaware of unique identifiers, and
     * copies UIDs created by <code>getUid</code> into cloned results.
     *
     * @param {*} obj The value to clone.
     * @return {*} A clone of the input value.
     */
    function unsafeClone(obj: any): any;

    /**
     * Returns a new object in which all the keys and values are interchanged
     * (keys become values and values become keys). If multiple keys map to the
     * same value, the chosen transposed value is implementation-dependent.
     *
     * @param {Object} obj The object to transpose.
     * @return {!Object} The transposed object.
     */
    function transpose(obj: Object): Object;

    /**
     * Extends an object with another object.
     * This operates 'in-place'; it does not create a new Object.
     *
     * Example:
     * var o = {};
     * goog.object.extend(o, {a: 0, b: 1});
     * o; // {a: 0, b: 1}
     * goog.object.extend(o, {b: 2, c: 3});
     * o; // {a: 0, b: 2, c: 3}
     *
     * @param {Object} target The object to modify. Existing properties will be
     *     overwritten if they are also present in one of the objects in
     *     {@code var_args}.
     * @param {...Object} var_args The objects from which values will be copied.
     */
    function extend(target: Object, ...var_args: Object[]): void;

    /**
     * Creates a new object built from the key-value pairs provided as arguments.
     * @param {...*} var_args If only one argument is provided and it is an array
     *     then this is used as the arguments,  otherwise even arguments are used as
     *     the property names and odd arguments are used as the property values.
     * @return {!Object} The new object.
     * @throws {Error} If there are uneven number of arguments or there is only one
     *     non array argument.
     */
    function create(...var_args: any[]): Object;

    /**
     * Creates a new object where the property names come from the arguments but
     * the value is always set to true
     * @param {...*} var_args If only one argument is provided and it is an array
     *     then this is used as the arguments,  otherwise the arguments are used
     *     as the property names.
     * @return {!Object} The new object.
     */
    function createSet(...var_args: any[]): Object;

    /**
     * Creates an immutable view of the underlying object, if the browser
     * supports immutable objects.
     *
     * In default mode, writes to this view will fail silently. In strict mode,
     * they will throw an error.
     *
     * @param {!Object<K,V>} obj An object.
     * @return {!Object<K,V>} An immutable view of that object, or the
     *     original object if this browser does not support immutables.
     * @template K,V
     */
    function createImmutableView<K, V>(obj: {[index: string]: V}): {[index: string]: V};

    /**
     * @param {!Object} obj An object.
     * @return {boolean} Whether this is an immutable view of the object.
     */
    function isImmutableView(obj: Object): boolean;
}
