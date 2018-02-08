// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

import _ = require("../index");

interface Includes {
    /**
     * Checks if target is in collection using SameValueZero for equality comparisons. If fromIndex is negative,
     * it’s used as the offset from the end of collection.
     *
     * @param collection The collection to search.
     * @param target The value to search for.
     * @param fromIndex The index to search from.
     * @return True if the target element is found, else false.
     */
    (): Includes;
    /**
     * Checks if target is in collection using SameValueZero for equality comparisons. If fromIndex is negative,
     * it’s used as the offset from the end of collection.
     *
     * @param collection The collection to search.
     * @param target The value to search for.
     * @param fromIndex The index to search from.
     * @return True if the target element is found, else false.
     */
    <T>(target: T): Includes1x1<T>;
    /**
     * Checks if target is in collection using SameValueZero for equality comparisons. If fromIndex is negative,
     * it’s used as the offset from the end of collection.
     *
     * @param collection The collection to search.
     * @param target The value to search for.
     * @param fromIndex The index to search from.
     * @return True if the target element is found, else false.
     */
    <T>(target: T, fromIndex: number): Includes1x2<T>;
    /**
     * Checks if target is in collection using SameValueZero for equality comparisons. If fromIndex is negative,
     * it’s used as the offset from the end of collection.
     *
     * @param collection The collection to search.
     * @param target The value to search for.
     * @param fromIndex The index to search from.
     * @return True if the target element is found, else false.
     */
    <T>(target: T, fromIndex: number, collection: _.List<T>|_.Dictionary<T> | null | undefined): boolean;
}
interface Includes1x1<T> {
    /**
     * Checks if target is in collection using SameValueZero for equality comparisons. If fromIndex is negative,
     * it’s used as the offset from the end of collection.
     *
     * @param collection The collection to search.
     * @param target The value to search for.
     * @param fromIndex The index to search from.
     * @return True if the target element is found, else false.
     */
    (): Includes1x1<T>;
    /**
     * Checks if target is in collection using SameValueZero for equality comparisons. If fromIndex is negative,
     * it’s used as the offset from the end of collection.
     *
     * @param collection The collection to search.
     * @param target The value to search for.
     * @param fromIndex The index to search from.
     * @return True if the target element is found, else false.
     */
    (fromIndex: number): Includes1x2<T>;
    /**
     * Checks if target is in collection using SameValueZero for equality comparisons. If fromIndex is negative,
     * it’s used as the offset from the end of collection.
     *
     * @param collection The collection to search.
     * @param target The value to search for.
     * @param fromIndex The index to search from.
     * @return True if the target element is found, else false.
     */
    (fromIndex: number, collection: _.List<T>|_.Dictionary<T> | null | undefined): boolean;
}
interface Includes1x2<T> {
    /**
     * Checks if target is in collection using SameValueZero for equality comparisons. If fromIndex is negative,
     * it’s used as the offset from the end of collection.
     *
     * @param collection The collection to search.
     * @param target The value to search for.
     * @param fromIndex The index to search from.
     * @return True if the target element is found, else false.
     */
    (): Includes1x2<T>;
    /**
     * Checks if target is in collection using SameValueZero for equality comparisons. If fromIndex is negative,
     * it’s used as the offset from the end of collection.
     *
     * @param collection The collection to search.
     * @param target The value to search for.
     * @param fromIndex The index to search from.
     * @return True if the target element is found, else false.
     */
    (collection: _.List<T>|_.Dictionary<T> | null | undefined): boolean;
}

declare const includesFrom: Includes;
declare namespace includesFrom {}
export = includesFrom;
