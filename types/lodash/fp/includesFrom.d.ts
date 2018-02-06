import _ = require("../index");

declare namespace Lodash {
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
        (fromIndex: number): Includes1x1;
        /**
         * Checks if target is in collection using SameValueZero for equality comparisons. If fromIndex is negative,
         * it’s used as the offset from the end of collection.
         *
         * @param collection The collection to search.
         * @param target The value to search for.
         * @param fromIndex The index to search from.
         * @return True if the target element is found, else false.
         */
        <T>(fromIndex: number, collection: _.List<T>|_.Dictionary<T> | null | undefined): Includes1x2<T>;
        /**
         * Checks if target is in collection using SameValueZero for equality comparisons. If fromIndex is negative,
         * it’s used as the offset from the end of collection.
         *
         * @param collection The collection to search.
         * @param target The value to search for.
         * @param fromIndex The index to search from.
         * @return True if the target element is found, else false.
         */
        <T>(fromIndex: number, collection: _.List<T>|_.Dictionary<T> | null | undefined, target: T): boolean;
    }
    interface Includes1x1 {
        /**
         * Checks if target is in collection using SameValueZero for equality comparisons. If fromIndex is negative,
         * it’s used as the offset from the end of collection.
         *
         * @param collection The collection to search.
         * @param target The value to search for.
         * @param fromIndex The index to search from.
         * @return True if the target element is found, else false.
         */
        (): Includes1x1;
        /**
         * Checks if target is in collection using SameValueZero for equality comparisons. If fromIndex is negative,
         * it’s used as the offset from the end of collection.
         *
         * @param collection The collection to search.
         * @param target The value to search for.
         * @param fromIndex The index to search from.
         * @return True if the target element is found, else false.
         */
        <T>(collection: _.List<T>|_.Dictionary<T> | null | undefined): Includes1x2<T>;
        /**
         * Checks if target is in collection using SameValueZero for equality comparisons. If fromIndex is negative,
         * it’s used as the offset from the end of collection.
         *
         * @param collection The collection to search.
         * @param target The value to search for.
         * @param fromIndex The index to search from.
         * @return True if the target element is found, else false.
         */
        <T>(collection: _.List<T>|_.Dictionary<T> | null | undefined, target: T): boolean;
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
        (target: T): boolean;
    }
}

declare const includesFrom: Lodash.Includes;
export = includesFrom;
