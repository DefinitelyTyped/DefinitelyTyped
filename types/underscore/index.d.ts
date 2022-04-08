// Type definitions for Underscore 1.11
// Project: https://underscorejs.org/
// Definitions by: Boris Yankov <https://github.com/borisyankov>,
//                 Josh Baldwin <https://github.com/jbaldwin>,
//                 Christopher Currens <https://github.com/ccurrens>,
//                 Ard Timmerman <https://github.com/confususs>,
//                 Julian Gonggrijp <https://github.com/jgonggrijp>,
//                 Florian Imdahl <https://github.com/ffflorian>
//                 Regev Brody <https://github.com/regevbr>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
//                 Michael Ness <https://github.com/reubenrybnik>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

declare var _: _.UnderscoreStatic;
export = _;
export as namespace _;

// The DOM is not required to be present, but these definitions reference type Element for the
// isElement check. If the DOM is present, this declaration will merge.
declare global {
    interface Element { }
}

declare module _ {
    /**
    * underscore.js _.throttle options.
    **/
    interface ThrottleSettings {

        /**
        * If you'd like to disable the leading-edge call, pass this as false.
        **/
        leading?: boolean;

        /**
        * If you'd like to disable the execution on the trailing-edge, pass false.
        **/
        trailing?: boolean;
    }

    /**
    * underscore.js template settings, set templateSettings or pass as an argument
    * to 'template()' to override defaults.
    **/
    interface TemplateSettings {
        /**
        * Default value is '/<%([\s\S]+?)%>/g'.
        **/
        evaluate?: RegExp;

        /**
        * Default value is '/<%=([\s\S]+?)%>/g'.
        **/
        interpolate?: RegExp;

        /**
        * Default value is '/<%-([\s\S]+?)%>/g'.
        **/
        escape?: RegExp;

        /**
        * By default, 'template()' places the values from your data in the local scope via the 'with' statement.
        * However, you can specify a single variable name with this setting.
        **/
        variable?: string;
    }

    interface CompiledTemplate {
        (data?: any): string;
        source: string;
    }

    // Common interface between Arrays and jQuery objects
    interface List<T> {
        [index: number]: T;
        length: number;
    }

    interface Dictionary<T> {
        [index: string]: T;
    }

    type Collection<T> = List<T> | Dictionary<T>;

    type CollectionKey<V> =
        V extends never ? any
        : V extends List<any> ? number
        : V extends Dictionary<any> ? string
        : V extends undefined ? undefined
        : never;

    interface Predicate<T> {
        (value: T): boolean;
    }

    interface CollectionIterator<T extends TypeOfList<V> | TypeOfDictionary<V, any>, TResult, V = Collection<T>> {
        (element: T, key: CollectionKey<V>, collection: V): TResult;
    }

    interface ListIterator<T extends TypeOfList<V>, TResult, V = List<T>> extends CollectionIterator<T, TResult, V> { }

    interface ObjectIterator<T extends TypeOfDictionary<V, any>, TResult, V = Dictionary<T>> extends CollectionIterator<T, TResult, V> { }

    type Iteratee<V, R, T extends TypeOfCollection<V, any> = TypeOfCollection<V>> =
        CollectionIterator<T, R, V> |
        string | number |
        (string | number)[] |
        Partial<T> |
        null |
        undefined;

    type IterateeResult<I, T> =
        I extends (...args: any[]) => infer R ? R
        : I extends keyof T ? T[I]
        : I extends string | number | (string | number)[] ? any
        : I extends object ? boolean
        : I extends null | undefined ? T
        : never;

    type PropertyTypeOrAny<T, K> = K extends keyof T ? T[K] : any;

    interface MemoCollectionIterator<T extends TypeOfList<V> | TypeOfDictionary<V, any>, TResult, V = Collection<T>> {
        (prev: TResult, curr: T, key: CollectionKey<V>, collection: V): TResult;
    }

    interface MemoIterator<T extends TypeOfList<V>, TResult, V = List<T>> extends MemoCollectionIterator<T, TResult, V> { }

    interface MemoObjectIterator<T extends TypeOfDictionary<V>, TResult, V = Dictionary<T>> extends MemoCollectionIterator<T, TResult, V> { }

    type TypeOfList<V> =
        V extends never ? any
        : V extends List<infer T> ? T
        : never;

    type TypeOfDictionary<V, TDefault = never> =
        V extends never ? any
        : V extends Dictionary<infer T> ? T
        : TDefault;

    type TypeOfCollection<V, TObjectDefault = never> = V extends List<any> ? TypeOfList<V> : TypeOfDictionary<V, TObjectDefault>;

    type ListItemOrSelf<T> = T extends List<infer TItem> ? TItem : T;

    // unfortunately it's not possible to recursively collapse all possible list dimensions to T[] at this time,
    // so give up after one dimension since that's likely the most common case
    // '& object' prevents strings from being matched by list checks so types like string[] don't end up resulting in any
    type DeepestListItemOrSelf<T> =
        T extends List<infer TItem> & object
        ? TItem extends List<any> & object
        ? any
        : TItem
        : T;

    // if T is an inferrable pair, the value type for the pair
    // if T is a list, assume that it contains pairs of some type, so any
    // if T isn't a list, there's no way that it can provide pairs, so never
    type PairValue<T> =
        T extends Readonly<[string | number, infer TValue]> ? TValue
        : T extends List<infer TValue> ? TValue
        : never;

    type AnyFalsy = undefined | null | false | '' | 0;

    type Truthy<T> = Exclude<T, AnyFalsy>;

    type _Pick<V, K extends string> =
        Extract<K, keyof V> extends never ? Partial<V>
        : Pick<V, Extract<K, keyof V>>;

    // switch to Omit when the minimum TS version moves past 3.5
    type _Omit<V, K extends string> =
        V extends never ? any
        : Extract<K, keyof V> extends never ? Partial<V>
        : Pick<V, Exclude<keyof V, K>>;

    type _ChainSingle<V> = _Chain<TypeOfCollection<V>, V>;

    type TypedArray = Int8Array | Uint8Array | Int16Array | Uint16Array | Int32Array | Uint32Array | Uint8ClampedArray | Float32Array | Float64Array;

    interface Cancelable {
        cancel(): void;
    }

    interface UnderscoreStatic {
        /*******
         * OOP *
         *******/

        /**
         * Underscore OOP Wrapper, all Underscore functions that take an object
         * as the first parameter can be invoked through this function.
         * @param value First argument to Underscore object functions.
         * @returns An Underscore wrapper around the supplied value.
         **/
        <V>(value: V): Underscore<TypeOfCollection<V>, V>;

        /***************
         * Collections *
         ***************/

        /**
         * Iterates over a `collection` of elements, yielding each in turn to
         * an `iteratee`. The `iteratee` is bound to the context object, if one
         * is passed.
         * @param collection The collection of elements to iterate over.
         * @param iteratee The iteratee to call for each element in
         * `collection`.
         * @param context 'this' object in `iteratee`, optional.
         * @returns The original collection.
         **/
        each<V extends Collection<any>>(
            collection: V,
            iteratee: CollectionIterator<TypeOfCollection<V>, void, V>,
            context?: any
        ): V;

        /**
         * @see each
         **/
        forEach: UnderscoreStatic['each'];

        /**
         * Produces a new array of values by mapping each value in `collection`
         * through a transformation `iteratee`.
         * @param collection The collection to transform.
         * @param iteratee The iteratee to use to transform each item in
         * `collection`.
         * @param context `this` object in `iteratee`, optional.
         * @returns The mapped result.
         **/
        map<V extends Collection<any>, I extends Iteratee<V, any>>(
            collection: V,
            iteratee: I,
            context?: any
        ): IterateeResult<I, TypeOfCollection<V>>[];

        /**
         * @see map
         **/
        collect: UnderscoreStatic['map'];

        /**
         * Also known as inject and foldl, reduce boils down a `collection` of
         * values into a single value. `memo` is the initial state of the
         * reduction, and each successive step of it should be returned by
         * `iteratee`.
         *
         * If no memo is passed to the initial invocation of reduce, `iteratee`
         * is not invoked on the first element of `collection`. The first
         * element is instead passed as the memo in the invocation of
         * `iteratee` on the next element in `collection`.
         * @param collection The collection to reduce.
         * @param iteratee The function to call on each iteration to reduce the
         * collection.
         * @param memo The initial reduce state or undefined to use the first
         * item in `collection` as initial state.
         * @param context `this` object in `iteratee`, optional.
         * @returns The reduced result.
         **/
        reduce<V extends Collection<any>, TResult>(
            collection: V,
            iteratee: MemoCollectionIterator<TypeOfCollection<V>, TResult, V>,
            memo: TResult,
            context?: any
        ): TResult;
        reduce<V extends Collection<any>, TResult = TypeOfCollection<V>>(
            collection: V,
            iteratee: MemoCollectionIterator<TypeOfCollection<V>,
                TResult | TypeOfCollection<V>,
                V>
        ): TResult | TypeOfCollection<V> | undefined;

        /**
         * @see reduce
         **/
        inject: UnderscoreStatic['reduce'];

        /**
         * @see reduce
         **/
        foldl: UnderscoreStatic['reduce'];

        /**
         * The right-associative version of reduce.
         *
         * This is not as useful in JavaScript as it would be in a language
         * with lazy evaluation.
         * @param collection The collection to reduce.
         * @param iteratee The function to call on each iteration to reduce the
         * collection.
         * @param memo The initial reduce state or undefined to use the first
         * item in `collection` as the initial state.
         * @param context `this` object in `iteratee`, optional.
         * @returns The reduced result.
         **/
        reduceRight<V extends Collection<any>, TResult>(
            collection: V,
            iteratee: MemoCollectionIterator<TypeOfCollection<V>, TResult, V>,
            memo: TResult,
            context?: any
        ): TResult;
        reduceRight<V extends Collection<any>, TResult = TypeOfCollection<V>>(
            collection: V,
            iteratee: MemoCollectionIterator<TypeOfCollection<V>,
                TResult | TypeOfCollection<V>,
                V>
        ): TResult | TypeOfCollection<V> | undefined;

        /**
         * @see reduceRight
         **/
        foldr: UnderscoreStatic['reduceRight'];

        /**
         * Looks through each value in `collection`, returning the first one
         * that passes a truth test (`iteratee`), or undefined if no value
         * passes the test. The function returns as soon as it finds an
         * acceptable element, and doesn't traverse the entire collection.
         * @param collection The collection to search.
         * @param iteratee The truth test to apply.
         * @param context `this` object in `iteratee`, optional.
         * @returns The first element in `collection` that passes the truth
         * test or undefined if no elements pass.
         **/
        find<V extends Collection<any>>(
            collection: V,
            iteratee?: Iteratee<V, boolean>,
            context?: any
        ): TypeOfCollection<V> | undefined;

        /**
         * @see find
         **/
        detect: UnderscoreStatic['find'];

        /**
         * Looks through each value in `collection`, returning an array of
         * all the values that pass a truth test (`iteratee`).
         * @param collection The collection to filter.
         * @param iteratee The truth test to apply.
         * @param context `this` object in `iteratee`, optional.
         * @returns The set of values that pass the truth test.
         **/
        filter<V extends Collection<any>>(
            collection: V,
            iteratee?: Iteratee<V, boolean>,
            context?: any
        ): TypeOfCollection<V>[];

        /**
         * @see filter
         **/
        select: UnderscoreStatic['filter'];

        /**
         * Looks through each value in `collection`, returning an array of all
         * the elements that match the key-value pairs listed in `properties`.
         * @param collection The collection in which to find elements that
         * match `properties`.
         * @param properties The properties to check for on the elements within
         * `collection`.
         * @returns The elements in `collection` that match `properties`.
         **/
        where<V extends Collection<any>>(
            collection: V,
            properties: Partial<TypeOfCollection<V>>
        ): TypeOfCollection<V>[];

        /**
         * Looks through `collection` and returns the first value that matches
         * all of the key-value pairs listed in `properties`. If no match is
         * found, or if list is empty, undefined will be returned.
         * @param collection The collection in which to find an element that
         * matches `properties`.
         * @param properties The properties to check for on the elements within
         * `collection`.
         * @returns The first element in `collection` that matches `properties`
         * or undefined if no match is found.
         **/
        findWhere<V extends Collection<any>>(
            collection: V,
            properties: Partial<TypeOfCollection<V>>
        ): TypeOfCollection<V> | undefined;

        /**
         * Returns the values in `collection` without the elements that pass a
         * truth test (`iteratee`).
         * The opposite of filter.
         * @param collection The collection to filter.
         * @param iteratee The truth test to apply.
         * @param context `this` object in `iteratee`, optional.
         * @returns The set of values that fail the truth test.
         **/
        reject<V extends Collection<any>>(
            collection: V,
            iteratee?: Iteratee<V, boolean>,
            context?: any
        ): TypeOfCollection<V>[];

        /**
         * Returns true if all of the values in `collection` pass the
         * `iteratee` truth test. Short-circuits and stops traversing
         * `collection` if a false element is found.
         * @param collection The collection to evaluate.
         * @param iteratee The truth test to apply.
         * @param context `this` object in `iteratee`, optional.
         * @returns True if all elements pass the truth test, otherwise false.
         **/
        every<V extends Collection<any>>(
            collection: V,
            iteratee?: Iteratee<V, boolean>,
            context?: any
        ): boolean;

        /**
         * @see every
         **/
        all: UnderscoreStatic['every'];

        /**
         * Returns true if any of the values in `collection` pass the
         * `iteratee` truth test. Short-circuits and stops traversing
         * `collection` if a true element is found.
         * @param collection The collection to evaluate.
         * @param iteratee The truth test to apply.
         * @param context `this` object in `iteratee`, optional.
         * @returns True if any element passed the truth test, otherwise false.
         **/
        some<V extends Collection<any>>(
            collection: V,
            iteratee?: Iteratee<V, boolean>,
            context?: any
        ): boolean;

        /**
         * @see some
         **/
        any: UnderscoreStatic['some'];

        /**
         * Returns true if the value is present in `collection`. Uses indexOf
         * internally, if `collection` is a List. Use `fromIndex` to start your
         * search at a given index.
         * @param collection The collection to check for `value`.
         * @param value The value to check `collection` for.
         * @param fromIndex The index to start searching from, optional,
         * default = 0, only used when `collection` is a List.
         * @returns True if `value` is present in `collection` after
         * `fromIndex`, otherwise false.
         **/
        contains<V extends Collection<any>>(
            collection: V,
            value: any,
            fromIndex?: number
        ): boolean;

        /**
         * @see contains
         **/
        include: UnderscoreStatic['contains'];

        /**
         * @see contains
         **/
        includes: UnderscoreStatic['contains'];

        /**
         * Calls the method named by `methodName` on each value in
         * `collection`. Any extra arguments passed to invoke will be forwarded
         * on to the method invocation.
         * @param collection The collection of elements to invoke `methodName`
         * on.
         * @param methodName The name of the method to call on each element in
         * `collection`.
         * @param args Additional arguments to pass to method `methodName`.
         * @returns An array containing the result of the method call for each
         * item in `collection`.
         **/
        invoke(
            list: Collection<any>,
            methodName: string,
            ...args: any[]
        ): any[];

        /**
         * A convenient version of what is perhaps the most common use-case for
         * map: extracting a list of property values.
         * @param collection The collection of items.
         * @param propertyName The name of a specific property to retrieve from
         * all items in `collection`.
         * @returns The set of values for the specified `propertyName` for each
         * item in `collection`.
         **/
        pluck<V extends Collection<any>, K extends string | number>(
            collection: V,
            propertyName: K
        ): PropertyTypeOrAny<TypeOfCollection<V>, K>[];

        /**
         * Returns the maximum value in `collection`. If an `iteratee` is
         * provided, it will be used on each element to generate the criterion
         * by which the element is ranked. -Infinity is returned if list is
         * empty. Non-numerical values returned by `iteratee` will be ignored.
         * @param collection The collection in which to find the maximum value.
         * @param iteratee The iteratee that provides the criterion by which
         * each element is ranked, optional if evaluating a collection of
         * numbers.
         * @param context `this` object in `iteratee`, optional.
         * @returns The maximum element within `collection` or -Infinity if
         * `collection` is empty.
         **/
        max<V extends Collection<any>>(
            collection: V,
            iteratee?: Iteratee<V, any>,
            context?: any
        ): TypeOfCollection<V> | number;

        /**
         * Returns the minimum value in `collection`. If an `iteratee` is
         * provided, it will be used on each element to generate the criterion
         * by which the element is ranked. Infinity is returned if list is
         * empty. Non-numerical values returned by `iteratee` will be ignored.
         * @param collection The collection in which to find the minimum value.
         * @param iteratee The iteratee that provides the criterion by which
         * each element is ranked, optional if evaluating a collection of
         * numbers.
         * @param context `this` object in `iteratee`, optional.
         * @returns The minimum element within `collection` or Infinity if
         * `collection` is empty.
         **/
        min<V extends Collection<any>>(
            list: V,
            iteratee?: Iteratee<V, any>,
            context?: any
        ): TypeOfCollection<V> | number;

        /**
         * Returns a (stably) sorted copy of `collection`, ranked in ascending
         * order by the results of running each value through `iteratee`.
         * @param collection The collection to sort.
         * @param iteratee An iteratee that provides the value to sort by for
         * each item in `collection`.
         * @param context `this` object in `iteratee`, optional.
         * @returns A sorted copy of `collection`.
         **/
        sortBy<V extends Collection<any>>(
            collection: V,
            iteratee?: Iteratee<V, any>,
            context?: any): TypeOfCollection<V>[];

        /**
         * Splits `collection` into sets that are grouped by the result of
         * running each value through `iteratee`.
         * @param collection The collection to group.
         * @param iteratee An iteratee that provides the value to group by for
         * each item in `collection`.
         * @param context `this` object in `iteratee`, optional.
         * @returns A dictionary with the group names provided by `iteratee` as
         * properties where each property contains the grouped elements from
         * `collection`.
         **/
        groupBy<V extends Collection<any>>(
            collection: V,
            iteratee?: Iteratee<V, string | number>,
            context?: any
        ): Dictionary<TypeOfCollection<V>[]>;

        /**
         * Given a `collection` and an `iteratee` function that returns a key
         * for each element in `collection`, returns an object that acts as an
         * index of each item.  Just like `groupBy`, but for when you know your
         * keys are unique.
         * @param collection The collection to index.
         * @param iteratee An iteratee that provides the value to index by for
         * each item in `collection`.
         * @param context `this` object in `iteratee`, optional.
         * @returns A dictionary where each item in `collection` is assigned to
         * the property designated by `iteratee`.
         **/
        indexBy<V extends Collection<any>>(
            collection: V,
            iteratee?: Iteratee<V, string | number>,
            context?: any): Dictionary<TypeOfCollection<V>>;

        /**
         * Sorts `collection` into groups and returns a count for the number of
         * objects in each group. Similar to `groupBy`, but instead of
         * returning a list of values, returns a count for the number of values
         * in that group.
         * @param collection The collection to count.
         * @param iteratee An iteratee that provides the value to count by for
         * each item in `collection`.
         * @param context `this` object in `iteratee`, optional.
         * @returns A dictionary with the group names provided by `iteratee` as
         * properties where each property contains the count of the grouped
         * elements from `collection`.
         **/
        countBy<V extends Collection<any>>(
            collection: V,
            iteratee?: Iteratee<V, string | number>,
            context?: any
        ): Dictionary<number>;

        /**
         * Returns a shuffled copy of `collection`, using a version of the
         * Fisher-Yates shuffle.
         * @param collection The collection to shuffle.
         * @returns A shuffled copy of `collection`.
         **/
        shuffle<V extends Collection<any>>(
            collection: V
        ): TypeOfCollection<V>[];

        /**
         * Produce a random sample from `collection`. Pass a number to return
         * `n` random elements from `collection`. Otherwise a single random
         * item will be returned.
         * @param collection The collection to sample.
         * @param n The number of elements to sample from `collection`.
         * @returns A random sample of `n` elements from `collection` or a
         * single element if `n` is not specified.
         **/
        sample<V extends Collection<any>>(
            collection: V,
            n: number
        ): TypeOfCollection<V>[];
        sample<V extends Collection<any>>(
            collection: V
        ): TypeOfCollection<V> | undefined;

        /**
         * Creates a real Array from `collection` (anything that can be
         * iterated over). Useful for transmuting the arguments object.
         * @param collection The collection to transform into an array.
         * @returns An array containing the elements of `collection`.
         **/
        toArray<V extends Collection<any>>(
            collection: V
        ): TypeOfCollection<V>[];

        /**
         * Determines the number of values in `collection`.
         * @param collection The collection to determine the number of values
         * for.
         * @returns The number of values in `collection`.
         **/
        size(collection: Collection<any>): number;

        /**
         * Splits `collection` into two arrays: one whose elements all satisfy
         * `iteratee` and one whose elements all do not satisfy `iteratee`.
         * @param collection The collection to partition.
         * @param iteratee The iteratee that defines the partitioning scheme
         * for each element in `collection`.
         * @param context `this` object in `iteratee`, optional.
         * @returns An array composed of two elements, where the first element
         * contains the elements in `collection` that satisfied the predicate
         * and the second element contains the elements that did not.
         **/
        partition<V extends Collection<any>>(
            list: V,
            iteratee?: Iteratee<V, boolean>,
            context?: any
        ): [TypeOfCollection<V>[], TypeOfCollection<V>[]];

        /**********
         * Arrays *
         **********/

        /**
         * Returns the first element of `list`. Passing `n` will return the
         * first `n` elements of `list`.
         * @param list The list to retrieve elements from.
         * @param n The number of elements to retrieve, optional.
         * @returns The first `n` elements of `list` or the first element if
         * `n` is omitted.
         **/
        first<V extends List<any>>(
            list: V
        ): TypeOfList<V> | undefined;
        first<V extends List<any>>(
            list: V,
            n: number
        ): TypeOfList<V>[];

        /**
         * @see first
         **/
        head: UnderscoreStatic['first'];

        /**
         * @see first
         **/
        take: UnderscoreStatic['first'];

        /**
         * Returns everything but the last entry of `list`. Especially useful
         * on the arguments object. Pass `n` to exclude the last
         * `n` elements from the result.
         * @param list The list to retrieve elements from.
         * @param n The number of elements from the end of `list` to omit,
         * optional, default = 1.
         * @returns The elements of `list` with the last `n` items omitted.
         **/
        initial<V extends List<any>>(
            list: V,
            n?: number
        ): TypeOfList<V>[];

        /**
         * Returns the last element of `list`. Passing `n` will return the last
         * `n` elements of `list`.
         * @param list The list to retrieve elements from.
         * @param n The number of elements to retrieve, optional.
         * @returns The last `n` elements of `list` or the last element if `n`
         * is omitted.
         **/
        last<V extends List<any>>(
            list: V
        ): TypeOfList<V> | undefined;
        last<V extends List<any>>(
            list: V,
            n: number
        ): TypeOfList<V>[];

        /**
         * Returns the rest of the elements in `list`. Pass an `index` to
         * return the values of the list from that index onward.
         * @param list The list to retrieve elements from.
         * @param index The index to start retrieving elements from, optional,
         * default = 1.
         * @returns The elements of `list` from `index` to the end of the list.
         **/
        rest<V extends List<any>>(
            list: V,
            index?: number
        ): TypeOfList<V>[];

        /**
         * @see rest
         **/
        tail: UnderscoreStatic['rest'];

        /**
         * @see rest
         **/
        drop: UnderscoreStatic['rest'];

        /**
         * Returns a copy of `list` with all falsy values removed. In
         * JavaScript, false, null, 0, "", undefined and NaN are all falsy.
         * @param list The list to compact.
         * @returns An array containing the elements of `list` without falsy
         * values.
         **/
        compact<V extends List<any> | null | undefined>(
            list: V
        ): Truthy<TypeOfList<V>>[];

        /**
         * Flattens a nested `list` (the nesting can be to any depth). If you
         * pass true or 1 as the depth, the `list` will only be flattened a
         * single level. Passing a greater number will cause the flattening to
         * descend deeper into the nesting hierarchy. Omitting the depth
         * argument, or passing false or Infinity, flattens the `list` all the
         * way to the deepest nesting level.
         * @param list The list to flatten.
         * @param depth True to only flatten one level, optional,
         * default = false.
         * @returns The flattened `list`.
         **/
        flatten<V extends List<any>>(
            list: V,
            depth: 1 | true
        ): ListItemOrSelf<TypeOfList<V>>[];
        flatten<V extends List<any>>(
            list: V,
            depth?: number | false
        ): DeepestListItemOrSelf<TypeOfList<V>>[];

        /**
         * Returns a copy of `list` with all instances of `values` removed.
         * @param list The list to exclude `values` from.
         * @param values The values to exclude from `list`.
         * @returns An array that contains all elements of `list` except for
         * `values`.
         **/
        without<V extends List<any>>(
            list: V,
            ...values: TypeOfList<V>[]
        ): TypeOfList<V>[];

        /**
         * Computes the union of the passed-in `lists`: the list of unique
         * items, examined in order from first list to last list, that are
         * present in one or more of the lists.
         * @param lists The lists to compute the union of.
         * @returns The union of elements within `lists`.
         **/
        union<T>(...lists: List<T>[]): T[];

        /**
         * Computes the list of values that are the intersection of the
         * passed-in `lists`. Each value in the result is present in each of
         * the lists.
         * @param lists The lists to compute the intersection of.
         * @returns The intersection of elements within the `lists`.
         **/
        intersection<T>(...lists: List<T>[]): T[];

        /**
         * Similar to without, but returns the values from `list` that are not
         * present in `others`.
         * @param list The starting list.
         * @param others The lists of values to exclude from `list`.
         * @returns The contents of `list` without the values in `others`.
         **/
        difference<T>(
            list: List<T>,
            ...others: List<T>[]
        ): T[];

        /**
         * Produces a duplicate-free version of `list`, using === to test
         * object equality. If you know in advance that `list` is sorted,
         * passing true for isSorted will run a much faster algorithm. If you
         * want to compute unique items based on a transformation, pass an
         * iteratee function.
         * @param list The list to remove duplicates from.
         * @param isSorted True if `list` is already sorted, optional,
         * default = false.
         * @param iteratee Transform the elements of `list` before comparisons
         * for uniqueness.
         * @param context 'this' object in `iteratee`, optional.
         * @returns An array containing only the unique elements in `list`.
         **/
        uniq<V extends List<any>>(
            list: V,
            isSorted?: boolean,
            iteratee?: Iteratee<V, any>,
            context?: any
        ): TypeOfList<V>[];
        uniq<V extends List<any>>(
            list: V,
            iteratee?: Iteratee<V, any>,
            context?: any
        ): TypeOfList<V>[];

        /**
         * @see uniq
         **/
        unique: UnderscoreStatic['uniq'];

        /**
         * Merges together the values of each of the `lists` with the values at
         * the corresponding position. Useful when you have separate data
         * sources that are coordinated through matching list indexes.
         * @param lists The lists to zip.
         * @returns The zipped version of `lists`.
         **/
        zip(...lists: List<any>[]): any[][];

        /**
         * The opposite of zip. Given a list of lists, returns a series of new
         * arrays, the first of which contains all of the first elements in the
         * input lists, the second of which contains all of the second
         * elements, and so on. (alias: transpose)
         * @param lists The lists to unzip.
         * @returns The unzipped version of `lists`.
         **/
        unzip(lists: List<List<any>>): any[][];
        transpose(lists: List<List<any>>): any[][];

        /**
         * Converts lists into objects. Pass either a single `list` of
         * [key, value] pairs, or a `list` of keys and a list of `values`.
         * Passing by pairs is the reverse of pairs. If duplicate keys exist,
         * the last value wins.
         * @param list A list of [key, value] pairs or a list of keys.
         * @param values If `list` is a list of keys, a list of values
         * corresponding to those keys.
         * @returns An object comprised of the provided keys and values.
         **/
        object<TList extends List<string | number>, TValue>(
            list: TList,
            values: List<TValue>
        ): Dictionary<TValue | undefined>;
        object<TList extends List<List<any>>>(
            list: TList
        ): Dictionary<PairValue<TypeOfList<TList>>>;

        /**
         * Returns the index at which `value` can be found in `list`, or -1 if
         * `value` is not present. If you're working with a large list and you
         * know that the list is already sorted, pass true for
         * `isSortedOrFromIndex` to use a faster binary search...or, pass a
         * number in order to look for the first matching value in the list
         * after the given index.
         * @param list The list to search for the index of `value`.
         * @param value The value to search for within `list`.
         * @param isSortedOrFromIndex True if `list` is already sorted OR the
         * starting index for the search, optional.
         * @returns The index of the first occurrence of `value` within `list`
         * or -1 if `value` is not found.
         **/
        indexOf<V extends List<any>>(
            list: V,
            value: TypeOfList<V>,
            isSortedOrFromIndex?: boolean | number
        ): number;

        /**
         * Returns the index of the last occurrence of `value` in `list`, or -1
         * if `value` is not present. Pass `fromIndex` to start your search at
         * a given index.
         * @param list The list to search for the last occurrence of `value`.
         * @param value The value to search for within `list`.
         * @param fromIndex The starting index for the search, optional.
         * @returns The index of the last occurrence of `value` within `list`
         * or -1 if `value` is not found.
         **/
        lastIndexOf<V extends List<any>>(
            list: V,
            value: TypeOfList<V>,
            fromIndex?: number
        ): number;

        /**
         * Returns the first index of an element in `list` where the `iteratee`
         * truth test passes, otherwise returns -1.
         * @param list The list to search for the index of the first element
         * that passes the truth test.
         * @param iteratee The truth test to apply.
         * @param context `this` object in `iteratee`, optional.
         * @returns The index of the first element in `list` where the
         * truth test passes or -1 if no elements pass.
         **/
        findIndex<V extends List<any>>(
            list: V,
            iteratee?: Iteratee<V, boolean>,
            context?: any
        ): number;

        /**
         * Returns the last index of an element in `list` where the `iteratee`
         * truth test passes, otherwise returns -1.
         * @param list The list to search for the index of the last element
         * that passes the truth test.
         * @param iteratee The truth test to apply.
         * @param context `this` object in `iteratee`, optional.
         * @returns The index of the last element in `list` where the
         * truth test passes or -1 if no elements pass.
         **/
        findLastIndex<V extends List<any>>(
            list: V,
            iteratee?: Iteratee<V, boolean>,
            context?: any
        ): number;

        /**
         * Uses a binary search to determine the lowest index at which the
         * value should be inserted into `list` in order to maintain `list`'s
         * sorted order. If an iteratee is provided, it will be used to compute
         * the sort ranking of each value, including the value you pass.
         * @param list A sorted list.
         * @param value The value to determine an insert index for to mainain
         * the sorting in `list`.
         * @param iteratee Iteratee to compute the sort ranking of each
         * element including `value`, optional.
         * @param context `this` object in `iteratee`, optional.
         * @returns The index where `value` should be inserted into `list`.
         **/
        sortedIndex<V extends List<any>>(
            list: V,
            value: TypeOfList<V>,
            iteratee?: Iteratee<V | undefined, any>,
            context?: any
        ): number;

        /**
         * A function to create flexibly-numbered lists of integers, handy for
         * `each` and `map` loops. Returns a list of integers from
         * `startOrStop` (inclusive) to `stop` (exclusive), incremented
         * (or decremented) by `step`. Note that ranges that `stop` before they
         * `start` are considered to be zero-length instead of negative - if
         * you'd like a negative range, use a negative `step`.
         *
         * If `stop` is not specified, `startOrStop` will be the number to stop
         * at and the default start of 0 will be used.
         * @param startOrStop If `stop` is specified, the number to start at.
         * Otherwise, this is the number to stop at and the default start of 0
         * will be used.
         * @param stop The number to stop at.
         * @param step The number to count up by each iteration, optional,
         * default = 1.
         * @returns An array of numbers from start to `stop` with increments
         * of `step`.
         **/
        range(
            startOrStop: number,
            stop?: number,
            step?: number
        ): number[];

        /**
         * Chunks `list` into multiple arrays, each containing `length` or
         * fewer items.
         * @param list The list to chunk.
         * @param length The maximum size of the chunks.
         * @returns The contents of `list` in chunks no greater than `length`
         * in size.
         **/
        chunk<V extends List<any>>(list: V, length: number): TypeOfList<V>[][]

        /*************
         * Functions *
         *************/

        /**
        * Bind a function to an object, meaning that whenever the function is called, the value of this will
        * be the object. Optionally, bind arguments to the function to pre-fill them, also known as partial application.
        * @param func The function to bind `this` to `object`.
        * @param context The `this` pointer whenever `fn` is called.
        * @param arguments Additional arguments to pass to `fn` when called.
        * @return `fn` with `this` bound to `object`.
        **/
        bind(
            func: Function,
            context: any,
            ...args: any[]): () => any;

        /**
        * Binds a number of methods on the object, specified by methodNames, to be run in the context of that object
        * whenever they are invoked. Very handy for binding functions that are going to be used as event handlers,
        * which would otherwise be invoked with a fairly useless this. If no methodNames are provided, all of the
        * object's function properties will be bound to it.
        * @param object The object to bind the methods `methodName` to.
        * @param methodNames The methods to bind to `object`, optional and if not provided all of `object`'s
        * methods are bound.
        **/
        bindAll(
            object: any,
            ...methodNames: string[]): any;

        /**
        * Partially apply a function by filling in any number of its arguments, without changing its dynamic this value.
        * A close cousin of bind.  You may pass _ in your list of arguments to specify an argument that should not be
        * pre-filled, but left open to supply at call-time.
        * @param fn Function to partially fill in arguments.
        * @param arguments The partial arguments.
        * @return `fn` with partially filled in arguments.
        **/

        partial<T1, T2>(
            fn: { (p1: T1): T2 },
            p1: T1
        ): { (): T2 };

        partial<T1, T2, T3>(
            fn: { (p1: T1, p2: T2): T3 },
            p1: T1
        ): { (p2: T2): T3 };

        partial<T1, T2, T3>(
            fn: { (p1: T1, p2: T2): T3 },
            p1: T1,
            p2: T2
        ): { (): T3 };

        partial<T1, T2, T3>(
            fn: { (p1: T1, p2: T2): T3 },
            stub1: UnderscoreStatic,
            p2: T2
        ): { (p1: T1): T3 };

        partial<T1, T2, T3, T4>(
            fn: { (p1: T1, p2: T2, p3: T3): T4 },
            p1: T1
        ): { (p2: T2, p3: T3): T4 };

        partial<T1, T2, T3, T4>(
            fn: { (p1: T1, p2: T2, p3: T3): T4 },
            p1: T1,
            p2: T2
        ): { (p3: T3): T4 };

        partial<T1, T2, T3, T4>(
            fn: { (p1: T1, p2: T2, p3: T3): T4 },
            stub1: UnderscoreStatic,
            p2: T2
        ): { (p1: T1, p3: T3): T4 };

        partial<T1, T2, T3, T4>(
            fn: { (p1: T1, p2: T2, p3: T3): T4 },
            p1: T1,
            p2: T2,
            p3: T3
        ): { (): T4 };

        partial<T1, T2, T3, T4>(
            fn: { (p1: T1, p2: T2, p3: T3): T4 },
            stub1: UnderscoreStatic,
            p2: T2,
            p3: T3
        ): { (p1: T1): T4 };

        partial<T1, T2, T3, T4>(
            fn: { (p1: T1, p2: T2, p3: T3): T4 },
            p1: T1,
            stub2: UnderscoreStatic,
            p3: T3
        ): { (p2: T2): T4 };

        partial<T1, T2, T3, T4>(
            fn: { (p1: T1, p2: T2, p3: T3): T4 },
            stub1: UnderscoreStatic,
            stub2: UnderscoreStatic,
            p3: T3
        ): { (p1: T1, p2: T2): T4 };

        partial<T1, T2, T3, T4, T5>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4): T5 },
            p1: T1
        ): { (p2: T2, p3: T3, p4: T4): T5 };

        partial<T1, T2, T3, T4, T5>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4): T5 },
            p1: T1,
            p2: T2
        ): { (p3: T3, p4: T4): T5 };

        partial<T1, T2, T3, T4, T5>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4): T5 },
            stub1: UnderscoreStatic,
            p2: T2
        ): { (p1: T1, p3: T3, p4: T4): T5 };

        partial<T1, T2, T3, T4, T5>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4): T5 },
            p1: T1,
            p2: T2,
            p3: T3
        ): { (p4: T4): T5 };

        partial<T1, T2, T3, T4, T5>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4): T5 },
            stub1: UnderscoreStatic,
            p2: T2,
            p3: T3
        ): { (p1: T1, p4: T4): T5 };

        partial<T1, T2, T3, T4, T5>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4): T5 },
            p1: T1,
            stub2: UnderscoreStatic,
            p3: T3
        ): { (p2: T2, p4: T4): T5 };

        partial<T1, T2, T3, T4, T5>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4): T5 },
            stub1: UnderscoreStatic,
            stub2: UnderscoreStatic,
            p3: T3
        ): { (p1: T1, p2: T2, p4: T4): T5 };

        partial<T1, T2, T3, T4, T5>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4): T5 },
            p1: T1,
            p2: T2,
            p3: T3,
            p4: T4
        ): { (): T5 };

        partial<T1, T2, T3, T4, T5>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4): T5 },
            stub1: UnderscoreStatic,
            p2: T2,
            p3: T3,
            p4: T4
        ): { (p1: T1): T5 };

        partial<T1, T2, T3, T4, T5>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4): T5 },
            p1: T1,
            stub2: UnderscoreStatic,
            p3: T3,
            p4: T4
        ): { (p2: T2): T5 };

        partial<T1, T2, T3, T4, T5>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4): T5 },
            stub1: UnderscoreStatic,
            stub2: UnderscoreStatic,
            p3: T3,
            p4: T4
        ): { (p1: T1, p2: T2): T5 };

        partial<T1, T2, T3, T4, T5>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4): T5 },
            p1: T1,
            p2: T2,
            stub3: UnderscoreStatic,
            p4: T4
        ): { (p3: T3): T5 };

        partial<T1, T2, T3, T4, T5>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4): T5 },
            stub1: UnderscoreStatic,
            p2: T2,
            stub3: UnderscoreStatic,
            p4: T4
        ): { (p1: T1, p3: T3): T5 };

        partial<T1, T2, T3, T4, T5>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4): T5 },
            p1: T1,
            stub2: UnderscoreStatic,
            stub3: UnderscoreStatic,
            p4: T4
        ): { (p2: T2, p3: T3): T5 };

        partial<T1, T2, T3, T4, T5>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4): T5 },
            stub1: UnderscoreStatic,
            stub2: UnderscoreStatic,
            stub3: UnderscoreStatic,
            p4: T4
        ): { (p1: T1, p2: T2, p3: T3): T5 };

        partial<T1, T2, T3, T4, T5, T6>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5): T6 },
            p1: T1
        ): { (p2: T2, p3: T3, p4: T4, p5: T5): T6 };

        partial<T1, T2, T3, T4, T5, T6>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5): T6 },
            p1: T1,
            p2: T2
        ): { (p3: T3, p4: T4, p5: T5): T6 };

        partial<T1, T2, T3, T4, T5, T6>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5): T6 },
            stub1: UnderscoreStatic,
            p2: T2
        ): { (p1: T1, p3: T3, p4: T4, p5: T5): T6 };

        partial<T1, T2, T3, T4, T5, T6>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5): T6 },
            p1: T1,
            p2: T2,
            p3: T3
        ): { (p4: T4, p5: T5): T6 };

        partial<T1, T2, T3, T4, T5, T6>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5): T6 },
            stub1: UnderscoreStatic,
            p2: T2,
            p3: T3
        ): { (p1: T1, p4: T4, p5: T5): T6 };

        partial<T1, T2, T3, T4, T5, T6>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5): T6 },
            p1: T1,
            stub2: UnderscoreStatic,
            p3: T3
        ): { (p2: T2, p4: T4, p5: T5): T6 };

        partial<T1, T2, T3, T4, T5, T6>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5): T6 },
            stub1: UnderscoreStatic,
            stub2: UnderscoreStatic,
            p3: T3
        ): { (p1: T1, p2: T2, p4: T4, p5: T5): T6 };

        partial<T1, T2, T3, T4, T5, T6>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5): T6 },
            p1: T1,
            p2: T2,
            p3: T3,
            p4: T4
        ): { (p5: T5): T6 };

        partial<T1, T2, T3, T4, T5, T6>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5): T6 },
            stub1: UnderscoreStatic,
            p2: T2,
            p3: T3,
            p4: T4
        ): { (p1: T1, p5: T5): T6 };

        partial<T1, T2, T3, T4, T5, T6>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5): T6 },
            p1: T1,
            stub2: UnderscoreStatic,
            p3: T3,
            p4: T4
        ): { (p2: T2, p5: T5): T6 };

        partial<T1, T2, T3, T4, T5, T6>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5): T6 },
            stub1: UnderscoreStatic,
            stub2: UnderscoreStatic,
            p3: T3,
            p4: T4
        ): { (p1: T1, p2: T2, p5: T5): T6 };

        partial<T1, T2, T3, T4, T5, T6>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5): T6 },
            p1: T1,
            p2: T2,
            stub3: UnderscoreStatic,
            p4: T4
        ): { (p3: T3, p5: T5): T6 };

        partial<T1, T2, T3, T4, T5, T6>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5): T6 },
            stub1: UnderscoreStatic,
            p2: T2,
            stub3: UnderscoreStatic,
            p4: T4
        ): { (p1: T1, p3: T3, p5: T5): T6 };

        partial<T1, T2, T3, T4, T5, T6>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5): T6 },
            p1: T1,
            stub2: UnderscoreStatic,
            stub3: UnderscoreStatic,
            p4: T4
        ): { (p2: T2, p3: T3, p5: T5): T6 };

        partial<T1, T2, T3, T4, T5, T6>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5): T6 },
            stub1: UnderscoreStatic,
            stub2: UnderscoreStatic,
            stub3: UnderscoreStatic,
            p4: T4
        ): { (p1: T1, p2: T2, p3: T3, p5: T5): T6 };

        partial<T1, T2, T3, T4, T5, T6>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5): T6 },
            p1: T1,
            p2: T2,
            p3: T3,
            p4: T4,
            p5: T5
        ): { (): T6 };

        partial<T1, T2, T3, T4, T5, T6>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5): T6 },
            stub1: UnderscoreStatic,
            p2: T2,
            p3: T3,
            p4: T4,
            p5: T5
        ): { (p1: T1): T6 };

        partial<T1, T2, T3, T4, T5, T6>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5): T6 },
            p1: T1,
            stub2: UnderscoreStatic,
            p3: T3,
            p4: T4,
            p5: T5
        ): { (p2: T2): T6 };

        partial<T1, T2, T3, T4, T5, T6>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5): T6 },
            stub1: UnderscoreStatic,
            stub2: UnderscoreStatic,
            p3: T3,
            p4: T4,
            p5: T5
        ): { (p1: T1, p2: T2): T6 };

        partial<T1, T2, T3, T4, T5, T6>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5): T6 },
            p1: T1,
            p2: T2,
            stub3: UnderscoreStatic,
            p4: T4,
            p5: T5
        ): { (p3: T3): T6 };

        partial<T1, T2, T3, T4, T5, T6>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5): T6 },
            stub1: UnderscoreStatic,
            p2: T2,
            stub3: UnderscoreStatic,
            p4: T4,
            p5: T5
        ): { (p1: T1, p3: T3): T6 };

        partial<T1, T2, T3, T4, T5, T6>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5): T6 },
            p1: T1,
            stub2: UnderscoreStatic,
            stub3: UnderscoreStatic,
            p4: T4,
            p5: T5
        ): { (p2: T2, p3: T3): T6 };

        partial<T1, T2, T3, T4, T5, T6>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5): T6 },
            stub1: UnderscoreStatic,
            stub2: UnderscoreStatic,
            stub3: UnderscoreStatic,
            p4: T4,
            p5: T5
        ): { (p1: T1, p2: T2, p3: T3): T6 };

        partial<T1, T2, T3, T4, T5, T6>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5): T6 },
            p1: T1,
            p2: T2,
            p3: T3,
            stub4: UnderscoreStatic,
            p5: T5
        ): { (p4: T4): T6 };

        partial<T1, T2, T3, T4, T5, T6>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5): T6 },
            stub1: UnderscoreStatic,
            p2: T2,
            p3: T3,
            stub4: UnderscoreStatic,
            p5: T5
        ): { (p1: T1, p4: T4): T6 };

        partial<T1, T2, T3, T4, T5, T6>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5): T6 },
            p1: T1,
            stub2: UnderscoreStatic,
            p3: T3,
            stub4: UnderscoreStatic,
            p5: T5
        ): { (p2: T2, p4: T4): T6 };

        partial<T1, T2, T3, T4, T5, T6>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5): T6 },
            stub1: UnderscoreStatic,
            stub2: UnderscoreStatic,
            p3: T3,
            stub4: UnderscoreStatic,
            p5: T5
        ): { (p1: T1, p2: T2, p4: T4): T6 };

        partial<T1, T2, T3, T4, T5, T6>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5): T6 },
            p1: T1,
            p2: T2,
            stub3: UnderscoreStatic,
            stub4: UnderscoreStatic,
            p5: T5
        ): { (p3: T3, p4: T4): T6 };

        partial<T1, T2, T3, T4, T5, T6>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5): T6 },
            stub1: UnderscoreStatic,
            p2: T2,
            stub3: UnderscoreStatic,
            stub4: UnderscoreStatic,
            p5: T5
        ): { (p1: T1, p3: T3, p4: T4): T6 };

        partial<T1, T2, T3, T4, T5, T6>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5): T6 },
            p1: T1,
            stub2: UnderscoreStatic,
            stub3: UnderscoreStatic,
            stub4: UnderscoreStatic,
            p5: T5
        ): { (p2: T2, p3: T3, p4: T4): T6 };

        partial<T1, T2, T3, T4, T5, T6>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5): T6 },
            stub1: UnderscoreStatic,
            stub2: UnderscoreStatic,
            stub3: UnderscoreStatic,
            stub4: UnderscoreStatic,
            p5: T5
        ): { (p1: T1, p2: T2, p3: T3, p4: T4): T6 };

        partial<T1, T2, T3, T4, T5, T6, T7>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6): T7 },
            p1: T1
        ): { (p2: T2, p3: T3, p4: T4, p5: T5, p6: T6): T7 };

        partial<T1, T2, T3, T4, T5, T6, T7>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6): T7 },
            p1: T1,
            p2: T2
        ): { (p3: T3, p4: T4, p5: T5, p6: T6): T7 };

        partial<T1, T2, T3, T4, T5, T6, T7>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6): T7 },
            stub1: UnderscoreStatic,
            p2: T2
        ): { (p1: T1, p3: T3, p4: T4, p5: T5, p6: T6): T7 };

        partial<T1, T2, T3, T4, T5, T6, T7>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6): T7 },
            p1: T1,
            p2: T2,
            p3: T3
        ): { (p4: T4, p5: T5, p6: T6): T7 };

        partial<T1, T2, T3, T4, T5, T6, T7>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6): T7 },
            stub1: UnderscoreStatic,
            p2: T2,
            p3: T3
        ): { (p1: T1, p4: T4, p5: T5, p6: T6): T7 };

        partial<T1, T2, T3, T4, T5, T6, T7>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6): T7 },
            p1: T1,
            stub2: UnderscoreStatic,
            p3: T3
        ): { (p2: T2, p4: T4, p5: T5, p6: T6): T7 };

        partial<T1, T2, T3, T4, T5, T6, T7>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6): T7 },
            stub1: UnderscoreStatic,
            stub2: UnderscoreStatic,
            p3: T3
        ): { (p1: T1, p2: T2, p4: T4, p5: T5, p6: T6): T7 };

        partial<T1, T2, T3, T4, T5, T6, T7>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6): T7 },
            p1: T1,
            p2: T2,
            p3: T3,
            p4: T4
        ): { (p5: T5, p6: T6): T7 };

        partial<T1, T2, T3, T4, T5, T6, T7>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6): T7 },
            stub1: UnderscoreStatic,
            p2: T2,
            p3: T3,
            p4: T4
        ): { (p1: T1, p5: T5, p6: T6): T7 };

        partial<T1, T2, T3, T4, T5, T6, T7>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6): T7 },
            p1: T1,
            stub2: UnderscoreStatic,
            p3: T3,
            p4: T4
        ): { (p2: T2, p5: T5, p6: T6): T7 };

        partial<T1, T2, T3, T4, T5, T6, T7>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6): T7 },
            stub1: UnderscoreStatic,
            stub2: UnderscoreStatic,
            p3: T3,
            p4: T4
        ): { (p1: T1, p2: T2, p5: T5, p6: T6): T7 };

        partial<T1, T2, T3, T4, T5, T6, T7>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6): T7 },
            p1: T1,
            p2: T2,
            stub3: UnderscoreStatic,
            p4: T4
        ): { (p3: T3, p5: T5, p6: T6): T7 };

        partial<T1, T2, T3, T4, T5, T6, T7>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6): T7 },
            stub1: UnderscoreStatic,
            p2: T2,
            stub3: UnderscoreStatic,
            p4: T4
        ): { (p1: T1, p3: T3, p5: T5, p6: T6): T7 };

        partial<T1, T2, T3, T4, T5, T6, T7>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6): T7 },
            p1: T1,
            stub2: UnderscoreStatic,
            stub3: UnderscoreStatic,
            p4: T4
        ): { (p2: T2, p3: T3, p5: T5, p6: T6): T7 };

        partial<T1, T2, T3, T4, T5, T6, T7>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6): T7 },
            stub1: UnderscoreStatic,
            stub2: UnderscoreStatic,
            stub3: UnderscoreStatic,
            p4: T4
        ): { (p1: T1, p2: T2, p3: T3, p5: T5, p6: T6): T7 };

        partial<T1, T2, T3, T4, T5, T6, T7>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6): T7 },
            p1: T1,
            p2: T2,
            p3: T3,
            p4: T4,
            p5: T5
        ): { (p6: T6): T7 };

        partial<T1, T2, T3, T4, T5, T6, T7>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6): T7 },
            stub1: UnderscoreStatic,
            p2: T2,
            p3: T3,
            p4: T4,
            p5: T5
        ): { (p1: T1, p6: T6): T7 };

        partial<T1, T2, T3, T4, T5, T6, T7>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6): T7 },
            p1: T1,
            stub2: UnderscoreStatic,
            p3: T3,
            p4: T4,
            p5: T5
        ): { (p2: T2, p6: T6): T7 };

        partial<T1, T2, T3, T4, T5, T6, T7>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6): T7 },
            stub1: UnderscoreStatic,
            stub2: UnderscoreStatic,
            p3: T3,
            p4: T4,
            p5: T5
        ): { (p1: T1, p2: T2, p6: T6): T7 };

        partial<T1, T2, T3, T4, T5, T6, T7>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6): T7 },
            p1: T1,
            p2: T2,
            stub3: UnderscoreStatic,
            p4: T4,
            p5: T5
        ): { (p3: T3, p6: T6): T7 };

        partial<T1, T2, T3, T4, T5, T6, T7>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6): T7 },
            stub1: UnderscoreStatic,
            p2: T2,
            stub3: UnderscoreStatic,
            p4: T4,
            p5: T5
        ): { (p1: T1, p3: T3, p6: T6): T7 };

        partial<T1, T2, T3, T4, T5, T6, T7>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6): T7 },
            p1: T1,
            stub2: UnderscoreStatic,
            stub3: UnderscoreStatic,
            p4: T4,
            p5: T5
        ): { (p2: T2, p3: T3, p6: T6): T7 };

        partial<T1, T2, T3, T4, T5, T6, T7>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6): T7 },
            stub1: UnderscoreStatic,
            stub2: UnderscoreStatic,
            stub3: UnderscoreStatic,
            p4: T4,
            p5: T5
        ): { (p1: T1, p2: T2, p3: T3, p6: T6): T7 };

        partial<T1, T2, T3, T4, T5, T6, T7>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6): T7 },
            p1: T1,
            p2: T2,
            p3: T3,
            stub4: UnderscoreStatic,
            p5: T5
        ): { (p4: T4, p6: T6): T7 };

        partial<T1, T2, T3, T4, T5, T6, T7>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6): T7 },
            stub1: UnderscoreStatic,
            p2: T2,
            p3: T3,
            stub4: UnderscoreStatic,
            p5: T5
        ): { (p1: T1, p4: T4, p6: T6): T7 };

        partial<T1, T2, T3, T4, T5, T6, T7>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6): T7 },
            p1: T1,
            stub2: UnderscoreStatic,
            p3: T3,
            stub4: UnderscoreStatic,
            p5: T5
        ): { (p2: T2, p4: T4, p6: T6): T7 };

        partial<T1, T2, T3, T4, T5, T6, T7>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6): T7 },
            stub1: UnderscoreStatic,
            stub2: UnderscoreStatic,
            p3: T3,
            stub4: UnderscoreStatic,
            p5: T5
        ): { (p1: T1, p2: T2, p4: T4, p6: T6): T7 };

        partial<T1, T2, T3, T4, T5, T6, T7>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6): T7 },
            p1: T1,
            p2: T2,
            stub3: UnderscoreStatic,
            stub4: UnderscoreStatic,
            p5: T5
        ): { (p3: T3, p4: T4, p6: T6): T7 };

        partial<T1, T2, T3, T4, T5, T6, T7>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6): T7 },
            stub1: UnderscoreStatic,
            p2: T2,
            stub3: UnderscoreStatic,
            stub4: UnderscoreStatic,
            p5: T5
        ): { (p1: T1, p3: T3, p4: T4, p6: T6): T7 };

        partial<T1, T2, T3, T4, T5, T6, T7>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6): T7 },
            p1: T1,
            stub2: UnderscoreStatic,
            stub3: UnderscoreStatic,
            stub4: UnderscoreStatic,
            p5: T5
        ): { (p2: T2, p3: T3, p4: T4, p6: T6): T7 };

        partial<T1, T2, T3, T4, T5, T6, T7>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6): T7 },
            stub1: UnderscoreStatic,
            stub2: UnderscoreStatic,
            stub3: UnderscoreStatic,
            stub4: UnderscoreStatic,
            p5: T5
        ): { (p1: T1, p2: T2, p3: T3, p4: T4, p6: T6): T7 };

        partial<T1, T2, T3, T4, T5, T6, T7>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6): T7 },
            p1: T1,
            p2: T2,
            p3: T3,
            p4: T4,
            p5: T5,
            p6: T6
        ): { (): T7 };

        partial<T1, T2, T3, T4, T5, T6, T7>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6): T7 },
            stub1: UnderscoreStatic,
            p2: T2,
            p3: T3,
            p4: T4,
            p5: T5,
            p6: T6
        ): { (p1: T1): T7 };

        partial<T1, T2, T3, T4, T5, T6, T7>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6): T7 },
            p1: T1,
            stub2: UnderscoreStatic,
            p3: T3,
            p4: T4,
            p5: T5,
            p6: T6
        ): { (p2: T2): T7 };

        partial<T1, T2, T3, T4, T5, T6, T7>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6): T7 },
            stub1: UnderscoreStatic,
            stub2: UnderscoreStatic,
            p3: T3,
            p4: T4,
            p5: T5,
            p6: T6
        ): { (p1: T1, p2: T2): T7 };

        partial<T1, T2, T3, T4, T5, T6, T7>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6): T7 },
            p1: T1,
            p2: T2,
            stub3: UnderscoreStatic,
            p4: T4,
            p5: T5,
            p6: T6
        ): { (p3: T3): T7 };

        partial<T1, T2, T3, T4, T5, T6, T7>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6): T7 },
            stub1: UnderscoreStatic,
            p2: T2,
            stub3: UnderscoreStatic,
            p4: T4,
            p5: T5,
            p6: T6
        ): { (p1: T1, p3: T3): T7 };

        partial<T1, T2, T3, T4, T5, T6, T7>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6): T7 },
            p1: T1,
            stub2: UnderscoreStatic,
            stub3: UnderscoreStatic,
            p4: T4,
            p5: T5,
            p6: T6
        ): { (p2: T2, p3: T3): T7 };

        partial<T1, T2, T3, T4, T5, T6, T7>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6): T7 },
            stub1: UnderscoreStatic,
            stub2: UnderscoreStatic,
            stub3: UnderscoreStatic,
            p4: T4,
            p5: T5,
            p6: T6
        ): { (p1: T1, p2: T2, p3: T3): T7 };

        partial<T1, T2, T3, T4, T5, T6, T7>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6): T7 },
            p1: T1,
            p2: T2,
            p3: T3,
            stub4: UnderscoreStatic,
            p5: T5,
            p6: T6
        ): { (p4: T4): T7 };

        partial<T1, T2, T3, T4, T5, T6, T7>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6): T7 },
            stub1: UnderscoreStatic,
            p2: T2,
            p3: T3,
            stub4: UnderscoreStatic,
            p5: T5,
            p6: T6
        ): { (p1: T1, p4: T4): T7 };

        partial<T1, T2, T3, T4, T5, T6, T7>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6): T7 },
            p1: T1,
            stub2: UnderscoreStatic,
            p3: T3,
            stub4: UnderscoreStatic,
            p5: T5,
            p6: T6
        ): { (p2: T2, p4: T4): T7 };

        partial<T1, T2, T3, T4, T5, T6, T7>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6): T7 },
            stub1: UnderscoreStatic,
            stub2: UnderscoreStatic,
            p3: T3,
            stub4: UnderscoreStatic,
            p5: T5,
            p6: T6
        ): { (p1: T1, p2: T2, p4: T4): T7 };

        partial<T1, T2, T3, T4, T5, T6, T7>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6): T7 },
            p1: T1,
            p2: T2,
            stub3: UnderscoreStatic,
            stub4: UnderscoreStatic,
            p5: T5,
            p6: T6
        ): { (p3: T3, p4: T4): T7 };

        partial<T1, T2, T3, T4, T5, T6, T7>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6): T7 },
            stub1: UnderscoreStatic,
            p2: T2,
            stub3: UnderscoreStatic,
            stub4: UnderscoreStatic,
            p5: T5,
            p6: T6
        ): { (p1: T1, p3: T3, p4: T4): T7 };

        partial<T1, T2, T3, T4, T5, T6, T7>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6): T7 },
            p1: T1,
            stub2: UnderscoreStatic,
            stub3: UnderscoreStatic,
            stub4: UnderscoreStatic,
            p5: T5,
            p6: T6
        ): { (p2: T2, p3: T3, p4: T4): T7 };

        partial<T1, T2, T3, T4, T5, T6, T7>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6): T7 },
            stub1: UnderscoreStatic,
            stub2: UnderscoreStatic,
            stub3: UnderscoreStatic,
            stub4: UnderscoreStatic,
            p5: T5,
            p6: T6
        ): { (p1: T1, p2: T2, p3: T3, p4: T4): T7 };

        partial<T1, T2, T3, T4, T5, T6, T7>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6): T7 },
            p1: T1,
            p2: T2,
            p3: T3,
            p4: T4,
            stub5: UnderscoreStatic,
            p6: T6
        ): { (p5: T5): T7 };

        partial<T1, T2, T3, T4, T5, T6, T7>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6): T7 },
            stub1: UnderscoreStatic,
            p2: T2,
            p3: T3,
            p4: T4,
            stub5: UnderscoreStatic,
            p6: T6
        ): { (p1: T1, p5: T5): T7 };

        partial<T1, T2, T3, T4, T5, T6, T7>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6): T7 },
            p1: T1,
            stub2: UnderscoreStatic,
            p3: T3,
            p4: T4,
            stub5: UnderscoreStatic,
            p6: T6
        ): { (p2: T2, p5: T5): T7 };

        partial<T1, T2, T3, T4, T5, T6, T7>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6): T7 },
            stub1: UnderscoreStatic,
            stub2: UnderscoreStatic,
            p3: T3,
            p4: T4,
            stub5: UnderscoreStatic,
            p6: T6
        ): { (p1: T1, p2: T2, p5: T5): T7 };

        partial<T1, T2, T3, T4, T5, T6, T7>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6): T7 },
            p1: T1,
            p2: T2,
            stub3: UnderscoreStatic,
            p4: T4,
            stub5: UnderscoreStatic,
            p6: T6
        ): { (p3: T3, p5: T5): T7 };

        partial<T1, T2, T3, T4, T5, T6, T7>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6): T7 },
            stub1: UnderscoreStatic,
            p2: T2,
            stub3: UnderscoreStatic,
            p4: T4,
            stub5: UnderscoreStatic,
            p6: T6
        ): { (p1: T1, p3: T3, p5: T5): T7 };

        partial<T1, T2, T3, T4, T5, T6, T7>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6): T7 },
            p1: T1,
            stub2: UnderscoreStatic,
            stub3: UnderscoreStatic,
            p4: T4,
            stub5: UnderscoreStatic,
            p6: T6
        ): { (p2: T2, p3: T3, p5: T5): T7 };

        partial<T1, T2, T3, T4, T5, T6, T7>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6): T7 },
            stub1: UnderscoreStatic,
            stub2: UnderscoreStatic,
            stub3: UnderscoreStatic,
            p4: T4,
            stub5: UnderscoreStatic,
            p6: T6
        ): { (p1: T1, p2: T2, p3: T3, p5: T5): T7 };

        partial<T1, T2, T3, T4, T5, T6, T7>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6): T7 },
            p1: T1,
            p2: T2,
            p3: T3,
            stub4: UnderscoreStatic,
            stub5: UnderscoreStatic,
            p6: T6
        ): { (p4: T4, p5: T5): T7 };

        partial<T1, T2, T3, T4, T5, T6, T7>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6): T7 },
            stub1: UnderscoreStatic,
            p2: T2,
            p3: T3,
            stub4: UnderscoreStatic,
            stub5: UnderscoreStatic,
            p6: T6
        ): { (p1: T1, p4: T4, p5: T5): T7 };

        partial<T1, T2, T3, T4, T5, T6, T7>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6): T7 },
            p1: T1,
            stub2: UnderscoreStatic,
            p3: T3,
            stub4: UnderscoreStatic,
            stub5: UnderscoreStatic,
            p6: T6
        ): { (p2: T2, p4: T4, p5: T5): T7 };

        partial<T1, T2, T3, T4, T5, T6, T7>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6): T7 },
            stub1: UnderscoreStatic,
            stub2: UnderscoreStatic,
            p3: T3,
            stub4: UnderscoreStatic,
            stub5: UnderscoreStatic,
            p6: T6
        ): { (p1: T1, p2: T2, p4: T4, p5: T5): T7 };

        partial<T1, T2, T3, T4, T5, T6, T7>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6): T7 },
            p1: T1,
            p2: T2,
            stub3: UnderscoreStatic,
            stub4: UnderscoreStatic,
            stub5: UnderscoreStatic,
            p6: T6
        ): { (p3: T3, p4: T4, p5: T5): T7 };

        partial<T1, T2, T3, T4, T5, T6, T7>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6): T7 },
            stub1: UnderscoreStatic,
            p2: T2,
            stub3: UnderscoreStatic,
            stub4: UnderscoreStatic,
            stub5: UnderscoreStatic,
            p6: T6
        ): { (p1: T1, p3: T3, p4: T4, p5: T5): T7 };

        partial<T1, T2, T3, T4, T5, T6, T7>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6): T7 },
            p1: T1,
            stub2: UnderscoreStatic,
            stub3: UnderscoreStatic,
            stub4: UnderscoreStatic,
            stub5: UnderscoreStatic,
            p6: T6
        ): { (p2: T2, p3: T3, p4: T4, p5: T5): T7 };

        partial<T1, T2, T3, T4, T5, T6, T7>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6): T7 },
            stub1: UnderscoreStatic,
            stub2: UnderscoreStatic,
            stub3: UnderscoreStatic,
            stub4: UnderscoreStatic,
            stub5: UnderscoreStatic,
            p6: T6
        ): { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5): T7 };

        partial<T1, T2, T3, T4, T5, T6, T7, T8>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8 },
            p1: T1
        ): { (p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8 };

        partial<T1, T2, T3, T4, T5, T6, T7, T8>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8 },
            p1: T1,
            p2: T2
        ): { (p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8 };

        partial<T1, T2, T3, T4, T5, T6, T7, T8>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8 },
            stub1: UnderscoreStatic,
            p2: T2
        ): { (p1: T1, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8 };

        partial<T1, T2, T3, T4, T5, T6, T7, T8>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8 },
            p1: T1,
            p2: T2,
            p3: T3
        ): { (p4: T4, p5: T5, p6: T6, p7: T7): T8 };

        partial<T1, T2, T3, T4, T5, T6, T7, T8>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8 },
            stub1: UnderscoreStatic,
            p2: T2,
            p3: T3
        ): { (p1: T1, p4: T4, p5: T5, p6: T6, p7: T7): T8 };

        partial<T1, T2, T3, T4, T5, T6, T7, T8>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8 },
            p1: T1,
            stub2: UnderscoreStatic,
            p3: T3
        ): { (p2: T2, p4: T4, p5: T5, p6: T6, p7: T7): T8 };

        partial<T1, T2, T3, T4, T5, T6, T7, T8>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8 },
            stub1: UnderscoreStatic,
            stub2: UnderscoreStatic,
            p3: T3
        ): { (p1: T1, p2: T2, p4: T4, p5: T5, p6: T6, p7: T7): T8 };

        partial<T1, T2, T3, T4, T5, T6, T7, T8>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8 },
            p1: T1,
            p2: T2,
            p3: T3,
            p4: T4
        ): { (p5: T5, p6: T6, p7: T7): T8 };

        partial<T1, T2, T3, T4, T5, T6, T7, T8>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8 },
            stub1: UnderscoreStatic,
            p2: T2,
            p3: T3,
            p4: T4
        ): { (p1: T1, p5: T5, p6: T6, p7: T7): T8 };

        partial<T1, T2, T3, T4, T5, T6, T7, T8>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8 },
            p1: T1,
            stub2: UnderscoreStatic,
            p3: T3,
            p4: T4
        ): { (p2: T2, p5: T5, p6: T6, p7: T7): T8 };

        partial<T1, T2, T3, T4, T5, T6, T7, T8>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8 },
            stub1: UnderscoreStatic,
            stub2: UnderscoreStatic,
            p3: T3,
            p4: T4
        ): { (p1: T1, p2: T2, p5: T5, p6: T6, p7: T7): T8 };

        partial<T1, T2, T3, T4, T5, T6, T7, T8>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8 },
            p1: T1,
            p2: T2,
            stub3: UnderscoreStatic,
            p4: T4
        ): { (p3: T3, p5: T5, p6: T6, p7: T7): T8 };

        partial<T1, T2, T3, T4, T5, T6, T7, T8>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8 },
            stub1: UnderscoreStatic,
            p2: T2,
            stub3: UnderscoreStatic,
            p4: T4
        ): { (p1: T1, p3: T3, p5: T5, p6: T6, p7: T7): T8 };

        partial<T1, T2, T3, T4, T5, T6, T7, T8>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8 },
            p1: T1,
            stub2: UnderscoreStatic,
            stub3: UnderscoreStatic,
            p4: T4
        ): { (p2: T2, p3: T3, p5: T5, p6: T6, p7: T7): T8 };

        partial<T1, T2, T3, T4, T5, T6, T7, T8>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8 },
            stub1: UnderscoreStatic,
            stub2: UnderscoreStatic,
            stub3: UnderscoreStatic,
            p4: T4
        ): { (p1: T1, p2: T2, p3: T3, p5: T5, p6: T6, p7: T7): T8 };

        partial<T1, T2, T3, T4, T5, T6, T7, T8>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8 },
            p1: T1,
            p2: T2,
            p3: T3,
            p4: T4,
            p5: T5
        ): { (p6: T6, p7: T7): T8 };

        partial<T1, T2, T3, T4, T5, T6, T7, T8>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8 },
            stub1: UnderscoreStatic,
            p2: T2,
            p3: T3,
            p4: T4,
            p5: T5
        ): { (p1: T1, p6: T6, p7: T7): T8 };

        partial<T1, T2, T3, T4, T5, T6, T7, T8>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8 },
            p1: T1,
            stub2: UnderscoreStatic,
            p3: T3,
            p4: T4,
            p5: T5
        ): { (p2: T2, p6: T6, p7: T7): T8 };

        partial<T1, T2, T3, T4, T5, T6, T7, T8>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8 },
            stub1: UnderscoreStatic,
            stub2: UnderscoreStatic,
            p3: T3,
            p4: T4,
            p5: T5
        ): { (p1: T1, p2: T2, p6: T6, p7: T7): T8 };

        partial<T1, T2, T3, T4, T5, T6, T7, T8>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8 },
            p1: T1,
            p2: T2,
            stub3: UnderscoreStatic,
            p4: T4,
            p5: T5
        ): { (p3: T3, p6: T6, p7: T7): T8 };

        partial<T1, T2, T3, T4, T5, T6, T7, T8>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8 },
            stub1: UnderscoreStatic,
            p2: T2,
            stub3: UnderscoreStatic,
            p4: T4,
            p5: T5
        ): { (p1: T1, p3: T3, p6: T6, p7: T7): T8 };

        partial<T1, T2, T3, T4, T5, T6, T7, T8>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8 },
            p1: T1,
            stub2: UnderscoreStatic,
            stub3: UnderscoreStatic,
            p4: T4,
            p5: T5
        ): { (p2: T2, p3: T3, p6: T6, p7: T7): T8 };

        partial<T1, T2, T3, T4, T5, T6, T7, T8>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8 },
            stub1: UnderscoreStatic,
            stub2: UnderscoreStatic,
            stub3: UnderscoreStatic,
            p4: T4,
            p5: T5
        ): { (p1: T1, p2: T2, p3: T3, p6: T6, p7: T7): T8 };

        partial<T1, T2, T3, T4, T5, T6, T7, T8>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8 },
            p1: T1,
            p2: T2,
            p3: T3,
            stub4: UnderscoreStatic,
            p5: T5
        ): { (p4: T4, p6: T6, p7: T7): T8 };

        partial<T1, T2, T3, T4, T5, T6, T7, T8>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8 },
            stub1: UnderscoreStatic,
            p2: T2,
            p3: T3,
            stub4: UnderscoreStatic,
            p5: T5
        ): { (p1: T1, p4: T4, p6: T6, p7: T7): T8 };

        partial<T1, T2, T3, T4, T5, T6, T7, T8>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8 },
            p1: T1,
            stub2: UnderscoreStatic,
            p3: T3,
            stub4: UnderscoreStatic,
            p5: T5
        ): { (p2: T2, p4: T4, p6: T6, p7: T7): T8 };

        partial<T1, T2, T3, T4, T5, T6, T7, T8>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8 },
            stub1: UnderscoreStatic,
            stub2: UnderscoreStatic,
            p3: T3,
            stub4: UnderscoreStatic,
            p5: T5
        ): { (p1: T1, p2: T2, p4: T4, p6: T6, p7: T7): T8 };

        partial<T1, T2, T3, T4, T5, T6, T7, T8>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8 },
            p1: T1,
            p2: T2,
            stub3: UnderscoreStatic,
            stub4: UnderscoreStatic,
            p5: T5
        ): { (p3: T3, p4: T4, p6: T6, p7: T7): T8 };

        partial<T1, T2, T3, T4, T5, T6, T7, T8>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8 },
            stub1: UnderscoreStatic,
            p2: T2,
            stub3: UnderscoreStatic,
            stub4: UnderscoreStatic,
            p5: T5
        ): { (p1: T1, p3: T3, p4: T4, p6: T6, p7: T7): T8 };

        partial<T1, T2, T3, T4, T5, T6, T7, T8>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8 },
            p1: T1,
            stub2: UnderscoreStatic,
            stub3: UnderscoreStatic,
            stub4: UnderscoreStatic,
            p5: T5
        ): { (p2: T2, p3: T3, p4: T4, p6: T6, p7: T7): T8 };

        partial<T1, T2, T3, T4, T5, T6, T7, T8>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8 },
            stub1: UnderscoreStatic,
            stub2: UnderscoreStatic,
            stub3: UnderscoreStatic,
            stub4: UnderscoreStatic,
            p5: T5
        ): { (p1: T1, p2: T2, p3: T3, p4: T4, p6: T6, p7: T7): T8 };

        partial<T1, T2, T3, T4, T5, T6, T7, T8>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8 },
            p1: T1,
            p2: T2,
            p3: T3,
            p4: T4,
            p5: T5,
            p6: T6
        ): { (p7: T7): T8 };

        partial<T1, T2, T3, T4, T5, T6, T7, T8>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8 },
            stub1: UnderscoreStatic,
            p2: T2,
            p3: T3,
            p4: T4,
            p5: T5,
            p6: T6
        ): { (p1: T1, p7: T7): T8 };

        partial<T1, T2, T3, T4, T5, T6, T7, T8>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8 },
            p1: T1,
            stub2: UnderscoreStatic,
            p3: T3,
            p4: T4,
            p5: T5,
            p6: T6
        ): { (p2: T2, p7: T7): T8 };

        partial<T1, T2, T3, T4, T5, T6, T7, T8>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8 },
            stub1: UnderscoreStatic,
            stub2: UnderscoreStatic,
            p3: T3,
            p4: T4,
            p5: T5,
            p6: T6
        ): { (p1: T1, p2: T2, p7: T7): T8 };

        partial<T1, T2, T3, T4, T5, T6, T7, T8>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8 },
            p1: T1,
            p2: T2,
            stub3: UnderscoreStatic,
            p4: T4,
            p5: T5,
            p6: T6
        ): { (p3: T3, p7: T7): T8 };

        partial<T1, T2, T3, T4, T5, T6, T7, T8>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8 },
            stub1: UnderscoreStatic,
            p2: T2,
            stub3: UnderscoreStatic,
            p4: T4,
            p5: T5,
            p6: T6
        ): { (p1: T1, p3: T3, p7: T7): T8 };

        partial<T1, T2, T3, T4, T5, T6, T7, T8>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8 },
            p1: T1,
            stub2: UnderscoreStatic,
            stub3: UnderscoreStatic,
            p4: T4,
            p5: T5,
            p6: T6
        ): { (p2: T2, p3: T3, p7: T7): T8 };

        partial<T1, T2, T3, T4, T5, T6, T7, T8>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8 },
            stub1: UnderscoreStatic,
            stub2: UnderscoreStatic,
            stub3: UnderscoreStatic,
            p4: T4,
            p5: T5,
            p6: T6
        ): { (p1: T1, p2: T2, p3: T3, p7: T7): T8 };

        partial<T1, T2, T3, T4, T5, T6, T7, T8>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8 },
            p1: T1,
            p2: T2,
            p3: T3,
            stub4: UnderscoreStatic,
            p5: T5,
            p6: T6
        ): { (p4: T4, p7: T7): T8 };

        partial<T1, T2, T3, T4, T5, T6, T7, T8>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8 },
            stub1: UnderscoreStatic,
            p2: T2,
            p3: T3,
            stub4: UnderscoreStatic,
            p5: T5,
            p6: T6
        ): { (p1: T1, p4: T4, p7: T7): T8 };

        partial<T1, T2, T3, T4, T5, T6, T7, T8>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8 },
            p1: T1,
            stub2: UnderscoreStatic,
            p3: T3,
            stub4: UnderscoreStatic,
            p5: T5,
            p6: T6
        ): { (p2: T2, p4: T4, p7: T7): T8 };

        partial<T1, T2, T3, T4, T5, T6, T7, T8>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8 },
            stub1: UnderscoreStatic,
            stub2: UnderscoreStatic,
            p3: T3,
            stub4: UnderscoreStatic,
            p5: T5,
            p6: T6
        ): { (p1: T1, p2: T2, p4: T4, p7: T7): T8 };

        partial<T1, T2, T3, T4, T5, T6, T7, T8>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8 },
            p1: T1,
            p2: T2,
            stub3: UnderscoreStatic,
            stub4: UnderscoreStatic,
            p5: T5,
            p6: T6
        ): { (p3: T3, p4: T4, p7: T7): T8 };

        partial<T1, T2, T3, T4, T5, T6, T7, T8>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8 },
            stub1: UnderscoreStatic,
            p2: T2,
            stub3: UnderscoreStatic,
            stub4: UnderscoreStatic,
            p5: T5,
            p6: T6
        ): { (p1: T1, p3: T3, p4: T4, p7: T7): T8 };

        partial<T1, T2, T3, T4, T5, T6, T7, T8>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8 },
            p1: T1,
            stub2: UnderscoreStatic,
            stub3: UnderscoreStatic,
            stub4: UnderscoreStatic,
            p5: T5,
            p6: T6
        ): { (p2: T2, p3: T3, p4: T4, p7: T7): T8 };

        partial<T1, T2, T3, T4, T5, T6, T7, T8>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8 },
            stub1: UnderscoreStatic,
            stub2: UnderscoreStatic,
            stub3: UnderscoreStatic,
            stub4: UnderscoreStatic,
            p5: T5,
            p6: T6
        ): { (p1: T1, p2: T2, p3: T3, p4: T4, p7: T7): T8 };

        partial<T1, T2, T3, T4, T5, T6, T7, T8>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8 },
            p1: T1,
            p2: T2,
            p3: T3,
            p4: T4,
            stub5: UnderscoreStatic,
            p6: T6
        ): { (p5: T5, p7: T7): T8 };

        partial<T1, T2, T3, T4, T5, T6, T7, T8>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8 },
            stub1: UnderscoreStatic,
            p2: T2,
            p3: T3,
            p4: T4,
            stub5: UnderscoreStatic,
            p6: T6
        ): { (p1: T1, p5: T5, p7: T7): T8 };

        partial<T1, T2, T3, T4, T5, T6, T7, T8>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8 },
            p1: T1,
            stub2: UnderscoreStatic,
            p3: T3,
            p4: T4,
            stub5: UnderscoreStatic,
            p6: T6
        ): { (p2: T2, p5: T5, p7: T7): T8 };

        partial<T1, T2, T3, T4, T5, T6, T7, T8>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8 },
            stub1: UnderscoreStatic,
            stub2: UnderscoreStatic,
            p3: T3,
            p4: T4,
            stub5: UnderscoreStatic,
            p6: T6
        ): { (p1: T1, p2: T2, p5: T5, p7: T7): T8 };

        partial<T1, T2, T3, T4, T5, T6, T7, T8>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8 },
            p1: T1,
            p2: T2,
            stub3: UnderscoreStatic,
            p4: T4,
            stub5: UnderscoreStatic,
            p6: T6
        ): { (p3: T3, p5: T5, p7: T7): T8 };

        partial<T1, T2, T3, T4, T5, T6, T7, T8>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8 },
            stub1: UnderscoreStatic,
            p2: T2,
            stub3: UnderscoreStatic,
            p4: T4,
            stub5: UnderscoreStatic,
            p6: T6
        ): { (p1: T1, p3: T3, p5: T5, p7: T7): T8 };

        partial<T1, T2, T3, T4, T5, T6, T7, T8>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8 },
            p1: T1,
            stub2: UnderscoreStatic,
            stub3: UnderscoreStatic,
            p4: T4,
            stub5: UnderscoreStatic,
            p6: T6
        ): { (p2: T2, p3: T3, p5: T5, p7: T7): T8 };

        partial<T1, T2, T3, T4, T5, T6, T7, T8>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8 },
            stub1: UnderscoreStatic,
            stub2: UnderscoreStatic,
            stub3: UnderscoreStatic,
            p4: T4,
            stub5: UnderscoreStatic,
            p6: T6
        ): { (p1: T1, p2: T2, p3: T3, p5: T5, p7: T7): T8 };

        partial<T1, T2, T3, T4, T5, T6, T7, T8>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8 },
            p1: T1,
            p2: T2,
            p3: T3,
            stub4: UnderscoreStatic,
            stub5: UnderscoreStatic,
            p6: T6
        ): { (p4: T4, p5: T5, p7: T7): T8 };

        partial<T1, T2, T3, T4, T5, T6, T7, T8>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8 },
            stub1: UnderscoreStatic,
            p2: T2,
            p3: T3,
            stub4: UnderscoreStatic,
            stub5: UnderscoreStatic,
            p6: T6
        ): { (p1: T1, p4: T4, p5: T5, p7: T7): T8 };

        partial<T1, T2, T3, T4, T5, T6, T7, T8>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8 },
            p1: T1,
            stub2: UnderscoreStatic,
            p3: T3,
            stub4: UnderscoreStatic,
            stub5: UnderscoreStatic,
            p6: T6
        ): { (p2: T2, p4: T4, p5: T5, p7: T7): T8 };

        partial<T1, T2, T3, T4, T5, T6, T7, T8>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8 },
            stub1: UnderscoreStatic,
            stub2: UnderscoreStatic,
            p3: T3,
            stub4: UnderscoreStatic,
            stub5: UnderscoreStatic,
            p6: T6
        ): { (p1: T1, p2: T2, p4: T4, p5: T5, p7: T7): T8 };

        partial<T1, T2, T3, T4, T5, T6, T7, T8>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8 },
            p1: T1,
            p2: T2,
            stub3: UnderscoreStatic,
            stub4: UnderscoreStatic,
            stub5: UnderscoreStatic,
            p6: T6
        ): { (p3: T3, p4: T4, p5: T5, p7: T7): T8 };

        partial<T1, T2, T3, T4, T5, T6, T7, T8>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8 },
            stub1: UnderscoreStatic,
            p2: T2,
            stub3: UnderscoreStatic,
            stub4: UnderscoreStatic,
            stub5: UnderscoreStatic,
            p6: T6
        ): { (p1: T1, p3: T3, p4: T4, p5: T5, p7: T7): T8 };

        partial<T1, T2, T3, T4, T5, T6, T7, T8>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8 },
            p1: T1,
            stub2: UnderscoreStatic,
            stub3: UnderscoreStatic,
            stub4: UnderscoreStatic,
            stub5: UnderscoreStatic,
            p6: T6
        ): { (p2: T2, p3: T3, p4: T4, p5: T5, p7: T7): T8 };

        partial<T1, T2, T3, T4, T5, T6, T7, T8>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8 },
            stub1: UnderscoreStatic,
            stub2: UnderscoreStatic,
            stub3: UnderscoreStatic,
            stub4: UnderscoreStatic,
            stub5: UnderscoreStatic,
            p6: T6
        ): { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p7: T7): T8 };

        partial<T1, T2, T3, T4, T5, T6, T7, T8>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8 },
            p1: T1,
            p2: T2,
            p3: T3,
            p4: T4,
            p5: T5,
            p6: T6,
            p7: T7
        ): { (): T8 };

        partial<T1, T2, T3, T4, T5, T6, T7, T8>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8 },
            stub1: UnderscoreStatic,
            p2: T2,
            p3: T3,
            p4: T4,
            p5: T5,
            p6: T6,
            p7: T7
        ): { (p1: T1): T8 };

        partial<T1, T2, T3, T4, T5, T6, T7, T8>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8 },
            p1: T1,
            stub2: UnderscoreStatic,
            p3: T3,
            p4: T4,
            p5: T5,
            p6: T6,
            p7: T7
        ): { (p2: T2): T8 };

        partial<T1, T2, T3, T4, T5, T6, T7, T8>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8 },
            stub1: UnderscoreStatic,
            stub2: UnderscoreStatic,
            p3: T3,
            p4: T4,
            p5: T5,
            p6: T6,
            p7: T7
        ): { (p1: T1, p2: T2): T8 };

        partial<T1, T2, T3, T4, T5, T6, T7, T8>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8 },
            p1: T1,
            p2: T2,
            stub3: UnderscoreStatic,
            p4: T4,
            p5: T5,
            p6: T6,
            p7: T7
        ): { (p3: T3): T8 };

        partial<T1, T2, T3, T4, T5, T6, T7, T8>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8 },
            stub1: UnderscoreStatic,
            p2: T2,
            stub3: UnderscoreStatic,
            p4: T4,
            p5: T5,
            p6: T6,
            p7: T7
        ): { (p1: T1, p3: T3): T8 };

        partial<T1, T2, T3, T4, T5, T6, T7, T8>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8 },
            p1: T1,
            stub2: UnderscoreStatic,
            stub3: UnderscoreStatic,
            p4: T4,
            p5: T5,
            p6: T6,
            p7: T7
        ): { (p2: T2, p3: T3): T8 };

        partial<T1, T2, T3, T4, T5, T6, T7, T8>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8 },
            stub1: UnderscoreStatic,
            stub2: UnderscoreStatic,
            stub3: UnderscoreStatic,
            p4: T4,
            p5: T5,
            p6: T6,
            p7: T7
        ): { (p1: T1, p2: T2, p3: T3): T8 };

        partial<T1, T2, T3, T4, T5, T6, T7, T8>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8 },
            p1: T1,
            p2: T2,
            p3: T3,
            stub4: UnderscoreStatic,
            p5: T5,
            p6: T6,
            p7: T7
        ): { (p4: T4): T8 };

        partial<T1, T2, T3, T4, T5, T6, T7, T8>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8 },
            stub1: UnderscoreStatic,
            p2: T2,
            p3: T3,
            stub4: UnderscoreStatic,
            p5: T5,
            p6: T6,
            p7: T7
        ): { (p1: T1, p4: T4): T8 };

        partial<T1, T2, T3, T4, T5, T6, T7, T8>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8 },
            p1: T1,
            stub2: UnderscoreStatic,
            p3: T3,
            stub4: UnderscoreStatic,
            p5: T5,
            p6: T6,
            p7: T7
        ): { (p2: T2, p4: T4): T8 };

        partial<T1, T2, T3, T4, T5, T6, T7, T8>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8 },
            stub1: UnderscoreStatic,
            stub2: UnderscoreStatic,
            p3: T3,
            stub4: UnderscoreStatic,
            p5: T5,
            p6: T6,
            p7: T7
        ): { (p1: T1, p2: T2, p4: T4): T8 };

        partial<T1, T2, T3, T4, T5, T6, T7, T8>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8 },
            p1: T1,
            p2: T2,
            stub3: UnderscoreStatic,
            stub4: UnderscoreStatic,
            p5: T5,
            p6: T6,
            p7: T7
        ): { (p3: T3, p4: T4): T8 };

        partial<T1, T2, T3, T4, T5, T6, T7, T8>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8 },
            stub1: UnderscoreStatic,
            p2: T2,
            stub3: UnderscoreStatic,
            stub4: UnderscoreStatic,
            p5: T5,
            p6: T6,
            p7: T7
        ): { (p1: T1, p3: T3, p4: T4): T8 };

        partial<T1, T2, T3, T4, T5, T6, T7, T8>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8 },
            p1: T1,
            stub2: UnderscoreStatic,
            stub3: UnderscoreStatic,
            stub4: UnderscoreStatic,
            p5: T5,
            p6: T6,
            p7: T7
        ): { (p2: T2, p3: T3, p4: T4): T8 };

        partial<T1, T2, T3, T4, T5, T6, T7, T8>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8 },
            stub1: UnderscoreStatic,
            stub2: UnderscoreStatic,
            stub3: UnderscoreStatic,
            stub4: UnderscoreStatic,
            p5: T5,
            p6: T6,
            p7: T7
        ): { (p1: T1, p2: T2, p3: T3, p4: T4): T8 };

        partial<T1, T2, T3, T4, T5, T6, T7, T8>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8 },
            p1: T1,
            p2: T2,
            p3: T3,
            p4: T4,
            stub5: UnderscoreStatic,
            p6: T6,
            p7: T7
        ): { (p5: T5): T8 };

        partial<T1, T2, T3, T4, T5, T6, T7, T8>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8 },
            stub1: UnderscoreStatic,
            p2: T2,
            p3: T3,
            p4: T4,
            stub5: UnderscoreStatic,
            p6: T6,
            p7: T7
        ): { (p1: T1, p5: T5): T8 };

        partial<T1, T2, T3, T4, T5, T6, T7, T8>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8 },
            p1: T1,
            stub2: UnderscoreStatic,
            p3: T3,
            p4: T4,
            stub5: UnderscoreStatic,
            p6: T6,
            p7: T7
        ): { (p2: T2, p5: T5): T8 };

        partial<T1, T2, T3, T4, T5, T6, T7, T8>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8 },
            stub1: UnderscoreStatic,
            stub2: UnderscoreStatic,
            p3: T3,
            p4: T4,
            stub5: UnderscoreStatic,
            p6: T6,
            p7: T7
        ): { (p1: T1, p2: T2, p5: T5): T8 };

        partial<T1, T2, T3, T4, T5, T6, T7, T8>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8 },
            p1: T1,
            p2: T2,
            stub3: UnderscoreStatic,
            p4: T4,
            stub5: UnderscoreStatic,
            p6: T6,
            p7: T7
        ): { (p3: T3, p5: T5): T8 };

        partial<T1, T2, T3, T4, T5, T6, T7, T8>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8 },
            stub1: UnderscoreStatic,
            p2: T2,
            stub3: UnderscoreStatic,
            p4: T4,
            stub5: UnderscoreStatic,
            p6: T6,
            p7: T7
        ): { (p1: T1, p3: T3, p5: T5): T8 };

        partial<T1, T2, T3, T4, T5, T6, T7, T8>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8 },
            p1: T1,
            stub2: UnderscoreStatic,
            stub3: UnderscoreStatic,
            p4: T4,
            stub5: UnderscoreStatic,
            p6: T6,
            p7: T7
        ): { (p2: T2, p3: T3, p5: T5): T8 };

        partial<T1, T2, T3, T4, T5, T6, T7, T8>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8 },
            stub1: UnderscoreStatic,
            stub2: UnderscoreStatic,
            stub3: UnderscoreStatic,
            p4: T4,
            stub5: UnderscoreStatic,
            p6: T6,
            p7: T7
        ): { (p1: T1, p2: T2, p3: T3, p5: T5): T8 };

        partial<T1, T2, T3, T4, T5, T6, T7, T8>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8 },
            p1: T1,
            p2: T2,
            p3: T3,
            stub4: UnderscoreStatic,
            stub5: UnderscoreStatic,
            p6: T6,
            p7: T7
        ): { (p4: T4, p5: T5): T8 };

        partial<T1, T2, T3, T4, T5, T6, T7, T8>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8 },
            stub1: UnderscoreStatic,
            p2: T2,
            p3: T3,
            stub4: UnderscoreStatic,
            stub5: UnderscoreStatic,
            p6: T6,
            p7: T7
        ): { (p1: T1, p4: T4, p5: T5): T8 };

        partial<T1, T2, T3, T4, T5, T6, T7, T8>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8 },
            p1: T1,
            stub2: UnderscoreStatic,
            p3: T3,
            stub4: UnderscoreStatic,
            stub5: UnderscoreStatic,
            p6: T6,
            p7: T7
        ): { (p2: T2, p4: T4, p5: T5): T8 };

        partial<T1, T2, T3, T4, T5, T6, T7, T8>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8 },
            stub1: UnderscoreStatic,
            stub2: UnderscoreStatic,
            p3: T3,
            stub4: UnderscoreStatic,
            stub5: UnderscoreStatic,
            p6: T6,
            p7: T7
        ): { (p1: T1, p2: T2, p4: T4, p5: T5): T8 };

        partial<T1, T2, T3, T4, T5, T6, T7, T8>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8 },
            p1: T1,
            p2: T2,
            stub3: UnderscoreStatic,
            stub4: UnderscoreStatic,
            stub5: UnderscoreStatic,
            p6: T6,
            p7: T7
        ): { (p3: T3, p4: T4, p5: T5): T8 };

        partial<T1, T2, T3, T4, T5, T6, T7, T8>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8 },
            stub1: UnderscoreStatic,
            p2: T2,
            stub3: UnderscoreStatic,
            stub4: UnderscoreStatic,
            stub5: UnderscoreStatic,
            p6: T6,
            p7: T7
        ): { (p1: T1, p3: T3, p4: T4, p5: T5): T8 };

        partial<T1, T2, T3, T4, T5, T6, T7, T8>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8 },
            p1: T1,
            stub2: UnderscoreStatic,
            stub3: UnderscoreStatic,
            stub4: UnderscoreStatic,
            stub5: UnderscoreStatic,
            p6: T6,
            p7: T7
        ): { (p2: T2, p3: T3, p4: T4, p5: T5): T8 };

        partial<T1, T2, T3, T4, T5, T6, T7, T8>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8 },
            stub1: UnderscoreStatic,
            stub2: UnderscoreStatic,
            stub3: UnderscoreStatic,
            stub4: UnderscoreStatic,
            stub5: UnderscoreStatic,
            p6: T6,
            p7: T7
        ): { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5): T8 };

        partial<T1, T2, T3, T4, T5, T6, T7, T8>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8 },
            p1: T1,
            p2: T2,
            p3: T3,
            p4: T4,
            p5: T5,
            stub6: UnderscoreStatic,
            p7: T7
        ): { (p6: T6): T8 };

        partial<T1, T2, T3, T4, T5, T6, T7, T8>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8 },
            stub1: UnderscoreStatic,
            p2: T2,
            p3: T3,
            p4: T4,
            p5: T5,
            stub6: UnderscoreStatic,
            p7: T7
        ): { (p1: T1, p6: T6): T8 };

        partial<T1, T2, T3, T4, T5, T6, T7, T8>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8 },
            p1: T1,
            stub2: UnderscoreStatic,
            p3: T3,
            p4: T4,
            p5: T5,
            stub6: UnderscoreStatic,
            p7: T7
        ): { (p2: T2, p6: T6): T8 };

        partial<T1, T2, T3, T4, T5, T6, T7, T8>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8 },
            stub1: UnderscoreStatic,
            stub2: UnderscoreStatic,
            p3: T3,
            p4: T4,
            p5: T5,
            stub6: UnderscoreStatic,
            p7: T7
        ): { (p1: T1, p2: T2, p6: T6): T8 };

        partial<T1, T2, T3, T4, T5, T6, T7, T8>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8 },
            p1: T1,
            p2: T2,
            stub3: UnderscoreStatic,
            p4: T4,
            p5: T5,
            stub6: UnderscoreStatic,
            p7: T7
        ): { (p3: T3, p6: T6): T8 };

        partial<T1, T2, T3, T4, T5, T6, T7, T8>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8 },
            stub1: UnderscoreStatic,
            p2: T2,
            stub3: UnderscoreStatic,
            p4: T4,
            p5: T5,
            stub6: UnderscoreStatic,
            p7: T7
        ): { (p1: T1, p3: T3, p6: T6): T8 };

        partial<T1, T2, T3, T4, T5, T6, T7, T8>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8 },
            p1: T1,
            stub2: UnderscoreStatic,
            stub3: UnderscoreStatic,
            p4: T4,
            p5: T5,
            stub6: UnderscoreStatic,
            p7: T7
        ): { (p2: T2, p3: T3, p6: T6): T8 };

        partial<T1, T2, T3, T4, T5, T6, T7, T8>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8 },
            stub1: UnderscoreStatic,
            stub2: UnderscoreStatic,
            stub3: UnderscoreStatic,
            p4: T4,
            p5: T5,
            stub6: UnderscoreStatic,
            p7: T7
        ): { (p1: T1, p2: T2, p3: T3, p6: T6): T8 };

        partial<T1, T2, T3, T4, T5, T6, T7, T8>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8 },
            p1: T1,
            p2: T2,
            p3: T3,
            stub4: UnderscoreStatic,
            p5: T5,
            stub6: UnderscoreStatic,
            p7: T7
        ): { (p4: T4, p6: T6): T8 };

        partial<T1, T2, T3, T4, T5, T6, T7, T8>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8 },
            stub1: UnderscoreStatic,
            p2: T2,
            p3: T3,
            stub4: UnderscoreStatic,
            p5: T5,
            stub6: UnderscoreStatic,
            p7: T7
        ): { (p1: T1, p4: T4, p6: T6): T8 };

        partial<T1, T2, T3, T4, T5, T6, T7, T8>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8 },
            p1: T1,
            stub2: UnderscoreStatic,
            p3: T3,
            stub4: UnderscoreStatic,
            p5: T5,
            stub6: UnderscoreStatic,
            p7: T7
        ): { (p2: T2, p4: T4, p6: T6): T8 };

        partial<T1, T2, T3, T4, T5, T6, T7, T8>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8 },
            stub1: UnderscoreStatic,
            stub2: UnderscoreStatic,
            p3: T3,
            stub4: UnderscoreStatic,
            p5: T5,
            stub6: UnderscoreStatic,
            p7: T7
        ): { (p1: T1, p2: T2, p4: T4, p6: T6): T8 };

        partial<T1, T2, T3, T4, T5, T6, T7, T8>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8 },
            p1: T1,
            p2: T2,
            stub3: UnderscoreStatic,
            stub4: UnderscoreStatic,
            p5: T5,
            stub6: UnderscoreStatic,
            p7: T7
        ): { (p3: T3, p4: T4, p6: T6): T8 };

        partial<T1, T2, T3, T4, T5, T6, T7, T8>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8 },
            stub1: UnderscoreStatic,
            p2: T2,
            stub3: UnderscoreStatic,
            stub4: UnderscoreStatic,
            p5: T5,
            stub6: UnderscoreStatic,
            p7: T7
        ): { (p1: T1, p3: T3, p4: T4, p6: T6): T8 };

        partial<T1, T2, T3, T4, T5, T6, T7, T8>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8 },
            p1: T1,
            stub2: UnderscoreStatic,
            stub3: UnderscoreStatic,
            stub4: UnderscoreStatic,
            p5: T5,
            stub6: UnderscoreStatic,
            p7: T7
        ): { (p2: T2, p3: T3, p4: T4, p6: T6): T8 };

        partial<T1, T2, T3, T4, T5, T6, T7, T8>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8 },
            stub1: UnderscoreStatic,
            stub2: UnderscoreStatic,
            stub3: UnderscoreStatic,
            stub4: UnderscoreStatic,
            p5: T5,
            stub6: UnderscoreStatic,
            p7: T7
        ): { (p1: T1, p2: T2, p3: T3, p4: T4, p6: T6): T8 };

        partial<T1, T2, T3, T4, T5, T6, T7, T8>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8 },
            p1: T1,
            p2: T2,
            p3: T3,
            p4: T4,
            stub5: UnderscoreStatic,
            stub6: UnderscoreStatic,
            p7: T7
        ): { (p5: T5, p6: T6): T8 };

        partial<T1, T2, T3, T4, T5, T6, T7, T8>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8 },
            stub1: UnderscoreStatic,
            p2: T2,
            p3: T3,
            p4: T4,
            stub5: UnderscoreStatic,
            stub6: UnderscoreStatic,
            p7: T7
        ): { (p1: T1, p5: T5, p6: T6): T8 };

        partial<T1, T2, T3, T4, T5, T6, T7, T8>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8 },
            p1: T1,
            stub2: UnderscoreStatic,
            p3: T3,
            p4: T4,
            stub5: UnderscoreStatic,
            stub6: UnderscoreStatic,
            p7: T7
        ): { (p2: T2, p5: T5, p6: T6): T8 };

        partial<T1, T2, T3, T4, T5, T6, T7, T8>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8 },
            stub1: UnderscoreStatic,
            stub2: UnderscoreStatic,
            p3: T3,
            p4: T4,
            stub5: UnderscoreStatic,
            stub6: UnderscoreStatic,
            p7: T7
        ): { (p1: T1, p2: T2, p5: T5, p6: T6): T8 };

        partial<T1, T2, T3, T4, T5, T6, T7, T8>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8 },
            p1: T1,
            p2: T2,
            stub3: UnderscoreStatic,
            p4: T4,
            stub5: UnderscoreStatic,
            stub6: UnderscoreStatic,
            p7: T7
        ): { (p3: T3, p5: T5, p6: T6): T8 };

        partial<T1, T2, T3, T4, T5, T6, T7, T8>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8 },
            stub1: UnderscoreStatic,
            p2: T2,
            stub3: UnderscoreStatic,
            p4: T4,
            stub5: UnderscoreStatic,
            stub6: UnderscoreStatic,
            p7: T7
        ): { (p1: T1, p3: T3, p5: T5, p6: T6): T8 };

        partial<T1, T2, T3, T4, T5, T6, T7, T8>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8 },
            p1: T1,
            stub2: UnderscoreStatic,
            stub3: UnderscoreStatic,
            p4: T4,
            stub5: UnderscoreStatic,
            stub6: UnderscoreStatic,
            p7: T7
        ): { (p2: T2, p3: T3, p5: T5, p6: T6): T8 };

        partial<T1, T2, T3, T4, T5, T6, T7, T8>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8 },
            stub1: UnderscoreStatic,
            stub2: UnderscoreStatic,
            stub3: UnderscoreStatic,
            p4: T4,
            stub5: UnderscoreStatic,
            stub6: UnderscoreStatic,
            p7: T7
        ): { (p1: T1, p2: T2, p3: T3, p5: T5, p6: T6): T8 };

        partial<T1, T2, T3, T4, T5, T6, T7, T8>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8 },
            p1: T1,
            p2: T2,
            p3: T3,
            stub4: UnderscoreStatic,
            stub5: UnderscoreStatic,
            stub6: UnderscoreStatic,
            p7: T7
        ): { (p4: T4, p5: T5, p6: T6): T8 };

        partial<T1, T2, T3, T4, T5, T6, T7, T8>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8 },
            stub1: UnderscoreStatic,
            p2: T2,
            p3: T3,
            stub4: UnderscoreStatic,
            stub5: UnderscoreStatic,
            stub6: UnderscoreStatic,
            p7: T7
        ): { (p1: T1, p4: T4, p5: T5, p6: T6): T8 };

        partial<T1, T2, T3, T4, T5, T6, T7, T8>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8 },
            p1: T1,
            stub2: UnderscoreStatic,
            p3: T3,
            stub4: UnderscoreStatic,
            stub5: UnderscoreStatic,
            stub6: UnderscoreStatic,
            p7: T7
        ): { (p2: T2, p4: T4, p5: T5, p6: T6): T8 };

        partial<T1, T2, T3, T4, T5, T6, T7, T8>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8 },
            stub1: UnderscoreStatic,
            stub2: UnderscoreStatic,
            p3: T3,
            stub4: UnderscoreStatic,
            stub5: UnderscoreStatic,
            stub6: UnderscoreStatic,
            p7: T7
        ): { (p1: T1, p2: T2, p4: T4, p5: T5, p6: T6): T8 };

        partial<T1, T2, T3, T4, T5, T6, T7, T8>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8 },
            p1: T1,
            p2: T2,
            stub3: UnderscoreStatic,
            stub4: UnderscoreStatic,
            stub5: UnderscoreStatic,
            stub6: UnderscoreStatic,
            p7: T7
        ): { (p3: T3, p4: T4, p5: T5, p6: T6): T8 };

        partial<T1, T2, T3, T4, T5, T6, T7, T8>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8 },
            stub1: UnderscoreStatic,
            p2: T2,
            stub3: UnderscoreStatic,
            stub4: UnderscoreStatic,
            stub5: UnderscoreStatic,
            stub6: UnderscoreStatic,
            p7: T7
        ): { (p1: T1, p3: T3, p4: T4, p5: T5, p6: T6): T8 };

        partial<T1, T2, T3, T4, T5, T6, T7, T8>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8 },
            p1: T1,
            stub2: UnderscoreStatic,
            stub3: UnderscoreStatic,
            stub4: UnderscoreStatic,
            stub5: UnderscoreStatic,
            stub6: UnderscoreStatic,
            p7: T7
        ): { (p2: T2, p3: T3, p4: T4, p5: T5, p6: T6): T8 };

        partial<T1, T2, T3, T4, T5, T6, T7, T8>(
            fn: { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8 },
            stub1: UnderscoreStatic,
            stub2: UnderscoreStatic,
            stub3: UnderscoreStatic,
            stub4: UnderscoreStatic,
            stub5: UnderscoreStatic,
            stub6: UnderscoreStatic,
            p7: T7
        ): { (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6): T8 };

        /**
        * Memoizes a given function by caching the computed result. Useful for speeding up slow-running computations.
        * If passed an optional hashFunction, it will be used to compute the hash key for storing the result, based
        * on the arguments to the original function. The default hashFunction just uses the first argument to the
        * memoized function as the key.
        * @param fn Computationally expensive function that will now memoized results.
        * @param hashFn Hash function for storing the result of `fn`.
        * @return Memoized version of `fn`.
        **/
        memoize<T = Function>(
            fn: T,
            hashFn?: (...args: any[]) => string): T;

        /**
        * Much like setTimeout, invokes function after wait milliseconds. If you pass the optional arguments,
        * they will be forwarded on to the function when it is invoked.
        * @param func Function to delay `waitMS` amount of ms.
        * @param wait The amount of milliseconds to delay `fn`.
        * @arguments Additional arguments to pass to `fn`.
        **/
        delay(
            func: Function,
            wait: number,
            ...args: any[]): any;

        /**
        * @see _delay
        **/
        delay(
            func: Function,
            ...args: any[]): any;

        /**
        * Defers invoking the function until the current call stack has cleared, similar to using setTimeout
        * with a delay of 0. Useful for performing expensive computations or HTML rendering in chunks without
        * blocking the UI thread from updating. If you pass the optional arguments, they will be forwarded on
        * to the function when it is invoked.
        * @param fn The function to defer.
        * @param arguments Additional arguments to pass to `fn`.
        **/
        defer(
            fn: Function,
            ...args: any[]): void;

        /**
        * Creates and returns a new, throttled version of the passed function, that, when invoked repeatedly,
        * will only actually call the original function at most once per every wait milliseconds. Useful for
        * rate-limiting events that occur faster than you can keep up with.
        * By default, throttle will execute the function as soon as you call it for the first time, and,
        * if you call it again any number of times during the wait period, as soon as that period is over.
        * If you'd like to disable the leading-edge call, pass {leading: false}, and if you'd like to disable
        * the execution on the trailing-edge, pass {trailing: false}.
        * @param func Function to throttle `waitMS` ms.
        * @param wait The number of milliseconds to wait before `fn` can be invoked again.
        * @param options Allows for disabling execution of the throttled function on either the leading or trailing edge.
        * @return `fn` with a throttle of `wait`.
        **/
        throttle<T extends Function>(
            func: T,
            wait: number,
            options?: _.ThrottleSettings): T & _.Cancelable;

        /**
        * Creates and returns a new debounced version of the passed function that will postpone its execution
        * until after wait milliseconds have elapsed since the last time it was invoked. Useful for implementing
        * behavior that should only happen after the input has stopped arriving. For example: rendering a preview
        * of a Markdown comment, recalculating a layout after the window has stopped being resized, and so on.
        *
        * Pass true for the immediate parameter to cause debounce to trigger the function on the leading instead
        * of the trailing edge of the wait interval. Useful in circumstances like preventing accidental double
        *-clicks on a "submit" button from firing a second time.
        * @param fn Function to debounce `waitMS` ms.
        * @param wait The number of milliseconds to wait before `fn` can be invoked again.
        * @param immediate True if `fn` should be invoked on the leading edge of `waitMS` instead of the trailing edge.
        * @return Debounced version of `fn` that waits `wait` ms when invoked.
        **/
        debounce<T extends Function>(
            fn: T,
            wait: number,
            immediate?: boolean): T & _.Cancelable;

        /**
        * Creates a version of the function that can only be called one time. Repeated calls to the modified
        * function will have no effect, returning the value from the original call. Useful for initialization
        * functions, instead of having to set a boolean flag and then check it later.
        * @param fn Function to only execute once.
        * @return Copy of `fn` that can only be invoked once.
        **/
        once<T extends Function>(fn: T): T;

        /**
        * Similar to ES6's rest param (http://ariya.ofilabs.com/2013/03/es6-and-rest-parameter.html)
        * This accumulates the arguments passed into an array, after a given index.
        **/
        restArgs(func: Function, starIndex?: number): Function;

        /**
        * Creates a version of the function that will only be run after first being called count times. Useful
        * for grouping asynchronous responses, where you want to be sure that all the async calls have finished,
        * before proceeding.
        * @param number count Number of times to be called before actually executing.
        * @param Function fn The function to defer execution `count` times.
        * @return Copy of `fn` that will not execute until it is invoked `count` times.
        **/
        after(
            count: number,
            fn: Function): Function;

        /**
        * Creates a version of the function that can be called no more than count times.  The result of
        * the last function call is memoized and returned when count has been reached.
        * @param number count  The maxmimum number of times the function can be called.
        * @param Function fn The function to limit the number of times it can be called.
        * @return Copy of `fn` that can only be called `count` times.
        **/
        before(
            count: number,
            fn: Function): Function;

        /**
        * Wraps the first function inside of the wrapper function, passing it as the first argument. This allows
        * the wrapper to execute code before and after the function runs, adjust the arguments, and execute it
        * conditionally.
        * @param fn Function to wrap.
        * @param wrapper The function that will wrap `fn`.
        * @return Wrapped version of `fn.
        **/
        wrap(
            fn: Function,
            wrapper: (fn: Function, ...args: any[]) => any): Function;

        /**
        * Returns a negated version of the pass-in predicate.
        * @param (...args: any[]) => boolean predicate
        * @return (...args: any[]) => boolean
        **/
        negate(predicate: (...args: any[]) => boolean): (...args: any[]) => boolean;

        /**
        * Returns the composition of a list of functions, where each function consumes the return value of the
        * function that follows. In math terms, composing the functions f(), g(), and h() produces f(g(h())).
        * @param functions List of functions to compose.
        * @return Composition of `functions`.
        **/
        compose(...functions: Function[]): Function;

        /***********
         * Objects *
         ***********/

        /**
        * Retrieve all the names of the object's properties.
        * @param object Retrieve the key or property names from this object.
        * @return List of all the property names on `object`.
        **/
        keys(object: any): string[];

        /**
        * Retrieve all the names of object's own and inherited properties.
        * @param object Retrieve the key or property names from this object.
        * @return List of all the property names on `object`.
        **/
        allKeys(object: any): string[];

        /**
        * Return all of the values of the object's properties.
        * @param object Retrieve the values of all the properties on this object.
        * @return List of all the values on `object`.
        **/
        values<T>(object: _.Dictionary<T>): T[];

        /**
        * Return all of the values of the object's properties.
        * @param object Retrieve the values of all the properties on this object.
        * @return List of all the values on `object`.
        **/
        values(object: any): any[];

        /**
         * Like map, but for objects. Transform the value of each property in
         * turn.
         * @param object The object to transform.
         * @param iteratee The iteratee to use to transform property values.
         * @param context `this` object in `iteratee`, optional.
         * @returns A new object with all of `object`'s property values
         * transformed through `iteratee`.
         */
        mapObject<V extends object,
            I extends Iteratee<V, any, TypeOfCollection<V, any>>>(
            object: V,
            iteratee: I,
            context?: any
        ): { [K in keyof V]: IterateeResult<I, V[K]> };

        /**
         * Converts `object` into a list of [key, value] pairs. The opposite
         * of the single-argument signature of `_.object`.
         * @param object The object to convert.
         * @returns The list of [key, value] pairs from `object`.
         **/
        pairs<V extends object>(
            object: V
        ): [Extract<keyof V, string>, TypeOfCollection<V, any>][];

        /**
        * Returns a copy of the object where the keys have become the values and the values the keys.
        * For this to work, all of your object's values should be unique and string serializable.
        * @param object Object to invert key/value pairs.
        * @return An inverted key/value paired version of `object`.
        **/
        invert(object: any): any;

        /**
        * Returns a sorted list of the names of every method in an object - that is to say,
        * the name of every function property of the object.
        * @param object Object to pluck all function property names from.
        * @return List of all the function names on `object`.
        **/
        functions(object: any): string[];

        /**
        * @see _functions
        **/
        methods(object: any): string[];

        /**
        * Copy all of the properties in the source objects over to the destination object, and return
        * the destination object. It's in-order, so the last source will override properties of the
        * same name in previous arguments.
        * @param destination Object to extend all the properties from `sources`.
        * @param sources Extends `destination` with all properties from these source objects.
        * @return `destination` extended with all the properties from the `sources` objects.
        **/
        extend(
            destination: any,
            ...sources: any[]): any;

        /**
        * Like extend, but only copies own properties over to the destination object. (alias: assign)
        */
        extendOwn(
            destination: any,
            ...source: any[]): any;

        /**
        * Like extend, but only copies own properties over to the destination object. (alias: extendOwn)
        */
        assign(
            destination: any,
            ...source: any[]): any;

        /**
         * Similar to `findIndex` but for keys in objects. Returns the key
         * where the `iteratee` truth test passes or undefined.
         * @param object The object to search.
         * @param iteratee The truth test to apply.
         * @param context `this` object in `iteratee`, optional.
         * @returns The first element in `object` that passes the truth test or
         * undefined if no elements pass.
         */
        findKey<V extends object>(
            object: V,
            iteratee?: Iteratee<V, boolean, TypeOfCollection<V, any>>,
            context?: any
        ): Extract<keyof V, string> | undefined;

        /**
         * Return a copy of `object` that is filtered to only have values for
         * the allowed keys (or array of keys).
         * @param object The object to pick specific keys in.
         * @param keys The keys to keep on `object`.
         * @returns A copy of `object` with only the `keys` properties.
         **/
        pick<V, K extends string>(
            object: V,
            ...keys: (K | K[])[]
        ): _Pick<V, K>;

        /**
         * Return a copy of `object` that is filtered to only have values for
         * the keys selected by a truth test.
         * @param object The object to pick specific keys in.
         * @param iterator A truth test that selects the keys to keep on
         * `object`.
         * @returns A copy of `object` with only the keys selected by
         * `iterator`.
         **/
        pick<V>(
            object: V,
            iterator: ObjectIterator<TypeOfDictionary<V, any>, boolean, V>
        ): Partial<V>;

        /**
         * Return a copy of `object` that is filtered to omit the disallowed
         * keys (or array of keys).
         * @param object The object to omit specific keys from.
         * @param keys The keys to omit from `object`.
         * @returns A copy of `object` without the `keys` properties.
         **/
        omit<V, K extends string>(
            object: V,
            ...keys: (K | K[])[]
        ): _Omit<V, K>;

        /**
         * Return a copy of `object` that is filtered to not have values for
         * the keys selected by a truth test.
         * @param object The object to omit specific keys from.
         * @param iterator A truth test that selects the keys to omit from
         * `object`.
         * @returns A copy of `object` without the keys selected by
         * `iterator`.
         **/
        omit<V>(
            object: V,
            iterator: ObjectIterator<TypeOfDictionary<V, any>, boolean, V>
        ): Partial<V>;

        /**
        * Fill in null and undefined properties in object with values from the defaults objects,
        * and return the object. As soon as the property is filled, further defaults will have no effect.
        * @param object Fill this object with default values.
        * @param defaults The default values to add to `object`.
        * @return `object` with added `defaults` values.
        **/
        defaults(
            object: any,
            ...defaults: any[]): any;

        /**
        * Creates an object that inherits from the given prototype object.
        * If additional properties are provided then they will be added to the
        * created object.
        * @param prototype The prototype that the returned object will inherit from.
        * @param props Additional props added to the returned object.
        **/
        create(prototype: any, props?: object): any;

        /**
        * Create a shallow-copied clone of the object.
        * Any nested objects or arrays will be copied by reference, not duplicated.
        * @param object Object to clone.
        * @return Copy of `object`.
        **/
        clone<T>(object: T): T;

        /**
        * Invokes interceptor with the object, and then returns object. The primary purpose of this method
        * is to "tap into" a method chain, in order to perform operations on intermediate results within the chain.
        * @param object Argument to `interceptor`.
        * @param intercepter The function to modify `object` before continuing the method chain.
        * @return Modified `object`.
        **/
        tap<T>(object: T, intercepter: Function): T;

        /**
        * Does the object contain the given key? Identical to object.hasOwnProperty(key), but uses a safe
        * reference to the hasOwnProperty function, in case it's been overridden accidentally.
        * @param object Object to check for `key`.
        * @param key The key to check for on `object`.
        * @return True if `key` is a property on `object`, otherwise false.
        **/
        has(object: any, key: string): boolean;

        /**
        * Returns a predicate function that will tell you if a passed in object contains all of the key/value properties present in attrs.
        * @param attrs Object with key values pair
        * @return Predicate function
        **/
        matches<T>(attrs: T): _.Predicate<T>;

        /**
        * Returns a predicate function that will tell you if a passed in object contains all of the key/value properties present in attrs.
        * @see _.matches
        * @param attrs Object with key values pair
        * @return Predicate function
        **/
        matcher<T>(attrs: T): _.Predicate<T>;

        /**
         * Returns the specified property of `object`. `path` may be specified
         * as a simple key, or as an array of object keys or array indexes,
         * for deep property fetching. If the property does not exist or is `undefined`,
         * the optional default is returned.
         * @param object The object that maybe contains the property.
         * @param path The path to the property on `object`.
         * @param defaultValue Default if not found.
         * @returns The item on the `object` or the `defaultValue`
         **/
        get<V extends Collection<any>>(
            object: V,
            path: string | string[]
        ): TypeOfCollection<V> | undefined;
        get<V extends Collection<any>, U>(
            object: V,
            path: string | string[],
            defaultValue?: U
        ): TypeOfCollection<V> | U;

        /**
        * Returns a function that will itself return the key property of any passed-in object.
        * @param key Property of the object.
        * @return Function which accept an object an returns the value of key in that object.
        **/
        property(key: string | number | Array<string | number>): (object: any) => any;

        /**
        * Returns a function that will itself return the value of a object key property.
        * @param key The object to get the property value from.
        * @return Function which accept a key property in `object` and returns its value.
        **/
        propertyOf(object: object): (key: string | number | Array<string | number>) => any;

        /**
         * Performs an optimized deep comparison between `object` and `other`
         * to determine if they should be considered equal.
         * @param object Compare to `other`.
         * @param other Compare to `object`.
         * @returns True if `object` should be considered equal to `other`.
         **/
        isEqual(object: any, other: any): boolean;

        /**
         * Returns true if `collection` contains no values.
         * For strings and array-like objects checks if the length property is
         * 0.
         * @param collection The collection to check.
         * @returns True if `collection` has no elements.
         **/
        isEmpty(collection: any): boolean;

        /**
         * Returns true if the keys and values in `properties` are contained in
         * `object`.
         * @param object The object to check.
         * @param properties The properties to check for in `object`.
         * @returns True if all keys and values in `properties` are also in
         * `object`.
         **/
        isMatch(object: any, properties: any): boolean;

        /**
         * Returns true if `object` is a DOM element.
         * @param object The object to check.
         * @returns True if `object` is a DOM element, otherwise false.
         **/
        isElement(object: any): object is Element;

        /**
         * Returns true if `object` is an Array.
         * @param object The object to check.
         * @returns True if `object` is an Array, otherwise false.
         **/
        isArray(object: any): object is any[];

        /**
         * Returns true if `object` is an ArrayBuffer.
         * @param object The object to check.
         * @returns True if `object` is an ArrayBuffer, otherwise false.
         **/
        isArrayBuffer(object: any): object is ArrayBuffer;

        /**
         * Returns true if `object` is a DataView.
         * @param object The object to check.
         * @returns True if `object` is a DataView, otherwise false.
         **/
        isDataView(object: any): object is DataView;

        /**
         * Returns true if `object` is a TypedArray.
         * @param object The object to check.
         * @returns True if `object` is a TypedArray, otherwise false.
         **/
        isTypedArray(object: any): object is TypedArray;

        /**
         * Returns true if `object` is a Symbol.
         * @param object The object to check.
         * @returns True if `object` is a Symbol, otherwise false.
         **/
        isSymbol(object: any): object is symbol;

        /**
         * Returns true if `object` is an Object. Note that JavaScript arrays
         * and functions are objects,
         * while (normal) strings and numbers are not.
         * @param object The object to check.
         * @returns True if `object` is an Object, otherwise false.
         **/
        isObject(object: any): object is Dictionary<any> & object;

        /**
         * Returns true if `object` is an Arguments object.
         * @param object The object to check.
         * @returns True if `object` is an Arguments object, otherwise false.
         **/
        isArguments(object: any): object is IArguments;

        /**
         * Returns true if `object` is a Function.
         * @param object The object to check.
         * @returns True if `object` is a Function, otherwise false.
         **/
        isFunction(object: any): object is Function;

        /**
         * Returns true if `object` is an Error.
         * @param object The object to check.
         * @returns True if `object` is a Error, otherwise false.
         **/
        isError(object: any): object is Error;

        /**
         * Returns true if `object` is a String.
         * @param object The object to check.
         * @returns True if `object` is a String, otherwise false.
         **/
        isString(object: any): object is string;

        /**
         * Returns true if `object` is a Number (including NaN).
         * @param object The object to check.
         * @returns True if `object` is a Number, otherwise false.
         **/
        isNumber(object: any): object is number;

        /**
         * Returns true if `object` is a finite Number.
         * @param object The object to check.
         * @returns True if `object` is a finite Number.
         **/
        isFinite(object: any): boolean;

        /**
         * Returns true if `object` is a Boolean.
         * @param object The object to check.
         * @returns True if `object` is a Boolean, otherwise false.
         **/
        isBoolean(object: any): object is boolean;

        /**
         * Returns true if `object` is a Date.
         * @param object The object to check.
         * @returns True if `object` is a Date, otherwise false.
         **/
        isDate(object: any): object is Date;

        /**
         * Returns true if `object` is a RegExp.
         * @param object The object to check.
         * @returns True if `object` is a RegExp, otherwise false.
         **/
        isRegExp(object: any): object is RegExp;

        /**
         * Returns true if `object` is NaN.
         * Note: this is not the same as the native isNaN function,
         * which will also return true if the variable is undefined.
         * @param object The object to check.
         * @returns True if `object` is NaN, otherwise false.
         **/
        isNaN(object: any): boolean;

        /**
         * Returns true if `object` is null.
         * @param object The object to check.
         * @returns True if `object` is null, otherwise false.
         **/
        isNull(object: any): object is null;

        /**
         * Returns true if `object` is undefined.
         * @param object The object to check.
         * @returns True if `object` is undefined, otherwise false.
         **/
        isUndefined(object: any): object is undefined;

        /***********
         * Utility *
         ***********/

        /**
        * Give control of the "_" variable back to its previous owner.
        * Returns a reference to the Underscore object.
        * @return Underscore object reference.
        **/
        noConflict(): any;

        /**
        * Returns the same value that is used as the argument. In math: f(x) = x
        * This function looks useless, but is used throughout Underscore as a default iterator.
        * @param value Identity of this object.
        * @return `value`.
        **/
        identity<T>(value: T): T;

        /**
        * Creates a function that returns the same value that is used as the argument of _.constant
        * @param value Identity of this object.
        * @return Function that return value.
        **/
        constant<T>(value: T): () => T;

        /**
        * Returns undefined irrespective of the arguments passed to it.  Useful as the default
        * for optional callback arguments.
        * Note there is no way to indicate a 'undefined' return, so it is currently typed as void.
        * @return undefined
        **/
        noop(): void;

        /**
        * Invokes the given iterator function n times.
        * Each invocation of iterator is called with an index argument
        * @param n Number of times to invoke `iterator`.
        * @param iterator Function iterator to invoke `n` times.
        * @param context `this` object in `iterator`, optional.
        **/
        times<TResult>(n: number, iterator: (n: number) => TResult, context?: any): TResult[];

        /**
        * Returns a random integer between min and max, inclusive. If you only pass one argument,
        * it will return a number between 0 and that number.
        * @param max The maximum random number.
        * @return A random number between 0 and `max`.
        **/
        random(max: number): number;

        /**
        * @see _.random
        * @param min The minimum random number.
        * @return A random number between `min` and `max`.
        **/
        random(min: number, max: number): number;

        /**
        * Allows you to extend Underscore with your own utility functions. Pass a hash of
        * {name: function} definitions to have your functions added to the Underscore object,
        * as well as the OOP wrapper.
        * @param object Mixin object containing key/function pairs to add to the Underscore object.
        **/
        mixin(object: any): void;

        /**
        * A mostly-internal function to generate callbacks that can be applied to each element
        * in a collection, returning the desired result -- either identity, an arbitrary callback,
        * a property matcher, or a propetery accessor.
        * @param string|Function|Object value The value to iterate over, usually the key.
        * @param any context
        * @return Callback that can be applied to each element in a collection.
        **/
        iteratee(value: string): Function;
        iteratee(value: Function, context?: any): Function;
        iteratee(value: object): Function;

        /**
        * Generate a globally-unique id for client-side models or DOM elements that need one.
        * If prefix is passed, the id will be appended to it. Without prefix, returns an integer.
        * @param prefix A prefix string to start the unique ID with.
        * @return Unique string ID beginning with `prefix`.
        **/
        uniqueId(prefix?: string): string;

        /**
        * Escapes a string for insertion into HTML, replacing &, <, >, ", ', and / characters.
        * @param str Raw string to escape.
        * @return `str` HTML escaped.
        **/
        escape(str: string): string;

        /**
        * The opposite of escape, replaces &amp;, &lt;, &gt;, &quot;, and &#x27; with their unescaped counterparts.
        * @param str HTML escaped string.
        * @return `str` Raw string.
        **/
        unescape(str: string): string;

        /**
        * If the value of the named property is a function then invoke it; otherwise, return it.
        * @param object Object to maybe invoke function `property` on.
        * @param property The function by name to invoke on `object`.
        * @param defaultValue The value to be returned in case `property` doesn't exist or is undefined.
        * @return The result of invoking the function `property` on `object.
        **/
        result(object: any, property: string, defaultValue?: any): any;

        /**
        * Compiles JavaScript templates into functions that can be evaluated for rendering. Useful
        * for rendering complicated bits of HTML from JSON data sources. Template functions can both
        * interpolate variables, using <%= ... %>, as well as execute arbitrary JavaScript code, with
        * <% ... %>. If you wish to interpolate a value, and have it be HTML-escaped, use <%- ... %> When
        * you evaluate a template function, pass in a data object that has properties corresponding to
        * the template's free variables. If you're writing a one-off, you can pass the data object as
        * the second parameter to template in order to render immediately instead of returning a template
        * function. The settings argument should be a hash containing any _.templateSettings that should
        * be overridden.
        * @param templateString Underscore HTML template.
        * @param data Data to use when compiling `templateString`.
        * @param settings Settings to use while compiling.
        * @return Returns the compiled Underscore HTML template.
        **/
        template(templateString: string, settings?: _.TemplateSettings): CompiledTemplate;

        /**
        * By default, Underscore uses ERB-style template delimiters, change the
        * following template settings to use alternative delimiters.
        **/
        templateSettings: _.TemplateSettings;

        /**
        * Returns an integer timestamp for the current time, using the fastest method available in the runtime. Useful for implementing timing/animation functions.
        **/
        now(): number;

        /************
         * Chaining *
         ************/

        /**
         * Returns a wrapped object. Calling methods on this object will
         * continue to return wrapped objects until value() is used.
         * @param value The object to chain.
         * @returns An underscore chain wrapper around the supplied value.
         **/
        chain<V>(value: V): _Chain<TypeOfCollection<V>, V>;

        /**
         * Current version
         */
        readonly VERSION: string;
    }

    interface Underscore<T, V = T[]> {

        /***************
         * Collections *
         ***************/

        /**
         * Iterates over the wrapped collection of elements, yielding each in
         * turn to an `iteratee`. The `iteratee` is bound to the context object,
         * if one is passed.
         * @param iteratee The iteratee to call for each element in the wrapped
         * collection.
         * @param context 'this' object in `iteratee`, optional.
         * @returns The originally wrapped collection.
         **/
        each(
            iteratee: CollectionIterator<TypeOfCollection<V>, void, V>,
            context?: any
        ): V;

        /**
         * @see each
         **/
        forEach: Underscore<T, V>['each'];

        /**
         * Produces a new array of values by mapping each value in the wrapped
         * collection through a transformation `iteratee`.
         * @param iteratee The iteratee to use to transform each item in the
         * wrapped collection.
         * @param context `this` object in `iteratee`, optional.
         * @returns The mapped result.
         **/
        map<I extends Iteratee<V, any>>(
            iteratee: I,
            context?: any
        ): IterateeResult<I, T>[];

        /**
         * @see map
         **/
        collect: Underscore<T, V>['map'];

        /**
         * Also known as inject and foldl, reduce boils down the wrapped
         * collection of values into a single value. `memo` is the initial
         * state of the reduction, and each successive step of it should be
         * returned by `iteratee`.
         *
         * If no memo is passed to the initial invocation of reduce, `iteratee`
         * is not invoked on the first element of the wrapped collection. The
         * first element is instead passed as the memo in the invocation of
         * `iteratee` on the next element in the wrapped collection.
         * @param iteratee The function to call on each iteration to reduce the
         * collection.
         * @param memo The initial reduce state or undefined to use the first
         * item in `collection` as initial state.
         * @param context `this` object in `iteratee`, optional.
         * @returns The reduced result.
         **/
        reduce<TResult>(
            iteratee: MemoCollectionIterator<TypeOfCollection<V>, TResult, V>,
            memo: TResult,
            context?: any
        ): TResult;
        reduce<TResult = TypeOfCollection<V>>(
            iteratee: MemoCollectionIterator<TypeOfCollection<V>,
                TResult | TypeOfCollection<V>,
                V>
        ): TResult | TypeOfCollection<V> | undefined;

        /**
         * @see reduce
         **/
        inject: Underscore<T, V>['reduce'];

        /**
         * @see reduce
         **/
        foldl: Underscore<T, V>['reduce'];

        /**
         * The right-associative version of reduce.
         *
         * This is not as useful in JavaScript as it would be in a language
         * with lazy evaluation.
         * @param iteratee The function to call on each iteration to reduce the
         * collection.
         * @param memo The initial reduce state or undefined to use the first
         * item in `collection` as the initial state.
         * @param context `this` object in `iteratee`, optional.
         * @returns The reduced result.
         **/
        reduceRight<TResult>(
            iteratee: MemoCollectionIterator<TypeOfCollection<V>, TResult, V>,
            memo: TResult,
            context?: any
        ): TResult;
        reduceRight<TResult = TypeOfCollection<V>>(
            iteratee: MemoCollectionIterator<TypeOfCollection<V>,
                TResult | TypeOfCollection<V>,
                V>
        ): TResult | TypeOfCollection<V> | undefined;

        /**
         * @see reduceRight
         **/
        foldr: Underscore<T, V>['reduceRight'];

        /**
         * Looks through each value in the wrapped collection, returning the
         * first one that passes a truth test (`iteratee`), or undefined if no
         * value passes the test. The function returns as soon as it finds an
         * acceptable element, and doesn't traverse the entire collection.
         * @param iteratee The truth test to apply.
         * @param context `this` object in `iteratee`, optional.
         * @returns The first element in the wrapped collection that passes the
         * truth test or undefined if no elements pass.
         **/
        find(iteratee?: Iteratee<V, boolean>, context?: any): T | undefined;

        /**
         * @see find
         **/
        detect: Underscore<T, V>['find'];

        /**
         * Looks through each value in the wrapped collection, returning an
         * array of all the values that pass a truth test (`iteratee`).
         * @param iteratee The truth test to apply.
         * @param context `this` object in `iteratee`, optional.
         * @returns The set of values that pass the truth test.
         **/
        filter(iteratee?: Iteratee<V, boolean>, context?: any): T[];

        /**
         * @see filter
         **/
        select: Underscore<T, V>['filter'];

        /**
         * Looks through each value in the wrapped collection, returning an
         * array of all the elements that match the key-value pairs listed in
         * `properties`.
         * @param properties The properties to check for on the elements within
         * the wrapped collection.
         * @returns The elements in the wrapped collection that match
         * `properties`.
         **/
        where(properties: Partial<T>): T[];

        /**
         * Looks through the wrapped collection and returns the first value
         * that matches all of the key-value pairs listed in `properties`. If
         * no match is found, or if list is empty, undefined will be returned.
         * @param properties The properties to check for on the elements within
         * the wrapped collection.
         * @returns The first element in the wrapped collection that matches
         * `properties` or undefined if no match is found.
         **/
        findWhere(properties: Partial<T>): T | undefined;

        /**
         * Returns the values in the wrapped collection without the elements
         * that pass a truth test (`iteratee`).
         * The opposite of filter.
         * @param iteratee The truth test to apply.
         * @param context `this` object in `iteratee`, optional.
         * @returns The set of values that fail the truth test.
         **/
        reject(iteratee?: Iteratee<V, boolean>, context?: any): T[];

        /**
         * Returns true if all of the values in the wrapped collection pass the
         * `iteratee` truth test. Short-circuits and stops traversing the
         * wrapped collection if a false element is found.
         * @param iteratee The truth test to apply.
         * @param context `this` object in `iteratee`, optional.
         * @returns True if all elements pass the truth test, otherwise false.
         **/
        every(iteratee?: Iteratee<V, boolean>, context?: any): boolean;

        /**
         * @see every
         **/
        all: Underscore<T, V>['every'];

        /**
         * Returns true if any of the values in the wrapped collection pass the
         * `iteratee` truth test. Short-circuits and stops traversing the
         * wrapped collection if a true element is found.
         * @param iteratee The truth test to apply.
         * @param context `this` object in `iteratee`, optional.
         * @returns True if any element passed the truth test, otherwise false.
         **/
        some(iteratee?: Iteratee<V, boolean>, context?: any): boolean;

        /**
         * @see some
         **/
        any: Underscore<T, V>['some'];

        /**
         * Returns true if the value is present in the wrapped collection. Uses
         * indexOf internally, if the wrapped collection is a List. Use
         * `fromIndex` to start your search at a given index.
         * @param value The value to check the wrapped collection for.
         * @param fromIndex The index to start searching from, optional,
         * default = 0, only used when the wrapped collection is a List.
         * @returns True if `value` is present in the wrapped collection after
         * `fromIndex`, otherwise false.
         **/
        contains(value: any, fromIndex?: number): boolean;

        /**
         * @see contains
         **/
        include: Underscore<T, V>['contains'];

        /**
         * @see contains
         **/
        includes: Underscore<T, V>['contains'];

        /**
         * Calls the method named by `methodName` on each value in the wrapped
         * collection. Any extra arguments passed to invoke will be forwarded
         * on to the method invocation.
         * @param methodName The name of the method to call on each element in
         * the wrapped collection.
         * @param args Additional arguments to pass to method `methodName`.
         * @returns An array containing the result of the method call for each
         * item in the wrapped collection.
         **/
        invoke(methodName: string, ...args: any[]): any[];

        /**
         * A convenient version of what is perhaps the most common use-case for
         * map: extracting a list of property values.
         * @param propertyName The name of a specific property to retrieve from
         * all items in the wrapped collection.
         * @returns The set of values for the specified `propertyName` for each
         * item in the wrapped collection.
         **/
        pluck<K extends string | number>(
            propertyName: K
        ): PropertyTypeOrAny<T, K>[];

        /**
         * Returns the maximum value in the wrapped collection. If an
         * `iteratee` is provided, it will be used on each element to generate
         * the criterion by which the element is ranked. -Infinity is returned
         * if list is empty. Non-numerical values returned by `iteratee` will
         * be ignored.
         * @param iteratee The iteratee that provides the criterion by which
         * each element is ranked, optional if evaluating a collection of
         * numbers.
         * @param context `this` object in `iteratee`, optional.
         * @returns The maximum element within the wrapped collection or
         * -Infinity if the wrapped collection is empty.
         **/
        max(iteratee?: Iteratee<V, any>, context?: any): T | number;

        /**
         * Returns the minimum value in the wrapped collection. If an
         * `iteratee` is provided, it will be used on each element to generate
         * the criterion by which the element is ranked. Infinity is returned
         * if list is empty. Non-numerical values returned by `iteratee` will
         * be ignored.
         * @param iteratee The iteratee that provides the criterion by which
         * each element is ranked, optional if evaluating a collection of
         * numbers.
         * @param context `this` object in `iteratee`, optional.
         * @returns The minimum element within the wrapped collection or
         * Infinity if the wrapped collection is empty.
         **/
        min(iteratee?: Iteratee<V, any>, context?: any): T | number;

        /**
         * Returns a (stably) sorted copy of the wrapped collection, ranked in
         * ascending order by the results of running each value through
         * `iteratee`.
         * @param iteratee An iteratee that provides the value to sort by for
         * each item in the wrapped collection.
         * @param context `this` object in `iteratee`, optional.
         * @returns A sorted copy of the wrapped collection.
         **/
        sortBy(iteratee?: Iteratee<V, any>, context?: any): T[];

        /**
         * Splits the warpped collection into sets that are grouped by the
         * result of running each value through `iteratee`.
         * @param iteratee An iteratee that provides the value to group by for
         * each item in the wrapped collection.
         * @param context `this` object in `iteratee`, optional.
         * @returns A dictionary with the group names provided by `iteratee` as
         * properties where each property contains the grouped elements from
         * the wrapped collection.
         **/
        groupBy(
            iteratee?: Iteratee<V, string | number>,
            context?: any
        ): Dictionary<T[]>;

        /**
         * Given the warpped collection and an `iteratee` function that returns
         * a key for each element in the wrapped collection, returns an object
         * that acts as an index of each item.  Just like `groupBy`, but for when you
         * know your keys are unique.
         * @param iteratee An iteratee that provides the value to index by for
         * each item in the wrapped collection.
         * @param context `this` object in `iteratee`, optional.
         * @returns A dictionary where each item in the wrapped collection is
         * assigned to the property designated by `iteratee`.
         **/
        indexBy(iteratee?: Iteratee<V, string | number>, context?: any): Dictionary<T>;

        /**
         * Sorts the wrapped collection into groups and returns a count for the
         * number of objects in each group. Similar to `groupBy`, but instead
         * of returning a list of values, returns a count for the number of
         * values in that group.
         * @param iteratee An iteratee that provides the value to count by for
         * each item in the wrapped collection.
         * @param context `this` object in `iteratee`, optional.
         * @returns A dictionary with the group names provided by `iteratee` as
         * properties where each property contains the count of the grouped
         * elements from the wrapped collection.
         **/
        countBy(
            iteratee?: Iteratee<V, string | number>,
            context?: any
        ): Dictionary<number>;

        /**
         * Returns a shuffled copy of the wrapped collection, using a version
         * of the Fisher-Yates shuffle.
         * @returns A shuffled copy of the wrapped collection.
         **/
        shuffle(): T[];

        /**
         * Produce a random sample from the wrapped collection. Pass a number
         * to return `n` random elements from the wrapped collection. Otherwise
         * a single random item will be returned.
         * @param n The number of elements to sample from the wrapped
         * collection.
         * @returns A random sample of `n` elements from the wrapped collection
         * or a single element if `n` is not specified.
         **/
        sample(n: number): T[];
        sample(): T | undefined;

        /**
         * Creates a real Array from the wrapped collection (anything that can
         * be iterated over). Useful for transmuting the arguments object.
         * @returns An array containing the elements of the wrapped collection.
         **/
        toArray(): T[];

        /**
         * Determines the number of values in the wrapped collection.
         * @returns The number of values in the wrapped collection.
         **/
        size(): number;

        /**
         * Splits the wrapped collection into two arrays: one whose elements
         * all satisfy `iteratee` and one whose elements all do not satisfy
         * `iteratee`.
         * @param iteratee The iteratee that defines the partitioning scheme
         * for each element in the wrapped collection.
         * @param context `this` object in `iteratee`, optional.
         * @returns An array composed of two elements, where the first element
         * contains the elements in the wrapped collection that satisfied the
         * predicate and the second element contains the elements that did not.
         **/
        partition(iteratee?: Iteratee<V, boolean>, context?: any): [T[], T[]];

        /**********
         * Arrays *
         **********/

        /**
         * Returns the first element of the wrapped list. Passing `n` will
         * return the first `n` elements of the wrapped list.
         * @param n The number of elements to retrieve, optional.
         * @returns The first `n` elements of the wrapped list or the first
         * element if `n` is omitted.
         **/
        first(): T | undefined;
        first(n: number): T[];

        /**
         * @see first
         **/
        head: Underscore<T, V>['first'];

        /**
         * @see first
        **/
         take: Underscore<T, V>['first'];

        /**
         * Returns everything but the last entry of the wrapped list.
         * Especially useful on the arguments object. Pass `n` to exclude the
         * last `n` elements from the result.
         * @param n The number of elements from the end of the wrapped list to
         * omit, optional, default = 1.
         * @returns The elements of the wrapped list with the last `n` items
         * omitted.
         **/
        initial(n?: number): T[];

        /**
         * Returns the last element of the wrapped list. Passing `n` will
         * return the last `n` elements of the wrapped list.
         * @param n The number of elements to retrieve, optional.
         * @returns The last `n` elements of the wrapped list or the last
         * element if `n` is omitted.
         **/
        last(): T | undefined;
        last(n: number): T[];

        /**
         * Returns the rest of the elements in the wrapped list. Pass an
         * `index` to return the values of the list from that index onward.
         * @param index The index to start retrieving elements from, optional,
         * default = 1.
         * @returns The elements of the wrapped list from `index` to the end
         * of the list.
         **/
        rest(n?: number): T[];

        /**
         * @see rest
         **/
        tail: Underscore<T, V>['rest'];

        /**
         * @see rest
         **/
        drop: Underscore<T, V>['rest'];

        /**
         * Returns a copy of the wrapped list with all falsy values removed. In
         * JavaScript, false, null, 0, "", undefined and NaN are all falsy.
         * @returns An array containing the elements of the wrapped list without
         * falsy values.
         **/
        compact(): Truthy<T>[];

        /**
         * Flattens a nested list (the nesting can be to any depth). If you
         * pass depth, the wrapped list will only be flattened a single
         * level.
         * @param depth True to only flatten one level, optional,
         * default = false.
         * @returns The flattened list.
         **/
        flatten(depth: 1 | true): ListItemOrSelf<T>[];
        flatten(depth?: number | false): DeepestListItemOrSelf<T>[];

        /**
         * Returns a copy of the wrapped list with all instances of `values`
         * removed.
         * @param values The values to exclude from the wrapped list.
         * @returns An array that contains all elements of the wrapped list
         * except for `values`.
         **/
        without(...values: T[]): T[];

        /**
         * Computes the union of the wrapped list and the passed-in `lists`:
         * the list of unique items, examined in order from first list to last
         * list, that are present in one or more of the lists.
         * @param lists The lists (along with the wrapped list) to compute
         * the union of.
         * @returns The union of elements within the wrapped list and `lists`.
         **/
        union(...lists: List<T>[]): T[];

        /**
         * Computes the list of values that are the intersection of the wrapped
         * list and the passed-in `lists`. Each value in the result is present
         * in each of the lists.
         * @param lists The lists (along with the wrapped list) to compute the
         * intersection of.
         * @returns The intersection of elements within the the wrapped list
         * and `lists`.
         **/
        intersection(...lists: List<T>[]): T[];

        /**
         * Similar to without, but returns the values from the wrapped list
         * that are not present in `others`.
         * @param list The starting list.
         * @param others The lists of values to exclude from the wrapped list.
         * @returns The contents of the wrapped list without the values in
         * `others`.
         **/
        difference(...others: List<T>[]): T[];

        /**
         * Produces a duplicate-free version of the wrapped list, using === to
         * test object equality. If you know in advance that the wrapped list
         * is sorted, passing true for isSorted will run a much faster
         * algorithm. If you want to compute unique items based on a
         * transformation, pass an iteratee function.
         * @param isSorted True if the wrapped list is already sorted,
         * optional, default = false.
         * @param iteratee Transform the elements of the wrapped list before
         * comparisons for uniqueness.
         * @param context 'this' object in `iteratee`, optional.
         * @returns An array containing only the unique elements in the wrapped
         * list.
         **/
        uniq(
            isSorted?: boolean,
            iteratee?: Iteratee<V, any>,
            cotext?: any
        ): T[];
        uniq(
            iteratee?: Iteratee<V, any>,
            context?: any
        ): T[];

        /**
        * @see uniq
        **/
        unique: Underscore<T, V>['uniq'];

        /**
         * Merges together the values of each of the `lists` (including the
         * wrapped list) with the values at the corresponding position. Useful
         * when you have separate data sources that are coordinated through
         * matching list indexes.
         * @returns The zipped version of the wrapped list and `lists`.
         **/
        zip(...lists: List<any>[]): any[][];

        /**
         * The opposite of zip. Given the wrapped list of lists, returns a
         * series of new arrays, the first of which contains all of the first
         * elements in the wrapped lists, the second of which contains all of
         * the second elements, and so on. (alias: transpose)
         * @returns The unzipped version of the wrapped lists.
         **/
        unzip(): any[][];
        transpose(): any[][];

        /**
         * Converts lists into objects. Call on either a wrapped list of
         * [key, value] pairs, or a wrapped list of keys and a list of
         * `values`. Passing by pairs is the reverse of pairs. If duplicate
         * keys exist, the last value wins.
         * @param values If the wrapped list is a list of keys, a list of
         * values corresponding to those keys.
         * @returns An object comprised of the provided keys and values.
         **/
        object<TValue>(
            values: List<TValue>
        ): Dictionary<TValue | undefined>;
        object(): Dictionary<PairValue<T>>;

        /**
         * Returns the index at which `value` can be found in the wrapped list,
         * or -1 if `value` is not present. If you're working with a large list
         * and you know that the list is already sorted, pass true for
         * `isSortedOrFromIndex` to use a faster binary search...or, pass a
         * number in order to look for the first matching value in the list
         * after the given index.
         * @param value The value to search for within the wrapped list.
         * @param isSortedOrFromIndex True if the wrapped list is already
         * sorted OR the starting index for the search, optional.
         * @returns The index of the first occurrence of `value` within the
         * wrapped list or -1 if `value` is not found.
         **/
        indexOf(
            value: T,
            isSortedOrFromIndex?: boolean | number
        ): number;

        /**
         * Returns the index of the last occurrence of `value` in the wrapped
         * list, or -1 if `value` is not present. Pass `fromIndex` to start
         * your search at a given index.
         * @param value The value to search for within the wrapped list.
         * @param fromIndex The starting index for the search, optional.
         * @returns The index of the last occurrence of `value` within the
         * wrapped list or -1 if `value` is not found.
         **/
        lastIndexOf(
            value: T,
            fromIndex?: number
        ): number;

        /**
         * Returns the first index of an element in the wrapped list where the
         * `iteratee` truth test passes, otherwise returns -1.
         * @param iteratee The truth test to apply.
         * @param context `this` object in `iteratee`, optional.
         * @returns The index of the first element in the wrapped list where
         * the truth test passes or -1 if no elements pass.
         **/
        findIndex(
            iteratee?: Iteratee<V, boolean>,
            context?: any
        ): number;

        /**
         * Returns the last index of an element in the wrapped list where the
         * `iteratee` truth test passes, otherwise returns -1.
         * @param iteratee The truth test to apply.
         * @param context `this` object in `iteratee`, optional.
         * @returns The index of the last element in the wrapped list where the
         * truth test passes or -1 if no elements pass.
         **/
        findLastIndex(
            iteratee?: Iteratee<V, boolean>,
            context?: any
        ): number;

        /**
         * Uses a binary search to determine the lowest index at which the
         * value should be inserted into the wrapped list in order to maintain
         * the wrapped list's sorted order. If an iteratee is provided, it will
         * be used to compute the sort ranking of each value, including the
         * value you pass.
         * @param value The value to determine an insert index for to mainain
         * the sorting in the wrapped list.
         * @param iteratee Iteratee to compute the sort ranking of each
         * element including `value`, optional.
         * @param context `this` object in `iteratee`, optional.
         * @returns The index where `value` should be inserted into the wrapped
         * list.
         **/
        sortedIndex(
            value: T,
            iteratee?: Iteratee<V | undefined, any>,
            context?: any
        ): number;

        /**
         * A function to create flexibly-numbered lists of integers, handy for
         * `each` and `map` loops. Returns a list of integers from
         * the wrapped value (inclusive) to `stop` (exclusive), incremented
         * (or decremented) by `step`. Note that ranges that `stop` before they
         * `start` are considered to be zero-length instead of negative - if
         * you'd like a negative range, use a negative `step`.
         *
         * If `stop` is not specified, the wrapped value will be the number to
         * stop at and the default start of 0 will be used.
         * @param stop The number to stop at.
         * @param step The number to count up by each iteration, optional,
         * default = 1.
         * @returns An array of numbers from start to `stop` with increments
         * of `step`.
         **/
        range(stop?: number, step?: number): number[];

        /**
         * Chunks the wrapped list into multiple arrays, each containing
         * `length` or fewer items.
         * @param length The maximum size of the chunks.
         * @returns The contents of the wrapped list in chunks no greater than
         * `length` in size.
         **/
        chunk(length: number): T[][];

        /*************
         * Functions *
         *************/

        /**
        * Wrapped type `Function`.
        * @see _.bind
        **/
        bind(object: any, ...args: any[]): Function;

        /**
        * Wrapped type `object`.
        * @see _.bindAll
        **/
        bindAll(...methodNames: string[]): any;

        /**
        * Wrapped type `Function`.
        * @see _.partial
        **/
        partial(...args: any[]): Function;

        /**
        * Wrapped type `Function`.
        * @see _.memoize
        **/
        memoize(hashFn?: (n: any) => string): Function;

        /**
        * Wrapped type `Function`.
        * @see _.defer
        **/
        defer(...args: any[]): void;

        /**
        * Wrapped type `Function`.
        * @see _.delay
        **/
        delay(wait: number, ...args: any[]): any;

        /**
        * @see _.delay
        **/
        delay(...args: any[]): any;

        /**
        * Wrapped type `Function`.
        * @see _.throttle
        **/
        throttle(wait: number, options?: _.ThrottleSettings): Function & _.Cancelable;

        /**
        * Wrapped type `Function`.
        * @see _.debounce
        **/
        debounce(wait: number, immediate?: boolean): Function & _.Cancelable;

        /**
        * Wrapped type `Function`.
        * @see _.once
        **/
        once(): Function;

        /**
        * Wrapped type `Function`.
        * @see _.once
        **/
        restArgs(starIndex?: number): Function;

        /**
        * Wrapped type `number`.
        * @see _.after
        **/
        after(fn: Function): Function;

        /**
        * Wrapped type `number`.
        * @see _.before
        **/
        before(fn: Function): Function;

        /**
        * Wrapped type `Function`.
        * @see _.wrap
        **/
        wrap(wrapper: Function): () => Function;

        /**
        * Wrapped type `Function`.
        * @see _.negate
        **/
        negate(): (...args: any[]) => boolean;

        /**
        * Wrapped type `Function[]`.
        * @see _.compose
        **/
        compose(...functions: Function[]): Function;

        /***********
         * Objects *
         ***********/

        /**
        * Wrapped type `object`.
        * @see _.keys
        **/
        keys(): string[];

        /**
        * Wrapped type `object`.
        * @see _.allKeys
        **/
        allKeys(): string[];

        /**
        * Wrapped type `object`.
        * @see _.values
        **/
        values(): T[];

        /**
         * Like map, but for objects. Transform the value of each property in
         * turn.
         * @param iteratee The iteratee to use to transform property values.
         * @param context `this` object in `iteratee`, optional.
         * @returns A new object with all of the wrapped object's property
         * values transformed through `iteratee`.
         */
        mapObject<I extends Iteratee<V, any, TypeOfCollection<V, any>>>(
            iteratee: I,
            context?: any
        ): { [K in keyof V]: IterateeResult<I, V[K]> };

        /**
         * Convert the wrapped object into a list of [key, value] pairs. The
         * opposite of the single-argument signature of `_.object`.
         * @returns The list of [key, value] pairs from the wrapped object.
         **/
        pairs(): [Extract<keyof V, string>, TypeOfCollection<V, any>][];

        /**
        * Wrapped type `object`.
        * @see _.invert
        **/
        invert(): any;

        /**
        * Wrapped type `object`.
        * @see _.functions
        **/
        functions(): string[];

        /**
        * @see _.functions
        **/
        methods(): string[];

        /**
        * Wrapped type `object`.
        * @see _.extend
        **/
        extend(...sources: any[]): any;

        /**
         * Similar to `findIndex` but for keys in objects. Returns the key
         * where the `iteratee` truth test passes or undefined.
         * @param iteratee The truth test to apply.
         * @param context `this` object in `iteratee`, optional.
         * @returns The first element in the wrapped object that passes the
         * truth test or undefined if no elements pass.
         */
        findKey(
            iteratee?: Iteratee<V, boolean, TypeOfCollection<V, any>>,
            context?: any
        ): Extract<keyof V, string> | undefined;

        /**
         * Return a copy of the wrapped object that is filtered to only have
         * values for the allowed keys (or array of keys).
         * @param keys The keys to keep on the wrapped object.
         * @returns A copy of the wrapped object with only the `keys`
         * properties.
         **/
        pick<K extends string>(...keys: (K | K[])[]): _Pick<V, K>;

        /**
         * Return a copy of the wrapped object that is filtered to only have
         * values for the keys selected by a truth test.
         * @param iterator A truth test that selects the keys to keep on the
         * wrapped object.
         * @returns A copy of the wrapped object with only the keys selected by
         * `iterator`.
         **/
        pick(
            iterator: ObjectIterator<TypeOfDictionary<V, any>, boolean, V>
        ): Partial<V>;

        /**
         * Return a copy of the wrapped object that is filtered to omit the
         * disallowed keys (or array of keys).
         * @param keys The keys to omit from the wrapped object.
         * @returns A copy of the wrapped object without the `keys` properties.
         **/
        omit<K extends string>(...keys: (K | K[])[]): _Omit<V, K>;

        /**
         * Return a copy of the wrapped object that is filtered to not have
         * values for the keys selected by a truth test.
         * @param iterator A truth test that selects the keys to omit from the
         * wrapped object.
         * @returns A copy of the wrapped object without the keys selected by
         * `iterator`.
         **/
        omit(
            iterator: ObjectIterator<TypeOfDictionary<V, any>, boolean, V>
        ): Partial<V>;

        /**
        * Wrapped type `object`.
        * @see _.defaults
        **/
        defaults(...defaults: any[]): any;

        /**
        * Wrapped type `any`.
        * @see _.create
        **/
        create(props?: object): any;

        /**
        * Wrapped type `any[]`.
        * @see _.clone
        **/
        clone(): T;

        /**
        * Wrapped type `object`.
        * @see _.tap
        **/
        tap(interceptor: (...as: any[]) => any): any;

        /**
        * Wrapped type `object`.
        * @see _.has
        **/
        has(key: string): boolean;

        /**
        * Wrapped type `any[]`.
        * @see _.matches
        **/
        matches(): _.ListIterator<T, boolean>;

        /**
         * Wrapped type `any[]`.
         * @see _.matcher
         **/
        matcher(): _.ListIterator<T, boolean>;

        /**
         * Wrapped type `any`.
         * @see _.get
         **/
        get(
            path: string | string[]
        ): TypeOfCollection<V> | undefined;
        get<U>(
            path: string | string[],
            defaultValue?: U
        ): TypeOfCollection<V> | U;

        /**
        * Wrapped type `string`.
        * @see _.property
        **/
        property(): (object: any) => any;

        /**
        * Wrapped type `object`.
        * @see _.propertyOf
        **/
        propertyOf(): (key: string) => any;

        /**
         * Performs an optimized deep comparison between the wrapped object
         * and `other` to determine if they should be considered equal.
         * @param other Compare to the wrapped object.
         * @returns True if the wrapped object should be considered equal to
         * `other`.
         **/
        isEqual(other: any): boolean;

        /**
         * Returns true if the wrapped collection contains no values.
         * For strings and array-like objects checks if the length property is
         * 0.
         * @returns True if the wrapped collection has no elements.
         **/
        isEmpty(): boolean;

        /**
         * Returns true if the keys and values in `properties` are contained in
         * the wrapped object.
         * @param properties The properties to check for in the wrapped object.
         * @returns True if all keys and values in `properties` are also in the
         * wrapped object.
         **/
        isMatch(properties: any): boolean;

        /**
         * Returns true if the wrapped object is a DOM element.
         * @returns True if the wrapped object is a DOM element, otherwise
         * false.
         **/
        isElement(): boolean;

        /**
         * Returns true if the wrapped object is an Array.
         * @returns True if the wrapped object is an Array, otherwise false.
         **/
        isArray(): boolean;

        /**
         * Returns true if the wrapped object is an ArrayBuffer.
         * @returns True if the wrapped object is an ArrayBuffer, otherwise false.
         **/
        isArrayBuffer(): boolean;

        /**
         * Returns true if the wrapped object is a DataView.
         * @returns True if the wrapped object is a DataView, otherwise false.
         **/
        isDataView(): boolean;

        /**
         * Returns true if the wrapped object is a TypedArray.
         * @returns True if the wrapped object is a TypedArray, otherwise false.
         **/
        isTypedArray(): boolean;

        /**
         * Returns true if the wrapped object is a Symbol.
         * @returns True if the wrapped object is a Symbol, otherwise false.
         **/
        isSymbol(): boolean;

        /**
         * Returns true if the wrapped object is an Object. Note that
         * JavaScript arrays and functions are objects, while (normal) strings
         * and numbers are not.
         * @returns True if the wrapped object is an Object, otherwise false.
         **/
        isObject(): boolean;

        /**
         * Returns true if the wrapped object is an Arguments object.
         * @returns True if the wrapped object is an Arguments object,
         * otherwise false.
         **/
        isArguments(): boolean;

        /**
         * Returns true if the wrapped object is a Function.
         * @returns True if the wrapped object is a Function, otherwise false.
         **/
        isFunction(): boolean;

        /**
         * Returns true if the wrapped object is a Error.
         * @returns True if the wrapped object is a Error, otherwise false.
         **/
        isError(): boolean;

        /**
         * Returns true if the wrapped object is a String.
         * @returns True if the wrapped object is a String, otherwise false.
         **/
        isString(): boolean;

        /**
         * Returns true if the wrapped object is a Number (including NaN).
         * @returns True if the wrapped object is a Number, otherwise false.
         **/
        isNumber(): boolean;

        /**
         * Returns true if the wrapped object is a finite Number.
         * @returns True if the wrapped object is a finite Number.
         **/
        isFinite(): boolean;

        /**
         * Returns true if the wrapped object is a Boolean.
         * @returns True if the wrapped object is a Boolean, otherwise false.
         **/
        isBoolean(): boolean;

        /**
         * Returns true if the wrapped object is a Date.
         * @returns True if the wrapped object is a Date, otherwise false.
         **/
        isDate(): boolean;

        /**
         * Returns true if the wrapped object is a RegExp.
         * @returns True if the wrapped object is a RegExp, otherwise false.
         **/
        isRegExp(): boolean;

        /**
         * Returns true if the wrapped object is NaN.
         * Note: this is not the same as the native isNaN function,
         * which will also return true if the variable is undefined.
         * @returns True if the wrapped object is NaN, otherwise false.
         **/
        isNaN(): boolean;

        /**
         * Returns true if the wrapped object is null.
         * @returns True if the wrapped object is null, otherwise false.
         **/
        isNull(): boolean;

        /**
         * Returns true if the wrapped object is undefined.
         * @returns True if the wrapped object is undefined, otherwise false.
         **/
        isUndefined(): boolean;

        /***********
         * Utility *
         ***********/

        /**
        * Wrapped type `any`.
        * @see _.identity
        **/
        identity(): any;

        /**
        * Wrapped type `any`.
        * @see _.constant
        **/
        constant(): () => T;

        /**
        * Wrapped type `any`.
        * @see _.noop
        **/
        noop(): void;

        /**
        * Wrapped type `number`.
        * @see _.times
        **/
        times<TResult>(iterator: (n: number) => TResult, context?: any): TResult[];

        /**
        * Wrapped type `number`.
        * @see _.random
        **/
        random(): number;
        /**
        * Wrapped type `number`.
        * @see _.random
        **/
        random(max: number): number;

        /**
        * Wrapped type `object`.
        * @see _.mixin
        **/
        mixin(): void;

        /**
        * Wrapped type `string|Function|Object`.
        * @see _.iteratee
        **/
        iteratee(context?: any): Function;

        /**
        * Wrapped type `string`.
        * @see _.uniqueId
        **/
        uniqueId(): string;

        /**
        * Wrapped type `string`.
        * @see _.escape
        **/
        escape(): string;

        /**
        * Wrapped type `string`.
        * @see _.unescape
        **/
        unescape(): string;

        /**
        * Wrapped type `object`.
        * @see _.result
        **/
        result(property: string, defaultValue?: any): any;

        /**
        * Wrapped type `string`.
        * @see _.template
        **/
        template(settings?: _.TemplateSettings): CompiledTemplate;

        /************
         * Chaining *
         ************/

        /**
         * Returns a wrapped object. Calling methods on this object will
         * continue to return wrapped objects until value() is used.
         * @returns An underscore chain wrapper around the wrapped value.
         **/
        chain(): _Chain<T, V>;

        /**
         * Extracts the value of the wrapped object.
         * @returns The value of the wrapped object.
         **/
        value(): V;
    }

    interface _Chain<T, V = T[]> {

        /***************
         * Collections *
         ***************/

        /**
         * Iterates over the wrapped collection of elements, yielding each in
         * turn to an `iteratee`. The `iteratee` is bound to the context
         * object, if one is passed.
         * @param iteratee The iteratee to call for each element in the wrapped
         * collection.
         * @param context 'this' object in `iteratee`, optional.
         * @returns A chain wrapper around the originally wrapped collection.
         **/
        each(
            iteratee: CollectionIterator<TypeOfCollection<V>, void, V>,
            context?: any
        ): _Chain<T, V>;

        /**
        * @see each
        **/
        forEach: _Chain<T, V>['each'];

        /**
         * Produces a new array of values by mapping each value in the wrapped
         * collection through a transformation `iteratee`.
         * @param iteratee The iteratee to use to transform each item in the
         * wrapped collection.
         * @param context `this` object in `iteratee`, optional.
         * @returns A chain wrapper around the mapped result.
         **/
        map<I extends Iteratee<V, any>>(
            iteratee: I,
            context?: any
        ): _Chain<IterateeResult<I, T>>;

        /**
         * @see map
         **/
        collect: _Chain<T, V>['map'];

        /**
         * Also known as inject and foldl, reduce boils down the wrapped
         * collection of values into a single value. `memo` is the initial
         * state of the reduction, and each successive step of it should be
         * returned by `iteratee`.
         *
         * If no memo is passed to the initial invocation of reduce, `iteratee`
         * is not invoked on the first element of the wrapped collection. The
         * first element is instead passed as the memo in the invocation of
         * `iteratee` on the next element in the wrapped collection.
         * @param iteratee The function to call on each iteration to reduce the
         * collection.
         * @param memo The initial reduce state or undefined to use the first
         * item in `collection` as initial state.
         * @param context `this` object in `iteratee`, optional.
         * @returns A chain wrapper around the reduced result.
         **/
        reduce<TResult>(
            iteratee: MemoCollectionIterator<TypeOfCollection<V>, TResult, V>,
            memo: TResult,
            context?: any
        ): _ChainSingle<TResult>;
        reduce<TResult = TypeOfCollection<V>>(
            iteratee: MemoCollectionIterator<TypeOfCollection<V>,
                TResult | TypeOfCollection<V>,
                V>
        ): _ChainSingle<TResult | TypeOfCollection<V> | undefined>;

        /**
         * @see reduce
         **/
        inject: _Chain<T, V>['reduce'];

        /**
         * @see reduce
         **/
        foldl: _Chain<T, V>['reduce'];

        /**
         * The right-associative version of reduce.
         *
         * This is not as useful in JavaScript as it would be in a language
         * with lazy evaluation.
         * @param iteratee The function to call on each iteration to reduce the
         * collection.
         * @param memo The initial reduce state or undefined to use the first
         * item in `collection` as the initial state.
         * @param context `this` object in `iteratee`, optional.
         * @returns A chain wrapper around the reduced result.
         **/
        reduceRight<TResult>(
            iteratee: MemoCollectionIterator<TypeOfCollection<V>, TResult, V>,
            memo: TResult,
            context?: any
        ): _ChainSingle<TResult>;
        reduceRight<TResult = TypeOfCollection<V>>(
            iteratee: MemoCollectionIterator<TypeOfCollection<V>,
                TResult | TypeOfCollection<V>,
                V>
        ): _ChainSingle<TResult | TypeOfCollection<V> | undefined>;

        /**
         * @see reduceRight
         **/
        foldr: _Chain<T, V>['reduceRight'];

        /**
         * Looks through each value in the wrapped collection, returning the
         * first one that passes a truth test (`iteratee`), or undefined if no
         * value passes the test. The function returns as soon as it finds an
         * acceptable element, and doesn't traverse the entire collection.
         * @param iteratee The truth test to apply.
         * @param context `this` object in `iteratee`, optional.
         * @returns A chain wrapper around the first element in the wrapped
         * collection that passes the truth test or undefined if no elements
         * pass.
         **/
        find(
            iteratee?: Iteratee<V, boolean>,
            context?: any
        ): _ChainSingle<T | undefined>;

        /**
         * @see find
         **/
        detect: _Chain<T, V>['find'];

        /**
         * Looks through each value in the wrapped collection, returning an
         * array of all the values that pass a truth test (`iteratee`).
         * @param iteratee The truth test to apply.
         * @param context `this` object in `iteratee`, optional.
         * @returns A chain wrapper around the set of values that pass the
         * truth test.
         **/
        filter(iteratee?: Iteratee<V, any>, context?: any): _Chain<T>;

        /**
         * @see filter
         **/
        select: _Chain<T, V>['filter'];

        /**
         * Looks through each value in the wrapped collection, returning an
         * array of all the elements that match the key-value pairs listed in
         * `properties`.
         * @param properties The properties to check for on the elements within
         * the wrapped collection.
         * @returns A chain wrapper around the elements in the wrapped
         * collection that match `properties`.
         **/
        where(properties: Partial<T>): _Chain<T>;

        /**
         * Looks through the wrapped collection and returns the first value
         * that matches all of the key-value pairs listed in `properties`. If
         * no match is found, or if list is empty, undefined will be returned.
         * @param properties The properties to check for on the elements within
         * the wrapped collection.
         * @returns A chain wrapper around the first element in the wrapped
         * collection that matches `properties` or undefined if no match is
         * found.
         **/
        findWhere(properties: Partial<T>): _ChainSingle<T | undefined>;

        /**
         * Returns the values in the wrapped collection without the elements
         * that pass a truth test (`iteratee`).
         * The opposite of filter.
         * @param iteratee The truth test to apply.
         * @param context `this` object in `iteratee`, optional.
         * @returns A chain wrapper around the set of values that fail the
         * truth test.
         **/
        reject(iteratee?: Iteratee<V, boolean>, context?: any): _Chain<T>;

        /**
         * Returns true if all of the values in the wrapped collection pass the
         * `iteratee` truth test. Short-circuits and stops traversing the
         * wrapped collection if a false element is found.
         * @param iteratee The truth test to apply.
         * @param context `this` object in `iteratee`, optional.
         * @returns A chain wrapper around true if all elements pass the truth
         * test, otherwise around false.
         **/
        every(
            iterator?: Iteratee<V, boolean>,
            context?: any
        ): _ChainSingle<boolean>;

        /**
         * @see every
         **/
        all: _Chain<T, V>['every'];

        /**
         * Returns true if any of the values in the wrapped collection pass the
         * `iteratee` truth test. Short-circuits and stops traversing the
         * wrapped collection if a true element is found.
         * @param iteratee The truth test to apply.
         * @param context `this` object in `iteratee`, optional.
         * @returns A chain wrapper around true if any element passed the truth
         * test, otherwise around false.
         **/
        some(
            iterator?: Iteratee<V, boolean>,
            context?: any
        ): _ChainSingle<boolean>;

        /**
         * @see some
         **/
        any: _Chain<T, V>['some'];

        /**
         * Returns true if the value is present in the wrapped collection. Uses
         * indexOf internally, if the wrapped collection is a List. Use
         * `fromIndex` to start your search at a given index.
         * @param value The value to check the wrapped collection for.
         * @param fromIndex The index to start searching from, optional,
         * default = 0, only used when the wrapped collection is a List.
         * @returns A chain wrapper around true if `value` is present in the
         * wrapped collection after `fromIndex`, otherwise around false.
         **/
        contains(value: any, fromIndex?: number): _ChainSingle<boolean>;

        /**
         * @see contains
         **/
        include: _Chain<T, V>['contains'];

        /**
         * @see contains
         **/
        includes: _Chain<T, V>['contains'];

        /**
         * Calls the method named by `methodName` on each value in the wrapped
         * collection. Any extra arguments passed to invoke will be forwarded
         * on to the method invocation.
         * @param methodName The name of the method to call on each element in
         * the wrapped collection.
         * @param args Additional arguments to pass to method `methodName`.
         * @returns A chain wrapper around an array containing the result of
         * the method call for each item in the wrapped collection.
         **/
        invoke(methodName: string, ...args: any[]): _Chain<any>;

        /**
         * A convenient version of what is perhaps the most common use-case for
         * map: extracting a list of property values.
         * @param propertyName The name of a specific property to retrieve from
         * all items in the wrapped collection.
         * @returns A chain wrapper around The set of values for the specified
         * `propertyName` for each item in the wrapped collection.
         **/
        pluck<K extends string | number>(
            propertyName: K
        ): _Chain<PropertyTypeOrAny<T, K>>;

        /**
         * Returns the maximum value in the wrapped collection. If an
         * `iteratee` is provided, it will be used on each element to generate
         * the criterion by which the element is ranked. -Infinity is returned
         * if list is empty. Non-numerical values returned by `iteratee` will
         * be ignored.
         * @param iteratee The iteratee that provides the criterion by which
         * each element is ranked, optional if evaluating a collection of
         * numbers.
         * @param context `this` object in `iteratee`, optional.
         * @returns A chain wrapper around the maximum element within the
         * wrapped collection or around -Infinity if the wrapped collection is
         * empty.
         **/
        max(
            iteratee?: Iteratee<V, any>,
            context?: any
        ): _ChainSingle<T | number>;

        /**
         * Returns the minimum value in the wrapped collection. If an
         * `iteratee` is provided, it will be used on each element to generate
         * the criterion by which the element is ranked. Infinity is returned
         * if list is empty. Non-numerical values returned by `iteratee` will
         * be ignored.
         * @param iteratee The iteratee that provides the criterion by which
         * each element is ranked, optional if evaluating a collection of
         * numbers.
         * @param context `this` object in `iteratee`, optional.
         * @returns A chain wrapper around the minimum element within the
         * wrapped collection or around Infinity if the wrapped collection is
         * empty.
         **/
        min(
            iteratee?: Iteratee<V, any>,
            context?: any
        ): _ChainSingle<T | number>;

        /**
         * Returns a (stably) sorted copy of the wrapped collection, ranked in
         * ascending order by the results of running each value through
         * `iteratee`.
         * @param iteratee An iteratee that provides the value to sort by for
         * each item in the wrapped collection.
         * @param context `this` object in `iteratee`, optional.
         * @returns A chain wrapper around a sorted copy of the wrapped
         * collection.
         **/
        sortBy(iteratee?: Iteratee<V, any>, context?: any): _Chain<T>;

        /**
         * Splits the warpped collection into sets that are grouped by the
         * result of running each value through `iteratee`.
         * @param iteratee An iteratee that provides the value to group by for
         * each item in the wrapped collection.
         * @param context `this` object in `iteratee`, optional.
         * @returns A chain wrapper around a dictionary with the group names
         * provided by `iteratee` as properties where each property contains
         * the grouped elements from the wrapped collection.
         **/
        groupBy(
            iteratee?: Iteratee<V, string | number>,
            context?: any
        ): _Chain<T[], Dictionary<T[]>>;

        /**
         * Given the warpped collection and an `iteratee` function that returns
         * a key for each element in `collection`, returns an object that acts
         * as an index of each item.  Just like `groupBy`, but for when you
         * know your keys are unique.
         * @param iteratee An iteratee that provides the value to index by for
         * each item in the wrapped collection.
         * @param context `this` object in `iteratee`, optional.
         * @returns A chain wrapper around a dictionary where each item in the
         * wrapped collection is assigned to the property designated by
         * `iteratee`.
         **/
        indexBy(
            iteratee?: Iteratee<V, string | number>,
            context?: any
        ): _Chain<T, Dictionary<T>>;

        /**
         * Sorts the wrapped collection into groups and returns a count for the
         * number of objects in each group. Similar to `groupBy`, but instead
         * of returning a list of values, returns a count for the number of
         * values in that group.
         * @param iteratee An iteratee that provides the value to count by for
         * each item in the wrapped collection.
         * @param context `this` object in `iteratee`, optional.
         * @returns A chain wrapper around a dictionary with the group names
         * provided by `iteratee` as properties where each property contains
         * the count of the grouped elements from the wrapped collection.
         **/
        countBy(
            iterator?: Iteratee<V, string | number>,
            context?: any
        ): _Chain<number, Dictionary<number>>;

        /**
         * Returns a shuffled copy of the wrapped collection, using a version
         * of the Fisher-Yates shuffle.
         * @returns A chain wrapper around a shuffled copy of the wrapped
         * collection.
         **/
        shuffle(): _Chain<T>;

        /**
         * Produce a random sample from the wrapped collection. Pass a number
         * to return `n` random elements from the wrapped collection. Otherwise
         * a single random item will be returned.
         * @param n The number of elements to sample from the wrapped
         * collection.
         * @returns A chain wrapper around a random sample of `n` elements from
         * the wrapped collection or a single element if `n` is not specified.
         **/
        sample(n: number): _Chain<T>;
        sample(): _ChainSingle<T | undefined>;

        /**
         * Creates a real Array from the wrapped collection (anything that can
         * be iterated over). Useful for transmuting the arguments object.
         * @returns A chain wrapper around an array containing the elements
         * of the wrapped collection.
         **/
        toArray(): _Chain<T>;

        /**
         * Determines the number of values in the wrapped collection.
         * @returns A chain wrapper around the number of values in the wrapped
         * collection.
         **/
        size(): _ChainSingle<number>;

        /**
         * Splits the wrapped collection into two arrays: one whose elements
         * all satisfy `iteratee` and one whose elements all do not satisfy
         * `iteratee`.
         * @param iteratee The iteratee that defines the partitioning scheme
         * for each element in the wrapped collection.
         * @param context `this` object in `iteratee`, optional.
         * @returns A chain wrapper around an array composed of two elements,
         * where the first element contains the elements in the wrapped
         * collection that satisfied the predicate and the second element
         * contains the elements that did not.
         **/
        partition(
            iteratee?: Iteratee<V, boolean>,
            context?: any
        ): _Chain<T[], [T[], T[]]>;

        /**********
         * Arrays *
         **********/

        /**
         * Returns the first element of the wrapped list. Passing `n` will
         * return the first `n` elements of the wrapped list.
         * @param n The number of elements to retrieve, optional.
         * @returns A chain wrapper around the first `n` elements of the
         * wrapped list or around the first element if `n` is omitted.
         **/
        first(): _ChainSingle<T | undefined>;
        first(n: number): _Chain<T>;

        /**
         * @see first
         **/
        head: _Chain<T, V>['first'];

        /**
         * @see first
         **/
        take: _Chain<T, V>['first'];

        /**
         * Returns everything but the last entry of the wrapped list.
         * Especially useful on the arguments object. Pass `n` to exclude the
         * last `n` elements from the result.
         * @param n The number of elements from the end of the wrapped list to
         * omit, optional, default = 1.
         * @returns A chain wrapper around the elements of the wrapped list
         * with the last `n` items omitted.
         **/
        initial(n?: number): _Chain<T>;

        /**
         * Returns the last element of the wrapped list. Passing `n` will
         * return the last `n` elements of the wrapped list.
         * @param n The number of elements to retrieve, optional.
         * @returns A chain wrapper around the last `n` elements of the wrapped
         * list or around the last element if `n` is omitted.
         **/
        last(): _ChainSingle<T | undefined>;
        last(n: number): _Chain<T>;

        /**
         * Returns the rest of the elements in the wrapped list. Pass an
         * `index` to return the values of the list from that index onward.
         * @param index The index to start retrieving elements from, optional,
         * default = 1.
         * @returns A chain wrapper around the elements of the wrapped list
         * from `index` to the end of the list.
         **/
        rest(n?: number): _Chain<T>;

        /**
         * @see rest
         **/
        tail: _Chain<T, V>['rest'];

        /**
         * @see rest
         **/
        drop: _Chain<T, V>['rest'];

        /**
         * Returns a copy of the wrapped list with all falsy values removed. In
         * JavaScript, false, null, 0, "", undefined and NaN are all falsy.
         * @returns A chain wrapper around an array containing the elements of
         * the wrapped list without falsy values.
         **/
        compact(): _Chain<Truthy<T>>;

        /**
         * Flattens a nested list (the nesting can be to any depth). If you
         * pass true or 1 as the depth, the list will only be flattened a single
         * level. Passing a greater number will cause the flattening to descend
         * deeper into the nesting hierarchy. Omitting the depth argument, or
         * passing false or Infinity, flattens the list all the way to the
         * deepest nesting level.
         * @param depth True to only flatten one level, optional,
         * default = false.
         * @returns A chain wrapper around the flattened list.
         **/
        flatten(depth: 1 | true): _Chain<ListItemOrSelf<T>>;
        flatten(depth?: number | false): _Chain<DeepestListItemOrSelf<T>>;

        /**
         * Returns a copy of the wrapped list with all instances of `values`
         * removed.
         * @param values The values to exclude from the wrapped list.
         * @returns A chain wrapper around an array that contains all elements
         * of the wrapped list except for `values`.
         **/
        without(...values: T[]): _Chain<T>;

        /**
         * Computes the union of the wrapped list and the passed-in `lists`:
         * the list of unique items, examined in order from first list to last
         * list, that are present in one or more of the lists.
         * @param lists The lists (along with the wrapped list) to compute
         * the union of.
         * @returns A chain wrapper around the union of elements within the
         * wrapped list and `lists`.
         **/
        union(...lists: List<T>[]): _Chain<T>;

        /**
         * Computes the list of values that are the intersection of the wrapped
         * list and the passed-in `lists`. Each value in the result is present
         * in each of the lists.
         * @param lists The lists (along with the wrapped list) to compute the
         * intersection of.
         * @returns A chain wrapper around the intersection of elements within
         * the the wrapped list and `lists`.
         **/
        intersection(...lists: List<T>[]): _Chain<T>;

        /**
         * Similar to without, but returns the values from the wrapped list
         * that are not present in `others`.
         * @param list The starting list.
         * @param others The lists of values to exclude from the wrapped list.
         * @returns A chain wrapper around the contents of the wrapped list
         * without the values in `others`.
         **/
        difference(...others: List<T>[]): _Chain<T>;

        /**
         * Produces a duplicate-free version of the wrapped list, using === to
         * test object equality. If you know in advance that the wrapped list
         * is sorted, passing true for isSorted will run a much faster
         * algorithm. If you want to compute unique items based on a
         * transformation, pass an iteratee function.
         * @param isSorted True if the wrapped list is already sorted,
         * optional, default = false.
         * @param iteratee Transform the elements of the wrapped list before
         * comparisons for uniqueness.
         * @param context 'this' object in `iteratee`, optional.
         * @returns A chain wrapper around an array containing only the unique
         * elements in the wrapped list.
         **/
        uniq(
            isSorted?: boolean,
            iteratee?: Iteratee<V, any>,
            context?: any
        ): _Chain<T>;
        uniq(
            iteratee?: Iteratee<V, any>,
            context?: any
        ): _Chain<T>;

        /**
        * Wrapped type List<T>.
        * @see uniq
        **/
        unique: _Chain<T, V>['uniq'];

        /**
         * Merges together the values of each of the `lists` (including the
         * wrapped list) with the values at the corresponding position. Useful
         * when you have separate data sources that are coordinated through
         * matching list indexes.
         * @returns A chain wrapper around the zipped version of the wrapped
         * list and `lists`.
         **/
        zip(...arrays: List<any>[]): _Chain<any[]>;

        /**
         * The opposite of zip. Given the wrapped list of lists, returns a
         * series of new arrays, the first of which contains all of the first
         * elements in the wrapped lists, the second of which contains all of
         * the second elements, and so on. (alias: transpose)
         * @returns A chain wrapper around the unzipped version of the wrapped
         * lists.
         **/
        unzip(): _Chain<any[]>;
        transpose(): _Chain<any[]>;

        /**
         * Converts lists into objects. Call on either a wrapped list of
         * [key, value] pairs, or a wrapped list of keys and a list of
         * `values`. Passing by pairs is the reverse of pairs. If duplicate
         * keys exist, the last value wins.
         * @param values If the wrapped list is a list of keys, a list of
         * values corresponding to those keys.
         * @returns A chain wrapper around an object comprised of the provided
         * keys and values.
         **/
        object<TValue>(
            values: List<TValue>
        ): _Chain<TValue | undefined, Dictionary<TValue | undefined>>;
        object(): _Chain<PairValue<T>, Dictionary<PairValue<T>>>;

        /**
         * Returns the index at which `value` can be found in the wrapped list,
         * or -1 if `value` is not present. If you're working with a large list
         * and you know that the list is already sorted, pass true for
         * `isSortedOrFromIndex` to use a faster binary search...or, pass a
         * number in order to look for the first matching value in the list
         * after the given index.
         * @param value The value to search for within the wrapped list.
         * @param isSortedOrFromIndex True if the wrapped list is already
         * sorted OR the starting index for the search, optional.
         * @returns A chain wrapper around the index of the first occurrence of
         * `value` within the wrapped list or -1 if `value` is not found.
         **/
        indexOf(
            value: T,
            isSortedOrFromIndex?: boolean | number
        ): _ChainSingle<number>;

        /**
         * Returns the index of the last occurrence of `value` in the wrapped
         * list, or -1 if `value` is not present. Pass `fromIndex` to start
         * your search at a given index.
         * @param value The value to search for within the wrapped list.
         * @param fromIndex The starting index for the search, optional.
         * @returns A chain wrapper around the index of the last occurrence of
         * `value` within the wrapped list or -1 if `value` is not found.
         **/
        lastIndexOf(
            value: T,
            fromIndex?: number
        ): _ChainSingle<number>;

        /**
         * Returns the first index of an element in the wrapped list where the
         * `iteratee` truth test passes, otherwise returns -1.
         * @param iteratee The truth test to apply.
         * @param context `this` object in `iteratee`, optional.
         * @returns A chain wrapper around the index of the first element in
         * the wrapped list where the truth test passes or -1 if no elements
         * pass.
         **/
        findIndex(
            iteratee?: Iteratee<V, boolean>,
            context?: any
        ): _ChainSingle<number>;

        /**
         * Returns the last index of an element in the wrapped list where the
         * `iteratee` truth test passes, otherwise returns -1.
         * @param iteratee The truth test to apply.
         * @param context `this` object in `iteratee`, optional.
         * @returns A chain wrapper around the index of the last element in the
         * wrapped list where the truth test passes or -1 if no elements pass.
         **/
        findLastIndex(
            iteratee?: Iteratee<V, boolean>,
            context?: any
        ): _ChainSingle<number>;

        /**
         * Uses a binary search to determine the lowest index at which the
         * value should be inserted into the wrapped list in order to maintain
         * the wrapped list's sorted order. If an iteratee is provided, it
         * will be used to compute the sort ranking of each value, including
         * the value you pass.
         * @param value The value to determine an insert index for to mainain
         * the sorting in the wrapped list.
         * @param iteratee Iteratee to compute the sort ranking of each element
         * including `value`, optional.
         * @param context `this` object in `iteratee`, optional.
         * @returns A chain wrapper around the index where `value` should be
         * inserted into the wrapped list.
         **/
        sortedIndex(
            value: T,
            iteratee?: Iteratee<V | undefined, any>,
            context?: any
        ): _ChainSingle<number>;

        /**
         * A function to create flexibly-numbered lists of integers, handy for
         * `each` and `map` loops. Returns a list of integers from
         * the wrapped value (inclusive) to `stop` (exclusive), incremented
         * (or decremented) by `step`. Note that ranges that `stop` before they
         * `start` are considered to be zero-length instead of negative - if
         * you'd like a negative range, use a negative `step`.
         *
         * If `stop` is not specified, the wrapped value will be the number to
         * stop at and the default start of 0 will be used.
         * @param stop The number to stop at.
         * @param step The number to count up by each iteration, optional,
         * default = 1.
         * @returns A chain wrapper around an array of numbers from start to
         * `stop` with increments of `step`.
         **/
        range(stop?: number, step?: number): _Chain<number>;

        /**
         * Chunks the wrapped list into multiple arrays, each containing
         * `length` or fewer items.
         * @param length The maximum size of the chunks.
         * @returns A chain wrapper around the contents of the wrapped list in
         * chunks no greater than `length` in size.
         **/
        chunk(length: number): _Chain<T[]>;

        /*************
         * Functions *
         *************/

        /**
        * Wrapped type `Function`.
        * @see _.bind
        **/
        bind(object: any, ...args: any[]): _Chain<T>;

        /**
        * Wrapped type `object`.
        * @see _.bindAll
        **/
        bindAll(...methodNames: string[]): _Chain<T>;

        /**
        * Wrapped type `Function`.
        * @see _.partial
        **/
        partial(...args: any[]): _Chain<T>;

        /**
        * Wrapped type `Function`.
        * @see _.memoize
        **/
        memoize(hashFn?: (n: any) => string): _Chain<T>;

        /**
        * Wrapped type `Function`.
        * @see _.defer
        **/
        defer(...args: any[]): _Chain<T>;

        /**
        * Wrapped type `Function`.
        * @see _.delay
        **/
        delay(wait: number, ...args: any[]): _Chain<T>;

        /**
        * @see _.delay
        **/
        delay(...args: any[]): _Chain<T>;

        /**
        * Wrapped type `Function`.
        * @see _.throttle
        **/
        throttle(wait: number, options?: _.ThrottleSettings): _Chain<T>;

        /**
        * Wrapped type `Function`.
        * @see _.debounce
        **/
        debounce(wait: number, immediate?: boolean): _Chain<T>;

        /**
        * Wrapped type `Function`.
        * @see _.once
        **/
        once(): _Chain<T>;

        /**
         * Wrapped type `Function`.
         * @see _.once
         **/
        restArgs(startIndex?: number): _Chain<T>;

        /**
        * Wrapped type `number`.
        * @see _.after
        **/
        after(func: Function): _Chain<T>;

        /**
        * Wrapped type `number`.
        * @see _.before
        **/
        before(fn: Function): _Chain<T>;

        /**
        * Wrapped type `Function`.
        * @see _.wrap
        **/
        wrap(wrapper: Function): () => _Chain<T>;

        /**
        * Wrapped type `Function`.
        * @see _.negate
        **/
        negate(): _Chain<T>;

        /**
        * Wrapped type `Function[]`.
        * @see _.compose
        **/
        compose(...functions: Function[]): _Chain<T>;

        /***********
         * Objects *
         ***********/

        /**
        * Wrapped type `object`.
        * @see _.keys
        **/
        keys(): _Chain<string>;

        /**
        * Wrapped type `object`.
        * @see _.allKeys
        **/
        allKeys(): _Chain<string>;

        /**
        * Wrapped type `object`.
        * @see _.values
        **/
        values(): _Chain<any>;

        /**
         * Like map, but for objects. Transform the value of each property in
         * turn.
         * @param iteratee The iteratee to use to transform property values.
         * @param context `this` object in `iteratee`, optional.
         * @returns A chain wrapper around a new object with all of the wrapped
         * object's property values transformed through `iteratee`.
         */
        mapObject<I extends Iteratee<V, any, TypeOfCollection<V, any>>>(
            iteratee: I,
            context?: any
        ): _Chain<IterateeResult<I, TypeOfCollection<V, any>>,
            { [K in keyof V]: IterateeResult<I, V[K]> }>;

        /**
         * Convert the wrapped object into a list of [key, value] pairs. The
         * opposite of the single-argument signature of `_.object`.
         * @returns A chain wrapper around the list of [key, value] pairs from
         * the wrapped object.
         **/
        pairs(): _Chain<[Extract<keyof V, string>, TypeOfCollection<V, any>]>;

        /**
        * Wrapped type `object`.
        * @see _.invert
        **/
        invert(): _Chain<T>;

        /**
        * Wrapped type `object`.
        * @see _.functions
        **/
        functions(): _Chain<T>;

        /**
        * @see _.functions
        **/
        methods(): _Chain<T>;

        /**
        * Wrapped type `object`.
        * @see _.extend
        **/
        extend(...sources: any[]): _Chain<T>;

        /**
         * Similar to `findIndex` but for keys in objects. Returns the key
         * where the `iteratee` truth test passes or undefined.
         * @param iteratee The truth test to apply.
         * @param context `this` object in `iteratee`, optional.
         * @returns The first element in the wrapped object that passes the
         * truth test or undefined if no elements pass.
         */
        findKey(
            iteratee?: Iteratee<V, boolean, TypeOfCollection<V, any>>,
            context?: any
        ): _ChainSingle<Extract<keyof V, string> | undefined>;

        /**
         * Return a copy of the wrapped object that is filtered to only have
         * values for the allowed keys (or array of keys).
         * @param keys The keys to keep on the wrapped object.
         * @returns A chain wrapper around a copy of the wrapped object with
         * only the `keys` properties.
         **/
        pick<K extends string>(...keys: (K | K[])[]): _ChainSingle<_Pick<V, K>>;

        /**
         * Return a copy of the wrapped object that is filtered to only have
         * values for the keys selected by a truth test.
         * @param iterator A truth test that selects the keys to keep on the
         * wrapped object.
         * @returns A chain wrapper around a copy of the wrapped object with
         * only the keys selected by `iterator`.
         **/
        pick(
            iterator: ObjectIterator<TypeOfDictionary<V, any>, boolean, V>
        ): _ChainSingle<Partial<V>>;

        /**
         * Return a copy of the wrapped object that is filtered to omit the
         * disallowed keys (or array of keys).
         * @param keys The keys to omit from the wrapped object.
         * @returns A chain wrapper around a copy of the wrapped object without
         * the `keys` properties.
         **/
        omit<K extends string>(...keys: (K | K[])[]): _ChainSingle<_Omit<V, K>>;

        /**
         * Return a copy of the wrapped object that is filtered to not have
         * values for the keys selected by a truth test.
         * @param iterator A truth test that selects the keys to omit from the
         * wrapped object.
         * @returns A chain wrapper around a copy of the wrapped object without
         * the keys selected by `iterator`.
         **/
        omit(
            iterator: ObjectIterator<TypeOfDictionary<V, any>, boolean, V>
        ): _ChainSingle<Partial<V>>;

        /**
        * Wrapped type `object`.
        * @see _.defaults
        **/
        defaults(...defaults: any[]): _Chain<T>;

        /**
         * Wrapped type `any`.
         * @see _.create
         **/
        create(props?: object): _Chain<T>;

        /**
        * Wrapped type `any[]`.
        * @see _.clone
        **/
        clone(): _Chain<T>;

        /**
        * Wrapped type `object`.
        * @see _.tap
        **/
        tap(interceptor: (...as: any[]) => any): _Chain<T, V>;

        /**
        * Wrapped type `object`.
        * @see _.has
        **/
        has(key: string): _Chain<T>;

        /**
        * Wrapped type `any[]`.
        * @see _.matches
        **/
        matches(): _Chain<T>;

        /**
         * Wrapped type `any[]`.
         * @see _.matcher
         **/
        matcher(): _Chain<T>;

        /**
         * Wrapped type `any`.
         * @see _.get
         **/
        get(
            path: string | string[]
        ): _Chain<TypeOfCollection<V> | undefined, T | undefined>;
        get<U>(
            path: string | string[],
            defaultValue?: U
        ): _Chain<TypeOfCollection<V> | U, T | U>;

        /**
        * Wrapped type `string`.
        * @see _.property
        **/
        property(): _Chain<T>;

        /**
        * Wrapped type `object`.
        * @see _.propertyOf
        **/
        propertyOf(): _Chain<T>;

        /**
         * Performs an optimized deep comparison between the wrapped object
         * and `other` to determine if they should be considered equal.
         * @param other Compare to the wrapped object.
         * @returns True if the wrapped object should be considered equal to
         * `other`.
         * The result will be wrapped in a chain wrapper.
         **/
        isEqual(other: any): _ChainSingle<boolean>;

        /**
         * Returns true if the wrapped collection contains no values.
         * For strings and array-like objects checks if the length property is
         * 0.
         * @returns True if the wrapped collection has no elements.
         * The result will be wrapped in a chain wrapper.
         **/
        isEmpty(): _ChainSingle<boolean>;

        /**
         * Returns true if the keys and values in `properties` are contained in
         * the wrapped object.
         * @param properties The properties to check for in the wrapped object.
         * @returns True if all keys and values in `properties` are also in the
         * wrapped object.
         * The result will be wrapped in a chain wrapper.
         **/
        isMatch(properties: any): _ChainSingle<boolean>;

        /**
         * Returns true if the wrapped object is a DOM element.
         * @returns True if the wrapped object is a DOM element, otherwise
         * false.
         * The result will be wrapped in a chain wrapper.
         **/
        isElement(): _ChainSingle<boolean>;

        /**
         * Returns true if the wrapped object is an Array.
         * @returns True if the wrapped object is an Array, otherwise false.
         * The result will be wrapped in a chain wrapper.
         **/
        isArray(): _ChainSingle<boolean>;

        /**
         * Returns true if the wrapped object is an ArrayBuffer.
         * @returns True if the wrapped object is an ArrayBuffer, otherwise false.
         * The result will be wrapped in a chain wrapper.
         **/
        isArrayBuffer(): _ChainSingle<boolean>;

        /**
         * Returns true if the wrapped object is a DataView.
         * @returns True if the wrapped object is a DataView, otherwise false.
         * The result will be wrapped in a chain wrapper.
         **/
        isDataView(): _ChainSingle<boolean>;

        /**
         * Returns true if the wrapped object is a TypedArray.
         * @returns True if the wrapped object is a TypedArray, otherwise false.
         * The result will be wrapped in a chain wrapper.
         **/
        isTypedArray(): _ChainSingle<boolean>;

        /**
         * Returns true if the wrapped object is a Symbol.
         * @returns True if the wrapped object is a Symbol, otherwise false.
         * The result will be wrapped in a chain wrapper.
         **/
        isSymbol(): _ChainSingle<boolean>;

        /**
         * Returns true if the wrapped object is an Object. Note that
         * JavaScript arrays and functions are objects, while (normal) strings
         * and numbers are not.
         * @returns True if the wrapped object is an Object, otherwise false.
         * The result will be wrapped in a chain wrapper.
         **/
        isObject(): _ChainSingle<boolean>;

        /**
         * Returns true if the wrapped object is an Arguments object.
         * @returns True if the wrapped object is an Arguments object,
         * otherwise false.
         * The result will be wrapped in a chain wrapper.
         **/
        isArguments(): _ChainSingle<boolean>;

        /**
         * Returns true if the wrapped object is a Function.
         * @returns True if the wrapped object is a Function, otherwise false.
         * The result will be wrapped in a chain wrapper.
         **/
        isFunction(): _ChainSingle<boolean>;

        /**
         * Returns true if the wrapped object is a Error.
         * @returns True if the wrapped object is a Error, otherwise false.
         * The result will be wrapped in a chain wrapper.
         **/
        isError(): _ChainSingle<boolean>;

        /**
         * Returns true if the wrapped object is a String.
         * @returns True if the wrapped object is a String, otherwise false.
         * The result will be wrapped in a chain wrapper.
         **/
        isString(): _ChainSingle<boolean>;

        /**
         * Returns true if the wrapped object is a Number (including NaN).
         * @returns True if the wrapped object is a Number, otherwise false.
         * The result will be wrapped in a chain wrapper.
         **/
        isNumber(): _ChainSingle<boolean>;

        /**
         * Returns true if the wrapped object is a finite Number.
         * @returns True if the wrapped object is a finite Number.
         * The result will be wrapped in a chain wrapper.
         **/
        isFinite(): _ChainSingle<boolean>;

        /**
         * Returns true if the wrapped object is a Boolean.
         * @returns True if the wrapped object is a Boolean, otherwise false.
         * The result will be wrapped in a chain wrapper.
         **/
        isBoolean(): _ChainSingle<boolean>;

        /**
         * Returns true if the wrapped object is a Date.
         * @returns True if the wrapped object is a Date, otherwise false.
         * The result will be wrapped in a chain wrapper.
         **/
        isDate(): _ChainSingle<boolean>;

        /**
         * Returns true if the wrapped object is a RegExp.
         * @returns True if the wrapped object is a RegExp, otherwise false.
         * The result will be wrapped in a chain wrapper.
         **/
        isRegExp(): _ChainSingle<boolean>;

        /**
         * Returns true if the wrapped object is NaN.
         * Note: this is not the same as the native isNaN function,
         * which will also return true if the variable is undefined.
         * @returns True if the wrapped object is NaN, otherwise false.
         * The result will be wrapped in a chain wrapper.
         **/
        isNaN(): _ChainSingle<boolean>;

        /**
         * Returns true if the wrapped object is null.
         * @returns True if the wrapped object is null, otherwise false.
         * The result will be wrapped in a chain wrapper.
         **/
        isNull(): _ChainSingle<boolean>;

        /**
         * Returns true if the wrapped object is undefined.
         * @returns True if the wrapped object is undefined, otherwise false.
         * The result will be wrapped in a chain wrapper.
         **/
        isUndefined(): _ChainSingle<boolean>;

        /***********
         * Utility *
         ***********/

        /**
        * Wrapped type `any`.
        * @see _.identity
        **/
        identity(): _Chain<T>;

        /**
        * Wrapped type `any`.
        * @see _.constant
        **/
        constant(): _Chain<T>;

        /**
        * Wrapped type `any`.
        * @see _.noop
        **/
        noop(): _Chain<T>;

        /**
        * Wrapped type `number`.
        * @see _.times
        **/
        times<TResult>(iterator: (n: number) => TResult, context?: any): _Chain<T>;

        /**
        * Wrapped type `number`.
        * @see _.random
        **/
        random(): _Chain<T>;
        /**
        * Wrapped type `number`.
        * @see _.random
        **/
        random(max: number): _Chain<T>;

        /**
        * Wrapped type `object`.
        * @see _.mixin
        **/
        mixin(): _Chain<T>;

        /**
        * Wrapped type `string|Function|Object`.
        * @see _.iteratee
        **/
        iteratee(context?: any): _Chain<T>;

        /**
        * Wrapped type `string`.
        * @see _.uniqueId
        **/
        uniqueId(): _Chain<T>;

        /**
        * Wrapped type `string`.
        * @see _.escape
        **/
        escape(): _Chain<T>;

        /**
        * Wrapped type `string`.
        * @see _.unescape
        **/
        unescape(): _Chain<T>;

        /**
        * Wrapped type `object`.
        * @see _.result
        **/
        result(property: string, defaultValue?: any): _Chain<T>;

        /**
        * Wrapped type `string`.
        * @see _.template
        **/
        template(settings?: _.TemplateSettings): _Chain<CompiledTemplate>;

        /***************
         * Array proxy *
         ***************/

        /**
        * Returns a new array comprised of the array on which it is called
        * joined with the array(s) and/or value(s) provided as arguments.
        * @param arr Arrays and/or values to concatenate into a new array. See the discussion below for details.
        * @return A new array comprised of the array on which it is called
        **/
        concat(...arr: Array<T[]>): _Chain<T>;

        /**
        * Join all elements of an array into a string.
        * @param separator Optional. Specifies a string to separate each element of the array. The separator is converted to a string if necessary. If omitted, the array elements are separated with a comma.
        * @return The string conversions of all array elements joined into one string.
        **/
        join(separator?: any): _ChainSingle<T>;

        /**
        * Removes the last element from an array and returns that element.
        * @return Returns the popped element.
        **/
        pop(): _ChainSingle<T>;

        /**
        * Adds one or more elements to the end of an array and returns the new length of the array.
        * @param item The elements to add to the end of the array.
        * @return The array with the element added to the end.
        **/
        push(...item: Array<T>): _Chain<T>;

        /**
        * Reverses an array in place. The first array element becomes the last and the last becomes the first.
        * @return The reversed array.
        **/
        reverse(): _Chain<T>;

        /**
        * Removes the first element from an array and returns that element. This method changes the length of the array.
        * @return The shifted element.
        **/
        shift(): _ChainSingle<T>;

        /**
        * Returns a shallow copy of a portion of an array into a new array object.
        * @param start Zero-based index at which to begin extraction.
        * @param end Optional. Zero-based index at which to end extraction. slice extracts up to but not including end.
        * @return A shallow copy of a portion of an array into a new array object.
        **/
        slice(start: number, end?: number): _Chain<T>;

        /**
        * Sorts the elements of an array in place and returns the array. The sort is not necessarily stable. The default sort order is according to string Unicode code points.
        * @param compareFn Optional. Specifies a function that defines the sort order. If omitted, the array is sorted according to each character's Unicode code point value, according to the string conversion of each element.
        * @return The sorted array.
        **/
        sort(compareFn?: (a: T, b: T) => boolean): _Chain<T>;

        /**
        * Changes the content of an array by removing existing elements and/or adding new elements.
        * @param index Index at which to start changing the array. If greater than the length of the array, actual starting index will be set to the length of the array. If negative, will begin that many elements from the end.
        * @param quantity An integer indicating the number of old array elements to remove. If deleteCount is 0, no elements are removed. In this case, you should specify at least one new element. If deleteCount is greater than the number of elements left in the array starting at index, then all of the elements through the end of the array will be deleted.
        * @param items The element to add to the array. If you don't specify any elements, splice will only remove elements from the array.
        * @return An array containing the deleted elements. If only one element is removed, an array of one element is returned. If no elements are removed, an empty array is returned.
        **/
        splice(index: number, quantity: number, ...items: Array<T>): _Chain<T>;

        /**
        * A string representing the specified array and its elements.
        * @return A string representing the specified array and its elements.
        **/
        toString(): _ChainSingle<T>;

        /**
        * Adds one or more elements to the beginning of an array and returns the new length of the array.
        * @param items The elements to add to the front of the array.
        * @return The array with the element added to the beginning.
        **/
        unshift(...items: Array<T>): _Chain<T>;

        /************
         * Chaining *
         ************/

        /**
          * Returns a wrapped object. Calling methods on this object will
          * continue to return wrapped objects until value() is used.
          * @returns An underscore chain wrapper around the wrapped value.
          **/
        chain(): _Chain<T, V>;

        /**
         * Extracts the value of the wrapped object.
         * @returns The value of the wrapped object.
         **/
        value(): V;
    }
}
