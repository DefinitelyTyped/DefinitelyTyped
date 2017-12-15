// Type definitions for Lo-Dash 4.14
// Project: http://lodash.com/
// Definitions by: Brian Zengel <https://github.com/bczengel>,
//                 Ilya Mochalov <https://github.com/chrootsu>,
//                 Stepan Mikhaylyuk <https://github.com/stepancar>,
//                 Eric L Anderson <https://github.com/ericanderson>,
//                 AJ Richardson <https://github.com/aj-r>,
//                 Junyoung Clare Jang <https://github.com/ailrun>,
//                 e-cloud <https://github.com/e-cloud>,
//                 Georgii Dolzhykov <https://github.com/thorn0>,
//                 Jack Moore <https://github.com/jtmthf>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

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

added 20 lang methods:
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
- [X] _.conforms
- [X] _.conformsTo

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
- [x] Added flush method to debounced & throttled functions

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
- [ ] Added support for ES6 maps, sets, & symbols to _.clone, _.isEqual, & _.toArray
- [x] Enabled _.flow & _.flowRight to accept an array of functions
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
- [ ] _.nthArg
- [ ] _.over
- [ ] _.overEvery
- [ ] _.overSome
- [ ] _.rangeRight

- [ ] _.next
*/

export = _;
export as namespace _;

declare let _: _.LoDashStatic;

type PartialObject<T> = Partial<T>;

declare namespace _ {
    type Many<T> = T | T[];

    interface LoDashStatic {
        /**
        * Creates a lodash object which wraps value to enable implicit method chain sequences.
        * Methods that operate on and return arrays, collections, and functions can be chained together.
        * Methods that retrieve a single value or may return a primitive value will automatically end the
        * chain sequence and return the unwrapped value. Otherwise, the value must be unwrapped with value().
        *
        * Explicit chain sequences, which must be unwrapped with value(), may be enabled using _.chain.
        *
        * The execution of chained methods is lazy, that is, it's deferred until value() is
        * implicitly or explicitly called.
        *
        * Lazy evaluation allows several methods to support shortcut fusion. Shortcut fusion
        * is an optimization to merge iteratee calls; this avoids the creation of intermediate
        * arrays and can greatly reduce the number of iteratee executions. Sections of a chain
        * sequence qualify for shortcut fusion if the section is applied to an array and iteratees
        * accept only one argument. The heuristic for whether a section qualifies for shortcut
        * fusion is subject to change.
        *
        * Chaining is supported in custom builds as long as the value() method is directly or
        * indirectly included in the build.
        *
        * In addition to lodash methods, wrappers have Array and String methods.
        * The wrapper Array methods are:
        * concat, join, pop, push, shift, sort, splice, and unshift.
        * The wrapper String methods are:
        * replace and split.
        *
        * The wrapper methods that support shortcut fusion are:
        * at, compact, drop, dropRight, dropWhile, filter, find, findLast, head, initial, last,
        * map, reject, reverse, slice, tail, take, takeRight, takeRightWhile, takeWhile, and toArray
        *
        * The chainable wrapper methods are:
        * after, ary, assign, assignIn, assignInWith, assignWith, at, before, bind, bindAll, bindKey,
        * castArray, chain, chunk, commit, compact, concat, conforms, constant, countBy, create,
        * curry, debounce, defaults, defaultsDeep, defer, delay, difference, differenceBy, differenceWith,
        * drop, dropRight, dropRightWhile, dropWhile, extend, extendWith, fill, filter, flatMap,
        * flatMapDeep, flatMapDepth, flatten, flattenDeep, flattenDepth, flip, flow, flowRight,
        * fromPairs, functions, functionsIn, groupBy, initial, intersection, intersectionBy, intersectionWith,
        * invert, invertBy, invokeMap, iteratee, keyBy, keys, keysIn, map, mapKeys, mapValues,
        * matches, matchesProperty, memoize, merge, mergeWith, method, methodOf, mixin, negate,
        * nthArg, omit, omitBy, once, orderBy, over, overArgs, overEvery, overSome, partial, partialRight,
        * partition, pick, pickBy, plant, property, propertyOf, pull, pullAll, pullAllBy, pullAllWith, pullAt,
        * push, range, rangeRight, rearg, reject, remove, rest, reverse, sampleSize, set, setWith,
        * shuffle, slice, sort, sortBy, sortedUniq, sortedUniqBy, splice, spread, tail, take,
        * takeRight, takeRightWhile, takeWhile, tap, throttle, thru, toArray, toPairs, toPairsIn,
        * toPath, toPlainObject, transform, unary, union, unionBy, unionWith, uniq, uniqBy, uniqWith,
        * unset, unshift, unzip, unzipWith, update, updateWith, values, valuesIn, without, wrap,
        * xor, xorBy, xorWith, zip, zipObject, zipObjectDeep, and zipWith.
        *
        * The wrapper methods that are not chainable by default are:
        * add, attempt, camelCase, capitalize, ceil, clamp, clone, cloneDeep, cloneDeepWith, cloneWith,
        * conformsTo, deburr, defaultTo, divide, each, eachRight, endsWith, eq, escape, escapeRegExp,
        * every, find, findIndex, findKey, findLast, findLastIndex, findLastKey, first, floor, forEach,
        * forEachRight, forIn, forInRight, forOwn, forOwnRight, get, gt, gte, has, hasIn, head,
        * identity, includes, indexOf, inRange, invoke, isArguments, isArray, isArrayBuffer,
        * isArrayLike, isArrayLikeObject, isBoolean, isBuffer, isDate, isElement, isEmpty, isEqual, isEqualWith,
        * isError, isFinite, isFunction, isInteger, isLength, isMap, isMatch, isMatchWith, isNaN,
        * isNative, isNil, isNull, isNumber, isObject, isObjectLike, isPlainObject, isRegExp,
        * isSafeInteger, isSet, isString, isUndefined, isTypedArray, isWeakMap, isWeakSet, join,
        * kebabCase, last, lastIndexOf, lowerCase, lowerFirst, lt, lte, max, maxBy, mean, meanBy,
        * min, minBy, multiply, noConflict, noop, now, nth, pad, padEnd, padStart, parseInt, pop,
        * random, reduce, reduceRight, repeat, result, round, runInContext, sample, shift, size,
        * snakeCase, some, sortedIndex, sortedIndexBy, sortedLastIndex, sortedLastIndexBy, startCase,
        * startsWith, stubArray, stubFalse, stubObject, stubString, stubTrue, subtract, sum, sumBy,
        * template, times, toFinite, toInteger, toJSON, toLength, toLower, toNumber, toSafeInteger,
        * toString, toUpper, trim, trimEnd, trimStart, truncate, unescape, uniqueId, upperCase,
        * upperFirst, value, and words.
        **/
        <T>(value: T): LoDashImplicitWrapper<T>;

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
        set(key: string, value: any): Dictionary<any>;

        /**
         * Removes all key-value entries from the map.
         */
        clear(): void;
    }
    interface MapCacheConstructor {
        new (): MapCache;
    }

    interface LoDashWrapper<TValue> { }

    interface LoDashImplicitWrapper<TValue> extends LoDashWrapper<TValue> {
        pop<T>(this: LoDashImplicitWrapper<List<T> | null | undefined>): T | undefined;
        push<T>(this: LoDashImplicitWrapper<List<T> | null | undefined>, ...items: T[]): this;
        shift<T>(this: LoDashImplicitWrapper<List<T> | null | undefined>): T | undefined;
        sort<T>(this: LoDashImplicitWrapper<List<T> | null | undefined>, compareFn?: (a: T, b: T) => number): this;
        splice<T>(this: LoDashImplicitWrapper<List<T> | null | undefined>, start: number, deleteCount?: number, ...items: T[]): this;
        unshift<T>(this: LoDashImplicitWrapper<List<T> | null | undefined>, ...items: T[]): this;
    }

    interface LoDashExplicitWrapper<TValue> extends LoDashWrapper<TValue> {
        pop<T>(this: LoDashExplicitWrapper<List<T> | null | undefined>): LoDashExplicitWrapper<T | undefined>;
        push<T>(this: LoDashExplicitWrapper<List<T> | null | undefined>, ...items: T[]): this;
        shift<T>(this: LoDashExplicitWrapper<List<T> | null | undefined>): LoDashExplicitWrapper<T | undefined>;
        sort<T>(this: LoDashExplicitWrapper<List<T> | null | undefined>, compareFn?: (a: T, b: T) => number): this;
        splice<T>(this: LoDashExplicitWrapper<List<T> | null | undefined>, start: number, deleteCount?: number, ...items: T[]): this;
        unshift<T>(this: LoDashExplicitWrapper<List<T> | null | undefined>, ...items: T[]): this;
    }

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
            array: List<T> | null | undefined,
            size?: number
        ): T[][];
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.chunk
         */
        chunk<T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            size?: number,
        ): LoDashImplicitWrapper<T[][]>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.chunk
         */
        chunk<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            size?: number,
        ): LoDashExplicitWrapper<T[][]>;
    }

    //_.compact
    interface LoDashStatic {
        /**
         * Creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are
         * falsey.
         *
         * @param array The array to compact.
         * @return Returns the new array of filtered values.
         */
        compact<T>(array: List<T | null | undefined | false | "" | 0> | null | undefined): T[];
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.compact
         */
        compact<T>(this: LoDashImplicitWrapper<List<T | null | undefined | false | "" | 0> | null | undefined>): LoDashImplicitWrapper<T[]>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.compact
         */
        compact<T>(this: LoDashExplicitWrapper<List<T | null | undefined | false | "" | 0> | null | undefined>): LoDashExplicitWrapper<T[]>;
    }

    //_.concat
    interface LoDashStatic {
        /**
         * Creates a new array concatenating `array` with any additional arrays
         * and/or values.
         *
         * @category Array
         * @param array The array to concatenate.
         * @param [values] The values to concatenate.
         * @returns Returns the new concatenated array.
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
         concat<T>(array: Many<T>, ...values: Array<Many<T>>): T[];
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.compact
         */
        concat<T>(this: LoDashImplicitWrapper<Many<T>>, ...values: Array<Many<T>>): LoDashImplicitWrapper<T[]>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.compact
         */
        concat<T>(this: LoDashExplicitWrapper<Many<T>>, ...values: Array<Many<T>>): LoDashExplicitWrapper<T[]>;
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
            array: List<T> | null | undefined,
            ...values: Array<List<T>>
        ): T[];
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.difference
         */
        difference<T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            ...values: Array<List<T>>
        ): LoDashImplicitWrapper<T[]>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.difference
         */
        difference<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            ...values: Array<List<T>>
        ): LoDashExplicitWrapper<T[]>;
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
        differenceBy<T1, T2>(
            array: List<T1> | null | undefined,
            values: List<T2>,
            iteratee: ValueIteratee<T1 | T2>
        ): T1[];

        /**
         * @see _.differenceBy
         */
        differenceBy<T1, T2, T3>(
            array: List<T1> | null | undefined,
            values1: List<T2>,
            values2: List<T3>,
            iteratee: ValueIteratee<T1 | T2 | T3>
        ): T1[];

        /**
         * @see _.differenceBy
         */
        differenceBy<T1, T2, T3, T4>(
            array: List<T1> | null | undefined,
            values1: List<T2>,
            values2: List<T3>,
            values3: List<T4>,
            iteratee: ValueIteratee<T1 | T2 | T3 | T4>
        ): T1[];

        /**
         * @see _.differenceBy
         */
        differenceBy<T1, T2, T3, T4, T5>(
            array: List<T1> | null | undefined,
            values1: List<T2>,
            values2: List<T3>,
            values3: List<T4>,
            values4: List<T5>,
            iteratee: ValueIteratee<T1 | T2 | T3 | T4 | T5>
        ): T1[];

        /**
         * @see _.differenceBy
         */
        differenceBy<T1, T2, T3, T4, T5, T6>(
            array: List<T1> | null | undefined,
            values1: List<T2>,
            values2: List<T3>,
            values3: List<T4>,
            values4: List<T5>,
            values5: List<T6>,
            iteratee: ValueIteratee<T1 | T2 | T3 | T4 | T5 | T6>
        ): T1[];

        /**
         * @see _.differenceBy
         */
        differenceBy<T1, T2, T3, T4, T5, T6, T7>(
            array: List<T1> | null | undefined,
            values1: List<T2>,
            values2: List<T3>,
            values3: List<T4>,
            values4: List<T5>,
            values5: List<T6>,
            ...values: Array<List<T7> | ValueIteratee<T1 | T2 | T3 | T4 | T5 | T6 | T7>>
        ): T1[];

        /**
         * @see _.differenceBy
         */
        differenceBy<T>(
            array: List<T> | null | undefined,
            ...values: Array<List<T>>
        ): T[];
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.differenceBy
         */
        differenceBy<T1, T2>(
            this: LoDashImplicitWrapper<List<T1> | null | undefined>,
            values: List<T2>,
            iteratee: ValueIteratee<T1 | T2>
        ): LoDashImplicitWrapper<T1[]>;

        /**
         * @see _.differenceBy
         */
        differenceBy<T1, T2, T3>(
            this: LoDashImplicitWrapper<List<T1> | null | undefined>,
            values1: List<T2>,
            values2: List<T3>,
            iteratee: ValueIteratee<T1 | T2 | T3>
        ): LoDashImplicitWrapper<T1[]>;

        /**
         * @see _.differenceBy
         */
        differenceBy<T1, T2, T3, T4>(
            this: LoDashImplicitWrapper<List<T1> | null | undefined>,
            values1: List<T2>,
            values2: List<T3>,
            values3: List<T4>,
            iteratee: ValueIteratee<T1 | T2 | T3 | T4>
        ): LoDashImplicitWrapper<T1[]>;

        /**
         * @see _.differenceBy
         */
        differenceBy<T1, T2, T3, T4, T5>(
            this: LoDashImplicitWrapper<List<T1> | null | undefined>,
            values1: List<T2>,
            values2: List<T3>,
            values3: List<T4>,
            values4: List<T5>,
            iteratee: ValueIteratee<T1 | T2 | T3 | T4 | T5>
        ): LoDashImplicitWrapper<T1[]>;

        /**
         * @see _.differenceBy
         */
        differenceBy<T1, T2, T3, T4, T5, T6>(
            this: LoDashImplicitWrapper<List<T1> | null | undefined>,
            values1: List<T2>,
            values2: List<T3>,
            values3: List<T4>,
            values4: List<T5>,
            values5: List<T6>,
            iteratee: ValueIteratee<T1 | T2 | T3 | T4 | T5 | T6>
        ): LoDashImplicitWrapper<T1[]>;

        /**
         * @see _.differenceBy
         */
        differenceBy<T1, T2, T3, T4, T5, T6, T7>(
            this: LoDashImplicitWrapper<List<T1> | null | undefined>,
            values1: List<T2>,
            values2: List<T3>,
            values3: List<T4>,
            values4: List<T5>,
            values5: List<T6>,
            ...values: Array<List<T7> | ValueIteratee<T1 | T2 | T3 | T4 | T5 | T6 | T7>>
        ): LoDashImplicitWrapper<T1[]>;

        /**
         * @see _.differenceBy
         */
        differenceBy<T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            ...values: Array<List<T>>
        ): LoDashImplicitWrapper<T[]>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.differenceBy
         */
        differenceBy<T1, T2>(
            this: LoDashExplicitWrapper<List<T1> | null | undefined>,
            values: List<T2>,
            iteratee: ValueIteratee<T1 | T2>
        ): LoDashExplicitWrapper<T1[]>;

        /**
         * @see _.differenceBy
         */
        differenceBy<T1, T2, T3>(
            this: LoDashExplicitWrapper<List<T1> | null | undefined>,
            values1: List<T2>,
            values2: List<T3>,
            iteratee: ValueIteratee<T1 | T2 | T3>
        ): LoDashExplicitWrapper<T1[]>;

        /**
         * @see _.differenceBy
         */
        differenceBy<T1, T2, T3, T4>(
            this: LoDashExplicitWrapper<List<T1> | null | undefined>,
            values1: List<T2>,
            values2: List<T3>,
            values3: List<T4>,
            iteratee: ValueIteratee<T1 | T2 | T3 | T4>
        ): LoDashExplicitWrapper<T1[]>;

        /**
         * @see _.differenceBy
         */
        differenceBy<T1, T2, T3, T4, T5>(
            this: LoDashExplicitWrapper<List<T1> | null | undefined>,
            values1: List<T2>,
            values2: List<T3>,
            values3: List<T4>,
            values4: List<T5>,
            iteratee: ValueIteratee<T1 | T2 | T3 | T4 | T5>
        ): LoDashExplicitWrapper<T1[]>;

        /**
         * @see _.differenceBy
         */
        differenceBy<T1, T2, T3, T4, T5, T6>(
            this: LoDashExplicitWrapper<List<T1> | null | undefined>,
            values1: List<T2>,
            values2: List<T3>,
            values3: List<T4>,
            values4: List<T5>,
            values5: List<T6>,
            iteratee: ValueIteratee<T1 | T2 | T3 | T4 | T5 | T6>
        ): LoDashExplicitWrapper<T1[]>;

        /**
         * @see _.differenceBy
         */
        differenceBy<T1, T2, T3, T4, T5, T6, T7>(
            this: LoDashExplicitWrapper<List<T1> | null | undefined>,
            values1: List<T2>,
            values2: List<T3>,
            values3: List<T4>,
            values4: List<T5>,
            values5: List<T6>,
            ...values: Array<List<T7> | ValueIteratee<T1 | T2 | T3 | T4 | T5 | T6 | T7>>
        ): LoDashExplicitWrapper<T1[]>;

        /**
         * @see _.differenceBy
         */
        differenceBy<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            ...values: Array<List<T>>
        ): LoDashExplicitWrapper<T[]>;
    }

    //_.differenceWith
    interface LoDashStatic {
        /**
         * Creates an array of unique `array` values not included in the other
         * provided arrays using [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
         * for equality comparisons.
         *
         * @category Array
         * @param [values] The arrays to inspect.
         * @param [comparator] The comparator invoked per element.
         * @returns Returns the new array of filtered values.
         * @example
         *
         * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];

         * _.differenceWith(objects, [{ 'x': 1, 'y': 2 }], _.isEqual);
         * // => [{ 'x': 2, 'y': 1 }]
         */
        differenceWith<T1, T2>(
            array: List<T1> | null | undefined,
            values: List<T2>,
            comparator: Comparator2<T1, T2>
        ): T1[];

        /**
         * @see _.differenceWith
         */
        differenceWith<T1, T2, T3>(
            array: List<T1> | null | undefined,
            values1: List<T2>,
            values2: List<T3>,
            comparator: Comparator2<T1, T2 | T3>
        ): T1[];

        /**
         * @see _.differenceWith
         */
        differenceWith<T1, T2, T3, T4>(
            array: List<T1> | null | undefined,
            values1: List<T2>,
            values2: List<T3>,
            ...values: Array<List<T4> | Comparator2<T1, T2 | T3 | T4>>
        ): T1[];

        /**
         * @see _.differenceWith
         */
        differenceWith<T>(
            array: List<T> | null | undefined,
            ...values: Array<List<T>>
        ): T[];
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.differenceWith
         */
        differenceWith<T1, T2>(
            this: LoDashImplicitWrapper<List<T1> | null | undefined>,
            values: List<T2>,
            comparator: Comparator2<T1, T2>
        ): LoDashImplicitWrapper<T1[]>;

        /**
         * @see _.differenceWith
         */
        differenceWith<T1, T2, T3>(
            this: LoDashImplicitWrapper<List<T1> | null | undefined>,
            values1: List<T2>,
            values2: List<T3>,
            comparator: Comparator2<T1, T2 | T3>
        ): LoDashImplicitWrapper<T1[]>;

        /**
         * @see _.differenceWith
         */
        differenceWith<T1, T2, T3, T4>(
            this: LoDashImplicitWrapper<List<T1> | null | undefined>,
            values1: List<T2>,
            values2: List<T3>,
            ...values: Array<List<T4> | Comparator2<T1, T2 | T3 | T4>>
        ): LoDashImplicitWrapper<T1[]>;

        /**
         * @see _.differenceWith
         */
        differenceWith<T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            ...values: Array<List<T>>
        ): LoDashImplicitWrapper<T[]>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.differenceWith
         */
        differenceWith<T1, T2>(
            this: LoDashExplicitWrapper<List<T1> | null | undefined>,
            values: List<T2>,
            comparator: Comparator2<T1, T2>
        ): LoDashExplicitWrapper<T1[]>;

        /**
         * @see _.differenceWith
         */
        differenceWith<T1, T2, T3>(
            this: LoDashExplicitWrapper<List<T1> | null | undefined>,
            values1: List<T2>,
            values2: List<T3>,
            comparator: Comparator2<T1, T2 | T3>
        ): LoDashExplicitWrapper<T1[]>;

        /**
         * @see _.differenceWith
         */
        differenceWith<T1, T2, T3, T4>(
            this: LoDashExplicitWrapper<List<T1> | null | undefined>,
            values1: List<T2>,
            values2: List<T3>,
            ...values: Array<List<T4> | Comparator2<T1, T2 | T3 | T4>>
        ): LoDashExplicitWrapper<T1[]>;

        /**
         * @see _.differenceWith
         */
        differenceWith<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            ...values: Array<List<T>>
        ): LoDashExplicitWrapper<T[]>;
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
        drop<T>(array: List<T> | null | undefined, n?: number): T[];
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.drop
         */
        drop<T>(this: LoDashImplicitWrapper<List<T> | null | undefined>, n?: number): LoDashImplicitWrapper<T[]>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.drop
         */
        drop<T>(this: LoDashExplicitWrapper<List<T> | null | undefined>, n?: number): LoDashExplicitWrapper<T[]>;
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
            array: List<T> | null | undefined,
            n?: number
        ): T[];
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.dropRight
         */
        dropRight<T>(this: LoDashImplicitWrapper<List<T> | null | undefined>, n?: number): LoDashImplicitWrapper<T[]>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.dropRight
         */
        dropRight<T>(this: LoDashExplicitWrapper<List<T> | null | undefined>, n?: number): LoDashExplicitWrapper<T[]>;
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
        dropRightWhile<T>(
            array: List<T> | null | undefined,
            predicate?: ListIteratee<T>
        ): T[];
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.dropRightWhile
         */
        dropRightWhile<T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            predicate?: ListIteratee<T>
        ): LoDashImplicitWrapper<T[]>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.dropRightWhile
         */
        dropRightWhile<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            predicate?: ListIteratee<T>
        ): LoDashExplicitWrapper<T[]>;
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
        dropWhile<T>(
            array: List<T> | null | undefined,
            predicate?: ListIteratee<T>
        ): T[];
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.dropWhile
         */
        dropWhile<T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            predicate?: ListIteratee<T>
        ): LoDashImplicitWrapper<T[]>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.dropWhile
         */
        dropWhile<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            predicate?: ListIteratee<T>
        ): LoDashExplicitWrapper<T[]>;
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
            array: any[] | null | undefined,
            value: T
        ): T[];

        /**
         * @see _.fill
         */
        fill<T>(
            array: List<any> | null | undefined,
            value: T
        ): List<T>;

        /**
         * @see _.fill
         */
        fill<T, U>(
            array: U[] | null | undefined,
            value: T,
            start?: number,
            end?: number
        ): Array<T | U>;

        /**
         * @see _.fill
         */
        fill<T, U>(
            array: List<U> | null | undefined,
            value: T,
            start?: number,
            end?: number
        ): List<T | U>;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.fill
         */
        fill<T>(
            this: LoDashImplicitWrapper<any[] | null | undefined>,
            value: T
        ): LoDashImplicitWrapper<T[]>;

        /**
         * @see _.fill
         */
        fill<T>(
            this: LoDashImplicitWrapper<List<any> | null | undefined>,
            value: T
        ): LoDashImplicitWrapper<List<T>>;

        /**
         * @see _.fill
         */
        fill<T, U>(
            this: LoDashImplicitWrapper<U[] | null | undefined>,
            value: T,
            start?: number,
            end?: number
        ): LoDashImplicitWrapper<Array<T | U>>;

        /**
         * @see _.fill
         */
        fill<T, U>(
            this: LoDashImplicitWrapper<List<U> | null | undefined>,
            value: T,
            start?: number,
            end?: number
        ): LoDashImplicitWrapper<List<T | U>>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.fill
         */
        fill<T>(
            this: LoDashExplicitWrapper<any[] | null | undefined>,
            value: T
        ): LoDashExplicitWrapper<T[]>;

        /**
         * @see _.fill
         */
        fill<T>(
            this: LoDashExplicitWrapper<List<any> | null | undefined>,
            value: T
        ): LoDashExplicitWrapper<List<T>>;

        /**
         * @see _.fill
         */
        fill<T, U>(
            this: LoDashExplicitWrapper<U[] | null | undefined>,
            value: T,
            start?: number,
            end?: number
        ): LoDashExplicitWrapper<Array<T | U>>;

        /**
         * @see _.fill
         */
        fill<T, U>(
            this: LoDashExplicitWrapper<List<U> | null | undefined>,
            value: T,
            start?: number,
            end?: number
        ): LoDashExplicitWrapper<List<T | U>>;
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
         * @param fromIndex The index to search from.
         * @return Returns the index of the found element, else -1.
         */
        findIndex<T>(
            array: List<T> | null | undefined,
            predicate?: ListIterateeCustom<T, boolean>,
            fromIndex?: number
        ): number;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.findIndex
         */
        findIndex<T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            predicate?: ListIterateeCustom<T, boolean>,
            fromIndex?: number
        ): number;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.findIndex
         */
        findIndex<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            predicate?: ListIterateeCustom<T, boolean>,
            fromIndex?: number
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
         * @param fromIndex The index to search from.
         * @return Returns the index of the found element, else -1.
         */
        findLastIndex<T>(
            array: List<T> | null | undefined,
            predicate?: ListIterateeCustom<T, boolean>,
            fromIndex?: number
        ): number;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.findLastIndex
         */
        findLastIndex<T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            predicate?: ListIterateeCustom<T, boolean>,
            fromIndex?: number
        ): number;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.findLastIndex
         */
        findLastIndex<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            predicate?: ListIterateeCustom<T, boolean>,
            fromIndex?: number
        ): LoDashExplicitWrapper<number>;
    }

    //_.first
    interface LoDashStatic {
        first: typeof _.head; // tslint:disable-line:no-unnecessary-qualifier
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.head
         */
        first<T>(this: LoDashImplicitWrapper<List<T> | null | undefined>): T | undefined;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.head
         */
        first<T>(this: LoDashExplicitWrapper<List<T> | null | undefined>): LoDashExplicitWrapper<T | undefined>;
    }

    interface RecursiveArray<T> extends Array<T|RecursiveArray<T>> {}
    interface ListOfRecursiveArraysOrValues<T> extends List<T|RecursiveArray<T>> {}

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
        flatten<T>(array: ListOfRecursiveArraysOrValues<T> | null | undefined, isDeep: boolean): T[];

        /**
         * @see _.flatten
         */
        flatten<T>(array: List<Many<T>> | null | undefined): T[];
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.flatten
         */
        flatten<T>(this: LoDashImplicitWrapper<ListOfRecursiveArraysOrValues<T> | null | undefined>, isDeep: boolean): LoDashImplicitWrapper<T[]>;

        /**
         * @see _.flatten
         */
        flatten<T>(this: LoDashImplicitWrapper<List<Many<T>> | null | undefined>): LoDashImplicitWrapper<T[]>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.flatten
         */
        flatten<T>(this: LoDashExplicitWrapper<ListOfRecursiveArraysOrValues<T> | null | undefined>, isDeep: boolean): LoDashExplicitWrapper<T[]>;

        /**
         * @see _.flatten
         */
        flatten<T>(this: LoDashExplicitWrapper<List<Many<T>> | null | undefined>): LoDashExplicitWrapper<T[]>;
    }

    //_.flattenDeep
    interface LoDashStatic {
        /**
         * Recursively flattens a nested array.
         *
         * @param array The array to recursively flatten.
         * @return Returns the new flattened array.
         */
        flattenDeep<T>(array: ListOfRecursiveArraysOrValues<T> | null | undefined): T[];
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.flattenDeep
         */
        flattenDeep<T>(this: LoDashImplicitWrapper<ListOfRecursiveArraysOrValues<T> | null | undefined>): LoDashImplicitWrapper<T[]>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.flattenDeep
         */
        flattenDeep<T>(this: LoDashExplicitWrapper<ListOfRecursiveArraysOrValues<T> | null | undefined>): LoDashExplicitWrapper<T[]>;
    }

    // _.flattenDepth
    interface LoDashStatic {
        /**
        * Recursively flatten array up to depth times.
        *
        * @param array The array to recursively flatten.
        * @param number The maximum recursion depth.
        * @return Returns the new flattened array.
        */
        flattenDepth<T>(array: ListOfRecursiveArraysOrValues<T> | null | undefined, depth?: number): T[];
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.flattenDeep
         */
        flattenDepth<T>(this: LoDashImplicitWrapper<ListOfRecursiveArraysOrValues<T> | null | undefined>, depth?: number): LoDashImplicitWrapper<T[]>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.flattenDeep
         */
        flattenDepth<T>(this: LoDashExplicitWrapper<ListOfRecursiveArraysOrValues<T> | null | undefined>, depth?: number): LoDashExplicitWrapper<T[]>;
    }

    //_.fromPairs
    interface LoDashStatic {
        /**
         * The inverse of `_.toPairs`; this method returns an object composed
         * from key-value `pairs`.
         *
         * @category Array
         * @param pairs The key-value pairs.
         * @returns Returns the new object.
         * @example
         *
         * _.fromPairs([['fred', 30], ['barney', 40]]);
         * // => { 'fred': 30, 'barney': 40 }
         */
        fromPairs<T>(
            pairs: List<[PropertyName, T]> | null | undefined
        ): Dictionary<T>;

        /**
         @see _.fromPairs
         */
        fromPairs(
            pairs: List<any[]> | null | undefined
        ): Dictionary<any>;
    }

    //_.fromPairs
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.fromPairs
         */
        fromPairs<T>(
          this: LoDashImplicitWrapper<List<[PropertyName, T]> | null | undefined>
        ): LoDashImplicitWrapper<Dictionary<T>>;

        /**
         @see _.fromPairs
         */
        fromPairs(
            this: LoDashImplicitWrapper<List<any[]> | null | undefined>
        ): LoDashImplicitWrapper<Dictionary<any>>;
    }
    //_.fromPairs
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.fromPairs
         */
        fromPairs<T>(
          this: LoDashExplicitWrapper<List<[PropertyName, T]> | null | undefined>
        ): LoDashExplicitWrapper<Dictionary<T>>;

        /**
         @see _.fromPairs
         */
        fromPairs(
            this: LoDashExplicitWrapper<List<any[]> | null | undefined>
        ): LoDashExplicitWrapper<Dictionary<any>>;
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
        head<T>(array: List<T> | null | undefined): T | undefined;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.head
         */
        head<T>(this: LoDashImplicitWrapper<List<T> | null | undefined>): T | undefined;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.head
         */
        head<T>(this: LoDashExplicitWrapper<List<T> | null | undefined>): LoDashExplicitWrapper<T | undefined>;
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
         * @category Array
         * @param array The array to search.
         * @param value The value to search for.
         * @param [fromIndex=0] The index to search from.
         * @returns Returns the index of the matched value, else `-1`.
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
            array: List<T> | null | undefined,
            value: T,
            fromIndex?: boolean|number
        ): number;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.indexOf
         */
        indexOf<T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            value: T,
            fromIndex?: boolean|number
        ): number;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.indexOf
         */
        indexOf<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            value: T,
            fromIndex?: boolean|number
        ): LoDashExplicitWrapper<number>;
    }

    //_.sortedIndexOf
    interface LoDashStatic {
        /**
         * This method is like `_.indexOf` except that it performs a binary
         * search on a sorted `array`.
         *
         * @category Array
         * @param array The array to search.
         * @param value The value to search for.
         * @returns Returns the index of the matched value, else `-1`.
         * @example
         *
         * _.sortedIndexOf([1, 1, 2, 2], 2);
         * // => 2
         */
        sortedIndexOf<T>(
            array: List<T> | null | undefined,
            value: T
        ): number;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.sortedIndexOf
         */
        sortedIndexOf<T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            value: T
        ): number;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.sortedIndexOf
         */
        sortedIndexOf<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            value: T
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
        initial<T>(array: List<T> | null | undefined): T[];
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.initial
         */
        initial<T>(this: LoDashImplicitWrapper<List<T> | null | undefined>): LoDashImplicitWrapper<T[]>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.initial
         */
        initial<T>(this: LoDashExplicitWrapper<List<T> | null | undefined>): LoDashExplicitWrapper<T[]>;
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
        intersection<T>(...arrays: Array<List<T>>): T[];
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.intersection
         */
        intersection<T>(
            this: LoDashImplicitWrapper<List<T>>,
            ...arrays: Array<List<T>>
        ): LoDashImplicitWrapper<T[]>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.intersection
         */
        intersection<T>(
            this: LoDashExplicitWrapper<List<T>>,
            ...arrays: Array<List<T>>
        ): LoDashExplicitWrapper<T[]>;
    }

    //_.intersectionBy
    interface LoDashStatic {
        /**
         * This method is like `_.intersection` except that it accepts `iteratee`
         * which is invoked for each element of each `arrays` to generate the criterion
         * by which uniqueness is computed. The iteratee is invoked with one argument: (value).
         *
         * @category Array
         * @param [arrays] The arrays to inspect.
         * @param [iteratee=_.identity] The iteratee invoked per element.
         * @returns Returns the new array of shared values.
         * @example
         *
         * _.intersectionBy([2.1, 1.2], [4.3, 2.4], Math.floor);
         * // => [2.1]
         *
         * // using the `_.property` iteratee shorthand
         * _.intersectionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
         * // => [{ 'x': 1 }]
         */
        intersectionBy<T1, T2>(
            array: List<T1> | null,
            values: List<T2>,
            iteratee: ValueIteratee<T1 | T2>
        ): T1[];

        /**
         * @see _.intersectionBy
         */
        intersectionBy<T1, T2, T3>(
            array: List<T1> | null,
            values1: List<T2>,
            values2: List<T3>,
            iteratee: ValueIteratee<T1 | T2 | T3>
        ): T1[];

        /**
         * @see _.intersectionBy
         */
        intersectionBy<T1, T2, T3, T4>(
            array: List<T1> | null | undefined,
            values1: List<T2>,
            values2: List<T3>,
            ...values: Array<List<T4> | ValueIteratee<T1 | T2 | T3 | T4>>
        ): T1[];

        /**
         * @see _.intersectionBy
         */
        intersectionBy<T>(
            array?: List<T> | null,
            ...values: Array<List<T>>
        ): T[];
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.intersectionBy
         */
        intersectionBy<T1, T2>(
            this: LoDashImplicitWrapper<List<T1> | null | undefined>,
            values: List<T2>,
            iteratee: ValueIteratee<T1 | T2>
        ): LoDashImplicitWrapper<T1[]>;

        /**
         * @see _.intersectionBy
         */
        intersectionBy<T1, T2, T3>(
            this: LoDashImplicitWrapper<List<T1> | null | undefined>,
            values1: List<T2>,
            values2: List<T3>,
            iteratee: ValueIteratee<T1 | T2 | T3>
        ): LoDashImplicitWrapper<T1[]>;

        /**
         * @see _.intersectionBy
         */
        intersectionBy<T1, T2, T3, T4>(
            this: LoDashImplicitWrapper<List<T1> | null | undefined>,
            values1: List<T2>,
            values2: List<T3>,
            ...values: Array<List<T4> | ValueIteratee<T1 | T2 | T3 | T4>>
        ): LoDashImplicitWrapper<T1[]>;

        /**
         * @see _.intersectionBy
         */
        intersectionBy<T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            ...values: Array<List<T>>
        ): LoDashImplicitWrapper<T[]>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.intersectionBy
         */
        intersectionBy<T1, T2>(
            this: LoDashExplicitWrapper<List<T1> | null | undefined>,
            values: List<T2>,
            iteratee: ValueIteratee<T1 | T2>
        ): LoDashExplicitWrapper<T1[]>;

        /**
         * @see _.intersectionBy
         */
        intersectionBy<T1, T2, T3>(
            this: LoDashExplicitWrapper<List<T1> | null | undefined>,
            values1: List<T2>,
            values2: List<T3>,
            iteratee: ValueIteratee<T1 | T2 | T3>
        ): LoDashExplicitWrapper<T1[]>;

        /**
         * @see _.intersectionBy
         */
        intersectionBy<T1, T2, T3, T4>(
            this: LoDashExplicitWrapper<List<T1> | null | undefined>,
            values1: List<T2>,
            values2: List<T3>,
            ...values: Array<List<T4> | ValueIteratee<T1 | T2 | T3 | T4>>
        ): LoDashExplicitWrapper<T1[]>;

        /**
         * @see _.intersectionBy
         */
        intersectionBy<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            ...values: Array<List<T>>
        ): LoDashExplicitWrapper<T[]>;
    }

    //_.intersectionWith
    interface LoDashStatic {
        /**
         * Creates an array of unique `array` values not included in the other
         * provided arrays using [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
         * for equality comparisons.
         *
         * @category Array
         * @param [values] The arrays to inspect.
         * @param [comparator] The comparator invoked per element.
         * @returns Returns the new array of filtered values.
         * @example
         *
         * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
         * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];

         * _.intersectionWith(objects, others, _.isEqual);
         * // => [{ 'x': 1, 'y': 2 }]
         */
        intersectionWith<T1, T2>(
            array: List<T1> | null | undefined,
            values: List<T2>,
            comparator: Comparator2<T1, T2>
        ): T1[];

        /**
         * @see _.intersectionWith
         */
        intersectionWith<T1, T2, T3>(
            array: List<T1> | null | undefined,
            values1: List<T2>,
            values2: List<T3>,
            comparator: Comparator2<T1, T2 | T3>
        ): T1[];

        /**
         * @see _.intersectionWith
         */
        intersectionWith<T1, T2, T3, T4>(
            array: List<T1> | null | undefined,
            values1: List<T2>,
            values2: List<T3>,
            ...values: Array<List<T4> | Comparator2<T1, T2 | T3 | T4>>
        ): T1[];

        /**
         * @see _.intersectionWith
         */
        intersectionWith<T>(
            array?: List<T> | null,
            ...values: Array<List<T>>
        ): T[];
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.intersectionWith
         */
        intersectionWith<T1, T2>(
            this: LoDashImplicitWrapper<List<T1> | null | undefined>,
            values: List<T2>,
            comparator: Comparator2<T1, T2>
        ): LoDashImplicitWrapper<T1[]>;

        /**
         * @see _.intersectionWith
         */
        intersectionWith<T1, T2, T3>(
            this: LoDashImplicitWrapper<List<T1> | null | undefined>,
            values1: List<T2>,
            values2: List<T3>,
            comparator: Comparator2<T1, T2 | T3>
        ): LoDashImplicitWrapper<T1[]>;

        /**
         * @see _.intersectionWith
         */
        intersectionWith<T1, T2, T3, T4>(
            this: LoDashImplicitWrapper<List<T1> | null | undefined>,
            values1: List<T2>,
            values2: List<T3>,
            ...values: Array<List<T4> | Comparator2<T1, T2 | T3 | T4>>,
        ): LoDashImplicitWrapper<T1[]>;

        /**
         * @see _.intersectionWith
         */
        intersectionWith<T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            ...values: Array<List<T>>
        ): LoDashImplicitWrapper<T[]>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.intersectionWith
         */
        intersectionWith<T1, T2>(
            this: LoDashExplicitWrapper<List<T1> | null | undefined>,
            values: List<T2>,
            comparator: Comparator2<T1, T2>
        ): LoDashExplicitWrapper<T1[]>;

        /**
         * @see _.intersectionWith
         */
        intersectionWith<T1, T2, T3>(
            this: LoDashExplicitWrapper<List<T1> | null | undefined>,
            values1: List<T2>,
            values2: List<T3>,
            comparator: Comparator2<T1, T2 | T3>
        ): LoDashExplicitWrapper<T1[]>;

        /**
         * @see _.intersectionWith
         */
        intersectionWith<T1, T2, T3, T4>(
            this: LoDashExplicitWrapper<List<T1> | null | undefined>,
            values1: List<T2>,
            values2: List<T3>,
            ...values: Array<List<T4> | Comparator2<T1, T2 | T3 | T4>>,
        ): LoDashExplicitWrapper<T1[]>;

        /**
         * @see _.intersectionWith
         */
        intersectionWith<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            ...values: Array<List<T>>
        ): LoDashExplicitWrapper<T[]>;
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
            array: List<any> | null | undefined,
            separator?: string
        ): string;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.join
         */
        join(separator?: string): string;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.join
         */
        join(separator?: string): LoDashExplicitWrapper<string>;
    }

    //_.reverse
    interface LoDashStatic {
        /**
         * Reverses `array` so that the first element becomes the last, the second
         * element becomes the second to last, and so on.
         *
         * **Note:** This method mutates `array` and is based on
         * [`Array#reverse`](https://mdn.io/Array/reverse).
         *
         * @category Array
         * @returns Returns `array`.
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
        reverse<TList extends List<any>>(
            array: TList,
        ): TList;
    }

    //_.prototype.reverse
    interface LoDashWrapper<TValue> {
        /**
         * Reverses the wrapped array so the first element becomes the last, the second element becomes the second to
         * last, and so on.
         *
         * Note: This method mutates the wrapped array.
         *
         * @return Returns the new reversed lodash wrapper instance.
         */
        reverse(): this;
    }

    //_.last
    interface LoDashStatic {
        /**
         * Gets the last element of array.
         *
         * @param array The array to query.
         * @return Returns the last element of array.
         */
        last<T>(array: List<T> | null | undefined): T | undefined;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.last
         */
        last<T>(this: LoDashImplicitWrapper<List<T> | null | undefined>): T | undefined;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.last
         */
        last<T>(this: LoDashExplicitWrapper<List<T> | null | undefined>): LoDashExplicitWrapper<T | undefined>;
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
            array: List<T> | null | undefined,
            value: T,
            fromIndex?: true|number
        ): number;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.indexOf
         */
        lastIndexOf<T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            value: T,
            fromIndex?: true|number
        ): number;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.indexOf
         */
        lastIndexOf<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            value: T,
            fromIndex?: true|number
        ): LoDashExplicitWrapper<number>;
    }

    //_.nth
    interface LoDashStatic {
        /**
         * Gets the element at index `n` of `array`. If `n` is negative, the nth element from the end is returned.
         *
         * @param array array The array to query.
         * @param value The index of the element to return.
         * @return Returns the nth element of `array`.
         */
        nth<T>(
            array: List<T> | null | undefined,
            n?: number
        ): T | undefined;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.nth
         */
        nth<T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            n?: number
        ): T | undefined;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.nth
         */
        nth<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            n?: number
        ): LoDashExplicitWrapper<T | undefined>;
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

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.pull
         */
        pull<T>(
            this: LoDashImplicitWrapper<List<T>>,
            ...values: T[]
        ): this;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.pull
         */
        pull<T>(
            this: LoDashExplicitWrapper<List<T>>,
            ...values: T[]
        ): this;
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
            array: T[],
            ...indexes: Array<Many<number>>
        ): T[];

        /**
         * @see _.pullAt
         */
        pullAt<T>(
            array: List<T>,
            ...indexes: Array<Many<number>>
        ): List<T>;
    }

    interface LoDashWrapper<TValue> {
        /**
         * @see _.pullAt
         */
        pullAt(...indexes: Array<Many<number>>): this;
    }

    //_.pullAll
    interface LoDashStatic {
        /**
         * This method is like `_.pull` except that it accepts an array of values to remove.
         *
         * **Note:** Unlike `_.difference`, this method mutates `array`.
         *
         * @category Array
         * @param array The array to modify.
         * @param values The values to remove.
         * @returns Returns `array`.
         * @example
         *
         * var array = [1, 2, 3, 1, 2, 3];
         *
         * _.pull(array, [2, 3]);
         * console.log(array);
         * // => [1, 1]
         */
        pullAll<T>(
            array: T[],
            values?: List<T>,
        ): T[];

        /**
         * @see _.pullAll
         */
        pullAll<T>(
            array: List<T>,
            values?: List<T>,
        ): List<T>;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.pullAll
         */
        pullAll<T>(
            this: LoDashImplicitWrapper<List<T>>,
            values?: List<T>
        ): this;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.pullAll
         */
        pullAll<T>(
            this: LoDashExplicitWrapper<List<T>>,
            values?: List<T>
        ): this;
    }

    //_.pullAllBy
    interface LoDashStatic {
        /**
         * This method is like `_.pullAll` except that it accepts `iteratee` which is
         * invoked for each element of `array` and `values` to to generate the criterion
         * by which uniqueness is computed. The iteratee is invoked with one argument: (value).
         *
         * **Note:** Unlike `_.differenceBy`, this method mutates `array`.
         *
         * @category Array
         * @param array The array to modify.
         * @param values The values to remove.
         * @param [iteratee=_.identity] The iteratee invoked per element.
         * @returns Returns `array`.
         * @example
         *
         * var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
         *
         * _.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
         * console.log(array);
         * // => [{ 'x': 2 }]
         */
        pullAllBy<T>(
            array: T[],
            values?: List<T>,
            iteratee?: ValueIteratee<T>
        ): T[];

        /**
         * @see _.pullAllBy
         */
        pullAllBy<T>(
            array: List<T>,
            values?: List<T>,
            iteratee?: ValueIteratee<T>
        ): List<T>;

        /**
         * @see _.pullAllBy
         */
        pullAllBy<T1, T2>(
            array: T1[],
            values: List<T2>,
            iteratee: ValueIteratee<T1 | T2>
        ): T1[];

        /**
         * @see _.pullAllBy
         */
        pullAllBy<T1, T2>(
            array: List<T1>,
            values: List<T2>,
            iteratee: ValueIteratee<T1 | T2>
        ): List<T1>;
    }

    interface LoDashWrapper<TValue> {
        /**
         * @see _.pullAllBy
         */
        pullAllBy<T>(
            this: LoDashWrapper<List<T>>,
            values?: List<T>,
            iteratee?: ValueIteratee<T>
        ): this;

        /**
         * @see _.pullAllBy
         */
        pullAllBy<T1, T2>(
            this: LoDashWrapper<List<T1>>,
            values: List<T2>,
            iteratee: ValueIteratee<T1 | T2>
        ): this;
    }

    //_.pullAllWith
    interface LoDashStatic {
        /**
         * This method is like `_.pullAll` except that it accepts `comparator` which is
         * invoked to compare elements of array to values. The comparator is invoked with
         * two arguments: (arrVal, othVal).
         *
         * **Note:** Unlike `_.differenceWith`, this method mutates `array`.
         *
         * @category Array
         * @param array The array to modify.
         * @param values The values to remove.
         * @param [iteratee=_.identity] The iteratee invoked per element.
         * @returns Returns `array`.
         * @example
         *
         * var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
         *
         * _.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
         * console.log(array);
         * // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
         */
        pullAllWith<T>(
            array: T[],
            values?: List<T>,
            comparator?: Comparator<T>
        ): T[];

        /**
         * @see _.pullAllWith
         */
        pullAllWith<T>(
            array: List<T>,
            values?: List<T>,
            comparator?: Comparator<T>
        ): List<T>;

        /**
         * @see _.pullAllWith
         */
        pullAllWith<T1, T2>(
            array: T1[],
            values: List<T2>,
            comparator: Comparator2<T1, T2>
        ): T1[];

        /**
         * @see _.pullAllWith
         */
        pullAllWith<T1, T2>(
            array: List<T1>,
            values: List<T2>,
            comparator: Comparator2<T1, T2>
        ): List<T1>;
    }

    interface LoDashWrapper<TValue> {
        /**
         * @see _.pullAllWith
         */
        pullAllWith<T>(
            this: LoDashWrapper<List<T>>,
            values?: List<T>,
            comparator?: Comparator<T>
        ): this;

        /**
         * @see _.pullAllWith
         */
        pullAllWith<T1, T2>(
            this: LoDashWrapper<List<T1>>,
            values: List<T2>,
            comparator: Comparator2<T1, T2>
        ): this;
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
            predicate?: ListIteratee<T>
        ): T[];
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.remove
         */
        remove<T>(
            this: LoDashImplicitWrapper<List<T>>,
            predicate?: ListIteratee<T>
        ): LoDashImplicitWrapper<T[]>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.remove
         */
        remove<T>(
            this: LoDashExplicitWrapper<List<T>>,
            predicate?: ListIteratee<T>
        ): LoDashExplicitWrapper<T[]>;
    }

    //_.tail
    interface LoDashStatic {
        /**
         * Gets all but the first element of array.
         *
         * @param array The array to query.
         * @return Returns the slice of array.
         */
        tail<T>(array: List<T> | null | undefined): T[];
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.tail
         */
        tail<T>(this: LoDashImplicitWrapper<List<T> | null | undefined>): LoDashImplicitWrapper<T[]>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.tail
         */
        tail<T>(this: LoDashExplicitWrapper<List<T> | null | undefined>): LoDashExplicitWrapper<T[]>;
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
            array: List<T> | null | undefined,
            start?: number,
            end?: number
        ): T[];
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.slice
         */
        slice<T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            start?: number,
            end?: number
        ): LoDashImplicitWrapper<T[]>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.slice
         */
        slice<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            start?: number,
            end?: number
        ): LoDashExplicitWrapper<T[]>;
    }

    //_.sortedIndex
    interface LoDashStatic {
        /**
         * Uses a binary search to determine the lowest index at which `value` should
         * be inserted into `array` in order to maintain its sort order.
         *
         * @category Array
         * @param array The sorted array to inspect.
         * @param value The value to evaluate.
         * @returns Returns the index at which `value` should be inserted into `array`.
         * @example
         *
         * _.sortedIndex([30, 50], 40);
         * // => 1
         *
         * _.sortedIndex([4, 5], 4);
         * // => 0
         */
        sortedIndex<T>(
            array: List<T> | null | undefined,
            value: T
        ): number;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.sortedIndex
         */
        sortedIndex<T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            value: T
        ): number;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.sortedIndex
         */
        sortedIndex<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            value: T
        ): LoDashExplicitWrapper<number>;
    }

    // _.sortedIndexBy
    interface LoDashStatic {
        /**
         * This method is like `_.sortedIndex` except that it accepts `iteratee`
         * which is invoked for `value` and each element of `array` to compute their
         * sort ranking. The iteratee is invoked with one argument: (value).
         *
         * @category Array
         * @param array The sorted array to inspect.
         * @param value The value to evaluate.
         * @param [iteratee=_.identity] The iteratee invoked per element.
         * @returns Returns the index at which `value` should be inserted into `array`.
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
        sortedIndexBy<T>(
            array: List<T> | null | undefined,
            value: T,
            iteratee?: ValueIteratee<T>
        ): number;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.sortedIndexBy
         */
        sortedIndexBy<T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            value: T,
            iteratee?: ValueIteratee<T>
        ): number;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.sortedIndexBy
         */
        sortedIndexBy<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            value: T,
            iteratee?: ValueIteratee<T>
        ): LoDashExplicitWrapper<number>;
    }

    //_.sortedLastIndex
    interface LoDashStatic {
        /**
         * This method is like `_.sortedIndex` except that it returns the highest
         * index at which `value` should be inserted into `array` in order to
         * maintain its sort order.
         *
         * @category Array
         * @param array The sorted array to inspect.
         * @param value The value to evaluate.
         * @returns Returns the index at which `value` should be inserted into `array`.
         * @example
         *
         * _.sortedLastIndex([4, 5], 4);
         * // => 1
         */
        sortedLastIndex<T>(
            array: List<T> | null | undefined,
            value: T
        ): number;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.sortedLastIndex
         */
        sortedLastIndex<T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            value: T
        ): number;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.sortedLastIndex
         */
        sortedLastIndex<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
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
         * @category Array
         * @param array The sorted array to inspect.
         * @param value The value to evaluate.
         * @param [iteratee=_.identity] The iteratee invoked per element.
         * @returns Returns the index at which `value` should be inserted into `array`.
         * @example
         *
         * // using the `_.property` iteratee shorthand
         * _.sortedLastIndexBy([{ 'x': 4 }, { 'x': 5 }], { 'x': 4 }, 'x');
         * // => 1
         */
        sortedLastIndexBy<T>(
            array: List<T> | null | undefined,
            value: T,
            iteratee: ValueIteratee<T>
        ): number;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.sortedLastIndexBy
         */
        sortedLastIndexBy<T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            value: T,
            iteratee: ValueIteratee<T>
        ): number;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.sortedLastIndexBy
         */
        sortedLastIndexBy<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            value: T,
            iteratee: ValueIteratee<T>
        ): LoDashExplicitWrapper<number>;
    }

    //_.sortedLastIndexOf
    interface LoDashStatic {
        /**
         * This method is like `_.lastIndexOf` except that it performs a binary
         * search on a sorted `array`.
         *
         * @category Array
         * @param array The array to search.
         * @param value The value to search for.
         * @returns Returns the index of the matched value, else `-1`.
         * @example
         *
         * _.sortedLastIndexOf([1, 1, 2, 2], 2);
         * // => 3
         */
        sortedLastIndexOf<T>(
            array: List<T> | null | undefined,
            value: T
        ): number;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.sortedLastIndexOf
         */
        sortedLastIndexOf<T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            value: T
        ): number;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.sortedLastIndexOf
         */
        sortedLastIndexOf<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            value: T
        ): LoDashExplicitWrapper<number>;
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
            array: List<T> | null | undefined,
            n?: number
        ): T[];
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.take
         */
        take<T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            n?: number
        ): LoDashImplicitWrapper<T[]>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.take
         */
        take<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            n?: number
        ): LoDashExplicitWrapper<T[]>;
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
            array: List<T> | null | undefined,
            n?: number
        ): T[];
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.takeRight
         */
        takeRight<T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            n?: number
        ): LoDashImplicitWrapper<T[]>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.takeRight
         */
        takeRight<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            n?: number
        ): LoDashExplicitWrapper<T[]>;
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
        takeRightWhile<T>(
            array: List<T> | null | undefined,
            predicate?: ListIteratee<T>
        ): T[];
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.takeRightWhile
         */
        takeRightWhile<T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            predicate?: ListIteratee<T>
        ): LoDashImplicitWrapper<T[]>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.takeRightWhile
         */
        takeRightWhile<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            predicate?: ListIteratee<T>
        ): LoDashExplicitWrapper<T[]>;
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
        takeWhile<T>(
            array: List<T> | null | undefined,
            predicate?: ListIteratee<T>
        ): T[];
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.takeWhile
         */
        takeWhile<T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            predicate?: ListIteratee<T>
        ): LoDashImplicitWrapper<T[]>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.takeWhile
         */
        takeWhile<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            predicate?: ListIteratee<T>
        ): LoDashExplicitWrapper<T[]>;
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
        union<T>(...arrays: Array<List<T> | null | undefined>): T[];
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.union
         */
        union<T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            ...arrays: Array<List<T> | null | undefined>
        ): LoDashImplicitWrapper<T[]>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.union
         */
        union<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            ...arrays: Array<List<T> | null | undefined>
        ): LoDashExplicitWrapper<T[]>;
    }

    //_.unionBy
    interface LoDashStatic {
        /**
         * This method is like `_.union` except that it accepts `iteratee` which is
         * invoked for each element of each `arrays` to generate the criterion by which
         * uniqueness is computed. The iteratee is invoked with one argument: (value).
         *
         * @param arrays The arrays to inspect.
         * @param iteratee The iteratee invoked per element.
         * @return Returns the new array of combined values.
         */
        unionBy<T>(
            arrays: List<T> | null | undefined,
            iteratee?: ValueIteratee<T>
        ): T[];

        /**
         * @see _.unionBy
         */
        unionBy<T>(
            arrays1: List<T> | null | undefined,
            arrays2: List<T> | null | undefined,
            iteratee?: ValueIteratee<T>
        ): T[];

        /**
         * @see _.unionBy
         */
        unionBy<T>(
            arrays1: List<T> | null | undefined,
            arrays2: List<T> | null | undefined,
            arrays3: List<T> | null | undefined,
            iteratee?: ValueIteratee<T>
        ): T[];

        /**
         * @see _.unionBy
         */
        unionBy<T>(
            arrays1: List<T> | null | undefined,
            arrays2: List<T> | null | undefined,
            arrays3: List<T> | null | undefined,
            arrays4: List<T> | null | undefined,
            iteratee?: ValueIteratee<T>
        ): T[];

        /**
         * @see _.unionBy
         */
        unionBy<T>(
            arrays1: List<T> | null | undefined,
            arrays2: List<T> | null | undefined,
            arrays3: List<T> | null | undefined,
            arrays4: List<T> | null | undefined,
            arrays5: List<T> | null | undefined,
            ...iteratee: Array<ValueIteratee<T> | List<T> | null | undefined>
        ): T[];
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.unionBy
         */
        unionBy<T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            iteratee?: ValueIteratee<T>
        ): LoDashImplicitWrapper<T[]>;

        /**
         * @see _.unionBy
         */
        unionBy<T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            arrays2: List<T> | null | undefined,
            iteratee?: ValueIteratee<T>
        ): LoDashImplicitWrapper<T[]>;

        /**
         * @see _.unionBy
         */
        unionBy<T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            arrays2: List<T> | null | undefined,
            arrays3: List<T> | null | undefined,
            iteratee?: ValueIteratee<T>
        ): LoDashImplicitWrapper<T[]>;

        /**
         * @see _.unionBy
         */
        unionBy<T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            arrays2: List<T> | null | undefined,
            arrays3: List<T> | null | undefined,
            arrays4: List<T> | null | undefined,
            iteratee?: ValueIteratee<T>
        ): LoDashImplicitWrapper<T[]>;

        /**
         * @see _.unionBy
         */
        unionBy<T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            arrays2: List<T> | null | undefined,
            arrays3: List<T> | null | undefined,
            arrays4: List<T> | null | undefined,
            arrays5: List<T> | null | undefined,
            ...iteratee: Array<ValueIteratee<T> | List<T> | null | undefined>
        ): LoDashImplicitWrapper<T[]>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.unionBy
         */
        unionBy<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            iteratee?: ValueIteratee<T>
        ): LoDashExplicitWrapper<T[]>;

        /**
         * @see _.unionBy
         */
        unionBy<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            arrays2: List<T> | null | undefined,
            iteratee?: ValueIteratee<T>
        ): LoDashExplicitWrapper<T[]>;

        /**
         * @see _.unionBy
         */
        unionBy<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            arrays2: List<T> | null | undefined,
            arrays3: List<T> | null | undefined,
            iteratee?: ValueIteratee<T>
        ): LoDashExplicitWrapper<T[]>;

        /**
         * @see _.unionBy
         */
        unionBy<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            arrays2: List<T> | null | undefined,
            arrays3: List<T> | null | undefined,
            arrays4: List<T> | null | undefined,
            iteratee?: ValueIteratee<T>
        ): LoDashExplicitWrapper<T[]>;

        /**
         * @see _.unionBy
         */
        unionBy<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            arrays2: List<T> | null | undefined,
            arrays3: List<T> | null | undefined,
            arrays4: List<T> | null | undefined,
            arrays5: List<T> | null | undefined,
            ...iteratee: Array<ValueIteratee<T> | List<T> | null | undefined>
        ): LoDashExplicitWrapper<T[]>;
    }

    //_.unionWith
    interface LoDashStatic {
        /**
         * This method is like `_.union` except that it accepts `comparator` which
         * is invoked to compare elements of `arrays`. The comparator is invoked
         * with two arguments: (arrVal, othVal).
         *
         * @category Array
         * @param [arrays] The arrays to inspect.
         * @param [comparator] The comparator invoked per element.
         * @returns Returns the new array of combined values.
         * @example
         *
         * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
         * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
         *
         * _.unionWith(objects, others, _.isEqual);
         * // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
         */
        unionWith<T>(
            arrays: List<T> | null | undefined,
            comparator?: Comparator<T>
        ): T[];

        /**
         * @see _.unionBy
         */
        unionWith<T>(
            arrays: List<T> | null | undefined,
            arrays2: List<T> | null | undefined,
            comparator?: Comparator<T>
        ): T[];

        /**
         * @see _.unionWith
         */
        unionWith<T>(
            arrays: List<T> | null | undefined,
            arrays2: List<T> | null | undefined,
            arrays3: List<T> | null | undefined,
            ...comparator: Array<Comparator<T> | List<T> | null | undefined>
        ): T[];
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.unionWith
         */
        unionWith<T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            comparator?: Comparator<T>
        ): LoDashImplicitWrapper<T[]>;

        /**
         * @see _.unionWith
         */
        unionWith<T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            arrays2: List<T> | null | undefined,
            comparator?: Comparator<T>
        ): LoDashImplicitWrapper<T[]>;

        /**
         * @see _.unionWith
         */
        unionWith<T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            arrays2: List<T> | null | undefined,
            arrays3: List<T> | null | undefined,
            ...comparator: Array<Comparator<T> | List<T> | null | undefined>
        ): LoDashImplicitWrapper<T[]>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.unionWith
         */
        unionWith<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            comparator?: Comparator<T>
        ): LoDashExplicitWrapper<T[]>;

        /**
         * @see _.unionWith
         */
        unionWith<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            arrays2: List<T> | null | undefined,
            comparator?: Comparator<T>
        ): LoDashExplicitWrapper<T[]>;

        /**
         * @see _.unionWith
         */
        unionWith<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            arrays2: List<T> | null | undefined,
            arrays3: List<T> | null | undefined,
            ...comparator: Array<Comparator<T> | List<T> | null | undefined>
        ): LoDashExplicitWrapper<T[]>;
    }

    //_.uniq
    interface LoDashStatic {
        /**
         * Creates a duplicate-free version of an array, using
         * [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
         * for equality comparisons, in which only the first occurrence of each element
         * is kept.
         *
         * @category Array
         * @param array The array to inspect.
         * @returns Returns the new duplicate free array.
         * @example
         *
         * _.uniq([2, 1, 2]);
         * // => [2, 1]
         */
        uniq<T>(
            array: List<T> | null | undefined
        ): T[];
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.uniq
         */
        uniq<T>(this: LoDashImplicitWrapper<List<T> | null | undefined>): LoDashImplicitWrapper<T[]>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.uniq
         */
        uniq<T>(this: LoDashExplicitWrapper<List<T> | null | undefined>): LoDashExplicitWrapper<T[]>;
    }

    //_.uniqBy
    interface LoDashStatic {
        /**
         * This method is like `_.uniq` except that it accepts `iteratee` which is
         * invoked for each element in `array` to generate the criterion by which
         * uniqueness is computed. The iteratee is invoked with one argument: (value).
         *
         * @category Array
         * @param array The array to inspect.
         * @param [iteratee=_.identity] The iteratee invoked per element.
         * @returns Returns the new duplicate free array.
         * @example
         *
         * _.uniqBy([2.1, 1.2, 2.3], Math.floor);
         * // => [2.1, 1.2]
         *
         * // using the `_.property` iteratee shorthand
         * _.uniqBy([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');
         * // => [{ 'x': 1 }, { 'x': 2 }]
         */
        uniqBy(
            array: string | null | undefined,
            iteratee: StringIterator<NotVoid>
        ): string[];

        /**
         * @see _.uniqBy
         */
        uniqBy<T>(
            array: List<T> | null | undefined,
            iteratee: ListIteratee<T>
        ): T[];
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.uniqBy
         */
        uniqBy(
            this: LoDashImplicitWrapper<string | null | undefined>,
            iteratee: StringIterator<NotVoid>
        ): LoDashImplicitWrapper<string[]>;

        /**
         * @see _.uniqBy
         */
        uniqBy<T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            iteratee: ListIteratee<T>
        ): LoDashImplicitWrapper<T[]>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.uniqBy
         */
        uniqBy(
            this: LoDashExplicitWrapper<string | null | undefined>,
            iteratee: StringIterator<NotVoid>
        ): LoDashExplicitWrapper<string[]>;

        /**
         * @see _.uniqBy
         */
        uniqBy<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            iteratee: ListIteratee<T>
        ): LoDashExplicitWrapper<T[]>;
    }

    //_.uniqWith
    interface LoDashStatic {
        /**
         * This method is like `_.uniq` except that it accepts `comparator` which
         * is invoked to compare elements of `array`. The comparator is invoked with
         * two arguments: (arrVal, othVal).
         *
         * @category Array
         * @param array The array to inspect.
         * @param [comparator] The comparator invoked per element.
         * @returns Returns the new duplicate free array.
         * @example
         *
         * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 },  { 'x': 1, 'y': 2 }];
         *
         * _.uniqWith(objects, _.isEqual);
         * // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }]
         */
        uniqWith<T>(
            array: List<T> | null | undefined,
            comparator?: Comparator<T>
        ): T[];
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.uniqWith
         */
        uniqWith<T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            comparator?: Comparator<T>
        ): LoDashImplicitWrapper<T[]>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.uniqWith
         */
        uniqWith<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            comparator?: Comparator<T>
        ): LoDashExplicitWrapper<T[]>;
    }

    //_.sortedUniq
    interface LoDashStatic {
        /**
         * This method is like `_.uniq` except that it's designed and optimized
         * for sorted arrays.
         *
         * @category Array
         * @param array The array to inspect.
         * @returns Returns the new duplicate free array.
         * @example
         *
         * _.sortedUniq([1, 1, 2]);
         * // => [1, 2]
         */
        sortedUniq<T>(
            array: List<T> | null | undefined
        ): T[];
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.sortedUniq
         */
        sortedUniq<T>(this: LoDashImplicitWrapper<List<T> | null | undefined>): LoDashImplicitWrapper<T[]>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.sortedUniq
         */
        sortedUniq<T>(this: LoDashExplicitWrapper<List<T> | null | undefined>): LoDashExplicitWrapper<T[]>;
    }

    //_.sortedUniqBy
    interface LoDashStatic {
        /**
         * This method is like `_.uniqBy` except that it's designed and optimized
         * for sorted arrays.
         *
         * @category Array
         * @param array The array to inspect.
         * @param [iteratee] The iteratee invoked per element.
         * @returns Returns the new duplicate free array.
         * @example
         *
         * _.sortedUniqBy([1.1, 1.2, 2.3, 2.4], Math.floor);
         * // => [1.1, 2.2]
         */
        sortedUniqBy(
            array: string | null | undefined,
            iteratee: StringIterator<NotVoid>
        ): string[];

        /**
         * @see _.sortedUniqBy
         */
        sortedUniqBy<T>(
            array: List<T> | null | undefined,
            iteratee: ListIteratee<T>
        ): T[];
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.sortedUniqBy
         */
        sortedUniqBy(
            this: LoDashImplicitWrapper<string | null | undefined>,
            iteratee: StringIterator<NotVoid>
        ): LoDashImplicitWrapper<string[]>;

        /**
         * @see _.sortedUniqBy
         */
        sortedUniqBy<T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            iteratee: ListIteratee<T>
        ): LoDashImplicitWrapper<T[]>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.sortedUniqBy
         */
        sortedUniqBy(
            this: LoDashExplicitWrapper<string | null | undefined>,
            iteratee: StringIterator<NotVoid>
        ): LoDashExplicitWrapper<string[]>;

        /**
         * @see _.sortedUniqBy
         */
        sortedUniqBy<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            iteratee: ListIteratee<T>
        ): LoDashExplicitWrapper<T[]>;
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
        unzip<T>(array: T[][] | List<List<T>> | null | undefined): T[][];
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.unzip
         */
        unzip<T>(this: LoDashImplicitWrapper<T[][] | List<List<T>> | null | undefined>): LoDashImplicitWrapper<T[][]>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.unzip
         */
        unzip<T>(this: LoDashExplicitWrapper<T[][] | List<List<T>> | null | undefined>): LoDashExplicitWrapper<T[][]>;
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
        unzipWith<T, TResult>(
            array: List<List<T>> | null | undefined,
            iteratee: (...values: T[]) => TResult
        ): TResult[];

        /**
         * @see _.unzipWith
         */
        unzipWith<T>(
            array: List<List<T>> | null | undefined
        ): T[][];
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.unzipWith
         */
        unzipWith<T, TResult>(
            this: LoDashImplicitWrapper<List<List<T>> | null | undefined>,
            iteratee: (...values: T[]) => TResult
        ): LoDashImplicitWrapper<TResult[]>;

        /**
         * @see _.unzipWith
         */
        unzipWith<T>(
            this: LoDashImplicitWrapper<List<List<T>> | null | undefined>
        ): LoDashImplicitWrapper<T[][]>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.unzipWith
         */
        unzipWith<T, TResult>(
            this: LoDashExplicitWrapper<List<List<T>> | null | undefined>,
            iteratee: (...values: T[]) => TResult
        ): LoDashExplicitWrapper<TResult[]>;

        /**
         * @see _.unzipWith
         */
        unzipWith<T>(
            this: LoDashExplicitWrapper<List<List<T>> | null | undefined>
        ): LoDashExplicitWrapper<T[][]>;
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
            array: List<T> | null | undefined,
            ...values: T[]
        ): T[];
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.without
         */
        without<T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            ...values: T[]
        ): LoDashImplicitWrapper<T[]>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.without
         */
        without<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            ...values: T[]
        ): LoDashExplicitWrapper<T[]>;
    }

    //_.xor
    interface LoDashStatic {
        /**
         * Creates an array of unique values that is the symmetric difference of the provided arrays.
         *
         * @param arrays The arrays to inspect.
         * @return Returns the new array of values.
         */
        xor<T>(...arrays: Array<List<T> | null | undefined>): T[];
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.xor
         */
        xor<T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            ...arrays: Array<List<T> | null | undefined>
        ): LoDashImplicitWrapper<T[]>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.xor
         */
        xor<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            ...arrays: Array<List<T> | null | undefined>
        ): LoDashExplicitWrapper<T[]>;
    }

    //_.xorBy
    interface LoDashStatic {
        /**
         * This method is like `_.xor` except that it accepts `iteratee` which is
         * invoked for each element of each `arrays` to generate the criterion by which
         * uniqueness is computed. The iteratee is invoked with one argument: (value).
         *
         * @category Array
         * @param [arrays] The arrays to inspect.
         * @param [iteratee=_.identity] The iteratee invoked per element.
         * @returns Returns the new array of values.
         * @example
         *
         * _.xorBy([2.1, 1.2], [4.3, 2.4], Math.floor);
         * // => [1.2, 4.3]
         *
         * // using the `_.property` iteratee shorthand
         * _.xorBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
         * // => [{ 'x': 2 }]
         */
        xorBy<T>(
            arrays: List<T> | null | undefined,
            iteratee?: ValueIteratee<T>
        ): T[];

        /**
         * @see _.xorBy
         */
        xorBy<T>(
            arrays: List<T> | null | undefined,
            arrays2: List<T> | null | undefined,
            iteratee?: ValueIteratee<T>
        ): T[];

        /**
         * @see _.xorBy
         */
        xorBy<T>(
            arrays: List<T> | null | undefined,
            arrays2: List<T> | null | undefined,
            arrays3: List<T> | null | undefined,
            ...iteratee: Array<ValueIteratee<T> | List<T> | null | undefined>
        ): T[];
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.xor
         */
        xorBy<T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            iteratee?: ValueIteratee<T>
        ): LoDashImplicitWrapper<T[]>;

        /**
         * @see _.xorBy
         */
        xorBy<T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            arrays2: List<T> | null | undefined,
            iteratee?: ValueIteratee<T>
        ): LoDashImplicitWrapper<T[]>;

        /**
         * @see _.xorBy
         */
        xorBy<T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            arrays2: List<T> | null | undefined,
            arrays3: List<T> | null | undefined,
            ...iteratee: Array<ValueIteratee<T> | List<T> | null | undefined>
        ): LoDashImplicitWrapper<T[]>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.xorBy
         */
        xorBy<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            iteratee?: ValueIteratee<T>
        ): LoDashExplicitWrapper<T[]>;

        /**
         * @see _.xorBy
         */
        xorBy<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            arrays2: List<T> | null | undefined,
            iteratee?: ValueIteratee<T>
        ): LoDashExplicitWrapper<T[]>;

        /**
         * @see _.xorBy
         */
        xorBy<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            arrays2: List<T> | null | undefined,
            arrays3: List<T> | null | undefined,
            ...iteratee: Array<ValueIteratee<T> | List<T> | null | undefined>
        ): LoDashExplicitWrapper<T[]>;
    }

    //_.xorWith
    interface LoDashStatic {
        /**
         * This method is like `_.xor` except that it accepts `comparator` which is
         * invoked to compare elements of `arrays`. The comparator is invoked with
         * two arguments: (arrVal, othVal).
         *
         * @category Array
         * @param [arrays] The arrays to inspect.
         * @param [comparator] The comparator invoked per element.
         * @returns Returns the new array of values.
         * @example
         *
         * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
         * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
         *
         * _.xorWith(objects, others, _.isEqual);
         * // => [{ 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
         */
        xorWith<T>(
            arrays: List<T> | null | undefined,
            comparator?: Comparator<T>
        ): T[];

        /**
         * @see _.xorWith
         */
        xorWith<T>(
            arrays: List<T> | null | undefined,
            arrays2: List<T> | null | undefined,
            comparator?: Comparator<T>
        ): T[];

        /**
         * @see _.xorWith
         */
        xorWith<T>(
            arrays: List<T> | null | undefined,
            arrays2: List<T> | null | undefined,
            arrays3: List<T> | null | undefined,
            ...comparator: Array<Comparator<T> | List<T> | null | undefined>
        ): T[];
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.xorWith
         */
        xorWith<T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            comparator?: Comparator<T>
        ): LoDashImplicitWrapper<T[]>;

        /**
         * @see _.xorWith
         */
        xorWith<T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            arrays2: List<T> | null | undefined,
            comparator?: Comparator<T>
        ): LoDashImplicitWrapper<T[]>;

        /**
         * @see _.xorWith
         */
        xorWith<T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            arrays2: List<T> | null | undefined,
            arrays3: List<T> | null | undefined,
            ...comparator: Array<Comparator<T> | List<T> | null | undefined>
        ): LoDashImplicitWrapper<T[]>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.xorWith
         */
        xorWith<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            comparator?: Comparator<T>
        ): LoDashExplicitWrapper<T[]>;

        /**
         * @see _.xorWith
         */
        xorWith<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            arrays2: List<T> | null | undefined,
            comparator?: Comparator<T>
        ): LoDashExplicitWrapper<T[]>;

        /**
         * @see _.xorWith
         */
        xorWith<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            arrays2: List<T> | null | undefined,
            arrays3: List<T> | null | undefined,
            ...comparator: Array<Comparator<T> | List<T> | null | undefined>
        ): LoDashExplicitWrapper<T[]>;
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
        zip<T>(...arrays: Array<List<T> | null | undefined>): T[][];
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.zip
         */
        zip<T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            ...arrays: Array<List<T> | null | undefined>
        ): LoDashImplicitWrapper<T[][]>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.zip
         */
        zip<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            ...arrays: Array<List<T> | null | undefined>
        ): LoDashExplicitWrapper<T[][]>;
    }

    //_.zipObject
    interface LoDashStatic {
        /**
         * This method is like _.fromPairs except that it accepts two arrays, one of property
         * identifiers and one of corresponding values.
         *
         * @param props The property names.
         * @param values The property values.
         * @return Returns the new object.
         */
        zipObject<T>(
            props: List<PropertyName>,
            values: List<T>
        ): Dictionary<T>;

        /**
         * @see _.zipObject
         */
        zipObject(
            props?: List<PropertyName>
        ): Dictionary<undefined>;

        /**
         * This method is like _.zipObject except that it supports property paths.
         *
         * @param paths The property names.
         * @param values The property values.
         * @return Returns the new object.
         */
        zipObjectDeep(
            paths?: List<PropertyPath>,
            values?: List<any>
        ): object;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.zipObject
         */
        zipObject<T>(
            this: LoDashImplicitWrapper<List<PropertyName>>,
            values: List<T>
        ): LoDashImplicitWrapper<Dictionary<T>>;

        /**
         * @see _.zipObject
         */
        zipObject(
            this: LoDashImplicitWrapper<List<PropertyName>>
        ): LoDashImplicitWrapper<Dictionary<undefined>>;

        /**
         * @see _.zipObjectDeep
         */
        zipObjectDeep(
            this: LoDashImplicitWrapper<List<PropertyPath>>,
            values?: List<any>
        ): LoDashImplicitWrapper<object>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.zipObject
         */
        zipObject<T>(
            this: LoDashExplicitWrapper<List<PropertyName>>,
            values: List<T>
        ): LoDashExplicitWrapper<Dictionary<T>>;

        /**
         * @see _.zipObject
         */
        zipObject(
            this: LoDashExplicitWrapper<List<PropertyName>>
        ): LoDashExplicitWrapper<Dictionary<undefined>>;

        /**
         * @see _.zipObjectDeep
         */
        zipObjectDeep(
            this: LoDashExplicitWrapper<List<PropertyPath>>,
            values?: List<any>
        ): LoDashExplicitWrapper<object>;
    }

    //_.zipWith
    interface LoDashStatic {
        /**
         * This method is like _.zip except that it accepts an iteratee to specify how grouped values should be
         * combined. The iteratee is bound to thisArg and invoked with four arguments: (accumulator, value, index,
         * group).
         * @param [arrays] The arrays to process.
         * @param [iteratee] The function to combine grouped values.
         * @param [thisArg] The `this` binding of `iteratee`.
         * @return Returns the new array of grouped elements.
         */
        zipWith<T>(
            ...arrays: Array<List<T> | null | undefined>
        ): T[][];

        /**
         * @see _.zipWith
         */
        zipWith<T, TResult>(
            arrays: List<T> | null | undefined,
            iteratee: (value1: T) => TResult
        ): TResult[];

        /**
         * @see _.zipWith
         */
        zipWith<T, TResult>(
            arrays: List<T> | null | undefined,
            arrays2: List<T> | null | undefined,
            iteratee: (value1: T, value2: T) => TResult
        ): TResult[];

        /**
         * @see _.zipWith
         */
        zipWith<T, TResult>(
            arrays: List<T> | null | undefined,
            arrays2: List<T> | null | undefined,
            arrays3: List<T> | null | undefined,
            iteratee: (value1: T, value2: T, value3: T) => TResult
        ): TResult[];

        /**
         * @see _.zipWith
         */
        zipWith<T, TResult>(
            arrays: List<T> | null | undefined,
            arrays2: List<T> | null | undefined,
            arrays3: List<T> | null | undefined,
            arrays4: List<T> | null | undefined,
            iteratee: (value1: T, value2: T, value3: T, value4: T) => TResult
        ): TResult[];

        /**
         * @see _.zipWith
         */
        zipWith<T, TResult>(
            arrays: List<T> | null | undefined,
            arrays2: List<T> | null | undefined,
            arrays3: List<T> | null | undefined,
            arrays4: List<T> | null | undefined,
            arrays5: List<T> | null | undefined,
            iteratee: (value1: T, value2: T, value3: T, value4: T, value5: T) => TResult
        ): TResult[];

        zipWith<T, TResult>(
            ...iteratee: Array<((...group: T[]) => TResult) | List<T> | null | undefined>
        ): TResult[];
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.zipWith
         */
        zipWith<T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            ...arrays: Array<List<T> | null | undefined>
        ): LoDashImplicitWrapper<T[][]>;

        /**
         * @see _.zipWith
         */
        zipWith<T, TResult>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            iteratee: (value1: T) => TResult
        ): LoDashImplicitWrapper<TResult[]>;

        /**
         * @see _.zipWith
         */
        zipWith<T, TResult>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            arrays2: List<T> | null | undefined,
            iteratee: (value1: T, value2: T) => TResult
        ): LoDashImplicitWrapper<TResult[]>;

        /**
         * @see _.zipWith
         */
        zipWith<T, TResult>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            arrays2: List<T> | null | undefined,
            arrays3: List<T> | null | undefined,
            iteratee: (value1: T, value2: T, value3: T) => TResult
        ): LoDashImplicitWrapper<TResult[]>;

        /**
         * @see _.zipWith
         */
        zipWith<T, TResult>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            arrays2: List<T> | null | undefined,
            arrays3: List<T> | null | undefined,
            arrays4: List<T> | null | undefined,
            iteratee: (value1: T, value2: T, value3: T, value4: T) => TResult
        ): LoDashImplicitWrapper<TResult[]>;

        /**
         * @see _.zipWith
         */
        zipWith<T, TResult>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            arrays2: List<T> | null | undefined,
            arrays3: List<T> | null | undefined,
            arrays4: List<T> | null | undefined,
            arrays5: List<T> | null | undefined,
            ...iteratee: Array<((...group: T[]) => TResult) | List<T> | null | undefined>
        ): LoDashImplicitWrapper<TResult[]>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.zipWith
         */
        zipWith<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            ...arrays: Array<List<T> | null | undefined>
        ): LoDashExplicitWrapper<T[][]>;

        /**
         * @see _.zipWith
         */
        zipWith<T, TResult>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            iteratee: (value1: T) => TResult
        ): LoDashExplicitWrapper<TResult[]>;

        /**
         * @see _.zipWith
         */
        zipWith<T, TResult>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            arrays2: List<T> | null | undefined,
            iteratee: (value1: T, value2: T) => TResult
        ): LoDashExplicitWrapper<TResult[]>;

        /**
         * @see _.zipWith
         */
        zipWith<T, TResult>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            arrays2: List<T> | null | undefined,
            arrays3: List<T> | null | undefined,
            iteratee: (value1: T, value2: T, value3: T) => TResult
        ): LoDashExplicitWrapper<TResult[]>;

        /**
         * @see _.zipWith
         */
        zipWith<T, TResult>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            arrays2: List<T> | null | undefined,
            arrays3: List<T> | null | undefined,
            arrays4: List<T> | null | undefined,
            iteratee: (value1: T, value2: T, value3: T, value4: T) => TResult
        ): LoDashExplicitWrapper<TResult[]>;

        /**
         * @see _.zipWith
         */
        zipWith<T, TResult>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            arrays2: List<T> | null | undefined,
            arrays3: List<T> | null | undefined,
            arrays4: List<T> | null | undefined,
            arrays5: List<T> | null | undefined,
            ...iteratee: Array<((...group: T[]) => TResult) | List<T> | null | undefined>
        ): LoDashExplicitWrapper<TResult[]>;
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
        chain<T>(value: T): LoDashExplicitWrapper<T>;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.chain
         */
        chain(): LoDashExplicitWrapper<TValue>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.chain
         */
        chain(): this;
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
            interceptor: (value: T) => void
        ): T;
    }

    interface LoDashWrapper<TValue> {
        /**
         * @see _.tap
         */
        tap(
            interceptor: (value: TValue) => void
        ): this;
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
            interceptor: (value: T) => TResult
        ): TResult;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.thru
         */
        thru<TResult>(interceptor: (value: TValue) => TResult): LoDashImplicitWrapper<TResult>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.thru
         */
        thru<TResult>(interceptor: (value: TValue) => TResult): LoDashExplicitWrapper<TResult>;
    }

    //_.prototype.commit
    interface LoDashWrapper<TValue> {
        /**
         * Executes the chained sequence and returns the wrapped result.
         *
         * @return Returns the new lodash wrapper instance.
         */
        commit(): this;
    }

    //_.prototype.plant
    interface LoDashImplicitWrapper<TValue> {
        /**
         * Creates a clone of the chained sequence planting value as the wrapped value.
         * @param value The value to plant as the wrapped value.
         * @return Returns the new lodash wrapper instance.
         */
        plant<T>(value: T): LoDashImplicitWrapper<T>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.plant
         */
        plant<T>(value: T): LoDashExplicitWrapper<T>;
    }

    //_.prototype.toJSON
    interface LoDashWrapper<TValue> {
        /**
         * @see _.value
         */
        toJSON(): TValue;
    }

    //_.prototype.toString
    interface LoDashWrapper<TValue> {
        /**
         * Produces the result of coercing the unwrapped value to a string.
         *
         * @return Returns the coerced string value.
         */
        toString(): string;
    }

    //_.prototype.value
    interface LoDashWrapper<TValue> {
        /**
         * Executes the chained sequence to extract the unwrapped value.
         *
         * @alias _.toJSON, _.valueOf
         *
         * @return Returns the resolved unwrapped value.
         */
        value(): TValue;
    }

    //_.valueOf
    interface LoDashWrapper<TValue> {
        /**
         * @see _.value
         */
        valueOf(): TValue;
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
         * @param object The object to iterate over.
         * @param props The property names or indexes of elements to pick, specified individually or in arrays.
         * @return Returns the new array of picked elements.
         */
        at<T>(
            object: List<T> | Dictionary<T> | null | undefined,
            ...props: PropertyPath[]
        ): T[];

        /**
         * @see _.at
         */
        at<T extends object>(
            object: T | null | undefined,
            ...props: Array<Many<keyof T>>
        ): Array<T[keyof T]>;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.at
         */
        at<T>(
            this: LoDashImplicitWrapper<List<T> | Dictionary<T> | null | undefined>,
            ...props: PropertyPath[]
        ): LoDashImplicitWrapper<T[]>;

        /**
         * @see _.at
         */
        at<T extends object>(
            this: LoDashImplicitWrapper<T | null | undefined>,
            ...props: Array<Many<keyof T>>
        ): LoDashImplicitWrapper<Array<T[keyof T]>>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.at
         */
        at<T>(
            this: LoDashExplicitWrapper<List<T> | Dictionary<T> | null | undefined>,
            ...props: PropertyPath[]
        ): LoDashExplicitWrapper<T[]>;

        /**
         * @see _.at
         */
        at<T extends object>(
            this: LoDashExplicitWrapper<T | null | undefined>,
            ...props: Array<Many<keyof T>>
        ): LoDashExplicitWrapper<Array<T[keyof T]>>;
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
            collection: string | null | undefined,
            iteratee?: StringIterator<T>
        ): Dictionary<number>;

        /**
         * @see _.countBy
         */
        countBy<T>(
            collection: List<T> | null | undefined,
            iteratee?: ListIteratee<T>
        ): Dictionary<number>;

        /**
         * @see _.countBy
         */
        countBy<T>(
            collection: NumericDictionary<T> | null | undefined,
            iteratee?: NumericDictionaryIteratee<T>
        ): Dictionary<number>;

        /**
         * @see _.countBy
         */
        countBy<T extends object>(
            collection: T | null | undefined,
            iteratee?: ObjectIteratee<T>
        ): Dictionary<number>;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.countBy
         */
        countBy<T>(
            this: LoDashImplicitWrapper<string | null | undefined>,
            iteratee?: StringIterator<T>
        ): LoDashImplicitWrapper<Dictionary<number>>;

        /**
         * @see _.countBy
         */
        countBy<T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            iteratee?: ListIteratee<T>
        ): LoDashImplicitWrapper<Dictionary<number>>;

        /**
         * @see _.countBy
         */
        countBy<T extends object>(
            this: LoDashImplicitWrapper<T | null | undefined>,
            iteratee?: ObjectIteratee<T>
        ): LoDashImplicitWrapper<Dictionary<number>>;

        /**
         * @see _.countBy
         */
        countBy<T>(
            this: LoDashImplicitWrapper<NumericDictionary<T> | null | undefined>,
            iteratee?: NumericDictionaryIteratee<T>
        ): LoDashImplicitWrapper<Dictionary<number>>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.countBy
         */
        countBy<T>(
            this: LoDashExplicitWrapper<string | null | undefined>,
            iteratee?: StringIterator<T>
        ): LoDashExplicitWrapper<Dictionary<number>>;

        /**
         * @see _.countBy
         */
        countBy<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            iteratee?: ListIteratee<T>
        ): LoDashExplicitWrapper<Dictionary<number>>;

        /**
         * @see _.countBy
         */
        countBy<T extends object>(
            this: LoDashExplicitWrapper<T | null | undefined>,
            iteratee?: ObjectIteratee<T>
        ): LoDashExplicitWrapper<Dictionary<number>>;

        /**
         * @see _.countBy
         */
        countBy<T>(
            this: LoDashExplicitWrapper<NumericDictionary<T> | null | undefined>,
            iteratee?: NumericDictionaryIteratee<T>
        ): LoDashExplicitWrapper<Dictionary<number>>;
    }

    //_.each
    interface LoDashStatic {
        each: typeof _.forEach; // tslint:disable-line:no-unnecessary-qualifier
    }

    interface LoDashWrapper<TValue> {
        /**
         * @see _.forEach
         */
        each<T>(
            this: LoDashWrapper<T[] | null | undefined>,
            iteratee?: ArrayIterator<T, any>
        ): this;

        /**
         * @see _.forEach
         */
        each(
            this: LoDashWrapper<string | null | undefined>,
            iteratee?: StringIterator<any>
        ): this;

        /**
         * @see _.forEach
         */
        each<T>(
            this: LoDashWrapper<List<T> | null | undefined>,
            iteratee?: ListIterator<T, any>
        ): this;

        /**
         * @see _.forEach
         */
        each<T extends object>(
            this: LoDashWrapper<T | null | undefined>,
            iteratee?: ObjectIterator<T, any>
        ): this;
    }

    //_.eachRight
    interface LoDashStatic {
        eachRight: typeof _.forEachRight; // tslint:disable-line:no-unnecessary-qualifier
    }

    interface LoDashWrapper<TValue> {
        /**
         * @see _.forEachRight
         */
        eachRight<T>(
            this: LoDashWrapper<T[] | null | undefined>,
            iteratee?: ArrayIterator<T, any>
        ): this;

        /**
         * @see _.forEachRight
         */
        eachRight(
            this: LoDashWrapper<string | null | undefined>,
            iteratee?: StringIterator<any>
        ): this;

        /**
         * @see _.forEachRight
         */
        eachRight<T>(
            this: LoDashWrapper<List<T> | null | undefined>,
            iteratee?: ListIterator<T, any>
        ): this;

        /**
         * @see _.forEachRight
         */
        eachRight<T extends object>(
            this: LoDashWrapper<T | null | undefined>,
            iteratee?: ObjectIterator<T, any>
        ): this;
    }

    //_.every
    interface LoDashStatic {
        /**
         * Checks if predicate returns truthy for all elements of collection. Iteration is stopped once predicate
         * returns falsey. The predicate is invoked with three arguments: (value, index|key, collection).
         *
         * @param collection The collection to iterate over.
         * @param predicate The function invoked per iteration.
         * @return Returns true if all elements pass the predicate check, else false.
         */
        every<T>(
            collection: List<T> | null | undefined,
            predicate?: ListIterateeCustom<T, boolean>
        ): boolean;

        /**
         * @see _.every
         */
        every<T>(
            collection: NumericDictionary<T> | null | undefined,
            predicate?: NumericDictionaryIterateeCustom<T, boolean>
        ): boolean;

        /**
         * @see _.every
         */
        every<T extends object>(
            collection: T | null | undefined,
            predicate?: ObjectIterateeCustom<T, boolean>
        ): boolean;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.every
         */
        every<T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            predicate?: ListIterateeCustom<T, boolean>
        ): boolean;

        /**
         * @see _.every
         */
        every<T extends object>(
            this: LoDashImplicitWrapper<T | null | undefined>,
            predicate?: ObjectIterateeCustom<T, boolean>
        ): boolean;

        /**
         * @see _.every
         */
        every<T>(
            this: LoDashImplicitWrapper<NumericDictionary<T> | null | undefined>,
            predicate?: NumericDictionaryIterateeCustom<T, boolean>
        ): boolean;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.every
         */
        every<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            predicate?: ListIterateeCustom<T, boolean>
        ): LoDashExplicitWrapper<boolean>;

        /**
         * @see _.every
         */
        every<T extends object>(
            this: LoDashExplicitWrapper<T | null | undefined>,
            predicate?: ObjectIterateeCustom<T, boolean>
        ): LoDashExplicitWrapper<boolean>;

        /**
         * @see _.every
         */
        every<T>(
            this: LoDashExplicitWrapper<NumericDictionary<T> | null | undefined>,
            predicate?: NumericDictionaryIterateeCustom<T, boolean>
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
        filter(
            collection: string | null | undefined,
            predicate?: StringIterator<boolean>
        ): string[];

        /**
         * @see _.filter
         */
        filter<T, S extends T>(
            collection: List<T> | null | undefined,
            predicate: ListIteratorTypeGuard<T, S>
        ): S[];

        /**
         * @see _.filter
         */
        filter<T>(
            collection: List<T> | null | undefined,
            predicate?: ListIterateeCustom<T, boolean>
        ): T[];

        /**
         * @see _.filter
         */
        filter<T extends object, S extends T[keyof T]>(
            collection: T | null | undefined,
            predicate: ObjectIteratorTypeGuard<T, S>
        ): S[];

        /**
         * @see _.filter
         */
        filter<T extends object>(
            collection: T | null | undefined,
            predicate?: ObjectIterateeCustom<T, boolean>
        ): Array<T[keyof T]>;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.filter
         */
        filter(
            this: LoDashImplicitWrapper<string | null | undefined>,
            predicate?: StringIterator<boolean>
        ): LoDashImplicitWrapper<string[]>;

        /**
         * @see _.filter
         */
        filter<T, S extends T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            predicate: ListIteratorTypeGuard<T, S>
        ): LoDashImplicitWrapper<S[]>;

        /**
         * @see _.filter
         */
        filter<T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            predicate?: ListIterateeCustom<T, boolean>
        ): LoDashImplicitWrapper<T[]>;

        /**
         * @see _.filter
         */
        filter<T extends object, S extends T[keyof T]>(
            this: LoDashImplicitWrapper<T | null | undefined>,
            predicate: ObjectIteratorTypeGuard<T, S>
        ): LoDashImplicitWrapper<S[]>;

        /**
         * @see _.filter
         */
        filter<T extends object>(
            this: LoDashImplicitWrapper<T | null | undefined>,
            predicate?: ObjectIterateeCustom<T, boolean>
        ): LoDashImplicitWrapper<Array<T[keyof T]>>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.filter
         */
        filter(
            this: LoDashExplicitWrapper<string | null | undefined>,
            predicate?: StringIterator<boolean>
        ): LoDashExplicitWrapper<string[]>;

        /**
         * @see _.filter
         */
        filter<T, S extends T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            predicate: ListIteratorTypeGuard<T, S>
        ): LoDashExplicitWrapper<S[]>;

        /**
         * @see _.filter
         */
        filter<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            predicate?: ListIterateeCustom<T, boolean>
        ): LoDashExplicitWrapper<T[]>;

        /**
         * @see _.filter
         */
        filter<T extends object, S extends T[keyof T]>(
            this: LoDashExplicitWrapper<T | null | undefined>,
            predicate: ObjectIteratorTypeGuard<T, S>
        ): LoDashExplicitWrapper<S[]>;

        /**
         * @see _.filter
         */
        filter<T extends object>(
            this: LoDashExplicitWrapper<T | null | undefined>,
            predicate?: ObjectIterateeCustom<T, boolean>
        ): LoDashExplicitWrapper<Array<T[keyof T]>>;
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
         * @param fromIndex The index to search from.
         * @return Returns the matched element, else undefined.
         */
        find<T, S extends T>(
            collection: List<T> | null | undefined,
            predicate: ListIteratorTypeGuard<T, S>,
            fromIndex?: number
        ): S|undefined;

        /**
         * @see _.find
         */
        find<T>(
            collection: List<T> | null | undefined,
            predicate?: ListIterateeCustom<T, boolean>,
            fromIndex?: number
        ): T|undefined;

        /**
         * @see _.find
         */
        find<T extends object, S extends T[keyof T]>(
            collection: T | null | undefined,
            predicate: ObjectIteratorTypeGuard<T, S>,
            fromIndex?: number
        ): S|undefined;

        /**
         * @see _.find
         */
        find<T extends object>(
            collection: T | null | undefined,
            predicate?: ObjectIterateeCustom<T, boolean>,
            fromIndex?: number
        ): T[keyof T]|undefined;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.find
         */
        find<T, S extends T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            predicate: ListIteratorTypeGuard<T, S>,
            fromIndex?: number
        ): S|undefined;

        /**
         * @see _.find
         */
        find<T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            predicate?: ListIterateeCustom<T, boolean>,
            fromIndex?: number
        ): T|undefined;

        /**
         * @see _.find
         */
        find<T extends object, S extends T[keyof T]>(
            this: LoDashImplicitWrapper<T | null | undefined>,
            predicate: ObjectIteratorTypeGuard<T, S>,
            fromIndex?: number
        ): S|undefined;

        /**
         * @see _.find
         */
        find<T extends object>(
            this: LoDashImplicitWrapper<T | null | undefined>,
            predicate?: ObjectIterateeCustom<T, boolean>,
            fromIndex?: number
        ): T[keyof T]|undefined;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.find
         */
        find<T, S extends T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            predicate: ListIteratorTypeGuard<T, S>,
            fromIndex?: number
        ): LoDashExplicitWrapper<S|undefined>;

        /**
         * @see _.find
         */
        find<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            predicate?: ListIterateeCustom<T, boolean>,
            fromIndex?: number
        ): LoDashExplicitWrapper<T|undefined>;

        /**
         * @see _.find
         */
        find<T extends object, S extends T[keyof T]>(
            this: LoDashExplicitWrapper<T | null | undefined>,
            predicate: ObjectIteratorTypeGuard<T, S>,
            fromIndex?: number
        ): LoDashExplicitWrapper<S|undefined>;

        /**
         * @see _.find
         */
        find<T extends object>(
            this: LoDashExplicitWrapper<T | null | undefined>,
            predicate?: ObjectIterateeCustom<T, boolean>,
            fromIndex?: number
        ): LoDashExplicitWrapper<T[keyof T]|undefined>;
    }

    //_.findLast
    interface LoDashStatic {
        /**
        * This method is like _.find except that it iterates over elements of a collection from
        * right to left.
        * @param collection Searches for a value in this list.
        * @param predicate The function called per iteration.
        * @param fromIndex The index to search from.
        * @return The found element, else undefined.
        **/
        findLast<T, S extends T>(
            collection: List<T> | null | undefined,
            predicate: ListIteratorTypeGuard<T, S>,
            fromIndex?: number
        ): S|undefined;

        /**
         * @see _.findLast
         */
        findLast<T>(
            collection: List<T> | null | undefined,
            predicate?: ListIterateeCustom<T, boolean>,
            fromIndex?: number
        ): T|undefined;

        /**
         * @see _.findLast
         */
        findLast<T extends object, S extends T[keyof T]>(
            collection: T | null | undefined,
            predicate: ObjectIteratorTypeGuard<T, S>,
            fromIndex?: number
        ): S|undefined;

        /**
         * @see _.findLast
         */
        findLast<T extends object>(
            collection: T | null | undefined,
            predicate?: ObjectIterateeCustom<T, boolean>,
            fromIndex?: number
        ): T[keyof T]|undefined;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.findLast
         */
        findLast<T, S extends T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            predicate: ListIteratorTypeGuard<T, S>,
            fromIndex?: number
        ): S | undefined;

        /**
         * @see _.findLast
         */
        findLast<T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            predicate?: ListIterateeCustom<T, boolean>,
            fromIndex?: number
        ): T | undefined;

        /**
         * @see _.findLast
         */
        findLast<T extends object, S extends T[keyof T]>(
            this: LoDashImplicitWrapper<T | null | undefined>,
            predicate: ObjectIteratorTypeGuard<T, S>,
            fromIndex?: number
        ): S|undefined;

        /**
         * @see _.findLast
         */
        findLast<T extends object>(
            this: LoDashImplicitWrapper<T | null | undefined>,
            predicate?: ObjectIterateeCustom<T, boolean>,
            fromIndex?: number
        ): T[keyof T]|undefined;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.findLast
         */
        findLast<T, S extends T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            predicate: ListIteratorTypeGuard<T, S>,
            fromIndex?: number
        ): LoDashExplicitWrapper<S | undefined>;

        /**
         * @see _.findLast
         */
        findLast<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            predicate?: ListIterateeCustom<T, boolean>,
            fromIndex?: number
        ): LoDashExplicitWrapper<T | undefined>;

        /**
         * @see _.findLast
         */
        findLast<T extends object, S extends T[keyof T]>(
            this: LoDashExplicitWrapper<T | null | undefined>,
            predicate: ObjectIteratorTypeGuard<T, S>,
            fromIndex?: number
        ): LoDashExplicitWrapper<S|undefined>;

        /**
         * @see _.findLast
         */
        findLast<T extends object>(
            this: LoDashExplicitWrapper<T | null | undefined>,
            predicate?: ObjectIterateeCustom<T, boolean>,
            fromIndex?: number
        ): LoDashExplicitWrapper<T[keyof T]|undefined>;
    }

    //_.flatMap
    interface LoDashStatic {
        /**
         * Creates an array of flattened values by running each element in collection through iteratee
         * and concating its result to the other mapped values. The iteratee is invoked with three arguments:
         * (value, index|key, collection).
         *
         * @param collection The collection to iterate over.
         * @param iteratee The function invoked per iteration.
         * @return Returns the new flattened array.
         */
        flatMap<T>(
            collection: List<Many<T>> | Dictionary<Many<T>> | NumericDictionary<Many<T>> | null | undefined
        ): T[];

        /**
         * @see _.flatMap
         */
        flatMap(
            collection: object | null | undefined
        ): any[];

        /**
         * @see _.flatMap
         */
        flatMap<T, TResult>(
            collection: List<T> | null | undefined,
            iteratee: ListIterator<T, Many<TResult>>
        ): TResult[];

        /**
         * @see _.flatMap
         */
        flatMap<T, TResult>(
            collection: NumericDictionary<T> | null | undefined,
            iteratee: NumericDictionaryIterator<T, Many<TResult>>
        ): TResult[];

        /**
         * @see _.flatMap
         */
        flatMap<T extends object, TResult>(
            collection: T | null | undefined,
            iteratee: ObjectIterator<T, Many<TResult>>
        ): TResult[];

        /**
         * @see _.flatMap
         */
        flatMap(
            collection: object | null | undefined,
            iteratee: string
        ): any[];

        /**
         * @see _.flatMap
         */
        flatMap(
            collection: object | null | undefined,
            iteratee: object
        ): boolean[];
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.flatMap
         */
        flatMap<T>(this: LoDashImplicitWrapper<List<Many<T>> | Dictionary<Many<T>> | NumericDictionary<Many<T>> | null | undefined>): LoDashImplicitWrapper<T[]>;

        /**
         * @see _.flatMap
         */
        flatMap(): LoDashImplicitWrapper<any[]>;

        /**
         * @see _.flatMap
         */
        flatMap<T, TResult>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            iteratee: ListIterator<T, Many<TResult>>
        ): LoDashImplicitWrapper<TResult[]>;

        /**
         * @see _.flatMap
         */
        flatMap<T extends object, TResult>(
            this: LoDashImplicitWrapper<T | null | undefined>,
            iteratee: ObjectIterator<T, Many<TResult>>
        ): LoDashImplicitWrapper<TResult[]>;

        /**
         * @see _.flatMap
         */
        flatMap<T, TResult>(
            this: LoDashImplicitWrapper<NumericDictionary<T> | null | undefined>,
            iteratee: NumericDictionaryIterator<T, Many<TResult>>
        ): LoDashImplicitWrapper<TResult[]>;

        /**
         * @see _.flatMap
         */
        flatMap(
            iteratee: string
        ): LoDashImplicitWrapper<any[]>;

        /**
         * @see _.flatMap
         */
        flatMap(
            iteratee: object
        ): LoDashImplicitWrapper<boolean[]>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.flatMap
         */
        flatMap<T>(this: LoDashExplicitWrapper<List<Many<T>> | Dictionary<Many<T>> | NumericDictionary<Many<T>> | null | undefined>): LoDashExplicitWrapper<T[]>;

        /**
         * @see _.flatMap
         */
        flatMap(): LoDashExplicitWrapper<any[]>;

        /**
         * @see _.flatMap
         */
        flatMap<T, TResult>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            iteratee: ListIterator<T, Many<TResult>>
        ): LoDashExplicitWrapper<TResult[]>;

        /**
         * @see _.flatMap
         */
        flatMap<T, TResult>(
            this: LoDashExplicitWrapper<NumericDictionary<T> | null | undefined>,
            iteratee: NumericDictionaryIterator<T, Many<TResult>>
        ): LoDashExplicitWrapper<TResult[]>;

        /**
         * @see _.flatMap
         */
        flatMap<T extends object, TResult>(
            this: LoDashExplicitWrapper<T | null | undefined>,
            iteratee: ObjectIterator<T, Many<TResult>>
        ): LoDashExplicitWrapper<TResult[]>;

        /**
         * @see _.flatMap
         */
        flatMap(
            iteratee: string
        ): LoDashExplicitWrapper<any[]>;

        /**
         * @see _.flatMap
         */
        flatMap(
            iteratee: object
        ): LoDashExplicitWrapper<boolean[]>;
    }

    //_.flatMapDeep
    interface LoDashStatic {
        /**
         * This method is like `_.flatMap` except that it recursively flattens the
         * mapped results.
         *
         * @since 4.7.0
         * @category Collection
         * @param collection The collection to iterate over.
         * @param [iteratee=_.identity] The function invoked per iteration.
         * @returns Returns the new flattened array.
         * @example
         *
         * function duplicate(n) {
         *   return [[[n, n]]];
         * }
         *
         * _.flatMapDeep([1, 2], duplicate);
         * // => [1, 1, 2, 2]
         */
        flatMapDeep<T>(
            collection: List<ListOfRecursiveArraysOrValues<T> | T> | Dictionary<ListOfRecursiveArraysOrValues<T> | T> | NumericDictionary<ListOfRecursiveArraysOrValues<T> | T> | null | undefined
        ): T[];

        /**
         * @see _.flatMapDeep
         */
        flatMapDeep<T, TResult>(
            collection: List<T> | null | undefined,
            iteratee: ListIterator<T, ListOfRecursiveArraysOrValues<TResult> | TResult>
        ): TResult[];

        /**
         * @see _.flatMapDeep
         */
        flatMapDeep<T, TResult>(
            collection: NumericDictionary<T> | null | undefined,
            iteratee: NumericDictionaryIterator<T, ListOfRecursiveArraysOrValues<TResult> | TResult>
        ): TResult[];

        /**
         * @see _.flatMapDeep
         */
        flatMapDeep<T extends object, TResult>(
            collection: T | null | undefined,
            iteratee: ObjectIterator<T, ListOfRecursiveArraysOrValues<TResult> | TResult>
        ): TResult[];

        /**
         * @see _.flatMapDeep
         */
        flatMapDeep(
            collection: object | null | undefined,
            iteratee: string
        ): any[];

        /**
         * @see _.flatMapDeep
         */
        flatMapDeep(
            collection: object | null | undefined,
            iteratee: object
        ): boolean[];
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.flatMapDeep
         */
        flatMapDeep<T>(
            this: LoDashImplicitWrapper<List<ListOfRecursiveArraysOrValues<T> | T> | Dictionary<ListOfRecursiveArraysOrValues<T> | T> | NumericDictionary<ListOfRecursiveArraysOrValues<T> | T> | null | undefined>
        ): LoDashImplicitWrapper<T[]>;

        /**
         * @see _.flatMapDeep
         */
        flatMapDeep<T, TResult>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            iteratee: ListIterator<T, ListOfRecursiveArraysOrValues<TResult> | TResult>
        ): LoDashImplicitWrapper<TResult[]>;

        /**
         * @see _.flatMapDeep
         */
        flatMapDeep<T, TResult>(
            this: LoDashImplicitWrapper<NumericDictionary<T> | null | undefined>,
            iteratee: NumericDictionaryIterator<T, ListOfRecursiveArraysOrValues<TResult> | TResult>
        ): LoDashImplicitWrapper<TResult[]>;

        /**
         * @see _.flatMapDeep
         */
        flatMapDeep<T extends object, TResult>(
            this: LoDashImplicitWrapper<T | null | undefined>,
            iteratee: ObjectIterator<T, ListOfRecursiveArraysOrValues<TResult> | TResult>
        ): LoDashImplicitWrapper<TResult[]>;

        /**
         * @see _.flatMapDeep
         */
        flatMapDeep(
            this: LoDashImplicitWrapper<object | null | undefined>,
            iteratee: string
        ): LoDashImplicitWrapper<any[]>;

        /**
         * @see _.flatMapDeep
         */
        flatMapDeep(
            this: LoDashImplicitWrapper<object | null | undefined>,
            iteratee: object
        ): LoDashImplicitWrapper<boolean[]>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.flatMapDeep
         */
        flatMapDeep<T>(
            this: LoDashExplicitWrapper<List<ListOfRecursiveArraysOrValues<T> | T> | Dictionary<ListOfRecursiveArraysOrValues<T> | T> | NumericDictionary<ListOfRecursiveArraysOrValues<T> | T> | null | undefined>
        ): LoDashExplicitWrapper<T[]>;

        /**
         * @see _.flatMapDeep
         */
        flatMapDeep<T, TResult>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            iteratee: ListIterator<T, ListOfRecursiveArraysOrValues<TResult> | TResult>
        ): LoDashExplicitWrapper<TResult[]>;

        /**
         * @see _.flatMapDeep
         */
        flatMapDeep<T, TResult>(
            this: LoDashExplicitWrapper<NumericDictionary<T> | null | undefined>,
            iteratee: NumericDictionaryIterator<T, ListOfRecursiveArraysOrValues<TResult> | TResult>
        ): LoDashExplicitWrapper<TResult[]>;

        /**
         * @see _.flatMapDeep
         */
        flatMapDeep<T extends object, TResult>(
            this: LoDashExplicitWrapper<T | null | undefined>,
            iteratee: ObjectIterator<T, ListOfRecursiveArraysOrValues<TResult> | TResult>
        ): LoDashExplicitWrapper<TResult[]>;

        /**
         * @see _.flatMapDeep
         */
        flatMapDeep(
            this: LoDashExplicitWrapper<object | null | undefined>,
            iteratee: string
        ): LoDashExplicitWrapper<any[]>;

        /**
         * @see _.flatMapDeep
         */
        flatMapDeep(
            this: LoDashExplicitWrapper<object | null | undefined>,
            iteratee: object
        ): LoDashExplicitWrapper<boolean[]>;
    }

    //_.flatMapDepth
    interface LoDashStatic {
        /**
         * This method is like `_.flatMap` except that it recursively flattens the
         * mapped results up to `depth` times.
         *
         * @since 4.7.0
         * @category Collection
         * @param collection The collection to iterate over.
         * @param [iteratee=_.identity] The function invoked per iteration.
         * @param [depth=1] The maximum recursion depth.
         * @returns Returns the new flattened array.
         * @example
         *
         * function duplicate(n) {
         *   return [[[n, n]]];
         * }
         *
         * _.flatMapDepth([1, 2], duplicate, 2);
         * // => [[1, 1], [2, 2]]
         */
        flatMapDepth<T>(
            collection: List<ListOfRecursiveArraysOrValues<T> | T> | Dictionary<ListOfRecursiveArraysOrValues<T> | T> | NumericDictionary<ListOfRecursiveArraysOrValues<T> | T> | null | undefined
        ): T[];

        /**
         * @see _.flatMapDepth
         */
        flatMapDepth<T, TResult>(
            collection: List<T> | null | undefined,
            iteratee: ListIterator<T, ListOfRecursiveArraysOrValues<TResult> | TResult>,
            depth?: number
        ): TResult[];

        /**
         * @see _.flatMapDepth
         */
        flatMapDepth<T, TResult>(
            collection: NumericDictionary<T> | null | undefined,
            iteratee: NumericDictionaryIterator<T, ListOfRecursiveArraysOrValues<TResult> | TResult>,
            depth?: number
        ): TResult[];

        /**
         * @see _.flatMapDepth
         */
        flatMapDepth<T extends object, TResult>(
            collection: T | null | undefined,
            iteratee: ObjectIterator<T, ListOfRecursiveArraysOrValues<TResult> | TResult>,
            depth?: number
        ): TResult[];

        /**
         * @see _.flatMapDepth
         */
        flatMapDepth(
            collection: object | null | undefined,
            iteratee: string,
            depth?: number
        ): any[];

        /**
         * @see _.flatMapDepth
         */
        flatMapDepth(
            collection: object | null | undefined,
            iteratee: object,
            depth?: number
        ): boolean[];
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.flatMapDepth
         */
        flatMapDepth<T>(
            this: LoDashImplicitWrapper<List<ListOfRecursiveArraysOrValues<T> | T> | Dictionary<ListOfRecursiveArraysOrValues<T> | T> | NumericDictionary<ListOfRecursiveArraysOrValues<T> | T> | null | undefined>
        ): LoDashImplicitWrapper<T[]>;

        /**
         * @see _.flatMapDepth
         */
        flatMapDepth<T, TResult>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            iteratee: ListIterator<T, ListOfRecursiveArraysOrValues<TResult> | TResult>,
            depth?: number
        ): LoDashImplicitWrapper<TResult[]>;

        /**
         * @see _.flatMapDepth
         */
        flatMapDepth<T, TResult>(
            this: LoDashImplicitWrapper<NumericDictionary<T> | null | undefined>,
            iteratee: NumericDictionaryIterator<T, ListOfRecursiveArraysOrValues<TResult> | TResult>,
            depth?: number
        ): LoDashImplicitWrapper<TResult[]>;

        /**
         * @see _.flatMapDepth
         */
        flatMapDepth<T extends object, TResult>(
            this: LoDashImplicitWrapper<T | null | undefined>,
            iteratee: ObjectIterator<T, ListOfRecursiveArraysOrValues<TResult> | TResult>,
            depth?: number
        ): LoDashImplicitWrapper<TResult[]>;

        /**
         * @see _.flatMapDepth
         */
        flatMapDepth(
            this: LoDashImplicitWrapper<object | null | undefined>,
            iteratee: string,
            depth?: number
        ): LoDashImplicitWrapper<any[]>;

        /**
         * @see _.flatMapDepth
         */
        flatMapDepth(
            this: LoDashImplicitWrapper<object | null | undefined>,
            iteratee: object,
            depth?: number
        ): LoDashImplicitWrapper<boolean[]>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.flatMapDepth
         */
        flatMapDepth<T>(
            this: LoDashExplicitWrapper<List<ListOfRecursiveArraysOrValues<T> | T> | Dictionary<ListOfRecursiveArraysOrValues<T> | T> | NumericDictionary<ListOfRecursiveArraysOrValues<T> | T> | null | undefined>
        ): LoDashExplicitWrapper<T[]>;

        /**
         * @see _.flatMapDepth
         */
        flatMapDepth<T, TResult>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            iteratee: ListIterator<T, ListOfRecursiveArraysOrValues<TResult> | TResult>,
            depth?: number
        ): LoDashExplicitWrapper<TResult[]>;

        /**
         * @see _.flatMapDepth
         */
        flatMapDepth<T, TResult>(
            this: LoDashExplicitWrapper<NumericDictionary<T> | null | undefined>,
            iteratee: NumericDictionaryIterator<T, ListOfRecursiveArraysOrValues<TResult> | TResult>,
            depth?: number
        ): LoDashExplicitWrapper<TResult[]>;

        /**
         * @see _.flatMapDepth
         */
        flatMapDepth<T extends object, TResult>(
            this: LoDashExplicitWrapper<T | null | undefined>,
            iteratee: ObjectIterator<T, ListOfRecursiveArraysOrValues<TResult> | TResult>,
            depth?: number
        ): LoDashExplicitWrapper<TResult[]>;

        /**
         * @see _.flatMapDepth
         */
        flatMapDepth(
            this: LoDashExplicitWrapper<object | null | undefined>,
            iteratee: string,
            depth?: number
        ): LoDashExplicitWrapper<any[]>;

        /**
         * @see _.flatMapDepth
         */
        flatMapDepth(
            this: LoDashExplicitWrapper<object | null | undefined>,
            iteratee: object,
            depth?: number
        ): LoDashExplicitWrapper<boolean[]>;
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
            iteratee?: ArrayIterator<T, any>
        ): T[];

        /**
         * @see _.forEach
         */
        forEach(
            collection: string,
            iteratee?: StringIterator<any>
        ): string;

        /**
         * @see _.forEach
         */
        forEach<T>(
            collection: List<T>,
            iteratee?: ListIterator<T, any>
        ): List<T>;

        /**
         * @see _.forEach
         */
        forEach<T extends object>(
            collection: T,
            iteratee?: ObjectIterator<T, any>
        ): T;

        /**
         * @see _.forEach
         */
        forEach<T, TArray extends T[] | null | undefined>(
            collection: TArray & (T[] | null | undefined),
            iteratee?: ArrayIterator<T, any>
        ): TArray;

        /**
         * @see _.forEach
         */
        forEach<TString extends string | null | undefined>(
            collection: TString,
            iteratee?: StringIterator<any>
        ): TString;

        /**
         * @see _.forEach
         */
        forEach<T, TList extends List<T> | null | undefined>(
            collection: TList & (List<T> | null | undefined),
            iteratee?: ListIterator<T, any>
        ): TList;

        /**
         * @see _.forEach
         */
        forEach<T extends object>(
            collection: T | null | undefined,
            iteratee?: ObjectIterator<T, any>
        ): T | null | undefined;
    }

    interface LoDashWrapper<TValue> {
        /**
         * @see _.forEach
         */
        forEach<T>(
            this: LoDashWrapper<T[] | null | undefined>,
            iteratee?: ArrayIterator<T, any>
        ): this;

        /**
         * @see _.forEach
         */
        forEach(
            this: LoDashWrapper<string | null | undefined>,
            iteratee?: StringIterator<any>
        ): this;

        /**
         * @see _.forEach
         */
        forEach<T>(
            this: LoDashWrapper<List<T> | null | undefined>,
            iteratee?: ListIterator<T, any>
        ): this;

        /**
         * @see _.forEach
         */
        forEach<T extends object>(
            this: LoDashWrapper<T | null | undefined>,
            iteratee?: ObjectIterator<T, any>
        ): this;
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
            iteratee?: ArrayIterator<T, any>
        ): T[];

        /**
         * @see _.forEachRight
         */
        forEachRight(
            collection: string,
            iteratee?: StringIterator<any>
        ): string;

        /**
         * @see _.forEachRight
         */
        forEachRight<T>(
            collection: List<T>,
            iteratee?: ListIterator<T, any>
        ): List<T>;

        /**
         * @see _.forEachRight
         */
        forEachRight<T extends object>(
            collection: T,
            iteratee?: ObjectIterator<T, any>
        ): T;

        /**
         * @see _.forEachRight
         */
        forEachRight<T, TArray extends T[] | null | undefined>(
            collection: TArray & (T[] | null | undefined),
            iteratee?: ArrayIterator<T, any>
        ): TArray;

        /**
         * @see _.forEachRight
         */
        forEachRight<TString extends string | null | undefined>(
            collection: TString,
            iteratee?: StringIterator<any>
        ): TString;

        /**
         * @see _.forEachRight
         */
        forEachRight<T, TList extends List<T> | null | undefined>(
            collection: TList & (List<T> | null | undefined),
            iteratee?: ListIterator<T, any>
        ): TList;

        /**
         * @see _.forEachRight
         */
        forEachRight<T extends object>(
            collection: T | null | undefined,
            iteratee?: ObjectIterator<T, any>
        ): T | null | undefined;
    }

    interface LoDashWrapper<TValue> {
        /**
         * @see _.forEachRight
         */
        forEachRight<T>(
            this: LoDashWrapper<T[] | null | undefined>,
            iteratee?: ArrayIterator<T, any>
        ): this;

        /**
         * @see _.forEachRight
         */
        forEachRight(
            this: LoDashWrapper<string | null | undefined>,
            iteratee?: StringIterator<any>
        ): this;

        /**
         * @see _.forEachRight
         */
        forEachRight<T>(
            this: LoDashWrapper<List<T> | null | undefined>,
            iteratee?: ListIterator<T, any>
        ): this;

        /**
         * @see _.forEachRight
         */
        forEachRight<T extends object>(
            this: LoDashWrapper<T | null | undefined>,
            iteratee?: ObjectIterator<T, any>
        ): this;
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
        groupBy(
            collection: string | null | undefined,
            iteratee?: StringIterator<NotVoid>
        ): Dictionary<string[]>;

        /**
         * @see _.groupBy
         */
        groupBy<T>(
            collection: List<T> | null | undefined,
            iteratee?: ListIteratee<T>
        ): Dictionary<T[]>;

        /**
         * @see _.groupBy
         */
        groupBy<T>(
            collection: NumericDictionary<T> | null | undefined,
            iteratee?: NumericDictionaryIteratee<T>
        ): Dictionary<T[]>;

        /**
         * @see _.groupBy
         */
        groupBy<T extends object>(
            collection: T | null | undefined,
            iteratee?: ObjectIteratee<T>
        ): Dictionary<Array<T[keyof T]>>;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.groupBy
         */
        groupBy(
            this: LoDashImplicitWrapper<string | null | undefined>,
            iteratee?: StringIterator<NotVoid>
        ): LoDashImplicitWrapper<Dictionary<string[]>>;

        /**
         * @see _.groupBy
         */
        groupBy<T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            iteratee?: ListIteratee<T>
        ): LoDashImplicitWrapper<Dictionary<T[]>>;

        /**
         * @see _.groupBy
         */
        groupBy<T extends object>(
            this: LoDashImplicitWrapper<T | null | undefined>,
            iteratee?: ObjectIteratee<T>
        ): LoDashImplicitWrapper<Dictionary<Array<T[keyof T]>>>;

        /**
         * @see _.groupBy
         */
        groupBy<T>(
            this: LoDashImplicitWrapper<NumericDictionary<T> | null | undefined>,
            iteratee?: NumericDictionaryIteratee<T>
        ): LoDashImplicitWrapper<Dictionary<T[]>>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.groupBy
         */
        groupBy(
            this: LoDashExplicitWrapper<string | null | undefined>,
            iteratee?: StringIterator<NotVoid>
        ): LoDashExplicitWrapper<Dictionary<string[]>>;

        /**
         * @see _.groupBy
         */
        groupBy<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            iteratee?: ListIteratee<T>
        ): LoDashExplicitWrapper<Dictionary<T[]>>;

        /**
         * @see _.groupBy
         */
        groupBy<T>(
            this: LoDashExplicitWrapper<NumericDictionary<T> | null | undefined>,
            iteratee?: NumericDictionaryIteratee<T>
        ): LoDashExplicitWrapper<Dictionary<T[]>>;

        /**
         * @see _.groupBy
         */
        groupBy<T extends object>(
            this: LoDashExplicitWrapper<T | null | undefined>,
            iteratee?: ObjectIteratee<T>
        ): LoDashExplicitWrapper<Dictionary<Array<T[keyof T]>>>;
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
            collection: List<T>|Dictionary<T> | null | undefined,
            target: T,
            fromIndex?: number
        ): boolean;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.includes
         */
        includes<T>(
            this: LoDashImplicitWrapper<List<T> | Dictionary<T> | null | undefined>,
            target: T,
            fromIndex?: number
        ): boolean;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.includes
         */
        includes<T>(
            this: LoDashExplicitWrapper<List<T> | Dictionary<T> | null | undefined>,
            target: T,
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
        keyBy(
            collection: string | null | undefined,
            iteratee?: StringIterator<PropertyName>
        ): Dictionary<string>;

        /**
         * @see _.keyBy
         */
        keyBy<T>(
            collection: List<T> | null | undefined,
            iteratee?: ListIterateeCustom<T, PropertyName>
        ): Dictionary<T>;

        /**
         * @see _.keyBy
         */
        keyBy<T extends object>(
            collection: T | null | undefined,
            iteratee?: ObjectIterateeCustom<T, PropertyName>
        ): Dictionary<T[keyof T]>;

        /**
         * @see _.keyBy
         */
        keyBy<T>(
            collection: NumericDictionary<T> | null | undefined,
            iteratee?: NumericDictionaryIterateeCustom<T, PropertyName>
        ): Dictionary<T>;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.keyBy
         */
        keyBy(
            this: LoDashImplicitWrapper<string | null | undefined>,
            iteratee?: StringIterator<PropertyName>
        ): LoDashImplicitWrapper<Dictionary<string>>;

        /**
         * @see _.keyBy
         */
        keyBy<T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            iteratee?: ListIterateeCustom<T, PropertyName>
        ): LoDashImplicitWrapper<Dictionary<T>>;

        /**
         * @see _.keyBy
         */
        keyBy<T extends object>(
            this: LoDashImplicitWrapper<T | null | undefined>,
            iteratee?: ObjectIterateeCustom<T, PropertyName>
        ): LoDashImplicitWrapper<Dictionary<T[keyof T]>>;

        /**
         * @see _.keyBy
         */
        keyBy<T>(
            this: LoDashImplicitWrapper<NumericDictionary<T> | null | undefined>,
            iteratee?: NumericDictionaryIterateeCustom<T, PropertyName>
        ): LoDashImplicitWrapper<Dictionary<T>>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.keyBy
         */
        keyBy(
            this: LoDashExplicitWrapper<string | null | undefined>,
            iteratee?: StringIterator<PropertyName>
        ): LoDashExplicitWrapper<Dictionary<string>>;

        /**
         * @see _.keyBy
         */
        keyBy<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            iteratee?: ListIterateeCustom<T, PropertyName>
        ): LoDashExplicitWrapper<Dictionary<T>>;

        /**
         * @see _.keyBy
         */
        keyBy<T extends object>(
            this: LoDashExplicitWrapper<T | null | undefined>,
            iteratee?: ObjectIterateeCustom<T, PropertyName>
        ): LoDashExplicitWrapper<Dictionary<T[keyof T]>>;

        /**
         * @see _.keyBy
         */
        keyBy<T>(
            this: LoDashExplicitWrapper<NumericDictionary<T> | null | undefined>,
            iteratee?: NumericDictionaryIterateeCustom<T, PropertyName>
        ): LoDashExplicitWrapper<Dictionary<T>>;
    }

    //_.invoke
    interface LoDashStatic {
        /**
        * Invokes the method at path of object.
        * @param object The object to query.
        * @param path The path of the method to invoke.
        * @param args The arguments to invoke the method with.
        **/
        invoke(
            object: any,
            path: PropertyPath,
            ...args: any[]): any;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
        * @see _.invoke
        **/
        invoke(
            path: PropertyPath,
            ...args: any[]): any;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
        * @see _.invoke
        **/
        invoke(
            path: PropertyPath,
            ...args: any[]): LoDashExplicitWrapper<any>;
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
        invokeMap(
            collection: object | null | undefined,
            methodName: string,
            ...args: any[]): any[];

        /**
        * @see _.invokeMap
        **/
        invokeMap<TResult>(
            collection: object | null | undefined,
            method: (...args: any[]) => TResult,
            ...args: any[]): TResult[];
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
        * @see _.invokeMap
        **/
        invokeMap(
            methodName: string,
            ...args: any[]): LoDashImplicitWrapper<any[]>;

        /**
        * @see _.invokeMap
        **/
        invokeMap<TResult>(
            method: (...args: any[]) => TResult,
            ...args: any[]): LoDashImplicitWrapper<TResult[]>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
        * @see _.invokeMap
        **/
        invokeMap(
            methodName: string,
            ...args: any[]): LoDashExplicitWrapper<any[]>;

        /**
        * @see _.invokeMap
        **/
        invokeMap<TResult>(
            method: (...args: any[]) => TResult,
            ...args: any[]): LoDashExplicitWrapper<TResult[]>;
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
            collection: List<T> | null | undefined,
            iteratee: ListIterator<T, TResult>
        ): TResult[];

        /**
         * @see _.map
         */
        map<T>(collection: List<T> | Dictionary<T> | null | undefined): T[];

        /**
         * @see _.map
         */
        map<T, TResult>(
            collection: Dictionary<T> | null | undefined,
            iteratee: DictionaryIterator<T, TResult>
        ): TResult[];

        /** @see _.map */
        map<T, K extends keyof T>(
            collection: List<T> | Dictionary<T> | null | undefined,
            iteratee: K
        ): Array<T[K]>;

        /** @see _.map */
        map<T, TResult>(
            collection: NumericDictionary<T> | null | undefined,
            iteratee?: NumericDictionaryIterator<T, TResult>
        ): TResult[];

        /**
         * @see _.map
         */
        map<T, TResult>(
            collection: List<T>|Dictionary<T>|NumericDictionary<T> | null | undefined,
            iteratee?: string
        ): TResult[];

        /**
         * @see _.map
         */
        map<T>(
            collection: List<T>|Dictionary<T>|NumericDictionary<T> | null | undefined,
            iteratee?: object
        ): boolean[];
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.map
         */
        map<T, TResult>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            iteratee: ListIterator<T, TResult>
        ): LoDashImplicitWrapper<TResult[]>;

        /**
         * @see _.map
         */
        map<T>(this: LoDashImplicitWrapper<List<T> | Dictionary<T> | null | undefined>): LoDashImplicitWrapper<T[]>;

        /**
         * @see _.map
         */
        map<T, TResult>(
            this: LoDashImplicitWrapper<Dictionary<T> | null | undefined>,
            iteratee: DictionaryIterator<T, TResult>
        ): LoDashImplicitWrapper<TResult[]>;

        /** @see _.map */
        map<T, K extends keyof T>(
            this: LoDashImplicitWrapper<List<T> | Dictionary<T> | null | undefined>,
            iteratee: K
        ): LoDashImplicitWrapper<Array<T[K]>>;

        /** @see _.map */
        map<T, TResult>(
            this: LoDashImplicitWrapper<NumericDictionary<T> | null | undefined>,
            iteratee?: NumericDictionaryIterator<T, TResult>
        ): LoDashImplicitWrapper<TResult[]>;

        /**
         * @see _.map
         */
        map<T, TResult>(
            this: LoDashImplicitWrapper<List<T> | Dictionary<T> | NumericDictionary<T> | null | undefined>,
            iteratee?: string
        ): LoDashImplicitWrapper<TResult[]>;

        /**
         * @see _.map
         */
        map<T>(
            this: LoDashImplicitWrapper<List<T> | Dictionary<T> | NumericDictionary<T> | null | undefined>,
            iteratee?: object
        ): LoDashImplicitWrapper<boolean[]>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.map
         */
        map<T, TResult>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            iteratee: ListIterator<T, TResult>
        ): LoDashExplicitWrapper<TResult[]>;

        /**
         * @see _.map
         */
        map<T>(this: LoDashExplicitWrapper<List<T> | Dictionary<T> | null | undefined>): LoDashExplicitWrapper<T[]>;

        /**
         * @see _.map
         */
        map<T, TResult>(
            this: LoDashExplicitWrapper<Dictionary<T> | null | undefined>,
            iteratee: DictionaryIterator<T, TResult>
        ): LoDashExplicitWrapper<TResult[]>;

        /** @see _.map */
        map<T, K extends keyof T>(
            this: LoDashExplicitWrapper<List<T> | Dictionary<T> | null | undefined>,
            iteratee: K
        ): LoDashExplicitWrapper<Array<T[K]>>;

        /**
         * @see _.map
         */
        map<T, TResult>(
            this: LoDashExplicitWrapper<NumericDictionary<T> | null | undefined>,
            iteratee?: NumericDictionaryIterator<T, TResult>
        ): LoDashExplicitWrapper<TResult[]>;

        /**
         * @see _.map
         */
        map<T, TResult>(
            this: LoDashExplicitWrapper<List<T> | Dictionary<T> | NumericDictionary<T> | null | undefined>,
            iteratee?: string
        ): LoDashExplicitWrapper<TResult[]>;

        /**
         * @see _.map
         */
        map<T>(
            this: LoDashExplicitWrapper<List<T> | Dictionary<T> | NumericDictionary<T> | null | undefined>,
            iteratee?: object
        ): LoDashExplicitWrapper<boolean[]>;
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
            collection: List<T> | null | undefined,
            callback: ValueIteratee<T>
        ): [T[], T[]];

        /**
         * @see _.partition
         */
        partition<T extends object>(
            collection: T | null | undefined,
            callback: ValueIteratee<T[keyof T]>
        ): [Array<T[keyof T]>, Array<T[keyof T]>];
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.partition
         */
        partition<T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            callback: ValueIteratee<T>
        ): LoDashImplicitWrapper<[T[], T[]]>;

        /**
         * @see _.partition
         */
        partition<T>(
            this: LoDashImplicitWrapper<T | null | undefined>,
            callback: ValueIteratee<T[keyof T]>
        ): LoDashImplicitWrapper<[Array<T[keyof T]>, Array<T[keyof T]>]>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.partition
         */
        partition<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            callback: ValueIteratee<T>
        ): LoDashExplicitWrapper<[T[], T[]]>;

        /**
         * @see _.partition
         */
        partition<T>(
            this: LoDashExplicitWrapper<T | null | undefined>,
            callback: ValueIteratee<T[keyof T]>
        ): LoDashExplicitWrapper<[Array<T[keyof T]>, Array<T[keyof T]>]>;
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
        * @return Returns the accumulated value.
        **/
        reduce<T, TResult>(
            collection: T[] | null | undefined,
            callback: MemoListIterator<T, TResult, T[]>,
            accumulator: TResult
        ): TResult;

        /**
        * @see _.reduce
        **/
        reduce<T, TResult>(
            collection: List<T> | null | undefined,
            callback: MemoListIterator<T, TResult, List<T>>,
            accumulator: TResult
        ): TResult;

        /**
        * @see _.reduce
        **/
        reduce<T extends object, TResult>(
            collection: T | null | undefined,
            callback: MemoObjectIterator<T[keyof T], TResult, T>,
            accumulator: TResult
        ): TResult;

        /**
        * @see _.reduce
        **/
        reduce<T, TResult>(
            collection: NumericDictionary<T> | null | undefined,
            callback: MemoListIterator<T, TResult, NumericDictionary<T>>,
            accumulator: TResult
        ): TResult;

        /**
        * @see _.reduce
        **/
        reduce<T, TResult>(
            collection: T[] | null | undefined,
            callback: MemoListIterator<T, TResult, T[]>
        ): TResult | undefined;

        /**
         * @see _.reduce
         **/
        reduce<T, TResult>(
            collection: List<T> | null | undefined,
            callback: MemoListIterator<T, TResult, List<T>>
        ): TResult | undefined;

        /**
        * @see _.reduce
        **/
        reduce<T extends object, TResult>(
            collection: T | null | undefined,
            callback: MemoObjectIterator<T[keyof T], TResult, T>
        ): TResult | undefined;

        /**
         * @see _.reduce
         **/
        reduce<T, TResult>(
            collection: NumericDictionary<T> | null | undefined,
            callback: MemoListIterator<T, TResult, NumericDictionary<T>>
        ): TResult | undefined;
    }

    interface LoDashImplicitWrapper<TValue> {
         /**
        * @see _.reduce
        **/
        reduce<T, TResult>(
            this: LoDashImplicitWrapper<T[] | null | undefined>,
            callback: MemoListIterator<T, TResult, T[]>,
            accumulator: TResult
        ): TResult;

        /**
         * @see _.reduce
         **/
        reduce<T, TResult>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            callback: MemoListIterator<T, TResult, List<T>>,
            accumulator: TResult
        ): TResult;

        /**
        * @see _.reduce
        **/
        reduce<T extends object, TResult>(
            this: LoDashImplicitWrapper<T | null | undefined>,
            callback: MemoObjectIterator<T[keyof T], TResult, T>,
            accumulator: TResult
        ): TResult;

        /**
         * @see _.reduce
         **/
        reduce<T, TResult>(
            this: LoDashImplicitWrapper<NumericDictionary<T> | null | undefined>,
            callback: MemoListIterator<T, TResult, NumericDictionary<T>>,
            accumulator: TResult
        ): TResult;

        /**
        * @see _.reduce
        **/
        reduce<T, TResult>(
            this: LoDashImplicitWrapper<T[] | null | undefined>,
            callback: MemoListIterator<T, TResult, T[]>
        ): TResult | undefined;

        /**
        * @see _.reduce
        **/
        reduce<T, TResult>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            callback: MemoListIterator<T, TResult, List<T>>
        ): TResult | undefined;

        /**
        * @see _.reduce
        **/
        reduce<T extends object, TResult>(
            this: LoDashImplicitWrapper<T | null | undefined>,
            callback: MemoObjectIterator<T[keyof T], TResult, T>
        ): TResult | undefined;

        /**
        * @see _.reduce
        **/
        reduce<T, TResult>(
            this: LoDashImplicitWrapper<NumericDictionary<T> | null | undefined>,
            callback: MemoListIterator<T, TResult, NumericDictionary<T>>
        ): TResult | undefined;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
        * @see _.reduce
        **/
        reduce<T, TResult>(
            this: LoDashExplicitWrapper<T[] | null | undefined>,
            callback: MemoListIterator<T, TResult, T[]>,
            accumulator: TResult
        ): LoDashExplicitWrapper<TResult>;

        /**
        * @see _.reduce
        **/
        reduce<T, TResult>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            callback: MemoListIterator<T, TResult, List<T>>,
            accumulator: TResult
        ): LoDashExplicitWrapper<TResult>;

        /**
        * @see _.reduce
        **/
        reduce<T extends object, TResult>(
            this: LoDashExplicitWrapper<T | null | undefined>,
            callback: MemoObjectIterator<T[keyof T], TResult, T>,
            accumulator: TResult
        ): LoDashExplicitWrapper<TResult>;

        /**
        * @see _.reduce
        **/
        reduce<T, TResult>(
            this: LoDashExplicitWrapper<NumericDictionary<T> | null | undefined>,
            callback: MemoListIterator<T, TResult, NumericDictionary<T>>,
            accumulator: TResult
        ): LoDashExplicitWrapper<TResult>;

        /**
        * @see _.reduce
        **/
        reduce<T, TResult>(
            this: LoDashExplicitWrapper<T[] | null | undefined>,
            callback: MemoListIterator<T, TResult, T[]>
        ): LoDashExplicitWrapper<TResult | undefined>;

        /**
        * @see _.reduce
        **/
        reduce<T, TResult>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            callback: MemoListIterator<T, TResult, List<T>>
        ): LoDashExplicitWrapper<TResult | undefined>;

        /**
        * @see _.reduce
        **/
        reduce<T extends object, TResult>(
            this: LoDashExplicitWrapper<T | null | undefined>,
            callback: MemoObjectIterator<T[keyof T], TResult, T>
        ): LoDashExplicitWrapper<TResult | undefined>;

        /**
         * @see _.reduce
         **/
        reduce<T, TResult>(
            this: LoDashExplicitWrapper<NumericDictionary<T> | null | undefined>,
            callback: MemoListIterator<T, TResult, NumericDictionary<T>>
        ): LoDashExplicitWrapper<TResult | undefined>;
    }

    //_.reduceRight
    interface LoDashStatic {
        /**
        * This method is like _.reduce except that it iterates over elements of a collection from
        * right to left.
        * @param collection The collection to iterate over.
        * @param callback The function called per iteration.
        * @param accumulator Initial value of the accumulator.
        * @return The accumulated value.
        **/
        reduceRight<T, TResult>(
            collection: T[] | null | undefined,
            callback: MemoListIterator<T, TResult, T[]>,
            accumulator: TResult
        ): TResult;

        /**
        * @see _.reduceRight
        **/
        reduceRight<T, TResult>(
            collection: List<T> | null | undefined,
            callback: MemoListIterator<T, TResult, List<T>>,
            accumulator: TResult
        ): TResult;

        /**
        * @see _.reduceRight
        **/
        reduceRight<T extends object, TResult>(
            collection: T | null | undefined,
            callback: MemoObjectIterator<T[keyof T], TResult, T>,
            accumulator: TResult
        ): TResult;

        /**
        * @see _.reduceRight
        **/
        reduceRight<T, TResult>(
            collection: NumericDictionary<T> | null | undefined,
            callback: MemoListIterator<T, TResult, NumericDictionary<T>>,
            accumulator: TResult
        ): TResult;

        /**
        * @see _.reduceRight
        **/
        reduceRight<T, TResult>(
            collection: T[] | null | undefined,
            callback: MemoListIterator<T, TResult, T[]>
        ): TResult | undefined;

        /**
        * @see _.reduceRight
        **/
        reduceRight<T, TResult>(
            collection: List<T> | null | undefined,
            callback: MemoListIterator<T, TResult, List<T>>
        ): TResult | undefined;

        /**
        * @see _.reduceRight
        **/
        reduceRight<T extends object, TResult>(
            collection: T | null | undefined,
            callback: MemoObjectIterator<T[keyof T], TResult, T>
        ): TResult | undefined;

        /**
        * @see _.reduceRight
        **/
        reduceRight<T, TResult>(
            collection: NumericDictionary<T> | null | undefined,
            callback: MemoListIterator<T, TResult, NumericDictionary<T>>
        ): TResult | undefined;
    }

    interface LoDashImplicitWrapper<TValue> {
         /**
        * @see _.reduceRight
        **/
        reduceRight<T, TResult>(
            this: LoDashImplicitWrapper<T[] | null | undefined>,
            callback: MemoListIterator<T, TResult, T[]>,
            accumulator: TResult
        ): TResult;

        /**
        * @see _.reduceRight
        **/
        reduceRight<T, TResult>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            callback: MemoListIterator<T, TResult, List<T>>,
            accumulator: TResult
        ): TResult;

        /**
        * @see _.reduceRight
        **/
        reduceRight<T extends object, TResult>(
            this: LoDashImplicitWrapper<T | null | undefined>,
            callback: MemoObjectIterator<T[keyof T], TResult, T>,
            accumulator: TResult
        ): TResult;

        /**
        * @see _.reduceRight
        **/
        reduceRight<T, TResult>(
            this: LoDashImplicitWrapper<NumericDictionary<T> | null | undefined>,
            callback: MemoListIterator<T, TResult, NumericDictionary<T>>,
            accumulator: TResult
        ): TResult;

        /**
        * @see _.reduceRight
        **/
        reduceRight<T, TResult>(
            this: LoDashImplicitWrapper<T[] | null | undefined>,
            callback: MemoListIterator<T, TResult, T[]>
        ): TResult | undefined;

        /**
        * @see _.reduceRight
        **/
        reduceRight<T, TResult>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            callback: MemoListIterator<T, TResult, List<T>>
        ): TResult | undefined;

        /**
        * @see _.reduceRight
        **/
        reduceRight<T extends object, TResult>(
            this: LoDashImplicitWrapper<T | null | undefined>,
            callback: MemoObjectIterator<T[keyof T], TResult, T>
        ): TResult | undefined;

        /**
        * @see _.reduceRight
        **/
        reduceRight<T, TResult>(
            this: LoDashImplicitWrapper<NumericDictionary<T> | null | undefined>,
            callback: MemoListIterator<T, TResult, NumericDictionary<T>>
        ): TResult | undefined;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
        * @see _.reduceRight
        **/
        reduceRight<T, TResult>(
            this: LoDashExplicitWrapper<T[] | null | undefined>,
            callback: MemoListIterator<T, TResult, T[]>,
            accumulator: TResult
        ): LoDashExplicitWrapper<TResult>;

        /**
        * @see _.reduceRight
        **/
        reduceRight<T, TResult>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            callback: MemoListIterator<T, TResult, List<T>>,
            accumulator: TResult
        ): LoDashExplicitWrapper<TResult>;

        /**
        * @see _.reduceRight
        **/
        reduceRight<T extends object, TResult>(
            this: LoDashExplicitWrapper<T | null | undefined>,
            callback: MemoObjectIterator<T[keyof T], TResult, T>,
            accumulator: TResult
        ): LoDashExplicitWrapper<TResult>;

        /**
        * @see _.reduceRight
        **/
        reduceRight<T, TResult>(
            this: LoDashExplicitWrapper<NumericDictionary<T> | null | undefined>,
            callback: MemoListIterator<T, TResult, NumericDictionary<T>>,
            accumulator: TResult
        ): LoDashExplicitWrapper<TResult>;

        /**
        * @see _.reduceRight
        **/
        reduceRight<T, TResult>(
            this: LoDashExplicitWrapper<T[] | null | undefined>,
            callback: MemoListIterator<T, TResult, T[]>
        ): LoDashExplicitWrapper<TResult | undefined>;

        /**
        * @see _.reduceRight
        **/
        reduceRight<T, TResult>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            callback: MemoListIterator<T, TResult, List<T>>
        ): LoDashExplicitWrapper<TResult | undefined>;

        /**
        * @see _.reduceRight
        **/
        reduceRight<T extends object, TResult>(
            this: LoDashExplicitWrapper<T | null | undefined>,
            callback: MemoObjectIterator<T[keyof T], TResult, T>
        ): LoDashExplicitWrapper<TResult | undefined>;

        /**
         * @see _.reduceRight
         **/
        reduceRight<T, TResult>(
            this: LoDashExplicitWrapper<NumericDictionary<T> | null | undefined>,
            callback: MemoListIterator<T, TResult, NumericDictionary<T>>
        ): LoDashExplicitWrapper<TResult | undefined>;
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
        reject(
            collection: string | null | undefined,
            predicate?: StringIterator<boolean>
        ): string[];

        /**
         * @see _.reject
         */
        reject<T>(
            collection: List<T> | null | undefined,
            predicate?: ListIterateeCustom<T, boolean>
        ): T[];

        /**
         * @see _.reject
         */
        reject<T extends object>(
            collection: T | null | undefined,
            predicate?: ObjectIterateeCustom<T, boolean>
        ): Array<T[keyof T]>;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.reject
         */
        reject(
            this: LoDashImplicitWrapper<string | null | undefined>,
            predicate?: StringIterator<boolean>
        ): LoDashImplicitWrapper<string[]>;

        /**
         * @see _.reject
         */
        reject<T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            predicate?: ListIterateeCustom<T, boolean>
        ): LoDashImplicitWrapper<T[]>;

        /**
         * @see _.reject
         */
        reject<T extends object>(
            this: LoDashImplicitWrapper<T | null | undefined>,
            predicate?: ObjectIterateeCustom<T, boolean>
        ): LoDashImplicitWrapper<Array<T[keyof T]>>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.reject
         */
        reject(
            this: LoDashExplicitWrapper<string | null | undefined>,
            predicate?: StringIterator<boolean>
        ): LoDashExplicitWrapper<string[]>;

        /**
         * @see _.reject
         */
        reject<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            predicate?: ListIterateeCustom<T, boolean>
        ): LoDashExplicitWrapper<T[]>;

        /**
         * @see _.reject
         */
        reject<T extends object>(
            this: LoDashExplicitWrapper<T | null | undefined>,
            predicate?: ObjectIterateeCustom<T, boolean>
        ): LoDashExplicitWrapper<Array<T[keyof T]>>;
    }

    //_.sample
    interface LoDashStatic {
        /**
         * Gets a random element from collection.
         *
         * @param collection The collection to sample.
         * @return Returns the random element.
         */
        sample<T>(
            collection: List<T> | Dictionary<T> | NumericDictionary<T> | null | undefined
        ): T | undefined;

        /**
         * @see _.sample
         */
        sample<T extends object>(
            collection: T
        ): T[keyof T];

        /**
         * @see _.sample
         */
        sample<T extends object>(
            collection: T | null | undefined
        ): T[keyof T] | undefined;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.sample
         */
        sample<T>(
            this: LoDashImplicitWrapper<List<T> | Dictionary<T> | NumericDictionary<T> | null | undefined>
        ): T | undefined;

        /**
         * @see _.sample
         */
        sample<T extends object>(
            this: LoDashImplicitWrapper<T>,
        ): T[keyof T];

        /**
         * @see _.sample
         */
        sample<T extends object>(
            this: LoDashImplicitWrapper<T | null | undefined>
        ): T[keyof T] | undefined;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.sample
         */
        sample<T>(
            this: LoDashExplicitWrapper<List<T> | Dictionary<T> | NumericDictionary<T> | null | undefined>
        ): LoDashExplicitWrapper<T | undefined>;

        /**
         * @see _.sample
         */
        sample<T extends object>(
            this: LoDashExplicitWrapper<T>,
        ): LoDashExplicitWrapper<T[keyof T]>;

        /**
         * @see _.sample
         */
        sample<T extends object>(
            this: LoDashExplicitWrapper<T | null | undefined>
        ): LoDashExplicitWrapper<T[keyof T] | undefined>;
    }

    //_.sampleSize
    interface LoDashStatic {
        /**
         * Gets n random elements at unique keys from collection up to the size of collection.
         *
         * @param collection The collection to sample.
         * @param n The number of elements to sample.
         * @return Returns the random elements.
         */
        sampleSize<T>(
            collection: List<T>|Dictionary<T>|NumericDictionary<T> | null | undefined,
            n?: number
        ): T[];

        /**
         * @see _.sampleSize
         */
        sampleSize<T extends object>(
            collection: T | null | undefined,
            n?: number
        ): Array<T[keyof T]>;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.sampleSize
         */
        sampleSize<T>(
            this: LoDashImplicitWrapper<List<T>|Dictionary<T>|NumericDictionary<T> | null | undefined>,
            n?: number
        ): LoDashImplicitWrapper<T[]>;

        /**
         * @see _.sampleSize
         */
        sampleSize<T extends object>(
            this: LoDashImplicitWrapper<T | null | undefined>,
            n?: number
        ): LoDashImplicitWrapper<Array<T[keyof T]>>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.sampleSize
         */
        sampleSize<T>(
            this: LoDashExplicitWrapper<List<T>|Dictionary<T>|NumericDictionary<T> | null | undefined>,
            n?: number
        ): LoDashExplicitWrapper<T[]>;

        /**
         * @see _.sampleSize
         */
        sampleSize<T extends object>(
            this: LoDashExplicitWrapper<T | null | undefined>,
            n?: number
        ): LoDashExplicitWrapper<Array<T[keyof T]>>;
    }

    //_.shuffle
    interface LoDashStatic {
        /**
         * Creates an array of shuffled values, using a version of the Fisher-Yates shuffle.
         *
         * @param collection The collection to shuffle.
         * @return Returns the new shuffled array.
         */
        shuffle<T>(collection: List<T> | null | undefined): T[];

        /**
         * @see _.shuffle
         */
        shuffle<T extends object>(collection: T | null | undefined): Array<T[keyof T]>;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.shuffle
         */
        shuffle<T>(this: LoDashImplicitWrapper<List<T> | null | undefined>): LoDashImplicitWrapper<T[]>;

        /**
         * @see _.shuffle
         */
        shuffle<T extends object>(this: LoDashImplicitWrapper<T | null | undefined>): LoDashImplicitWrapper<Array<T[keyof T]>>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.shuffle
         */
        shuffle<T>(this: LoDashExplicitWrapper<List<T> | null | undefined>): LoDashExplicitWrapper<T[]>;

        /**
         * @see _.shuffle
         */
        shuffle<T extends object>(this: LoDashExplicitWrapper<T | null | undefined>): LoDashExplicitWrapper<Array<T[keyof T]>>;
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
        size(collection: object | string | null | undefined): number;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.size
         */
        size(): number;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.size
         */
        size(): LoDashExplicitWrapper<number>;
    }

    //_.some
    interface LoDashStatic {
        /**
         * Checks if predicate returns truthy for any element of collection. Iteration is stopped once predicate
         * returns truthy. The predicate is invoked with three arguments: (value, index|key, collection).
         *
         * @param collection The collection to iterate over.
         * @param predicate The function invoked per iteration.
         * @return Returns true if any element passes the predicate check, else false.
         */
        some<T>(
            collection: List<T> | null | undefined,
            predicate?: ListIterateeCustom<T, boolean>
        ): boolean;

        /**
         * @see _.some
         */
        some<T extends object>(
            collection: T | null | undefined,
            predicate?: ObjectIterateeCustom<T, boolean>
        ): boolean;

        /**
         * @see _.some
         */
        some<T>(
            collection: NumericDictionary<T> | null | undefined,
            predicate?: NumericDictionaryIterateeCustom<T, boolean>
        ): boolean;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.some
         */
        some<T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            predicate?: ListIterateeCustom<T, boolean>
        ): boolean;

        /**
         * @see _.some
         */
        some<T extends object>(
            this: LoDashImplicitWrapper<T | null | undefined>,
            predicate?: ObjectIterateeCustom<T, boolean>
        ): boolean;

        /**
         * @see _.some
         */
        some<T>(
            this: LoDashImplicitWrapper<NumericDictionary<T> | null | undefined>,
            predicate?: NumericDictionaryIterateeCustom<T, boolean>
        ): boolean;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.some
         */
        some<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            predicate?: ListIterateeCustom<T, boolean>
        ): LoDashExplicitWrapper<boolean>;

        /**
         * @see _.some
         */
        some<T extends object>(
            this: LoDashExplicitWrapper<T | null | undefined>,
            predicate?: ObjectIterateeCustom<T, boolean>
        ): LoDashExplicitWrapper<boolean>;

        /**
         * @see _.some
         */
        some<T>(
            this: LoDashExplicitWrapper<NumericDictionary<T> | null | undefined>,
            predicate?: NumericDictionaryIterateeCustom<T, boolean>
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
         * @category Collection
         * @param collection The collection to iterate over.
         * @param [iteratees=[_.identity]]
         *  The iteratees to sort by, specified individually or in arrays.
         * @returns Returns the new sorted array.
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
        sortBy<T>(
            collection: List<T> | null | undefined,
            ...iteratees: Array<Many<ListIteratee<T>>>
        ): T[];

        /**
         * @see _.sortBy
         */
        sortBy<T extends object>(
            collection: T | null | undefined,
            ...iteratees: Array<Many<ObjectIteratee<T>>>
        ): Array<T[keyof T]>;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.sortBy
         */
        sortBy<T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            ...iteratees: Array<Many<ListIteratee<T>>>
        ): LoDashImplicitWrapper<T[]>;

        /**
         * @see _.sortBy
         */
        sortBy<T extends object>(
            this: LoDashImplicitWrapper<T | null | undefined>,
            ...iteratees: Array<Many<ObjectIteratee<T>>>
        ): LoDashImplicitWrapper<Array<T[keyof T]>>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.sortBy
         */
        sortBy<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            ...iteratees: Array<Many<ListIteratee<T>>>
        ): LoDashExplicitWrapper<T[]>;

        /**
         * @see _.sortBy
         */
        sortBy<T extends object>(
            this: LoDashExplicitWrapper<T | null | undefined>,
            ...iteratees: Array<Many<ObjectIteratee<T>>>
        ): LoDashExplicitWrapper<Array<T[keyof T]>>;
    }

    //_.orderBy
    interface LoDashStatic {
        /**
         * This method is like `_.sortBy` except that it allows specifying the sort
         * orders of the iteratees to sort by. If `orders` is unspecified, all values
         * are sorted in ascending order. Otherwise, specify an order of "desc" for
         * descending or "asc" for ascending sort order of corresponding values.
         *
         * @category Collection
         * @param collection The collection to iterate over.
         * @param [iteratees=[_.identity]] The iteratees to sort by.
         * @param [orders] The sort orders of `iteratees`.
         * @param- {Object} [guard] Enables use as an iteratee for functions like `_.reduce`.
         * @returns Returns the new sorted array.
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
        orderBy<T>(
            collection: List<T> | null | undefined,
            iteratees?: Many<ListIterator<T, NotVoid>>,
            orders?: Many<boolean|string>
        ): T[];

        /**
         * @see _.orderBy
         */
        orderBy<T>(
            collection: List<T> | null | undefined,
            iteratees?: Many<ListIteratee<T>>,
            orders?: Many<boolean|string>
        ): T[];

        /**
         * @see _.orderBy
         */
        orderBy<T extends object>(
            collection: T | null | undefined,
            iteratees?: Many<ObjectIterator<T, NotVoid>>,
            orders?: Many<boolean|string>
        ): Array<T[keyof T]>;

        /**
         * @see _.orderBy
         */
        orderBy<T extends object>(
            collection: T | null | undefined,
            iteratees?: Many<ObjectIteratee<T>>,
            orders?: Many<boolean|string>
        ): Array<T[keyof T]>;

        /**
         * @see _.orderBy
         */
        orderBy<T>(
            collection: NumericDictionary<T> | null | undefined,
            iteratees?: Many<NumericDictionaryIterator<T, NotVoid>>,
            orders?: Many<boolean|string>
        ): T[];

        /**
         * @see _.orderBy
         */
        orderBy<T>(
            collection: NumericDictionary<T> | null | undefined,
            iteratees?: Many<NumericDictionaryIteratee<T>>,
            orders?: Many<boolean|string>
        ): T[];
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.orderBy
         */
        orderBy<T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            iteratees?: Many<ListIterator<T, NotVoid>>,
            orders?: Many<boolean|string>
        ): LoDashImplicitWrapper<T[]>;

        /**
         * @see _.orderBy
         */
        orderBy<T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            iteratees?: Many<ListIteratee<T>>,
            orders?: Many<boolean|string>
        ): LoDashImplicitWrapper<T[]>;

        /**
         * @see _.orderBy
         */
        orderBy<T extends object>(
            this: LoDashImplicitWrapper<T | null | undefined>,
            iteratees?: Many<ObjectIterator<T, NotVoid>>,
            orders?: Many<boolean|string>
        ): LoDashImplicitWrapper<Array<T[keyof T]>>;

        /**
         * @see _.orderBy
         */
        orderBy<T extends object>(
            this: LoDashImplicitWrapper<T | null | undefined>,
            iteratees?: Many<ObjectIteratee<T>>,
            orders?: Many<boolean|string>
        ): LoDashImplicitWrapper<Array<T[keyof T]>>;

        /**
         * @see _.orderBy
         */
        orderBy<T>(
            this: LoDashImplicitWrapper<NumericDictionary<T> | null | undefined>,
            iteratees?: Many<NumericDictionaryIterator<T, NotVoid>>,
            orders?: Many<boolean|string>
        ): LoDashImplicitWrapper<T[]>;

        /**
         * @see _.orderBy
         */
        orderBy<T>(
            this: LoDashImplicitWrapper<NumericDictionary<T> | null | undefined>,
            iteratees?: Many<NumericDictionaryIteratee<T>>,
            orders?: Many<boolean|string>
        ): LoDashImplicitWrapper<T[]>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.orderBy
         */
        orderBy<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            iteratees?: Many<ListIterator<T, NotVoid>>,
            orders?: Many<boolean|string>
        ): LoDashExplicitWrapper<T[]>;

        /**
         * @see _.orderBy
         */
        orderBy<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            iteratees?: Many<ListIteratee<T>>,
            orders?: Many<boolean|string>
        ): LoDashExplicitWrapper<T[]>;

        /**
         * @see _.orderBy
         */
        orderBy<T extends object>(
            this: LoDashExplicitWrapper<T | null | undefined>,
            iteratees?: Many<ObjectIterator<T, NotVoid>>,
            orders?: Many<boolean|string>
        ): LoDashExplicitWrapper<Array<T[keyof T]>>;

        /**
         * @see _.orderBy
         */
        orderBy<T extends object>(
            this: LoDashExplicitWrapper<T | null | undefined>,
            iteratees?: Many<ObjectIteratee<T>>,
            orders?: Many<boolean|string>
        ): LoDashExplicitWrapper<Array<T[keyof T]>>;

        /**
         * @see _.orderBy
         */
        orderBy<T>(
            this: LoDashExplicitWrapper<NumericDictionary<T> | null | undefined>,
            iteratees?: Many<NumericDictionaryIterator<T, NotVoid>>,
            orders?: Many<boolean|string>
        ): LoDashExplicitWrapper<T[]>;

        /**
         * @see _.orderBy
         */
        orderBy<T>(
            this: LoDashExplicitWrapper<NumericDictionary<T> | null | undefined>,
            iteratees?: Many<NumericDictionaryIteratee<T>>,
            orders?: Many<boolean|string>
        ): LoDashExplicitWrapper<T[]>;
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

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.now
         */
        now(): number;
    }

    interface LoDashExplicitWrapper<TValue> {
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
        after<TFunc extends (...args: any[]) => any>(
            n: number,
            func: TFunc
        ): TFunc;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
        * @see _.after
        **/
        after<TFunc extends (...args: any[]) => any>(func: TFunc): LoDashImplicitWrapper<TFunc>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.after
         **/
        after<TFunc extends (...args: any[]) => any>(func: TFunc): LoDashExplicitWrapper<TFunc>;
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
        ary(
            func: (...args: any[]) => any,
            n?: number
        ): (...args: any[]) => any;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.ary
         */
        ary(n?: number): LoDashImplicitWrapper<(...args: any[]) => any>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.ary
         */
        ary(n?: number): LoDashExplicitWrapper<(...args: any[]) => any>;
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
        before<TFunc extends (...args: any[]) => any>(
            n: number,
            func: TFunc
        ): TFunc;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.before
         **/
        before<TFunc extends (...args: any[]) => any>(func: TFunc): LoDashImplicitWrapper<TFunc>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.before
         **/
        before<TFunc extends (...args: any[]) => any>(func: TFunc): LoDashExplicitWrapper<TFunc>;
    }

    //_.bind
    interface FunctionBind {
        placeholder: any;

        (
            func: (...args: any[]) => any,
            thisArg: any,
            ...partials: any[]
        ): (...args: any[]) => any;
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

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.bind
         */
        bind(
            thisArg: any,
            ...partials: any[]
        ): LoDashImplicitWrapper<(...args: any[]) => any>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.bind
         */
        bind(
            thisArg: any,
            ...partials: any[]
        ): LoDashExplicitWrapper<(...args: any[]) => any>;
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
            ...methodNames: Array<Many<string>>
        ): T;
    }

    interface LoDashWrapper<TValue> {
        /**
         * @see _.bindAll
         */
        bindAll(...methodNames: Array<Many<string>>): this;
    }

    //_.bindKey
    interface FunctionBindKey {
        placeholder: any;

        (
            object: object,
            key: string,
            ...partials: any[]
        ): (...args: any[]) => any;
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

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.bindKey
         */
        bindKey(
            key: string,
            ...partials: any[]
        ): LoDashImplicitWrapper<(...args: any[]) => any>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.bindKey
         */
        bindKey(
            key: string,
            ...partials: any[]
        ): LoDashExplicitWrapper<(...args: any[]) => any>;
    }

    //_.curry
    interface LoDashStatic {
        /**
         * Creates a function that accepts one or more arguments of func that when called either invokes func returning
         * its result, if all func arguments have been provided, or returns a function that accepts one or more of the
         * remaining func arguments, and so on. The arity of func may be specified if func.length is not sufficient.
         * @param func The function to curry.
         * @param arity The arity of func.
         * @return Returns the new curried function.
         */
        curry<T1, R>(func: (t1: T1) => R, arity?: number):
            CurriedFunction1<T1, R>;
        /**
         * Creates a function that accepts one or more arguments of func that when called either invokes func returning
         * its result, if all func arguments have been provided, or returns a function that accepts one or more of the
         * remaining func arguments, and so on. The arity of func may be specified if func.length is not sufficient.
         * @param func The function to curry.
         * @param arity The arity of func.
         * @return Returns the new curried function.
         */
        curry<T1, T2, R>(func: (t1: T1, t2: T2) => R, arity?: number):
            CurriedFunction2<T1, T2, R>;
        /**
         * Creates a function that accepts one or more arguments of func that when called either invokes func returning
         * its result, if all func arguments have been provided, or returns a function that accepts one or more of the
         * remaining func arguments, and so on. The arity of func may be specified if func.length is not sufficient.
         * @param func The function to curry.
         * @param arity The arity of func.
         * @return Returns the new curried function.
         */
        curry<T1, T2, T3, R>(func: (t1: T1, t2: T2, t3: T3) => R, arity?: number):
            CurriedFunction3<T1, T2, T3, R>;
        /**
         * Creates a function that accepts one or more arguments of func that when called either invokes func returning
         * its result, if all func arguments have been provided, or returns a function that accepts one or more of the
         * remaining func arguments, and so on. The arity of func may be specified if func.length is not sufficient.
         * @param func The function to curry.
         * @param arity The arity of func.
         * @return Returns the new curried function.
         */
        curry<T1, T2, T3, T4, R>(func: (t1: T1, t2: T2, t3: T3, t4: T4) => R, arity?: number):
            CurriedFunction4<T1, T2, T3, T4, R>;
        /**
         * Creates a function that accepts one or more arguments of func that when called either invokes func returning
         * its result, if all func arguments have been provided, or returns a function that accepts one or more of the
         * remaining func arguments, and so on. The arity of func may be specified if func.length is not sufficient.
         * @param func The function to curry.
         * @param arity The arity of func.
         * @return Returns the new curried function.
         */
        curry<T1, T2, T3, T4, T5, R>(func: (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5) => R, arity?: number):
            CurriedFunction5<T1, T2, T3, T4, T5, R>;
        /**
         * Creates a function that accepts one or more arguments of func that when called either invokes func returning
         * its result, if all func arguments have been provided, or returns a function that accepts one or more of the
         * remaining func arguments, and so on. The arity of func may be specified if func.length is not sufficient.
         * @param func The function to curry.
         * @param arity The arity of func.
         * @return Returns the new curried function.
         */
        curry(func: (...args: any[]) => any, arity?: number): (...args: any[]) => any;
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
    interface RightCurriedFunction1<T1, R> {
        (): RightCurriedFunction1<T1, R>;
        (t1: T1): R;
    }
    interface RightCurriedFunction2<T1, T2, R> {
        (): RightCurriedFunction2<T1, T2, R>;
        (t2: T2): RightCurriedFunction1<T1, R>;
        (t1: T1, t2: T2): R;
    }
    interface RightCurriedFunction3<T1, T2, T3, R> {
        (): RightCurriedFunction3<T1, T2, T3, R>;
        (t3: T3): RightCurriedFunction2<T1, T2, R>;
        (t2: T2, t3: T3): RightCurriedFunction1<T1, R>;
        (t1: T1, t2: T2, t3: T3): R;
    }
    interface RightCurriedFunction4<T1, T2, T3, T4, R> {
        (): RightCurriedFunction4<T1, T2, T3, T4, R>;
        (t4: T4): RightCurriedFunction3<T1, T2, T3, R>;
        (t3: T3, t4: T4): RightCurriedFunction2<T1, T2, R>;
        (t2: T2, t3: T3, t4: T4): RightCurriedFunction1<T1, R>;
        (t1: T1, t2: T2, t3: T3, t4: T4): R;
    }
    interface RightCurriedFunction5<T1, T2, T3, T4, T5, R> {
        (): RightCurriedFunction5<T1, T2, T3, T4, T5, R>;
        (t5: T5): RightCurriedFunction4<T1, T2, T3, T4, R>;
        (t4: T4, t5: T5): RightCurriedFunction3<T1, T2, T3, R>;
        (t3: T3, t4: T4, t5: T5): RightCurriedFunction2<T1, T2, R>;
        (t2: T2, t3: T3, t4: T4, t5: T5): RightCurriedFunction1<T1, R>;
        (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5): R;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
        * @see _.curry
        **/
        curry<T1, R>(this: LoDashImplicitWrapper<(t1: T1) => R>, arity?: number):
            LoDashImplicitWrapper<CurriedFunction1<T1, R>>;

        /**
        * @see _.curry
        **/
        curry<T1, T2, R>(this: LoDashImplicitWrapper<(t1: T1, t2: T2) => R>, arity?: number):
            LoDashImplicitWrapper<CurriedFunction2<T1, T2, R>>;

        /**
        * @see _.curry
        **/
        curry<T1, T2, T3, R>(this: LoDashImplicitWrapper<(t1: T1, t2: T2, t3: T3) => R>, arity?: number):
            LoDashImplicitWrapper<CurriedFunction3<T1, T2, T3, R>>;

        /**
        * @see _.curry
        **/
        curry<T1, T2, T3, T4, R>(this: LoDashImplicitWrapper<(t1: T1, t2: T2, t3: T3, t4: T4) => R>, arity?: number):
            LoDashImplicitWrapper<CurriedFunction4<T1, T2, T3, T4, R>>;

        /**
        * @see _.curry
        **/
        curry<T1, T2, T3, T4, T5, R>(this: LoDashImplicitWrapper<(t1: T1, t2: T2, t3: T3, t4: T4, t5: T5) => R>, arity?: number):
            LoDashImplicitWrapper<CurriedFunction5<T1, T2, T3, T4, T5, R>>;

        /**
        * @see _.curry
        **/
        curry(arity?: number): LoDashImplicitWrapper<(...args: any[]) => any>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
        * @see _.curry
        **/
        curry<T1, R>(this: LoDashExplicitWrapper<(t1: T1) => R>):
            LoDashExplicitWrapper<CurriedFunction1<T1, R>>;

        /**
        * @see _.curry
        **/
        curry<T1, T2, R>(this: LoDashExplicitWrapper<(t1: T1, t2: T2) => R>):
            LoDashExplicitWrapper<CurriedFunction2<T1, T2, R>>;

        /**
        * @see _.curry
        **/
        curry<T1, T2, T3, R>(this: LoDashExplicitWrapper<(t1: T1, t2: T2, t3: T3) => R>):
            LoDashExplicitWrapper<CurriedFunction3<T1, T2, T3, R>>;

        /**
        * @see _.curry
        **/
        curry<T1, T2, T3, T4, R>(this: LoDashExplicitWrapper<(t1: T1, t2: T2, t3: T3, t4: T4) => R>):
            LoDashExplicitWrapper<CurriedFunction4<T1, T2, T3, T4, R>>;

        /**
        * @see _.curry
        **/
        curry<T1, T2, T3, T4, T5, R>(this: LoDashExplicitWrapper<(t1: T1, t2: T2, t3: T3, t4: T4, t5: T5) => R>):
            LoDashExplicitWrapper<CurriedFunction5<T1, T2, T3, T4, T5, R>>;

        /**
        * @see _.curry
        **/
        curry(arity?: number): LoDashExplicitWrapper<(...args: any[]) => any>;
    }

    //_.curryRight
    interface LoDashStatic {
        /**
         * This method is like _.curry except that arguments are applied to func in the manner of _.partialRight
         * instead of _.partial.
         * @param func The function to curry.
         * @param arity The arity of func.
         * @return Returns the new curried function.
         */
        curryRight<T1, R>(func: (t1: T1) => R, arity?: number):
            RightCurriedFunction1<T1, R>;
        /**
         * This method is like _.curry except that arguments are applied to func in the manner of _.partialRight
         * instead of _.partial.
         * @param func The function to curry.
         * @param arity The arity of func.
         * @return Returns the new curried function.
         */
        curryRight<T1, T2, R>(func: (t1: T1, t2: T2) => R, arity?: number):
            RightCurriedFunction2<T1, T2, R>;
        /**
         * This method is like _.curry except that arguments are applied to func in the manner of _.partialRight
         * instead of _.partial.
         * @param func The function to curry.
         * @param arity The arity of func.
         * @return Returns the new curried function.
         */
        curryRight<T1, T2, T3, R>(func: (t1: T1, t2: T2, t3: T3) => R, arity?: number):
            RightCurriedFunction3<T1, T2, T3, R>;
        /**
         * This method is like _.curry except that arguments are applied to func in the manner of _.partialRight
         * instead of _.partial.
         * @param func The function to curry.
         * @param arity The arity of func.
         * @return Returns the new curried function.
         */
        curryRight<T1, T2, T3, T4, R>(func: (t1: T1, t2: T2, t3: T3, t4: T4) => R, arity?: number):
            RightCurriedFunction4<T1, T2, T3, T4, R>;
        /**
         * This method is like _.curry except that arguments are applied to func in the manner of _.partialRight
         * instead of _.partial.
         * @param func The function to curry.
         * @param arity The arity of func.
         * @return Returns the new curried function.
         */
        curryRight<T1, T2, T3, T4, T5, R>(func: (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5) => R, arity?: number):
            RightCurriedFunction5<T1, T2, T3, T4, T5, R>;
        /**
         * This method is like _.curry except that arguments are applied to func in the manner of _.partialRight
         * instead of _.partial.
         * @param func The function to curry.
         * @param arity The arity of func.
         * @return Returns the new curried function.
         */
        curryRight(func: (...args: any[]) => any, arity?: number): (...args: any[]) => any;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.curryRight
         **/
        curryRight<T1, R>(this: LoDashImplicitWrapper<(t1: T1) => R>, arity?: number):
            LoDashImplicitWrapper<RightCurriedFunction1<T1, R>>;

        /**
         * @see _.curryRight
         **/
        curryRight<T1, T2, R>(this: LoDashImplicitWrapper<(t1: T1, t2: T2) => R>, arity?: number):
            LoDashImplicitWrapper<RightCurriedFunction2<T1, T2, R>>;

        /**
         * @see _.curryRight
         **/
        curryRight<T1, T2, T3, R>(this: LoDashImplicitWrapper<(t1: T1, t2: T2, t3: T3) => R>, arity?: number):
            LoDashImplicitWrapper<RightCurriedFunction3<T1, T2, T3, R>>;

        /**
         * @see _.curryRight
         **/
        curryRight<T1, T2, T3, T4, R>(this: LoDashImplicitWrapper<(t1: T1, t2: T2, t3: T3, t4: T4) => R>, arity?: number):
            LoDashImplicitWrapper<RightCurriedFunction4<T1, T2, T3, T4, R>>;

        /**
         * @see _.curryRight
         **/
        curryRight<T1, T2, T3, T4, T5, R>(this: LoDashImplicitWrapper<(t1: T1, t2: T2, t3: T3, t4: T4, t5: T5) => R>, arity?: number):
            LoDashImplicitWrapper<RightCurriedFunction5<T1, T2, T3, T4, T5, R>>;

        /**
         * @see _.curryRight
         **/
        curryRight(arity?: number): LoDashImplicitWrapper<(...args: any[]) => any>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.curryRight
         **/
        curryRight<T1, R>(this: LoDashExplicitWrapper<(t1: T1) => R>, arity?: number):
            LoDashExplicitWrapper<RightCurriedFunction1<T1, R>>;

        /**
         * @see _.curryRight
         **/
        curryRight<T1, T2, R>(this: LoDashExplicitWrapper<(t1: T1, t2: T2) => R>, arity?: number):
            LoDashExplicitWrapper<RightCurriedFunction2<T1, T2, R>>;

        /**
         * @see _.curryRight
         **/
        curryRight<T1, T2, T3, R>(this: LoDashExplicitWrapper<(t1: T1, t2: T2, t3: T3) => R>, arity?: number):
            LoDashExplicitWrapper<RightCurriedFunction3<T1, T2, T3, R>>;

        /**
         * @see _.curryRight
         **/
        curryRight<T1, T2, T3, T4, R>(this: LoDashExplicitWrapper<(t1: T1, t2: T2, t3: T3, t4: T4) => R>, arity?: number):
            LoDashExplicitWrapper<RightCurriedFunction4<T1, T2, T3, T4, R>>;

        /**
         * @see _.curryRight
         **/
        curryRight<T1, T2, T3, T4, T5, R>(this: LoDashExplicitWrapper<(t1: T1, t2: T2, t3: T3, t4: T4, t5: T5) => R>, arity?: number):
            LoDashExplicitWrapper<RightCurriedFunction5<T1, T2, T3, T4, T5, R>>;

        /**
         * @see _.curryRight
         **/
        curryRight(arity?: number): LoDashExplicitWrapper<(...args: any[]) => any>;
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
         * @param options The options object.
         * @param options.leading Specify invoking on the leading edge of the timeout.
         * @param options.maxWait The maximum time func is allowed to be delayed before it’s invoked.
         * @param options.trailing Specify invoking on the trailing edge of the timeout.
         * @return Returns the new debounced function.
         */
        debounce<T extends (...args: any[]) => any>(
            func: T,
            wait?: number,
            options?: DebounceSettings
        ): T & Cancelable;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.debounce
         */
        debounce(
            wait?: number,
            options?: DebounceSettings
        ): LoDashImplicitWrapper<TValue & Cancelable>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.debounce
         */
        debounce(
            wait?: number,
            options?: DebounceSettings
        ): LoDashExplicitWrapper<TValue & Cancelable>;
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
        defer(
            func: (...args: any[]) => any,
            ...args: any[]
        ): number;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.defer
         */
        defer(...args: any[]): LoDashImplicitWrapper<number>;
    }

    interface LoDashExplicitWrapper<TValue> {
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
        delay(
            func: (...args: any[]) => any,
            wait: number,
            ...args: any[]
        ): number;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.delay
         */
        delay(
            wait: number,
            ...args: any[]
        ): LoDashImplicitWrapper<number>;
    }

    interface LoDashExplicitWrapper<TValue> {
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
         * @category Function
         * @param func The function to flip arguments for.
         * @returns Returns the new function.
         * @example
         *
         * var flipped = _.flip(function() {
         *   return _.toArray(arguments);
         * });
         *
         * flipped('a', 'b', 'c', 'd');
         * // => ['d', 'c', 'b', 'a']
         */
        flip<T extends (...args: any[]) => any>(func: T): T;
    }

    interface LoDashWrapper<TValue> {
        /**
         * @see _.flip
         */
        flip(): this;
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
        // 0-argument first function
        flow<R1, R2>(f1: () => R1, f2: (a: R1) => R2): () => R2;
        flow<R1, R2, R3>(f1: () => R1, f2: (a: R1) => R2, f3: (a: R2) => R3): () => R3;
        flow<R1, R2, R3, R4>(f1: () => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4): () => R4;
        flow<R1, R2, R3, R4, R5>(f1: () => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5): () => R5;
        flow<R1, R2, R3, R4, R5, R6>(f1: () => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6): () => R6;
        flow<R1, R2, R3, R4, R5, R6, R7>(f1: () => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7): () => R7;
        flow<R1, R2, R3, R4, R5, R6, R7>(f1: () => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7, ...funcs: Array<Many<(a: any) => any>>): () => any;
        // 1-argument first function
        flow<A1, R1, R2>(f1: (a1: A1) => R1, f2: (a: R1) => R2): (a1: A1) => R2;
        flow<A1, R1, R2, R3>(f1: (a1: A1) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3): (a1: A1) => R3;
        flow<A1, R1, R2, R3, R4>(f1: (a1: A1) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4): (a1: A1) => R4;
        flow<A1, R1, R2, R3, R4, R5>(f1: (a1: A1) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5): (a1: A1) => R5;
        flow<A1, R1, R2, R3, R4, R5, R6>(f1: (a1: A1) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6): (a1: A1) => R6;
        flow<A1, R1, R2, R3, R4, R5, R6, R7>(f1: (a1: A1) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7): (a1: A1) => R7;
        flow<A1, R1, R2, R3, R4, R5, R6, R7>(f1: (a1: A1) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7, ...funcs: Array<Many<(a: any) => any>>): (a1: A1) => any;
        // 2-argument first function
        flow<A1, A2, R1, R2>(f1: (a1: A1, a2: A2) => R1, f2: (a: R1) => R2): (a1: A1, a2: A2) => R2;
        flow<A1, A2, R1, R2, R3>(f1: (a1: A1, a2: A2) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3): (a1: A1, a2: A2) => R3;
        flow<A1, A2, R1, R2, R3, R4>(f1: (a1: A1, a2: A2) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4): (a1: A1, a2: A2) => R4;
        flow<A1, A2, R1, R2, R3, R4, R5>(f1: (a1: A1, a2: A2) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5): (a1: A1, a2: A2) => R5;
        flow<A1, A2, R1, R2, R3, R4, R5, R6>(f1: (a1: A1, a2: A2) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6): (a1: A1, a2: A2) => R6;
        flow<A1, A2, R1, R2, R3, R4, R5, R6, R7>(f1: (a1: A1, a2: A2) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7): (a1: A1, a2: A2) => R7;
        flow<A1, A2, R1, R2, R3, R4, R5, R6, R7>(f1: (a1: A1, a2: A2) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7, ...funcs: Array<Many<(a: any) => any>>): (a1: A1, a2: A2) => any;
        // 3-argument first function
        flow<A1, A2, A3, R1, R2>(f1: (a1: A1, a2: A2, a3: A3) => R1, f2: (a: R1) => R2): (a1: A1, a2: A2, a3: A3) => R2;
        flow<A1, A2, A3, R1, R2, R3>(f1: (a1: A1, a2: A2, a3: A3) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3): (a1: A1, a2: A2, a3: A3) => R3;
        flow<A1, A2, A3, R1, R2, R3, R4>(f1: (a1: A1, a2: A2, a3: A3) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4): (a1: A1, a2: A2, a3: A3) => R4;
        flow<A1, A2, A3, R1, R2, R3, R4, R5>(f1: (a1: A1, a2: A2, a3: A3) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5): (a1: A1, a2: A2, a3: A3) => R5;
        flow<A1, A2, A3, R1, R2, R3, R4, R5, R6>(f1: (a1: A1, a2: A2, a3: A3) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6): (a1: A1, a2: A2, a3: A3) => R6;
        flow<A1, A2, A3, R1, R2, R3, R4, R5, R6, R7>(f1: (a1: A1, a2: A2, a3: A3) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7): (a1: A1, a2: A2, a3: A3) => R7;
        flow<A1, A2, A3, R1, R2, R3, R4, R5, R6, R7>(f1: (a1: A1, a2: A2, a3: A3) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7, ...funcs: Array<Many<(a: any) => any>>): (a1: A1, a2: A2, a3: A3) => any;
        // 4-argument first function
        flow<A1, A2, A3, A4, R1, R2>(f1: (a1: A1, a2: A2, a3: A3, a4: A4) => R1, f2: (a: R1) => R2): (a1: A1, a2: A2, a3: A3, a4: A4) => R2;
        flow<A1, A2, A3, A4, R1, R2, R3>(f1: (a1: A1, a2: A2, a3: A3, a4: A4) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3): (a1: A1, a2: A2, a3: A3, a4: A4) => R3;
        flow<A1, A2, A3, A4, R1, R2, R3, R4>(f1: (a1: A1, a2: A2, a3: A3, a4: A4) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4): (a1: A1, a2: A2, a3: A3, a4: A4) => R4;
        flow<A1, A2, A3, A4, R1, R2, R3, R4, R5>(f1: (a1: A1, a2: A2, a3: A3, a4: A4) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5): (a1: A1, a2: A2, a3: A3, a4: A4) => R5;
        flow<A1, A2, A3, A4, R1, R2, R3, R4, R5, R6>(f1: (a1: A1, a2: A2, a3: A3, a4: A4) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6): (a1: A1, a2: A2, a3: A3, a4: A4) => R6;
        flow<A1, A2, A3, A4, R1, R2, R3, R4, R5, R6, R7>(f1: (a1: A1, a2: A2, a3: A3, a4: A4) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7): (a1: A1, a2: A2, a3: A3, a4: A4) => R7;
        flow<A1, A2, A3, A4, R1, R2, R3, R4, R5, R6, R7>(f1: (a1: A1, a2: A2, a3: A3, a4: A4) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7, ...funcs: Array<Many<(a: any) => any>>): (a1: A1, a2: A2, a3: A3, a4: A4) => any;
        // any-argument first function
        flow<A1, A2, A3, A4, R1, R2>(f1: (a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R1, f2: (a: R1) => R2): (a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R2;
        flow<A1, A2, A3, A4, R1, R2, R3>(f1: (a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3): (a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R3;
        flow<A1, A2, A3, A4, R1, R2, R3, R4>(f1: (a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4): (a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R4;
        flow<A1, A2, A3, A4, R1, R2, R3, R4, R5>(f1: (a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5): (a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R5;
        flow<A1, A2, A3, A4, R1, R2, R3, R4, R5, R6>(f1: (a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6): (a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R6;
        flow<A1, A2, A3, A4, R1, R2, R3, R4, R5, R6, R7>(f1: (a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7): (a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R7;
        flow<A1, A2, A3, A4, R1, R2, R3, R4, R5, R6, R7>(f1: (a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7, ...funcs: Array<Many<(a: any) => any>>): (a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => any;
        flow(funcs: Array<Many<(...args: any[]) => any>>): (...args: any[]) => any;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.flow
         */
        // 0-argument first function
        flow<R1, R2>(this: LoDashImplicitWrapper<() => R1>, f2: (a: R1) => R2): LoDashImplicitWrapper<() => R2>;
        flow<R1, R2, R3>(this: LoDashImplicitWrapper<() => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3): LoDashImplicitWrapper<() => R3>;
        flow<R1, R2, R3, R4>(this: LoDashImplicitWrapper<() => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4): LoDashImplicitWrapper<() => R4>;
        flow<R1, R2, R3, R4, R5>(this: LoDashImplicitWrapper<() => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5): LoDashImplicitWrapper<() => R5>;
        flow<R1, R2, R3, R4, R5, R6>(this: LoDashImplicitWrapper<() => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6): LoDashImplicitWrapper<() => R6>;
        flow<R1, R2, R3, R4, R5, R6, R7>(this: LoDashImplicitWrapper<() => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7): LoDashImplicitWrapper<() => R7>;
        flow<R1, R2, R3, R4, R5, R6, R7>(this: LoDashImplicitWrapper<() => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7, ...funcs: Array<Many<(a: any) => any>>): LoDashImplicitWrapper<() => any>;
        // 1-argument first function
        flow<A1, R1, R2>(this: LoDashImplicitWrapper<(a1: A1) => R1>, f2: (a: R1) => R2): LoDashImplicitWrapper<(a1: A1) => R2>;
        flow<A1, R1, R2, R3>(this: LoDashImplicitWrapper<(a1: A1) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3): LoDashImplicitWrapper<(a1: A1) => R3>;
        flow<A1, R1, R2, R3, R4>(this: LoDashImplicitWrapper<(a1: A1) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4): LoDashImplicitWrapper<(a1: A1) => R4>;
        flow<A1, R1, R2, R3, R4, R5>(this: LoDashImplicitWrapper<(a1: A1) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5): LoDashImplicitWrapper<(a1: A1) => R5>;
        flow<A1, R1, R2, R3, R4, R5, R6>(this: LoDashImplicitWrapper<(a1: A1) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6): LoDashImplicitWrapper<(a1: A1) => R6>;
        flow<A1, R1, R2, R3, R4, R5, R6, R7>(this: LoDashImplicitWrapper<(a1: A1) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7): LoDashImplicitWrapper<(a1: A1) => R7>;
        flow<A1, R1, R2, R3, R4, R5, R6, R7>(this: LoDashImplicitWrapper<(a1: A1) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7, ...funcs: Array<Many<(a: any) => any>>): LoDashImplicitWrapper<(a1: A1) => any>;
        // 2-argument first function
        flow<A1, A2, R1, R2>(this: LoDashImplicitWrapper<(a1: A1, a2: A2) => R1>, f2: (a: R1) => R2): LoDashImplicitWrapper<(a1: A1, a2: A2) => R2>;
        flow<A1, A2, R1, R2, R3>(this: LoDashImplicitWrapper<(a1: A1, a2: A2) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3): LoDashImplicitWrapper<(a1: A1, a2: A2) => R3>;
        flow<A1, A2, R1, R2, R3, R4>(this: LoDashImplicitWrapper<(a1: A1, a2: A2) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4): LoDashImplicitWrapper<(a1: A1, a2: A2) => R4>;
        flow<A1, A2, R1, R2, R3, R4, R5>(this: LoDashImplicitWrapper<(a1: A1, a2: A2) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5): LoDashImplicitWrapper<(a1: A1, a2: A2) => R5>;
        flow<A1, A2, R1, R2, R3, R4, R5, R6>(this: LoDashImplicitWrapper<(a1: A1, a2: A2) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6): LoDashImplicitWrapper<(a1: A1, a2: A2) => R6>;
        flow<A1, A2, R1, R2, R3, R4, R5, R6, R7>(this: LoDashImplicitWrapper<(a1: A1, a2: A2) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7): LoDashImplicitWrapper<(a1: A1, a2: A2) => R7>;
        flow<A1, A2, R1, R2, R3, R4, R5, R6, R7>(this: LoDashImplicitWrapper<(a1: A1, a2: A2) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7, ...funcs: Array<Many<(a: any) => any>>): LoDashImplicitWrapper<(a1: A1, a2: A2) => any>;
        // 3-argument first function
        flow<A1, A2, A3, R1, R2>(this: LoDashImplicitWrapper<(a1: A1, a2: A2, a3: A3) => R1>, f2: (a: R1) => R2): LoDashImplicitWrapper<(a1: A1, a2: A2, a3: A3) => R2>;
        flow<A1, A2, A3, R1, R2, R3>(this: LoDashImplicitWrapper<(a1: A1, a2: A2, a3: A3) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3): LoDashImplicitWrapper<(a1: A1, a2: A2, a3: A3) => R3>;
        flow<A1, A2, A3, R1, R2, R3, R4>(this: LoDashImplicitWrapper<(a1: A1, a2: A2, a3: A3) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4): LoDashImplicitWrapper<(a1: A1, a2: A2, a3: A3) => R4>;
        flow<A1, A2, A3, R1, R2, R3, R4, R5>(this: LoDashImplicitWrapper<(a1: A1, a2: A2, a3: A3) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5): LoDashImplicitWrapper<(a1: A1, a2: A2, a3: A3) => R5>;
        flow<A1, A2, A3, R1, R2, R3, R4, R5, R6>(this: LoDashImplicitWrapper<(a1: A1, a2: A2, a3: A3) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6): LoDashImplicitWrapper<(a1: A1, a2: A2, a3: A3) => R6>;
        flow<A1, A2, A3, R1, R2, R3, R4, R5, R6, R7>(this: LoDashImplicitWrapper<(a1: A1, a2: A2, a3: A3) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7): LoDashImplicitWrapper<(a1: A1, a2: A2, a3: A3) => R7>;
        flow<A1, A2, A3, R1, R2, R3, R4, R5, R6, R7>(this: LoDashImplicitWrapper<(a1: A1, a2: A2, a3: A3) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7, ...funcs: Array<Many<(a: any) => any>>): LoDashImplicitWrapper<(a1: A1, a2: A2, a3: A3) => any>;
        // 4-argument first function
        flow<A1, A2, A3, A4, R1, R2>(this: LoDashImplicitWrapper<(a1: A1, a2: A2, a3: A3, a4: A4) => R1>, f2: (a: R1) => R2): LoDashImplicitWrapper<(a1: A1, a2: A2, a3: A3, a4: A4) => R2>;
        flow<A1, A2, A3, A4, R1, R2, R3>(this: LoDashImplicitWrapper<(a1: A1, a2: A2, a3: A3, a4: A4) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3): LoDashImplicitWrapper<(a1: A1, a2: A2, a3: A3, a4: A4) => R3>;
        flow<A1, A2, A3, A4, R1, R2, R3, R4>(this: LoDashImplicitWrapper<(a1: A1, a2: A2, a3: A3, a4: A4) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4): LoDashImplicitWrapper<(a1: A1, a2: A2, a3: A3, a4: A4) => R4>;
        flow<A1, A2, A3, A4, R1, R2, R3, R4, R5>(this: LoDashImplicitWrapper<(a1: A1, a2: A2, a3: A3, a4: A4) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5): LoDashImplicitWrapper<(a1: A1, a2: A2, a3: A3, a4: A4) => R5>;
        flow<A1, A2, A3, A4, R1, R2, R3, R4, R5, R6>(this: LoDashImplicitWrapper<(a1: A1, a2: A2, a3: A3, a4: A4) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6): LoDashImplicitWrapper<(a1: A1, a2: A2, a3: A3, a4: A4) => R6>;
        flow<A1, A2, A3, A4, R1, R2, R3, R4, R5, R6, R7>(this: LoDashImplicitWrapper<(a1: A1, a2: A2, a3: A3, a4: A4) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7): LoDashImplicitWrapper<(a1: A1, a2: A2, a3: A3, a4: A4) => R7>;
        flow<A1, A2, A3, A4, R1, R2, R3, R4, R5, R6, R7>(this: LoDashImplicitWrapper<(a1: A1, a2: A2, a3: A3, a4: A4) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7, ...funcs: Array<Many<(a: any) => any>>): LoDashImplicitWrapper<(a1: A1, a2: A2, a3: A3, a4: A4) => any>;
        // any-argument first function
        flow<A1, A2, A3, A4, R1, R2>(this: LoDashImplicitWrapper<(a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R1>, f2: (a: R1) => R2): LoDashImplicitWrapper<(a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R2>;
        flow<A1, A2, A3, A4, R1, R2, R3>(this: LoDashImplicitWrapper<(a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3): LoDashImplicitWrapper<(a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R3>;
        flow<A1, A2, A3, A4, R1, R2, R3, R4>(this: LoDashImplicitWrapper<(a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4): LoDashImplicitWrapper<(a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R4>;
        flow<A1, A2, A3, A4, R1, R2, R3, R4, R5>(this: LoDashImplicitWrapper<(a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5): LoDashImplicitWrapper<(a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R5>;
        flow<A1, A2, A3, A4, R1, R2, R3, R4, R5, R6>(this: LoDashImplicitWrapper<(a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6): LoDashImplicitWrapper<(a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R6>;
        flow<A1, A2, A3, A4, R1, R2, R3, R4, R5, R6, R7>(this: LoDashImplicitWrapper<(a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7): LoDashImplicitWrapper<(a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R7>;
        flow<A1, A2, A3, A4, R1, R2, R3, R4, R5, R6, R7>(this: LoDashImplicitWrapper<(a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7, ...funcs: Array<Many<(a: any) => any>>): LoDashImplicitWrapper<(a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => any>;
        flow(this: LoDashImplicitWrapper<(...args: any[]) => any>, funcs: Array<Many<(a: any) => any>>): LoDashImplicitWrapper<(...args: any[]) => any>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.flow
         */
        // 0-argument first function
        flow<R1, R2>(this: LoDashExplicitWrapper<() => R1>, f2: (a: R1) => R2): LoDashExplicitWrapper<() => R2>;
        flow<R1, R2, R3>(this: LoDashExplicitWrapper<() => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3): LoDashExplicitWrapper<() => R3>;
        flow<R1, R2, R3, R4>(this: LoDashExplicitWrapper<() => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4): LoDashExplicitWrapper<() => R4>;
        flow<R1, R2, R3, R4, R5>(this: LoDashExplicitWrapper<() => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5): LoDashExplicitWrapper<() => R5>;
        flow<R1, R2, R3, R4, R5, R6>(this: LoDashExplicitWrapper<() => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6): LoDashExplicitWrapper<() => R6>;
        flow<R1, R2, R3, R4, R5, R6, R7>(this: LoDashExplicitWrapper<() => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7): LoDashExplicitWrapper<() => R7>;
        flow<R1, R2, R3, R4, R5, R6, R7>(this: LoDashExplicitWrapper<() => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7, ...funcs: Array<Many<(a: any) => any>>): LoDashExplicitWrapper<() => any>;
        // 1-argument first function
        flow<A1, R1, R2>(this: LoDashExplicitWrapper<(a1: A1) => R1>, f2: (a: R1) => R2): LoDashExplicitWrapper<(a1: A1) => R2>;
        flow<A1, R1, R2, R3>(this: LoDashExplicitWrapper<(a1: A1) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3): LoDashExplicitWrapper<(a1: A1) => R3>;
        flow<A1, R1, R2, R3, R4>(this: LoDashExplicitWrapper<(a1: A1) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4): LoDashExplicitWrapper<(a1: A1) => R4>;
        flow<A1, R1, R2, R3, R4, R5>(this: LoDashExplicitWrapper<(a1: A1) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5): LoDashExplicitWrapper<(a1: A1) => R5>;
        flow<A1, R1, R2, R3, R4, R5, R6>(this: LoDashExplicitWrapper<(a1: A1) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6): LoDashExplicitWrapper<(a1: A1) => R6>;
        flow<A1, R1, R2, R3, R4, R5, R6, R7>(this: LoDashExplicitWrapper<(a1: A1) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7): LoDashExplicitWrapper<(a1: A1) => R7>;
        flow<A1, R1, R2, R3, R4, R5, R6, R7>(this: LoDashExplicitWrapper<(a1: A1) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7, ...funcs: Array<Many<(a: any) => any>>): LoDashExplicitWrapper<(a1: A1) => any>;
        // 2-argument first function
        flow<A1, A2, R1, R2>(this: LoDashExplicitWrapper<(a1: A1, a2: A2) => R1>, f2: (a: R1) => R2): LoDashExplicitWrapper<(a1: A1, a2: A2) => R2>;
        flow<A1, A2, R1, R2, R3>(this: LoDashExplicitWrapper<(a1: A1, a2: A2) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3): LoDashExplicitWrapper<(a1: A1, a2: A2) => R3>;
        flow<A1, A2, R1, R2, R3, R4>(this: LoDashExplicitWrapper<(a1: A1, a2: A2) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4): LoDashExplicitWrapper<(a1: A1, a2: A2) => R4>;
        flow<A1, A2, R1, R2, R3, R4, R5>(this: LoDashExplicitWrapper<(a1: A1, a2: A2) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5): LoDashExplicitWrapper<(a1: A1, a2: A2) => R5>;
        flow<A1, A2, R1, R2, R3, R4, R5, R6>(this: LoDashExplicitWrapper<(a1: A1, a2: A2) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6): LoDashExplicitWrapper<(a1: A1, a2: A2) => R6>;
        flow<A1, A2, R1, R2, R3, R4, R5, R6, R7>(this: LoDashExplicitWrapper<(a1: A1, a2: A2) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7): LoDashExplicitWrapper<(a1: A1, a2: A2) => R7>;
        flow<A1, A2, R1, R2, R3, R4, R5, R6, R7>(this: LoDashExplicitWrapper<(a1: A1, a2: A2) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7, ...funcs: Array<Many<(a: any) => any>>): LoDashExplicitWrapper<(a1: A1, a2: A2) => any>;
        // 3-argument first function
        flow<A1, A2, A3, R1, R2>(this: LoDashExplicitWrapper<(a1: A1, a2: A2, a3: A3) => R1>, f2: (a: R1) => R2): LoDashExplicitWrapper<(a1: A1, a2: A2, a3: A3) => R2>;
        flow<A1, A2, A3, R1, R2, R3>(this: LoDashExplicitWrapper<(a1: A1, a2: A2, a3: A3) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3): LoDashExplicitWrapper<(a1: A1, a2: A2, a3: A3) => R3>;
        flow<A1, A2, A3, R1, R2, R3, R4>(this: LoDashExplicitWrapper<(a1: A1, a2: A2, a3: A3) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4): LoDashExplicitWrapper<(a1: A1, a2: A2, a3: A3) => R4>;
        flow<A1, A2, A3, R1, R2, R3, R4, R5>(this: LoDashExplicitWrapper<(a1: A1, a2: A2, a3: A3) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5): LoDashExplicitWrapper<(a1: A1, a2: A2, a3: A3) => R5>;
        flow<A1, A2, A3, R1, R2, R3, R4, R5, R6>(this: LoDashExplicitWrapper<(a1: A1, a2: A2, a3: A3) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6): LoDashExplicitWrapper<(a1: A1, a2: A2, a3: A3) => R6>;
        flow<A1, A2, A3, R1, R2, R3, R4, R5, R6, R7>(this: LoDashExplicitWrapper<(a1: A1, a2: A2, a3: A3) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7): LoDashExplicitWrapper<(a1: A1, a2: A2, a3: A3) => R7>;
        flow<A1, A2, A3, R1, R2, R3, R4, R5, R6, R7>(this: LoDashExplicitWrapper<(a1: A1, a2: A2, a3: A3) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7, ...funcs: Array<Many<(a: any) => any>>): LoDashExplicitWrapper<(a1: A1, a2: A2, a3: A3) => any>;
        // 4-argument first function
        flow<A1, A2, A3, A4, R1, R2>(this: LoDashExplicitWrapper<(a1: A1, a2: A2, a3: A3, a4: A4) => R1>, f2: (a: R1) => R2): LoDashExplicitWrapper<(a1: A1, a2: A2, a3: A3, a4: A4) => R2>;
        flow<A1, A2, A3, A4, R1, R2, R3>(this: LoDashExplicitWrapper<(a1: A1, a2: A2, a3: A3, a4: A4) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3): LoDashExplicitWrapper<(a1: A1, a2: A2, a3: A3, a4: A4) => R3>;
        flow<A1, A2, A3, A4, R1, R2, R3, R4>(this: LoDashExplicitWrapper<(a1: A1, a2: A2, a3: A3, a4: A4) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4): LoDashExplicitWrapper<(a1: A1, a2: A2, a3: A3, a4: A4) => R4>;
        flow<A1, A2, A3, A4, R1, R2, R3, R4, R5>(this: LoDashExplicitWrapper<(a1: A1, a2: A2, a3: A3, a4: A4) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5): LoDashExplicitWrapper<(a1: A1, a2: A2, a3: A3, a4: A4) => R5>;
        flow<A1, A2, A3, A4, R1, R2, R3, R4, R5, R6>(this: LoDashExplicitWrapper<(a1: A1, a2: A2, a3: A3, a4: A4) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6): LoDashExplicitWrapper<(a1: A1, a2: A2, a3: A3, a4: A4) => R6>;
        flow<A1, A2, A3, A4, R1, R2, R3, R4, R5, R6, R7>(this: LoDashExplicitWrapper<(a1: A1, a2: A2, a3: A3, a4: A4) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7): LoDashExplicitWrapper<(a1: A1, a2: A2, a3: A3, a4: A4) => R7>;
        flow<A1, A2, A3, A4, R1, R2, R3, R4, R5, R6, R7>(this: LoDashExplicitWrapper<(a1: A1, a2: A2, a3: A3, a4: A4) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7, ...funcs: Array<Many<(a: any) => any>>): LoDashExplicitWrapper<(a1: A1, a2: A2, a3: A3, a4: A4) => any>;
        // any-argument first function
        flow<A1, A2, A3, A4, R1, R2>(this: LoDashExplicitWrapper<(a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R1>, f2: (a: R1) => R2): LoDashExplicitWrapper<(a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R2>;
        flow<A1, A2, A3, A4, R1, R2, R3>(this: LoDashExplicitWrapper<(a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3): LoDashExplicitWrapper<(a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R3>;
        flow<A1, A2, A3, A4, R1, R2, R3, R4>(this: LoDashExplicitWrapper<(a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4): LoDashExplicitWrapper<(a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R4>;
        flow<A1, A2, A3, A4, R1, R2, R3, R4, R5>(this: LoDashExplicitWrapper<(a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5): LoDashExplicitWrapper<(a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R5>;
        flow<A1, A2, A3, A4, R1, R2, R3, R4, R5, R6>(this: LoDashExplicitWrapper<(a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6): LoDashExplicitWrapper<(a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R6>;
        flow<A1, A2, A3, A4, R1, R2, R3, R4, R5, R6, R7>(this: LoDashExplicitWrapper<(a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7): LoDashExplicitWrapper<(a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R7>;
        flow<A1, A2, A3, A4, R1, R2, R3, R4, R5, R6, R7>(this: LoDashExplicitWrapper<(a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7, ...funcs: Array<Many<(a: any) => any>>): LoDashExplicitWrapper<(a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => any>;
        flow(this: LoDashExplicitWrapper<(...args: any[]) => any>, funcs: Array<Many<(a: any) => any>>): LoDashExplicitWrapper<(...args: any[]) => any>;
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
        // 0-argument first function
        flowRight<R2, R1>(f2: (a: R1) => R2, f1: () => R1): () => R2;
        flowRight<R3, R2, R1>(f3: (a: R2) => R3, f2: (a: R1) => R2, f1: () => R1): () => R3;
        flowRight<R4, R3, R2, R1>(f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: () => R1): () => R4;
        flowRight<R5, R4, R3, R2, R1>(f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: () => R1): () => R5;
        flowRight<R6, R5, R4, R3, R2, R1>(f6: (a: R5) => R6, f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: () => R1): () => R6;
        flowRight<R7, R6, R5, R4, R3, R2, R1>(f7: (a: R6) => R7, f6: (a: R5) => R6, f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: () => R1): () => R7;
        // 1-argument first function
        flowRight<A1, R2, R1>(f2: (a: R1) => R2, f1: (a1: A1) => R1): (a1: A1) => R2;
        flowRight<A1, R3, R2, R1>(f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1) => R1): (a1: A1) => R3;
        flowRight<A1, R4, R3, R2, R1>(f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1) => R1): (a1: A1) => R4;
        flowRight<A1, R5, R4, R3, R2, R1>(f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1) => R1): (a1: A1) => R5;
        flowRight<A1, R6, R5, R4, R3, R2, R1>(f6: (a: R5) => R6, f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1) => R1): (a1: A1) => R6;
        flowRight<A1, R7, R6, R5, R4, R3, R2, R1>(f7: (a: R6) => R7, f6: (a: R5) => R6, f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1) => R1): (a1: A1) => R7;
        // 2-argument first function
        flowRight<A1, A2, R2, R1>(f2: (a: R1) => R2, f1: (a1: A1, a2: A2) => R1): (a1: A1, a2: A2) => R2;
        flowRight<A1, A2, R3, R2, R1>(f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1, a2: A2) => R1): (a1: A1, a2: A2) => R3;
        flowRight<A1, A2, R4, R3, R2, R1>(f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1, a2: A2) => R1): (a1: A1, a2: A2) => R4;
        flowRight<A1, A2, R5, R4, R3, R2, R1>(f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1, a2: A2) => R1): (a1: A1, a2: A2) => R5;
        flowRight<A1, A2, R6, R5, R4, R3, R2, R1>(f6: (a: R5) => R6, f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1, a2: A2) => R1): (a1: A1, a2: A2) => R6;
        flowRight<A1, A2, R7, R6, R5, R4, R3, R2, R1>(f7: (a: R6) => R7, f6: (a: R5) => R6, f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1, a2: A2) => R1): (a1: A1, a2: A2) => R7;
        // 3-argument first function
        flowRight<A1, A2, A3, R2, R1>(f2: (a: R1) => R2, f1: (a1: A1, a2: A2, a3: A3) => R1): (a1: A1, a2: A2, a3: A3) => R2;
        flowRight<A1, A2, A3, R3, R2, R1>(f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1, a2: A2, a3: A3) => R1): (a1: A1, a2: A2, a3: A3) => R3;
        flowRight<A1, A2, A3, R4, R3, R2, R1>(f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1, a2: A2, a3: A3) => R1): (a1: A1, a2: A2, a3: A3) => R4;
        flowRight<A1, A2, A3, R5, R4, R3, R2, R1>(f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1, a2: A2, a3: A3) => R1): (a1: A1, a2: A2, a3: A3) => R5;
        flowRight<A1, A2, A3, R6, R5, R4, R3, R2, R1>(f6: (a: R5) => R6, f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1, a2: A2, a3: A3) => R1): (a1: A1, a2: A2, a3: A3) => R6;
        flowRight<A1, A2, A3, R7, R6, R5, R4, R3, R2, R1>(f7: (a: R6) => R7, f6: (a: R5) => R6, f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1, a2: A2, a3: A3) => R1): (a1: A1, a2: A2, a3: A3) => R7;
        // 4-argument first function
        flowRight<A1, A2, A3, A4, R2, R1>(f2: (a: R1) => R2, f1: (a1: A1, a2: A2, a3: A3, a4: A4) => R1): (a1: A1, a2: A2, a3: A3, a4: A4) => R2;
        flowRight<A1, A2, A3, A4, R3, R2, R1>(f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1, a2: A2, a3: A3, a4: A4) => R1): (a1: A1, a2: A2, a3: A3, a4: A4) => R3;
        flowRight<A1, A2, A3, A4, R4, R3, R2, R1>(f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1, a2: A2, a3: A3, a4: A4) => R1): (a1: A1, a2: A2, a3: A3, a4: A4) => R4;
        flowRight<A1, A2, A3, A4, R5, R4, R3, R2, R1>(f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1, a2: A2, a3: A3, a4: A4) => R1): (a1: A1, a2: A2, a3: A3, a4: A4) => R5;
        flowRight<A1, A2, A3, A4, R6, R5, R4, R3, R2, R1>(f6: (a: R5) => R6, f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1, a2: A2, a3: A3, a4: A4) => R1): (a1: A1, a2: A2, a3: A3, a4: A4) => R6;
        flowRight<A1, A2, A3, A4, R7, R6, R5, R4, R3, R2, R1>(f7: (a: R6) => R7, f6: (a: R5) => R6, f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1, a2: A2, a3: A3, a4: A4) => R1): (a1: A1, a2: A2, a3: A3, a4: A4) => R7;
        // any-argument first function
        flowRight<R2, R1>(f2: (a: R1) => R2, f1: (...args: any[]) => R1): (...args: any[]) => R2;
        flowRight<R3, R2, R1>(f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (...args: any[]) => R1): (...args: any[]) => R3;
        flowRight<R4, R3, R2, R1>(f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (...args: any[]) => R1): (...args: any[]) => R4;
        flowRight<R5, R4, R3, R2, R1>(f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (...args: any[]) => R1): (...args: any[]) => R5;
        flowRight<R6, R5, R4, R3, R2, R1>(f6: (a: R5) => R6, f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (...args: any[]) => R1): (...args: any[]) => R6;
        flowRight<R7, R6, R5, R4, R3, R2, R1>(f7: (a: R6) => R7, f6: (a: R5) => R6, f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (...args: any[]) => R1): (...args: any[]) => R7;
        flowRight(f7: (a: any) => any, f6: (a: any) => any, f5: (a: any) => any, f4: (a: any) => any, f3: (a: any) => any, f2: (a: any) => any, f1: () => any, ...funcs: Array<Many<(...args: any[]) => any>>): (...args: any[]) => any;
        flowRight(funcs: Array<Many<(...args: any[]) => any>>): (...args: any[]) => any;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.flowRight
         */
        // 0-argument first function
        flowRight<R2, R1>(this: LoDashImplicitWrapper<(a: R1) => R2>, f1: () => R1): LoDashImplicitWrapper<() => R2>;
        flowRight<R3, R2, R1>(this: LoDashImplicitWrapper<(a: R2) => R3>, f2: (a: R1) => R2, f1: () => R1): LoDashImplicitWrapper<() => R3>;
        flowRight<R4, R3, R2, R1>(this: LoDashImplicitWrapper<(a: R3) => R4>, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: () => R1): LoDashImplicitWrapper<() => R4>;
        flowRight<R5, R4, R3, R2, R1>(this: LoDashImplicitWrapper<(a: R4) => R5>, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: () => R1): LoDashImplicitWrapper<() => R5>;
        flowRight<R6, R5, R4, R3, R2, R1>(this: LoDashImplicitWrapper<(a: R5) => R6>, f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: () => R1): LoDashImplicitWrapper<() => R6>;
        flowRight<R7, R6, R5, R4, R3, R2, R1>(this: LoDashImplicitWrapper<(a: R6) => R7>, f6: (a: R5) => R6, f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: () => R1): LoDashImplicitWrapper<() => R7>;
        // 1-argument first function
        flowRight<A1, R2, R1>(this: LoDashImplicitWrapper<(a: R1) => R2>, f1: (a1: A1) => R1): LoDashImplicitWrapper<(a1: A1) => R2>;
        flowRight<A1, R3, R2, R1>(this: LoDashImplicitWrapper<(a: R2) => R3>, f2: (a: R1) => R2, f1: (a1: A1) => R1): LoDashImplicitWrapper<(a1: A1) => R3>;
        flowRight<A1, R4, R3, R2, R1>(this: LoDashImplicitWrapper<(a: R3) => R4>, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1) => R1): LoDashImplicitWrapper<(a1: A1) => R4>;
        flowRight<A1, R5, R4, R3, R2, R1>(this: LoDashImplicitWrapper<(a: R4) => R5>, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1) => R1): LoDashImplicitWrapper<(a1: A1) => R5>;
        flowRight<A1, R6, R5, R4, R3, R2, R1>(this: LoDashImplicitWrapper<(a: R5) => R6>, f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1) => R1): LoDashImplicitWrapper<(a1: A1) => R6>;
        flowRight<A1, R7, R6, R5, R4, R3, R2, R1>(this: LoDashImplicitWrapper<(a: R6) => R7>, f6: (a: R5) => R6, f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1) => R1): LoDashImplicitWrapper<(a1: A1) => R7>;
        // 2-argument first function
        flowRight<A1, A2, R2, R1>(this: LoDashImplicitWrapper<(a: R1) => R2>, f1: (a1: A1, a2: A2) => R1): LoDashImplicitWrapper<(a1: A1, a2: A2) => R2>;
        flowRight<A1, A2, R3, R2, R1>(this: LoDashImplicitWrapper<(a: R2) => R3>, f2: (a: R1) => R2, f1: (a1: A1, a2: A2) => R1): LoDashImplicitWrapper<(a1: A1, a2: A2) => R3>;
        flowRight<A1, A2, R4, R3, R2, R1>(this: LoDashImplicitWrapper<(a: R3) => R4>, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1, a2: A2) => R1): LoDashImplicitWrapper<(a1: A1, a2: A2) => R4>;
        flowRight<A1, A2, R5, R4, R3, R2, R1>(this: LoDashImplicitWrapper<(a: R4) => R5>, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1, a2: A2) => R1): LoDashImplicitWrapper<(a1: A1, a2: A2) => R5>;
        flowRight<A1, A2, R6, R5, R4, R3, R2, R1>(this: LoDashImplicitWrapper<(a: R5) => R6>, f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1, a2: A2) => R1): LoDashImplicitWrapper<(a1: A1, a2: A2) => R6>;
        flowRight<A1, A2, R7, R6, R5, R4, R3, R2, R1>(this: LoDashImplicitWrapper<(a: R6) => R7>, f6: (a: R5) => R6, f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1, a2: A2) => R1): LoDashImplicitWrapper<(a1: A1, a2: A2) => R7>;
        // 3-argument first function
        flowRight<A1, A2, A3, R2, R1>(this: LoDashImplicitWrapper<(a: R1) => R2>, f1: (a1: A1, a2: A2, a3: A3) => R1): LoDashImplicitWrapper<(a1: A1, a2: A2, a3: A3) => R2>;
        flowRight<A1, A2, A3, R3, R2, R1>(this: LoDashImplicitWrapper<(a: R2) => R3>, f2: (a: R1) => R2, f1: (a1: A1, a2: A2, a3: A3) => R1): LoDashImplicitWrapper<(a1: A1, a2: A2, a3: A3) => R3>;
        flowRight<A1, A2, A3, R4, R3, R2, R1>(this: LoDashImplicitWrapper<(a: R3) => R4>, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1, a2: A2, a3: A3) => R1): LoDashImplicitWrapper<(a1: A1, a2: A2, a3: A3) => R4>;
        flowRight<A1, A2, A3, R5, R4, R3, R2, R1>(this: LoDashImplicitWrapper<(a: R4) => R5>, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1, a2: A2, a3: A3) => R1): LoDashImplicitWrapper<(a1: A1, a2: A2, a3: A3) => R5>;
        flowRight<A1, A2, A3, R6, R5, R4, R3, R2, R1>(this: LoDashImplicitWrapper<(a: R5) => R6>, f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1, a2: A2, a3: A3) => R1): LoDashImplicitWrapper<(a1: A1, a2: A2, a3: A3) => R6>;
        flowRight<A1, A2, A3, R7, R6, R5, R4, R3, R2, R1>(this: LoDashImplicitWrapper<(a: R6) => R7>, f6: (a: R5) => R6, f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1, a2: A2, a3: A3) => R1): LoDashImplicitWrapper<(a1: A1, a2: A2, a3: A3) => R7>;
        // 4-argument first function
        flowRight<A1, A2, A3, A4, R2, R1>(this: LoDashImplicitWrapper<(a: R1) => R2>, f1: (a1: A1, a2: A2, a3: A3, a4: A4) => R1): LoDashImplicitWrapper<(a1: A1, a2: A2, a3: A3, a4: A4) => R2>;
        flowRight<A1, A2, A3, A4, R3, R2, R1>(this: LoDashImplicitWrapper<(a: R2) => R3>, f2: (a: R1) => R2, f1: (a1: A1, a2: A2, a3: A3, a4: A4) => R1): LoDashImplicitWrapper<(a1: A1, a2: A2, a3: A3, a4: A4) => R3>;
        flowRight<A1, A2, A3, A4, R4, R3, R2, R1>(this: LoDashImplicitWrapper<(a: R3) => R4>, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1, a2: A2, a3: A3, a4: A4) => R1): LoDashImplicitWrapper<(a1: A1, a2: A2, a3: A3, a4: A4) => R4>;
        flowRight<A1, A2, A3, A4, R5, R4, R3, R2, R1>(this: LoDashImplicitWrapper<(a: R4) => R5>, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1, a2: A2, a3: A3, a4: A4) => R1): LoDashImplicitWrapper<(a1: A1, a2: A2, a3: A3, a4: A4) => R5>;
        flowRight<A1, A2, A3, A4, R6, R5, R4, R3, R2, R1>(this: LoDashImplicitWrapper<(a: R5) => R6>, f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1, a2: A2, a3: A3, a4: A4) => R1): LoDashImplicitWrapper<(a1: A1, a2: A2, a3: A3, a4: A4) => R6>;
        flowRight<A1, A2, A3, A4, R7, R6, R5, R4, R3, R2, R1>(this: LoDashImplicitWrapper<(a: R6) => R7>, f6: (a: R5) => R6, f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1, a2: A2, a3: A3, a4: A4) => R1): LoDashImplicitWrapper<(a1: A1, a2: A2, a3: A3, a4: A4) => R7>;
        // any-argument first function
        flowRight<R2, R1>(this: LoDashImplicitWrapper<(a: R1) => R2>, f1: (...args: any[]) => R1): LoDashImplicitWrapper<(...args: any[]) => R2>;
        flowRight<R3, R2, R1>(this: LoDashImplicitWrapper<(a: R1) => R2>, f2: (a: R1) => R2, f1: (...args: any[]) => R1): LoDashImplicitWrapper<(...args: any[]) => R3>;
        flowRight<R4, R3, R2, R1>(this: LoDashImplicitWrapper<(a: R1) => R2>, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (...args: any[]) => R1): LoDashImplicitWrapper<(...args: any[]) => R4>;
        flowRight<R5, R4, R3, R2, R1>(this: LoDashImplicitWrapper<(a: R1) => R2>, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (...args: any[]) => R1): LoDashImplicitWrapper<(...args: any[]) => R5>;
        flowRight<R6, R5, R4, R3, R2, R1>(this: LoDashImplicitWrapper<(a: R1) => R2>, f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (...args: any[]) => R1): LoDashImplicitWrapper<(...args: any[]) => R6>;
        flowRight<R7, R6, R5, R4, R3, R2, R1>(this: LoDashImplicitWrapper<(a: R1) => R2>, f6: (a: R5) => R6, f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (...args: any[]) => R1): LoDashImplicitWrapper<(...args: any[]) => R7>;
        flowRight(this: LoDashImplicitWrapper<(a: any) => any>, f6: (a: any) => any, f5: (a: any) => any, f4: (a: any) => any, f3: (a: any) => any, f2: (a: any) => any, f1: () => any, ...funcs: Array<Many<(...args: any[]) => any>>): LoDashImplicitWrapper<(...args: any[]) => any>;
        flowRight(this: LoDashImplicitWrapper<(a: any) => any>, funcs: Array<Many<(...args: any[]) => any>>): LoDashImplicitWrapper<(...args: any[]) => any>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.flowRight
         */
        // 0-argument first function
        flowRight<R2, R1>(this: LoDashExplicitWrapper<(a: R1) => R2>, f1: () => R1): LoDashExplicitWrapper<() => R2>;
        flowRight<R3, R2, R1>(this: LoDashExplicitWrapper<(a: R2) => R3>, f2: (a: R1) => R2, f1: () => R1): LoDashExplicitWrapper<() => R3>;
        flowRight<R4, R3, R2, R1>(this: LoDashExplicitWrapper<(a: R3) => R4>, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: () => R1): LoDashExplicitWrapper<() => R4>;
        flowRight<R5, R4, R3, R2, R1>(this: LoDashExplicitWrapper<(a: R4) => R5>, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: () => R1): LoDashExplicitWrapper<() => R5>;
        flowRight<R6, R5, R4, R3, R2, R1>(this: LoDashExplicitWrapper<(a: R5) => R6>, f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: () => R1): LoDashExplicitWrapper<() => R6>;
        flowRight<R7, R6, R5, R4, R3, R2, R1>(this: LoDashExplicitWrapper<(a: R6) => R7>, f6: (a: R5) => R6, f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: () => R1): LoDashExplicitWrapper<() => R7>;
        // 1-argument first function
        flowRight<A1, R2, R1>(this: LoDashExplicitWrapper<(a: R1) => R2>, f1: (a1: A1) => R1): LoDashExplicitWrapper<(a1: A1) => R2>;
        flowRight<A1, R3, R2, R1>(this: LoDashExplicitWrapper<(a: R2) => R3>, f2: (a: R1) => R2, f1: (a1: A1) => R1): LoDashExplicitWrapper<(a1: A1) => R3>;
        flowRight<A1, R4, R3, R2, R1>(this: LoDashExplicitWrapper<(a: R3) => R4>, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1) => R1): LoDashExplicitWrapper<(a1: A1) => R4>;
        flowRight<A1, R5, R4, R3, R2, R1>(this: LoDashExplicitWrapper<(a: R4) => R5>, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1) => R1): LoDashExplicitWrapper<(a1: A1) => R5>;
        flowRight<A1, R6, R5, R4, R3, R2, R1>(this: LoDashExplicitWrapper<(a: R5) => R6>, f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1) => R1): LoDashExplicitWrapper<(a1: A1) => R6>;
        flowRight<A1, R7, R6, R5, R4, R3, R2, R1>(this: LoDashExplicitWrapper<(a: R6) => R7>, f6: (a: R5) => R6, f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1) => R1): LoDashExplicitWrapper<(a1: A1) => R7>;
        // 2-argument first function
        flowRight<A1, A2, R2, R1>(this: LoDashExplicitWrapper<(a: R1) => R2>, f1: (a1: A1, a2: A2) => R1): LoDashExplicitWrapper<(a1: A1, a2: A2) => R2>;
        flowRight<A1, A2, R3, R2, R1>(this: LoDashExplicitWrapper<(a: R2) => R3>, f2: (a: R1) => R2, f1: (a1: A1, a2: A2) => R1): LoDashExplicitWrapper<(a1: A1, a2: A2) => R3>;
        flowRight<A1, A2, R4, R3, R2, R1>(this: LoDashExplicitWrapper<(a: R3) => R4>, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1, a2: A2) => R1): LoDashExplicitWrapper<(a1: A1, a2: A2) => R4>;
        flowRight<A1, A2, R5, R4, R3, R2, R1>(this: LoDashExplicitWrapper<(a: R4) => R5>, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1, a2: A2) => R1): LoDashExplicitWrapper<(a1: A1, a2: A2) => R5>;
        flowRight<A1, A2, R6, R5, R4, R3, R2, R1>(this: LoDashExplicitWrapper<(a: R5) => R6>, f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1, a2: A2) => R1): LoDashExplicitWrapper<(a1: A1, a2: A2) => R6>;
        flowRight<A1, A2, R7, R6, R5, R4, R3, R2, R1>(this: LoDashExplicitWrapper<(a: R6) => R7>, f6: (a: R5) => R6, f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1, a2: A2) => R1): LoDashExplicitWrapper<(a1: A1, a2: A2) => R7>;
        // 3-argument first function
        flowRight<A1, A2, A3, R2, R1>(this: LoDashExplicitWrapper<(a: R1) => R2>, f1: (a1: A1, a2: A2, a3: A3) => R1): LoDashExplicitWrapper<(a1: A1, a2: A2, a3: A3) => R2>;
        flowRight<A1, A2, A3, R3, R2, R1>(this: LoDashExplicitWrapper<(a: R2) => R3>, f2: (a: R1) => R2, f1: (a1: A1, a2: A2, a3: A3) => R1): LoDashExplicitWrapper<(a1: A1, a2: A2, a3: A3) => R3>;
        flowRight<A1, A2, A3, R4, R3, R2, R1>(this: LoDashExplicitWrapper<(a: R3) => R4>, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1, a2: A2, a3: A3) => R1): LoDashExplicitWrapper<(a1: A1, a2: A2, a3: A3) => R4>;
        flowRight<A1, A2, A3, R5, R4, R3, R2, R1>(this: LoDashExplicitWrapper<(a: R4) => R5>, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1, a2: A2, a3: A3) => R1): LoDashExplicitWrapper<(a1: A1, a2: A2, a3: A3) => R5>;
        flowRight<A1, A2, A3, R6, R5, R4, R3, R2, R1>(this: LoDashExplicitWrapper<(a: R5) => R6>, f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1, a2: A2, a3: A3) => R1): LoDashExplicitWrapper<(a1: A1, a2: A2, a3: A3) => R6>;
        flowRight<A1, A2, A3, R7, R6, R5, R4, R3, R2, R1>(this: LoDashExplicitWrapper<(a: R6) => R7>, f6: (a: R5) => R6, f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1, a2: A2, a3: A3) => R1): LoDashExplicitWrapper<(a1: A1, a2: A2, a3: A3) => R7>;
        // 4-argument first function
        flowRight<A1, A2, A3, A4, R2, R1>(this: LoDashExplicitWrapper<(a: R1) => R2>, f1: (a1: A1, a2: A2, a3: A3, a4: A4) => R1): LoDashExplicitWrapper<(a1: A1, a2: A2, a3: A3, a4: A4) => R2>;
        flowRight<A1, A2, A3, A4, R3, R2, R1>(this: LoDashExplicitWrapper<(a: R2) => R3>, f2: (a: R1) => R2, f1: (a1: A1, a2: A2, a3: A3, a4: A4) => R1): LoDashExplicitWrapper<(a1: A1, a2: A2, a3: A3, a4: A4) => R3>;
        flowRight<A1, A2, A3, A4, R4, R3, R2, R1>(this: LoDashExplicitWrapper<(a: R3) => R4>, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1, a2: A2, a3: A3, a4: A4) => R1): LoDashExplicitWrapper<(a1: A1, a2: A2, a3: A3, a4: A4) => R4>;
        flowRight<A1, A2, A3, A4, R5, R4, R3, R2, R1>(this: LoDashExplicitWrapper<(a: R4) => R5>, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1, a2: A2, a3: A3, a4: A4) => R1): LoDashExplicitWrapper<(a1: A1, a2: A2, a3: A3, a4: A4) => R5>;
        flowRight<A1, A2, A3, A4, R6, R5, R4, R3, R2, R1>(this: LoDashExplicitWrapper<(a: R5) => R6>, f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1, a2: A2, a3: A3, a4: A4) => R1): LoDashExplicitWrapper<(a1: A1, a2: A2, a3: A3, a4: A4) => R6>;
        flowRight<A1, A2, A3, A4, R7, R6, R5, R4, R3, R2, R1>(this: LoDashExplicitWrapper<(a: R6) => R7>, f6: (a: R5) => R6, f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1, a2: A2, a3: A3, a4: A4) => R1): LoDashExplicitWrapper<(a1: A1, a2: A2, a3: A3, a4: A4) => R7>;
        // any-argument first function
        flowRight<R2, R1>(this: LoDashExplicitWrapper<(a: R1) => R2>, f1: (...args: any[]) => R1): LoDashExplicitWrapper<(...args: any[]) => R2>;
        flowRight<R3, R2, R1>(this: LoDashExplicitWrapper<(a: R1) => R2>, f2: (a: R1) => R2, f1: (...args: any[]) => R1): LoDashExplicitWrapper<(...args: any[]) => R3>;
        flowRight<R4, R3, R2, R1>(this: LoDashExplicitWrapper<(a: R1) => R2>, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (...args: any[]) => R1): LoDashExplicitWrapper<(...args: any[]) => R4>;
        flowRight<R5, R4, R3, R2, R1>(this: LoDashExplicitWrapper<(a: R1) => R2>, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (...args: any[]) => R1): LoDashExplicitWrapper<(...args: any[]) => R5>;
        flowRight<R6, R5, R4, R3, R2, R1>(this: LoDashExplicitWrapper<(a: R1) => R2>, f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (...args: any[]) => R1): LoDashExplicitWrapper<(...args: any[]) => R6>;
        flowRight<R7, R6, R5, R4, R3, R2, R1>(this: LoDashExplicitWrapper<(a: R1) => R2>, f6: (a: R5) => R6, f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (...args: any[]) => R1): LoDashExplicitWrapper<(...args: any[]) => R7>;
        flowRight(this: LoDashExplicitWrapper<(a: any) => any>, f6: (a: any) => any, f5: (a: any) => any, f4: (a: any) => any, f3: (a: any) => any, f2: (a: any) => any, f1: () => any, ...funcs: Array<Many<(...args: any[]) => any>>): LoDashExplicitWrapper<(...args: any[]) => any>;
        flowRight(this: LoDashExplicitWrapper<(a: any) => any>, funcs: Array<Many<(...args: any[]) => any>>): LoDashExplicitWrapper<(...args: any[]) => any>;
    }

    //_.memoize
    interface MemoizedFunction {
        cache: MapCache;
    }

    interface LoDashStatic {
        /**
         * Creates a function that memoizes the result of func. If resolver is provided it determines the cache key for
         * storing the result based on the arguments provided to the memoized function. By default, the first argument
         * provided to the memoized function is coerced to a string and used as the cache key. The func is invoked with
         * the this binding of the memoized function.
         *
         * @param func The function to have its output memoized.
         * @param resolver The function to resolve the cache key.
         * @return Returns the new memoizing function.
         */
        memoize: {
            <T extends (...args: any[]) => any>(func: T, resolver?: (...args: any[]) => any): T & MemoizedFunction;
            Cache: MapCacheConstructor;
        };
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.memoize
         */
        memoize(resolver?: (...args: any[]) => any): LoDashImplicitWrapper<TValue & MemoizedFunction>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.memoize
         */
        memoize(resolver?: (...args: any[]) => any): LoDashExplicitWrapper<TValue & MemoizedFunction>;
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
        overArgs(
            func: (...args: any[]) => any,
            ...transforms: Array<Many<(...args: any[]) => any>>
        ): (...args: any[]) => any;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.overArgs
         */
        overArgs(...transforms: Array<Many<(...args: any[]) => any>>): LoDashImplicitWrapper<(...args: any[]) => any>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.overArgs
         */
        overArgs(...transforms: Array<Many<(...args: any[]) => any>>): LoDashExplicitWrapper<(...args: any[]) => any>;
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
        negate<T extends (...args: any[]) => any>(predicate: T): T;
    }

    interface LoDashWrapper<TValue> {
        /**
         * @see _.negate
         */
        negate(): this;
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
        once<T extends (...args: any[]) => any>(func: T): T;
    }

    interface LoDashWrapper<TValue> {
        /**
         * @see _.once
         */
        once(): this;
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

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.partial
         */
        partial: ImplicitPartial;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.partial
         */
        partial: ExplicitPartial;
    }

    type PH = LoDashStatic;

    type Function0<R> = () => R;
    type Function1<T1, R> = (t1: T1) => R;
    type Function2<T1, T2, R> = (t1: T1, t2: T2) => R;
    type Function3<T1, T2, T3, R> = (t1: T1, t2: T2, t3: T3) => R;
    type Function4<T1, T2, T3, T4, R> = (t1: T1, t2: T2, t3: T3, t4: T4) => R;

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
        (func: (...args: any[]) => any, ...args: any[]): (...args: any[]) => any;
    }

    interface ImplicitPartial {
        // arity 0
        <R>(this: LoDashImplicitWrapper<Function0<R>>): LoDashImplicitWrapper<Function0<R>>;
        // arity 1
        <T1, R>(this: LoDashImplicitWrapper<Function1<T1, R>>): LoDashImplicitWrapper<Function1<T1, R>>;
        <T1, R>(this: LoDashImplicitWrapper<Function1<T1, R>>, arg1: T1): LoDashImplicitWrapper<Function0<R>>;
        // arity 2
        <T1, T2, R>(this: LoDashImplicitWrapper<Function2<T1, T2, R>>):                      LoDashImplicitWrapper<Function2<T1, T2, R>>;
        <T1, T2, R>(this: LoDashImplicitWrapper<Function2<T1, T2, R>>, arg1: T1):            LoDashImplicitWrapper<Function1<    T2, R>>;
        <T1, T2, R>(this: LoDashImplicitWrapper<Function2<T1, T2, R>>, plc1: PH, arg2: T2):  LoDashImplicitWrapper<Function1<T1,     R>>;
        <T1, T2, R>(this: LoDashImplicitWrapper<Function2<T1, T2, R>>, arg1: T1, arg2: T2):  LoDashImplicitWrapper<Function0<        R>>;
        // arity 3
        <T1, T2, T3, R>(this: LoDashImplicitWrapper<Function3<T1, T2, T3, R>>):                                LoDashImplicitWrapper<Function3<T1, T2, T3, R>>;
        <T1, T2, T3, R>(this: LoDashImplicitWrapper<Function3<T1, T2, T3, R>>, arg1: T1):                      LoDashImplicitWrapper<Function2<    T2, T3, R>>;
        <T1, T2, T3, R>(this: LoDashImplicitWrapper<Function3<T1, T2, T3, R>>, plc1: PH, arg2: T2):            LoDashImplicitWrapper<Function2<T1,     T3, R>>;
        <T1, T2, T3, R>(this: LoDashImplicitWrapper<Function3<T1, T2, T3, R>>, arg1: T1, arg2: T2):            LoDashImplicitWrapper<Function1<        T3, R>>;
        <T1, T2, T3, R>(this: LoDashImplicitWrapper<Function3<T1, T2, T3, R>>, plc1: PH, plc2: PH, arg3: T3):  LoDashImplicitWrapper<Function2<T1, T2,     R>>;
        <T1, T2, T3, R>(this: LoDashImplicitWrapper<Function3<T1, T2, T3, R>>, arg1: T1, plc2: PH, arg3: T3):  LoDashImplicitWrapper<Function1<    T2,     R>>;
        <T1, T2, T3, R>(this: LoDashImplicitWrapper<Function3<T1, T2, T3, R>>, plc1: PH, arg2: T2, arg3: T3):  LoDashImplicitWrapper<Function1<T1,         R>>;
        <T1, T2, T3, R>(this: LoDashImplicitWrapper<Function3<T1, T2, T3, R>>, arg1: T1, arg2: T2, arg3: T3):  LoDashImplicitWrapper<Function0<            R>>;
        // arity 4
        <T1, T2, T3, T4, R>(this: LoDashImplicitWrapper<Function4<T1, T2, T3, T4, R>>):                                          LoDashImplicitWrapper<Function4<T1, T2, T3, T4, R>>;
        <T1, T2, T3, T4, R>(this: LoDashImplicitWrapper<Function4<T1, T2, T3, T4, R>>, arg1: T1):                                LoDashImplicitWrapper<Function3<    T2, T3, T4, R>>;
        <T1, T2, T3, T4, R>(this: LoDashImplicitWrapper<Function4<T1, T2, T3, T4, R>>, plc1: PH, arg2: T2):                      LoDashImplicitWrapper<Function3<T1,     T3, T4, R>>;
        <T1, T2, T3, T4, R>(this: LoDashImplicitWrapper<Function4<T1, T2, T3, T4, R>>, arg1: T1, arg2: T2):                      LoDashImplicitWrapper<Function2<        T3, T4, R>>;
        <T1, T2, T3, T4, R>(this: LoDashImplicitWrapper<Function4<T1, T2, T3, T4, R>>, plc1: PH, plc2: PH, arg3: T3):            LoDashImplicitWrapper<Function3<T1, T2,     T4, R>>;
        <T1, T2, T3, T4, R>(this: LoDashImplicitWrapper<Function4<T1, T2, T3, T4, R>>, arg1: T1, plc2: PH, arg3: T3):            LoDashImplicitWrapper<Function2<    T2,     T4, R>>;
        <T1, T2, T3, T4, R>(this: LoDashImplicitWrapper<Function4<T1, T2, T3, T4, R>>, plc1: PH, arg2: T2, arg3: T3):            LoDashImplicitWrapper<Function2<T1,         T4, R>>;
        <T1, T2, T3, T4, R>(this: LoDashImplicitWrapper<Function4<T1, T2, T3, T4, R>>, arg1: T1, arg2: T2, arg3: T3):            LoDashImplicitWrapper<Function1<            T4, R>>;
        <T1, T2, T3, T4, R>(this: LoDashImplicitWrapper<Function4<T1, T2, T3, T4, R>>, plc1: PH, plc2: PH, plc3: PH, arg4: T4):  LoDashImplicitWrapper<Function3<T1, T2, T3,     R>>;
        <T1, T2, T3, T4, R>(this: LoDashImplicitWrapper<Function4<T1, T2, T3, T4, R>>, arg1: T1, plc2: PH, plc3: PH, arg4: T4):  LoDashImplicitWrapper<Function2<    T2, T3,     R>>;
        <T1, T2, T3, T4, R>(this: LoDashImplicitWrapper<Function4<T1, T2, T3, T4, R>>, plc1: PH, arg2: T2, plc3: PH, arg4: T4):  LoDashImplicitWrapper<Function2<T1,     T3,     R>>;
        <T1, T2, T3, T4, R>(this: LoDashImplicitWrapper<Function4<T1, T2, T3, T4, R>>, arg1: T1, arg2: T2, plc3: PH, arg4: T4):  LoDashImplicitWrapper<Function1<        T3,     R>>;
        <T1, T2, T3, T4, R>(this: LoDashImplicitWrapper<Function4<T1, T2, T3, T4, R>>, plc1: PH, plc2: PH, arg3: T3, arg4: T4):  LoDashImplicitWrapper<Function2<T1, T2,         R>>;
        <T1, T2, T3, T4, R>(this: LoDashImplicitWrapper<Function4<T1, T2, T3, T4, R>>, arg1: T1, plc2: PH, arg3: T3, arg4: T4):  LoDashImplicitWrapper<Function1<    T2,         R>>;
        <T1, T2, T3, T4, R>(this: LoDashImplicitWrapper<Function4<T1, T2, T3, T4, R>>, plc1: PH, arg2: T2, arg3: T3, arg4: T4):  LoDashImplicitWrapper<Function1<T1,             R>>;
        <T1, T2, T3, T4, R>(this: LoDashImplicitWrapper<Function4<T1, T2, T3, T4, R>>, arg1: T1, arg2: T2, arg3: T3, arg4: T4):  LoDashImplicitWrapper<Function0<                R>>;
        // catch-all
        (...args: any[]): LoDashImplicitWrapper<(...args: any[]) => any>;
    }

    interface ExplicitPartial {
        // arity 0
        <R>(this: LoDashExplicitWrapper<Function0<R>>): LoDashExplicitWrapper<Function0<R>>;
        // arity 1
        <T1, R>(this: LoDashExplicitWrapper<Function1<T1, R>>): LoDashExplicitWrapper<Function1<T1, R>>;
        <T1, R>(this: LoDashExplicitWrapper<Function1<T1, R>>, arg1: T1): LoDashExplicitWrapper<Function0<R>>;
        // arity 2
        <T1, T2, R>(this: LoDashExplicitWrapper<Function2<T1, T2, R>>):                      LoDashExplicitWrapper<Function2<T1, T2, R>>;
        <T1, T2, R>(this: LoDashExplicitWrapper<Function2<T1, T2, R>>, arg1: T1):            LoDashExplicitWrapper<Function1<    T2, R>>;
        <T1, T2, R>(this: LoDashExplicitWrapper<Function2<T1, T2, R>>, plc1: PH, arg2: T2):  LoDashExplicitWrapper<Function1<T1,     R>>;
        <T1, T2, R>(this: LoDashExplicitWrapper<Function2<T1, T2, R>>, arg1: T1, arg2: T2):  LoDashExplicitWrapper<Function0<        R>>;
        // arity 3
        <T1, T2, T3, R>(this: LoDashExplicitWrapper<Function3<T1, T2, T3, R>>):                                LoDashExplicitWrapper<Function3<T1, T2, T3, R>>;
        <T1, T2, T3, R>(this: LoDashExplicitWrapper<Function3<T1, T2, T3, R>>, arg1: T1):                      LoDashExplicitWrapper<Function2<    T2, T3, R>>;
        <T1, T2, T3, R>(this: LoDashExplicitWrapper<Function3<T1, T2, T3, R>>, plc1: PH, arg2: T2):            LoDashExplicitWrapper<Function2<T1,     T3, R>>;
        <T1, T2, T3, R>(this: LoDashExplicitWrapper<Function3<T1, T2, T3, R>>, arg1: T1, arg2: T2):            LoDashExplicitWrapper<Function1<        T3, R>>;
        <T1, T2, T3, R>(this: LoDashExplicitWrapper<Function3<T1, T2, T3, R>>, plc1: PH, plc2: PH, arg3: T3):  LoDashExplicitWrapper<Function2<T1, T2,     R>>;
        <T1, T2, T3, R>(this: LoDashExplicitWrapper<Function3<T1, T2, T3, R>>, arg1: T1, plc2: PH, arg3: T3):  LoDashExplicitWrapper<Function1<    T2,     R>>;
        <T1, T2, T3, R>(this: LoDashExplicitWrapper<Function3<T1, T2, T3, R>>, plc1: PH, arg2: T2, arg3: T3):  LoDashExplicitWrapper<Function1<T1,         R>>;
        <T1, T2, T3, R>(this: LoDashExplicitWrapper<Function3<T1, T2, T3, R>>, arg1: T1, arg2: T2, arg3: T3):  LoDashExplicitWrapper<Function0<            R>>;
        // arity 4
        <T1, T2, T3, T4, R>(this: LoDashExplicitWrapper<Function4<T1, T2, T3, T4, R>>):                                          LoDashExplicitWrapper<Function4<T1, T2, T3, T4, R>>;
        <T1, T2, T3, T4, R>(this: LoDashExplicitWrapper<Function4<T1, T2, T3, T4, R>>, arg1: T1):                                LoDashExplicitWrapper<Function3<    T2, T3, T4, R>>;
        <T1, T2, T3, T4, R>(this: LoDashExplicitWrapper<Function4<T1, T2, T3, T4, R>>, plc1: PH, arg2: T2):                      LoDashExplicitWrapper<Function3<T1,     T3, T4, R>>;
        <T1, T2, T3, T4, R>(this: LoDashExplicitWrapper<Function4<T1, T2, T3, T4, R>>, arg1: T1, arg2: T2):                      LoDashExplicitWrapper<Function2<        T3, T4, R>>;
        <T1, T2, T3, T4, R>(this: LoDashExplicitWrapper<Function4<T1, T2, T3, T4, R>>, plc1: PH, plc2: PH, arg3: T3):            LoDashExplicitWrapper<Function3<T1, T2,     T4, R>>;
        <T1, T2, T3, T4, R>(this: LoDashExplicitWrapper<Function4<T1, T2, T3, T4, R>>, arg1: T1, plc2: PH, arg3: T3):            LoDashExplicitWrapper<Function2<    T2,     T4, R>>;
        <T1, T2, T3, T4, R>(this: LoDashExplicitWrapper<Function4<T1, T2, T3, T4, R>>, plc1: PH, arg2: T2, arg3: T3):            LoDashExplicitWrapper<Function2<T1,         T4, R>>;
        <T1, T2, T3, T4, R>(this: LoDashExplicitWrapper<Function4<T1, T2, T3, T4, R>>, arg1: T1, arg2: T2, arg3: T3):            LoDashExplicitWrapper<Function1<            T4, R>>;
        <T1, T2, T3, T4, R>(this: LoDashExplicitWrapper<Function4<T1, T2, T3, T4, R>>, plc1: PH, plc2: PH, plc3: PH, arg4: T4):  LoDashExplicitWrapper<Function3<T1, T2, T3,     R>>;
        <T1, T2, T3, T4, R>(this: LoDashExplicitWrapper<Function4<T1, T2, T3, T4, R>>, arg1: T1, plc2: PH, plc3: PH, arg4: T4):  LoDashExplicitWrapper<Function2<    T2, T3,     R>>;
        <T1, T2, T3, T4, R>(this: LoDashExplicitWrapper<Function4<T1, T2, T3, T4, R>>, plc1: PH, arg2: T2, plc3: PH, arg4: T4):  LoDashExplicitWrapper<Function2<T1,     T3,     R>>;
        <T1, T2, T3, T4, R>(this: LoDashExplicitWrapper<Function4<T1, T2, T3, T4, R>>, arg1: T1, arg2: T2, plc3: PH, arg4: T4):  LoDashExplicitWrapper<Function1<        T3,     R>>;
        <T1, T2, T3, T4, R>(this: LoDashExplicitWrapper<Function4<T1, T2, T3, T4, R>>, plc1: PH, plc2: PH, arg3: T3, arg4: T4):  LoDashExplicitWrapper<Function2<T1, T2,         R>>;
        <T1, T2, T3, T4, R>(this: LoDashExplicitWrapper<Function4<T1, T2, T3, T4, R>>, arg1: T1, plc2: PH, arg3: T3, arg4: T4):  LoDashExplicitWrapper<Function1<    T2,         R>>;
        <T1, T2, T3, T4, R>(this: LoDashExplicitWrapper<Function4<T1, T2, T3, T4, R>>, plc1: PH, arg2: T2, arg3: T3, arg4: T4):  LoDashExplicitWrapper<Function1<T1,             R>>;
        <T1, T2, T3, T4, R>(this: LoDashExplicitWrapper<Function4<T1, T2, T3, T4, R>>, arg1: T1, arg2: T2, arg3: T3, arg4: T4):  LoDashExplicitWrapper<Function0<                R>>;
        // catch-all
        (...args: any[]): LoDashExplicitWrapper<(...args: any[]) => any>;
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
        partialRight: PartialRight;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.partialRight
         */
        partialRight: ImplicitPartialRight;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.partialRight
         */
        partialRight: ExplicitPartialRight;
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
        (func: (...args: any[]) => any, ...args: any[]): (...args: any[]) => any;
    }

    interface ImplicitPartialRight {
        // arity 0
        <R>(this: LoDashImplicitWrapper<Function0<R>>): LoDashImplicitWrapper<Function0<R>>;
        // arity 1
        <T1, R>(this: LoDashImplicitWrapper<Function1<T1, R>>): LoDashImplicitWrapper<Function1<T1, R>>;
        <T1, R>(this: LoDashImplicitWrapper<Function1<T1, R>>, arg1: T1): LoDashImplicitWrapper<Function0<R>>;
        // arity 2
        <T1, T2, R>(this: LoDashImplicitWrapper<Function2<T1, T2, R>>):                      LoDashImplicitWrapper<Function2<T1, T2, R>>;
        <T1, T2, R>(this: LoDashImplicitWrapper<Function2<T1, T2, R>>, arg1: T1, plc2: PH):  LoDashImplicitWrapper<Function1<    T2, R>>;
        <T1, T2, R>(this: LoDashImplicitWrapper<Function2<T1, T2, R>>,           arg2: T2):  LoDashImplicitWrapper<Function1<T1,     R>>;
        <T1, T2, R>(this: LoDashImplicitWrapper<Function2<T1, T2, R>>, arg1: T1, arg2: T2):  LoDashImplicitWrapper<Function0<        R>>;
        // arity 3
        <T1, T2, T3, R>(this: LoDashImplicitWrapper<Function3<T1, T2, T3, R>>):                                LoDashImplicitWrapper<Function3<T1, T2, T3, R>>;
        <T1, T2, T3, R>(this: LoDashImplicitWrapper<Function3<T1, T2, T3, R>>, arg1: T1, plc2: PH, plc3: PH):  LoDashImplicitWrapper<Function2<    T2, T3, R>>;
        <T1, T2, T3, R>(this: LoDashImplicitWrapper<Function3<T1, T2, T3, R>>,           arg2: T2, plc3: PH):  LoDashImplicitWrapper<Function2<T1,     T3, R>>;
        <T1, T2, T3, R>(this: LoDashImplicitWrapper<Function3<T1, T2, T3, R>>, arg1: T1, arg2: T2, plc3: PH):  LoDashImplicitWrapper<Function1<        T3, R>>;
        <T1, T2, T3, R>(this: LoDashImplicitWrapper<Function3<T1, T2, T3, R>>,                     arg3: T3):  LoDashImplicitWrapper<Function2<T1, T2,     R>>;
        <T1, T2, T3, R>(this: LoDashImplicitWrapper<Function3<T1, T2, T3, R>>, arg1: T1, plc2: PH, arg3: T3):  LoDashImplicitWrapper<Function1<    T2,     R>>;
        <T1, T2, T3, R>(this: LoDashImplicitWrapper<Function3<T1, T2, T3, R>>,           arg2: T2, arg3: T3):  LoDashImplicitWrapper<Function1<T1,         R>>;
        <T1, T2, T3, R>(this: LoDashImplicitWrapper<Function3<T1, T2, T3, R>>, arg1: T1, arg2: T2, arg3: T3):  LoDashImplicitWrapper<Function0<            R>>;
        // arity 4
        <T1, T2, T3, T4, R>(this: LoDashImplicitWrapper<Function4<T1, T2, T3, T4, R>>):                                          LoDashImplicitWrapper<Function4<T1, T2, T3, T4, R>>;
        <T1, T2, T3, T4, R>(this: LoDashImplicitWrapper<Function4<T1, T2, T3, T4, R>>, arg1: T1, plc2: PH, plc3: PH, plc4: PH):  LoDashImplicitWrapper<Function3<    T2, T3, T4, R>>;
        <T1, T2, T3, T4, R>(this: LoDashImplicitWrapper<Function4<T1, T2, T3, T4, R>>,           arg2: T2, plc3: PH, plc4: PH):  LoDashImplicitWrapper<Function3<T1,     T3, T4, R>>;
        <T1, T2, T3, T4, R>(this: LoDashImplicitWrapper<Function4<T1, T2, T3, T4, R>>, arg1: T1, arg2: T2, plc3: PH, plc4: PH):  LoDashImplicitWrapper<Function2<        T3, T4, R>>;
        <T1, T2, T3, T4, R>(this: LoDashImplicitWrapper<Function4<T1, T2, T3, T4, R>>,                     arg3: T3, plc4: PH):  LoDashImplicitWrapper<Function3<T1, T2,     T4, R>>;
        <T1, T2, T3, T4, R>(this: LoDashImplicitWrapper<Function4<T1, T2, T3, T4, R>>, arg1: T1, plc2: PH, arg3: T3, plc4: PH):  LoDashImplicitWrapper<Function2<    T2,     T4, R>>;
        <T1, T2, T3, T4, R>(this: LoDashImplicitWrapper<Function4<T1, T2, T3, T4, R>>,           arg2: T2, arg3: T3, plc4: PH):  LoDashImplicitWrapper<Function2<T1,         T4, R>>;
        <T1, T2, T3, T4, R>(this: LoDashImplicitWrapper<Function4<T1, T2, T3, T4, R>>, arg1: T1, arg2: T2, arg3: T3, plc4: PH):  LoDashImplicitWrapper<Function1<            T4, R>>;
        <T1, T2, T3, T4, R>(this: LoDashImplicitWrapper<Function4<T1, T2, T3, T4, R>>,                               arg4: T4):  LoDashImplicitWrapper<Function3<T1, T2, T3,     R>>;
        <T1, T2, T3, T4, R>(this: LoDashImplicitWrapper<Function4<T1, T2, T3, T4, R>>, arg1: T1, plc2: PH, plc3: PH, arg4: T4):  LoDashImplicitWrapper<Function2<    T2, T3,     R>>;
        <T1, T2, T3, T4, R>(this: LoDashImplicitWrapper<Function4<T1, T2, T3, T4, R>>,           arg2: T2, plc3: PH, arg4: T4):  LoDashImplicitWrapper<Function2<T1,     T3,     R>>;
        <T1, T2, T3, T4, R>(this: LoDashImplicitWrapper<Function4<T1, T2, T3, T4, R>>, arg1: T1, arg2: T2, plc3: PH, arg4: T4):  LoDashImplicitWrapper<Function1<        T3,     R>>;
        <T1, T2, T3, T4, R>(this: LoDashImplicitWrapper<Function4<T1, T2, T3, T4, R>>,                     arg3: T3, arg4: T4):  LoDashImplicitWrapper<Function2<T1, T2,         R>>;
        <T1, T2, T3, T4, R>(this: LoDashImplicitWrapper<Function4<T1, T2, T3, T4, R>>, arg1: T1, plc2: PH, arg3: T3, arg4: T4):  LoDashImplicitWrapper<Function1<    T2,         R>>;
        <T1, T2, T3, T4, R>(this: LoDashImplicitWrapper<Function4<T1, T2, T3, T4, R>>,           arg2: T2, arg3: T3, arg4: T4):  LoDashImplicitWrapper<Function1<T1,             R>>;
        <T1, T2, T3, T4, R>(this: LoDashImplicitWrapper<Function4<T1, T2, T3, T4, R>>, arg1: T1, arg2: T2, arg3: T3, arg4: T4):  LoDashImplicitWrapper<Function0<                R>>;
        // catch-all
        (...args: any[]): LoDashImplicitWrapper<(...args: any[]) => any>;
    }

    interface ExplicitPartialRight {
        // arity 0
        <R>(this: LoDashExplicitWrapper<Function0<R>>): LoDashExplicitWrapper<Function0<R>>;
        // arity 1
        <T1, R>(this: LoDashExplicitWrapper<Function1<T1, R>>): LoDashExplicitWrapper<Function1<T1, R>>;
        <T1, R>(this: LoDashExplicitWrapper<Function1<T1, R>>, arg1: T1): LoDashExplicitWrapper<Function0<R>>;
        // arity 2
        <T1, T2, R>(this: LoDashExplicitWrapper<Function2<T1, T2, R>>):                      LoDashExplicitWrapper<Function2<T1, T2, R>>;
        <T1, T2, R>(this: LoDashExplicitWrapper<Function2<T1, T2, R>>, arg1: T1, plc2: PH):  LoDashExplicitWrapper<Function1<    T2, R>>;
        <T1, T2, R>(this: LoDashExplicitWrapper<Function2<T1, T2, R>>,           arg2: T2):  LoDashExplicitWrapper<Function1<T1,     R>>;
        <T1, T2, R>(this: LoDashExplicitWrapper<Function2<T1, T2, R>>, arg1: T1, arg2: T2):  LoDashExplicitWrapper<Function0<        R>>;
        // arity 3
        <T1, T2, T3, R>(this: LoDashExplicitWrapper<Function3<T1, T2, T3, R>>):                                LoDashExplicitWrapper<Function3<T1, T2, T3, R>>;
        <T1, T2, T3, R>(this: LoDashExplicitWrapper<Function3<T1, T2, T3, R>>, arg1: T1, plc2: PH, plc3: PH):  LoDashExplicitWrapper<Function2<    T2, T3, R>>;
        <T1, T2, T3, R>(this: LoDashExplicitWrapper<Function3<T1, T2, T3, R>>,           arg2: T2, plc3: PH):  LoDashExplicitWrapper<Function2<T1,     T3, R>>;
        <T1, T2, T3, R>(this: LoDashExplicitWrapper<Function3<T1, T2, T3, R>>, arg1: T1, arg2: T2, plc3: PH):  LoDashExplicitWrapper<Function1<        T3, R>>;
        <T1, T2, T3, R>(this: LoDashExplicitWrapper<Function3<T1, T2, T3, R>>,                     arg3: T3):  LoDashExplicitWrapper<Function2<T1, T2,     R>>;
        <T1, T2, T3, R>(this: LoDashExplicitWrapper<Function3<T1, T2, T3, R>>, arg1: T1, plc2: PH, arg3: T3):  LoDashExplicitWrapper<Function1<    T2,     R>>;
        <T1, T2, T3, R>(this: LoDashExplicitWrapper<Function3<T1, T2, T3, R>>,           arg2: T2, arg3: T3):  LoDashExplicitWrapper<Function1<T1,         R>>;
        <T1, T2, T3, R>(this: LoDashExplicitWrapper<Function3<T1, T2, T3, R>>, arg1: T1, arg2: T2, arg3: T3):  LoDashExplicitWrapper<Function0<            R>>;
        // arity 4
        <T1, T2, T3, T4, R>(this: LoDashExplicitWrapper<Function4<T1, T2, T3, T4, R>>):                                          LoDashExplicitWrapper<Function4<T1, T2, T3, T4, R>>;
        <T1, T2, T3, T4, R>(this: LoDashExplicitWrapper<Function4<T1, T2, T3, T4, R>>, arg1: T1, plc2: PH, plc3: PH, plc4: PH):  LoDashExplicitWrapper<Function3<    T2, T3, T4, R>>;
        <T1, T2, T3, T4, R>(this: LoDashExplicitWrapper<Function4<T1, T2, T3, T4, R>>,           arg2: T2, plc3: PH, plc4: PH):  LoDashExplicitWrapper<Function3<T1,     T3, T4, R>>;
        <T1, T2, T3, T4, R>(this: LoDashExplicitWrapper<Function4<T1, T2, T3, T4, R>>, arg1: T1, arg2: T2, plc3: PH, plc4: PH):  LoDashExplicitWrapper<Function2<        T3, T4, R>>;
        <T1, T2, T3, T4, R>(this: LoDashExplicitWrapper<Function4<T1, T2, T3, T4, R>>,                     arg3: T3, plc4: PH):  LoDashExplicitWrapper<Function3<T1, T2,     T4, R>>;
        <T1, T2, T3, T4, R>(this: LoDashExplicitWrapper<Function4<T1, T2, T3, T4, R>>, arg1: T1, plc2: PH, arg3: T3, plc4: PH):  LoDashExplicitWrapper<Function2<    T2,     T4, R>>;
        <T1, T2, T3, T4, R>(this: LoDashExplicitWrapper<Function4<T1, T2, T3, T4, R>>,           arg2: T2, arg3: T3, plc4: PH):  LoDashExplicitWrapper<Function2<T1,         T4, R>>;
        <T1, T2, T3, T4, R>(this: LoDashExplicitWrapper<Function4<T1, T2, T3, T4, R>>, arg1: T1, arg2: T2, arg3: T3, plc4: PH):  LoDashExplicitWrapper<Function1<            T4, R>>;
        <T1, T2, T3, T4, R>(this: LoDashExplicitWrapper<Function4<T1, T2, T3, T4, R>>,                               arg4: T4):  LoDashExplicitWrapper<Function3<T1, T2, T3,     R>>;
        <T1, T2, T3, T4, R>(this: LoDashExplicitWrapper<Function4<T1, T2, T3, T4, R>>, arg1: T1, plc2: PH, plc3: PH, arg4: T4):  LoDashExplicitWrapper<Function2<    T2, T3,     R>>;
        <T1, T2, T3, T4, R>(this: LoDashExplicitWrapper<Function4<T1, T2, T3, T4, R>>,           arg2: T2, plc3: PH, arg4: T4):  LoDashExplicitWrapper<Function2<T1,     T3,     R>>;
        <T1, T2, T3, T4, R>(this: LoDashExplicitWrapper<Function4<T1, T2, T3, T4, R>>, arg1: T1, arg2: T2, plc3: PH, arg4: T4):  LoDashExplicitWrapper<Function1<        T3,     R>>;
        <T1, T2, T3, T4, R>(this: LoDashExplicitWrapper<Function4<T1, T2, T3, T4, R>>,                     arg3: T3, arg4: T4):  LoDashExplicitWrapper<Function2<T1, T2,         R>>;
        <T1, T2, T3, T4, R>(this: LoDashExplicitWrapper<Function4<T1, T2, T3, T4, R>>, arg1: T1, plc2: PH, arg3: T3, arg4: T4):  LoDashExplicitWrapper<Function1<    T2,         R>>;
        <T1, T2, T3, T4, R>(this: LoDashExplicitWrapper<Function4<T1, T2, T3, T4, R>>,           arg2: T2, arg3: T3, arg4: T4):  LoDashExplicitWrapper<Function1<T1,             R>>;
        <T1, T2, T3, T4, R>(this: LoDashExplicitWrapper<Function4<T1, T2, T3, T4, R>>, arg1: T1, arg2: T2, arg3: T3, arg4: T4):  LoDashExplicitWrapper<Function0<                R>>;
        // catch-all
        (...args: any[]): LoDashExplicitWrapper<(...args: any[]) => any>;
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
        rearg(func: (...args: any[]) => any, ...indexes: Array<Many<number>>): (...args: any[]) => any;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.rearg
         */
        rearg(...indexes: Array<Many<number>>): LoDashImplicitWrapper<(...args: any[]) => any>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.rearg
         */
        rearg(...indexes: Array<Many<number>>): LoDashExplicitWrapper<(...args: any[]) => any>;
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
        rest(
            func: (...args: any[]) => any,
            start?: number
        ): (...args: any[]) => any;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.rest
         */
        rest(start?: number): LoDashImplicitWrapper<(...args: any[]) => any>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.rest
         */
        rest(start?: number): LoDashExplicitWrapper<(...args: any[]) => any>;
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
        spread<TResult>(func: (...args: any[]) => TResult): (...args: any[]) => TResult;

        /**
         * @see _.spread
         */
        spread<TResult>(func: (...args: any[]) => TResult, start: number): (...args: any[]) => TResult;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.spread
         */
        spread<TResult>(this: LoDashImplicitWrapper<(...args: any[]) => TResult>): LoDashImplicitWrapper<(...args: any[]) => TResult>;

        /**
         * @see _.spread
         */
        spread<TResult>(this: LoDashImplicitWrapper<(...args: any[]) => TResult>, start: number): LoDashImplicitWrapper<(...args: any[]) => TResult>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.spread
         */
        spread<TResult>(this: LoDashExplicitWrapper<(...args: any[]) => TResult>): LoDashExplicitWrapper<(...args: any[]) => TResult>;

        /**
         * @see _.spread
         */
        spread<TResult>(this: LoDashExplicitWrapper<(...args: any[]) => TResult>, start: number): LoDashExplicitWrapper<(...args: any[]) => TResult>;
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
         * function comes with a cancel method to cancel delayed invocations and a flush method to immediately invoke
         * them. Provide an options object to indicate that func should be invoked on the leading and/or trailing edge
         * of the wait timeout. Subsequent calls to the throttled function return the result of the last func call.
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
        throttle<T extends (...args: any[]) => any>(
            func: T,
            wait?: number,
            options?: ThrottleSettings
        ): T & Cancelable;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.throttle
         */
        throttle(
            wait?: number,
            options?: ThrottleSettings
        ): LoDashImplicitWrapper<TValue & Cancelable>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.throttle
         */
        throttle(
            wait?: number,
            options?: ThrottleSettings
        ): LoDashExplicitWrapper<TValue & Cancelable>;
    }

    //_.unary
    interface LoDashStatic {
        /**
         * Creates a function that accepts up to one argument, ignoring any
         * additional arguments.
         *
         * @category Function
         * @param func The function to cap arguments for.
         * @returns Returns the new function.
         * @example
         *
         * _.map(['6', '8', '10'], _.unary(parseInt));
         * // => [6, 8, 10]
         */
        unary<T, TResult>(func: (arg1: T, ...args: any[]) => TResult): (arg1: T) => TResult;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.unary
         */
        unary<T, TResult>(this: LoDashImplicitWrapper<(arg1: T, ...args: any[]) => TResult>): LoDashImplicitWrapper<(arg1: T) => TResult>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.unary
         */
        unary<T, TResult>(this: LoDashExplicitWrapper<(arg1: T, ...args: any[]) => TResult>): LoDashExplicitWrapper<(arg1: T) => TResult>;
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
        wrap<T, TArgs, TResult>(
            value: T,
            wrapper: (value: T, ...args: TArgs[]) => TResult
        ): (...args: TArgs[]) => TResult;

        /**
         * @see _.wrap
         */
        wrap<T, TResult>(
            value: T,
            wrapper: (value: T, ...args: any[]) => TResult
        ): (...args: any[]) => TResult;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.wrap
         */
        wrap<TArgs, TResult>(
            wrapper: (value: TValue, ...args: TArgs[]) => TResult
        ): LoDashImplicitWrapper<(...args: TArgs[]) => TResult>;

        /**
         * @see _.wrap
         */
        wrap<TResult>(
            wrapper: (value: TValue, ...args: any[]) => TResult
        ): LoDashImplicitWrapper<(...args: any[]) => TResult>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.wrap
         */
        /**
         * @see _.wrap
         */
        wrap<TArgs, TResult>(
            wrapper: (value: TValue, ...args: TArgs[]) => TResult
        ): LoDashExplicitWrapper<(...args: TArgs[]) => TResult>;

        /**
         * @see _.wrap
         */
        wrap<TResult>(
            wrapper: (value: TValue, ...args: any[]) => TResult
        ): LoDashExplicitWrapper<(...args: any[]) => TResult>;
    }

    /********
     * Lang *
     ********/

    //_.castArray
    interface LoDashStatic {
        /**
         * Casts value as an array if it’s not one.
         *
         * @param value The value to inspect.
         * @return Returns the cast array.
         */
        castArray<T>(value?: Many<T>): T[];
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.castArray
         */
        castArray<T>(this: LoDashImplicitWrapper<Many<T>>): LoDashImplicitWrapper<T[]>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.castArray
         */
        castArray<T>(this: LoDashExplicitWrapper<Many<T>>): LoDashExplicitWrapper<T[]>;
    }

    //_.clone
    interface LoDashStatic {
        /**
         * Creates a shallow clone of value.
         *
         * Note: This method is loosely based on the structured clone algorithm and supports cloning arrays,
         * array buffers, booleans, date objects, maps, numbers, Object objects, regexes, sets, strings, symbols,
         * and typed arrays. The own enumerable properties of arguments objects are cloned as plain objects. An empty
         * object is returned for uncloneable values such as error objects, functions, DOM nodes, and WeakMaps.
         *
         * @param value The value to clone.
         * @return Returns the cloned value.
         */
        clone<T>(value: T): T;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.clone
         */
        clone(): TValue;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.clone
         */
        clone(): this;
    }

    //_.cloneDeep
    interface LoDashStatic {
        /**
         * This method is like _.clone except that it recursively clones value.
         *
         * @param value The value to recursively clone.
         * @return Returns the deep cloned value.
         */
        cloneDeep<T>(value: T): T;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.cloneDeep
         */
        cloneDeep(): TValue;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.cloneDeep
         */
        cloneDeep(): this;
    }

    //_.cloneDeepWith
    type CloneDeepWithCustomizer<TObject> = (value: any, key: number | string | undefined, object: TObject | undefined, stack: any) => any;

    interface LoDashStatic {
        /**
         * This method is like _.cloneWith except that it recursively clones value.
         *
         * @param value The value to recursively clone.
         * @param customizer The function to customize cloning.
         * @return Returns the deep cloned value.
         */
        cloneDeepWith<T>(
            value: T,
            customizer: CloneDeepWithCustomizer<T>
        ): any;

        /**
         * @see _.cloneDeepWith
         */
        cloneDeepWith<T>(value: T): T;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.cloneDeepWith
         */
        cloneDeepWith(
            customizer: CloneDeepWithCustomizer<TValue>
        ): any;

        /**
         * @see _.cloneDeepWith
         */
        cloneDeepWith(): TValue;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.cloneDeepWith
         */
        cloneDeepWith(
            customizer: CloneDeepWithCustomizer<TValue>
        ): LoDashExplicitWrapper<any>;

        /**
         * @see _.cloneDeepWith
         */
        cloneDeepWith(): this;
    }

    //_.cloneWith
    type CloneWithCustomizer<TValue, TResult> = (value: TValue, key: number | string | undefined, object: any, stack: any) => TResult;

    interface LoDashStatic {
        /**
         * This method is like _.clone except that it accepts customizer which is invoked to produce the cloned value.
         * If customizer returns undefined cloning is handled by the method instead.
         *
         * @param value The value to clone.
         * @param customizer The function to customize cloning.
         * @return Returns the cloned value.
         */
        cloneWith<T, TResult extends object | string | number | boolean | null>(
            value: T,
            customizer: CloneWithCustomizer<T, TResult>
        ): TResult;

        /**
         * @see _.cloneWith
         */
        cloneWith<T, TResult>(
            value: T,
            customizer: CloneWithCustomizer<T, TResult | undefined>
        ): TResult | T;

        /**
         * @see _.cloneWith
         */
        cloneWith<T>(value: T): T;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.cloneWith
         */
        cloneWith<TResult extends object | string | number | boolean | null>(
            customizer: CloneWithCustomizer<TValue, TResult>
        ): TResult;

        /**
         * @see _.cloneWith
         */
        cloneWith<TResult>(
            customizer: CloneWithCustomizer<TValue, TResult | undefined>
        ): TResult | TValue;

        /**
         * @see _.cloneWith
         */
        cloneWith(): TValue;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.cloneWith
         */
        cloneWith<TResult extends object | string | number | boolean | null>(
            customizer: CloneWithCustomizer<TValue, TResult>
        ): LoDashExplicitWrapper<TResult>;

        /**
         * @see _.cloneWith
         */
        cloneWith<TResult>(
            customizer: CloneWithCustomizer<TValue, TResult | undefined>
        ): LoDashExplicitWrapper<TResult | TValue>;

        /**
         * @see _.cloneWith
         */
        cloneWith(): this;
    }

    /**
     * An object containing predicate functions for each property of T
     */
    type ConformsPredicateObject<T> = {
        [P in keyof T]?: (val: T[P]) => boolean;
    };

    //_.conforms
    interface LoDashStatic {
        /**
         * Creates a function that invokes the predicate properties of `source` with the corresponding
         * property values of a given object, returning true if all predicates return truthy, else false.
         */
        conforms<T>(source: ConformsPredicateObject<T>): (value: T) => boolean;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.conforms
         */
        conforms<T>(this: LoDashImplicitWrapper<ConformsPredicateObject<T>>): LoDashImplicitWrapper<(value: T) => boolean>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.conforms
         */
        conforms<T>(this: LoDashExplicitWrapper<ConformsPredicateObject<T>>): LoDashExplicitWrapper<(value: T) => boolean>;
    }

    //_.conformsTo
    interface LoDashStatic {
        /**
         * Checks if object conforms to source by invoking the predicate properties of source with the
         * corresponding property values of object.
         *
         * Note: This method is equivalent to _.conforms when source is partially applied.
         */
        conformsTo<T>(object: T, source: ConformsPredicateObject<T>): boolean;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.conformsTo
         */
        conformsTo<T>(this: LoDashImplicitWrapper<T>, source: ConformsPredicateObject<T>): boolean;
        // Note: we can't use TValue here,  because it generates a typescript error when strictFunctionTypes is enabled.
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.conformsTo
         */
        conformsTo<T>(this: LoDashImplicitWrapper<T>, source: ConformsPredicateObject<T>): LoDashExplicitWrapper<boolean>;
        // Note: we can't use TValue here,  because it generates a typescript error when strictFunctionTypes is enabled.
    }

    type CondPair<T, R> = [(val: T) => boolean, (val: T) => R]

    //_.cond
    interface LoDashStatic {
        /**
         * Creates a function that iterates over `pairs` and invokes the corresponding
         * function of the first predicate to return truthy. The predicate-function
         * pairs are invoked with the `this` binding and arguments of the created
         * function.
         *
         * @since 4.0.0
         * @category Util
         * @param pairs The predicate-function pairs.
         * @returns Returns the new composite function.
         * @example
         *
         * var func = _.cond([
         *   [_.matches({ 'a': 1 }),           _.constant('matches A')],
         *   [_.conforms({ 'b': _.isNumber }), _.constant('matches B')],
         *   [_.stubTrue,                      _.constant('no match')]
         * ]);
         *
         * func({ 'a': 1, 'b': 2 });
         * // => 'matches A'
         *
         * func({ 'a': 0, 'b': 1 });
         * // => 'matches B'
         *
         * func({ 'a': '1', 'b': '2' });
         * // => 'no match'
         */
        cond<T, R>(pairs: CondPair<T, R>[]): (Target: T) => R;
    }

    //_.eq
    interface LoDashStatic {
        /**
         * Performs a [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
         * comparison between two values to determine if they are equivalent.
         *
         * @category Lang
         * @param value The value to compare.
         * @param other The other value to compare.
         * @returns Returns `true` if the values are equivalent, else `false`.
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

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.eq
         */
        eq(
            other: any
        ): boolean;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.eq
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

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.gt
         */
        gt(other: any): boolean;
    }

    interface LoDashExplicitWrapper<TValue> {
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

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.gte
         */
        gte(other: any): boolean;
    }

    interface LoDashExplicitWrapper<TValue> {
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

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.isArguments
         */
        isArguments(): boolean;
    }

    interface LoDashExplicitWrapper<TValue> {
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
        isArray(value?: any): value is any[];

        /**
         * DEPRECATED
         */
        isArray<T>(value?: any): value is any[];
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.isArray
         */
        isArray(): boolean;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.isArray
         */
        isArray(): LoDashExplicitWrapper<boolean>;
    }

    //_.isArrayBuffer
    interface LoDashStatic {
        /**
         * Checks if value is classified as an ArrayBuffer object.
         *
         * @param value The value to check.
         * @return Returns true if value is correctly classified, else false.
         */
        isArrayBuffer(value?: any): value is ArrayBuffer;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.isArrayBuffer
         */
        isArrayBuffer(): boolean;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.isArrayBuffer
         */
        isArrayBuffer(): LoDashExplicitWrapper<boolean>;
    }

    //_.isArrayLike
    interface LoDashStatic {
        /**
         * Checks if `value` is array-like. A value is considered array-like if it's
         * not a function and has a `value.length` that's an integer greater than or
         * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
         *
         * @category Lang
         * @param value The value to check.
         * @returns Returns `true` if `value` is array-like, else `false`.
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
        isArrayLike<T>(value: T & string & number): boolean; // should only match if T = any

        /**
         * @see _.isArrayLike
         */
        isArrayLike(value: ((...args: any[]) => any) | Function | null | undefined): value is never;

        /**
         * @see _.isArrayLike
         */
        isArrayLike(value: any): value is { length: number };
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.isArrayLike
         */
        isArrayLike(): boolean;
    }

    interface LoDashExplicitWrapper<TValue> {
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
         * @category Lang
         * @param value The value to check.
         * @returns Returns `true` if `value` is an array-like object, else `false`.
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
        isArrayLikeObject<T>(value: T & string & number): boolean; // should only match if T = any

        /**
         * @see _.isArrayLike
         */
        isArrayLikeObject(value: ((...args: any[]) => any) | Function | string | boolean | number | null | undefined): value is never;

        /**
         * @see _.isArrayLike
         */
        isArrayLikeObject<T extends object>(value: T | string | boolean | number | null | undefined): value is T & { length: number };
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.isArrayLikeObject
         */
        isArrayLikeObject(): boolean;
    }

    interface LoDashExplicitWrapper<TValue> {
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

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.isBoolean
         */
        isBoolean(): boolean;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.isBoolean
         */
        isBoolean(): LoDashExplicitWrapper<boolean>;
    }

    //_.isBuffer
    interface LoDashStatic {
        /**
         * Checks if value is a buffer.
         *
         * @param value The value to check.
         * @return Returns true if value is a buffer, else false.
         */
        isBuffer(value?: any): boolean;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.isBuffer
         */
        isBuffer(): boolean;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.isBuffer
         */
        isBuffer(): LoDashExplicitWrapper<boolean>;
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

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.isDate
         */
        isDate(): boolean;
    }

    interface LoDashExplicitWrapper<TValue> {
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

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.isElement
         */
        isElement(): boolean;
    }

    interface LoDashExplicitWrapper<TValue> {
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

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.isEmpty
         */
        isEmpty(): boolean;
    }

    interface LoDashExplicitWrapper<TValue> {
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
         * @category Lang
         * @param value The value to compare.
         * @param other The other value to compare.
         * @returns Returns `true` if the values are equivalent, else `false`.
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

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.isEqual
         */
        isEqual(
            other: any
        ): boolean;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.isEqual
         */
        isEqual(
            other: any
        ): LoDashExplicitWrapper<boolean>;
    }

    // _.isEqualWith
    type IsEqualCustomizer = (value: any, other: any, indexOrKey: PropertyName | undefined, parent: any, otherParent: any, stack: any) => boolean|undefined;

    interface LoDashStatic {
        /**
         * This method is like `_.isEqual` except that it accepts `customizer` which is
         * invoked to compare values. If `customizer` returns `undefined` comparisons are
         * handled by the method instead. The `customizer` is invoked with up to seven arguments:
         * (objValue, othValue [, index|key, object, other, stack]).
         *
         * @category Lang
         * @param value The value to compare.
         * @param other The other value to compare.
         * @param [customizer] The function to customize comparisons.
         * @returns Returns `true` if the values are equivalent, else `false`.
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
            customizer?: IsEqualCustomizer
        ): boolean;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.isEqualWith
         */
        isEqualWith(
            other: any,
            customizer?: IsEqualCustomizer
        ): boolean;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.isEqualWith
         */
        isEqualWith(
            other: any,
            customizer?: IsEqualCustomizer
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

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.isError
         */
        isError(): boolean;
    }

    interface LoDashExplicitWrapper<TValue> {
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

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.isFinite
         */
        isFinite(): boolean;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.isFinite
         */
        isFinite(): LoDashExplicitWrapper<boolean>;
    }

    //_.isFunction
    interface LoDashStatic {
        /**
         * Checks if value is a callable function.
         *
         * @param value The value to check.
         * @return Returns true if value is correctly classified, else false.
         */
        isFunction(value: any): value is (...args: any[]) => any;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.isFunction
         */
        isFunction(): boolean;
    }

    interface LoDashExplicitWrapper<TValue> {
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
         * @category Lang
         * @param value The value to check.
         * @returns Returns `true` if `value` is an integer, else `false`.
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

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.isInteger
         */
        isInteger(): boolean;
    }

    interface LoDashExplicitWrapper<TValue> {
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
         * @category Lang
         * @param value The value to check.
         * @returns Returns `true` if `value` is a valid length, else `false`.
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

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.isLength
         */
        isLength(): boolean;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.isLength
         */
        isLength(): LoDashExplicitWrapper<boolean>;
    }

    //_.isMap
    interface LoDashStatic {
        /**
         * Checks if value is classified as a Map object.
         *
         * @param value The value to check.
         * @returns Returns true if value is correctly classified, else false.
         */
        isMap(value?: any): value is Map<any, any>;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.isMap
         */
        isMap(): boolean;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.isMap
         */
        isMap(): LoDashExplicitWrapper<boolean>;
    }

    //_.isMatch
    type isMatchCustomizer = (value: any, other: any, indexOrKey?: PropertyName) => boolean;

    interface LoDashStatic {
        /**
         * Performs a deep comparison between `object` and `source` to determine if
         * `object` contains equivalent property values.
         *
         * **Note:** This method supports comparing the same values as `_.isEqual`.
         *
         * @category Lang
         * @param object The object to inspect.
         * @param source The object of property values to match.
         * @returns Returns `true` if `object` is a match, else `false`.
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
        isMatch(object: object, source: object): boolean;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.isMatch
         */
        isMatch(source: object): boolean;
    }

    //_.isMatchWith
    type isMatchWithCustomizer = (value: any, other: any, indexOrKey: PropertyName) => boolean;

    interface LoDashStatic {
        /**
         * This method is like `_.isMatch` except that it accepts `customizer` which
         * is invoked to compare values. If `customizer` returns `undefined` comparisons
         * are handled by the method instead. The `customizer` is invoked with three
         * arguments: (objValue, srcValue, index|key, object, source).
         *
         * @category Lang
         * @param object The object to inspect.
         * @param source The object of property values to match.
         * @param [customizer] The function to customize comparisons.
         * @returns Returns `true` if `object` is a match, else `false`.
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
        isMatchWith(object: object, source: object, customizer: isMatchWithCustomizer): boolean;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.isMatchWith
         */
        isMatchWith(source: object, customizer: isMatchWithCustomizer): boolean;
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

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.isNaN
         */
        isNaN(): boolean;
    }

    interface LoDashExplicitWrapper<TValue> {
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
        isNative(value: any): value is ((...args: any[]) => any) | Function;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * see _.isNative
         */
        isNative(): boolean;
    }

    interface LoDashExplicitWrapper<TValue> {
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
         * @category Lang
         * @param value The value to check.
         * @returns Returns `true` if `value` is nullish, else `false`.
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
        isNil(value: any): value is null | undefined;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * see _.isNil
         */
        isNil(): boolean;
    }

    interface LoDashExplicitWrapper<TValue> {
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
        isNull(value: any): value is null;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * see _.isNull
         */
        isNull(): boolean;
    }

    interface LoDashExplicitWrapper<TValue> {
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

    interface LoDashImplicitWrapper<TValue> {
        /**
         * see _.isNumber
         */
        isNumber(): boolean;
    }

    interface LoDashExplicitWrapper<TValue> {
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

    interface LoDashImplicitWrapper<TValue> {
        /**
         * see _.isObject
         */
        isObject(): boolean;
    }

    interface LoDashExplicitWrapper<TValue> {
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
         * @category Lang
         * @param value The value to check.
         * @returns Returns `true` if `value` is object-like, else `false`.
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

    interface LoDashImplicitWrapper<TValue> {
        /**
         * see _.isObjectLike
         */
        isObjectLike(): boolean;
    }

    interface LoDashExplicitWrapper<TValue> {
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

    interface LoDashImplicitWrapper<TValue> {
        /**
         * see _.isPlainObject
         */
        isPlainObject(): boolean;
    }

    interface LoDashExplicitWrapper<TValue> {
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

    interface LoDashImplicitWrapper<TValue> {
        /**
         * see _.isRegExp
         */
        isRegExp(): boolean;
    }

    interface LoDashExplicitWrapper<TValue> {
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
         * @category Lang
         * @param value The value to check.
         * @returns Returns `true` if `value` is a safe integer, else `false`.
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

    interface LoDashImplicitWrapper<TValue> {
        /**
         * see _.isSafeInteger
         */
        isSafeInteger(): boolean;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * see _.isSafeInteger
         */
        isSafeInteger(): LoDashExplicitWrapper<boolean>;
    }

    //_.isSet
    interface LoDashStatic {
        /**
         * Checks if value is classified as a Set object.
         *
         * @param value The value to check.
         * @returns Returns true if value is correctly classified, else false.
         */
        isSet(value?: any): value is Set<any>;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.isSet
         */
        isSet(): boolean;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.isSet
         */
        isSet(): LoDashExplicitWrapper<boolean>;
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

    interface LoDashImplicitWrapper<TValue> {
        /**
         * see _.isString
         */
        isString(): boolean;
    }

    interface LoDashExplicitWrapper<TValue> {
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
         * @category Lang
         * @param value The value to check.
         * @returns Returns `true` if `value` is correctly classified, else `false`.
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

    interface LoDashImplicitWrapper<TValue> {
        /**
         * see _.isSymbol
         */
        isSymbol(): boolean;
    }

    interface LoDashExplicitWrapper<TValue> {
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

    interface LoDashImplicitWrapper<TValue> {
        /**
         * see _.isTypedArray
         */
        isTypedArray(): boolean;
    }

    interface LoDashExplicitWrapper<TValue> {
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
        isUndefined(value: any): value is undefined;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * see _.isUndefined
         */
        isUndefined(): boolean;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * see _.isUndefined
         */
        isUndefined(): LoDashExplicitWrapper<boolean>;
    }

    //_.isWeakMap
    interface LoDashStatic {
        /**
         * Checks if value is classified as a WeakMap object.
         *
         * @param value The value to check.
         * @returns Returns true if value is correctly classified, else false.
         */
        isWeakMap(value?: any): value is WeakMap<object, any>;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.isSet
         */
        isWeakMap(): boolean;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.isSet
         */
        isWeakMap(): LoDashExplicitWrapper<boolean>;
    }

    //_.isWeakSet
    interface LoDashStatic {
        /**
         * Checks if value is classified as a WeakSet object.
         *
         * @param value The value to check.
         * @returns Returns true if value is correctly classified, else false.
         */
        isWeakSet(value?: any): value is WeakSet<object>;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.isWeakSet
         */
        isWeakSet(): boolean;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.isWeakSet
         */
        isWeakSet(): LoDashExplicitWrapper<boolean>;
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

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.lt
         */
        lt(other: any): boolean;
    }

    interface LoDashExplicitWrapper<TValue> {
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

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.lte
         */
        lte(other: any): boolean;
    }

    interface LoDashExplicitWrapper<TValue> {
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
        toArray<T>(value: List<T> | Dictionary<T> | NumericDictionary<T> | null | undefined): T[];

        /**
         * @see _.toArray
         */
        toArray<T>(value: T): Array<T[keyof T]>;

        /**
         * @see _.toArray
         */
        toArray(): any[];
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.toArray
         */
        toArray<T>(this: LoDashImplicitWrapper<List<T> | Dictionary<T> | NumericDictionary<T> | null | undefined>): LoDashImplicitWrapper<T[]>;

        /**
         * @see _.toArray
         */
        toArray<T extends object>(this: LoDashImplicitWrapper<T>): LoDashImplicitWrapper<Array<T[keyof T]>>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.toArray
         */
        toArray<T>(this: LoDashExplicitWrapper<List<T> | Dictionary<T> | NumericDictionary<T> | null | undefined>): LoDashExplicitWrapper<T[]>;

        /**
         * @see _.toArray
         */
        toArray<T extends object>(this: LoDashImplicitWrapper<T>): LoDashExplicitWrapper<Array<T[keyof T]>>;
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
        toPlainObject(value?: any): any;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.toPlainObject
         */
        toPlainObject(): LoDashImplicitWrapper<any>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.toPlainObject
         */
        toPlainObject(): LoDashExplicitWrapper<any>;
    }

    //_.toFinite
    interface LoDashStatic {
        /**
         * Converts `value` to a finite number.
         *
         * @since 4.12.0
         * @category Lang
         * @param value The value to convert.
         * @returns Returns the converted number.
         * @example
         *
         * _.toFinite(3.2);
         * // => 3.2
         *
         * _.toFinite(Number.MIN_VALUE);
         * // => 5e-324
         *
         * _.toFinite(Infinity);
         * // => 1.7976931348623157e+308
         *
         * _.toFinite('3.2');
         * // => 3.2
         */
        toFinite(value: any): number;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.toFinite
         */
        toFinite(): number;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.toFinite
         */
        toFinite(): LoDashExplicitWrapper<number>;
    }

    //_.toInteger
    interface LoDashStatic {
        /**
         * Converts `value` to an integer.
         *
         * **Note:** This function is loosely based on [`ToInteger`](http://www.ecma-international.org/ecma-262/6.0/#sec-tointeger).
         *
         * @category Lang
         * @param value The value to convert.
         * @returns Returns the converted integer.
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

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.toInteger
         */
        toInteger(): number;
    }

    interface LoDashExplicitWrapper<TValue> {
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
         * @category Lang
         * @param value The value to convert.
         * @return Returns the converted integer.
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

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.toLength
         */
        toLength(): number;
    }

    interface LoDashExplicitWrapper<TValue> {
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
         * @category Lang
         * @param value The value to process.
         * @returns Returns the number.
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

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.toNumber
         */
        toNumber(): number;
    }

    interface LoDashExplicitWrapper<TValue> {
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
         * @category Lang
         * @param value The value to convert.
         * @returns Returns the converted integer.
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

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.toSafeInteger
         */
        toSafeInteger(): number;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.toSafeInteger
         */
        toSafeInteger(): LoDashExplicitWrapper<number>;
    }

    //_.toString
    interface LoDashStatic {
        /**
         * Converts `value` to a string if it's not one. An empty string is returned
         * for `null` and `undefined` values. The sign of `-0` is preserved.
         *
         * @category Lang
         * @param value The value to process.
         * @returns Returns the string.
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

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.add
         */
        add(addend: number): number;
    }

    interface LoDashExplicitWrapper<TValue> {
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

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.ceil
         */
        ceil(precision?: number): number;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.ceil
         */
        ceil(precision?: number): LoDashExplicitWrapper<number>;
    }

    //_.divide
    interface LoDashStatic {
       /**
        * Divide two numbers.
        *
        * @param dividend The first number in a division.
        * @param divisor The second number in a division.
        * @returns Returns the quotient.
        */
        divide(
            dividend: number,
            divisor: number
        ): number;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.divide
         */
        divide(divisor: number): number;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.divide
         */
        divide(divisor: number): LoDashExplicitWrapper<number>;
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

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.floor
         */
        floor(precision?: number): number;
    }

    interface LoDashExplicitWrapper<TValue> {
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
          * @category Math
          * @param array The array to iterate over.
          * @returns Returns the maximum value.
          */
        max<T>(
            collection: List<T> | null | undefined
        ): T | undefined;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.max
         */
        max<T>(this: LoDashImplicitWrapper<List<T> | null | undefined>): T | undefined;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.max
         */
        max<T>(this: LoDashExplicitWrapper<List<T> | null | undefined>): LoDashExplicitWrapper<T | undefined>;
    }

    //_.maxBy
    interface LoDashStatic {
        /**
         * This method is like `_.max` except that it accepts `iteratee` which is
         * invoked for each element in `array` to generate the criterion by which
         * the value is ranked. The iteratee is invoked with one argument: (value).
         *
         * @category Math
         * @param array The array to iterate over.
         * @param [iteratee=_.identity] The iteratee invoked per element.
         * @returns Returns the maximum value.
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
            collection: List<T> | null | undefined,
            iteratee?: ListIteratee<T>
        ): T | undefined;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.maxBy
         */
        maxBy<T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            iteratee?: ListIteratee<T>
        ): T | undefined;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.maxBy
         */
        maxBy<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            iteratee?: ListIteratee<T>
        ): LoDashExplicitWrapper<T | undefined>;
    }

    //_.mean
    interface LoDashStatic {
        /**
         * Computes the mean of the values in `array`.
         *
         * @category Math
         * @param array The array to iterate over.
         * @returns Returns the mean.
         * @example
         *
         * _.mean([4, 2, 8, 6]);
         * // => 5
         */
        mean(
            collection: List<any> | null | undefined
        ): number;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.mean
         */
        mean(): number;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.mean
         */
        mean(): LoDashExplicitWrapper<number>;
    }

    //_.meanBy
    interface LoDashStatic {
      /**
       * Computes the mean of the provided propties of the objects in the `array`
       *
       * @category Math
       * @param array The array to iterate over.
       * @param [iteratee=_.identity] The iteratee invoked per element.
       * @returns Returns the mean.
       * @example
       *
       * _.mean([{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }], 'n');
       * // => 5
       */
        meanBy<T>(
            collection: List<T> | null | undefined,
            iteratee?: ListIteratee<T>
        ): number;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.meanBy
         */
        meanBy<T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            iteratee?: ListIteratee<T>
        ): number;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.meanBy
         */
        meanBy<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            iteratee?: ListIteratee<T>
        ): LoDashExplicitWrapper<number>;
    }

    //_.min
    interface LoDashStatic {
        /**
         * Computes the minimum value of `array`. If `array` is empty or falsey
         * `undefined` is returned.
         *
         * @category Math
         * @param array The array to iterate over.
         * @returns Returns the minimum value.
         */
        min<T>(
            collection: List<T> | null | undefined
        ): T | undefined;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.min
         */
        min<T>(this: LoDashImplicitWrapper<List<T> | null | undefined>): T | undefined;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.min
         */
        min<T>(this: LoDashExplicitWrapper<List<T> | null | undefined>): LoDashExplicitWrapper<T | undefined>;
    }

    //_.minBy
    interface LoDashStatic {
        /**
         * This method is like `_.min` except that it accepts `iteratee` which is
         * invoked for each element in `array` to generate the criterion by which
         * the value is ranked. The iteratee is invoked with one argument: (value).
         *
         * @category Math
         * @param array The array to iterate over.
         * @param [iteratee=_.identity] The iteratee invoked per element.
         * @returns Returns the minimum value.
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
            collection: List<T> | null | undefined,
            iteratee?: ListIteratee<T>
        ): T | undefined;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.minBy
         */
        minBy<T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            iteratee?: ListIteratee<T>
        ): T | undefined;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.minBy
         */
        minBy<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            iteratee?: ListIteratee<T>
        ): LoDashExplicitWrapper<T | undefined>;
    }

    //_.multiply
    interface LoDashStatic {
        /**
         * Multiply two numbers.
         * @param multiplier The first number in a multiplication.
         * @param multiplicand The second number in a multiplication.
         * @returns Returns the product.
         */
        multiply(
            multiplier: number,
            multiplicand: number
        ): number;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.multiply
         */
        multiply(multiplicand: number): number;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.multiply
         */
        multiply(multiplicand: number): LoDashExplicitWrapper<number>;
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

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.round
         */
        round(precision?: number): number;
    }

    interface LoDashExplicitWrapper<TValue> {
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
         * @category Math
         * @param array The array to iterate over.
         * @returns Returns the sum.
         * @example
         *
         * _.sum([4, 2, 8, 6]);
         * // => 20
         */
        sum(collection: List<any> | null | undefined): number;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.sum
         */
        sum(): number;
    }

    interface LoDashExplicitWrapper<TValue> {
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
         * @category Math
         * @param array The array to iterate over.
         * @param [iteratee=_.identity] The iteratee invoked per element.
         * @returns Returns the sum.
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
            collection: List<T> | null | undefined,
            iteratee?: ((value: T) => number) | string
        ): number;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.sumBy
         */
        sumBy<T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            iteratee?: ((value: T) => number) | string
        ): number;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.sumBy
         */
        sumBy<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            iteratee?: ((value: T) => number) | string
        ): LoDashExplicitWrapper<number>;
    }

    /**********
     * Number *
     **********/

    //_.subtract
    interface LoDashStatic {
        /**
         * Subtract two numbers.
         *
         * @category Math
         * @param minuend The first number in a subtraction.
         * @param subtrahend The second number in a subtraction.
         * @returns Returns the difference.
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

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.subtract
         */
        subtract(
            subtrahend: number
        ): number;
    }

    interface LoDashExplicitWrapper<TValue> {
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
         * @category Number
         * @param number The number to clamp.
         * @param [lower] The lower bound.
         * @param upper The upper bound.
         * @returns Returns the clamped number.
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
        clamp(
            number: number,
            upper: number
        ): number;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.clamp
         */
        clamp(
            lower: number,
            upper: number
        ): number;
        clamp(
            upper: number
        ): number;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.clamp
         */
        clamp(
            lower: number,
            upper: number
        ): LoDashExplicitWrapper<number>;
        clamp(
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
            end?: number
        ): boolean;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.inRange
         */
        inRange(
            start: number,
            end?: number
        ): boolean;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.inRange
         */
        inRange(
            start: number,
            end?: number
        ): LoDashExplicitWrapper<boolean>;
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
            floating?: boolean
        ): number;

        /**
         * @see _.random
         */
        random(
            max: number,
            floating?: boolean
        ): number;

        /**
         * @see _.random
         */
        random(
            min: number,
            max: number,
            floating?: boolean
        ): number;

        /**
         * Produces a random number between min and max (inclusive). If only one argument is provided a number between
         * 0 and the given number is returned. If floating is true, or either min or max are floats, a floating-point
         * number is returned instead of an integer.
         *
         * @param min The minimum possible value.
         * @param index Not used in this overload.
         * @param guard Enables use as an iteratee for methods like _.map. You should not pass this parameter directly in your code.
         * @return Returns the random number.
         */
        random(
            min: number,
            index: string | number,
            guard: object
        ): number;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.random
         */
        random(floating?: boolean): number;

        /**
         * @see _.random
         */
        random(
            max: number,
            floating?: boolean
        ): number;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.random
         */
        random(floating?: boolean): LoDashExplicitWrapper<number>;

        /**
         * @see _.random
         */
        random(
            max: number,
            floating?: boolean
        ): LoDashExplicitWrapper<number>;
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
         * @category Object
         * @param object The destination object.
         * @param [sources] The source objects.
         * @returns Returns `object`.
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
        assign<TObject, TSource>(
            object: TObject,
            source: TSource
        ): TObject & TSource;

        /**
         * @see assign
         */
        assign<TObject, TSource1, TSource2>(
            object: TObject,
            source1: TSource1,
            source2: TSource2
        ): TObject & TSource1 & TSource2;

        /**
         * @see assign
         */
        assign<TObject, TSource1, TSource2, TSource3>(
            object: TObject,
            source1: TSource1,
            source2: TSource2,
            source3: TSource3
        ): TObject & TSource1 & TSource2 & TSource3;

        /**
         * @see assign
         */
        assign<TObject, TSource1, TSource2, TSource3, TSource4>(
            object: TObject,
            source1: TSource1,
            source2: TSource2,
            source3: TSource3,
            source4: TSource4
        ): TObject & TSource1 & TSource2 & TSource3 & TSource4;

        /**
         * @see _.assign
         */
        assign<TObject>(object: TObject): TObject;

        /**
         * @see _.assign
         */
        assign(
            object: any,
            ...otherArgs: any[]
        ): any;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.assign
         */
        assign<TSource>(
            source: TSource
        ): LoDashImplicitWrapper<TValue & TSource>;

        /**
         * @see assign
         */
        assign<TSource1, TSource2>(
            source1: TSource1,
            source2: TSource2
        ): LoDashImplicitWrapper<TValue & TSource1 & TSource2>;

        /**
         * @see assign
         */
        assign<TSource1, TSource2, TSource3>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3
        ): LoDashImplicitWrapper<TValue & TSource1 & TSource2 & TSource3>;

        /**
         * @see assign
         */
        assign<TSource1, TSource2, TSource3, TSource4>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3,
            source4: TSource4
        ): LoDashImplicitWrapper<TValue & TSource1 & TSource2 & TSource3 & TSource4>;

        /**
         * @see _.assign
         */
        assign(): LoDashImplicitWrapper<TValue>;

        /**
         * @see _.assign
         */
        assign(...otherArgs: any[]): LoDashImplicitWrapper<any>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.assign
         */
        assign<TSource>(
            source: TSource
        ): LoDashExplicitWrapper<TValue & TSource>;

        /**
         * @see assign
         */
        assign<TSource1, TSource2>(
            source1: TSource1,
            source2: TSource2
        ): LoDashExplicitWrapper<TValue & TSource1 & TSource2>;

        /**
         * @see assign
         */
        assign<TSource1, TSource2, TSource3>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3
        ): LoDashExplicitWrapper<TValue & TSource1 & TSource2 & TSource3>;

        /**
         * @see assign
         */
        assign<TSource1, TSource2, TSource3, TSource4>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3,
            source4: TSource4
        ): LoDashExplicitWrapper<TValue & TSource1 & TSource2 & TSource3 & TSource4>;

        /**
         * @see _.assign
         */
        assign(): LoDashExplicitWrapper<TValue>;

        /**
         * @see _.assign
         */
        assign(...otherArgs: any[]): LoDashExplicitWrapper<any>;
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
         * @category Object
         * @param object The destination object.
         * @param sources The source objects.
         * @param [customizer] The function to customize assigned values.
         * @returns Returns `object`.
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
        assignWith<TObject, TSource>(
            object: TObject,
            source: TSource,
            customizer: AssignCustomizer
        ): TObject & TSource;

        /**
         * @see assignWith
         */
        assignWith<TObject, TSource1, TSource2>(
            object: TObject,
            source1: TSource1,
            source2: TSource2,
            customizer: AssignCustomizer
        ): TObject & TSource1 & TSource2;

        /**
         * @see assignWith
         */
        assignWith<TObject, TSource1, TSource2, TSource3>(
            object: TObject,
            source1: TSource1,
            source2: TSource2,
            source3: TSource3,
            customizer: AssignCustomizer
        ): TObject & TSource1 & TSource2 & TSource3;

        /**
         * @see assignWith
         */
        assignWith<TObject, TSource1, TSource2, TSource3, TSource4>(
            object: TObject,
            source1: TSource1,
            source2: TSource2,
            source3: TSource3,
            source4: TSource4,
            customizer: AssignCustomizer
        ): TObject & TSource1 & TSource2 & TSource3 & TSource4;

        /**
         * @see _.assignWith
         */
        assignWith<TObject>(object: TObject): TObject;

        /**
         * @see _.assignWith
         */
        assignWith<TResult>(
            object: any,
            ...otherArgs: any[]
        ): TResult;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.assignWith
         */
        assignWith<TSource>(
            source: TSource,
            customizer: AssignCustomizer
        ): LoDashImplicitWrapper<TValue & TSource>;

        /**
         * @see assignWith
         */
        assignWith<TSource1, TSource2>(
            source1: TSource1,
            source2: TSource2,
            customizer: AssignCustomizer
        ): LoDashImplicitWrapper<TValue & TSource1 & TSource2>;

        /**
         * @see assignWith
         */
        assignWith<TSource1, TSource2, TSource3>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3,
            customizer: AssignCustomizer
        ): LoDashImplicitWrapper<TValue & TSource1 & TSource2 & TSource3>;

        /**
         * @see assignWith
         */
        assignWith<TSource1, TSource2, TSource3, TSource4>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3,
            source4: TSource4,
            customizer: AssignCustomizer
        ): LoDashImplicitWrapper<TValue & TSource1 & TSource2 & TSource3 & TSource4>;

        /**
         * @see _.assignWith
         */
        assignWith(): LoDashImplicitWrapper<TValue>;

        /**
         * @see _.assignWith
         */
        assignWith<TResult>(...otherArgs: any[]): LoDashImplicitWrapper<TResult>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.assignWith
         */
        assignWith<TSource>(
            source: TSource,
            customizer: AssignCustomizer
        ): LoDashExplicitWrapper<TValue & TSource>;

        /**
         * @see assignWith
         */
        assignWith<TSource1, TSource2>(
            source1: TSource1,
            source2: TSource2,
            customizer: AssignCustomizer
        ): LoDashExplicitWrapper<TValue & TSource1 & TSource2>;

        /**
         * @see assignWith
         */
        assignWith<TSource1, TSource2, TSource3>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3,
            customizer: AssignCustomizer
        ): LoDashExplicitWrapper<TValue & TSource1 & TSource2 & TSource3>;

        /**
         * @see assignWith
         */
        assignWith<TSource1, TSource2, TSource3, TSource4>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3,
            source4: TSource4,
            customizer: AssignCustomizer
        ): LoDashExplicitWrapper<TValue & TSource1 & TSource2 & TSource3 & TSource4>;

        /**
         * @see _.assignWith
         */
        assignWith(): LoDashExplicitWrapper<TValue>;

        /**
         * @see _.assignWith
         */
        assignWith(...otherArgs: any[]): LoDashExplicitWrapper<any>;
    }

    //_.assignIn
    interface LoDashStatic {
        /**
         * This method is like `_.assign` except that it iterates over own and
         * inherited source properties.
         *
         * **Note:** This method mutates `object`.
         *
         * @alias extend
         * @category Object
         * @param object The destination object.
         * @param [sources] The source objects.
         * @returns Returns `object`.
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
        assignIn<TObject, TSource>(
            object: TObject,
            source: TSource
        ): TObject & TSource;

        /**
         * @see assignIn
         */
        assignIn<TObject, TSource1, TSource2>(
            object: TObject,
            source1: TSource1,
            source2: TSource2
        ): TObject & TSource1 & TSource2;

        /**
         * @see assignIn
         */
        assignIn<TObject, TSource1, TSource2, TSource3>(
            object: TObject,
            source1: TSource1,
            source2: TSource2,
            source3: TSource3
        ): TObject & TSource1 & TSource2 & TSource3;

        /**
         * @see assignIn
         */
        assignIn<TObject, TSource1, TSource2, TSource3, TSource4>(
            object: TObject,
            source1: TSource1,
            source2: TSource2,
            source3: TSource3,
            source4: TSource4
        ): TObject & TSource1 & TSource2 & TSource3 & TSource4;

        /**
         * @see _.assignIn
         */
        assignIn<TObject>(object: TObject): TObject;

        /**
         * @see _.assignIn
         */
        assignIn<TResult>(
            object: any,
            ...otherArgs: any[]
        ): TResult;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.assignIn
         */
        assignIn<TSource>(
            source: TSource
        ): LoDashImplicitWrapper<TValue & TSource>;

        /**
         * @see assignIn
         */
        assignIn<TSource1, TSource2>(
            source1: TSource1,
            source2: TSource2
        ): LoDashImplicitWrapper<TValue & TSource1 & TSource2>;

        /**
         * @see assignIn
         */
        assignIn<TSource1, TSource2, TSource3>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3
        ): LoDashImplicitWrapper<TValue & TSource1 & TSource2 & TSource3>;

        /**
         * @see assignIn
         */
        assignIn<TSource1, TSource2, TSource3, TSource4>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3,
            source4: TSource4
        ): LoDashImplicitWrapper<TValue & TSource1 & TSource2 & TSource3 & TSource4>;

        /**
         * @see _.assignIn
         */
        assignIn(): LoDashImplicitWrapper<TValue>;

        /**
         * @see _.assignIn
         */
        assignIn<TResult>(...otherArgs: any[]): LoDashImplicitWrapper<TResult>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.assignIn
         */
        assignIn<TSource>(
            source: TSource
        ): LoDashExplicitWrapper<TValue & TSource>;

        /**
         * @see assignIn
         */
        assignIn<TSource1, TSource2>(
            source1: TSource1,
            source2: TSource2
        ): LoDashExplicitWrapper<TValue & TSource1 & TSource2>;

        /**
         * @see assignIn
         */
        assignIn<TSource1, TSource2, TSource3>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3
        ): LoDashExplicitWrapper<TValue & TSource1 & TSource2 & TSource3>;

        /**
         * @see assignIn
         */
        assignIn<TSource1, TSource2, TSource3, TSource4>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3,
            source4: TSource4
        ): LoDashExplicitWrapper<TValue & TSource1 & TSource2 & TSource3 & TSource4>;

        /**
         * @see _.assignIn
         */
        assignIn(): LoDashExplicitWrapper<TValue>;

        /**
         * @see _.assignIn
         */
        assignIn(...otherArgs: any[]): LoDashExplicitWrapper<any>;
    }

    //_.assignInWith
    type AssignCustomizer = (objectValue: any, sourceValue: any, key?: string, object?: {}, source?: {}) => any;

    interface LoDashStatic {
        /**
         * This method is like `_.assignIn` except that it accepts `customizer` which
         * is invoked to produce the assigned values. If `customizer` returns `undefined`
         * assignment is handled by the method instead. The `customizer` is invoked
         * with five arguments: (objValue, srcValue, key, object, source).
         *
         * **Note:** This method mutates `object`.
         *
         * @alias extendWith
         * @category Object
         * @param object The destination object.
         * @param sources The source objects.
         * @param [customizer] The function to customize assigned values.
         * @returns Returns `object`.
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
        assignInWith<TObject, TSource>(
            object: TObject,
            source: TSource,
            customizer: AssignCustomizer
        ): TObject & TSource;

        /**
         * @see assignInWith
         */
        assignInWith<TObject, TSource1, TSource2>(
            object: TObject,
            source1: TSource1,
            source2: TSource2,
            customizer: AssignCustomizer
        ): TObject & TSource1 & TSource2;

        /**
         * @see assignInWith
         */
        assignInWith<TObject, TSource1, TSource2, TSource3>(
            object: TObject,
            source1: TSource1,
            source2: TSource2,
            source3: TSource3,
            customizer: AssignCustomizer
        ): TObject & TSource1 & TSource2 & TSource3;

        /**
         * @see assignInWith
         */
        assignInWith<TObject, TSource1, TSource2, TSource3, TSource4>(
            object: TObject,
            source1: TSource1,
            source2: TSource2,
            source3: TSource3,
            source4: TSource4,
            customizer: AssignCustomizer
        ): TObject & TSource1 & TSource2 & TSource3 & TSource4;

        /**
         * @see _.assignInWith
         */
        assignInWith<TObject>(object: TObject): TObject;

        /**
         * @see _.assignInWith
         */
        assignInWith<TResult>(
            object: any,
            ...otherArgs: any[]
        ): TResult;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.assignInWith
         */
        assignInWith<TSource>(
            source: TSource,
            customizer: AssignCustomizer
        ): LoDashImplicitWrapper<TValue & TSource>;

        /**
         * @see assignInWith
         */
        assignInWith<TSource1, TSource2>(
            source1: TSource1,
            source2: TSource2,
            customizer: AssignCustomizer
        ): LoDashImplicitWrapper<TValue & TSource1 & TSource2>;

        /**
         * @see assignInWith
         */
        assignInWith<TSource1, TSource2, TSource3>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3,
            customizer: AssignCustomizer
        ): LoDashImplicitWrapper<TValue & TSource1 & TSource2 & TSource3>;

        /**
         * @see assignInWith
         */
        assignInWith<TSource1, TSource2, TSource3, TSource4>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3,
            source4: TSource4,
            customizer: AssignCustomizer
        ): LoDashImplicitWrapper<TValue & TSource1 & TSource2 & TSource3 & TSource4>;

        /**
         * @see _.assignInWith
         */
        assignInWith(): LoDashImplicitWrapper<TValue>;

        /**
         * @see _.assignInWith
         */
        assignInWith<TResult>(...otherArgs: any[]): LoDashImplicitWrapper<TResult>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.assignInWith
         */
        assignInWith<TSource>(
            source: TSource,
            customizer: AssignCustomizer
        ): LoDashExplicitWrapper<TValue & TSource>;

        /**
         * @see assignInWith
         */
        assignInWith<TSource1, TSource2>(
            source1: TSource1,
            source2: TSource2,
            customizer: AssignCustomizer
        ): LoDashExplicitWrapper<TValue & TSource1 & TSource2>;

        /**
         * @see assignInWith
         */
        assignInWith<TSource1, TSource2, TSource3>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3,
            customizer: AssignCustomizer
        ): LoDashExplicitWrapper<TValue & TSource1 & TSource2 & TSource3>;

        /**
         * @see assignInWith
         */
        assignInWith<TSource1, TSource2, TSource3, TSource4>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3,
            source4: TSource4,
            customizer: AssignCustomizer
        ): LoDashExplicitWrapper<TValue & TSource1 & TSource2 & TSource3 & TSource4>;

        /**
         * @see _.assignInWith
         */
        assignInWith(): LoDashExplicitWrapper<TValue>;

        /**
         * @see _.assignInWith
         */
        assignInWith(...otherArgs: any[]): LoDashExplicitWrapper<any>;
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
        create<T extends object, U extends object>(
            prototype: T,
            properties?: U
        ): T & U;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.create
         */
        create<U extends object>(properties?: U): LoDashImplicitWrapper<TValue & U>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.create
         */
        create<U extends object>(properties?: U): LoDashExplicitWrapper<TValue & U>;
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
        defaults<TObject, TSource>(
            object: TObject,
            source: TSource
        ): TSource & TObject;

        /**
         * @see _.defaults
         */
        defaults<TObject, TSource1, TSource2>(
            object: TObject,
            source1: TSource1,
            source2: TSource2
        ): TSource2 & TSource1 & TObject;

        /**
         * @see _.defaults
         */
        defaults<TObject, TSource1, TSource2, TSource3>(
            object: TObject,
            source1: TSource1,
            source2: TSource2,
            source3: TSource3
        ): TSource3 & TSource2 & TSource1 & TObject;

        /**
         * @see _.defaults
         */
        defaults<TObject, TSource1, TSource2, TSource3, TSource4>(
            object: TObject,
            source1: TSource1,
            source2: TSource2,
            source3: TSource3,
            source4: TSource4
        ): TSource4 & TSource3 & TSource2 & TSource1 & TObject;

        /**
         * @see _.defaults
         */
        defaults<TObject>(object: TObject): TObject;

        /**
         * @see _.defaults
         */
        defaults(
            object: any,
            ...sources: any[]
        ): any;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.defaults
         */
        defaults<TSource>(
            source: TSource
        ): LoDashImplicitWrapper<TSource & TValue>;

        /**
         * @see _.defaults
         */
        defaults<TSource1, TSource2>(
            source1: TSource1,
            source2: TSource2
        ): LoDashImplicitWrapper<TSource2 & TSource1 & TValue>;

        /**
         * @see _.defaults
         */
        defaults<TSource1, TSource2, TSource3>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3
        ): LoDashImplicitWrapper<TSource3 & TSource2 & TSource1 & TValue>;

        /**
         * @see _.defaults
         */
        defaults<TSource1, TSource2, TSource3, TSource4>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3,
            source4: TSource4
        ): LoDashImplicitWrapper<TSource4 & TSource3 & TSource2 & TSource1 & TValue>;

        /**
         * @see _.defaults
         */
        defaults(): LoDashImplicitWrapper<TValue>;

        /**
         * @see _.defaults
         */
        defaults(...sources: any[]): LoDashImplicitWrapper<any>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.defaults
         */
        defaults<TSource>(
            source: TSource
        ): LoDashExplicitWrapper<TSource & TValue>;

        /**
         * @see _.defaults
         */
        defaults<TSource1, TSource2>(
            source1: TSource1,
            source2: TSource2
        ): LoDashExplicitWrapper<TSource2 & TSource1 & TValue>;

        /**
         * @see _.defaults
         */
        defaults<TSource1, TSource2, TSource3>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3
        ): LoDashExplicitWrapper<TSource3 & TSource2 & TSource1 & TValue>;

        /**
         * @see _.defaults
         */
        defaults<TSource1, TSource2, TSource3, TSource4>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3,
            source4: TSource4
        ): LoDashExplicitWrapper<TSource4 & TSource3 & TSource2 & TSource1 & TValue>;

        /**
         * @see _.defaults
         */
        defaults(): LoDashExplicitWrapper<TValue>;

        /**
         * @see _.defaults
         */
        defaults(...sources: any[]): LoDashExplicitWrapper<any>;
    }

    //_.defaultsDeep
    interface LoDashStatic {
        /**
         * This method is like _.defaults except that it recursively assigns default properties.
         * @param object The destination object.
         * @param sources The source objects.
         * @return Returns object.
         **/
        defaultsDeep(
            object: any,
            ...sources: any[]): any;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.defaultsDeep
         **/
        defaultsDeep(...sources: any[]): LoDashImplicitWrapper<any>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.defaultsDeep
         **/
        defaultsDeep(...sources: any[]): LoDashExplicitWrapper<any>;
    }

    //_.entries
    interface LoDashStatic {
        /**
         * @see _.toPairs
         */
        entries<T>(object?: Dictionary<T>): Array<[string, T]>;

        /**
         * @see _.toPairs
         */
        entries(object?: object): Array<[string, any]>;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.toPairs
         */
        entries<T>(this: LoDashImplicitWrapper<Dictionary<T>>): LoDashImplicitWrapper<Array<[string, T]>>;

        /**
         * @see _.toPairs
         */
        entries(): LoDashImplicitWrapper<Array<[string, any]>>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.toPairs
         */
        entries<T>(this: LoDashExplicitWrapper<Dictionary<T>>): LoDashExplicitWrapper<Array<[string, T]>>;

        /**
         * @see _.toPairs
         */
        entries(): LoDashExplicitWrapper<Array<[string, any]>>;
    }

    //_.entriesIn
    interface LoDashStatic {
        /**
         * @see _.toPairsIn
         */
        entriesIn<T>(object?: Dictionary<T>): Array<[string, T]>;

        /**
         * @see _.toPairsIn
         */
        entriesIn(object?: object): Array<[string, any]>;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.toPairsIn
         */
        entriesIn<T>(this: LoDashImplicitWrapper<Dictionary<T>>): LoDashImplicitWrapper<Array<[string, T]>>;

        /**
         * @see _.toPairsIn
         */
        entriesIn(): LoDashImplicitWrapper<Array<[string, any]>>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.toPairsIn
         */
        entriesIn<T>(this: LoDashExplicitWrapper<Dictionary<T>>): LoDashExplicitWrapper<Array<[string, T]>>;

        /**
         * @see _.toPairsIn
         */
        entriesIn(): LoDashExplicitWrapper<Array<[string, any]>>;
    }

    // _.extend
    interface LoDashStatic {
        /**
         * @see _.assignIn
         */
        extend<TObject, TSource>(
            object: TObject,
            source: TSource
        ): TObject & TSource;

        /**
         * @see _.assignIn
         */
        extend<TObject, TSource1, TSource2>(
            object: TObject,
            source1: TSource1,
            source2: TSource2
        ): TObject & TSource1 & TSource2;

        /**
         * @see _.assignIn
         */
        extend<TObject, TSource1, TSource2, TSource3>(
            object: TObject,
            source1: TSource1,
            source2: TSource2,
            source3: TSource3
        ): TObject & TSource1 & TSource2 & TSource3;

        /**
         * @see _.assignIn
         */
        extend<TObject, TSource1, TSource2, TSource3, TSource4>(
            object: TObject,
            source1: TSource1,
            source2: TSource2,
            source3: TSource3,
            source4: TSource4
        ): TObject & TSource1 & TSource2 & TSource3 & TSource4;

        /**
         * @see _.assignIn
         */
        extend<TObject>(object: TObject): TObject;

        /**
         * @see _.assignIn
         */
        extend<TResult>(
            object: any,
            ...otherArgs: any[]
        ): TResult;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.assignIn
         */
        extend<TSource>(
            source: TSource
        ): LoDashImplicitWrapper<TValue & TSource>;

        /**
         * @see _.assignIn
         */
        extend<TSource1, TSource2>(
            source1: TSource1,
            source2: TSource2
        ): LoDashImplicitWrapper<TValue & TSource1 & TSource2>;

        /**
         * @see _.assignIn
         */
        extend<TSource1, TSource2, TSource3>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3
        ): LoDashImplicitWrapper<TValue & TSource1 & TSource2 & TSource3>;

        /**
         * @see _.assignIn
         */
        extend<TSource1, TSource2, TSource3, TSource4>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3,
            source4: TSource4
        ): LoDashImplicitWrapper<TValue & TSource1 & TSource2 & TSource3 & TSource4>;

        /**
         * @see _.assignIn
         */
        extend(): LoDashImplicitWrapper<TValue>;

        /**
         * @see _.assignIn
         */
        extend(...otherArgs: any[]): LoDashImplicitWrapper<any>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.assignIn
         */
        extend<TSource>(
            source: TSource
        ): LoDashExplicitWrapper<TValue & TSource>;

        /**
         * @see _.assignIn
         */
        extend<TSource1, TSource2>(
            source1: TSource1,
            source2: TSource2
        ): LoDashExplicitWrapper<TValue & TSource1 & TSource2>;

        /**
         * @see _.assignIn
         */
        extend<TSource1, TSource2, TSource3>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3
        ): LoDashExplicitWrapper<TValue & TSource1 & TSource2 & TSource3>;

        /**
         * @see _.assignIn
         */
        extend<TSource1, TSource2, TSource3, TSource4>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3,
            source4: TSource4
        ): LoDashExplicitWrapper<TValue & TSource1 & TSource2 & TSource3 & TSource4>;

        /**
         * @see _.assignIn
         */
        extend(): LoDashExplicitWrapper<TValue>;

        /**
         * @see _.assignIn
         */
        extend(...otherArgs: any[]): LoDashExplicitWrapper<any>;
    }

    interface LoDashStatic {
        /**
         * @see _.assignInWith
         */
        extendWith<TObject, TSource>(
            object: TObject,
            source: TSource,
            customizer: AssignCustomizer
        ): TObject & TSource;

        /**
         * @see _.assignInWith
         */
        extendWith<TObject, TSource1, TSource2>(
            object: TObject,
            source1: TSource1,
            source2: TSource2,
            customizer: AssignCustomizer
        ): TObject & TSource1 & TSource2;

        /**
         * @see _.assignInWith
         */
        extendWith<TObject, TSource1, TSource2, TSource3>(
            object: TObject,
            source1: TSource1,
            source2: TSource2,
            source3: TSource3,
            customizer: AssignCustomizer
        ): TObject & TSource1 & TSource2 & TSource3;

        /**
         * @see _.assignInWith
         */
        extendWith<TObject, TSource1, TSource2, TSource3, TSource4>(
            object: TObject,
            source1: TSource1,
            source2: TSource2,
            source3: TSource3,
            source4: TSource4,
            customizer: AssignCustomizer
        ): TObject & TSource1 & TSource2 & TSource3 & TSource4;

        /**
         * @see _.assignInWith
         */
        extendWith<TObject>(object: TObject): TObject;

        /**
         * @see _.assignInWith
         */
        extendWith<TResult>(
            object: any,
            ...otherArgs: any[]
        ): TResult;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.assignInWith
         */
        extendWith<TSource>(
            source: TSource,
            customizer: AssignCustomizer
        ): LoDashImplicitWrapper<TValue & TSource>;

        /**
         * @see _.assignInWith
         */
        extendWith<TSource1, TSource2>(
            source1: TSource1,
            source2: TSource2,
            customizer: AssignCustomizer
        ): LoDashImplicitWrapper<TValue & TSource1 & TSource2>;

        /**
         * @see _.assignInWith
         */
        extendWith<TSource1, TSource2, TSource3>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3,
            customizer: AssignCustomizer
        ): LoDashImplicitWrapper<TValue & TSource1 & TSource2 & TSource3>;

        /**
         * @see _.assignInWith
         */
        extendWith<TSource1, TSource2, TSource3, TSource4>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3,
            source4: TSource4,
            customizer: AssignCustomizer
        ): LoDashImplicitWrapper<TValue & TSource1 & TSource2 & TSource3 & TSource4>;

        /**
         * @see _.assignInWith
         */
        extendWith(): LoDashImplicitWrapper<TValue>;

        /**
         * @see _.assignInWith
         */
        extendWith(...otherArgs: any[]): LoDashImplicitWrapper<any>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.assignInWith
         */
        extendWith<TSource>(
            source: TSource,
            customizer: AssignCustomizer
        ): LoDashExplicitWrapper<TValue & TSource>;

        /**
         * @see _.assignInWith
         */
        extendWith<TSource1, TSource2>(
            source1: TSource1,
            source2: TSource2,
            customizer: AssignCustomizer
        ): LoDashExplicitWrapper<TValue & TSource1 & TSource2>;

        /**
         * @see _.assignInWith
         */
        extendWith<TSource1, TSource2, TSource3>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3,
            customizer: AssignCustomizer
        ): LoDashExplicitWrapper<TValue & TSource1 & TSource2 & TSource3>;

        /**
         * @see _.assignInWith
         */
        extendWith<TSource1, TSource2, TSource3, TSource4>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3,
            source4: TSource4,
            customizer: AssignCustomizer
        ): LoDashExplicitWrapper<TValue & TSource1 & TSource2 & TSource3 & TSource4>;

        /**
         * @see _.assignInWith
         */
        extendWith(): LoDashExplicitWrapper<TValue>;

        /**
         * @see _.assignInWith
         */
        extendWith(...otherArgs: any[]): LoDashExplicitWrapper<any>;
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
        findKey<T>(
            object: T | null | undefined,
            predicate?: ObjectIteratee<T>
        ): string | undefined;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.findKey
         */
        findKey<T>(
            this: LoDashImplicitWrapper<T | null | undefined>,
            predicate?: ObjectIteratee<T>
        ): string | undefined;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.findKey
         */
        findKey<T>(
            this: LoDashExplicitWrapper<T | null | undefined>,
            predicate?: ObjectIteratee<T>
        ): LoDashExplicitWrapper<string | undefined>;
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
        findLastKey<T>(
            object: T | null | undefined,
            predicate?: ObjectIteratee<T>
        ): string | undefined;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.findLastKey
         */
        findLastKey<T>(
            this: LoDashImplicitWrapper<T | null | undefined>,
            predicate?: ObjectIteratee<T>
        ): string | undefined;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.findLastKey
         */
        findLastKey<T>(
            this: LoDashExplicitWrapper<T | null | undefined>,
            predicate?: ObjectIteratee<T>
        ): LoDashExplicitWrapper<string | undefined>;
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
            object: T,
            iteratee?: ObjectIterator<T, any>
        ): T;

        /**
         * @see _.forIn
         */
        forIn<T>(
            object: T | null | undefined,
            iteratee?: ObjectIterator<T, any>
        ): T | null | undefined;
    }

    interface LoDashWrapper<TValue> {
        /**
         * @see _.forIn
         */
        forIn<T>(
            this: LoDashWrapper<T | null | undefined>,
            iteratee?: ObjectIterator<T, any>
        ): this;
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
            object: T,
            iteratee?: ObjectIterator<T, any>
        ): T;

        /**
         * @see _.forInRight
         */
        forInRight<T>(
            object: T | null | undefined,
            iteratee?: ObjectIterator<T, any>
        ): T | null | undefined;
    }

    interface LoDashWrapper<TValue> {
        /**
         * @see _.forInRight
         */
        forInRight<T>(
            this: LoDashWrapper<T | null | undefined>,
            iteratee?: ObjectIterator<T, any>
        ): this;
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
            object: T,
            iteratee?: ObjectIterator<T, any>
        ): T;

        /**
         * @see _.forOwn
         */
        forOwn<T>(
            object: T | null | undefined,
            iteratee?: ObjectIterator<T, any>
        ): T | null | undefined;
    }

    interface LoDashWrapper<TValue> {
        /**
         * @see _.forOwn
         */
        forOwn<T>(
            this: LoDashWrapper<T | null | undefined>,
            iteratee?: ObjectIterator<T, any>
        ): this;
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
            object: T,
            iteratee?: ObjectIterator<T, any>
        ): T;

        /**
         * @see _.forOwnRight
         */
        forOwnRight<T>(
            object: T | null | undefined,
            iteratee?: ObjectIterator<T, any>
        ): T | null | undefined;
    }

    interface LoDashWrapper<TValue> {
        /**
         * @see _.forOwnRight
         */
        forOwnRight<T>(
            this: LoDashWrapper<T | null | undefined>,
            iteratee?: ObjectIterator<T, any>
        ): this;
    }

    //_.functions
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

    //_.functionsIn
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

    //_.get
    interface LoDashStatic {
        /**
         * Gets the property value at path of object. If the resolved value is undefined the defaultValue is used
         * in its place.
         *
         * @param object The object to query.
         * @param path The path of the property to get.
         * @param defaultValue The value returned if the resolved value is undefined.
         * @return Returns the resolved value.
         */
        get<TObject extends object, TKey extends keyof TObject>(
            object: TObject,
            path: TKey | [TKey]
        ): TObject[TKey];

        /**
         * @see _.get
         */
        get<TObject extends object, TKey extends keyof TObject>(
            object: TObject | null | undefined,
            path: TKey | [TKey]
        ): TObject[TKey] | undefined;

        /**
         * @see _.get
         */
        get<TObject extends object, TKey extends keyof TObject, TDefault>(
            object: TObject | null | undefined,
            path: TKey | [TKey],
            defaultValue: TDefault
        ): TObject[TKey] | TDefault;

        /**
         * @see _.get
         */
        get<TDefault>(
            object: null | undefined,
            path: PropertyPath,
            defaultValue: TDefault
        ): TDefault;

        /**
         * @see _.get
         */
        get(
            object: null | undefined,
            path: PropertyPath
        ): undefined;

        /**
         * @see _.get
         */
        get(
            object: any,
            path: PropertyPath,
            defaultValue?: any
        ): any;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.get
         */
        get<TKey extends keyof TValue>(
            path: TKey | [TKey]
        ): TValue[TKey];

        /**
         * @see _.get
         */
        get<TObject extends object, TKey extends keyof TObject>(
            this: LoDashImplicitWrapper<TObject | null | undefined>,
            path: TKey | [TKey],
        ): TObject[TKey] | undefined;

        /**
         * @see _.get
         */
        get<TObject extends object, TKey extends keyof TObject, TDefault>(
            this: LoDashImplicitWrapper<TObject | null | undefined>,
            path: TKey | [TKey],
            defaultValue: TDefault
        ): TObject[TKey] | TDefault;

        /**
         * @see _.get
         */
        get<TDefault>(
            this: LoDashImplicitWrapper<null | undefined>,
            path: PropertyPath,
            defaultValue: TDefault
        ): TDefault;

        /**
         * @see _.get
         */
        get(
            this: LoDashImplicitWrapper<null | undefined>,
            path: PropertyPath
        ): undefined;

        /**
         * @see _.get
         */
        get<TResult>(
            path: PropertyPath,
            defaultValue?: any
        ): any;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.get
         */
        get<TKey extends keyof TValue>(
            path: TKey | [TKey]
        ): LoDashExplicitWrapper<TValue[TKey]>;

        /**
         * @see _.get
         */
        get<TObject extends object, TKey extends keyof TObject>(
            this: LoDashExplicitWrapper<TObject | null | undefined>,
            path: TKey | [TKey],
        ): LoDashExplicitWrapper<TObject[TKey] | undefined>;

        /**
         * @see _.get
         */
        get<TObject extends object, TKey extends keyof TObject, TDefault>(
            this: LoDashExplicitWrapper<TObject | null | undefined>,
            path: TKey | [TKey],
            defaultValue: TDefault
        ): LoDashExplicitWrapper<TObject[TKey] | TDefault>;

        /**
         * @see _.get
         */
        get<TDefault>(
            this: LoDashExplicitWrapper<null | undefined>,
            path: PropertyPath,
            defaultValue: TDefault
        ): LoDashExplicitWrapper<TDefault>;

        /**
         * @see _.get
         */
        get(
            this: LoDashExplicitWrapper<null | undefined>,
            path: PropertyPath
        ): LoDashExplicitWrapper<undefined>;

        /**
         * @see _.get
         */
        get(
            path: PropertyPath,
            defaultValue?: any
        ): LoDashExplicitWrapper<any>;
    }

    //_.has
    interface LoDashStatic {
        /**
         * Checks if `path` is a direct property of `object`.
         *
         * @category Object
         * @param object The object to query.
         * @param path The path to check.
         * @returns Returns `true` if `path` exists, else `false`.
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
        has<T>(
            object: T,
            path: PropertyPath
        ): boolean;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.has
         */
        has(path: PropertyPath): boolean;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.has
         */
        has(path: PropertyPath): LoDashExplicitWrapper<boolean>;
    }

    //_.hasIn
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
        invert(
            object: object
        ): Dictionary<string>;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.invert
         */
        invert(): LoDashImplicitWrapper<Dictionary<string>>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.invert
         */
        invert(): LoDashExplicitWrapper<Dictionary<string>>;
    }

    //_.invertBy
    interface LoDashStatic {
        /**
         * This method is like _.invert except that the inverted object is generated from the results of running each
         * element of object through iteratee. The corresponding inverted value of each inverted key is an array of
         * keys responsible for generating the inverted value. The iteratee is invoked with one argument: (value).
         *
         * @param object The object to invert.
         * @param interatee The iteratee invoked per element.
         * @return Returns the new inverted object.
         */
        invertBy<T>(
            object: List<T> | Dictionary<T> | NumericDictionary<T> | null | undefined,
            interatee?: ValueIteratee<T>
        ): Dictionary<string[]>;

        /**
         * @see _.invertBy
         */
        invertBy<T extends object>(
            object: T | null | undefined,
            interatee?: ValueIteratee<T[keyof T]>
        ): Dictionary<string[]>;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.invertBy
         */
        invertBy<T>(
            this: LoDashImplicitWrapper<List<T> | Dictionary<T> | NumericDictionary<T> | null | undefined>,
            interatee?: ValueIteratee<T>
        ): LoDashImplicitWrapper<Dictionary<string[]>>;

        /**
         * @see _.invertBy
         */
        invertBy<T extends object>(
            this: LoDashImplicitWrapper<T | null | undefined>,
            interatee?: ValueIteratee<T[keyof T]>
        ): LoDashImplicitWrapper<Dictionary<string[]>>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.invertBy
         */
        invertBy<T>(
            this: LoDashExplicitWrapper<List<T> | Dictionary<T> | NumericDictionary<T> | null | undefined>,
            interatee?: ValueIteratee<T>
        ): LoDashExplicitWrapper<Dictionary<string[]>>;

        /**
         * @see _.invertBy
         */
        invertBy<T extends object>(
            this: LoDashExplicitWrapper<T | null | undefined>,
            interatee?: ValueIteratee<T[keyof T]>
        ): LoDashExplicitWrapper<Dictionary<string[]>>;
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

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.keys
         */
        keys(): LoDashImplicitWrapper<string[]>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.keys
         */
        keys(): LoDashExplicitWrapper<string[]>;
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

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.keysIn
         */
        keysIn(): LoDashImplicitWrapper<string[]>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.keysIn
         */
        keysIn(): LoDashExplicitWrapper<string[]>;
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
        mapKeys<T>(
            object: List<T> | null | undefined,
            iteratee?: ListIteratee<T>
        ): Dictionary<T>;

        /**
         * @see _.mapKeys
         */
        mapKeys<T>(
            object: Dictionary<T> | null | undefined,
            iteratee?: DictionaryIteratee<T>
        ): Dictionary<T>;

        /**
         * @see _.mapKeys
         */
        mapKeys(
            object: object | null | undefined,
            iteratee?: ObjectIteratee<any>
        ): Dictionary<any>;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.mapKeys
         */
        mapKeys<T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            iteratee?: ListIteratee<T>
        ): LoDashImplicitWrapper<Dictionary<T>>;

        /**
         * @see _.mapKeys
         */
        mapKeys<T>(
            this: LoDashImplicitWrapper<Dictionary<T> | null | undefined>,
            iteratee?: DictionaryIteratee<T>
        ): LoDashImplicitWrapper<Dictionary<T>>;

        /**
         * @see _.mapKeys
         */
        mapKeys(
            this: LoDashImplicitWrapper<object | null | undefined>,
            iteratee?: ObjectIteratee<any>
        ): LoDashImplicitWrapper<Dictionary<any>>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.mapKeys
         */
        mapKeys<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            iteratee?: ListIteratee<T>
        ): LoDashExplicitWrapper<Dictionary<T>>;

        /**
         * @see _.mapKeys
         */
        mapKeys<T>(
            this: LoDashExplicitWrapper<Dictionary<T> | null | undefined>,
            iteratee?: DictionaryIteratee<T>
        ): LoDashExplicitWrapper<Dictionary<T>>;

        /**
         * @see _.mapKeys
         */
        mapKeys(
            this: LoDashExplicitWrapper<object | null | undefined>,
            iteratee?: ObjectIteratee<any>
        ): LoDashExplicitWrapper<Dictionary<any>>;
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
        * @param object The object to iterate over.
        * @param [iteratee=_.identity]  The function invoked per iteration.
        * @param [thisArg] The `this` binding of `iteratee`.
        * @return Returns the new mapped object.
        */
        mapValues<T extends object, TResult>(obj: T | null | undefined, callback: ObjectIterator<T, TResult>): { [P in keyof T]: TResult };

        /**
         * @see _.mapValues
         */
        mapValues<T extends object>(obj: T | null | undefined, iteratee: object): { [P in keyof T]: boolean };

        /**
         * @see _.mapValues
         */
        mapValues<T, TKey extends keyof T>(obj: Dictionary<T> | null | undefined, iteratee: TKey): Dictionary<T[TKey]>;

        /**
         * @see _.mapValues
         */
        mapValues<T extends object, TKey extends keyof T>(obj: T | null | undefined, iteratee: string): { [P in keyof T]: any };

        /**
         * @see _.mapValues
         */
        mapValues<TResult>(obj: string | null | undefined, callback: StringIterator<TResult>): NumericDictionary<TResult>;

        /**
         * @see _.mapValues
         */
        mapValues<T>(obj: Dictionary<T> | null | undefined): Dictionary<T>;

        /**
         * @see _.mapValues
         */
        mapValues<T extends object>(obj: T): T;

        /**
         * @see _.mapValues
         */
        mapValues<T extends object>(obj: T | null | undefined): T | {};

        /**
         * @see _.mapValues
         */
        mapValues(obj: string | null | undefined): NumericDictionary<string>;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.mapValues
         */
        mapValues<T extends object, TResult>(
            this: LoDashImplicitWrapper<T | null | undefined>,
            callback: ObjectIterator<T, TResult>
        ): LoDashImplicitWrapper<{ [P in keyof T]: TResult }>;

        /**
         * @see _.mapValues
         */
        mapValues<T extends object>(
            this: LoDashImplicitWrapper<T | null | undefined>,
            iteratee: object
        ): LoDashImplicitWrapper<{ [P in keyof T]: boolean }>;

        /**
         * @see _.mapValues
         */
        mapValues<T, TKey extends keyof T>(
            this: LoDashImplicitWrapper<Dictionary<T> | null | undefined>,
            iteratee: TKey
        ): LoDashImplicitWrapper<Dictionary<T[TKey]>>;

        /**
         * @see _.mapValues
         */
        mapValues<T extends object, TKey extends keyof T>(
            this: LoDashImplicitWrapper<T | null | undefined>,
            iteratee: string
        ): LoDashImplicitWrapper<{ [P in keyof T]: any }>;

        /**
         * @see _.mapValues
         */
        mapValues<TResult>(
            this: LoDashImplicitWrapper<string | null | undefined>,
            callback: StringIterator<TResult>
        ): LoDashImplicitWrapper<NumericDictionary<TResult>>;

        /**
         * @see _.mapValues
         */
        mapValues<T>(this: LoDashImplicitWrapper<Dictionary<T> | null | undefined>): LoDashImplicitWrapper<Dictionary<T>>;

        /**
         * @see _.mapValues
         */
        mapValues<T extends object>(this: LoDashImplicitWrapper<T>): LoDashImplicitWrapper<T>;

        /**
         * @see _.mapValues
         */
        mapValues<T extends object>(this: LoDashImplicitWrapper<T | null | undefined>): LoDashImplicitWrapper<T | {}>;

        /**
         * @see _.mapValues
         */
        mapValues(this: LoDashImplicitWrapper<string | null | undefined>): LoDashImplicitWrapper<NumericDictionary<string>>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.mapValues
         */
        mapValues<T extends object, TResult>(
            this: LoDashExplicitWrapper<T | null | undefined>,
            callback: ObjectIterator<T, TResult>
        ): LoDashExplicitWrapper<{ [P in keyof T]: TResult }>;

        /**
         * @see _.mapValues
         */
        mapValues<T extends object>(
            this: LoDashExplicitWrapper<T | null | undefined>,
            iteratee: object
        ): LoDashExplicitWrapper<{ [P in keyof T]: boolean }>;

        /**
         * @see _.mapValues
         */
        mapValues<T, TKey extends keyof T>(
            this: LoDashExplicitWrapper<Dictionary<T> | null | undefined>,
            iteratee: TKey
        ): LoDashExplicitWrapper<Dictionary<T[TKey]>>;

        /**
         * @see _.mapValues
         */
        mapValues<T extends object, TKey extends keyof T>(
            this: LoDashExplicitWrapper<T | null | undefined>,
            iteratee: string
        ): LoDashExplicitWrapper<{ [P in keyof T]: any }>;

        /**
         * @see _.mapValues
         */
        mapValues<TResult>(
            this: LoDashExplicitWrapper<string | null | undefined>,
            callback: StringIterator<TResult>
        ): LoDashExplicitWrapper<NumericDictionary<TResult>>;

        /**
         * @see _.mapValues
         */
        mapValues<T>(this: LoDashExplicitWrapper<Dictionary<T> | null | undefined>): LoDashExplicitWrapper<Dictionary<T>>;

        /**
         * @see _.mapValues
         */
        mapValues<T extends object>(this: LoDashExplicitWrapper<T>): LoDashExplicitWrapper<T>;

        /**
         * @see _.mapValues
         */
        mapValues<T extends object>(this: LoDashExplicitWrapper<T | null | undefined>): LoDashExplicitWrapper<T | {}>;

        /**
         * @see _.mapValues
         */
        mapValues(this: LoDashExplicitWrapper<string | null | undefined>): LoDashExplicitWrapper<NumericDictionary<string>>;
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
         * @category Object
         * @param object The destination object.
         * @param [sources] The source objects.
         * @returns Returns `object`.
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
        merge(
            object: any,
            ...otherArgs: any[]
        ): any;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.merge
         */
        merge<TSource>(
            source: TSource
        ): LoDashImplicitWrapper<TValue & TSource>;

        /**
         * @see _.merge
         */
        merge<TSource1, TSource2>(
            source1: TSource1,
            source2: TSource2
        ): LoDashImplicitWrapper<TValue & TSource1 & TSource2>;

        /**
         * @see _.merge
         */
        merge<TSource1, TSource2, TSource3>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3
        ): LoDashImplicitWrapper<TValue & TSource1 & TSource2 & TSource3>;

        /**
         * @see _.merge
         */
        merge<TSource1, TSource2, TSource3, TSource4>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3,
            source4: TSource4
        ): LoDashImplicitWrapper<TValue & TSource1 & TSource2 & TSource3 & TSource4>;

        /**
         * @see _.merge
         */
        merge(
            ...otherArgs: any[]
        ): LoDashImplicitWrapper<any>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.merge
         */
        merge<TSource>(
            source: TSource
        ): LoDashExplicitWrapper<TValue & TSource>;

        /**
         * @see _.merge
         */
        merge<TSource1, TSource2>(
            source1: TSource1,
            source2: TSource2
        ): LoDashExplicitWrapper<TValue & TSource1 & TSource2>;

        /**
         * @see _.merge
         */
        merge<TSource1, TSource2, TSource3>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3
        ): LoDashExplicitWrapper<TValue & TSource1 & TSource2 & TSource3>;

        /**
         * @see _.merge
         */
        merge<TSource1, TSource2, TSource3, TSource4>(
        ): LoDashExplicitWrapper<TValue & TSource1 & TSource2 & TSource3 & TSource4>;

        /**
         * @see _.merge
         */
        merge(
            ...otherArgs: any[]
        ): LoDashExplicitWrapper<any>;
    }

    //_.mergeWith
    type MergeWithCustomizer = { bivariantHack(value: any, srcValue: any, key: string, object: any, source: any): any; }["bivariantHack"]

    interface LoDashStatic {
        /**
         * This method is like `_.merge` except that it accepts `customizer` which
         * is invoked to produce the merged values of the destination and source
         * properties. If `customizer` returns `undefined` merging is handled by the
         * method instead. The `customizer` is invoked with seven arguments:
         * (objValue, srcValue, key, object, source, stack).
         *
         * @category Object
         * @param object The destination object.
         * @param sources The source objects.
         * @param customizer The function to customize assigned values.
         * @returns Returns `object`.
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
        mergeWith(
            object: any,
            ...otherArgs: any[]
        ): any;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.mergeWith
         */
        mergeWith<TSource>(
            source: TSource,
            customizer: MergeWithCustomizer
        ): LoDashImplicitWrapper<TValue & TSource>;

        /**
         * @see _.mergeWith
         */
        mergeWith<TSource1, TSource2>(
            source1: TSource1,
            source2: TSource2,
            customizer: MergeWithCustomizer
        ): LoDashImplicitWrapper<TValue & TSource1 & TSource2>;

        /**
         * @see _.mergeWith
         */
        mergeWith<TSource1, TSource2, TSource3>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3,
            customizer: MergeWithCustomizer
        ): LoDashImplicitWrapper<TValue & TSource1 & TSource2 & TSource3>;

        /**
         * @see _.mergeWith
         */
        mergeWith<TSource1, TSource2, TSource3, TSource4>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3,
            source4: TSource4,
            customizer: MergeWithCustomizer
        ): LoDashImplicitWrapper<TValue & TSource1 & TSource2 & TSource3 & TSource4>;

        /**
         * @see _.mergeWith
         */
        mergeWith(
            ...otherArgs: any[]
        ): LoDashImplicitWrapper<any>;
    }

    //_.omit
    interface LoDashStatic {
        /**
         * The opposite of `_.pick`; this method creates an object composed of the
         * own and inherited enumerable properties of `object` that are not omitted.
         *
         * @category Object
         * @param object The source object.
         * @param [paths] The property names to omit, specified
         *  individually or in arrays..
         * @returns Returns the new object.
         * @example
         *
         * var object = { 'a': 1, 'b': '2', 'c': 3 };
         *
         * _.omit(object, ['a', 'c']);
         * // => { 'b': '2' }
         */
        omit<T>(
            object: Dictionary<T>,
            ...paths: PropertyPath[]
        ): Dictionary<T>;

        /**
         * @see _.omit
         */
        omit<T extends object>(
            object: T | null | undefined,
            ...paths: PropertyPath[]
        ): PartialObject<T>;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.omit
         */
        omit<T>(
            this: LoDashImplicitWrapper<Dictionary<T>>,
            ...paths: PropertyPath[]
        ): LoDashImplicitWrapper<Dictionary<T>>;

        /**
         * @see _.omit
         */
        omit<T extends object>(
            this: LoDashImplicitWrapper<T | null | undefined>,
            ...paths: PropertyPath[]
        ): LoDashImplicitWrapper<PartialObject<T>>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.omit
         */
        omit<T>(
            this: LoDashExplicitWrapper<Dictionary<T>>,
            ...paths: PropertyPath[]
        ): LoDashExplicitWrapper<Dictionary<T>>;

        /**
         * @see _.omit
         */
        omit<T extends object>(
            this: LoDashExplicitWrapper<T | null | undefined>,
            ...paths: PropertyPath[]
        ): LoDashExplicitWrapper<PartialObject<T>>;
    }

    //_.omitBy
    interface LoDashStatic {
        /**
         * The opposite of `_.pickBy`; this method creates an object composed of the
         * own and inherited enumerable properties of `object` that `predicate`
         * doesn't return truthy for.
         *
         * @category Object
         * @param object The source object.
         * @param [predicate=_.identity] The function invoked per property.
         * @returns Returns the new object.
         * @example
         *
         * var object = { 'a': 1, 'b': '2', 'c': 3 };
         *
         * _.omitBy(object, _.isNumber);
         * // => { 'b': '2' }
         */
        omitBy<T extends object>(
            object: T | null | undefined,
            predicate: ValueKeyIteratee<T[keyof T]>
        ): PartialObject<T>;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.omitBy
         */
        omitBy<T extends object>(
            this: LoDashImplicitWrapper<T | null | undefined>,
            predicate: ValueKeyIteratee<T[keyof T]>
        ): LoDashImplicitWrapper<PartialObject<T>>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.omitBy
         */
        omitBy<T extends object>(
            this: LoDashExplicitWrapper<T | null | undefined>,
            predicate: ValueKeyIteratee<T[keyof T]>
        ): LoDashExplicitWrapper<PartialObject<T>>;
    }

    //_.pick
    interface LoDashStatic {
        /**
         * Creates an object composed of the picked `object` properties.
         *
         * @category Object
         * @param object The source object.
         * @param [props] The property names to pick, specified
         *  individually or in arrays.
         * @returns Returns the new object.
         * @example
         *
         * var object = { 'a': 1, 'b': '2', 'c': 3 };
         *
         * _.pick(object, ['a', 'c']);
         * // => { 'a': 1, 'c': 3 }
         */
        pick<T extends object, U extends keyof T>(
            object: T,
             ...props: Array<Many<U>>
        ): Pick<T, U>;

        /**
         * @see _.pick
         */
        pick<T>(
            object: T | null | undefined,
            ...props: PropertyPath[]
        ): PartialDeep<T>;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.pick
         */
        pick<T extends object, U extends keyof T>(
            this: LoDashImplicitWrapper<T>,
            ...props: Array<Many<U>>
        ): LoDashImplicitWrapper<Pick<T, U>>;

        /**
         * @see _.pick
         */
        pick<T extends object>(
            this: LoDashImplicitWrapper<T | null | undefined>,
            ...props: PropertyPath[]
        ): LoDashImplicitWrapper<PartialObject<T>>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.pick
         */
        pick<T extends object, U extends keyof T>(
            this: LoDashExplicitWrapper<T>,
            ...props: Array<Many<U>>
        ): LoDashExplicitWrapper<Pick<T, U>>;

        /**
         * @see _.pick
         */
        pick<T extends object>(
            this: LoDashExplicitWrapper<T | null | undefined>,
            ...props: PropertyPath[]
        ): LoDashExplicitWrapper<PartialObject<T>>;
    }

    //_.pickBy
    interface LoDashStatic {
        /**
         * Creates an object composed of the `object` properties `predicate` returns
         * truthy for. The predicate is invoked with two arguments: (value, key).
         *
         * @category Object
         * @param object The source object.
         * @param [predicate=_.identity] The function invoked per property.
         * @returns Returns the new object.
         * @example
         *
         * var object = { 'a': 1, 'b': '2', 'c': 3 };
         *
         * _.pickBy(object, _.isNumber);
         * // => { 'a': 1, 'c': 3 }
         */
        pickBy<T extends object>(
            object: T | null | undefined,
            predicate?: ValueKeyIteratee<T[keyof T]>
        ): PartialObject<T>;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.pickBy
         */
        pickBy<T extends object>(
            this: LoDashImplicitWrapper<T | null | undefined>,
            predicate?: ValueKeyIteratee<T[keyof T]>
        ): LoDashImplicitWrapper<PartialObject<T>>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.pickBy
         */
        pickBy<T extends object>(
            this: LoDashExplicitWrapper<T | null | undefined>,
            predicate?: ValueKeyIteratee<T[keyof T]>
        ): LoDashExplicitWrapper<PartialObject<T>>;
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
        result<TResult>(
            object: any,
            path: PropertyPath,
            defaultValue?: TResult|((...args: any[]) => TResult)
        ): TResult;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.result
         */
        result<TResult>(
            path: PropertyPath,
            defaultValue?: TResult|((...args: any[]) => TResult)
        ): TResult;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.result
         */
        result<TResult>(
            path: PropertyPath,
            defaultValue?: TResult|((...args: any[]) => TResult)
        ): LoDashExplicitWrapper<TResult>;
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
        set<T extends object>(
            object: T,
            path: PropertyPath,
            value: any
        ): T;

        /**
         * @see _.set
         */
        set<TResult>(
            object: object,
            path: PropertyPath,
            value: any
        ): TResult;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.set
         */
        set(
            path: PropertyPath,
            value: any
        ): this;

        /**
         * @see _.set
         */
        set<TResult>(
            path: PropertyPath,
            value: any
        ): LoDashImplicitWrapper<TResult>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.set
         */
        set(
            path: PropertyPath,
            value: any
        ): this;

        /**
         * @see _.set
         */
        set<TResult>(
            path: PropertyPath,
            value: any
        ): LoDashExplicitWrapper<TResult>;
    }

    //_.setWith
    type SetWithCustomizer<T> = (nsValue: any, key: string, nsObject: T) => any;

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
        setWith<T extends object>(
            object: T,
            path: PropertyPath,
            value: any,
            customizer?: SetWithCustomizer<T>
        ): T;

        setWith<T extends object, TResult>(
            object: T,
            path: PropertyPath,
            value: any,
            customizer?: SetWithCustomizer<T>
        ): TResult;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.setWith
         */
        setWith(
            path: PropertyPath,
            value: any,
            customizer?: SetWithCustomizer<TValue>
        ): this;

        /**
         * @see _.setWith
         */
        setWith<TResult>(
            path: PropertyPath,
            value: any,
            customizer?: SetWithCustomizer<TValue>
        ): LoDashImplicitWrapper<TResult>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.setWith
         */
        setWith(
            path: PropertyPath,
            value: any,
            customizer?: SetWithCustomizer<TValue>
        ): this;

        /**
         * @see _.setWith
         */
        setWith<TResult>(
            path: PropertyPath,
            value: any,
            customizer?: SetWithCustomizer<TValue>
        ): LoDashExplicitWrapper<TResult>;
    }

    //_.toPairs
    interface LoDashStatic {
        /**
         * Creates an array of own enumerable key-value pairs for object.
         *
         * @param object The object to query.
         * @return Returns the new array of key-value pairs.
         */
        toPairs<T>(object?: Dictionary<T>): Array<[string, T]>;

        /**
         * @see _.toPairs
         */
        toPairs(object?: object): Array<[string, any]>;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.toPairs
         */
        toPairs<T>(this: LoDashImplicitWrapper<Dictionary<T>>): LoDashImplicitWrapper<Array<[string, T]>>;

        /**
         * @see _.toPairs
         */
        toPairs(): LoDashImplicitWrapper<Array<[string, any]>>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.toPairs
         */
        toPairs<T>(this: LoDashExplicitWrapper<Dictionary<T>>): LoDashExplicitWrapper<Array<[string, T]>>;

        /**
         * @see _.toPairs
         */
        toPairs(): LoDashExplicitWrapper<Array<[string, any]>>;
    }

    //_.toPairsIn
    interface LoDashStatic {
        /**
         * Creates an array of own and inherited enumerable key-value pairs for object.
         *
         * @param object The object to query.
         * @return Returns the new array of key-value pairs.
         */
        toPairsIn<T>(object?: Dictionary<T>): Array<[string, T]>;

        /**
         * @see _.toPairsIn
         */
        toPairsIn(object?: object): Array<[string, any]>;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.toPairsIn
         */
        toPairsIn<T>(this: LoDashImplicitWrapper<Dictionary<T>>): LoDashImplicitWrapper<Array<[string, T]>>;

        /**
         * @see _.toPairsIn
         */
        toPairsIn(): LoDashImplicitWrapper<Array<[string, any]>>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.toPairsIn
         */
        toPairsIn<T>(this: LoDashExplicitWrapper<Dictionary<T>>): LoDashExplicitWrapper<Array<[string, T]>>;

        /**
         * @see _.toPairsIn
         */
        toPairsIn(): LoDashExplicitWrapper<Array<[string, any]>>;
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
            iteratee: MemoVoidArrayIterator<T, TResult[]>,
            accumulator?: TResult[]
        ): TResult[];

        /**
         * @see _.transform
         */
        transform<T, TResult>(
            object: T[],
            iteratee: MemoVoidArrayIterator<T, Dictionary<TResult>>,
            accumulator: Dictionary<TResult>
        ): Dictionary<TResult>;

        /**
         * @see _.transform
         */
        transform<T, TResult>(
            object: Dictionary<T>,
            iteratee: MemoVoidDictionaryIterator<T, Dictionary<TResult>>,
            accumulator?: Dictionary<TResult>
        ): Dictionary<TResult>;

        /**
         * @see _.transform
         */
        transform<T, TResult>(
            object: Dictionary<T>,
            iteratee: MemoVoidDictionaryIterator<T, TResult[]>,
            accumulator: TResult[]
        ): TResult[];

        /**
         * @see _.transform
         */
        transform(
            object: any[],
        ): any[];

        /**
         * @see _.transform
         */
        transform(
            object: object,
        ): Dictionary<any>;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.transform
         */
        transform<T, TResult>(
            this: LoDashImplicitWrapper<T[]>,
            iteratee: MemoVoidArrayIterator<T, TResult[]>,
            accumulator?: TResult[]
        ): LoDashImplicitWrapper<TResult[]>;

        /**
         * @see _.transform
         */
        transform<T, TResult>(
            this: LoDashImplicitWrapper<T[]>,
            iteratee: MemoVoidArrayIterator<T, Dictionary<TResult>>,
            accumulator: Dictionary<TResult>
        ): LoDashImplicitWrapper<Dictionary<TResult>>;

        /**
         * @see _.transform
         */
        transform<T, TResult>(
            this: LoDashImplicitWrapper<Dictionary<T>>,
            iteratee: MemoVoidDictionaryIterator<T, Dictionary<TResult>>,
            accumulator?: Dictionary<TResult>
        ): LoDashImplicitWrapper<Dictionary<TResult>>;

        /**
         * @see _.transform
         */
        transform<T, TResult>(
            this: LoDashImplicitWrapper<Dictionary<T>>,
            iteratee: MemoVoidDictionaryIterator<T, TResult[]>,
            accumulator: TResult[]
        ): LoDashImplicitWrapper<TResult[]>;

        /**
         * @see _.transform
         */
        transform(
            this: LoDashImplicitWrapper<any[]>,
        ): LoDashImplicitWrapper<any[]>;

        /**
         * @see _.transform
         */
        transform(): LoDashImplicitWrapper<Dictionary<any>>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.transform
         */
        transform<T, TResult>(
            this: LoDashExplicitWrapper<T[]>,
            iteratee: MemoVoidArrayIterator<T, TResult[]>,
            accumulator?: TResult[]
        ): LoDashExplicitWrapper<TResult[]>;

        /**
         * @see _.transform
         */
        transform<T, TResult>(
            this: LoDashExplicitWrapper<T[]>,
            iteratee: MemoVoidArrayIterator<T, Dictionary<TResult>>,
            accumulator?: Dictionary<TResult>
        ): LoDashExplicitWrapper<Dictionary<TResult>>;

        /**
         * @see _.transform
         */
        transform<T, TResult>(
            this: LoDashExplicitWrapper<Dictionary<T>>,
            iteratee: MemoVoidDictionaryIterator<T, Dictionary<TResult>>,
            accumulator?: Dictionary<TResult>
        ): LoDashExplicitWrapper<Dictionary<TResult>>;

        /**
         * @see _.transform
         */
        transform<T, TResult>(
            this: LoDashExplicitWrapper<Dictionary<T>>,
            iteratee: MemoVoidDictionaryIterator<T, TResult[]>,
            accumulator?: TResult[]
        ): LoDashExplicitWrapper<TResult[]>;

        /**
         * @see _.transform
         */
        transform(
            this: LoDashExplicitWrapper<any[]>,
        ): LoDashExplicitWrapper<any[]>;

        /**
         * @see _.transform
         */
        transform(): LoDashExplicitWrapper<Dictionary<any>>;
    }

    //_.unset
    interface LoDashStatic {
        /**
         * Removes the property at path of object.
         *
         * Note: This method mutates object.
         *
         * @param object The object to modify.
         * @param path The path of the property to unset.
         * @return Returns true if the property is deleted, else false.
         */
        unset(
            object: any,
            path: PropertyPath
        ): boolean;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.unset
         */
        unset(path: PropertyPath): LoDashImplicitWrapper<boolean>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.unset
         */
        unset(path: PropertyPath): LoDashExplicitWrapper<boolean>;
    }

    //_.update
    interface LoDashStatic {
        /**
         * This method is like _.set except that accepts updater to produce the value to set. Use _.updateWith to
         * customize path creation. The updater is invoked with one argument: (value).
         *
         * @param object The object to modify.
         * @param path The path of the property to set.
         * @param updater The function to produce the updated value.
         * @return Returns object.
         */
        update(
            object: object,
            path: PropertyPath,
            updater: (value: any) => any
        ): any;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.update
         */
        update(
            path: PropertyPath,
            updater: (value: any) => any
        ): LoDashImplicitWrapper<any>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.update
         */
        update(
            path: PropertyPath,
            updater: (value: any) => any
        ): LoDashExplicitWrapper<any>;
    }

    //_.updateWith
    interface LoDashStatic {
        /**
         * This method is like `_.update` except that it accepts `customizer` which is
         * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
         * path creation is handled by the method instead. The `customizer` is invoked
         * with three arguments: (nsValue, key, nsObject).
         *
         * **Note:** This method mutates `object`.
         *
         * @since 4.6.0
         * @category Object
         * @param object The object to modify.
         * @param path The path of the property to set.
         * @param updater The function to produce the updated value.
         * @param [customizer] The function to customize assigned values.
         * @returns Returns `object`.
         * @example
         *
         * var object = {};
         *
         * _.updateWith(object, '[0][1]', _.constant('a'), Object);
         * // => { '0': { '1': 'a' } }
         */
        updateWith<T extends object>(
            object: T,
            path: PropertyPath,
            updater: (oldValue: any) => any,
            customizer?: SetWithCustomizer<T>
        ): T;

        /**
         * @see _.updateWith
         */
        updateWith<T extends object, TResult>(
            object: T,
            path: PropertyPath,
            updater: (oldValue: any) => any,
            customizer?: SetWithCustomizer<T>
        ): TResult;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.updateWith
         */
        updateWith(
            path: PropertyPath,
            updater: (oldValue: any) => any,
            customizer?: SetWithCustomizer<TValue>
        ): this;

        /**
         * @see _.updateWith
         */
        updateWith<TResult>(
            path: PropertyPath,
            updater: (oldValue: any) => any,
            customizer?: SetWithCustomizer<TValue>
        ): LoDashImplicitWrapper<TResult>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.updateWith
         */
        updateWith(
            path: PropertyPath,
            updater: (oldValue: any) => any,
            customizer?: SetWithCustomizer<TValue>
        ): this;

        /**
         * @see _.updateWith
         */
        updateWith<TResult>(
            path: PropertyPath,
            updater: (oldValue: any) => any,
            customizer?: SetWithCustomizer<TValue>
        ): LoDashExplicitWrapper<TResult>;
    }

    //_.values
    interface LoDashStatic {
        /**
         * Creates an array of the own enumerable property values of object.
         *
         * @param object The object to query.
         * @return Returns an array of property values.
         */
        values<T>(object: Dictionary<T>|NumericDictionary<T>|List<T> | null | undefined): T[];

        /**
         * @see _.values
         */
        values<T extends object>(object: T | null | undefined): Array<T[keyof T]>;

        /**
         * @see _.values
         */
        values(object: any): any[];
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.values
         */
        values<T>(this: LoDashImplicitWrapper<Dictionary<T> | NumericDictionary<T> | List<T> | null | undefined>): LoDashImplicitWrapper<T[]>;

        /**
         * @see _.values
         */
        values<T extends object>(this: LoDashImplicitWrapper<T | null | undefined>): LoDashImplicitWrapper<Array<T[keyof T]>>;

        /**
         * @see _.values
         */
        values(): LoDashImplicitWrapper<any[]>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.values
         */
        values<T>(this: LoDashExplicitWrapper<Dictionary<T> | NumericDictionary<T> | List<T> | null | undefined>): LoDashExplicitWrapper<T[]>;

        /**
         * @see _.values
         */
        values<T extends object>(this: LoDashExplicitWrapper<T | null | undefined>): LoDashExplicitWrapper<Array<T[keyof T]>>;

        /**
         * @see _.values
         */
        values(): LoDashExplicitWrapper<any[]>;
    }

    //_.valuesIn
    interface LoDashStatic {
        /**
         * Creates an array of the own and inherited enumerable property values of object.
         *
         * @param object The object to query.
         * @return Returns the array of property values.
         */
        valuesIn<T>(object: Dictionary<T>|NumericDictionary<T>|List<T> | null | undefined): T[];

        /**
         * @see _.valuesIn
         */
        valuesIn<T extends object>(object: T | null | undefined): Array<T[keyof T]>;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.valuesIn
         */
        valuesIn<T>(this: LoDashImplicitWrapper<Dictionary<T> | NumericDictionary<T> | List<T> | null | undefined>): LoDashImplicitWrapper<T[]>;

        /**
         * @see _.valuesIn
         */
        valuesIn<T extends object>(this: LoDashImplicitWrapper<T | null | undefined>): LoDashImplicitWrapper<Array<T[keyof T]>>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.valuesIn
         */
        valuesIn<T>(this: LoDashExplicitWrapper<Dictionary<T> | NumericDictionary<T> | List<T> | null | undefined>): LoDashExplicitWrapper<T[]>;

        /**
         * @see _.valuesIn
         */
        valuesIn<T extends object>(this: LoDashExplicitWrapper<T | null | undefined>): LoDashExplicitWrapper<Array<T[keyof T]>>;
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

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.camelCase
         */
        camelCase(): string;
    }

    interface LoDashExplicitWrapper<TValue> {
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

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.capitalize
         */
        capitalize(): string;
    }

    interface LoDashExplicitWrapper<TValue> {
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

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.deburr
         */
        deburr(): string;
    }

    interface LoDashExplicitWrapper<TValue> {
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

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.endsWith
         */
        endsWith(
            target?: string,
            position?: number
        ): boolean;
    }

    interface LoDashExplicitWrapper<TValue> {
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

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.escape
         */
        escape(): string;
    }

    interface LoDashExplicitWrapper<TValue> {
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

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.escapeRegExp
         */
        escapeRegExp(): string;
    }

    interface LoDashExplicitWrapper<TValue> {
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

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.kebabCase
         */
        kebabCase(): string;
    }

    interface LoDashExplicitWrapper<TValue> {
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

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.lowerCase
         */
        lowerCase(): string;
    }

    interface LoDashExplicitWrapper<TValue> {
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

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.lowerFirst
         */
        lowerFirst(): string;
    }

    interface LoDashExplicitWrapper<TValue> {
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

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.pad
         */
        pad(
            length?: number,
            chars?: string
        ): string;
    }

    interface LoDashExplicitWrapper<TValue> {
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

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.padEnd
         */
        padEnd(
            length?: number,
            chars?: string
        ): string;
    }

    interface LoDashExplicitWrapper<TValue> {
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

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.padStart
         */
        padStart(
            length?: number,
            chars?: string
        ): string;
    }

    interface LoDashExplicitWrapper<TValue> {
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

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.parseInt
         */
        parseInt(radix?: number): number;
    }

    interface LoDashExplicitWrapper<TValue> {
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

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.repeat
         */
        repeat(n?: number): string;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.repeat
         */
        repeat(n?: number): LoDashExplicitWrapper<string>;
    }

    type ReplaceFunction = (match: string, ...args: any[]) => string;

    //_.replace
    interface LoDashStatic {
        /**
         * Replaces matches for pattern in string with replacement.
         *
         * Note: This method is based on String#replace.
         *
         * @return Returns the modified string.
         */
        replace(
            string: string,
            pattern: RegExp | string,
            replacement: ReplaceFunction | string
        ): string;

        /**
         * @see _.replace
         */
        replace(
            pattern: RegExp | string,
            replacement: ReplaceFunction | string
        ): string;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.replace
         */
        replace(
            pattern: RegExp|string,
            replacement: ReplaceFunction | string
        ): string;

        /**
         * @see _.replace
         */
        replace(
            replacement: ReplaceFunction | string
        ): string;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.replace
         */
        replace(
            pattern: RegExp | string,
            replacement: ReplaceFunction | string
        ): LoDashExplicitWrapper<string>;

        /**
         * @see _.replace
         */
        replace(
            replacement: ReplaceFunction | string
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

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.snakeCase
         */
        snakeCase(): string;
    }

    interface LoDashExplicitWrapper<TValue> {
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
         * @param string The string to trim.
         * @param separator The separator pattern to split by.
         * @param limit The length to truncate results to.
         * @return Returns the new array of string segments.
         */
        split(
            string: string,
            separator?: RegExp|string,
            limit?: number
        ): string[];

        /**
         * Splits string by separator.
         *
         * Note: This method is based on String#split.
         *
         * @param string The string to trim.
         * @param index Not used in this overload.
         * @param guard Enables use as an iteratee for methods like _.map. You should not pass this parameter directly in your code.
         * @return Returns the new array of string segments.
         */
        split(
            string: string,
            index: string | number,
            guard: object
        ): string[];
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.split
         */
        split(
            separator?: RegExp|string,
            limit?: number
        ): LoDashImplicitWrapper<string[]>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.split
         */
        split(
            separator?: RegExp|string,
            limit?: number
        ): LoDashExplicitWrapper<string[]>;
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

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.startCase
         */
        startCase(): string;
    }

    interface LoDashExplicitWrapper<TValue> {
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

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.startsWith
         */
        startsWith(
            target?: string,
            position?: number
        ): boolean;
    }

    interface LoDashExplicitWrapper<TValue> {
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
        (data?: object): string;
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
            string?: string,
            options?: TemplateOptions
        ): TemplateExecutor;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.template
         */
        template(options?: TemplateOptions): TemplateExecutor;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.template
         */
        template(options?: TemplateOptions): LoDashExplicitWrapper<TemplateExecutor>;
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

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.toLower
         */
        toLower(): string;
    }

    interface LoDashExplicitWrapper<TValue> {
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

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.toUpper
         */
        toUpper(): string;
    }

    interface LoDashExplicitWrapper<TValue> {
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

        /**
         * Removes leading and trailing whitespace or specified characters from string.
         *
         * @param string The string to trim.
         * @param index Not used in this overload.
         * @param guard Enables use as an iteratee for methods like _.map. You should not pass this parameter directly in your code.
         * @return Returns the trimmed string.
         */
        trim(
            string: string,
            index: string | number,
            guard: object
        ): string;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.trim
         */
        trim(chars?: string): string;
    }

    interface LoDashExplicitWrapper<TValue> {
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

        /**
         * Removes trailing whitespace or specified characters from string.
         *
         * @param string The string to trim.
         * @param index Not used in this overload.
         * @param guard Enables use as an iteratee for methods like _.map. You should not pass this parameter directly in your code.
         * @return Returns the trimmed string.
         */
        trimEnd(
            string: string,
            index: string | number,
            guard: object
        ): string;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.trimEnd
         */
        trimEnd(chars?: string): string;
    }

    interface LoDashExplicitWrapper<TValue> {
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

        /**
         * Removes leading whitespace or specified characters from string.
         *
         * @param string The string to trim.
         * @param index Not used in this overload.
         * @param guard Enables use as an iteratee for methods like _.map. You should not pass this parameter directly in your code.
         * @return Returns the trimmed string.
         */
        trimStart(
            string: string,
            index: string | number,
            guard: object
        ): string;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.trimStart
         */
        trimStart(chars?: string): string;
    }

    interface LoDashExplicitWrapper<TValue> {
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

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.truncate
         */
        truncate(options?: TruncateOptions): string;
    }

    interface LoDashExplicitWrapper<TValue> {
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

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.unescape
         */
        unescape(): string;
    }

    interface LoDashExplicitWrapper<TValue> {
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

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.upperCase
         */
        upperCase(): string;
    }

    interface LoDashExplicitWrapper<TValue> {
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

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.upperFirst
         */
        upperFirst(): string;
    }

    interface LoDashExplicitWrapper<TValue> {
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

        /**
         * Splits `string` into an array of its words.
         *
         * @param string The string to inspect.
         * @param index Not used in this overload.
         * @param guard Enables use as an iteratee for methods like _.map. You should not pass this parameter directly in your code.
         * @return Returns the words of `string`.
         */
        words(
            string: string,
            index: string | number,
            guard: object
        ): string[];
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.words
         */
        words(pattern?: string|RegExp): string[];
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.words
         */
        words(pattern?: string|RegExp): LoDashExplicitWrapper<string[]>;
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

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.attempt
         */
        attempt<TResult>(...args: any[]): TResult|Error;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.attempt
         */
        attempt<TResult>(...args: any[]): LoDashExplicitWrapper<TResult|Error>;
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

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.constant
         */
        constant(): LoDashImplicitWrapper<() => TValue>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.constant
         */
        constant(): LoDashExplicitWrapper<() => TValue>;
    }

    //_.defaultTo
    interface LoDashStatic {
        /**
         * Checks `value` to determine whether a default value should be returned in
         * its place. The `defaultValue` is returned if `value` is `NaN`, `null`,
         * or `undefined`.
         *
         * @param value The value to check.
         * @param defaultValue The default value.
         * @returns Returns the resolved value.
         */
        defaultTo<T>(value: T | null | undefined, defaultValue: T): T;

        /**
         * @see _.defaultTo
         */
        defaultTo<T, TDefault>(
            value: T | null | undefined,
            defaultValue: TDefault
        ): T | TDefault;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.defaultTo
         */
        defaultTo<T>(this: LoDashImplicitWrapper<T | null | undefined>, defaultValue: T): T;

        /**
         * @see _.defaultTo
         */
        defaultTo<T, TDefault>(
            this: LoDashImplicitWrapper<T | null | undefined>,
            defaultValue: TDefault
        ): T | TDefault;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.defaultTo
         */
        defaultTo<T>(this: LoDashExplicitWrapper<T | null | undefined>, defaultValue: T): LoDashExplicitWrapper<T>;

        /**
         * @see _.defaultTo
         */
        defaultTo<T, TDefault>(
            this: LoDashExplicitWrapper<T | null | undefined>,
            defaultValue: TDefault
        ): LoDashExplicitWrapper<T | TDefault>;
    }

    //_.identity
    interface LoDashStatic {
        /**
         * This method returns the first argument provided to it.
         *
         * @param value Any value.
         * @return Returns value.
         */
        identity<T>(value: T): T;

        /**
         * @see _.identity
         */
        identity(): undefined;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.identity
         */
        identity(): TValue;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.identity
         */
        identity(): this;
    }

    //_.iteratee
    interface LoDashStatic {
        /**
         * Creates a function that invokes `func` with the arguments of the created
         * function. If `func` is a property name the created callback returns the
         * property value for a given element. If `func` is an object the created
         * callback returns `true` for elements that contain the equivalent object properties, otherwise it returns `false`.
         *
         * @category Util
         * @param [func=_.identity] The value to convert to a callback.
         * @returns Returns the callback.
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
        iteratee<TFunction extends (...args: any[]) => any>(
            func: TFunction | string | object
        ): TFunction;

        /**
         * @see _.iteratee
         */
        iteratee(): typeof _.identity; // tslint:disable-line:no-unnecessary-qualifier
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.iteratee
         */
        iteratee<TFunction extends (...args: any[]) => any>(
            this: LoDashImplicitWrapper<TFunction | string | object>
        ): LoDashImplicitWrapper<TFunction>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.iteratee
         */
        iteratee<TFunction extends (...args: any[]) => any>(
            this: LoDashExplicitWrapper<TFunction | string | object>
        ): LoDashExplicitWrapper<TFunction>;
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

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.matches
         */
        matches<V>(): LoDashImplicitWrapper<(value: V) => boolean>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.matches
         */
        matches<V>(): LoDashExplicitWrapper<(value: V) => boolean>;
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
            path: PropertyPath,
            srcValue: T
        ): (value: any) => boolean;

        /**
         * @see _.matchesProperty
         */
        matchesProperty<T, V>(
            path: PropertyPath,
            srcValue: T
        ): (value: V) => boolean;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.matchesProperty
         */
        matchesProperty<SrcValue>(
            srcValue: SrcValue
        ): LoDashImplicitWrapper<(value: any) => boolean>;

        /**
         * @see _.matchesProperty
         */
        matchesProperty<SrcValue, Value>(
            srcValue: SrcValue
        ): LoDashImplicitWrapper<(value: Value) => boolean>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.matchesProperty
         */
        matchesProperty<SrcValue>(
            srcValue: SrcValue
        ): LoDashExplicitWrapper<(value: any) => boolean>;

        /**
         * @see _.matchesProperty
         */
        matchesProperty<SrcValue, Value>(
            srcValue: SrcValue
        ): LoDashExplicitWrapper<(value: Value) => boolean>;
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
        method(
            path: PropertyPath,
            ...args: any[]
        ): (object: any) => any;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.method
         */
        method(...args: any[]): LoDashImplicitWrapper<(object: any) => any>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.method
         */
        method(...args: any[]): LoDashExplicitWrapper<(object: any) => any>;
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
        methodOf(
            object: object,
            ...args: any[]
        ): (path: PropertyPath) => any;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.methodOf
         */
        methodOf(
            ...args: any[]
        ): LoDashImplicitWrapper<(path: PropertyPath) => any>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.methodOf
         */
        methodOf(
            ...args: any[]
        ): LoDashExplicitWrapper<(path: PropertyPath) => any>;
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
        mixin<TObject>(
            object: TObject,
            source: Dictionary<(...args: any[]) => any>,
            options?: MixinOptions
        ): TObject;

        /**
         * @see _.mixin
         */
        mixin<TResult>(
            source: Dictionary<(...args: any[]) => any>,
            options?: MixinOptions
        ): LoDashStatic;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.mixin
         */
        mixin(
            source: Dictionary<(...args: any[]) => any>,
            options?: MixinOptions
        ): this;

        /**
         * @see _.mixin
         */
        mixin(
            options?: MixinOptions
        ): LoDashImplicitWrapper<LoDashStatic>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.mixin
         */
        mixin(
            source: Dictionary<(...args: any[]) => any>,
            options?: MixinOptions
        ): this;

        /**
         * @see _.mixin
         */
        mixin(
            options?: MixinOptions
        ): LoDashExplicitWrapper<LoDashStatic>;
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

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.noConflict
         */
        noConflict(): typeof _;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.noConflict
         */
        noConflict(): LoDashExplicitWrapper<typeof _>;
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

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.noop
         */
        noop(...args: any[]): void;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.noop
         */
        noop(...args: any[]): LoDashExplicitWrapper<undefined>;
    }

    //_.nthArg
    interface LoDashStatic {
        /**
         * Creates a function that returns its nth argument.
         *
         * @param n The index of the argument to return.
         * @return Returns the new function.
         */
        nthArg(n?: number): (...args: any[]) => any;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.nthArg
         */
        nthArg(): LoDashImplicitWrapper<(...args: any[]) => any>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.nthArg
         */
        nthArg(): LoDashExplicitWrapper<(...args: any[]) => any>;
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
        over<TResult>(...iteratees: Array<Many<(...args: any[]) => TResult>>): (...args: any[]) => TResult[];
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.over
         */
        over<TResult>(
            this: LoDashImplicitWrapper<Many<(...args: any[]) => TResult>>,
            ...iteratees: Array<Many<(...args: any[]) => TResult>>
        ): LoDashImplicitWrapper<(...args: any[]) => TResult[]>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.over
         */
        over<TResult>(
            this: LoDashExplicitWrapper<Many<(...args: any[]) => TResult>>,
            ...iteratees: Array<Many<(...args: any[]) => TResult>>
        ): LoDashExplicitWrapper<(...args: any[]) => TResult[]>;
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
        overEvery<T>(...predicates: Array<Many<(...args: T[]) => boolean>>): (...args: T[]) => boolean;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.overEvery
         */
        overEvery<T>(...predicates: Array<Many<(...args: T[]) => boolean>>): LoDashImplicitWrapper<(...args: T[]) => boolean>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.overEvery
         */
        overEvery<T>(...predicates: Array<Many<(...args: T[]) => boolean>>): LoDashExplicitWrapper<(...args: T[]) => boolean>;
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
        overSome<T>(...predicates: Array<Many<(...args: T[]) => boolean>>): (...args: T[]) => boolean;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.overSome
         */
        overSome<T>(...predicates: Array<Many<(...args: T[]) => boolean>>): LoDashImplicitWrapper<(...args: T[]) => boolean>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.overSome
         */
        overSome<T>(...predicates: Array<Many<(...args: T[]) => boolean>>): LoDashExplicitWrapper<(...args: T[]) => boolean>;
    }

    //_.property
    interface LoDashStatic {
        /**
         * Creates a function that returns the property value at path on a given object.
         *
         * @param path The path of the property to get.
         * @return Returns the new function.
         */
        property<TObj, TResult>(path: PropertyPath): (obj: TObj) => TResult;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.property
         */
        property<TObj, TResult>(): LoDashImplicitWrapper<(obj: TObj) => TResult>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.property
         */
        property<TObj, TResult>(): LoDashExplicitWrapper<(obj: TObj) => TResult>;
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
        propertyOf<T extends {}>(object: T): (path: PropertyPath) => any;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.propertyOf
         */
        propertyOf(): LoDashImplicitWrapper<(path: PropertyPath) => any>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.propertyOf
         */
        propertyOf(): LoDashExplicitWrapper<(path: PropertyPath) => any>;
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
            end?: number,
            step?: number
        ): number[];

        /**
         * Creates an array of numbers (positive and/or negative) progressing from start up to, but not including, end.
         * If end is not specified it’s set to start with start then set to 0. If end is less than start a zero-length
         * range is created unless a negative step is specified.
         *
         * @param start The start of the range.
         * @param index Not used in this overload.
         * @param guard Enables use as an iteratee for methods like _.map. You should not pass this parameter directly in your code.
         * @return Returns a new range array.
         */
        range(
            end: number,
            index: string | number,
            guard: object
        ): number[];
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.range
         */
        range(
            end?: number,
            step?: number
        ): LoDashImplicitWrapper<number[]>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.range
         */
        range(
            end?: number,
            step?: number
        ): LoDashExplicitWrapper<number[]>;
    }

    //_.rangeRight
    interface LoDashStatic {
        /**
         * This method is like `_.range` except that it populates values in
         * descending order.
         *
         * @category Util
         * @param start The start of the range.
         * @param end The end of the range.
         * @param step The value to increment or decrement by.
         * @returns Returns the new array of numbers.
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
            end?: number,
            step?: number
        ): number[];

        /**
         * This method is like _.range except that it populates values in
         * descending order.
         *
         * @param start The start of the range.
         * @param index Not used in this overload.
         * @param guard Enables use as an iteratee for methods like _.map. You should not pass this parameter directly in your code.
         * @return Returns a new range array.
         */
        rangeRight(
            end: number,
            index: string | number,
            guard: object
        ): number[];
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.rangeRight
         */
        rangeRight(
            end?: number,
            step?: number
        ): LoDashImplicitWrapper<number[]>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.rangeRight
         */
        rangeRight(
            end?: number,
            step?: number
        ): LoDashExplicitWrapper<number[]>;
    }

    //_.runInContext
    interface LoDashStatic {
        /**
         * Create a new pristine lodash function using the given context object.
         *
         * @param context The context object.
         * @return Returns a new lodash function.
         */
        runInContext(context?: object): typeof _;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.runInContext
         */
        runInContext(): typeof _;
    }

    // _.stubArray
    interface LoDashStatic {
        /**
         * This method returns a new empty array.
         *
         * @returns Returns the new empty array.
         */
        stubArray(): any[];
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.stubArray
         */
        stubArray(): any[];
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.stubArray
         */
        stubArray(): LoDashExplicitWrapper<any[]>;
    }

    // _.stubFalse
    interface LoDashStatic {
        /**
         * This method returns `false`.
         *
         * @returns Returns `false`.
         */
        stubFalse(): boolean;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.stubFalse
         */
        stubFalse(): boolean;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.stubFalse
         */
        stubFalse(): LoDashExplicitWrapper<boolean>;
    }

    interface LoDashStatic {
        /**
         * This method returns a new empty object.
         *
         * @returns Returns the new empty object.
         */
        stubObject(): any;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.stubObject
         */
        stubObject(): any;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.stubObject
         */
        stubObject(): LoDashExplicitWrapper<any>;
    }

    interface LoDashStatic {
        /**
         * This method returns an empty string.
         *
         * @returns Returns the empty string.
         */
        stubString(): string;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.stubString
         */
        stubString(): string;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.stubString
         */
        stubString(): LoDashExplicitWrapper<string>;
    }

    interface LoDashStatic {
        /**
         * This method returns `true`.
         *
         * @returns Returns `true`.
         */
        stubTrue(): boolean;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.stubTrue
         */
        stubTrue(): boolean;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.stubTrue
         */
        stubTrue(): LoDashExplicitWrapper<boolean>;
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

    interface LoDashImplicitWrapper<TValue> {
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

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.times
         */
        times<TResult>(
            iteratee: (num: number) => TResult
        ): LoDashExplicitWrapper<TResult[]>;

        /**
         * @see _.times
         */
        times(): LoDashExplicitWrapper<number[]>;
    }

    //_.toPath
    interface LoDashStatic {
        /**
         * Converts `value` to a property path array.
         *
         * @category Util
         * @param value The value to convert.
         * @returns Returns the new property path array.
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

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.toPath
         */
        toPath(): LoDashImplicitWrapper<string[]>;
    }

    interface LoDashExplicitWrapper<TValue> {
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

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.uniqueId
         */
        uniqueId(): string;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.uniqueId
         */
        uniqueId(): LoDashExplicitWrapper<string>;
    }

    type NotVoid = {} | null | undefined;
    type ArrayIterator<T, TResult> = (value: T, index: number, collection: T[]) => TResult;
    type ListIterator<T, TResult> = (value: T, index: number, collection: List<T>) => TResult;
    type ListIteratee<T> = ListIterator<T, NotVoid> | string | [string, any] | PartialDeep<T>;
    type ListIterateeCustom<T, TResult> = ListIterator<T, TResult> | string | object | [string, any] | PartialDeep<T>;
    type ListIteratorTypeGuard<T, S extends T> = (value: T, index: number, collection: List<T>) => value is S;

    // Note: key should be string, not keyof T, because the actual object may contain extra properties that were not specified in the type.
    type ObjectIterator<TObject, TResult> = (value: TObject[keyof TObject], key: string, collection: TObject) => TResult;
    type ObjectIteratee<TObject> = ObjectIterator<TObject, NotVoid> | string | [string, any] | PartialDeep<TObject[keyof TObject]>;
    type ObjectIterateeCustom<TObject, TResult> = ObjectIterator<TObject, TResult> | string | object | [string, any] | PartialDeep<TObject[keyof TObject]>;
    type ObjectIteratorTypeGuard<TObject, S extends TObject[keyof TObject]> = (value: TObject[keyof TObject], key: string, collection: TObject) => value is S;

    type DictionaryIterator<T, TResult> = ObjectIterator<Dictionary<T>, TResult>;
    type DictionaryIteratee<T> = ObjectIteratee<Dictionary<T>>;
    type DictionaryIteratorTypeGuard<T, S extends T> = ObjectIteratorTypeGuard<Dictionary<T>, S>;

    type NumericDictionaryIterator<T, TResult> = (value: T, key: number, collection: NumericDictionary<T>) => TResult;
    type NumericDictionaryIteratee<T> = NumericDictionaryIterator<T, NotVoid> | string | [string, any] | PartialDeep<T>;
    type NumericDictionaryIterateeCustom<T, TResult> = NumericDictionaryIterator<T, TResult> | string | [string, any] | PartialDeep<T>;

    type StringIterator<TResult> = (char: string, index: number, string: string) => TResult;

    type MemoVoidIterator<T, TResult> = (prev: TResult, curr: T, indexOrKey: any, list: T[]) => void;

    /** @deprecated Use MemoListIterator or MemoObjectIterator instead.  */
    type MemoIterator<T, TResult> = (prev: TResult, curr: T, indexOrKey: any, list: T[]) => TResult;
    type MemoListIterator<T, TResult, TList> = (prev: TResult, curr: T, index: number, list: TList) => TResult;
    type MemoObjectIterator<T, TResult, TList> = (prev: TResult, curr: T, key: string, list: TList) => TResult;

    type MemoVoidArrayIterator<T, TResult> = (acc: TResult, curr: T, index: number, arr: T[]) => void;
    type MemoVoidDictionaryIterator<T, TResult> = (acc: TResult, curr: T, key: string, dict: Dictionary<T>) => void;

    type ValueIteratee<T> = ((value: T) => NotVoid) | string | [string, any] | PartialDeep<T>;
    type ValueKeyIteratee<T> = ((value: T, key: string) => NotVoid) | string | [string, any] | PartialDeep<T>;
    type Comparator<T> = (a: T, b: T) => boolean;
    type Comparator2<T1, T2> = (a: T1, b: T2) => boolean;

    type PropertyName = string | number | symbol;
    type PropertyPath = Many<PropertyName>;

    /** Common interface between Arrays and jQuery objects */
    type List<T> = ArrayLike<T>;

    interface Dictionary<T> {
        [index: string]: T;
    }

    interface NumericDictionary<T> {
        [index: number]: T;
    }

    interface Cancelable {
        cancel(): void;
        flush(): void;
    }

    type PartialDeep<T> = {
        [P in keyof T]?: PartialDeep<T[P]>;
    };

    // For backwards compatibility
    type LoDashImplicitArrayWrapper<T> = LoDashImplicitWrapper<T[]>;
    type LoDashImplicitNillableArrayWrapper<T> = LoDashImplicitWrapper<T[] | null | undefined>;
    type LoDashImplicitObjectWrapper<T> = LoDashImplicitWrapper<T>;
    type LoDashImplicitNillableObjectWrapper<T> = LoDashImplicitWrapper<T | null | undefined>;
    type LoDashImplicitNumberArrayWrapper = LoDashImplicitWrapper<number[]>;
    type LoDashImplicitStringWrapper = LoDashImplicitWrapper<string>;
    type LoDashExplicitArrayWrapper<T> = LoDashExplicitWrapper<T[]>;
    type LoDashExplicitNillableArrayWrapper<T> = LoDashExplicitWrapper<T[] | null | undefined>;
    type LoDashExplicitObjectWrapper<T> = LoDashExplicitWrapper<T>;
    type LoDashExplicitNillableObjectWrapper<T> = LoDashExplicitWrapper<T | null | undefined>;
    type LoDashExplicitNumberArrayWrapper = LoDashExplicitWrapper<number[]>;
    type LoDashExplicitStringWrapper = LoDashExplicitWrapper<string>;
}

// Backward compatibility with --target es5
declare global {
    interface Set<T> { }
    interface Map<K, V> { }
    interface WeakSet<T> { }
    interface WeakMap<K extends object, V> { }
}
