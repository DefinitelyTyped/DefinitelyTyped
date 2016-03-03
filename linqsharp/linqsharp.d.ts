// Type definitions for linqsharp
// Project: https://www.npmjs.com/package/linqsharp
// Definitions by: Bruno Leonardo Michels <https://github.com/brunolm>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

// JSDoc: Extracted and adapted from .NET source code.

/**
 * LinqSharp module defines a helper class with
 * .NET's Linq methods.
 *
 * @module linqsharp
 */
declare module "linqsharp"
{
    export namespace LinqSharp {
        /**
         * Defines methods to support the comparison of objects for equality.
         *
         * {T} The type of objects to compare.
         */
        export interface IEqualityComparer<T> {
            Equals(x: T, y: T): boolean;
            GetHashCode(obj: T): number;
        }

        /**
         * Represents a collection of objects that have a common key.
         *
         * {TKey} The type of the key.
         * {T} The type of the values.
         */
        export interface IGrouping<TKey, T> {
            Key: TKey;
            Elements: T[];
        }

        /**
         * Gets the HashCode of the object.
         *
         * @param e Object to compute hash.
         * @returns A computed HashCode for the object.
         */
        export function GetHashCode(e: any): any;

        /**
         * Transforms a object into a string replacing circular
         * references by reference tokens.
         *
         * @param obj Object to convert to string.
         * @returns String representation of the object.
         */
        export function StringifyNonCircular(obj: any): string;
    }

    /**
     * Wrapper class for an array that provides Linq functionallity.
     *
     * @class Linq<T>
     */
    class Linq<T> {
        /** {T[]} Internal array reference. */
        private a: T[];

        /**
         * Creates a new instance holding an array of <T>.
         * @constructor
         *
         * @param {Array} a Array.
         */
        constructor(a?: T[]);

        /**
         * Applies an accumulator function over a sequence.
         *
         * @param func An accumulator function to be
         * invoked on each element.
         * @param {T} [initialValue] The initial accumulator value.
         *
         * @throws Error if array is empty.
         *
         * @returns {T} The final accumulator value.
         */
        Aggregate<TResult>(func: (previous: T, next: T) => TResult, initialValue?: T): T;

        /**
         * Determines whether all elements of a sequence satisfy a condition.
         *
         * @param predicate A function to test each element for a condition.
         *
         * @returns true if every element of the source sequence passes the test in the specified
         * predicate, or if the sequence is empty; otherwise, false.
         */
        All(predicate: (value: T) => boolean): boolean;

        /**
         * Determines whether a sequence contains any elements.
         *
         * @param [predicate] A function to test each element for a condition.
         *
         * @returns true if any elements in the source sequence pass the test in the specified predicate;
         * otherwise, false. If no predicate is specified return true if the source sequence contains any elements;
         * otherwise, false.
         */
        Any(predicate?: (value: T) => boolean): boolean;

        /**
         * Computes the average of a sequence of {number} values.
         *
         * @param [selector] A transform function to apply to each element.
         *
         * @returns The average of the sequence of values.
         */
        Average(selector?: (value: T) => number): number;

        /**
         * Concatenates two sequences.
         *
         * @param array The sequence to concatenate to the first sequence.
         *
         * @returns An array that contains the concatenated elements of the two input sequences.
         */
        Concat(array: T[]): Linq<T>;

        /**
         * Determines whether a sequence contains a specified element by using a specified comparer.
         *
         * @param value The value to locate in the sequence.
         * @param [comparer] An IEqualityComparer<T> to compare values.
         *
         * @returns true if the source sequence contains an element that has the specified value;
         * otherwise, false.
         */
        Contains(value: T, comparer?: LinqSharp.IEqualityComparer<T>): boolean;

        /**
         * Returns a number that represents how many elements in the specified sequence satisfy a condition.
         *
         * @param [selector] A function to test each element for a condition.
         *
         * @returns A number that represents how many elements in the sequence satisfy the condition
         * in the predicate function.
         */
        Count(selector?: (value: T) => boolean): number;

        /**
         * Returns distinct elements from a sequence by using a specified IEqualityComparer<T>
         * to compare values.
         *
         * @param [comparer] An IEqualityComparer<T> to compare values.
         *
         * @returns An array that contains distinct elements from the source sequence.
         */
        Distinct(comparer?: LinqSharp.IEqualityComparer<T>): Linq<T>;

        /**
         * Returns distinct elements from a sequence by using a specified IEqualityComparer<T>
         * to compare values.
         *
         * @param selector A function to test each element for a condition.
         * @param [comparer] An IEqualityComparer<T> to compare values.
         *
         * @returns An array that contains distinct elements from the source sequence.
         */
        DistinctBy<U>(selector: (e: T) => U, comparer?: LinqSharp.IEqualityComparer<T>): Linq<T>;

        /**
         * Returns the element at a specified index in a sequence.
         *
         * @param index The zero-based index of the element to retrieve.
         *
         * @throws index is less than 0 or greater than or equal to the number of elements in source.
         *
         * @returns The element at the specified position in the source sequence.
         */
        ElementAt(index: number): T;

        /**
         * Returns the element at a specified index in a sequence or a default value if
         * the index is out of range.
         *
         * @param index The zero-based index of the element to retrieve.
         * @param defaultValue A default value if no element is found.
         *
         * @returns defaultValue if the index is outside the bounds of the source sequence;
         * otherwise, the element at the specified position in the source sequence.
         */
        ElementAtOrDefault(index: number, defaultValue: T): T;

        /**
         * Produces the set difference of two sequences by using the specified IEqualityComparer<T>
         * to compare values.
         *
         * @param except An array whose elements that also occur in the first sequence will cause
         * those elements to be removed from the returned sequence.
         * @param [comparer] An IEqualityComparer<T> to compare values.
         *
         * @returns A sequence that contains the set difference of the elements of two sequences.
         */
        Except(except: T[], comparer?: LinqSharp.IEqualityComparer<T>): Linq<T>;

        /**
         * Returns the first element in a sequence that satisfies a specified condition.
         *
         * @param [selector] A function to test each element for a condition.
         *
         * @throws No element satisfies the condition in predicate.-or-The source sequence is empty.
         *
         * @returns The first element in the sequence that passes the test in the specified predicate function.
         */
        First(selector?: (e: T) => boolean): T;

        /**
         * Returns the first element of the sequence that satisfies a condition or a default
         * value if no such element is found.
         *
         * @param [selector] A function to test each element for a condition.
         * @param [defaultValue] A default value to return if no element is found.
         *
         * @returns defaultValue if source is empty or if no element passes the test specified by predicate;
         * otherwise, the first element in source that passes the test specified by predicate.
         */
        FirstOrDefault(selector?: (e: T) => boolean, defaultValue?: T): T;

        /**
         * Performs the specified action on each element of the array.
         *
         * @param callback The function delegate to perform on each element of the array.
         */
        ForEach(callback: (e: T, index: number) => any): void;

        /**
         * Groups the elements of a sequence according to a specified key selector function.
         *
         * @param keySelector A function to extract the key for each element.
         * @param [elementSelector] A function to create a result value from each group.
         * @param [comparer] An IEqualityComparer<TKey> to compare keys with.
         *
         * @returns A collection of elements of type TResult where each element represents a projection
         * over a group and its key.
         */
        GroupBy<TKey, TElement>(keySelector: (e: T) => TKey, elementSelector?: (e: T) => TElement, comparer?: LinqSharp.IEqualityComparer<TKey>): Linq<any>;

        /**
         * Searches for the specified object and returns the zero-based index of the first
         * occurrence within the entire array.
         *
         * @param e The object to locate in the array.
         * @param [comparer] An IEqualityComparer<T> to compare elements with.
         *
         * @returns The zero-based index of the first occurrence of item within the entire array, if found;
         * otherwise, –1.
         */
        IndexOf(e: T, comparer?: LinqSharp.IEqualityComparer<T>): number;

        /**
         * Produces the set intersection of two sequences by using the specified IEqualityComparer<T>
         * to compare values.
         *
         * @param array An array whose distinct elements that also appear in the first sequence will be returned.
         * @param [comparer] An IEqualityComparer<T> to compare values.
         *
         * @returns A sequence that contains the elements that form the set intersection of two sequences.
         */
        Intersect(array: T[], comparer?: LinqSharp.IEqualityComparer<T>): Linq<T>;

        /**
         * Correlates the elements of two sequences based on matching keys. A specified IEqualityComparer<T> is used to compare keys.
         *
         * @param array The sequence to join to the first sequence.
         * @param outerKeySelector A function to extract the join key from each element of the first sequence.
         * @param innerKeySelector A function to extract the join key from each element of the second sequence.
         * @param resultSelector A function to create a result element from two matching elements.
         * @param [comparer] An IEqualityComparer<T> to hash and compare keys.
         *
         * @returns An array that has elements of type TResult that are obtained by performing an inner join on two sequences.
         */
        Join<TInner, TKey, TResult>(array: TInner[], outerKeySelector: (e: T) => TKey, innerKeySelector: (e: TInner) => TKey, resultSelector: (outer: T, inner: TInner) => TResult, comparer?: LinqSharp.IEqualityComparer<TKey>): Linq<TResult>;

        /**
         * Returns the last element of a sequence that satisfies a specified condition.
         *
         * @param [predicate] A function to test each element for a condition.
         *
         * @throws No element satisfies the condition in predicate.-or-The source sequence is empty.
         *
         * @returns The last element in the sequence that passes the test in the specified predicate function.
         */
        Last(predicate?: (e: T) => boolean): T;

        /**
         * Returns the last element of a sequence that satisfies a condition or a default
         * value if no such element is found.
         *
         * @param [predicate] A function to test each element for a condition.
         * @param [defaultValue] A default value to return if no element is found.
         *
         * @returns defaultValue if the sequence is empty or if no elements pass the test in
         * the predicate function; otherwise, the last element that passes the test in the
         * predicate function.
         */
        LastOrDefault(predicate?: (e: T) => boolean, defaultValue?: T): T;

        /**
         * Returns the maximum value in a sequence of System.Double values.
         *
         * @param [selector] A transform function to apply to each element.
         *
         * @returns The maximum value in the sequence.
         */
        Max(): T;
        Max<TResult>(selector?: (e: T) => TResult): TResult;

        /**
         * Returns the minimum value in a sequence of System.Int64 values.
         *
         * @param [selector] A transform function to apply to each element.
         *
         * @returns The minimum value in the sequence.
         */
        Min(): T;
        Min<TResult>(selector?: (e: T) => TResult): TResult;

        /**
         * Sorts the elements of a sequence in ascending order according to a key.
         *
         * @param keySelector A function to extract a key from an element.
         * @param [comparer] An IEqualityComparer<T> to compare values.
         *
         * @returns An array whose elements are sorted according to a key.
         */
        OrderBy<TKey>(keySelector: (e: T) => TKey, comparer?: (a: TKey, b: TKey) => number): Linq<T>;

        /**
         * Sorts the elements of a sequence in descending order according to a key.
         *
         * @param keySelector A function to extract a key from an element.
         * @param [comparer] An IEqualityComparer<T> to compare values.
         *
         * @returns An array whose elements are sorted in descending order according to a key.
         */
        OrderByDescending<TKey>(keySelector: (e: T) => TKey, comparer?: (a: TKey, b: TKey) => number): Linq<T>;

        /**
         * Inverts the order of the elements in a sequence.
         *
         * @returns A sequence whose elements correspond to those of the input sequence in reverse order.
         */
        Reverse(): Linq<T>;

        /**
         * Projects each element of a sequence into a new form.
         *
         * @param selector A transform function to apply to each element.
         *
         * @returns An array whose elements are the result of invoking the transform function on each element of source.
         */
        Select<TResult>(selector: (e: T, i?: number) => TResult): Linq<TResult>;

        /**
         * Projects each element of a sequence to an array flattens the resulting sequences into one sequence,
         * and invokes a result selector function on each element therein.
         *
         * @param selector A transform function to apply to each element of the input sequence.
         * @param [resultSelector] A transform function to apply to each element of the intermediate sequence.
         *
         * @returns An array whose elements are the result of invoking the one-to-many transform function
         * selector on each element of source and then mapping each of those sequence elements and
         * their corresponding source element to a result element.
         */
        SelectMany<TResult>(selector: (e: T) => T[], resultSelector?: (e: T) => TResult): Linq<TResult>;

        /**
         * Determines whether two sequences are equal by comparing their elements by using
         * a specified IEqualityComparer<T>.
         *
         * @param second An array to compare to the first sequence.
         * @param [comparer] An equality comparer to compare values.
         *
         * @returns true if the two source sequences are of equal length and their corresponding
         * elements compare equal according to comparer; otherwise, false.
         */
        SequenceEqual(second: T[], comparer?: (a: T, b: T) => boolean): boolean;

        /**
         * Returns the only element of a sequence that satisfies a specified condition,
         * and throws an exception if more than one such element exists.
         *
         * @param [predicate] A function to test an element for a condition.
         *
         * @returns The single element of the input sequence that satisfies a condition.
         */
        Single(predicate?: (e: T) => boolean): T;

        /**
         * Returns the only element of a sequence that satisfies a specified condition or
         * a default value if no such element exists; this method throws an exception if
         * more than one element satisfies the condition.
         *
         * @param [predicate] A function to test an element for a condition.
         * @param [defaultValue] A default value if no element is found.
         *
         * @returns The single element of the input sequence that satisfies the condition,
         * or defaultValue if no such element is found.
         */
        SingleOrDefault(predicate?: (e: T) => boolean, defaultValue?: T): T;

        /**
         * Bypasses a specified number of elements in a sequence and then returns the remaining
         * elements.
         *
         * @param count The number of elements to skip before returning the remaining elements.
         *
         * @returns An array that contains the elements that occur
         * after the specified index in the input sequence.
         */
        Skip(count: number): Linq<T>;

        /**
         * Bypasses elements in a sequence as long as a specified condition is true and
         * then returns the remaining elements.
         *
         * @param predicate A function to test an element for a condition.
         *
         * @returns An array that contains the elements from the
         * input sequence starting at the first element in the linear series that does not
         * pass the test specified by predicate.
         */
        SkipWhile(predicate: (e: T) => boolean): Linq<T>;

        /**
         * Computes the sum of a sequence values.
         *
         * @param [selector] A transform function to apply to each element.
         *
         * @returns The sum of the values in the sequence.
         */
        Sum(selector?: (value: T) => number): number;

        /**
         * Returns a specified number of contiguous elements from the start of a sequence.
         *
         * @param count The number of elements to skip before returning the remaining elements.
         *
         * @returns An array that contains the specified number of elements from the start
         * of the input sequence.
         */
        Take(count: number): Linq<T>;

        /**
         * Returns elements from a sequence as long as a specified condition is true.
         *
         * @param predicate A function to test an element for a condition.
         *
         * @returns An array that contains the elements from the
         * input sequence that occur before the element at which the test no longer passes.
         */
        TakeWhile(predicate: (e: T) => boolean): Linq<T>;

        /**
         * Produces the set union of two sequences by using a specified IEqualityComparer<T>.
         *
         * @param second An array whose distinct elements form the second set for the union.
         * @param [comparer] An equality comparer to compare values.
         *
         * @returns An array that contains the elements from both
         * input sequences, excluding duplicates.
         */
        Union(second: T[], comparer?: LinqSharp.IEqualityComparer<T>): Linq<T>;

        /**
         * Filters a sequence of values based on a predicate.
         *
         * @param selector A transform function to apply to each element.
         *
         * @returns  An array that contains elements from the input sequence
         * that satisfy the condition.
         */
        Where(selector: (value: T) => boolean): Linq<T>;

        /**
         * Applies a specified function to the corresponding elements of two sequences,
         * producing a sequence of the results.
         *
         * @param array The second sequence to merge.
         * @param resultSelector A function that specifies how to merge the elements from the two sequences.
         *
         * @returns An array that contains merged elements of two input sequences.
         */
        Zip<TInner, TResult>(array: TInner[], resultSelector: (o: T, i: TInner) => TResult): Linq<TResult>;

        /**
         * Retrieves the internal array.
         *
         * @returns Internal array.
         */
        ToArray(): T[];
    }
    export default Linq;
}
