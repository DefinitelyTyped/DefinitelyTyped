// Type definitions for node-enumerable v1.1.0
// Project: https://github.com/mkloubert/node-enumerable/
// Definitions by: Marcel Joachim Kloubert <https://github.com/mkloubert/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace Enumerable {
    /**
     * An async action.
     *
     * @template T Type of the underlying items.
     *
     * @param {AsyncActionContext<T>} context The underlying context.
     */
    type AsyncAction<T> = (context: AsyncActionContext<T>) => void;
    /**
     * A context for an async action.
     *
     * @template T Type of the underlying item.
     */
    interface AsyncActionContext<T> {
        /**
         * Cancels the whole operation.
         *
         * @param {any} [result] The optional result for the callback.
         */
        cancel(result?: any): void;
        /**
         * The zero based index.
         */
        readonly index: number;
        /**
         * Indicates if this is the first action or not.
         */
        readonly isFirst: boolean;
        /**
         * The zero based index.
         */
        readonly item: T;
        /**
         * The value from the previous operation.
         */
        readonly previousValue: any;
        /**
         * Finishes the action as failed and cancels the whole operation.
         *
         * @param {any} reason The reason why the action has failed.
         * @param {any} [result] Optional result value / object for the callback.
         */
        reject(reason: any, result?: any): void;
        /**
         * Finishes the action as succeeded.
         *
         * @param {any} [nextValue] The value for the 'previousValue' property
         *                          of the next operation.
         */
        resolve(nextValue?: any): void;
        /**
         * Gets or sets the result value for the callback.
         */
        result: any;
        /**
         * Gets the underlying sequence.
         */
        readonly sequence: IEnumerable<T>;
        /**
         * Gets or sets the value for this action and the upcoming ones.
         */
        value: any;
    }
    /**
     * A factory function that can be cancelled.
     *
     * @template TResult The type of the result.
     *
     * @param {((cancel: (flag?: boolean) => void)} cancel The callback to cancel the building.
     * @param {number} index The zero based index of that invocation.
     *
     * @return {TResult} The result.
     */
    type CancelableFactory<TResult> = (cancel: (flag?: boolean) => void, index: number) => TResult;
    /**
     * Compares to values.
     *
     * @template T Type of the "left" value.
     * @template U Type of the "right" value.
     *
     * @param {T} x The "left" value.
     * @param {U} y The "right" value.
     *
     * @return {number} The "sort" value.
     */
    type Comparer<T, U = T> = (x: T, y: U) => number;
    /**
     * A forEach action.
     *
     * @template T Type of the items.
     *
     * @param {T} item The current item.
     * @param {number} index The zero based index of the current item.
     */
    type EachAction<T> = (item: T, index: number) => void;
    /**
     * Checks if two values are equal.
     *
     * @template T Type of the "left" value.
     * @template U Type of the "right" value.
     *
     * @param {T} x The "left" value.
     * @param {U} y The "right" value.
     *
     * @return {boolean} Are equal or not.
     */
    type EqualityComparer<T, U = T> = (x: T, y: U) => boolean;
    /**
     * Saves joined values.
     *
     * @template TOuter Type of the outer value.
     * @template TInner Type of the inner value.
     */
    interface JoinedItems<TOuter, TInner> {
        /**
         * The inner value.
         */
        inner: TInner;
        /**
         * The outer value.
         */
        outer: TOuter;
    }
    /**
     * A predicate / condition.
     *
     * @template T Type of the item to check.
     *
     * @param {T} The item to check.
     *
     * @return {boolean} Item satisfies the condition or not.
     */
    type Predicate<T> = (item: T) => boolean;
    /**
     * A selector.
     *
     * @template T Type of the source item.
     * @template U Type of the new item.
     *
     * @param {T} item The source item.
     *
     * @return {U} The new item.
     */
    type Selector<T, U> = (item: T) => U;
    /**
     * Possible sequence types.
     *
     * @template T Type of the items.
     */
    type Sequence<T> = ArrayLike<T> | Iterable<T> | Iterator<T> | IArguments;
    /**
     * A stack.
     *
     * @template T The type of the items.
     */
    interface Stack<T> {
        /**
         * Pushes one or more item to the stack.
         *
         * @param {...T[]} items The items to push.
         *
         * @returns {number} The new length of the stack.
         */
        push(...items: T[]): number;
    }
    /**
     * Indicates that something is empty.
     */
    const IS_EMPTY: symbol;
    /**
     * Indicates if something was not found.
     */
    const NOT_FOUND: symbol;
    /**
     * A sequence.
     *
     * @template T Type of the items.
     */
    interface IEnumerable<T> extends Iterable<T>, Iterator<T> {
        /**
         * Applies an accumulator function over that sequence.
         * If specified 'seed' is used as the initial accumulator value,
         * and (if specified) the 'resultSelector' is used to select the result value.
         *
         * @template TAccumulate The type of the accumulator value.
         * @template TResult The result type.
         *
         * @param {(acc: TAccumulate, item: T) => TAccumulate} func An accumulator function to be invoked on each element.
         * @param {TAccumulate} [seed] The initial accumulator value.
         * @param {(acc: TAccumulate) => TResult} [resultSelector] A function to transform the final accumulator value
         *                                                         into the result value.
         *
         * @returns {TResult} The final value.
         */
        aggregate<TAccumulate = T, TResult = T>(func: (accumulator: TAccumulate, item: T) => TAccumulate, seed?: TAccumulate, resultSelector?: (accumulator: TAccumulate) => TResult): TResult;
        /**
         * Checks if all elements of that sequence
         * satisfy a condition or not.
         *
         * @param {Predicate<T>} predicate The condition.
         *
         * @returns {boolean} All elements satisfy the condition or not.
         */
        all(predicate: Predicate<T>): boolean;
        /**
         * Checks if at least one element of that sequence
         * satisfies a condition or not.
         *
         * @param {Predicate<T>} predicate The condition.
         *
         * @returns {boolean} One element satisfies the condition or not.
         */
        any(predicate?: Predicate<T>): boolean;
        /**
         * Runs an async action for each item of that sequence.
         *
         * @param AsyncAction<T> action The action to invoke.
         * @param AsyncCallback [callback] The callback.
         * @param {any} [previousValue] The value for the 'previousValue' of the first action.
         *
         * @returns {Promise<any>} The promise.
         */
        async(action: AsyncAction<T>, previousValue?: any): Promise<any>;
        /**
         * Calculates the average of the items of that sequence.
         *
         * @param {Selector<T, number>} [selector] The custom selector to use.
         *
         * @returns {number|Symbol} The average or IS_EMPTY if sequence is empty.
         */
        average(selector?: Selector<T, number>): number | Symbol;
        /**
         * Gets if that sequence can be resetted or not.
         */
        readonly canReset: boolean;
        /**
         * Returns a "casted" version of that sequence.
         *
         * @template U The target type.
         *
         * @param {string} [type] The optional target type to converts the items to.
         *                        Possible values are: bool/boolean, float/number, func/function, object, string, int/integer,
         *                                             null, undefined,
         *                                             symbol
         *
         * @returns {IEnumerable<U>} The "casted" sequence.
         *
         * @throws Target type is not supported
         */
        cast<U = any>(type?: string): IEnumerable<U>;
        /**
         * Clones that sequence multiply times.
         *
         * @template U The type of the target sequences.
         *
         * @param {number} [count] The maximum number of sequences.
         * @param {Selector<T, U>} [itemSelector] The selector for the items.
         *
         * @returns {IEnumerable<IEnumerable<U>>} The sequence of sequences.
         */
        clone<U = T>(count?: number, itemSelector?: Selector<T, U>): IEnumerable<IEnumerable<U>>;
        /**
         * Concats the items of that sequences with other ones
         * to a new sequence.
         *
         * @param {...Sequence<T>[]} args The other sequences.
         *
         * @memberof IEnumerable<T> The concated sequence.
         */
        concat(...args: Sequence<T>[]): IEnumerable<T>;
        /**
         * Concats the items of that sequences with other ones
         * to a new sequence.
         *
         * @param {...Sequence<T>[]} sequences The other sequences.
         *
         * @memberof IEnumerable<T> The concated sequence.
         */
        concatArray(sequences: ArrayLike<Sequence<T>>): IEnumerable<T>;
        /**
         * Checks if that sequence contains an item.
         *
         * @template U Type of the item to search for.
         *
         * @param {U} item The item to search for.
         * @param {(EqualityComparer<T, U>|true)} [comparer] The custom equality comparer to use.
         *                                                   (true) indicates to do a === check.
         *
         * @returns {boolean} Sequence contains item or not.
         */
        contains<U>(item: U, comparer?: EqualityComparer<T, U> | true): boolean;
        /**
         * Counts the elements of that sequence.
         *
         * @param {Predicate<T>} [predicate] The optional predicate to use.
         *
         * @returns {number} The number of (matching) items.
         */
        count(predicate?: Predicate<T>): number;
        /**
         * Gets the current iterator result.
         */
        readonly current: IteratorResult<T>;
        /**
         * Returns the items of that sequence or a default item list
         * if that sequence is empty.
         *
         * @param {...T[]} defaultItems The default items.
         *
         * @returns {IEnumerable<T>} The (new) sequence.
         */
        defaultIfEmpty(...defaultItems: T[]): IEnumerable<T>;
        /**
         * Returns the items of that sequence or a default item list
         * if that sequence is empty.
         *
         * @param {Sequence<T>} defaultSequence The default items.
         *
         * @returns {IEnumerable<T>} The (new) sequence.
         */
        defaultSequenceIfEmpty(defaultSequence: Sequence<T>): IEnumerable<T>;
        /**
         * Removes duplicate entries from that sequence.
         *
         * @param {EqualityComparer<T>} [comparer] The custom equality comparer to use.
         *                                         (true) indicates to do a === check.
         *
         * @returns {IEnumerable<T>} The new sequence.
         */
        distinct(comparer?: EqualityComparer<T> | true): IEnumerable<T>;
        /**
         * Removes duplicate entries from that sequence by using a selector.
         *
         * @param {Selector<T,U>} selector The selector to use.
         * @param {EqualityComparer<T>} [comparer] The custom equality comparer to use.
         *                                         (true) indicates to do a === check.
         *
         * @returns {IEnumerable<T>} The new sequence.
         */
        distinctBy<U>(selector: Selector<T, U>, comparer?: EqualityComparer<U> | true): IEnumerable<T>;
        /**
         * Alias for forEach()
         */
        each(func: EachAction<T>): this;
        /**
         * Returns an element at a specific index.
         *
         * @param {number} index The zero based index.
         *
         * @returns {T} The element.
         *
         * @throws Element not found.
         */
        elementAt(index: number): T;
        /**
         * Returns an element at a specific index.
         *
         * @template U Type of the default value.
         *
         * @param {number} index The zero based index
         * @param {U} [defaultValue] The default value. Default: NOT_FOUND
         *
         * @returns {T|U} The element.
         *
         * @throws Element not found.
         */
        elementAtOrDefault<U = Symbol>(index: number, defaultValue?: U): T | U;
        /**
         * Returns the items of that sequence except a list of specific ones.
         *
         * @param {Sequence<T>} second The second sequence.
         * @param {EqualityComparer<T>|true} [equalityComparer] The custom equality comparer to use.
         *
         * @return {IEnumerable<T>} The new sequence.
         */
        except(second: Sequence<T>, comparer?: EqualityComparer<T> | true): IEnumerable<T>;
        /**
         * Invokes a function for each element of that sequence.
         *
         * @template TResult Type of the result.
         *
         * @param {(item: T, index: number, lastResult: TResult) => TResult} func The function to invoke.
         *
         * @returns this
         */
        forEach(func: EachAction<T>): this;
        /**
         * Returns the first element of that sequence.
         *
         * @param {Predicate<T>} [predicate] The optional predicate to use.
         *
         * @returns {T} The first element.
         *
         * @throws Element not found.
         */
        first(predicate?: Predicate<T>): T;
        /**
         * Tries to return the first element.
         *
         * @template U Type of the default value.
         *
         * @param {(Predicate<T>|T)} [predicateOrDefaultValue] The predicate or default value.
         * @param {U} [defaultValue] The default value. Default: NOT_FOUND
         *                                      If definded: predicateOrDefaultValue MUST be a function in this case!
         *
         * @returns {T|U} The item or the default value.
         */
        firstOrDefault<U = Symbol>(predicateOrDefaultValue?: Predicate<T> | T, defaultValue?: U): T | U;
        /**
         * Groups the items of that sequence by a key.
         *
         * @template TKey Type of the keys.
         *
         * @param {Selector<T, TKey>} keySelector The key selector.
         * @param {EqualityComparer<TKey>} [keyEqualityComparer] The custom equality comparer for the keys.
         *
         * @returns {IEnumerable<IGrouping<TKey, T>>} The grouped items.
         */
        groupBy<TKey>(keySelector: Selector<T, TKey>, keyEqualityComparer?: EqualityComparer<TKey>): IEnumerable<IGrouping<TKey, T>>;
        /**
         * Correlates the elements of that sequence and another based on matching keys and groups them.
         *
         * @param {Sequence<TInner>} inner The other sequence.
         * @param {Selector<T, TOuterKey>} [outerKeySelector] The key selector for the items of that sequence.
         * @param {Selector<TInner, TInnerKey} [innerKeySelector] The key selector for the items of the other sequence.
         * @param {((outer: T, inner: IEnumerable<TInner>) => TResult)} [resultSelector] The function that provides the result value for two matching elements.
         * @param {EqualityComparer<TOuterKey, TInnerKey>|true} [keyEqualityComparer] The custom equality comparer for the keys to use.
         *                                                                            (true) indicates to do a === check.
         *
         * @return {IEnumerable<TResult>} The new sequence.
         */
        groupJoin<TInner = T, TOuterKey = TInnerKey | T, TInnerKey = TOuterKey | TInner, TResult = JoinedItems<T, IEnumerable<TInner>>>(inner: Sequence<TInner>, outerKeySelector?: Selector<T, TOuterKey>, innerKeySelector?: Selector<TInner, TInnerKey>, resultSelector?: (outer: T, inner: IEnumerable<TInner>) => TResult, keyEqualityComparer?: EqualityComparer<TOuterKey, TInnerKey> | true): IEnumerable<TResult>;
        /**
         * Gets the current zero based index.
         */
        readonly index: number;
        /**
         * Returns the zero based index of the first occurrence of an item.
         *
         * @template U Type of the item to search for.
         *
         * @param {U} item The item to search for.
         * @param {(EqualityComparer<T, U>|true)} [comparer] The custom equality comparer to use.
         *                                                   (true) indicates to do a === check.
         *
         * @returns {number} The index or -1 if not found.
         */
        indexOf<U>(item: U, comparer?: EqualityComparer<T, U> | true): number;
        /**
         * Returns the intersection between this and a second sequence.
         *
         * @param {Sequence<T>} second The second sequence.
         * @param {EqualityComparer<T>|true} [equalityComparer] The custom equality comparer to use.
         *
         * @return {IEnumerable<T>} The new sequence.
         */
        intersect(second: Sequence<T>, comparer?: EqualityComparer<T> | true): IEnumerable<T>;
        /**
         * Correlates the elements of that sequence and another based on matching keys.
         *
         * @param {Sequence<TInner>} inner The other sequence.
         * @param {Selector<T, TOuterKey>} [outerKeySelector] The key selector for the items of that sequence.
         * @param {Selector<TInner, TInnerKey} [innerKeySelector] The key selector for the items of the other sequence.
         * @param {((outer: T, inner: IEnumerable<TInner>) => TResult)} [resultSelector] The function that provides the result value for two matching elements.
         * @param {EqualityComparer<TOuterKey, TInnerKey>|true} [keyEqualityComparer] The custom equality comparer for the keys to use.
         *                                                                            (true) indicates to do a === check.
         *
         * @return {IEnumerable<TResult>} The new sequence.
         */
        join<TInner = T, TOuterKey = TInnerKey | T, TInnerKey = TOuterKey | TInner, TResult = JoinedItems<T, TInner>>(inner: Sequence<TInner>, outerKeySelector?: Selector<T, TOuterKey>, innerKeySelector?: Selector<TInner, TInnerKey>, resultSelector?: (outer: T, inner: TInner) => TResult, keyEqualityComparer?: EqualityComparer<TOuterKey, TInnerKey> | true): IEnumerable<TResult>;
        /**
         * Joins the items of that sequence to one string.
         *
         * @param {any} [separator] The optional separator to use.
         *
         * @returns {string} The items as string.
         */
        joinToString(separator?: any): string;
        /**
         * Returns the last element of that sequence.
         *
         * @param {Predicate<T>} [predicate] The optional predicate to use.
         *
         * @returns {T} The last element.
         *
         * @throws Element not found.
         */
        last(predicate?: Predicate<T>): T;
        /**
         * Returns the zero based index of the last occurrence of an item.
         *
         * @template U Type of the item to search for.
         *
         * @param {U} item The item to search for.
         * @param {(EqualityComparer<T, U>|true)} [comparer] The custom equality comparer to use.
         *                                                   (true) indicates to do a === check.
         *
         * @returns {number} The index or -1 if not found.
         */
        lastIndexOf<U>(item: U, comparer?: EqualityComparer<T, U> | true): number;
        /**
         * Tries to return the last element.
         *
         * @template U Type of the default value.
         *
         * @param {(Predicate<T>|T)} [predicateOrDefaultValue] The predicate or default value.
         * @param {(T | Symbol)} [defaultValue] The default value. Default: NOT_FOUND
         *                                      If definded: predicateOrDefaultValue MUST be a function in this case!
         *
         * @returns {T|U} The item or the default value.
         */
        lastOrDefault<U = Symbol>(predicateOrDefaultValue?: Predicate<T> | T, defaultValue?: U): T | U;
        /**
         * Returns a resettable version of that sequence.
         *
         * @returns {IEnumerable<T>} The resettable version of that sequence.
         */
        makeResettable(): IEnumerable<T>;
        /**
         * Returns the maximum item of that sequence.
         *
         * @param {Comparer<U>} [comparer] The custom comparer to use.
         *
         * @returns {T|Symbol} The item or IS_EMPTY if that sequence is empty.
         */
        max<U = T>(valueSelector?: Selector<T, U>, comparer?: Comparer<U>): T | Symbol;
        /**
         * Returns the minimum item of that sequence.
         *
         * @param {Comparer<U>} [comparer] The custom comparer to use.
         *
         * @returns {T|Symbol} The item or IS_EMPTY if that sequence is empty.
         */
        min<U = T>(valueSelector?: Selector<T, U>, comparer?: Comparer<U>): T | Symbol;
        /**
         * Removes all values that are no valid numbers.
         *
         * @param {boolean} [checkForInt] Check for integer and not for float. Default: (false)
         *
         * @return {IEnumerable<T>} The filtered sequence.
         */
        noNAN(checkForInt?: boolean): IEnumerable<T>;
        /**
         * Removes empty items.
         *
         * @returns {IEnumerable<T>} The filtered sequence.
         */
        notEmpty(): IEnumerable<T>;
        /**
         * Filters items of specific type.
         *
         * @template U The type of the target sequence.
         *
         * @param {string} type The type.
         *
         * @returns {IEnumerable<U>} The filtered sequence.
         */
        ofType<U = any>(type: string): IEnumerable<U>;
        /**
         * Sorts the elements of that sequence in ascending order by using the values itself as keys.
         *
         * @param Comparer<T> [comparer] The custom key comparer to use.
         *
         * @return {IOrderedEnumerable} The new sequence.
         */
        order(comparer?: Comparer<T>): IOrderedEnumerable<T>;
        /**
         * Sorts the elements of that sequence in ascending order.
         *
         * @param {Selector<T,U>} selector The key selector.
         * @param {Comparer<U>} [comparer] The custom key comparer to use.
         *
         * @return {IOrderedEnumerable<T>} The new sequence.
         */
        orderBy<U>(selector: Selector<T, U>, comparer?: Comparer<U>): IOrderedEnumerable<T>;
        /**
         * Sorts the elements of that sequence in descending order.
         *
         * @param {Selector<T,U>} selector The key selector.
         * @param {Comparer<U>} [comparer] The custom key comparer to use.
         *
         * @return {IOrderedEnumerable<T>} The new sequence.
         */
        orderByDescending<U>(selector: Selector<T, U>, comparer?: Comparer<U>): IOrderedEnumerable<T>;
        /**
         * Sorts the elements of that sequence in descending order by using the values as keys.
         *
         * @param {Comparer<T>} [comparer] The custom key comparer to use.
         *
         * @return {IOrderedEnumerable<T>} The new sequence.
         */
        orderDescending(comparer?: Comparer<T>): IOrderedEnumerable<T>;
        /**
         * Calculates the product of that sequence.
         *
         * @returns {(T | Symbol)} The product or IS_EMPTY if that sequence is empty.
         */
        product(seed?: T): T | Symbol;
        /**
         * Pushes the elements of that sequence to an array or stack-like object.
         *
         * @param {Stack<T>} stack The array or stack.
         *
         * @returns {this}
         */
        pushTo(stack: Stack<T>): this;
        /**
         * Returns that sequence.
         *
         * @returns {this}
         *
         * @throws Not supported
         */
        reset(): this;
        /**
         * Reverses the order of that sequence by using optional keys.
         *
         * @param {Selector<T,U>} The selector for the keys.
         *
         * @return {IOrderedEnumerable<T>} The new sequence.
         */
        reverse<U = T>(selector?: Selector<T, U>): IOrderedEnumerable<T>;
        /**
         * Projects the items of that sequence to new values / objects.
         *
         * @template U The type of the new items.
         *
         * @param {Selector<T, U>} selector
         *
         * @returns {IEnumerable<U>} The new sequence.
         */
        select<U>(selector: Selector<T, U>): IEnumerable<U>;
        /**
         * Projects the items of that sequence to new sequences
         * that are flatten to a single sequence.
         *
         * @template U Type of the items of the result sequences.
         *
         * @param {Selector<T, Sequence<U>>} selector The selector.
         *
         * @returns {IEnumerable<U>} The new, flatten sequence.
         */
        selectMany<U>(selector: Selector<T, Sequence<U>>): IEnumerable<U>;
        /**
         * Checks if that sequence is equal to another.
         *
         * @template U Type of the items of the other sequence.
         *
         * @param {Sequence<U>} other The other sequence.
         * @param {(EqualityComparer<T, U> | true)} [equalityComparer] The custom equality comparer to use.
         *
         * @returns {boolean} Both are equal or not.
         */
        sequenceEqual<U>(other: Sequence<U>, equalityComparer?: EqualityComparer<T, U> | true): boolean;
        /**
         * Returns the one and only element of that sequence.
         *
         * @param {Predicate<T>} [predicate] The optional predicate to use.
         *
         * @returns {T} The single element.
         *
         * @throws Element not found or sequence contains for than one (matching) element.
         */
        single(predicate?: Predicate<T>): T;
        /**
         * Tries to return the one and only element.
         *
         * @template U Type of the default value.
         *
         * @param {(Predicate<T>|T)} [predicateOrDefaultValue] The predicate or default value.
         * @param {(T | Symbol)} [defaultValue] The default value. Default: NOT_FOUND
         *                                      If definded: predicateOrDefaultValue MUST be a function in this case!
         *
         * @returns {T|U} The item or the default value.
         *
         * @throws Sequence contains for than one (matching) element.
         */
        singleOrDefault<U = Symbol>(predicateOrDefaultValue?: Predicate<T> | T, defaultValue?: U): T | U;
        /**
         * Skips a maximum number of items.
         *
         * @param {number} [count] The number of items to skip. Default: 1
         *
         * @return {IEnumerable<T>} The new sequence.
         */
        skip(count?: number): IEnumerable<T>;
        /**
         * Takes all elements but the last one.
         *
         * @return {IEnumerable<T>} The new sequence.
         */
        skipLast(): IEnumerable<T>;
        /**
         * Skips items while a condition satisfies.
         *
         * @param {Predicate<T>} [predicate] The predicate to use.
         *
         * @return {IEnumerable<T>} The new sequence.
         */
        skipWhile(predicate: Predicate<T>): IEnumerable<T>;
        /**
         * Calculates the sum of that sequence.
         *
         * @returns {(T | Symbol)} The sum or IS_EMPTY if that sequence is empty.
         */
        sum(seed?: T): T | Symbol;
        /**
         * Takes a maximum number of items.
         *
         * @param {number} [count] The maximum number of items. Default: 1
         *
         * @return {IEnumerable<T>} The new sequence.
         */
        take(count?: number): IEnumerable<T>;
        /**
         * Takes items while a condition satisfies.
         *
         * @param {Predicate<T>} [predicate] The predicate to use.
         *
         * @return {IEnumerable<T>} The new sequence.
         */
        takeWhile(predicate: Predicate<T>): IEnumerable<T>;
        /**
         * Creates a new array from the items of that sequence.
         *
         * @returns {T[]} The sequence as array.
         */
        toArray(): T[];
        /**
         * Converts that sequence to a lookup object.
         *
         * @template TKey Type of the keys.
         * @template U Type of the result object.
         *
         * @param {Selector<T, TKey>} keySelector The key selector.
         * @param {EqualityComparer<TKey>} [keyEqualityComparer] The custom equality comparer for the keys.
         *
         * @returns U The lookup object
         */
        toLookup<TKey extends PropertyKey, U = any>(keySelector: Selector<T, TKey>, keyEqualityComparer?: EqualityComparer<TKey>): U;
        /**
         * Wraps the items of that sequence to an object.
         *
         * @template TResult Type of the result.
         * @template TKey Type of the keys.
         *
         * @param {(item: T, index: number) => TKey} [keySelector] The selector for the keys.
         *
         * @returns TResult The new object.
         */
        toObject<TResult = any, TKey extends PropertyKey = number>(keySelector?: (item: T, index: number) => TKey): TResult;
        /**
         * Produces the union of that sequence and another.
         *
         * @param {Sequence<T>} second The other sequence.
         * @param {EqualityComparer<T>|true} [comparer] The optional equality comparer to use.
         *
         * @returns {IEnumerable<T>} The new sequence.
         */
        union(second: Sequence<T>, comparer?: EqualityComparer<T> | true): IEnumerable<T>;
        /**
         * Filters the items of that sequence.
         *
         * @param {Predicate<T>} predicate The predicate to use.
         *
         * @return {IEnumerable<T>} The filtered sequence.
         */
        where(predicate: Predicate<T>): IEnumerable<T>;
        /**
         * Applies a specified function to the corresponding elements of that sequence
         * and another, producing a sequence of the results.
         *
         * @template U Type of the other sequence.
         * @template TResult The result type.
         *
         * @param {Sequence<U>} second The other sequence.
         * @param {(x: T, y: U, index: number) => TResult} resultSelector The selector for the result item.
         *
         * @returns {IEnumerable<TResult>} The "zipped" sequence.
         */
        zip<U, TResult>(second: Sequence<U>, resultSelector: (x: T, y: U, index: number) => TResult): IEnumerable<TResult>;
    }
    /**
     * Describes a grouping.
     *
     * @template T Type of the items.
     * @template TKey Type of the key.
     */
    interface IGrouping<TKey, T> extends IEnumerable<T> {
        /**
         * Gets the key.
         */
        readonly key: TKey;
    }
    /**
     * Describes an ordered sequence.
     */
    interface IOrderedEnumerable<T> extends IEnumerable<T> {
        /**
         * Performs a subsequent ordering of the elements in that sequence in ascending order,
         * using the values itself as keys.
         *
         * @param {Comparer<T>} [comparer] The custom key comparer to use.
         *
         * @return {IOrderedEnumerable<T>} The new sequence.
         */
        then(comparer?: Comparer<T>): IOrderedEnumerable<T>;
        /**
         * Performs a subsequent ordering of the elements in that sequence in ascending order, according to a key.
         *
         * @template U Type of the keys.
         *
         * @param any selector The key selector.
         * @param {Comparer<U>} [comparer] The custom key comparer to use.
         *
         * @return {IOrderedEnumerable<T>} The new sequence.
         */
        thenBy<U>(selector: Selector<T, U>, comparer?: Comparer<U>): IOrderedEnumerable<T>;
        /**
         * Performs a subsequent ordering of the elements in that sequence in descending order, according to a key.
         *
         * @template U Type of the keys.
         *
         * @param any selector The key selector.
         * @param {Comparer<U>} [comparer] The custom key comparer to use.
         *
         * @return {IOrderedEnumerable<T>} The new sequence.
         */
        thenByDescending<U>(selector: Selector<T, U>, comparer?: Comparer<U>): IOrderedEnumerable<T>;
        /**
         * Performs a subsequent ordering of the elements in that sequence in descending order,
         * using the values as keys.
         *
         * @param {Comparer<T>} [comparer] The custom key comparer to use.
         *
         * @return {IOrderedEnumerable<T>} The new sequence.
         */
        thenDescending(comparer?: Comparer<T>): IOrderedEnumerable<T>;
    }
    /**
     * A basic sequence.
     */
    abstract class EnumerableBase<T> implements IEnumerable<T> {
        /**
         * Stores the current iterator result.
         */
        protected _current: IteratorResult<T>;
        /**
         * Stores the current index.
         */
        protected _index: number;
        /** @inheritdoc */
        [Symbol.iterator](): Iterator<T>;
        /** @inheritdoc */
        aggregate<TAccumulate = T, TResult = T>(func: (accumulator: TAccumulate, item: T) => TAccumulate, seed?: TAccumulate, resultSelector?: (accumulator: TAccumulate) => TResult): TResult;
        /** @inheritdoc */
        all(predicate: Predicate<T>): boolean;
        /** @inheritdoc */
        any(predicate?: Predicate<T>): boolean;
        /** @inheritdoc */
        async(action: AsyncAction<T>, previousValue?: any): Promise<any>;
        /** @inheritdoc */
        average(selector?: Selector<T, number>): number | Symbol;
        /** @inheritdoc */
        readonly canReset: boolean;
        /** @inheritdoc */
        cast<U>(type?: string): IEnumerable<U>;
        /** @inheritdoc */
        clone<U = T>(count?: number, itemSelector?: Selector<T, U>): IEnumerable<IEnumerable<U>>;
        /**
         * @see concatArray()
         */
        protected cloneInner<U>(count: number, itemSelector: Selector<T, U>): IterableIterator<any>;
        /** @inheritdoc */
        concat(...args: Sequence<T>[]): IEnumerable<T>;
        /** @inheritdoc */
        concatArray(sequences: ArrayLike<Sequence<T>>): IEnumerable<T>;
        /**
         * @see concatArray()
         */
        protected concatArrayInner(sequences: ArrayLike<Sequence<T>>): IterableIterator<T>;
        /** @inheritdoc */
        contains<U>(item: U, comparer?: EqualityComparer<T, U> | true): boolean;
        /** @inheritdoc */
        count(predicate?: Predicate<T>): number;
        /** @inheritdoc */
        readonly current: IteratorResult<T>;
        /** @inheritdoc */
        defaultIfEmpty(...defaultItems: T[]): IEnumerable<T>;
        /**
         * @see defaultIfEmpty()
         */
        protected defaultIfEmptyInner(defaultItems: T[]): IterableIterator<T>;
        /** @inheritdoc */
        defaultSequenceIfEmpty(defaultSequence: Sequence<T>): IEnumerable<T>;
        /**
         * @see defaultIfEmpty()
         */
        protected defaultSequenceIfEmptyInner(defaultSequence: Sequence<T>): IterableIterator<T>;
        /** @inheritdoc */
        distinct(comparer?: EqualityComparer<T> | true): IEnumerable<T>;
        /** @inheritdoc */
        distinctBy<U>(selector: Selector<T, U>, comparer?: EqualityComparer<U> | true): IEnumerable<T>;
        /**
         * @see distinct()
         */
        protected distinctByInner<U>(selector: Selector<T, U>, comparer: EqualityComparer<U>): IterableIterator<T>;
        /** @inheritdoc */
        each(action: EachAction<T>): this;
        /** @inheritdoc */
        elementAt(index: number): T;
        /** @inheritdoc */
        elementAtOrDefault<U = Symbol>(index: number, defaultValue?: U): T | U;
        /** @inheritdoc */
        except(second: Sequence<T>, comparer?: EqualityComparer<T> | true): IEnumerable<T>;
        /**
         * @see except()
         */
        protected exceptInner(second: T[], comparer: EqualityComparer<T>): IterableIterator<T>;
        /** @inheritdoc */
        first(predicate?: Predicate<T>): T;
        /** @inheritdoc */
        firstOrDefault<U = Symbol>(predicateOrDefaultValue?: Predicate<T> | T, defaultValue?: U): T | U;
        /** @inheritdoc */
        forEach(action: EachAction<T>): this;
        /** @inheritdoc */
        groupBy<TKey>(keySelector: Selector<T, TKey>, keyEqualityComparer?: EqualityComparer<TKey>): IEnumerable<IGrouping<TKey, T>>;
        /**
         * @see groupBy()
         */
        protected groupByInner<TKey>(keySelector: Selector<T, TKey>, keyEqualityComparer: EqualityComparer<TKey>): IterableIterator<Grouping<TKey, T>>;
        /** @inheritdoc */
        groupJoin<TInner = T, TOuterKey = TInnerKey | T, TInnerKey = TOuterKey | TInner, TResult = JoinedItems<T, IEnumerable<TInner>>>(inner: Sequence<TInner>, outerKeySelector?: Selector<T, TOuterKey>, innerKeySelector?: Selector<TInner, TInnerKey>, resultSelector?: (outer: T, inner: IEnumerable<TInner>) => TResult, keyEqualityComparer?: EqualityComparer<TOuterKey, TInnerKey> | true): IEnumerable<TResult>;
        /**
         * @see groupJoin()
         */
        protected groupJoinInner<TInner, TOuterKey, TInnerKey, TResult>(inner: IEnumerable<TInner>, outerKeySelector: Selector<T, TOuterKey>, innerKeySelector: Selector<TInner, TInnerKey>, resultSelector: (outer: T, inner: IEnumerable<TInner>) => TResult, keyEqualityComparer: EqualityComparer<TOuterKey, TInnerKey>): IterableIterator<TResult>;
        /** @inheritdoc */
        readonly index: number;
        /** @inheritdoc */
        indexOf<U>(item: U, comparer?: EqualityComparer<T, U> | true): number;
        /** @inheritdoc */
        intersect(second: Sequence<T>, comparer?: EqualityComparer<T> | true): IEnumerable<T>;
        /**
         * @see intersect()
         */
        protected intersectInner(second: T[], comparer: EqualityComparer<T>): IterableIterator<T>;
        /** @inheritdoc */
        join<TInner = T, TOuterKey = TInnerKey | T, TInnerKey = TOuterKey | TInner, TResult = JoinedItems<T, TInner>>(inner: Sequence<TInner>, outerKeySelector?: Selector<T, TOuterKey>, innerKeySelector?: Selector<TInner, TInnerKey>, resultSelector?: (outer: T, inner: TInner) => TResult, keyEqualityComparer?: EqualityComparer<TOuterKey, TInnerKey> | true): IEnumerable<TResult>;
        /**
         * @see join()
         */
        protected joinInner<TInner, TOuterKey, TInnerKey, TResult>(inner: IEnumerable<TInner>, outerKeySelector: Selector<T, TOuterKey>, innerKeySelector: Selector<TInner, TInnerKey>, resultSelector: (outer: T, inner: TInner) => TResult, keyEqualityComparer: EqualityComparer<TOuterKey, TInnerKey>): IterableIterator<TResult>;
        /** @inheritdoc */
        joinToString(separator?: any): string;
        /** @inheritdoc */
        last(predicate?: Predicate<T>): T;
        /** @inheritdoc */
        lastIndexOf<U>(item: U, comparer?: EqualityComparer<T, U> | true): number;
        /** @inheritdoc */
        lastOrDefault<U = Symbol>(predicateOrDefaultValue?: Predicate<T> | T, defaultValue?: U): T | U;
        /** @inheritdoc */
        makeResettable(): IEnumerable<T>;
        /** @inheritdoc */
        max<U = T>(valueSelector?: Selector<T, U>, comparer?: Comparer<U>): T | Symbol;
        /** @inheritdoc */
        min<U = T>(valueSelector?: Selector<T, U>, comparer?: Comparer<U>): T | Symbol;
        /** @inheritdoc */
        abstract next(value?: any): IteratorResult<T>;
        /** @inheritdoc */
        noNAN(checkForInt?: boolean): IEnumerable<T>;
        /** @inheritdoc */
        notEmpty(): IEnumerable<T>;
        /** @inheritdoc */
        ofType<U = any>(type: string): IEnumerable<U>;
        /** @inheritdoc */
        order(comparer?: Comparer<T>): IOrderedEnumerable<T>;
        /** @inheritdoc */
        orderBy<U>(selector: Selector<T, U>, comparer?: Comparer<U>): IOrderedEnumerable<T>;
        /** @inheritdoc */
        orderByDescending<U>(selector: Selector<T, U>, comparer?: Comparer<U>): IOrderedEnumerable<T>;
        /** @inheritdoc */
        orderDescending(comparer?: Comparer<T>): IOrderedEnumerable<T>;
        /** @inheritdoc */
        product(): T | Symbol;
        /** @inheritdoc */
        pushTo(stack: Stack<T>): this;
        /** @inheritdoc */
        reset(): this;
        /** @inheritdoc */
        reverse<U = T>(selector?: Selector<T, U>): IOrderedEnumerable<T>;
        /** @inheritdoc */
        select<U>(selector: Selector<T, U>): IEnumerable<U>;
        /** @inheritdoc */
        selectMany<U>(selector: Selector<T, Sequence<U>>): IEnumerable<U>;
        /**
         * @see selectMany()
         */
        protected selectManyInner<U>(selector: Selector<T, Sequence<U>>): IterableIterator<U>;
        /** @inheritdoc */
        sequenceEqual<U>(other: Sequence<U>, equalityComparer?: EqualityComparer<T, U> | true): boolean;
        /** @inheritdoc */
        single(predicate?: Predicate<T>): T;
        /** @inheritdoc */
        singleOrDefault<U = Symbol>(predicateOrDefaultValue?: Predicate<T> | T, defaultValue?: U): T | U;
        /** @inheritdoc */
        skip(count?: number): IEnumerable<T>;
        /** @inheritdoc */
        skipLast(): IEnumerable<T>;
        /**
         * @see skipLast()
         */
        protected skipLastInner(): IterableIterator<T>;
        /** @inheritdoc */
        skipWhile(predicate: Predicate<T>): IEnumerable<T>;
        /**
         * @see takeWhile()
         */
        protected skipWhileInner(predicate: Predicate<T>): IterableIterator<T>;
        /** @inheritdoc */
        sum(): T | Symbol;
        /** @inheritdoc */
        take(count?: number): IEnumerable<T>;
        /** @inheritdoc */
        takeWhile(predicate: Predicate<T>): IEnumerable<T>;
        /**
         * @see takeWhile()
         */
        protected takeWhileInner(predicate: Predicate<T>): IterableIterator<T>;
        /** @inheritdoc */
        toArray(): T[];
        /** @inheritdoc */
        toLookup<TKey extends PropertyKey, U = any>(keySelector: Selector<T, TKey>, keyEqualityComparer?: EqualityComparer<TKey>): U;
        /** @inheritdoc */
        toObject<TResult = any, TKey extends PropertyKey = number>(keySelector?: (item: T, index: number) => TKey): TResult;
        /** @inheritdoc */
        union(second: Sequence<T>, comparer?: EqualityComparer<T> | true): IEnumerable<T>;
        /** @inheritdoc */
        where(predicate: Predicate<T>): IEnumerable<T>;
        /**
         * @see where()
         */
        protected whereInner(predicate: Predicate<T>): IterableIterator<T>;
        /** @inheritdoc */
        zip<U, TResult>(second: Sequence<U>, resultSelector: (x: T, y: U) => TResult): IEnumerable<TResult>;
        /**
         * @see zip()
         */
        protected zipInner<U, TResult>(second: Iterator<U>, resultSelector: (x: T, y: U, index: number) => TResult): IterableIterator<TResult>;
    }
    /**
     * Wraps a sequence.
     *
     * @template T Type of the items.
     */
    class EnumerableWrapper<T> extends EnumerableBase<T> {
        /**
         * The wrapped sequence.
         */
        protected _sequence: IEnumerable<T>;
        /**
         * Intializes a new instance of that class.
         *
         * @param {IEnumerable<T>} [seq] The sequence to wrap.
         */
        constructor(seq?: IEnumerable<T>);
        /** @inheritdoc */
        readonly canReset: boolean;
        /** @inheritdoc */
        readonly current: IteratorResult<T>;
        /** @inheritdoc */
        next(): IteratorResult<T>;
        /** @inheritdoc */
        reset(): this;
    }
    /**
     * A sequence based on an Iterator<T>.
     */
    class IteratorEnumerable<T> extends EnumerableBase<T> {
        /**
         * Stores the inner iterator.
         */
        protected _iterator: Iterator<T>;
        /**
         * Initializes a new instance of that class.
         *
         * @param {Iterator<T>} [iterator] The underlying iterator.
         */
        constructor(iterator?: Iterator<T>);
        /** @inheritdoc */
        next(value?: any): IteratorResult<T>;
    }
    /**
     * A sequence based on an array.
     */
    class ArrayEnumerable<T> extends EnumerableBase<T> {
        /**
         * Stores the underlying array.
         */
        protected _array: ArrayLike<T>;
        /**
         * Initializes a new instance of that class.
         *
         * @param {ArrayLike<T>} [arr] The underlying array.
         */
        constructor(arr?: ArrayLike<T>);
        /** @inheritdoc */
        readonly canReset: boolean;
        /** @inheritdoc */
        next(): IteratorResult<T>;
        /** @inheritdoc */
        reset(): this;
    }
    /**
     * A grouping.
     *
     * @template T Type of the items.
     * @template TKey Type of the key.
     */
    class Grouping<TKey, T> extends EnumerableWrapper<T> implements IGrouping<TKey, T> {
        /**
         * Stores the key.
         */
        protected _key: TKey;
        /**
         * Initializes a new instance of that class.
         *
         * @param {TKey} key The key.
         * @param {IEnumerable} seq The items of the grouping.
         */
        constructor(key: TKey, seq: IEnumerable<T>);
        /** @inheritdoc */
        readonly key: TKey;
    }
    /**
     * An ordered sequence.
     *
     * @template T Type of the items.
     * @template U Type of the sort keys.
     */
    class OrderedEnumerable<T, U = T> extends EnumerableWrapper<T> implements IOrderedEnumerable<T> {
        /**
         * Stores the items in the original order.
         */
        protected _originalItems: T[];
        /**
         * Stores the comparer for the sort keys.
         */
        protected _orderComparer: Comparer<U, U>;
        /**
         * Stores the selector for the keys.
         */
        protected _orderSelector: Selector<T, U>;
        /**
         * Initializes a new instance of that class.
         *
         * @param {IEnumerable<T>} seq The source sequence.
         * @param {Selector<T,U>} selector The selector for the sort values.
         * @param {Comparer<U,U>} comparer The comparer to use.
         */
        constructor(seq: IEnumerable<T>, selector: Selector<T, U>, comparer: Comparer<U, U>);
        /**
         * Gets the comparer.
         */
        readonly comparer: Comparer<U, U>;
        /**
         * Gets the selector.
         */
        readonly selector: (x: T) => any;
        /** @inheritdoc */
        then(comparer?: Comparer<T>): IOrderedEnumerable<T>;
        /** @inheritdoc */
        thenBy<U>(selector: Selector<T, U>, comparer?: Comparer<U, U>): IOrderedEnumerable<T>;
        /** @inheritdoc */
        thenByDescending<U>(selector: Selector<T, U>, comparer?: Comparer<U, U>): IOrderedEnumerable<T>;
        /** @inheritdoc */
        thenDescending(comparer?: Comparer<T>): IOrderedEnumerable<T>;
    }
    /**
     * Builds a sequence.
     *
     * @template T Type of the items.
     *
     * @param {CancelableFactory<T>} factory The factory function.
     * @param {number} [count] The maximum number of items.
     *
     * @returns {IEnumerable<T>}
     */
    function build<T>(factory: CancelableFactory<T>, count?: number): IEnumerable<T>;
    /**
     * Builds a flatten sequence of sequences.
     *
     * @template T Type of the items.
     * @param {CancelableFactory<Sequence<T>>} factory The factory.
     * @param {number} [count] The maximum number of invocations.
     *
     * @returns {IEnumerable<T>} The flatten list of items.
     */
    function buildMany<T>(factory: CancelableFactory<Sequence<T>>, count?: number): IEnumerable<T>;
    /**
     * Creates a new sequence from a list of items.
     *
     * @template T Type of the items.
     *
     * @param {...T[]} items The items for the sequence.
     *
     * @returns {IEnumerable<T>} The new sequence.
     */
    function create<T = any>(...items: T[]): IEnumerable<T>;
    /**
     * Creates an empty sequence.
     *
     * @template T The type of the sequence.
     *
     * @returns {IEnumerable<T>} The new, empty sequence.
     */
    function empty<T = any>(): IEnumerable<T>;
    /**
     * Creates a new sequence.
     *
     * @param {Sequence<T>} seq The input data.
     *
     * @return {IEnumerable<T>} The new sequence.
     */
    function from<T>(seq?: Sequence<T>): IEnumerable<T>;
    /**
     * Creates a new sequence from the string representation of a value.
     *
     * @param {any} val The value.
     *
     * @return {IEnumerable<string>} The new sequence.
     */
    function fromString(val: any): IEnumerable<string>;
    /**
     * Checks if a value represents the IS_EMPTY symbol.
     *
     * @param {any} val The value to check.
     *
     * @returns {boolean} Is IS_EMPTY symbol or not.
     */
    function isEmpty(val: any): boolean;
    /**
     * Checks if a value represents the NOT_FOUND symbol.
     *
     * @param {any} val The value to check.
     *
     * @returns {boolean} Is NOT_FOUND symbol or not.
     */
    function notFound(val: any): boolean;
    /**
     * Creates a range of numbers.
     *
     * @param {number} start The start value.
     * @param {number} [count] The meximum number of values.
     *
     * @returns {IEnumerable<number>} The new sequence.
     */
    function range(start: number, count?: number): IEnumerable<number>;
    /**
     * Creates a range of numbers.
     *
     * @param {T} item The item to repeat.
     * @param {number} [count] The maximum number of items.
     *
     * @returns {IEnumerable<number>} The new sequence.
     */
    function repeat<T>(item: T, count?: number): IEnumerable<T>;
}
export = Enumerable;
