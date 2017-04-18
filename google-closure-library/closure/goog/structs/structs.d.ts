declare module goog {
    function require(name: 'goog.structs'): typeof goog.structs;
}

declare module goog.structs {

    /**
     * Returns the number of values in the collection-like object.
     * @param {Object} col The collection-like object.
     * @return {number} The number of values in the collection-like object.
     */
    function getCount(col: Object): number;

    /**
     * Returns the values of the collection-like object.
     * @param {Object} col The collection-like object.
     * @return {!Array<?>} The values in the collection-like object.
     */
    function getValues(col: Object): Array<any>;

    /**
     * Returns the keys of the collection. Some collections have no notion of
     * keys/indexes and this function will return undefined in those cases.
     * @param {Object} col The collection-like object.
     * @return {!Array|undefined} The keys in the collection.
     */
    function getKeys(col: Object): Array<any>|void;

    /**
     * Whether the collection contains the given value. This is O(n) and uses
     * equals (==) to test the existence.
     * @param {Object} col The collection-like object.
     * @param {*} val The value to check for.
     * @return {boolean} True if the map contains the value.
     */
    function contains(col: Object, val: any): boolean;

    /**
     * Whether the collection is empty.
     * @param {Object} col The collection-like object.
     * @return {boolean} True if empty.
     */
    function isEmpty(col: Object): boolean;

    /**
     * Removes all the elements from the collection.
     * @param {Object} col The collection-like object.
     */
    function clear(col: Object): void;

    /**
     * Calls a function for each value in a collection. The function takes
     * three arguments; the value, the key and the collection.
     *
     * NOTE: This will be deprecated soon! Please use a more specific method if
     * possible, e.g. goog.array.forEach, goog.object.forEach, etc.
     *
     * @param {S} col The collection-like object.
     * @param {function(this:T,?,?,S):?} f The function to call for every value.
     *     This function takes
     *     3 arguments (the value, the key or undefined if the collection has no
     *     notion of keys, and the collection) and the return value is irrelevant.
     * @param {T=} opt_obj The object to be used as the value of 'this'
     *     within {@code f}.
     * @template T,S
     */
    function forEach<T, S>(col: S, f: (arg0: any, arg1: any, arg2: S) => any, opt_obj?: T): void;

    /**
     * Calls a function for every value in the collection. When a call returns true,
     * adds the value to a new collection (Array is returned by default).
     *
     * @param {S} col The collection-like object.
     * @param {function(this:T,?,?,S):boolean} f The function to call for every
     *     value. This function takes
     *     3 arguments (the value, the key or undefined if the collection has no
     *     notion of keys, and the collection) and should return a Boolean. If the
     *     return value is true the value is added to the result collection. If it
     *     is false the value is not included.
     * @param {T=} opt_obj The object to be used as the value of 'this'
     *     within {@code f}.
     * @return {!Object|!Array<?>} A new collection where the passed values are
     *     present. If col is a key-less collection an array is returned.  If col
     *     has keys and values a plain old JS object is returned.
     * @template T,S
     */
    function filter<T, S>(col: S, f: (arg0: any, arg1: any, arg2: S) => boolean, opt_obj?: T): Object|Array<any>;

    /**
     * Calls a function for every value in the collection and adds the result into a
     * new collection (defaults to creating a new Array).
     *
     * @param {S} col The collection-like object.
     * @param {function(this:T,?,?,S):V} f The function to call for every value.
     *     This function takes 3 arguments (the value, the key or undefined if the
     *     collection has no notion of keys, and the collection) and should return
     *     something. The result will be used as the value in the new collection.
     * @param {T=} opt_obj  The object to be used as the value of 'this'
     *     within {@code f}.
     * @return {!Object<V>|!Array<V>} A new collection with the new values.  If
     *     col is a key-less collection an array is returned.  If col has keys and
     *     values a plain old JS object is returned.
     * @template T,S,V
     */
    function map<T, S, V>(col: S, f: (arg0: any, arg1: any, arg2: S) => V, opt_obj?: T): {[index: string]: V}|Array<V>;

    /**
     * Calls f for each value in a collection. If any call returns true this returns
     * true (without checking the rest). If all returns false this returns false.
     *
     * @param {S} col The collection-like object.
     * @param {function(this:T,?,?,S):boolean} f The function to call for every
     *     value. This function takes 3 arguments (the value, the key or undefined
     *     if the collection has no notion of keys, and the collection) and should
     *     return a boolean.
     * @param {T=} opt_obj  The object to be used as the value of 'this'
     *     within {@code f}.
     * @return {boolean} True if any value passes the test.
     * @template T,S
     */
    function some<T, S>(col: S, f: (arg0: any, arg1: any, arg2: S) => boolean, opt_obj?: T): boolean;

    /**
     * Calls f for each value in a collection. If all calls return true this return
     * true this returns true. If any returns false this returns false at this point
     *  and does not continue to check the remaining values.
     *
     * @param {S} col The collection-like object.
     * @param {function(this:T,?,?,S):boolean} f The function to call for every
     *     value. This function takes 3 arguments (the value, the key or
     *     undefined if the collection has no notion of keys, and the collection)
     *     and should return a boolean.
     * @param {T=} opt_obj  The object to be used as the value of 'this'
     *     within {@code f}.
     * @return {boolean} True if all key-value pairs pass the test.
     * @template T,S
     */
    function every<T, S>(col: S, f: (arg0: any, arg1: any, arg2: S) => boolean, opt_obj?: T): boolean;
}
