// Created by https://github.com/albohlabs
// Pull request by https://github.com/thalesmello
// Originally taken from https://gist.github.com/albohlabs/1c864d83b17e4e99edff210729327e03

declare namespace fp {

    interface Dictionary<T> {
        [index: string]: T;
    }

    interface CurriedFunction1<T1, R> {
        (): CurriedFunction1<T1, R>;
        (t1: T1): R;
    }

    interface CurriedFunction2<T1, T2, R> {
        (): CurriedFunction2<T1, T2, R>;
        (t1: T1): CurriedFunction1<T2, R>;
        (t1: T1, t2: T2): R;
    }

    interface CurriedFunction3<T1, T2, T3, R> {
        (): CurriedFunction3<T1, T2, T3, R>;
        (t1: T1): CurriedFunction2<T2, T3, R>;
        (t1: T1, t2: T2): CurriedFunction1<T3, R>;
        (t1: T1, t2: T2, t3: T3): R;
    }

    interface CurriedFunction4<T1, T2, T3, T4, R> {
        (): CurriedFunction4<T1, T2, T3, T4, R>;
        (t1: T1): CurriedFunction3<T2, T3, T4, R>;
        (t1: T1, t2: T2): CurriedFunction2<T3, T4, R>;
        (t1: T1, t2: T2, t3: T3): CurriedFunction1<T4, R>;
        (t1: T1, t2: T2, t3: T3, t4: T4): R;
    }

    interface CurriedFunction5<T1, T2, T3, T4, T5, R> {
        (): CurriedFunction5<T1, T2, T3, T4, T5, R>;
        (t1: T1): CurriedFunction4<T2, T3, T4, T5, R>;
        (t1: T1, t2: T2): CurriedFunction3<T3, T4, T5, R>;
        (t1: T1, t2: T2, t3: T3): CurriedFunction2<T4, T5, R>;
        (t1: T1, t2: T2, t3: T3, t4: T4): CurriedFunction1<T5, R>;
        (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5): R;
    }

    interface ListIterator<T, TResult> {
        (value: T, index: number, collection: List<T>): TResult;
    }

    // Common interface between Arrays and jQuery objects
    interface List<T> {
        [index: number]: T;
        length: number;
    }

    interface Static {

        /**
         * Creates an array of elements corresponding to the given keys, or indexes, of collection. Keys may be
         * specified as individual arguments or as arrays of keys.
         *
         * @param props The property names or indexes of elements to pick, specified individually or in arrays.
         * @param collection The collection to iterate over.
         * @return Returns the new array of picked elements.
         */
        at<T>(props: (number | string | (number | string)[])[]): (collection: List<T>) => T[];

        /**
         * Returns a curried equivalent of the provided function, with the specified arity. The curried function has
         * two unusual capabilities. First, its arguments needn't be provided one at a time.
         */
        curryN(length: number, fn: (...args: any[]) => any): Function;

        /**
         * Returns a curried equivalent of the provided function. The curried function has two unusual capabilities.
         * First, its arguments needn't be provided one at a time.
         */
        curry<T1, T2, TResult>(fn: (a: T1, b: T2) => TResult): CurriedFunction2<T1, T2, TResult>
        curry<T1, T2, T3, TResult>(fn: (a: T1, b: T2, c: T3) => TResult): CurriedFunction3<T1, T2, T3, TResult>
        curry<T1, T2, T3, T4, TResult>(
            fn: (
                a: T1, b: T2, c: T3,
                d: T4
            ) => TResult
        ): CurriedFunction4<T1, T2, T3, T4, TResult>
        curry<T1, T2, T3, T4, T5, TResult>(
            fn: (
                a: T1, b: T2, c: T3, d: T4,
                e: T5
            ) => TResult
        ): CurriedFunction5<T1, T2, T3, T4, T5, TResult>
        curry(fn: Function): Function

        /**
         * Creates a function that returns value.
         *
         * @param value The value to return from the new function.
         * @return Returns the new function.
         */
        constant<T>(value: T): () => T;

        /**
         * A no-operation function that returns undefined regardless of the arguments it receives.
         *
         * @return undefined
         */
        noop(...args: any[]): void;

        /**
         * Creates a function that invokes the method at path on a given object. Any additional arguments are provided
         * to the invoked method.
         *
         * @param path The path of the method to invoke.
         * @param args The arguments to invoke the method with.
         * @return Returns the new function.
         */
        method<TObject, TResult>(path: string, ...args: any[]): (object: TObject) => TResult;

        /**
         * Creates an object composed of the picked `object` properties.
         *
         * @static
         * @memberOf _
         * @category Object
         * @param {...(string|string[])} [props] The property names to pick, specified
         *  individually or in arrays.
         * @param {Object} object The source object.
         * @returns {Object} Returns the new object.
         */
        pick<TResult extends {}, T extends {}>(predicate: string[], object: T): TResult;
        pick<TResult extends {}, T extends {}>(predicate: string[]): (object: T) => TResult;

        /**
         * Checks if `value` is `null` or `undefined`.
         *
         * @static
         * @memberOf _
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
         */
        isNil(value?: any): boolean;

        pluck(val: string): Function;

        /**
         * Creates a function that memoizes the result of func. If resolver is provided it determines the cache key for
         * storing the result based on the arguments provided to the memoized function. By default, the first argument
         * provided to the memoized function is coerced to a string and used as the cache key. The func is invoked with
         * the this binding of the memoized function.
         *
         * @param func The function to have its output memoized.
         * @return Returns the new memoizing function.
         */
        memoize(func: Function);

        /**
         * Creates an object composed of keys generated from the results of running each element of collection through
         * iteratee. The corresponding value of each key is the last element responsible for generating the key. The
         * iteratee function is bound to thisArg and invoked with three arguments:
         * (value, index|key, collection).
         *
         * If a property name is provided for iteratee the created _.property style callback returns the property
         * value of the given element.
         *
         * If a value is also provided for thisArg the created _.matchesProperty style callback returns true for
         * elements that have a matching property value, else false.
         *
         * If an object is provided for iteratee the created _.matches style callback returns true for elements that
         * have the properties of the given object, else false.
         *
         * @param term
         * @param collection The collection to iterate over.
         * @return Returns the composed aggregate object.
         */
        keyBy<T>(termn: string): (collection: List<T>) => T;
        keyBy<T>(termn: string, collection: List<T>): T;

        /**
         * Gets the first element of array.
         *
         * @alias _.first
         *
         * @param array The array to query.
         * @return Returns the first element of array.
         */
        head<T>(array: List<T>): T;

        flatten();

        /**
         * Iterates over elements of collection, returning the first element predicate returns truthy for.
         * The predicate is bound to thisArg and invoked with three arguments: (value, index|key, collection).
         *
         * If a property name is provided for predicate the created _.property style callback returns the property
         * value of the given element.
         *
         * If a value is also provided for thisArg the created _.matchesProperty style callback returns true for
         * elements that have a matching property value, else false.
         *
         * If an object is provided for predicate the created _.matches style callback returns true for elements that
         * have the properties of the given object, else false.
         *
         * @param predicate The function invoked per iteration.
         * @param collection The collection to search.
         * @return Returns the matched element, else undefined.
         */
        find<T>(predicate: ListIterator<T, boolean>, collection: List<T>): T;
        find<T>(predicate: ListIterator<T, boolean>): (collection: List<T>) => T;

        /**
         * @see fp.find
         */
        find<TObject extends {}, T>(predicate: TObject, collection: List<T>): T;
        find<TObject extends {}, T>(predicate: TObject): (collection: List<T>) => T;

        /**
         * Creates a function that returns the property value at path on a given object.
         *
         * @param path The path of the property to get.
         * @return Returns the new function.
         */
        property<TObj, TResult>(path: string): (obj: TObj) => TResult;

        /**
         * Creates an array of the own enumerable property values of object.
         *
         * @param object The object to query.
         * @return Returns an array of property values.
         */
        values<T>(object?: any): T[];

        /**
         * @see _.values
         */

        /**
         * Creates a debounced function that delays invoking func until after wait milliseconds have elapsed since
         * the last time the debounced function was invoked. The debounced function comes with a cancel method to
         * cancel delayed invocations and a flush method to immediately invoke them. Provide an options object to
         * indicate that func should be invoked on the leading and/or trailing edge of the wait timeout. Subsequent
         * calls to the debounced function return the result of the last func invocation.
         *
         * Note: If leading and trailing options are true, func is invoked on the trailing edge of the timeout only
         * if the the debounced function is invoked more than once during the wait timeout.
         *
         * See David Corbacho’s article for details over the differences between _.debounce and _.throttle.
         *
         * @param func The function to debounce.
         * @param wait The number of milliseconds to delay.
         * @return Returns the new debounced function.
         */
        debounce<T extends Function>(wait: number, func: T): T;

        /**
         * Creates an object composed of keys generated from the results of running each element of collection through
         * iteratee. The corresponding value of each key is an array of the elements responsible for generating the
         * key. The iteratee is bound to thisArg and invoked with three arguments:
         * (value, index|key, collection).
         *
         * If a property name is provided for iteratee the created _.property style callback returns the property
         * value of the given element.
         *
         * If a value is also provided for thisArg the created _.matchesProperty style callback returns true for
         * elements that have a matching property value, else false.
         *
         * If an object is provided for iteratee the created _.matches style callback returns true for elements that
         * have the properties of the given object, else false.
         *
         * @param collection The collection to iterate over.
         * @param iteratee The function invoked per iteration.
         * @param thisArg The this binding of iteratee.
         * @return Returns the composed aggregate object.
         */
        groupBy<T, TKey>(term: string): (collection: List<T>) => T[];

        /**
         * Checks if `path` is a direct property of `object`.
         *
         * @static
         * @memberOf _
         * @category Object
         * @param {Array|string} path The path to check.
         * @param {Object} object The object to query.
         * @returns {boolean} Returns `true` if `path` exists, else `false`.
         */
        has<T extends {}>(path: string, object: T): boolean;
        has<T extends {}>(path: string): (object: T) => boolean;

        /**
         * Creates an array of the own enumerable property values of object.
         *
         * @param object The object to query.
         * @return Returns an array of property values.
         */
        values<T>(object?: Object): T[];

        /**
         * Gets the property value at path of object. If the resolved value is undefined the defaultValue is used
         * in its place.
         *
         * @param path The path of the property to get.
         * @param object The object to query.
         * @return Returns the resolved value.
         */
        get<TObject, TResult>(path: string, object: TObject): TResult;

        /**
         * @see fp.get
         */
        get<TResult>(path: string, object: any): TResult;

        /**
         * @see fp.get
         */
        get<TResult>(path: string): (object: any) => TResult;

        get<TResult>(path: string[]): (object: any) => TResult;

        getOr<TObject>(fallback: TObject, path: string): (object: any) => TObject;
        getOr<TObject>(fallback: TObject, path: string, object: any): TObject;

        /**
         * @see fp.method
         */
        method<TResult>(path: string, ...args: any[]): (object: any) => TResult;

        /**
         * Returns true if the first parameter is less than the second.
         */
        lt(a: number, b: number): boolean;
        lt(a: number): (b: number) => boolean;

        /**
         * Returns a function, fn, which encapsulates if/else-if/else logic. R.cond takes a list of [predicate, transform] pairs.
         * All of the arguments to fn are applied to each of the predicates in turn until one returns a "truthy" value, at which
         * point fn returns the result of applying its arguments to the corresponding transformer. If none of the predicates
         * matches, fn returns undefined.
         */
        cond(fns: [any, any][]): Function;

        /**
         * Returns true if its arguments are equivalent, false otherwise. Dispatches to an equals method if present.
         * Handles cyclical data structures.
         */
        eq<T>(a: T, b: T): boolean;
        eq<T>(a: T): (b: T) => boolean;

        /**
         * Returns true if the first parameter is greater than the second.
         */
        gt(a: number, b: number): boolean;
        gt(a: number): (b: number) => boolean;

        /**
         * Accepts as its arguments a function and any number of values and returns a function that,
         * when invoked, calls the original function with all of the values prepended to the
         * original function's arguments list. In some libraries this function is named `applyLeft`.
         */
        partial(fn: Function, ...args: any[]): () => {};
        partial(fn: Function): (...args: any[]) => () => {};

        /**
         * Checks if predicate returns truthy for any element of collection. Iteration is stopped once predicate
         * returns truthy. The predicate is invoked with three arguments: (value, index|key, collection).
         *
         * @param predicate The function invoked per iteration.
         * @param collection The collection to iterate over.
         * @return Returns true if any element passes the predicate check, else false.
         */
        some<T>(predicate: ListIterator<T, boolean>, collection: List<T>): boolean;
        some<T>(predicate: ListIterator<T, boolean>): (collection: List<T>) => boolean;

        /**
         * Creates a function that returns the result of invoking the provided functions with the this binding of the
         * created function, where each successive invocation is supplied the return value of the previous.
         *
         * @param funcs Functions to invoke.
         * @return Returns the new function.
         */
        flow<TResult extends Function>(...funcs: Function[]): TResult;

        /**
         * Sets the value at path of object. If a portion of path doesn’t exist it’s created. Arrays are created for
         * missing index properties while objects are created for all other missing properties. Use _.setWith to
         * customize path creation.
         *
         * @param path The path of the property to set.
         * @param value The value to set.
         * @param object The object to modify.
         * @return Returns object.
         */
        set(path: string, value: any, object: Object);

        /**
         * This method invokes interceptor and returns value. The interceptor is bound to thisArg and invoked with one
         * argument; (value). The purpose of this method is to "tap into" a method chain in order to perform operations
         * on intermediate results within the chain.
         *
         * @param interceptor The function to invoke.
         * @param value The value to provide to interceptor.
         * @return Returns value.
         **/
        tap<T>(interceptor: (value: T) => void, value: T): T;
        tap<T>(interceptor: (value: T) => void): (value: T) => T;

        /**
         * Returns a new list, constructed by applying the supplied function to every element of the supplied list.
         */
        map<T, U>(fn: Function, list: T[]): U[];
        map<T, U>(fn: Function, obj: U): U;
        map<T, U>(fn: Function): (list: T[]) => U[];

        /**
         * Returns a new list containing only one copy of each element in the original list, based upon
         * the value returned by applying the supplied function to each list element. Prefers the first
         * item if the supplied function produces the same value on two items. R.equals is used for comparison.
         */
        uniqBy<T, U>(fn: (a: T) => U, list: T[]): T[];
        uniqBy<T, U>(fn: (a: T) => U): (list: T[]) => T[];
        uniqBy<T, U>(identity: string, list: T[]): T[];
        uniqBy<T, U>(identity: string): (list: T[]) => T[];

        /**
         * Returns `true` if the specified item is somewhere in the list, `false` otherwise.
         * Equivalent to `indexOf(a)(list) > -1`. Uses strict (`===`) equality checking.
         */
        includes<T>(value: T, collection: T | T[]): boolean;
        includes<T>(value: T): (collection: T | T[]) => boolean;

        /**
         * Returns a new list containing only those items that match a given predicate function. The
         * predicate function is passed one argument: (value).
         */
        filter(fn: (value) => boolean): (list) => any;
        filter(fn: (value) => boolean, list): any;
        filter(predicate: string): (collection: string) => string[];
        filter<W extends {}, T>(predicate: W): (collection: List<T>) => T[];

        /**
         * A special placeholder value used to specify "gaps" within curried functions, allowing partial
         * application of any combination of arguments, regardless of their positions.
         */
        placeholder: any;

        /**
         * Turns a named method of an object (or object prototype) into a function that can be
         * called directly. Passing the optional `len` parameter restricts the returned function to
         * the initial `len` parameters of the method.
         *
         * The returned function is curried and accepts `len + 1` parameters (or `method.length + 1`
         * when `len` is not specified), and the final parameter is the target object.
         */
        invokeArgs(name: string, obj: any, len?: number): () => {};
        invokeArgs(name: string): (obj: any, len?: number) => () => {};

        /**
        * Invokes the method at path of object.
        * @param object The object to query.
        * @param path The path of the method to invoke.
        * @param args The arguments to invoke the method with.
        **/
        invoke<TObject extends Object, TResult>(path: string): (object: TObject) => TResult;

        /**
         * Returns true if its arguments are equivalent, false otherwise. Dispatches to an equals method if present.
         * Handles cyclical data structures.
         */
        isEqual<T>(a: T, b: T): boolean;
        isEqual<T>(a: T): (b: T) => boolean;

        /*
         * A function that always returns true. Any passed in parameters are ignored.
         */
        stubTrue(): boolean;

        /**
         * Creates an array of elements, sorted in ascending order by the results of
         * running each element in a collection through each iteratee. This method
         * performs a stable sort, that is, it preserves the original sort order of
         * equal elements. The iteratees are invoked with one argument: (value).
         *
         * @static
         * @memberOf _
         * @category Collection
         * @param {Array|Object} collection The collection to iterate over.
         * @param {...(Function|Function[]|Object|Object[]|string|string[])} [iteratees=[_.identity]]
         *  The iteratees to sort by, specified individually or in arrays.
         * @returns {Array} Returns the new sorted array.
         * @example
         *
         * var users = [
         *   { 'user': 'fred',   'age': 48 },
         *   { 'user': 'barney', 'age': 36 },
         *   { 'user': 'fred',   'age': 42 },
         *   { 'user': 'barney', 'age': 34 }
         * ];
         *
         * _.sortBy(users, function(o) { return o.user; });
         * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 42]]
         *
         * _.sortBy(users, ['user', 'age']);
         * // => objects for [['barney', 34], ['barney', 36], ['fred', 42], ['fred', 48]]
         *
         * _.sortBy(users, 'user', function(o) {
         *   return Math.floor(o.age / 10);
         * });
         * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 42]]
         */
        sortBy<T, TSort>(collection: List<T>, iteratee?: ListIterator<T, TSort>): T[];

        /**
         * An alternative to _.reduce; this method transforms object to a new accumulator object which is the result of
         * running each of its own enumerable properties through iteratee, with each invocation potentially mutating
         * the accumulator object. The iteratee is bound to thisArg and invoked with four arguments: (accumulator,
         * value, key, object). Iteratee functions may exit iteration early by explicitly returning false.
         *
         * @param iteratee The function invoked per iteration.
         * @param object The object to iterate over.
         * @param accumulator The custom accumulator value.
         * @param thisArg The this binding of iteratee.
         * @return Returns the accumulated value.
         */
        transform<T, TResult>(iteratee: T, accumulator: any): (object: T[]) => TResult[];

        /**
         * Checks if value is classified as an Array object.
         * @param value The value to check.
         *
         * @return Returns true if value is correctly classified, else false.
         */
        isArray<T>(value?: any): value is T[];

        /**
         * Removes all elements from array that predicate returns truthy for and returns an array of the removed
         * elements. The predicate is bound to thisArg and invoked with three arguments: (value, index, array).
         *
         * If a property name is provided for predicate the created _.property style callback returns the property
         * value of the given element.
         *
         * If a value is also provided for thisArg the created _.matchesProperty style callback returns true for
         * elements that have a matching property value, else false.
         *
         * If an object is provided for predicate the created _.matches style callback returns true for elements that
         * have the properties of the given object, else false.
         *
         * Note: Unlike _.filter, this method mutates array.
         *
         * @param predicate The function invoked per iteration.
         * @return Returns the new array of removed elements.
         */
        remove<T>(predicate: Function|Object): (array: List<T>) => T[];

        /**
         * Removes all provided values from array using SameValueZero for equality comparisons.
         *
         * Note: Unlike _.without, this method mutates array.
         *
         * @param array The array to modify.
         * @param values The values to remove.
         * @return Returns array.
         */
        pull<T>(array: T[], ...values: T[]): T[];

        /**
         * @see _.pull
         */
        pull<T>(array: List<T>, ...values: T[]): List<T>;

        keys(arg: any);

        range(min: number, max: number): number;

        /**
         * Recursively flattens a nested array.
         *
         * @param array The array to recursively flatten.
         * @return Returns the new flattened array.
         */
        flattenDeep<T>(array: T): T[];

        /**
         * Creates an array of elements split into groups the length of size. If collection can’t be split evenly, the
         * final chunk will be the remaining elements.
         *
         * @param size The length of each chunk.
         * @param array The array to process.
         * @return Returns the new array containing chunks.
         */
        chunk<T>(size: number, array: List<T>): T[][];
        chunk<T>(size: number): (array: List<T>) => T[][];

        /**
         * The opposite of _.mapValues; this method creates an object with the same values as object and keys generated
         * by running each own enumerable property of object through iteratee.
         *
         * @param iteratee The function invoked per iteration.
         * @param object The object to iterate over.
         * @return Returns the new mapped object.
         */
        mapKeys<T>(iteratee, object): Dictionary<T>;
        mapKeys<T>(iteratee): (object) => Dictionary<T>;

        /**
         * Checks if value is empty. A value is considered empty unless it’s an arguments object, array, string, or
         * jQuery-like collection with a length greater than 0 or an object with own enumerable properties.
         *
         * @param value The value to inspect.
         * @return Returns true if value is empty, else false.
         */
        isEmpty(value?: any): boolean;
    }
}

declare var fp: fp.Static;
declare module "lodash/fp" {
    export = fp;
}
