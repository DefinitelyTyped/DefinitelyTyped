declare module goog {
    function require(name: 'goog.array'): typeof goog.array;
}

declare module goog.array {

    /**
     * @typedef {Array|NodeList|Arguments|{length: number}}
     */
    type ArrayLike = Array<any>|NodeList|Arguments|{length: number};

    /**
     * Returns the last element in an array without removing it.
     * Same as goog.array.last.
     * @param {Array<T>|goog.array.ArrayLike} array The array.
     * @return {T} Last item in array.
     * @template T
     */
    function peek<T>(array: Array<T>|goog.array.ArrayLike): T;

    /**
     * Returns the last element in an array without removing it.
     * Same as goog.array.peek.
     * @param {Array<T>|goog.array.ArrayLike} array The array.
     * @return {T} Last item in array.
     * @template T
     */
    function last<T>(array: Array<T>|goog.array.ArrayLike): T;

    /**
     * Returns the index of the first element of an array with a specified value, or
     * -1 if the element is not present in the array.
     *
     * See {@link http://tinyurl.com/developer-mozilla-org-array-indexof}
     *
     * @param {Array<T>|goog.array.ArrayLike} arr The array to be searched.
     * @param {T} obj The object for which we are searching.
     * @param {number=} opt_fromIndex The index at which to start the search. If
     *     omitted the search starts at index 0.
     * @return {number} The index of the first matching array element.
     * @template T
     */
    function indexOf<T>(arr: Array<T>|goog.array.ArrayLike, obj: T, opt_fromIndex?: number): number;

    /**
     * Returns the index of the last element of an array with a specified value, or
     * -1 if the element is not present in the array.
     *
     * See {@link http://tinyurl.com/developer-mozilla-org-array-lastindexof}
     *
     * @param {!Array<T>|!goog.array.ArrayLike} arr The array to be searched.
     * @param {T} obj The object for which we are searching.
     * @param {?number=} opt_fromIndex The index at which to start the search. If
     *     omitted the search starts at the end of the array.
     * @return {number} The index of the last matching array element.
     * @template T
     */
    function lastIndexOf<T>(arr: Array<T>|goog.array.ArrayLike, obj: T, opt_fromIndex?: number): number;

    /**
     * Calls a function for each element in an array. Skips holes in the array.
     * See {@link http://tinyurl.com/developer-mozilla-org-array-foreach}
     *
     * @param {Array<T>|goog.array.ArrayLike} arr Array or array like object over
     *     which to iterate.
     * @param {?function(this: S, T, number, ?): ?} f The function to call for every
     *     element. This function takes 3 arguments (the element, the index and the
     *     array). The return value is ignored.
     * @param {S=} opt_obj The object to be used as the value of 'this' within f.
     * @template T,S
     */
    function forEach<T, S>(arr: Array<T>|goog.array.ArrayLike, f: (arg0: T, arg1: number, arg2: any) => any, opt_obj?: S): void;

    /**
     * Calls a function for each element in an array, starting from the last
     * element rather than the first.
     *
     * @param {Array<T>|goog.array.ArrayLike} arr Array or array
     *     like object over which to iterate.
     * @param {?function(this: S, T, number, ?): ?} f The function to call for every
     *     element. This function
     *     takes 3 arguments (the element, the index and the array). The return
     *     value is ignored.
     * @param {S=} opt_obj The object to be used as the value of 'this'
     *     within f.
     * @template T,S
     */
    function forEachRight<T, S>(arr: Array<T>|goog.array.ArrayLike, f: (arg0: T, arg1: number, arg2: any) => any, opt_obj?: S): void;

    /**
     * Calls a function for each element in an array, and if the function returns
     * true adds the element to a new array.
     *
     * See {@link http://tinyurl.com/developer-mozilla-org-array-filter}
     *
     * @param {Array<T>|goog.array.ArrayLike} arr Array or array
     *     like object over which to iterate.
     * @param {?function(this:S, T, number, ?):boolean} f The function to call for
     *     every element. This function
     *     takes 3 arguments (the element, the index and the array) and must
     *     return a Boolean. If the return value is true the element is added to the
     *     result array. If it is false the element is not included.
     * @param {S=} opt_obj The object to be used as the value of 'this'
     *     within f.
     * @return {!Array<T>} a new array in which only elements that passed the test
     *     are present.
     * @template T,S
     */
    function filter<T, S>(arr: Array<T>|goog.array.ArrayLike, f: (arg0: T, arg1: number, arg2: any) => boolean, opt_obj?: S): Array<T>;

    /**
     * Calls a function for each element in an array and inserts the result into a
     * new array.
     *
     * See {@link http://tinyurl.com/developer-mozilla-org-array-map}
     *
     * @param {Array<VALUE>|goog.array.ArrayLike} arr Array or array like object
     *     over which to iterate.
     * @param {function(this:THIS, VALUE, number, ?): RESULT} f The function to call
     *     for every element. This function takes 3 arguments (the element,
     *     the index and the array) and should return something. The result will be
     *     inserted into a new array.
     * @param {THIS=} opt_obj The object to be used as the value of 'this' within f.
     * @return {!Array<RESULT>} a new array with the results from f.
     * @template THIS, VALUE, RESULT
     */
    function map<THIS, VALUE, RESULT>(arr: Array<VALUE>|goog.array.ArrayLike, f: (arg0: VALUE, arg1: number, arg2: any) => RESULT, opt_obj?: THIS): Array<RESULT>;

    /**
     * Passes every element of an array into a function and accumulates the result.
     *
     * See {@link http://tinyurl.com/developer-mozilla-org-array-reduce}
     *
     * For example:
     * var a = [1, 2, 3, 4];
     * goog.array.reduce(a, function(r, v, i, arr) {return r + v;}, 0);
     * returns 10
     *
     * @param {Array<T>|goog.array.ArrayLike} arr Array or array
     *     like object over which to iterate.
     * @param {function(this:S, R, T, number, ?) : R} f The function to call for
     *     every element. This function
     *     takes 4 arguments (the function's previous result or the initial value,
     *     the value of the current array element, the current array index, and the
     *     array itself)
     *     function(previousValue, currentValue, index, array).
     * @param {?} val The initial value to pass into the function on the first call.
     * @param {S=} opt_obj  The object to be used as the value of 'this'
     *     within f.
     * @return {R} Result of evaluating f repeatedly across the values of the array.
     * @template T,S,R
     */
    function reduce<T, S, R>(arr: Array<T>|goog.array.ArrayLike, f: (arg0: R, arg1: T, arg2: number, arg3: any) => R, val: any, opt_obj?: S): R;

    /**
     * Passes every element of an array into a function and accumulates the result,
     * starting from the last element and working towards the first.
     *
     * See {@link http://tinyurl.com/developer-mozilla-org-array-reduceright}
     *
     * For example:
     * var a = ['a', 'b', 'c'];
     * goog.array.reduceRight(a, function(r, v, i, arr) {return r + v;}, '');
     * returns 'cba'
     *
     * @param {Array<T>|goog.array.ArrayLike} arr Array or array
     *     like object over which to iterate.
     * @param {?function(this:S, R, T, number, ?) : R} f The function to call for
     *     every element. This function
     *     takes 4 arguments (the function's previous result or the initial value,
     *     the value of the current array element, the current array index, and the
     *     array itself)
     *     function(previousValue, currentValue, index, array).
     * @param {?} val The initial value to pass into the function on the first call.
     * @param {S=} opt_obj The object to be used as the value of 'this'
     *     within f.
     * @return {R} Object returned as a result of evaluating f repeatedly across the
     *     values of the array.
     * @template T,S,R
     */
    function reduceRight<T, S, R>(arr: Array<T>|goog.array.ArrayLike, f: (arg0: R, arg1: T, arg2: number, arg3: any) => R, val: any, opt_obj?: S): R;

    /**
     * Calls f for each element of an array. If any call returns true, some()
     * returns true (without checking the remaining elements). If all calls
     * return false, some() returns false.
     *
     * See {@link http://tinyurl.com/developer-mozilla-org-array-some}
     *
     * @param {Array<T>|goog.array.ArrayLike} arr Array or array
     *     like object over which to iterate.
     * @param {?function(this:S, T, number, ?) : boolean} f The function to call for
     *     for every element. This function takes 3 arguments (the element, the
     *     index and the array) and should return a boolean.
     * @param {S=} opt_obj  The object to be used as the value of 'this'
     *     within f.
     * @return {boolean} true if any element passes the test.
     * @template T,S
     */
    function some<T, S>(arr: Array<T>|goog.array.ArrayLike, f: (arg0: T, arg1: number, arg2: any) => boolean, opt_obj?: S): boolean;

    /**
     * Call f for each element of an array. If all calls return true, every()
     * returns true. If any call returns false, every() returns false and
     * does not continue to check the remaining elements.
     *
     * See {@link http://tinyurl.com/developer-mozilla-org-array-every}
     *
     * @param {Array<T>|goog.array.ArrayLike} arr Array or array
     *     like object over which to iterate.
     * @param {?function(this:S, T, number, ?) : boolean} f The function to call for
     *     for every element. This function takes 3 arguments (the element, the
     *     index and the array) and should return a boolean.
     * @param {S=} opt_obj The object to be used as the value of 'this'
     *     within f.
     * @return {boolean} false if any element fails the test.
     * @template T,S
     */
    function every<T, S>(arr: Array<T>|goog.array.ArrayLike, f: (arg0: T, arg1: number, arg2: any) => boolean, opt_obj?: S): boolean;

    /**
     * Counts the array elements that fulfill the predicate, i.e. for which the
     * callback function returns true. Skips holes in the array.
     *
     * @param {!(Array<T>|goog.array.ArrayLike)} arr Array or array like object
     *     over which to iterate.
     * @param {function(this: S, T, number, ?): boolean} f The function to call for
     *     every element. Takes 3 arguments (the element, the index and the array).
     * @param {S=} opt_obj The object to be used as the value of 'this' within f.
     * @return {number} The number of the matching elements.
     * @template T,S
     */
    function count<T, S>(arr: Array<T>|goog.array.ArrayLike, f: (arg0: T, arg1: number, arg2: any) => boolean, opt_obj?: S): number;

    /**
     * Search an array for the first element that satisfies a given condition and
     * return that element.
     * @param {Array<T>|goog.array.ArrayLike} arr Array or array
     *     like object over which to iterate.
     * @param {?function(this:S, T, number, ?) : boolean} f The function to call
     *     for every element. This function takes 3 arguments (the element, the
     *     index and the array) and should return a boolean.
     * @param {S=} opt_obj An optional "this" context for the function.
     * @return {T|null} The first array element that passes the test, or null if no
     *     element is found.
     * @template T,S
     */
    function find<T, S>(arr: Array<T>|goog.array.ArrayLike, f: (arg0: T, arg1: number, arg2: any) => boolean, opt_obj?: S): T|void;

    /**
     * Search an array for the first element that satisfies a given condition and
     * return its index.
     * @param {Array<T>|goog.array.ArrayLike} arr Array or array
     *     like object over which to iterate.
     * @param {?function(this:S, T, number, ?) : boolean} f The function to call for
     *     every element. This function
     *     takes 3 arguments (the element, the index and the array) and should
     *     return a boolean.
     * @param {S=} opt_obj An optional "this" context for the function.
     * @return {number} The index of the first array element that passes the test,
     *     or -1 if no element is found.
     * @template T,S
     */
    function findIndex<T, S>(arr: Array<T>|goog.array.ArrayLike, f: (arg0: T, arg1: number, arg2: any) => boolean, opt_obj?: S): number;

    /**
     * Search an array (in reverse order) for the last element that satisfies a
     * given condition and return that element.
     * @param {Array<T>|goog.array.ArrayLike} arr Array or array
     *     like object over which to iterate.
     * @param {?function(this:S, T, number, ?) : boolean} f The function to call
     *     for every element. This function
     *     takes 3 arguments (the element, the index and the array) and should
     *     return a boolean.
     * @param {S=} opt_obj An optional "this" context for the function.
     * @return {T|null} The last array element that passes the test, or null if no
     *     element is found.
     * @template T,S
     */
    function findRight<T, S>(arr: Array<T>|goog.array.ArrayLike, f: (arg0: T, arg1: number, arg2: any) => boolean, opt_obj?: S): T|void;

    /**
     * Search an array (in reverse order) for the last element that satisfies a
     * given condition and return its index.
     * @param {Array<T>|goog.array.ArrayLike} arr Array or array
     *     like object over which to iterate.
     * @param {?function(this:S, T, number, ?) : boolean} f The function to call
     *     for every element. This function
     *     takes 3 arguments (the element, the index and the array) and should
     *     return a boolean.
     * @param {S=} opt_obj An optional "this" context for the function.
     * @return {number} The index of the last array element that passes the test,
     *     or -1 if no element is found.
     * @template T,S
     */
    function findIndexRight<T, S>(arr: Array<T>|goog.array.ArrayLike, f: (arg0: T, arg1: number, arg2: any) => boolean, opt_obj?: S): number;

    /**
     * Whether the array contains the given object.
     * @param {goog.array.ArrayLike} arr The array to test for the presence of the
     *     element.
     * @param {*} obj The object for which to test.
     * @return {boolean} true if obj is present.
     */
    function contains(arr: goog.array.ArrayLike, obj: any): boolean;

    /**
     * Whether the array is empty.
     * @param {goog.array.ArrayLike} arr The array to test.
     * @return {boolean} true if empty.
     */
    function isEmpty(arr: goog.array.ArrayLike): boolean;

    /**
     * Clears the array.
     * @param {goog.array.ArrayLike} arr Array or array like object to clear.
     */
    function clear(arr: goog.array.ArrayLike): void;

    /**
     * Pushes an item into an array, if it's not already in the array.
     * @param {Array<T>} arr Array into which to insert the item.
     * @param {T} obj Value to add.
     * @template T
     */
    function insert<T>(arr: Array<T>, obj: T): void;

    /**
     * Inserts an object at the given index of the array.
     * @param {goog.array.ArrayLike} arr The array to modify.
     * @param {*} obj The object to insert.
     * @param {number=} opt_i The index at which to insert the object. If omitted,
     *      treated as 0. A negative index is counted from the end of the array.
     */
    function insertAt(arr: goog.array.ArrayLike, obj: any, opt_i?: number): void;

    /**
     * Inserts at the given index of the array, all elements of another array.
     * @param {goog.array.ArrayLike} arr The array to modify.
     * @param {goog.array.ArrayLike} elementsToAdd The array of elements to add.
     * @param {number=} opt_i The index at which to insert the object. If omitted,
     *      treated as 0. A negative index is counted from the end of the array.
     */
    function insertArrayAt(arr: goog.array.ArrayLike, elementsToAdd: goog.array.ArrayLike, opt_i?: number): void;

    /**
     * Inserts an object into an array before a specified object.
     * @param {Array<T>} arr The array to modify.
     * @param {T} obj The object to insert.
     * @param {T=} opt_obj2 The object before which obj should be inserted. If obj2
     *     is omitted or not found, obj is inserted at the end of the array.
     * @template T
     */
    function insertBefore<T>(arr: Array<T>, obj: T, opt_obj2?: T): void;

    /**
     * Removes the first occurrence of a particular value from an array.
     * @param {Array<T>|goog.array.ArrayLike} arr Array from which to remove
     *     value.
     * @param {T} obj Object to remove.
     * @return {boolean} True if an element was removed.
     * @template T
     */
    function remove<T>(arr: Array<T>|goog.array.ArrayLike, obj: T): boolean;

    /**
     * Removes from an array the element at index i
     * @param {goog.array.ArrayLike} arr Array or array like object from which to
     *     remove value.
     * @param {number} i The index to remove.
     * @return {boolean} True if an element was removed.
     */
    function removeAt(arr: goog.array.ArrayLike, i: number): boolean;

    /**
     * Removes the first value that satisfies the given condition.
     * @param {Array<T>|goog.array.ArrayLike} arr Array or array
     *     like object over which to iterate.
     * @param {?function(this:S, T, number, ?) : boolean} f The function to call
     *     for every element. This function
     *     takes 3 arguments (the element, the index and the array) and should
     *     return a boolean.
     * @param {S=} opt_obj An optional "this" context for the function.
     * @return {boolean} True if an element was removed.
     * @template T,S
     */
    function removeIf<T, S>(arr: Array<T>|goog.array.ArrayLike, f: (arg0: T, arg1: number, arg2: any) => boolean, opt_obj?: S): boolean;

    /**
     * Removes all values that satisfy the given condition.
     * @param {Array<T>|goog.array.ArrayLike} arr Array or array
     *     like object over which to iterate.
     * @param {?function(this:S, T, number, ?) : boolean} f The function to call
     *     for every element. This function
     *     takes 3 arguments (the element, the index and the array) and should
     *     return a boolean.
     * @param {S=} opt_obj An optional "this" context for the function.
     * @return {number} The number of items removed
     * @template T,S
     */
    function removeAllIf<T, S>(arr: Array<T>|goog.array.ArrayLike, f: (arg0: T, arg1: number, arg2: any) => boolean, opt_obj?: S): number;

    /**
     * Returns a new array that is the result of joining the arguments.  If arrays
     * are passed then their items are added, however, if non-arrays are passed they
     * will be added to the return array as is.
     *
     * Note that ArrayLike objects will be added as is, rather than having their
     * items added.
     *
     * goog.array.concat([1, 2], [3, 4]) -> [1, 2, 3, 4]
     * goog.array.concat(0, [1, 2]) -> [0, 1, 2]
     * goog.array.concat([1, 2], null) -> [1, 2, null]
     *
     * There is bug in all current versions of IE (6, 7 and 8) where arrays created
     * in an iframe become corrupted soon (not immediately) after the iframe is
     * destroyed. This is common if loading data via goog.net.IframeIo, for example.
     * This corruption only affects the concat method which will start throwing
     * Catastrophic Errors (#-2147418113).
     *
     * See http://endoflow.com/scratch/corrupted-arrays.html for a test case.
     *
     * Internally goog.array should use this, so that all methods will continue to
     * work on these broken array objects.
     *
     * @param {...*} var_args Items to concatenate.  Arrays will have each item
     *     added, while primitives and objects will be added as is.
     * @return {!Array<?>} The new resultant array.
     */
    function concat(...var_args: any[]): Array<any>;

    /**
     * Returns a new array that contains the contents of all the arrays passed.
     * @param {...!Array<T>} var_args
     * @return {!Array<T>}
     * @template T
     */
    function join<T>(...var_args: Array<T>[]): Array<T>;

    /**
     * Converts an object to an array.
     * @param {Array<T>|goog.array.ArrayLike} object  The object to convert to an
     *     array.
     * @return {!Array<T>} The object converted into an array. If object has a
     *     length property, every property indexed with a non-negative number
     *     less than length will be included in the result. If object does not
     *     have a length property, an empty array will be returned.
     * @template T
     */
    function toArray<T>(object: Array<T>|goog.array.ArrayLike): Array<T>;

    /**
     * Does a shallow copy of an array.
     * @param {Array<T>|goog.array.ArrayLike} arr  Array or array-like object to
     *     clone.
     * @return {!Array<T>} Clone of the input array.
     * @template T
     */
    function clone<T>(arr: Array<T>|goog.array.ArrayLike): Array<T>;

    /**
     * Extends an array with another array, element, or "array like" object.
     * This function operates 'in-place', it does not create a new Array.
     *
     * Example:
     * var a = [];
     * goog.array.extend(a, [0, 1]);
     * a; // [0, 1]
     * goog.array.extend(a, 2);
     * a; // [0, 1, 2]
     *
     * @param {Array<VALUE>} arr1  The array to modify.
     * @param {...(Array<VALUE>|VALUE)} var_args The elements or arrays of elements
     *     to add to arr1.
     * @template VALUE
     */
    function extend<VALUE>(arr1: Array<VALUE>, ...var_args: (Array<VALUE>|VALUE)[]): void;

    /**
     * Adds or removes elements from an array. This is a generic version of Array
     * splice. This means that it might work on other objects similar to arrays,
     * such as the arguments object.
     *
     * @param {Array<T>|goog.array.ArrayLike} arr The array to modify.
     * @param {number|undefined} index The index at which to start changing the
     *     array. If not defined, treated as 0.
     * @param {number} howMany How many elements to remove (0 means no removal. A
     *     value below 0 is treated as zero and so is any other non number. Numbers
     *     are floored).
     * @param {...T} var_args Optional, additional elements to insert into the
     *     array.
     * @return {!Array<T>} the removed elements.
     * @template T
     */
    function splice<T>(arr: Array<T>|goog.array.ArrayLike, index: number|void, howMany: number, ...var_args: T[]): Array<T>;

    /**
     * Returns a new array from a segment of an array. This is a generic version of
     * Array slice. This means that it might work on other objects similar to
     * arrays, such as the arguments object.
     *
     * @param {Array<T>|goog.array.ArrayLike} arr The array from
     * which to copy a segment.
     * @param {number} start The index of the first element to copy.
     * @param {number=} opt_end The index after the last element to copy.
     * @return {!Array<T>} A new array containing the specified segment of the
     *     original array.
     * @template T
     */
    function slice<T>(arr: Array<T>|goog.array.ArrayLike, start: number, opt_end?: number): Array<T>;

    /**
     * Removes all duplicates from an array (retaining only the first
     * occurrence of each array element).  This function modifies the
     * array in place and doesn't change the order of the non-duplicate items.
     *
     * For objects, duplicates are identified as having the same unique ID as
     * defined by {@link goog.getUid}.
     *
     * Alternatively you can specify a custom hash function that returns a unique
     * value for each item in the array it should consider unique.
     *
     * Runtime: N,
     * Worstcase space: 2N (no dupes)
     *
     * @param {Array<T>|goog.array.ArrayLike} arr The array from which to remove
     *     duplicates.
     * @param {Array=} opt_rv An optional array in which to return the results,
     *     instead of performing the removal inplace.  If specified, the original
     *     array will remain unchanged.
     * @param {function(T):string=} opt_hashFn An optional function to use to
     *     apply to every item in the array. This function should return a unique
     *     value for each item in the array it should consider unique.
     * @template T
     */
    function removeDuplicates<T>(arr: Array<T>|goog.array.ArrayLike, opt_rv?: Array<any>, opt_hashFn?: (arg0: T) => string): void;

    /**
     * Searches the specified array for the specified target using the binary
     * search algorithm.  If no opt_compareFn is specified, elements are compared
     * using <code>goog.array.defaultCompare</code>, which compares the elements
     * using the built in < and > operators.  This will produce the expected
     * behavior for homogeneous arrays of String(s) and Number(s). The array
     * specified <b>must</b> be sorted in ascending order (as defined by the
     * comparison function).  If the array is not sorted, results are undefined.
     * If the array contains multiple instances of the specified target value, any
     * of these instances may be found.
     *
     * Runtime: O(log n)
     *
     * @param {Array<VALUE>|goog.array.ArrayLike} arr The array to be searched.
     * @param {TARGET} target The sought value.
     * @param {function(TARGET, VALUE): number=} opt_compareFn Optional comparison
     *     function by which the array is ordered. Should take 2 arguments to
     *     compare, and return a negative number, zero, or a positive number
     *     depending on whether the first argument is less than, equal to, or
     *     greater than the second.
     * @return {number} Lowest index of the target value if found, otherwise
     *     (-(insertion point) - 1). The insertion point is where the value should
     *     be inserted into arr to preserve the sorted property.  Return value >= 0
     *     iff target is found.
     * @template TARGET, VALUE
     */
    function binarySearch<TARGET, VALUE>(arr: Array<VALUE>|goog.array.ArrayLike, target: TARGET, opt_compareFn?: (arg0: TARGET, arg1: VALUE) => number): number;

    /**
     * Selects an index in the specified array using the binary search algorithm.
     * The evaluator receives an element and determines whether the desired index
     * is before, at, or after it.  The evaluator must be consistent (formally,
     * goog.array.map(goog.array.map(arr, evaluator, opt_obj), goog.math.sign)
     * must be monotonically non-increasing).
     *
     * Runtime: O(log n)
     *
     * @param {Array<VALUE>|goog.array.ArrayLike} arr The array to be searched.
     * @param {function(this:THIS, VALUE, number, ?): number} evaluator
     *     Evaluator function that receives 3 arguments (the element, the index and
     *     the array). Should return a negative number, zero, or a positive number
     *     depending on whether the desired index is before, at, or after the
     *     element passed to it.
     * @param {THIS=} opt_obj The object to be used as the value of 'this'
     *     within evaluator.
     * @return {number} Index of the leftmost element matched by the evaluator, if
     *     such exists; otherwise (-(insertion point) - 1). The insertion point is
     *     the index of the first element for which the evaluator returns negative,
     *     or arr.length if no such element exists. The return value is non-negative
     *     iff a match is found.
     * @template THIS, VALUE
     */
    function binarySelect<THIS, VALUE>(arr: Array<VALUE>|goog.array.ArrayLike, evaluator: (arg0: VALUE, arg1: number, arg2: any) => number, opt_obj?: THIS): number;

    /**
     * Sorts the specified array into ascending order.  If no opt_compareFn is
     * specified, elements are compared using
     * <code>goog.array.defaultCompare</code>, which compares the elements using
     * the built in < and > operators.  This will produce the expected behavior
     * for homogeneous arrays of String(s) and Number(s), unlike the native sort,
     * but will give unpredictable results for heterogenous lists of strings and
     * numbers with different numbers of digits.
     *
     * This sort is not guaranteed to be stable.
     *
     * Runtime: Same as <code>Array.prototype.sort</code>
     *
     * @param {Array<T>} arr The array to be sorted.
     * @param {?function(T,T):number=} opt_compareFn Optional comparison
     *     function by which the
     *     array is to be ordered. Should take 2 arguments to compare, and return a
     *     negative number, zero, or a positive number depending on whether the
     *     first argument is less than, equal to, or greater than the second.
     * @template T
     */
    function sort<T>(arr: Array<T>, opt_compareFn?: (arg0: T, arg1: T) => number): void;

    /**
     * Sorts the specified array into ascending order in a stable way.  If no
     * opt_compareFn is specified, elements are compared using
     * <code>goog.array.defaultCompare</code>, which compares the elements using
     * the built in < and > operators.  This will produce the expected behavior
     * for homogeneous arrays of String(s) and Number(s).
     *
     * Runtime: Same as <code>Array.prototype.sort</code>, plus an additional
     * O(n) overhead of copying the array twice.
     *
     * @param {Array<T>} arr The array to be sorted.
     * @param {?function(T, T): number=} opt_compareFn Optional comparison function
     *     by which the array is to be ordered. Should take 2 arguments to compare,
     *     and return a negative number, zero, or a positive number depending on
     *     whether the first argument is less than, equal to, or greater than the
     *     second.
     * @template T
     */
    function stableSort<T>(arr: Array<T>, opt_compareFn?: (arg0: T, arg1: T) => number): void;

    /**
     * Sort the specified array into ascending order based on item keys
     * returned by the specified key function.
     * If no opt_compareFn is specified, the keys are compared in ascending order
     * using <code>goog.array.defaultCompare</code>.
     *
     * Runtime: O(S(f(n)), where S is runtime of <code>goog.array.sort</code>
     * and f(n) is runtime of the key function.
     *
     * @param {Array<T>} arr The array to be sorted.
     * @param {function(T): K} keyFn Function taking array element and returning
     *     a key used for sorting this element.
     * @param {?function(K, K): number=} opt_compareFn Optional comparison function
     *     by which the keys are to be ordered. Should take 2 arguments to compare,
     *     and return a negative number, zero, or a positive number depending on
     *     whether the first argument is less than, equal to, or greater than the
     *     second.
     * @template T,K
     */
    function sortByKey<T, K>(arr: Array<T>, keyFn: (arg0: T) => K, opt_compareFn?: (arg0: K, arg1: K) => number): void;

    /**
     * Sorts an array of objects by the specified object key and compare
     * function. If no compare function is provided, the key values are
     * compared in ascending order using <code>goog.array.defaultCompare</code>.
     * This won't work for keys that get renamed by the compiler. So use
     * {'foo': 1, 'bar': 2} rather than {foo: 1, bar: 2}.
     * @param {Array<Object>} arr An array of objects to sort.
     * @param {string} key The object key to sort by.
     * @param {Function=} opt_compareFn The function to use to compare key
     *     values.
     */
    function sortObjectsByKey(arr: Array<Object>, key: string, opt_compareFn?: Function): void;

    /**
     * Tells if the array is sorted.
     * @param {!Array<T>} arr The array.
     * @param {?function(T,T):number=} opt_compareFn Function to compare the
     *     array elements.
     *     Should take 2 arguments to compare, and return a negative number, zero,
     *     or a positive number depending on whether the first argument is less
     *     than, equal to, or greater than the second.
     * @param {boolean=} opt_strict If true no equal elements are allowed.
     * @return {boolean} Whether the array is sorted.
     * @template T
     */
    function isSorted<T>(arr: Array<T>, opt_compareFn?: (arg0: T, arg1: T) => number, opt_strict?: boolean): boolean;

    /**
     * Compares two arrays for equality. Two arrays are considered equal if they
     * have the same length and their corresponding elements are equal according to
     * the comparison function.
     *
     * @param {goog.array.ArrayLike} arr1 The first array to compare.
     * @param {goog.array.ArrayLike} arr2 The second array to compare.
     * @param {Function=} opt_equalsFn Optional comparison function.
     *     Should take 2 arguments to compare, and return true if the arguments
     *     are equal. Defaults to {@link goog.array.defaultCompareEquality} which
     *     compares the elements using the built-in '===' operator.
     * @return {boolean} Whether the two arrays are equal.
     */
    function equals(arr1: goog.array.ArrayLike, arr2: goog.array.ArrayLike, opt_equalsFn?: Function): boolean;

    /**
     * 3-way array compare function.
     * @param {!Array<VALUE>|!goog.array.ArrayLike} arr1 The first array to
     *     compare.
     * @param {!Array<VALUE>|!goog.array.ArrayLike} arr2 The second array to
     *     compare.
     * @param {function(VALUE, VALUE): number=} opt_compareFn Optional comparison
     *     function by which the array is to be ordered. Should take 2 arguments to
     *     compare, and return a negative number, zero, or a positive number
     *     depending on whether the first argument is less than, equal to, or
     *     greater than the second.
     * @return {number} Negative number, zero, or a positive number depending on
     *     whether the first argument is less than, equal to, or greater than the
     *     second.
     * @template VALUE
     */
    function compare3<VALUE>(arr1: Array<VALUE>|goog.array.ArrayLike, arr2: Array<VALUE>|goog.array.ArrayLike, opt_compareFn?: (arg0: VALUE, arg1: VALUE) => number): number;

    /**
     * Compares its two arguments for order, using the built in < and >
     * operators.
     * @param {VALUE} a The first object to be compared.
     * @param {VALUE} b The second object to be compared.
     * @return {number} A negative number, zero, or a positive number as the first
     *     argument is less than, equal to, or greater than the second,
     *     respectively.
     * @template VALUE
     */
    function defaultCompare<VALUE>(a: VALUE, b: VALUE): number;

    /**
     * Compares its two arguments for inverse order, using the built in < and >
     * operators.
     * @param {VALUE} a The first object to be compared.
     * @param {VALUE} b The second object to be compared.
     * @return {number} A negative number, zero, or a positive number as the first
     *     argument is greater than, equal to, or less than the second,
     *     respectively.
     * @template VALUE
     */
    function inverseDefaultCompare<VALUE>(a: VALUE, b: VALUE): number;

    /**
     * Compares its two arguments for equality, using the built in === operator.
     * @param {*} a The first object to compare.
     * @param {*} b The second object to compare.
     * @return {boolean} True if the two arguments are equal, false otherwise.
     */
    function defaultCompareEquality(a: any, b: any): boolean;

    /**
     * Inserts a value into a sorted array. The array is not modified if the
     * value is already present.
     * @param {Array<VALUE>|goog.array.ArrayLike} array The array to modify.
     * @param {VALUE} value The object to insert.
     * @param {function(VALUE, VALUE): number=} opt_compareFn Optional comparison
     *     function by which the array is ordered. Should take 2 arguments to
     *     compare, and return a negative number, zero, or a positive number
     *     depending on whether the first argument is less than, equal to, or
     *     greater than the second.
     * @return {boolean} True if an element was inserted.
     * @template VALUE
     */
    function binaryInsert<VALUE>(array: Array<VALUE>|goog.array.ArrayLike, value: VALUE, opt_compareFn?: (arg0: VALUE, arg1: VALUE) => number): boolean;

    /**
     * Removes a value from a sorted array.
     * @param {!Array<VALUE>|!goog.array.ArrayLike} array The array to modify.
     * @param {VALUE} value The object to remove.
     * @param {function(VALUE, VALUE): number=} opt_compareFn Optional comparison
     *     function by which the array is ordered. Should take 2 arguments to
     *     compare, and return a negative number, zero, or a positive number
     *     depending on whether the first argument is less than, equal to, or
     *     greater than the second.
     * @return {boolean} True if an element was removed.
     * @template VALUE
     */
    function binaryRemove<VALUE>(array: Array<VALUE>|goog.array.ArrayLike, value: VALUE, opt_compareFn?: (arg0: VALUE, arg1: VALUE) => number): boolean;

    /**
     * Splits an array into disjoint buckets according to a splitting function.
     * @param {Array<T>} array The array.
     * @param {function(this:S, T,number,Array<T>):?} sorter Function to call for
     *     every element.  This takes 3 arguments (the element, the index and the
     *     array) and must return a valid object key (a string, number, etc), or
     *     undefined, if that object should not be placed in a bucket.
     * @param {S=} opt_obj The object to be used as the value of 'this' within
     *     sorter.
     * @return {!Object} An object, with keys being all of the unique return values
     *     of sorter, and values being arrays containing the items for
     *     which the splitter returned that key.
     * @template T,S
     */
    function bucket<T, S>(array: Array<T>, sorter: (arg0: T, arg1: number, arg2: Array<T>) => any, opt_obj?: S): Object;

    /**
     * Creates a new object built from the provided array and the key-generation
     * function.
     * @param {Array<T>|goog.array.ArrayLike} arr Array or array like object over
     *     which to iterate whose elements will be the values in the new object.
     * @param {?function(this:S, T, number, ?) : string} keyFunc The function to
     *     call for every element. This function takes 3 arguments (the element, the
     *     index and the array) and should return a string that will be used as the
     *     key for the element in the new object. If the function returns the same
     *     key for more than one element, the value for that key is
     *     implementation-defined.
     * @param {S=} opt_obj The object to be used as the value of 'this'
     *     within keyFunc.
     * @return {!Object<T>} The new object.
     * @template T,S
     */
    function toObject<T, S>(arr: Array<T>|goog.array.ArrayLike, keyFunc: (arg0: T, arg1: number, arg2: any) => string, opt_obj?: S): {[index: string]: T};

    /**
     * Creates a range of numbers in an arithmetic progression.
     *
     * Range takes 1, 2, or 3 arguments:
     * <pre>
     * range(5) is the same as range(0, 5, 1) and produces [0, 1, 2, 3, 4]
     * range(2, 5) is the same as range(2, 5, 1) and produces [2, 3, 4]
     * range(-2, -5, -1) produces [-2, -3, -4]
     * range(-2, -5, 1) produces [], since stepping by 1 wouldn't ever reach -5.
     * </pre>
     *
     * @param {number} startOrEnd The starting value of the range if an end argument
     *     is provided. Otherwise, the start value is 0, and this is the end value.
     * @param {number=} opt_end The optional end value of the range.
     * @param {number=} opt_step The step size between range values. Defaults to 1
     *     if opt_step is undefined or 0.
     * @return {!Array<number>} An array of numbers for the requested range. May be
     *     an empty array if adding the step would not converge toward the end
     *     value.
     */
    function range(startOrEnd: number, opt_end?: number, opt_step?: number): Array<number>;

    /**
     * Returns an array consisting of the given value repeated N times.
     *
     * @param {VALUE} value The value to repeat.
     * @param {number} n The repeat count.
     * @return {!Array<VALUE>} An array with the repeated value.
     * @template VALUE
     */
    function repeat<VALUE>(value: VALUE, n: number): Array<VALUE>;

    /**
     * Returns an array consisting of every argument with all arrays
     * expanded in-place recursively.
     *
     * @param {...*} var_args The values to flatten.
     * @return {!Array<?>} An array containing the flattened values.
     */
    function flatten(...var_args: any[]): Array<any>;

    /**
     * Rotates an array in-place. After calling this method, the element at
     * index i will be the element previously at index (i - n) %
     * array.length, for all values of i between 0 and array.length - 1,
     * inclusive.
     *
     * For example, suppose list comprises [t, a, n, k, s]. After invoking
     * rotate(array, 1) (or rotate(array, -4)), array will comprise [s, t, a, n, k].
     *
     * @param {!Array<T>} array The array to rotate.
     * @param {number} n The amount to rotate.
     * @return {!Array<T>} The array.
     * @template T
     */
    function rotate<T>(array: Array<T>, n: number): Array<T>;

    /**
     * Moves one item of an array to a new position keeping the order of the rest
     * of the items. Example use case: keeping a list of JavaScript objects
     * synchronized with the corresponding list of DOM elements after one of the
     * elements has been dragged to a new position.
     * @param {!(Array|Arguments|{length:number})} arr The array to modify.
     * @param {number} fromIndex Index of the item to move between 0 and
     *     {@code arr.length - 1}.
     * @param {number} toIndex Target index between 0 and {@code arr.length - 1}.
     */
    function moveItem(arr: Array<any>|Arguments|{length: number}, fromIndex: number, toIndex: number): void;

    /**
     * Creates a new array for which the element at position i is an array of the
     * ith element of the provided arrays.  The returned array will only be as long
     * as the shortest array provided; additional values are ignored.  For example,
     * the result of zipping [1, 2] and [3, 4, 5] is [[1,3], [2, 4]].
     *
     * This is similar to the zip() function in Python.  See {@link
     * http://docs.python.org/library/functions.html#zip}
     *
     * @param {...!goog.array.ArrayLike} var_args Arrays to be combined.
     * @return {!Array<!Array<?>>} A new array of arrays created from
     *     provided arrays.
     */
    function zip(...var_args: goog.array.ArrayLike[]): Array<Array<any>>;

    /**
     * Shuffles the values in the specified array using the Fisher-Yates in-place
     * shuffle (also known as the Knuth Shuffle). By default, calls Math.random()
     * and so resets the state of that random number generator. Similarly, may reset
     * the state of the any other specified random number generator.
     *
     * Runtime: O(n)
     *
     * @param {!Array<?>} arr The array to be shuffled.
     * @param {function():number=} opt_randFn Optional random function to use for
     *     shuffling.
     *     Takes no arguments, and returns a random number on the interval [0, 1).
     *     Defaults to Math.random() using JavaScript's built-in Math library.
     */
    function shuffle(arr: Array<any>, opt_randFn?: () => number): void;

    /**
     * Returns a new array of elements from arr, based on the indexes of elements
     * provided by index_arr. For example, the result of index copying
     * ['a', 'b', 'c'] with index_arr [1,0,0,2] is ['b', 'a', 'a', 'c'].
     *
     * @param {!Array<T>} arr The array to get a indexed copy from.
     * @param {!Array<number>} index_arr An array of indexes to get from arr.
     * @return {!Array<T>} A new array of elements from arr in index_arr order.
     * @template T
     */
    function copyByIndex<T>(arr: Array<T>, index_arr: Array<number>): Array<T>;
}
