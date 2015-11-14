// Type definitions for Kinq 0.0.3
// Project: https://github.com/SunshinyNeko/Kinq
// Definitions by: SunshinyNeko
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare interface _Linqable<T> {
  
    /* *************
    * Linqable *
    ************* */
    
  /**
  * Applies an accumulator function over a sequence. The specified seed value is used as the initial accumulator value, and the specified function is used to select the result value.
  *
  * @param seed The initial accumulator value.
  * @param transform An accumulator function to be invoked on each element.
  * @param resultTransform A function to transform the final accumulator value into the result value.
  * @return The transformed final accumulator value.
  * transform: (current, next) -> result
  */
  aggregate<T, TResult, TFinalResult>(seed: T, transform: (current: T, next: T) => TResult, resultTransform: (TResult) => TFinalResult): TFinalResult;
  
  /**
    * @see _Linqable<T>.aggregate
    */
  aggregate<T, TResult>(seed: T, transform: (current: T, next: T) => TResult): TResult;
  
  /**
  * @see _Linqable<T>.aggregate
  */
  aggregate<T, TResult>(transform: (current: T, next: T) => TResult): TResult;
  
    
  /**
    * Determines whether all elements of a sequence satisfy a condition.
    *
    * @param {Function} predicate The function called per iteraction till returns false.
    * @return All elements satisfy a condition returns true, or returns false.
    * predicate: (T) -> Boolean
    */
    all(predicate: (T) => boolean): boolean;
    
  /**
    * Determines whether a sequence contains any elements.
    *
    * @param {(Function)} predicate The function called per iteraction till returns true.
    * @return Any elements satisfy a condition returns true, or returns false.
    * predicate: (T) -> Boolean
    */
    any(predicate: (T) => boolean): boolean;
    
    /**
    * 
    */
    any(): boolean;
    
  /**
    * Computes the average of a sequence. The elements of this sequence should be Number.
    *
    * @param strict Strict mode: 1 is not equal to '1'
    * @return Return the average of a sequence.
    */
    average(strict: boolean): number;
    
    /**
    * 
    */
    average(): number;
    
  /**
    * Concatenates two sequences.
    *
    * @param otherSequence The other iterable sequence.
    * @return The iterator of concatenated sequence.
    */
    concatenate(otherSequence: Iterable<T>): _Linqable<T>;
    
  /**
    * Determines whether a sequence contains a specified element by using the default equality comparer.
    *
    * @param item The item which you want to check.
    * @param {(Function)} equalityComparer The equality comparer.
    * equalityComparer: (item1, item2) -> Boolean
    */
    contains(item: T, equalityComparer: (item1: T, item2: T) => boolean): boolean;
    
    /**
    * 
    */
    contains(item: T): boolean;
    
  /**
    * Returns a number that represents how many elements in the specified sequence satisfy a condition.
    *
    * @param {(Function)} predicate The condition for compute item counts
    * @return Return the count which satisfy a condition.
    */
    count(predicate: (T) => boolean): number;
    
    /**
    * 
    */
    count(): number;
    
  /**
    * Returns the elements of the specified sequence or the specified value in a singleton collection if the sequence is empty.
    *
    * @param defaultValue The default value which you want to return.
    */
    defaultIfEmpty(defaultValue: T): _Linqable<T>;
    
  /**
    * Returns distinct elements from a sequence by using a specified equalityComparer to compare values.
    *
    * @param {(Function)} equalityComparer The equality comparer
    * equalityComparer: (item1, item2) -> Boolean
    */
    distinct(equalityComparer: (item1: T, item2: T) => boolean): _Linqable<T>;
    
    /**
    * 
    */
    distinct(): _Linqable<T>;
    
  /**
    * Alias of forEach
    */
    each(callback: (T) => void): void;
    
  /**
    * Returns the element at a specified index in a sequence.
    *
    * @param positon The zero-base index of element which you want.
    * @param defaultValue The default value if the index is out of range.
    * @return The element at a specified index or default value
    */
    elementAt(index: number, defaultValue: T): T;
    
    /**
    * 
    */
    elementAt(index: number): T;
    
  /**
    * Returns an empty sequence.
    */
    empty(): T[];
    
  /**
    * Produces the set difference of two sequences by using the default equality comparer to compare values.
    *
    * @param otherSequence A sequence whose elements that also occur in the first sequence will cause those elements to be removed from the returned sequence.
    * @param {(Function)} equalityComparer The equality comparer called per iteraction
    * @return A sequence that contains the set difference of the elements of two sequences.
    */
    except(otherSequence: Iterable<T>, equalityComparer: (item1: T, item2: T) => boolean): _Linqable<T>;
    
    /**
    * 
    */
    except(otherSequence: Iterable<T>): _Linqable<T>;
    
  /**
    * Returns the first element in a sequence that satisfies a specified condition. Or throws an error if no element satisfies the condition in predicate.
    *
    * @param {(Function)} predicate The function called per iteraction till returns true.
    * @param defaultValue The default value.
    * @return The first element which satisfy condition or default value.
    */
    first(predicate: (T) => boolean): T;
    first(): T;
    
    firstOrDefault(predicate: (T) => boolean, defaultValue: T): T;
    firstOrDefault(): T;
    
  /**
    * Flattens a nested sequence (the nesting can be to any depth).
    * @param deep Default is true, If you pass false, the sequence will only be flattened a single level.
    */
    flatten(deep: boolean): _Linqable<T>;
    
  /**
    * Groups the elements of a sequence according to a specified key selector function and projects the elements for each group by using a specified function.
    *
    * @param keySelector A function to extract the key for each element. (Required)
    * @param elementSelector A function to map each source element to an element. (Optional)
    * @param resultTransform A function to create a result value from each group. (Optional)
    * @return Returns iterable grouped items. Each item is { key: key, value: [items] }
    */
    groupBy<TKey, TElement, TResult>(keySelector: (item: T) => TKey, elementSelector: (item: T) => TElement, resultTransform: (groupKey: TKey, items: TElement[]) => TResult): _Linqable<TResult>;
    groupBy<TKey>(keySelector: (item: T) => TKey): _Linqable<T>;
    
  /**
    * Correlates the elements of two sequences based on equality of keys and groups the results. The default equality comparer is used to compare keys.
    *
    * @param inner The sequence to join to the first sequence.
    * @param outerKeySelector A function to extract the join key from each element of the first sequence.
    * @param innerKeySelector A function to extract the join key from each element of the second sequence.
    * @param resultSelector A function to create a result element from an element from the first sequence and a collection of matching elements from the second sequence.
    * @return A sequence that contains elements of type result that are obtained by performing a grouped join on two sequences.
    * outerKeySelector: (outerItem) -> key
    * innerKeySelector: (innerItem) -> key
    * resultSelector: (outerItem, [groupedInnerItem]) -> result
    */
    groupJoin(inner: any, outerKeySelector: any, innerKeySelector: any, resultSelector: any): {};
  /**
    * Produces the set intersection of two sequences by using the specified equalityComparer to compare values.
    *
    * @param otherSequence A sequence whose distinct elements that also appear in the first sequence will be returned.
    * @param eqaulityComparer An equalityComparer to compare values.
    * @return A sequence that contains the elements that form the set intersection of two sequences.
    */
    intersect(otherSequence: Iterable<T>, equalityComparer: any): _Linqable<T>;
    intersect(otherSequence: Iterable<T>): _Linqable<T>;
    
  /**
    * Correlates the elements of two sequences based on matching keys. A specified equalityComparer is used to compare keys.
    *
    * @param join The sequence to join to the first sequence.
    * @param outerKeySelector A function to extract the join key from each element of the first sequence.
    * @param innerKeySelector A function to extract the join key from each element of the second sequence.
    * @param resultSelector A function to create a result element from two matching elements.
    * @param keyEqualityComparer An comparer compare keys.
    *
    * outerKeySelector: (outerItem) -> key
    * innerKeySelector: (innerItem) -> key
    * resultSelector: (outerItem, innerItem) -> result
    * keyEqualityComparer: (item1, item2) -> Boolean
    */
    joinWith(inner: any, outerKeySelector: any, innerKeySelector: any, resultSelector: any, keyEqualityComparer: any): {};
    
  /**
    * Returns the last element of a sequence that satisfies a condition or a default value if no such element is found.
    *
    * @param predicate A function to test each element for a condition.
    * @param defaultValue The default value if no such element is found.
    * @return Default value if the sequence is empty or if no elements pass the test in the predicate function; otherwise, the last element that passes the test in the predicate function.
    */
    last(predicate: (T) => boolean, defaultValue: any): T;
    last(): T;
    
  /**
    * Returns the maximum value in a sequence.
    *
    * @param keySelector A transform function to apply to each element.
    * @param comparer A comparer function to check with item is greater.
    * @return The maximum value in the sequence.
    * keySelector: (T) -> key
    * comparer: (item1, item2) -> -1|0|1
    */
    max<TKey>(keySelector: (item: T) => TKey, comparer: (item1: T, item2: T) => number): T;
    max<TKey>(keySelector: (item: T) => TKey): T;
    max(): T;
    
  /**
    * Returns the minimum value in a sequence.
    *
    * @param keySelector A transform function to apply to each element.
    * @param comparer A comparer function to check with item is less.
    * @return The minimum value in the sequence.
    */
    min<TKey>(keySelector: (item: T) => TKey, comparer: (item1: T, item2: T) => number): T;
    min<TKey>(keySelector: (item: T) => TKey): T;
    min(): T;
    
  /**
    * Filters the elements of an sequence based on a specified type.
    *
    * @param type A string to specify which type to return.
    * @return Filtered the elements of the sequence on.
    */
    ofType<TCast>(type: TCast): _Linqable<TCast>;
    
  /**
    * Sorts the elements of a sequence in ascending order by using a specified comparer.
    *
    * @param keySelector A function to extract a key from an element.
    * @param comparer An comparer to compare keys.
    * @return A sequence whose elements are sorted according to a key.
    */
    orderBy<TKey>(keySelector: (item: T) => TKey, comparer: (item1: T, item2: T) => number): _Linqable<T>;
    orderBy<TKey>(keySelector: (item: T) => TKey): _Linqable<T>;
    orderBy(): _Linqable<T>;
    
  /**
    * Sorts the elements of a sequence in descending order by using a specified comparer.
    *
    * @param keySelector A function to extract a key from an element.
    * @param comparer An comparer to compare keys.
    * @return A sequence whose elements are sorted in descending order according to a key.
    */
    orderByDescending<TKey>(keySelector: (item: T) => TKey, comparer: (item1: T, item2: T) => number): _Linqable<T>;
    orderByDescending<TKey>(keySelector: (item: T) => TKey): _Linqable<T>;
    orderByDescending(): _Linqable<T>;
    
  /**
    * Inverts the order of the elements in a sequence.
    *
    * @return A sequence whose elements correspond to those of the input sequence in reverse order.
    */
    reversed(): _Linqable<T>;
    
  /**
    * Projects each element of a sequence into a new form.
    *
    * @param {Function} transform The transform function called per interaction.
    *
    * transform: (T, index) -> any
    */
    select<TResult>(transform: (item: T) => TResult): _Linqable<TResult>;
    
  /**
    * Projects each element of a sequence to an IEnumerable<T>, flattens the resulting sequences into one sequence, and invokes a result selector function on each element therein. The index of each source element is used in the intermediate projected form of that element.
    *
    * @param selector A transform function to apply to each source element; the second parameter of the function represents the index of the source element.
    * selector: (item, index) -> value
    */
    selectMany<TResult>(selector: (T, number) => TResult): _Linqable<TResult>;
    
  /**
    * Determines whether two sequences are equal by comparing the elements by using the default equality comparer for their type.
    *
    * @param otherSequence A sequence to compare to the first sequence.
    * @return true if the two source sequences are of equal length and their corresponding elements are equal according to the equality comparer for their type; otherwise, false.
    */
    sequenceEqual(otherSequence: Iterable<T>, equalityComparer: (item1: T, item2: T) => boolean): boolean;
    sequenceEqual(otherSequence: Iterable<T>): boolean;
    
  /**
    * Returns the only element of a sequence that satisfies a specified condition or a default value if no such element exists; this method throws an exception if more than one element satisfies the condition or sequence is empty.
    *
    * @param predicate A function to test an element for a condition.
    * @param defaultValue The default value if no such element exists.
    * @return The single element of the input sequence that satisfies a condition.
    */
    single(predicate: (item: T) => boolean): T;
    single(): T;
    
    singleOrDefault(predicate: (item: T) => boolean, defaultValue: T): T;
    singleOrDefault(): T;
    
  /**
    * Bypasses a specified number of elements in a sequence and then returns the remaining elements.
    *
    * @param count The number of elements to skip before returning the remaining elements.
    * @return A sequence that contains the elements that occur after the specified index in the input sequence.
    */
    skip(count: number): _Linqable<T>;
    
  /**
    * Bypasses elements in a sequence as long as a specified condition is true and then returns the remaining elements. The element's index is used in the logic of the predicate function.
    *
    * @param predicate A function to test each source element for a condition; the second parameter of the function represents the index of the source element.
    * @return A sequence that contains the elements from the input sequence starting at the first element in the linear series that does not pass the test specified by predicate.
    */
    skipWhile(predicate: (item: T) => boolean): _Linqable<T>;
    
  /**
    * Computes the sum of a sequence.
    *
    * @param transform The transform function called per interaction.
    * @return The sum of the values in the sequence.
    */
    sum<TResult>(transform: (item: T) => TResult): number;
    sum(): number;
    
  /**
    * Returns a specified number of contiguous elements from the start of a sequence.
    *
    * @param count The number of elements to return.
    * @return A sequence that contains the specified number of elements from the start of the input sequence.
    */
    take(count: number): _Linqable<T>;
    
  /**
    * Returns elements from a sequence as long as a specified condition is true. The element's index is used in the logic of the predicate function.
    *
    * @param predicate A function to test each source element for a condition; the second parameter of the function represents the index of the source element.
    * @return A sequence that contains elements from the input sequence that occur before the element at which the test no longer passes.
    */
    takeWhile(predicate: (item: T) => boolean): _Linqable<T>;
  /**
    * Alias of orderBy
    */
    thenBy<TKey>(keySelector: (item: T) => TKey, comparer: (item1: T, item2: T) => number): _Linqable<T>;
    thenBy<TKey>(keySelector: (item: T) => TKey): _Linqable<T>;
    thenBy(): _Linqable<T>;
    
  /**
    * Alias of orderByDescending
    */
    thenByDescending<TKey>(keySelector: (item: T) => TKey, comparer: (item1: T, item2: T) => number): _Linqable<T>;
    thenByDescending<TKey>(keySelector: (item: T) => TKey): _Linqable<T>;
    thenByDescending(): _Linqable<T>;
    
  /**
    * Creates an array
    *
    * @return An array that contains the elements from the input sequence.
    */
    toArray(): T[];
  /**
    * Alias of toArray
    */
    toList(): T[];
  /**
    * Alias of toMap
    */
    toDictionary<TKey, TResult>(keySelector: (item: T) => TKey, elementSelector: (item: T) => TResult): any;
    
  /**
    * Creates a map from a sequenece according to a specified key selector function, a comparer, and an element selector function.
    *
    * @param keySelector A function to extract a key from each element.
    * @param elementSelector A transform function to produce a result element value from each element.
    * @return A map that contains values from the input sequence.
    * keySelector: (item) -> key (Required)
    * elementSelector: (item) -> value (Optional)
    */
    toMap<TKey, TResult>(keySelector: (item: T) => TKey, elementSelector: (item: T) => TResult): any;
    
  /**
    * Produces the set union of two sequences by using a specified equalityComparer.
    *
    * @param otherSequence A sequence whose distinct elements form the second set for the union.
    * @param equalityComparer The equality comparer to compare values.
    * @return A sequence that contains the elements from both input sequences, no duplicates.
    */
    union(otherSequence: Iterable<T>, equalityComparer: (item1: T, item2: T) => boolean): _Linqable<T>;
    union(otherSequence: Iterable<T>): _Linqable<T>;
    
  /**
    * Filters a sequence of values based on a predicate.
    *
    * @param {Function} predicate The filter function called per iteraction.
    * @return iterator
    * predicate: (T, index) -> Boolean
    */
    where(predicate: (item: T, index: number) => boolean): _Linqable<T>;
    
  /**
    * Applies a specified function to the corresponding elements of two sequences, producing a sequence of the results.
    *
    * @param otherSequence The second sequence to merge.
    * @param resultSelector A function that specifies how to merge the elements from the two sequences.
    * @return A sequence that contains merged elements of two input sequences.
    * resultSelector: (item, otherItem) -> result
    */
    zip<T2, TResult>(otherSequence: Iterable<T>, resultSelector: (item: T, otherItem: T2) => TResult): _Linqable<TResult>;
    zip<T2>(otherSequence: Iterable<T>): _Linqable<[T, T2]>;
  
}

// export interface _Linqable;

declare module 'kinq' {
  /**
  * Convert iterable object to linqable
  * 
  * @param An object which implemented iterable interface.
  * @return Linqable object.
  */
  export function toLinqable<T>(iterable: any): _Linqable<T>;
}

declare interface Array<T> extends _Linqable<T> {
  
}

declare interface String extends _Linqable<String> {
  
}

declare interface Map<K, V> extends _Linqable<[K, V]> {
  
}

declare interface Set<T> extends _Linqable<T> {
  
}

declare interface WeakMap<K, V> extends _Linqable<[K, V]> {
  
}

declare interface WeakSet<T> extends _Linqable<T> {
  
}

declare interface Iterable<T> extends _Linqable<T> {
  
}

declare interface NodeBuffer extends _Linqable<number> {
  
}