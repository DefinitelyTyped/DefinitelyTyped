// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

import _ = require("../index");

interface Map {
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
     * _.Many lodash methods are guarded to work as iteratees for methods like _.every, _.filter, _.map, _.mapValues,
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
    (): Map;
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
     * _.Many lodash methods are guarded to work as iteratees for methods like _.every, _.filter, _.map, _.mapValues,
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
    <T, TResult>(iteratee: (value: T) => TResult): Map1x1<T, TResult>;
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
     * _.Many lodash methods are guarded to work as iteratees for methods like _.every, _.filter, _.map, _.mapValues,
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
    <T, TResult>(iteratee: (value: T) => TResult, collection: T[] | _.List<T> | null | undefined): TResult[];
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
     * _.Many lodash methods are guarded to work as iteratees for methods like _.every, _.filter, _.map, _.mapValues,
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
    <T extends object, TResult>(iteratee: (value: T[keyof T]) => TResult): Map3x1<T, TResult>;
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
     * _.Many lodash methods are guarded to work as iteratees for methods like _.every, _.filter, _.map, _.mapValues,
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
    <T extends object, TResult>(iteratee: (value: T[keyof T]) => TResult, collection: T | null | undefined): TResult[];
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
     * _.Many lodash methods are guarded to work as iteratees for methods like _.every, _.filter, _.map, _.mapValues,
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
    <T, K extends keyof T>(iteratee: K): Map4x1<T, K>;
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
     * _.Many lodash methods are guarded to work as iteratees for methods like _.every, _.filter, _.map, _.mapValues,
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
    <T, K extends keyof T>(iteratee: K, collection: _.List<T> | _.Dictionary<T> | _.NumericDictionary<T> | null | undefined): Array<T[K]>;
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
     * _.Many lodash methods are guarded to work as iteratees for methods like _.every, _.filter, _.map, _.mapValues,
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
    (iteratee: string): Map5x1;
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
     * _.Many lodash methods are guarded to work as iteratees for methods like _.every, _.filter, _.map, _.mapValues,
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
    <T>(iteratee: string, collection: _.List<T> | _.Dictionary<T> | _.NumericDictionary<T> | null | undefined): any[];
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
     * _.Many lodash methods are guarded to work as iteratees for methods like _.every, _.filter, _.map, _.mapValues,
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
    (iteratee: object): Map6x1;
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
     * _.Many lodash methods are guarded to work as iteratees for methods like _.every, _.filter, _.map, _.mapValues,
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
    <T>(iteratee: object, collection: _.List<T> | _.Dictionary<T> | _.NumericDictionary<T> | null | undefined): boolean[];
}
interface Map1x1<T, TResult> {
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
     * _.Many lodash methods are guarded to work as iteratees for methods like _.every, _.filter, _.map, _.mapValues,
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
    (): Map1x1<T, TResult>;
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
     * _.Many lodash methods are guarded to work as iteratees for methods like _.every, _.filter, _.map, _.mapValues,
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
    (collection: T[] | _.List<T> | null | undefined): TResult[];
}
interface Map3x1<T extends object, TResult> {
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
     * _.Many lodash methods are guarded to work as iteratees for methods like _.every, _.filter, _.map, _.mapValues,
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
    (): Map3x1<T, TResult>;
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
     * _.Many lodash methods are guarded to work as iteratees for methods like _.every, _.filter, _.map, _.mapValues,
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
    (collection: T | null | undefined): TResult[];
}
interface Map4x1<T, K extends keyof T> {
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
     * _.Many lodash methods are guarded to work as iteratees for methods like _.every, _.filter, _.map, _.mapValues,
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
    (): Map4x1<T, K>;
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
     * _.Many lodash methods are guarded to work as iteratees for methods like _.every, _.filter, _.map, _.mapValues,
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
    (collection: _.List<T> | _.Dictionary<T> | _.NumericDictionary<T> | null | undefined): Array<T[K]>;
}
interface Map5x1 {
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
     * _.Many lodash methods are guarded to work as iteratees for methods like _.every, _.filter, _.map, _.mapValues,
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
    (): Map5x1;
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
     * _.Many lodash methods are guarded to work as iteratees for methods like _.every, _.filter, _.map, _.mapValues,
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
    <T>(collection: _.List<T> | _.Dictionary<T> | _.NumericDictionary<T> | null | undefined): any[];
}
interface Map6x1 {
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
     * _.Many lodash methods are guarded to work as iteratees for methods like _.every, _.filter, _.map, _.mapValues,
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
    (): Map6x1;
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
     * _.Many lodash methods are guarded to work as iteratees for methods like _.every, _.filter, _.map, _.mapValues,
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
    <T>(collection: _.List<T> | _.Dictionary<T> | _.NumericDictionary<T> | null | undefined): boolean[];
}

declare const pluck: Map;
export = pluck;
