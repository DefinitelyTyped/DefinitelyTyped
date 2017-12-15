// Type definitions for ramda 0.25
// Project: https://github.com/donnut/typescript-ramda
// Definitions by: Erwin Poeze <https://github.com/donnut>
//                 Matt DeKrey <https://github.com/mdekrey>
//                 Matt Dziuban <https://github.com/mrdziuban>
//                 Stephen King <https://github.com/sbking>
//                 Alejandro Fernandez Haro <https://github.com/afharo>
//                 Vítor Castro <https://github.com/teves-castro>
//                 Jordan Quagliatini <https://github.com/1M0reBug>
//                 Simon Højberg <https://github.com/hojberg>
//                 Charles-Philippe Clermont <https://github.com/charlespwd>
//                 Samson Keung <https://github.com/samsonkeung>
//                 Angelo Ocana <https://github.com/angeloocana>
//                 Miika Hänninen <https://github.com/googol>
//                 Nikita Moshensky <https://github.com/moshensky>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

declare let R: R.Static;

declare namespace R {
    type Ord = number | string | boolean;

    type Path = ReadonlyArray<(number | string)>;

    interface Functor<T> {
        map<U>(fn: (t: T) => U): Functor<U>;
    }

    interface KeyValuePair<K, V> extends Array<K | V> {
        0: K;
        1: V;
    }

    interface ArrayLike {
        nodeType: number;
    }

    type Arity0Fn = () => any;

    type Arity1Fn = (a: any) => any;

    type Arity2Fn = (a: any, b: any) => any;

    interface ObjFunc {
        [index: string]: (...a: any[]) => any;
    }

    interface ObjFunc2 {
        [index: string]: (x: any, y: any) => boolean;
    }

    type Pred = (...a: any[]) => boolean;

    type ObjPred = (value: any, key: string) => boolean;

    interface Dictionary<T> {
        [index: string]: T;
    }

    interface CharList extends String {
        push(x: string): void;
    }

    interface Lens {
        <T, U>(obj: T): U;
        set<T, U>(str: string, obj: T): U;
    }

    interface Filter<T> {
      (list: ReadonlyArray<T>): T[];
      (obj: Dictionary<T>): Dictionary<T>;
    }

    type Evolver<T> =
        | ((x: T) => T)
        | { [K in keyof T]?: Evolver<T[K]> };

    // @see https://gist.github.com/donnut/fd56232da58d25ceecf1, comment by @albrow
    interface CurriedTypeGuard2<T1, T2, R extends T2> {
        (t1: T1): (t2: T2) => t2 is R;
        (t1: T1, t2: T2): t2 is R;
    }

    interface CurriedTypeGuard3<T1, T2, T3, R extends T3> {
        (t1: T1): CurriedTypeGuard2<T2, T3, R>;
        (t1: T1, t2: T2): (t3: T3) => t3 is R;
        (t1: T1, t2: T2, t3: T3): t3 is R;
    }

    interface CurriedTypeGuard4<T1, T2, T3, T4, R extends T4> {
        (t1: T1): CurriedTypeGuard3<T2, T3, T4, R>;
        (t1: T1, t2: T2): CurriedTypeGuard2<T3, T4, R>;
        (t1: T1, t2: T2, t3: T3): (t4: T4) => t4 is R;
        (t1: T1, t2: T2, t3: T3, t4: T4): t4 is R;
    }

    interface CurriedTypeGuard5<T1, T2, T3, T4, T5, R extends T5> {
        (t1: T1): CurriedTypeGuard4<T2, T3, T4, T5, R>;
        (t1: T1, t2: T2): CurriedTypeGuard3<T3, T4, T5, R>;
        (t1: T1, t2: T2, t3: T3): CurriedTypeGuard2<T4, T5, R>;
        (t1: T1, t2: T2, t3: T3, t4: T4): (t5: T5) => t5 is R;
        (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5): t5 is R;
    }

    interface CurriedTypeGuard6<T1, T2, T3, T4, T5, T6, R extends T6> {
        (t1: T1): CurriedTypeGuard5<T2, T3, T4, T5, T6, R>;
        (t1: T1, t2: T2): CurriedTypeGuard4<T3, T4, T5, T6, R>;
        (t1: T1, t2: T2, t3: T3): CurriedTypeGuard3<T4, T5, T6, R>;
        (t1: T1, t2: T2, t3: T3, t4: T4): CurriedTypeGuard2<T5, T6, R>;
        (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5): (t6: T6) => t6 is R;
        (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6): t6 is R;
    }

    interface CurriedFunction2<T1, T2, R> {
        (t1: T1): (t2: T2) => R;
        (t1: T1, t2: T2): R;
    }

    interface CurriedFunction3<T1, T2, T3, R> {
        (t1: T1): CurriedFunction2<T2, T3, R>;
        (t1: T1, t2: T2): (t3: T3) => R;
        (t1: T1, t2: T2, t3: T3): R;
    }

    interface CurriedFunction4<T1, T2, T3, T4, R> {
        (t1: T1): CurriedFunction3<T2, T3, T4, R>;
        (t1: T1, t2: T2): CurriedFunction2<T3, T4, R>;
        (t1: T1, t2: T2, t3: T3): (t4: T4) => R;
        (t1: T1, t2: T2, t3: T3, t4: T4): R;
    }

    interface CurriedFunction5<T1, T2, T3, T4, T5, R> {
        (t1: T1): CurriedFunction4<T2, T3, T4, T5, R>;
        (t1: T1, t2: T2): CurriedFunction3<T3, T4, T5, R>;
        (t1: T1, t2: T2, t3: T3): CurriedFunction2<T4, T5, R>;
        (t1: T1, t2: T2, t3: T3, t4: T4): (t5: T5) => R;
        (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5): R;
    }

    interface CurriedFunction6<T1, T2, T3, T4, T5, T6, R> {
        (t1: T1): CurriedFunction5<T2, T3, T4, T5, T6, R>;
        (t1: T1, t2: T2): CurriedFunction4<T3, T4, T5, T6, R>;
        (t1: T1, t2: T2, t3: T3): CurriedFunction3<T4, T5, T6, R>;
        (t1: T1, t2: T2, t3: T3, t4: T4): CurriedFunction2<T5, T6, R>;
        (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5): (t6: T6) => R;
        (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6): R;
    }

    interface Reduced {
        [index: number]: any;
        [index: string]: any;
    }

    interface Static {
        /**
         * Adds two numbers (or strings). Equivalent to a + b but curried.
         */
        add(a: number, b: number): number;
        add(a: string, b: string): string;
        add(a: number): (b: number) => number;
        add(a: string): (b: string) => string;

        /**
         * Creates a new list iteration function from an existing one by adding two new parameters to its callback
         * function: the current index, and the entire list.
         */
        addIndex<T, U>(fn: (f: (item: T) => U, list: T[]) => U[]): CurriedFunction2<(item: T, idx: number, list?: T[]) => U, ReadonlyArray<T>, U[]>;
        /* Special case for forEach */
        addIndex<T>(fn: (f: (item: T) => void, list: T[]) => T[]): CurriedFunction2<(item: T, idx: number, list?: T[]) => void, ReadonlyArray<T>, T[]>;
        /* Special case for reduce */
        addIndex<T, U>(fn: (f: (acc: U, item: T) => U, aci: U, list: T[]) => U): CurriedFunction3<(acc: U, item: T, idx: number, list?: T[]) => U, U, ReadonlyArray<T>, U>;

        /**
         * Applies a function to the value at the given index of an array, returning a new copy of the array with the
         * element at the given index replaced with the result of the function application.
         */
        adjust<T>(fn: (a: T) => T, index: number, list: ReadonlyArray<T>): T[];
        adjust<T>(fn: (a: T) => T, index: number): (list: ReadonlyArray<T>) => T[];

        /**
         * Returns true if all elements of the list match the predicate, false if there are any that don't.
         */
        all<T>(fn: (a: T) => boolean, list: ReadonlyArray<T>): boolean;
        all<T>(fn: (a: T) => boolean): (list: ReadonlyArray<T>) => boolean;

        /**
         * Given a list of predicates, returns a new predicate that will be true exactly when all of them are.
         */
        allPass(preds: ReadonlyArray<Pred>): Pred;

        /**
         * Returns a function that always returns the given value.
         */
        always<T>(val: T): () => T;

        /**
         * A function that returns the first argument if it's falsy otherwise the second argument. Note that this is
         * NOT short-circuited, meaning that if expressions are passed they are both evaluated.
         */
        and<T extends { and?: ((...a: any[]) => any); } | number | boolean | string>(fn1: T, val2: any): boolean;
        and<T extends { and?: ((...a: any[]) => any); } | number | boolean | string>(fn1: T): (val2: any) => boolean;

        /**
         * Returns true if at least one of elements of the list match the predicate, false otherwise.
         */
        any<T>(fn: (a: T) => boolean, list: ReadonlyArray<T>): boolean;
        any<T>(fn: (a: T) => boolean): (list: ReadonlyArray<T>) => boolean;

        /**
         * Given a list of predicates returns a new predicate that will be true exactly when any one of them is.
         */
        anyPass(preds: ReadonlyArray<Pred>): Pred;

        /**
         * ap applies a list of functions to a list of values.
         */
        ap<T, U>(fns: Array<((a: T) => U)>, vs: ReadonlyArray<T>): U[];
        ap<T, U>(fns: Array<((a: T) => U)>): (vs: ReadonlyArray<T>) => U[];

        /**
         * Returns a new list, composed of n-tuples of consecutive elements If n is greater than the length of the list,
         * an empty list is returned.
         */
        aperture<T>(n: number, list: ReadonlyArray<T>): T[][];
        aperture(n: number): <T>(list: ReadonlyArray<T>) => T[][];

        /**
         * Returns a new list containing the contents of the given list, followed by the given element.
         */
        append<T>(el: T, list: ReadonlyArray<T>): T[];
        append<T>(el: T): <T>(list: ReadonlyArray<T>) => T[];

        /**
         * Applies function fn to the argument list args. This is useful for creating a fixed-arity function from
         * a variadic function. fn should be a bound function if context is significant.
         */
        apply<T, U, TResult>(fn: (arg0: T, ...args: T[]) => TResult, args: ReadonlyArray<U>): TResult;
        apply<T, TResult>(fn: (arg0: T, ...args: T[]) => TResult): <U>(args: ReadonlyArray<U>) => TResult;

        /**
         * Given a spec object recursively mapping properties to functions, creates a function producing an object
         * of the same structure, by mapping each property to the result of calling its associated function with
         * the supplied arguments.
         */
        applySpec<T>(obj: any): (...args: any[]) => T;

        /**
         * Takes a value and applies a function to it.
         * This function is also known as the thrush combinator.
         */
        applyTo<T, U>(el: T, fn: (t: T) => U): U;
        applyTo<T>(el: T): <U>(fn: (t: T) => U) => U;

        /**
         * Makes an ascending comparator function out of a function that returns a value that can be compared with < and >.
         */
        ascend<T>(fn: (obj: T) => any, a: T, b: T): number;
        ascend<T>(fn: (obj: T) => any): (a: T, b: T) => number;

        /**
         * Makes a shallow clone of an object, setting or overriding the specified property with the given value.
         */
        assoc<T, U, K extends string>(prop: K, val: T, obj: U): Record<K, T> & U;
        assoc<K extends string>(prop: K): <T, U>(val: T, obj: U) => Record<K, T> & U;
        assoc<T, K extends string>(prop: K, val: T): <U>(obj: U) => Record<K, T> & U;

        /**
         * Makes a shallow clone of an object, setting or overriding the nodes required to create the given path, and
         * placing the specific value at the tail end of that path.
         */
        assocPath<T, U>(path: Path, val: T, obj: U): U;
        assocPath<T, U>(path: Path, val: T): (obj: U) => U;
        assocPath<T, U>(path: Path): CurriedFunction2<T, U, U>;

        /**
         * Wraps a function of any arity (including nullary) in a function that accepts exactly 2
         * parameters. Any extraneous parameters will not be passed to the supplied function.
         */
        binary(fn: (...args: any[]) => any): (...a: any[]) => any;

        /**
         * Creates a function that is bound to a context. Note: R.bind does not provide the additional argument-binding
         * capabilities of Function.prototype.bind.
         */
        bind<T>(thisObj: T, fn: (...args: any[]) => any): (...args: any[]) => any;

        /**
         * A function wrapping calls to the two functions in an && operation, returning the result of the first function
         * if it is false-y and the result of the second function otherwise. Note that this is short-circuited, meaning
         * that the second function will not be invoked if the first returns a false-y value.
         */
        both(pred1: Pred, pred2: Pred): Pred;
        both(pred1: Pred): (pred2: Pred) => Pred;

        /**
         * Returns the result of calling its first argument with the remaining arguments. This is occasionally useful
         * as a converging function for R.converge: the left branch can produce a function while the right branch
         * produces a value to be passed to that function as an argument.
         */
        call(fn: (...args: any[]) => (...args: any[]) => any, ...args: any[]): any;

        /**
         * `chain` maps a function over a list and concatenates the results.
         * This implementation is compatible with the Fantasy-land Chain spec
         */
        chain<T, U>(fn: (n: T) => U[], list: ReadonlyArray<T>): U[];
        chain<T, U>(fn: (n: T) => U[]): (list: ReadonlyArray<T>) => U[];

        /**
         * Restricts a number to be within a range.
         * Also works for other ordered types such as Strings and Date
         */
        clamp<T>(min: T, max: T, value: T): T;
        clamp<T>(min: T, max: T): (value: T) => T;
        clamp<T>(min: T): (max: T, value: T) => T;
        clamp<T>(min: T): (max: T) => (value: T) => T;

        /**
         * Creates a deep copy of the value which may contain (nested) Arrays and Objects, Numbers, Strings, Booleans and Dates.
         */
        clone<T>(value: T): T;
        clone<T>(value: ReadonlyArray<T>): T[];

        /**
         * Makes a comparator function out of a function that reports whether the first element is less than the second.
         */
        // comparator(pred: (a: any, b: any) => boolean): (x: number, y: number) => number;
        comparator<T>(pred: (a: T, b: T) => boolean): (x: T, y: T) => number;

        /**
         * Takes a function f and returns a function g such that:
         * - applying g to zero or more arguments will give true if applying the same arguments to f gives
         *   a logical false value; and
         * - applying g to zero or more arguments will give false if applying the same arguments to f gives
         *   a logical true value.
         */
        complement(pred: (...args: any[]) => boolean): (...args: any[]) => boolean;

        /**
         * Performs right-to-left function composition. The rightmost function may have any arity; the remaining
         * functions must be unary.
         */
        compose<V0, T1>(fn0: (x0: V0) => T1): (x0: V0) => T1;
        compose<V0, V1, T1>(fn0: (x0: V0, x1: V1) => T1): (x0: V0, x1: V1) => T1;
        compose<V0, V1, V2, T1>(fn0: (x0: V0, x1: V1, x2: V2) => T1): (x0: V0, x1: V1, x2: V2) => T1;

        compose<V0, T1, T2>(fn1: (x: T1) => T2, fn0: (x0: V0) => T1): (x0: V0) => T2;
        compose<V0, V1, T1, T2>(fn1: (x: T1) => T2, fn0: (x0: V0, x1: V1) => T1): (x0: V0, x1: V1) => T2;
        compose<V0, V1, V2, T1, T2>(fn1: (x: T1) => T2, fn0: (x0: V0, x1: V1, x2: V2) => T1): (x0: V0, x1: V1, x2: V2) => T2;

        compose<V0, T1, T2, T3>(fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x: V0) => T1): (x: V0) => T3;
        compose<V0, V1, T1, T2, T3>(fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x0: V0, x1: V1) => T1): (x0: V0, x1: V1) => T3;
        compose<V0, V1, V2, T1, T2, T3>(fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x0: V0, x1: V1, x2: V2) => T1): (x0: V0, x1: V1, x2: V2) => T3;

        compose<V0, T1, T2, T3, T4>(fn3: (x: T3) => T4, fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x: V0) => T1): (x: V0) => T4;
        compose<V0, V1, T1, T2, T3, T4>(fn3: (x: T3) => T4, fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x0: V0, x1: V1) => T1): (x0: V0, x1: V1) => T4;
        compose<V0, V1, V2, T1, T2, T3, T4>(fn3: (x: T3) => T4, fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x0: V0, x1: V1, x2: V2) => T1): (x0: V0, x1: V1, x2: V2) => T4;

        compose<V0, T1, T2, T3, T4, T5>(fn4: (x: T4) => T5, fn3: (x: T3) => T4, fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x: V0) => T1): (x: V0) => T5;
        compose<V0, V1, T1, T2, T3, T4, T5>(fn4: (x: T4) => T5, fn3: (x: T3) => T4, fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x0: V0, x1: V1) => T1): (x0: V0, x1: V1) => T5;
        compose<V0, V1, V2, T1, T2, T3, T4, T5>(fn4: (x: T4) => T5, fn3: (x: T3) => T4, fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x0: V0, x1: V1, x2: V2) => T1): (x0: V0, x1: V1, x2: V2) => T5;

        compose<V0, T1, T2, T3, T4, T5, T6>(fn5: (x: T5) => T6, fn4: (x: T4) => T5, fn3: (x: T3) => T4, fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x: V0) => T1): (x: V0) => T6;
        compose<V0, V1, T1, T2, T3, T4, T5, T6>(
            fn5: (x: T5) => T6,
            fn4: (x: T4) => T5,
            fn3: (x: T3) => T4,
            fn2: (x: T2) => T3,
            fn1: (x: T1) => T2,
            fn0: (x0: V0, x1: V1) => T1): (x0: V0, x1: V1) => T6;
        compose<V0, V1, V2, T1, T2, T3, T4, T5, T6>(
            fn5: (x: T5) => T6,
            fn4: (x: T4) => T5,
            fn3: (x: T3) => T4,
            fn2: (x: T2) => T3,
            fn1: (x: T1) => T2,
            fn0: (x0: V0, x1: V1, x2: V2) => T1): (x0: V0, x1: V1, x2: V2) => T6;

        /**
         * TODO composeK
         */

        /**
         * TODO composeP
         */

        /**
         * Returns a new list consisting of the elements of the first list followed by the elements
         * of the second.
         */
        concat<T>(list1: ReadonlyArray<T>, list2: ReadonlyArray<T>): T[];
        concat<T>(list1: ReadonlyArray<T>): (list2: ReadonlyArray<T>) => T[];
        concat(list1: string, list2: string): string;
        concat(list1: string): (list2: string) => string;

        /**
         * Returns a function, fn, which encapsulates if/else-if/else logic. R.cond takes a list of [predicate, transform] pairs.
         * All of the arguments to fn are applied to each of the predicates in turn until one returns a "truthy" value, at which
         * point fn returns the result of applying its arguments to the corresponding transformer. If none of the predicates
         * matches, fn returns undefined.
         */
        cond(fns: ReadonlyArray<[Pred, (...a: any[]) => any]>): (...a: any[]) => any;

        /**
         * Wraps a constructor function inside a curried function that can be called with the same arguments and returns the same type.
         */
        construct(fn: (...a: any[]) => any): (...a: any[]) => any;

        /**
         * Wraps a constructor function inside a curried function that can be called with the same arguments and returns the same type.
         * The arity of the function returned is specified to allow using variadic constructor functions.
         */
        constructN(n: number, fn: (...a: any[]) => any): (...a: any[]) => any;

        /**
         * Returns `true` if the specified item is somewhere in the list, `false` otherwise.
         * Equivalent to `indexOf(a)(list) > -1`. Uses strict (`===`) equality checking.
         */
        contains(a: string, list: string): boolean;
        contains<T>(a: T, list: ReadonlyArray<T>): boolean;
        contains(a: string): (list: string) => boolean;
        contains<T>(a: T): (list: ReadonlyArray<T>) => boolean;

        /**
         * Accepts a converging function and a list of branching functions and returns a new
         * function. When invoked, this new function is applied to some arguments, each branching
         * function is applied to those same arguments. The results of each branching function
         * are passed as arguments to the converging function to produce the return value.
         */
        converge(after: ((...a: any[]) => any), fns: ReadonlyArray<((...a: any[]) => any)>): (...a: any[]) => any;

        /**
         * Counts the elements of a list according to how many match each value
         * of a key generated by the supplied function. Returns an object
         * mapping the keys produced by `fn` to the number of occurrences in
         * the list. Note that all keys are coerced to strings because of how
         * JavaScript objects work.
         */
        countBy<T>(fn: (a: T) => string | number, list: ReadonlyArray<T>): { [index: string]: number };
        countBy<T>(fn: (a: T) => string | number): (list: ReadonlyArray<T>) => { [index: string]: number };

        /**
         * Returns a curried equivalent of the provided function. The curried function has two unusual capabilities.
         * First, its arguments needn't be provided one at a time.
         */
        curry<T1, T2, TResult extends T2>(fn: (a: T1, b: T2) => b is TResult): CurriedTypeGuard2<T1, T2, TResult>;
        curry<T1, T2, T3, TResult extends T3>(fn: (a: T1, b: T2, c: T3) => c is TResult): CurriedTypeGuard3<T1, T2, T3, TResult>;
        curry<T1, T2, T3, T4, TResult extends T4>(fn: (a: T1, b: T2, c: T3, d: T4) => d is TResult): CurriedTypeGuard4<T1, T2, T3, T4, TResult>;
        curry<T1, T2, T3, T4, T5, TResult extends T5>(fn: (a: T1, b: T2, c: T3, d: T4, e: T5) => e is TResult): CurriedTypeGuard5<T1, T2, T3, T4, T5, TResult>;
        curry<T1, T2, T3, T4, T5, T6, TResult extends T6>(fn: (a: T1, b: T2, c: T3, d: T4, e: T5, f: T6) => f is TResult): CurriedTypeGuard6<T1, T2, T3, T4, T5, T6, TResult>;
        curry<T1, T2, TResult>(fn: (a: T1, b: T2) => TResult): CurriedFunction2<T1, T2, TResult>;
        curry<T1, T2, T3, TResult>(fn: (a: T1, b: T2, c: T3) => TResult): CurriedFunction3<T1, T2, T3, TResult>;
        curry<T1, T2, T3, T4, TResult>(fn: (a: T1, b: T2, c: T3, d: T4) => TResult): CurriedFunction4<T1, T2, T3, T4, TResult>;
        curry<T1, T2, T3, T4, T5, TResult>(fn: (a: T1, b: T2, c: T3, d: T4, e: T5) => TResult): CurriedFunction5<T1, T2, T3, T4, T5, TResult>;
        curry<T1, T2, T3, T4, T5, T6, TResult>(fn: (a: T1, b: T2, c: T3, d: T4, e: T5, f: T6) => TResult): CurriedFunction6<T1, T2, T3, T4, T5, T6, TResult>;
        curry(fn: (...a: any[]) => any): (...a: any[]) => any;

        /**
         * Returns a curried equivalent of the provided function, with the specified arity. The curried function has
         * two unusual capabilities. First, its arguments needn't be provided one at a time.
         */
        curryN(length: number, fn: (...args: any[]) => any): (...a: any[]) => any;

        /**
         * Decrements its argument.
         */
        dec(n: number): number;

        /**
         * Returns the second argument if it is not null or undefined. If it is null or undefined, the
         * first (default) argument is returned.
         */
        defaultTo<T, U>(a: T, b: U): T | U;
        defaultTo<T>(a: T): <U>(b: U) => T | U;

        /**
         * Makes a descending comparator function out of a function that returns a value that can be compared with < and >.
         */
        descend<T>(fn: (obj: T) => any, a: T, b: T): number;
        descend<T>(fn: (obj: T) => any): (a: T, b: T) => number;

        /**
         * Finds the set (i.e. no duplicates) of all elements in the first list not contained in the second list.
         */
        difference<T>(list1: ReadonlyArray<T>, list2: ReadonlyArray<T>): T[];
        difference<T>(list1: ReadonlyArray<T>): (list2: ReadonlyArray<T>) => T[];

        /**
         * Finds the set (i.e. no duplicates) of all elements in the first list not contained in the second list.
         * Duplication is determined according to the value returned by applying the supplied predicate to two list
         * elements.
         */
        differenceWith<T>(pred: (a: T, b: T) => boolean, list1: ReadonlyArray<T>, list2: ReadonlyArray<T>): T[];

        /*
         * Returns a new object that does not contain a prop property.
         */
        // It seems impossible to infer the return type, so this may to be specified explicitely
        dissoc<T>(prop: string, obj: any): T;
        dissoc(prop: string): <U>(obj: any) => U;

        /**
         * Makes a shallow clone of an object, omitting the property at the given path.
         */
        dissocPath<T>(path: Path, obj: any): T;
        dissocPath<T>(path: Path): (obj: any) => T;

        /**
         * Divides two numbers. Equivalent to a / b.
         */
        divide(a: number, b: number): number;
        divide(a: number): (b: number) => number;

        /**
         * Returns a new list containing all but the first n elements of the given list.
         */
        drop<T>(n: number, xs: ReadonlyArray<T>): T[];
        drop(n: number, xs: string): string;
        drop<T>(n: number): {
            (xs: string): string;
            (xs: ReadonlyArray<T>): T[];
        };

        /**
         * Returns a list containing all but the last n elements of the given list.
         */
        dropLast<T>(n: number, xs: ReadonlyArray<T>): T[];
        dropLast(n: number, xs: string): string;
        dropLast<T>(n: number): {
            (xs: ReadonlyArray<T>): T[];
            (xs: string): string;
        };

        /**
         * Returns a new list containing all but last then elements of a given list, passing each value from the
         * right to the supplied predicate function, skipping elements while the predicate function returns true.
         */
        dropLastWhile<T>(fn: (a: T) => boolean, list: ReadonlyArray<T>): T[];
        dropLastWhile<T>(fn: (a: T) => boolean): (list: ReadonlyArray<T>) => T[];

        /**
         * Returns a new list containing the last n elements of a given list, passing each value to the supplied
         * predicate function, skipping elements while the predicate function returns true.
         */
        dropWhile<T>(fn: (a: T) => boolean, list: ReadonlyArray<T>): T[];
        dropWhile<T>(fn: (a: T) => boolean): (list: ReadonlyArray<T>) => T[];

        /**
         * A function wrapping calls to the two functions in an || operation, returning the result of the first
         * function if it is truth-y and the result of the second function otherwise. Note that this is
         * short-circuited, meaning that the second function will not be invoked if the first returns a truth-y value.
         */
        either(pred1: Pred, pred2: Pred): Pred;
        either(pred1: Pred): (pred2: Pred) => Pred;

        /**
         * Returns the empty value of its argument's type. Ramda defines the empty value of Array ([]), Object ({}),
         * String (''), and Arguments. Other types are supported if they define <Type>.empty and/or <Type>.prototype.empty.
         * Dispatches to the empty method of the first argument, if present.
         */
        empty<T>(x: T): T;

        /**
         * Checks if a list ends with the provided values
         */
        endsWith(a: string, list: string): boolean;
        endsWith(a: string): (list: string) => boolean;
        endsWith<T>(a: T | ReadonlyArray<T>, list: ReadonlyArray<T>): boolean;
        endsWith<T>(a: T | ReadonlyArray<T>): (list: ReadonlyArray<T>) => boolean;

        /**
         * Takes a function and two values in its domain and returns true if the values map to the same value in the
         * codomain; false otherwise.
         */
        eqBy<T>(fn: (a: T) => T, a: T, b: T): boolean;
        eqBy<T>(fn: (a: T) => T, a: T): (b: T) => boolean;
        eqBy<T>(fn: (a: T) => T): (a: T, b: T) => boolean;
        eqBy<T>(fn: (a: T) => T): (a: T) => (b: T) => boolean;

        /**
         * Reports whether two functions have the same value for the specified property.
         */
        eqProps<T, U>(prop: string, obj1: T, obj2: U): boolean;
        eqProps<P extends string>(prop: P): <T, U>(obj1: Record<P, T>, obj2: Record<P, U>) => boolean;
        eqProps<T>(prop: string, obj1: T): <U>(obj2: U) => boolean;

        /**
         * Returns true if its arguments are equivalent, false otherwise. Dispatches to an equals method if present.
         * Handles cyclical data structures.
         */
        equals<T>(a: T, b: T): boolean;
        equals<T>(a: T): (b: T) => boolean;

        /**
         * Creates a new object by evolving a shallow copy of object, according to the transformation functions.
         */
        evolve<V>(transformations: Evolver<V>, obj: V): V;
        evolve<V>(transformations: Evolver<V>): <W extends V>(obj: W) => W;

        /*
         * A function that always returns false. Any passed in parameters are ignored.
         */
        F(): boolean;

        /**
         * Returns a new list containing only those items that match a given predicate function. The predicate function is passed one argument: (value).
         */
        filter<T>(fn: (value: T) => boolean): Filter<T>;
        filter<T>(fn: (value: T) => boolean, list: ReadonlyArray<T>): T[];
        filter<T>(fn: (value: T) => boolean, obj: Dictionary<T>): Dictionary<T>;

        /**
         * Returns the first element of the list which matches the predicate, or `undefined` if no
         * element matches.
         */
        find<T>(fn: (a: T) => boolean, list: ReadonlyArray<T>): T | undefined;
        find<T>(fn: (a: T) => boolean): (list: ReadonlyArray<T>) => T | undefined;

        /**
         * Returns the index of the first element of the list which matches the predicate, or `-1`
         * if no element matches.
         */
        findIndex<T>(fn: (a: T) => boolean, list: ReadonlyArray<T>): number;
        findIndex<T>(fn: (a: T) => boolean): (list: ReadonlyArray<T>) => number;

        /**
         * Returns the last element of the list which matches the predicate, or `undefined` if no
         * element matches.
         */
        findLast<T>(fn: (a: T) => boolean, list: ReadonlyArray<T>): T | undefined;
        findLast<T>(fn: (a: T) => boolean): (list: ReadonlyArray<T>) => T | undefined;

        /**
         * Returns the index of the last element of the list which matches the predicate, or
         * `-1` if no element matches.
         */
        findLastIndex<T>(fn: (a: T) => boolean, list: ReadonlyArray<T>): number;
        findLastIndex<T>(fn: (a: T) => boolean): (list: ReadonlyArray<T>) => number;

        /**
         * Returns a new list by pulling every item out of it (and all its sub-arrays) and putting
         * them in a new array, depth-first.
         */
        flatten<T>(x: ReadonlyArray<T> | ReadonlyArray<T[]>): T[];

        /**
         * Returns a new function much like the supplied one, except that the first two arguments'
         * order is reversed.
         */
        flip<T, U, TResult>(fn: (arg0: T, arg1: U) => TResult): (arg1: U, arg0?: T) => TResult;
        flip<T, U, TResult>(fn: (arg0: T, arg1: U, ...args: any[]) => TResult): (arg1: U, arg0?: T, ...args: any[]) => TResult;

        /**
         * Iterate over an input list, calling a provided function fn for each element in the list.
         */
        forEach<T>(fn: (x: T) => void, list: T[]): T[];
        forEach<T>(fn: (x: T) => void): (list: T[]) => T[];
        forEach<T>(fn: (x: T) => void, list: ReadonlyArray<T>): ReadonlyArray<T>;
        forEach<T>(fn: (x: T) => void): (list: ReadonlyArray<T>) => ReadonlyArray<T>;

        /**
         * Iterate over an input object, calling a provided function fn for each key and value in the object.
         */
        forEachObjIndexed<T>(fn: (value: T[keyof T], key: keyof T, obj: T) => void, obj: T): T;
        forEachObjIndexed<T>(fn: (value: T[keyof T], key: keyof T, obj: T) => void): (obj: T) => T;

        /**
         * Creates a new object out of a list key-value pairs.
         */
        fromPairs<V>(pairs: Array<KeyValuePair<string, V>>): { [index: string]: V };
        fromPairs<V>(pairs: Array<KeyValuePair<number, V>>): { [index: number]: V };

        /**
         * Splits a list into sublists stored in an object, based on the result of
         * calling a String-returning function
         * on each element, and grouping the results according to values returned.
         */
        groupBy<T>(fn: (a: T) => string, list: ReadonlyArray<T>): { [index: string]: T[] };
        groupBy<T>(fn: (a: T) => string): <T>(list: ReadonlyArray<T>) => { [index: string]: T[] };

        /**
         * Takes a list and returns a list of lists where each sublist's elements are all "equal" according to the provided equality function
         */
        groupWith<T>(fn: (x: T, y: T) => boolean): (list: ReadonlyArray<T>) => T[][];
        groupWith<T>(fn: (x: T, y: T) => boolean, list: ReadonlyArray<T>): T[][];
        groupWith<T>(fn: (x: T, y: T) => boolean, list: string): string[];

        /**
         * Returns true if the first parameter is greater than the second.
         */
        gt(a: number, b: number): boolean;
        gt(a: number): (b: number) => boolean;

        /**
         * Returns true if the first parameter is greater than or equal to the second.
         */
        gte(a: number, b: number): boolean;
        gte(a: number): (b: number) => boolean;

        /**
         * Returns whether or not an object has an own property with the specified name.
         */
        has<T>(s: string, obj: T): boolean;
        has(s: string): <T>(obj: T) => boolean;

        /**
         * Returns whether or not an object or its prototype chain has a property with the specified name
         */
        hasIn<T>(s: string, obj: T): boolean;
        hasIn(s: string): <T>(obj: T) => boolean;

        /**
         * Returns the first element in a list.
         * In some libraries this function is named `first`.
         */
        head<T>(list: ReadonlyArray<T>): T | undefined;
        head(list: string): string;

        /**
         * Returns true if its arguments are identical, false otherwise. Values are identical if they reference the
         * same memory. NaN is identical to NaN; 0 and -0 are not identical.
         */
        identical<T>(a: T, b: T): boolean;
        identical<T>(a: T): (b: T) => boolean;

        /**
         * A function that does nothing but return the parameter supplied to it. Good as a default
         * or placeholder function.
         */
        identity<T>(a: T): T;

        /**
         * Creates a function that will process either the onTrue or the onFalse function depending upon the result
         * of the condition predicate.
         */
        ifElse(fn: Pred, onTrue: Arity1Fn, onFalse: Arity1Fn): Arity1Fn;

        /**
         * Increments its argument.
         */
        inc(n: number): number;

        /**
         * Given a function that generates a key, turns a list of objects into an object indexing the objects
         * by the given key.
         */
        indexBy<T>(fn: (a: T) => string, list: ReadonlyArray<T>): { [key: string]: T };
        indexBy<T>(fn: (a: T) => string): (list: ReadonlyArray<T>) => { [key: string]: T };

        /**
         * Returns the position of the first occurrence of an item in an array
         * (by strict equality),
         * or -1 if the item is not included in the array.
         */
        indexOf<T>(target: T, list: ReadonlyArray<T>): number;
        indexOf<T>(target: T): (list: ReadonlyArray<T>) => number;

        /**
         * Returns all but the last element of a list or string.
         */
        init<T>(list: ReadonlyArray<T>): T[];
        init(list: string): string;

        /**
         * Inserts the supplied element into the list, at index index. Note that
         * this is not destructive: it returns a copy of the list with the changes.
         */
        insert<T>(index: number, elt: T, list: ReadonlyArray<T>): T[];
        insert<T>(index: number, elt: T): (list: ReadonlyArray<T>) => T[];
        insert(index: number): <T>(elt: T, list: ReadonlyArray<T>) => T[];

        /**
         * Inserts the sub-list into the list, at index `index`.  _Note  that this
         * is not destructive_: it returns a copy of the list with the changes.
         */
        insertAll<T>(index: number, elts: ReadonlyArray<T>, list: ReadonlyArray<T>): T[];
        insertAll<T>(index: number, elts: ReadonlyArray<T>): (list: ReadonlyArray<T>) => T[];
        insertAll(index: number): <T>(elts: ReadonlyArray<T>, list: ReadonlyArray<T>) => T[];

        /**
         * Combines two lists into a set (i.e. no duplicates) composed of those elements common to both lists.
         */
        intersection<T>(list1: ReadonlyArray<T>, list2: ReadonlyArray<T>): T[];
        intersection<T>(list1: ReadonlyArray<T>): (list2: ReadonlyArray<T>) => T[];

        /**
         * Combines two lists into a set (i.e. no duplicates) composed of those
         * elements common to both lists.  Duplication is determined according
         * to the value returned by applying the supplied predicate to two list
         * elements.
         */
        intersectionWith<T>(pred: (a: T, b: T) => boolean, list1: ReadonlyArray<T>, list2: ReadonlyArray<T>): T[];

        /**
         * Creates a new list with the separator interposed between elements.
         */
        intersperse<T>(separator: T, list: ReadonlyArray<T>): T[];
        intersperse<T>(separator: T): (list: ReadonlyArray<T>) => T[];

        /**
         * Transforms the items of the list with the transducer and appends the transformed items to the accumulator
         * using an appropriate iterator function based on the accumulator type.
         */
        into<T>(acc: any, xf: (...a: any[]) => any, list: ReadonlyArray<T>): T[];
        into(acc: any, xf: (...a: any[]) => any): <T>(list: ReadonlyArray<T>) => T[];
        into(acc: any): <T>(xf: (...a: any[]) => any, list: ReadonlyArray<T>) => T[];

        /**
         * Same as R.invertObj, however this accounts for objects with duplicate values by putting the values into an array.
         */
        invert<T>(obj: T): { [index: string]: string[] };

        /**
         * Returns a new object with the keys of the given object as values, and the values of the given object as keys.
         */
        invertObj(obj: { [index: string]: string } | { [index: number]: string }): { [index: string]: string };

        /**
         * Turns a named method of an object (or object prototype) into a function that can be
         * called directly. Passing the optional `len` parameter restricts the returned function to
         * the initial `len` parameters of the method.
         *
         * The returned function is curried and accepts `len + 1` parameters (or `method.length + 1`
         * when `len` is not specified), and the final parameter is the target object.
         */
        invoker(name: string, obj: any, len?: number): (...a: any[]) => any;
        invoker(name: string): (obj: any, len?: number) => (...a: any[]) => any;

        /**
         * See if an object (`val`) is an instance of the supplied constructor.
         * This function will check up the inheritance chain, if any.
         */
        is(ctor: any, val: any): boolean;
        is(ctor: any): (val: any) => boolean;

        /**
         * Tests whether or not an object is similar to an array.
         */
        isArrayLike(val: any): boolean;

        /**
         * Reports whether the list has zero elements.
         */
        isEmpty(value: any): boolean;

        /**
         * Returns true if the input value is NaN.
         */
        isNaN(x: any): boolean;

        /**
         * Checks if the input value is null or undefined.
         */
        isNil(value: any): value is null | undefined;

        /**
         * Returns a string made by inserting the `separator` between each
         * element and concatenating all the elements into a single string.
         */
        join(x: string, xs: ReadonlyArray<any>): string;
        join(x: string): (xs: ReadonlyArray<any>) => string;

        /**
         * Applies a list of functions to a list of values.
         */
        juxt<T, U>(fns: Array<(...args: T[]) => U>): (...args: T[]) => U[];

        /**
         * Returns a list containing the names of all the enumerable own
         * properties of the supplied object.
         */
        keys<T>(x: T): string[];

        /**
         * Returns a list containing the names of all the
         * properties of the supplied object, including prototype properties.
         */
        keysIn<T>(obj: T): string[];

        /**
         * Returns the last element from a list.
         */
        last<T>(list: ReadonlyArray<T>): T | undefined;
        last(list: string): string;

        /**
         * Returns the position of the last occurrence of an item (by strict equality) in
         * an array, or -1 if the item is not included in the array.
         */
        lastIndexOf<T>(target: T, list: ReadonlyArray<T>): number;

        /**
         * Returns the number of elements in the array by returning list.length.
         */
        length<T>(list: ReadonlyArray<T>): number;

        /**
         * Returns a lens for the given getter and setter functions. The getter
         * "gets" the value of the focus; the setter "sets" the value of the focus.
         * The setter should not mutate the data structure.
         */
        lens<T, U, V>(getter: (s: T) => U, setter: (a: U, s: T) => V): Lens;

        /**
         * Creates a lens that will focus on index n of the source array.
         */
        lensIndex(n: number): Lens;

        /**
         * Returns a lens whose focus is the specified path.
         * See also view, set, over.
         */
        lensPath(path: Path): Lens;

        /**
         * lensProp creates a lens that will focus on property k of the source object.
         */
        lensProp(str: string): {
            <T, U>(obj: T): U;
            set<T, U, V>(val: T, obj: U): V;
            /*map<T>(fn: (...a: any[]) => any, obj: T): T*/
        };

        /**
         * "lifts" a function of arity > 1 so that it may "map over" a list, Function or other object that satisfies
         * the FantasyLand Apply spec.
         */
        lift(fn: ((...a: any[]) => any), ...args: any[]): any;

        /**
         * "lifts" a function to be the specified arity, so that it may "map over" that many lists, Functions or other
         * objects that satisfy the FantasyLand Apply spec.
         */
        liftN(n: number, fn: ((...a: any[]) => any), ...args: any[]): any;

        /**
         * Returns true if the first parameter is less than the second.
         */
        lt(a: number, b: number): boolean;
        lt(a: number): (b: number) => boolean;

        /**
         * Returns true if the first parameter is less than or equal to the second.
         */
        lte(a: number, b: number): boolean;
        lte(a: number): (b: number) => boolean;

        /**
         * Returns a new list, constructed by applying the supplied function to every element of the supplied list.
         */
        map<T, U>(fn: (x: T) => U, list: ReadonlyArray<T>): U[];
        map<T, U>(fn: (x: T) => U, obj: Functor<T>): Functor<U>; // used in functors
        map<T, U>(fn: (x: T) => U): (list: ReadonlyArray<T>) => U[];
        map<T extends object, U extends {[P in keyof T]: U[P]}>(fn: (x: T[keyof T]) => U[keyof T], obj: T): U;
        map<T extends object, U extends {[P in keyof T]: U[P]}>(fn: (x: T[keyof T]) => U[keyof T]): (obj: T) => U;

        /**
         * The mapAccum function behaves like a combination of map and reduce.
         */
        mapAccum<T, U, TResult>(fn: (acc: U, value: T) => [U, TResult], acc: U, list: ReadonlyArray<T>): [U, TResult[]];
        mapAccum<T, U, TResult>(fn: (acc: U, value: T) => [U, TResult]): (acc: U, list: ReadonlyArray<T>) => [U, TResult[]];
        mapAccum<T, U, TResult>(fn: (acc: U, value: T) => [U, TResult], acc: U): (list: ReadonlyArray<T>) => [U, TResult[]];

        /**
         * The mapAccumRight function behaves like a combination of map and reduce.
         */
        mapAccumRight<T, U, TResult>(fn: (acc: U, value: T) => [U, TResult], acc: U, list: ReadonlyArray<T>): [U, TResult[]];
        mapAccumRight<T, U, TResult>(fn: (acc: U, value: T) => [U, TResult]): (acc: U, list: ReadonlyArray<T>) => [U, TResult[]];
        mapAccumRight<T, U, TResult>(fn: (acc: U, value: T) => [U, TResult], acc: U): (list: ReadonlyArray<T>) => [U, TResult[]];

        /**
         * Like mapObj, but but passes additional arguments to the predicate function.
         */
        mapObjIndexed<T, TResult>(fn: (value: T, key: string, obj?: any) => TResult, obj: any): { [index: string]: TResult };
        mapObjIndexed<T, TResult>(fn: (value: T, key: string, obj?: any) => TResult): (obj: any) => { [index: string]: TResult };

        /**
         * Tests a regular expression agains a String
         */
        match(regexp: RegExp, str: string): any[];
        match(regexp: RegExp): (str: string) => any[];

        /**
         * mathMod behaves like the modulo operator should mathematically, unlike the `%`
         * operator (and by extension, R.modulo). So while "-17 % 5" is -2,
         * mathMod(-17, 5) is 3. mathMod requires Integer arguments, and returns NaN
         * when the modulus is zero or negative.
         */
        mathMod(a: number, b: number): number;
        mathMod(a: number): (b: number) => number;

        /**
         * Returns the larger of its two arguments.
         */
        max<T extends Ord>(a: T, b: T): T;
        max<T extends Ord>(a: T): (b: T) => T;

        /**
         * Takes a function and two values, and returns whichever value produces
         * the larger result when passed to the provided function.
         */
        maxBy<T>(keyFn: (a: T) => Ord, a: T, b: T): T;
        maxBy<T>(keyFn: (a: T) => Ord, a: T): (b: T) => T;
        maxBy<T>(keyFn: (a: T) => Ord): CurriedFunction2<T, T, T>;

        /**
         * Returns the mean of the given list of numbers.
         */
        mean(list: ReadonlyArray<number>): number;

        /**
         * Returns the median of the given list of numbers.
         */
        median(list: ReadonlyArray<number>): number;

        /**
         * Creates a new function that, when invoked, caches the result of calling fn for a given argument set and
         * returns the result. Subsequent calls to the memoized fn with the same argument set will not result in an
         * additional call to fn; instead, the cached result for that set of arguments will be returned.
         */
        memoize<T = any>(fn: (...a: any[]) => T): (...a: any[]) => T;

        /**
         * Create a new object with the own properties of a
         * merged with the own properties of object b.
         * This function will *not* mutate passed-in objects.
         */
        merge<T1, T2>(a: T1, b: T2): T1 & T2;
        merge<T1>(a: T1): <T2>(b: T2) => T1 & T2;

        /**
         * Merges a list of objects together into one object.
         */
        mergeAll<T>(list: ReadonlyArray<any>): T;

        /**
         * Creates a new object with the own properties of the first object merged with the own properties of the second object.
         * If a key exists in both objects:
         * and both values are objects, the two values will be recursively merged
         * otherwise the value from the first object will be used.
         */
        mergeDeepLeft<T1, T2>(a: T1, b: T2): T1 & T2;
        mergeDeepLeft<T1>(a: T1): <T2>(b: T2) => T1 & T2;

        /**
         * Creates a new object with the own properties of the first object merged with the own properties of the second object.
         * If a key exists in both objects:
         * and both values are objects, the two values will be recursively merged
         * otherwise the value from the second object will be used.
         */
        mergeDeepRight<A, B>(a: A, b: B): A & B;
        mergeDeepRight<A>(a: A): <B>(b: B) => A & B;

        /**
         * Creates a new object with the own properties of the two provided objects. If a key exists in both objects:
         * and both associated values are also objects then the values will be recursively merged.
         * otherwise the provided function is applied to associated values using the resulting value as the new value
         * associated with the key. If a key only exists in one object, the value will be associated with the key of the resulting object.
         */
        mergeDeepWith<T1, T2>(fn: (x: any, z: any) => any, a: T1, b: T2): T1 & T2;
        mergeDeepWith<T1, T2>(fn: (x: any, z: any) => any, a: T1): (b: T2) => T1 & T2;
        mergeDeepWith<T1, T2>(fn: (x: any, z: any) => any): (a: T1, b: T2) => T1 & T2;

        /**
         * Creates a new object with the own properties of the two provided objects. If a key exists in both objects:
         * and both associated values are also objects then the values will be recursively merged.
         * otherwise the provided function is applied to the key and associated values using the resulting value as
         * the new value associated with the key. If a key only exists in one object, the value will be associated with
         * the key of the resulting object.
         */
        mergeDeepWithKey<T1, T2>(fn: (k: string, x: any, z: any) => any, a: T1, b: T2): T1 & T2;
        mergeDeepWithKey<T1, T2>(fn: (k: string, x: any, z: any) => any, a: T1): (b: T2) => T1 & T2;
        mergeDeepWithKey<T1, T2>(fn: (k: string, x: any, z: any) => any): (a: T1, b: T2) => T1 & T2;

        /**
         * Creates a new object with the own properties of the two provided objects. If a key exists in both objects,
         * the provided function is applied to the values associated with the key in each object, with the result being used as
         * the value associated with the key in the returned object. The key will be excluded from the returned object if the
         * resulting value is undefined.
         */
        mergeWith<U, V>(fn: (x: any, z: any) => any, a: U, b: V): U & V;
        mergeWith<U>(fn: (x: any, z: any) => any, a: U): <V>(b: V) => U & V;
        mergeWith(fn: (x: any, z: any) => any): <U, V>(a: U, b: V) => U & V;

        /**
         * Creates a new object with the own properties of the two provided objects. If a key exists in both objects,
         * the provided function is applied to the key and the values associated with the key in each object, with the
         * result being used as the value associated with the key in the returned object. The key will be excluded from
         * the returned object if the resulting value is undefined.
         */
        mergeWithKey<U, V>(fn: (str: string, x: any, z: any) => any, a: U, b: V): U & V;
        mergeWithKey<U>(fn: (str: string, x: any, z: any) => any, a: U): <V>(b: V) => U & V;
        mergeWithKey(fn: (str: string, x: any, z: any) => any): <U, V>(a: U, b: V) => U & V;

        /**
         * Returns the smaller of its two arguments.
         */
        min<T extends Ord>(a: T, b: T): T;
        min<T extends Ord>(a: T): (b: T) => T;

        /**
         * Takes a function and two values, and returns whichever value produces
         * the smaller result when passed to the provided function.
         */
        minBy<T>(keyFn: (a: T) => Ord, a: T, b: T): T;
        minBy<T>(keyFn: (a: T) => Ord, a: T): (b: T) => T;
        minBy<T>(keyFn: (a: T) => Ord): CurriedFunction2<T, T, T>;

        /**
         * Divides the second parameter by the first and returns the remainder.
         * The flipped version (`moduloBy`) may be more useful curried.
         * Note that this functions preserves the JavaScript-style behavior for
         * modulo. For mathematical modulo see `mathMod`
         */
        modulo(a: number, b: number): number;
        modulo(a: number): (b: number) => number;

        /**
         * Multiplies two numbers. Equivalent to a * b but curried.
         */
        multiply(a: number, b: number): number;
        multiply(a: number): (b: number) => number;

        /**
         * Wraps a function of any arity (including nullary) in a function that accepts exactly n parameters.
         * Any extraneous parameters will not be passed to the supplied function.
         */
        nAry(n: number, fn: (...arg: any[]) => any): (...a: any[]) => any;
        nAry(n: number): (fn: (...arg: any[]) => any) => (...a: any[]) => any;

        /**
         * Negates its argument.
         */
        negate(n: number): number;

        /**
         * Returns true if no elements of the list match the predicate, false otherwise.
         */
        none<T>(fn: (a: T) => boolean, list: ReadonlyArray<T>): boolean;
        none<T>(fn: (a: T) => boolean): (list: ReadonlyArray<T>) => boolean;

        /**
         * A function wrapping a call to the given function in a `!` operation.  It will return `true` when the
         * underlying function would return a false-y value, and `false` when it would return a truth-y one.
         */
        not(value: any): boolean;

        /**
         * Returns the nth element in a list.
         */
        nth<T>(n: number, list: ReadonlyArray<T>): T | undefined;
        nth(n: number): <T>(list: ReadonlyArray<T>) => T | undefined;

        /**
         * Returns a function which returns its nth argument.
         */
        nthArg(n: number): (...a: any[]) => any;

        /**
         * Creates an object containing a single key:value pair.
         */
        objOf<T, K extends string>(key: K, value: T): Record<K, T>;
        objOf<K extends string>(key: K): <T>(value: T) => Record<K, T>;

        /**
         * Returns a singleton array containing the value provided.
         */
        of<T>(x: T): T[];

        /**
         * Returns a partial copy of an object omitting the keys specified.
         */
        omit<T>(names: ReadonlyArray<string>, obj: T): T;
        omit(names: ReadonlyArray<string>): <T>(obj: T) => T;

        /**
         * Accepts a function fn and returns a function that guards invocation of fn such that fn can only ever be
         * called once, no matter how many times the returned function is invoked. The first value calculated is
         * returned in subsequent invocations.
         */
        once(fn: (...a: any[]) => any): (...a: any[]) => any;
        once<T>(fn: (...a: any[]) => T): (...a: any[]) => T;

        /**
         * A function that returns the first truthy of two arguments otherwise the last argument. Note that this is
         * NOT short-circuited, meaning that if expressions are passed they are both evaluated.
         * Dispatches to the or method of the first argument if applicable.
         */
        or<T, U>(a: T, b: U): T | U;
        or<T>(a: T): <U>(b: U) => T | U;
        or<T extends { or?: ((...a: any[]) => any); }, U>(fn1: T, val2: U): T | U;
        or<T extends { or?: ((...a: any[]) => any); }>(fn1: T): <U>(val2: U) => T | U;

        /**
         * Returns the result of "setting" the portion of the given data structure
         * focused by the given lens to the given value.
         */
        over<T>(lens: Lens, fn: Arity1Fn, value: T): T;
        over<T>(lens: Lens, fn: Arity1Fn, value: T[]): T[];
        over(lens: Lens, fn: Arity1Fn): <T>(value: T) => T;
        over(lens: Lens, fn: Arity1Fn): <T>(value: T[]) => T[];
        over(lens: Lens): <T>(fn: Arity1Fn, value: T) => T;
        over(lens: Lens): <T>(fn: Arity1Fn, value: T[]) => T[];

        /**
         * Takes two arguments, fst and snd, and returns [fst, snd].
         */
        pair<F, S>(fst: F, snd: S): [F, S];

        /**
         * Takes a function `f` and a list of arguments, and returns a function `g`.
         * When applied, `g` returns the result of applying `f` to the arguments
         * provided initially followed by the arguments provided to `g`.
         */
        partial<T>(fn: (...a: any[]) => T, args: any[]): (...a: any[]) => T;

        /**
         * Takes a function `f` and a list of arguments, and returns a function `g`.
         * When applied, `g` returns the result of applying `f` to the arguments
         * provided to `g` followed by the arguments provided initially.
         */
        partialRight<T>(fn: (...a: any[]) => T, args: any[]): (...a: any[]) => T;

        /**
         * Takes a predicate and a list and returns the pair of lists of elements
         * which do and do not satisfy the predicate, respectively.
         */
        partition(fn: (a: string) => boolean, list: ReadonlyArray<string>): string[][];
        partition<T>(fn: (a: T) => boolean, list: ReadonlyArray<T>): T[][];
        partition<T>(fn: (a: T) => boolean): (list: ReadonlyArray<T>) => T[][];
        partition(fn: (a: string) => boolean): (list: ReadonlyArray<string>) => string[][];

        /**
         * Retrieve the value at a given path.
         */
        path<T>(path: Path, obj: any): T;
        path<T>(path: Path): (obj: any) => T;

        /**
         * Determines whether a nested path on an object has a specific value,
         * in `R.equals` terms. Most likely used to filter a list.
         */
        pathEq(path: Path, val: any, obj: any): boolean;
        pathEq(path: Path, val: any): (obj: any) => boolean;
        pathEq(path: Path): CurriedFunction2<any, any, boolean>;

        /**
         * If the given, non-null object has a value at the given path, returns the value at that path.
         * Otherwise returns the provided default value.
         */
        pathOr<T>(defaultValue: T, path: Path, obj: any): any;
        pathOr<T>(defaultValue: T, path: Path): (obj: any) => any;
        pathOr<T>(defaultValue: T): CurriedFunction2<Path, any, any>;

        /**
         * Returns true if the specified object property at given path satisfies the given predicate; false otherwise.
         */
        pathSatisfies<T, U>(pred: (val: T) => boolean, path: Path, obj: U): boolean;
        pathSatisfies<T, U>(pred: (val: T) => boolean, path: Path): (obj: U) => boolean;
        pathSatisfies<T, U>(pred: (val: T) => boolean): CurriedFunction2<Path, U, boolean>;

        /**
         * Returns a partial copy of an object containing only the keys specified.  If the key does not exist, the
         * property is ignored.
         */
        pick<T, K extends keyof T>(names: ReadonlyArray<K | string>, obj: T): Pick<T, K>;
        pick(names: ReadonlyArray<string>): <T, U>(obj: T) => U;

        /**
         * Similar to `pick` except that this one includes a `key: undefined` pair for properties that don't exist.
         */
        pickAll<T, U>(names: ReadonlyArray<string>, obj: T): U;
        pickAll(names: ReadonlyArray<string>): <T, U>(obj: T) => U;

        /**
         * Returns a partial copy of an object containing only the keys that satisfy the supplied predicate.
         */
        pickBy<T, U>(pred: ObjPred, obj: T): U;
        pickBy(pred: ObjPred): <T, U>(obj: T) => U;

        /**
         * Creates a new function that runs each of the functions supplied as parameters in turn,
         * passing the return value of each function invocation to the next function invocation,
         * beginning with whatever arguments were passed to the initial invocation.
         */
        pipe<V0, T1>(fn0: (x0: V0) => T1): (x0: V0) => T1;
        pipe<V0, V1, T1>(fn0: (x0: V0, x1: V1) => T1): (x0: V0, x1: V1) => T1;
        pipe<V0, V1, V2, T1>(fn0: (x0: V0, x1: V1, x2: V2) => T1): (x0: V0, x1: V1, x2: V2) => T1;

        pipe<V0, T1, T2>(fn0: (x0: V0) => T1, fn1: (x: T1) => T2): (x0: V0) => T2;
        pipe<V0, V1, T1, T2>(fn0: (x0: V0, x1: V1) => T1, fn1: (x: T1) => T2): (x0: V0, x1: V1) => T2;
        pipe<V0, V1, V2, T1, T2>(fn0: (x0: V0, x1: V1, x2: V2) => T1, fn1: (x: T1) => T2): (x0: V0, x1: V1, x2: V2) => T2;

        pipe<V0, T1, T2, T3>(fn0: (x: V0) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3): (x: V0) => T3;
        pipe<V0, V1, T1, T2, T3>(fn0: (x0: V0, x1: V1) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3): (x0: V0, x1: V1) => T3;
        pipe<V0, V1, V2, T1, T2, T3>(fn0: (x0: V0, x1: V1, x2: V2) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3): (x0: V0, x1: V1, x2: V2) => T3;

        pipe<V0, T1, T2, T3, T4>(fn0: (x: V0) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4): (x: V0) => T4;
        pipe<V0, V1, T1, T2, T3, T4>(fn0: (x0: V0, x1: V1) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4): (x0: V0, x1: V1) => T4;
        pipe<V0, V1, V2, T1, T2, T3, T4>(fn0: (x0: V0, x1: V1, x2: V2) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4): (x0: V0, x1: V1, x2: V2) => T4;

        pipe<V0, T1, T2, T3, T4, T5>(fn0: (x: V0) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4, fn4: (x: T4) => T5): (x: V0) => T5;
        pipe<V0, V1, T1, T2, T3, T4, T5>(fn0: (x0: V0, x1: V1) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4, fn4: (x: T4) => T5): (x0: V0, x1: V1) => T5;
        pipe<V0, V1, V2, T1, T2, T3, T4, T5>(fn0: (x0: V0, x1: V1, x2: V2) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4, fn4: (x: T4) => T5): (x0: V0, x1: V1, x2: V2) => T5;

        pipe<V0, T1, T2, T3, T4, T5, T6>(fn0: (x: V0) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4, fn4: (x: T4) => T5, fn5: (x: T5) => T6): (x: V0) => T6;
        pipe<V0, V1, T1, T2, T3, T4, T5, T6>(fn0: (x0: V0, x1: V1) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4, fn4: (x: T4) => T5, fn5: (x: T5) => T6): (x0: V0, x1: V1) => T6;
        pipe<V0, V1, V2, T1, T2, T3, T4, T5, T6>(
            fn0: (x0: V0, x1: V1, x2: V2) => T1,
            fn1: (x: T1) => T2,
            fn2: (x: T2) => T3,
            fn3: (x: T3) => T4,
            fn4: (x: T4) => T5,
            fn5: (x: T5) => T6): (x0: V0, x1: V1, x2: V2) => T6;

        pipe<V0, T1, T2, T3, T4, T5, T6, T7>(
            fn0: (x: V0) => T1,
            fn1: (x: T1) => T2,
            fn2: (x: T2) => T3,
            fn3: (x: T3) => T4,
            fn4: (x: T4) => T5,
            fn5: (x: T5) => T6,
            fn: (x: T6) => T7): (x: V0) => T7;
        pipe<V0, V1, T1, T2, T3, T4, T5, T6, T7>(
            fn0: (x0: V0, x1: V1) => T1,
            fn1: (x: T1) => T2,
            fn2: (x: T2) => T3,
            fn3: (x: T3) => T4,
            fn4: (x: T4) => T5,
            fn5: (x: T5) => T6,
            fn6: (x: T6) => T7): (x0: V0, x1: V1) => T7;
        pipe<V0, V1, V2, T1, T2, T3, T4, T5, T6, T7>(
            fn0: (x0: V0, x1: V1, x2: V2) => T1,
            fn1: (x: T1) => T2,
            fn2: (x: T2) => T3,
            fn3: (x: T3) => T4,
            fn4: (x: T4) => T5,
            fn5: (x: T5) => T6,
            fn6: (x: T6) => T7): (x0: V0, x1: V1, x2: V2) => T7;

        pipe<V0, T1, T2, T3, T4, T5, T6, T7, T8>(
            fn0: (x: V0) => T1,
            fn1: (x: T1) => T2,
            fn2: (x: T2) => T3,
            fn3: (x: T3) => T4,
            fn4: (x: T4) => T5,
            fn5: (x: T5) => T6,
            fn6: (x: T6) => T7,
            fn: (x: T7) => T8): (x: V0) => T8;
        pipe<V0, V1, T1, T2, T3, T4, T5, T6, T7, T8>(
            fn0: (x0: V0, x1: V1) => T1,
            fn1: (x: T1) => T2,
            fn2: (x: T2) => T3,
            fn3: (x: T3) => T4,
            fn4: (x: T4) => T5,
            fn5: (x: T5) => T6,
            fn6: (x: T6) => T7,
            fn7: (x: T7) => T8): (x0: V0, x1: V1) => T8;
        pipe<V0, V1, V2, T1, T2, T3, T4, T5, T6, T7, T8>(
            fn0: (x0: V0, x1: V1, x2: V2) => T1,
            fn1: (x: T1) => T2,
            fn2: (x: T2) => T3,
            fn3: (x: T3) => T4,
            fn4: (x: T4) => T5,
            fn5: (x: T5) => T6,
            fn6: (x: T6) => T7,
            fn7: (x: T7) => T8): (x0: V0, x1: V1, x2: V2) => T8;

        pipe<V0, T1, T2, T3, T4, T5, T6, T7, T8, T9>(
            fn0: (x0: V0) => T1,
            fn1: (x: T1) => T2,
            fn2: (x: T2) => T3,
            fn3: (x: T3) => T4,
            fn4: (x: T4) => T5,
            fn5: (x: T5) => T6,
            fn6: (x: T6) => T7,
            fn7: (x: T7) => T8,
            fn8: (x: T8) => T9): (x0: V0) => T9;
        pipe<V0, V1, T1, T2, T3, T4, T5, T6, T7, T8, T9>(
            fn0: (x0: V0, x1: V1) => T1,
            fn1: (x: T1) => T2,
            fn2: (x: T2) => T3,
            fn3: (x: T3) => T4,
            fn4: (x: T4) => T5,
            fn5: (x: T5) => T6,
            fn6: (x: T6) => T7,
            fn7: (x: T7) => T8,
            fn8: (x: T8) => T9): (x0: V0, x1: V1) => T9;
        pipe<V0, V1, V2, T1, T2, T3, T4, T5, T6, T7, T8, T9>(
            fn0: (x0: V0, x1: V1, x2: V2) => T1,
            fn1: (x: T1) => T2,
            fn2: (x: T2) => T3,
            fn3: (x: T3) => T4,
            fn4: (x: T4) => T5,
            fn5: (x: T5) => T6,
            fn6: (x: T6) => T7,
            fn7: (x: T7) => T8,
            fn8: (x: T8) => T9): (x0: V0, x1: V1, x2: V2) => T9;

        pipe<V0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(
            fn0: (x0: V0) => T1,
            fn1: (x: T1) => T2,
            fn2: (x: T2) => T3,
            fn3: (x: T3) => T4,
            fn4: (x: T4) => T5,
            fn5: (x: T5) => T6,
            fn6: (x: T6) => T7,
            fn7: (x: T7) => T8,
            fn8: (x: T8) => T9,
            fn9: (x: T9) => T10): (x0: V0) => T10;
        pipe<V0, V1, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(
            fn0: (x0: V0, x1: V1) => T1,
            fn1: (x: T1) => T2,
            fn2: (x: T2) => T3,
            fn3: (x: T3) => T4,
            fn4: (x: T4) => T5,
            fn5: (x: T5) => T6,
            fn6: (x: T6) => T7,
            fn7: (x: T7) => T8,
            fn8: (x: T8) => T9,
            fn9: (x: T9) => T10): (x0: V0, x1: V1) => T10;
        pipe<V0, V1, V2, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(
            fn0: (x0: V0, x1: V1, x2: V2) => T1,
            fn1: (x: T1) => T2,
            fn2: (x: T2) => T3,
            fn3: (x: T3) => T4,
            fn4: (x: T4) => T5,
            fn5: (x: T5) => T6,
            fn6: (x: T6) => T7,
            fn7: (x: T7) => T8,
            fn8: (x: T8) => T9,
            fn9: (x: T9) => T10): (x0: V0, x1: V1, x2: V2) => T10;

        /**
         * Returns a new list by plucking the same named property off all objects in the list supplied.
         */
        pluck<P extends string, T>(p: P, list: ReadonlyArray<Record<P, T>>): T[];
        pluck<T>(p: number, list: ReadonlyArray<{ [k: number]: T }>): T[];
        pluck<P extends string>(p: P): <T>(list: ReadonlyArray<Record<P, T>>) => T[];
        pluck(p: number): <T>(list: ReadonlyArray<{ [k: number]: T }>) => T[];

        /**
         * Returns a new list with the given element at the front, followed by the contents of the
         * list.
         */
        prepend<T>(el: T, list: ReadonlyArray<T>): T[];
        prepend<T>(el: T): (list: ReadonlyArray<T>) => T[];

        /**
         * Multiplies together all the elements of a list.
         */
        product(list: ReadonlyArray<number>): number;

        /**
         * Reasonable analog to SQL `select` statement.
         */
        project<T, U>(props: ReadonlyArray<string>, objs: ReadonlyArray<T>): U[];

        /**
         * Returns a function that when supplied an object returns the indicated property of that object, if it exists.
         */
        prop<P extends keyof T, T>(p: P, obj: T): T[P];
        prop<P extends string>(p: P): <T>(obj: Record<P, T>) => T;

        /**
         * Determines whether the given property of an object has a specific
         * value according to strict equality (`===`).  Most likely used to
         * filter a list.
         */
        // propEq<T>(name: string, val: T, obj: {[index:string]: T}): boolean;
        // propEq<T>(name: string, val: T, obj: {[index:number]: T}): boolean;
        propEq<T>(name: string, val: T, obj: any): boolean;
        // propEq<T>(name: number, val: T, obj: any): boolean;
        propEq<T>(name: string, val: T): (obj: any) => boolean;
        // propEq<T>(name: number, val: T): (obj: any) => boolean;
        propEq(name: string): <T>(val: T, obj: any) => boolean;
        // propEq(name: number): <T>(val: T, obj: any) => boolean;

        /**
         * Returns true if the specified object property is of the given type; false otherwise.
         */
        propIs(type: any, name: string, obj: any): boolean;
        propIs(type: any, name: string): (obj: any) => boolean;
        propIs(type: any): {
            (name: string, obj: any): boolean;
            (name: string): (obj: any) => boolean;
        };

        /**
         * If the given, non-null object has an own property with the specified name, returns the value of that property.
         * Otherwise returns the provided default value.
         */
        propOr<T, U, V>(val: T, p: string, obj: U): V;
        propOr<T>(val: T, p: string): <U, V>(obj: U) => V;
        propOr<T>(val: T): <U, V>(p: string, obj: U) => V;

        /**
         * Returns the value at the specified property.
         * The only difference from `prop` is the parameter order.
         * Note: TS1.9 # replace any by dictionary
         */
        props<P extends string, T>(ps: ReadonlyArray<P>, obj: Record<P, T>): T[];
        props<P extends string>(ps: ReadonlyArray<P>): <T>(obj: Record<P, T>) => T[];

        /**
         * Returns true if the specified object property satisfies the given predicate; false otherwise.
         */
        propSatisfies<T, U>(pred: (val: T) => boolean, name: string, obj: U): boolean;
        propSatisfies<T, U>(pred: (val: T) => boolean, name: string): (obj: U) => boolean;
        propSatisfies<T, U>(pred: (val: T) => boolean): CurriedFunction2<string, U, boolean>;

        /**
         * Returns a list of numbers from `from` (inclusive) to `to`
         * (exclusive). In mathematical terms, `range(a, b)` is equivalent to
         * the half-open interval `[a, b)`.
         */
        range(from: number, to: number): number[];
        range(from: number): (to: number) => number[];

        /**
         * Returns a single item by iterating through the list, successively calling the iterator
         * function and passing it an accumulator value and the current value from the array, and
         * then passing the result to the next call.
         */
        reduce<T, TResult>(fn: (acc: TResult, elem: T) => TResult | Reduced, acc: TResult, list: ReadonlyArray<T>): TResult;
        reduce<T, TResult>(fn: (acc: TResult, elem: T) => TResult | Reduced): (acc: TResult, list: ReadonlyArray<T>) => TResult;
        reduce<T, TResult>(fn: (acc: TResult, elem: T) => TResult | Reduced, acc: TResult): (list: ReadonlyArray<T>) => TResult;

        /**
         * Groups the elements of the list according to the result of calling the String-returning function keyFn on each
         * element and reduces the elements of each group to a single value via the reducer function valueFn.
         */
        reduceBy<T, TResult>(valueFn: (acc: TResult, elem: T) => TResult, acc: TResult, keyFn: (elem: T) => string, list: ReadonlyArray<T>): { [index: string]: TResult };
        reduceBy<T, TResult>(valueFn: (acc: TResult, elem: T) => TResult, acc: TResult, keyFn: (elem: T) => string): (list: ReadonlyArray<T>) => { [index: string]: TResult };
        reduceBy<T, TResult>(valueFn: (acc: TResult, elem: T) => TResult, acc: TResult): CurriedFunction2<(elem: T) => string, ReadonlyArray<T>, { [index: string]: TResult }>;
        reduceBy<T, TResult>(valueFn: (acc: TResult, elem: T) => TResult): CurriedFunction3<TResult, (elem: T) => string, ReadonlyArray<T>, { [index: string]: TResult }>;

        /**
         * Returns a value wrapped to indicate that it is the final value of the reduce and
         * transduce functions. The returned value should be considered a black box: the internal
         * structure is not guaranteed to be stable.
         */
        reduced<T>(elem: T): Reduced;

        /**
         * Returns a single item by iterating through the list, successively calling the iterator
         * function and passing it an accumulator value and the current value from the array, and
         * then passing the result to the next call.
         */
        reduceRight<T, TResult>(fn: (elem: T, acc: TResult) => TResult, acc: TResult, list: ReadonlyArray<T>): TResult;
        reduceRight<T, TResult>(fn: (elem: T, acc: TResult) => TResult): (acc: TResult, list: ReadonlyArray<T>) => TResult;
        reduceRight<T, TResult>(fn: (elem: T, acc: TResult) => TResult, acc: TResult): (list: ReadonlyArray<T>) => TResult;

        /**
         * Similar to `filter`, except that it keeps only values for which the given predicate
         * function returns falsy.
         */
        reject<T>(fn: (value: T) => boolean): Filter<T>;
        reject<T>(fn: (value: T) => boolean, list: ReadonlyArray<T>): T[];
        reject<T>(fn: (value: T) => boolean, obj: Dictionary<T>): Dictionary<T>;

        /**
         * Removes the sub-list of `list` starting at index `start` and containing `count` elements.
         */
        remove<T>(start: number, count: number, list: ReadonlyArray<T>): T[];
        remove<T>(start: number): (count: number, list: ReadonlyArray<T>) => T[];
        remove<T>(start: number, count: number): (list: ReadonlyArray<T>) => T[];

        /**
         * Returns a fixed list of size n containing a specified identical value.
         */
        repeat<T>(a: T, n: number): T[];
        repeat<T>(a: T): (n: number) => T[];

        /**
         * Replace a substring or regex match in a string with a replacement.
         */
        replace(pattern: RegExp | string, replacement: string, str: string): string;
        replace(pattern: RegExp | string, replacement: string): (str: string) => string;
        replace(pattern: RegExp | string): (replacement: string) => (str: string) => string;

        /**
         * Returns a new list with the same elements as the original list, just in the reverse order.
         */
        reverse<T>(list: ReadonlyArray<T>): T[];

        /**
         * Scan is similar to reduce, but returns a list of successively reduced values from the left.
         */
        scan<T, TResult>(fn: (acc: TResult, elem: T) => any, acc: TResult, list: ReadonlyArray<T>): TResult[];
        scan<T, TResult>(fn: (acc: TResult, elem: T) => any, acc: TResult): (list: ReadonlyArray<T>) => TResult[];
        scan<T, TResult>(fn: (acc: TResult, elem: T) => any): (acc: TResult, list: ReadonlyArray<T>) => TResult[];

        /**
         * Returns the result of "setting" the portion of the given data structure focused by the given lens to the
         * given value.
         */
        set<T, U>(lens: Lens, a: U, obj: T): T;
        set<U>(lens: Lens, a: U): <T>(obj: T) => T;
        set(lens: Lens): <T, U>(a: U, obj: T) => T;

        /**
         * Returns the elements from `xs` starting at `a` and ending at `b - 1`.
         */
        slice(a: number, b: number, list: string): string;
        slice<T>(a: number, b: number, list: ReadonlyArray<T>): T[];
        slice(a: number, b: number): {
            (list: string): string;
            <T>(list: ReadonlyArray<T>): T[];
        };
        slice(a: number): {
            (b: number, list: string): string;
            <T>(b: number, list: ReadonlyArray<T>): T[];
        };

        /**
         * Returns a copy of the list, sorted according to the comparator function, which should accept two values at a
         * time and return a negative number if the first value is smaller, a positive number if it's larger, and zero
         * if they are equal.
         */
        sort<T>(fn: (a: T, b: T) => number, list: ReadonlyArray<T>): T[];
        sort<T>(fn: (a: T, b: T) => number): (list: ReadonlyArray<T>) => T[];

        /**
         * Sorts the list according to a key generated by the supplied function.
         */
        sortBy<T>(fn: (a: T) => Ord, list: ReadonlyArray<T>): T[];
        sortBy(fn: (a: any) => Ord): <T>(list: ReadonlyArray<T>) => T[];

        /**
         * Sorts a list according to a list of comparators.
         */
        sortWith<T>(fns: ReadonlyArray<((a: T, b: T) => number)>, list: ReadonlyArray<T>): T[];
        sortWith<T>(fns: ReadonlyArray<((a: T, b: T) => number)>): (list: ReadonlyArray<T>) => T[];

        /**
         * Splits a string into an array of strings based on the given
         * separator.
         */
        split(sep: string | RegExp): (str: string) => string[];
        split(sep: string | RegExp, str: string): string[];

        /**
         * Splits a given list or string at a given index.
         */
        splitAt<T>(index: number, list: ReadonlyArray<T>): [T[], T[]];
        splitAt(index: number, list: string): [string, string];
        splitAt(index: number): {
            <T>(list: ReadonlyArray<T>): [T[], T[]];
            (list: string): [string, string];
        };

        /**
         * Splits a collection into slices of the specified length.
         */
        splitEvery<T>(a: number, list: ReadonlyArray<T>): T[][];
        splitEvery(a: number, list: string): string[];
        splitEvery(a: number): {
            (list: string): string[];
            <T>(list: ReadonlyArray<T>): T[][];
        };

        /**
         * Takes a list and a predicate and returns a pair of lists with the following properties:
         * - the result of concatenating the two output lists is equivalent to the input list;
         * - none of the elements of the first output list satisfies the predicate; and
         * - if the second output list is non-empty, its first element satisfies the predicate.
         */
        splitWhen<T, U>(pred: (val: T) => boolean, list: ReadonlyArray<U>): U[][];
        splitWhen<T>(pred: (val: T) => boolean): <U>(list: ReadonlyArray<U>) => U[][];

        /**
         * Checks if a list starts with the provided values
         */
        startsWith(a: string, list: string): boolean;
        startsWith(a: string): (list: string) => boolean;
        startsWith<T>(a: T | ReadonlyArray<T>, list: ReadonlyArray<T>): boolean;
        startsWith<T>(a: T | ReadonlyArray<T>): (list: ReadonlyArray<T>) => boolean;

        /**
         * Subtracts two numbers. Equivalent to `a - b` but curried.
         */
        subtract(a: number, b: number): number;
        subtract(a: number): (b: number) => number;

        /**
         * Adds together all the elements of a list.
         */
        sum(list: ReadonlyArray<number>): number;

        /**
         * Finds the set (i.e. no duplicates) of all elements contained in the first or second list, but not both.
         */
        symmetricDifference<T>(list1: ReadonlyArray<T>, list2: ReadonlyArray<T>): T[];
        symmetricDifference<T>(list: ReadonlyArray<T>): <T>(list: ReadonlyArray<T>) => T[];

        /**
         * Finds the set (i.e. no duplicates) of all elements contained in the first or second list, but not both.
         * Duplication is determined according to the value returned by applying the supplied predicate to two list elements.
         */
        symmetricDifferenceWith<T>(pred: (a: T, b: T) => boolean, list1: ReadonlyArray<T>, list2: ReadonlyArray<T>): T[];
        symmetricDifferenceWith<T>(pred: (a: T, b: T) => boolean): CurriedFunction2<ReadonlyArray<T>, ReadonlyArray<T>, T[]>;

        /**
         * A function that always returns true. Any passed in parameters are ignored.
         */
        T(): boolean;

        /**
         * Returns all but the first element of a list or string.
         */
        tail<T>(list: ReadonlyArray<T>): T[];
        tail(list: string): string;

        /**
         * Returns a new list containing the first `n` elements of the given list.  If
         * `n > * list.length`, returns a list of `list.length` elements.
         */
        take<T>(n: number, xs: ReadonlyArray<T>): T[];
        take(n: number, xs: string): string;
        take<T>(n: number): {
            (xs: string): string;
            (xs: ReadonlyArray<T>): T[];
        };

        /**
         * Returns a new list containing the last n elements of the given list. If n > list.length,
         * returns a list of list.length elements.
         */
        takeLast<T>(n: number, xs: ReadonlyArray<T>): T[];
        takeLast(n: number, xs: string): string;
        takeLast(n: number): {
            <T>(xs: ReadonlyArray<T>): T[];
            (xs: string): string;
        };

        /**
         * Returns a new list containing the last n elements of a given list, passing each value
         * to the supplied predicate function, and terminating when the predicate function returns
         * false. Excludes the element that caused the predicate function to fail. The predicate
         * function is passed one argument: (value).
         */
        takeLastWhile<T>(pred: (a: T) => boolean, list: ReadonlyArray<T>): T[];
        takeLastWhile<T>(pred: (a: T) => boolean): <T>(list: ReadonlyArray<T>) => T[];

        /**
         * Returns a new list containing the first `n` elements of a given list, passing each value
         * to the supplied predicate function, and terminating when the predicate function returns
         * `false`.
         */
        takeWhile<T>(fn: (x: T) => boolean, list: ReadonlyArray<T>): T[];
        takeWhile<T>(fn: (x: T) => boolean): (list: ReadonlyArray<T>) => T[];

        /**
         * The function to call with x. The return value of fn will be thrown away.
         */
        tap<T>(fn: (a: T) => any, value: T): T;
        tap<T>(fn: (a: T) => any): (value: T) => T;

        /**
         * Determines whether a given string matches a given regular expression.
         */
        test(regexp: RegExp, str: string): boolean;
        test(regexp: RegExp): (str: string) => boolean;

        /**
         * Calls an input function `n` times, returning an array containing the results of those
         * function calls.
         */
        times<T>(fn: (i: number) => T, n: number): T[];
        times<T>(fn: (i: number) => T): (n: number) => T[];

        /**
         * The lower case version of a string.
         */
        toLower(str: string): string;

        /**
         * Converts an object into an array of key, value arrays.
         * Only the object's own properties are used.
         * Note that the order of the output array is not guaranteed to be
         * consistent across different JS platforms.
         */
        toPairs<F, S>(obj: { [k: string]: S } | { [k: number]: S }): Array<[F, S]>;

        /**
         * Converts an object into an array of key, value arrays.
         * The object's own properties and prototype properties are used.
         * Note that the order of the output array is not guaranteed to be
         * consistent across different JS platforms.
         */
        toPairsIn<F, S>(obj: { [k: string]: S } | { [k: number]: S }): Array<[F, S]>;

        /**
         * Returns the string representation of the given value. eval'ing the output should
         * result in a value equivalent to the input value. Many of the built-in toString
         * methods do not satisfy this requirement.
         *
         * If the given value is an [object Object] with a toString method other than
         * Object.prototype.toString, this method is invoked with no arguments to produce the
         * return value. This means user-defined constructor functions can provide a suitable
         * toString method.
         */
        toString<T>(val: T): string;

        /**
         * The upper case version of a string.
         */
        toUpper(str: string): string;

        /**
         * Initializes a transducer using supplied iterator function. Returns a single item by iterating through the
         * list, successively calling the transformed iterator function and passing it an accumulator value and the
         * current value from the array, and then passing the result to the next call.
         */
        transduce<T, U>(xf: (arg: T[]) => ReadonlyArray<T>, fn: (acc: U[], val: U) => ReadonlyArray<U>, acc: ReadonlyArray<T>, list: ReadonlyArray<T>): U;
        transduce<T, U>(xf: (arg: T[]) => ReadonlyArray<T>): (fn: (acc: U[], val: U) => ReadonlyArray<U>, acc: ReadonlyArray<T>, list: ReadonlyArray<T>) => U;
        transduce<T, U>(xf: (arg: T[]) => ReadonlyArray<T>, fn: (acc: U[], val: U) => ReadonlyArray<U>): (acc: ReadonlyArray<T>, list: ReadonlyArray<T>) => U;
        transduce<T, U>(xf: (arg: T[]) => ReadonlyArray<T>, fn: (acc: U[], val: U) => ReadonlyArray<U>, acc: ReadonlyArray<T>): (list: ReadonlyArray<T>) => U;

        /**
         * Transposes the rows and columns of a 2D list. When passed a list of n lists of length x, returns a list of x lists of length n.
         */
        transpose<T>(list: ReadonlyArray<T[]>): T[][];

        /**
         * Maps an Applicative-returning function over a Traversable, then uses
         * sequence to transform the resulting Traversable of Applicative into
         * an Applicative of Traversable.
         */
        traverse<T, U, A>(of: (a: U[]) => A, fn: (t: T) => U, list: ReadonlyArray<T>): A;
        traverse<T, U, A>(of: (a: U[]) => A, fn: (t: T) => U): (list: ReadonlyArray<T>) => A;
        traverse<T, U, A>(of: (a: U[]) => A): (fn: (t: T) => U, list: ReadonlyArray<T>) => A;

        /**
         * Removes (strips) whitespace from both ends of the string.
         */
        trim(str: string): string;

        /**
         * tryCatch takes two functions, a tryer and a catcher. The returned function evaluates the tryer; if it does
         * not throw, it simply returns the result. If the tryer does throw, the returned function evaluates the catcher
         * function and returns its result. Note that for effective composition with this function, both the tryer and
         * catcher functions must return the same type of results.
         */
        tryCatch<T>(tryer: (...args: any[]) => T, catcher: (...args: any[]) => T): (...args: any[]) => T;

        /**
         * Gives a single-word string description of the (native) type of a value, returning such answers as 'Object',
         * 'Number', 'Array', or 'Null'. Does not attempt to distinguish user Object types any further, reporting them
         * all as 'Object'.
         */
        type(val: any): 'Object' | 'Number' | 'Boolean' | 'String' | 'Null' | 'Array' | 'RegExp' | 'Function' | 'Undefined';

        /**
         * Takes a function fn, which takes a single array argument, and returns a function which:
         * - takes any number of positional arguments;
         * - passes these arguments to fn as an array; and
         * - returns the result.
         * In other words, R.unapply derives a variadic function from a function which takes an array.
         * R.unapply is the inverse of R.apply.
         */
        unapply<T>(fn: (args: any[]) => T): (...args: any[]) => T;

        /**
         * Wraps a function of any arity (including nullary) in a function that accepts exactly 1 parameter.
         * Any extraneous parameters will not be passed to the supplied function.
         */
        unary<T>(fn: (a: T, ...args: any[]) => any): (a: T) => any;

        /**
         * Returns a function of arity n from a (manually) curried function.
         */
        uncurryN<T>(len: number, fn: (a: any) => any): (...a: any[]) => T;

        /**
         * Builds a list from a seed value. Accepts an iterator function, which returns either false
         * to stop iteration or an array of length 2 containing the value to add to the resulting
         * list and the seed to be used in the next call to the iterator function.
         */
        unfold<T, TResult>(fn: (seed: T) => [TResult, T] | false, seed: T): TResult[];
        unfold<T, TResult>(fn: (seed: T) => [TResult, T] | false): (seed: T) => TResult[];

        /**
         * Combines two lists into a set (i.e. no duplicates) composed of the
         * elements of each list.
         */
        union<T>(as: ReadonlyArray<T>, bs: ReadonlyArray<T>): T[];
        union<T>(as: ReadonlyArray<T>): (bs: ReadonlyArray<T>) => T[];

        /**
         * Combines two lists into a set (i.e. no duplicates) composed of the elements of each list.  Duplication is
         * determined according to the value returned by applying the supplied predicate to two list elements.
         */
        unionWith<T>(pred: (a: T, b: T) => boolean, list1: ReadonlyArray<T>, list2: ReadonlyArray<T>): T[];
        unionWith<T>(pred: (a: T, b: T) => boolean): CurriedFunction2<ReadonlyArray<T>, ReadonlyArray<T>, T[]>;

        /**
         * Returns a new list containing only one copy of each element in the original list.
         */
        uniq<T>(list: ReadonlyArray<T>): T[];

        /**
         * Returns a new list containing only one copy of each element in the original list,
         * based upon the value returned by applying the supplied function to each list element.
         * Prefers the first item if the supplied function produces the same value on two items.
         * R.equals is used for comparison.
         */
        uniqBy<T, U>(fn: (a: T) => U, list: ReadonlyArray<T>): T[];
        uniqBy<T, U>(fn: (a: T) => U): (list: ReadonlyArray<T>) => T[];

        /**
         * Returns a new list containing only one copy of each element in the original list, based upon the value
         * returned by applying the supplied predicate to two list elements.
         */
        uniqWith<T, U>(pred: (x: T, y: T) => boolean, list: ReadonlyArray<T>): T[];
        uniqWith<T, U>(pred: (x: T, y: T) => boolean): (list: ReadonlyArray<T>) => T[];

        /**
         * Tests the final argument by passing it to the given predicate function. If the predicate is not satisfied,
         * the function will return the result of calling the whenFalseFn function with the same argument. If the
         * predicate is satisfied, the argument is returned as is.
         */
        unless<T, U>(pred: (a: T) => boolean, whenFalseFn: (a: T) => U, obj: T): U;
        unless<T, U>(pred: (a: T) => boolean, whenFalseFn: (a: T) => U): (obj: T) => U;

        /**
         * Returns a new list by pulling every item at the first level of nesting out, and putting
         * them in a new array.
         */
        unnest<T>(x: ReadonlyArray<T[]> | ReadonlyArray<ReadonlyArray<T>> | ReadonlyArray<T>): T[];

        /**
         * Takes a predicate, a transformation function, and an initial value, and returns a value of the same type as
         * the initial value. It does so by applying the transformation until the predicate is satisfied, at which point
         * it returns the satisfactory value.
         */
        until<T, U>(pred: (val: T) => boolean, fn: (val: T) => U, init: U): U;
        until<T, U>(pred: (val: T) => boolean, fn: (val: T) => U): (init: U) => U;

        /**
         * Returns a new copy of the array with the element at the provided index replaced with the given value.
         */
        update<T>(index: number, value: T, list: ReadonlyArray<T>): T[];
        update<T>(index: number, value: T): (list: ReadonlyArray<T>) => T[];

        /**
         * Accepts a function fn and a list of transformer functions and returns a new curried function.
         * When the new function is invoked, it calls the function fn with parameters consisting of the
         * result of calling each supplied handler on successive arguments to the new function.
         *
         * If more arguments are passed to the returned function than transformer functions, those arguments
         * are passed directly to fn as additional parameters. If you expect additional arguments that don't
         * need to be transformed, although you can ignore them, it's best to pass an identity function so
         * that the new function reports the correct arity.
         */
        useWith(fn: ((...a: any[]) => any), transformers: Array<((...a: any[]) => any)>): (...a: any[]) => any;

        /**
         * Returns a list of all the enumerable own properties of the supplied object.
         * Note that the order of the output array is not guaranteed across
         * different JS platforms.
         */
        values<T extends object, K extends keyof T>(obj: T): Array<T[K]>;

        /**
         * Returns a list of all the properties, including prototype properties, of the supplied
         * object. Note that the order of the output array is not guaranteed to be consistent across different JS platforms.
         */
        valuesIn<T>(obj: any): T[];

        /**
         * Returns a "view" of the given data structure, determined by the given lens. The lens's focus determines which
         * portion of the data structure is visible.
         */
        view<T, U>(lens: Lens): (obj: T) => U;
        view<T, U>(lens: Lens, obj: T): U;

        /**
         * Tests the final argument by passing it to the given predicate function. If the predicate is satisfied, the function
         * will return the result of calling the whenTrueFn function with the same argument. If the predicate is not satisfied,
         * the argument is returned as is.
         */
        when<T, U>(pred: (a: T) => boolean, whenTrueFn: (a: T) => U, obj: T): U;
        when<T, U>(pred: (a: T) => boolean, whenTrueFn: (a: T) => U): (obj: T) => U;

        /**
         * Takes a spec object and a test object and returns true if the test satisfies the spec.
         * Any property on the spec that is not a function is interpreted as an equality
         * relation.
         *
         * If the spec has a property mapped to a function, then `where` evaluates the function, passing in
         * the test object's value for the property in question, as well as the whole test object.
         *
         * `where` is well suited to declarativley expressing constraints for other functions, e.g.,
         * `filter`, `find`, `pickWith`, etc.
         */
        where<T, U>(spec: T, testObj: U): boolean;
        where<T>(spec: T): <U>(testObj: U) => boolean;
        where<ObjFunc2, U>(spec: ObjFunc2, testObj: U): boolean;
        where<ObjFunc2>(spec: ObjFunc2): <U>(testObj: U) => boolean;

        /**
         * Takes a spec object and a test object; returns true if the test satisfies the spec,
         * false otherwise. An object satisfies the spec if, for each of the spec's own properties,
         * accessing that property of the object gives the same value (in R.eq terms) as accessing
         * that property of the spec.
         */
        whereEq<T, U>(spec: T, obj: U): boolean;
        whereEq<T>(spec: T): <U>(obj: U) => boolean;

        /**
         * Returns a new list without values in the first argument. R.equals is used to determine equality.
         * Acts as a transducer if a transformer is given in list position.
         */
        without<T>(list1: ReadonlyArray<T>, list2: ReadonlyArray<T>): T[];
        without<T>(list1: ReadonlyArray<T>): (list2: ReadonlyArray<T>) => T[];

        /**
         * Wrap a function inside another to allow you to make adjustments to the parameters, or do other processing
         * either before the internal function is called or with its results.
         */
        wrap(fn: (...a: any[]) => any, wrapper: (...a: any[]) => any): (...a: any[]) => any;

        /**
         * Creates a new list out of the two supplied by creating each possible pair from the lists.
         */
        xprod<K, V>(as: ReadonlyArray<K>, bs: ReadonlyArray<V>): Array<KeyValuePair<K, V>>;
        xprod<K>(as: ReadonlyArray<K>): <V>(bs: ReadonlyArray<V>) => Array<KeyValuePair<K, V>>;

        /**
         * Creates a new list out of the two supplied by pairing up equally-positioned items from
         * both lists. Note: `zip` is equivalent to `zipWith(function(a, b) { return [a, b] })`.
         */
        zip<K, V>(list1: ReadonlyArray<K>, list2: ReadonlyArray<V>): Array<KeyValuePair<K, V>>;
        zip<K>(list1: ReadonlyArray<K>): <V>(list2: ReadonlyArray<V>) => Array<KeyValuePair<K, V>>;

        /**
         * Creates a new object out of a list of keys and a list of values.
         */
        // TODO: Dictionary<T> as a return value is to specific, any seems to loose
        zipObj<T>(keys: ReadonlyArray<string>, values: ReadonlyArray<T>): { [index: string]: T };
        zipObj(keys: ReadonlyArray<string>): <T>(values: ReadonlyArray<T>) => { [index: string]: T };

        /**
         * Creates a new list out of the two supplied by applying the function to each
         * equally-positioned pair in the lists.
         */
        zipWith<T, U, TResult>(fn: (x: T, y: U) => TResult, list1: ReadonlyArray<T>, list2: ReadonlyArray<U>): TResult[];
        zipWith<T, U, TResult>(fn: (x: T, y: U) => TResult, list1: ReadonlyArray<T>): (list2: ReadonlyArray<U>) => TResult[];
        zipWith<T, U, TResult>(fn: (x: T, y: U) => TResult): (list1: ReadonlyArray<T>, list2: ReadonlyArray<U>) => TResult[];
    }
}

export = R;
export as namespace R;
