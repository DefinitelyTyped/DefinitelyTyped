// Type definitions for Lo-Dash
// Project: http://lodash.com/
// Definitions by: Brian Zengel <https://github.com/bczengel>, Ilya Mochalov <https://github.com/chrootsu>
// Definitions: https://github.com/borisyankov/DefinitelyTyped


/**
### 4.0.0 Changelog (https://github.com/lodash/lodash/wiki/Changelog)

#### TODO:
removed:
- [x] Removed _.support
- [x] Removed _.findWhere in favor of _.find with iteratee shorthand
- [x] Removed _.where in favor of _.filter with iteratee shorthand
- [x] Removed _.pluck in favor of _.map with iteratee shorthand

renamed:
- [x] Renamed _.first to _.head
- [x] Renamed _.indexBy to _.keyBy
- [x] Renamed _.invoke to _.invokeMap
- [x] Renamed _.overArgs to _.overArgs
- [x] Renamed _.padLeft & _.padRight to _.padStart & _.padEnd
- [x] Renamed _.pairs to _.toPairs
- [x] Renamed _.rest to _.tail
- [x] Renamed _.restParam to _.rest
- [x] Renamed _.sortByOrder to _.orderBy
- [x] Renamed _.trimLeft & _.trimRight to _.trimStart & _.trimEnd
- [x] Renamed _.trunc to _.truncate

split:
- [x] Split _.indexOf & _.lastIndexOf into _.sortedIndexOf & _.sortedLastIndexOf
- [x] Split _.max & _.min into _.maxBy & _.minBy
- [x] Split _.omit & _.pick into _.omitBy & _.pickBy
- [x] Split _.sample into _.sampleSize
- [x] Split _.sortedIndex into _.sortedIndexBy
- [x] Split _.sortedLastIndex into _.sortedLastIndexBy
- [x] Split _.uniq into _.sortedUniq, _.sortedUniqBy, & _.uniqBy

changes:
- [x] Absorbed _.sortByAll into _.sortBy
- [x] Changed the category of _.at to “Object”
- [x] Changed the category of _.bindAll to “Utility”
- [x] Made _.capitalize uppercase the first character & lowercase the rest
- [x] Made _.functions return only own method names


added 23 array methods:
- [x] _.concat
- [x] _.differenceBy
- [x] _.differenceWith
- [x] _.flatMap
- [x] _.fromPairs
- [x] _.intersectionBy
- [x] _.intersectionWith
- [x] _.join
- [x] _.pullAll
- [x] _.pullAllBy
- [x] _.reverse
- [x] _.sortedIndexBy
- [x] _.sortedIndexOf
- [x] _.sortedLastIndexBy
- [x] _.sortedLastIndexOf
- [x] _.sortedUniq
- [x] _.sortedUniqBy
- [x] _.unionBy
- [x] _.unionWith
- [x] _.uniqBy
- [x] _.uniqWith
- [x] _.xorBy
- [x] _.xorWith

added 18 lang methods:
- [x] _.cloneDeepWith
- [x] _.cloneWith
- [x] _.eq
- [x] _.isArrayLike
- [x] _.isArrayLikeObject
- [x] _.isEqualWith
- [x] _.isInteger
- [x] _.isLength
- [x] _.isMatchWith
- [x] _.isNil
- [x] _.isObjectLike
- [x] _.isSafeInteger
- [x] _.isSymbol
- [x] _.toInteger
- [x] _.toLength
- [x] _.toNumber
- [x] _.toSafeInteger
- [x] _.toString

added 13 object methods:
- [x] _.assignIn
- [x] _.assignInWith
- [x] _.assignWith
- [x] _.functionsIn
- [x] _.hasIn
- [x] _.mergeWith
- [x] _.omitBy
- [x] _.pickBy


added 8 string methods:
- [x] _.lowerCase
- [x] _.lowerFirst
- [x] _.upperCase
- [x] _.upperFirst
- [x] _.toLower
- [x] _.toUpper

added 8 utility methods:
- [x] _.toPath

added 4 math methods:
- [x] _.maxBy
- [x] _.mean
- [x] _.minBy
- [x] _.sumBy

added 2 function methods:
- [x] _.flip
- [x] _.unary

added 2 number methods:
- [x] _.clamp
- [x] _.subtract

added collection method:
- [x] _.sampleSize

Added 3 aliases

- [x] _.first as an alias of _.head

Removed 17 aliases
- [x] Removed aliase _.all
- [x] Removed aliase _.any
- [x] Removed aliase _.backflow
- [x] Removed aliase _.callback
- [x] Removed aliase _.collect
- [x] Removed aliase _.compose
- [x] Removed aliase _.contains
- [x] Removed aliase _.detect
- [x] Removed aliase _.foldl
- [x] Removed aliase _.foldr
- [x] Removed aliase _.include
- [x] Removed aliase _.inject
- [x] Removed aliase _.methods
- [x] Removed aliase _.object
- [x] Removed aliase _.run
- [x] Removed aliase _.select
- [x] Removed aliase _.unique

Other changes
- [x] Added support for array buffers to _.isEqual
- [x] Added support for converting iterators to _.toArray
- [x] Added support for deep paths to _.zipObject
- [x] Changed UMD to export to window or self when available regardless of other exports
- [x] Ensured debounce cancel clears args & thisArg references
- [x] Ensured _.add, _.subtract, & _.sum don’t skip NaN values
- [x] Ensured _.clone treats generators like functions
- [x] Ensured _.clone produces clones with the source’s [[Prototype]]
- [x] Ensured _.defaults assigns properties that shadow Object.prototype
- [x] Ensured _.defaultsDeep doesn’t merge a string into an array
- [x] Ensured _.defaultsDeep & _.merge don’t modify sources
- [x] Ensured _.defaultsDeep works with circular references
- [x] Ensured _.keys skips “length” on strict mode arguments objects in Safari 9
- [x] Ensured _.merge doesn’t convert strings to arrays
- [x] Ensured _.merge merges plain-objects onto non plain-objects
- [x] Ensured _#plant resets iterator data of cloned sequences
- [x] Ensured _.random swaps min & max if min is greater than max
- [x] Ensured _.range preserves the sign of start of -0
- [x] Ensured _.reduce & _.reduceRight use getIteratee in their array branch
- [x] Fixed rounding issue with the precision param of _.floor

** LATER **
Misc:
- [ ] Made _.forEach, _.forIn, _.forOwn, & _.times implicitly end a chain sequence
- [ ] Removed thisArg params from most methods
- [ ] Made “By” methods provide a single param to iteratees
- [ ] Made _.words chainable by default
- [ ] Removed isDeep params from _.clone & _.flatten
- [ ] Removed _.bindAll support for binding all methods when no names are provided
- [ ] Removed func-first param signature from _.before & _.after
- [ ] _.extend as an alias of _.assignIn
- [ ] _.extendWith as an alias of _.assignInWith
- [ ] Added clear method to _.memoize.Cache
- [ ] Added flush method to debounced & throttled functions
- [ ] Added support for ES6 maps, sets, & symbols to _.clone, _.isEqual, & _.toArray
- [ ] Enabled _.flow & _.flowRight to accept an array of functions
- [ ] Ensured “Collection” methods treat functions as objects
- [ ] Ensured _.assign, _.defaults, & _.merge coerce object values to objects
- [ ] Ensured _.bindKey bound functions call object[key] when called with the new operator
- [ ] Ensured _.isFunction returns true for generator functions
- [ ] Ensured _.merge assigns typed arrays directly
- [ ] Made _(...) an iterator & iterable
- [ ] Made _.drop, _.take, & right forms coerce n of undefined to 0

Methods:
- [ ] _.concat
- [ ] _.differenceBy
- [ ] _.differenceWith
- [ ] _.flatMap
- [ ] _.fromPairs
- [ ] _.intersectionBy
- [ ] _.intersectionWith
- [ ] _.join
- [ ] _.pullAll
- [ ] _.pullAllBy
- [ ] _.reverse
- [ ] _.sortedLastIndexOf
- [ ] _.unionBy
- [ ] _.unionWith
- [ ] _.uniqWith
- [ ] _.xorBy
- [ ] _.xorWith
- [ ] _.toString

- [ ] _.invoke
- [ ] _.setWith
- [ ] _.toPairs
- [ ] _.toPairsIn
- [ ] _.unset

- [ ] _.replace
- [ ] _.split

- [ ] _.cond
- [ ] _.conforms
- [ ] _.nthArg
- [ ] _.over
- [ ] _.overEvery
- [ ] _.overSome
- [ ] _.rangeRight

- [ ] _.next
*/

declare var _: _.LoDashStatic;

declare module _ {
    interface LoDashStatic {
        /**
        * Creates a lodash object which wraps the given value to enable intuitive method chaining.
        *
        * In addition to Lo-Dash methods, wrappers also have the following Array methods:
        * concat, join, pop, push, reverse, shift, slice, sort, splice, and unshift
        *
        * Chaining is supported in custom builds as long as the value method is implicitly or
        * explicitly included in the build.
        *
        * The chainable wrapper functions are:
        * after, assign, bind, bindAll, bindKey, chain, chunk, compact, compose, concat, countBy,
        * createCallback, curry, debounce, defaults, defer, delay, difference, filter, flatten,
        * forEach, forEachRight, forIn, forInRight, forOwn, forOwnRight, functions, groupBy,
        * keyBy, initial, intersection, invert, invoke, keys, map, max, memoize, merge, min,
        * object, omit, once, pairs, partial, partialRight, pick, pluck, pull, push, range, reject,
        * remove, rest, reverse, sample, shuffle, slice, sort, sortBy, splice, tap, throttle, times,
        * toArray, transform, union, uniq, unset, unshift, unzip, values, where, without, wrap, and zip
        *
        * The non-chainable wrapper functions are:
        * clone, cloneDeep, contains, escape, every, find, findIndex, findKey, findLast,
        * findLastIndex, findLastKey, has, identity, indexOf, isArguments, isArray, isBoolean,
        * isDate, isElement, isEmpty, isEqual, isFinite, isFunction, isNaN, isNull, isNumber,
        * isObject, isPlainObject, isRegExp, isString, isUndefined, join, lastIndexOf, mixin,
        * noConflict, parseInt, pop, random, reduce, reduceRight, result, shift, size, some,
        * sortedIndex, runInContext, template, unescape, uniqueId, and value
        *
        * The wrapper functions first and last return wrapped values when n is provided, otherwise
        * they return unwrapped values.
        *
        * Explicit chaining can be enabled by using the _.chain method.
        **/
        (value: number): LoDashImplicitWrapper<number>;
        (value: string): LoDashImplicitStringWrapper;
        (value: boolean): LoDashImplicitWrapper<boolean>;
        (value: Array<number>): LoDashImplicitNumberArrayWrapper;
        <T>(value: Array<T>): LoDashImplicitArrayWrapper<T>;
        <T extends {}>(value: T): LoDashImplicitObjectWrapper<T>;
        (value: any): LoDashImplicitWrapper<any>;

        /**
        * The semantic version number.
        **/
        VERSION: string;

        /**
        * By default, the template delimiters used by Lo-Dash are similar to those in embedded Ruby
        * (ERB). Change the following template settings to use alternative delimiters.
        **/
        templateSettings: TemplateSettings;
    }

    /**
    * By default, the template delimiters used by Lo-Dash are similar to those in embedded Ruby
    * (ERB). Change the following template settings to use alternative delimiters.
    **/
    interface TemplateSettings {
        /**
        * The "escape" delimiter.
        **/
        escape?: RegExp;

        /**
        * The "evaluate" delimiter.
        **/
        evaluate?: RegExp;

        /**
        * An object to import into the template as local variables.
        **/
        imports?: Dictionary<any>;

        /**
        * The "interpolate" delimiter.
        **/
        interpolate?: RegExp;

        /**
        * Used to reference the data object in the template text.
        **/
        variable?: string;
    }

    /**
     * Creates a cache object to store key/value pairs.
     */
    interface MapCache {
        /**
         * Removes `key` and its value from the cache.
         * @param key The key of the value to remove.
         * @return Returns `true` if the entry was removed successfully, else `false`.
         */
        delete(key: string): boolean;

        /**
         * Gets the cached value for `key`.
         * @param key The key of the value to get.
         * @return Returns the cached value.
         */
        get(key: string): any;

        /**
         * Checks if a cached value for `key` exists.
         * @param key The key of the entry to check.
         * @return Returns `true` if an entry for `key` exists, else `false`.
         */
        has(key: string): boolean;

        /**
         * Sets `value` to `key` of the cache.
         * @param key The key of the value to cache.
         * @param value The value to cache.
         * @return Returns the cache object.
         */
        set(key: string, value: any): _.Dictionary<any>;
    }

    interface LoDashWrapperBase<T, TWrapper> { }

    interface LoDashImplicitWrapperBase<T, TWrapper> extends LoDashWrapperBase<T, TWrapper> { }

    interface LoDashExplicitWrapperBase<T, TWrapper> extends LoDashWrapperBase<T, TWrapper> { }

    interface LoDashImplicitWrapper<T> extends LoDashImplicitWrapperBase<T, LoDashImplicitWrapper<T>> { }

    interface LoDashExplicitWrapper<T> extends LoDashExplicitWrapperBase<T, LoDashExplicitWrapper<T>> { }

    interface LoDashImplicitStringWrapper extends LoDashImplicitWrapper<string> { }

    interface LoDashExplicitStringWrapper extends LoDashExplicitWrapper<string> { }

    interface LoDashImplicitObjectWrapper<T> extends LoDashImplicitWrapperBase<T, LoDashImplicitObjectWrapper<T>> { }

    interface LoDashExplicitObjectWrapper<T> extends LoDashExplicitWrapperBase<T, LoDashExplicitObjectWrapper<T>> { }

    interface LoDashImplicitArrayWrapper<T> extends LoDashImplicitWrapperBase<T[], LoDashImplicitArrayWrapper<T>> {
        pop(): T;
        push(...items: T[]): LoDashImplicitArrayWrapper<T>;
        shift(): T;
        sort(compareFn?: (a: T, b: T) => number): LoDashImplicitArrayWrapper<T>;
        splice(start: number): LoDashImplicitArrayWrapper<T>;
        splice(start: number, deleteCount: number, ...items: any[]): LoDashImplicitArrayWrapper<T>;
        unshift(...items: T[]): LoDashImplicitArrayWrapper<T>;
    }

    interface LoDashExplicitArrayWrapper<T> extends LoDashExplicitWrapperBase<T[], LoDashExplicitArrayWrapper<T>> { }

    interface LoDashImplicitNumberArrayWrapper extends LoDashImplicitArrayWrapper<number> { }

    interface LoDashExplicitNumberArrayWrapper extends LoDashExplicitArrayWrapper<number> { }

    /*********
     * Array *
     *********/

    //_.chunk
    interface LoDashStatic {
        /**
         * Creates an array of elements split into groups the length of size. If collection can’t be split evenly, the
         * final chunk will be the remaining elements.
         *
         * @param array The array to process.
         * @param size The length of each chunk.
         * @return Returns the new array containing chunks.
         */
        chunk<T>(
            array: List<T>,
            size?: number
        ): T[][];
    }

    interface LoDashImplicitArrayWrapper<T> {
        /**
         * @see _.chunk
         */
        chunk(size?: number): LoDashImplicitArrayWrapper<T[]>;
    }

    interface LoDashImplicitObjectWrapper<T> {
        /**
         * @see _.chunk
         */
        chunk<TResult>(size?: number): LoDashImplicitArrayWrapper<TResult[]>;
    }

    interface LoDashExplicitArrayWrapper<T> {
        /**
         * @see _.chunk
         */
        chunk(size?: number): LoDashExplicitArrayWrapper<T[]>;
    }

    interface LoDashExplicitObjectWrapper<T> {
        /**
         * @see _.chunk
         */
        chunk<TResult>(size?: number): LoDashExplicitArrayWrapper<TResult[]>;
    }

    //_.compact
    interface LoDashStatic {
        /**
         * Creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are
         * falsey.
         *
         * @param array The array to compact.
         * @return (Array) Returns the new array of filtered values.
         */
        compact<T>(array?: List<T>): T[];
    }

    interface LoDashImplicitArrayWrapper<T> {
        /**
         * @see _.compact
         */
        compact(): LoDashImplicitArrayWrapper<T>;
    }

    interface LoDashImplicitObjectWrapper<T> {
        /**
         * @see _.compact
         */
        compact<TResult>(): LoDashImplicitArrayWrapper<TResult>;
    }

    interface LoDashExplicitArrayWrapper<T> {
        /**
         * @see _.compact
         */
        compact(): LoDashExplicitArrayWrapper<T>;
    }

    interface LoDashExplicitObjectWrapper<T> {
        /**
         * @see _.compact
         */
        compact<TResult>(): LoDashExplicitArrayWrapper<TResult>;
    }

    //_.concat DUMMY
    interface LoDashStatic {
        /**
         * Creates a new array concatenating `array` with any additional arrays
         * and/or values.
         *
         * @static
         * @memberOf _
         * @category Array
         * @param {Array} array The array to concatenate.
         * @param {...*} [values] The values to concatenate.
         * @returns {Array} Returns the new concatenated array.
         * @example
         *
         * var array = [1];
         * var other = _.concat(array, 2, [3], [[4]]);
         *
         * console.log(other);
         * // => [1, 2, 3, [4]]
         *
         * console.log(array);
         * // => [1]
         */
         concat<T>(...values: (T[]|List<T>)[]) : T[];
    }

    //_.difference
    interface LoDashStatic {
        /**
         * Creates an array of unique array values not included in the other provided arrays using SameValueZero for
         * equality comparisons.
         *
         * @param array The array to inspect.
         * @param values The arrays of values to exclude.
         * @return Returns the new array of filtered values.
         */
        difference<T>(
            array: any[]|List<any>,
            ...values: any[]
        ): T[];
    }

    interface LoDashImplicitArrayWrapper<T> {
        /**
         * @see _.difference
         */
        difference(...values: (T[]|List<T>)[]): LoDashImplicitArrayWrapper<T>;
    }

    interface LoDashImplicitObjectWrapper<T> {
        /**
         * @see _.difference
         */
        difference<TValue>(...values: (TValue[]|List<TValue>)[]): LoDashImplicitArrayWrapper<TValue>;
    }

    interface LoDashExplicitArrayWrapper<T> {
        /**
         * @see _.difference
         */
        difference(...values: (T[]|List<T>)[]): LoDashExplicitArrayWrapper<T>;
    }

    interface LoDashExplicitObjectWrapper<T> {
        /**
         * @see _.difference
         */
        difference<TValue>(...values: (TValue[]|List<TValue>)[]): LoDashExplicitArrayWrapper<TValue>;
    }

    //_.differenceBy
    interface LoDashStatic {
        /**
         * This method is like _.difference except that it accepts iteratee which is invoked for each element of array
         * and values to generate the criterion by which uniqueness is computed. The iteratee is invoked with one
         * argument: (value).
         *
         * @param array The array to inspect.
         * @param values The values to exclude.
         * @param iteratee The iteratee invoked per element.
         * @returns Returns the new array of filtered values.
         */
        differenceBy<T>(
            array: T[]|List<T>,
            values?: T[]|List<T>,
            iteratee?: ((value: T) => any)|string
        ): T[];

        /**
         * @see _.differenceBy
         */
        differenceBy<T, W extends Object>(
            array: T[]|List<T>,
            values?: T[]|List<T>,
            iteratee?: W
        ): T[];

        /**
         * @see _.differenceBy
         */
        differenceBy<T>(
            array: T[]|List<T>,
            values1?: T[]|List<T>,
            values2?: T[]|List<T>,
            iteratee?: ((value: T) => any)|string
        ): T[];

        /**
         * @see _.differenceBy
         */
        differenceBy<T, W extends Object>(
            array: T[]|List<T>,
            values1?: T[]|List<T>,
            values2?: T[]|List<T>,
            iteratee?: W
        ): T[];

        /**
         * @see _.differenceBy
         */
        differenceBy<T>(
            array: T[]|List<T>,
            values1?: T[]|List<T>,
            values2?: T[]|List<T>,
            values3?: T[]|List<T>,
            iteratee?: ((value: T) => any)|string
        ): T[];

        /**
         * @see _.differenceBy
         */
        differenceBy<T, W extends Object>(
            array: T[]|List<T>,
            values1?: T[]|List<T>,
            values2?: T[]|List<T>,
            values3?: T[]|List<T>,
            iteratee?: W
        ): T[];

        /**
         * @see _.differenceBy
         */
        differenceBy<T, W extends Object>(
            array: T[]|List<T>,
            values1?: T[]|List<T>,
            values2?: T[]|List<T>,
            values3?: T[]|List<T>,
            values4?: T[]|List<T>,
            iteratee?: W
        ): T[];

        /**
         * @see _.differenceBy
         */
        differenceBy<T>(
            array: T[]|List<T>,
            values1?: T[]|List<T>,
            values2?: T[]|List<T>,
            values3?: T[]|List<T>,
            values4?: T[]|List<T>,
            iteratee?: ((value: T) => any)|string
        ): T[];

        /**
         * @see _.differenceBy
         */
        differenceBy<T>(
            array: T[]|List<T>,
            values1?: T[]|List<T>,
            values2?: T[]|List<T>,
            values3?: T[]|List<T>,
            values4?: T[]|List<T>,
            values5?: T[]|List<T>,
            iteratee?: ((value: T) => any)|string
        ): T[];

        /**
         * @see _.differenceBy
         */
        differenceBy<T, W extends Object>(
            array: T[]|List<T>,
            values1?: T[]|List<T>,
            values2?: T[]|List<T>,
            values3?: T[]|List<T>,
            values4?: T[]|List<T>,
            values5?: T[]|List<T>,
            iteratee?: W
        ): T[];

        /**
         * @see _.differenceBy
         */
        differenceBy<T>(
            array: T[]|List<T>,
            ...values: any[]
        ): T[];
    }

    interface LoDashImplicitArrayWrapper<T> {
        /**
         * @see _.differenceBy
         */
        differenceBy<T>(
            values?: T[]|List<T>,
            iteratee?: ((value: T) => any)|string
        ): LoDashImplicitArrayWrapper<T>;

        /**
         * @see _.differenceBy
         */
        differenceBy<T, W extends Object>(
            values?: T[]|List<T>,
            iteratee?: W
        ): LoDashImplicitArrayWrapper<T>;

        /**
         * @see _.differenceBy
         */
        differenceBy<T>(
            values1?: T[]|List<T>,
            values2?: T[]|List<T>,
            iteratee?: ((value: T) => any)|string
        ): LoDashImplicitArrayWrapper<T>;

        /**
         * @see _.differenceBy
         */
        differenceBy<T, W extends Object>(
            values1?: T[]|List<T>,
            values2?: T[]|List<T>,
            iteratee?: W
        ): LoDashImplicitArrayWrapper<T>;

        /**
         * @see _.differenceBy
         */
        differenceBy<T>(
            values1?: T[]|List<T>,
            values2?: T[]|List<T>,
            values3?: T[]|List<T>,
            iteratee?: ((value: T) => any)|string
        ): LoDashImplicitArrayWrapper<T>;

        /**
         * @see _.differenceBy
         */
        differenceBy<T, W extends Object>(
            values1?: T[]|List<T>,
            values2?: T[]|List<T>,
            values3?: T[]|List<T>,
            iteratee?: W
        ): LoDashImplicitArrayWrapper<T>;

        /**
         * @see _.differenceBy
         */
        differenceBy<T>(
            values1?: T[]|List<T>,
            values2?: T[]|List<T>,
            values3?: T[]|List<T>,
            values4?: T[]|List<T>,
            iteratee?: ((value: T) => any)|string
        ): LoDashImplicitArrayWrapper<T>;

        /**
         * @see _.differenceBy
         */
        differenceBy<T, W extends Object>(
            values1?: T[]|List<T>,
            values2?: T[]|List<T>,
            values3?: T[]|List<T>,
            values4?: T[]|List<T>,
            iteratee?: W
        ): LoDashImplicitArrayWrapper<T>;

        /**
         * @see _.differenceBy
         */
        differenceBy<T>(
            values1?: T[]|List<T>,
            values2?: T[]|List<T>,
            values3?: T[]|List<T>,
            values4?: T[]|List<T>,
            values5?: T[]|List<T>,
            iteratee?: ((value: T) => any)|string
        ): LoDashImplicitArrayWrapper<T>;

        /**
         * @see _.differenceBy
         */
        differenceBy<T, W extends Object>(
            values1?: T[]|List<T>,
            values2?: T[]|List<T>,
            values3?: T[]|List<T>,
            values4?: T[]|List<T>,
            values5?: T[]|List<T>,
            iteratee?: W
        ): LoDashImplicitArrayWrapper<T>;

        /**
         * @see _.differenceBy
         */
        differenceBy<T>(
            ...values: any[]
        ): LoDashImplicitArrayWrapper<T>;
    }

    interface LoDashImplicitObjectWrapper<T> {
        /**
         * @see _.differenceBy
         */
        differenceBy<T>(
            values?: T[]|List<T>,
            iteratee?: ((value: T) => any)|string
        ): LoDashImplicitArrayWrapper<T>;

        /**
         * @see _.differenceBy
         */
        differenceBy<T, W extends Object>(
            values?: T[]|List<T>,
            iteratee?: W
        ): LoDashImplicitArrayWrapper<T>;

        /**
         * @see _.differenceBy
         */
        differenceBy<T>(
            values1?: T[]|List<T>,
            values2?: T[]|List<T>,
            iteratee?: ((value: T) => any)|string
        ): LoDashImplicitArrayWrapper<T>;

        /**
         * @see _.differenceBy
         */
        differenceBy<T, W extends Object>(
            values1?: T[]|List<T>,
            values2?: T[]|List<T>,
            iteratee?: W
        ): LoDashImplicitArrayWrapper<T>;

        /**
         * @see _.differenceBy
         */
        differenceBy<T>(
            values1?: T[]|List<T>,
            values2?: T[]|List<T>,
            values3?: T[]|List<T>,
            iteratee?: ((value: T) => any)|string
        ): LoDashImplicitArrayWrapper<T>;

        /**
         * @see _.differenceBy
         */
        differenceBy<T, W extends Object>(
            values1?: T[]|List<T>,
            values2?: T[]|List<T>,
            values3?: T[]|List<T>,
            iteratee?: W
        ): LoDashImplicitArrayWrapper<T>;

        /**
         * @see _.differenceBy
         */
        differenceBy<T>(
            values1?: T[]|List<T>,
            values2?: T[]|List<T>,
            values3?: T[]|List<T>,
            values4?: T[]|List<T>,
            iteratee?: ((value: T) => any)|string
        ): LoDashImplicitArrayWrapper<T>;

        /**
         * @see _.differenceBy
         */
        differenceBy<T, W extends Object>(
            values1?: T[]|List<T>,
            values2?: T[]|List<T>,
            values3?: T[]|List<T>,
            values4?: T[]|List<T>,
            iteratee?: W
        ): LoDashImplicitArrayWrapper<T>;

        /**
         * @see _.differenceBy
         */
        differenceBy<T>(
            values1?: T[]|List<T>,
            values2?: T[]|List<T>,
            values3?: T[]|List<T>,
            values4?: T[]|List<T>,
            values5?: T[]|List<T>,
            iteratee?: ((value: T) => any)|string
        ): LoDashImplicitArrayWrapper<T>;

        /**
         * @see _.differenceBy
         */
        differenceBy<T, W extends Object>(
            values1?: T[]|List<T>,
            values2?: T[]|List<T>,
            values3?: T[]|List<T>,
            values4?: T[]|List<T>,
            values5?: T[]|List<T>,
            iteratee?: W
        ): LoDashImplicitArrayWrapper<T>;

        /**
         * @see _.differenceBy
         */
        differenceBy<T>(
            ...values: any[]
        ): LoDashImplicitArrayWrapper<T>;
    }

    interface LoDashExplicitArrayWrapper<T> {
        /**
         * @see _.differenceBy
         */
        differenceBy<T>(
            values?: T[]|List<T>,
            iteratee?: ((value: T) => any)|string
        ): LoDashExplicitArrayWrapper<T>;

        /**
         * @see _.differenceBy
         */
        differenceBy<T, W extends Object>(
            values?: T[]|List<T>,
            iteratee?: W
        ): LoDashExplicitArrayWrapper<T>;

        /**
         * @see _.differenceBy
         */
        differenceBy<T>(
            values1?: T[]|List<T>,
            values2?: T[]|List<T>,
            iteratee?: ((value: T) => any)|string
        ): LoDashExplicitArrayWrapper<T>;

        /**
         * @see _.differenceBy
         */
        differenceBy<T, W extends Object>(
            values1?: T[]|List<T>,
            values2?: T[]|List<T>,
            iteratee?: W
        ): LoDashExplicitArrayWrapper<T>;

        /**
         * @see _.differenceBy
         */
        differenceBy<T>(
            values1?: T[]|List<T>,
            values2?: T[]|List<T>,
            values3?: T[]|List<T>,
            iteratee?: ((value: T) => any)|string
        ): LoDashExplicitArrayWrapper<T>;

        /**
         * @see _.differenceBy
         */
        differenceBy<T, W extends Object>(
            values1?: T[]|List<T>,
            values2?: T[]|List<T>,
            values3?: T[]|List<T>,
            iteratee?: W
        ): LoDashExplicitArrayWrapper<T>;

        /**
         * @see _.differenceBy
         */
        differenceBy<T>(
            values1?: T[]|List<T>,
            values2?: T[]|List<T>,
            values3?: T[]|List<T>,
            values4?: T[]|List<T>,
            iteratee?: ((value: T) => any)|string
        ): LoDashExplicitArrayWrapper<T>;

        /**
         * @see _.differenceBy
         */
        differenceBy<T, W extends Object>(
            values1?: T[]|List<T>,
            values2?: T[]|List<T>,
            values3?: T[]|List<T>,
            values4?: T[]|List<T>,
            iteratee?: W
        ): LoDashExplicitArrayWrapper<T>;

        /**
         * @see _.differenceBy
         */
        differenceBy<T>(
            values1?: T[]|List<T>,
            values2?: T[]|List<T>,
            values3?: T[]|List<T>,
            values4?: T[]|List<T>,
            values5?: T[]|List<T>,
            iteratee?: ((value: T) => any)|string
        ): LoDashExplicitArrayWrapper<T>;

        /**
         * @see _.differenceBy
         */
        differenceBy<T, W extends Object>(
            values1?: T[]|List<T>,
            values2?: T[]|List<T>,
            values3?: T[]|List<T>,
            values4?: T[]|List<T>,
            values5?: T[]|List<T>,
            iteratee?: W
        ): LoDashExplicitArrayWrapper<T>;

        /**
         * @see _.differenceBy
         */
        differenceBy<T>(
            ...values: any[]
        ): LoDashExplicitArrayWrapper<T>;
    }

    interface LoDashExplicitObjectWrapper<T> {
        /**
         * @see _.differenceBy
         */
        differenceBy<T>(
            values?: T[]|List<T>,
            iteratee?: ((value: T) => any)|string
        ): LoDashExplicitArrayWrapper<T>;

        /**
         * @see _.differenceBy
         */
        differenceBy<T, W extends Object>(
            values?: T[]|List<T>,
            iteratee?: W
        ): LoDashExplicitArrayWrapper<T>;

        /**
         * @see _.differenceBy
         */
        differenceBy<T>(
            values1?: T[]|List<T>,
            values2?: T[]|List<T>,
            iteratee?: ((value: T) => any)|string
        ): LoDashExplicitArrayWrapper<T>;

        /**
         * @see _.differenceBy
         */
        differenceBy<T, W extends Object>(
            values1?: T[]|List<T>,
            values2?: T[]|List<T>,
            iteratee?: W
        ): LoDashExplicitArrayWrapper<T>;

        /**
         * @see _.differenceBy
         */
        differenceBy<T>(
            values1?: T[]|List<T>,
            values2?: T[]|List<T>,
            values3?: T[]|List<T>,
            iteratee?: ((value: T) => any)|string
        ): LoDashExplicitArrayWrapper<T>;

        /**
         * @see _.differenceBy
         */
        differenceBy<T, W extends Object>(
            values1?: T[]|List<T>,
            values2?: T[]|List<T>,
            values3?: T[]|List<T>,
            iteratee?: W
        ): LoDashExplicitArrayWrapper<T>;

        /**
         * @see _.differenceBy
         */
        differenceBy<T>(
            values1?: T[]|List<T>,
            values2?: T[]|List<T>,
            values3?: T[]|List<T>,
            values4?: T[]|List<T>,
            iteratee?: ((value: T) => any)|string
        ): LoDashExplicitArrayWrapper<T>;

        /**
         * @see _.differenceBy
         */
        differenceBy<T, W extends Object>(
            values1?: T[]|List<T>,
            values2?: T[]|List<T>,
            values3?: T[]|List<T>,
            values4?: T[]|List<T>,
            iteratee?: W
        ): LoDashExplicitArrayWrapper<T>;

        /**
         * @see _.differenceBy
         */
        differenceBy<T>(
            values1?: T[]|List<T>,
            values2?: T[]|List<T>,
            values3?: T[]|List<T>,
            values4?: T[]|List<T>,
            values5?: T[]|List<T>,
            iteratee?: ((value: T) => any)|string
        ): LoDashExplicitArrayWrapper<T>;

        /**
         * @see _.differenceBy
         */
        differenceBy<T, W extends Object>(
            values1?: T[]|List<T>,
            values2?: T[]|List<T>,
            values3?: T[]|List<T>,
            values4?: T[]|List<T>,
            values5?: T[]|List<T>,
            iteratee?: W
        ): LoDashExplicitArrayWrapper<T>;

        /**
         * @see _.differenceBy
         */
        differenceBy<T>(
            ...values: any[]
        ): LoDashExplicitArrayWrapper<T>;
    }

    //_.differenceWith DUMMY
    interface LoDashStatic {
        /**
         * Creates an array of unique `array` values not included in the other
         * provided arrays using [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
         * for equality comparisons.
         *
         * @static
         * @memberOf _
         * @category Array
         * @param {Array} array The array to inspect.
         * @param {...Array} [values] The values to exclude.
         * @returns {Array} Returns the new array of filtered values.
         * @example
         *
         * _.difference([3, 2, 1], [4, 2]);
         * // => [3, 1]
         */
        differenceWith(
            array: any[]|List<any>,
            ...values: any[]
        ): any[];
    }

    //_.drop
    interface LoDashStatic {
        /**
         * Creates a slice of array with n elements dropped from the beginning.
         *
         * @param array The array to query.
         * @param n The number of elements to drop.
         * @return Returns the slice of array.
         */
        drop<T>(array: T[]|List<T>, n?: number): T[];
    }

    interface LoDashImplicitArrayWrapper<T> {
        /**
         * @see _.drop
         */
        drop(n?: number): LoDashImplicitArrayWrapper<T>;
    }

    interface LoDashImplicitObjectWrapper<T> {
        /**
         * @see _.drop
         */
        drop<T>(n?: number): LoDashImplicitArrayWrapper<T>;
    }

    interface LoDashExplicitArrayWrapper<T> {
        /**
         * @see _.drop
         */
        drop(n?: number): LoDashExplicitArrayWrapper<T>;
    }

    interface LoDashExplicitObjectWrapper<T> {
        /**
         * @see _.drop
         */
        drop<T>(n?: number): LoDashExplicitArrayWrapper<T>;
    }

    //_.dropRight
    interface LoDashStatic {
        /**
         * Creates a slice of array with n elements dropped from the end.
         *
         * @param array The array to query.
         * @param n The number of elements to drop.
         * @return Returns the slice of array.
         */
        dropRight<T>(
            array: List<T>,
            n?: number
        ): T[];
    }

    interface LoDashImplicitArrayWrapper<T> {
        /**
         * @see _.dropRight
         */
        dropRight(n?: number): LoDashImplicitArrayWrapper<T>;
    }

    interface LoDashImplicitObjectWrapper<T> {
        /**
         * @see _.dropRight
         */
        dropRight<TResult>(n?: number): LoDashImplicitArrayWrapper<TResult>;
    }

    interface LoDashExplicitArrayWrapper<T> {
        /**
         * @see _.dropRight
         */
        dropRight(n?: number): LoDashExplicitArrayWrapper<T>;
    }

    interface LoDashExplicitObjectWrapper<T> {
        /**
         * @see _.dropRight
         */
        dropRight<TResult>(n?: number): LoDashExplicitArrayWrapper<TResult>;
    }

    //_.dropRightWhile
    interface LoDashStatic {
        /**
         * Creates a slice of array excluding elements dropped from the end. Elements are dropped until predicate
         * returns falsey. The predicate is bound to thisArg and invoked with three arguments: (value, index, array).
         *
         * If a property name is provided for predicate the created _.property style callback returns the property
         * value of the given element.
         *
         * If a value is also provided for thisArg the created _.matchesProperty style callback returns true for
         * elements that have a matching property value, else false.
         *
         * If an object is provided for predicate the created _.matches style callback returns true for elements that
         * match the properties of the given object, else false.
         *
         * @param array The array to query.
         * @param predicate The function invoked per iteration.
         * @param thisArg The this binding of predicate.
         * @return Returns the slice of array.
         */
        dropRightWhile<TValue>(
            array: List<TValue>,
            predicate?: ListIterator<TValue, boolean>,
            thisArg?: any
        ): TValue[];

        /**
         * @see _.dropRightWhile
         */
        dropRightWhile<TValue>(
            array: List<TValue>,
            predicate?: string,
            thisArg?: any
        ): TValue[];

        /**
         * @see _.dropRightWhile
         */
        dropRightWhile<TWhere, TValue>(
            array: List<TValue>,
            predicate?: TWhere
        ): TValue[];
    }

    interface LoDashImplicitArrayWrapper<T> {
        /**
         * @see _.dropRightWhile
         */
        dropRightWhile(
            predicate?: ListIterator<T, boolean>,
            thisArg?: any
        ): LoDashImplicitArrayWrapper<T>;

        /**
         * @see _.dropRightWhile
         */
        dropRightWhile(
            predicate?: string,
            thisArg?: any
        ): LoDashImplicitArrayWrapper<T>;

        /**
         * @see _.dropRightWhile
         */
        dropRightWhile<TWhere>(
            predicate?: TWhere
        ): LoDashImplicitArrayWrapper<T>;
    }

    interface LoDashImplicitObjectWrapper<T> {
        /**
         * @see _.dropRightWhile
         */
        dropRightWhile<TValue>(
            predicate?: ListIterator<TValue, boolean>,
            thisArg?: any
        ): LoDashImplicitArrayWrapper<TValue>;

        /**
         * @see _.dropRightWhile
         */
        dropRightWhile<TValue>(
            predicate?: string,
            thisArg?: any
        ): LoDashImplicitArrayWrapper<TValue>;

        /**
         * @see _.dropRightWhile
         */
        dropRightWhile<TWhere, TValue>(
            predicate?: TWhere
        ): LoDashImplicitArrayWrapper<TValue>;
    }

    interface LoDashExplicitArrayWrapper<T> {
        /**
         * @see _.dropRightWhile
         */
        dropRightWhile(
            predicate?: ListIterator<T, boolean>,
            thisArg?: any
        ): LoDashExplicitArrayWrapper<T>;

        /**
         * @see _.dropRightWhile
         */
        dropRightWhile(
            predicate?: string,
            thisArg?: any
        ): LoDashExplicitArrayWrapper<T>;

        /**
         * @see _.dropRightWhile
         */
        dropRightWhile<TWhere>(
            predicate?: TWhere
        ): LoDashExplicitArrayWrapper<T>;
    }

    interface LoDashExplicitObjectWrapper<T> {
        /**
         * @see _.dropRightWhile
         */
        dropRightWhile<TValue>(
            predicate?: ListIterator<TValue, boolean>,
            thisArg?: any
        ): LoDashExplicitArrayWrapper<TValue>;

        /**
         * @see _.dropRightWhile
         */
        dropRightWhile<TValue>(
            predicate?: string,
            thisArg?: any
        ): LoDashExplicitArrayWrapper<TValue>;

        /**
         * @see _.dropRightWhile
         */
        dropRightWhile<TWhere, TValue>(
            predicate?: TWhere
        ): LoDashExplicitArrayWrapper<TValue>;
    }

    //_.dropWhile
    interface LoDashStatic {
        /**
         * Creates a slice of array excluding elements dropped from the beginning. Elements are dropped until predicate
         * returns falsey. The predicate is bound to thisArg and invoked with three arguments: (value, index, array).
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
         * @param array The array to query.
         * @param predicate The function invoked per iteration.
         * @param thisArg The this binding of predicate.
         * @return Returns the slice of array.
         */
        dropWhile<TValue>(
            array: List<TValue>,
            predicate?: ListIterator<TValue, boolean>,
            thisArg?: any
        ): TValue[];

        /**
         * @see _.dropWhile
         */
        dropWhile<TValue>(
            array: List<TValue>,
            predicate?: string,
            thisArg?: any
        ): TValue[];

        /**
         * @see _.dropWhile
         */
        dropWhile<TWhere, TValue>(
            array: List<TValue>,
            predicate?: TWhere
        ): TValue[];
    }

    interface LoDashImplicitArrayWrapper<T> {
        /**
         * @see _.dropWhile
         */
        dropWhile(
            predicate?: ListIterator<T, boolean>,
            thisArg?: any
        ): LoDashImplicitArrayWrapper<T>;

        /**
         * @see _.dropWhile
         */
        dropWhile(
            predicate?: string,
            thisArg?: any
        ): LoDashImplicitArrayWrapper<T>;

        /**
         * @see _.dropWhile
         */
        dropWhile<TWhere>(
            predicate?: TWhere
        ): LoDashImplicitArrayWrapper<T>;
    }

    interface LoDashImplicitObjectWrapper<T> {
        /**
         * @see _.dropWhile
         */
        dropWhile<TValue>(
            predicate?: ListIterator<TValue, boolean>,
            thisArg?: any
        ): LoDashImplicitArrayWrapper<TValue>;

        /**
         * @see _.dropWhile
         */
        dropWhile<TValue>(
            predicate?: string,
            thisArg?: any
        ): LoDashImplicitArrayWrapper<TValue>;

        /**
         * @see _.dropWhile
         */
        dropWhile<TWhere, TValue>(
            predicate?: TWhere
        ): LoDashImplicitArrayWrapper<TValue>;
    }

    interface LoDashExplicitArrayWrapper<T> {
        /**
         * @see _.dropWhile
         */
        dropWhile(
            predicate?: ListIterator<T, boolean>,
            thisArg?: any
        ): LoDashExplicitArrayWrapper<T>;

        /**
         * @see _.dropWhile
         */
        dropWhile(
            predicate?: string,
            thisArg?: any
        ): LoDashExplicitArrayWrapper<T>;

        /**
         * @see _.dropWhile
         */
        dropWhile<TWhere>(
            predicate?: TWhere
        ): LoDashExplicitArrayWrapper<T>;
    }

    interface LoDashExplicitObjectWrapper<T> {
        /**
         * @see _.dropWhile
         */
        dropWhile<TValue>(
            predicate?: ListIterator<TValue, boolean>,
            thisArg?: any
        ): LoDashExplicitArrayWrapper<TValue>;

        /**
         * @see _.dropWhile
         */
        dropWhile<TValue>(
            predicate?: string,
            thisArg?: any
        ): LoDashExplicitArrayWrapper<TValue>;

        /**
         * @see _.dropWhile
         */
        dropWhile<TWhere, TValue>(
            predicate?: TWhere
        ): LoDashExplicitArrayWrapper<TValue>;
    }

    //_.fill
    interface LoDashStatic {
        /**
         * Fills elements of array with value from start up to, but not including, end.
         *
         * Note: This method mutates array.
         *
         * @param array The array to fill.
         * @param value The value to fill array with.
         * @param start The start position.
         * @param end The end position.
         * @return Returns array.
         */
        fill<T>(
            array: any[],
            value: T,
            start?: number,
            end?: number
        ): T[];

        /**
         * @see _.fill
         */
        fill<T>(
            array: List<any>,
            value: T,
            start?: number,
            end?: number
        ): List<T>;
    }

    interface LoDashImplicitArrayWrapper<T> {
        /**
         * @see _.fill
         */
        fill<T>(
            value: T,
            start?: number,
            end?: number
        ): LoDashImplicitArrayWrapper<T>;
    }

    interface LoDashImplicitObjectWrapper<T> {
        /**
         * @see _.fill
         */
        fill<T>(
            value: T,
            start?: number,
            end?: number
        ): LoDashImplicitObjectWrapper<List<T>>;
    }

    interface LoDashExplicitArrayWrapper<T> {
        /**
         * @see _.fill
         */
        fill<T>(
            value: T,
            start?: number,
            end?: number
        ): LoDashExplicitArrayWrapper<T>;
    }

    interface LoDashExplicitObjectWrapper<T> {
        /**
         * @see _.fill
         */
        fill<T>(
            value: T,
            start?: number,
            end?: number
        ): LoDashExplicitObjectWrapper<List<T>>;
    }

    //_.findIndex
    interface LoDashStatic {
        /**
         * This method is like _.find except that it returns the index of the first element predicate returns truthy
         * for instead of the element itself.
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
         * @param array The array to search.
         * @param predicate The function invoked per iteration.
         * @param thisArg The this binding of predicate.
         * @return Returns the index of the found element, else -1.
         */
        findIndex<T>(
            array: List<T>,
            predicate?: ListIterator<T, boolean>,
            thisArg?: any
        ): number;

        /**
         * @see _.findIndex
         */
        findIndex<T>(
            array: List<T>,
            predicate?: string,
            thisArg?: any
        ): number;

        /**
         * @see _.findIndex
         */
        findIndex<W, T>(
            array: List<T>,
            predicate?: W
        ): number;
    }

    interface LoDashImplicitArrayWrapper<T> {
        /**
         * @see _.findIndex
         */
        findIndex(
            predicate?: ListIterator<T, boolean>,
            thisArg?: any
        ): number;

        /**
         * @see _.findIndex
         */
        findIndex(
            predicate?: string,
            thisArg?: any
        ): number;

        /**
         * @see _.findIndex
         */
        findIndex<W>(
            predicate?: W
        ): number;
    }

    interface LoDashImplicitObjectWrapper<T> {
        /**
         * @see _.findIndex
         */
        findIndex<TResult>(
            predicate?: ListIterator<TResult, boolean>,
            thisArg?: any
        ): number;

        /**
         * @see _.findIndex
         */
        findIndex(
            predicate?: string,
            thisArg?: any
        ): number;

        /**
         * @see _.findIndex
         */
        findIndex<W>(
            predicate?: W
        ): number;
    }

    interface LoDashExplicitArrayWrapper<T> {
        /**
         * @see _.findIndex
         */
        findIndex(
            predicate?: ListIterator<T, boolean>,
            thisArg?: any
        ): LoDashExplicitWrapper<number>;

        /**
         * @see _.findIndex
         */
        findIndex(
            predicate?: string,
            thisArg?: any
        ): LoDashExplicitWrapper<number>;

        /**
         * @see _.findIndex
         */
        findIndex<W>(
            predicate?: W
        ): LoDashExplicitWrapper<number>;
    }

    interface LoDashExplicitObjectWrapper<T> {
        /**
         * @see _.findIndex
         */
        findIndex<TResult>(
            predicate?: ListIterator<TResult, boolean>,
            thisArg?: any
        ): LoDashExplicitWrapper<number>;

        /**
         * @see _.findIndex
         */
        findIndex(
            predicate?: string,
            thisArg?: any
        ): LoDashExplicitWrapper<number>;

        /**
         * @see _.findIndex
         */
        findIndex<W>(
            predicate?: W
        ): LoDashExplicitWrapper<number>;
    }

    //_.findLastIndex
    interface LoDashStatic {
        /**
         * This method is like _.findIndex except that it iterates over elements of collection from right to left.
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
         * @param array The array to search.
         * @param predicate The function invoked per iteration.
         * @param thisArg The function invoked per iteration.
         * @return Returns the index of the found element, else -1.
         */
        findLastIndex<T>(
            array: List<T>,
            predicate?: ListIterator<T, boolean>,
            thisArg?: any
        ): number;

        /**
         * @see _.findLastIndex
         */
        findLastIndex<T>(
            array: List<T>,
            predicate?: string,
            thisArg?: any
        ): number;

        /**
         * @see _.findLastIndex
         */
        findLastIndex<W, T>(
            array: List<T>,
            predicate?: W
        ): number;
    }

    interface LoDashImplicitArrayWrapper<T> {
        /**
         * @see _.findLastIndex
         */
        findLastIndex(
            predicate?: ListIterator<T, boolean>,
            thisArg?: any
        ): number;

        /**
         * @see _.findLastIndex
         */
        findLastIndex(
            predicate?: string,
            thisArg?: any
        ): number;

        /**
         * @see _.findLastIndex
         */
        findLastIndex<W>(
            predicate?: W
        ): number;
    }

    interface LoDashImplicitObjectWrapper<T> {
        /**
         * @see _.findLastIndex
         */
        findLastIndex<TResult>(
            predicate?: ListIterator<TResult, boolean>,
            thisArg?: any
        ): number;

        /**
         * @see _.findLastIndex
         */
        findLastIndex(
            predicate?: string,
            thisArg?: any
        ): number;

        /**
         * @see _.findLastIndex
         */
        findLastIndex<W>(
            predicate?: W
        ): number;
    }

    interface LoDashExplicitArrayWrapper<T> {
        /**
         * @see _.findLastIndex
         */
        findLastIndex(
            predicate?: ListIterator<T, boolean>,
            thisArg?: any
        ): LoDashExplicitWrapper<number>;

        /**
         * @see _.findLastIndex
         */
        findLastIndex(
            predicate?: string,
            thisArg?: any
        ): LoDashExplicitWrapper<number>;

        /**
         * @see _.findLastIndex
         */
        findLastIndex<W>(
            predicate?: W
        ): LoDashExplicitWrapper<number>;
    }

    interface LoDashExplicitObjectWrapper<T> {
        /**
         * @see _.findLastIndex
         */
        findLastIndex<TResult>(
            predicate?: ListIterator<TResult, boolean>,
            thisArg?: any
        ): LoDashExplicitWrapper<number>;

        /**
         * @see _.findLastIndex
         */
        findLastIndex(
            predicate?: string,
            thisArg?: any
        ): LoDashExplicitWrapper<number>;

        /**
         * @see _.findLastIndex
         */
        findLastIndex<W>(
            predicate?: W
        ): LoDashExplicitWrapper<number>;
    }

    //_.first
    interface LoDashStatic {
		/**
         * @see _.head
         */
        first<T>(array: List<T>): T;
    }

    interface LoDashImplicitArrayWrapper<T> {
        /**
         * @see _.head
         */
        first(): T;
    }

    interface LoDashImplicitObjectWrapper<T> {
        /**
         * @see _.head
         */
        first<TResult>(): TResult;
    }

    interface RecursiveArray<T> extends Array<T|RecursiveArray<T>> {}
    interface ListOfRecursiveArraysOrValues<T> extends List<T|RecursiveArray<T>> {}

    //_.flatMap DUMMY
    interface LoDashStatic {
        /**
         * Creates an array of flattened values by running each element in `array`
         * through `iteratee` and concating its result to the other mapped values.
         * The iteratee is invoked with three arguments: (value, index|key, array).
         *
         * @static
         * @memberOf _
         * @category Array
         * @param {Array} array The array to iterate over.
         * @param {Function|Object|string} [iteratee=_.identity] The function invoked per iteration.
         * @returns {Array} Returns the new array.
         * @example
         *
         * function duplicate(n) {
         *   return [n, n];
         * }
         *
         * _.flatMap([1, 2], duplicate);
         * // => [1, 1, 2, 2]
         */
        flatMap(
            array: any[]|List<any>,
            ...values: any[]
        ): any[];
    }

    //_.flatten
    interface LoDashStatic {
        /**
         * Flattens a nested array. If isDeep is true the array is recursively flattened, otherwise it’s only
         * flattened a single level.
         *
         * @param array The array to flatten.
         * @param isDeep Specify a deep flatten.
         * @return Returns the new flattened array.
         */
        flatten<T>(array: ListOfRecursiveArraysOrValues<T>, isDeep: boolean): T[];

        /**
         * @see _.flatten
         */
        flatten<T>(array: List<T|T[]>): T[];

        /**
         * @see _.flatten
         */
        flatten<T>(array: ListOfRecursiveArraysOrValues<T>): RecursiveArray<T>;
    }

    interface LoDashImplicitWrapper<T> {
        /**
         * @see _.flatten
         */
        flatten(): LoDashImplicitArrayWrapper<string>;
    }

    interface LoDashImplicitArrayWrapper<T> {
        /**
         * @see _.flatten
         */
        flatten<TResult>(isDeep?: boolean): LoDashImplicitArrayWrapper<TResult>;
    }

    interface LoDashImplicitObjectWrapper<T> {
        /**
         * @see _.flatten
         */
        flatten<TResult>(isDeep?: boolean): LoDashImplicitArrayWrapper<TResult>;
    }

    interface LoDashExplicitWrapper<T> {
        /**
         * @see _.flatten
         */
        flatten(): LoDashExplicitArrayWrapper<string>;
    }

    interface LoDashExplicitArrayWrapper<T> {
        /**
         * @see _.flatten
         */
        flatten<TResult>(isDeep?: boolean): LoDashExplicitArrayWrapper<TResult>;
    }

    interface LoDashExplicitObjectWrapper<T> {
        /**
         * @see _.flatten
         */
        flatten<TResult>(isDeep?: boolean): LoDashExplicitArrayWrapper<TResult>;
    }

    //_.flattenDeep
    interface LoDashStatic {
        /**
         * Recursively flattens a nested array.
         *
         * @param array The array to recursively flatten.
         * @return Returns the new flattened array.
         */
        flattenDeep<T>(array: ListOfRecursiveArraysOrValues<T>): T[];
    }

    interface LoDashImplicitWrapper<T> {
        /**
         * @see _.flattenDeep
         */
        flattenDeep(): LoDashImplicitArrayWrapper<string>;
    }

    interface LoDashImplicitArrayWrapper<T> {
        /**
         * @see _.flattenDeep
         */
        flattenDeep<T>(): LoDashImplicitArrayWrapper<T>;
    }

    interface LoDashImplicitObjectWrapper<T> {
        /**
         * @see _.flattenDeep
         */
        flattenDeep<T>(): LoDashImplicitArrayWrapper<T>;
    }

    interface LoDashExplicitWrapper<T> {
        /**
         * @see _.flattenDeep
         */
        flattenDeep(): LoDashExplicitArrayWrapper<string>;
    }

    interface LoDashExplicitArrayWrapper<T> {
        /**
         * @see _.flattenDeep
         */
        flattenDeep<T>(): LoDashExplicitArrayWrapper<T>;
    }

    interface LoDashExplicitObjectWrapper<T> {
        /**
         * @see _.flattenDeep
         */
        flattenDeep<T>(): LoDashExplicitArrayWrapper<T>;
    }

    //_.fromPairs DUMMY
    interface LoDashStatic {
        /**
         * The inverse of `_.toPairs`; this method returns an object composed
         * from key-value `pairs`.
         *
         * @static
         * @memberOf _
         * @category Array
         * @param {Array} pairs The key-value pairs.
         * @returns {Object} Returns the new object.
         * @example
         *
         * _.fromPairs([['fred', 30], ['barney', 40]]);
         * // => { 'fred': 30, 'barney': 40 }
         */
        fromPairs(
            array: any[]|List<any>
        ): any[];
    }

    //_.head
    interface LoDashStatic {
        /**
         * Gets the first element of array.
         *
         * @alias _.first
         *
         * @param array The array to query.
         * @return Returns the first element of array.
         */
        head<T>(array: List<T>): T;
    }

    interface LoDashImplicitArrayWrapper<T> {
        /**
         * @see _.first
         */
        head(): T;
    }

    interface LoDashImplicitObjectWrapper<T> {
        /**
         * @see _.first
         */
        head<TResult>(): TResult;
    }

    //_.indexOf
    interface LoDashStatic {
        /**
         * Gets the index at which the first occurrence of `value` is found in `array`
         * using [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
         * for equality comparisons. If `fromIndex` is negative, it's used as the offset
         * from the end of `array`. If `array` is sorted providing `true` for `fromIndex`
         * performs a faster binary search.
         *
         * @static
         * @memberOf _
         * @category Array
         * @param {Array} array The array to search.
         * @param {*} value The value to search for.
         * @param {number} [fromIndex=0] The index to search from.
         * @returns {number} Returns the index of the matched value, else `-1`.
         * @example
         *
         * _.indexOf([1, 2, 1, 2], 2);
         * // => 1
         *
         * // using `fromIndex`
         * _.indexOf([1, 2, 1, 2], 2, 2);
         * // => 3
         */
        indexOf<T>(
            array: List<T>,
            value: T,
            fromIndex?: boolean|number
        ): number;
    }

    interface LoDashImplicitArrayWrapper<T> {
        /**
         * @see _.indexOf
         */
        indexOf(
            value: T,
            fromIndex?: boolean|number
        ): number;
    }

    interface LoDashImplicitObjectWrapper<T> {
        /**
         * @see _.indexOf
         */
        indexOf<TValue>(
            value: TValue,
            fromIndex?: boolean|number
        ): number;
    }

    interface LoDashExplicitArrayWrapper<T> {
        /**
         * @see _.indexOf
         */
        indexOf(
            value: T,
            fromIndex?: boolean|number
        ): LoDashExplicitWrapper<number>;
    }

    interface LoDashExplicitObjectWrapper<T> {
        /**
         * @see _.indexOf
         */
        indexOf<TValue>(
            value: TValue,
            fromIndex?: boolean|number
        ): LoDashExplicitWrapper<number>;
    }

    //_.intersectionBy DUMMY
    interface LoDashStatic {
        /**
         * This method is like `_.intersection` except that it accepts `iteratee`
         * which is invoked for each element of each `arrays` to generate the criterion
         * by which uniqueness is computed. The iteratee is invoked with one argument: (value).
         *
         * @static
         * @memberOf _
         * @category Array
         * @param {...Array} [arrays] The arrays to inspect.
         * @param {Function|Object|string} [iteratee=_.identity] The iteratee invoked per element.
         * @returns {Array} Returns the new array of shared values.
         * @example
         *
         * _.intersectionBy([2.1, 1.2], [4.3, 2.4], Math.floor);
         * // => [2.1]
         *
         * // using the `_.property` iteratee shorthand
         * _.intersectionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
         * // => [{ 'x': 1 }]
         */
        intersectionBy(
            array: any[]|List<any>,
            ...values: any[]
        ): any[];
    }

    //_.intersectionWith DUMMY
    interface LoDashStatic {
        /**
         * This method is like `_.intersection` except that it accepts `comparator`
         * which is invoked to compare elements of `arrays`. The comparator is invoked
         * with two arguments: (arrVal, othVal).
         *
         * @static
         * @memberOf _
         * @category Array
         * @param {...Array} [arrays] The arrays to inspect.
         * @param {Function} [comparator] The comparator invoked per element.
         * @returns {Array} Returns the new array of shared values.
         * @example
         *
         * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
         * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
         *
         * _.intersectionWith(objects, others, _.isEqual);
         * // => [{ 'x': 1, 'y': 2 }]
         */
        intersectionWith(
            array: any[]|List<any>,
            ...values: any[]
        ): any[];
    }

    //_.join
    interface LoDashStatic {
        /**
         * Converts all elements in `array` into a string separated by `separator`.
         *
         * @param array The array to convert.
         * @param separator The element separator.
         * @returns Returns the joined string.
         */
        join(
            array: List<any>,
            separator?: string
        ): string;
    }

    interface LoDashImplicitWrapper<T> {
        /**
         * @see _.join
         */
        join(separator?: string): string;
    }

    interface LoDashImplicitArrayWrapper<T> {
        /**
         * @see _.join
         */
        join(separator?: string): string;
    }

    interface LoDashImplicitObjectWrapper<T> {
        /**
         * @see _.join
         */
        join(separator?: string): string;
    }

    interface LoDashExplicitWrapper<T> {
        /**
         * @see _.join
         */
        join(separator?: string): LoDashExplicitWrapper<string>;
    }

    interface LoDashExplicitArrayWrapper<T> {
        /**
         * @see _.join
         */
        join(separator?: string): LoDashExplicitWrapper<string>;
    }

    interface LoDashExplicitObjectWrapper<T> {
        /**
         * @see _.join
         */
        join(separator?: string): LoDashExplicitWrapper<string>;
    }

    //_.pullAll DUMMY
    interface LoDashStatic {
        /**
         * This method is like `_.pull` except that it accepts an array of values to remove.
         *
         * **Note:** Unlike `_.difference`, this method mutates `array`.
         *
         * @static
         * @memberOf _
         * @category Array
         * @param {Array} array The array to modify.
         * @param {Array} values The values to remove.
         * @returns {Array} Returns `array`.
         * @example
         *
         * var array = [1, 2, 3, 1, 2, 3];
         *
         * _.pull(array, [2, 3]);
         * console.log(array);
         * // => [1, 1]
         */
        pullAll(
            array: any[]|List<any>,
            ...values: any[]
        ): any[];
    }

    //_.pullAllBy DUMMY
    interface LoDashStatic {
        /**
         * This method is like `_.pullAll` except that it accepts `iteratee` which is
         * invoked for each element of `array` and `values` to to generate the criterion
         * by which uniqueness is computed. The iteratee is invoked with one argument: (value).
         *
         * **Note:** Unlike `_.differenceBy`, this method mutates `array`.
         *
         * @static
         * @memberOf _
         * @category Array
         * @param {Array} array The array to modify.
         * @param {Array} values The values to remove.
         * @param {Function|Object|string} [iteratee=_.identity] The iteratee invoked per element.
         * @returns {Array} Returns `array`.
         * @example
         *
         * var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
         *
         * _.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
         * console.log(array);
         * // => [{ 'x': 2 }]
         */
        pullAllBy(
            array: any[]|List<any>,
            ...values: any[]
        ): any[];
    }

    //_.reverse DUMMY
    interface LoDashStatic {
        /**
         * Reverses `array` so that the first element becomes the last, the second
         * element becomes the second to last, and so on.
         *
         * **Note:** This method mutates `array` and is based on
         * [`Array#reverse`](https://mdn.io/Array/reverse).
         *
         * @memberOf _
         * @category Array
         * @returns {Array} Returns `array`.
         * @example
         *
         * var array = [1, 2, 3];
         *
         * _.reverse(array);
         * // => [3, 2, 1]
         *
         * console.log(array);
         * // => [3, 2, 1]
         */
        reverse(
            array: any[]|List<any>,
            ...values: any[]
        ): any[];
    }

    //_.sortedIndexOf
    interface LoDashStatic {
        /**
         * This method is like `_.indexOf` except that it performs a binary
         * search on a sorted `array`.
         *
         * @static
         * @memberOf _
         * @category Array
         * @param {Array} array The array to search.
         * @param {*} value The value to search for.
         * @returns {number} Returns the index of the matched value, else `-1`.
         * @example
         *
         * _.sortedIndexOf([1, 1, 2, 2], 2);
         * // => 2
         */
        sortedIndexOf<T>(
            array: List<T>,
            value: T
        ): number;
    }

    interface LoDashImplicitArrayWrapper<T> {
        /**
         * @see _.sortedIndexOf
         */
        sortedIndexOf(
            value: T
        ): number;
    }

    interface LoDashImplicitObjectWrapper<T> {
        /**
         * @see _.sortedIndexOf
         */
        sortedIndexOf<TValue>(
            value: TValue
        ): number;
    }

    interface LoDashExplicitArrayWrapper<T> {
        /**
         * @see _.sortedIndexOf
         */
        sortedIndexOf(
            value: T
        ): LoDashExplicitWrapper<number>;
    }

    interface LoDashExplicitObjectWrapper<T> {
        /**
         * @see _.sortedIndexOf
         */
        sortedIndexOf<TValue>(
            value: TValue
        ): LoDashExplicitWrapper<number>;
    }

    //_.initial
    interface LoDashStatic {
        /**
         * Gets all but the last element of array.
         *
         * @param array The array to query.
         * @return Returns the slice of array.
         */
        initial<T>(array: List<T>): T[];
    }

    interface LoDashImplicitArrayWrapper<T> {
        /**
         * @see _.initial
         */
        initial(): LoDashImplicitArrayWrapper<T>;
    }

    interface LoDashImplicitObjectWrapper<T> {
        /**
         * @see _.initial
         */
        initial<T>(): LoDashImplicitArrayWrapper<T>;
    }

    interface LoDashExplicitArrayWrapper<T> {
        /**
         * @see _.initial
         */
        initial(): LoDashExplicitArrayWrapper<T>;
    }

    interface LoDashExplicitObjectWrapper<T> {
        /**
         * @see _.initial
         */
        initial<T>(): LoDashExplicitArrayWrapper<T>;
    }

    //_.intersection
    interface LoDashStatic {
        /**
         * Creates an array of unique values that are included in all of the provided arrays using SameValueZero for
         * equality comparisons.
         *
         * @param arrays The arrays to inspect.
         * @return Returns the new array of shared values.
         */
        intersection<T>(...arrays: (T[]|List<T>)[]): T[];
    }

    interface LoDashImplicitArrayWrapper<T> {
        /**
         * @see _.intersection
         */
        intersection<TResult>(...arrays: (TResult[]|List<TResult>)[]): LoDashImplicitArrayWrapper<TResult>;
    }

    interface LoDashImplicitObjectWrapper<T> {
        /**
         * @see _.intersection
         */
        intersection<TResult>(...arrays: (TResult[]|List<TResult>)[]): LoDashImplicitArrayWrapper<TResult>;
    }

    interface LoDashExplicitArrayWrapper<T> {
        /**
         * @see _.intersection
         */
        intersection<TResult>(...arrays: (TResult[]|List<TResult>)[]): LoDashExplicitArrayWrapper<TResult>;
    }

    interface LoDashExplicitObjectWrapper<T> {
        /**
         * @see _.intersection
         */
        intersection<TResult>(...arrays: (TResult[]|List<TResult>)[]): LoDashExplicitArrayWrapper<TResult>;
    }

    //_.last
    interface LoDashStatic {
        /**
         * Gets the last element of array.
         *
         * @param array The array to query.
         * @return Returns the last element of array.
         */
        last<T>(array: List<T>): T;
    }

    interface LoDashImplicitArrayWrapper<T> {
        /**
         * @see _.last
         */
        last(): T;
    }

    interface LoDashImplicitObjectWrapper<T> {
        /**
         * @see _.last
         */
        last<T>(): T;
    }

    interface LoDashExplicitArrayWrapper<T> {
        /**
         * @see _.last
         */
        last(): LoDashExplicitArrayWrapper<T>;
    }

    interface LoDashExplicitObjectWrapper<T> {
        /**
         * @see _.last
         */
        last<T>(): LoDashExplicitObjectWrapper<T>;
    }

    //_.lastIndexOf
    interface LoDashStatic {
        /**
         * This method is like _.indexOf except that it iterates over elements of array from right to left.
         *
         * @param array The array to search.
         * @param value The value to search for.
         * @param fromIndex The index to search from or true to perform a binary search on a sorted array.
         * @return Returns the index of the matched value, else -1.
         */
        lastIndexOf<T>(
            array: List<T>,
            value: T,
            fromIndex?: boolean|number
        ): number;
    }

    interface LoDashImplicitArrayWrapper<T> {
        /**
         * @see _.lastIndexOf
         */
        lastIndexOf(
            value: T,
            fromIndex?: boolean|number
        ): number;
    }

    interface LoDashImplicitObjectWrapper<T> {
        /**
         * @see _.lastIndexOf
         */
        lastIndexOf<TResult>(
            value: TResult,
            fromIndex?: boolean|number
        ): number;
    }

    interface LoDashExplicitArrayWrapper<T> {
        /**
         * @see _.lastIndexOf
         */
        lastIndexOf(
            value: T,
            fromIndex?: boolean|number
        ): LoDashExplicitWrapper<number>;
    }

    interface LoDashExplicitObjectWrapper<T> {
        /**
         * @see _.lastIndexOf
         */
        lastIndexOf<TResult>(
            value: TResult,
            fromIndex?: boolean|number
        ): LoDashExplicitWrapper<number>;
    }

    //_.pull
    interface LoDashStatic {
        /**
         * Removes all provided values from array using SameValueZero for equality comparisons.
         *
         * Note: Unlike _.without, this method mutates array.
         *
         * @param array The array to modify.
         * @param values The values to remove.
         * @return Returns array.
         */
        pull<T>(
            array: T[],
            ...values: T[]
        ): T[];

        /**
         * @see _.pull
         */
        pull<T>(
            array: List<T>,
            ...values: T[]
        ): List<T>;
    }

    interface LoDashImplicitArrayWrapper<T> {
        /**
         * @see _.pull
         */
        pull(...values: T[]): LoDashImplicitArrayWrapper<T>;
    }

    interface LoDashImplicitObjectWrapper<T> {
        /**
         * @see _.pull
         */
        pull<TValue>(...values: TValue[]): LoDashImplicitObjectWrapper<List<TValue>>;
    }

    interface LoDashExplicitArrayWrapper<T> {
        /**
         * @see _.pull
         */
        pull(...values: T[]): LoDashExplicitArrayWrapper<T>;
    }

    interface LoDashExplicitObjectWrapper<T> {
        /**
         * @see _.pull
         */
        pull<TValue>(...values: TValue[]): LoDashExplicitObjectWrapper<List<TValue>>;
    }

    //_.pullAt
    interface LoDashStatic {
        /**
         * Removes elements from array corresponding to the given indexes and returns an array of the removed elements.
         * Indexes may be specified as an array of indexes or as individual arguments.
         *
         * Note: Unlike _.at, this method mutates array.
         *
         * @param array The array to modify.
         * @param indexes The indexes of elements to remove, specified as individual indexes or arrays of indexes.
         * @return Returns the new array of removed elements.
         */
        pullAt<T>(
            array: List<T>,
            ...indexes: (number|number[])[]
        ): T[];
    }

    interface LoDashImplicitArrayWrapper<T> {
        /**
         * @see _.pullAt
         */
        pullAt(...indexes: (number|number[])[]): LoDashImplicitArrayWrapper<T>;
    }

    interface LoDashImplicitObjectWrapper<T> {
        /**
         * @see _.pullAt
         */
        pullAt<T>(...indexes: (number|number[])[]): LoDashImplicitArrayWrapper<T>;
    }

    interface LoDashExplicitArrayWrapper<T> {
        /**
         * @see _.pullAt
         */
        pullAt(...indexes: (number|number[])[]): LoDashExplicitArrayWrapper<T>;
    }

    interface LoDashExplicitObjectWrapper<T> {
        /**
         * @see _.pullAt
         */
        pullAt<T>(...indexes: (number|number[])[]): LoDashExplicitArrayWrapper<T>;
    }

    //_.remove
    interface LoDashStatic {
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
         * @param array The array to modify.
         * @param predicate The function invoked per iteration.
         * @param thisArg The this binding of predicate.
         * @return Returns the new array of removed elements.
         */
        remove<T>(
            array: List<T>,
            predicate?: ListIterator<T, boolean>,
            thisArg?: any
        ): T[];

        /**
         * @see _.remove
         */
        remove<T>(
            array: List<T>,
            predicate?: string,
            thisArg?: any
        ): T[];

        /**
         * @see _.remove
         */
        remove<W, T>(
            array: List<T>,
            predicate?: W
        ): T[];
    }

    interface LoDashImplicitArrayWrapper<T> {
        /**
         * @see _.remove
         */
        remove(
            predicate?: ListIterator<T, boolean>,
            thisArg?: any
        ): LoDashImplicitArrayWrapper<T>;

        /**
         * @see _.remove
         */
        remove(
            predicate?: string,
            thisArg?: any
        ): LoDashImplicitArrayWrapper<T>;

        /**
         * @see _.remove
         */
        remove<W>(
            predicate?: W
        ): LoDashImplicitArrayWrapper<T>;
    }

    interface LoDashImplicitObjectWrapper<T> {
        /**
         * @see _.remove
         */
        remove<TResult>(
            predicate?: ListIterator<TResult, boolean>,
            thisArg?: any
        ): LoDashImplicitArrayWrapper<TResult>;

        /**
         * @see _.remove
         */
        remove<TResult>(
            predicate?: string,
            thisArg?: any
        ): LoDashImplicitArrayWrapper<TResult>;

        /**
         * @see _.remove
         */
        remove<W, TResult>(
            predicate?: W
        ): LoDashImplicitArrayWrapper<TResult>;
    }

    interface LoDashExplicitArrayWrapper<T> {
        /**
         * @see _.remove
         */
        remove(
            predicate?: ListIterator<T, boolean>,
            thisArg?: any
        ): LoDashExplicitArrayWrapper<T>;

        /**
         * @see _.remove
         */
        remove(
            predicate?: string,
            thisArg?: any
        ): LoDashExplicitArrayWrapper<T>;

        /**
         * @see _.remove
         */
        remove<W>(
            predicate?: W
        ): LoDashExplicitArrayWrapper<T>;
    }

    interface LoDashExplicitObjectWrapper<T> {
        /**
         * @see _.remove
         */
        remove<TResult>(
            predicate?: ListIterator<TResult, boolean>,
            thisArg?: any
        ): LoDashExplicitArrayWrapper<TResult>;

        /**
         * @see _.remove
         */
        remove<TResult>(
            predicate?: string,
            thisArg?: any
        ): LoDashExplicitArrayWrapper<TResult>;

        /**
         * @see _.remove
         */
        remove<W, TResult>(
            predicate?: W
        ): LoDashExplicitArrayWrapper<TResult>;
    }

    //_.tail
    interface LoDashStatic {
        /**
         * Gets all but the first element of array.
         *
         * @alias _.tail
         *
         * @param array The array to query.
         * @return Returns the slice of array.
         */
        tail<T>(array: List<T>): T[];
    }

    interface LoDashImplicitArrayWrapper<T> {
        /**
         * @see _.tail
         */
        tail(): LoDashImplicitArrayWrapper<T>;
    }

    interface LoDashImplicitObjectWrapper<T> {
        /**
         * @see _.tail
         */
        tail<T>(): LoDashImplicitArrayWrapper<T>;
    }

    interface LoDashExplicitArrayWrapper<T> {
        /**
         * @see _.tail
         */
        tail(): LoDashExplicitArrayWrapper<T>;
    }

    interface LoDashExplicitObjectWrapper<T> {
        /**
         * @see _.tail
         */
        tail<T>(): LoDashExplicitArrayWrapper<T>;
    }

    //_.slice
    interface LoDashStatic {
        /**
         * Creates a slice of array from start up to, but not including, end.
         *
         * @param array The array to slice.
         * @param start The start position.
         * @param end The end position.
         * @return Returns the slice of array.
         */
        slice<T>(
            array: T[],
            start?: number,
            end?: number
        ): T[];
    }

    interface LoDashImplicitArrayWrapper<T> {
        /**
         * @see _.slice
         */
        slice(
            start?: number,
            end?: number
        ): LoDashImplicitArrayWrapper<T>;
    }

    interface LoDashExplicitArrayWrapper<T> {
        /**
         * @see _.slice
         */
        slice(
            start?: number,
            end?: number
        ): LoDashExplicitArrayWrapper<T>;
    }

    //_.sortedIndex
    interface LoDashStatic {
        /**
         * Uses a binary search to determine the lowest index at which `value` should
         * be inserted into `array` in order to maintain its sort order.
         *
         * @static
         * @memberOf _
         * @category Array
         * @param {Array} array The sorted array to inspect.
         * @param {*} value The value to evaluate.
         * @returns {number} Returns the index at which `value` should be inserted into `array`.
         * @example
         *
         * _.sortedIndex([30, 50], 40);
         * // => 1
         *
         * _.sortedIndex([4, 5], 4);
         * // => 0
         */
        sortedIndex<T, TSort>(
            array: List<T>,
            value: T
        ): number;

        /**
         * @see _.sortedIndex
         */
        sortedIndex<T>(
            array: List<T>,
            value: T
        ): number;

        /**
         * @see _.sortedIndex
         */
        sortedIndex<T>(
            array: List<T>,
            value: T
        ): number;

        /**
         * @see _.sortedIndex
         */
        sortedIndex<W, T>(
            array: List<T>,
            value: T
        ): number;

        /**
         * @see _.sortedIndex
         */
        sortedIndex<T>(
            array: List<T>,
            value: T
        ): number;
    }

    interface LoDashImplicitWrapper<T> {
        /**
         * @see _.sortedIndex
         */
        sortedIndex<TSort>(
            value: string
        ): number;
    }

    interface LoDashImplicitArrayWrapper<T> {
        /**
         * @see _.sortedIndex
         */
        sortedIndex<TSort>(
            value: T
        ): number;

        /**
         * @see _.sortedIndex
         */
        sortedIndex(
            value: T
        ): number;
    }

    interface LoDashImplicitObjectWrapper<T> {
        /**
         * @see _.sortedIndex
         */
        sortedIndex<T, TSort>(
            value: T
        ): number;

        /**
         * @see _.sortedIndex
         */
        sortedIndex<T>(
            value: T
        ): number;

        /**
         * @see _.sortedIndex
         */
        sortedIndex<W, T>(
            value: T
        ): number;
    }

    interface LoDashExplicitWrapper<T> {
        /**
         * @see _.sortedIndex
         */
        sortedIndex<TSort>(
            value: string
        ): LoDashExplicitWrapper<number>;
    }

    interface LoDashExplicitArrayWrapper<T> {
        /**
         * @see _.sortedIndex
         */
        sortedIndex<TSort>(
            value: T
        ): LoDashExplicitWrapper<number>;

        /**
         * @see _.sortedIndex
         */
        sortedIndex(
            value: T
        ): LoDashExplicitWrapper<number>;

        /**
         * @see _.sortedIndex
         */
        sortedIndex<W>(
            value: T
        ): LoDashExplicitWrapper<number>;
    }

    interface LoDashExplicitObjectWrapper<T> {
        /**
         * @see _.sortedIndex
         */
        sortedIndex<T, TSort>(
            value: T
        ): LoDashExplicitWrapper<number>;

        /**
         * @see _.sortedIndex
         */
        sortedIndex<T>(
            value: T
        ): LoDashExplicitWrapper<number>;

        /**
         * @see _.sortedIndex
         */
        sortedIndex<W, T>(
            value: T
        ): LoDashExplicitWrapper<number>;


    }

    //_.sortedIndexBy
    interface LoDashStatic {
        /**
         * This method is like `_.sortedIndex` except that it accepts `iteratee`
         * which is invoked for `value` and each element of `array` to compute their
         * sort ranking. The iteratee is invoked with one argument: (value).
         *
         * @static
         * @memberOf _
         * @category Array
         * @param {Array} array The sorted array to inspect.
         * @param {*} value The value to evaluate.
         * @param {Function|Object|string} [iteratee=_.identity] The iteratee invoked per element.
         * @returns {number} Returns the index at which `value` should be inserted into `array`.
         * @example
         *
         * var dict = { 'thirty': 30, 'forty': 40, 'fifty': 50 };
         *
         * _.sortedIndexBy(['thirty', 'fifty'], 'forty', _.propertyOf(dict));
         * // => 1
         *
         * // using the `_.property` iteratee shorthand
         * _.sortedIndexBy([{ 'x': 4 }, { 'x': 5 }], { 'x': 4 }, 'x');
         * // => 0
         */
        sortedIndexBy<T, TSort>(
            array: List<T>,
            value: T,
            iteratee: (x: T) => TSort
        ): number;

        /**
         * @see _.sortedIndexBy
         */
        sortedIndexBy<T>(
            array: List<T>,
            value: T,
            iteratee: (x: T) => any
        ): number;

        /**
         * @see _.sortedIndexBy
         */
        sortedIndexBy<T>(
            array: List<T>,
            value: T,
            iteratee: string
        ): number;

        /**
         * @see _.sortedIndexBy
         */
        sortedIndexBy<W, T>(
            array: List<T>,
            value: T,
            iteratee: W
        ): number;

        /**
         * @see _.sortedIndexBy
         */
        sortedIndexBy<T>(
            array: List<T>,
            value: T,
            iteratee: Object
        ): number;
    }

    interface LoDashImplicitWrapper<T> {
        /**
         * @see _.sortedIndexBy
         */
        sortedIndexBy<TSort>(
            value: string,
            iteratee: (x: string) => TSort
        ): number;
    }

    interface LoDashImplicitArrayWrapper<T> {
        /**
         * @see _.sortedIndexBy
         */
        sortedIndexBy<TSort>(
            value: T,
            iteratee: (x: T) => TSort
        ): number;

        /**
         * @see _.sortedIndexBy
         */
        sortedIndexBy(
            value: T,
            iteratee: string
        ): number;

        /**
         * @see _.sortedIndexBy
         */
        sortedIndexBy<W>(
            value: T,
            iteratee: W
        ): number;
    }

    interface LoDashImplicitObjectWrapper<T> {
        /**
         * @see _.sortedIndexBy
         */
        sortedIndexBy<T, TSort>(
            value: T,
            iteratee: (x: T) => TSort
        ): number;

        /**
         * @see _.sortedIndexBy
         */
        sortedIndexBy<T>(
            value: T,
            iteratee: (x: T) => any
        ): number;

        /**
         * @see _.sortedIndexBy
         */
        sortedIndexBy<T>(
            value: T,
            iteratee: string
        ): number;

        /**
         * @see _.sortedIndexBy
         */
        sortedIndexBy<W, T>(
            value: T,
            iteratee: W
        ): number;

        /**
         * @see _.sortedIndexBy
         */
        sortedIndexBy<T>(
            value: T,
            iteratee: Object
        ): number;
    }

    interface LoDashExplicitWrapper<T> {
        /**
         * @see _.sortedIndexBy
         */
        sortedIndexBy<TSort>(
            value: string,
            iteratee: (x: string) => TSort
        ): LoDashExplicitWrapper<number>;
    }

    interface LoDashExplicitArrayWrapper<T> {
        /**
         * @see _.sortedIndexBy
         */
        sortedIndexBy<TSort>(
            value: T,
            iteratee: (x: T) => TSort
        ): LoDashExplicitWrapper<number>;

        /**
         * @see _.sortedIndexBy
         */
        sortedIndexBy(
            value: T,
            iteratee: string
        ): LoDashExplicitWrapper<number>;

        /**
         * @see _.sortedIndexBy
         */
        sortedIndexBy<W>(
            value: T,
            iteratee: W
        ): LoDashExplicitWrapper<number>;
    }

    interface LoDashExplicitObjectWrapper<T> {
        /**
         * @see _.sortedIndexBy
         */
        sortedIndexBy<T, TSort>(
            value: T,
            iteratee: (x: T) => TSort
        ): LoDashExplicitWrapper<number>;

        /**
         * @see _.sortedIndexBy
         */
        sortedIndexBy<T>(
            value: T,
            iteratee: (x: T) => any
        ): LoDashExplicitWrapper<number>;

        /**
         * @see _.sortedIndexBy
         */
        sortedIndexBy<T>(
            value: T,
            iteratee: string
        ): LoDashExplicitWrapper<number>;

        /**
         * @see _.sortedIndexBy
         */
        sortedIndexBy<W, T>(
            value: T,
            iteratee: W
        ): LoDashExplicitWrapper<number>;

        /**
         * @see _.sortedIndexBy
         */
        sortedIndexBy<T>(
            value: T,
            iteratee: Object
        ): LoDashExplicitWrapper<number>;
    }

    //_.sortedLastIndex
    interface LoDashStatic {
        /**
         * This method is like `_.sortedIndex` except that it returns the highest
         * index at which `value` should be inserted into `array` in order to
         * maintain its sort order.
         *
         * @static
         * @memberOf _
         * @category Array
         * @param {Array} array The sorted array to inspect.
         * @param {*} value The value to evaluate.
         * @returns {number} Returns the index at which `value` should be inserted into `array`.
         * @example
         *
         * _.sortedLastIndex([4, 5], 4);
         * // => 1
         */
        sortedLastIndex<T, TSort>(
            array: List<T>,
            value: T
        ): number;

        /**
         * @see _.sortedLastIndex
         */
        sortedLastIndex<T>(
            array: List<T>,
            value: T
        ): number;

        /**
         * @see _.sortedLastIndex
         */
        sortedLastIndex<T>(
            array: List<T>,
            value: T
        ): number;

        /**
         * @see _.sortedLastIndex
         */
        sortedLastIndex<W, T>(
            array: List<T>,
            value: T
        ): number;

        /**
         * @see _.sortedLastIndex
         */
        sortedLastIndex<T>(
            array: List<T>,
            value: T
        ): number;
    }

    interface LoDashImplicitWrapper<T> {
        /**
         * @see _.sortedLastIndex
         */
        sortedLastIndex<TSort>(
            value: string
        ): number;
    }

    interface LoDashImplicitArrayWrapper<T> {
        /**
         * @see _.sortedLastIndex
         */
        sortedLastIndex<TSort>(
            value: T
        ): number;

        /**
         * @see _.sortedLastIndex
         */
        sortedLastIndex(
            value: T
        ): number;

        /**
         * @see _.sortedLastIndex
         */
        sortedLastIndex<W>(
            value: T
        ): number;
    }

    interface LoDashImplicitObjectWrapper<T> {
        /**
         * @see _.sortedLastIndex
         */
        sortedLastIndex<T, TSort>(
            value: T
        ): number;

        /**
         * @see _.sortedLastIndex
         */
        sortedLastIndex<T>(
            value: T
        ): number;

        /**
         * @see _.sortedLastIndex
         */
        sortedLastIndex<W, T>(
            value: T
        ): number;
    }

    interface LoDashExplicitWrapper<T> {
        /**
         * @see _.sortedLastIndex
         */
        sortedLastIndex<TSort>(
            value: string
        ): LoDashExplicitWrapper<number>;
    }

    interface LoDashExplicitArrayWrapper<T> {
        /**
         * @see _.sortedLastIndex
         */
        sortedLastIndex<TSort>(
            value: T
        ): LoDashExplicitWrapper<number>;

        /**
         * @see _.sortedLastIndex
         */
        sortedLastIndex(
            value: T
        ): LoDashExplicitWrapper<number>;
    }

    interface LoDashExplicitObjectWrapper<T> {
        /**
         * @see _.sortedLastIndex
         */
        sortedLastIndex<T, TSort>(
            value: T
        ): LoDashExplicitWrapper<number>;

        /**
         * @see _.sortedLastIndex
         */
        sortedLastIndex<T>(
            value: T
        ): LoDashExplicitWrapper<number>;

        /**
         * @see _.sortedLastIndex
         */
        sortedLastIndex<W, T>(
            value: T
        ): LoDashExplicitWrapper<number>;
    }

    //_.sortedLastIndexBy
    interface LoDashStatic {
        /**
         * This method is like `_.sortedLastIndex` except that it accepts `iteratee`
         * which is invoked for `value` and each element of `array` to compute their
         * sort ranking. The iteratee is invoked with one argument: (value).
         *
         * @static
         * @memberOf _
         * @category Array
         * @param {Array} array The sorted array to inspect.
         * @param {*} value The value to evaluate.
         * @param {Function|Object|string} [iteratee=_.identity] The iteratee invoked per element.
         * @returns {number} Returns the index at which `value` should be inserted into `array`.
         * @example
         *
         * // using the `_.property` iteratee shorthand
         * _.sortedLastIndexBy([{ 'x': 4 }, { 'x': 5 }], { 'x': 4 }, 'x');
         * // => 1
         */
        sortedLastIndexBy<T, TSort>(
            array: List<T>,
            value: T,
            iteratee: (x: T) => TSort
        ): number;

        /**
         * @see _.sortedLastIndexBy
         */
        sortedLastIndexBy<T>(
            array: List<T>,
            value: T,
            iteratee: (x: T) => any
        ): number;

        /**
         * @see _.sortedLastIndexBy
         */
        sortedLastIndexBy<T>(
            array: List<T>,
            value: T,
            iteratee: string
        ): number;

        /**
         * @see _.sortedLastIndexBy
         */
        sortedLastIndexBy<W, T>(
            array: List<T>,
            value: T,
            iteratee: W
        ): number;

        /**
         * @see _.sortedLastIndexBy
         */
        sortedLastIndexBy<T>(
            array: List<T>,
            value: T,
            iteratee: Object
        ): number;
    }

    interface LoDashImplicitWrapper<T> {
        /**
         * @see _.sortedLastIndexBy
         */
        sortedLastIndexBy<TSort>(
            value: string,
            iteratee: (x: string) => TSort
        ): number;
    }

    interface LoDashImplicitArrayWrapper<T> {
        /**
         * @see _.sortedLastIndexBy
         */
        sortedLastIndexBy<TSort>(
            value: T,
            iteratee: (x: T) => TSort
        ): number;

        /**
         * @see _.sortedLastIndexBy
         */
        sortedLastIndexBy(
            value: T,
            iteratee: string
        ): number;

        /**
         * @see _.sortedLastIndexBy
         */
        sortedLastIndexBy<W>(
            value: T,
            iteratee: W
        ): number;
    }

    interface LoDashImplicitObjectWrapper<T> {
        /**
         * @see _.sortedLastIndexBy
         */
        sortedLastIndexBy<T, TSort>(
            value: T,
            iteratee: (x: T) => TSort
        ): number;

        /**
         * @see _.sortedLastIndexBy
         */
        sortedLastIndexBy<T>(
            value: T,
            iteratee: (x: T) => any
        ): number;

        /**
         * @see _.sortedLastIndexBy
         */
        sortedLastIndexBy<T>(
            value: T,
            iteratee: string
        ): number;

        /**
         * @see _.sortedLastIndexBy
         */
        sortedLastIndexBy<W, T>(
            value: T,
            iteratee: W
        ): number;

        /**
         * @see _.sortedLastIndexBy
         */
        sortedLastIndexBy<T>(
            value: T,
            iteratee: Object
        ): number;
    }

    interface LoDashExplicitWrapper<T> {
        /**
         * @see _.sortedLastIndexBy
         */
        sortedLastIndexBy<TSort>(
            value: string,
            iteratee: (x: string) => TSort
        ): LoDashExplicitWrapper<number>;
    }

    interface LoDashExplicitArrayWrapper<T> {
        /**
         * @see _.sortedLastIndexBy
         */
        sortedLastIndexBy<TSort>(
            value: T,
            iteratee: (x: T) => TSort
        ): LoDashExplicitWrapper<number>;

        /**
         * @see _.sortedLastIndexBy
         */
        sortedLastIndexBy(
            value: T,
            iteratee: string
        ): LoDashExplicitWrapper<number>;

        /**
         * @see _.sortedLastIndexBy
         */
        sortedLastIndexBy<W>(
            value: T,
            iteratee: W
        ): LoDashExplicitWrapper<number>;
    }

    interface LoDashExplicitObjectWrapper<T> {
        /**
         * @see _.sortedLastIndexBy
         */
        sortedLastIndexBy<T, TSort>(
            value: T,
            iteratee: (x: T) => TSort
        ): LoDashExplicitWrapper<number>;

        /**
         * @see _.sortedLastIndexBy
         */
        sortedLastIndexBy<T>(
            value: T,
            iteratee: (x: T) => any
        ): LoDashExplicitWrapper<number>;

        /**
         * @see _.sortedLastIndexBy
         */
        sortedLastIndexBy<T>(
            value: T,
            iteratee: string
        ): LoDashExplicitWrapper<number>;

        /**
         * @see _.sortedLastIndexBy
         */
        sortedLastIndexBy<W, T>(
            value: T,
            iteratee: W
        ): LoDashExplicitWrapper<number>;

        /**
         * @see _.sortedLastIndexBy
         */
        sortedLastIndexBy<T>(
            value: T,
            iteratee: Object
        ): LoDashExplicitWrapper<number>;
    }

    //_.sortedLastIndexOf DUMMY
    interface LoDashStatic {
        /**
         * This method is like `_.lastIndexOf` except that it performs a binary
         * search on a sorted `array`.
         *
         * @static
         * @memberOf _
         * @category Array
         * @param {Array} array The array to search.
         * @param {*} value The value to search for.
         * @returns {number} Returns the index of the matched value, else `-1`.
         * @example
         *
         * _.sortedLastIndexOf([1, 1, 2, 2], 2);
         * // => 3
         */
        sortedLastIndexOf(
            array: any[]|List<any>,
            ...values: any[]
        ): any[];
    }

    //_.tail
    interface LoDashStatic {
        /**
         * @see _.rest
         */
        tail<T>(array: List<T>): T[];
    }

    interface LoDashImplicitArrayWrapper<T> {
        /**
         * @see _.rest
         */
        tail(): LoDashImplicitArrayWrapper<T>;
    }

    interface LoDashImplicitObjectWrapper<T> {
        /**
         * @see _.rest
         */
        tail<T>(): LoDashImplicitArrayWrapper<T>;
    }

    interface LoDashExplicitArrayWrapper<T> {
        /**
         * @see _.rest
         */
        tail(): LoDashExplicitArrayWrapper<T>;
    }

    interface LoDashExplicitObjectWrapper<T> {
        /**
         * @see _.rest
         */
        tail<T>(): LoDashExplicitArrayWrapper<T>;
    }

    //_.take
    interface LoDashStatic {
        /**
         * Creates a slice of array with n elements taken from the beginning.
         *
         * @param array The array to query.
         * @param n The number of elements to take.
         * @return Returns the slice of array.
         */
        take<T>(
            array: List<T>,
            n?: number
        ): T[];
    }

    interface LoDashImplicitArrayWrapper<T> {
        /**
         * @see _.take
         */
        take(n?: number): LoDashImplicitArrayWrapper<T>;
    }

    interface LoDashImplicitObjectWrapper<T> {
        /**
         * @see _.take
         */
        take<TResult>(n?: number): LoDashImplicitArrayWrapper<TResult>;
    }

    interface LoDashExplicitArrayWrapper<T> {
        /**
         * @see _.take
         */
        take(n?: number): LoDashExplicitArrayWrapper<T>;
    }

    interface LoDashExplicitObjectWrapper<T> {
        /**
         * @see _.take
         */
        take<TResult>(n?: number): LoDashExplicitArrayWrapper<TResult>;
    }

    //_.takeRight
    interface LoDashStatic {
        /**
         * Creates a slice of array with n elements taken from the end.
         *
         * @param array The array to query.
         * @param n The number of elements to take.
         * @return Returns the slice of array.
         */
        takeRight<T>(
            array: List<T>,
            n?: number
        ): T[];
    }

    interface LoDashImplicitArrayWrapper<T> {
        /**
         * @see _.takeRight
         */
        takeRight(n?: number): LoDashImplicitArrayWrapper<T>;
    }

    interface LoDashImplicitObjectWrapper<T> {
        /**
         * @see _.takeRight
         */
        takeRight<TResult>(n?: number): LoDashImplicitArrayWrapper<TResult>;
    }

    interface LoDashExplicitArrayWrapper<T> {
        /**
         * @see _.takeRight
         */
        takeRight(n?: number): LoDashExplicitArrayWrapper<T>;
    }

    interface LoDashExplicitObjectWrapper<T> {
        /**
         * @see _.takeRight
         */
        takeRight<TResult>(n?: number): LoDashExplicitArrayWrapper<TResult>;
    }

    //_.takeRightWhile
    interface LoDashStatic {
        /**
         * Creates a slice of array with elements taken from the end. Elements are taken until predicate returns
         * falsey. The predicate is bound to thisArg and invoked with three arguments: (value, index, array).
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
         * @param array The array to query.
         * @param predicate The function invoked per iteration.
         * @param thisArg The this binding of predicate.
         * @return Returns the slice of array.
         */
        takeRightWhile<TValue>(
            array: List<TValue>,
            predicate?: ListIterator<TValue, boolean>,
            thisArg?: any
        ): TValue[];

        /**
         * @see _.takeRightWhile
         */
        takeRightWhile<TValue>(
            array: List<TValue>,
            predicate?: string,
            thisArg?: any
        ): TValue[];

        /**
         * @see _.takeRightWhile
         */
        takeRightWhile<TWhere, TValue>(
            array: List<TValue>,
            predicate?: TWhere
        ): TValue[];
    }

    interface LoDashImplicitArrayWrapper<T> {
        /**
         * @see _.takeRightWhile
         */
        takeRightWhile(
            predicate?: ListIterator<T, boolean>,
            thisArg?: any
        ): LoDashImplicitArrayWrapper<T>;

        /**
         * @see _.takeRightWhile
         */
        takeRightWhile(
            predicate?: string,
            thisArg?: any
        ): LoDashImplicitArrayWrapper<T>;

        /**
         * @see _.takeRightWhile
         */
        takeRightWhile<TWhere>(
            predicate?: TWhere
        ): LoDashImplicitArrayWrapper<T>;
    }

    interface LoDashImplicitObjectWrapper<T> {
        /**
         * @see _.takeRightWhile
         */
        takeRightWhile<TValue>(
            predicate?: ListIterator<TValue, boolean>,
            thisArg?: any
        ): LoDashImplicitArrayWrapper<TValue>;

        /**
         * @see _.takeRightWhile
         */
        takeRightWhile<TValue>(
            predicate?: string,
            thisArg?: any
        ): LoDashImplicitArrayWrapper<TValue>;

        /**
         * @see _.takeRightWhile
         */
        takeRightWhile<TWhere, TValue>(
            predicate?: TWhere
        ): LoDashImplicitArrayWrapper<TValue>;
    }

    interface LoDashExplicitArrayWrapper<T> {
        /**
         * @see _.takeRightWhile
         */
        takeRightWhile(
            predicate?: ListIterator<T, boolean>,
            thisArg?: any
        ): LoDashExplicitArrayWrapper<T>;

        /**
         * @see _.takeRightWhile
         */
        takeRightWhile(
            predicate?: string,
            thisArg?: any
        ): LoDashExplicitArrayWrapper<T>;

        /**
         * @see _.takeRightWhile
         */
        takeRightWhile<TWhere>(
            predicate?: TWhere
        ): LoDashExplicitArrayWrapper<T>;
    }

    interface LoDashExplicitObjectWrapper<T> {
        /**
         * @see _.takeRightWhile
         */
        takeRightWhile<TValue>(
            predicate?: ListIterator<TValue, boolean>,
            thisArg?: any
        ): LoDashExplicitArrayWrapper<TValue>;

        /**
         * @see _.takeRightWhile
         */
        takeRightWhile<TValue>(
            predicate?: string,
            thisArg?: any
        ): LoDashExplicitArrayWrapper<TValue>;

        /**
         * @see _.takeRightWhile
         */
        takeRightWhile<TWhere, TValue>(
            predicate?: TWhere
        ): LoDashExplicitArrayWrapper<TValue>;
    }

    //_.takeWhile
    interface LoDashStatic {
        /**
         * Creates a slice of array with elements taken from the beginning. Elements are taken until predicate returns
         * falsey. The predicate is bound to thisArg and invoked with three arguments: (value, index, array).
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
         * @param array The array to query.
         * @param predicate The function invoked per iteration.
         * @param thisArg The this binding of predicate.
         * @return Returns the slice of array.
         */
        takeWhile<TValue>(
            array: List<TValue>,
            predicate?: ListIterator<TValue, boolean>,
            thisArg?: any
        ): TValue[];

        /**
         * @see _.takeWhile
         */
        takeWhile<TValue>(
            array: List<TValue>,
            predicate?: string,
            thisArg?: any
        ): TValue[];

        /**
         * @see _.takeWhile
         */
        takeWhile<TWhere, TValue>(
            array: List<TValue>,
            predicate?: TWhere
        ): TValue[];
    }

    interface LoDashImplicitArrayWrapper<T> {
        /**
         * @see _.takeWhile
         */
        takeWhile(
            predicate?: ListIterator<T, boolean>,
            thisArg?: any
        ): LoDashImplicitArrayWrapper<T>;

        /**
         * @see _.takeWhile
         */
        takeWhile(
            predicate?: string,
            thisArg?: any
        ): LoDashImplicitArrayWrapper<T>;

        /**
         * @see _.takeWhile
         */
        takeWhile<TWhere>(
            predicate?: TWhere
        ): LoDashImplicitArrayWrapper<T>;
    }

    interface LoDashImplicitObjectWrapper<T> {
        /**
         * @see _.takeWhile
         */
        takeWhile<TValue>(
            predicate?: ListIterator<TValue, boolean>,
            thisArg?: any
        ): LoDashImplicitArrayWrapper<TValue>;

        /**
         * @see _.takeWhile
         */
        takeWhile<TValue>(
            predicate?: string,
            thisArg?: any
        ): LoDashImplicitArrayWrapper<TValue>;

        /**
         * @see _.takeWhile
         */
        takeWhile<TWhere, TValue>(
            predicate?: TWhere
        ): LoDashImplicitArrayWrapper<TValue>;
    }

    interface LoDashExplicitArrayWrapper<T> {
        /**
         * @see _.takeWhile
         */
        takeWhile(
            predicate?: ListIterator<T, boolean>,
            thisArg?: any
        ): LoDashExplicitArrayWrapper<T>;

        /**
         * @see _.takeWhile
         */
        takeWhile(
            predicate?: string,
            thisArg?: any
        ): LoDashExplicitArrayWrapper<T>;

        /**
         * @see _.takeWhile
         */
        takeWhile<TWhere>(
            predicate?: TWhere
        ): LoDashExplicitArrayWrapper<T>;
    }

    interface LoDashExplicitObjectWrapper<T> {
        /**
         * @see _.takeWhile
         */
        takeWhile<TValue>(
            predicate?: ListIterator<TValue, boolean>,
            thisArg?: any
        ): LoDashExplicitArrayWrapper<TValue>;

        /**
         * @see _.takeWhile
         */
        takeWhile<TValue>(
            predicate?: string,
            thisArg?: any
        ): LoDashExplicitArrayWrapper<TValue>;

        /**
         * @see _.takeWhile
         */
        takeWhile<TWhere, TValue>(
            predicate?: TWhere
        ): LoDashExplicitArrayWrapper<TValue>;
    }

    //_.union
    interface LoDashStatic {
        /**
         * Creates an array of unique values, in order, from all of the provided arrays using SameValueZero for
         * equality comparisons.
         *
         * @param arrays The arrays to inspect.
         * @return Returns the new array of combined values.
         */
        union<T>(...arrays: List<T>[]): T[];
    }

    interface LoDashImplicitArrayWrapper<T> {
        /**
         * @see _.union
         */
        union(...arrays: List<T>[]): LoDashImplicitArrayWrapper<T>;

        /**
         * @see _.union
         */
        union<T>(...arrays: List<T>[]): LoDashImplicitArrayWrapper<T>;
    }

    interface LoDashImplicitObjectWrapper<T> {
        /**
         * @see _.union
         */
        union<T>(...arrays: List<T>[]): LoDashImplicitArrayWrapper<T>;
    }

    interface LoDashExplicitArrayWrapper<T> {
        /**
         * @see _.union
         */
        union(...arrays: List<T>[]): LoDashExplicitArrayWrapper<T>;

        /**
         * @see _.union
         */
        union<T>(...arrays: List<T>[]): LoDashExplicitArrayWrapper<T>;
    }

    interface LoDashExplicitObjectWrapper<T> {
        /**
         * @see _.union
         */
        union<T>(...arrays: List<T>[]): LoDashExplicitArrayWrapper<T>;
    }

    //_.uniq
    interface LoDashStatic {
        /**
         * Creates a duplicate-free version of an array, using
         * [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
         * for equality comparisons, in which only the first occurrence of each element
         * is kept.
         *
         * @static
         * @memberOf _
         * @category Array
         * @param {Array} array The array to inspect.
         * @returns {Array} Returns the new duplicate free array.
         * @example
         *
         * _.uniq([2, 1, 2]);
         * // => [2, 1]
         */
        uniq<T>(
            array: List<T>
        ): T[];

        /**
         * @see _.uniq
         */
        uniq<T, TSort>(
            array: List<T>
        ): T[];
    }

    interface LoDashImplicitWrapper<T> {
        /**
         * @see _.uniq
         */
        uniq<TSort>(): LoDashImplicitArrayWrapper<T>;
    }

    interface LoDashImplicitArrayWrapper<T> {
        /**
         * @see _.uniq
         */
        uniq<TSort>(): LoDashImplicitArrayWrapper<T>;

        /**
         * @see _.uniq
         */
        uniq(): LoDashImplicitArrayWrapper<T>;
    }

    interface LoDashImplicitObjectWrapper<T> {
        uniq<T>(): LoDashImplicitArrayWrapper<T>;

        /**
         * @see _.uniq
         */
        uniq<T, TSort>(): LoDashImplicitArrayWrapper<T>;
    }

    interface LoDashExplicitWrapper<T> {
        /**
         * @see _.uniq
         */
        uniq<TSort>(): LoDashExplicitArrayWrapper<T>;
    }

    interface LoDashExplicitArrayWrapper<T> {
        /**
         * @see _.uniq
         */
        uniq<TSort>(): LoDashExplicitArrayWrapper<T>;

        /**
         * @see _.uniq
         */
        uniq(): LoDashExplicitArrayWrapper<T>;
    }

    interface LoDashExplicitObjectWrapper<T> {
        /**
         * @see _.uniq
         */
        uniq<T>(): LoDashExplicitArrayWrapper<T>;

        /**
         * @see _.uniq
         */
        uniq<T, TSort>(): LoDashExplicitArrayWrapper<T>;
    }

    //_.uniqBy
    interface LoDashStatic {
        /**
         * This method is like `_.uniq` except that it accepts `iteratee` which is
         * invoked for each element in `array` to generate the criterion by which
         * uniqueness is computed. The iteratee is invoked with one argument: (value).
         *
         * @static
         * @memberOf _
         * @category Array
         * @param {Array} array The array to inspect.
         * @param {Function|Object|string} [iteratee=_.identity] The iteratee invoked per element.
         * @returns {Array} Returns the new duplicate free array.
         * @example
         *
         * _.uniqBy([2.1, 1.2, 2.3], Math.floor);
         * // => [2.1, 1.2]
         *
         * // using the `_.property` iteratee shorthand
         * _.uniqBy([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');
         * // => [{ 'x': 1 }, { 'x': 2 }]
         */
        uniqBy<T>(
            array: List<T>,
            iteratee: ListIterator<T, any>
        ): T[];

        /**
         * @see _.uniqBy
         */
        uniqBy<T, TSort>(
            array: List<T>,
            iteratee: ListIterator<T, TSort>
        ): T[];

        /**
         * @see _.uniqBy
         */
        uniqBy<T>(
            array: List<T>,
            iteratee: string
        ): T[];

        /**
         * @see _.uniqBy
         */
        uniqBy<T>(
            array: List<T>,
            iteratee: Object
        ): T[];

        /**
         * @see _.uniqBy
         */
        uniqBy<TWhere extends {}, T>(
            array: List<T>,
            iteratee: TWhere
        ): T[];
    }

    interface LoDashImplicitWrapper<T> {
        /**
         * @see _.uniqBy
         */
        uniqBy<TSort>(
            iteratee: ListIterator<T, TSort>
        ): LoDashImplicitArrayWrapper<T>;
    }

    interface LoDashImplicitArrayWrapper<T> {
        /**
         * @see _.uniqBy
         */
        uniqBy<TSort>(
            iteratee: ListIterator<T, TSort>
        ): LoDashImplicitArrayWrapper<T>;

        /**
         * @see _.uniqBy
         */
        uniqBy(
            iteratee: string
        ): LoDashImplicitArrayWrapper<T>;

        /**
         * @see _.uniqBy
         */
        uniqBy<TWhere extends {}>(
            iteratee: TWhere
        ): LoDashImplicitArrayWrapper<T>;
    }

    interface LoDashImplicitObjectWrapper<T> {
        /**
         * @see _.uniqBy
         */
        uniqBy<T>(
            iteratee: ListIterator<T, any>
        ): LoDashImplicitArrayWrapper<T>;

        /**
         * @see _.uniqBy
         */
        uniqBy<T, TSort>(
            iteratee: ListIterator<T, TSort>
        ): LoDashImplicitArrayWrapper<T>;

        /**
         * @see _.uniqBy
         */
        uniqBy<T>(
            iteratee: string
        ): LoDashImplicitArrayWrapper<T>;

        /**
         * @see _.uniqBy
         */
        uniqBy<T>(
            iteratee: Object
        ): LoDashImplicitArrayWrapper<T>;

        /**
         * @see _.uniqBy
         */
        uniqBy<TWhere extends {}, T>(
            iteratee: TWhere
        ): LoDashImplicitArrayWrapper<T>;
    }

    interface LoDashExplicitWrapper<T> {
        /**
         * @see _.uniqBy
         */
        uniqBy<TSort>(
            iteratee: ListIterator<T, TSort>
        ): LoDashExplicitArrayWrapper<T>;
    }

    interface LoDashExplicitArrayWrapper<T> {
        /**
         * @see _.uniqBy
         */
        uniqBy<TSort>(
            iteratee: ListIterator<T, TSort>
        ): LoDashExplicitArrayWrapper<T>;

        /**
         * @see _.uniqBy
         */
        uniqBy(
            iteratee: string
        ): LoDashExplicitArrayWrapper<T>;

        /**
         * @see _.uniqBy
         */
        uniqBy<TWhere extends {}>(
            iteratee: TWhere
        ): LoDashExplicitArrayWrapper<T>;
    }

    interface LoDashExplicitObjectWrapper<T> {
        /**
         * @see _.uniqBy
         */
        uniqBy<T>(
            iteratee: ListIterator<T, any>
        ): LoDashExplicitArrayWrapper<T>;

        /**
         * @see _.uniqBy
         */
        uniqBy<T, TSort>(
            iteratee: ListIterator<T, TSort>
        ): LoDashExplicitArrayWrapper<T>;

        /**
         * @see _.uniqBy
         */
        uniqBy<T>(
            iteratee: string
        ): LoDashExplicitArrayWrapper<T>;

        /**
         * @see _.uniqBy
         */
        uniqBy<T>(
            iteratee: Object
        ): LoDashExplicitArrayWrapper<T>;

        /**
         * @see _.uniqBy
         */
        uniqBy<TWhere extends {}, T>(
            iteratee: TWhere
        ): LoDashExplicitArrayWrapper<T>;
    }

    //_.sortedUniq
    interface LoDashStatic {
        /**
         * This method is like `_.uniq` except that it's designed and optimized
         * for sorted arrays.
         *
         * @static
         * @memberOf _
         * @category Array
         * @param {Array} array The array to inspect.
         * @returns {Array} Returns the new duplicate free array.
         * @example
         *
         * _.sortedUniq([1, 1, 2]);
         * // => [1, 2]
         */
        sortedUniq<T>(
            array: List<T>
        ): T[];

        /**
         * @see _.sortedUniq
         */
        sortedUniq<T, TSort>(
            array: List<T>
        ): T[];
    }

    interface LoDashImplicitWrapper<T> {
        /**
         * @see _.sortedUniq
         */
        sortedUniq<TSort>(): LoDashImplicitArrayWrapper<T>;
    }

    interface LoDashImplicitArrayWrapper<T> {
        /**
         * @see _.sortedUniq
         */
        sortedUniq<TSort>(): LoDashImplicitArrayWrapper<T>;

        /**
         * @see _.sortedUniq
         */
        sortedUniq(): LoDashImplicitArrayWrapper<T>;
    }

    interface LoDashImplicitObjectWrapper<T> {
        sortedUniq<T>(): LoDashImplicitArrayWrapper<T>;

        /**
         * @see _.sortedUniq
         */
        sortedUniq<T, TSort>(): LoDashImplicitArrayWrapper<T>;
    }

    interface LoDashExplicitWrapper<T> {
        /**
         * @see _.sortedUniq
         */
        sortedUniq<TSort>(): LoDashExplicitArrayWrapper<T>;
    }

    interface LoDashExplicitArrayWrapper<T> {
        /**
         * @see _.sortedUniq
         */
        sortedUniq<TSort>(): LoDashExplicitArrayWrapper<T>;

        /**
         * @see _.sortedUniq
         */
        sortedUniq(): LoDashExplicitArrayWrapper<T>;
    }

    interface LoDashExplicitObjectWrapper<T> {
        /**
         * @see _.sortedUniq
         */
        sortedUniq<T>(): LoDashExplicitArrayWrapper<T>;

        /**
         * @see _.sortedUniq
         */
        sortedUniq<T, TSort>(): LoDashExplicitArrayWrapper<T>;
    }

    //_.sortedUniqBy
    interface LoDashStatic {
        /**
         * This method is like `_.uniqBy` except that it's designed and optimized
         * for sorted arrays.
         *
         * @static
         * @memberOf _
         * @category Array
         * @param {Array} array The array to inspect.
         * @param {Function} [iteratee] The iteratee invoked per element.
         * @returns {Array} Returns the new duplicate free array.
         * @example
         *
         * _.sortedUniqBy([1.1, 1.2, 2.3, 2.4], Math.floor);
         * // => [1.1, 2.2]
         */
        sortedUniqBy<T>(
            array: List<T>,
            iteratee: ListIterator<T, any>
        ): T[];

        /**
         * @see _.sortedUniqBy
         */
        sortedUniqBy<T, TSort>(
            array: List<T>,
            iteratee: ListIterator<T, TSort>
        ): T[];

        /**
         * @see _.sortedUniqBy
         */
        sortedUniqBy<T>(
            array: List<T>,
            iteratee: string
        ): T[];

        /**
         * @see _.sortedUniqBy
         */
        sortedUniqBy<T>(
            array: List<T>,
            iteratee: Object
        ): T[];

        /**
         * @see _.sortedUniqBy
         */
        sortedUniqBy<TWhere extends {}, T>(
            array: List<T>,
            iteratee: TWhere
        ): T[];
    }

    interface LoDashImplicitWrapper<T> {
        /**
         * @see _.sortedUniqBy
         */
        sortedUniqBy<TSort>(
            iteratee: ListIterator<T, TSort>
        ): LoDashImplicitArrayWrapper<T>;
    }

    interface LoDashImplicitArrayWrapper<T> {
        /**
         * @see _.sortedUniqBy
         */
        sortedUniqBy<TSort>(
            iteratee: ListIterator<T, TSort>
        ): LoDashImplicitArrayWrapper<T>;

        /**
         * @see _.sortedUniqBy
         */
        sortedUniqBy(
            iteratee: string
        ): LoDashImplicitArrayWrapper<T>;

        /**
         * @see _.sortedUniqBy
         */
        sortedUniqBy<TWhere extends {}>(
            iteratee: TWhere
        ): LoDashImplicitArrayWrapper<T>;
    }

    interface LoDashImplicitObjectWrapper<T> {
        /**
         * @see _.sortedUniqBy
         */
        sortedUniqBy<T>(
            iteratee: ListIterator<T, any>
        ): LoDashImplicitArrayWrapper<T>;

        /**
         * @see _.sortedUniqBy
         */
        sortedUniqBy<T, TSort>(
            iteratee: ListIterator<T, TSort>
        ): LoDashImplicitArrayWrapper<T>;

        /**
         * @see _.sortedUniqBy
         */
        sortedUniqBy<T>(
            iteratee: string
        ): LoDashImplicitArrayWrapper<T>;

        /**
         * @see _.sortedUniqBy
         */
        sortedUniqBy<T>(
            iteratee: Object
        ): LoDashImplicitArrayWrapper<T>;

        /**
         * @see _.sortedUniqBy
         */
        sortedUniqBy<TWhere extends {}, T>(
            iteratee: TWhere
        ): LoDashImplicitArrayWrapper<T>;
    }

    interface LoDashExplicitWrapper<T> {
        /**
         * @see _.sortedUniqBy
         */
        sortedUniqBy<TSort>(
            iteratee: ListIterator<T, TSort>
        ): LoDashExplicitArrayWrapper<T>;
    }

    interface LoDashExplicitArrayWrapper<T> {
        /**
         * @see _.sortedUniqBy
         */
        sortedUniqBy<TSort>(
            iteratee: ListIterator<T, TSort>
        ): LoDashExplicitArrayWrapper<T>;

        /**
         * @see _.sortedUniqBy
         */
        sortedUniqBy(
            iteratee: string
        ): LoDashExplicitArrayWrapper<T>;

        /**
         * @see _.sortedUniqBy
         */
        sortedUniqBy<TWhere extends {}>(
            iteratee: TWhere
        ): LoDashExplicitArrayWrapper<T>;
    }

    interface LoDashExplicitObjectWrapper<T> {
        /**
         * @see _.sortedUniqBy
         */
        sortedUniqBy<T>(
            iteratee: ListIterator<T, any>
        ): LoDashExplicitArrayWrapper<T>;

        /**
         * @see _.sortedUniqBy
         */
        sortedUniqBy<T, TSort>(
            iteratee: ListIterator<T, TSort>
        ): LoDashExplicitArrayWrapper<T>;

        /**
         * @see _.sortedUniqBy
         */
        sortedUniqBy<T>(
            iteratee: string
        ): LoDashExplicitArrayWrapper<T>;

        /**
         * @see _.sortedUniqBy
         */
        sortedUniqBy<T>(
            iteratee: Object
        ): LoDashExplicitArrayWrapper<T>;

        /**
         * @see _.sortedUniqBy
         */
        sortedUniqBy<TWhere extends {}, T>(
            iteratee: TWhere
        ): LoDashExplicitArrayWrapper<T>;
    }

    //_.unionBy DUMMY
    interface LoDashStatic {
        /**
         * This method is like `_.union` except that it accepts `iteratee` which is
         * invoked for each element of each `arrays` to generate the criterion by which
         * uniqueness is computed. The iteratee is invoked with one argument: (value).
         *
         * @static
         * @memberOf _
         * @category Array
         * @param {...Array} [arrays] The arrays to inspect.
         * @param {Function|Object|string} [iteratee=_.identity] The iteratee invoked per element.
         * @returns {Array} Returns the new array of combined values.
         * @example
         *
         * _.unionBy([2.1, 1.2], [4.3, 2.4], Math.floor);
         * // => [2.1, 1.2, 4.3]
         *
         * // using the `_.property` iteratee shorthand
         * _.unionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
         * // => [{ 'x': 1 }, { 'x': 2 }]
         */
        unionBy(
            array: any[]|List<any>,
            ...values: any[]
        ): any[];
    }

    //_.unionWith DUMMY
    interface LoDashStatic {
        /**
         * This method is like `_.union` except that it accepts `comparator` which
         * is invoked to compare elements of `arrays`. The comparator is invoked
         * with two arguments: (arrVal, othVal).
         *
         * @static
         * @memberOf _
         * @category Array
         * @param {...Array} [arrays] The arrays to inspect.
         * @param {Function} [comparator] The comparator invoked per element.
         * @returns {Array} Returns the new array of combined values.
         * @example
         *
         * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
         * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
         *
         * _.unionWith(objects, others, _.isEqual);
         * // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
         */
        unionWith(
            array: any[]|List<any>,
            ...values: any[]
        ): any[];
    }

    //_.uniqWith DUMMY
    interface LoDashStatic {
        /**
         * This method is like `_.uniq` except that it accepts `comparator` which
         * is invoked to compare elements of `array`. The comparator is invoked with
         * two arguments: (arrVal, othVal).
         *
         * @static
         * @memberOf _
         * @category Array
         * @param {Array} array The array to inspect.
         * @param {Function} [comparator] The comparator invoked per element.
         * @returns {Array} Returns the new duplicate free array.
         * @example
         *
         * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 },  { 'x': 1, 'y': 2 }];
         *
         * _.uniqWith(objects, _.isEqual);
         * // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }]
         */
        uniqWith(
            array: any[]|List<any>,
            ...values: any[]
        ): any[];
    }

    //_.unset
    interface LoDashStatic {
        /**
         * Removes the property at path of object.
         *
         * @param object The object to modify.
         * @param path The path of the property to unset.
         * @return Returns true if the property is deleted, else false.
         */
        unset<T>(
            object: T,
            path: StringRepresentable | StringRepresentable[]
        ): boolean;
    }

    //_.unzip
    interface LoDashStatic {
        /**
         * This method is like _.zip except that it accepts an array of grouped elements and creates an array
         * regrouping the elements to their pre-zip configuration.
         *
         * @param array The array of grouped elements to process.
         * @return Returns the new array of regrouped elements.
         */
        unzip<T>(array: List<List<T>>): T[][];
    }

    interface LoDashImplicitArrayWrapper<T> {
        /**
         * @see _.unzip
         */
        unzip<T>(): LoDashImplicitArrayWrapper<T[]>;
    }

    interface LoDashImplicitObjectWrapper<T> {
        /**
         * @see _.unzip
         */
        unzip<T>(): LoDashImplicitArrayWrapper<T[]>;
    }

    interface LoDashExplicitArrayWrapper<T> {
        /**
         * @see _.unzip
         */
        unzip<T>(): LoDashExplicitArrayWrapper<T[]>;
    }

    interface LoDashExplicitObjectWrapper<T> {
        /**
         * @see _.unzip
         */
        unzip<T>(): LoDashExplicitArrayWrapper<T[]>;
    }

    //_.unzipWith
    interface LoDashStatic {
        /**
         * This method is like _.unzip except that it accepts an iteratee to specify how regrouped values should be
         * combined. The iteratee is bound to thisArg and invoked with four arguments: (accumulator, value, index,
         * group).
         *
         * @param array The array of grouped elements to process.
         * @param iteratee The function to combine regrouped values.
         * @param thisArg The this binding of iteratee.
         * @return Returns the new array of regrouped elements.
         */
        unzipWith<TArray, TResult>(
            array: List<List<TArray>>,
            iteratee?: MemoIterator<TArray, TResult>,
            thisArg?: any
        ): TResult[];
    }

    interface LoDashImplicitArrayWrapper<T> {
        /**
         * @see _.unzipWith
         */
        unzipWith<TArr, TResult>(
            iteratee?: MemoIterator<TArr, TResult>,
            thisArg?: any
        ): LoDashImplicitArrayWrapper<TResult>;
    }

    interface LoDashImplicitObjectWrapper<T> {
        /**
         * @see _.unzipWith
         */
        unzipWith<TArr, TResult>(
            iteratee?: MemoIterator<TArr, TResult>,
            thisArg?: any
        ): LoDashImplicitArrayWrapper<TResult>;
    }

    //_.without
    interface LoDashStatic {
        /**
         * Creates an array excluding all provided values using SameValueZero for equality comparisons.
         *
         * @param array The array to filter.
         * @param values The values to exclude.
         * @return Returns the new array of filtered values.
         */
        without<T>(
            array: List<T>,
            ...values: T[]
        ): T[];
    }

    interface LoDashImplicitArrayWrapper<T> {
        /**
         * @see _.without
         */
        without(...values: T[]): LoDashImplicitArrayWrapper<T>;
    }

    interface LoDashImplicitObjectWrapper<T> {
        /**
         * @see _.without
         */
        without<T>(...values: T[]): LoDashImplicitArrayWrapper<T>;
    }

    interface LoDashExplicitArrayWrapper<T> {
        /**
         * @see _.without
         */
        without(...values: T[]): LoDashExplicitArrayWrapper<T>;
    }

    interface LoDashExplicitObjectWrapper<T> {
        /**
         * @see _.without
         */
        without<T>(...values: T[]): LoDashExplicitArrayWrapper<T>;
    }

    //_.xor
    interface LoDashStatic {
        /**
         * Creates an array of unique values that is the symmetric difference of the provided arrays.
         *
         * @param arrays The arrays to inspect.
         * @return Returns the new array of values.
         */
        xor<T>(...arrays: List<T>[]): T[];
    }

    interface LoDashImplicitArrayWrapper<T> {
        /**
         * @see _.xor
         */
        xor(...arrays: List<T>[]): LoDashImplicitArrayWrapper<T>;
    }

    interface LoDashImplicitObjectWrapper<T> {
        /**
         * @see _.xor
         */
        xor<T>(...arrays: List<T>[]): LoDashImplicitArrayWrapper<T>;
    }

    interface LoDashExplicitArrayWrapper<T> {
        /**
         * @see _.xor
         */
        xor(...arrays: List<T>[]): LoDashExplicitArrayWrapper<T>;
    }

    interface LoDashExplicitObjectWrapper<T> {
        /**
         * @see _.xor
         */
        xor<T>(...arrays: List<T>[]): LoDashExplicitArrayWrapper<T>;
    }

    //_.xorBy DUMMY
    interface LoDashStatic {
        /**
         * This method is like `_.xor` except that it accepts `iteratee` which is
         * invoked for each element of each `arrays` to generate the criterion by which
         * uniqueness is computed. The iteratee is invoked with one argument: (value).
         *
         * @static
         * @memberOf _
         * @category Array
         * @param {...Array} [arrays] The arrays to inspect.
         * @param {Function|Object|string} [iteratee=_.identity] The iteratee invoked per element.
         * @returns {Array} Returns the new array of values.
         * @example
         *
         * _.xorBy([2.1, 1.2], [4.3, 2.4], Math.floor);
         * // => [1.2, 4.3]
         *
         * // using the `_.property` iteratee shorthand
         * _.xorBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
         * // => [{ 'x': 2 }]
         */
        xorBy(
            array: any[]|List<any>,
            ...values: any[]
        ): any[];
    }

    //_.xorWith DUMMY
    interface LoDashStatic {
        /**
         * This method is like `_.xor` except that it accepts `comparator` which is
         * invoked to compare elements of `arrays`. The comparator is invoked with
         * two arguments: (arrVal, othVal).
         *
         * @static
         * @memberOf _
         * @category Array
         * @param {...Array} [arrays] The arrays to inspect.
         * @param {Function} [comparator] The comparator invoked per element.
         * @returns {Array} Returns the new array of values.
         * @example
         *
         * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
         * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
         *
         * _.xorWith(objects, others, _.isEqual);
         * // => [{ 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
         */
        xorWith(
            array: any[]|List<any>,
            ...values: any[]
        ): any[];
    }

    //_.zip
    interface LoDashStatic {
        /**
         * Creates an array of grouped elements, the first of which contains the first elements of the given arrays,
         * the second of which contains the second elements of the given arrays, and so on.
         *
         * @param arrays The arrays to process.
         * @return Returns the new array of grouped elements.
         */
        zip<T>(...arrays: List<T>[]): T[][];
    }

    interface LoDashImplicitArrayWrapper<T> {
        /**
         * @see _.zip
         */
        zip<T>(...arrays: List<T>[]): _.LoDashImplicitArrayWrapper<T[]>;
    }

    interface LoDashImplicitObjectWrapper<T> {
        /**
         * @see _.zip
         */
        zip<T>(...arrays: List<T>[]): _.LoDashImplicitArrayWrapper<T[]>;
    }

    interface LoDashExplicitArrayWrapper<T> {
        /**
         * @see _.zip
         */
        zip<T>(...arrays: List<T>[]): _.LoDashExplicitArrayWrapper<T[]>;
    }

    interface LoDashExplicitObjectWrapper<T> {
        /**
         * @see _.zip
         */
        zip<T>(...arrays: List<T>[]): _.LoDashExplicitArrayWrapper<T[]>;
    }

    //_.zipObject
    interface LoDashStatic {
        /**
         * The inverse of _.pairs; this method returns an object composed from arrays of property names and values.
         * Provide either a single two dimensional array, e.g. [[key1, value1], [key2, value2]] or two arrays, one of
         * property names and one of corresponding values.
         *
         * @param props The property names.
         * @param values The property values.
         * @return Returns the new object.
         */
        zipObject<TValues, TResult extends {}>(
            props: List<StringRepresentable>|List<List<any>>,
            values?: List<TValues>
        ): TResult;

        /**
         * @see _.zipObject
         */
        zipObject<TResult extends {}>(
            props: List<StringRepresentable>|List<List<any>>,
            values?: List<any>
        ): TResult;

        /**
         * @see _.zipObject
         */
        zipObject(
            props: List<StringRepresentable>|List<List<any>>,
            values?: List<any>
        ): _.Dictionary<any>;
    }

    interface LoDashImplicitArrayWrapper<T> {
        /**
         * @see _.zipObject
         */
        zipObject<TValues, TResult extends {}>(
            values?: List<TValues>
        ): _.LoDashImplicitObjectWrapper<TResult>;

        /**
         * @see _.zipObject
         */
        zipObject<TResult extends {}>(
            values?: List<any>
        ): _.LoDashImplicitObjectWrapper<TResult>;

        /**
         * @see _.zipObject
         */
        zipObject(
            values?: List<any>
        ): _.LoDashImplicitObjectWrapper<_.Dictionary<any>>;
    }

    interface LoDashImplicitObjectWrapper<T> {
        /**
         * @see _.zipObject
         */
        zipObject<TValues, TResult extends {}>(
            values?: List<TValues>
        ): _.LoDashImplicitObjectWrapper<TResult>;

        /**
         * @see _.zipObject
         */
        zipObject<TResult extends {}>(
            values?: List<any>
        ): _.LoDashImplicitObjectWrapper<TResult>;

        /**
         * @see _.zipObject
         */
        zipObject(
            values?: List<any>
        ): _.LoDashImplicitObjectWrapper<_.Dictionary<any>>;
    }

    interface LoDashExplicitArrayWrapper<T> {
        /**
         * @see _.zipObject
         */
        zipObject<TValues, TResult extends {}>(
            values?: List<TValues>
        ): _.LoDashExplicitObjectWrapper<TResult>;

        /**
         * @see _.zipObject
         */
        zipObject<TResult extends {}>(
            values?: List<any>
        ): _.LoDashExplicitObjectWrapper<TResult>;

        /**
         * @see _.zipObject
         */
        zipObject(
            values?: List<any>
        ): _.LoDashExplicitObjectWrapper<_.Dictionary<any>>;
    }

    interface LoDashExplicitObjectWrapper<T> {
        /**
         * @see _.zipObject
         */
        zipObject<TValues, TResult extends {}>(
            values?: List<TValues>
        ): _.LoDashExplicitObjectWrapper<TResult>;

        /**
         * @see _.zipObject
         */
        zipObject<TResult extends {}>(
            values?: List<any>
        ): _.LoDashExplicitObjectWrapper<TResult>;

        /**
         * @see _.zipObject
         */
        zipObject(
            values?: List<any>
        ): _.LoDashExplicitObjectWrapper<_.Dictionary<any>>;
    }

    //_.zipWith
    interface LoDashStatic {
        /**
         * This method is like _.zip except that it accepts an iteratee to specify how grouped values should be
         * combined. The iteratee is bound to thisArg and invoked with four arguments: (accumulator, value, index,
         * group).
         * @param {...Array} [arrays] The arrays to process.
         * @param {Function} [iteratee] The function to combine grouped values.
         * @param {*} [thisArg] The `this` binding of `iteratee`.
         * @return Returns the new array of grouped elements.
         */
        zipWith<TResult>(...args: any[]): TResult[];
    }

    interface LoDashImplicitArrayWrapper<T> {
        /**
         * @see _.zipWith
         */
        zipWith<TResult>(...args: any[]): LoDashImplicitArrayWrapper<TResult>;
    }

    /*********
     * Chain *
     *********/

    //_.chain
    interface LoDashStatic {
        /**
         * Creates a lodash object that wraps value with explicit method chaining enabled.
         *
         * @param value The value to wrap.
         * @return Returns the new lodash wrapper instance.
         */
        chain(value: number): LoDashExplicitWrapper<number>;
        chain(value: string): LoDashExplicitWrapper<string>;
        chain(value: boolean): LoDashExplicitWrapper<boolean>;
        chain<T>(value: T[]): LoDashExplicitArrayWrapper<T>;
        chain<T extends {}>(value: T): LoDashExplicitObjectWrapper<T>;
        chain(value: any): LoDashExplicitWrapper<any>;
    }

    interface LoDashImplicitWrapper<T> {
        /**
         * @see _.chain
         */
        chain(): LoDashExplicitWrapper<T>;
    }

    interface LoDashImplicitArrayWrapper<T> {
        /**
         * @see _.chain
         */
        chain(): LoDashExplicitArrayWrapper<T>;
    }

    interface LoDashImplicitObjectWrapper<T> {
        /**
         * @see _.chain
         */
        chain(): LoDashExplicitObjectWrapper<T>;
    }

    interface LoDashExplicitWrapperBase<T, TWrapper> {
        /**
         * @see _.chain
         */
        chain(): TWrapper;
    }

    //_.tap
    interface LoDashStatic {
        /**
         * This method invokes interceptor and returns value. The interceptor is bound to thisArg and invoked with one
         * argument; (value). The purpose of this method is to "tap into" a method chain in order to perform operations
         * on intermediate results within the chain.
         *
         * @param value The value to provide to interceptor.
         * @param interceptor The function to invoke.
         * @parem thisArg The this binding of interceptor.
         * @return Returns value.
         **/
        tap<T>(
            value: T,
            interceptor: (value: T) => void,
            thisArg?: any
        ): T;
    }

    interface LoDashImplicitWrapperBase<T, TWrapper> {
        /**
         * @see _.tap
         */
        tap(
            interceptor: (value: T) => void,
            thisArg?: any
        ): TWrapper;
    }

    interface LoDashExplicitWrapperBase<T, TWrapper> {
        /**
         * @see _.tap
         */
        tap(
            interceptor: (value: T) => void,
            thisArg?: any
        ): TWrapper;
    }

    //_.thru
    interface LoDashStatic {
        /**
         * This method is like _.tap except that it returns the result of interceptor.
         *
         * @param value The value to provide to interceptor.
         * @param interceptor The function to invoke.
         * @param thisArg The this binding of interceptor.
         * @return Returns the result of interceptor.
         */
        thru<T, TResult>(
            value: T,
            interceptor: (value: T) => TResult,
            thisArg?: any
        ): TResult;
    }

    interface LoDashImplicitWrapperBase<T, TWrapper> {
        /**
         * @see _.thru
         */
        thru<TResult extends number>(
            interceptor: (value: T) => TResult,
            thisArg?: any): LoDashImplicitWrapper<TResult>;

        /**
         * @see _.thru
         */
        thru<TResult extends string>(
            interceptor: (value: T) => TResult,
            thisArg?: any): LoDashImplicitWrapper<TResult>;

        /**
         * @see _.thru
         */
        thru<TResult extends boolean>(
            interceptor: (value: T) => TResult,
            thisArg?: any): LoDashImplicitWrapper<TResult>;

        /**
         * @see _.thru
         */
        thru<TResult extends {}>(
            interceptor: (value: T) => TResult,
            thisArg?: any): LoDashImplicitObjectWrapper<TResult>;

        /**
         * @see _.thru
         */
        thru<TResult>(
            interceptor: (value: T) => TResult[],
            thisArg?: any): LoDashImplicitArrayWrapper<TResult>;
    }

    interface LoDashExplicitWrapperBase<T, TWrapper> {
        /**
         * @see _.thru
         */
        thru<TResult extends number>(
            interceptor: (value: T) => TResult,
            thisArg?: any
        ): LoDashExplicitWrapper<TResult>;

        /**
         * @see _.thru
         */
        thru<TResult extends string>(
            interceptor: (value: T) => TResult,
            thisArg?: any
        ): LoDashExplicitWrapper<TResult>;

        /**
         * @see _.thru
         */
        thru<TResult extends boolean>(
            interceptor: (value: T) => TResult,
            thisArg?: any
        ): LoDashExplicitWrapper<TResult>;

        /**
         * @see _.thru
         */
        thru<TResult extends {}>(
            interceptor: (value: T) => TResult,
            thisArg?: any
        ): LoDashExplicitObjectWrapper<TResult>;

        /**
         * @see _.thru
         */
        thru<TResult>(
            interceptor: (value: T) => TResult[],
            thisArg?: any
        ): LoDashExplicitArrayWrapper<TResult>;
    }

    //_.prototype.commit
    interface LoDashImplicitWrapperBase<T, TWrapper> {
        /**
         * Executes the chained sequence and returns the wrapped result.
         *
         * @return Returns the new lodash wrapper instance.
         */
        commit(): TWrapper;
    }

    interface LoDashExplicitWrapperBase<T, TWrapper> {
        /**
         * @see _.commit
         */
        commit(): TWrapper;
    }

    //_.prototype.concat
    interface LoDashImplicitWrapperBase<T, TWrapper> {
        /**
         * Creates a new array joining a wrapped array with any additional arrays and/or values.
         *
         * @param items
         * @return Returns the new concatenated array.
         */
        concat<TItem>(...items: Array<TItem|Array<TItem>>): LoDashImplicitArrayWrapper<TItem>;

        /**
         * @see _.concat
         */
        concat(...items: Array<T|Array<T>>): LoDashImplicitArrayWrapper<T>;
    }

    interface LoDashExplicitWrapperBase<T, TWrapper> {
        /**
         * @see _.concat
         */
        concat<TItem>(...items: Array<TItem|Array<TItem>>): LoDashExplicitArrayWrapper<TItem>;

        /**
         * @see _.concat
         */
        concat(...items: Array<T|Array<T>>): LoDashExplicitArrayWrapper<T>;
    }

    //_.prototype.plant
    interface LoDashImplicitWrapperBase<T, TWrapper> {
        /**
         * Creates a clone of the chained sequence planting value as the wrapped value.
         * @param value The value to plant as the wrapped value.
         * @return Returns the new lodash wrapper instance.
         */
        plant(value: number): LoDashImplicitWrapper<number>;

        /**
         * @see _.plant
         */
        plant(value: string): LoDashImplicitStringWrapper;

        /**
         * @see _.plant
         */
        plant(value: boolean): LoDashImplicitWrapper<boolean>;

        /**
         * @see _.plant
         */
        plant(value: number[]): LoDashImplicitNumberArrayWrapper;

        /**
         * @see _.plant
         */
        plant<T>(value: T[]): LoDashImplicitArrayWrapper<T>;

        /**
         * @see _.plant
         */
        plant<T extends {}>(value: T): LoDashImplicitObjectWrapper<T>;

        /**
         * @see _.plant
         */
        plant(value: any): LoDashImplicitWrapper<any>;
    }

    interface LoDashExplicitWrapperBase<T, TWrapper> {
        /**
         * @see _.plant
         */
        plant(value: number): LoDashExplicitWrapper<number>;

        /**
         * @see _.plant
         */
        plant(value: string): LoDashExplicitStringWrapper;

        /**
         * @see _.plant
         */
        plant(value: boolean): LoDashExplicitWrapper<boolean>;

        /**
         * @see _.plant
         */
        plant(value: number[]): LoDashExplicitNumberArrayWrapper;

        /**
         * @see _.plant
         */
        plant<T>(value: T[]): LoDashExplicitArrayWrapper<T>;

        /**
         * @see _.plant
         */
        plant<T extends {}>(value: T): LoDashExplicitObjectWrapper<T>;

        /**
         * @see _.plant
         */
        plant(value: any): LoDashExplicitWrapper<any>;
    }

    //_.prototype.reverse
    interface LoDashImplicitArrayWrapper<T> {
        /**
         * Reverses the wrapped array so the first element becomes the last, the second element becomes the second to
         * last, and so on.
         *
         * Note: This method mutates the wrapped array.
         *
         * @return Returns the new reversed lodash wrapper instance.
         */
        reverse(): LoDashImplicitArrayWrapper<T>;
    }

    interface LoDashExplicitArrayWrapper<T> {
        /**
         * @see _.reverse
         */
        reverse(): LoDashExplicitArrayWrapper<T>;
    }

    //_.prototype.toJSON
    interface LoDashWrapperBase<T, TWrapper> {
        /**
         * @see _.value
         */
        toJSON(): T;
    }

    //_.prototype.toString
    interface LoDashWrapperBase<T, TWrapper> {
        /**
         * Produces the result of coercing the unwrapped value to a string.
         *
         * @return Returns the coerced string value.
         */
        toString(): string;
    }

    //_.prototype.value
    interface LoDashWrapperBase<T, TWrapper> {
        /**
         * Executes the chained sequence to extract the unwrapped value.
         *
         * @alias _.toJSON, _.valueOf
         *
         * @return Returns the resolved unwrapped value.
         */
        value(): T;
    }

    //_.valueOf
    interface LoDashWrapperBase<T, TWrapper> {
        /**
         * @see _.value
         */
        valueOf(): T;
    }

    /**************
     * Collection *
     **************/

    //_.at
    interface LoDashStatic {
        /**
         * Creates an array of elements corresponding to the given keys, or indexes, of collection. Keys may be
         * specified as individual arguments or as arrays of keys.
         *
         * @param collection The collection to iterate over.
         * @param props The property names or indexes of elements to pick, specified individually or in arrays.
         * @return Returns the new array of picked elements.
         */
        at<T>(
            collection: List<T>|Dictionary<T>,
            ...props: (number|string|(number|string)[])[]
        ): T[];
    }

    interface LoDashImplicitArrayWrapper<T> {
        /**
         * @see _.at
         */
        at(...props: (number|string|(number|string)[])[]): LoDashImplicitArrayWrapper<T>;
    }

    interface LoDashImplicitObjectWrapper<T> {
        /**
         * @see _.at
         */
        at<T>(...props: (number|string|(number|string)[])[]): LoDashImplicitArrayWrapper<T>;
    }

    interface LoDashExplicitArrayWrapper<T> {
        /**
         * @see _.at
         */
        at(...props: (number|string|(number|string)[])[]): LoDashExplicitArrayWrapper<T>;
    }

    interface LoDashExplicitObjectWrapper<T> {
        /**
         * @see _.at
         */
        at<T>(...props: (number|string|(number|string)[])[]): LoDashExplicitArrayWrapper<T>;
    }

    //_.countBy
    interface LoDashStatic {
        /**
         * Creates an object composed of keys generated from the results of running each element of collection through
         * iteratee. The corresponding value of each key is the number of times the key was returned by iteratee. The
         * iteratee is bound to thisArg and invoked with three arguments:
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
        countBy<T>(
            collection: List<T>,
            iteratee?: ListIterator<T, any>,
            thisArg?: any
        ): Dictionary<number>;

        /**
         * @see _.countBy
         */
        countBy<T>(
            collection: Dictionary<T>,
            iteratee?: DictionaryIterator<T, any>,
            thisArg?: any
        ): Dictionary<number>;

        /**
         * @see _.countBy
         */
        countBy<T>(
            collection: NumericDictionary<T>,
            iteratee?: NumericDictionaryIterator<T, any>,
            thisArg?: any
        ): Dictionary<number>;

        /**
         * @see _.countBy
         */
        countBy<T>(
            collection: List<T>|Dictionary<T>|NumericDictionary<T>,
            iteratee?: string,
            thisArg?: any
        ): Dictionary<number>;

        /**
         * @see _.countBy
         */
        countBy<W, T>(
            collection: List<T>|Dictionary<T>|NumericDictionary<T>,
            iteratee?: W
        ): Dictionary<number>;

        /**
         * @see _.countBy
         */
        countBy<T>(
            collection: List<T>|Dictionary<T>|NumericDictionary<T>,
            iteratee?: Object
        ): Dictionary<number>;
    }

    interface LoDashImplicitWrapper<T> {
        /**
         * @see _.countBy
         */
        countBy(
            iteratee?: ListIterator<T, any>,
            thisArg?: any
        ): LoDashImplicitObjectWrapper<Dictionary<number>>;
    }

    interface LoDashImplicitArrayWrapper<T> {
        /**
         * @see _.countBy
         */
        countBy(
            iteratee?: ListIterator<T, any>,
            thisArg?: any
        ): LoDashImplicitObjectWrapper<Dictionary<number>>;

        /**
         * @see _.countBy
         */
        countBy(
            iteratee?: string,
            thisArg?: any
        ): LoDashImplicitObjectWrapper<Dictionary<number>>;

        /**
         * @see _.countBy
         */
        countBy<W>(
            iteratee?: W
        ): LoDashImplicitObjectWrapper<Dictionary<number>>;
    }

    interface LoDashImplicitObjectWrapper<T> {
        /**
         * @see _.countBy
         */
        countBy<T>(
            iteratee?: ListIterator<T, any>|DictionaryIterator<T, any>|NumericDictionaryIterator<T, any>,
            thisArg?: any
        ): LoDashImplicitObjectWrapper<Dictionary<number>>;

        /**
         * @see _.countBy
         */
        countBy(
            iteratee?: string,
            thisArg?: any
        ): LoDashImplicitObjectWrapper<Dictionary<number>>;

        /**
         * @see _.countBy
         */
        countBy<W>(
            iteratee?: W
        ): LoDashImplicitObjectWrapper<Dictionary<number>>;
    }

    interface LoDashExplicitWrapper<T> {
        /**
         * @see _.countBy
         */
        countBy(
            iteratee?: ListIterator<T, any>,
            thisArg?: any
        ): LoDashExplicitObjectWrapper<Dictionary<number>>;
    }

    interface LoDashExplicitArrayWrapper<T> {
        /**
         * @see _.countBy
         */
        countBy(
            iteratee?: ListIterator<T, any>,
            thisArg?: any
        ): LoDashExplicitObjectWrapper<Dictionary<number>>;

        /**
         * @see _.countBy
         */
        countBy(
            iteratee?: string,
            thisArg?: any
        ): LoDashExplicitObjectWrapper<Dictionary<number>>;

        /**
         * @see _.countBy
         */
        countBy<W>(
            iteratee?: W
        ): LoDashExplicitObjectWrapper<Dictionary<number>>;
    }

    interface LoDashExplicitObjectWrapper<T> {
        /**
         * @see _.countBy
         */
        countBy<T>(
            iteratee?: ListIterator<T, any>|DictionaryIterator<T, any>|NumericDictionaryIterator<T, any>,
            thisArg?: any
        ): LoDashExplicitObjectWrapper<Dictionary<number>>;

        /**
         * @see _.countBy
         */
        countBy(
            iteratee?: string,
            thisArg?: any
        ): LoDashExplicitObjectWrapper<Dictionary<number>>;

        /**
         * @see _.countBy
         */
        countBy<W>(
            iteratee?: W
        ): LoDashExplicitObjectWrapper<Dictionary<number>>;
    }

    //_.each
    interface LoDashStatic {
        /**
         * @see _.forEach
         */
        each<T>(
            collection: T[],
            iteratee?: ListIterator<T, any>,
            thisArg?: any
        ): T[];

        /**
         * @see _.forEach
         */
        each<T>(
            collection: List<T>,
            iteratee?: ListIterator<T, any>,
            thisArg?: any
        ): List<T>;

        /**
         * @see _.forEach
         */
        each<T>(
            collection: Dictionary<T>,
            iteratee?: DictionaryIterator<T, any>,
            thisArg?: any
        ): Dictionary<T>;

        /**
         * @see _.forEach
         */
        each<T extends {}>(
            collection: T,
            iteratee?: ObjectIterator<any, any>,
            thisArgs?: any
        ): T;

        /**
         * @see _.forEach
         */
        each<T extends {}, TValue>(
            collection: T,
            iteratee?: ObjectIterator<TValue, any>,
            thisArgs?: any
        ): T;
    }

    interface LoDashImplicitWrapper<T> {
        /**
         * @see _.forEach
         */
        each(
            iteratee: ListIterator<string, any>,
            thisArg?: any
        ): LoDashImplicitWrapper<string>;
    }

    interface LoDashImplicitArrayWrapper<T> {
        /**
         * @see _.forEach
         */
        each(
            iteratee: ListIterator<T, any>,
            thisArg?: any
        ): LoDashImplicitArrayWrapper<T>;
    }

    interface LoDashImplicitObjectWrapper<T> {
        /**
         * @see _.forEach
         */
        each<TValue>(
            iteratee?: ListIterator<TValue, any>|DictionaryIterator<TValue, any>,
            thisArg?: any
        ): LoDashImplicitObjectWrapper<T>;
    }

    interface LoDashExplicitWrapper<T> {
        /**
         * @see _.forEach
         */
        each(
            iteratee: ListIterator<string, any>,
            thisArg?: any
        ): LoDashExplicitWrapper<string>;
    }

    interface LoDashExplicitArrayWrapper<T> {
        /**
         * @see _.forEach
         */
        each(
            iteratee: ListIterator<T, any>,
            thisArg?: any
        ): LoDashExplicitArrayWrapper<T>;
    }

    interface LoDashExplicitObjectWrapper<T> {
        /**
         * @see _.forEach
         */
        each<TValue>(
            iteratee?: ListIterator<TValue, any>|DictionaryIterator<TValue, any>,
            thisArg?: any
        ): LoDashExplicitObjectWrapper<T>;
    }

    //_.eachRight
    interface LoDashStatic {
        /**
         * @see _.forEachRight
         */
        eachRight<T>(
            collection: T[],
            iteratee?: ListIterator<T, any>,
            thisArg?: any
        ): T[];

        /**
         * @see _.forEachRight
         */
        eachRight<T>(
            collection: List<T>,
            iteratee?: ListIterator<T, any>,
            thisArg?: any
        ): List<T>;

        /**
         * @see _.forEachRight
         */
        eachRight<T>(
            collection: Dictionary<T>,
            iteratee?: DictionaryIterator<T, any>,
            thisArg?: any
        ): Dictionary<T>;

        /**
         * @see _.forEachRight
         */
        eachRight<T extends {}>(
            collection: T,
            iteratee?: ObjectIterator<any, any>,
            thisArgs?: any
        ): T;

        /**
         * @see _.forEachRight
         */
        eachRight<T extends {}, TValue>(
            collection: T,
            iteratee?: ObjectIterator<TValue, any>,
            thisArgs?: any
        ): T;
    }

    interface LoDashImplicitWrapper<T> {
        /**
         * @see _.forEachRight
         */
        eachRight(
            iteratee: ListIterator<string, any>,
            thisArg?: any
        ): LoDashImplicitWrapper<string>;
    }

    interface LoDashImplicitArrayWrapper<T> {
        /**
         * @see _.forEachRight
         */
        eachRight(
            iteratee: ListIterator<T, any>,
            thisArg?: any
        ): LoDashImplicitArrayWrapper<T>;
    }

    interface LoDashImplicitObjectWrapper<T> {
        /**
         * @see _.forEachRight
         */
        eachRight<TValue>(
            iteratee?: ListIterator<TValue, any>|DictionaryIterator<TValue, any>,
            thisArg?: any
        ): LoDashImplicitObjectWrapper<T>;
    }

    interface LoDashExplicitWrapper<T> {
        /**
         * @see _.forEachRight
         */
        eachRight(
            iteratee: ListIterator<string, any>,
            thisArg?: any
        ): LoDashExplicitWrapper<string>;
    }

    interface LoDashExplicitArrayWrapper<T> {
        /**
         * @see _.forEachRight
         */
        eachRight(
            iteratee: ListIterator<T, any>,
            thisArg?: any
        ): LoDashExplicitArrayWrapper<T>;
    }

    interface LoDashExplicitObjectWrapper<T> {
        /**
         * @see _.forEachRight
         */
        eachRight<TValue>(
            iteratee?: ListIterator<TValue, any>|DictionaryIterator<TValue, any>,
            thisArg?: any
        ): LoDashExplicitObjectWrapper<T>;
    }

    //_.every
    interface LoDashStatic {
        /**
         * Checks if predicate returns truthy for all elements of collection. The predicate is bound to thisArg and
         * invoked with three arguments: (value, index|key, collection).
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
         * @param collection The collection to iterate over.
         * @param predicate The function invoked per iteration.
         * @param thisArg The this binding of predicate.
         * @return Returns true if all elements pass the predicate check, else false.
         */
        every<T>(
            collection: List<T>,
            predicate?: ListIterator<T, boolean>,
            thisArg?: any
        ): boolean;

        /**
         * @see _.every
         */
        every<T>(
            collection: Dictionary<T>,
            predicate?: DictionaryIterator<T, boolean>,
            thisArg?: any
        ): boolean;

        /**
         * @see _.every
         */
        every<T>(
            collection: List<T>|Dictionary<T>,
            predicate?: string,
            thisArg?: any
        ): boolean;

        /**
         * @see _.every
         */
        every<TObject extends {}, T>(
            collection: List<T>|Dictionary<T>,
            predicate?: TObject
        ): boolean;
    }

    interface LoDashImplicitArrayWrapper<T> {
        /**
         * @see _.every
         */
        every(
            predicate?: ListIterator<T, boolean>,
            thisArg?: any
        ): boolean;

        /**
         * @see _.every
         */
        every(
            predicate?: string,
            thisArg?: any
        ): boolean;

        /**
         * @see _.every
         */
        every<TObject extends {}>(
            predicate?: TObject
        ): boolean;
    }

    interface LoDashImplicitObjectWrapper<T> {
        /**
         * @see _.every
         */
        every<TResult>(
            predicate?: ListIterator<TResult, boolean>|DictionaryIterator<TResult, boolean>,
            thisArg?: any
        ): boolean;

        /**
         * @see _.every
         */
        every(
            predicate?: string,
            thisArg?: any
        ): boolean;

        /**
         * @see _.every
         */
        every<TObject extends {}>(
            predicate?: TObject
        ): boolean;
    }

    interface LoDashExplicitArrayWrapper<T> {
        /**
         * @see _.every
         */
        every(
            predicate?: ListIterator<T, boolean>,
            thisArg?: any
        ): LoDashExplicitWrapper<boolean>;

        /**
         * @see _.every
         */
        every(
            predicate?: string,
            thisArg?: any
        ): LoDashExplicitWrapper<boolean>;

        /**
         * @see _.every
         */
        every<TObject extends {}>(
            predicate?: TObject
        ): LoDashExplicitWrapper<boolean>;
    }

    interface LoDashExplicitObjectWrapper<T> {
        /**
         * @see _.every
         */
        every<TResult>(
            predicate?: ListIterator<TResult, boolean>|DictionaryIterator<TResult, boolean>,
            thisArg?: any
        ): LoDashExplicitWrapper<boolean>;

        /**
         * @see _.every
         */
        every(
            predicate?: string,
            thisArg?: any
        ): LoDashExplicitWrapper<boolean>;

        /**
         * @see _.every
         */
        every<TObject extends {}>(
            predicate?: TObject
        ): LoDashExplicitWrapper<boolean>;
    }

    //_.filter
    interface LoDashStatic {
        /**
         * Iterates over elements of collection, returning an array of all elements predicate returns truthy for. The
         * predicate is bound to thisArg and invoked with three arguments: (value, index|key, collection).
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
         * @param collection The collection to iterate over.
         * @param predicate The function invoked per iteration.
         * @param thisArg The this binding of predicate.
         * @return Returns the new filtered array.
         */
        filter<T>(
            collection: List<T>,
            predicate?: ListIterator<T, boolean>,
            thisArg?: any
        ): T[];

        /**
         * @see _.filter
         */
        filter<T>(
            collection: Dictionary<T>,
            predicate?: DictionaryIterator<T, boolean>,
            thisArg?: any
        ): T[];

        /**
         * @see _.filter
         */
        filter(
            collection: string,
            predicate?: StringIterator<boolean>,
            thisArg?: any
        ): string[];

        /**
         * @see _.filter
         */
        filter<T>(
            collection: List<T>|Dictionary<T>,
            predicate: string,
            thisArg?: any
        ): T[];

        /**
         * @see _.filter
         */
        filter<W extends {}, T>(
            collection: List<T>|Dictionary<T>,
            predicate: W
        ): T[];
    }

    interface LoDashImplicitWrapper<T> {
        /**
         * @see _.filter
         */
        filter(
            predicate?: StringIterator<boolean>,
            thisArg?: any
        ): LoDashImplicitArrayWrapper<string>;
    }

    interface LoDashImplicitArrayWrapper<T> {
        /**
         * @see _.filter
         */
        filter(
            predicate: ListIterator<T, boolean>,
            thisArg?: any
        ): LoDashImplicitArrayWrapper<T>;

        /**
         * @see _.filter
         */
        filter(
            predicate: string,
            thisArg?: any
        ): LoDashImplicitArrayWrapper<T>;

        /**
         * @see _.filter
         */
        filter<W>(predicate: W): LoDashImplicitArrayWrapper<T>;
    }

    interface LoDashImplicitObjectWrapper<T> {
        /**
         * @see _.filter
         */
        filter<T>(
            predicate: ListIterator<T, boolean>|DictionaryIterator<T, boolean>,
            thisArg?: any
        ): LoDashImplicitArrayWrapper<T>;

        /**
         * @see _.filter
         */
        filter<T>(
            predicate: string,
            thisArg?: any
        ): LoDashImplicitArrayWrapper<T>;

        /**
         * @see _.filter
         */
        filter<W, T>(predicate: W): LoDashImplicitArrayWrapper<T>;
    }

    interface LoDashExplicitWrapper<T> {
        /**
         * @see _.filter
         */
        filter(
            predicate?: StringIterator<boolean>,
            thisArg?: any
        ): LoDashExplicitArrayWrapper<string>;
    }

    interface LoDashExplicitArrayWrapper<T> {
        /**
         * @see _.filter
         */
        filter(
            predicate: ListIterator<T, boolean>,
            thisArg?: any
        ): LoDashExplicitArrayWrapper<T>;

        /**
         * @see _.filter
         */
        filter(
            predicate: string,
            thisArg?: any
        ): LoDashExplicitArrayWrapper<T>;

        /**
         * @see _.filter
         */
        filter<W>(predicate: W): LoDashExplicitArrayWrapper<T>;
    }

    interface LoDashExplicitObjectWrapper<T> {
        /**
         * @see _.filter
         */
        filter<T>(
            predicate: ListIterator<T, boolean>|DictionaryIterator<T, boolean>,
            thisArg?: any
        ): LoDashExplicitArrayWrapper<T>;

        /**
         * @see _.filter
         */
        filter<T>(
            predicate: string,
            thisArg?: any
        ): LoDashExplicitArrayWrapper<T>;

        /**
         * @see _.filter
         */
        filter<W, T>(predicate: W): LoDashExplicitArrayWrapper<T>;
    }

    //_.find
    interface LoDashStatic {
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
         * @param collection The collection to search.
         * @param predicate The function invoked per iteration.
         * @param thisArg The this binding of predicate.
         * @return Returns the matched element, else undefined.
         */
        find<T>(
            collection: List<T>,
            predicate?: ListIterator<T, boolean>,
            thisArg?: any
        ): T;

        /**
         * @see _.find
         */
        find<T>(
            collection: Dictionary<T>,
            predicate?: DictionaryIterator<T, boolean>,
            thisArg?: any
        ): T;

        /**
         * @see _.find
         */
        find<T>(
            collection: List<T>|Dictionary<T>,
            predicate?: string,
            thisArg?: any
        ): T;

        /**
         * @see _.find
         */
        find<TObject extends {}, T>(
            collection: List<T>|Dictionary<T>,
            predicate?: TObject
        ): T;
    }

    interface LoDashImplicitArrayWrapper<T> {
        /**
         * @see _.find
         */
        find(
            predicate?: ListIterator<T, boolean>,
            thisArg?: any
        ): T;

        /**
         * @see _.find
         */
        find(
            predicate?: string,
            thisArg?: any
        ): T;

        /**
         * @see _.find
         */
        find<TObject extends {}>(
            predicate?: TObject
        ): T;
    }

    interface LoDashImplicitObjectWrapper<T> {
        /**
         * @see _.find
         */
        find<TResult>(
            predicate?: ListIterator<TResult, boolean>|DictionaryIterator<TResult, boolean>,
            thisArg?: any
        ): TResult;

        /**
         * @see _.find
         */
        find<TResult>(
            predicate?: string,
            thisArg?: any
        ): TResult;

        /**
         * @see _.find
         */
        find<TObject extends {}, TResult>(
            predicate?: TObject
        ): TResult;
    }

    //_.findLast
    interface LoDashStatic {
        /**
        * This method is like _.find except that it iterates over elements of a collection from
        * right to left.
        * @param collection Searches for a value in this list.
        * @param callback The function called per iteration.
        * @param thisArg The this binding of callback.
        * @return The found element, else undefined.
        **/
        findLast<T>(
            collection: Array<T>,
            callback: ListIterator<T, boolean>,
            thisArg?: any): T;

        /**
        * @see _.find
        **/
        findLast<T>(
            collection: List<T>,
            callback: ListIterator<T, boolean>,
            thisArg?: any): T;

        /**
        * @see _.find
        **/
        findLast<T>(
            collection: Dictionary<T>,
            callback: DictionaryIterator<T, boolean>,
            thisArg?: any): T;

        /**
        * @see _.find
        * @param _.pluck style callback
        **/
        findLast<W, T>(
            collection: Array<T>,
            whereValue: W): T;

        /**
        * @see _.find
        * @param _.pluck style callback
        **/
        findLast<W, T>(
            collection: List<T>,
            whereValue: W): T;

        /**
        * @see _.find
        * @param _.pluck style callback
        **/
        findLast<W, T>(
            collection: Dictionary<T>,
            whereValue: W): T;

        /**
        * @see _.find
        * @param _.where style callback
        **/
        findLast<T>(
            collection: Array<T>,
            pluckValue: string): T;

        /**
        * @see _.find
        * @param _.where style callback
        **/
        findLast<T>(
            collection: List<T>,
            pluckValue: string): T;

        /**
        * @see _.find
        * @param _.where style callback
        **/
        findLast<T>(
            collection: Dictionary<T>,
            pluckValue: string): T;
    }

    interface LoDashImplicitArrayWrapper<T> {
        /**
        * @see _.findLast
        */
        findLast(
            callback: ListIterator<T, boolean>,
            thisArg?: any): T;
        /**
        * @see _.findLast
        * @param _.where style callback
        */
        findLast<W>(
            whereValue: W): T;

        /**
        * @see _.findLast
        * @param _.where style callback
        */
        findLast(
            pluckValue: string): T;
    }

    //_.forEach
    interface LoDashStatic {
        /**
         * Iterates over elements of collection invoking iteratee for each element. The iteratee is bound to thisArg
         * and invoked with three arguments:
         * (value, index|key, collection). Iteratee functions may exit iteration early by explicitly returning false.
         *
         * Note: As with other "Collections" methods, objects with a "length" property are iterated like arrays. To
         * avoid this behavior _.forIn or _.forOwn may be used for object iteration.
         *
         * @alias _.each
         *
         * @param collection The collection to iterate over.
         * @param iteratee The function invoked per iteration.
         * @param thisArg The this binding of iteratee.
         */
        forEach<T>(
            collection: T[],
            iteratee?: ListIterator<T, any>,
            thisArg?: any
        ): T[];

        /**
         * @see _.forEach
         */
        forEach<T>(
            collection: List<T>,
            iteratee?: ListIterator<T, any>,
            thisArg?: any
        ): List<T>;

        /**
         * @see _.forEach
         */
        forEach<T>(
            collection: Dictionary<T>,
            iteratee?: DictionaryIterator<T, any>,
            thisArg?: any
        ): Dictionary<T>;

        /**
         * @see _.forEach
         */
        forEach<T extends {}>(
            collection: T,
            iteratee?: ObjectIterator<any, any>,
            thisArgs?: any
        ): T;

        /**
         * @see _.forEach
         */
        forEach<T extends {}, TValue>(
            collection: T,
            iteratee?: ObjectIterator<TValue, any>,
            thisArgs?: any
        ): T;
    }

    interface LoDashImplicitWrapper<T> {
        /**
         * @see _.forEach
         */
        forEach(
            iteratee: ListIterator<string, any>,
            thisArg?: any
        ): LoDashImplicitWrapper<string>;
    }

    interface LoDashImplicitArrayWrapper<T> {
        /**
         * @see _.forEach
         */
        forEach(
            iteratee: ListIterator<T, any>,
            thisArg?: any
        ): LoDashImplicitArrayWrapper<T>;
    }

    interface LoDashImplicitObjectWrapper<T> {
        /**
         * @see _.forEach
         */
        forEach<TValue>(
            iteratee?: ListIterator<TValue, any>|DictionaryIterator<TValue, any>,
            thisArg?: any
        ): LoDashImplicitObjectWrapper<T>;
    }

    interface LoDashExplicitWrapper<T> {
        /**
         * @see _.forEach
         */
        forEach(
            iteratee: ListIterator<string, any>,
            thisArg?: any
        ): LoDashExplicitWrapper<string>;
    }

    interface LoDashExplicitArrayWrapper<T> {
        /**
         * @see _.forEach
         */
        forEach(
            iteratee: ListIterator<T, any>,
            thisArg?: any
        ): LoDashExplicitArrayWrapper<T>;
    }

    interface LoDashExplicitObjectWrapper<T> {
        /**
         * @see _.forEach
         */
        forEach<TValue>(
            iteratee?: ListIterator<TValue, any>|DictionaryIterator<TValue, any>,
            thisArg?: any
        ): LoDashExplicitObjectWrapper<T>;
    }

    //_.forEachRight
    interface LoDashStatic {
        /**
         * This method is like _.forEach except that it iterates over elements of collection from right to left.
         *
         * @alias _.eachRight
         *
         * @param collection The collection to iterate over.
         * @param iteratee The function called per iteration.
         * @param thisArg The this binding of callback.
         */
        forEachRight<T>(
            collection: T[],
            iteratee?: ListIterator<T, any>,
            thisArg?: any
        ): T[];

        /**
         * @see _.forEachRight
         */
        forEachRight<T>(
            collection: List<T>,
            iteratee?: ListIterator<T, any>,
            thisArg?: any
        ): List<T>;

        /**
         * @see _.forEachRight
         */
        forEachRight<T>(
            collection: Dictionary<T>,
            iteratee?: DictionaryIterator<T, any>,
            thisArg?: any
        ): Dictionary<T>;

        /**
         * @see _.forEachRight
         */
        forEachRight<T extends {}>(
            collection: T,
            iteratee?: ObjectIterator<any, any>,
            thisArgs?: any
        ): T;

        /**
         * @see _.forEachRight
         */
        forEachRight<T extends {}, TValue>(
            collection: T,
            iteratee?: ObjectIterator<TValue, any>,
            thisArgs?: any
        ): T;
    }

    interface LoDashImplicitWrapper<T> {
        /**
         * @see _.forEachRight
         */
        forEachRight(
            iteratee: ListIterator<string, any>,
            thisArg?: any
        ): LoDashImplicitWrapper<string>;
    }

    interface LoDashImplicitArrayWrapper<T> {
        /**
         * @see _.forEachRight
         */
        forEachRight(
            iteratee: ListIterator<T, any>,
            thisArg?: any
        ): LoDashImplicitArrayWrapper<T>;
    }

    interface LoDashImplicitObjectWrapper<T> {
        /**
         * @see _.forEachRight
         */
        forEachRight<TValue>(
            iteratee?: ListIterator<TValue, any>|DictionaryIterator<TValue, any>,
            thisArg?: any
        ): LoDashImplicitObjectWrapper<T>;
    }

    interface LoDashExplicitWrapper<T> {
        /**
         * @see _.forEachRight
         */
        forEachRight(
            iteratee: ListIterator<string, any>,
            thisArg?: any
        ): LoDashExplicitWrapper<string>;
    }

    interface LoDashExplicitArrayWrapper<T> {
        /**
         * @see _.forEachRight
         */
        forEachRight(
            iteratee: ListIterator<T, any>,
            thisArg?: any
        ): LoDashExplicitArrayWrapper<T>;
    }

    interface LoDashExplicitObjectWrapper<T> {
        /**
         * @see _.forEachRight
         */
        forEachRight<TValue>(
            iteratee?: ListIterator<TValue, any>|DictionaryIterator<TValue, any>,
            thisArg?: any
        ): LoDashExplicitObjectWrapper<T>;
    }

    //_.groupBy
    interface LoDashStatic {
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
        groupBy<T, TKey>(
            collection: List<T>,
            iteratee?: ListIterator<T, TKey>,
            thisArg?: any
        ): Dictionary<T[]>;

        /**
         * @see _.groupBy
         */
        groupBy<T>(
            collection: List<any>,
            iteratee?: ListIterator<T, any>,
            thisArg?: any
        ): Dictionary<T[]>;

        /**
         * @see _.groupBy
         */
        groupBy<T, TKey>(
            collection: Dictionary<T>,
            iteratee?: DictionaryIterator<T, TKey>,
            thisArg?: any
        ): Dictionary<T[]>;

        /**
         * @see _.groupBy
         */
        groupBy<T>(
            collection: Dictionary<any>,
            iteratee?: DictionaryIterator<T, any>,
            thisArg?: any
        ): Dictionary<T[]>;

        /**
         * @see _.groupBy
         */
        groupBy<T, TValue>(
            collection: List<T>|Dictionary<T>,
            iteratee?: string,
            thisArg?: TValue
        ): Dictionary<T[]>;

        /**
         * @see _.groupBy
         */
        groupBy<T>(
            collection: List<T>|Dictionary<T>,
            iteratee?: string,
            thisArg?: any
        ): Dictionary<T[]>;

        /**
         * @see _.groupBy
         */
        groupBy<TWhere, T>(
            collection: List<T>|Dictionary<T>,
            iteratee?: TWhere
        ): Dictionary<T[]>;

        /**
         * @see _.groupBy
         */
        groupBy<T>(
            collection: List<T>|Dictionary<T>,
            iteratee?: Object
        ): Dictionary<T[]>;
    }

    interface LoDashImplicitWrapper<T> {
        /**
         * @see _.groupBy
         */
        groupBy<TKey>(
            iteratee?: ListIterator<T, TKey>,
            thisArg?: any
        ): LoDashImplicitObjectWrapper<Dictionary<T[]>>;
    }

    interface LoDashImplicitArrayWrapper<T> {
        /**
         * @see _.groupBy
         */
        groupBy<TKey>(
            iteratee?: ListIterator<T, TKey>,
            thisArg?: any
        ): LoDashImplicitObjectWrapper<Dictionary<T[]>>;

        /**
         * @see _.groupBy
         */
        groupBy<TValue>(
            iteratee?: string,
            thisArg?: TValue
        ): LoDashImplicitObjectWrapper<Dictionary<T[]>>;

        /**
         * @see _.groupBy
         */
        groupBy<TWhere>(
            iteratee?: TWhere
        ): LoDashImplicitObjectWrapper<Dictionary<T[]>>;
    }

    interface LoDashImplicitObjectWrapper<T> {
        /**
         * @see _.groupBy
         */
        groupBy<T, TKey>(
            iteratee?: ListIterator<T, TKey>|DictionaryIterator<T, TKey>,
            thisArg?: any
        ): LoDashImplicitObjectWrapper<Dictionary<T[]>>;

        /**
         * @see _.groupBy
         */
        groupBy<T>(
            iteratee?: ListIterator<T, any>|DictionaryIterator<T, any>,
            thisArg?: any
        ): LoDashImplicitObjectWrapper<Dictionary<T[]>>;

        /**
         * @see _.groupBy
         */
        groupBy<T, TValue>(
            iteratee?: string,
            thisArg?: TValue
        ): LoDashImplicitObjectWrapper<Dictionary<T[]>>;

        /**
         * @see _.groupBy
         */
        groupBy<T>(
            iteratee?: string,
            thisArg?: any
        ): LoDashImplicitObjectWrapper<Dictionary<T[]>>;

        /**
         * @see _.groupBy
         */
        groupBy<TWhere, T>(
            iteratee?: TWhere
        ): LoDashImplicitObjectWrapper<Dictionary<T[]>>;

        /**
         * @see _.groupBy
         */
        groupBy<T>(
            iteratee?: Object
        ): LoDashImplicitObjectWrapper<Dictionary<T[]>>;
    }

    interface LoDashExplicitWrapper<T> {
        /**
         * @see _.groupBy
         */
        groupBy<TKey>(
            iteratee?: ListIterator<T, TKey>,
            thisArg?: any
        ): LoDashExplicitObjectWrapper<Dictionary<T[]>>;
    }

    interface LoDashExplicitArrayWrapper<T> {
        /**
         * @see _.groupBy
         */
        groupBy<TKey>(
            iteratee?: ListIterator<T, TKey>,
            thisArg?: any
        ): LoDashExplicitObjectWrapper<Dictionary<T[]>>;

        /**
         * @see _.groupBy
         */
        groupBy<TValue>(
            iteratee?: string,
            thisArg?: TValue
        ): LoDashExplicitObjectWrapper<Dictionary<T[]>>;

        /**
         * @see _.groupBy
         */
        groupBy<TWhere>(
            iteratee?: TWhere
        ): LoDashExplicitObjectWrapper<Dictionary<T[]>>;
    }

    interface LoDashExplicitObjectWrapper<T> {
        /**
         * @see _.groupBy
         */
        groupBy<T, TKey>(
            iteratee?: ListIterator<T, TKey>|DictionaryIterator<T, TKey>,
            thisArg?: any
        ): LoDashExplicitObjectWrapper<Dictionary<T[]>>;

        /**
         * @see _.groupBy
         */
        groupBy<T>(
            iteratee?: ListIterator<T, any>|DictionaryIterator<T, any>,
            thisArg?: any
        ): LoDashExplicitObjectWrapper<Dictionary<T[]>>;

        /**
         * @see _.groupBy
         */
        groupBy<T, TValue>(
            iteratee?: string,
            thisArg?: TValue
        ): LoDashExplicitObjectWrapper<Dictionary<T[]>>;

        /**
         * @see _.groupBy
         */
        groupBy<T>(
            iteratee?: string,
            thisArg?: any
        ): LoDashExplicitObjectWrapper<Dictionary<T[]>>;

        /**
         * @see _.groupBy
         */
        groupBy<TWhere, T>(
            iteratee?: TWhere
        ): LoDashExplicitObjectWrapper<Dictionary<T[]>>;

        /**
         * @see _.groupBy
         */
        groupBy<T>(
            iteratee?: Object
        ): LoDashExplicitObjectWrapper<Dictionary<T[]>>;
    }

    //_.includes
    interface LoDashStatic {
        /**
         * Checks if target is in collection using SameValueZero for equality comparisons. If fromIndex is negative,
         * it’s used as the offset from the end of collection.
         *
         * @param collection The collection to search.
         * @param target The value to search for.
         * @param fromIndex The index to search from.
         * @return True if the target element is found, else false.
         */
        includes<T>(
            collection: List<T>|Dictionary<T>,
            target: T,
            fromIndex?: number
        ): boolean;

        /**
         * @see _.includes
         */
        includes(
            collection: string,
            target: string,
            fromIndex?: number
        ): boolean;
    }

    interface LoDashImplicitArrayWrapper<T> {
        /**
         * @see _.includes
         */
        includes(
            target: T,
            fromIndex?: number
        ): boolean;
    }

    interface LoDashImplicitObjectWrapper<T> {
        /**
         * @see _.includes
         */
        includes<TValue>(
            target: TValue,
            fromIndex?: number
        ): boolean;
    }

    interface LoDashImplicitWrapper<T> {
        /**
         * @see _.includes
         */
        includes(
            target: string,
            fromIndex?: number
        ): boolean;
    }

    interface LoDashExplicitArrayWrapper<T> {
        /**
         * @see _.includes
         */
        includes(
            target: T,
            fromIndex?: number
        ): LoDashExplicitWrapper<boolean>;
    }

    interface LoDashExplicitObjectWrapper<T> {
        /**
         * @see _.includes
         */
        includes<TValue>(
            target: TValue,
            fromIndex?: number
        ): LoDashExplicitWrapper<boolean>;
    }

    interface LoDashExplicitWrapper<T> {
        /**
         * @see _.includes
         */
        includes(
            target: string,
            fromIndex?: number
        ): LoDashExplicitWrapper<boolean>;
    }

    //_.keyBy
    interface LoDashStatic {
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
         * @param collection The collection to iterate over.
         * @param iteratee The function invoked per iteration.
         * @param thisArg The this binding of iteratee.
         * @return Returns the composed aggregate object.
         */
        keyBy<T>(
            collection: List<T>,
            iteratee?: ListIterator<T, any>,
            thisArg?: any
        ): Dictionary<T>;

        /**
         * @see _.keyBy
         */
        keyBy<T>(
            collection: NumericDictionary<T>,
            iteratee?: NumericDictionaryIterator<T, any>,
            thisArg?: any
        ): Dictionary<T>;

        /**
         * @see _.keyBy
         */
        keyBy<T>(
            collection: Dictionary<T>,
            iteratee?: DictionaryIterator<T, any>,
            thisArg?: any
        ): Dictionary<T>;

        /**
         * @see _.keyBy
         */
        keyBy<T>(
            collection: List<T>|NumericDictionary<T>|Dictionary<T>,
            iteratee?: string,
            thisArg?: any
        ): Dictionary<T>;

        /**
         * @see _.keyBy
         */
        keyBy<W extends Object, T>(
            collection: List<T>|NumericDictionary<T>|Dictionary<T>,
            iteratee?: W
        ): Dictionary<T>;

        /**
         * @see _.keyBy
         */
        keyBy<T>(
            collection: List<T>|NumericDictionary<T>|Dictionary<T>,
            iteratee?: Object
        ): Dictionary<T>;
    }

    interface LoDashImplicitWrapper<T> {
        /**
         * @see _.keyBy
         */
        keyBy(
            iteratee?: ListIterator<T, any>,
            thisArg?: any
        ): LoDashImplicitObjectWrapper<Dictionary<T>>;
    }

    interface LoDashImplicitArrayWrapper<T> {
        /**
         * @see _.keyBy
         */
        keyBy(
            iteratee?: ListIterator<T, any>,
            thisArg?: any
        ): LoDashImplicitObjectWrapper<Dictionary<T>>;

        /**
         * @see _.keyBy
         */
        keyBy(
            iteratee?: string,
            thisArg?: any
        ): LoDashImplicitObjectWrapper<Dictionary<T>>;

        /**
         * @see _.keyBy
         */
        keyBy<W extends Object>(
            iteratee?: W
        ): LoDashImplicitObjectWrapper<Dictionary<T>>;
    }

    interface LoDashImplicitObjectWrapper<T> {
        /**
         * @see _.keyBy
         */
        keyBy<T>(
            iteratee?: ListIterator<T, any>|NumericDictionaryIterator<T, any>|DictionaryIterator<T, any>,
            thisArg?: any
        ): LoDashImplicitObjectWrapper<Dictionary<T>>;

        /**
         * @see _.keyBy
         */
        keyBy<T>(
            iteratee?: string,
            thisArg?: any
        ): LoDashImplicitObjectWrapper<Dictionary<T>>;

        /**
         * @see _.keyBy
         */
        keyBy<W extends Object, T>(
            iteratee?: W
        ): LoDashImplicitObjectWrapper<Dictionary<T>>;

        /**
         * @see _.keyBy
         */
        keyBy<T>(
            iteratee?: Object
        ): LoDashImplicitObjectWrapper<Dictionary<T>>;
    }

    interface LoDashExplicitWrapper<T> {
        /**
         * @see _.keyBy
         */
        keyBy(
            iteratee?: ListIterator<T, any>,
            thisArg?: any
        ): LoDashExplicitObjectWrapper<Dictionary<T>>;
    }

    interface LoDashExplicitArrayWrapper<T> {
        /**
         * @see _.keyBy
         */
        keyBy(
            iteratee?: ListIterator<T, any>,
            thisArg?: any
        ): LoDashExplicitObjectWrapper<Dictionary<T>>;

        /**
         * @see _.keyBy
         */
        keyBy(
            iteratee?: string,
            thisArg?: any
        ): LoDashExplicitObjectWrapper<Dictionary<T>>;

        /**
         * @see _.keyBy
         */
        keyBy<W extends Object>(
            iteratee?: W
        ): LoDashExplicitObjectWrapper<Dictionary<T>>;
    }

    interface LoDashExplicitObjectWrapper<T> {
        /**
         * @see _.keyBy
         */
        keyBy<T>(
            iteratee?: ListIterator<T, any>|NumericDictionaryIterator<T, any>|DictionaryIterator<T, any>,
            thisArg?: any
        ): LoDashExplicitObjectWrapper<Dictionary<T>>;

        /**
         * @see _.keyBy
         */
        keyBy<T>(
            iteratee?: string,
            thisArg?: any
        ): LoDashExplicitObjectWrapper<Dictionary<T>>;

        /**
         * @see _.keyBy
         */
        keyBy<W extends Object, T>(
            iteratee?: W
        ): LoDashExplicitObjectWrapper<Dictionary<T>>;

        /**
         * @see _.keyBy
         */
        keyBy<T>(
            iteratee?: Object
        ): LoDashExplicitObjectWrapper<Dictionary<T>>;
    }

    //_.invokeMap
    interface LoDashStatic {
        /**
        * Invokes the method named by methodName on each element in the collection returning
        * an array of the results of each invoked method. Additional arguments will be provided
        * to each invoked method. If methodName is a function it will be invoked for, and this
        * bound to, each element in the collection.
        * @param collection The collection to iterate over.
        * @param methodName The name of the method to invoke.
        * @param args Arguments to invoke the method with.
        **/
        invokeMap<TValue extends {}, TResult>(
            collection: TValue[],
            methodName: string,
            ...args: any[]): TResult[];

        /**
        * @see _.invokeMap
        **/
        invokeMap<TValue extends {}, TResult>(
            collection: Dictionary<TValue>,
            methodName: string,
            ...args: any[]): TResult[];

        /**
        * @see _.invokeMap
        **/
        invokeMap<TResult>(
            collection: {}[],
            methodName: string,
            ...args: any[]): TResult[];

        /**
        * @see _.invokeMap
        **/
        invokeMap<TResult>(
            collection: Dictionary<{}>,
            methodName: string,
            ...args: any[]): TResult[];

        /**
        * @see _.invokeMap
        **/
        invokeMap<TValue extends {}, TResult>(
            collection: TValue[],
            method: (...args: any[]) => TResult,
            ...args: any[]): TResult[];

        /**
        * @see _.invokeMap
        **/
        invokeMap<TValue extends {}, TResult>(
            collection: Dictionary<TValue>,
            method: (...args: any[]) => TResult,
            ...args: any[]): TResult[];

        /**
        * @see _.invokeMap
        **/
        invokeMap<TResult>(
            collection: {}[],
            method: (...args: any[]) => TResult,
            ...args: any[]): TResult[];

        /**
        * @see _.invokeMap
        **/
        invokeMap<TResult>(
            collection: Dictionary<{}>,
            method: (...args: any[]) => TResult,
            ...args: any[]): TResult[];
    }
    
    interface LoDashImplicitArrayWrapper<T> {
        /**
        * @see _.invokeMap
        **/
        invokeMap<TResult>(
            methodName: string,
            ...args: any[]): LoDashImplicitArrayWrapper<TResult>;

        /**
        * @see _.invokeMap
        **/
        invokeMap<TResult>(
            method: (...args: any[]) => TResult,
            ...args: any[]): LoDashImplicitArrayWrapper<TResult>;
    }
    
    interface LoDashImplicitObjectWrapper<T> {
        /**
        * @see _.invokeMap
        **/
        invokeMap<TResult>(
            methodName: string,
            ...args: any[]): LoDashImplicitArrayWrapper<TResult>;

        /**
        * @see _.invokeMap
        **/
        invokeMap<TResult>(
            method: (...args: any[]) => TResult,
            ...args: any[]): LoDashImplicitArrayWrapper<TResult>;
    }
    
    interface LoDashExplicitArrayWrapper<T> {
        /**
        * @see _.invokeMap
        **/
        invokeMap<TResult>(
            methodName: string,
            ...args: any[]): LoDashExplicitArrayWrapper<TResult>;

        /**
        * @see _.invokeMap
        **/
        invokeMap<TResult>(
            method: (...args: any[]) => TResult,
            ...args: any[]): LoDashExplicitArrayWrapper<TResult>;
    }
    
    interface LoDashExplicitObjectWrapper<T> {
        /**
        * @see _.invokeMap
        **/
        invokeMap<TResult>(
            methodName: string,
            ...args: any[]): LoDashExplicitArrayWrapper<TResult>;

        /**
        * @see _.invokeMap
        **/
        invokeMap<TResult>(
            method: (...args: any[]) => TResult,
            ...args: any[]): LoDashExplicitArrayWrapper<TResult>;
    }

    //_.map
    interface LoDashStatic {
        /**
         * Creates an array of values by running each element in collection through iteratee. The iteratee is bound to
         * thisArg and invoked with three arguments: (value, index|key, collection).
         *
         * If a property name is provided for iteratee the created _.property style callback returns the property value
         * of the given element.
         *
         * If a value is also provided for thisArg the created _.matchesProperty style callback returns true for
         * elements that have a matching property value, else false.
         *
         * If an object is provided for iteratee the created _.matches style callback returns true for elements that
         * have the properties of the given object, else false.
         *
         * Many lodash methods are guarded to work as iteratees for methods like _.every, _.filter, _.map, _.mapValues,
         * _.reject, and _.some.
         *
         * The guarded methods are:
         * ary, callback, chunk, clone, create, curry, curryRight, drop, dropRight, every, fill, flatten, invert, max,
         * min, parseInt, slice, sortBy, take, takeRight, template, trim, trimLeft, trimRight, trunc, random, range,
         * sample, some, sum, uniq, and words
         *
         * @param collection The collection to iterate over.
         * @param iteratee The function invoked per iteration.
         * @param thisArg The this binding of iteratee.
         * @return Returns the new mapped array.
         */
        map<T, TResult>(
            collection: List<T>,
            iteratee?: ListIterator<T, TResult>,
            thisArg?: any
        ): TResult[];

        /**
         * @see _.map
         */
        map<T extends {}, TResult>(
            collection: Dictionary<T>,
            iteratee?: DictionaryIterator<T, TResult>,
            thisArg?: any
        ): TResult[];

        /**
         * @see _.map
         */
        map<T, TResult>(
            collection: List<T>|Dictionary<T>,
            iteratee?: string
        ): TResult[];

        /**
         * @see _.map
         */
        map<T, TObject extends {}>(
            collection: List<T>|Dictionary<T>,
            iteratee?: TObject
        ): boolean[];
    }

    interface LoDashImplicitArrayWrapper<T> {
        /**
         * @see _.map
         */
        map<TResult>(
            iteratee?: ListIterator<T, TResult>,
            thisArg?: any
        ): LoDashImplicitArrayWrapper<TResult>;

        /**
         * @see _.map
         */
        map<TResult>(
            iteratee?: string
        ): LoDashImplicitArrayWrapper<TResult>;

        /**
         * @see _.map
         */
        map<TObject extends {}>(
            iteratee?: TObject
        ): LoDashImplicitArrayWrapper<boolean>;
    }

    interface LoDashImplicitObjectWrapper<T> {
        /**
         * @see _.map
         */
        map<TValue, TResult>(
            iteratee?: ListIterator<TValue, TResult>|DictionaryIterator<TValue, TResult>,
            thisArg?: any
        ): LoDashImplicitArrayWrapper<TResult>;

        /**
         * @see _.map
         */
        map<TValue, TResult>(
            iteratee?: string
        ): LoDashImplicitArrayWrapper<TResult>;

        /**
         * @see _.map
         */
        map<TObject extends {}>(
            iteratee?: TObject
        ): LoDashImplicitArrayWrapper<boolean>;
    }

    interface LoDashExplicitArrayWrapper<T> {
        /**
         * @see _.map
         */
        map<TResult>(
            iteratee?: ListIterator<T, TResult>,
            thisArg?: any
        ): LoDashExplicitArrayWrapper<TResult>;

        /**
         * @see _.map
         */
        map<TResult>(
            iteratee?: string
        ): LoDashExplicitArrayWrapper<TResult>;

        /**
         * @see _.map
         */
        map<TObject extends {}>(
            iteratee?: TObject
        ): LoDashExplicitArrayWrapper<boolean>;
    }

    interface LoDashExplicitObjectWrapper<T> {
        /**
         * @see _.map
         */
        map<TValue, TResult>(
            iteratee?: ListIterator<TValue, TResult>|DictionaryIterator<TValue, TResult>,
            thisArg?: any
        ): LoDashExplicitArrayWrapper<TResult>;

        /**
         * @see _.map
         */
        map<TValue, TResult>(
            iteratee?: string
        ): LoDashExplicitArrayWrapper<TResult>;

        /**
         * @see _.map
         */
        map<TObject extends {}>(
            iteratee?: TObject
        ): LoDashExplicitArrayWrapper<boolean>;
    }

    //_.partition
    interface LoDashStatic {
        /**
        * Creates an array of elements split into two groups, the first of which contains elements predicate returns truthy for,
        * while the second of which contains elements predicate returns falsey for.
        * The predicate is bound to thisArg and invoked with three arguments: (value, index|key, collection).
        *
        * If a property name is provided for predicate the created _.property style callback
        * returns the property value of the given element.
        *
        * If a value is also provided for thisArg the created _.matchesProperty style callback
        * returns true for elements that have a matching property value, else false.
        *
        * If an object is provided for predicate the created _.matches style callback returns
        * true for elements that have the properties of the given object, else false.
        *
        * @param collection The collection to iterate over.
        * @param callback The function called per iteration.
        * @param thisArg The this binding of predicate.
        * @return Returns the array of grouped elements.
        **/
        partition<T>(
            collection: List<T>,
            callback: ListIterator<T, boolean>,
            thisArg?: any): T[][];

        /**
         * @see _.partition
         **/
        partition<T>(
            collection: Dictionary<T>,
            callback: DictionaryIterator<T, boolean>,
            thisArg?: any): T[][];

        /**
         * @see _.partition
         **/
        partition<W, T>(
            collection: List<T>,
            whereValue: W): T[][];

        /**
         * @see _.partition
         **/
        partition<W, T>(
            collection: Dictionary<T>,
            whereValue: W): T[][];

        /**
         * @see _.partition
         **/
        partition<T>(
            collection: List<T>,
            path: string,
            srcValue: any): T[][];

        /**
         * @see _.partition
         **/
        partition<T>(
            collection: Dictionary<T>,
            path: string,
            srcValue: any): T[][];

        /**
         * @see _.partition
         **/
        partition<T>(
            collection: List<T>,
            pluckValue: string): T[][];

        /**
         * @see _.partition
         **/
        partition<T>(
            collection: Dictionary<T>,
            pluckValue: string): T[][];
    }

    interface LoDashImplicitStringWrapper {
        /**
         * @see _.partition
         */
        partition(
            callback: ListIterator<string, boolean>,
            thisArg?: any): LoDashImplicitArrayWrapper<string[]>;
    }

    interface LoDashImplicitArrayWrapper<T> {
        /**
         * @see _.partition
         */
        partition(
            callback: ListIterator<T, boolean>,
            thisArg?: any): LoDashImplicitArrayWrapper<T[]>;
        /**
         * @see _.partition
         */
        partition<W>(
            whereValue: W): LoDashImplicitArrayWrapper<T[]>;
        /**
         * @see _.partition
         */
        partition(
            path: string,
            srcValue: any): LoDashImplicitArrayWrapper<T[]>;
        /**
         * @see _.partition
         */
        partition(
            pluckValue: string): LoDashImplicitArrayWrapper<T[]>;
    }

    interface LoDashImplicitObjectWrapper<T> {
        /**
         * @see _.partition
         */
        partition<TResult>(
            callback: ListIterator<TResult, boolean>,
            thisArg?: any): LoDashImplicitArrayWrapper<TResult[]>;

        /**
         * @see _.partition
         */
        partition<TResult>(
            callback: DictionaryIterator<TResult, boolean>,
            thisArg?: any): LoDashImplicitArrayWrapper<TResult[]>;

        /**
         * @see _.partition
         */
        partition<W, TResult>(
            whereValue: W): LoDashImplicitArrayWrapper<TResult[]>;

        /**
         * @see _.partition
         */
        partition<TResult>(
            path: string,
            srcValue: any): LoDashImplicitArrayWrapper<TResult[]>;

        /**
         * @see _.partition
         */
        partition<TResult>(
            pluckValue: string): LoDashImplicitArrayWrapper<TResult[]>;
    }

    //_.reduce
    interface LoDashStatic {
        /**
        * Reduces a collection to a value which is the accumulated result of running each
        * element in the collection through the callback, where each successive callback execution
        * consumes the return value of the previous execution. If accumulator is not provided the
        * first element of the collection will be used as the initial accumulator value. The callback
        * is bound to thisArg and invoked with four arguments; (accumulator, value, index|key, collection).
        * @param collection The collection to iterate over.
        * @param callback The function called per iteration.
        * @param accumulator Initial value of the accumulator.
        * @param thisArg The this binding of callback.
        * @return Returns the accumulated value.
        **/
        reduce<T, TResult>(
            collection: Array<T>,
            callback: MemoIterator<T, TResult>,
            accumulator: TResult,
            thisArg?: any): TResult;

        /**
        * @see _.reduce
        **/
        reduce<T, TResult>(
            collection: List<T>,
            callback: MemoIterator<T, TResult>,
            accumulator: TResult,
            thisArg?: any): TResult;

        /**
        * @see _.reduce
        **/
        reduce<T, TResult>(
            collection: Dictionary<T>,
            callback: MemoIterator<T, TResult>,
            accumulator: TResult,
            thisArg?: any): TResult;

        /**
        * @see _.reduce
        **/
        reduce<T, TResult>(
            collection: Array<T>,
            callback: MemoIterator<T, TResult>,
            thisArg?: any): TResult;

        /**
        * @see _.reduce
        **/
        reduce<T, TResult>(
            collection: List<T>,
            callback: MemoIterator<T, TResult>,
            thisArg?: any): TResult;

        /**
        * @see _.reduce
        **/
        reduce<T, TResult>(
            collection: Dictionary<T>,
            callback: MemoIterator<T, TResult>,
            thisArg?: any): TResult;

    }

    interface LoDashImplicitArrayWrapper<T> {
         /**
        * @see _.reduce
        **/
        reduce<TResult>(
            callback: MemoIterator<T, TResult>,
            accumulator: TResult,
            thisArg?: any): TResult;

        /**
        * @see _.reduce
        **/
        reduce<TResult>(
            callback: MemoIterator<T, TResult>,
            thisArg?: any): TResult;
    }

    interface LoDashImplicitObjectWrapper<T> {
         /**
        * @see _.reduce
        **/
        reduce<TValue, TResult>(
            callback: MemoIterator<TValue, TResult>,
            accumulator: TResult,
            thisArg?: any): TResult;

        /**
        * @see _.reduce
        **/
        reduce<TValue, TResult>(
            callback: MemoIterator<TValue, TResult>,
            thisArg?: any): TResult;
    }

    //_.reduceRight
    interface LoDashStatic {
        /**
        * This method is like _.reduce except that it iterates over elements of a collection from
        * right to left.
        * @param collection The collection to iterate over.
        * @param callback The function called per iteration.
        * @param accumulator Initial value of the accumulator.
        * @param thisArg The this binding of callback.
        * @return The accumulated value.
        **/
        reduceRight<T, TResult>(
            collection: Array<T>,
            callback: MemoIterator<T, TResult>,
            accumulator: TResult,
            thisArg?: any): TResult;

        /**
        * @see _.reduceRight
        **/
        reduceRight<T, TResult>(
            collection: List<T>,
            callback: MemoIterator<T, TResult>,
            accumulator: TResult,
            thisArg?: any): TResult;

        /**
        * @see _.reduceRight
        **/
        reduceRight<T, TResult>(
            collection: Dictionary<T>,
            callback: MemoIterator<T, TResult>,
            accumulator: TResult,
            thisArg?: any): TResult;

        /**
        * @see _.reduceRight
        **/
        reduceRight<T, TResult>(
            collection: Array<T>,
            callback: MemoIterator<T, TResult>,
            thisArg?: any): TResult;

        /**
        * @see _.reduceRight
        **/
        reduceRight<T, TResult>(
            collection: List<T>,
            callback: MemoIterator<T, TResult>,
            thisArg?: any): TResult;

        /**
        * @see _.reduceRight
        **/
        reduceRight<T, TResult>(
            collection: Dictionary<T>,
            callback: MemoIterator<T, TResult>,
            thisArg?: any): TResult;
    }

    //_.reject
    interface LoDashStatic {
        /**
         * The opposite of _.filter; this method returns the elements of collection that predicate does not return
         * truthy for.
         *
         * @param collection The collection to iterate over.
         * @param predicate The function invoked per iteration.
         * @param thisArg The this binding of predicate.
         * @return Returns the new filtered array.
         */
        reject<T>(
            collection: List<T>,
            predicate?: ListIterator<T, boolean>,
            thisArg?: any
        ): T[];

        /**
         * @see _.reject
         */
        reject<T>(
            collection: Dictionary<T>,
            predicate?: DictionaryIterator<T, boolean>,
            thisArg?: any
        ): T[];

        /**
         * @see _.reject
         */
        reject(
            collection: string,
            predicate?: StringIterator<boolean>,
            thisArg?: any
        ): string[];

        /**
         * @see _.reject
         */
        reject<T>(
            collection: List<T>|Dictionary<T>,
            predicate: string,
            thisArg?: any
        ): T[];

        /**
         * @see _.reject
         */
        reject<W extends {}, T>(
            collection: List<T>|Dictionary<T>,
            predicate: W
        ): T[];
    }

    interface LoDashImplicitWrapper<T> {
        /**
         * @see _.reject
         */
        reject(
            predicate?: StringIterator<boolean>,
            thisArg?: any
        ): LoDashImplicitArrayWrapper<string>;
    }

    interface LoDashImplicitArrayWrapper<T> {
        /**
         * @see _.reject
         */
        reject(
            predicate: ListIterator<T, boolean>,
            thisArg?: any
        ): LoDashImplicitArrayWrapper<T>;

        /**
         * @see _.reject
         */
        reject(
            predicate: string,
            thisArg?: any
        ): LoDashImplicitArrayWrapper<T>;

        /**
         * @see _.reject
         */
        reject<W>(predicate: W): LoDashImplicitArrayWrapper<T>;
    }

    interface LoDashImplicitObjectWrapper<T> {
        /**
         * @see _.reject
         */
        reject<T>(
            predicate: ListIterator<T, boolean>|DictionaryIterator<T, boolean>,
            thisArg?: any
        ): LoDashImplicitArrayWrapper<T>;

        /**
         * @see _.reject
         */
        reject<T>(
            predicate: string,
            thisArg?: any
        ): LoDashImplicitArrayWrapper<T>;

        /**
         * @see _.reject
         */
        reject<W, T>(predicate: W): LoDashImplicitArrayWrapper<T>;
    }

    interface LoDashExplicitWrapper<T> {
        /**
         * @see _.reject
         */
        reject(
            predicate?: StringIterator<boolean>,
            thisArg?: any
        ): LoDashExplicitArrayWrapper<string>;
    }

    interface LoDashExplicitArrayWrapper<T> {
        /**
         * @see _.reject
         */
        reject(
            predicate: ListIterator<T, boolean>,
            thisArg?: any
        ): LoDashExplicitArrayWrapper<T>;

        /**
         * @see _.reject
         */
        reject(
            predicate: string,
            thisArg?: any
        ): LoDashExplicitArrayWrapper<T>;

        /**
         * @see _.reject
         */
        reject<W>(predicate: W): LoDashExplicitArrayWrapper<T>;
    }

    interface LoDashExplicitObjectWrapper<T> {
        /**
         * @see _.reject
         */
        reject<T>(
            predicate: ListIterator<T, boolean>|DictionaryIterator<T, boolean>,
            thisArg?: any
        ): LoDashExplicitArrayWrapper<T>;

        /**
         * @see _.reject
         */
        reject<T>(
            predicate: string,
            thisArg?: any
        ): LoDashExplicitArrayWrapper<T>;

        /**
         * @see _.reject
         */
        reject<W, T>(predicate: W): LoDashExplicitArrayWrapper<T>;
    }

    //_.sample
    interface LoDashStatic {
        /**
         * Gets a random element from `collection`.
         *
         * @static
         * @memberOf _
         * @category Collection
         * @param {Array|Object} collection The collection to sample.
         * @returns {*} Returns the random element.
         * @example
         *
         * _.sample([1, 2, 3, 4]);
         * // => 2
         */
        sample<T>(collection: Array<T>): T;

        /**
        * @see _.sample
        **/
        sample<T>(collection: List<T>): T;

        /**
        * @see _.sample
        **/
        sample<T>(collection: Dictionary<T>): T;
    }

    interface LoDashImplicitArrayWrapper<T> {
        /**
         * @see _.sample
         **/
        sample(): LoDashImplicitWrapper<T>;
    }

    //_.sampleSize
    interface LoDashStatic {
        /**
         * Gets `n` random elements from `collection`.
         *
         * @static
         * @memberOf _
         * @category Collection
         * @param {Array|Object} collection The collection to sample.
         * @param {number} [n=0] The number of elements to sample.
         * @returns {Array} Returns the random elements.
         * @example
         *
         * _.sampleSize([1, 2, 3, 4], 2);
         * // => [3, 1]
         */
        sampleSize<T>(collection: Array<T>, n: number): T[];

        /**
        * @see _.sampleSize
        **/
        sampleSize<T>(collection: List<T>, n: number): T[];

        /**
        * @see _.sampleSize
        **/
        sampleSize<T>(collection: Dictionary<T>, n: number): T[];
    }

    interface LoDashImplicitArrayWrapper<T> {
        /**
         * @see _.sampleSize
         **/
        sampleSize(n: number): LoDashImplicitArrayWrapper<T>;

        /**
         * @see _.sampleSize
         **/
        sampleSize(): LoDashImplicitWrapper<T>;
    }

    //_.shuffle
    interface LoDashStatic {
        /**
         * Creates an array of shuffled values, using a version of the Fisher-Yates shuffle.
         *
         * @param collection The collection to shuffle.
         * @return Returns the new shuffled array.
         */
        shuffle<T>(collection: List<T>|Dictionary<T>): T[];

        /**
         * @see _.shuffle
         */
        shuffle(collection: string): string[];
    }

    interface LoDashImplicitWrapper<T> {
        /**
         * @see _.shuffle
         */
        shuffle(): LoDashImplicitArrayWrapper<string>;
    }

    interface LoDashImplicitArrayWrapper<T> {
        /**
         * @see _.shuffle
         */
        shuffle(): LoDashImplicitArrayWrapper<T>;
    }

    interface LoDashImplicitObjectWrapper<T> {
        /**
         * @see _.shuffle
         */
        shuffle<T>(): LoDashImplicitArrayWrapper<T>;
    }

    interface LoDashExplicitWrapper<T> {
        /**
         * @see _.shuffle
         */
        shuffle(): LoDashExplicitArrayWrapper<string>;
    }

    interface LoDashExplicitArrayWrapper<T> {
        /**
         * @see _.shuffle
         */
        shuffle(): LoDashExplicitArrayWrapper<T>;
    }

    interface LoDashExplicitObjectWrapper<T> {
        /**
         * @see _.shuffle
         */
        shuffle<T>(): LoDashExplicitArrayWrapper<T>;
    }

    //_.size
    interface LoDashStatic {
        /**
         * Gets the size of collection by returning its length for array-like values or the number of own enumerable
         * properties for objects.
         *
         * @param collection The collection to inspect.
         * @return Returns the size of collection.
         */
        size<T>(collection: List<T>|Dictionary<T>): number;

        /**
         * @see _.size
         */
        size(collection: string): number;
    }

    interface LoDashImplicitWrapper<T> {
        /**
         * @see _.size
         */
        size(): number;
    }

    interface LoDashImplicitArrayWrapper<T> {
        /**
         * @see _.size
         */
        size(): number;
    }

    interface LoDashImplicitObjectWrapper<T> {
        /**
         * @see _.size
         */
        size(): number;
    }

    interface LoDashExplicitWrapper<T> {
        /**
         * @see _.size
         */
        size(): LoDashExplicitWrapper<number>;
    }

    interface LoDashExplicitArrayWrapper<T> {
        /**
         * @see _.size
         */
        size(): LoDashExplicitWrapper<number>;
    }

    interface LoDashExplicitObjectWrapper<T> {
        /**
         * @see _.size
         */
        size(): LoDashExplicitWrapper<number>;
    }

    //_.some
    interface LoDashStatic {
        /**
         * Checks if predicate returns truthy for any element of collection. The function returns as soon as it finds
         * a passing value and does not iterate over the entire collection. The predicate is bound to thisArg and
         * invoked with three arguments: (value, index|key, collection).
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
         * @param collection The collection to iterate over.
         * @param predicate The function invoked per iteration.
         * @param thisArg The this binding of predicate.
         * @return Returns true if any element passes the predicate check, else false.
         */
        some<T>(
            collection: List<T>,
            predicate?: ListIterator<T, boolean>,
            thisArg?: any
        ): boolean;

        /**
         * @see _.some
         */
        some<T>(
            collection: Dictionary<T>,
            predicate?: DictionaryIterator<T, boolean>,
            thisArg?: any
        ): boolean;

        /**
         * @see _.some
         */
        some<T>(
            collection: NumericDictionary<T>,
            predicate?: NumericDictionaryIterator<T, boolean>,
            thisArg?: any
        ): boolean;

        /**
         * @see _.some
         */
        some<T>(
            collection: List<T>|Dictionary<T>|NumericDictionary<T>,
            predicate?: string,
            thisArg?: any
        ): boolean;

        /**
         * @see _.some
         */
        some<TObject extends {}, T>(
            collection: List<T>|Dictionary<T>|NumericDictionary<T>,
            predicate?: TObject
        ): boolean;
    }

    interface LoDashImplicitArrayWrapper<T> {
        /**
         * @see _.some
         */
        some(
            predicate?: ListIterator<T, boolean>|NumericDictionaryIterator<T, boolean>,
            thisArg?: any
        ): boolean;

        /**
         * @see _.some
         */
        some(
            predicate?: string,
            thisArg?: any
        ): boolean;

        /**
         * @see _.some
         */
        some<TObject extends {}>(
            predicate?: TObject
        ): boolean;
    }

    interface LoDashImplicitObjectWrapper<T> {
        /**
         * @see _.some
         */
        some<TResult>(
            predicate?: ListIterator<TResult, boolean>|DictionaryIterator<TResult, boolean>|NumericDictionaryIterator<T, boolean>,
            thisArg?: any
        ): boolean;

        /**
         * @see _.some
         */
        some(
            predicate?: string,
            thisArg?: any
        ): boolean;

        /**
         * @see _.some
         */
        some<TObject extends {}>(
            predicate?: TObject
        ): boolean;
    }

    interface LoDashExplicitArrayWrapper<T> {
        /**
         * @see _.some
         */
        some(
            predicate?: ListIterator<T, boolean>|NumericDictionaryIterator<T, boolean>,
            thisArg?: any
        ): LoDashExplicitWrapper<boolean>;

        /**
         * @see _.some
         */
        some(
            predicate?: string,
            thisArg?: any
        ): LoDashExplicitWrapper<boolean>;

        /**
         * @see _.some
         */
        some<TObject extends {}>(
            predicate?: TObject
        ): LoDashExplicitWrapper<boolean>;
    }

    interface LoDashExplicitObjectWrapper<T> {
        /**
         * @see _.some
         */
        some<TResult>(
            predicate?: ListIterator<TResult, boolean>|DictionaryIterator<TResult, boolean>|NumericDictionaryIterator<T, boolean>,
            thisArg?: any
        ): LoDashExplicitWrapper<boolean>;

        /**
         * @see _.some
         */
        some(
            predicate?: string,
            thisArg?: any
        ): LoDashExplicitWrapper<boolean>;

        /**
         * @see _.some
         */
        some<TObject extends {}>(
            predicate?: TObject
        ): LoDashExplicitWrapper<boolean>;
    }

    //_.sortBy
    interface LoDashStatic {
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
        sortBy<T, TSort>(
            collection: List<T>,
            iteratee?: ListIterator<T, TSort>
        ): T[];

        /**
         * @see _.sortBy
         */
        sortBy<T, TSort>(
            collection: Dictionary<T>,
            iteratee?: DictionaryIterator<T, TSort>
        ): T[];

        /**
         * @see _.sortBy
         */
        sortBy<T>(
            collection: List<T>|Dictionary<T>,
            iteratee: string
        ): T[];

        /**
         * @see _.sortBy
         */
        sortBy<W extends {}, T>(
            collection: List<T>|Dictionary<T>,
            whereValue: W
        ): T[];

        /**
         * @see _.sortBy
         */
        sortBy<T>(
            collection: List<T>|Dictionary<T>
        ): T[];

        /**
         * @see _.sortBy
         */
        sortBy<T>(
            collection: (Array<T>|List<T>),
            iteratees: (ListIterator<T, any>|string|Object)[]): T[];

        /**
         * @see _.sortBy
         */
        sortBy<T>(
            collection: (Array<T>|List<T>),
            ...iteratees: (ListIterator<T, boolean>|Object|string)[]): T[];
    }

    interface LoDashImplicitArrayWrapper<T> {
        /**
         * @see _.sortBy
         */
        sortBy<TSort>(
            iteratee?: ListIterator<T, TSort>
        ): LoDashImplicitArrayWrapper<T>;

        /**
         * @see _.sortBy
         */
        sortBy(iteratee: string): LoDashImplicitArrayWrapper<T>;

        /**
         * @see _.sortBy
         */
        sortBy<W extends {}>(whereValue: W): LoDashImplicitArrayWrapper<T>;

        /**
         * @see _.sortBy
         */
        sortBy(): LoDashImplicitArrayWrapper<T>;

        /**
         * @see _.sortBy
         */
        sortBy(...iteratees: (ListIterator<T, boolean>|Object|string)[]): LoDashImplicitArrayWrapper<T>;

        /**
        * @see _.sortBy
        **/
        sortBy(iteratees: (ListIterator<T, any>|string|Object)[]): LoDashImplicitArrayWrapper<T>;
    }

    interface LoDashImplicitObjectWrapper<T> {
        /**
         * @see _.sortBy
         */
        sortBy<T, TSort>(
            iteratee?: ListIterator<T, TSort>|DictionaryIterator<T, TSort>
        ): LoDashImplicitArrayWrapper<T>;

        /**
         * @see _.sortBy
         */
        sortBy<T>(iteratee: string): LoDashImplicitArrayWrapper<T>;

        /**
         * @see _.sortBy
         */
        sortBy<W extends {}, T>(whereValue: W): LoDashImplicitArrayWrapper<T>;

        /**
         * @see _.sortBy
         */
        sortBy<T>(): LoDashImplicitArrayWrapper<T>;
    }

    interface LoDashExplicitArrayWrapper<T> {
        /**
         * @see _.sortBy
         */
        sortBy<TSort>(
            iteratee?: ListIterator<T, TSort>
        ): LoDashExplicitArrayWrapper<T>;

        /**
         * @see _.sortBy
         */
        sortBy(iteratee: string): LoDashExplicitArrayWrapper<T>;

        /**
         * @see _.sortBy
         */
        sortBy<W extends {}>(whereValue: W): LoDashExplicitArrayWrapper<T>;

        /**
         * @see _.sortBy
         */
        sortBy(): LoDashExplicitArrayWrapper<T>;
    }

    interface LoDashExplicitObjectWrapper<T> {
        /**
         * @see _.sortBy
         */
        sortBy<T, TSort>(
            iteratee?: ListIterator<T, TSort>|DictionaryIterator<T, TSort>
        ): LoDashExplicitArrayWrapper<T>;

        /**
         * @see _.sortBy
         */
        sortBy<T>(iteratee: string): LoDashExplicitArrayWrapper<T>;

        /**
         * @see _.sortBy
         */
        sortBy<W extends {}, T>(whereValue: W): LoDashExplicitArrayWrapper<T>;

        /**
         * @see _.sortBy
         */
        sortBy<T>(): LoDashExplicitArrayWrapper<T>;
    }

    //_.orderBy
    interface LoDashStatic {
        /**
         * This method is like `_.sortBy` except that it allows specifying the sort
         * orders of the iteratees to sort by. If `orders` is unspecified, all values
         * are sorted in ascending order. Otherwise, specify an order of "desc" for
         * descending or "asc" for ascending sort order of corresponding values.
         *
         * @static
         * @memberOf _
         * @category Collection
         * @param {Array|Object} collection The collection to iterate over.
         * @param {Function[]|Object[]|string[]} [iteratees=[_.identity]] The iteratees to sort by.
         * @param {string[]} [orders] The sort orders of `iteratees`.
         * @param- {Object} [guard] Enables use as an iteratee for functions like `_.reduce`.
         * @returns {Array} Returns the new sorted array.
         * @example
         *
         * var users = [
         *   { 'user': 'fred',   'age': 48 },
         *   { 'user': 'barney', 'age': 34 },
         *   { 'user': 'fred',   'age': 42 },
         *   { 'user': 'barney', 'age': 36 }
         * ];
         *
         * // sort by `user` in ascending order and by `age` in descending order
         * _.orderBy(users, ['user', 'age'], ['asc', 'desc']);
         * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 42]]
         */
        orderBy<W extends Object, T>(
            collection: List<T>,
            iteratees: ListIterator<T, any>|string|W|(ListIterator<T, any>|string|W)[],
            orders?: boolean|string|(boolean|string)[]
        ): T[];

        /**
         * @see _.orderBy
         */
        orderBy<T>(
            collection: List<T>,
            iteratees: ListIterator<T, any>|string|Object|(ListIterator<T, any>|string|Object)[],
            orders?: boolean|string|(boolean|string)[]
        ): T[];

        /**
         * @see _.orderBy
         */
        orderBy<W extends Object, T>(
            collection: NumericDictionary<T>,
            iteratees: NumericDictionaryIterator<T, any>|string|W|(NumericDictionaryIterator<T, any>|string|W)[],
            orders?: boolean|string|(boolean|string)[]
        ): T[];

        /**
         * @see _.orderBy
         */
        orderBy<T>(
            collection: NumericDictionary<T>,
            iteratees: NumericDictionaryIterator<T, any>|string|Object|(NumericDictionaryIterator<T, any>|string|Object)[],
            orders?: boolean|string|(boolean|string)[]
        ): T[];

        /**
         * @see _.orderBy
         */
        orderBy<W extends Object, T>(
            collection: Dictionary<T>,
            iteratees: DictionaryIterator<T, any>|string|W|(DictionaryIterator<T, any>|string|W)[],
            orders?: boolean|string|(boolean|string)[]
        ): T[];

        /**
         * @see _.orderBy
         */
        orderBy<T>(
            collection: Dictionary<T>,
            iteratees: DictionaryIterator<T, any>|string|Object|(DictionaryIterator<T, any>|string|Object)[],
            orders?: boolean|string|(boolean|string)[]
        ): T[];
    }

    interface LoDashImplicitWrapper<T> {
        /**
         * @see _.orderBy
         */
        orderBy(
            iteratees: ListIterator<T, any>|string|(ListIterator<T, any>|string)[],
            orders?: boolean|string|(boolean|string)[]
        ): LoDashImplicitArrayWrapper<T>;
    }

    interface LoDashImplicitArrayWrapper<T> {
        /**
         * @see _.orderBy
         */
        orderBy<W extends Object>(
            iteratees: ListIterator<T, any>|string|W|(ListIterator<T, any>|string|W)[],
            orders?: boolean|string|(boolean|string)[]
        ): LoDashImplicitArrayWrapper<T>;
    }

    interface LoDashImplicitObjectWrapper<T> {
        /**
         * @see _.orderBy
         */
        orderBy<W extends Object, T>(
            iteratees: ListIterator<T, any>|string|W|(ListIterator<T, any>|string|W)[],
            orders?: boolean|string|(boolean|string)[]
        ): LoDashImplicitArrayWrapper<T>;

        /**
         * @see _.orderBy
         */
        orderBy<T>(
            iteratees: ListIterator<T, any>|string|Object|(ListIterator<T, any>|string|Object)[],
            orders?: boolean|string|(boolean|string)[]
        ): LoDashImplicitArrayWrapper<T>;

        /**
         * @see _.orderBy
         */
        orderBy<W extends Object, T>(
            iteratees: NumericDictionaryIterator<T, any>|string|W|(NumericDictionaryIterator<T, any>|string|W)[],
            orders?: boolean|string|(boolean|string)[]
        ): LoDashImplicitArrayWrapper<T>;

        /**
         * @see _.orderBy
         */
        orderBy<T>(
            iteratees: NumericDictionaryIterator<T, any>|string|Object|(NumericDictionaryIterator<T, any>|string|Object)[],
            orders?: boolean|string|(boolean|string)[]
        ): LoDashImplicitArrayWrapper<T>;

        /**
         * @see _.orderBy
         */
        orderBy<W extends Object, T>(
            iteratees: DictionaryIterator<T, any>|string|W|(DictionaryIterator<T, any>|string|W)[],
            orders?: boolean|string|(boolean|string)[]
        ): LoDashImplicitArrayWrapper<T>;

        /**
         * @see _.orderBy
         */
        orderBy<T>(
            iteratees: DictionaryIterator<T, any>|string|Object|(DictionaryIterator<T, any>|string|Object)[],
            orders?: boolean|string|(boolean|string)[]
        ): LoDashImplicitArrayWrapper<T>;
    }

    interface LoDashExplicitWrapper<T> {
        /**
         * @see _.orderBy
         */
        orderBy(
            iteratees: ListIterator<T, any>|string|(ListIterator<T, any>|string)[],
            orders?: boolean|string|(boolean|string)[]
        ): LoDashExplicitArrayWrapper<T>;
    }

    interface LoDashExplicitArrayWrapper<T> {
        /**
         * @see _.orderBy
         */
        orderBy<W extends Object>(
            iteratees: ListIterator<T, any>|string|W|(ListIterator<T, any>|string|W)[],
            orders?: boolean|string|(boolean|string)[]
        ): LoDashExplicitArrayWrapper<T>;
    }

    interface LoDashExplicitObjectWrapper<T> {
        /**
         * @see _.orderBy
         */
        orderBy<W extends Object, T>(
            iteratees: ListIterator<T, any>|string|W|(ListIterator<T, any>|string|W)[],
            orders?: boolean|string|(boolean|string)[]
        ): LoDashExplicitArrayWrapper<T>;

        /**
         * @see _.orderBy
         */
        orderBy<T>(
            iteratees: ListIterator<T, any>|string|Object|(ListIterator<T, any>|string|Object)[],
            orders?: boolean|string|(boolean|string)[]
        ): LoDashExplicitArrayWrapper<T>;

        /**
         * @see _.orderBy
         */
        orderBy<W extends Object, T>(
            iteratees: NumericDictionaryIterator<T, any>|string|W|(NumericDictionaryIterator<T, any>|string|W)[],
            orders?: boolean|string|(boolean|string)[]
        ): LoDashExplicitArrayWrapper<T>;

        /**
         * @see _.orderBy
         */
        orderBy<T>(
            iteratees: NumericDictionaryIterator<T, any>|string|Object|(NumericDictionaryIterator<T, any>|string|Object)[],
            orders?: boolean|string|(boolean|string)[]
        ): LoDashExplicitArrayWrapper<T>;

        /**
         * @see _.orderBy
         */
        orderBy<W extends Object, T>(
            iteratees: DictionaryIterator<T, any>|string|W|(DictionaryIterator<T, any>|string|W)[],
            orders?: boolean|string|(boolean|string)[]
        ): LoDashExplicitArrayWrapper<T>;

        /**
         * @see _.orderBy
         */
        orderBy<T>(
            iteratees: DictionaryIterator<T, any>|string|Object|(DictionaryIterator<T, any>|string|Object)[],
            orders?: boolean|string|(boolean|string)[]
        ): LoDashExplicitArrayWrapper<T>;
    }

    /********
     * Date *
     ********/

    //_.now
    interface LoDashStatic {
        /**
         * Gets the number of milliseconds that have elapsed since the Unix epoch (1 January 1970 00:00:00 UTC).
         *
         * @return The number of milliseconds.
         */
        now(): number;
    }

    interface LoDashImplicitWrapperBase<T, TWrapper> {
        /**
         * @see _.now
         */
        now(): number;
    }

    interface LoDashExplicitWrapperBase<T, TWrapper> {
        /**
         * @see _.now
         */
        now(): LoDashExplicitWrapper<number>;
    }

    /*************
     * Functions *
     *************/

    //_.after
    interface LoDashStatic {
        /**
         * The opposite of _.before; this method creates a function that invokes func once it’s called n or more times.
         *
         * @param n The number of calls before func is invoked.
         * @param func The function to restrict.
         * @return Returns the new restricted function.
         */
        after<TFunc extends Function>(
            n: number,
            func: TFunc
        ): TFunc;
    }

    interface LoDashImplicitWrapper<T> {
        /**
        * @see _.after
        **/
        after<TFunc extends Function>(func: TFunc): LoDashImplicitObjectWrapper<TFunc>;
    }

    interface LoDashExplicitWrapper<T> {
        /**
         * @see _.after
         **/
        after<TFunc extends Function>(func: TFunc): LoDashExplicitObjectWrapper<TFunc>;
    }

    //_.ary
    interface LoDashStatic {
        /**
         * Creates a function that accepts up to n arguments ignoring any additional arguments.
         *
         * @param func The function to cap arguments for.
         * @param n The arity cap.
         * @returns Returns the new function.
         */
        ary<TResult extends Function>(
            func: Function,
            n?: number
        ): TResult;

        ary<T extends Function, TResult extends Function>(
            func: T,
            n?: number
        ): TResult;
    }

    interface LoDashImplicitObjectWrapper<T> {
        /**
         * @see _.ary
         */
        ary<TResult extends Function>(n?: number): LoDashImplicitObjectWrapper<TResult>;
    }

    interface LoDashExplicitObjectWrapper<T> {
        /**
         * @see _.ary
         */
        ary<TResult extends Function>(n?: number): LoDashExplicitObjectWrapper<TResult>;
    }

    //_.before
    interface LoDashStatic {
        /**
         * Creates a function that invokes func, with the this binding and arguments of the created function, while
         * it’s called less than n times. Subsequent calls to the created function return the result of the last func
         * invocation.
         *
         * @param n The number of calls at which func is no longer invoked.
         * @param func The function to restrict.
         * @return Returns the new restricted function.
         */
        before<TFunc extends Function>(
            n: number,
            func: TFunc
        ): TFunc;
    }

    interface LoDashImplicitWrapper<T> {
        /**
         * @see _.before
         **/
        before<TFunc extends Function>(func: TFunc): LoDashImplicitObjectWrapper<TFunc>;
    }

    interface LoDashExplicitWrapper<T> {
        /**
         * @see _.before
         **/
        before<TFunc extends Function>(func: TFunc): LoDashExplicitObjectWrapper<TFunc>;
    }

    //_.bind
    interface FunctionBind {
        placeholder: any;

        <T extends Function, TResult extends Function>(
            func: T,
            thisArg: any,
            ...partials: any[]
        ): TResult;

        <TResult extends Function>(
            func: Function,
            thisArg: any,
            ...partials: any[]
        ): TResult;
    }

    interface LoDashStatic {
        /**
         * Creates a function that invokes func with the this binding of thisArg and prepends any additional _.bind
         * arguments to those provided to the bound function.
         *
         * The _.bind.placeholder value, which defaults to _ in monolithic builds, may be used as a placeholder for
         * partially applied arguments.
         *
         * Note: Unlike native Function#bind this method does not set the "length" property of bound functions.
         *
         * @param func The function to bind.
         * @param thisArg The this binding of func.
         * @param partials The arguments to be partially applied.
         * @return Returns the new bound function.
         */
        bind: FunctionBind;
    }

    interface LoDashImplicitObjectWrapper<T> {
        /**
         * @see _.bind
         */
        bind<TResult extends Function>(
            thisArg: any,
            ...partials: any[]
        ): LoDashImplicitObjectWrapper<TResult>;
    }

    interface LoDashExplicitObjectWrapper<T> {
        /**
         * @see _.bind
         */
        bind<TResult extends Function>(
            thisArg: any,
            ...partials: any[]
        ): LoDashExplicitObjectWrapper<TResult>;
    }

    //_.bindAll
    interface LoDashStatic {
        /**
         * Binds methods of an object to the object itself, overwriting the existing method. Method names may be
         * specified as individual arguments or as arrays of method names. If no method names are provided all
         * enumerable function properties, own and inherited, of object are bound.
         *
         * Note: This method does not set the "length" property of bound functions.
         *
         * @param object The object to bind and assign the bound methods to.
         * @param methodNames The object method names to bind, specified as individual method names or arrays of
         * method names.
         * @return Returns object.
         */
        bindAll<T>(
            object: T,
            ...methodNames: (string|string[])[]
        ): T;
    }

    interface LoDashImplicitObjectWrapper<T> {
        /**
         * @see _.bindAll
         */
        bindAll(...methodNames: (string|string[])[]): LoDashImplicitObjectWrapper<T>;
    }

    interface LoDashExplicitObjectWrapper<T> {
        /**
         * @see _.bindAll
         */
        bindAll(...methodNames: (string|string[])[]): LoDashExplicitObjectWrapper<T>;
    }

    //_.bindKey
    interface FunctionBindKey {
        placeholder: any;

        <T extends Object, TResult extends Function>(
            object: T,
            key: any,
            ...partials: any[]
        ): TResult;

        <TResult extends Function>(
            object: Object,
            key: any,
            ...partials: any[]
        ): TResult;
    }

    interface LoDashStatic {
        /**
         * Creates a function that invokes the method at object[key] and prepends any additional _.bindKey arguments
         * to those provided to the bound function.
         *
         * This method differs from _.bind by allowing bound functions to reference methods that may be redefined
         * or don’t yet exist. See Peter Michaux’s article for more details.
         *
         * The _.bindKey.placeholder value, which defaults to _ in monolithic builds, may be used as a placeholder
         * for partially applied arguments.
         *
         * @param object The object the method belongs to.
         * @param key The key of the method.
         * @param partials The arguments to be partially applied.
         * @return Returns the new bound function.
         */
        bindKey: FunctionBindKey;
    }

    interface LoDashImplicitObjectWrapper<T> {
        /**
         * @see _.bindKey
         */
        bindKey<TResult extends Function>(
            key: any,
            ...partials: any[]
        ): LoDashImplicitObjectWrapper<TResult>;
    }

    interface LoDashExplicitObjectWrapper<T> {
        /**
         * @see _.bindKey
         */
        bindKey<TResult extends Function>(
            key: any,
            ...partials: any[]
        ): LoDashExplicitObjectWrapper<TResult>;
    }

    //_.createCallback
    interface LoDashStatic {
        /**
        * Produces a callback bound to an optional thisArg. If func is a property name the created
        * callback will return the property value for a given element. If func is an object the created
        * callback will return true for elements that contain the equivalent object properties,
        * otherwise it will return false.
        * @param func The value to convert to a callback.
        * @param thisArg The this binding of the created callback.
        * @param argCount The number of arguments the callback accepts.
        * @return A callback function.
        **/
        createCallback(
            func: string,
            thisArg?: any,
            argCount?: number): () => any;

        /**
        * @see _.createCallback
        **/
        createCallback(
            func: Dictionary<any>,
            thisArg?: any,
            argCount?: number): () => boolean;
    }

    interface LoDashImplicitWrapper<T> {
        /**
        * @see _.createCallback
        **/
        createCallback(
            thisArg?: any,
            argCount?: number): LoDashImplicitObjectWrapper<() => any>;
    }

    interface LoDashImplicitObjectWrapper<T> {
        /**
        * @see _.createCallback
        **/
        createCallback(
            thisArg?: any,
            argCount?: number): LoDashImplicitObjectWrapper<() => any>;
    }

    //_.curry
    interface LoDashStatic {
        /**
         * Creates a function that accepts one or more arguments of func that when called either invokes func returning
         * its result, if all func arguments have been provided, or returns a function that accepts one or more of the
         * remaining func arguments, and so on. The arity of func may be specified if func.length is not sufficient.
         * @param func The function to curry.
         * @return Returns the new curried function.
         */
        curry<T1, R>(func: (t1: T1) => R):
            CurriedFunction1<T1, R>;
        /**
         * Creates a function that accepts one or more arguments of func that when called either invokes func returning
         * its result, if all func arguments have been provided, or returns a function that accepts one or more of the
         * remaining func arguments, and so on. The arity of func may be specified if func.length is not sufficient.
         * @param func The function to curry.
         * @return Returns the new curried function.
         */
        curry<T1, T2, R>(func: (t1: T1, t2: T2) => R):
            CurriedFunction2<T1, T2, R>;
        /**
         * Creates a function that accepts one or more arguments of func that when called either invokes func returning
         * its result, if all func arguments have been provided, or returns a function that accepts one or more of the
         * remaining func arguments, and so on. The arity of func may be specified if func.length is not sufficient.
         * @param func The function to curry.
         * @return Returns the new curried function.
         */
        curry<T1, T2, T3, R>(func: (t1: T1, t2: T2, t3: T3) => R):
            CurriedFunction3<T1, T2, T3, R>;
        /**
         * Creates a function that accepts one or more arguments of func that when called either invokes func returning
         * its result, if all func arguments have been provided, or returns a function that accepts one or more of the
         * remaining func arguments, and so on. The arity of func may be specified if func.length is not sufficient.
         * @param func The function to curry.
         * @return Returns the new curried function.
         */
        curry<T1, T2, T3, T4, R>(func: (t1: T1, t2: T2, t3: T3, t4: T4) => R):
            CurriedFunction4<T1, T2, T3, T4, R>;
        /**
         * Creates a function that accepts one or more arguments of func that when called either invokes func returning
         * its result, if all func arguments have been provided, or returns a function that accepts one or more of the
         * remaining func arguments, and so on. The arity of func may be specified if func.length is not sufficient.
         * @param func The function to curry.
         * @return Returns the new curried function.
         */
        curry<T1, T2, T3, T4, T5, R>(func: (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5) => R):
            CurriedFunction5<T1, T2, T3, T4, T5, R>;
        /**
         * Creates a function that accepts one or more arguments of func that when called either invokes func returning
         * its result, if all func arguments have been provided, or returns a function that accepts one or more of the
         * remaining func arguments, and so on. The arity of func may be specified if func.length is not sufficient.
         * @param func The function to curry.
         * @param arity The arity of func.
         * @return Returns the new curried function.
         */
        curry<TResult extends Function>(
          func: Function,
          arity?: number): TResult;
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

    interface LoDashImplicitObjectWrapper<T> {
        /**
        * @see _.curry
        **/
        curry<TResult extends Function>(arity?: number): LoDashImplicitObjectWrapper<TResult>;
    }

    //_.curryRight
    interface LoDashStatic {
        /**
         * This method is like _.curry except that arguments are applied to func in the manner of _.partialRight
         * instead of _.partial.
         * @param func The function to curry.
         * @return Returns the new curried function.
         */
        curryRight<T1, R>(func: (t1: T1) => R):
            CurriedFunction1<T1, R>;
        /**
         * This method is like _.curry except that arguments are applied to func in the manner of _.partialRight
         * instead of _.partial.
         * @param func The function to curry.
         * @return Returns the new curried function.
         */
        curryRight<T1, T2, R>(func: (t1: T1, t2: T2) => R):
            CurriedFunction2<T2, T1, R>;
        /**
         * This method is like _.curry except that arguments are applied to func in the manner of _.partialRight
         * instead of _.partial.
         * @param func The function to curry.
         * @return Returns the new curried function.
         */
        curryRight<T1, T2, T3, R>(func: (t1: T1, t2: T2, t3: T3) => R):
            CurriedFunction3<T3, T2, T1, R>;
        /**
         * This method is like _.curry except that arguments are applied to func in the manner of _.partialRight
         * instead of _.partial.
         * @param func The function to curry.
         * @return Returns the new curried function.
         */
        curryRight<T1, T2, T3, T4, R>(func: (t1: T1, t2: T2, t3: T3, t4: T4) => R):
            CurriedFunction4<T4, T3, T2, T1, R>;
        /**
         * This method is like _.curry except that arguments are applied to func in the manner of _.partialRight
         * instead of _.partial.
         * @param func The function to curry.
         * @return Returns the new curried function.
         */
        curryRight<T1, T2, T3, T4, T5, R>(func: (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5) => R):
            CurriedFunction5<T5, T4, T3, T2, T1, R>;
        /**
         * This method is like _.curry except that arguments are applied to func in the manner of _.partialRight
         * instead of _.partial.
         * @param func The function to curry.
         * @param arity The arity of func.
         * @return Returns the new curried function.
         */
        curryRight<TResult extends Function>(
          func: Function,
          arity?: number): TResult;
    }

    interface LoDashImplicitObjectWrapper<T> {
        /**
         * @see _.curryRight
         **/
        curryRight<TResult extends Function>(arity?: number): LoDashImplicitObjectWrapper<TResult>;
    }

    //_.debounce
    interface DebounceSettings {
        /**
         * Specify invoking on the leading edge of the timeout.
         */
        leading?: boolean;

        /**
         * The maximum time func is allowed to be delayed before it’s invoked.
         */
        maxWait?: number;

        /**
         * Specify invoking on the trailing edge of the timeout.
         */
        trailing?: boolean;
    }

    interface LoDashStatic {
        /**
         * Creates a debounced function that delays invoking func until after wait milliseconds have elapsed since
         * the last time the debounced function was invoked. The debounced function comes with a cancel method to
         * cancel delayed invocations. Provide an options object to indicate that func should be invoked on the
         * leading and/or trailing edge of the wait timeout. Subsequent calls to the debounced function return the
         * result of the last func invocation.
         *
         * Note: If leading and trailing options are true, func is invoked on the trailing edge of the timeout only
         * if the the debounced function is invoked more than once during the wait timeout.
         *
         * See David Corbacho’s article for details over the differences between _.debounce and _.throttle.
         *
         * @param func The function to debounce.
         * @param wait The number of milliseconds to delay.
         * @param options The options object.
         * @param options.leading Specify invoking on the leading edge of the timeout.
         * @param options.maxWait The maximum time func is allowed to be delayed before it’s invoked.
         * @param options.trailing Specify invoking on the trailing edge of the timeout.
         * @return Returns the new debounced function.
         */
        debounce<T extends Function>(
            func: T,
            wait?: number,
            options?: DebounceSettings
        ): T & Cancelable;
    }

    interface LoDashImplicitObjectWrapper<T> {
        /**
         * @see _.debounce
         */
        debounce(
            wait?: number,
            options?: DebounceSettings
        ): LoDashImplicitObjectWrapper<T & Cancelable>;
    }

    interface LoDashExplicitObjectWrapper<T> {
        /**
         * @see _.debounce
         */
        debounce(
            wait?: number,
            options?: DebounceSettings
        ): LoDashExplicitObjectWrapper<T & Cancelable>;
    }

    //_.defer
    interface LoDashStatic {
        /**
         * Defers invoking the func until the current call stack has cleared. Any additional arguments are provided to
         * func when it’s invoked.
         *
         * @param func The function to defer.
         * @param args The arguments to invoke the function with.
         * @return Returns the timer id.
         */
        defer<T extends Function>(
            func: T,
            ...args: any[]
        ): number;
    }

    interface LoDashImplicitObjectWrapper<T> {
        /**
         * @see _.defer
         */
        defer(...args: any[]): LoDashImplicitWrapper<number>;
    }

    interface LoDashExplicitObjectWrapper<T> {
        /**
         * @see _.defer
         */
        defer(...args: any[]): LoDashExplicitWrapper<number>;
    }

    //_.delay
    interface LoDashStatic {
        /**
         * Invokes func after wait milliseconds. Any additional arguments are provided to func when it’s invoked.
         *
         * @param func The function to delay.
         * @param wait The number of milliseconds to delay invocation.
         * @param args The arguments to invoke the function with.
         * @return Returns the timer id.
         */
        delay<T extends Function>(
            func: T,
            wait: number,
            ...args: any[]
        ): number;
    }

    interface LoDashImplicitObjectWrapper<T> {
        /**
         * @see _.delay
         */
        delay(
            wait: number,
            ...args: any[]
        ): LoDashImplicitWrapper<number>;
    }

    interface LoDashExplicitObjectWrapper<T> {
        /**
         * @see _.delay
         */
        delay(
            wait: number,
            ...args: any[]
        ): LoDashExplicitWrapper<number>;
    }

    interface LoDashStatic {
        /**
         * Creates a function that invokes `func` with arguments reversed.
         *
         * @static
         * @memberOf _
         * @category Function
         * @param {Function} func The function to flip arguments for.
         * @returns {Function} Returns the new function.
         * @example
         *
         * var flipped = _.flip(function() {
         *   return _.toArray(arguments);
         * });
         *
         * flipped('a', 'b', 'c', 'd');
         * // => ['d', 'c', 'b', 'a']
         */
        flip<T extends Function>(func: T): T;
    }

    interface LoDashImplicitObjectWrapper<T> {
        /**
         * @see _.flip
         */
        flip(): LoDashImplicitObjectWrapper<T>;
    }

    interface LoDashExplicitObjectWrapper<T> {
        /**
         * @see _.flip
         */
        flip(): LoDashExplicitObjectWrapper<T>;
    }

    //_.flow
    interface LoDashStatic {
        /**
         * Creates a function that returns the result of invoking the provided functions with the this binding of the
         * created function, where each successive invocation is supplied the return value of the previous.
         *
         * @param funcs Functions to invoke.
         * @return Returns the new function.
         */
        flow<TResult extends Function>(...funcs: Function[]): TResult;
    }

    interface LoDashImplicitObjectWrapper<T> {
        /**
         * @see _.flow
         */
        flow<TResult extends Function>(...funcs: Function[]): LoDashImplicitObjectWrapper<TResult>;
    }

    interface LoDashExplicitObjectWrapper<T> {
        /**
         * @see _.flow
         */
        flow<TResult extends Function>(...funcs: Function[]): LoDashExplicitObjectWrapper<TResult>;
    }

    //_.flowRight
    interface LoDashStatic {
        /**
         * This method is like _.flow except that it creates a function that invokes the provided functions from right
         * to left.
         *
         * @param funcs Functions to invoke.
         * @return Returns the new function.
         */
        flowRight<TResult extends Function>(...funcs: Function[]): TResult;
    }

    interface LoDashImplicitObjectWrapper<T> {
        /**
         * @see _.flowRight
         */
        flowRight<TResult extends Function>(...funcs: Function[]): LoDashImplicitObjectWrapper<TResult>;
    }

    interface LoDashExplicitObjectWrapper<T> {
        /**
         * @see _.flowRight
         */
        flowRight<TResult extends Function>(...funcs: Function[]): LoDashExplicitObjectWrapper<TResult>;
    }


    //_.memoize
    interface MemoizedFunction extends Function {
        cache: MapCache;
    }

    interface LoDashStatic {
        /**
         * Creates a function that memoizes the result of func. If resolver is provided it determines the cache key for
         * storing the result based on the arguments provided to the memoized function. By default, the first argument
         * provided to the memoized function is coerced to a string and used as the cache key. The func is invoked with
         * the this binding of the memoized function.
         * @param func The function to have its output memoized.
         * @param resolver The function to resolve the cache key.
         * @return Returns the new memoizing function.
         */
        memoize: {
            <T extends Function>(func: T, resolver?: Function): T & MemoizedFunction;
            Cache: MapCache;
        }
    }

    interface LoDashImplicitObjectWrapper<T> {
        /**
         * @see _.memoize
         */
        memoize(resolver?: Function): LoDashImplicitObjectWrapper<T & MemoizedFunction>;
    }

    //_.overArgs (was _.modArgs)
    interface LoDashStatic {
        /**
         * Creates a function that runs each argument through a corresponding transform function.
         *
         * @param func The function to wrap.
         * @param transforms The functions to transform arguments, specified as individual functions or arrays
         * of functions.
         * @return Returns the new function.
         */
        overArgs<T extends Function, TResult extends Function>(
            func: T,
            ...transforms: Function[]
        ): TResult;

        /**
         * @see _.overArgs
         */
        overArgs<T extends Function, TResult extends Function>(
            func: T,
            transforms: Function[]
        ): TResult;
    }

    interface LoDashImplicitObjectWrapper<T> {
        /**
         * @see _.overArgs
         */
        overArgs<TResult extends Function>(...transforms: Function[]): LoDashImplicitObjectWrapper<TResult>;

        /**
         * @see _.overArgs
         */
        overArgs<TResult extends Function>(transforms: Function[]): LoDashImplicitObjectWrapper<TResult>;
    }

    interface LoDashExplicitObjectWrapper<T> {
        /**
         * @see _.overArgs
         */
        overArgs<TResult extends Function>(...transforms: Function[]): LoDashExplicitObjectWrapper<TResult>;

        /**
         * @see _.overArgs
         */
        overArgs<TResult extends Function>(transforms: Function[]): LoDashExplicitObjectWrapper<TResult>;
    }

    //_.negate
    interface LoDashStatic {
        /**
         * Creates a function that negates the result of the predicate func. The func predicate is invoked with
         * the this binding and arguments of the created function.
         *
         * @param predicate The predicate to negate.
         * @return Returns the new function.
         */
        negate<T extends Function>(predicate: T): (...args: any[]) => boolean;

        /**
         * @see _.negate
         */
        negate<T extends Function, TResult extends Function>(predicate: T): TResult;
    }

    interface LoDashImplicitObjectWrapper<T> {
        /**
         * @see _.negate
         */
        negate(): LoDashImplicitObjectWrapper<(...args: any[]) => boolean>;

        /**
         * @see _.negate
         */
        negate<TResult extends Function>(): LoDashImplicitObjectWrapper<TResult>;
    }

    interface LoDashExplicitObjectWrapper<T> {
        /**
         * @see _.negate
         */
        negate(): LoDashExplicitObjectWrapper<(...args: any[]) => boolean>;

        /**
         * @see _.negate
         */
        negate<TResult extends Function>(): LoDashExplicitObjectWrapper<TResult>;
    }

    //_.once
    interface LoDashStatic {
        /**
         * Creates a function that is restricted to invoking func once. Repeat calls to the function return the value
         * of the first call. The func is invoked with the this binding and arguments of the created function.
         *
         * @param func The function to restrict.
         * @return Returns the new restricted function.
         */
        once<T extends Function>(func: T): T;
    }

    interface LoDashImplicitObjectWrapper<T> {
        /**
         * @see _.once
         */
        once(): LoDashImplicitObjectWrapper<T>;
    }

    interface LoDashExplicitObjectWrapper<T> {
        /**
         * @see _.once
         */
        once(): LoDashExplicitObjectWrapper<T>;
    }

    //_.partial
    interface LoDashStatic {
        /**
        * Creates a function that, when called, invokes func with any additional partial arguments
        * prepended to those provided to the new function. This method is similar to _.bind except
        * it does not alter the this binding.
        * @param func The function to partially apply arguments to.
        * @param args Arguments to be partially applied.
        * @return The new partially applied function.
        **/
        partial: Partial;
    }

    type PH = LoDashStatic;

    interface Function0<R> {
        (): R;
    }
    interface Function1<T1, R> {
        (t1: T1): R;
    }
    interface Function2<T1, T2, R> {
        (t1: T1, t2: T2): R;
    }
    interface Function3<T1, T2, T3, R> {
        (t1: T1, t2: T2, t3: T3): R;
    }
    interface Function4<T1, T2, T3, T4, R> {
        (t1: T1, t2: T2, t3: T3, t4: T4): R;
    }

    interface Partial {
        // arity 0
        <R>(func: Function0<R>): Function0<R>;
        // arity 1
        <T1, R>(func: Function1<T1, R>): Function1<T1, R>;
        <T1, R>(func: Function1<T1, R>, arg1: T1): Function0<R>;
        // arity 2
        <T1, T2, R>(func: Function2<T1, T2, R>):                      Function2<T1, T2, R>;
        <T1, T2, R>(func: Function2<T1, T2, R>, arg1: T1):            Function1<    T2, R>;
        <T1, T2, R>(func: Function2<T1, T2, R>, plc1: PH, arg2: T2):  Function1<T1,     R>;
        <T1, T2, R>(func: Function2<T1, T2, R>, arg1: T1, arg2: T2):  Function0<        R>;
        // arity 3
        <T1, T2, T3, R>(func: Function3<T1, T2, T3, R>):                                Function3<T1, T2, T3, R>;
        <T1, T2, T3, R>(func: Function3<T1, T2, T3, R>, arg1: T1):                      Function2<    T2, T3, R>;
        <T1, T2, T3, R>(func: Function3<T1, T2, T3, R>, plc1: PH, arg2: T2):            Function2<T1,     T3, R>;
        <T1, T2, T3, R>(func: Function3<T1, T2, T3, R>, arg1: T1, arg2: T2):            Function1<        T3, R>;
        <T1, T2, T3, R>(func: Function3<T1, T2, T3, R>, plc1: PH, plc2: PH, arg3: T3):  Function2<T1, T2,     R>;
        <T1, T2, T3, R>(func: Function3<T1, T2, T3, R>, arg1: T1, plc2: PH, arg3: T3):  Function1<    T2,     R>;
        <T1, T2, T3, R>(func: Function3<T1, T2, T3, R>, plc1: PH, arg2: T2, arg3: T3):  Function1<T1,         R>;
        <T1, T2, T3, R>(func: Function3<T1, T2, T3, R>, arg1: T1, arg2: T2, arg3: T3):  Function0<            R>;
        // arity 4
        <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>):                                          Function4<T1, T2, T3, T4, R>;
        <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>, arg1: T1):                                Function3<    T2, T3, T4, R>;
        <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>, plc1: PH, arg2: T2):                      Function3<T1,     T3, T4, R>;
        <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>, arg1: T1, arg2: T2):                      Function2<        T3, T4, R>;
        <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>, plc1: PH, plc2: PH, arg3: T3):            Function3<T1, T2,     T4, R>;
        <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>, arg1: T1, plc2: PH, arg3: T3):            Function2<    T2,     T4, R>;
        <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>, plc1: PH, arg2: T2, arg3: T3):            Function2<T1,         T4, R>;
        <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>, arg1: T1, arg2: T2, arg3: T3):            Function1<            T4, R>;
        <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>, plc1: PH, plc2: PH, plc3: PH, arg4: T4):  Function3<T1, T2, T3,     R>;
        <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>, arg1: T1, plc2: PH, plc3: PH, arg4: T4):  Function2<    T2, T3,     R>;
        <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>, plc1: PH, arg2: T2, plc3: PH, arg4: T4):  Function2<T1,     T3,     R>;
        <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>, arg1: T1, arg2: T2, plc3: PH, arg4: T4):  Function1<        T3,     R>;
        <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>, plc1: PH, plc2: PH, arg3: T3, arg4: T4):  Function2<T1, T2,         R>;
        <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>, arg1: T1, plc2: PH, arg3: T3, arg4: T4):  Function1<    T2,         R>;
        <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>, plc1: PH, arg2: T2, arg3: T3, arg4: T4):  Function1<T1,             R>;
        <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>, arg1: T1, arg2: T2, arg3: T3, arg4: T4):  Function0<                R>;
        // catch-all
        (func: Function, ...args: any[]): Function;
    }

    //_.partialRight
    interface LoDashStatic {
        /**
        * This method is like _.partial except that partial arguments are appended to those provided
        * to the new function.
        * @param func The function to partially apply arguments to.
        * @param args Arguments to be partially applied.
        * @return The new partially applied function.
        **/
        partialRight: PartialRight
    }

    interface PartialRight {
        // arity 0
        <R>(func: Function0<R>): Function0<R>;
        // arity 1
        <T1, R>(func: Function1<T1, R>): Function1<T1, R>;
        <T1, R>(func: Function1<T1, R>, arg1: T1): Function0<R>;
        // arity 2
        <T1, T2, R>(func: Function2<T1, T2, R>):                      Function2<T1, T2, R>;
        <T1, T2, R>(func: Function2<T1, T2, R>, arg1: T1, plc2: PH):  Function1<    T2, R>;
        <T1, T2, R>(func: Function2<T1, T2, R>,           arg2: T2):  Function1<T1,     R>;
        <T1, T2, R>(func: Function2<T1, T2, R>, arg1: T1, arg2: T2):  Function0<        R>;
        // arity 3
        <T1, T2, T3, R>(func: Function3<T1, T2, T3, R>):                                Function3<T1, T2, T3, R>;
        <T1, T2, T3, R>(func: Function3<T1, T2, T3, R>, arg1: T1, plc2: PH, plc3: PH):  Function2<    T2, T3, R>;
        <T1, T2, T3, R>(func: Function3<T1, T2, T3, R>,           arg2: T2, plc3: PH):  Function2<T1,     T3, R>;
        <T1, T2, T3, R>(func: Function3<T1, T2, T3, R>, arg1: T1, arg2: T2, plc3: PH):  Function1<        T3, R>;
        <T1, T2, T3, R>(func: Function3<T1, T2, T3, R>,                     arg3: T3):  Function2<T1, T2,     R>;
        <T1, T2, T3, R>(func: Function3<T1, T2, T3, R>, arg1: T1, plc2: PH, arg3: T3):  Function1<    T2,     R>;
        <T1, T2, T3, R>(func: Function3<T1, T2, T3, R>,           arg2: T2, arg3: T3):  Function1<T1,         R>;
        <T1, T2, T3, R>(func: Function3<T1, T2, T3, R>, arg1: T1, arg2: T2, arg3: T3):  Function0<            R>;
        // arity 4
        <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>):                                          Function4<T1, T2, T3, T4, R>;
        <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>, arg1: T1, plc2: PH, plc3: PH, plc4: PH):  Function3<    T2, T3, T4, R>;
        <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>,           arg2: T2, plc3: PH, plc4: PH):  Function3<T1,     T3, T4, R>;
        <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>, arg1: T1, arg2: T2, plc3: PH, plc4: PH):  Function2<        T3, T4, R>;
        <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>,                     arg3: T3, plc4: PH):  Function3<T1, T2,     T4, R>;
        <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>, arg1: T1, plc2: PH, arg3: T3, plc4: PH):  Function2<    T2,     T4, R>;
        <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>,           arg2: T2, arg3: T3, plc4: PH):  Function2<T1,         T4, R>;
        <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>, arg1: T1, arg2: T2, arg3: T3, plc4: PH):  Function1<            T4, R>;
        <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>,                               arg4: T4):  Function3<T1, T2, T3,     R>;
        <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>, arg1: T1, plc2: PH, plc3: PH, arg4: T4):  Function2<    T2, T3,     R>;
        <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>,           arg2: T2, plc3: PH, arg4: T4):  Function2<T1,     T3,     R>;
        <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>, arg1: T1, arg2: T2, plc3: PH, arg4: T4):  Function1<        T3,     R>;
        <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>,                     arg3: T3, arg4: T4):  Function2<T1, T2,         R>;
        <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>, arg1: T1, plc2: PH, arg3: T3, arg4: T4):  Function1<    T2,         R>;
        <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>,           arg2: T2, arg3: T3, arg4: T4):  Function1<T1,             R>;
        <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>, arg1: T1, arg2: T2, arg3: T3, arg4: T4):  Function0<                R>;
        // catch-all
        (func: Function, ...args: any[]): Function;
    }

    //_.rearg
    interface LoDashStatic {
        /**
         * Creates a function that invokes func with arguments arranged according to the specified indexes where the
         * argument value at the first index is provided as the first argument, the argument value at the second index
         * is provided as the second argument, and so on.
         * @param func The function to rearrange arguments for.
         * @param indexes The arranged argument indexes, specified as individual indexes or arrays of indexes.
         * @return Returns the new function.
         */
        rearg<TResult extends Function>(func: Function, indexes: number[]): TResult;

        /**
         * @see _.rearg
         */
        rearg<TResult extends Function>(func: Function, ...indexes: number[]): TResult;
    }

    interface LoDashImplicitObjectWrapper<T> {
        /**
         * @see _.rearg
         */
        rearg<TResult extends Function>(indexes: number[]): LoDashImplicitObjectWrapper<TResult>;

        /**
         * @see _.rearg
         */
        rearg<TResult extends Function>(...indexes: number[]): LoDashImplicitObjectWrapper<TResult>;
    }

    //_.rest
    interface LoDashStatic {
        /**
         * Creates a function that invokes func with the this binding of the created function and arguments from start
         * and beyond provided as an array.
         *
         * Note: This method is based on the rest parameter.
         *
         * @param func The function to apply a rest parameter to.
         * @param start The start position of the rest parameter.
         * @return Returns the new function.
         */
        rest<TResult extends Function>(
            func: Function,
            start?: number
        ): TResult;

        /**
         * @see _.rest
         */
        rest<TResult extends Function, TFunc extends Function>(
            func: TFunc,
            start?: number
        ): TResult;
    }

    interface LoDashImplicitObjectWrapper<T> {
        /**
         * @see _.rest
         */
        rest<TResult extends Function>(start?: number): LoDashImplicitObjectWrapper<TResult>;
    }

    interface LoDashExplicitObjectWrapper<T> {
        /**
         * @see _.rest
         */
        rest<TResult extends Function>(start?: number): LoDashExplicitObjectWrapper<TResult>;
    }

    //_.spread
    interface LoDashStatic {
        /**
         * Creates a function that invokes func with the this binding of the created function and an array of arguments
         * much like Function#apply.
         *
         * Note: This method is based on the spread operator.
         *
         * @param func The function to spread arguments over.
         * @return Returns the new function.
         */
        spread<F extends Function, T extends Function>(func: F): T;

        /**
         * @see _.spread
         */
        spread<T extends Function>(func: Function): T;
    }

    interface LoDashImplicitObjectWrapper<T> {
        /**
         * @see _.spread
         */
        spread<T extends Function>(): LoDashImplicitObjectWrapper<T>;
    }

    interface LoDashExplicitObjectWrapper<T> {
        /**
         * @see _.spread
         */
        spread<T extends Function>(): LoDashExplicitObjectWrapper<T>;
    }

    //_.throttle
    interface ThrottleSettings {
        /**
         * If you'd like to disable the leading-edge call, pass this as false.
         */
        leading?: boolean;

        /**
         * If you'd like to disable the execution on the trailing-edge, pass false.
         */
        trailing?: boolean;
    }

    interface LoDashStatic {
        /**
         * Creates a throttled function that only invokes func at most once per every wait milliseconds. The throttled
         * function comes with a cancel method to cancel delayed invocations. Provide an options object to indicate
         * that func should be invoked on the leading and/or trailing edge of the wait timeout. Subsequent calls to
         * the throttled function return the result of the last func call.
         *
         * Note: If leading and trailing options are true, func is invoked on the trailing edge of the timeout only if
         * the the throttled function is invoked more than once during the wait timeout.
         *
         * @param func The function to throttle.
         * @param wait The number of milliseconds to throttle invocations to.
         * @param options The options object.
         * @param options.leading Specify invoking on the leading edge of the timeout.
         * @param options.trailing Specify invoking on the trailing edge of the timeout.
         * @return Returns the new throttled function.
         */
        throttle<T extends Function>(
            func: T,
            wait?: number,
            options?: ThrottleSettings
        ): T & Cancelable;
    }

    interface LoDashImplicitObjectWrapper<T> {
        /**
         * @see _.throttle
         */
        throttle(
            wait?: number,
            options?: ThrottleSettings
        ): LoDashImplicitObjectWrapper<T & Cancelable>;
    }

    interface LoDashExplicitObjectWrapper<T> {
        /**
         * @see _.throttle
         */
        throttle(
            wait?: number,
            options?: ThrottleSettings
        ): LoDashExplicitObjectWrapper<T & Cancelable>;
    }

    //_.unary
    interface LoDashStatic {
        /**
         * Creates a function that accepts up to one argument, ignoring any
         * additional arguments.
         *
         * @static
         * @memberOf _
         * @category Function
         * @param {Function} func The function to cap arguments for.
         * @returns {Function} Returns the new function.
         * @example
         *
         * _.map(['6', '8', '10'], _.unary(parseInt));
         * // => [6, 8, 10]
         */
        unary<T extends Function>(func: T): T;
    }

    interface LoDashImplicitObjectWrapper<T> {
        /**
         * @see _.unary
         */
        unary(): LoDashImplicitObjectWrapper<T>;
    }

    interface LoDashExplicitObjectWrapper<T> {
        /**
         * @see _.unary
         */
        unary(): LoDashExplicitObjectWrapper<T>;
    }

    //_.wrap
    interface LoDashStatic {
        /**
         * Creates a function that provides value to the wrapper function as its first argument. Any additional
         * arguments provided to the function are appended to those provided to the wrapper function. The wrapper is
         * invoked with the this binding of the created function.
         *
         * @param value The value to wrap.
         * @param wrapper The wrapper function.
         * @return Returns the new function.
         */
        wrap<V, W extends Function, R extends Function>(
            value: V,
            wrapper: W
        ): R;

        /**
         * @see _.wrap
         */
        wrap<V, R extends Function>(
            value: V,
            wrapper: Function
        ): R;

        /**
         * @see _.wrap
         */
        wrap<R extends Function>(
            value: any,
            wrapper: Function
        ): R;
    }

    interface LoDashImplicitWrapper<T> {
        /**
         * @see _.wrap
         */
        wrap<W extends Function, R extends Function>(wrapper: W): LoDashImplicitObjectWrapper<R>;

        /**
         * @see _.wrap
         */
        wrap<R extends Function>(wrapper: Function): LoDashImplicitObjectWrapper<R>;
    }

    interface LoDashImplicitArrayWrapper<T> {
        /**
         * @see _.wrap
         */
        wrap<W extends Function, R extends Function>(wrapper: W): LoDashImplicitObjectWrapper<R>;

        /**
         * @see _.wrap
         */
        wrap<R extends Function>(wrapper: Function): LoDashImplicitObjectWrapper<R>;
    }

    interface LoDashImplicitObjectWrapper<T> {
        /**
         * @see _.wrap
         */
        wrap<W extends Function, R extends Function>(wrapper: W): LoDashImplicitObjectWrapper<R>;

        /**
         * @see _.wrap
         */
        wrap<R extends Function>(wrapper: Function): LoDashImplicitObjectWrapper<R>;
    }

    interface LoDashExplicitWrapper<T> {
        /**
         * @see _.wrap
         */
        wrap<W extends Function, R extends Function>(wrapper: W): LoDashExplicitObjectWrapper<R>;

        /**
         * @see _.wrap
         */
        wrap<R extends Function>(wrapper: Function): LoDashExplicitObjectWrapper<R>;
    }

    interface LoDashExplicitArrayWrapper<T> {
        /**
         * @see _.wrap
         */
        wrap<W extends Function, R extends Function>(wrapper: W): LoDashExplicitObjectWrapper<R>;

        /**
         * @see _.wrap
         */
        wrap<R extends Function>(wrapper: Function): LoDashExplicitObjectWrapper<R>;
    }

    interface LoDashExplicitObjectWrapper<T> {
        /**
         * @see _.wrap
         */
        wrap<W extends Function, R extends Function>(wrapper: W): LoDashExplicitObjectWrapper<R>;

        /**
         * @see _.wrap
         */
        wrap<R extends Function>(wrapper: Function): LoDashExplicitObjectWrapper<R>;
    }

    /********
     * Lang *
     ********/

    //_.clone
    interface LoDashStatic {
        /**
         * Creates a shallow clone of `value`.
         *
         * **Note:** This method is loosely based on the
         * [structured clone algorithm](https://mdn.io/Structured_clone_algorithm)
         * and supports cloning arrays, array buffers, booleans, date objects, maps,
         * numbers, `Object` objects, regexes, sets, strings, symbols, and typed
         * arrays. The own enumerable properties of `arguments` objects are cloned
         * as plain objects. An empty object is returned for uncloneable values such
         * as error objects, functions, DOM nodes, and WeakMaps.
         *
         * @static
         * @memberOf _
         * @category Lang
         * @param {*} value The value to clone.
         * @returns {*} Returns the cloned value.
         * @example
         *
         * var objects = [{ 'a': 1 }, { 'b': 2 }];
         *
         * var shallow = _.clone(objects);
         * console.log(shallow[0] === objects[0]);
         * // => true
         */
        clone<T>(value: T): T;
    }

    interface LoDashImplicitWrapper<T> {
        /**
         * @see _.clone
         */
        clone(): T;
    }

    interface LoDashImplicitArrayWrapper<T> {

        /**
         * @see _.clone
         */
        clone(): T[];
    }

    interface LoDashImplicitObjectWrapper<T> {
        /**
         * @see _.clone
         */
        clone(): T;
    }

    //_.cloneDeep
    interface LoDashStatic {
        /**
         * This method is like `_.clone` except that it recursively clones `value`.
         *
         * @static
         * @memberOf _
         * @category Lang
         * @param {*} value The value to recursively clone.
         * @returns {*} Returns the deep cloned value.
         * @example
         *
         * var objects = [{ 'a': 1 }, { 'b': 2 }];
         *
         * var deep = _.cloneDeep(objects);
         * console.log(deep[0] === objects[0]);
         * // => false
         */
        cloneDeep<T>(value: T): T;
    }

    interface LoDashImplicitWrapper<T> {
        /**
         * @see _.cloneDeep
         */
        cloneDeep(): T;
    }

    interface LoDashImplicitArrayWrapper<T> {
        /**
         * @see _.cloneDeep
         */
        cloneDeep(): T[];
    }

    interface LoDashImplicitObjectWrapper<T> {
        /**
         * @see _.cloneDeep
         */
        cloneDeep(): T;
    }

    //_.cloneWith
    interface LoDashStatic {
        /**
         * Creates a shallow clone of `value`.
         *
         * **Note:** This method is loosely based on the
         * [structured clone algorithm](https://mdn.io/Structured_clone_algorithm)
         * and supports cloning arrays, array buffers, booleans, date objects, maps,
         * numbers, `Object` objects, regexes, sets, strings, symbols, and typed
         * arrays. The own enumerable properties of `arguments` objects are cloned
         * as plain objects. An empty object is returned for uncloneable values such
         * as error objects, functions, DOM nodes, and WeakMaps.
         *
         * @static
         * @memberOf _
         * @category Lang
         * @param {*} value The value to clone.
         * @returns {*} Returns the cloned value.
         * @example
         *
         * var objects = [{ 'a': 1 }, { 'b': 2 }];
         *
         * var shallow = _.clone(objects);
         * console.log(shallow[0] === objects[0]);
         * // => true
         */
        clone<T>(
            value: T,
            customizer: (value: any) => any): T;
    }

    interface LoDashImplicitWrapper<T> {
        /**
         * @see _.clone
         */
        clone(customizer: (value: any) => any): T;
    }

    interface LoDashImplicitArrayWrapper<T> {

        /**
         * @see _.clone
         */
        clone(customizer: (value: any) => any): T[];
    }

    interface LoDashImplicitObjectWrapper<T> {
        /**
         * @see _.clone
         */
        clone(customizer: (value: any) => any): T;
    }

    //_.cloneDeepWith
    interface LoDashStatic {
        /**
         * Creates a deep clone of value. If customizer is provided it’s invoked to produce the cloned values. If
         * customizer returns undefined cloning is handled by the method instead. The customizer is bound to thisArg
         * and invoked with up to three argument; (value [, index|key, object]).
         * Note: This method is loosely based on the structured clone algorithm. The enumerable properties of arguments
         * objects and objects created by constructors other than Object are cloned to plain Object objects. An empty
         * object is returned for uncloneable values such as functions, DOM nodes, Maps, Sets, and WeakMaps.
         * @param value The value to deep clone.
         * @param customizer The function to customize cloning values.
         * @param thisArg The this binding of customizer.
         * @return Returns the deep cloned value.
         */
        cloneDeep<T>(
            value: T,
            customizer: (value: any) => any): T;
    }

    interface LoDashImplicitWrapper<T> {
        /**
         * @see _.cloneDeep
         */
        cloneDeep(customizer: (value: any) => any): T;
    }

    interface LoDashImplicitArrayWrapper<T> {
        /**
         * @see _.cloneDeep
         */
        cloneDeep(customizer: (value: any) => any): T[];
    }

    interface LoDashImplicitObjectWrapper<T> {
        /**
         * @see _.cloneDeep
         */
        cloneDeep(customizer: (value: any) => any): T;
    }

    //_.eq
    interface LoDashStatic {
        /**
         * Performs a [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
         * comparison between two values to determine if they are equivalent.
         *
         * @static
         * @memberOf _
         * @category Lang
         * @param {*} value The value to compare.
         * @param {*} other The other value to compare.
         * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
         * @example
         *
         * var object = { 'user': 'fred' };
         * var other = { 'user': 'fred' };
         *
         * _.eq(object, object);
         * // => true
         *
         * _.eq(object, other);
         * // => false
         *
         * _.eq('a', 'a');
         * // => true
         *
         * _.eq('a', Object('a'));
         * // => false
         *
         * _.eq(NaN, NaN);
         * // => true
         */
        eq(
            value: any,
            other: any
        ): boolean;
    }

    interface LoDashImplicitWrapperBase<T, TWrapper> {
        /**
         * @see _.isEqual
         */
        eq(
            other: any
        ): boolean;
    }

    interface LoDashExplicitWrapperBase<T, TWrapper> {
        /**
         * @see _.isEqual
         */
        eq(
            other: any
        ): LoDashExplicitWrapper<boolean>;
    }

    //_.gt
    interface LoDashStatic {
        /**
         * Checks if value is greater than other.
         *
         * @param value The value to compare.
         * @param other The other value to compare.
         * @return Returns true if value is greater than other, else false.
         */
        gt(
            value: any,
            other: any
        ): boolean;
    }

    interface LoDashImplicitWrapperBase<T, TWrapper> {
        /**
         * @see _.gt
         */
        gt(other: any): boolean;
    }

    interface LoDashExplicitWrapperBase<T, TWrapper> {
        /**
         * @see _.gt
         */
        gt(other: any): LoDashExplicitWrapper<boolean>;
    }

    //_.gte
    interface LoDashStatic {
        /**
         * Checks if value is greater than or equal to other.
         *
         * @param value The value to compare.
         * @param other The other value to compare.
         * @return Returns true if value is greater than or equal to other, else false.
         */
        gte(
            value: any,
            other: any
        ): boolean;
    }

    interface LoDashImplicitWrapperBase<T, TWrapper> {
        /**
         * @see _.gte
         */
        gte(other: any): boolean;
    }

    interface LoDashExplicitWrapperBase<T, TWrapper> {
        /**
         * @see _.gte
         */
        gte(other: any): LoDashExplicitWrapper<boolean>;
    }

    //_.isArguments
    interface LoDashStatic {
        /**
         * Checks if value is classified as an arguments object.
         *
         * @param value The value to check.
         * @return Returns true if value is correctly classified, else false.
         */
        isArguments(value?: any): value is IArguments;
    }

    interface LoDashImplicitWrapperBase<T, TWrapper> {
        /**
         * @see _.isArguments
         */
        isArguments(): boolean;
    }

    interface LoDashExplicitWrapperBase<T, TWrapper> {
        /**
         * @see _.isArguments
         */
        isArguments(): LoDashExplicitWrapper<boolean>;
    }

    //_.isArray
    interface LoDashStatic {
        /**
         * Checks if value is classified as an Array object.
         * @param value The value to check.
         *
         * @return Returns true if value is correctly classified, else false.
         */
        isArray<T>(value?: any): value is T[];
    }

    interface LoDashImplicitWrapperBase<T,TWrapper> {
        /**
         * @see _.isArray
         */
        isArray(): boolean;
    }

    interface LoDashExplicitWrapperBase<T,TWrapper> {
        /**
         * @see _.isArray
         */
        isArray(): LoDashExplicitWrapper<boolean>;
    }

    //_.isArrayLike
    interface LoDashStatic {
        /**
         * Checks if `value` is array-like. A value is considered array-like if it's
         * not a function and has a `value.length` that's an integer greater than or
         * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
         *
         * @static
         * @memberOf _
         * @type Function
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
         * @example
         *
         * _.isArrayLike([1, 2, 3]);
         * // => true
         *
         * _.isArrayLike(document.body.children);
         * // => true
         *
         * _.isArrayLike('abc');
         * // => true
         *
         * _.isArrayLike(_.noop);
         * // => false
         */
        isArrayLike<T>(value?: any): value is T[];
    }

    interface LoDashImplicitWrapperBase<T,TWrapper> {
        /**
         * @see _.isArrayLike
         */
        isArrayLike(): boolean;
    }

    interface LoDashExplicitWrapperBase<T,TWrapper> {
        /**
         * @see _.isArrayLike
         */
        isArrayLike(): LoDashExplicitWrapper<boolean>;
    }

    //_.isArrayLikeObject
    interface LoDashStatic {
        /**
         * This method is like `_.isArrayLike` except that it also checks if `value`
         * is an object.
         *
         * @static
         * @memberOf _
         * @type Function
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is an array-like object, else `false`.
         * @example
         *
         * _.isArrayLikeObject([1, 2, 3]);
         * // => true
         *
         * _.isArrayLikeObject(document.body.children);
         * // => true
         *
         * _.isArrayLikeObject('abc');
         * // => false
         *
         * _.isArrayLikeObject(_.noop);
         * // => false
         */
        isArrayLikeObject<T>(value?: any): value is T[];
    }

    interface LoDashImplicitWrapperBase<T,TWrapper> {
        /**
         * @see _.isArrayLikeObject
         */
        isArrayLikeObject(): boolean;
    }

    interface LoDashExplicitWrapperBase<T,TWrapper> {
        /**
         * @see _.isArrayLikeObject
         */
        isArrayLikeObject(): LoDashExplicitWrapper<boolean>;
    }

    //_.isBoolean
    interface LoDashStatic {
        /**
         * Checks if value is classified as a boolean primitive or object.
         *
         * @param value The value to check.
         * @return Returns true if value is correctly classified, else false.
         */
        isBoolean(value?: any): value is boolean;
    }

    interface LoDashImplicitWrapperBase<T, TWrapper> {
        /**
         * @see _.isBoolean
         */
        isBoolean(): boolean;
    }

    interface LoDashExplicitWrapperBase<T, TWrapper> {
        /**
         * @see _.isBoolean
         */
        isBoolean(): LoDashExplicitWrapper<boolean>;
    }

    //_.isDate
    interface LoDashStatic {
        /**
         * Checks if value is classified as a Date object.
         * @param value The value to check.
         *
         * @return Returns true if value is correctly classified, else false.
         */
        isDate(value?: any): value is Date;
    }

    interface LoDashImplicitWrapperBase<T, TWrapper> {
        /**
         * @see _.isDate
         */
        isDate(): boolean;
    }

    interface LoDashExplicitWrapperBase<T, TWrapper> {
        /**
         * @see _.isDate
         */
        isDate(): LoDashExplicitWrapper<boolean>;
    }

    //_.isElement
    interface LoDashStatic {
        /**
         * Checks if value is a DOM element.
         *
         * @param value The value to check.
         * @return Returns true if value is a DOM element, else false.
         */
        isElement(value?: any): boolean;
    }

    interface LoDashImplicitWrapperBase<T, TWrapper> {
        /**
         * @see _.isElement
         */
        isElement(): boolean;
    }

    interface LoDashExplicitWrapperBase<T, TWrapper> {
        /**
         * @see _.isElement
         */
        isElement(): LoDashExplicitWrapper<boolean>;
    }

    //_.isEmpty
    interface LoDashStatic {
        /**
         * Checks if value is empty. A value is considered empty unless it’s an arguments object, array, string, or
         * jQuery-like collection with a length greater than 0 or an object with own enumerable properties.
         *
         * @param value The value to inspect.
         * @return Returns true if value is empty, else false.
         */
        isEmpty(value?: any): boolean;
    }

    interface LoDashImplicitWrapperBase<T, TWrapper> {
        /**
         * @see _.isEmpty
         */
        isEmpty(): boolean;
    }

    interface LoDashExplicitWrapperBase<T, TWrapper> {
        /**
         * @see _.isEmpty
         */
        isEmpty(): LoDashExplicitWrapper<boolean>;
    }

    //_.isEqual
    interface LoDashStatic {
        /**
         * Performs a deep comparison between two values to determine if they are
         * equivalent.
         *
         * **Note:** This method supports comparing arrays, array buffers, booleans,
         * date objects, error objects, maps, numbers, `Object` objects, regexes,
         * sets, strings, symbols, and typed arrays. `Object` objects are compared
         * by their own, not inherited, enumerable properties. Functions and DOM
         * nodes are **not** supported.
         *
         * @static
         * @memberOf _
         * @category Lang
         * @param {*} value The value to compare.
         * @param {*} other The other value to compare.
         * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
         * @example
         *
         * var object = { 'user': 'fred' };
         * var other = { 'user': 'fred' };
         *
         * _.isEqual(object, other);
         * // => true
         *
         * object === other;
         * // => false
         */
        isEqual(
            value: any,
            other: any
        ): boolean;
    }

    interface LoDashImplicitWrapperBase<T, TWrapper> {
        /**
         * @see _.isEqual
         */
        isEqual(
            other: any
        ): boolean;
    }

    interface LoDashExplicitWrapperBase<T, TWrapper> {
        /**
         * @see _.isEqual
         */
        isEqual(
            other: any
        ): LoDashExplicitWrapper<boolean>;
    }

    // _.isEqualWith
    interface IsEqualCustomizer {
        (value: any, other: any, indexOrKey?: number|string): boolean;
    }

    interface LoDashStatic {
        /**
         * This method is like `_.isEqual` except that it accepts `customizer` which is
         * invoked to compare values. If `customizer` returns `undefined` comparisons are
         * handled by the method instead. The `customizer` is invoked with up to seven arguments:
         * (objValue, othValue [, index|key, object, other, stack]).
         *
         * @static
         * @memberOf _
         * @category Lang
         * @param {*} value The value to compare.
         * @param {*} other The other value to compare.
         * @param {Function} [customizer] The function to customize comparisons.
         * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
         * @example
         *
         * function isGreeting(value) {
         *   return /^h(?:i|ello)$/.test(value);
         * }
         *
         * function customizer(objValue, othValue) {
         *   if (isGreeting(objValue) && isGreeting(othValue)) {
         *     return true;
         *   }
         * }
         *
         * var array = ['hello', 'goodbye'];
         * var other = ['hi', 'goodbye'];
         *
         * _.isEqualWith(array, other, customizer);
         * // => true
         */
        isEqualWith(
            value: any,
            other: any,
            customizer: IsEqualCustomizer
        ): boolean;
    }

    interface LoDashImplicitWrapperBase<T, TWrapper> {
        /**
         * @see _.isEqualWith
         */
        isEqualWith(
            other: any,
            customizer: IsEqualCustomizer
        ): boolean;
    }

    interface LoDashExplicitWrapperBase<T, TWrapper> {
        /**
         * @see _.isEqualWith
         */
        isEqualWith(
            other: any,
            customizer: IsEqualCustomizer
        ): LoDashExplicitWrapper<boolean>;
    }

    //_.isError
    interface LoDashStatic {
        /**
         * Checks if value is an Error, EvalError, RangeError, ReferenceError, SyntaxError, TypeError, or URIError
         * object.
         *
         * @param value The value to check.
         * @return Returns true if value is an error object, else false.
         */
        isError(value: any): value is Error;
    }

    interface LoDashImplicitWrapperBase<T, TWrapper> {
        /**
         * @see _.isError
         */
        isError(): boolean;
    }

    interface LoDashExplicitWrapperBase<T, TWrapper> {
        /**
         * @see _.isError
         */
        isError(): LoDashExplicitWrapper<boolean>;
    }

    //_.isFinite
    interface LoDashStatic {
        /**
         * Checks if value is a finite primitive number.
         *
         * Note: This method is based on Number.isFinite.
         *
         * @param value The value to check.
         * @return Returns true if value is a finite number, else false.
         */
        isFinite(value?: any): boolean;
    }

    interface LoDashImplicitWrapperBase<T, TWrapper> {
        /**
         * @see _.isFinite
         */
        isFinite(): boolean;
    }

    interface LoDashExplicitWrapperBase<T, TWrapper> {
        /**
         * @see _.isFinite
         */
        isFinite(): LoDashExplicitWrapper<boolean>;
    }

    //_.isFunction
    interface LoDashStatic {
        /**
         * Checks if value is classified as a Function object.
         *
         * @param value The value to check.
         * @return Returns true if value is correctly classified, else false.
         */
        isFunction(value?: any): value is Function;
    }

    interface LoDashImplicitWrapperBase<T, TWrapper> {
        /**
         * @see _.isFunction
         */
        isFunction(): boolean;
    }

    interface LoDashExplicitWrapperBase<T, TWrapper> {
        /**
         * @see _.isFunction
         */
        isFunction(): LoDashExplicitWrapper<boolean>;
    }

    //_.isInteger
    interface LoDashStatic {
        /**
         * Checks if `value` is an integer.
         *
         * **Note:** This method is based on [`Number.isInteger`](https://mdn.io/Number/isInteger).
         *
         * @static
         * @memberOf _
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is an integer, else `false`.
         * @example
         *
         * _.isInteger(3);
         * // => true
         *
         * _.isInteger(Number.MIN_VALUE);
         * // => false
         *
         * _.isInteger(Infinity);
         * // => false
         *
         * _.isInteger('3');
         * // => false
         */
        isInteger(value?: any): boolean;
    }

    interface LoDashImplicitWrapperBase<T, TWrapper> {
        /**
         * @see _.isInteger
         */
        isInteger(): boolean;
    }

    interface LoDashExplicitWrapperBase<T, TWrapper> {
        /**
         * @see _.isInteger
         */
        isInteger(): LoDashExplicitWrapper<boolean>;
    }

    //_.isLength
    interface LoDashStatic {
        /**
         * Checks if `value` is a valid array-like length.
         *
         * **Note:** This function is loosely based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
         *
         * @static
         * @memberOf _
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
         * @example
         *
         * _.isLength(3);
         * // => true
         *
         * _.isLength(Number.MIN_VALUE);
         * // => false
         *
         * _.isLength(Infinity);
         * // => false
         *
         * _.isLength('3');
         * // => false
         */
        isLength(value?: any): boolean;
    }

    interface LoDashImplicitWrapperBase<T, TWrapper> {
        /**
         * @see _.isLength
         */
        isLength(): boolean;
    }

    interface LoDashExplicitWrapperBase<T, TWrapper> {
        /**
         * @see _.isLength
         */
        isLength(): LoDashExplicitWrapper<boolean>;
    }

    //_.isMatch
    interface isMatchCustomizer {
        (value: any, other: any, indexOrKey?: number|string): boolean;
    }

    interface LoDashStatic {
        /**
         * Performs a deep comparison between `object` and `source` to determine if
         * `object` contains equivalent property values.
         *
         * **Note:** This method supports comparing the same values as `_.isEqual`.
         *
         * @static
         * @memberOf _
         * @category Lang
         * @param {Object} object The object to inspect.
         * @param {Object} source The object of property values to match.
         * @returns {boolean} Returns `true` if `object` is a match, else `false`.
         * @example
         *
         * var object = { 'user': 'fred', 'age': 40 };
         *
         * _.isMatch(object, { 'age': 40 });
         * // => true
         *
         * _.isMatch(object, { 'age': 36 });
         * // => false
         */
        isMatch(object: Object, source: Object): boolean;
    }

    interface LoDashImplicitObjectWrapper<T> {
        /**
         * @see _.isMatch
         */
        isMatch(source: Object): boolean;
    }

    //_.isMatchWith
    interface isMatchWithCustomizer {
        (value: any, other: any, indexOrKey?: number|string): boolean;
    }

    interface LoDashStatic {
        /**
         * This method is like `_.isMatch` except that it accepts `customizer` which
         * is invoked to compare values. If `customizer` returns `undefined` comparisons
         * are handled by the method instead. The `customizer` is invoked with three
         * arguments: (objValue, srcValue, index|key, object, source).
         *
         * @static
         * @memberOf _
         * @category Lang
         * @param {Object} object The object to inspect.
         * @param {Object} source The object of property values to match.
         * @param {Function} [customizer] The function to customize comparisons.
         * @returns {boolean} Returns `true` if `object` is a match, else `false`.
         * @example
         *
         * function isGreeting(value) {
         *   return /^h(?:i|ello)$/.test(value);
         * }
         *
         * function customizer(objValue, srcValue) {
         *   if (isGreeting(objValue) && isGreeting(srcValue)) {
         *     return true;
         *   }
         * }
         *
         * var object = { 'greeting': 'hello' };
         * var source = { 'greeting': 'hi' };
         *
         * _.isMatchWith(object, source, customizer);
         * // => true
         */
        isMatchWith(object: Object, source: Object, customizer: isMatchWithCustomizer): boolean;
    }

    interface LoDashImplicitObjectWrapper<T> {
        /**
         * @see _.isMatchWith
         */
        isMatchWith(source: Object, customizer: isMatchWithCustomizer): boolean;
    }

    //_.isNaN
    interface LoDashStatic {
        /**
         * Checks if value is NaN.
         *
         * Note: This method is not the same as isNaN which returns true for undefined and other non-numeric values.
         *
         * @param value The value to check.
         * @return Returns true if value is NaN, else false.
         */
        isNaN(value?: any): boolean;
    }

    interface LoDashImplicitWrapperBase<T, TWrapper> {
        /**
         * @see _.isNaN
         */
        isNaN(): boolean;
    }

    interface LoDashExplicitWrapperBase<T, TWrapper> {
        /**
         * @see _.isNaN
         */
        isNaN(): LoDashExplicitWrapper<boolean>;
    }

    //_.isNative
    interface LoDashStatic {
        /**
         * Checks if value is a native function.
         * @param value The value to check.
         *
         * @retrun Returns true if value is a native function, else false.
         */
        isNative(value: any): value is Function;
    }

    interface LoDashImplicitWrapperBase<T, TWrapper> {
        /**
         * see _.isNative
         */
        isNative(): boolean;
    }

    interface LoDashExplicitWrapperBase<T, TWrapper> {
        /**
         * see _.isNative
         */
        isNative(): LoDashExplicitWrapper<boolean>;
    }

    //_.isNil
    interface LoDashStatic {
        /**
         * Checks if `value` is `null` or `undefined`.
         *
         * @static
         * @memberOf _
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
         * @example
         *
         * _.isNil(null);
         * // => true
         *
         * _.isNil(void 0);
         * // => true
         *
         * _.isNil(NaN);
         * // => false
         */
        isNil(value?: any): boolean;
    }

    interface LoDashImplicitWrapperBase<T, TWrapper> {
        /**
         * see _.isNil
         */
        isNil(): boolean;
    }

    interface LoDashExplicitWrapperBase<T, TWrapper> {
        /**
         * see _.isNil
         */
        isNil(): LoDashExplicitWrapper<boolean>;
    }

    //_.isNull
    interface LoDashStatic {
        /**
         * Checks if value is null.
         *
         * @param value The value to check.
         * @return Returns true if value is null, else false.
         */
        isNull(value?: any): boolean;
    }

    interface LoDashImplicitWrapperBase<T, TWrapper> {
        /**
         * see _.isNull
         */
        isNull(): boolean;
    }

    interface LoDashExplicitWrapperBase<T, TWrapper> {
        /**
         * see _.isNull
         */
        isNull(): LoDashExplicitWrapper<boolean>;
    }

    //_.isNumber
    interface LoDashStatic {
        /**
         * Checks if value is classified as a Number primitive or object.
         *
         * Note: To exclude Infinity, -Infinity, and NaN, which are classified as numbers, use the _.isFinite method.
         *
         * @param value The value to check.
         * @return Returns true if value is correctly classified, else false.
         */
        isNumber(value?: any): value is number;
    }

    interface LoDashImplicitWrapperBase<T, TWrapper> {
        /**
         * see _.isNumber
         */
        isNumber(): boolean;
    }

    interface LoDashExplicitWrapperBase<T, TWrapper> {
        /**
         * see _.isNumber
         */
        isNumber(): LoDashExplicitWrapper<boolean>;
    }

    //_.isObject
    interface LoDashStatic {
        /**
         * Checks if value is the language type of Object. (e.g. arrays, functions, objects, regexes, new Number(0),
         * and new String(''))
         *
         * @param value The value to check.
         * @return Returns true if value is an object, else false.
         */
        isObject(value?: any): boolean;
    }

    interface LoDashImplicitWrapperBase<T, TWrapper> {
        /**
         * see _.isObject
         */
        isObject(): boolean;
    }

    interface LoDashExplicitWrapperBase<T, TWrapper> {
        /**
         * see _.isObject
         */
        isObject(): LoDashExplicitWrapper<boolean>;
    }

    //_.isObjectLike
    interface LoDashStatic {
        /**
         * Checks if `value` is object-like. A value is object-like if it's not `null`
         * and has a `typeof` result of "object".
         *
         * @static
         * @memberOf _
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
         * @example
         *
         * _.isObjectLike({});
         * // => true
         *
         * _.isObjectLike([1, 2, 3]);
         * // => true
         *
         * _.isObjectLike(_.noop);
         * // => false
         *
         * _.isObjectLike(null);
         * // => false
         */
        isObjectLike(value?: any): boolean;
    }

    interface LoDashImplicitWrapperBase<T, TWrapper> {
        /**
         * see _.isObjectLike
         */
        isObjectLike(): boolean;
    }

    interface LoDashExplicitWrapperBase<T, TWrapper> {
        /**
         * see _.isObjectLike
         */
        isObjectLike(): LoDashExplicitWrapper<boolean>;
    }

    //_.isPlainObject
    interface LoDashStatic {
        /**
         * Checks if value is a plain object, that is, an object created by the Object constructor or one with a
         * [[Prototype]] of null.
         *
         * Note: This method assumes objects created by the Object constructor have no inherited enumerable properties.
         *
         * @param value The value to check.
         * @return Returns true if value is a plain object, else false.
         */
        isPlainObject(value?: any): boolean;
    }

    interface LoDashImplicitWrapperBase<T, TWrapper> {
        /**
         * see _.isPlainObject
         */
        isPlainObject(): boolean;
    }

    interface LoDashExplicitWrapperBase<T, TWrapper> {
        /**
         * see _.isPlainObject
         */
        isPlainObject(): LoDashExplicitWrapper<boolean>;
    }

    //_.isRegExp
    interface LoDashStatic {
        /**
         * Checks if value is classified as a RegExp object.
         * @param value The value to check.
         *
         * @return Returns true if value is correctly classified, else false.
         */
        isRegExp(value?: any): value is RegExp;
    }

    interface LoDashImplicitWrapperBase<T, TWrapper> {
        /**
         * see _.isRegExp
         */
        isRegExp(): boolean;
    }

    interface LoDashExplicitWrapperBase<T, TWrapper> {
        /**
         * see _.isRegExp
         */
        isRegExp(): LoDashExplicitWrapper<boolean>;
    }

    //_.isSafeInteger
    interface LoDashStatic {
        /**
         * Checks if `value` is a safe integer. An integer is safe if it's an IEEE-754
         * double precision number which isn't the result of a rounded unsafe integer.
         *
         * **Note:** This method is based on [`Number.isSafeInteger`](https://mdn.io/Number/isSafeInteger).
         *
         * @static
         * @memberOf _
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is a safe integer, else `false`.
         * @example
         *
         * _.isSafeInteger(3);
         * // => true
         *
         * _.isSafeInteger(Number.MIN_VALUE);
         * // => false
         *
         * _.isSafeInteger(Infinity);
         * // => false
         *
         * _.isSafeInteger('3');
         * // => false
         */
        isSafeInteger(value: any): boolean;
    }

    interface LoDashImplicitWrapperBase<T, TWrapper> {
        /**
         * see _.isSafeInteger
         */
        isSafeInteger(): boolean;
    }

    interface LoDashExplicitWrapperBase<T, TWrapper> {
        /**
         * see _.isSafeInteger
         */
        isSafeInteger(): LoDashExplicitWrapper<boolean>;
    }

    //_.isString
    interface LoDashStatic {
        /**
         * Checks if value is classified as a String primitive or object.
         *
         * @param value The value to check.
         * @return Returns true if value is correctly classified, else false.
         */
        isString(value?: any): value is string;
    }

    interface LoDashImplicitWrapperBase<T, TWrapper> {
        /**
         * see _.isString
         */
        isString(): boolean;
    }

    interface LoDashExplicitWrapperBase<T, TWrapper> {
        /**
         * see _.isString
         */
        isString(): LoDashExplicitWrapper<boolean>;
    }

    //_.isSymbol
    interface LoDashStatic {
        /**
         * Checks if `value` is classified as a `Symbol` primitive or object.
         *
         * @static
         * @memberOf _
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
         * @example
         *
         * _.isSymbol(Symbol.iterator);
         * // => true
         *
         * _.isSymbol('abc');
         * // => false
         */
        isSymbol(value: any): boolean;
    }

    interface LoDashImplicitWrapperBase<T, TWrapper> {
        /**
         * see _.isSymbol
         */
        isSymbol(): boolean;
    }

    interface LoDashExplicitWrapperBase<T, TWrapper> {
        /**
         * see _.isSymbol
         */
        isSymbol(): LoDashExplicitWrapper<boolean>;
    }

    //_.isTypedArray
    interface LoDashStatic {
        /**
         * Checks if value is classified as a typed array.
         *
         * @param value The value to check.
         * @return Returns true if value is correctly classified, else false.
         */
        isTypedArray(value: any): boolean;
    }

    interface LoDashImplicitWrapperBase<T, TWrapper> {
        /**
         * see _.isTypedArray
         */
        isTypedArray(): boolean;
    }

    interface LoDashExplicitWrapperBase<T, TWrapper> {
        /**
         * see _.isTypedArray
         */
        isTypedArray(): LoDashExplicitWrapper<boolean>;
    }

    //_.isUndefined
    interface LoDashStatic {
        /**
         * Checks if value is undefined.
         *
         * @param value The value to check.
         * @return Returns true if value is undefined, else false.
         */
        isUndefined(value: any): boolean;
    }

    interface LoDashImplicitWrapperBase<T, TWrapper> {
        /**
         * see _.isUndefined
         */
        isUndefined(): boolean;
    }

    interface LoDashExplicitWrapperBase<T, TWrapper> {
        /**
         * see _.isUndefined
         */
        isUndefined(): LoDashExplicitWrapper<boolean>;
    }

    //_.lt
    interface LoDashStatic {
        /**
         * Checks if value is less than other.
         *
         * @param value The value to compare.
         * @param other The other value to compare.
         * @return Returns true if value is less than other, else false.
         */
        lt(
            value: any,
            other: any
        ): boolean;
    }

    interface LoDashImplicitWrapperBase<T, TWrapper> {
        /**
         * @see _.lt
         */
        lt(other: any): boolean;
    }

    interface LoDashExplicitWrapperBase<T, TWrapper> {
        /**
         * @see _.lt
         */
        lt(other: any): LoDashExplicitWrapper<boolean>;
    }

    //_.lte
    interface LoDashStatic {
        /**
         * Checks if value is less than or equal to other.
         *
         * @param value The value to compare.
         * @param other The other value to compare.
         * @return Returns true if value is less than or equal to other, else false.
         */
        lte(
            value: any,
            other: any
        ): boolean;
    }

    interface LoDashImplicitWrapperBase<T, TWrapper> {
        /**
         * @see _.lte
         */
        lte(other: any): boolean;
    }

    interface LoDashExplicitWrapperBase<T, TWrapper> {
        /**
         * @see _.lte
         */
        lte(other: any): LoDashExplicitWrapper<boolean>;
    }

    //_.toArray
    interface LoDashStatic {
        /**
         * Converts value to an array.
         *
         * @param value The value to convert.
         * @return Returns the converted array.
         */
        toArray<T>(value: List<T>|Dictionary<T>|NumericDictionary<T>): T[];

        /**
         * @see _.toArray
         */
        toArray<TValue, TResult>(value: TValue): TResult[];

        /**
         * @see _.toArray
         */
        toArray<TResult>(value?: any): TResult[];
    }

    interface LoDashImplicitWrapper<T> {
        /**
         * @see _.toArray
         */
        toArray<TResult>(): LoDashImplicitArrayWrapper<TResult>;
    }

    interface LoDashImplicitArrayWrapper<T> {
        /**
         * @see _.toArray
         */
        toArray(): LoDashImplicitArrayWrapper<T>;
    }

    interface LoDashImplicitObjectWrapper<T> {
        /**
         * @see _.toArray
         */
        toArray<TResult>(): LoDashImplicitArrayWrapper<TResult>;
    }

    interface LoDashExplicitWrapper<T> {
        /**
         * @see _.toArray
         */
        toArray<TResult>(): LoDashExplicitArrayWrapper<TResult>;
    }

    interface LoDashExplicitArrayWrapper<T> {
        /**
         * @see _.toArray
         */
        toArray(): LoDashExplicitArrayWrapper<T>;
    }

    interface LoDashExplicitObjectWrapper<T> {
        /**
         * @see _.toArray
         */
        toArray<TResult>(): LoDashExplicitArrayWrapper<TResult>;
    }

    //_.toPlainObject
    interface LoDashStatic {
        /**
         * Converts value to a plain object flattening inherited enumerable properties of value to own properties
         * of the plain object.
         *
         * @param value The value to convert.
         * @return Returns the converted plain object.
         */
        toPlainObject<TResult extends {}>(value?: any): TResult;
    }

    interface LoDashImplicitWrapperBase<T, TWrapper> {
        /**
         * @see _.toPlainObject
         */
        toPlainObject<TResult extends {}>(): LoDashImplicitObjectWrapper<TResult>;
    }

    //_.toInteger
    interface LoDashStatic {
        /**
         * Converts `value` to an integer.
         *
         * **Note:** This function is loosely based on [`ToInteger`](http://www.ecma-international.org/ecma-262/6.0/#sec-tointeger).
         *
         * @static
         * @memberOf _
         * @category Lang
         * @param {*} value The value to convert.
         * @returns {number} Returns the converted integer.
         * @example
         *
         * _.toInteger(3);
         * // => 3
         *
         * _.toInteger(Number.MIN_VALUE);
         * // => 0
         *
         * _.toInteger(Infinity);
         * // => 1.7976931348623157e+308
         *
         * _.toInteger('3');
         * // => 3
         */
        toInteger(value: any): number;
    }

    interface LoDashImplicitWrapperBase<T, TWrapper> {
        /**
         * @see _.toInteger
         */
        toInteger(): LoDashImplicitWrapper<number>;
    }

    interface LoDashExplicitWrapperBase<T, TWrapper> {
        /**
         * @see _.toInteger
         */
        toInteger(): LoDashExplicitWrapper<number>;
    }

    //_.toLength
    interface LoDashStatic {
        /**
         * Converts `value` to an integer suitable for use as the length of an
         * array-like object.
         *
         * **Note:** This method is based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
         *
         * @static
         * @memberOf _
         * @category Lang
         * @param {*} value The value to convert.
         * @return {number} Returns the converted integer.
         * @example
         *
         * _.toLength(3);
         * // => 3
         *
         * _.toLength(Number.MIN_VALUE);
         * // => 0
         *
         * _.toLength(Infinity);
         * // => 4294967295
         *
         * _.toLength('3');
         * // => 3
         */
        toLength(value: any): number;
    }

    interface LoDashImplicitWrapperBase<T, TWrapper> {
        /**
         * @see _.toLength
         */
        toLength(): LoDashImplicitWrapper<number>;
    }

    interface LoDashExplicitWrapperBase<T, TWrapper> {
        /**
         * @see _.toLength
         */
        toLength(): LoDashExplicitWrapper<number>;
    }

    //_.toNumber
    interface LoDashStatic {
        /**
         * Converts `value` to a number.
         *
         * @static
         * @memberOf _
         * @category Lang
         * @param {*} value The value to process.
         * @returns {number} Returns the number.
         * @example
         *
         * _.toNumber(3);
         * // => 3
         *
         * _.toNumber(Number.MIN_VALUE);
         * // => 5e-324
         *
         * _.toNumber(Infinity);
         * // => Infinity
         *
         * _.toNumber('3');
         * // => 3
         */
        toNumber(value: any): number;
    }

    interface LoDashImplicitWrapperBase<T, TWrapper> {
        /**
         * @see _.toNumber
         */
        toNumber(): LoDashImplicitWrapper<number>;
    }

    interface LoDashExplicitWrapperBase<T, TWrapper> {
        /**
         * @see _.toNumber
         */
        toNumber(): LoDashExplicitWrapper<number>;
    }

    //_.toSafeInteger
    interface LoDashStatic {
        /**
         * Converts `value` to a safe integer. A safe integer can be compared and
         * represented correctly.
         *
         * @static
         * @memberOf _
         * @category Lang
         * @param {*} value The value to convert.
         * @returns {number} Returns the converted integer.
         * @example
         *
         * _.toSafeInteger(3);
         * // => 3
         *
         * _.toSafeInteger(Number.MIN_VALUE);
         * // => 0
         *
         * _.toSafeInteger(Infinity);
         * // => 9007199254740991
         *
         * _.toSafeInteger('3');
         * // => 3
         */
        toSafeInteger(value: any): number;
    }

    interface LoDashImplicitWrapperBase<T, TWrapper> {
        /**
         * @see _.toSafeInteger
         */
        toSafeInteger(): LoDashImplicitWrapper<number>;
    }

    interface LoDashExplicitWrapperBase<T, TWrapper> {
        /**
         * @see _.toSafeInteger
         */
        toSafeInteger(): LoDashExplicitWrapper<number>;
    }

    //_.toString DUMMY
    interface LoDashStatic {
        /**
         * Converts `value` to a string if it's not one. An empty string is returned
         * for `null` and `undefined` values. The sign of `-0` is preserved.
         *
         * @static
         * @memberOf _
         * @category Lang
         * @param {*} value The value to process.
         * @returns {string} Returns the string.
         * @example
         *
         * _.toString(null);
         * // => ''
         *
         * _.toString(-0);
         * // => '-0'
         *
         * _.toString([1, 2, 3]);
         * // => '1,2,3'
         */
        toString(value: any): string;
    }

    /********
     * Math *
     ********/

    //_.add
    interface LoDashStatic {
        /**
         * Adds two numbers.
         *
         * @param augend The first number to add.
         * @param addend The second number to add.
         * @return Returns the sum.
         */
        add(
            augend: number,
            addend: number
        ): number;
    }

    interface LoDashImplicitWrapper<T> {
        /**
         * @see _.add
         */
        add(addend: number): number;
    }

    interface LoDashExplicitWrapper<T> {
        /**
         * @see _.add
         */
        add(addend: number): LoDashExplicitWrapper<number>;
    }

    //_.ceil
    interface LoDashStatic {
        /**
         * Calculates n rounded up to precision.
         *
         * @param n The number to round up.
         * @param precision The precision to round up to.
         * @return Returns the rounded up number.
         */
        ceil(
            n: number,
            precision?: number
        ): number;
    }

    interface LoDashImplicitWrapper<T> {
        /**
         * @see _.ceil
         */
        ceil(precision?: number): number;
    }

    interface LoDashExplicitWrapper<T> {
        /**
         * @see _.ceil
         */
        ceil(precision?: number): LoDashExplicitWrapper<number>;
    }

    //_.floor
    interface LoDashStatic {
        /**
         * Calculates n rounded down to precision.
         *
         * @param n The number to round down.
         * @param precision The precision to round down to.
         * @return Returns the rounded down number.
         */
        floor(
            n: number,
            precision?: number
        ): number;
    }

    interface LoDashImplicitWrapper<T> {
        /**
         * @see _.floor
         */
        floor(precision?: number): number;
    }

    interface LoDashExplicitWrapper<T> {
        /**
         * @see _.floor
         */
        floor(precision?: number): LoDashExplicitWrapper<number>;
    }

    //_.max
    interface LoDashStatic {
         /**
          * Computes the maximum value of `array`. If `array` is empty or falsey
          * `undefined` is returned.
          *
          * @static
          * @memberOf _
          * @category Math
          * @param {Array} array The array to iterate over.
          * @returns {*} Returns the maximum value.
          */
        max<T>(
            collection: List<T>
        ): T;
    }

    interface LoDashImplicitArrayWrapper<T> {
        /**
         * @see _.max
         */
        max(): T;
    }

    interface LoDashImplicitObjectWrapper<T> {
        /**
         * @see _.max
         */
        max<T>(): T;
    }

    //_.maxBy
    interface LoDashStatic {
        /**
         * This method is like `_.max` except that it accepts `iteratee` which is
         * invoked for each element in `array` to generate the criterion by which
         * the value is ranked. The iteratee is invoked with one argument: (value).
         *
         * @static
         * @memberOf _
         * @category Math
         * @param {Array} array The array to iterate over.
         * @param {Function|Object|string} [iteratee=_.identity] The iteratee invoked per element.
         * @returns {*} Returns the maximum value.
         * @example
         *
         * var objects = [{ 'n': 1 }, { 'n': 2 }];
         *
         * _.maxBy(objects, function(o) { return o.a; });
         * // => { 'n': 2 }
         *
         * // using the `_.property` iteratee shorthand
         * _.maxBy(objects, 'n');
         * // => { 'n': 2 }
         */
        maxBy<T>(
            collection: List<T>,
            iteratee?: ListIterator<T, any>
        ): T;

        /**
         * @see _.maxBy
         */
        maxBy<T>(
            collection: Dictionary<T>,
            iteratee?: DictionaryIterator<T, any>
        ): T;

        /**
         * @see _.maxBy
         */
        maxBy<T>(
            collection: List<T>|Dictionary<T>,
            iteratee?: string
        ): T;

        /**
         * @see _.maxBy
         */
        maxBy<TObject extends {}, T>(
            collection: List<T>|Dictionary<T>,
            whereValue?: TObject
        ): T;
    }

    interface LoDashImplicitArrayWrapper<T> {
        /**
         * @see _.maxBy
         */
        maxBy(
            iteratee?: ListIterator<T, any>
        ): T;

        /**
         * @see _.maxBy
         */
        maxBy(
            iteratee?: string
        ): T;

        /**
         * @see _.maxBy
         */
        maxBy<TObject extends {}>(
            whereValue?: TObject
        ): T;
    }

    interface LoDashImplicitObjectWrapper<T> {
        /**
         * @see _.maxBy
         */
        maxBy<T>(
            iteratee?: ListIterator<T, any>|DictionaryIterator<T, any>,
            thisArg?: any
        ): T;

        /**
         * @see _.maxBy
         */
        maxBy<T>(
            iteratee?: string,
            thisArg?: any
        ): T;

        /**
         * @see _.maxBy
         */
        maxBy<TObject extends {}, T>(
            whereValue?: TObject
        ): T;
    }

    //_.mean
    interface LoDashStatic {
        /**
         * Computes the mean of the values in `array`.
         *
         * @static
         * @memberOf _
         * @category Math
         * @param {Array} array The array to iterate over.
         * @returns {number} Returns the mean.
         * @example
         *
         * _.mean([4, 2, 8, 6]);
         * // => 5
         */
        mean<T>(
            collection: List<T>
        ): number;
    }

    interface LoDashImplicitArrayWrapper<T> {
        /**
         * @see _.mean
         */
        mean<T>(): number;

        /**
         * @see _.mean
         */
        mean(): number;
    }

    //_.min
    interface LoDashStatic {
        /**
         * Computes the minimum value of `array`. If `array` is empty or falsey
         * `undefined` is returned.
         *
         * @static
         * @memberOf _
         * @category Math
         * @param {Array} array The array to iterate over.
         * @returns {*} Returns the minimum value.
         */
        min<T>(
            collection: List<T>
        ): T;
    }

    interface LoDashImplicitArrayWrapper<T> {
        /**
         * @see _.min
         */
        min(): T;
    }

    interface LoDashImplicitObjectWrapper<T> {
        /**
         * @see _.min
         */
        min<T>(): T;
    }

    //_.minBy
    interface LoDashStatic {
        /**
         * This method is like `_.min` except that it accepts `iteratee` which is
         * invoked for each element in `array` to generate the criterion by which
         * the value is ranked. The iteratee is invoked with one argument: (value).
         *
         * @static
         * @memberOf _
         * @category Math
         * @param {Array} array The array to iterate over.
         * @param {Function|Object|string} [iteratee=_.identity] The iteratee invoked per element.
         * @returns {*} Returns the minimum value.
         * @example
         *
         * var objects = [{ 'n': 1 }, { 'n': 2 }];
         *
         * _.minBy(objects, function(o) { return o.a; });
         * // => { 'n': 1 }
         *
         * // using the `_.property` iteratee shorthand
         * _.minBy(objects, 'n');
         * // => { 'n': 1 }
         */
        minBy<T>(
            collection: List<T>,
            iteratee?: ListIterator<T, any>
        ): T;

        /**
         * @see _.minBy
         */
        minBy<T>(
            collection: Dictionary<T>,
            iteratee?: DictionaryIterator<T, any>
        ): T;

        /**
         * @see _.minBy
         */
        minBy<T>(
            collection: List<T>|Dictionary<T>,
            iteratee?: string
        ): T;

        /**
         * @see _.minBy
         */
        minBy<TObject extends {}, T>(
            collection: List<T>|Dictionary<T>,
            whereValue?: TObject
        ): T;
    }

    interface LoDashImplicitArrayWrapper<T> {
        /**
         * @see _.minBy
         */
        minBy(
            iteratee?: ListIterator<T, any>
        ): T;

        /**
         * @see _.minBy
         */
        minBy(
            iteratee?: string
        ): T;

        /**
         * @see _.minBy
         */
        minBy<TObject extends {}>(
            whereValue?: TObject
        ): T;
    }

    interface LoDashImplicitObjectWrapper<T> {
        /**
         * @see _.minBy
         */
        minBy<T>(
            iteratee?: ListIterator<T, any>|DictionaryIterator<T, any>,
            thisArg?: any
        ): T;

        /**
         * @see _.minBy
         */
        minBy<T>(
            iteratee?: string,
            thisArg?: any
        ): T;

        /**
         * @see _.minBy
         */
        minBy<TObject extends {}, T>(
            whereValue?: TObject
        ): T;
    }

    //_.round
    interface LoDashStatic {
        /**
         * Calculates n rounded to precision.
         *
         * @param n The number to round.
         * @param precision The precision to round to.
         * @return Returns the rounded number.
         */
        round(
            n: number,
            precision?: number
        ): number;
    }

    interface LoDashImplicitWrapper<T> {
        /**
         * @see _.round
         */
        round(precision?: number): number;
    }

    interface LoDashExplicitWrapper<T> {
        /**
         * @see _.round
         */
        round(precision?: number): LoDashExplicitWrapper<number>;
    }

    //_.sum
    interface LoDashStatic {
        /**
         * Computes the sum of the values in `array`.
         *
         * @static
         * @memberOf _
         * @category Math
         * @param {Array} array The array to iterate over.
         * @returns {number} Returns the sum.
         * @example
         *
         * _.sum([4, 2, 8, 6]);
         * // => 20
         */
        sum<T>(collection: List<T>): number;

        /**
         * @see _.sum
         */
        sum(collection: List<number>|Dictionary<number>): number;
    }

    interface LoDashImplicitArrayWrapper<T> {
        /**
         * @see _.sum
         */
        sum(): number;
    }

    interface LoDashImplicitObjectWrapper<T> {
        /**
         * @see _.sum
         **/
        sum<TValue>(): number;

        /**
         * @see _.sum
         */
        sum(): number;
    }

    interface LoDashExplicitArrayWrapper<T> {
        /**
         * @see _.sum
         */
        sum(): LoDashExplicitWrapper<number>;
    }

    interface LoDashExplicitObjectWrapper<T> {
        /**
         * @see _.sum
         */
        sum<TValue>(): LoDashExplicitWrapper<number>;

        /**
         * @see _.sum
         */
        sum(): LoDashExplicitWrapper<number>;
    }

    //_.sumBy
    interface LoDashStatic {
        /**
         * This method is like `_.sum` except that it accepts `iteratee` which is
         * invoked for each element in `array` to generate the value to be summed.
         * The iteratee is invoked with one argument: (value).
         *
         * @static
         * @memberOf _
         * @category Math
         * @param {Array} array The array to iterate over.
         * @param {Function|Object|string} [iteratee=_.identity] The iteratee invoked per element.
         * @returns {number} Returns the sum.
         * @example
         *
         * var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
         *
         * _.sumBy(objects, function(o) { return o.n; });
         * // => 20
         *
         * // using the `_.property` iteratee shorthand
         * _.sumBy(objects, 'n');
         * // => 20
         */
        sumBy<T>(
            collection: List<T>,
            iteratee: ListIterator<T, number>
        ): number;

        /**
         * @see _.sumBy
         **/
        sumBy<T>(
            collection: Dictionary<T>,
            iteratee: DictionaryIterator<T, number>
        ): number;

        /**
         * @see _.sumBy
         */
        sumBy<T>(
            collection: List<number>|Dictionary<number>,
            iteratee: string
        ): number;

        /**
         * @see _.sumBy
         */
        sumBy<T>(collection: List<T>|Dictionary<T>): number;

        /**
         * @see _.sumBy
         */
        sumBy(collection: List<number>|Dictionary<number>): number;
    }

    interface LoDashImplicitArrayWrapper<T> {
        /**
         * @see _.sumBy
         */
        sumBy(
            iteratee: ListIterator<T, number>
        ): number;

        /**
         * @see _.sumBy
         */
        sumBy(iteratee: string): number;

        /**
         * @see _.sumBy
         */
        sumBy(): number;
    }

    interface LoDashImplicitObjectWrapper<T> {
        /**
         * @see _.sumBy
         **/
        sumBy<TValue>(
            iteratee: ListIterator<TValue, number>|DictionaryIterator<TValue, number>
        ): number;

        /**
         * @see _.sumBy
         */
        sumBy(iteratee: string): number;

        /**
         * @see _.sumBy
         */
        sumBy(): number;
    }

    interface LoDashExplicitArrayWrapper<T> {
        /**
         * @see _.sumBy
         */
        sumBy(
            iteratee: ListIterator<T, number>
        ): LoDashExplicitWrapper<number>;

        /**
         * @see _.sumBy
         */
        sumBy(iteratee: string): LoDashExplicitWrapper<number>;

        /**
         * @see _.sumBy
         */
        sumBy(): LoDashExplicitWrapper<number>;
    }

    interface LoDashExplicitObjectWrapper<T> {
        /**
         * @see _.sumBy
         */
        sumBy<TValue>(
            iteratee: ListIterator<TValue, number>|DictionaryIterator<TValue, number>
        ): LoDashExplicitWrapper<number>;

        /**
         * @see _.sumBy
         */
        sumBy(iteratee: string): LoDashExplicitWrapper<number>;

        /**
         * @see _.sumBy
         */
        sumBy(): LoDashExplicitWrapper<number>;
    }

    /**********
     * Number *
     **********/

    //_.subtract
    interface LoDashStatic {
        /**
         * Subtract two numbers.
         *
         * @static
         * @memberOf _
         * @category Math
         * @param {number} minuend The first number in a subtraction.
         * @param {number} subtrahend The second number in a subtraction.
         * @returns {number} Returns the difference.
         * @example
         *
         * _.subtract(6, 4);
         * // => 2
         */
        subtract(
            minuend: number,
            subtrahend: number
        ): number;
    }

    interface LoDashImplicitWrapper<T> {
        /**
         * @see _.subtract
         */
        subtract(
            subtrahend: number
        ): number;
    }

    interface LoDashExplicitWrapper<T> {
        /**
         * @see _.subtract
         */
        subtract(
            subtrahend: number
        ): LoDashExplicitWrapper<number>;
    }

    //_.clamp
    interface LoDashStatic {
        /**
         * Clamps `number` within the inclusive `lower` and `upper` bounds.
         *
         * @static
         * @memberOf _
         * @category Number
         * @param {number} number The number to clamp.
         * @param {number} [lower] The lower bound.
         * @param {number} upper The upper bound.
         * @returns {number} Returns the clamped number.
         * @example
         *
         * _.clamp(-10, -5, 5);
         * // => -5
         *
         * _.clamp(10, -5, 5);
         * // => 5
         */
        clamp(
            number: number,
            lower: number,
            upper: number
        ): number;
    }

    interface LoDashImplicitWrapper<T> {
        /**
         * @see _.clamp
         */
        clamp(
            lower: number,
            upper: number
        ): number;
    }

    interface LoDashExplicitWrapper<T> {
        /**
         * @see _.clamp
         */
        clamp(
            lower: number,
            upper: number
        ): LoDashExplicitWrapper<number>;
    }

    //_.inRange
    interface LoDashStatic {
        /**
         * Checks if n is between start and up to but not including, end. If end is not specified it’s set to start
         * with start then set to 0.
         *
         * @param n The number to check.
         * @param start The start of the range.
         * @param end The end of the range.
         * @return Returns true if n is in the range, else false.
         */
        inRange(
            n: number,
            start: number,
            end: number
        ): boolean;


        /**
         * @see _.inRange
         */
        inRange(
            n: number,
            end: number
        ): boolean;
    }

    interface LoDashImplicitWrapper<T> {
        /**
         * @see _.inRange
         */
        inRange(
            start: number,
            end: number
        ): boolean;

        /**
         * @see _.inRange
         */
        inRange(end: number): boolean;
    }

    interface LoDashExplicitWrapper<T> {
        /**
         * @see _.inRange
         */
        inRange(
            start: number,
            end: number
        ): LoDashExplicitWrapper<boolean>;

        /**
         * @see _.inRange
         */
        inRange(end: number): LoDashExplicitWrapper<boolean>;
    }

    //_.random
    interface LoDashStatic {
        /**
         * Produces a random number between min and max (inclusive). If only one argument is provided a number between
         * 0 and the given number is returned. If floating is true, or either min or max are floats, a floating-point
         * number is returned instead of an integer.
         *
         * @param min The minimum possible value.
         * @param max The maximum possible value.
         * @param floating Specify returning a floating-point number.
         * @return Returns the random number.
         */
        random(
            min?: number,
            max?: number,
            floating?: boolean
        ): number;

        /**
         * @see _.random
         */
        random(
            min?: number,
            floating?: boolean
        ): number;

        /**
         * @see _.random
         */
        random(floating?: boolean): number;
    }

    interface LoDashImplicitWrapper<T> {
        /**
         * @see _.random
         */
        random(
            max?: number,
            floating?: boolean
        ): number;

        /**
         * @see _.random
         */
        random(floating?: boolean): number;
    }

    interface LoDashExplicitWrapper<T> {
        /**
         * @see _.random
         */
        random(
            max?: number,
            floating?: boolean
        ): LoDashExplicitWrapper<number>;

        /**
         * @see _.random
         */
        random(floating?: boolean): LoDashExplicitWrapper<number>;
    }

    /**********
     * Object *
     **********/

    //_.assign
    interface LoDashStatic {
        /**
         * Assigns own enumerable properties of source objects to the destination
         * object. Source objects are applied from left to right. Subsequent sources
         * overwrite property assignments of previous sources.
         *
         * **Note:** This method mutates `object` and is loosely based on
         * [`Object.assign`](https://mdn.io/Object/assign).
         *
         * @static
         * @memberOf _
         * @category Object
         * @param {Object} object The destination object.
         * @param {...Object} [sources] The source objects.
         * @returns {Object} Returns `object`.
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
        assign<TObject extends {}, TSource extends {}, TResult extends {}>(
            object: TObject,
            source: TSource
        ): TResult;

        /**
         * @see assign
         */
        assign<TObject extends {}, TSource1 extends {}, TSource2 extends {}, TResult extends {}>(
            object: TObject,
            source1: TSource1,
            source2: TSource2
        ): TResult;

        /**
         * @see assign
         */
        assign<TObject extends {}, TSource1 extends {}, TSource2 extends {}, TSource3 extends {}, TResult extends {}>(
            object: TObject,
            source1: TSource1,
            source2: TSource2,
            source3: TSource3
        ): TResult;

        /**
         * @see assign
         */
        assign<TObject extends {}, TSource1 extends {}, TSource2 extends {}, TSource3 extends {}, TSource4 extends {},
            TResult extends {}>
        (
            object: TObject,
            source1: TSource1,
            source2: TSource2,
            source3: TSource3,
            source4: TSource4
        ): TResult;

        /**
         * @see _.assign
         */
        assign<TObject extends {}>(object: TObject): TObject;

        /**
         * @see _.assign
         */
        assign<TObject extends {}, TResult extends {}>(
            object: TObject, ...otherArgs: any[]
        ): TResult;
    }

    interface LoDashImplicitObjectWrapper<T> {
        /**
         * @see _.assign
         */
        assign<TSource extends {}, TResult extends {}>(
            source: TSource
        ): LoDashImplicitObjectWrapper<TResult>;

        /**
         * @see assign
         */
        assign<TSource1 extends {}, TSource2 extends {}, TResult extends {}>(
            source1: TSource1,
            source2: TSource2
        ): LoDashImplicitObjectWrapper<TResult>;

        /**
         * @see assign
         */
        assign<TSource1 extends {}, TSource2 extends {}, TSource3 extends {}, TResult extends {}>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3
        ): LoDashImplicitObjectWrapper<TResult>;

        /**
         * @see assign
         */
        assign<TSource1 extends {}, TSource2 extends {}, TSource3 extends {}, TSource4 extends {}, TResult extends {}>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3,
            source4: TSource4
        ): LoDashImplicitObjectWrapper<TResult>;

        /**
         * @see _.assign
         */
        assign(): LoDashImplicitObjectWrapper<T>;

        /**
         * @see _.assign
         */
        assign<TResult extends {}>(...otherArgs: any[]): LoDashImplicitObjectWrapper<TResult>;
    }

    interface LoDashExplicitObjectWrapper<T> {
        /**
         * @see _.assign
         */
        assign<TSource extends {}, TResult extends {}>(
            source: TSource
        ): LoDashExplicitObjectWrapper<TResult>;

        /**
         * @see assign
         */
        assign<TSource1 extends {}, TSource2 extends {}, TResult extends {}>(
            source1: TSource1,
            source2: TSource2
        ): LoDashExplicitObjectWrapper<TResult>;

        /**
         * @see assign
         */
        assign<TSource1 extends {}, TSource2 extends {}, TSource3 extends {}, TResult extends {}>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3
        ): LoDashExplicitObjectWrapper<TResult>;

        /**
         * @see assign
         */
        assign<TSource1 extends {}, TSource2 extends {}, TSource3 extends {}, TSource4 extends {}, TResult extends {}>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3,
            source4: TSource4
        ): LoDashExplicitObjectWrapper<TResult>;

        /**
         * @see _.assign
         */
        assign(): LoDashExplicitObjectWrapper<T>;

        /**
         * @see _.assign
         */
        assign<TResult extends {}>(...otherArgs: any[]): LoDashExplicitObjectWrapper<TResult>;
    }

    //_.assignWith
    interface AssignCustomizer {
        (objectValue: any, sourceValue: any, key?: string, object?: {}, source?: {}): any;
    }

    interface LoDashStatic {
        /**
         * This method is like `_.assign` except that it accepts `customizer` which
         * is invoked to produce the assigned values. If `customizer` returns `undefined`
         * assignment is handled by the method instead. The `customizer` is invoked
         * with five arguments: (objValue, srcValue, key, object, source).
         *
         * **Note:** This method mutates `object`.
         *
         * @static
         * @memberOf _
         * @category Object
         * @param {Object} object The destination object.
         * @param {...Object} sources The source objects.
         * @param {Function} [customizer] The function to customize assigned values.
         * @returns {Object} Returns `object`.
         * @example
         *
         * function customizer(objValue, srcValue) {
         *   return _.isUndefined(objValue) ? srcValue : objValue;
         * }
         *
         * var defaults = _.partialRight(_.assignWith, customizer);
         *
         * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
         * // => { 'a': 1, 'b': 2 }
         */
        assignWith<TObject extends {}, TSource extends {}, TResult extends {}>(
            object: TObject,
            source: TSource,
            customizer: AssignCustomizer
        ): TResult;

        /**
         * @see assignWith
         */
        assignWith<TObject extends {}, TSource1 extends {}, TSource2 extends {}, TResult extends {}>(
            object: TObject,
            source1: TSource1,
            source2: TSource2,
            customizer: AssignCustomizer
        ): TResult;

        /**
         * @see assignWith
         */
        assignWith<TObject extends {}, TSource1 extends {}, TSource2 extends {}, TSource3 extends {}, TResult extends {}>(
            object: TObject,
            source1: TSource1,
            source2: TSource2,
            source3: TSource3,
            customizer: AssignCustomizer
        ): TResult;

        /**
         * @see assignWith
         */
        assignWith<TObject extends {}, TSource1 extends {}, TSource2 extends {}, TSource3 extends {}, TSource4 extends {},
            TResult extends {}>
        (
            object: TObject,
            source1: TSource1,
            source2: TSource2,
            source3: TSource3,
            source4: TSource4,
            customizer: AssignCustomizer
        ): TResult;

        /**
         * @see _.assignWith
         */
        assignWith<TObject extends {}>(object: TObject): TObject;

        /**
         * @see _.assignWith
         */
        assignWith<TObject extends {}, TResult extends {}>(
            object: TObject, ...otherArgs: any[]
        ): TResult;
    }

    interface LoDashImplicitObjectWrapper<T> {
        /**
         * @see _.assignWith
         */
        assignWith<TSource extends {}, TResult extends {}>(
            source: TSource,
            customizer: AssignCustomizer
        ): LoDashImplicitObjectWrapper<TResult>;

        /**
         * @see assignWith
         */
        assignWith<TSource1 extends {}, TSource2 extends {}, TResult extends {}>(
            source1: TSource1,
            source2: TSource2,
            customizer: AssignCustomizer
        ): LoDashImplicitObjectWrapper<TResult>;

        /**
         * @see assignWith
         */
        assignWith<TSource1 extends {}, TSource2 extends {}, TSource3 extends {}, TResult extends {}>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3,
            customizer: AssignCustomizer
        ): LoDashImplicitObjectWrapper<TResult>;

        /**
         * @see assignWith
         */
        assignWith<TSource1 extends {}, TSource2 extends {}, TSource3 extends {}, TSource4 extends {}, TResult extends {}>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3,
            source4: TSource4,
            customizer: AssignCustomizer
        ): LoDashImplicitObjectWrapper<TResult>;

        /**
         * @see _.assignWith
         */
        assignWith(): LoDashImplicitObjectWrapper<T>;

        /**
         * @see _.assignWith
         */
        assignWith<TResult extends {}>(...otherArgs: any[]): LoDashImplicitObjectWrapper<TResult>;
    }

    interface LoDashExplicitObjectWrapper<T> {
        /**
         * @see _.assignWith
         */
        assignWith<TSource extends {}, TResult extends {}>(
            source: TSource,
            customizer: AssignCustomizer
        ): LoDashExplicitObjectWrapper<TResult>;

        /**
         * @see assignWith
         */
        assignWith<TSource1 extends {}, TSource2 extends {}, TResult extends {}>(
            source1: TSource1,
            source2: TSource2,
            customizer: AssignCustomizer
        ): LoDashExplicitObjectWrapper<TResult>;

        /**
         * @see assignWith
         */
        assignWith<TSource1 extends {}, TSource2 extends {}, TSource3 extends {}, TResult extends {}>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3,
            customizer: AssignCustomizer
        ): LoDashExplicitObjectWrapper<TResult>;

        /**
         * @see assignWith
         */
        assignWith<TSource1 extends {}, TSource2 extends {}, TSource3 extends {}, TSource4 extends {}, TResult extends {}>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3,
            source4: TSource4,
            customizer: AssignCustomizer
        ): LoDashExplicitObjectWrapper<TResult>;

        /**
         * @see _.assignWith
         */
        assignWith(): LoDashExplicitObjectWrapper<T>;

        /**
         * @see _.assignWith
         */
        assignWith<TResult extends {}>(...otherArgs: any[]): LoDashExplicitObjectWrapper<TResult>;
    }

    //_.assignIn
    interface LoDashStatic {
        /**
         * This method is like `_.assign` except that it iterates over own and
         * inherited source properties.
         *
         * **Note:** This method mutates `object`.
         *
         * @static
         * @memberOf _
         * @alias extend
         * @category Object
         * @param {Object} object The destination object.
         * @param {...Object} [sources] The source objects.
         * @returns {Object} Returns `object`.
         * @example
         *
         * function Foo() {
         *   this.b = 2;
         * }
         *
         * function Bar() {
         *   this.d = 4;
         * }
         *
         * Foo.prototype.c = 3;
         * Bar.prototype.e = 5;
         *
         * _.assignIn({ 'a': 1 }, new Foo, new Bar);
         * // => { 'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5 }
         */
        assignIn<TObject extends {}, TSource extends {}, TResult extends {}>(
            object: TObject,
            source: TSource
        ): TResult;

        /**
         * @see assignIn
         */
        assignIn<TObject extends {}, TSource1 extends {}, TSource2 extends {}, TResult extends {}>(
            object: TObject,
            source1: TSource1,
            source2: TSource2
        ): TResult;

        /**
         * @see assignIn
         */
        assignIn<TObject extends {}, TSource1 extends {}, TSource2 extends {}, TSource3 extends {}, TResult extends {}>(
            object: TObject,
            source1: TSource1,
            source2: TSource2,
            source3: TSource3
        ): TResult;

        /**
         * @see assignIn
         */
        assignIn<TObject extends {}, TSource1 extends {}, TSource2 extends {}, TSource3 extends {}, TSource4 extends {},
            TResult extends {}>
        (
            object: TObject,
            source1: TSource1,
            source2: TSource2,
            source3: TSource3,
            source4: TSource4
        ): TResult;

        /**
         * @see _.assignIn
         */
        assignIn<TObject extends {}>(object: TObject): TObject;

        /**
         * @see _.assignIn
         */
        assignIn<TObject extends {}, TResult extends {}>(
            object: TObject, ...otherArgs: any[]
        ): TResult;
    }

    interface LoDashImplicitObjectWrapper<T> {
        /**
         * @see _.assignIn
         */
        assignIn<TSource extends {}, TResult extends {}>(
            source: TSource
        ): LoDashImplicitObjectWrapper<TResult>;

        /**
         * @see assignIn
         */
        assignIn<TSource1 extends {}, TSource2 extends {}, TResult extends {}>(
            source1: TSource1,
            source2: TSource2
        ): LoDashImplicitObjectWrapper<TResult>;

        /**
         * @see assignIn
         */
        assignIn<TSource1 extends {}, TSource2 extends {}, TSource3 extends {}, TResult extends {}>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3
        ): LoDashImplicitObjectWrapper<TResult>;

        /**
         * @see assignIn
         */
        assignIn<TSource1 extends {}, TSource2 extends {}, TSource3 extends {}, TSource4 extends {}, TResult extends {}>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3,
            source4: TSource4
        ): LoDashImplicitObjectWrapper<TResult>;

        /**
         * @see _.assignIn
         */
        assignIn(): LoDashImplicitObjectWrapper<T>;

        /**
         * @see _.assignIn
         */
        assignIn<TResult extends {}>(...otherArgs: any[]): LoDashImplicitObjectWrapper<TResult>;
    }

    interface LoDashExplicitObjectWrapper<T> {
        /**
         * @see _.assignIn
         */
        assignIn<TSource extends {}, TResult extends {}>(
            source: TSource
        ): LoDashExplicitObjectWrapper<TResult>;

        /**
         * @see assignIn
         */
        assignIn<TSource1 extends {}, TSource2 extends {}, TResult extends {}>(
            source1: TSource1,
            source2: TSource2
        ): LoDashExplicitObjectWrapper<TResult>;

        /**
         * @see assignIn
         */
        assignIn<TSource1 extends {}, TSource2 extends {}, TSource3 extends {}, TResult extends {}>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3
        ): LoDashExplicitObjectWrapper<TResult>;

        /**
         * @see assignIn
         */
        assignIn<TSource1 extends {}, TSource2 extends {}, TSource3 extends {}, TSource4 extends {}, TResult extends {}>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3,
            source4: TSource4
        ): LoDashExplicitObjectWrapper<TResult>;

        /**
         * @see _.assignIn
         */
        assignIn(): LoDashExplicitObjectWrapper<T>;

        /**
         * @see _.assignIn
         */
        assignIn<TResult extends {}>(...otherArgs: any[]): LoDashExplicitObjectWrapper<TResult>;
    }

    //_.assignInWith
    interface AssignCustomizer {
        (objectValue: any, sourceValue: any, key?: string, object?: {}, source?: {}): any;
    }

    interface LoDashStatic {
        /**
         * This method is like `_.assignIn` except that it accepts `customizer` which
         * is invoked to produce the assigned values. If `customizer` returns `undefined`
         * assignment is handled by the method instead. The `customizer` is invoked
         * with five arguments: (objValue, srcValue, key, object, source).
         *
         * **Note:** This method mutates `object`.
         *
         * @static
         * @memberOf _
         * @alias extendWith
         * @category Object
         * @param {Object} object The destination object.
         * @param {...Object} sources The source objects.
         * @param {Function} [customizer] The function to customize assigned values.
         * @returns {Object} Returns `object`.
         * @example
         *
         * function customizer(objValue, srcValue) {
         *   return _.isUndefined(objValue) ? srcValue : objValue;
         * }
         *
         * var defaults = _.partialRight(_.assignInWith, customizer);
         *
         * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
         * // => { 'a': 1, 'b': 2 }
         */
        assignInWith<TObject extends {}, TSource extends {}, TResult extends {}>(
            object: TObject,
            source: TSource,
            customizer: AssignCustomizer
        ): TResult;

        /**
         * @see assignInWith
         */
        assignInWith<TObject extends {}, TSource1 extends {}, TSource2 extends {}, TResult extends {}>(
            object: TObject,
            source1: TSource1,
            source2: TSource2,
            customizer: AssignCustomizer
        ): TResult;

        /**
         * @see assignInWith
         */
        assignInWith<TObject extends {}, TSource1 extends {}, TSource2 extends {}, TSource3 extends {}, TResult extends {}>(
            object: TObject,
            source1: TSource1,
            source2: TSource2,
            source3: TSource3,
            customizer: AssignCustomizer
        ): TResult;

        /**
         * @see assignInWith
         */
        assignInWith<TObject extends {}, TSource1 extends {}, TSource2 extends {}, TSource3 extends {}, TSource4 extends {},
            TResult extends {}>
        (
            object: TObject,
            source1: TSource1,
            source2: TSource2,
            source3: TSource3,
            source4: TSource4,
            customizer: AssignCustomizer
        ): TResult;

        /**
         * @see _.assignInWith
         */
        assignInWith<TObject extends {}>(object: TObject): TObject;

        /**
         * @see _.assignInWith
         */
        assignInWith<TObject extends {}, TResult extends {}>(
            object: TObject, ...otherArgs: any[]
        ): TResult;
    }

    interface LoDashImplicitObjectWrapper<T> {
        /**
         * @see _.assignInWith
         */
        assignInWith<TSource extends {}, TResult extends {}>(
            source: TSource,
            customizer: AssignCustomizer
        ): LoDashImplicitObjectWrapper<TResult>;

        /**
         * @see assignInWith
         */
        assignInWith<TSource1 extends {}, TSource2 extends {}, TResult extends {}>(
            source1: TSource1,
            source2: TSource2,
            customizer: AssignCustomizer
        ): LoDashImplicitObjectWrapper<TResult>;

        /**
         * @see assignInWith
         */
        assignInWith<TSource1 extends {}, TSource2 extends {}, TSource3 extends {}, TResult extends {}>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3,
            customizer: AssignCustomizer
        ): LoDashImplicitObjectWrapper<TResult>;

        /**
         * @see assignInWith
         */
        assignInWith<TSource1 extends {}, TSource2 extends {}, TSource3 extends {}, TSource4 extends {}, TResult extends {}>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3,
            source4: TSource4,
            customizer: AssignCustomizer
        ): LoDashImplicitObjectWrapper<TResult>;

        /**
         * @see _.assignInWith
         */
        assignInWith(): LoDashImplicitObjectWrapper<T>;

        /**
         * @see _.assignInWith
         */
        assignInWith<TResult extends {}>(...otherArgs: any[]): LoDashImplicitObjectWrapper<TResult>;
    }

    interface LoDashExplicitObjectWrapper<T> {
        /**
         * @see _.assignInWith
         */
        assignInWith<TSource extends {}, TResult extends {}>(
            source: TSource,
            customizer: AssignCustomizer
        ): LoDashExplicitObjectWrapper<TResult>;

        /**
         * @see assignInWith
         */
        assignInWith<TSource1 extends {}, TSource2 extends {}, TResult extends {}>(
            source1: TSource1,
            source2: TSource2,
            customizer: AssignCustomizer
        ): LoDashExplicitObjectWrapper<TResult>;

        /**
         * @see assignInWith
         */
        assignInWith<TSource1 extends {}, TSource2 extends {}, TSource3 extends {}, TResult extends {}>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3,
            customizer: AssignCustomizer
        ): LoDashExplicitObjectWrapper<TResult>;

        /**
         * @see assignInWith
         */
        assignInWith<TSource1 extends {}, TSource2 extends {}, TSource3 extends {}, TSource4 extends {}, TResult extends {}>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3,
            source4: TSource4,
            customizer: AssignCustomizer
        ): LoDashExplicitObjectWrapper<TResult>;

        /**
         * @see _.assignInWith
         */
        assignInWith(): LoDashExplicitObjectWrapper<T>;

        /**
         * @see _.assignInWith
         */
        assignInWith<TResult extends {}>(...otherArgs: any[]): LoDashExplicitObjectWrapper<TResult>;
    }

    //_.create
    interface LoDashStatic {
        /**
         * Creates an object that inherits from the given prototype object. If a properties object is provided its own
         * enumerable properties are assigned to the created object.
         *
         * @param prototype The object to inherit from.
         * @param properties The properties to assign to the object.
         * @return Returns the new object.
         */
        create<T extends Object, U extends Object>(
            prototype: T,
            properties?: U
        ): T & U;
    }

    interface LoDashImplicitObjectWrapper<T> {
        /**
         * @see _.create
         */
        create<U extends Object>(properties?: U): LoDashImplicitObjectWrapper<T & U>;
    }

    interface LoDashExplicitObjectWrapper<T> {
        /**
         * @see _.create
         */
        create<U extends Object>(properties?: U): LoDashExplicitObjectWrapper<T & U>;
    }

    //_.defaults
    interface LoDashStatic {
        /**
         * Assigns own enumerable properties of source object(s) to the destination object for all destination
         * properties that resolve to undefined. Once a property is set, additional values of the same property are
         * ignored.
         *
         * Note: This method mutates object.
         *
         * @param object The destination object.
         * @param sources The source objects.
         * @return The destination object.
         */
        defaults<Obj extends {}, TResult extends {}>(
            object: Obj,
            ...sources: {}[]
        ): TResult;

        /**
         * @see _.defaults
         */
        defaults<Obj extends {}, S1 extends {}, TResult extends {}>(
            object: Obj,
            source1: S1,
            ...sources: {}[]
        ): TResult;

        /**
         * @see _.defaults
         */
        defaults<Obj extends {}, S1 extends {}, S2 extends {}, TResult extends {}>(
            object: Obj,
            source1: S1,
            source2: S2,
            ...sources: {}[]
        ): TResult;

        /**
         * @see _.defaults
         */
        defaults<Obj extends {}, S1 extends {}, S2 extends {}, S3 extends {}, TResult extends {}>(
            object: Obj,
            source1: S1,
            source2: S2,
            source3: S3,
            ...sources: {}[]
        ): TResult;

        /**
         * @see _.defaults
         */
        defaults<Obj extends {}, S1 extends {}, S2 extends {}, S3 extends {}, S4 extends {}, TResult extends {}>(
            object: Obj,
            source1: S1,
            source2: S2,
            source3: S3,
            source4: S4,
            ...sources: {}[]
        ): TResult;

        /**
         * @see _.defaults
         */
        defaults<TResult extends {}>(
            object: {},
            ...sources: {}[]
        ): TResult;
    }

    interface LoDashImplicitObjectWrapper<T> {
        /**
         * @see _.defaults
         */
        defaults<S1 extends {}, TResult extends {}>(
            source1: S1,
            ...sources: {}[]
        ): LoDashImplicitObjectWrapper<TResult>;

        /**
         * @see _.defaults
         */
        defaults<S1 extends {}, S2 extends {}, TResult extends {}>(
            source1: S1,
            source2: S2,
            ...sources: {}[]
        ): LoDashImplicitObjectWrapper<TResult>;

        /**
         * @see _.defaults
         */
        defaults<S1 extends {}, S2 extends {}, S3 extends {}, TResult extends {}>(
            source1: S1,
            source2: S2,
            source3: S3,
            ...sources: {}[]
        ): LoDashImplicitObjectWrapper<TResult>;

        /**
         * @see _.defaults
         */
        defaults<S1 extends {}, S2 extends {}, S3 extends {}, S4 extends {}, TResult extends {}>(
            source1: S1,
            source2: S2,
            source3: S3,
            source4: S4,
            ...sources: {}[]
        ): LoDashImplicitObjectWrapper<TResult>;

        /**
         * @see _.defaults
         */
        defaults(): LoDashImplicitObjectWrapper<T>;

        /**
         * @see _.defaults
         */
        defaults<TResult>(...sources: {}[]): LoDashImplicitObjectWrapper<TResult>;
    }

    interface LoDashExplicitObjectWrapper<T> {
        /**
         * @see _.defaults
         */
        defaults<S1 extends {}, TResult extends {}>(
            source1: S1,
            ...sources: {}[]
        ): LoDashExplicitObjectWrapper<TResult>;

        /**
         * @see _.defaults
         */
        defaults<S1 extends {}, S2 extends {}, TResult extends {}>(
            source1: S1,
            source2: S2,
            ...sources: {}[]
        ): LoDashExplicitObjectWrapper<TResult>;

        /**
         * @see _.defaults
         */
        defaults<S1 extends {}, S2 extends {}, S3 extends {}, TResult extends {}>(
            source1: S1,
            source2: S2,
            source3: S3,
            ...sources: {}[]
        ): LoDashExplicitObjectWrapper<TResult>;

        /**
         * @see _.defaults
         */
        defaults<S1 extends {}, S2 extends {}, S3 extends {}, S4 extends {}, TResult extends {}>(
            source1: S1,
            source2: S2,
            source3: S3,
            source4: S4,
            ...sources: {}[]
        ): LoDashExplicitObjectWrapper<TResult>;

        /**
         * @see _.defaults
         */
        defaults(): LoDashExplicitObjectWrapper<T>;

        /**
         * @see _.defaults
         */
        defaults<TResult>(...sources: {}[]): LoDashExplicitObjectWrapper<TResult>;
    }

    //_.defaultsDeep
    interface LoDashStatic {
        /**
         * This method is like _.defaults except that it recursively assigns default properties.
         * @param object The destination object.
         * @param sources The source objects.
         * @return Returns object.
         **/
        defaultsDeep<T, TResult>(
            object: T,
            ...sources: any[]): TResult;
    }

    interface LoDashImplicitObjectWrapper<T> {
        /**
         * @see _.defaultsDeep
         **/
        defaultsDeep<TResult>(...sources: any[]): LoDashImplicitObjectWrapper<TResult>
    }

    //_.extend
    interface LoDashStatic {
        /**
         * @see assign
         */
        extend<TObject extends {}, TSource extends {}, TResult extends {}>(
            object: TObject,
            source: TSource,
            customizer?: AssignCustomizer,
            thisArg?: any
        ): TResult;

        /**
         * @see assign
         */
        extend<TObject extends {}, TSource1 extends {}, TSource2 extends {}, TResult extends {}>(
            object: TObject,
            source1: TSource1,
            source2: TSource2,
            customizer?: AssignCustomizer,
            thisArg?: any
        ): TResult;

        /**
         * @see assign
         */
        extend<TObject extends {}, TSource1 extends {}, TSource2 extends {}, TSource3 extends {}, TResult extends {}>(
            object: TObject,
            source1: TSource1,
            source2: TSource2,
            source3: TSource3,
            customizer?: AssignCustomizer,
            thisArg?: any
        ): TResult;

        /**
         * @see assign
         */
        extend<TObject extends {}, TSource1 extends {}, TSource2 extends {}, TSource3 extends {}, TSource4 extends {},
            TResult extends {}>
            (
                object: TObject,
                source1: TSource1,
                source2: TSource2,
                source3: TSource3,
                source4: TSource4,
                customizer?: AssignCustomizer,
                thisArg?: any
            ): TResult;

        /**
         * @see _.assign
         */
        extend<TObject extends {}>(object: TObject): TObject;

        /**
         * @see _.assign
         */
        extend<TObject extends {}, TResult extends {}>(
            object: TObject, ...otherArgs: any[]
        ): TResult;
    }

    interface LoDashImplicitObjectWrapper<T> {
        /**
         * @see _.assign
         */
        extend<TSource extends {}, TResult extends {}>(
            source: TSource,
            customizer?: AssignCustomizer,
            thisArg?: any
        ): LoDashImplicitObjectWrapper<TResult>;

        /**
         * @see assign
         */
        extend<TSource1 extends {}, TSource2 extends {}, TResult extends {}>(
            source1: TSource1,
            source2: TSource2,
            customizer?: AssignCustomizer,
            thisArg?: any
        ): LoDashImplicitObjectWrapper<TResult>;

        /**
         * @see assign
         */
        extend<TSource1 extends {}, TSource2 extends {}, TSource3 extends {}, TResult extends {}>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3,
            customizer?: AssignCustomizer,
            thisArg?: any
        ): LoDashImplicitObjectWrapper<TResult>;

        /**
         * @see assign
         */
        extend<TSource1 extends {}, TSource2 extends {}, TSource3 extends {}, TSource4 extends {}, TResult extends {}>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3,
            source4: TSource4,
            customizer?: AssignCustomizer,
            thisArg?: any
        ): LoDashImplicitObjectWrapper<TResult>;

        /**
         * @see _.assign
         */
        extend(): LoDashImplicitObjectWrapper<T>;

        /**
         * @see _.assign
         */
        extend<TResult extends {}>(...otherArgs: any[]): LoDashImplicitObjectWrapper<TResult>;
    }

    interface LoDashExplicitObjectWrapper<T> {
        /**
         * @see _.assign
         */
        extend<TSource extends {}, TResult extends {}>(
            source: TSource,
            customizer?: AssignCustomizer,
            thisArg?: any
        ): LoDashExplicitObjectWrapper<TResult>;

        /**
         * @see assign
         */
        extend<TSource1 extends {}, TSource2 extends {}, TResult extends {}>(
            source1: TSource1,
            source2: TSource2,
            customizer?: AssignCustomizer,
            thisArg?: any
        ): LoDashExplicitObjectWrapper<TResult>;

        /**
         * @see assign
         */
        extend<TSource1 extends {}, TSource2 extends {}, TSource3 extends {}, TResult extends {}>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3,
            customizer?: AssignCustomizer,
            thisArg?: any
        ): LoDashExplicitObjectWrapper<TResult>;

        /**
         * @see assign
         */
        extend<TSource1 extends {}, TSource2 extends {}, TSource3 extends {}, TSource4 extends {}, TResult extends {}>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3,
            source4: TSource4,
            customizer?: AssignCustomizer,
            thisArg?: any
        ): LoDashExplicitObjectWrapper<TResult>;

        /**
         * @see _.assign
         */
        extend(): LoDashExplicitObjectWrapper<T>;

        /**
         * @see _.assign
         */
        extend<TResult extends {}>(...otherArgs: any[]): LoDashExplicitObjectWrapper<TResult>;
    }

    //_.findKey
    interface LoDashStatic {
        /**
         * This method is like _.find except that it returns the key of the first element predicate returns truthy for
         * instead of the element itself.
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
         * @param object The object to search.
         * @param predicate The function invoked per iteration.
         * @param thisArg The this binding of predicate.
         * @return Returns the key of the matched element, else undefined.
         */
        findKey<TValues, TObject>(
            object: TObject,
            predicate?: DictionaryIterator<TValues, boolean>,
            thisArg?: any
        ): string;

        /**
         * @see _.findKey
         */
        findKey<TObject>(
            object: TObject,
            predicate?: ObjectIterator<any, boolean>,
            thisArg?: any
        ): string;

        /**
         * @see _.findKey
         */
        findKey<TObject>(
            object: TObject,
            predicate?: string,
            thisArg?: any
        ): string;

        /**
         * @see _.findKey
         */
        findKey<TWhere extends Dictionary<any>, TObject>(
            object: TObject,
            predicate?: TWhere
        ): string;
    }

    interface LoDashImplicitObjectWrapper<T> {
        /**
         * @see _.findKey
         */
        findKey<TValues>(
            predicate?: DictionaryIterator<TValues, boolean>,
            thisArg?: any
        ): string;

        /**
         * @see _.findKey
         */
        findKey(
            predicate?: ObjectIterator<any, boolean>,
            thisArg?: any
        ): string;

        /**
         * @see _.findKey
         */
        findKey(
            predicate?: string,
            thisArg?: any
        ): string;

        /**
         * @see _.findKey
         */
        findKey<TWhere extends Dictionary<any>>(
            predicate?: TWhere
        ): string;
    }

    interface LoDashExplicitObjectWrapper<T> {
        /**
         * @see _.findKey
         */
        findKey<TValues>(
            predicate?: DictionaryIterator<TValues, boolean>,
            thisArg?: any
        ): LoDashExplicitWrapper<string>;

        /**
         * @see _.findKey
         */
        findKey(
            predicate?: ObjectIterator<any, boolean>,
            thisArg?: any
        ): LoDashExplicitWrapper<string>;

        /**
         * @see _.findKey
         */
        findKey(
            predicate?: string,
            thisArg?: any
        ): LoDashExplicitWrapper<string>;

        /**
         * @see _.findKey
         */
        findKey<TWhere extends Dictionary<any>>(
            predicate?: TWhere
        ): LoDashExplicitWrapper<string>;
    }

    //_.findLastKey
    interface LoDashStatic {
        /**
         * This method is like _.findKey except that it iterates over elements of a collection in the opposite order.
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
         * @param object The object to search.
         * @param predicate The function invoked per iteration.
         * @param thisArg The this binding of predicate.
         * @return Returns the key of the matched element, else undefined.
         */
        findLastKey<TValues, TObject>(
            object: TObject,
            predicate?: DictionaryIterator<TValues, boolean>,
            thisArg?: any
        ): string;

        /**
         * @see _.findLastKey
         */
        findLastKey<TObject>(
            object: TObject,
            predicate?: ObjectIterator<any, boolean>,
            thisArg?: any
        ): string;

        /**
         * @see _.findLastKey
         */
        findLastKey<TObject>(
            object: TObject,
            predicate?: string,
            thisArg?: any
        ): string;

        /**
         * @see _.findLastKey
         */
        findLastKey<TWhere extends Dictionary<any>, TObject>(
            object: TObject,
            predicate?: TWhere
        ): string;
    }

    interface LoDashImplicitObjectWrapper<T> {
        /**
         * @see _.findLastKey
         */
        findLastKey<TValues>(
            predicate?: DictionaryIterator<TValues, boolean>,
            thisArg?: any
        ): string;

        /**
         * @see _.findLastKey
         */
        findLastKey(
            predicate?: ObjectIterator<any, boolean>,
            thisArg?: any
        ): string;

        /**
         * @see _.findLastKey
         */
        findLastKey(
            predicate?: string,
            thisArg?: any
        ): string;

        /**
         * @see _.findLastKey
         */
        findLastKey<TWhere extends Dictionary<any>>(
            predicate?: TWhere
        ): string;
    }

    interface LoDashExplicitObjectWrapper<T> {
        /**
         * @see _.findLastKey
         */
        findLastKey<TValues>(
            predicate?: DictionaryIterator<TValues, boolean>,
            thisArg?: any
        ): LoDashExplicitWrapper<string>;

        /**
         * @see _.findLastKey
         */
        findLastKey(
            predicate?: ObjectIterator<any, boolean>,
            thisArg?: any
        ): LoDashExplicitWrapper<string>;

        /**
         * @see _.findLastKey
         */
        findLastKey(
            predicate?: string,
            thisArg?: any
        ): LoDashExplicitWrapper<string>;

        /**
         * @see _.findLastKey
         */
        findLastKey<TWhere extends Dictionary<any>>(
            predicate?: TWhere
        ): LoDashExplicitWrapper<string>;
    }

    //_.forIn
    interface LoDashStatic {
        /**
         * Iterates over own and inherited enumerable properties of an object invoking iteratee for each property. The
         * iteratee is bound to thisArg and invoked with three arguments: (value, key, object). Iteratee functions may
         * exit iteration early by explicitly returning false.
         *
         * @param object The object to iterate over.
         * @param iteratee The function invoked per iteration.
         * @param thisArg The this binding of iteratee.
         * @return Returns object.
         */
        forIn<T>(
            object: Dictionary<T>,
            iteratee?: DictionaryIterator<T, any>,
            thisArg?: any
        ): Dictionary<T>;

        /**
         * @see _.forIn
         */
        forIn<T extends {}>(
            object: T,
            iteratee?: ObjectIterator<any, any>,
            thisArg?: any
        ): T;
    }

    interface LoDashImplicitObjectWrapper<T> {
        /**
         * @see _.forIn
         */
        forIn<TValue>(
            iteratee?: DictionaryIterator<TValue, any>,
            thisArg?: any
        ): _.LoDashImplicitObjectWrapper<T>;
    }

    interface LoDashExplicitObjectWrapper<T> {
        /**
         * @see _.forIn
         */
        forIn<TValue>(
            iteratee?: DictionaryIterator<TValue, any>,
            thisArg?: any
        ): _.LoDashExplicitObjectWrapper<T>;
    }

    //_.forInRight
    interface LoDashStatic {
        /**
         * This method is like _.forIn except that it iterates over properties of object in the opposite order.
         *
         * @param object The object to iterate over.
         * @param iteratee The function invoked per iteration.
         * @param thisArg The this binding of iteratee.
         * @return Returns object.
         */
        forInRight<T>(
            object: Dictionary<T>,
            iteratee?: DictionaryIterator<T, any>,
            thisArg?: any
        ): Dictionary<T>;

        /**
         * @see _.forInRight
         */
        forInRight<T extends {}>(
            object: T,
            iteratee?: ObjectIterator<any, any>,
            thisArg?: any
        ): T;
    }

    interface LoDashImplicitObjectWrapper<T> {
        /**
         * @see _.forInRight
         */
        forInRight<TValue>(
            iteratee?: DictionaryIterator<TValue, any>,
            thisArg?: any
        ): _.LoDashImplicitObjectWrapper<T>;
    }

    interface LoDashExplicitObjectWrapper<T> {
        /**
         * @see _.forInRight
         */
        forInRight<TValue>(
            iteratee?: DictionaryIterator<TValue, any>,
            thisArg?: any
        ): _.LoDashExplicitObjectWrapper<T>;
    }

    //_.forOwn
    interface LoDashStatic {
        /**
         * Iterates over own enumerable properties of an object invoking iteratee for each property. The iteratee is
         * bound to thisArg and invoked with three arguments: (value, key, object). Iteratee functions may exit
         * iteration early by explicitly returning false.
         *
         * @param object The object to iterate over.
         * @param iteratee The function invoked per iteration.
         * @param thisArg The this binding of iteratee.
         * @return Returns object.
         */
        forOwn<T>(
            object: Dictionary<T>,
            iteratee?: DictionaryIterator<T, any>,
            thisArg?: any
        ): Dictionary<T>;

        /**
         * @see _.forOwn
         */
        forOwn<T extends {}>(
            object: T,
            iteratee?: ObjectIterator<any, any>,
            thisArg?: any
        ): T;
    }

    interface LoDashImplicitObjectWrapper<T> {
        /**
         * @see _.forOwn
         */
        forOwn<TValue>(
            iteratee?: DictionaryIterator<TValue, any>,
            thisArg?: any
        ): _.LoDashImplicitObjectWrapper<T>;
    }

    interface LoDashExplicitObjectWrapper<T> {
        /**
         * @see _.forOwn
         */
        forOwn<TValue>(
            iteratee?: DictionaryIterator<TValue, any>,
            thisArg?: any
        ): _.LoDashExplicitObjectWrapper<T>;
    }

    //_.forOwnRight
    interface LoDashStatic {
        /**
         * This method is like _.forOwn except that it iterates over properties of object in the opposite order.
         *
         * @param object The object to iterate over.
         * @param iteratee The function invoked per iteration.
         * @param thisArg The this binding of iteratee.
         * @return Returns object.
         */
        forOwnRight<T>(
            object: Dictionary<T>,
            iteratee?: DictionaryIterator<T, any>,
            thisArg?: any
        ): Dictionary<T>;

        /**
         * @see _.forOwnRight
         */
        forOwnRight<T extends {}>(
            object: T,
            iteratee?: ObjectIterator<any, any>,
            thisArg?: any
        ): T;
    }

    interface LoDashImplicitObjectWrapper<T> {
        /**
         * @see _.forOwnRight
         */
        forOwnRight<TValue>(
            iteratee?: DictionaryIterator<TValue, any>,
            thisArg?: any
        ): _.LoDashImplicitObjectWrapper<T>;
    }

    interface LoDashExplicitObjectWrapper<T> {
        /**
         * @see _.forOwnRight
         */
        forOwnRight<TValue>(
            iteratee?: DictionaryIterator<TValue, any>,
            thisArg?: any
        ): _.LoDashExplicitObjectWrapper<T>;
    }

    //_.functions
    interface LoDashStatic {
        /**
         * Creates an array of function property names from own enumerable properties
         * of `object`.
         *
         * @static
         * @memberOf _
         * @category Object
         * @param {Object} object The object to inspect.
         * @returns {Array} Returns the new array of property names.
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
        functions<T extends {}>(object: any): string[];
    }

    interface LoDashImplicitObjectWrapper<T> {
        /**
         * @see _.functions
         */
        functions(): _.LoDashImplicitArrayWrapper<string>;
    }

    interface LoDashExplicitObjectWrapper<T> {
        /**
         * @see _.functions
         */
        functions(): _.LoDashExplicitArrayWrapper<string>;
    }

    //_.functionsIn
    interface LoDashStatic {
        /**
         * Creates an array of function property names from own and inherited
         * enumerable properties of `object`.
         *
         * @static
         * @memberOf _
         * @category Object
         * @param {Object} object The object to inspect.
         * @returns {Array} Returns the new array of property names.
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

    interface LoDashImplicitObjectWrapper<T> {
        /**
         * @see _.functionsIn
         */
        functionsIn(): _.LoDashImplicitArrayWrapper<string>;
    }

    interface LoDashExplicitObjectWrapper<T> {
        /**
         * @see _.functionsIn
         */
        functionsIn(): _.LoDashExplicitArrayWrapper<string>;
    }

    //_.get
    interface LoDashStatic {
        /**
         * Gets the property value at path of object. If the resolved
         * value is undefined the defaultValue is used in its place.
         * @param object The object to query.
         * @param path The path of the property to get.
         * @param defaultValue The value returned if the resolved value is undefined.
         * @return Returns the resolved value.
         **/
        get<TResult>(object: Object,
               path: string|number|boolean|Array<string|number|boolean>,
               defaultValue?:TResult
        ): TResult;
    }

    interface LoDashImplicitObjectWrapper<T> {
        /**
         * @see _.get
         **/
        get<TResult>(path: string|number|boolean|Array<string|number|boolean>,
                     defaultValue?: TResult
        ): TResult;
    }

    //_.has
    interface LoDashStatic {
        /**
         * Checks if `path` is a direct property of `object`.
         *
         * @static
         * @memberOf _
         * @category Object
         * @param {Object} object The object to query.
         * @param {Array|string} path The path to check.
         * @returns {boolean} Returns `true` if `path` exists, else `false`.
         * @example
         *
         * var object = { 'a': { 'b': { 'c': 3 } } };
         * var other = _.create({ 'a': _.create({ 'b': _.create({ 'c': 3 }) }) });
         *
         * _.has(object, 'a');
         * // => true
         *
         * _.has(object, 'a.b.c');
         * // => true
         *
         * _.has(object, ['a', 'b', 'c']);
         * // => true
         *
         * _.has(other, 'a');
         * // => false
         */
        has<T extends {}>(
            object: T,
            path: StringRepresentable|StringRepresentable[]
        ): boolean;
    }

    interface LoDashImplicitObjectWrapper<T> {
        /**
         * @see _.has
         */
        has(path: StringRepresentable|StringRepresentable[]): boolean;
    }

    interface LoDashExplicitObjectWrapper<T> {
        /**
         * @see _.has
         */
        has(path: StringRepresentable|StringRepresentable[]): LoDashExplicitWrapper<boolean>;
    }

    //_.hasIn
    interface LoDashStatic {
        /**
         * Checks if `path` is a direct or inherited property of `object`.
         *
         * @static
         * @memberOf _
         * @category Object
         * @param {Object} object The object to query.
         * @param {Array|string} path The path to check.
         * @returns {boolean} Returns `true` if `path` exists, else `false`.
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
        hasIn<T extends {}>(
            object: T,
            path: StringRepresentable|StringRepresentable[]
        ): boolean;
    }

    interface LoDashImplicitObjectWrapper<T> {
        /**
         * @see _.hasIn
         */
        hasIn(path: StringRepresentable|StringRepresentable[]): boolean;
    }

    interface LoDashExplicitObjectWrapper<T> {
        /**
         * @see _.hasIn
         */
        hasIn(path: StringRepresentable|StringRepresentable[]): LoDashExplicitWrapper<boolean>;
    }

    //_.invert
    interface LoDashStatic {
        /**
         * Creates an object composed of the inverted keys and values of object. If object contains duplicate values,
         * subsequent values overwrite property assignments of previous values unless multiValue is true.
         *
         * @param object The object to invert.
         * @param multiValue Allow multiple values per key.
         * @return Returns the new inverted object.
         */
        invert<T extends {}, TResult extends {}>(
            object: T,
            multiValue?: boolean
        ): TResult;

        /**
         * @see _.invert
         */
        invert<TResult extends {}>(
            object: Object,
            multiValue?: boolean
        ): TResult;
    }

    interface LoDashImplicitObjectWrapper<T> {
        /**
         * @see _.invert
         */
        invert<TResult extends {}>(multiValue?: boolean): LoDashImplicitObjectWrapper<TResult>;
    }

    interface LoDashExplicitObjectWrapper<T> {
        /**
         * @see _.invert
         */
        invert<TResult extends {}>(multiValue?: boolean): LoDashExplicitObjectWrapper<TResult>;
    }

    //_.keys
    interface LoDashStatic {
        /**
         * Creates an array of the own enumerable property names of object.
         *
         * Note: Non-object values are coerced to objects. See the ES spec for more details.
         *
         * @param object The object to query.
         * @return Returns the array of property names.
         */
        keys(object?: any): string[];
    }

    interface LoDashImplicitObjectWrapper<T> {
        /**
         * @see _.keys
         */
        keys(): LoDashImplicitArrayWrapper<string>;
    }

    interface LoDashExplicitObjectWrapper<T> {
        /**
         * @see _.keys
         */
        keys(): LoDashExplicitArrayWrapper<string>;
    }

    //_.keysIn
    interface LoDashStatic {
        /**
         * Creates an array of the own and inherited enumerable property names of object.
         *
         * Note: Non-object values are coerced to objects.
         *
         * @param object The object to query.
         * @return An array of property names.
         */
        keysIn(object?: any): string[];
    }

    interface LoDashImplicitObjectWrapper<T> {
        /**
         * @see _.keysIn
         */
        keysIn(): LoDashImplicitArrayWrapper<string>;
    }

    interface LoDashExplicitObjectWrapper<T> {
        /**
         * @see _.keysIn
         */
        keysIn(): LoDashExplicitArrayWrapper<string>;
    }

    //_.mapKeys
    interface LoDashStatic {
        /**
         * The opposite of _.mapValues; this method creates an object with the same values as object and keys generated
         * by running each own enumerable property of object through iteratee.
         *
         * @param object The object to iterate over.
         * @param iteratee The function invoked per iteration.
         * @param thisArg The this binding of iteratee.
         * @return Returns the new mapped object.
         */
        mapKeys<T, TKey>(
            object: List<T>,
            iteratee?: ListIterator<T, TKey>,
            thisArg?: any
        ): Dictionary<T>;

        /**
         * @see _.mapKeys
         */
        mapKeys<T, TKey>(
            object: Dictionary<T>,
            iteratee?: DictionaryIterator<T, TKey>,
            thisArg?: any
        ): Dictionary<T>;

        /**
         * @see _.mapKeys
         */
        mapKeys<T, TObject extends {}>(
            object: List<T>|Dictionary<T>,
            iteratee?: TObject
        ): Dictionary<T>;

        /**
         * @see _.mapKeys
         */
        mapKeys<T>(
            object: List<T>|Dictionary<T>,
            iteratee?: string,
            thisArg?: any
        ): Dictionary<T>;
    }

    interface LoDashImplicitArrayWrapper<T> {
        /**
         * @see _.mapKeys
         */
        mapKeys<TKey>(
            iteratee?: ListIterator<T, TKey>,
            thisArg?: any
        ): LoDashImplicitObjectWrapper<Dictionary<T>>;

        /**
         * @see _.mapKeys
         */
        mapKeys<TObject extends {}>(
            iteratee?: TObject
        ): LoDashImplicitObjectWrapper<Dictionary<T>>;

        /**
         * @see _.mapKeys
         */
        mapKeys(
            iteratee?: string,
            thisArg?: any
        ): LoDashImplicitObjectWrapper<Dictionary<T>>;
    }

    interface LoDashImplicitObjectWrapper<T> {
        /**
         * @see _.mapKeys
         */
        mapKeys<TResult, TKey>(
            iteratee?: ListIterator<TResult, TKey>|DictionaryIterator<TResult, TKey>,
            thisArg?: any
        ): LoDashImplicitObjectWrapper<Dictionary<TResult>>;

        /**
         * @see _.mapKeys
         */
        mapKeys<TResult, TObject extends {}>(
            iteratee?: TObject
        ): LoDashImplicitObjectWrapper<Dictionary<TResult>>;

        /**
         * @see _.mapKeys
         */
        mapKeys<TResult>(
            iteratee?: string,
            thisArg?: any
        ): LoDashImplicitObjectWrapper<Dictionary<TResult>>;
    }

    interface LoDashExplicitArrayWrapper<T> {
        /**
         * @see _.mapKeys
         */
        mapKeys<TKey>(
            iteratee?: ListIterator<T, TKey>,
            thisArg?: any
        ): LoDashExplicitObjectWrapper<Dictionary<T>>;

        /**
         * @see _.mapKeys
         */
        mapKeys<TObject extends {}>(
            iteratee?: TObject
        ): LoDashExplicitObjectWrapper<Dictionary<T>>;

        /**
         * @see _.mapKeys
         */
        mapKeys(
            iteratee?: string,
            thisArg?: any
        ): LoDashExplicitObjectWrapper<Dictionary<T>>;
    }

    interface LoDashExplicitObjectWrapper<T> {
        /**
         * @see _.mapKeys
         */
        mapKeys<TResult, TKey>(
            iteratee?: ListIterator<TResult, TKey>|DictionaryIterator<TResult, TKey>,
            thisArg?: any
        ): LoDashExplicitObjectWrapper<Dictionary<TResult>>;

        /**
         * @see _.mapKeys
         */
        mapKeys<TResult, TObject extends {}>(
            iteratee?: TObject
        ): LoDashExplicitObjectWrapper<Dictionary<TResult>>;

        /**
         * @see _.mapKeys
         */
        mapKeys<TResult>(
            iteratee?: string,
            thisArg?: any
        ): LoDashExplicitObjectWrapper<Dictionary<TResult>>;
    }

    //_.mapValues
    interface LoDashStatic {
        /**
        * Creates an object with the same keys as object and values generated by running each own
        * enumerable property of object through iteratee. The iteratee function is bound to thisArg
        * and invoked with three arguments: (value, key, object).
        *
        * If a property name is provided iteratee the created "_.property" style callback returns
        * the property value of the given element.
        *
        * If a value is also provided for thisArg the creted "_.matchesProperty" style callback returns
        * true for elements that have a matching property value, else false;.
        *
        * If an object is provided for iteratee the created "_.matches" style callback returns true
        * for elements that have the properties of the given object, else false.
        *
        * @param {Object} object The object to iterate over.
        * @param {Function|Object|string} [iteratee=_.identity]  The function invoked per iteration.
        * @param {Object} [thisArg] The `this` binding of `iteratee`.
        * @return {Object} Returns the new mapped object.
        */
        mapValues<T, TResult>(obj: Dictionary<T>, callback: ObjectIterator<T, TResult>, thisArg?: any): Dictionary<TResult>;
        mapValues<T>(obj: Dictionary<T>, where: Dictionary<T>): Dictionary<boolean>;
        mapValues<T, TMapped>(obj: T, pluck: string): TMapped;
        mapValues<T>(obj: T, callback: ObjectIterator<any, any>, thisArg?: any): T;
    }

    interface LoDashImplicitObjectWrapper<T> {
        /**
         * @see _.mapValues
         * TValue is the type of the property values of T.
         * TResult is the type output by the ObjectIterator function
         */
        mapValues<TValue, TResult>(callback: ObjectIterator<TValue, TResult>, thisArg?: any): LoDashImplicitObjectWrapper<Dictionary<TResult>>;

        /**
         * @see _.mapValues
         * TResult is the type of the property specified by pluck.
         * T should be a Dictionary<Dictionary<TResult>>
         */
        mapValues<TResult>(pluck: string): LoDashImplicitObjectWrapper<Dictionary<TResult>>;

        /**
         * @see _.mapValues
         * TResult is the type of the properties on the object specified by pluck.
         * T should be a Dictionary<Dictionary<Dictionary<TResult>>>
         */
        mapValues<TResult>(pluck: string, where: Dictionary<TResult>): LoDashImplicitArrayWrapper<Dictionary<boolean>>;

        /**
         * @see _.mapValues
         * TResult is the type of the properties of each object in the values of T
         * T should be a Dictionary<Dictionary<TResult>>
         */
        mapValues<TResult>(where: Dictionary<TResult>): LoDashImplicitArrayWrapper<boolean>;
    }

    //_.merge
    interface LoDashStatic {
        /**
         * Recursively merges own and inherited enumerable properties of source
         * objects into the destination object, skipping source properties that resolve
         * to `undefined`. Array and plain object properties are merged recursively.
         * Other objects and value types are overridden by assignment. Source objects
         * are applied from left to right. Subsequent sources overwrite property
         * assignments of previous sources.
         *
         * **Note:** This method mutates `object`.
         *
         * @static
         * @memberOf _
         * @category Object
         * @param {Object} object The destination object.
         * @param {...Object} [sources] The source objects.
         * @returns {Object} Returns `object`.
         * @example
         *
         * var users = {
         *   'data': [{ 'user': 'barney' }, { 'user': 'fred' }]
         * };
         *
         * var ages = {
         *   'data': [{ 'age': 36 }, { 'age': 40 }]
         * };
         *
         * _.merge(users, ages);
         * // => { 'data': [{ 'user': 'barney', 'age': 36 }, { 'user': 'fred', 'age': 40 }] }
         */
        merge<TObject, TSource>(
            object: TObject,
            source: TSource
        ): TObject & TSource;

        /**
         * @see _.merge
         */
        merge<TObject, TSource1, TSource2>(
            object: TObject,
            source1: TSource1,
            source2: TSource2
        ): TObject & TSource1 & TSource2;

        /**
         * @see _.merge
         */
        merge<TObject, TSource1, TSource2, TSource3>(
            object: TObject,
            source1: TSource1,
            source2: TSource2,
            source3: TSource3
        ): TObject & TSource1 & TSource2 & TSource3;

        /**
         * @see _.merge
         */
        merge<TObject, TSource1, TSource2, TSource3, TSource4>(
            object: TObject,
            source1: TSource1,
            source2: TSource2,
            source3: TSource3,
            source4: TSource4
        ): TObject & TSource1 & TSource2 & TSource3 & TSource4;

        /**
         * @see _.merge
         */
        merge<TResult>(
            object: any,
            ...otherArgs: any[]
        ): TResult;
    }

    interface LoDashImplicitObjectWrapper<T> {
        /**
         * @see _.merge
         */
        merge<TSource>(
            source: TSource
        ): LoDashImplicitObjectWrapper<T & TSource>;

        /**
         * @see _.merge
         */
        merge<TSource1, TSource2>(
            source1: TSource1,
            source2: TSource2
        ): LoDashImplicitObjectWrapper<T & TSource1 & TSource2>;

        /**
         * @see _.merge
         */
        merge<TSource1, TSource2, TSource3>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3
        ): LoDashImplicitObjectWrapper<T & TSource1 & TSource2 & TSource3>;

        /**
         * @see _.merge
         */
        merge<TSource1, TSource2, TSource3, TSource4>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3,
            source4: TSource4
        ): LoDashImplicitObjectWrapper<T & TSource1 & TSource2 & TSource3 & TSource4>;

        /**
         * @see _.merge
         */
        merge<TResult>(
            ...otherArgs: any[]
        ): LoDashImplicitObjectWrapper<TResult>;
    }

    interface LoDashExplicitObjectWrapper<T> {
        /**
         * @see _.merge
         */
        merge<TSource>(
            source: TSource
        ): LoDashExplicitObjectWrapper<T & TSource>;

        /**
         * @see _.merge
         */
        merge<TSource1, TSource2>(
            source1: TSource1,
            source2: TSource2
        ): LoDashExplicitObjectWrapper<T & TSource1 & TSource2>;

        /**
         * @see _.merge
         */
        merge<TSource1, TSource2, TSource3>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3
        ): LoDashExplicitObjectWrapper<T & TSource1 & TSource2 & TSource3>;

        /**
         * @see _.merge
         */
        merge<TSource1, TSource2, TSource3, TSource4>(
        ): LoDashExplicitObjectWrapper<T & TSource1 & TSource2 & TSource3 & TSource4>;

        /**
         * @see _.merge
         */
        merge<TResult>(
            ...otherArgs: any[]
        ): LoDashExplicitObjectWrapper<TResult>;
    }

    //_.mergeWith
    interface MergeWithCustomizer {
        (value: any, srcValue: any, key?: string, object?: Object, source?: Object): any;
    }

    interface LoDashStatic {
        /**
         * This method is like `_.merge` except that it accepts `customizer` which
         * is invoked to produce the merged values of the destination and source
         * properties. If `customizer` returns `undefined` merging is handled by the
         * method instead. The `customizer` is invoked with seven arguments:
         * (objValue, srcValue, key, object, source, stack).
         *
         * @static
         * @memberOf _
         * @category Object
         * @param {Object} object The destination object.
         * @param {...Object} sources The source objects.
         * @param {Function} customizer The function to customize assigned values.
         * @returns {Object} Returns `object`.
         * @example
         *
         * function customizer(objValue, srcValue) {
         *   if (_.isArray(objValue)) {
         *     return objValue.concat(srcValue);
         *   }
         * }
         *
         * var object = {
         *   'fruits': ['apple'],
         *   'vegetables': ['beet']
         * };
         *
         * var other = {
         *   'fruits': ['banana'],
         *   'vegetables': ['carrot']
         * };
         *
         * _.merge(object, other, customizer);
         * // => { 'fruits': ['apple', 'banana'], 'vegetables': ['beet', 'carrot'] }
         */
        mergeWith<TObject, TSource>(
            object: TObject,
            source: TSource,
            customizer: MergeWithCustomizer
        ): TObject & TSource;

        /**
         * @see _.mergeWith
         */
        mergeWith<TObject, TSource1, TSource2>(
            object: TObject,
            source1: TSource1,
            source2: TSource2,
            customizer: MergeWithCustomizer
        ): TObject & TSource1 & TSource2;

        /**
         * @see _.mergeWith
         */
        mergeWith<TObject, TSource1, TSource2, TSource3>(
            object: TObject,
            source1: TSource1,
            source2: TSource2,
            source3: TSource3,
            customizer: MergeWithCustomizer
        ): TObject & TSource1 & TSource2 & TSource3;

        /**
         * @see _.mergeWith
         */
        mergeWith<TObject, TSource1, TSource2, TSource3, TSource4>(
            object: TObject,
            source1: TSource1,
            source2: TSource2,
            source3: TSource3,
            source4: TSource4,
            customizer: MergeWithCustomizer
        ): TObject & TSource1 & TSource2 & TSource3 & TSource4;

        /**
         * @see _.mergeWith
         */
        mergeWith<TResult>(
            object: any,
            ...otherArgs: any[]
        ): TResult;
    }

    interface LoDashImplicitObjectWrapper<T> {
        /**
         * @see _.mergeWith
         */
        mergeWith<TSource>(
            source: TSource,
            customizer: MergeWithCustomizer
        ): LoDashImplicitObjectWrapper<T & TSource>;

        /**
         * @see _.mergeWith
         */
        mergeWith<TSource1, TSource2>(
            source1: TSource1,
            source2: TSource2,
            customizer: MergeWithCustomizer
        ): LoDashImplicitObjectWrapper<T & TSource1 & TSource2>;

        /**
         * @see _.mergeWith
         */
        mergeWith<TSource1, TSource2, TSource3>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3,
            customizer: MergeWithCustomizer
        ): LoDashImplicitObjectWrapper<T & TSource1 & TSource2 & TSource3>;

        /**
         * @see _.mergeWith
         */
        mergeWith<TSource1, TSource2, TSource3, TSource4>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3,
            source4: TSource4,
            customizer: MergeWithCustomizer
        ): LoDashImplicitObjectWrapper<T & TSource1 & TSource2 & TSource3 & TSource4>;

        /**
         * @see _.mergeWith
         */
        mergeWith<TResult>(
            ...otherArgs: any[]
        ): LoDashImplicitObjectWrapper<TResult>;
    }

    //_.omit
    interface LoDashStatic {
        /**
         * The opposite of `_.pick`; this method creates an object composed of the
         * own and inherited enumerable properties of `object` that are not omitted.
         *
         * @static
         * @memberOf _
         * @category Object
         * @param {Object} object The source object.
         * @param {...(string|string[])} [props] The property names to omit, specified
         *  individually or in arrays..
         * @returns {Object} Returns the new object.
         * @example
         *
         * var object = { 'a': 1, 'b': '2', 'c': 3 };
         *
         * _.omit(object, ['a', 'c']);
         * // => { 'b': '2' }
         */

        omit<TResult extends {}, T extends {}>(
            object: T,
            ...predicate: (StringRepresentable|StringRepresentable[])[]
        ): TResult;
    }

    interface LoDashImplicitObjectWrapper<T> {

        /**
         * @see _.omit
         */
        omit<TResult extends {}>(
            ...predicate: (StringRepresentable|StringRepresentable[])[]
        ): LoDashImplicitObjectWrapper<TResult>;
    }

    interface LoDashExplicitObjectWrapper<T> {

        /**
         * @see _.omit
         */
        omit<TResult extends {}>(
            ...predicate: (StringRepresentable|StringRepresentable[])[]
        ): LoDashExplicitObjectWrapper<TResult>;
    }

    //_.omitBy
    interface LoDashStatic {
        /**
         * The opposite of `_.pickBy`; this method creates an object composed of the
         * own and inherited enumerable properties of `object` that `predicate`
         * doesn't return truthy for.
         *
         * @static
         * @memberOf _
         * @category Object
         * @param {Object} object The source object.
         * @param {Function|Object|string} [predicate=_.identity] The function invoked per property.
         * @returns {Object} Returns the new object.
         * @example
         *
         * var object = { 'a': 1, 'b': '2', 'c': 3 };
         *
         * _.omitBy(object, _.isNumber);
         * // => { 'b': '2' }
         */
        omitBy<TResult extends {}, T extends {}>(
            object: T,
            predicate: ObjectIterator<any, boolean>
        ): TResult;
    }

    interface LoDashImplicitObjectWrapper<T> {
        /**
         * @see _.omitBy
         */
        omitBy<TResult extends {}>(
            predicate: ObjectIterator<any, boolean>
        ): LoDashImplicitObjectWrapper<TResult>;
    }

    interface LoDashExplicitObjectWrapper<T> {
        /**
         * @see _.omitBy
         */
        omitBy<TResult extends {}>(
            predicate: ObjectIterator<any, boolean>
        ): LoDashExplicitObjectWrapper<TResult>;
    }

    //_.toPairs
    interface LoDashStatic {
        /**
         * Creates a two dimensional array of the key-value pairs for object, e.g. [[key1, value1], [key2, value2]].
         *
         * @param object The object to query.
         * @return Returns the new array of key-value pairs.
         */
        toPairs<T extends {}>(object?: T): any[][];

        toPairs<T extends {}, TResult>(object?: T): TResult[][];
    }

    interface LoDashImplicitObjectWrapper<T> {
        /**
         * @see _.toPairs
         */
        toPairs<TResult>(): LoDashImplicitArrayWrapper<TResult[]>;
    }

    interface LoDashExplicitObjectWrapper<T> {
        /**
         * @see _.toPairs
         */
        toPairs<TResult>(): LoDashExplicitArrayWrapper<TResult[]>;
    }

    //_.pick
    interface LoDashStatic {
        /**
         * Creates an object composed of the picked `object` properties.
         *
         * @static
         * @memberOf _
         * @category Object
         * @param {Object} object The source object.
         * @param {...(string|string[])} [props] The property names to pick, specified
         *  individually or in arrays.
         * @returns {Object} Returns the new object.
         * @example
         *
         * var object = { 'a': 1, 'b': '2', 'c': 3 };
         *
         * _.pick(object, ['a', 'c']);
         * // => { 'a': 1, 'c': 3 }
         */
        pick<TResult extends {}, T extends {}>(
            object: T,
            ...predicate: (StringRepresentable|StringRepresentable[])[]
        ): TResult;
    }

    interface LoDashImplicitObjectWrapper<T> {
        /**
         * @see _.pick
         */
        pick<TResult extends {}>(
            ...predicate: (StringRepresentable|StringRepresentable[])[]
        ): LoDashImplicitObjectWrapper<TResult>;
    }

    interface LoDashExplicitObjectWrapper<T> {
        /**
         * @see _.pick
         */
        pick<TResult extends {}>(
            ...predicate: (StringRepresentable|StringRepresentable[])[]
        ): LoDashExplicitObjectWrapper<TResult>;
    }

    //_.pickBy
    interface LoDashStatic {
        /**
         * Creates an object composed of the `object` properties `predicate` returns
         * truthy for. The predicate is invoked with one argument: (value).
         *
         * @static
         * @memberOf _
         * @category Object
         * @param {Object} object The source object.
         * @param {Function|Object|string} [predicate=_.identity] The function invoked per property.
         * @returns {Object} Returns the new object.
         * @example
         *
         * var object = { 'a': 1, 'b': '2', 'c': 3 };
         *
         * _.pickBy(object, _.isNumber);
         * // => { 'a': 1, 'c': 3 }
         */
        pickBy<TResult extends {}, T extends {}>(
            object: T,
            predicate: ObjectIterator<any, boolean>
        ): TResult;
    }

    interface LoDashImplicitObjectWrapper<T> {
        /**
         * @see _.pickBy
         */
        pickBy<TResult extends {}>(
            predicate: ObjectIterator<any, boolean>
        ): LoDashImplicitObjectWrapper<TResult>;
    }

    interface LoDashExplicitObjectWrapper<T> {
        /**
         * @see _.pickBy
         */
        pickBy<TResult extends {}>(
            predicate: ObjectIterator<any, boolean>
        ): LoDashExplicitObjectWrapper<TResult>;
    }

    //_.result
    interface LoDashStatic {
        /**
         * This method is like _.get except that if the resolved value is a function it’s invoked with the this binding
         * of its parent object and its result is returned.
         *
         * @param object The object to query.
         * @param path The path of the property to resolve.
         * @param defaultValue The value returned if the resolved value is undefined.
         * @return Returns the resolved value.
         */
        result<TObject, TResult>(
            object: TObject,
            path: number|string|boolean|Array<number|string|boolean>,
            defaultValue?: TResult
        ): TResult;
    }

    interface LoDashImplicitWrapperBase<T, TWrapper> {
        /**
         * @see _.result
         */
        result<TResult>(
            path: number|string|boolean|Array<number|string|boolean>,
            defaultValue?: TResult
        ): TResult;
    }

    //_.set
    interface LoDashStatic {
        /**
         * Sets the value at path of object. If a portion of path doesn’t exist it’s created. Arrays are created for
         * missing index properties while objects are created for all other missing properties. Use _.setWith to
         * customize path creation.
         *
         * @param object The object to modify.
         * @param path The path of the property to set.
         * @param value The value to set.
         * @return Returns object.
         */
        set<TResult>(
            object: Object,
            path: StringRepresentable|StringRepresentable[],
            value: any
        ): TResult;

        /**
         * @see _.set
         */
        set<V, TResult>(
            object: Object,
            path: StringRepresentable|StringRepresentable[],
            value: V
        ): TResult;

        /**
         * @see _.set
         */
        set<O, V, TResult>(
            object: O,
            path: StringRepresentable|StringRepresentable[],
            value: V
        ): TResult;
    }

    interface LoDashImplicitObjectWrapper<T> {
        /**
         * @see _.set
         */
        set<TResult>(
            path: StringRepresentable|StringRepresentable[],
            value: any
        ): LoDashImplicitObjectWrapper<TResult>;

        /**
         * @see _.set
         */
        set<V, TResult>(
            path: StringRepresentable|StringRepresentable[],
            value: V
        ): LoDashImplicitObjectWrapper<TResult>;
    }

    interface LoDashExplicitObjectWrapper<T> {
        /**
         * @see _.set
         */
        set<TResult>(
            path: StringRepresentable|StringRepresentable[],
            value: any
        ): LoDashExplicitObjectWrapper<TResult>;

        /**
         * @see _.set
         */
        set<V, TResult>(
            path: StringRepresentable|StringRepresentable[],
            value: V
        ): LoDashExplicitObjectWrapper<TResult>;
    }

    //_.setWith
    interface SetWithCustomizer<T> {
        (nsValue: any, key: string, nsObject: T): any;
    }

    interface LoDashStatic {
        /**
         * This method is like _.set except that it accepts customizer which is invoked to produce the objects of
         * path. If customizer returns undefined path creation is handled by the method instead. The customizer is
         * invoked with three arguments: (nsValue, key, nsObject).
         *
         * @param object The object to modify.
         * @param path The path of the property to set.
         * @param value The value to set.
         * @parem customizer The function to customize assigned values.
         * @return Returns object.
         */
        setWith<TResult>(
            object: Object,
            path: StringRepresentable|StringRepresentable[],
            value: any,
            customizer?: SetWithCustomizer<Object>
        ): TResult;

        /**
         * @see _.setWith
         */
        setWith<V, TResult>(
            object: Object,
            path: StringRepresentable|StringRepresentable[],
            value: V,
            customizer?: SetWithCustomizer<Object>
        ): TResult;

        /**
         * @see _.setWith
         */
        setWith<O, V, TResult>(
            object: O,
            path: StringRepresentable|StringRepresentable[],
            value: V,
            customizer?: SetWithCustomizer<O>
        ): TResult;
    }

    interface LoDashImplicitObjectWrapper<T> {
        /**
         * @see _.setWith
         */
        setWith<TResult>(
            path: StringRepresentable|StringRepresentable[],
            value: any,
            customizer?: SetWithCustomizer<T>
        ): LoDashImplicitObjectWrapper<TResult>;

        /**
         * @see _.setWith
         */
        setWith<V, TResult>(
            path: StringRepresentable|StringRepresentable[],
            value: V,
            customizer?: SetWithCustomizer<T>
        ): LoDashImplicitObjectWrapper<TResult>;
    }

    interface LoDashExplicitObjectWrapper<T> {
        /**
         * @see _.setWith
         */
        setWith<TResult>(
            path: StringRepresentable|StringRepresentable[],
            value: any,
            customizer?: SetWithCustomizer<T>
        ): LoDashExplicitObjectWrapper<TResult>;

        /**
         * @see _.setWith
         */
        setWith<V, TResult>(
            path: StringRepresentable|StringRepresentable[],
            value: V,
            customizer?: SetWithCustomizer<T>
        ): LoDashExplicitObjectWrapper<TResult>;
    }

    //_.transform
    interface LoDashStatic {
        /**
         * An alternative to _.reduce; this method transforms object to a new accumulator object which is the result of
         * running each of its own enumerable properties through iteratee, with each invocation potentially mutating
         * the accumulator object. The iteratee is bound to thisArg and invoked with four arguments: (accumulator,
         * value, key, object). Iteratee functions may exit iteration early by explicitly returning false.
         *
         * @param object The object to iterate over.
         * @param iteratee The function invoked per iteration.
         * @param accumulator The custom accumulator value.
         * @param thisArg The this binding of iteratee.
         * @return Returns the accumulated value.
         */
        transform<T, TResult>(
            object: T[],
            iteratee?: MemoVoidArrayIterator<T, TResult[]>,
            accumulator?: TResult[],
            thisArg?: any
        ): TResult[];

        /**
         * @see _.transform
         */
        transform<T, TResult>(
            object: T[],
            iteratee?: MemoVoidArrayIterator<T, Dictionary<TResult>>,
            accumulator?: Dictionary<TResult>,
            thisArg?: any
        ): Dictionary<TResult>;

        /**
         * @see _.transform
         */
        transform<T, TResult>(
            object: Dictionary<T>,
            iteratee?: MemoVoidDictionaryIterator<T, Dictionary<TResult>>,
            accumulator?: Dictionary<TResult>,
            thisArg?: any
        ): Dictionary<TResult>;

        /**
         * @see _.transform
         */
        transform<T, TResult>(
            object: Dictionary<T>,
            iteratee?: MemoVoidDictionaryIterator<T, TResult[]>,
            accumulator?: TResult[],
            thisArg?: any
        ): TResult[];
    }

    interface LoDashImplicitArrayWrapper<T> {
        /**
         * @see _.transform
         */
        transform<TResult>(
            iteratee?: MemoVoidArrayIterator<T, TResult[]>,
            accumulator?: TResult[],
            thisArg?: any
        ): LoDashImplicitArrayWrapper<TResult>;

        /**
         * @see _.transform
         */
        transform<TResult>(
            iteratee?: MemoVoidArrayIterator<T, Dictionary<TResult>>,
            accumulator?: Dictionary<TResult>,
            thisArg?: any
        ): LoDashImplicitObjectWrapper<Dictionary<TResult>>;
    }

    interface LoDashImplicitObjectWrapper<T> {
        /**
         * @see _.transform
         */
        transform<T, TResult>(
            iteratee?: MemoVoidDictionaryIterator<T, Dictionary<TResult>>,
            accumulator?: Dictionary<TResult>,
            thisArg?: any
        ): LoDashImplicitObjectWrapper<Dictionary<TResult>>;

        /**
         * @see _.transform
         */
        transform<T, TResult>(
            iteratee?: MemoVoidDictionaryIterator<T, TResult[]>,
            accumulator?: TResult[],
            thisArg?: any
        ): LoDashImplicitArrayWrapper<TResult>;
    }

    //_.values
    interface LoDashStatic {
        /**
         * Creates an array of the own enumerable property values of object.
         *
         * @param object The object to query.
         * @return Returns an array of property values.
         */
        values<T>(object?: any): T[];
    }

    interface LoDashImplicitObjectWrapper<T> {
        /**
         * @see _.values
         */
        values<T>(): LoDashImplicitArrayWrapper<T>;
    }

    interface LoDashExplicitObjectWrapper<T> {
        /**
         * @see _.values
         */
        values<T>(): LoDashExplicitArrayWrapper<T>;
    }

    //_.valuesIn
    interface LoDashStatic {
        /**
         * Creates an array of the own and inherited enumerable property values of object.
         *
         * @param object The object to query.
         * @return Returns the array of property values.
         */
        valuesIn<T>(object?: any): T[];
    }

    interface LoDashImplicitObjectWrapper<T> {
        /**
         * @see _.valuesIn
         */
        valuesIn<T>(): LoDashImplicitArrayWrapper<T>;
    }

    interface LoDashExplicitObjectWrapper<T> {
        /**
         * @see _.valuesIn
         */
        valuesIn<T>(): LoDashExplicitArrayWrapper<T>;
    }

    /**********
     * String *
     **********/

    //_.camelCase
    interface LoDashStatic {
        /**
         * Converts string to camel case.
         *
         * @param string The string to convert.
         * @return Returns the camel cased string.
         */
        camelCase(string?: string): string;
    }

    interface LoDashImplicitWrapper<T> {
        /**
         * @see _.camelCase
         */
        camelCase(): string;
    }

    interface LoDashExplicitWrapper<T> {
        /**
         * @see _.camelCase
         */
        camelCase(): LoDashExplicitWrapper<string>;
    }

    //_.capitalize
    interface LoDashStatic {
        /**
         * Converts the first character of string to upper case and the remaining to lower case.
         *
         * @param string The string to capitalize.
         * @return Returns the capitalized string.
         */
        capitalize(string?: string): string;
    }

    interface LoDashImplicitWrapper<T> {
        /**
         * @see _.capitalize
         */
        capitalize(): string;
    }

    interface LoDashExplicitWrapper<T> {
        /**
         * @see _.capitalize
         */
        capitalize(): LoDashExplicitWrapper<string>;
    }

    //_.deburr
    interface LoDashStatic {
        /**
         * Deburrs string by converting latin-1 supplementary letters to basic latin letters and removing combining
         * diacritical marks.
         *
         * @param string The string to deburr.
         * @return Returns the deburred string.
         */
        deburr(string?: string): string;
    }

    interface LoDashImplicitWrapper<T> {
        /**
         * @see _.deburr
         */
        deburr(): string;
    }

    interface LoDashExplicitWrapper<T> {
        /**
         * @see _.deburr
         */
        deburr(): LoDashExplicitWrapper<string>;
    }

    //_.endsWith
    interface LoDashStatic {
        /**
         * Checks if string ends with the given target string.
         *
         * @param string The string to search.
         * @param target The string to search for.
         * @param position The position to search from.
         * @return Returns true if string ends with target, else false.
         */
        endsWith(
            string?: string,
            target?: string,
            position?: number
        ): boolean;
    }

    interface LoDashImplicitWrapper<T> {
        /**
         * @see _.endsWith
         */
        endsWith(
            target?: string,
            position?: number
        ): boolean;
    }

    interface LoDashExplicitWrapper<T> {
        /**
         * @see _.endsWith
         */
        endsWith(
            target?: string,
            position?: number
        ): LoDashExplicitWrapper<boolean>;
    }

    // _.escape
    interface LoDashStatic {
        /**
         * Converts the characters "&", "<", ">", '"', "'", and "`" in string to their corresponding HTML entities.
         *
         * Note: No other characters are escaped. To escape additional characters use a third-party library like he.
         *
         * hough the ">" character is escaped for symmetry, characters like ">" and "/" don’t need escaping in HTML
         * and have no special meaning unless they're part of a tag or unquoted attribute value. See Mathias Bynens’s
         * article (under "semi-related fun fact") for more details.
         *
         * Backticks are escaped because in IE < 9, they can break out of attribute values or HTML comments. See #59,
         * #102, #108, and #133 of the HTML5 Security Cheatsheet for more details.
         *
         * When working with HTML you should always quote attribute values to reduce XSS vectors.
         *
         * @param string The string to escape.
         * @return Returns the escaped string.
         */
        escape(string?: string): string;
    }

    interface LoDashImplicitWrapper<T> {
        /**
         * @see _.escape
         */
        escape(): string;
    }

    interface LoDashExplicitWrapper<T> {
        /**
         * @see _.escape
         */
        escape(): LoDashExplicitWrapper<string>;
    }

    // _.escapeRegExp
    interface LoDashStatic {
        /**
         * Escapes the RegExp special characters "^", "$", "\", ".", "*", "+", "?", "(", ")", "[", "]",
         * "{", "}", and "|" in string.
         *
         * @param string The string to escape.
         * @return Returns the escaped string.
         */
        escapeRegExp(string?: string): string;
    }

    interface LoDashImplicitWrapper<T> {
        /**
         * @see _.escapeRegExp
         */
        escapeRegExp(): string;
    }

    interface LoDashExplicitWrapper<T> {
        /**
         * @see _.escapeRegExp
         */
        escapeRegExp(): LoDashExplicitWrapper<string>;
    }

    //_.kebabCase
    interface LoDashStatic {
        /**
         * Converts string to kebab case.
         *
         * @param string The string to convert.
         * @return Returns the kebab cased string.
         */
        kebabCase(string?: string): string;
    }

    interface LoDashImplicitWrapper<T> {
        /**
         * @see _.kebabCase
         */
        kebabCase(): string;
    }

    interface LoDashExplicitWrapper<T> {
        /**
         * @see _.kebabCase
         */
        kebabCase(): LoDashExplicitWrapper<string>;
    }

    //_.lowerCase
    interface LoDashStatic {
        /**
         * Converts `string`, as space separated words, to lower case.
         *
         * @param string The string to convert.
         * @return Returns the lower cased string.
         */
        lowerCase(string?: string): string;
    }

    interface LoDashImplicitWrapper<T> {
        /**
         * @see _.lowerCase
         */
        lowerCase(): string;
    }

    interface LoDashExplicitWrapper<T> {
        /**
         * @see _.lowerCase
         */
        lowerCase(): LoDashExplicitWrapper<string>;
    }

    //_.lowerFirst
    interface LoDashStatic {
        /**
         * Converts the first character of `string` to lower case.
         *
         * @param string The string to convert.
         * @return Returns the converted string.
         */
        lowerFirst(string?: string): string;
    }

    interface LoDashImplicitWrapper<T> {
        /**
         * @see _.lowerFirst
         */
        lowerFirst(): string;
    }

    interface LoDashExplicitWrapper<T> {
        /**
         * @see _.lowerFirst
         */
        lowerFirst(): LoDashExplicitWrapper<string>;
    }

    //_.pad
    interface LoDashStatic {
        /**
         * Pads string on the left and right sides if it’s shorter than length. Padding characters are truncated if
         * they can’t be evenly divided by length.
         *
         * @param string The string to pad.
         * @param length The padding length.
         * @param chars The string used as padding.
         * @return Returns the padded string.
         */
        pad(
            string?: string,
            length?: number,
            chars?: string
        ): string;
    }

    interface LoDashImplicitWrapper<T> {
        /**
         * @see _.pad
         */
        pad(
            length?: number,
            chars?: string
        ): string;
    }

    interface LoDashExplicitWrapper<T> {
        /**
         * @see _.pad
         */
        pad(
            length?: number,
            chars?: string
        ): LoDashExplicitWrapper<string>;
    }

    //_.padEnd
    interface LoDashStatic {
        /**
         * Pads string on the right side if it’s shorter than length. Padding characters are truncated if they exceed
         * length.
         *
         * @param string The string to pad.
         * @param length The padding length.
         * @param chars The string used as padding.
         * @return Returns the padded string.
         */
        padEnd(
            string?: string,
            length?: number,
            chars?: string
        ): string;
    }

    interface LoDashImplicitWrapper<T> {
        /**
         * @see _.padEnd
         */
        padEnd(
            length?: number,
            chars?: string
        ): string;
    }

    interface LoDashExplicitWrapper<T> {
        /**
         * @see _.padEnd
         */
        padEnd(
            length?: number,
            chars?: string
        ): LoDashExplicitWrapper<string>;
    }

    //_.padStart
    interface LoDashStatic {
        /**
         * Pads string on the left side if it’s shorter than length. Padding characters are truncated if they exceed
         * length.
         *
         * @param string The string to pad.
         * @param length The padding length.
         * @param chars The string used as padding.
         * @return Returns the padded string.
         */
        padStart(
            string?: string,
            length?: number,
            chars?: string
        ): string;
    }

    interface LoDashImplicitWrapper<T> {
        /**
         * @see _.padStart
         */
        padStart(
            length?: number,
            chars?: string
        ): string;
    }

    interface LoDashExplicitWrapper<T> {
        /**
         * @see _.padStart
         */
        padStart(
            length?: number,
            chars?: string
        ): LoDashExplicitWrapper<string>;
    }

    //_.parseInt
    interface LoDashStatic {
        /**
         * Converts string to an integer of the specified radix. If radix is undefined or 0, a radix of 10 is used
         * unless value is a hexadecimal, in which case a radix of 16 is used.
         *
         * Note: This method aligns with the ES5 implementation of parseInt.
         *
         * @param string The string to convert.
         * @param radix The radix to interpret value by.
         * @return Returns the converted integer.
         */
        parseInt(
            string: string,
            radix?: number
        ): number;
    }

    interface LoDashImplicitWrapper<T> {
        /**
         * @see _.parseInt
         */
        parseInt(radix?: number): number;
    }

    interface LoDashExplicitWrapper<T> {
        /**
         * @see _.parseInt
         */
        parseInt(radix?: number): LoDashExplicitWrapper<number>;
    }

    //_.repeat
    interface LoDashStatic {
        /**
         * Repeats the given string n times.
         *
         * @param string The string to repeat.
         * @param n The number of times to repeat the string.
         * @return Returns the repeated string.
         */
        repeat(
            string?: string,
            n?: number
        ): string;
    }

    interface LoDashImplicitWrapper<T> {
        /**
         * @see _.repeat
         */
        repeat(n?: number): string;
    }

    interface LoDashExplicitWrapper<T> {
        /**
         * @see _.repeat
         */
        repeat(n?: number): LoDashExplicitWrapper<string>;
    }

    //_.replace
    interface LoDashStatic {
        /**
         * Replaces matches for pattern in string with replacement.
         *
         * Note: This method is based on String#replace.
         *
         * @param string
         * @param pattern
         * @param replacement
         * @return Returns the modified string.
         */
        replace(
            string: string,
            pattern: RegExp|string,
            replacement: Function|string
        ): string;

        /**
         * @see _.replace
         */
        replace(
            pattern?: RegExp|string,
            replacement?: Function|string
        ): string;
    }

    interface LoDashImplicitWrapper<T> {
        /**
         * @see _.replace
         */
        replace(
            pattern?: RegExp|string,
            replacement?: Function|string
        ): string;

        /**
         * @see _.replace
         */
        replace(
            replacement?: Function|string
        ): string;
    }

    interface LoDashImplicitObjectWrapper<T> {
        /**
         * @see _.replace
         */
        replace(
            pattern?: RegExp|string,
            replacement?: Function|string
        ): string;

        /**
         * @see _.replace
         */
        replace(
            replacement?: Function|string
        ): string;
    }

    interface LoDashExplicitWrapper<T> {
        /**
         * @see _.replace
         */
        replace(
            pattern?: RegExp|string,
            replacement?: Function|string
        ): LoDashExplicitWrapper<string>;

        /**
         * @see _.replace
         */
        replace(
            replacement?: Function|string
        ): LoDashExplicitWrapper<string>;
    }

    interface LoDashExplicitObjectWrapper<T> {
        /**
         * @see _.replace
         */
        replace(
            pattern?: RegExp|string,
            replacement?: Function|string
        ): LoDashExplicitWrapper<string>;

        /**
         * @see _.replace
         */
        replace(
            replacement?: Function|string
        ): LoDashExplicitWrapper<string>;
    }

    //_.snakeCase
    interface LoDashStatic {
        /**
         * Converts string to snake case.
         *
         * @param string The string to convert.
         * @return Returns the snake cased string.
         */
        snakeCase(string?: string): string;
    }

    interface LoDashImplicitWrapper<T> {
        /**
         * @see _.snakeCase
         */
        snakeCase(): string;
    }

    interface LoDashExplicitWrapper<T> {
        /**
         * @see _.snakeCase
         */
        snakeCase(): LoDashExplicitWrapper<string>;
    }

    //_.split
    interface LoDashStatic {
        /**
         * Splits string by separator.
         *
         * Note: This method is based on String#split.
         *
         * @param string
         * @param separator
         * @param limit
         * @return Returns the new array of string segments.
         */
        split(
            string: string,
            separator?: RegExp|string,
            limit?: number
        ): string[];
    }

    interface LoDashImplicitWrapper<T> {
        /**
         * @see _.split
         */
        split(
            separator?: RegExp|string,
            limit?: number
        ): LoDashImplicitArrayWrapper<string>;
    }

    interface LoDashExplicitWrapper<T> {
        /**
         * @see _.split
         */
        split(
            separator?: RegExp|string,
            limit?: number
        ): LoDashExplicitArrayWrapper<string>;
    }

    //_.startCase
    interface LoDashStatic {
        /**
         * Converts string to start case.
         *
         * @param string The string to convert.
         * @return Returns the start cased string.
         */
        startCase(string?: string): string;
    }

    interface LoDashImplicitWrapper<T> {
        /**
         * @see _.startCase
         */
        startCase(): string;
    }

    interface LoDashExplicitWrapper<T> {
        /**
         * @see _.startCase
         */
        startCase(): LoDashExplicitWrapper<string>;
    }

    //_.startsWith
    interface LoDashStatic {
        /**
         * Checks if string starts with the given target string.
         *
         * @param string The string to search.
         * @param target The string to search for.
         * @param position The position to search from.
         * @return Returns true if string starts with target, else false.
         */
        startsWith(
            string?: string,
            target?: string,
            position?: number
        ): boolean;
    }

    interface LoDashImplicitWrapper<T> {
        /**
         * @see _.startsWith
         */
        startsWith(
            target?: string,
            position?: number
        ): boolean;
    }

    interface LoDashExplicitWrapper<T> {
        /**
         * @see _.startsWith
         */
        startsWith(
            target?: string,
            position?: number
        ): LoDashExplicitWrapper<boolean>;
    }

    //_.template
    interface TemplateOptions extends TemplateSettings {
        /**
         * The sourceURL of the template's compiled source.
         */
        sourceURL?: string;
    }

    interface TemplateExecutor {
        (data?: Object): string;
        source: string;
    }

    interface LoDashStatic {
        /**
         * Creates a compiled template function that can interpolate data properties in "interpolate" delimiters,
         * HTML-escape interpolated data properties in "escape" delimiters, and execute JavaScript in "evaluate"
         * delimiters. Data properties may be accessed as free variables in the template. If a setting object is
         * provided it takes precedence over _.templateSettings values.
         *
         * Note: In the development build _.template utilizes
         * [sourceURLs](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/#toc-sourceurl) for easier
         * debugging.
         *
         * For more information on precompiling templates see
         * [lodash's custom builds documentation](https://lodash.com/custom-builds).
         *
         * For more information on Chrome extension sandboxes see
         * [Chrome's extensions documentation](https://developer.chrome.com/extensions/sandboxingEval).
         *
         * @param string The template string.
         * @param options The options object.
         * @param options.escape The HTML "escape" delimiter.
         * @param options.evaluate The "evaluate" delimiter.
         * @param options.imports An object to import into the template as free variables.
         * @param options.interpolate The "interpolate" delimiter.
         * @param options.sourceURL The sourceURL of the template's compiled source.
         * @param options.variable The data object variable name.
         * @return Returns the compiled template function.
         */
        template(
            string: string,
            options?: TemplateOptions
        ): TemplateExecutor;
    }

    interface LoDashImplicitWrapper<T> {
        /**
         * @see _.template
         */
        template(options?: TemplateOptions): TemplateExecutor;
    }

    interface LoDashExplicitWrapper<T> {
        /**
         * @see _.template
         */
        template(options?: TemplateOptions): LoDashExplicitObjectWrapper<TemplateExecutor>;
    }

    //_.toLower
    interface LoDashStatic {
        /**
         * Converts `string`, as a whole, to lower case.
         *
         * @param string The string to convert.
         * @return Returns the lower cased string.
         */
        toLower(string?: string): string;
    }

    interface LoDashImplicitWrapper<T> {
        /**
         * @see _.toLower
         */
        toLower(): string;
    }

    interface LoDashExplicitWrapper<T> {
        /**
         * @see _.toLower
         */
        toLower(): LoDashExplicitWrapper<string>;
    }

    //_.toUpper
    interface LoDashStatic {
        /**
         * Converts `string`, as a whole, to upper case.
         *
         * @param string The string to convert.
         * @return Returns the upper cased string.
         */
        toUpper(string?: string): string;
    }

    interface LoDashImplicitWrapper<T> {
        /**
         * @see _.toUpper
         */
        toUpper(): string;
    }

    interface LoDashExplicitWrapper<T> {
        /**
         * @see _.toUpper
         */
        toUpper(): LoDashExplicitWrapper<string>;
    }

    //_.trim
    interface LoDashStatic {
        /**
         * Removes leading and trailing whitespace or specified characters from string.
         *
         * @param string The string to trim.
         * @param chars The characters to trim.
         * @return Returns the trimmed string.
         */
        trim(
            string?: string,
            chars?: string
        ): string;
    }

    interface LoDashImplicitWrapper<T> {
        /**
         * @see _.trim
         */
        trim(chars?: string): string;
    }

    interface LoDashExplicitWrapper<T> {
        /**
         * @see _.trim
         */
        trim(chars?: string): LoDashExplicitWrapper<string>;
    }

    //_.trimEnd
    interface LoDashStatic {
        /**
         * Removes trailing whitespace or specified characters from string.
         *
         * @param string The string to trim.
         * @param chars The characters to trim.
         * @return Returns the trimmed string.
         */
        trimEnd(
            string?: string,
            chars?: string
        ): string;
    }

    interface LoDashImplicitWrapper<T> {
        /**
         * @see _.trimEnd
         */
        trimEnd(chars?: string): string;
    }

    interface LoDashExplicitWrapper<T> {
        /**
         * @see _.trimEnd
         */
        trimEnd(chars?: string): LoDashExplicitWrapper<string>;
    }

    //_.trimStart
    interface LoDashStatic {
        /**
         * Removes leading whitespace or specified characters from string.
         *
         * @param string The string to trim.
         * @param chars The characters to trim.
         * @return Returns the trimmed string.
         */
        trimStart(
            string?: string,
            chars?: string
        ): string;
    }

    interface LoDashImplicitWrapper<T> {
        /**
         * @see _.trimStart
         */
        trimStart(chars?: string): string;
    }

    interface LoDashExplicitWrapper<T> {
        /**
         * @see _.trimStart
         */
        trimStart(chars?: string): LoDashExplicitWrapper<string>;
    }

    //_.truncate
    interface TruncateOptions {
        /** The maximum string length. */
        length?: number;
        /** The string to indicate text is omitted. */
        omission?: string;
        /** The separator pattern to truncate to. */
        separator?: string|RegExp;
    }

    interface LoDashStatic {
        /**
         * Truncates string if it’s longer than the given maximum string length. The last characters of the truncated
         * string are replaced with the omission string which defaults to "…".
         *
         * @param string The string to truncate.
         * @param options The options object or maximum string length.
         * @return Returns the truncated string.
         */
        truncate(
            string?: string,
            options?: TruncateOptions
        ): string;
    }

    interface LoDashImplicitWrapper<T> {
        /**
         * @see _.truncate
         */
        truncate(options?: TruncateOptions): string;
    }

    interface LoDashExplicitWrapper<T> {
        /**
         * @see _.truncate
         */
        truncate(options?: TruncateOptions): LoDashExplicitWrapper<string>;
    }

    //_.unescape
    interface LoDashStatic {
        /**
         * The inverse of _.escape; this method converts the HTML entities &amp;, &lt;, &gt;, &quot;, &#39;, and &#96;
         * in string to their corresponding characters.
         *
         * Note: No other HTML entities are unescaped. To unescape additional HTML entities use a third-party library
         * like he.
         *
         * @param string The string to unescape.
         * @return Returns the unescaped string.
         */
        unescape(string?: string): string;
    }

    interface LoDashImplicitWrapper<T> {
        /**
         * @see _.unescape
         */
        unescape(): string;
    }

    interface LoDashExplicitWrapper<T> {
        /**
         * @see _.unescape
         */
        unescape(): LoDashExplicitWrapper<string>;
    }

    //_.upperCase
    interface LoDashStatic {
        /**
         * Converts `string`, as space separated words, to upper case.
         *
         * @param string The string to convert.
         * @return Returns the upper cased string.
         */
        upperCase(string?: string): string;
    }

    interface LoDashImplicitWrapper<T> {
        /**
         * @see _.upperCase
         */
        upperCase(): string;
    }

    interface LoDashExplicitWrapper<T> {
        /**
         * @see _.upperCase
         */
        upperCase(): LoDashExplicitWrapper<string>;
    }

    //_.upperFirst
    interface LoDashStatic {
        /**
         * Converts the first character of `string` to upper case.
         *
         * @param string The string to convert.
         * @return Returns the converted string.
         */
        upperFirst(string?: string): string;
    }

    interface LoDashImplicitWrapper<T> {
        /**
         * @see _.upperFirst
         */
        upperFirst(): string;
    }

    interface LoDashExplicitWrapper<T> {
        /**
         * @see _.upperFirst
         */
        upperFirst(): LoDashExplicitWrapper<string>;
    }

    //_.words
    interface LoDashStatic {
        /**
         * Splits `string` into an array of its words.
         *
         * @param string The string to inspect.
         * @param pattern The pattern to match words.
         * @return Returns the words of `string`.
         */
        words(
            string?: string,
            pattern?: string|RegExp
        ): string[];
    }

    interface LoDashImplicitWrapper<T> {
        /**
         * @see _.words
         */
        words(pattern?: string|RegExp): string[];
    }

    interface LoDashExplicitWrapper<T> {
        /**
         * @see _.words
         */
        words(pattern?: string|RegExp): LoDashExplicitArrayWrapper<string>;
    }

    /***********
     * Utility *
     ***********/

    //_.attempt
    interface LoDashStatic {
        /**
         * Attempts to invoke func, returning either the result or the caught error object. Any additional arguments
         * are provided to func when it’s invoked.
         *
         * @param func The function to attempt.
         * @return Returns the func result or error object.
         */
        attempt<TResult>(func: (...args: any[]) => TResult, ...args: any[]): TResult|Error;
    }

    interface LoDashImplicitObjectWrapper<T> {
        /**
         * @see _.attempt
         */
        attempt<TResult>(...args: any[]): TResult|Error;
    }

    interface LoDashExplicitObjectWrapper<T> {
        /**
         * @see _.attempt
         */
        attempt<TResult>(...args: any[]): LoDashExplicitObjectWrapper<TResult|Error>;
    }

    //_.constant
    interface LoDashStatic {
        /**
         * Creates a function that returns value.
         *
         * @param value The value to return from the new function.
         * @return Returns the new function.
         */
        constant<T>(value: T): () => T;
    }

    interface LoDashImplicitWrapperBase<T, TWrapper> {
        /**
         * @see _.constant
         */
        constant<TResult>(): LoDashImplicitObjectWrapper<() => TResult>;
    }

    interface LoDashExplicitWrapperBase<T, TWrapper> {
        /**
         * @see _.constant
         */
        constant<TResult>(): LoDashExplicitObjectWrapper<() => TResult>;
    }

    //_.identity
    interface LoDashStatic {
        /**
         * This method returns the first argument provided to it.
         * @param value Any value.
         * @return Returns value.
         */
        identity<T>(value?: T): T;
    }

    interface LoDashImplicitWrapper<T> {
        /**
         * @see _.identity
         */
        identity(): T;
    }

    interface LoDashImplicitArrayWrapper<T> {
        /**
         * @see _.identity
         */
        identity(): T[];
    }

    interface LoDashImplicitObjectWrapper<T> {
        /**
         * @see _.identity
         */
        identity(): T;
    }

    //_.iteratee
    interface LoDashStatic {
        /**
         * Creates a function that invokes `func` with the arguments of the created
         * function. If `func` is a property name the created callback returns the
         * property value for a given element. If `func` is an object the created
         * callback returns `true` for elements that contain the equivalent object properties, otherwise it returns `false`.
         *
         * @static
         * @memberOf _
         * @category Util
         * @param {*} [func=_.identity] The value to convert to a callback.
         * @returns {Function} Returns the callback.
         * @example
         *
         * var users = [
         *   { 'user': 'barney', 'age': 36 },
         *   { 'user': 'fred',   'age': 40 }
         * ];
         *
         * // create custom iteratee shorthands
         * _.iteratee = _.wrap(_.iteratee, function(callback, func) {
         *   var p = /^(\S+)\s*([<>])\s*(\S+)$/.exec(func);
         *   return !p ? callback(func) : function(object) {
         *     return (p[2] == '>' ? object[p[1]] > p[3] : object[p[1]] < p[3]);
         *   };
         * });
         *
         * _.filter(users, 'age > 36');
         * // => [{ 'user': 'fred', 'age': 40 }]
         */
        iteratee<TResult>(
            func: Function,
            thisArg?: any
        ): (...args: any[]) => TResult;

        /**
         * @see _.iteratee
         */
        iteratee<TResult>(
            func: string,
            thisArg?: any
        ): (object: any) => TResult;

        /**
         * @see _.iteratee
         */
        iteratee(
            func: Object,
            thisArg?: any
        ): (object: any) => boolean;

        /**
         * @see _.iteratee
         */
        iteratee<TResult>(): (value: TResult) => TResult;
    }

    interface LoDashImplicitWrapper<T> {
        /**
         * @see _.iteratee
         */
        iteratee<TResult>(thisArg?: any): LoDashImplicitObjectWrapper<(object: any) => TResult>;
    }

    interface LoDashImplicitObjectWrapper<T> {
        /**
         * @see _.iteratee
         */
        iteratee(thisArg?: any): LoDashImplicitObjectWrapper<(object: any) => boolean>;

        /**
         * @see _.iteratee
         */
        iteratee<TResult>(thisArg?: any): LoDashImplicitObjectWrapper<(...args: any[]) => TResult>;
    }

    interface LoDashExplicitWrapper<T> {
        /**
         * @see _.iteratee
         */
        iteratee<TResult>(thisArg?: any): LoDashExplicitObjectWrapper<(object: any) => TResult>;
    }

    interface LoDashExplicitObjectWrapper<T> {
        /**
         * @see _.iteratee
         */
        iteratee(thisArg?: any): LoDashExplicitObjectWrapper<(object: any) => boolean>;

        /**
         * @see _.iteratee
         */
        iteratee<TResult>(thisArg?: any): LoDashExplicitObjectWrapper<(...args: any[]) => TResult>;
    }

    //_.matches
    interface LoDashStatic {
        /**
         * Creates a function that performs a deep comparison between a given object and source, returning true if the
         * given object has equivalent property values, else false.
         *
         * Note: This method supports comparing arrays, booleans, Date objects, numbers, Object objects, regexes, and
         * strings. Objects are compared by their own, not inherited, enumerable properties. For comparing a single own
         * or inherited property value see _.matchesProperty.
         *
         * @param source The object of property values to match.
         * @return Returns the new function.
         */
        matches<T>(source: T): (value: any) => boolean;

        /**
         * @see _.matches
         */
        matches<T, V>(source: T): (value: V) => boolean;
    }

    interface LoDashImplicitWrapperBase<T, TWrapper> {
        /**
         * @see _.matches
         */
        matches<V>(): LoDashImplicitObjectWrapper<(value: V) => boolean>;
    }

    interface LoDashExplicitWrapperBase<T, TWrapper> {
        /**
         * @see _.matches
         */
        matches<V>(): LoDashExplicitObjectWrapper<(value: V) => boolean>;
    }

    //_.matchesProperty
    interface LoDashStatic {
        /**
         * Creates a function that compares the property value of path on a given object to value.
         *
         * Note: This method supports comparing arrays, booleans, Date objects, numbers, Object objects, regexes, and
         * strings. Objects are compared by their own, not inherited, enumerable properties.
         *
         * @param path The path of the property to get.
         * @param srcValue The value to match.
         * @return Returns the new function.
         */
        matchesProperty<T>(
            path: StringRepresentable|StringRepresentable[],
            srcValue: T
        ): (value: any) => boolean;

        /**
         * @see _.matchesProperty
         */
        matchesProperty<T, V>(
            path: StringRepresentable|StringRepresentable[],
            srcValue: T
        ): (value: V) => boolean;
    }

    interface LoDashImplicitWrapperBase<T, TWrapper> {
        /**
         * @see _.matchesProperty
         */
        matchesProperty<SrcValue>(
            srcValue: SrcValue
        ): LoDashImplicitObjectWrapper<(value: any) => boolean>;

        /**
         * @see _.matchesProperty
         */
        matchesProperty<SrcValue, Value>(
            srcValue: SrcValue
        ): LoDashImplicitObjectWrapper<(value: Value) => boolean>;
    }

    interface LoDashExplicitWrapperBase<T, TWrapper> {
        /**
         * @see _.matchesProperty
         */
        matchesProperty<SrcValue>(
            srcValue: SrcValue
        ): LoDashExplicitObjectWrapper<(value: any) => boolean>;

        /**
         * @see _.matchesProperty
         */
        matchesProperty<SrcValue, Value>(
            srcValue: SrcValue
        ): LoDashExplicitObjectWrapper<(value: Value) => boolean>;
    }

    //_.method
    interface LoDashStatic {
        /**
         * Creates a function that invokes the method at path on a given object. Any additional arguments are provided
         * to the invoked method.
         *
         * @param path The path of the method to invoke.
         * @param args The arguments to invoke the method with.
         * @return Returns the new function.
         */
        method<TObject, TResult>(
            path: string|StringRepresentable[],
            ...args: any[]
        ): (object: TObject) => TResult;

        /**
         * @see _.method
         */
        method<TResult>(
            path: string|StringRepresentable[],
            ...args: any[]
        ): (object: any) => TResult;
    }

    interface LoDashImplicitWrapper<T> {
        /**
         * @see _.method
         */
        method<TObject, TResult>(...args: any[]): LoDashImplicitObjectWrapper<(object: TObject) => TResult>;

        /**
         * @see _.method
         */
        method<TResult>(...args: any[]): LoDashImplicitObjectWrapper<(object: any) => TResult>;
    }

    interface LoDashImplicitArrayWrapper<T> {
        /**
         * @see _.method
         */
        method<TObject, TResult>(...args: any[]): LoDashImplicitObjectWrapper<(object: TObject) => TResult>;

        /**
         * @see _.method
         */
        method<TResult>(...args: any[]): LoDashImplicitObjectWrapper<(object: any) => TResult>;
    }

    interface LoDashExplicitWrapper<T> {
        /**
         * @see _.method
         */
        method<TObject, TResult>(...args: any[]): LoDashExplicitObjectWrapper<(object: TObject) => TResult>;

        /**
         * @see _.method
         */
        method<TResult>(...args: any[]): LoDashExplicitObjectWrapper<(object: any) => TResult>;
    }

    interface LoDashExplicitArrayWrapper<T> {
        /**
         * @see _.method
         */
        method<TObject, TResult>(...args: any[]): LoDashExplicitObjectWrapper<(object: TObject) => TResult>;

        /**
         * @see _.method
         */
        method<TResult>(...args: any[]): LoDashExplicitObjectWrapper<(object: any) => TResult>;
    }

    //_.methodOf
    interface LoDashStatic {
        /**
         * The opposite of _.method; this method creates a function that invokes the method at a given path on object.
         * Any additional arguments are provided to the invoked method.
         *
         * @param object The object to query.
         * @param args The arguments to invoke the method with.
         * @return Returns the new function.
         */
        methodOf<TObject extends {}, TResult>(
            object: TObject,
            ...args: any[]
        ): (path: StringRepresentable|StringRepresentable[]) => TResult;

        /**
         * @see _.methodOf
         */
        methodOf<TResult>(
            object: {},
            ...args: any[]
        ): (path: StringRepresentable|StringRepresentable[]) => TResult;
    }

    interface LoDashImplicitObjectWrapper<T> {
        /**
         * @see _.methodOf
         */
        methodOf<TResult>(
            ...args: any[]
        ): LoDashImplicitObjectWrapper<(path: StringRepresentable|StringRepresentable[]) => TResult>;
    }

    interface LoDashExplicitObjectWrapper<T> {
        /**
         * @see _.methodOf
         */
        methodOf<TResult>(
            ...args: any[]
        ): LoDashExplicitObjectWrapper<(path: StringRepresentable|StringRepresentable[]) => TResult>;
    }

    //_.mixin
    interface MixinOptions {
        chain?: boolean;
    }

    interface LoDashStatic {
        /**
         * Adds all own enumerable function properties of a source object to the destination object. If object is a
         * function then methods are added to its prototype as well.
         *
         * Note: Use _.runInContext to create a pristine lodash function to avoid conflicts caused by modifying
         * the original.
         *
         * @param object The destination object.
         * @param source The object of functions to add.
         * @param options The options object.
         * @param options.chain Specify whether the functions added are chainable.
         * @return Returns object.
         */
        mixin<TResult, TObject>(
            object: TObject,
            source: Dictionary<Function>,
            options?: MixinOptions
        ): TResult;

        /**
         * @see _.mixin
         */
        mixin<TResult>(
            source: Dictionary<Function>,
            options?: MixinOptions
        ): TResult;
    }

    interface LoDashImplicitObjectWrapper<T> {
        /**
         * @see _.mixin
         */
        mixin<TResult>(
            source: Dictionary<Function>,
            options?: MixinOptions
        ): LoDashImplicitObjectWrapper<TResult>;

        /**
         * @see _.mixin
         */
        mixin<TResult>(
            options?: MixinOptions
        ): LoDashImplicitObjectWrapper<TResult>;
    }

    interface LoDashExplicitObjectWrapper<T> {
        /**
         * @see _.mixin
         */
        mixin<TResult>(
            source: Dictionary<Function>,
            options?: MixinOptions
        ): LoDashExplicitObjectWrapper<TResult>;

        /**
         * @see _.mixin
         */
        mixin<TResult>(
            options?: MixinOptions
        ): LoDashExplicitObjectWrapper<TResult>;
    }

    //_.noConflict
    interface LoDashStatic {
        /**
         * Reverts the _ variable to its previous value and returns a reference to the lodash function.
         *
         * @return Returns the lodash function.
         */
        noConflict(): typeof _;
    }

    interface LoDashImplicitWrapperBase<T, TWrapper> {
        /**
         * @see _.noConflict
         */
        noConflict(): typeof _;
    }

    //_.noop
    interface LoDashStatic {
        /**
         * A no-operation function that returns undefined regardless of the arguments it receives.
         *
         * @return undefined
         */
        noop(...args: any[]): void;
    }

    interface LoDashImplicitWrapperBase<T, TWrapper> {
        /**
         * @see _.noop
         */
        noop(...args: any[]): void;
    }

    interface LoDashExplicitWrapperBase<T, TWrapper> {
        /**
         * @see _.noop
         */
        noop(...args: any[]): _.LoDashExplicitWrapper<void>;
    }

    //_.nthArg
    interface LoDashStatic {
        /**
         * Creates a function that returns its nth argument.
         *
         * @param n The index of the argument to return.
         * @return Returns the new function.
         */
        nthArg<TResult extends Function>(n?: number): TResult;
    }

    interface LoDashImplicitWrapper<T> {
        /**
         * @see _.nthArg
         */
        nthArg<TResult extends Function>(): LoDashImplicitObjectWrapper<TResult>;
    }

    interface LoDashExplicitWrapper<T> {
        /**
         * @see _.nthArg
         */
        nthArg<TResult extends Function>(): LoDashExplicitObjectWrapper<TResult>;
    }

    //_.over
    interface LoDashStatic {
        /**
         * Creates a function that invokes iteratees with the arguments provided to the created function and returns
         * their results.
         *
         * @param iteratees The iteratees to invoke.
         * @return Returns the new function.
         */
        over<TResult>(...iteratees: (Function|Function[])[]): (...args: any[]) => TResult[];
    }

    interface LoDashImplicitArrayWrapper<T> {
        /**
         * @see _.over
         */
        over<TResult>(...iteratees: (Function|Function[])[]): LoDashImplicitObjectWrapper<(...args: any[]) => TResult[]>;
    }

    interface LoDashImplicitObjectWrapper<T> {
        /**
         * @see _.over
         */
        over<TResult>(...iteratees: (Function|Function[])[]): LoDashImplicitObjectWrapper<(...args: any[]) => TResult[]>;
    }

    interface LoDashExplicitArrayWrapper<T> {
        /**
         * @see _.over
         */
        over<TResult>(...iteratees: (Function|Function[])[]): LoDashExplicitObjectWrapper<(...args: any[]) => TResult[]>;
    }

    interface LoDashExplicitObjectWrapper<T> {
        /**
         * @see _.over
         */
        over<TResult>(...iteratees: (Function|Function[])[]): LoDashExplicitObjectWrapper<(...args: any[]) => TResult[]>;
    }

    //_.overEvery
    interface LoDashStatic {
        /**
         * Creates a function that checks if all of the predicates return truthy when invoked with the arguments
         * provided to the created function.
         *
         * @param predicates The predicates to check.
         * @return Returns the new function.
         */
        overEvery(...predicates: (Function|Function[])[]): (...args: any[]) => boolean;
    }

    interface LoDashImplicitArrayWrapper<T> {
        /**
         * @see _.overEvery
         */
        overEvery(...predicates: (Function|Function[])[]): LoDashImplicitObjectWrapper<(...args: any[]) => boolean>;
    }

    interface LoDashImplicitObjectWrapper<T> {
        /**
         * @see _.overEvery
         */
        overEvery(...predicates: (Function|Function[])[]): LoDashImplicitObjectWrapper<(...args: any[]) => boolean>;
    }

    interface LoDashExplicitArrayWrapper<T> {
        /**
         * @see _.overEvery
         */
        overEvery(...predicates: (Function|Function[])[]): LoDashExplicitObjectWrapper<(...args: any[]) => boolean>;
    }

    interface LoDashExplicitObjectWrapper<T> {
        /**
         * @see _.overEvery
         */
        overEvery(...predicates: (Function|Function[])[]): LoDashExplicitObjectWrapper<(...args: any[]) => boolean>;
    }

    //_.overSome
    interface LoDashStatic {
        /**
         * Creates a function that checks if any of the predicates return truthy when invoked with the arguments
         * provided to the created function.
         *
         * @param predicates The predicates to check.
         * @return Returns the new function.
         */
        overSome(...predicates: (Function|Function[])[]): (...args: any[]) => boolean;
    }

    interface LoDashImplicitArrayWrapper<T> {
        /**
         * @see _.overSome
         */
        overSome(...predicates: (Function|Function[])[]): LoDashImplicitObjectWrapper<(...args: any[]) => boolean>;
    }

    interface LoDashImplicitObjectWrapper<T> {
        /**
         * @see _.overSome
         */
        overSome(...predicates: (Function|Function[])[]): LoDashImplicitObjectWrapper<(...args: any[]) => boolean>;
    }

    interface LoDashExplicitArrayWrapper<T> {
        /**
         * @see _.overSome
         */
        overSome(...predicates: (Function|Function[])[]): LoDashExplicitObjectWrapper<(...args: any[]) => boolean>;
    }

    interface LoDashExplicitObjectWrapper<T> {
        /**
         * @see _.overSome
         */
        overSome(...predicates: (Function|Function[])[]): LoDashExplicitObjectWrapper<(...args: any[]) => boolean>;
    }

    //_.property
    interface LoDashStatic {
        /**
         * Creates a function that returns the property value at path on a given object.
         *
         * @param path The path of the property to get.
         * @return Returns the new function.
         */
        property<TObj, TResult>(path: StringRepresentable|StringRepresentable[]): (obj: TObj) => TResult;
    }

    interface LoDashImplicitWrapper<T> {
        /**
         * @see _.property
         */
        property<TObj, TResult>(): LoDashImplicitObjectWrapper<(obj: TObj) => TResult>;
    }

    interface LoDashImplicitArrayWrapper<T> {
        /**
         * @see _.property
         */
        property<TObj, TResult>(): LoDashImplicitObjectWrapper<(obj: TObj) => TResult>;
    }

    interface LoDashExplicitWrapper<T> {
        /**
         * @see _.property
         */
        property<TObj, TResult>(): LoDashExplicitObjectWrapper<(obj: TObj) => TResult>;
    }

    interface LoDashExplicitArrayWrapper<T> {
        /**
         * @see _.property
         */
        property<TObj, TResult>(): LoDashExplicitObjectWrapper<(obj: TObj) => TResult>;
    }

    //_.propertyOf
    interface LoDashStatic {
        /**
         * The opposite of _.property; this method creates a function that returns the property value at a given path
         * on object.
         *
         * @param object The object to query.
         * @return Returns the new function.
         */
        propertyOf<T extends {}>(object: T): (path: string|string[]) => any;
    }

    interface LoDashImplicitObjectWrapper<T> {
        /**
         * @see _.propertyOf
         */
        propertyOf(): LoDashImplicitObjectWrapper<(path: string|string[]) => any>;
    }

    interface LoDashExplicitObjectWrapper<T> {
        /**
         * @see _.propertyOf
         */
        propertyOf(): LoDashExplicitObjectWrapper<(path: string|string[]) => any>;
    }

    //_.range
    interface LoDashStatic {
        /**
         * Creates an array of numbers (positive and/or negative) progressing from start up to, but not including, end.
         * If end is not specified it’s set to start with start then set to 0. If end is less than start a zero-length
         * range is created unless a negative step is specified.
         *
         * @param start The start of the range.
         * @param end The end of the range.
         * @param step The value to increment or decrement by.
         * @return Returns a new range array.
         */
        range(
            start: number,
            end: number,
            step?: number
        ): number[];

        /**
         * @see _.range
         */
        range(
            end: number,
            step?: number
        ): number[];
    }

    interface LoDashImplicitWrapper<T> {
        /**
         * @see _.range
         */
        range(
            end?: number,
            step?: number
        ): LoDashImplicitArrayWrapper<number>;
    }

    interface LoDashExplicitWrapper<T> {
        /**
         * @see _.range
         */
        range(
            end?: number,
            step?: number
        ): LoDashExplicitArrayWrapper<number>;
    }

    //_.rangeRight
    interface LoDashStatic {
        /**
         * This method is like `_.range` except that it populates values in
         * descending order.
         *
         * @static
         * @memberOf _
         * @category Util
         * @param {number} [start=0] The start of the range.
         * @param {number} end The end of the range.
         * @param {number} [step=1] The value to increment or decrement by.
         * @returns {Array} Returns the new array of numbers.
         * @example
         *
         * _.rangeRight(4);
         * // => [3, 2, 1, 0]
         *
         * _.rangeRight(-4);
         * // => [-3, -2, -1, 0]
         *
         * _.rangeRight(1, 5);
         * // => [4, 3, 2, 1]
         *
         * _.rangeRight(0, 20, 5);
         * // => [15, 10, 5, 0]
         *
         * _.rangeRight(0, -4, -1);
         * // => [-3, -2, -1, 0]
         *
         * _.rangeRight(1, 4, 0);
         * // => [1, 1, 1]
         *
         * _.rangeRight(0);
         * // => []
         */
        rangeRight(
            start: number,
            end: number,
            step?: number
        ): number[];

        /**
         * @see _.rangeRight
         */
        rangeRight(
            end: number,
            step?: number
        ): number[];
    }

    interface LoDashImplicitWrapper<T> {
        /**
         * @see _.rangeRight
         */
        rangeRight(
            end?: number,
            step?: number
        ): LoDashImplicitArrayWrapper<number>;
    }

    interface LoDashExplicitWrapper<T> {
        /**
         * @see _.rangeRight
         */
        rangeRight(
            end?: number,
            step?: number
        ): LoDashExplicitArrayWrapper<number>;
    }

    //_.runInContext
    interface LoDashStatic {
        /**
         * Create a new pristine lodash function using the given context object.
         *
         * @param context The context object.
         * @return Returns a new lodash function.
         */
        runInContext(context?: Object): typeof _;
    }

    interface LoDashImplicitObjectWrapper<T> {
        /**
         * @see _.runInContext
         */
        runInContext(): typeof _;
    }

    //_.times
    interface LoDashStatic {
        /**
         * Invokes the iteratee function n times, returning an array of the results of each invocation. The iteratee
         * is invoked with one argument; (index).
         *
         * @param n The number of times to invoke iteratee.
         * @param iteratee The function invoked per iteration.
         * @return Returns the array of results.
         */
        times<TResult>(
            n: number,
            iteratee: (num: number) => TResult
        ): TResult[];

        /**
         * @see _.times
         */
        times(n: number): number[];
    }

    interface LoDashImplicitWrapper<T> {
        /**
         * @see _.times
         */
        times<TResult>(
            iteratee: (num: number) => TResult
        ): TResult[];

        /**
         * @see _.times
         */
        times(): number[];
    }

    interface LoDashExplicitWrapper<T> {
        /**
         * @see _.times
         */
        times<TResult>(
            iteratee: (num: number) => TResult
        ): LoDashExplicitArrayWrapper<TResult>;

        /**
         * @see _.times
         */
        times(): LoDashExplicitArrayWrapper<number>;
    }

    //_.toPath
    interface LoDashStatic {
        /**
         * Converts `value` to a property path array.
         *
         * @static
         * @memberOf _
         * @category Util
         * @param {*} value The value to convert.
         * @returns {Array} Returns the new property path array.
         * @example
         *
         * _.toPath('a.b.c');
         * // => ['a', 'b', 'c']
         *
         * _.toPath('a[0].b.c');
         * // => ['a', '0', 'b', 'c']
         *
         * var path = ['a', 'b', 'c'],
         *     newPath = _.toPath(path);
         *
         * console.log(newPath);
         * // => ['a', 'b', 'c']
         *
         * console.log(path === newPath);
         * // => false
         */
        toPath(value: any): string[];
    }

    interface LoDashImplicitWrapperBase<T, TWrapper> {
        /**
         * @see _.toPath
         */
        toPath(): LoDashImplicitWrapper<string[]>;
    }

    interface LoDashExplicitWrapperBase<T, TWrapper> {
        /**
         * @see _.toPath
         */
        toPath(): LoDashExplicitWrapper<string[]>;
    }

    //_.uniqueId
    interface LoDashStatic {
        /**
         * Generates a unique ID. If prefix is provided the ID is appended to it.
         *
         * @param prefix The value to prefix the ID with.
         * @return Returns the unique ID.
         */
        uniqueId(prefix?: string): string;
    }

    interface LoDashImplicitWrapper<T> {
        /**
         * @see _.uniqueId
         */
        uniqueId(): string;
    }

    interface LoDashExplicitWrapper<T> {
        /**
         * @see _.uniqueId
         */
        uniqueId(): LoDashExplicitWrapper<string>;
    }

    interface ListIterator<T, TResult> {
        (value: T, index: number, collection: List<T>): TResult;
    }

    interface DictionaryIterator<T, TResult> {
        (value: T, key?: string, collection?: Dictionary<T>): TResult;
    }

    interface NumericDictionaryIterator<T, TResult> {
        (value: T, key?: number, collection?: Dictionary<T>): TResult;
    }

    interface ObjectIterator<T, TResult> {
        (element: T, key?: string, collection?: any): TResult;
    }

    interface StringIterator<TResult> {
        (char: string, index?: number, string?: string): TResult;
    }

    interface MemoVoidIterator<T, TResult> {
        (prev: TResult, curr: T, indexOrKey?: any, list?: T[]): void;
    }
    interface MemoIterator<T, TResult> {
        (prev: TResult, curr: T, indexOrKey?: any, list?: T[]): TResult;
    }

    interface MemoVoidArrayIterator<T, TResult> {
        (acc: TResult, curr: T, index?: number, arr?: T[]): void;
    }
    interface MemoVoidDictionaryIterator<T, TResult> {
        (acc: TResult, curr: T, key?: string, dict?: Dictionary<T>): void;
    }

    //interface Collection<T> {}

    // Common interface between Arrays and jQuery objects
    interface List<T> {
        [index: number]: T;
        length: number;
    }

    interface Dictionary<T> {
        [index: string]: T;
    }

    interface NumericDictionary<T> {
        [index: number]: T;
    }

    interface StringRepresentable {
        toString(): string;
    }

    interface Cancelable {
        cancel(): void;
    }
}

declare module "lodash" {
    export = _;
}
