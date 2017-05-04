// Type definitions for ramda
// Project: [https://github.com/types/npm-ramda]
// Definitions by: Erwin Poeze <https://github.com/donnut>, Matt DeKrey <https://github.com/mdekrey>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare var R: R.Static;

declare namespace R {


    // Fantasyland interfaces

    // TODO: incorporate generalized inheritance e.g.: `<U extends
    // Applicative, V extends Traversable>`; possibly needs [rank 2
    // polymorphism](https://github.com/Microsoft/TypeScript/issues/1213).

    interface Setoid<T> {
        equals(b: Setoid<T>): boolean;
    }

    interface Semigroup<T> {
        concat(b: Semigroup<T>): Semigroup<T>;
    }

    interface Monoid<T> extends Semigroup<T> {
        /* static */ empty<T>(): Monoid<T>;
    }

    interface Functor<T> {
        map<U>(fn: (t: T) => U): Functor<U>;
    }

    interface Apply<T> extends Functor<T> {
        apply<U>(fn: Apply<(t: T) => U>): Apply<U>;
    }

    interface Applicative<T> extends Apply<T> {
        /* static */ of<U>(a: U): Applicative<U>;
    }

    interface Alt<T> extends Functor<T> {
        alt(b: T): Alt<T>;
    }

    interface Plus<T> extends Alt<T> {
        /* static */ zero<T>(): Plus<T>;
    }

    interface Alternative<T> extends Plus<T>, Applicative<T> {
    }

    interface Foldable<T> {
        reduce<U>(fn: (u: U, t: T) => U, u: U): U;
    }

    interface Traversable<T> extends Functor<T>, Foldable<T> {
        traverse<U, V>(fn: (t: T) => Applicative<U>, of: (v: V) => Applicative<V>): Applicative<Traversable<U>>;
    }

    interface Chain<T> extends Apply<T> {
        chain<U>(fn: (t: T) => Chain<U>): Chain<U>;
    }

    interface ChainRec<T> extends Chain<T> {
        /* static */ chainRec<A,B,C>(f: (next: (a: A) => C, done: (b: B) => C, value: A) => ChainRec<C>, i: A): ChainRec<B>;
    }

    interface Monad<T> extends Applicative<T>, Chain<T> {
    }

    interface Extend<T> {
        extend<U>(f: (v: Extend<T>) => U): Extend<U>;
    }

    interface Comonad<T> extends Functor<T>, Extend<T> {
        extract<U>(): U; // 'same U as in extend's f -- how to bind?
    }

    interface Bifunctor<T,U> extends Functor<T> /*, Functor<U>*/ {
        bimap<B,D>(f: (v: T) => B, g: (v: U) => D): Bifunctor<B,D>;
    }

    interface Profunctor<T,U> extends Functor<T> /*, Functor<U>*/ {
        promap<B,D>(f: (v: T) => B, g: (v: U) => D): Profunctor<B,D>;
    }

    // simple types

    type Index = string | number;
    type Primitive = string | number | boolean;
    type Ord = string | number | boolean | Date;

    interface Dictionary<T> {
        [index: string]: T;
    }

    type Obj<T> = Dictionary<T>;
    type List<T> = T[] | ArrayLike<T>;
    type StringLike = string | StringRepresentable<string>;
    type Prop = Index | StringRepresentable<Index>;
    type Path = List<Prop>;
    type Struct<T> = Obj<T> | List<T>;
    type AccOpts<T,U> = List<any>|Obj<any>|Transformer<T, U, U>;
    type Pred<T> = (v: T) => boolean;
    type ObjPred<T> = (value: T, key: string) => boolean;

    // Ramda interfaces

    interface Type<T> extends Function {
        new (...args: any[]): T;
    }

    interface Variadic<T> {
        (...args: any[]): T;
    }

    interface KeyValuePair<K, V> extends Array<K | V> { 0 : K; 1 : V; }

    interface Transformer<T, Acc, Res> {
        step: (acc: Acc, v: T) => Acc;
        init: () => Acc;
        result: (acc: Acc) => Res; // = R.identity
    }

    interface NumericDictionary<T> {
        [index: number]: T;
    }

    interface StringRepresentable<T> {
        toString(): T;
    }

    interface NestedObj<T> {
        [index: string]: T|NestedObj<T>;
    }

    // interface RecursiveArray<T> extends Array<T|RecursiveArray<T>> {}
    // interface ListOfRecursiveArraysOrValues<T> extends List<T|RecursiveArray<T>> {}
    interface NestedArray <T> {
      [index: number]: T | NestedArray<T>;
      length: number;
    }

    // // an unfortunate compromise -- while the actual lens should be generic, for the purpose of TS the structure should be supplied beforehand
    // interface KeyLens<T extends Struct<any>, K extends keyof T> {
    //     // <T extends Struct<any>>
    //     (obj: T): T[K]; // get
    //     set(v: T[K], obj: T): T;
    //     // map(fn: (v: T[K]) => T[K], obj: T): T
    // }
    interface Lens<T,U> {
        (obj: T): U; // get
        set(v: U, obj: T): T;
        // map(fn: (v: U) => U, obj: T): T
    }
    interface ManualLens<U> {
        <T extends Struct<any>>(obj: T): U; // get
        set<T extends Struct<any>>(v: U, obj: T): T;
        // <T extends Struct<any>>map(fn: (v: U) => U, obj: T): T
    }
    interface UnknownLens {
        <T,U>(obj: T): U; // get
        set<T,U>(v: U, obj: T): T;
        // map<T,U>(fn: (v: U) => U, obj: T): T
    }

    // @see https://gist.github.com/donnut/fd56232da58d25ceecf1, comment by @albrow

    // interface CurriedFunction1<T1, R> {
    //     (v1: T1): R;
    // }
    type CurriedFunction1<T1, R> = (v1: T1) => R;

    interface CurriedFunction2<T1, T2, R> {
        (v1: T1): (v2: T2) => R;
        (v1: T1, v2: T2): R;
    }
    interface CurriedFunction3<T1, T2, T3, R> {
        (v1: T1): CurriedFunction2<T2, T3, R>;
        (v1: T1, v2: T2): (v3: T3) => R;
        (v1: T1, v2: T2, v3: T3): R;
    }
    interface CurriedFunction4<T1, T2, T3, T4, R> {
        (v1: T1): CurriedFunction3<T2, T3, T4, R>;
        (v1: T1, v2: T2): CurriedFunction2<T3, T4, R>;
        (v1: T1, v2: T2, v3: T3): (v4: T4) => R;
        (v1: T1, v2: T2, v3: T3, v4: T4): R;
    }
    interface CurriedFunction5<T1, T2, T3, T4, T5, R> {
        (v1: T1): CurriedFunction4<T2, T3, T4, T5, R>;
        (v1: T1, v2: T2): CurriedFunction3<T3, T4, T5, R>;
        (v1: T1, v2: T2, v3: T3): CurriedFunction2<T4, T5, R>;
        (v1: T1, v2: T2, v3: T3, v4: T4): (v5: T5) => R;
        (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5): R;
    }
    interface CurriedFunction6<T1, T2, T3, T4, T5, T6, R> {
        (v1: T1): CurriedFunction5<T2, T3, T4, T5, T6, R>;
        (v1: T1, v2: T2): CurriedFunction4<T3, T4, T5, T6, R>;
        (v1: T1, v2: T2, v3: T3): CurriedFunction3<T4, T5, T6, R>;
        (v1: T1, v2: T2, v3: T3, v4: T4): CurriedFunction2<T5, T6, R>;
        (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5): (v6: T6) => R;
        (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6): R;
    }
    interface CurriedFunction7<T1, T2, T3, T4, T5, T6, T7, R> {
        (v1: T1): CurriedFunction6<T2, T3, T4, T5, T6, T7, R>;
        (v1: T1, v2: T2): CurriedFunction5<T3, T4, T5, T6, T7, R>;
        (v1: T1, v2: T2, v3: T3): CurriedFunction4<T4, T5, T6, T7, R>;
        (v1: T1, v2: T2, v3: T3, v4: T4): CurriedFunction3<T5, T6, T7, R>;
        (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5): CurriedFunction2<T6, T7, R>;
        (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6): (v7: T7) => R;
        (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6, v7: T7): R;
    }
    interface CurriedFunction8<T1, T2, T3, T4, T5, T6, T7, T8, R> {
        (v1: T1): CurriedFunction7<T2, T3, T4, T5, T6, T7, T8, R>;
        (v1: T1, v2: T2): CurriedFunction6<T3, T4, T5, T6, T7, T8, R>;
        (v1: T1, v2: T2, v3: T3): CurriedFunction5<T4, T5, T6, T7, T8, R>;
        (v1: T1, v2: T2, v3: T3, v4: T4): CurriedFunction4<T5, T6, T7, T8, R>;
        (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5): CurriedFunction3<T6, T7, T8, R>;
        (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6): CurriedFunction2<T7, T8, R>;
        (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6, v7: T7): (v8: T8) => R;
        (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6, v7: T7, v8: T8): R;
    }
    interface CurriedFunction9<T1, T2, T3, T4, T5, T6, T7, T8, T9, R> {
        (v1: T1): CurriedFunction8<T2, T3, T4, T5, T6, T7, T8, T9, R>;
        (v1: T1, v2: T2): CurriedFunction7<T3, T4, T5, T6, T7, T8, T9, R>;
        (v1: T1, v2: T2, v3: T3): CurriedFunction6<T4, T5, T6, T7, T8, T9, R>;
        (v1: T1, v2: T2, v3: T3, v4: T4): CurriedFunction5<T5, T6, T7, T8, T9, R>;
        (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5): CurriedFunction4<T6, T7, T8, T9, R>;
        (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6): CurriedFunction3<T7, T8, T9, R>;
        (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6, v7: T7): CurriedFunction2<T8, T9, R>;
        (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6, v7: T7, v8: T8): (v9: T9) => R;
        (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6, v7: T7, v8: T8, v9: T9): R;
    }

    interface Reduced {}

    interface Static {

       /**
        * A special placeholder value used to specify "gaps" within curried
        * functions, allowing partial application of any combination of
        * arguments, regardless of their positions.
        * NOTE: can't type this yet, for binary functions consider R.flip!
        */
       __: any; // { "@@functional/placeholder": boolean };
       // ^ don't type by value, since it can be inserted anywhere...
       // Note this is still not useful, as it doesn't take into account how it changes formulas (leaving holes!).
       // This remains TODO, and should be done on the level of curried functions, but that
       // pretty much requires being able to express the separate functions as a single curried function...
       // until that moment handling this would mean having to handle each possible combination for each function. :(

       /**
        * Adds two numbers. Equivalent to a + b but curried.
        */
       add(a: number, b: number): number;
       add(a: number): (b: number) => number;
       // add: CurriedFunction2<number, number, number>;

       /**
        * Creates a new list iteration function from an existing one by adding two new parameters to its callback
        * function: the current index, and the entire list.
        */
       addIndex<T,U,V extends Struct<T>>(fn: (f: (item: T) => U, list: V) => U[]): CurriedFunction2<(item: T, idx: number, list?: V) => U, V, U[]>;
       /* Special case for forEach */
       addIndex<T>(fn: (f: (item: T) => void, list: List<T>) => T[]): CurriedFunction2<(item: T, idx: number, list?: List<T>) => void, List<T>, T[]>;
       /* Special case for reduce */
       addIndex<T,U>(fn: (f: (acc:U, item: T) => U, aci:U, list: List<T>) => U): CurriedFunction3<(acc:U, item: T, idx: number, list?: List<T>) => U, U, List<T>, U>;

        /**
         * Applies a function to the value at the given index of an array, returning a new copy of the array with the
         * element at the given index replaced with the result of the function application.
         */
        // adjust<T>(fn: (a: T) => T, index: number, list: List<T>): T[];
        // adjust<T>(fn: (a: T) => T, index: number): (list: List<T>) => T[];
        // adjust<T>(fn: (a: T) => T): CurriedFunction2<number, List<T>, T[]>;
        // adjust<T>: CurriedFunction3<(a: T) => T, number, List<T>, T[]>;

          // base
        adjust<T>(fn: (a: T) => T, index: number, list: List<T>): T[];
        adjust<T>(fn: (a: T) => T, index: number):{
            (list: List<T>): T[];
        };
        adjust<T>(fn: (a: T) => T):{
            (index: number, list: List<T>): T[];
            (index: number):{
                (list: List<T>): T[];
            };
        };



        /**
         * Returns true if all elements of the list match the predicate, false if there are any that don't.
         */
        all<T>(pred: Pred<T>, list: List<T>): boolean;
        all<T>(pred: Pred<T>): (list: List<T>) => boolean;
        // all<T>: CurriedFunction2<Pred<T>, List<T>, boolean>;

        /**
         * Given a list of predicates, returns a new predicate that will be true exactly when all of them are.
         */
        allPass<T>(preds: Pred<T>[]): Pred<T>;

       /**
        * Returns a function that always returns the given value.
        */
        always<T>(val: T): () => T;

        /**
         * A function that returns the first argument if it's falsy otherwise the second argument. Note that this is
         * NOT short-circuited, meaning that if expressions are passed they are both evaluated.
         */
        // dispatch to some `and` method:
        and<T extends {and?: Function;}>(fn1: T, val2: boolean|any): boolean;
        and<T extends {and?: Function;}>(fn1: T): (val2: boolean|any) => boolean;
        // and<T extends {and?: Function;}>: CurriedFunction2<T, boolean|any, boolean>;
        // // functions, does this still exist?
        // and<T extends () => boolean>(fn1: T, fn2: T): T;
        // and<T extends () => boolean>(fn1: T): (fn2: T) => T;
        // no generics:
        and(v1: any, v2: any): boolean;
        and(v1: any): (v2: any) => boolean;
        // and: CurriedFunction2<any, any, boolean>;

        /**
         * Returns true if at least one of elements of the list match the predicate, false otherwise.
         */
        any<T>(pred: Pred<T>, list: List<T>): boolean;
        any<T>(fnpred: Pred<T>): (list: List<T>) => boolean;
        // any<T>: CurriedFunction2<Pred<T>, List<T>, boolean>;

        /**
         * Given a list of predicates returns a new predicate that will be true exactly when any one of them is.
         */
        anyPass<T>(preds: Pred<T>[]): Pred<T>;

        /**
         * ap applies a list of functions to a list of values.
         */
        ap<T,U>(fns: ((a: T) => U)[], vs: List<T>): U[];
        ap<T,U>(fns: ((a: T) => U)[]): (vs: List<T>) => U[];
        // ap<T,U>: CurriedFunction2<((a: T) => U)[], List<T>, U[]>;


        /**
         * Returns a new list, composed of n-tuples of consecutive elements If n is greater than the length of the list,
         * an empty list is returned.
         */
        aperture<T>(n: number, list: List<T>): T[][];
        aperture(n: number): <T>(list: List<T>) => T[][];
        // aperture<T>: CurriedFunction2<number, List<T>, T[][]>;

        /**
         * Returns a new list containing the contents of the given list, followed by the given element.
         */
        append<T, U>(el: U, list: List<T>): (T & U)[];
        append<U>(el: U): <T>(list: List<T>) => (T & U)[];
        // append<T, U>: CurriedFunction2<U, List<T>, (T & U)[]>;

        /**
         * Applies function fn to the argument list args. This is useful for creating a fixed-arity function from
         * a variadic function. fn should be a bound function if context is significant.
         */
        apply<TResult>(fn: (...args: any[]) => TResult, args: any[]): TResult;
        apply<TResult>(fn: (...args: any[]) => TResult): <U>(args: any[]) => TResult;
        // apply<TResult>: CurriedFunction2<(...args: any[]) => TResult, any[], TResult>;

        /**
         * Given a spec object recursively mapping properties to functions, creates a function producing an object
         * of the same structure, by mapping each property to the result of calling its associated function with
         * the supplied arguments.
         */
        applySpec<T>(obj: any): Variadic<T>;

        /**
         * Makes an ascending comparator function out of a function that returns a value that can be compared with `<` and `>`.
         */
        ascend<T, V extends Ord>(comparator: (val: T) => V, a: T, b: T): number;
        ascend<T, V extends Ord>(comparator: (val: T) => V, a: T): (b: T) => number;
        ascend<T, V extends Ord>(comparator: (val: T) => V): CurriedFunction2<T, T, number>;
        // ascend<T, V extends Ord>: CurriedFunction3<(val: T) => V, T, T, number>;

        /**
         * Makes a shallow clone of an object, setting or overriding the specified property with the given value.
         */
        // hard to mix cuz different initial generics?

        // extend object with new property
        // assoc<T, U extends Struct<any>, K extends keyof U>(prop: K, val: T, obj: U): {[P in K]: T} & U;
        // assoc<T, U extends Struct<any>, K extends keyof U>(prop: K, val: T): (obj: U) => {[P in K]: T} & U; // generics too early?
        // assoc<T, U extends Struct<any>, K extends keyof U>(prop: K): CurriedFunction2<T,U, {[P in K]: T} & U>; // generics too early?
        // assoc<T, U extends Struct<any>, K extends keyof U>: CurriedFunction3<K, T, U, {[P in K]: T} & U>;

        // // extend object with new property
        // assoc<K extends string, T, U extends Struct<any>>(prop: K, val: T, obj: U): {[P in K]: T} & U;
        // assoc<K extends string, T>(prop: K, val: T):{
        //     <U extends Struct<any>>(obj: U): {[P in K]: T} & U;
        // };
        // assoc<K extends string>(prop: K):{
        //     <T, U extends Struct<any>>(val: T, obj: U): {[P in K]: T} & U;
        //     <T>(val: T):{
        //         <U extends Struct<any>>(obj: U): {[P in K]: T} & U;
        //     };
        // };



        // homogeneous object
        assoc<T, U extends Struct<T>>(prop: Prop, val: T, obj: U): U;
        assoc<T>(prop: Prop, val: T): <U extends Struct<T>>(obj: U) => U;
        assoc<T, U extends Struct<T>>(prop: Prop): CurriedFunction2<T, U, U>; // generics too early?
        // assoc<T, U extends Struct<T>>: CurriedFunction3<Prop, T, U, U>;

        // any object as long as the type remains unchanged
        assoc<T>(prop: Prop, val: any, obj: T): T;
        assoc(prop: Prop, val: any): <T>(obj: T) => T;
        assoc<T>(prop: Prop): CurriedFunction2<any, T, T>; // generics too early?
        // assoc<T>: CurriedFunction3<Prop, any, T, T>;

        // any object as long as the type remains unchanged
        assoc<T>(prop: Prop, val: any, obj: T): T;
        assoc(prop: Prop, val: any):{
            <T>(obj: T): T;
        };
        assoc(prop: Prop):{
            <T>(val: any, obj: T): T;
            (val: any):{
                <T>(obj: T): T;
            };
        };


        /**
         * Makes a shallow clone of an object, setting or overriding the nodes required to create the given path, and
         * placing the specific value at the tail end of that path.
         */
        // assocPath<T,U>(path: Path, val: T, obj: U): U;
        // assocPath<T>(path: Path, val: T): <U>(obj: U) => U;
        // assocPath<T,U>(path: Path): CurriedFunction2<T, U, U>;
        // assocPath<T,U>: CurriedFunction3<Path, T, U, U>;

        // base
        assocPath<T, U>(path: Path, val: T, obj: U): U;
        assocPath<T>(path: Path, val: T):{
            <U>(obj: U): U;
        };
        assocPath(path: Path):{
            <T, U>(val: T, obj: U): U;
            <T>(val: T):{
                <U>(obj: U): U;
            };
        };


        /**
         * Wraps a function of any arity (including nullary) in a function that accepts exactly 2
         * parameters. Any extraneous parameters will not be passed to the supplied function.
         */
        binary<T, A, B>(fn: (a: A, b: T, ...args: any[]) => T): (a: A, b: B) => T;
        binary<T>(fn: Variadic<T>): (a: any, b: any) => T;

        /**
         * Creates a function that is bound to a context. Note: R.bind does not provide the additional argument-binding
         * capabilities of Function.prototype.bind.
         */
        bind<T>(fn: Variadic<T>, thisObj: {}): Variadic<T>;
        bind<T>(fn: Variadic<T>): (thisObj: {}) => Variadic<T>;
        // bind<T>: CurriedFunction2<Variadic<T>, {}, Variadic<T>>;


        /**
         * A function wrapping calls to the two functions in an && operation, returning the result of the first function
         * if it is false-y and the result of the second function otherwise. Note that this is short-circuited, meaning
         * that the second function will not be invoked if the first returns a false-y value.
         */
        both<T>(pred1: Pred<T>, pred2: Pred<T>): Pred<T>;
        both<T>(pred1: Pred<T>): (pred2: Pred<T>) => Pred<T>;
        // both<T>: CurriedFunction2<Pred<T>, Pred<T>, Pred<T>>;

        /**
         * Returns the result of calling its first argument with the remaining arguments. This is occasionally useful
         * as a converging function for R.converge: the left branch can produce a function while the right branch
         * produces a value to be passed to that function as an argument.
         */
        // not curried!
        call<T>(fn: Variadic<T>, ...args: any[]): T;

        /**
         * `chain` maps a function over a list and concatenates the results.
         * This implementation is compatible with the Fantasy-land Chain spec
         */

        // List version
        chain<T, U>(fn: (n: T) => U[], list: List<T>): U[];
        chain<T, U>(fn: (n: T) => U[]): (list: List<T>) => U[];
        // chain<T, U>: CurriedFunction2<(n: T) => U[], List<T>, U[]>;

        // generic Chain version
        chain<T, U>(fn: (n: T) => Chain<U>, list: Chain<T>): Chain<U>;
        chain<T, U>(fn: (n: T) => Chain<U>): (list: Chain<T>) => Chain<U>;
        // chain<T, U>: CurriedFunction2<(n: T) => Chain<U>, Chain<T>, Chain<U>>;

        // function argument
        chain<T, U, V>(fn: (v: V) => (list: Chain<T>) => Chain<U>, monad: (chain: Chain<T>) => V): (list: Chain<T>) => Chain<U>;
        chain<T, U, V>(fn: (v: V) => (list: Chain<T>) => Chain<U>): (monad: (chain: Chain<T>) => V) => (list: Chain<T>) => Chain<U>;
        // chain<T, U, V>: CurriedFunction2<(v: V) => (list: Chain<T>) => Chain<U>, (chain: Chain<T>) => V, (list: Chain<T>) => Chain<U>>;

        /**
         * Restricts a number to be within a range.
         * Also works for other ordered types such as Strings and Date
         */
        // clamp<T>(min: T, max: T, value: T): T;
        // clamp<T>(min: T, max: T): (value: T) => T;
        // clamp<T>(min: T): CurriedFunction2<T,T,T>;
        // clamp<T>: CurriedFunction3<T,T,T,T>;

        // base
        clamp<T>(min: T, max: T, value: T): T;
        clamp<T>(min: T, max: T):{
            (value: T): T;
        };
        clamp<T>(min: T):{
            (max: T, value: T): T;
            (max: T):{
                (value: T): T;
            };
        };


        /**
         * Creates a deep copy of the value which may contain (nested) Arrays and Objects, Numbers, Strings, Booleans and Dates.
         */
        clone<T>(value: T): T;
        clone<T>(value: List<T>): T[];

        /**
         * Makes a comparator function out of a function that reports whether the first element is less than the second.
         */
        comparator<T>(pred: (a: T, b: T) => boolean): (x: T, y: T) => number;

        /**
         * Takes a function f and returns a function g such that:
         * - applying g to zero or more arguments will give true if applying the same arguments to f gives
         *   a logical false value; and
         * - applying g to zero or more arguments will give false if applying the same arguments to f gives
         *   a logical true value.
         */
        complement<T>(pred: Variadic<boolean>): Variadic<boolean>;

        /**
         * Performs right-to-left function composition. The rightmost function may have any arity; the remaining
         * functions must be unary.
         */
        compose<V0, T1>(fn0: (x0: V0) => T1): (x0: V0) => T1;
        compose<V0, V1, T1>(fn0: (x0: V0, x1: V1) => T1): (x0: V0, x1: V1) => T1;
        compose<V0, V1, V2, T1>(fn0: (x0: V0, x1: V1, x2: V2) => T1): (x0: V0, x1: V1, x2: V2) => T1;
        compose<V0, V1, V2, V3, T1>(fn0: (x0: V0, x1: V1, x2: V2, x3: V3) => T1): (x0: V0, x1: V1, x2: V2, x3: V3) => T1;
        compose<V0, T1, T2>(fn1: (x: T1) => T2, fn0: (x0: V0) => T1): (x0: V0) => T2;
        compose<V0, V1, T1, T2>(fn1: (x: T1) => T2, fn0: (x0: V0, x1: V1) => T1): (x0: V0, x1: V1) => T2;
        compose<V0, V1, V2, T1, T2>(fn1: (x: T1) => T2, fn0: (x0: V0, x1: V1, x2: V2) => T1): (x0: V0, x1: V1, x2: V2) => T2;
        compose<V0, V1, V2, V3, T1, T2>(fn1: (x: T1) => T2, fn0: (x0: V0, x1: V1, x2: V2, x3: V3) => T1): (x0: V0, x1: V1, x2: V2, x3: V3) => T2;
        compose<V0, T1, T2, T3>(fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x0: V0) => T1): (x0: V0) => T3;
        compose<V0, V1, T1, T2, T3>(fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x0: V0, x1: V1) => T1): (x0: V0, x1: V1) => T3;
        compose<V0, V1, V2, T1, T2, T3>(fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x0: V0, x1: V1, x2: V2) => T1): (x0: V0, x1: V1, x2: V2) => T3;
        compose<V0, V1, V2, V3, T1, T2, T3>(fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x0: V0, x1: V1, x2: V2, x3: V3) => T1): (x0: V0, x1: V1, x2: V2, x3: V3) => T3;
        compose<V0, T1, T2, T3, T4>(fn3: (x: T3) => T4, fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x0: V0) => T1): (x0: V0) => T4;
        compose<V0, V1, T1, T2, T3, T4>(fn3: (x: T3) => T4, fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x0: V0, x1: V1) => T1): (x0: V0, x1: V1) => T4;
        compose<V0, V1, V2, T1, T2, T3, T4>(fn3: (x: T3) => T4, fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x0: V0, x1: V1, x2: V2) => T1): (x0: V0, x1: V1, x2: V2) => T4;
        compose<V0, V1, V2, V3, T1, T2, T3, T4>(fn3: (x: T3) => T4, fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x0: V0, x1: V1, x2: V2, x3: V3) => T1): (x0: V0, x1: V1, x2: V2, x3: V3) => T4;
        compose<V0, T1, T2, T3, T4, T5>(fn4: (x: T4) => T5, fn3: (x: T3) => T4, fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x0: V0) => T1): (x0: V0) => T5;
        compose<V0, V1, T1, T2, T3, T4, T5>(fn4: (x: T4) => T5, fn3: (x: T3) => T4, fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x0: V0, x1: V1) => T1): (x0: V0, x1: V1) => T5;
        compose<V0, V1, V2, T1, T2, T3, T4, T5>(fn4: (x: T4) => T5, fn3: (x: T3) => T4, fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x0: V0, x1: V1, x2: V2) => T1): (x0: V0, x1: V1, x2: V2) => T5;
        compose<V0, V1, V2, V3, T1, T2, T3, T4, T5>(fn4: (x: T4) => T5, fn3: (x: T3) => T4, fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x0: V0, x1: V1, x2: V2, x3: V3) => T1): (x0: V0, x1: V1, x2: V2, x3: V3) => T5;
        compose<V0, T1, T2, T3, T4, T5, T6>(fn5: (x: T5) => T6, fn4: (x: T4) => T5, fn3: (x: T3) => T4, fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x0: V0) => T1): (x0: V0) => T6;
        compose<V0, V1, T1, T2, T3, T4, T5, T6>(fn5: (x: T5) => T6, fn4: (x: T4) => T5, fn3: (x: T3) => T4, fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x0: V0, x1: V1) => T1): (x0: V0, x1: V1) => T6;
        compose<V0, V1, V2, T1, T2, T3, T4, T5, T6>(fn5: (x: T5) => T6, fn4: (x: T4) => T5, fn3: (x: T3) => T4, fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x0: V0, x1: V1, x2: V2) => T1): (x0: V0, x1: V1, x2: V2) => T6;
        compose<V0, V1, V2, V3, T1, T2, T3, T4, T5, T6>(fn5: (x: T5) => T6, fn4: (x: T4) => T5, fn3: (x: T3) => T4, fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x0: V0, x1: V1, x2: V2, x3: V3) => T1): (x0: V0, x1: V1, x2: V2, x3: V3) => T6;
        compose<V0, T1, T2, T3, T4, T5, T6, T7>(fn6: (x: T6) => T7, fn5: (x: T5) => T6, fn4: (x: T4) => T5, fn3: (x: T3) => T4, fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x0: V0) => T1): (x0: V0) => T7;
        compose<V0, V1, T1, T2, T3, T4, T5, T6, T7>(fn6: (x: T6) => T7, fn5: (x: T5) => T6, fn4: (x: T4) => T5, fn3: (x: T3) => T4, fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x0: V0, x1: V1) => T1): (x0: V0, x1: V1) => T7;
        compose<V0, V1, V2, T1, T2, T3, T4, T5, T6, T7>(fn6: (x: T6) => T7, fn5: (x: T5) => T6, fn4: (x: T4) => T5, fn3: (x: T3) => T4, fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x0: V0, x1: V1, x2: V2) => T1): (x0: V0, x1: V1, x2: V2) => T7;
        compose<V0, V1, V2, V3, T1, T2, T3, T4, T5, T6, T7>(fn6: (x: T6) => T7, fn5: (x: T5) => T6, fn4: (x: T4) => T5, fn3: (x: T3) => T4, fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x0: V0, x1: V1, x2: V2, x3: V3) => T1): (x0: V0, x1: V1, x2: V2, x3: V3) => T7;
        compose<V0, T1, T2, T3, T4, T5, T6, T7, T8>(fn7: (x: T7) => T8, fn6: (x: T6) => T7, fn5: (x: T5) => T6, fn4: (x: T4) => T5, fn3: (x: T3) => T4, fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x0: V0) => T1): (x0: V0) => T8;
        compose<V0, V1, T1, T2, T3, T4, T5, T6, T7, T8>(fn7: (x: T7) => T8, fn6: (x: T6) => T7, fn5: (x: T5) => T6, fn4: (x: T4) => T5, fn3: (x: T3) => T4, fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x0: V0, x1: V1) => T1): (x0: V0, x1: V1) => T8;
        compose<V0, V1, V2, T1, T2, T3, T4, T5, T6, T7, T8>(fn7: (x: T7) => T8, fn6: (x: T6) => T7, fn5: (x: T5) => T6, fn4: (x: T4) => T5, fn3: (x: T3) => T4, fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x0: V0, x1: V1, x2: V2) => T1): (x0: V0, x1: V1, x2: V2) => T8;
        compose<V0, V1, V2, V3, T1, T2, T3, T4, T5, T6, T7, T8>(fn7: (x: T7) => T8, fn6: (x: T6) => T7, fn5: (x: T5) => T6, fn4: (x: T4) => T5, fn3: (x: T3) => T4, fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x0: V0, x1: V1, x2: V2, x3: V3) => T1): (x0: V0, x1: V1, x2: V2, x3: V3) => T8;
        compose<V0, T1, T2, T3, T4, T5, T6, T7, T8, T9>(fn8: (x: T8) => T9, fn7: (x: T7) => T8, fn6: (x: T6) => T7, fn5: (x: T5) => T6, fn4: (x: T4) => T5, fn3: (x: T3) => T4, fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x0: V0) => T1): (x0: V0) => T9;
        compose<V0, V1, T1, T2, T3, T4, T5, T6, T7, T8, T9>(fn8: (x: T8) => T9, fn7: (x: T7) => T8, fn6: (x: T6) => T7, fn5: (x: T5) => T6, fn4: (x: T4) => T5, fn3: (x: T3) => T4, fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x0: V0, x1: V1) => T1): (x0: V0, x1: V1) => T9;
        compose<V0, V1, V2, T1, T2, T3, T4, T5, T6, T7, T8, T9>(fn8: (x: T8) => T9, fn7: (x: T7) => T8, fn6: (x: T6) => T7, fn5: (x: T5) => T6, fn4: (x: T4) => T5, fn3: (x: T3) => T4, fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x0: V0, x1: V1, x2: V2) => T1): (x0: V0, x1: V1, x2: V2) => T9;
        compose<V0, V1, V2, V3, T1, T2, T3, T4, T5, T6, T7, T8, T9>(fn8: (x: T8) => T9, fn7: (x: T7) => T8, fn6: (x: T6) => T7, fn5: (x: T5) => T6, fn4: (x: T4) => T5, fn3: (x: T3) => T4, fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x0: V0, x1: V1, x2: V2, x3: V3) => T1): (x0: V0, x1: V1, x2: V2, x3: V3) => T9;

        /**
         * Returns the right-to-left Kleisli composition of the provided functions, each of which must return a value of a type supported by chain.
         */
        composeK<V, T1>(fn0: (v: Chain<V>) => Chain<T1>): (v: V) => Chain<T1>;
        composeK<V, T1, T2>(fn1: (x: T1) => Chain<T2>, fn0: (v: Chain<V>) => Chain<T1>): (v: V) => Chain<T2>;
        composeK<V, T1, T2, T3>(fn2: (x: T2) => Chain<T3>, fn1: (x: T1) => Chain<T2>, fn0: (v: Chain<V>) => Chain<T1>): (v: V) => Chain<T3>;
        composeK<V, T1, T2, T3, T4>(fn3: (x: T3) => Chain<T4>, fn2: (x: T2) => Chain<T3>, fn1: (x: T1) => Chain<T2>, fn0: (v: Chain<V>) => Chain<T1>): (v: V) => Chain<T4>;
        composeK<V, T1, T2, T3, T4, T5>(fn4: (x: T4) => Chain<T5>, fn3: (x: T3) => Chain<T4>, fn2: (x: T2) => Chain<T3>, fn1: (x: T1) => Chain<T2>, fn0: (v: Chain<V>) => Chain<T1>): (v: V) => Chain<T5>;
        composeK<V, T1, T2, T3, T4, T5, T6>(fn5: (x: T5) => Chain<T6>, fn4: (x: T4) => Chain<T5>, fn3: (x: T3) => Chain<T4>, fn2: (x: T2) => Chain<T3>, fn1: (x: T1) => Chain<T2>, fn0: (v: Chain<V>) => Chain<T1>): (v: V) => Chain<T6>;
        composeK<V, T1, T2, T3, T4, T5, T6, T7>(fn6: (x: T6) => Chain<T7>, fn5: (x: T5) => Chain<T6>, fn4: (x: T4) => Chain<T5>, fn3: (x: T3) => Chain<T4>, fn2: (x: T2) => Chain<T3>, fn1: (x: T1) => Chain<T2>, fn0: (v: Chain<V>) => Chain<T1>): (v: V) => Chain<T7>;
        composeK<V, T1, T2, T3, T4, T5, T6, T7, T8>(fn7: (x: T7) => Chain<T8>, fn6: (x: T6) => Chain<T7>, fn5: (x: T5) => Chain<T6>, fn4: (x: T4) => Chain<T5>, fn3: (x: T3) => Chain<T4>, fn2: (x: T2) => Chain<T3>, fn1: (x: T1) => Chain<T2>, fn0: (v: Chain<V>) => Chain<T1>): (v: V) => Chain<T8>;
        composeK<V, T1, T2, T3, T4, T5, T6, T7, T8, T9>(fn8: (x: T8) => Chain<T9>, fn7: (x: T7) => Chain<T8>, fn6: (x: T6) => Chain<T7>, fn5: (x: T5) => Chain<T6>, fn4: (x: T4) => Chain<T5>, fn3: (x: T3) => Chain<T4>, fn2: (x: T2) => Chain<T3>, fn1: (x: T1) => Chain<T2>, fn0: (v: Chain<V>) => Chain<T1>): (v: V) => Chain<T9>;

        /**
         * Performs right-to-left composition of one or more Promise-returning functions. The rightmost function may have any arity; the remaining functions must be unary.
         */
        composeP<V0, T1>(fn0: (x0: V0) => Promise<T1>): (x0: V0) => Promise<T1>;
        composeP<V0, V1, T1>(fn0: (x0: V0, x1: V1) => Promise<T1>): (x0: V0, x1: V1) => Promise<T1>;
        composeP<V0, V1, V2, T1>(fn0: (x0: V0, x1: V1, x2: V2) => Promise<T1>): (x0: V0, x1: V1, x2: V2) => Promise<T1>;
        composeP<V0, V1, V2, V3, T1>(fn0: (x0: V0, x1: V1, x2: V2, x3: V3) => Promise<T1>): (x0: V0, x1: V1, x2: V2, x3: V3) => Promise<T1>;
        composeP<V0, T1, T2>(fn1: (x: T1) => Promise<T2>|T2, fn0: (x0: V0) => Promise<T1>): (x0: V0) => Promise<T2>;
        composeP<V0, V1, T1, T2>(fn1: (x: T1) => Promise<T2>|T2, fn0: (x0: V0, x1: V1) => Promise<T1>): (x0: V0, x1: V1) => Promise<T2>;
        composeP<V0, V1, V2, T1, T2>(fn1: (x: T1) => Promise<T2>|T2, fn0: (x0: V0, x1: V1, x2: V2) => Promise<T1>): (x0: V0, x1: V1, x2: V2) => Promise<T2>;
        composeP<V0, V1, V2, V3, T1, T2>(fn1: (x: T1) => Promise<T2>|T2, fn0: (x0: V0, x1: V1, x2: V2, x3: V3) => Promise<T1>): (x0: V0, x1: V1, x2: V2, x3: V3) => Promise<T2>;
        composeP<V0, T1, T2, T3>(fn2: (x: T2) => Promise<T3>|T3, fn1: (x: T1) => Promise<T2>|T2, fn0: (x0: V0) => Promise<T1>): (x0: V0) => Promise<T3>;
        composeP<V0, V1, T1, T2, T3>(fn2: (x: T2) => Promise<T3>|T3, fn1: (x: T1) => Promise<T2>|T2, fn0: (x0: V0, x1: V1) => Promise<T1>): (x0: V0, x1: V1) => Promise<T3>;
        composeP<V0, V1, V2, T1, T2, T3>(fn2: (x: T2) => Promise<T3>|T3, fn1: (x: T1) => Promise<T2>|T2, fn0: (x0: V0, x1: V1, x2: V2) => Promise<T1>): (x0: V0, x1: V1, x2: V2) => Promise<T3>;
        composeP<V0, V1, V2, V3, T1, T2, T3>(fn2: (x: T2) => Promise<T3>|T3, fn1: (x: T1) => Promise<T2>|T2, fn0: (x0: V0, x1: V1, x2: V2, x3: V3) => Promise<T1>): (x0: V0, x1: V1, x2: V2, x3: V3) => Promise<T3>;
        composeP<V0, T1, T2, T3, T4>(fn3: (x: T3) => Promise<T4>|T4, fn2: (x: T2) => Promise<T3>|T3, fn1: (x: T1) => Promise<T2>|T2, fn0: (x0: V0) => Promise<T1>): (x0: V0) => Promise<T4>;
        composeP<V0, V1, T1, T2, T3, T4>(fn3: (x: T3) => Promise<T4>|T4, fn2: (x: T2) => Promise<T3>|T3, fn1: (x: T1) => Promise<T2>|T2, fn0: (x0: V0, x1: V1) => Promise<T1>): (x0: V0, x1: V1) => Promise<T4>;
        composeP<V0, V1, V2, T1, T2, T3, T4>(fn3: (x: T3) => Promise<T4>|T4, fn2: (x: T2) => Promise<T3>|T3, fn1: (x: T1) => Promise<T2>|T2, fn0: (x0: V0, x1: V1, x2: V2) => Promise<T1>): (x0: V0, x1: V1, x2: V2) => Promise<T4>;
        composeP<V0, V1, V2, V3, T1, T2, T3, T4>(fn3: (x: T3) => Promise<T4>|T4, fn2: (x: T2) => Promise<T3>|T3, fn1: (x: T1) => Promise<T2>|T2, fn0: (x0: V0, x1: V1, x2: V2, x3: V3) => Promise<T1>): (x0: V0, x1: V1, x2: V2, x3: V3) => Promise<T4>;
        composeP<V0, T1, T2, T3, T4, T5>(fn4: (x: T4) => Promise<T5>|T5, fn3: (x: T3) => Promise<T4>|T4, fn2: (x: T2) => Promise<T3>|T3, fn1: (x: T1) => Promise<T2>|T2, fn0: (x0: V0) => Promise<T1>): (x0: V0) => Promise<T5>;
        composeP<V0, V1, T1, T2, T3, T4, T5>(fn4: (x: T4) => Promise<T5>|T5, fn3: (x: T3) => Promise<T4>|T4, fn2: (x: T2) => Promise<T3>|T3, fn1: (x: T1) => Promise<T2>|T2, fn0: (x0: V0, x1: V1) => Promise<T1>): (x0: V0, x1: V1) => Promise<T5>;
        composeP<V0, V1, V2, T1, T2, T3, T4, T5>(fn4: (x: T4) => Promise<T5>|T5, fn3: (x: T3) => Promise<T4>|T4, fn2: (x: T2) => Promise<T3>|T3, fn1: (x: T1) => Promise<T2>|T2, fn0: (x0: V0, x1: V1, x2: V2) => Promise<T1>): (x0: V0, x1: V1, x2: V2) => Promise<T5>;
        composeP<V0, V1, V2, V3, T1, T2, T3, T4, T5>(fn4: (x: T4) => Promise<T5>|T5, fn3: (x: T3) => Promise<T4>|T4, fn2: (x: T2) => Promise<T3>|T3, fn1: (x: T1) => Promise<T2>|T2, fn0: (x0: V0, x1: V1, x2: V2, x3: V3) => Promise<T1>): (x0: V0, x1: V1, x2: V2, x3: V3) => Promise<T5>;
        composeP<V0, T1, T2, T3, T4, T5, T6>(fn5: (x: T5) => Promise<T6>|T6, fn4: (x: T4) => Promise<T5>|T5, fn3: (x: T3) => Promise<T4>|T4, fn2: (x: T2) => Promise<T3>|T3, fn1: (x: T1) => Promise<T2>|T2, fn0: (x0: V0) => Promise<T1>): (x0: V0) => Promise<T6>;
        composeP<V0, V1, T1, T2, T3, T4, T5, T6>(fn5: (x: T5) => Promise<T6>|T6, fn4: (x: T4) => Promise<T5>|T5, fn3: (x: T3) => Promise<T4>|T4, fn2: (x: T2) => Promise<T3>|T3, fn1: (x: T1) => Promise<T2>|T2, fn0: (x0: V0, x1: V1) => Promise<T1>): (x0: V0, x1: V1) => Promise<T6>;
        composeP<V0, V1, V2, T1, T2, T3, T4, T5, T6>(fn5: (x: T5) => Promise<T6>|T6, fn4: (x: T4) => Promise<T5>|T5, fn3: (x: T3) => Promise<T4>|T4, fn2: (x: T2) => Promise<T3>|T3, fn1: (x: T1) => Promise<T2>|T2, fn0: (x0: V0, x1: V1, x2: V2) => Promise<T1>): (x0: V0, x1: V1, x2: V2) => Promise<T6>;
        composeP<V0, V1, V2, V3, T1, T2, T3, T4, T5, T6>(fn5: (x: T5) => Promise<T6>|T6, fn4: (x: T4) => Promise<T5>|T5, fn3: (x: T3) => Promise<T4>|T4, fn2: (x: T2) => Promise<T3>|T3, fn1: (x: T1) => Promise<T2>|T2, fn0: (x0: V0, x1: V1, x2: V2, x3: V3) => Promise<T1>): (x0: V0, x1: V1, x2: V2, x3: V3) => Promise<T6>;
        composeP<V0, T1, T2, T3, T4, T5, T6, T7>(fn6: (x: T6) => Promise<T7>|T7, fn5: (x: T5) => Promise<T6>|T6, fn4: (x: T4) => Promise<T5>|T5, fn3: (x: T3) => Promise<T4>|T4, fn2: (x: T2) => Promise<T3>|T3, fn1: (x: T1) => Promise<T2>|T2, fn0: (x0: V0) => Promise<T1>): (x0: V0) => Promise<T7>;
        composeP<V0, V1, T1, T2, T3, T4, T5, T6, T7>(fn6: (x: T6) => Promise<T7>|T7, fn5: (x: T5) => Promise<T6>|T6, fn4: (x: T4) => Promise<T5>|T5, fn3: (x: T3) => Promise<T4>|T4, fn2: (x: T2) => Promise<T3>|T3, fn1: (x: T1) => Promise<T2>|T2, fn0: (x0: V0, x1: V1) => Promise<T1>): (x0: V0, x1: V1) => Promise<T7>;
        composeP<V0, V1, V2, T1, T2, T3, T4, T5, T6, T7>(fn6: (x: T6) => Promise<T7>|T7, fn5: (x: T5) => Promise<T6>|T6, fn4: (x: T4) => Promise<T5>|T5, fn3: (x: T3) => Promise<T4>|T4, fn2: (x: T2) => Promise<T3>|T3, fn1: (x: T1) => Promise<T2>|T2, fn0: (x0: V0, x1: V1, x2: V2) => Promise<T1>): (x0: V0, x1: V1, x2: V2) => Promise<T7>;
        composeP<V0, V1, V2, V3, T1, T2, T3, T4, T5, T6, T7>(fn6: (x: T6) => Promise<T7>|T7, fn5: (x: T5) => Promise<T6>|T6, fn4: (x: T4) => Promise<T5>|T5, fn3: (x: T3) => Promise<T4>|T4, fn2: (x: T2) => Promise<T3>|T3, fn1: (x: T1) => Promise<T2>|T2, fn0: (x0: V0, x1: V1, x2: V2, x3: V3) => Promise<T1>): (x0: V0, x1: V1, x2: V2, x3: V3) => Promise<T7>;
        composeP<V0, T1, T2, T3, T4, T5, T6, T7, T8>(fn7: (x: T7) => Promise<T8>|T8, fn6: (x: T6) => Promise<T7>|T7, fn5: (x: T5) => Promise<T6>|T6, fn4: (x: T4) => Promise<T5>|T5, fn3: (x: T3) => Promise<T4>|T4, fn2: (x: T2) => Promise<T3>|T3, fn1: (x: T1) => Promise<T2>|T2, fn0: (x0: V0) => Promise<T1>): (x0: V0) => Promise<T8>;
        composeP<V0, V1, T1, T2, T3, T4, T5, T6, T7, T8>(fn7: (x: T7) => Promise<T8>|T8, fn6: (x: T6) => Promise<T7>|T7, fn5: (x: T5) => Promise<T6>|T6, fn4: (x: T4) => Promise<T5>|T5, fn3: (x: T3) => Promise<T4>|T4, fn2: (x: T2) => Promise<T3>|T3, fn1: (x: T1) => Promise<T2>|T2, fn0: (x0: V0, x1: V1) => Promise<T1>): (x0: V0, x1: V1) => Promise<T8>;
        composeP<V0, V1, V2, T1, T2, T3, T4, T5, T6, T7, T8>(fn7: (x: T7) => Promise<T8>|T8, fn6: (x: T6) => Promise<T7>|T7, fn5: (x: T5) => Promise<T6>|T6, fn4: (x: T4) => Promise<T5>|T5, fn3: (x: T3) => Promise<T4>|T4, fn2: (x: T2) => Promise<T3>|T3, fn1: (x: T1) => Promise<T2>|T2, fn0: (x0: V0, x1: V1, x2: V2) => Promise<T1>): (x0: V0, x1: V1, x2: V2) => Promise<T8>;
        composeP<V0, V1, V2, V3, T1, T2, T3, T4, T5, T6, T7, T8>(fn7: (x: T7) => Promise<T8>|T8, fn6: (x: T6) => Promise<T7>|T7, fn5: (x: T5) => Promise<T6>|T6, fn4: (x: T4) => Promise<T5>|T5, fn3: (x: T3) => Promise<T4>|T4, fn2: (x: T2) => Promise<T3>|T3, fn1: (x: T1) => Promise<T2>|T2, fn0: (x0: V0, x1: V1, x2: V2, x3: V3) => Promise<T1>): (x0: V0, x1: V1, x2: V2, x3: V3) => Promise<T8>;
        composeP<V0, T1, T2, T3, T4, T5, T6, T7, T8, T9>(fn8: (x: T8) => Promise<T9>|T9, fn7: (x: T7) => Promise<T8>|T8, fn6: (x: T6) => Promise<T7>|T7, fn5: (x: T5) => Promise<T6>|T6, fn4: (x: T4) => Promise<T5>|T5, fn3: (x: T3) => Promise<T4>|T4, fn2: (x: T2) => Promise<T3>|T3, fn1: (x: T1) => Promise<T2>|T2, fn0: (x0: V0) => Promise<T1>): (x0: V0) => Promise<T9>;
        composeP<V0, V1, T1, T2, T3, T4, T5, T6, T7, T8, T9>(fn8: (x: T8) => Promise<T9>|T9, fn7: (x: T7) => Promise<T8>|T8, fn6: (x: T6) => Promise<T7>|T7, fn5: (x: T5) => Promise<T6>|T6, fn4: (x: T4) => Promise<T5>|T5, fn3: (x: T3) => Promise<T4>|T4, fn2: (x: T2) => Promise<T3>|T3, fn1: (x: T1) => Promise<T2>|T2, fn0: (x0: V0, x1: V1) => Promise<T1>): (x0: V0, x1: V1) => Promise<T9>;
        composeP<V0, V1, V2, T1, T2, T3, T4, T5, T6, T7, T8, T9>(fn8: (x: T8) => Promise<T9>|T9, fn7: (x: T7) => Promise<T8>|T8, fn6: (x: T6) => Promise<T7>|T7, fn5: (x: T5) => Promise<T6>|T6, fn4: (x: T4) => Promise<T5>|T5, fn3: (x: T3) => Promise<T4>|T4, fn2: (x: T2) => Promise<T3>|T3, fn1: (x: T1) => Promise<T2>|T2, fn0: (x0: V0, x1: V1, x2: V2) => Promise<T1>): (x0: V0, x1: V1, x2: V2) => Promise<T9>;
        composeP<V0, V1, V2, V3, T1, T2, T3, T4, T5, T6, T7, T8, T9>(fn8: (x: T8) => Promise<T9>|T9, fn7: (x: T7) => Promise<T8>|T8, fn6: (x: T6) => Promise<T7>|T7, fn5: (x: T5) => Promise<T6>|T6, fn4: (x: T4) => Promise<T5>|T5, fn3: (x: T3) => Promise<T4>|T4, fn2: (x: T2) => Promise<T3>|T3, fn1: (x: T1) => Promise<T2>|T2, fn0: (x0: V0, x1: V1, x2: V2, x3: V3) => Promise<T1>): (x0: V0, x1: V1, x2: V2, x3: V3) => Promise<T9>;

        /**
         * Returns a new list consisting of the elements of the first list followed by the elements
         * of the second.
         */
        concat<T extends List<any>>(list1: T, list2: T): T;
        concat<T extends List<any>>(list1: T): (list2: T) => T;
        // concat<T extends List<any>>: CurriedFunction2<T, T, T>;

        /**
         * Returns a function, fn, which encapsulates if/else-if/else logic. R.cond takes a list of [predicate, transform] pairs.
         * All of the arguments to fn are applied to each of the predicates in turn until one returns a "truthy" value, at which
         * point fn returns the result of applying its arguments to the corresponding transformer. If none of the predicates
         * matches, fn returns undefined.
         */
        cond<T, U>(fns: [Pred<T>, (v: T) => U][]): (v: T) => U;

        /**
         * Wraps a constructor function inside a curried function that can be called with the same arguments and returns the same type.
         */
        construct(fn: Function): Function;

        /**
         * Wraps a constructor function inside a curried function that can be called with the same arguments and returns the same type.
         * The arity of the function returned is specified to allow using variadic constructor functions.
         */
        constructN(n: number, fn: Function): Function;
        // constructN: CurriedFunction2<number, Function, Function>;


        /**
         * Returns `true` if the specified item is somewhere in the list, `false` otherwise.
         * Equivalent to `indexOf(a)(list) > -1`. Uses strict (`===`) equality checking.
         */
        contains(a: string, list: string): boolean;
        contains(a: string): (list: string) => boolean;
        // contains: CurriedFunction2<string, string, boolean>;
        contains<T, U, R extends List<T|U>>(a: T, list: R): boolean;
        contains<T>(a: T): <U, R extends List<T|U>>(list: R) => boolean;
        // contains<T, U, R extends List<T|U>>: CurriedFunction2<T, R, boolean>;

        /**
         * Accepts a converging function and a list of branching functions and returns a new
         * function. When invoked, this new function is applied to some arguments, each branching
         * function is applied to those same arguments. The results of each branching function
         * are passed as arguments to the converging function to produce the return value.
         */
        converge<T>(after: Variadic<T>, fns: List<Variadic<any>>): Variadic<T>;
        // converge<T>: CurriedFunction2<Variadic<T>, List<Variadic<any>>, Variadic<T>>;

        /**
         * Counts the elements of a list according to how many match each value
         * of a key generated by the supplied function. Returns an object
         * mapping the keys produced by `fn` to the number of occurrences in
         * the list. Note that all keys are coerced to strings because of how
         * JavaScript objects work.
         */
        countBy<T>(fn: (a: T) => Prop, list: List<T>): Obj<number>;
        countBy<T>(fn: (a: T) => Prop): (list: List<T>) => Obj<number>;
        // countBy<T>: CurriedFunction2<(a: T) => Prop, List<T>, Obj<number>>;

        /**
         * Returns a curried equivalent of the provided function.
         */
        curry<T1, TResult>(fn: (a: T1) => TResult): CurriedFunction1<T1, TResult>;
        curry<T1, T2, TResult>(fn: (a: T1, b: T2) => TResult): CurriedFunction2<T1, T2, TResult>;
        curry<T1, T2, T3, TResult>(fn: (a: T1, b: T2, c: T3) => TResult): CurriedFunction3<T1, T2, T3, TResult>;
        curry<T1, T2, T3, T4, TResult>(fn: (a: T1, b: T2, c: T3, d: T4) => TResult): CurriedFunction4<T1, T2, T3, T4, TResult>;
        curry<T1, T2, T3, T4, T5, TResult>(fn: (a: T1, b: T2, c: T3, d: T4, e: T5) => TResult): CurriedFunction5<T1, T2, T3, T4, T5, TResult>;
        curry<T1, T2, T3, T4, T5, T6, TResult>(fn: (a: T1, b: T2, c: T3, d: T4, e: T5, f: T6) => TResult): CurriedFunction6<T1, T2, T3, T4, T5, T6, TResult>;
        curry<T1, T2, T3, T4, T5, T6, T7, TResult>(fn: (a: T1, b: T2, c: T3, d: T4, e: T5, f: T6, g: T7) => TResult): CurriedFunction7<T1, T2, T3, T4, T5, T6, T7, TResult>;
        curry<T1, T2, T3, T4, T5, T6, T7, T8, TResult>(fn: (a: T1, b: T2, c: T3, d: T4, e: T5, f: T6, g: T7, h: T8) => TResult): CurriedFunction8<T1, T2, T3, T4, T5, T6, T7, T8, TResult>;
        curry<T1, T2, T3, T4, T5, T6, T7, T8, T9, TResult>(fn: (a: T1, b: T2, c: T3, d: T4, e: T5, f: T6, g: T7, h: T8, i: T9) => TResult): CurriedFunction9<T1, T2, T3, T4, T5, T6, T7, T8, T9, TResult>;
        // curry(fn: Function): Function


        /**
         * Returns a curried equivalent of the provided function, with the specified arity.
         */
        curryN<T>(length: number, fn: Variadic<T>): Variadic<T>;
        // curryN<T>: CurriedFunction2<number, Variadic<T>, Variadic<T>>;


        /**
         * Decrements its argument.
         */
        dec(n: number): number;

        /**
         * Returns the second argument if it is not null or undefined. If it is null or undefined, the
         * first (default) argument is returned.
         */
        defaultTo<T,U>(a: T, b: U | null | undefined): T|U;
        defaultTo<T>(a: T): <U>(b: U | null | undefined) => T|U;
        // defaultTo<T,U>: CurriedFunction2<T, U, T|U>;

        /**
         * Makes a descending comparator function out of a function that returns a value that can be compared with `<` and `>`.
         */
        descend<T, V extends Ord>(comparator: (val: T) => V, a: T, b: T): number;
        descend<T, V extends Ord>(comparator: (val: T) => V, a: T): (b: T) => number;
        descend<T, V extends Ord>(comparator: (val: T) => V): CurriedFunction2<T, T, number>;
        // descend<T, V extends Ord>: CurriedFunction3<(val: T) => V, T, T, number>;

        /**
         * Finds the set (i.e. no duplicates) of all elements in the first list not contained in the second list.
         */
        difference<T>(list1: List<T>, list2: List<T>): T[];
        difference<T>(list1: List<T>): (list2: List<T>) => T[];
        // difference<T>: CurriedFunction2<List<T>, List<T>, T[]>;

        /**
         * Finds the set (i.e. no duplicates) of all elements in the first list not contained in the second list.
         * Duplication is determined according to the value returned by applying the supplied predicate to two list
         * elements.
         */
        // differenceWith<T>(pred: (a: T, b: T) => boolean, list1: List<T>, list2: List<T>): T[];
        // differenceWith<T>(pred: (a: T, b: T) => boolean, list1: List<T>): (list2: List<T>) => T[];
        // differenceWith<T>(pred: (a: T, b: T) => boolean): CurriedFunction2<List<T>,List<T>,T>;
        // differenceWith<T>: CurriedFunction3<(a: T, b: T) => boolean, List<T>, List<T>, T[]>;

        // base
        differenceWith<T>(pred: (a: T, b: T) => boolean, list1: List<T>, list2: List<T>): T[];
        differenceWith<T>(pred: (a: T, b: T) => boolean, list1: List<T>):{
            (list2: List<T>): T[];
        };
        differenceWith<T>(pred: (a: T, b: T) => boolean):{
            (list1: List<T>, list2: List<T>): T[];
            (list1: List<T>):{
                (list2: List<T>): T[];
            };
        };


        /*
         * Returns a new object that does not contain a prop property.
         */

        // TODO: fix, can't yet calculate type of object minus this key
        // dissoc<T,U>(prop: Prop, obj: T & { [prop: Prop]: any }): T; // wanna say the original object is the same with the extra key, but can't bind it to prop
        // dissoc<T,U extends Struct<any>>(prop: keyof U, obj: U): T;

        // simplified but inferrable: leave the key in
        // dissoc<T>(prop: keyof T, obj: T): T;
        dissoc(prop: Prop): <T>(obj: T) => T; // mix
        // dissoc<T>: CurriedFunction2<keyof T, T, T>;
        // dissoc<T>: CurriedFunction2<Prop, T, T>;

        // It seems impossible to infer the return type, so this may have to be specified explicitly
        dissoc<T>(prop: Prop, obj: Struct<any>): T;
        // dissoc(prop: Prop): <T>(obj: Struct<any>) => T; // mix
        // dissoc<T>: CurriedFunction2<Prop, Struct<any>, T>;
        // dissoc<U extends Struct<any>>(prop: keyof U): <T>(obj: U) => T; // can't do this, don't know U in time

        // mixed curry:
        dissoc(prop: Prop): {
          <T>(obj: T): T; // infer
          <T>(obj: Struct<any>): T; // manual
        };

        /**
         * Makes a shallow clone of an object, omitting the property at the given path.
         */
        dissocPath<T>(path: Path, obj: Struct<any>): T;
        dissocPath(path: Path): <T>(obj: Struct<any>) => T;
        // dissocPath<T>: CurriedFunction2<Path, Struct<any>, T>;

        /**
         * Divides two numbers. Equivalent to a / b.
         */
        divide(a: number, b: number): number;
        divide(a: number): (b: number) => number;
        // divide: CurriedFunction2<number, number, number>;

        /**
         * Returns a new list containing all but the first n elements of the given list.
         */
        drop<T extends List<any>>(n: number, xs: T): T;
        drop<T extends List<any>>(n: number): (xs: T) => T;
        // drop<T extends List<any>>: CurriedFunction2<number, T, T>;

        /**
         * Returns a list containing all but the last n elements of the given list.
         */
        // = drop
        dropLast<T extends List<any>>(n: number, xs: T): T;
        dropLast<T extends List<any>>(n: number): (xs: T) => T;
        // dropLast<T extends List<any>>: CurriedFunction2<number, T, T>;

        /**
         * Returns a new list containing all but last then elements of a given list, passing each value from the
         * right to the supplied predicate function, skipping elements while the predicate function returns true.
         */
        // = dropWhile
        dropLastWhile<T, R extends List<T>>(pred: Pred<T>, list: R): T[];
        dropLastWhile<T, R extends List<T>>(pred: Pred<T>): (list: R) => T[];
        // dropLastWhile<T, R extends List<T>>: CurriedFunction2<Pred<T>, R, T[]>;

        /**
         * Returns a new list containing the last n elements of a given list, passing each value to the supplied
         * predicate function, skipping elements while the predicate function returns true.
         */
        dropWhile<T, R extends List<T>>(pred: Pred<T>, list: R): T[];
        dropWhile<T, R extends List<T>>(pred: Pred<T>): (list: R) => T[];
        // dropWhile<T, R extends List<T>>: CurriedFunction2<Pred<T>, R, T[]>;

        /**
         * A function wrapping calls to the two functions in an || operation, returning the result of the first
         * function if it is truth-y and the result of the second function otherwise. Note that this is
         * short-circuited, meaning that the second function will not be invoked if the first returns a truth-y value.
         */
        either<T>(pred1: Pred<T>, pred2: Pred<T>): Pred<T>;
        either<T>(pred1: Pred<T>): (pred2: Pred<T>) => Pred<T>;
        // either<T>: CurriedFunction2<Pred<T>, Pred<T>, Pred<T>>;

        /**
         * Returns the empty value of its argument's type. Ramda defines the empty value of Array ([]), Object ({}),
         * String (''), and Arguments. Other types are supported if they define <Type>.empty and/or <Type>.prototype.empty.
         * Dispatches to the empty method of the first argument, if present.
         */
        empty<T>(x: T): T;

        /**
         * Takes a function and two values in its domain and returns true if the values map to the same value in the
         * codomain; false otherwise.
         */
        // eqBy<T>(fn: (a: T) => T, a: T, b: T): boolean;
        // eqBy<T>(fn: (a: T) => T, a: T): (b: T) => boolean;
        // eqBy<T>(fn: (a: T) => T): CurriedFunction2<T,T,boolean>;
        // eqBy<T>: CurriedFunction3<(a: T) => T, T, T, boolean>;

        // base
        eqBy<T>(fn: (a: T) => T, a: T, b: T): boolean;
        eqBy<T>(fn: (a: T) => T, a: T):{
            (b: T): boolean;
        };
        eqBy<T>(fn: (a: T) => T):{
            (a: T, b: T): boolean;
            (a: T):{
                (b: T): boolean;
            };
        };


        /**
         * Reports whether two functions have the same value for the specified property.
         */
        // hard to mix cuz different initial generics?

        // more generics
        // eqProps<T,U>(prop: Prop, obj1: T, obj2: U): boolean;
        // eqProps<T>(prop: Prop, obj1: T): <U>(obj2: U) => boolean;
        // eqProps<T,U>(prop: Prop): CurriedFunction2<T,U,boolean>;
        // eqProps(prop: Prop): <T,U>(obj1: T, obj2: U) => boolean;
        // eqProps<T,U>: CurriedFunction3<Prop, T, U, boolean>;

        // less generics
        // eqProps(prop: Prop, obj1: any, obj2: any): boolean;
        // eqProps(prop: Prop, obj1: any): (obj2: any) => boolean;
        // eqProps(prop: Prop): CurriedFunction2<any, any, boolean>;
        // eqProps(prop: Prop): (obj1: any, obj2: any) => boolean;
        // eqProps(prop: Prop): (obj1: any) => (obj2: any) => boolean;
        // eqProps: CurriedFunction3<Prop, any, any, boolean>;

        // base
        eqProps<T, U>(prop: Prop, obj1: T, obj2: U): boolean;
        eqProps<T>(prop: Prop, obj1: T):{
            <U>(obj2: U): boolean;
        };
        eqProps(prop: Prop):{
            <T, U>(obj1: T, obj2: U): boolean;
            <T>(obj1: T):{
                <U>(obj2: U): boolean;
            };
        };

        // less generics
        eqProps(prop: Prop, obj1: any, obj2: any): boolean;
        eqProps(prop: Prop, obj1: any):{
            (obj2: any): boolean;
        };
        eqProps(prop: Prop):{
            (obj1: any, obj2: any): boolean;
            (obj1: any):{
                (obj2: any): boolean;
            };
        };


        /**
         * Returns true if its arguments are equivalent, false otherwise. Dispatches to an equals method if present.
         * Handles cyclical data structures.
         */
        equals<T>(a: T, b: T): boolean;
        equals<T>(a: T): (b: T) => boolean;
        // equals<T>: CurriedFunction2<T, T, boolean>;

        /**
         * Creates a new object by evolving a shallow copy of object, according to the transformation functions.
         */
        // hard to mix cuz different generics

        // NestedObj
        evolve<V>(transformations: NestedObj<(v: any) => any>, obj: V): V;
        evolve<V>(transformations: NestedObj<(v: any) => any>): (obj: V) => V;
        // evolve<V>: CurriedFunction2<NestedObj<(v: any) => any>, V, V>;

        // no inference, manually supply result type
        evolve<T>(transformations: Obj<Function>, obj: any): T;
        evolve(transformations: Obj<Function>): <T>(obj: any) => T;
        // evolve<T>: CurriedFunction2<Obj<Function>, any, T>;

        /*
         * A function that always returns false. Any passed in parameters are ignored.
         */
        F(): false;

        /**
         * Returns a new list containing only those items that match a given predicate function. The predicate function is passed one argument: (value).
         */

        // array
        filter<T>(pred: Pred<T>, list: List<T>): T[];
        // filter<T>(pred: Pred<T>): (list: List<T>) => T[]; // should disable for mixing, but this somehow makes #73 fail
        // filter<T>: CurriedFunction2<Pred<T>, List<T>, T[]>;

        // functor to functor
        filter<T>(pred: Pred<T>, list: Functor<T>): Functor<T>;
        // filter<T>(pred: Pred<T>): (list: Functor<T>) => Functor<T>; // mix
        // filter<T>: CurriedFunction2<(value: T) => boolean, Functor<T>, Functor<T>>;

        // functor to array
        filter<T>(pred: Pred<T>, list: Functor<T>): T[];
        // filter<T>(pred: Pred<T>): (list: Functor<T>) => T[]; // mix
        // filter<T>: CurriedFunction2<(value: T) => boolean, Functor<T>, T[]>;

        // object
        filter<T,U extends Obj<T>>(pred: Pred<T>, obj: U) : Partial<U>;
        // filter<T>(pred: Pred<T>): <U extends Obj<T>>(obj: U) => U; // mix
        // filter<T,U extends Obj<T>>: CurriedFunction2<(value: T) => boolean, U, Partial<U>>;

        // mixed
        filter<T>(pred: Pred<T>): {
          (list: List<T>): T[];
          (list: Functor<T>): Functor<T>;
          (list: Functor<T>): T[];
          <U extends Obj<T>>(obj: U): U;
        };

        /**
         * Returns the first element of the list which matches the predicate, or `undefined` if no
         * element matches.
         */
        find<T>(fn: (a: T) => boolean, list: List<T>): T;
        find<T>(fn: (a: T) => boolean): (list: List<T>) => T;
        // find<T>: CurriedFunction2<(a: T) => boolean, List<T>, T>;


        /**
         * Returns the index of the first element of the list which matches the predicate, or `-1`
         * if no element matches.
         */
        findIndex<T>(fn: (a: T) => boolean, list: List<T>): number;
        findIndex<T>(fn: (a: T) => boolean): (list: List<T>) => number;
        // findIndex<T>: CurriedFunction2<(a: T) => boolean, List<T>, number>;

        /**
         * Returns the last element of the list which matches the predicate, or `undefined` if no
         * element matches.
         */
        findLast<T>(fn: (a: T) => boolean, list: List<T>): T;
        findLast<T>(fn: (a: T) => boolean): (list: List<T>) => T;
        // findLast<T>: CurriedFunction2<(a: T) => boolean, List<T>, T>;

        /**
         * Returns the index of the last element of the list which matches the predicate, or
         * `-1` if no element matches.
         */
        findLastIndex<T>(fn: (a: T) => boolean, list: List<T>): number;
        findLastIndex<T>(fn: (a: T) => boolean): (list: List<T>) => number;
        // findLastIndex<T>: CurriedFunction2<(a: T) => boolean, List<T>, number>;

        /**
         * Returns a new list by pulling every item out of it (and all its sub-arrays) and putting
         * them in a new array, depth-first.
         */
        // flatten<T>(x: ArrayLike<ArrayLike<ArrayLike<ArrayLike<ArrayLike<ArrayLike<ArrayLike<T>>>>>>>): T[];
        // flatten<T>(x: ArrayLike<ArrayLike<ArrayLike<ArrayLike<ArrayLike<ArrayLike<T>>>>>>): T[];
        // flatten<T>(x: ArrayLike<ArrayLike<ArrayLike<ArrayLike<ArrayLike<T>>>>>): T[];
        // flatten<T>(x: ArrayLike<ArrayLike<ArrayLike<ArrayLike<T>>>>): T[];
        // flatten<T>(x: ArrayLike<ArrayLike<ArrayLike<T>>>): T[];
        // flatten<T>(x: ArrayLike<ArrayLike<T>>): T[];
        // flatten<T>(x: ArrayLike<T>): T[];
        // TODO: figure out how to handle arrays using different levels of nesting
        // flatten<T>(x: ListOfRecursiveArraysOrValues<T>): T[];
        flatten<T>(x: NestedArray<T>): T[];

        /**
         * Returns a new function much like the supplied one, except that the first two arguments'
         * order is reversed.
         */
        flip<T,U,TResult>(fn: (arg0: T, arg1: U) => TResult): (arg1: U, arg0?: T) => TResult;
        flip<T,U,Rest,TResult>(fn: (arg0: T, arg1: U, ...args: Rest[]) => TResult): (arg1: U, arg0?: T, ...args: Rest[]) => TResult;


        /**
         * Iterate over an input list, calling a provided function fn for each element in the list.
         */
        forEach<T>(fn: (x: T) => void, list: List<T>): T[];
        forEach<T>(fn: (x: T) => void): (list: List<T>) => T[];
        // forEach<T>: CurriedFunction2<(x: T) => void, List<T>, T[]>;

        /**
         * Iterate over an input object, calling a provided function fn for each key and value in the object.
         */
        forEachObjIndexed<T, Inp extends Struct<T>>(fn: (val: T, key: string, obj?: Inp) => void, o: Inp): Inp;
        forEachObjIndexed<T, Inp extends Struct<T>>(fn: (val: T, key: string, obj?: Inp) => void): (o: Inp) => Inp;
        // forEachObjIndexed<T, Inp extends Struct<T>>: CurriedFunction2<(val: T, key: string, obj?: Inp) => void, Inp, Inp>;

        /**
         * Creates a new object out of a list key-value pairs.
         */
        fromPairs<V>(pairs: List<KeyValuePair<Prop, V>>): Obj<V>;

        /**
         * Splits a list into sublists stored in an object, based on the result of
         * calling a String-returning function
         * on each element, and grouping the results according to values returned.
         */
        groupBy<T>(fn: (a: T) => Prop, list: List<T>): Obj<T[]>;
        groupBy<T>(fn: (a: T) => Prop): (list: List<T>) => Obj<T[]>;
        // groupBy<T>: CurriedFunction2<(a: T) => Prop, List<T>, Obj<T[]>>;

        /**
         * Takes a list and returns a list of lists where each sublist's elements are all "equal" according to the provided equality function
         */
        groupWith<T, R extends List<T>>(fn: (x: T, y: T) => boolean, list: R): R[];
        groupWith<T, R extends List<T>>(fn: (x: T, y: T) => boolean): (list: R) => R[];
        // groupWith<T, R extends List<T>>: CurriedFunction2<(x: T, y: T) => boolean, R, R[]>;

        /**
         * Returns true if the first parameter is greater than the second.
         */
        gt(a: number, b: number): boolean;
        gt(a: number): (b: number) => boolean;
        // gt: CurriedFunction2<number, number, boolean>;

        /**
         * Returns true if the first parameter is greater than or equal to the second.
         */
        gte(a: number, b: number): boolean;
        gte(a: number): (b: number) => boolean;
        // gte: CurriedFunction2<number, number, boolean>;

        /**
         * Returns whether or not an object has an own property with the specified name.
         */

        // no generics
        has(s: Prop, obj: Struct<any>): boolean;
        has(s: Prop): (obj: Struct<any>) => boolean;
        // has: CurriedFunction2<Prop, Struct<any>, boolean>;

        // // bound generic, hopefully gives a hint as to what goes into obj
        // has<T extends Struct<any>>(s: Prop, obj: T): boolean;
        // // has(s: Prop): <T extends Struct<any>>(obj: T) => boolean; // mix
        // // has<T extends Struct<any>>: CurriedFunction2<Prop, T, boolean>;

        // // free generic, helps make a few tests pass. TODO: kill this workaround?
        // has<T>(s: Prop, obj: T): boolean;
        // // has(s: Prop): <T>(obj: T) => boolean; // mix
        // // has<T>: CurriedFunction2<Prop, T, boolean>;

        // // mixed
        // has(s: Prop): {
        //   <T extends Struct<any>>(obj: T): boolean;
        //   <T>(obj: T): boolean;
        // }

        /**
         * Returns whether or not an object or its prototype chain has a property with the specified name
         */
        // = has

        // no generics
        hasIn(s: Prop, obj: Struct<any>): boolean;
        hasIn(s: Prop): (obj: Struct<any>) => boolean;
        // hasIn: CurriedFunction2<Prop, Struct<any>, boolean>;

        // // bound generic, hopefully gives a hint as to what goes into obj
        // hasIn<T extends Struct<any>>(s: Prop, obj: T): boolean;
        // // hasIn(s: Prop): <T extends Struct<any>>(obj: T) => boolean; // mix
        // // hasIn<T extends Struct<any>>: CurriedFunction2<Prop, T, boolean>;

        // // free generic, helps make a few tests pass. TODO: kill this workaround?
        // hasIn<T>(s: Prop, obj: T): boolean;
        // // hasIn(s: Prop): <T>(obj: T) => boolean; // mix
        // // hasIn<T>: CurriedFunction2<Prop, T, boolean>;

        // // mixed
        // hasIn(s: Prop): {
        //   <T extends Struct<any>>(obj: T): boolean;
        //   <T>(obj: T): boolean;
        // }

        /**
         * Returns the first element in a list.
         * In some libraries this function is named `first`.
         */
        head<T extends List<any>>(list: T): T[0] | undefined;
        head(list: string): string | undefined;
        // tuple attempts; it doesn't like these.
        head<T>(list: [T]): T;
        head<T0, T1>(list: [T0, T1]): T0;
        head<T0, T1, T2>(list: [T0, T1, T2]): T0;

        /**
         * Returns true if its arguments are identical, false otherwise. Values are identical if they reference the
         * same memory. NaN is identical to NaN; 0 and -0 are not identical.
         */
        identical<T>(a: T, b: T): boolean;
        identical<T>(a: T): (b: T) => boolean;
        // identical<T>: CurriedFunction2<T, T, boolean>;

        /**
         * A function that does nothing but return the parameter supplied to it. Good as a default
         * or placeholder function.
         */
        identity<T>(a: T): T;

        /**
         * Creates a function that will process either the onTrue or the onFalse function depending upon the result
         * of the condition predicate.
         */
        ifElse<T,U,V>(fn: Pred<T>, onTrue: (v: T) => U, onFalse: (v: T) => V): (v: T) => U|V;
        // ifElse<T,U,V>: CurriedFunction3<Pred<T>, (v: T) => U, (v: T) => V, (v: T) => U|V>;


        /**
         * Increments its argument.
         */
        inc(n: number): number;

        /**
         * Given a function that generates a key, turns a list of objects into an object indexing the objects
         * by the given key.
         */
        indexBy<T>(fn: (a: T) => Prop, list: List<T>): Obj<T>;
        indexBy<T>(fn: (a: T) => Prop): (list: List<T>) => Obj<T>;
        // indexBy<T>: CurriedFunction2<(a: T) => Prop, List<T>, Obj<T>>;

        /**
         * Returns the position of the first occurrence of an item in an array
         * (by strict equality),
         * or -1 if the item is not included in the array.
         */
        indexOf<T>(target: T, list: List<T>): number;
        indexOf<T>(target: T): (list: List<T>) => number;
        // indexOf<T>: CurriedFunction2<T, List<T>, number>;

        /**
         * Returns all but the last element of a list.
         */
        init<T extends List<any>>(list: T): T;

        /**
         * Inserts the supplied element into the list, at index index. Note that
         * this is not destructive: it returns a copy of the list with the changes.
         */

        // homogeneous list
        // insert<T>(index: number, elt: T, list: List<T>): T[];
        // insert<T>(index: number, elt: T): (list: List<T>) => T[];
        // insert<T>(index: number): CurriedFunction2<T, List<T>, T[]>;
        // insert(index: number): <T>(elt: T, list: List<T>) => T[];
        // insert(index: number): <T>(elt: T) => (list: List<T>) => T[];
        // insert<T>: CurriedFunction3<number, T, List<T>, T[]>;

        // base
        insert<T>(index: number, elt: T, list: List<T>): T[];
        insert<T>(index: number, elt: T):{
            (list: List<T>): T[];
        };
        insert(index: number):{
            <T>(elt: T, list: List<T>): T[];
            <T>(elt: T):{
                (list: List<T>): T[];
            };
        };


        // TODO: tuples?

        /**
         * Inserts the sub-list into the list, at index `index`. _Note that this
         * is not destructive_: it returns a copy of the list with the changes.
         */

        // homogeneous lists (different types)
        // insertAll<T,U>(index: number, elts: List<T>, list: List<U>): Array<T|U>;
        // insertAll<T,U>(index: number, elts: List<T>): (list: List<U>) => Array<T|U>;
        // insertAll<T,U>(index: number): CurriedFunction2<List<T>, List<U>, Array<T|U>>;
        // insertAll(index: number): <T,U>(elts: List<T>, list: List<U>) => Array<T|U>;
        // insertAll(index: number): <T>(elts: List<T>) => <U>(list: List<U>) => Array<T|U>;
        // insertAll<T>: CurriedFunction3<number, List<T>, List<U>, Array<T|U>>;

        // homogeneous lists (same type)
        // insertAll<T extends List<any>>(index: number): CurriedFunction2<T, T, T>;

        // TODO: allowing either or both arrays to be tuples?

        // base
        insertAll<T, U>(index: number, elts: List<T>, list: List<U>): Array<T|U>;
        insertAll<T>(index: number, elts: List<T>):{
            <U>(list: List<U>): Array<T|U>;
        };
        insertAll(index: number):{
            <T, U>(elts: List<T>, list: List<U>): Array<T|U>;
            <T>(elts: List<T>):{
                <U>(list: List<U>): Array<T|U>;
            };
        };


        /**
         * Combines two lists into a set (i.e. no duplicates) composed of those elements common to both lists.
         */
        intersection<T,U>(list1: List<T>, list2: List<U>): Array<T|U>;
        intersection<T>(list1: List<T>): <U>(list2: List<U>) => Array<T|U>;
        // intersection<T,U>: CurriedFunction2<List<T>, List<U>, Array<T|U>>;


        /**
         * Combines two lists into a set (i.e. no duplicates) composed of those
         * elements common to both lists.  Duplication is determined according
         * to the value returned by applying the supplied predicate to two list
         * elements.
         */
        // intersectionWith<T>(pred: (a: T, b: T) => boolean, list1: List<T>, list2: List<T>): T[];
        // intersectionWith<T>(pred: (a: T, b: T) => boolean): CurriedFunction2<List<T>, List<T>, T[]>;
        // intersectionWith<T>: CurriedFunction3<(a: T, b: T) => boolean, List<T>, List<T>, T[]>;

        // base
        intersectionWith<T>(pred: (a: T, b: T) => boolean, list1: List<T>, list2: List<T>): T[];
        intersectionWith<T>(pred: (a: T, b: T) => boolean, list1: List<T>):{
            (list2: List<T>): T[];
        };
        intersectionWith<T>(pred: (a: T, b: T) => boolean):{
            (list1: List<T>, list2: List<T>): T[];
            (list1: List<T>):{
                (list2: List<T>): T[];
            };
        };


        /**
         * Creates a new list with the separator interposed between elements.
         */
        intersperse<T>(separator: T, list: List<T>): T[];
        intersperse<T>(separator: T): (list: List<T>) => T[];
        // intersperse<T>: CurriedFunction2<T, List<T>, T[]>;

        /**
         * Transforms the items of the list with the transducer and appends the transformed items to the accumulator
         * using an appropriate iterator function based on the accumulator type.
         */
        // into<T,U,V extends AccOpts<T,U>>(acc: V, xf: (list: List<T>) => U, list: List<T>): U;
        // into<T,U,V extends AccOpts<T,U>>(acc: V, xf: (list: List<T>) => U): (list: List<T>) => U;
        // into<T,U,V extends AccOpts<T,U>>(acc: V): CurriedFunction2<(list: List<T>) => U, List<T>, U>;
        // into<T,U,V extends AccOpts<T,U>>(acc: V): (xf: (list: List<T>) => U, list: List<T>) => U;
        // into<T,U,V extends AccOpts<T,U>>(acc: V): (xf: (list: List<T>) => U) => (list: List<T>) => U;
        // into<T,U,V extends AccOpts<T,U>>: CurriedFunction3<V, (list: List<T>) => U, List<T>, U>;

        // base
        into<V extends AccOpts<T, U>, T, U>(acc: V, xf: (list: List<T>) => U, list: List<T>): U;
        into<V extends AccOpts<T, U>, T, U>(acc: V, xf: (list: List<T>) => U):{
            (list: List<T>): U;
        };
        into<V extends AccOpts<T, U>, T, U>(acc: V):{
            <T, U>(xf: (list: List<T>) => U, list: List<T>): U;
            <T, U>(xf: (list: List<T>) => U):{
                (list: List<T>): U;
            };
        };


        /**
         * Same as R.invertObj, however this accounts for objects with duplicate values by putting the values into an array.
         */
        invert(obj: Struct<Prop>): Obj<List<string>>;

        /**
         * Returns a new object with the keys of the given object as values, and the values of the given object as keys.
         */
        invertObj(obj: Struct<Prop>): Obj<string>;

        /**
         * Turns a named method of an object (or object prototype) into a function that can be
         * called directly. Passing the optional `len` parameter restricts the returned function to
         * the initial `len` parameters of the method.
         *
         * The returned function is curried and accepts `len + 1` parameters (or `method.length + 1`
         * when `len` is not specified), and the final parameter is the target object.
         */
        // with keyof -- currently can't seem do to function application like this yet
        // invoker<T, K extends keyof T, R> (len: number /* = 0 */, name: K, obj: T): obj[K]();
        // // invoker<T, K extends keyof T, R>: CurriedFunction3<number /* = 0 */, K, T, obj[K]()>;
        // invoker<T, K extends keyof T, P1, R>(len: number /* = 1 */, name: K, x1: P1, obj: T): obj[K](x1);
        // // invoker<T, K extends keyof T, P1, R>: CurriedFunction4<number /* = 0 */, K, P1, T, obj[K](P1)>;
        // invoker<T, K extends keyof T, P1, P2, R>(len: number /* = 2 */, name: K, x1: P1, x2: P2, obj: T): obj[K](x1, x2);
        // // invoker<T, K extends keyof T, P1, P2, R>: CurriedFunction5<number /* = 0 */, K, P1, P2, T, obj[K](P1, P2)>;
        // invoker<T, K extends keyof T, P1, P2, P3, R>(len: number /* = 3 */, name: K, x1: P1, x2: P2, x3: P3, obj: T): obj[K](x1, x2, x3);
        // // invoker<T, K extends keyof T, P1, P2, P3, R>: CurriedFunction6<number /* = 0 */, K, P1, P2, P3, T, obj[K](P1, P2, P3)>;
        // invoker<T, K extends keyof T, P1, P2, P3, P4, R>(len: number /* = 4 */, name: K, x1: P1, x2: P2, x3: P3, x4: P4, obj: T): obj[K](x1, x2, x3, x4);
        // // invoker<T, K extends keyof T, P1, P2, P3, P4, R>: CurriedFunction7<number /* = 0 */, K, P1, P2, P3, P4, T, obj[K](P1, P2, P3, P4)>;
        // invoker<T, K extends keyof T, P1, P2, P3, P4, P5, R>(len: number /* = 5 */, name: K, x1: P1, x2: P2, x3: P3, x4: P4, x5: P5, obj: T): obj[K](x1, x2, x3, x4, x5);
        // // invoker<T, K extends keyof T, P1, P2, P3, P4, P5, R>: CurriedFunction8<number /* = 0 */, K, P1, P2, P3, P4, P5, T, obj[K](P1, P2, P3, P4, P5)>;

        // manually type results
        invoker<T, R> (len: number /* = 0 */, name: Prop, obj: T): R;
        invoker<T, R> (len: number/* = 0 */, name: Prop): (obj: T) => R;

        invoker<T, P1, R>(len: number /* = 1 */, name: Prop, x1: P1, obj: T): R;
        invoker<T, P1, R>(len: number /* = 1 */, name: Prop): CurriedFunction2<P1, T, R>;

        invoker<T, P1, P2, R>(len: number /* = 2 */, name: Prop, x1: P1, x2: P2, obj: T): R;
        invoker<T, P1, P2, R>(len: number /* = 2 */, name: Prop): CurriedFunction3<P1, P2, T, R>;

        invoker<T, P1, P2, P3, R>(len: number /* = 3 */, name: Prop, x1: P1, x2: P2, x3: P3, obj: T): R;
        invoker<T, P1, P2, P3, R>(len: number /* = 3 */, name: Prop): CurriedFunction4<P1, P2, P3, T, R>;

        invoker<T, P1, P2, P3, P4, R>(len: number /* = 4 */, name: Prop, x1: P1, x2: P2, x3: P3, x4: P4, obj: T): R;
        invoker<T, P1, P2, P3, P4, R>(len: number /* = 4 */, name: Prop): CurriedFunction5<P1, P2, P3, P4, T, R>;

        invoker<T, P1, P2, P3, P4, P5, R>(len: number /* = 5 */, name: Prop, x1: P1, x2: P2, x3: P3, x4: P4, x5: P5, obj: T): R;
        invoker<T, P1, P2, P3, P4, P5, R>(len: number /* = 5 */, name: Prop): CurriedFunction6<P1, P2, P3, P4, P5, T, R>;

        /**
         * See if an object (`val`) is an instance of the supplied constructor.
         * This function will check up the inheritance chain, if any.
         */
        is<T>(ctor: Type<T>, val: any): val is T;
        is<T>(ctor: Type<T>): (val: any) => val is T;
        // is<T>: CurriedFunction2<T, any, val is T>; // um, val undefined

        /**
         * Tests whether or not an object is similar to an array.
         * @deprecated: 0.23.0
         */
        isArrayLike(val: any): val is List<any>;
        // isArrayLike(val: any): boolean;

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
        isNil(value: any): boolean;

        /**
         * Returns a string made by inserting the `separator` between each
         * element and concatenating all the elements into a single string.
         */
        join(x: Prop, xs: Array<any>): string;
        join(x: Prop): (xs: Array<any>) => string;
        // join: CurriedFunction2<Prop, Array<any>, string>;

        /**
         * Applies a list of functions to a list of values.
         */
        juxt<T,U>(fns: {(...args: T[]): U}[]): (...args: T[]) => U[];


        /**
         * Returns a list containing the names of all the enumerable own
         * properties of the supplied object.
         */
        keys(x: Struct<any>): string[];

        /**
         * Returns a list containing the names of all the
         * properties of the supplied object, including prototype properties.
         */
        keysIn(obj: Struct<any>): string[];

        /**
         * Returns the last element from a list.
         */
        last<T, R extends List<T>>(list: R): T | undefined;

        /**
         * Returns the position of the last occurrence of an item (by strict equality) in
         * an array, or -1 if the item is not included in the array.
         */
        // = indexOf
        lastIndexOf<T>(target: T, list: List<T>): number;
        lastIndexOf<T>(target: T): (list: List<T>) => number;
        // lastIndexOf<T>: CurriedFunction2<T, List<T>, number>;

        /**
         * Returns the number of elements in the array by returning list.length.
         */
        length(list: List<any>): number;

        /**
         * Returns a lens for the given getter and setter functions. The getter
         * "gets" the value of the focus; the setter "sets" the value of the focus.
         * The setter should not mutate the data structure.
         */
        // hard to mix cuz different generics

        // assume setter doesn't change the type
        lens<V, U extends Struct<any>>(getter: (s: U) => V, setter: (a: V, s: U) => U): ManualLens<V>;
        lens<V, U extends Struct<any>>(getter: (s: U) => V): (setter: (a: V, s: U) => U) => ManualLens<V>;
        lens<V>(getter: (s: Struct<any>) => V): <U extends Struct<any>>(setter: (a: V, s: U) => U) => ManualLens<V>;
        // ^ ignore getter param being `U` so I can get away with 1 manual generic rather than having to add the inferred `U`. Useful if the getter doesn't have an explicit return type.
        // lens<V, U extends Struct<any>>: CurriedFunction2<(s: U) => V, (a: V, s: U) => U, ManualLens<V>>;

        // allows setter to change value type
        lens<T,U,V>(getter: (s: T) => U, setter: (a: U, s: T) => V): Lens<T,U>;
        lens<T,U,V>(getter: (s: T) => U): (setter: (a: U, s: T) => V) => Lens<T,U>;
        // lens<T,U,V>: CurriedFunction2<(s: T) => U, (a: U, s: T) => V, Lens<T,U>>;

        /**
         * Creates a lens that will focus on index n of the source array.
         */
        // lensIndex<T, K extends keyof T>(n: K): KeyLens<T, K>;
        lensIndex<T>(n: number): ManualLens<T>;
        lensIndex(n: number): UnknownLens;

        /**
         * Returns a lens whose focus is the specified path.
         * See also view, set, over.
         */
        lensPath<T>(path: Path): ManualLens<T>;
        lensPath(path: Path): UnknownLens;

        /**
         * lensProp creates a lens that will focus on property k of the source object.
         */
        // lensProp<T, K extends keyof T>(n: K): KeyLens<T, K>;
        lensProp<T>(prop: Prop): ManualLens<T>;
        lensProp(prop: Prop): UnknownLens;

        /**
         * "lifts" a function of arity > 1 so that it may "map over" a list, Function or other object that satisfies
         * the FantasyLand Apply spec.
         */
        lift<TResult>(fn: () => TResult): () => TResult[];
        lift<T1, TResult>(fn: (v1: T1) => TResult): (v1: List<T1>) => TResult[];
        lift<T1, T2, TResult>(fn: (v1: T1, v2: T2) => TResult): (v1: List<T1>, v2: List<T2>) => TResult[];
        lift<T1, T2, T3, TResult>(fn: (v1: T1, v2: T2, v3: T3) => TResult): (v1: List<T1>, v2: List<T2>, v3: List<T3>) => TResult[];
        lift<T1, T2, T3, T4, TResult>(fn: (v1: T1, v2: T2, v3: T3, v4: T4) => TResult): (v1: List<T1>, v2: List<T2>, v3: List<T3>, v4: List<T4>) => TResult[];
        lift<T1, T2, T3, T4, T5, TResult>(fn: (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5) => TResult): (v1: List<T1>, v2: List<T2>, v3: List<T3>, v4: List<T4>, v5: List<T5>) => TResult[];
        lift<T1, T2, T3, T4, T5, T6, TResult>(fn: (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6) => TResult): (v1: List<T1>, v2: List<T2>, v3: List<T3>, v4: List<T4>, v5: List<T5>, v6: List<T6>) => TResult[];
        lift<T1, T2, T3, T4, T5, T6, T7, TResult>(fn: (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6, v7: T7) => TResult): (v1: List<T1>, v2: List<T2>, v3: List<T3>, v4: List<T4>, v5: List<T5>, v6: List<T6>, v7: List<T7>) => TResult[];
        lift<T1, T2, T3, T4, T5, T6, T7, T8, TResult>(fn: (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6, v7: T7, v8: T8) => TResult): (v1: List<T1>, v2: List<T2>, v3: List<T3>, v4: List<T4>, v5: List<T5>, v6: List<T6>, v7: List<T7>, v8: List<T8>) => TResult[];
        lift<T>(fn: Variadic<T>): (...argLists: any[][]) => T[];

        /**
         * "lifts" a function to be the specified arity, so that it may "map over" that many lists, Functions or other
         * objects that satisfy the FantasyLand Apply spec.
         */
        liftN<TResult>(n: number, fn: () => TResult): () => TResult[];
        liftN<T1, TResult>(n: number, fn: (v1: T1) => TResult): (v1: List<T1>) => TResult[];
        liftN<T1, T2, TResult>(n: number, fn: (v1: T1, v2: T2) => TResult): (v1: List<T1>, v2: List<T2>) => TResult[];
        liftN<T1, T2, T3, TResult>(n: number, fn: (v1: T1, v2: T2, v3: T3) => TResult): (v1: List<T1>, v2: List<T2>, v3: List<T3>) => TResult[];
        liftN<T1, T2, T3, T4, TResult>(n: number, fn: (v1: T1, v2: T2, v3: T3, v4: T4) => TResult): (v1: List<T1>, v2: List<T2>, v3: List<T3>, v4: List<T4>) => TResult[];
        liftN<T1, T2, T3, T4, T5, TResult>(n: number, fn: (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5) => TResult): (v1: List<T1>, v2: List<T2>, v3: List<T3>, v4: List<T4>, v5: List<T5>) => TResult[];
        liftN<T1, T2, T3, T4, T5, T6, TResult>(n: number, fn: (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6) => TResult): (v1: List<T1>, v2: List<T2>, v3: List<T3>, v4: List<T4>, v5: List<T5>, v6: List<T6>) => TResult[];
        liftN<T1, T2, T3, T4, T5, T6, T7, TResult>(n: number, fn: (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6, v7: T7) => TResult): (v1: List<T1>, v2: List<T2>, v3: List<T3>, v4: List<T4>, v5: List<T5>, v6: List<T6>, v7: List<T7>) => TResult[];
        liftN<T1, T2, T3, T4, T5, T6, T7, T8, TResult>(n: number, fn: (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6, v7: T7, v8: T8) => TResult): (v1: List<T1>, v2: List<T2>, v3: List<T3>, v4: List<T4>, v5: List<T5>, v6: List<T6>, v7: List<T7>, v8: List<T8>) => TResult[];

        liftN(n: number): {
            <TResult>(fn: () => TResult): () => TResult[];
            <T1, TResult>(fn: (v1: T1) => TResult): (v1: List<T1>) => TResult[];
            <T1, T2, TResult>(fn: (v1: T1, v2: T2) => TResult): (v1: List<T1>, v2: List<T2>) => TResult[];
            <T1, T2, T3, TResult>(fn: (v1: T1, v2: T2, v3: T3) => TResult): (v1: List<T1>, v2: List<T2>, v3: List<T3>) => TResult[];
            <T1, T2, T3, T4, TResult>(fn: (v1: T1, v2: T2, v3: T3, v4: T4) => TResult): (v1: List<T1>, v2: List<T2>, v3: List<T3>, v4: List<T4>) => TResult[];
            <T1, T2, T3, T4, T5, TResult>(fn: (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5) => TResult): (v1: List<T1>, v2: List<T2>, v3: List<T3>, v4: List<T4>, v5: List<T5>) => TResult[];
            <T1, T2, T3, T4, T5, T6, TResult>(fn: (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6) => TResult): (v1: List<T1>, v2: List<T2>, v3: List<T3>, v4: List<T4>, v5: List<T5>, v6: List<T6>) => TResult[];
            <T1, T2, T3, T4, T5, T6, T7, TResult>(fn: (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6, v7: T7) => TResult): (v1: List<T1>, v2: List<T2>, v3: List<T3>, v4: List<T4>, v5: List<T5>, v6: List<T6>, v7: List<T7>) => TResult[];
            <T1, T2, T3, T4, T5, T6, T7, T8, TResult>(fn: (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6, v7: T7, v8: T8) => TResult): (v1: List<T1>, v2: List<T2>, v3: List<T3>, v4: List<T4>, v5: List<T5>, v6: List<T6>, v7: List<T7>, v8: List<T8>) => TResult[];

            <T>(fn: Variadic<T>): (...argLists: any[][]) => T[];
        };

        liftN<T>(n: number, fn: Variadic<T>): (...argLists: any[][]) => T[];
        // liftN<T>: CurriedFunction2<number, Variadic<T>, (...argLists: any[][]) => T[]>;

        /**
         * Returns true if the first parameter is less than the second.
         */
        lt(a: number, b: number): boolean;
        lt(a: number): (b: number) => boolean;
        // lt: CurriedFunction2<number, number, boolean>;

        /**
         * Returns true if the first parameter is less than or equal to the second.
         */
        lte(a: number, b: number): boolean;
        lte(a: number): (b: number) => boolean;
        // lte: CurriedFunction2<number, number, boolean>;

        /**
         * Returns a new list, constructed by applying the supplied function to every element of the supplied list.
         */

        // homogeneous:

        // array-like
        map<T, U>(fn: (x: T) => U, list: List<T>): U[];
        // map<T, U>(fn: (x: T) => U): (list: List<T>) => U[]; // disabling for mix breaks a few tests?
        // map<T, U>: CurriedFunction2<(x: T) => U, List<T>, U[]>;

        // object: keyof version
        map<T, U, M extends Obj<T>>(fn: (value: T) => U, obj: M): Obj<U>;
        map<T, U, M extends Obj<T>>(fn: (value: T) => U, obj: M): Obj<U>;
        // map<T, U>(fn: (value: T) => U): <M extends Obj<T>>(obj: M) => {[K in keyof M]: U}; // mix
        // map<T, U, M extends Obj<T>>: CurriedFunction2<(value: T) => U, M, {[K in keyof M]: U}>;

        // object: Record version
        map<T, U, K extends string>(f: (x: T) => U, obj:Obj<T>): Obj<U>;
        // map<T, U>(f: (x: T) => U): <K extends string>(obj: Record<K, T>) => Record<K, U>; // mix
        // map<T, U, K extends string>: CurriedFunction2<(x: T) => U, Record<K, T>), Record<K, U>>;

        // functor
        map<T, U>(fn: (x: T) => U, obj: Functor<T>): Functor<U>;
        // map<T, U>(fn: (x: T) => U): (obj: Functor<T>) => Functor<U>; // mix
        // map<T, U>: CurriedFunction2<(x: T) => U, Functor<T>, Functor<U>>;

        // separating values: https://github.com/Microsoft/TypeScript/issues/12342
        // map<A,B,T,U>(fn: (a: A) => B, tpl: [T,U]): [ typeof fn(T), typeof fn(U) ];
        // obj. version?

        // TODO: heterogeneous versions

        // array-like
        // map<T, U, T1, T2>(fn: (x: T) => U, list: [T1, T2]): [fn(T1), fn(T1)];
        // map<F extends Function, T1, T2>(fn: F, list: [T1, T2]): [F(T1), F(T1)];
        // map<T, U, T1, T2>(fn: (x: T) => U, list: [T1, T2]): [typeof fn(T1), typeof fn(T1)];
        // map<F extends Function, T1, T2>(fn: F, list: [T1, T2]): [typeof F(T1), typeof F(T1)];
        // <T1, T2>(list: [T1, T2]): [fn(T1), fn(T1)];

        // object

        // mixed:
        map<T, U>(fn: (x: T) => U): {
          <M extends Obj<T>>(obj: M): Obj<U>;
          <K extends string>(obj: Obj<T>): Obj<U>;
          (obj: Functor<T>): Functor<U>;
          (list: List<T>): U[];
        };

        /**
         * The mapAccum function behaves like a combination of map and reduce.
         */
        // mapAccum<T, U, TResult>(fn: (acc: U, value: T) => [U, TResult], acc: U, list: List<T>): [U, TResult[]];
        // mapAccum<T, U, TResult>(fn: (acc: U, value: T) => [U, TResult], acc: U): (list: List<T>) => [U, TResult[]];
        // mapAccum<T, U, TResult>(fn: (acc: U, value: T) => [U, TResult]): CurriedFunction2<U,List<T>,[U, TResult[]]>;
        // mapAccum<T, U, TResult>: CurriedFunction3<(acc: U, value: T) => [U, TResult], U, List<T>, [U, TResult[]]>;

        // base
        mapAccum<T, U, TResult>(fn: (acc: U, value: T) => [U, TResult], acc: U, list: List<T>): [U, TResult[]];
        mapAccum<T, U, TResult>(fn: (acc: U, value: T) => [U, TResult], acc: U):{
            (list: List<T>): [U, TResult[]];
        };
        mapAccum<T, U, TResult>(fn: (acc: U, value: T) => [U, TResult]):{
            (acc: U, list: List<T>): [U, TResult[]];
            (acc: U):{
                (list: List<T>): [U, TResult[]];
            };
        };


        /**
         * The mapAccumRight function behaves like a combination of map and reduce.
         */
        // mapAccumRight<T, U, TResult>(fn: (value: T, acc: U) => [TResult, U], acc: U, list: List<T>): [TResult[], U];
        // mapAccumRight<T, U, TResult>(fn: (value: T, acc: U) => [TResult, U], acc: U): (list: List<T>) => [TResult[], U];
        // mapAccumRight<T, U, TResult>(fn: (value: T, acc: U) => [TResult, U]): CurriedFunction2<U, List<T>, [TResult[], U]>;
        // mapAccumRight<T, U, TResult>: CurriedFunction3<(value: T, acc: U) => [TResult, U], U, List<T>, [TResult[], U]>;

        // base
        mapAccumRight<T, U, TResult>(fn: (value: T, acc: U) => [TResult, U], acc: U, list: List<T>): [TResult[], U];
        mapAccumRight<T, U, TResult>(fn: (value: T, acc: U) => [TResult, U], acc: U):{
            (list: List<T>): [TResult[], U];
        };
        mapAccumRight<T, U, TResult>(fn: (value: T, acc: U) => [TResult, U]):{
            (acc: U, list: List<T>): [TResult[], U];
            (acc: U):{
                (list: List<T>): [TResult[], U];
            };
        };


        /**
         * Like map, but but passes additional parameters to the mapping function.
         */
        mapIndexed<T, U, V extends List<T>>(fn: (val: T, key: number, list: V) => U, list: V): U[];
        mapIndexed<T, U, V extends List<T>>(fn: (val: T, key: number, list: V) => U): (list: V) => U[];
        // mapIndexed<T, U, V extends List<T>>: CurriedFunction2<(val: T, key: number, list: V) => U, V, U[]>;


        /**
         * Like mapObj, but but passes additional arguments to the predicate function.
         */
        // hard to mix cuz different generics

        // keyof
        mapObjIndexed<T, V, M extends Obj<T>>(fn: (value: T, key: string, obj?: M) => V, obj: M): Obj<V>;
        mapObjIndexed<T, V, M extends Obj<T>>(fn: (value: T, key: string, obj?: M) => V): (obj: M) => Obj<V>;
        // mapObjIndexed<T, V, M extends Obj<T>>: CurriedFunction2<(value: T, key: string, obj?: M) => V, M, {[K in keyof M]: V}>;

        // Record
        mapObjIndexed<T, U, K extends string>(f: (value: T, key: string, obj?: Record<K, T>) => U, obj: Obj<T>): Obj<U>;
        mapObjIndexed<T, U, K extends string>(f: (value: T, key: string, obj?: Record<K, T>) => U): <K extends string>(obj: Obj<T>) => Obj<U>;  // potentially overwriting K but whatever
        // mapObjIndexed<T, U, K extends string>: CurriedFunction2<(value: T, key: string, obj?: Record<K, T>) => U, Record<K, T>), Record<K, U>>;

        /**
         * Tests a regular expression agains a String
         */
        match(regexp: RegExp, str: string): string[];
        match(regexp: RegExp): (str: string) => string[];
        // match: CurriedFunction2<RegExp, string, string[]>;


        /**
         * mathMod behaves like the modulo operator should mathematically, unlike the `%`
         * operator (and by extension, R.modulo). So while "-17 % 5" is -2,
         * mathMod(-17, 5) is 3. mathMod requires Integer arguments, and returns NaN
         * when the modulus is zero or negative.
         */
        // |NaN? what's its type?
        mathMod(a: number, b: number): number;
        mathMod(a: number): (b: number) => number;
        // mathMod: CurriedFunction2<number, number, number>;


        /**
         * Returns the larger of its two arguments.
         */
        max<T extends Ord>(a: T, b: T): T;
        max<T extends Ord>(a: T): (b: T) => T;
        // max<T extends Ord>: CurriedFunction2<T, T, T>;

        /**
         * Takes a function and two values, and returns whichever value produces
         * the larger result when passed to the provided function.
         */
        // maxBy<T>(keyFn: (a: T) => Ord, a: T, b: T): T;
        // maxBy<T>(keyFn: (a: T) => Ord): CurriedFunction2<T, T, T>;
        // maxBy<T>: CurriedFunction3<(a: T) => Ord, T, T, T>;

        // base
        maxBy<T>(keyFn: (a: T) => Ord, a: T, b: T): T;
        maxBy<T>(keyFn: (a: T) => Ord, a: T):{
            (b: T): T;
        };
        maxBy<T>(keyFn: (a: T) => Ord):{
            (a: T, b: T): T;
            (a: T):{
                (b: T): T;
            };
        };


        /**
         * Returns the mean of the given list of numbers.
         */
        mean(list: List<number>): number;

        /**
         * Returns the median of the given list of numbers.
         */
        median(list: List<number>): number;

        /**
         * Creates a new function that, when invoked, caches the result of calling fn for a given argument set and
         * returns the result. Subsequent calls to the memoized fn with the same argument set will not result in an
         * additional call to fn; instead, the cached result for that set of arguments will be returned.
         */
        memoize<T>(fn: Variadic<T>): Variadic<T>;

        /**
         * Create a new object with the own properties of a
         * merged with the own properties of object b.
         * This function will *not* mutate passed-in objects.
         */
        merge<T1 extends Struct<any>, T2 extends Struct<any>>(a: T1, b: T2): T1 & T2;
        merge<T1 extends Struct<any>>(a: T1): <T2 extends Struct<any>>(b: T2) => T1 & T2;
        // merge<T1 extends Struct<any>, T2 extends Struct<any>>: CurriedFunction2<T1, T2, T1 & T2>;


        /**
         * Merges a list of objects together into one object.
         */
        mergeAll<T>(list: List<any>): T;

        /**
         * Creates a new object with the own properties of the two provided objects. If a key exists in both objects,
         * the provided function is applied to the values associated with the key in each object, with the result being used as
         * the value associated with the key in the returned object. The key will be excluded from the returned object if the
         * resulting value is undefined.
         */
        // mergeWith<U,V>(fn: (x: any, z: any) => any, a: U, b: V): U & V;
        // mergeWith<U>(fn: (x: any, z: any) => any, a: U): <V>(b: V) => U & V;
        // // mergeWith(fn: (x: any, z: any) => any): <U,V>(a: U, b: V) => U & V;
        // mergeWith<U,V>(fn: (x: any, z: any) => any): CurriedFunction2<U,V,U&V>;
        // // mergeWith<U,V>: CurriedFunction3<(x: any, z: any) => any, U, V, U & V>;

        // base
        mergeWith<U, V>(fn: (x: any, z: any) => any, a: U, b: V): U & V;
        mergeWith<U>(fn: (x: any, z: any) => any, a: U):{
            <V>(b: V): U & V;
        };
        mergeWith(fn: (x: any, z: any) => any):{
            <U, V>(a: U, b: V): U & V;
            <U>(a: U):{
                <V>(b: V): U & V;
            };
        };


        /**
         * Creates a new object with the own properties of the two provided objects. If a key exists in both objects,
         * the provided function is applied to the key and the values associated with the key in each object, with the
         * result being used as the value associated with the key in the returned object. The key will be excluded from
         * the returned object if the resulting value is undefined.
         */
        // mergeWithKey<U,V>(fn: (str: string, x: any, z: any) => any, a: U, b: V): U & V;
        // mergeWithKey<U>(fn: (str: string, x: any, z: any) => any, a: U): <V>(b: V) => U & V;
        // // mergeWithKey(fn: (str: string, x: any, z: any) => any): <U,V>(a: U, b: V) => U & V;
        // mergeWithKey<U,V>(fn: (str: string, x: any, z: any) => any): CurriedFunction2<U,V,U&V>;
        // // mergeWithKey<U,V>: CurriedFunction3<(str: string, x: any, z: any) => any, U, V, U & V>;

        // mergeWithKey
        mergeWithKey<U, V>(fn: (str: string, x: any, z: any) => any, a: U, b: V): U & V;
        mergeWithKey<U>(fn: (str: string, x: any, z: any) => any, a: U):{
            <V>(b: V): U & V;
        };
        mergeWithKey(fn: (str: string, x: any, z: any) => any):{
            <U, V>(a: U, b: V): U & V;
            <U>(a: U):{
                <V>(b: V): U & V;
            };
        };


        /**
         * Returns the smaller of its two arguments.
         */
        min<T extends Ord>(a: T, b: T): T;
        min<T extends Ord>(a: T): (b: T) => T;
        // min<T extends Ord>: CurriedFunction2<T, T, T>;

        /**
         * Takes a function and two values, and returns whichever value produces
         * the smaller result when passed to the provided function.
         */
        // minBy<T>(keyFn: (a: T) => Ord, a: T, b: T): T;
        // minBy<T>(keyFn: (a: T) => Ord): CurriedFunction2<T, T, T>;
        // // minBy<T>: CurriedFunction3<(a: T) => Ord, T, T, T>;

        // base
        minBy<T>(keyFn: (a: T) => Ord, a: T, b: T): T;
        minBy<T>(keyFn: (a: T) => Ord, a: T):{
            (b: T): T;
        };
        minBy<T>(keyFn: (a: T) => Ord):{
            (a: T, b: T): T;
            (a: T):{
                (b: T): T;
            };
        };


        /**
         * Divides the second parameter by the first and returns the remainder.
         * The flipped version (`moduloBy`) may be more useful curried.
         * Note that this functions preserves the JavaScript-style behavior for
         * modulo. For mathematical modulo see `mathMod`
         */
        modulo(a: number, b: number): number;
        modulo(a: number): (b: number) => number;
        // modulo: CurriedFunction2<number, number, number>;

        /**
         * Multiplies two numbers. Equivalent to a * b but curried.
         */
        multiply(a: number, b: number): number;
        multiply(a: number): (b: number) => number;
        // multiply: CurriedFunction2<number, number, number>;


        /**
         * Wraps a function of any arity (including nullary) in a function that accepts exactly n parameters.
         * Any extraneous parameters will not be passed to the supplied function.
         */
        nAry<T>(n: number, fn: Variadic<T>): Variadic<T>;
        nAry(n: number): <T>(fn: Variadic<T>) => Variadic<T>;
        // nAry<T>: CurriedFunction2<number, Variadic<T>, Variadic<T>>;

        /**
         * Negates its argument.
         */
        negate(n: number): number;


        /**
         * Returns true if no elements of the list match the predicate, false otherwise.
         */
        none<T>(fn: (a: T) => boolean, list: List<T>): boolean;
        none<T>(fn: (a: T) => boolean): (list: List<T>) => boolean;
        // none<T>: CurriedFunction2<(a: T) => boolean, List<T>, boolean>;


        /**
         * A function wrapping a call to the given function in a `!` operation.  It will return `true` when the
         * underlying function would return a false-y value, and `false` when it would return a truth-y one.
         */
        not(value: any): boolean;

        /**
         * Returns the nth element in a list.
         */
        nth<T>(n: number, list: List<T>): T | undefined;
        nth(n: number): <T>(list: List<T>) => T | undefined;
        // nth<T>: CurriedFunction2<number, List<T>, T>;

        /**
         * Returns a function which returns its nth argument.
         */
        nthArg(n: number): <T>(...a: T[]) => T;

        /**
         * Creates an object containing a single key:value pair.
         */

        // Record-based, key intact
        objOf<K extends string, V, T extends Obj<V>>(key: K, value: V): T;
        objOf<K extends string>(key: K): <V, T extends Obj<V>>(value: V) => T;
        // objOf<K extends string, V, T extends Record<K,V>>: CurriedFunction2<K, V, T>;

        // // Obj-based, loses key
        // objOf<T>(key: Prop, value: T): Obj<T>;
        // objOf(key: Prop): <T>(value: T) => Obj<T>;
        // // objOf<T>: CurriedFunction2<Prop, T, Obj<T>>;

        /**
         * Returns a singleton array containing the value provided.
         */
        of<T>(x: T): T[];

        /**
         * Returns a partial copy of an object omitting the keys specified.
         */
        omit<T>(names: List<Prop>, obj: T): T;
        omit(names: List<Prop>): <T>(obj: T) => T;
        // omit<T>: CurriedFunction2<List<Prop>, T, T>;

        /**
         * Accepts a function fn and returns a function that guards invocation of fn such that fn can only ever be
         * called once, no matter how many times the returned function is invoked. The first value calculated is
         * returned in subsequent invocations.
         */
        once<T>(fn: Variadic<T>): Variadic<T>;

        /**
         * A function that returns the first truthy of two arguments otherwise the last argument. Note that this is
         * NOT short-circuited, meaning that if expressions are passed they are both evaluated.
         * Dispatches to the or method of the first argument if applicable.
         */
        // hard to mix cuz different generics

        // values
        or<T, U>(a: T, b: U): T|U;
        or<T>(a: T): <U>(b: U) => T|U;
        // or<T, U>: CurriedFunction2<T, U, T|U>;

        // dispatch to some `or` method:
        or<T extends {or?: (alt: U) => T|U;}, U>(fn1: T, val2: U): T|U;
        or<T extends {or?: (alt: U) => T|U;}, U>(fn1: T): (val2: U) => T|U;
        // or<T extends {or?: (alt: U) => T|U;}, U>: CurriedFunction2<T, U, T|U>;

        /**
         * Returns the result of "setting" the portion of the given data structure
         * focused by the given lens to the given value.
         */
        // hard to mix cuz different generics

        // key lens:
        over<T, K extends string>(lens: UnknownLens, fn: (v: any) => any, value: T): T;
        over<T, K extends string>(lens: UnknownLens, fn: (v: any) => any): (value: T) => T;
        // over(lens: KeyLens<T,K>): <T, K extends keyof T>(fn: (v: T[K]) => T[K], value: T) => T;
        over<T, K extends string>(lens: UnknownLens): CurriedFunction2<(v: any) => any, T, T>;
        // over<T, K extends keyof T>: CurriedFunction3<KeyLens<T,K>, (v: T[K]) => T[K], T, T>;

        // regular lenses:

        // // Functor version:
        // over<V, T extends Functor<V>>(lens: Lens<T,V>|ManualLens<V>|UnknownLens, fn: (v: V) => V, value: T): T;
        // over<V>(lens: ManualLens<V>|UnknownLens, fn: (v: V) => V): <T extends Functor<V>>(value: T) => T;
        // over<V, T extends Functor<V>>(lens: Lens<T,V>|ManualLens<V>|UnknownLens): CurriedFunction2<(v: V) => V, T, T>;
        // // over<V, T extends Functor<V>>(lens: Lens<T,V>|ManualLens<V>|UnknownLens): (fn: (v: V) => V, value: T) => T;
        // // over<V, T extends Functor<V>>: CurriedFunction3<Lens<T,V>, (v: V) => V, T, T>;

        // // Functor version applied to array:
        // over<V, T extends List<V>>(lens: Lens<T,V>|ManualLens<V>|UnknownLens, fn: (v: V) => V, value: T): V[];
        // over<V, T extends List<V>>(lens: Lens<T,V>|ManualLens<V>|UnknownLens, fn: (v: V) => V): <T>(value: T) => V[];
        // over<V, T extends List<V>>(lens: Lens<T,V>|ManualLens<V>|UnknownLens): CurriedFunction2<(v: V) => V, T, V[]>;
        // // over<V, T extends List<V>>(lens: Lens<T,V>|ManualLens<V>|UnknownLens): <V>(fn: (v: V) => V, value: T) => V[];
        // // over<V, T extends List<V>>: CurriedFunction3<Lens<T,V>|ManualLens<V>|UnknownLens, (v: V) => V, T, V[]>;

        // // unbound value:
        // over<T,V>(lens: Lens<T,V>|ManualLens<V>|UnknownLens, fn: (v: V) => V, value: T): T;
        // over<V>(lens: ManualLens<V>|UnknownLens, fn: (v: V) => V): <T>(value: T) => T;
        // // over(lens: UnknownLens): <T,V>(fn: (v: V) => V, value: T) => T;
        // over<T,V>(lens: UnknownLens): CurriedFunction2<(v: V) => V, T, T>;
        // // over<T,V>: CurriedFunction3<Lens<T,V>, (v: V) => V, T, T>;

        // Functor version
        over<V, T extends Functor<V>>(lens: Lens<T, V>|ManualLens<V>|UnknownLens, fn: (v: V) => V, value: T): T;
        over<V, T extends Functor<V>>(lens: Lens<T, V>|ManualLens<V>|UnknownLens, fn: (v: V) => V):{
            (value: T): T;
        };
        over<V, T extends Functor<V>>(lens: Lens<T, V>|ManualLens<V>|UnknownLens):{
            (fn: (v: V) => V, value: T): T;
            (fn: (v: V) => V):{
                (value: T): T;
            };
        };

        // Functor version applied to array
        over<V, T extends List<V>>(lens: Lens<T, V>|ManualLens<V>|UnknownLens, fn: (v: V) => V, value: T): V[];
        over<V, T extends List<V>>(lens: Lens<T, V>|ManualLens<V>|UnknownLens, fn: (v: V) => V):{
            (value: T): V[];
        };
        over<V, T extends List<V>>(lens: Lens<T, V>|ManualLens<V>|UnknownLens):{
            (fn: (v: V) => V, value: T): V[];
            (fn: (v: V) => V):{
                (value: T): V[];
            };
        };

        // unbound value
        over<T, V>(lens: Lens<T, V>|ManualLens<V>|UnknownLens, fn: (v: V) => V, value: T): T;
        over<T, V>(lens: Lens<T, V>|ManualLens<V>|UnknownLens, fn: (v: V) => V):{
            (value: T): T;
        };
        over<T, V>(lens: Lens<T, V>|ManualLens<V>|UnknownLens):{
            (fn: (v: V) => V, value: T): T;
            (fn: (v: V) => V):{
                (value: T): T;
            };
        };


        /**
         * Takes two arguments, fst and snd, and returns [fst, snd].
         */
        pair<F,S>(fst: F, snd: S): [F, S];
        pair<F>(fst: F): <S>(snd: S) => [F, S];
        // pair<F,S>: CurriedFunction2<F, S, [F, S]>;

        /**
         * Accepts as its arguments a function and any number of values and returns a function that,
         * when invoked, calls the original function with all of the values prepended to the
         * original function's arguments list. In some libraries this function is named `applyLeft`.
         */
        partial<T>(fn: Variadic<T>, args: any[]): Variadic<T>;
        partial<T>(fn: Variadic<T>): (args: any[]) => Variadic<T>;
        // partial<T>: CurriedFunction2<Variadic<T>, args: any[], Variadic<T>>;
        // TODO: fixed-arity versions

        /**
         * Accepts as its arguments a function and any number of values and returns a function that,
         * when invoked, calls the original function with all of the values appended to the original
         * function's arguments list.
         */
        partialRight<T>(fn: Variadic<T>, args: any[]): Variadic<T>;
        partialRight<T>(fn: Variadic<T>): (args: any[]) => Variadic<T>;
        // partialRight<T>: CurriedFunction2<Variadic<T>, args: any[], Variadic<T>>;
        // TODO: fixed-arity versions

        /**
         * Takes a predicate and a list and returns the pair of lists of elements
         * which do and do not satisfy the predicate, respectively.
         */
        // arrays
        partition<T>(fn: (a: T) => boolean, list: List<T>): [T[], T[]];
        partition<T>(fn: (a: T) => boolean): (list: List<T>) => [T[], T[]];
        // partition<T>: CurriedFunction2<(a: T) => boolean, List<T>, [T[], T[]]>;
        // objects
        partition<T extends Obj<V>,U extends Obj<V>,V>(fn: (a: V) => boolean, obj: T & U) : [T,U];
        // partition<T extends Obj<V>,U extends Obj<V>,V>: CurriedFunction2<(a: T) => boolean, obj: T & U, [T,U]>;
        // objects, alternative notation
        partition<T, U extends Obj<T>>(fn: (a: T) => boolean, obj: U) : [Obj<T>, Obj<T>];
        // partition<T, U extends Obj<T>>: CurriedFunction2<(a: T) => boolean, U, [Partial<U>,Partial<U>]>;

        /**
         * Retrieve the value at a given path.
         */

        // fixed-length versions

        // simpler versions, able to deal only with objects, not arrays:

        // in-based
        path<T1 extends string, T2 extends string, TResult>(path: [T1, T2], obj: {[K1 in T1]: {[K2 in T2]: TResult}}): TResult;
        path<T1 extends string, T2 extends string, T3 extends string, TResult>(path: [T1, T2, T3], obj: {[K1 in T1]: {[K2 in T2]: {[K3 in T3]: TResult}}}): TResult;
        path<T1 extends string, T2 extends string, T3 extends string, T4 extends string, TResult>(path: [T1, T2, T3, T4], obj: {[K1 in T1]: {[K2 in T2]: {[K3 in T3]: {[K4 in T4]: TResult}}}}): TResult;
        path<T1 extends string, T2 extends string, T3 extends string, T4 extends string, T5 extends string, TResult>(path: [T1, T2, T3, T4, T5], obj: {[K1 in T1]: {[K2 in T2]: {[K3 in T3]: {[K4 in T4]: {[K5 in T5]: TResult}}}}}): TResult;
        path<T1 extends string, T2 extends string, T3 extends string, T4 extends string, T5 extends string, T6 extends string, TResult>(path: [T1, T2, T3, T4, T5, T6], obj: {[K1 in T1]: {[K2 in T2]: {[K3 in T3]: {[K4 in T4]: {[K5 in T5]: {[K6 in T6]: TResult}}}}}}): TResult;
        path<T1 extends string, T2 extends string, T3 extends string, T4 extends string, T5 extends string, T6 extends string, T7 extends string, TResult>(path: [T1, T2, T3, T4, T5, T6, T7], obj: {[K1 in T1]: {[K2 in T2]: {[K3 in T3]: {[K4 in T4]: {[K5 in T5]: {[K6 in T6]: {[K7 in T7]: TResult}}}}}}}): TResult;
        path<T1 extends string, T2 extends string, T3 extends string, T4 extends string, T5 extends string, T6 extends string, T7 extends string, T8 extends string, TResult>(path: [T1, T2, T3, T4, T5, T6, T7, T8], obj: {[K1 in T1]: {[K2 in T2]: {[K3 in T3]: {[K4 in T4]: {[K5 in T5]: {[K6 in T6]: {[K7 in T7]: {[K8 in T8]: TResult}}}}}}}}): TResult;
        path<T1 extends string, T2 extends string, T3 extends string, T4 extends string, T5 extends string, T6 extends string, T7 extends string, T8 extends string, T9 extends string, TResult>(path: [T1, T2, T3, T4, T5, T6, T7, T8, T9], obj: {[K1 in T1]: {[K2 in T2]: {[K3 in T3]: {[K4 in T4]: {[K5 in T5]: {[K6 in T6]: {[K7 in T7]: {[K8 in T8]: {[K9 in T9]: TResult}}}}}}}}}): TResult;

        // Record-based
        path<K1 extends string, K2 extends string, TResult>(path: [K1, K2], obj: Record<K1,Record<K2,TResult>>): TResult;
        path<K1 extends string, K2 extends string, K3 extends string, TResult>(path: [K1, K2, K3], obj: Record<K1,Record<K2,Record<K3,TResult>>>): TResult;
        path<K1 extends string, K2 extends string, K3 extends string, K4 extends string, TResult>(path: [K1, K2, K3, K4], obj: Record<K1,Record<K2,Record<K3,Record<K4,TResult>>>>): TResult;
        path<K1 extends string, K2 extends string, K3 extends string, K4 extends string, K5 extends string, TResult>(path: [K1, K2, K3, K4, K5], obj: Record<K1,Record<K2,Record<K3,Record<K4,Record<K5,TResult>>>>>): TResult;
        path<K1 extends string, K2 extends string, K3 extends string, K4 extends string, K5 extends string, K6 extends string, TResult>(path: [K1, K2, K3, K4, K5, K6], obj: Record<K1,Record<K2,Record<K3,Record<K4,Record<K5,Record<K6,TResult>>>>>>): TResult;
        path<K1 extends string, K2 extends string, K3 extends string, K4 extends string, K5 extends string, K6 extends string, K7 extends string, TResult>(path: [K1, K2, K3, K4, K5, K6, K7], obj: Record<K1,Record<K2,Record<K3,Record<K4,Record<K5,Record<K6,Record<K7,TResult>>>>>>>): TResult;
        path<K1 extends string, K2 extends string, K3 extends string, K4 extends string, K5 extends string, K6 extends string, K7 extends string, K8 extends string, TResult>(path: [K1, K2, K3, K4, K5, K6, K7, K8], obj: Record<K1,Record<K2,Record<K3,Record<K4,Record<K5,Record<K6,Record<K7,Record<K8,TResult>>>>>>>>): TResult;
        path<K1 extends string, K2 extends string, K3 extends string, K4 extends string, K5 extends string, K6 extends string, K7 extends string, K8 extends string, K9 extends string, TResult>(path: [K1, K2, K3, K4, K5, K6, K7, K8, K9], obj: Record<K1,Record<K2,Record<K3,Record<K4,Record<K5,Record<K6,Record<K7,Record<K8,Record<K9,TResult>>>>>>>>>): TResult;

        // for each path length list all combinations of objects and homogeneous arrays... tuples not supported yet.

        path<T1 extends string, TResult>(path: [T1], obj: {[K1 in T1]: TResult}): TResult;
        path<T1 extends number, TResult>(path: [T1], obj: TResult[]): TResult;
        path<T1 extends string, T2 extends string, TResult>(path: [T1, T2], obj: {[K1 in T1]: {[K2 in T2]: TResult}}): TResult;
        path<T1 extends string, T2 extends number, TResult>(path: [T1, T2], obj: {[K1 in T1]: TResult[]}): TResult;
        path<T1 extends number, T2 extends string, TResult>(path: [T1, T2], obj: {[K2 in T2]: TResult}[]): TResult;
        path<T1 extends number, T2 extends number, TResult>(path: [T1, T2], obj: TResult[][]): TResult;
        path<T1 extends string, T2 extends string, T3 extends string, TResult>(path: [T1, T2, T3], obj: {[K1 in T1]: {[K2 in T2]: {[K3 in T3]: TResult}}}): TResult;
        path<T1 extends string, T2 extends string, T3 extends number, TResult>(path: [T1, T2, T3], obj: {[K1 in T1]: {[K2 in T2]: TResult[]}}): TResult;
        path<T1 extends string, T2 extends number, T3 extends string, TResult>(path: [T1, T2, T3], obj: {[K1 in T1]: {[K3 in T3]: TResult}[]}): TResult;
        path<T1 extends string, T2 extends number, T3 extends number, TResult>(path: [T1, T2, T3], obj: {[K1 in T1]: TResult[][]}): TResult;
        path<T1 extends number, T2 extends string, T3 extends string, TResult>(path: [T1, T2, T3], obj: {[K2 in T2]: {[K3 in T3]: TResult}}[]): TResult;
        path<T1 extends number, T2 extends string, T3 extends number, TResult>(path: [T1, T2, T3], obj: {[K2 in T2]: TResult[]}[]): TResult;
        path<T1 extends number, T2 extends number, T3 extends string, TResult>(path: [T1, T2, T3], obj: {[K3 in T3]: TResult}[][]): TResult;
        path<T1 extends number, T2 extends number, T3 extends number, TResult>(path: [T1, T2, T3], obj: TResult[][][]): TResult;
        // path<T1 extends string, T2 extends string, T3 extends string, T4 extends string, TResult>(path: [T1, T2, T3, T4], obj: {[K1 in T1]: {[K2 in T2]: {[K3 in T3]: {[K4 in T4]: TResult}}}}): TResult;
        // path<T1 extends string, T2 extends string, T3 extends string, T4 extends number, TResult>(path: [T1, T2, T3, T4], obj: {[K1 in T1]: {[K2 in T2]: {[K3 in T3]: TResult[]}}}): TResult;
        // path<T1 extends string, T2 extends string, T3 extends number, T4 extends string, TResult>(path: [T1, T2, T3, T4], obj: {[K1 in T1]: {[K2 in T2]: {[K4 in T4]: TResult}[]}}): TResult;
        // path<T1 extends string, T2 extends string, T3 extends number, T4 extends number, TResult>(path: [T1, T2, T3, T4], obj: {[K1 in T1]: {[K2 in T2]: TResult[][]}}): TResult;
        // path<T1 extends string, T2 extends number, T3 extends string, T4 extends string, TResult>(path: [T1, T2, T3, T4], obj: {[K1 in T1]: {[K3 in T3]: {[K4 in T4]: TResult}}[]}): TResult;
        // path<T1 extends string, T2 extends number, T3 extends string, T4 extends number, TResult>(path: [T1, T2, T3, T4], obj: {[K1 in T1]: {[K3 in T3]: TResult[]}[]}): TResult;
        // path<T1 extends string, T2 extends number, T3 extends number, T4 extends string, TResult>(path: [T1, T2, T3, T4], obj: {[K1 in T1]: {[K4 in T4]: TResult}[][]}): TResult;
        // path<T1 extends string, T2 extends number, T3 extends number, T4 extends number, TResult>(path: [T1, T2, T3, T4], obj: {[K1 in T1]: TResult[][][]}): TResult;
        // path<T1 extends number, T2 extends string, T3 extends string, T4 extends string, TResult>(path: [T1, T2, T3, T4], obj: {[K2 in T2]: {[K3 in T3]: {[K4 in T4]: TResult}}}[]): TResult;
        // path<T1 extends number, T2 extends string, T3 extends string, T4 extends number, TResult>(path: [T1, T2, T3, T4], obj: {[K2 in T2]: {[K3 in T3]: TResult[]}}[]): TResult;
        // path<T1 extends number, T2 extends string, T3 extends number, T4 extends string, TResult>(path: [T1, T2, T3, T4], obj: {[K2 in T2]: {[K4 in T4]: TResult}[]}[]): TResult;
        // path<T1 extends number, T2 extends string, T3 extends number, T4 extends number, TResult>(path: [T1, T2, T3, T4], obj: {[K2 in T2]: TResult[][]}[]): TResult;
        // path<T1 extends number, T2 extends number, T3 extends string, T4 extends string, TResult>(path: [T1, T2, T3, T4], obj: {[K3 in T3]: {[K4 in T4]: TResult}}[][]): TResult;
        // path<T1 extends number, T2 extends number, T3 extends string, T4 extends number, TResult>(path: [T1, T2, T3, T4], obj: {[K3 in T3]: TResult[]}[][]): TResult;
        // path<T1 extends number, T2 extends number, T3 extends number, T4 extends string, TResult>(path: [T1, T2, T3, T4], obj: {[K4 in T4]: TResult}[][][]): TResult;
        // path<T1 extends number, T2 extends number, T3 extends number, T4 extends number, TResult>(path: [T1, T2, T3, T4], obj: TResult[][][][]): TResult;
        // path<T1 extends string, T2 extends string, T3 extends string, T4 extends string, T5 extends string, TResult>(path: [T1, T2, T3, T4, T5], obj: {[K1 in T1]: {[K2 in T2]: {[K3 in T3]: {[K4 in T4]: {[K5 in T5]: TResult}}}}}): TResult;
        // path<T1 extends string, T2 extends string, T3 extends string, T4 extends string, T5 extends number, TResult>(path: [T1, T2, T3, T4, T5], obj: {[K1 in T1]: {[K2 in T2]: {[K3 in T3]: {[K4 in T4]: TResult[]}}}}): TResult;
        // path<T1 extends string, T2 extends string, T3 extends string, T4 extends number, T5 extends string, TResult>(path: [T1, T2, T3, T4, T5], obj: {[K1 in T1]: {[K2 in T2]: {[K3 in T3]: {[K5 in T5]: TResult}[]}}}): TResult;
        // path<T1 extends string, T2 extends string, T3 extends string, T4 extends number, T5 extends number, TResult>(path: [T1, T2, T3, T4, T5], obj: {[K1 in T1]: {[K2 in T2]: {[K3 in T3]: TResult[][]}}}): TResult;
        // path<T1 extends string, T2 extends string, T3 extends number, T4 extends string, T5 extends string, TResult>(path: [T1, T2, T3, T4, T5], obj: {[K1 in T1]: {[K2 in T2]: {[K4 in T4]: {[K5 in T5]: TResult}}[]}}): TResult;
        // path<T1 extends string, T2 extends string, T3 extends number, T4 extends string, T5 extends number, TResult>(path: [T1, T2, T3, T4, T5], obj: {[K1 in T1]: {[K2 in T2]: {[K4 in T4]: TResult[]}[]}}): TResult;
        // path<T1 extends string, T2 extends string, T3 extends number, T4 extends number, T5 extends string, TResult>(path: [T1, T2, T3, T4, T5], obj: {[K1 in T1]: {[K2 in T2]: {[K5 in T5]: TResult}[][]}}): TResult;
        // path<T1 extends string, T2 extends string, T3 extends number, T4 extends number, T5 extends number, TResult>(path: [T1, T2, T3, T4, T5], obj: {[K1 in T1]: {[K2 in T2]: TResult[][][]}}): TResult;
        // path<T1 extends string, T2 extends number, T3 extends string, T4 extends string, T5 extends string, TResult>(path: [T1, T2, T3, T4, T5], obj: {[K1 in T1]: {[K3 in T3]: {[K4 in T4]: {[K5 in T5]: TResult}}}[]}): TResult;
        // path<T1 extends string, T2 extends number, T3 extends string, T4 extends string, T5 extends number, TResult>(path: [T1, T2, T3, T4, T5], obj: {[K1 in T1]: {[K3 in T3]: {[K4 in T4]: TResult[]}}[]}): TResult;
        // path<T1 extends string, T2 extends number, T3 extends string, T4 extends number, T5 extends string, TResult>(path: [T1, T2, T3, T4, T5], obj: {[K1 in T1]: {[K3 in T3]: {[K5 in T5]: TResult}[]}[]}): TResult;
        // path<T1 extends string, T2 extends number, T3 extends string, T4 extends number, T5 extends number, TResult>(path: [T1, T2, T3, T4, T5], obj: {[K1 in T1]: {[K3 in T3]: TResult[][]}[]}): TResult;
        // path<T1 extends string, T2 extends number, T3 extends number, T4 extends string, T5 extends string, TResult>(path: [T1, T2, T3, T4, T5], obj: {[K1 in T1]: {[K4 in T4]: {[K5 in T5]: TResult}}[][]}): TResult;
        // path<T1 extends string, T2 extends number, T3 extends number, T4 extends string, T5 extends number, TResult>(path: [T1, T2, T3, T4, T5], obj: {[K1 in T1]: {[K4 in T4]: TResult[]}[][]}): TResult;
        // path<T1 extends string, T2 extends number, T3 extends number, T4 extends number, T5 extends string, TResult>(path: [T1, T2, T3, T4, T5], obj: {[K1 in T1]: {[K5 in T5]: TResult}[][][]}): TResult;
        // path<T1 extends string, T2 extends number, T3 extends number, T4 extends number, T5 extends number, TResult>(path: [T1, T2, T3, T4, T5], obj: {[K1 in T1]: TResult[][][][]}): TResult;
        // path<T1 extends number, T2 extends string, T3 extends string, T4 extends string, T5 extends string, TResult>(path: [T1, T2, T3, T4, T5], obj: {[K2 in T2]: {[K3 in T3]: {[K4 in T4]: {[K5 in T5]: TResult}}}}[]): TResult;
        // path<T1 extends number, T2 extends string, T3 extends string, T4 extends string, T5 extends number, TResult>(path: [T1, T2, T3, T4, T5], obj: {[K2 in T2]: {[K3 in T3]: {[K4 in T4]: TResult[]}}}[]): TResult;
        // path<T1 extends number, T2 extends string, T3 extends string, T4 extends number, T5 extends string, TResult>(path: [T1, T2, T3, T4, T5], obj: {[K2 in T2]: {[K3 in T3]: {[K5 in T5]: TResult}[]}}[]): TResult;
        // path<T1 extends number, T2 extends string, T3 extends string, T4 extends number, T5 extends number, TResult>(path: [T1, T2, T3, T4, T5], obj: {[K2 in T2]: {[K3 in T3]: TResult[][]}}[]): TResult;
        // path<T1 extends number, T2 extends string, T3 extends number, T4 extends string, T5 extends string, TResult>(path: [T1, T2, T3, T4, T5], obj: {[K2 in T2]: {[K4 in T4]: {[K5 in T5]: TResult}}[]}[]): TResult;
        // path<T1 extends number, T2 extends string, T3 extends number, T4 extends string, T5 extends number, TResult>(path: [T1, T2, T3, T4, T5], obj: {[K2 in T2]: {[K4 in T4]: TResult[]}[]}[]): TResult;
        // path<T1 extends number, T2 extends string, T3 extends number, T4 extends number, T5 extends string, TResult>(path: [T1, T2, T3, T4, T5], obj: {[K2 in T2]: {[K5 in T5]: TResult}[][]}[]): TResult;
        // path<T1 extends number, T2 extends string, T3 extends number, T4 extends number, T5 extends number, TResult>(path: [T1, T2, T3, T4, T5], obj: {[K2 in T2]: TResult[][][]}[]): TResult;
        // path<T1 extends number, T2 extends number, T3 extends string, T4 extends string, T5 extends string, TResult>(path: [T1, T2, T3, T4, T5], obj: {[K3 in T3]: {[K4 in T4]: {[K5 in T5]: TResult}}}[][]): TResult;
        // path<T1 extends number, T2 extends number, T3 extends string, T4 extends string, T5 extends number, TResult>(path: [T1, T2, T3, T4, T5], obj: {[K3 in T3]: {[K4 in T4]: TResult[]}}[][]): TResult;
        // path<T1 extends number, T2 extends number, T3 extends string, T4 extends number, T5 extends string, TResult>(path: [T1, T2, T3, T4, T5], obj: {[K3 in T3]: {[K5 in T5]: TResult}[]}[][]): TResult;
        // path<T1 extends number, T2 extends number, T3 extends string, T4 extends number, T5 extends number, TResult>(path: [T1, T2, T3, T4, T5], obj: {[K3 in T3]: TResult[][]}[][]): TResult;
        // path<T1 extends number, T2 extends number, T3 extends number, T4 extends string, T5 extends string, TResult>(path: [T1, T2, T3, T4, T5], obj: {[K4 in T4]: {[K5 in T5]: TResult}}[][][]): TResult;
        // path<T1 extends number, T2 extends number, T3 extends number, T4 extends string, T5 extends number, TResult>(path: [T1, T2, T3, T4, T5], obj: {[K4 in T4]: TResult[]}[][][]): TResult;
        // path<T1 extends number, T2 extends number, T3 extends number, T4 extends number, T5 extends string, TResult>(path: [T1, T2, T3, T4, T5], obj: {[K5 in T5]: TResult}[][][][]): TResult;
        // path<T1 extends number, T2 extends number, T3 extends number, T4 extends number, T5 extends number, TResult>(path: [T1, T2, T3, T4, T5], obj: TResult[][][][][]): TResult;
        // path<T1 extends string, T2 extends string, T3 extends string, T4 extends string, T5 extends string, T6 extends string, TResult>(path: [T1, T2, T3, T4, T5, T6], obj: {[K1 in T1]: {[K2 in T2]: {[K3 in T3]: {[K4 in T4]: {[K5 in T5]: {[K6 in T6]: TResult}}}}}}): TResult;
        // path<T1 extends string, T2 extends string, T3 extends string, T4 extends string, T5 extends string, T6 extends number, TResult>(path: [T1, T2, T3, T4, T5, T6], obj: {[K1 in T1]: {[K2 in T2]: {[K3 in T3]: {[K4 in T4]: {[K5 in T5]: TResult[]}}}}}): TResult;
        // path<T1 extends string, T2 extends string, T3 extends string, T4 extends string, T5 extends number, T6 extends string, TResult>(path: [T1, T2, T3, T4, T5, T6], obj: {[K1 in T1]: {[K2 in T2]: {[K3 in T3]: {[K4 in T4]: {[K6 in T6]: TResult}[]}}}}): TResult;
        // path<T1 extends string, T2 extends string, T3 extends string, T4 extends string, T5 extends number, T6 extends number, TResult>(path: [T1, T2, T3, T4, T5, T6], obj: {[K1 in T1]: {[K2 in T2]: {[K3 in T3]: {[K4 in T4]: TResult[][]}}}}): TResult;
        // path<T1 extends string, T2 extends string, T3 extends string, T4 extends number, T5 extends string, T6 extends string, TResult>(path: [T1, T2, T3, T4, T5, T6], obj: {[K1 in T1]: {[K2 in T2]: {[K3 in T3]: {[K5 in T5]: {[K6 in T6]: TResult}}[]}}}): TResult;
        // path<T1 extends string, T2 extends string, T3 extends string, T4 extends number, T5 extends string, T6 extends number, TResult>(path: [T1, T2, T3, T4, T5, T6], obj: {[K1 in T1]: {[K2 in T2]: {[K3 in T3]: {[K5 in T5]: TResult[]}[]}}}): TResult;
        // path<T1 extends string, T2 extends string, T3 extends string, T4 extends number, T5 extends number, T6 extends string, TResult>(path: [T1, T2, T3, T4, T5, T6], obj: {[K1 in T1]: {[K2 in T2]: {[K3 in T3]: {[K6 in T6]: TResult}[][]}}}): TResult;
        // path<T1 extends string, T2 extends string, T3 extends string, T4 extends number, T5 extends number, T6 extends number, TResult>(path: [T1, T2, T3, T4, T5, T6], obj: {[K1 in T1]: {[K2 in T2]: {[K3 in T3]: TResult[][][]}}}): TResult;
        // path<T1 extends string, T2 extends string, T3 extends number, T4 extends string, T5 extends string, T6 extends string, TResult>(path: [T1, T2, T3, T4, T5, T6], obj: {[K1 in T1]: {[K2 in T2]: {[K4 in T4]: {[K5 in T5]: {[K6 in T6]: TResult}}}[]}}): TResult;
        // path<T1 extends string, T2 extends string, T3 extends number, T4 extends string, T5 extends string, T6 extends number, TResult>(path: [T1, T2, T3, T4, T5, T6], obj: {[K1 in T1]: {[K2 in T2]: {[K4 in T4]: {[K5 in T5]: TResult[]}}[]}}): TResult;
        // path<T1 extends string, T2 extends string, T3 extends number, T4 extends string, T5 extends number, T6 extends string, TResult>(path: [T1, T2, T3, T4, T5, T6], obj: {[K1 in T1]: {[K2 in T2]: {[K4 in T4]: {[K6 in T6]: TResult}[]}[]}}): TResult;
        // path<T1 extends string, T2 extends string, T3 extends number, T4 extends string, T5 extends number, T6 extends number, TResult>(path: [T1, T2, T3, T4, T5, T6], obj: {[K1 in T1]: {[K2 in T2]: {[K4 in T4]: TResult[][]}[]}}): TResult;
        // path<T1 extends string, T2 extends string, T3 extends number, T4 extends number, T5 extends string, T6 extends string, TResult>(path: [T1, T2, T3, T4, T5, T6], obj: {[K1 in T1]: {[K2 in T2]: {[K5 in T5]: {[K6 in T6]: TResult}}[][]}}): TResult;
        // path<T1 extends string, T2 extends string, T3 extends number, T4 extends number, T5 extends string, T6 extends number, TResult>(path: [T1, T2, T3, T4, T5, T6], obj: {[K1 in T1]: {[K2 in T2]: {[K5 in T5]: TResult[]}[][]}}): TResult;
        // path<T1 extends string, T2 extends string, T3 extends number, T4 extends number, T5 extends number, T6 extends string, TResult>(path: [T1, T2, T3, T4, T5, T6], obj: {[K1 in T1]: {[K2 in T2]: {[K6 in T6]: TResult}[][][]}}): TResult;
        // path<T1 extends string, T2 extends string, T3 extends number, T4 extends number, T5 extends number, T6 extends number, TResult>(path: [T1, T2, T3, T4, T5, T6], obj: {[K1 in T1]: {[K2 in T2]: TResult[][][][]}}): TResult;
        // path<T1 extends string, T2 extends number, T3 extends string, T4 extends string, T5 extends string, T6 extends string, TResult>(path: [T1, T2, T3, T4, T5, T6], obj: {[K1 in T1]: {[K3 in T3]: {[K4 in T4]: {[K5 in T5]: {[K6 in T6]: TResult}}}}[]}): TResult;
        // path<T1 extends string, T2 extends number, T3 extends string, T4 extends string, T5 extends string, T6 extends number, TResult>(path: [T1, T2, T3, T4, T5, T6], obj: {[K1 in T1]: {[K3 in T3]: {[K4 in T4]: {[K5 in T5]: TResult[]}}}[]}): TResult;
        // path<T1 extends string, T2 extends number, T3 extends string, T4 extends string, T5 extends number, T6 extends string, TResult>(path: [T1, T2, T3, T4, T5, T6], obj: {[K1 in T1]: {[K3 in T3]: {[K4 in T4]: {[K6 in T6]: TResult}[]}}[]}): TResult;
        // path<T1 extends string, T2 extends number, T3 extends string, T4 extends string, T5 extends number, T6 extends number, TResult>(path: [T1, T2, T3, T4, T5, T6], obj: {[K1 in T1]: {[K3 in T3]: {[K4 in T4]: TResult[][]}}[]}): TResult;
        // path<T1 extends string, T2 extends number, T3 extends string, T4 extends number, T5 extends string, T6 extends string, TResult>(path: [T1, T2, T3, T4, T5, T6], obj: {[K1 in T1]: {[K3 in T3]: {[K5 in T5]: {[K6 in T6]: TResult}}[]}[]}): TResult;
        // path<T1 extends string, T2 extends number, T3 extends string, T4 extends number, T5 extends string, T6 extends number, TResult>(path: [T1, T2, T3, T4, T5, T6], obj: {[K1 in T1]: {[K3 in T3]: {[K5 in T5]: TResult[]}[]}[]}): TResult;
        // path<T1 extends string, T2 extends number, T3 extends string, T4 extends number, T5 extends number, T6 extends string, TResult>(path: [T1, T2, T3, T4, T5, T6], obj: {[K1 in T1]: {[K3 in T3]: {[K6 in T6]: TResult}[][]}[]}): TResult;
        // path<T1 extends string, T2 extends number, T3 extends string, T4 extends number, T5 extends number, T6 extends number, TResult>(path: [T1, T2, T3, T4, T5, T6], obj: {[K1 in T1]: {[K3 in T3]: TResult[][][]}[]}): TResult;
        // path<T1 extends string, T2 extends number, T3 extends number, T4 extends string, T5 extends string, T6 extends string, TResult>(path: [T1, T2, T3, T4, T5, T6], obj: {[K1 in T1]: {[K4 in T4]: {[K5 in T5]: {[K6 in T6]: TResult}}}[][]}): TResult;
        // path<T1 extends string, T2 extends number, T3 extends number, T4 extends string, T5 extends string, T6 extends number, TResult>(path: [T1, T2, T3, T4, T5, T6], obj: {[K1 in T1]: {[K4 in T4]: {[K5 in T5]: TResult[]}}[][]}): TResult;
        // path<T1 extends string, T2 extends number, T3 extends number, T4 extends string, T5 extends number, T6 extends string, TResult>(path: [T1, T2, T3, T4, T5, T6], obj: {[K1 in T1]: {[K4 in T4]: {[K6 in T6]: TResult}[]}[][]}): TResult;
        // path<T1 extends string, T2 extends number, T3 extends number, T4 extends string, T5 extends number, T6 extends number, TResult>(path: [T1, T2, T3, T4, T5, T6], obj: {[K1 in T1]: {[K4 in T4]: TResult[][]}[][]}): TResult;
        // path<T1 extends string, T2 extends number, T3 extends number, T4 extends number, T5 extends string, T6 extends string, TResult>(path: [T1, T2, T3, T4, T5, T6], obj: {[K1 in T1]: {[K5 in T5]: {[K6 in T6]: TResult}}[][][]}): TResult;
        // path<T1 extends string, T2 extends number, T3 extends number, T4 extends number, T5 extends string, T6 extends number, TResult>(path: [T1, T2, T3, T4, T5, T6], obj: {[K1 in T1]: {[K5 in T5]: TResult[]}[][][]}): TResult;
        // path<T1 extends string, T2 extends number, T3 extends number, T4 extends number, T5 extends number, T6 extends string, TResult>(path: [T1, T2, T3, T4, T5, T6], obj: {[K1 in T1]: {[K6 in T6]: TResult}[][][][]}): TResult;
        // path<T1 extends string, T2 extends number, T3 extends number, T4 extends number, T5 extends number, T6 extends number, TResult>(path: [T1, T2, T3, T4, T5, T6], obj: {[K1 in T1]: TResult[][][][][]}): TResult;
        // path<T1 extends number, T2 extends string, T3 extends string, T4 extends string, T5 extends string, T6 extends string, TResult>(path: [T1, T2, T3, T4, T5, T6], obj: {[K2 in T2]: {[K3 in T3]: {[K4 in T4]: {[K5 in T5]: {[K6 in T6]: TResult}}}}}[]): TResult;
        // path<T1 extends number, T2 extends string, T3 extends string, T4 extends string, T5 extends string, T6 extends number, TResult>(path: [T1, T2, T3, T4, T5, T6], obj: {[K2 in T2]: {[K3 in T3]: {[K4 in T4]: {[K5 in T5]: TResult[]}}}}[]): TResult;
        // path<T1 extends number, T2 extends string, T3 extends string, T4 extends string, T5 extends number, T6 extends string, TResult>(path: [T1, T2, T3, T4, T5, T6], obj: {[K2 in T2]: {[K3 in T3]: {[K4 in T4]: {[K6 in T6]: TResult}[]}}}[]): TResult;
        // path<T1 extends number, T2 extends string, T3 extends string, T4 extends string, T5 extends number, T6 extends number, TResult>(path: [T1, T2, T3, T4, T5, T6], obj: {[K2 in T2]: {[K3 in T3]: {[K4 in T4]: TResult[][]}}}[]): TResult;
        // path<T1 extends number, T2 extends string, T3 extends string, T4 extends number, T5 extends string, T6 extends string, TResult>(path: [T1, T2, T3, T4, T5, T6], obj: {[K2 in T2]: {[K3 in T3]: {[K5 in T5]: {[K6 in T6]: TResult}}[]}}[]): TResult;
        // path<T1 extends number, T2 extends string, T3 extends string, T4 extends number, T5 extends string, T6 extends number, TResult>(path: [T1, T2, T3, T4, T5, T6], obj: {[K2 in T2]: {[K3 in T3]: {[K5 in T5]: TResult[]}[]}}[]): TResult;
        // path<T1 extends number, T2 extends string, T3 extends string, T4 extends number, T5 extends number, T6 extends string, TResult>(path: [T1, T2, T3, T4, T5, T6], obj: {[K2 in T2]: {[K3 in T3]: {[K6 in T6]: TResult}[][]}}[]): TResult;
        // path<T1 extends number, T2 extends string, T3 extends string, T4 extends number, T5 extends number, T6 extends number, TResult>(path: [T1, T2, T3, T4, T5, T6], obj: {[K2 in T2]: {[K3 in T3]: TResult[][][]}}[]): TResult;
        // path<T1 extends number, T2 extends string, T3 extends number, T4 extends string, T5 extends string, T6 extends string, TResult>(path: [T1, T2, T3, T4, T5, T6], obj: {[K2 in T2]: {[K4 in T4]: {[K5 in T5]: {[K6 in T6]: TResult}}}[]}[]): TResult;
        // path<T1 extends number, T2 extends string, T3 extends number, T4 extends string, T5 extends string, T6 extends number, TResult>(path: [T1, T2, T3, T4, T5, T6], obj: {[K2 in T2]: {[K4 in T4]: {[K5 in T5]: TResult[]}}[]}[]): TResult;
        // path<T1 extends number, T2 extends string, T3 extends number, T4 extends string, T5 extends number, T6 extends string, TResult>(path: [T1, T2, T3, T4, T5, T6], obj: {[K2 in T2]: {[K4 in T4]: {[K6 in T6]: TResult}[]}[]}[]): TResult;
        // path<T1 extends number, T2 extends string, T3 extends number, T4 extends string, T5 extends number, T6 extends number, TResult>(path: [T1, T2, T3, T4, T5, T6], obj: {[K2 in T2]: {[K4 in T4]: TResult[][]}[]}[]): TResult;
        // path<T1 extends number, T2 extends string, T3 extends number, T4 extends number, T5 extends string, T6 extends string, TResult>(path: [T1, T2, T3, T4, T5, T6], obj: {[K2 in T2]: {[K5 in T5]: {[K6 in T6]: TResult}}[][]}[]): TResult;
        // path<T1 extends number, T2 extends string, T3 extends number, T4 extends number, T5 extends string, T6 extends number, TResult>(path: [T1, T2, T3, T4, T5, T6], obj: {[K2 in T2]: {[K5 in T5]: TResult[]}[][]}[]): TResult;
        // path<T1 extends number, T2 extends string, T3 extends number, T4 extends number, T5 extends number, T6 extends string, TResult>(path: [T1, T2, T3, T4, T5, T6], obj: {[K2 in T2]: {[K6 in T6]: TResult}[][][]}[]): TResult;
        // path<T1 extends number, T2 extends string, T3 extends number, T4 extends number, T5 extends number, T6 extends number, TResult>(path: [T1, T2, T3, T4, T5, T6], obj: {[K2 in T2]: TResult[][][][]}[]): TResult;
        // path<T1 extends number, T2 extends number, T3 extends string, T4 extends string, T5 extends string, T6 extends string, TResult>(path: [T1, T2, T3, T4, T5, T6], obj: {[K3 in T3]: {[K4 in T4]: {[K5 in T5]: {[K6 in T6]: TResult}}}}[][]): TResult;
        // path<T1 extends number, T2 extends number, T3 extends string, T4 extends string, T5 extends string, T6 extends number, TResult>(path: [T1, T2, T3, T4, T5, T6], obj: {[K3 in T3]: {[K4 in T4]: {[K5 in T5]: TResult[]}}}[][]): TResult;
        // path<T1 extends number, T2 extends number, T3 extends string, T4 extends string, T5 extends number, T6 extends string, TResult>(path: [T1, T2, T3, T4, T5, T6], obj: {[K3 in T3]: {[K4 in T4]: {[K6 in T6]: TResult}[]}}[][]): TResult;
        // path<T1 extends number, T2 extends number, T3 extends string, T4 extends string, T5 extends number, T6 extends number, TResult>(path: [T1, T2, T3, T4, T5, T6], obj: {[K3 in T3]: {[K4 in T4]: TResult[][]}}[][]): TResult;
        // path<T1 extends number, T2 extends number, T3 extends string, T4 extends number, T5 extends string, T6 extends string, TResult>(path: [T1, T2, T3, T4, T5, T6], obj: {[K3 in T3]: {[K5 in T5]: {[K6 in T6]: TResult}}[]}[][]): TResult;
        // path<T1 extends number, T2 extends number, T3 extends string, T4 extends number, T5 extends string, T6 extends number, TResult>(path: [T1, T2, T3, T4, T5, T6], obj: {[K3 in T3]: {[K5 in T5]: TResult[]}[]}[][]): TResult;
        // path<T1 extends number, T2 extends number, T3 extends string, T4 extends number, T5 extends number, T6 extends string, TResult>(path: [T1, T2, T3, T4, T5, T6], obj: {[K3 in T3]: {[K6 in T6]: TResult}[][]}[][]): TResult;
        // path<T1 extends number, T2 extends number, T3 extends string, T4 extends number, T5 extends number, T6 extends number, TResult>(path: [T1, T2, T3, T4, T5, T6], obj: {[K3 in T3]: TResult[][][]}[][]): TResult;
        // path<T1 extends number, T2 extends number, T3 extends number, T4 extends string, T5 extends string, T6 extends string, TResult>(path: [T1, T2, T3, T4, T5, T6], obj: {[K4 in T4]: {[K5 in T5]: {[K6 in T6]: TResult}}}[][][]): TResult;
        // path<T1 extends number, T2 extends number, T3 extends number, T4 extends string, T5 extends string, T6 extends number, TResult>(path: [T1, T2, T3, T4, T5, T6], obj: {[K4 in T4]: {[K5 in T5]: TResult[]}}[][][]): TResult;
        // path<T1 extends number, T2 extends number, T3 extends number, T4 extends string, T5 extends number, T6 extends string, TResult>(path: [T1, T2, T3, T4, T5, T6], obj: {[K4 in T4]: {[K6 in T6]: TResult}[]}[][][]): TResult;
        // path<T1 extends number, T2 extends number, T3 extends number, T4 extends string, T5 extends number, T6 extends number, TResult>(path: [T1, T2, T3, T4, T5, T6], obj: {[K4 in T4]: TResult[][]}[][][]): TResult;
        // path<T1 extends number, T2 extends number, T3 extends number, T4 extends number, T5 extends string, T6 extends string, TResult>(path: [T1, T2, T3, T4, T5, T6], obj: {[K5 in T5]: {[K6 in T6]: TResult}}[][][][]): TResult;
        // path<T1 extends number, T2 extends number, T3 extends number, T4 extends number, T5 extends string, T6 extends number, TResult>(path: [T1, T2, T3, T4, T5, T6], obj: {[K5 in T5]: TResult[]}[][][][]): TResult;
        // path<T1 extends number, T2 extends number, T3 extends number, T4 extends number, T5 extends number, T6 extends string, TResult>(path: [T1, T2, T3, T4, T5, T6], obj: {[K6 in T6]: TResult}[][][][][]): TResult;
        // path<T1 extends number, T2 extends number, T3 extends number, T4 extends number, T5 extends number, T6 extends number, TResult>(path: [T1, T2, T3, T4, T5, T6], obj: TResult[][][][][][]): TResult;

        // fallback, prevents errors but lacks inference; expected result must be supplied manually.
        path<T>(path: Path, obj: Struct<any>): T | undefined;
        path(path: Path): <T>(obj: Struct<any>) => T | undefined;

        // path<T>: CurriedFunction2<Path, Struct<any>, T>;
        // failed attempt at proper typing, see https://github.com/Microsoft/TypeScript/issues/12393 :
        // path<U, K1 extends keyof T, K2 extends keyof T[K1], T extends { [K1]: { [K2]: U } }>(keys: [K1, K2], obj: T): U;
        // path<K1 extends keyof T, K2 extends keyof T[K1], T extends {}>(keys: [K1, K2], obj: T): T[K1][K2];

        /**
         * Determines whether a nested path on an object has a specific value,
         * in `R.equals` terms. Most likely used to filter a list.
         */
        // pathEq(path: Path, val: any, obj: Struct<any>): boolean;
        // pathEq(path: Path, val: any): (obj: Struct<any>) => boolean;
        // pathEq(path: Path): CurriedFunction2<any, Struct<any>, boolean>;
        // // pathEq: CurriedFunction3<Path, any, Struct<any>, boolean>;

        // base
        pathEq(p: Path, v: any, o: any): boolean;
        pathEq(p: Path, v: any): {
          (o: any): boolean;
        };
        pathEq(p: Path):{
          (v: any, o: any): boolean;
          (v: any):{
            (o: any): boolean;
          };
        };


        /**
         * If the given, non-null object has a value at the given path, returns the value at that path.
         * Otherwise returns the provided default value.
         */
        // pathOr<T>(d: T, p: Path, obj: Struct<any>): T|any;
        // pathOr<T>(d: T, p: Path): (obj: Struct<any>) => T|any;
        // pathOr<T>(d: T): CurriedFunction2<Path, Struct<any>, T|any>;
        // // pathOr<T>(d: T, p: Path): (obj: Struct<any>) => T|any;
        // // pathOr<T>(d: T): (p: Path, obj: Struct<any>) => T|any;
        // // pathOr<T>: CurriedFunction3<T, Path, Struct<any>, T|any>;

        // base
        pathOr<T>(d: T, p: Path, obj: Struct<any>): T|any;
        pathOr<T>(d: T, p: Path):{
            (obj: Struct<any>): T|any;
        };
        pathOr<T>(d: T):{
            (p: Path, obj: Struct<any>): T|any;
            (p: Path):{
                (obj: Struct<any>): T|any;
            };
        };


        /**
         * Returns `true` if the specified object property at given path satisfies the given predicate; `false`
         * otherwise.
         */
        // pathSatisfies<T>(fn: Pred<T>, p: Path, obj: any): boolean;
        // pathSatisfies<T>(fn: Pred<T>, p: Path): (obj: any) => boolean;
        // pathSatisfies<T>(fn: Pred<T>): CurriedFunction2<Path, any, boolean>;
        // // pathSatisfies<T>: CurriedFunction3<Pred<T>, Path, any, boolean>;

        // base
        pathSatisfies<T>(fn: Pred<T>, p: Path, obj: any): boolean;
        pathSatisfies<T>(fn: Pred<T>, p: Path):{
            (obj: any): boolean;
        };
        pathSatisfies<T>(fn: Pred<T>):{
            (p: Path, obj: any): boolean;
            (p: Path):{
                (obj: any): boolean;
            };
        };


        /**
         * Returns a partial copy of an object containing only the keys specified.  If the key does not exist, the
         * property is ignored.
         */
        pick<T, K extends Prop>(names: List<K>, obj: T): T;
        pick<T, K extends Prop>(names: List<K>): (obj: T) => T;
        // pick<T, K extends keyof T>: CurriedFunction2<List<K>, T, Pick<T, K>>;

        pick<T>(names: List<Prop>, obj: T): Partial<T>;
        pick<T>(names: List<Prop>): (obj: T) => Partial<T>;
        // pick<T>: CurriedFunction2<List<Prop>, T, Partial<T>>;

        /**
         * Similar to `pick` except that this one includes a `key: undefined` pair for properties that don't exist.
         */
        pickAll<T, K /*extends keyof T*/>(names: List<K>, obj: T): Partial<T>;
        pickAll<T, K /*extends keyof T*/>(names: List<K>): (obj: T) => Partial<T>;
        // pickAll<T, K /*extends keyof T*/>: CurriedFunction2<List<K>, T, Partial<T>>;


        /**
         * Returns a partial copy of an object containing only the keys that satisfy the supplied predicate.
         */
        pickBy<T>(pred: ObjPred<any>, obj: T): Partial<T>;
        pickBy(pred: ObjPred<any>): <T>(obj: T) => Partial<T>;
        // pickBy<T>: CurriedFunction2<ObjPred<any>, T, Partial<T>>;


        /**
         * Performs left-to-right function composition.
         * The leftmost function may have any arity; the remaining functions must be unary.
         * In some libraries this function is named sequence.
         * Note: The result of pipe is not automatically curried.
         */
        pipe<V0, T1>(fn0: (x0: V0) => T1): (x0: V0) => T1;
        pipe<V0, V1, T1>(fn0: (x0: V0, x1: V1) => T1): (x0: V0, x1: V1) => T1;
        pipe<V0, V1, V2, T1>(fn0: (x0: V0, x1: V1, x2: V2) => T1): (x0: V0, x1: V1, x2: V2) => T1;
        pipe<V0, V1, V2, V3, T1>(fn0: (x0: V0, x1: V1, x2: V2, x3: V3) => T1): (x0: V0, x1: V1, x2: V2, x3: V3) => T1;
        pipe<V0, T1, T2>(fn0: (x0: V0) => T1, fn1: (x: T1) => T2): (x0: V0) => T2;
        pipe<V0, V1, T1, T2>(fn0: (x0: V0, x1: V1) => T1, fn1: (x: T1) => T2): (x0: V0, x1: V1) => T2;
        pipe<V0, V1, V2, T1, T2>(fn0: (x0: V0, x1: V1, x2: V2) => T1, fn1: (x: T1) => T2): (x0: V0, x1: V1, x2: V2) => T2;
        pipe<V0, V1, V2, V3, T1, T2>(fn0: (x0: V0, x1: V1, x2: V2, x3: V3) => T1, fn1: (x: T1) => T2): (x0: V0, x1: V1, x2: V2, x3: V3) => T2;
        pipe<V0, T1, T2, T3>(fn0: (x0: V0) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3): (x0: V0) => T3;
        pipe<V0, V1, T1, T2, T3>(fn0: (x0: V0, x1: V1) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3): (x0: V0, x1: V1) => T3;
        pipe<V0, V1, V2, T1, T2, T3>(fn0: (x0: V0, x1: V1, x2: V2) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3): (x0: V0, x1: V1, x2: V2) => T3;
        pipe<V0, V1, V2, V3, T1, T2, T3>(fn0: (x0: V0, x1: V1, x2: V2, x3: V3) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3): (x0: V0, x1: V1, x2: V2, x3: V3) => T3;
        pipe<V0, T1, T2, T3, T4>(fn0: (x0: V0) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4): (x0: V0) => T4;
        pipe<V0, V1, T1, T2, T3, T4>(fn0: (x0: V0, x1: V1) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4): (x0: V0, x1: V1) => T4;
        pipe<V0, V1, V2, T1, T2, T3, T4>(fn0: (x0: V0, x1: V1, x2: V2) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4): (x0: V0, x1: V1, x2: V2) => T4;
        pipe<V0, V1, V2, V3, T1, T2, T3, T4>(fn0: (x0: V0, x1: V1, x2: V2, x3: V3) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4): (x0: V0, x1: V1, x2: V2, x3: V3) => T4;
        pipe<V0, T1, T2, T3, T4, T5>(fn0: (x0: V0) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4, fn4: (x: T4) => T5): (x0: V0) => T5;
        pipe<V0, V1, T1, T2, T3, T4, T5>(fn0: (x0: V0, x1: V1) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4, fn4: (x: T4) => T5): (x0: V0, x1: V1) => T5;
        pipe<V0, V1, V2, T1, T2, T3, T4, T5>(fn0: (x0: V0, x1: V1, x2: V2) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4, fn4: (x: T4) => T5): (x0: V0, x1: V1, x2: V2) => T5;
        pipe<V0, V1, V2, V3, T1, T2, T3, T4, T5>(fn0: (x0: V0, x1: V1, x2: V2, x3: V3) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4, fn4: (x: T4) => T5): (x0: V0, x1: V1, x2: V2, x3: V3) => T5;
        pipe<V0, T1, T2, T3, T4, T5, T6>(fn0: (x0: V0) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4, fn4: (x: T4) => T5, fn5: (x: T5) => T6): (x0: V0) => T6;
        pipe<V0, V1, T1, T2, T3, T4, T5, T6>(fn0: (x0: V0, x1: V1) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4, fn4: (x: T4) => T5, fn5: (x: T5) => T6): (x0: V0, x1: V1) => T6;
        pipe<V0, V1, V2, T1, T2, T3, T4, T5, T6>(fn0: (x0: V0, x1: V1, x2: V2) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4, fn4: (x: T4) => T5, fn5: (x: T5) => T6): (x0: V0, x1: V1, x2: V2) => T6;
        pipe<V0, V1, V2, V3, T1, T2, T3, T4, T5, T6>(fn0: (x0: V0, x1: V1, x2: V2, x3: V3) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4, fn4: (x: T4) => T5, fn5: (x: T5) => T6): (x0: V0, x1: V1, x2: V2, x3: V3) => T6;
        pipe<V0, T1, T2, T3, T4, T5, T6, T7>(fn0: (x0: V0) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4, fn4: (x: T4) => T5, fn5: (x: T5) => T6, fn6: (x: T6) => T7): (x0: V0) => T7;
        pipe<V0, V1, T1, T2, T3, T4, T5, T6, T7>(fn0: (x0: V0, x1: V1) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4, fn4: (x: T4) => T5, fn5: (x: T5) => T6, fn6: (x: T6) => T7): (x0: V0, x1: V1) => T7;
        pipe<V0, V1, V2, T1, T2, T3, T4, T5, T6, T7>(fn0: (x0: V0, x1: V1, x2: V2) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4, fn4: (x: T4) => T5, fn5: (x: T5) => T6, fn6: (x: T6) => T7): (x0: V0, x1: V1, x2: V2) => T7;
        pipe<V0, V1, V2, V3, T1, T2, T3, T4, T5, T6, T7>(fn0: (x0: V0, x1: V1, x2: V2, x3: V3) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4, fn4: (x: T4) => T5, fn5: (x: T5) => T6, fn6: (x: T6) => T7): (x0: V0, x1: V1, x2: V2, x3: V3) => T7;
        pipe<V0, T1, T2, T3, T4, T5, T6, T7, T8>(fn0: (x0: V0) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4, fn4: (x: T4) => T5, fn5: (x: T5) => T6, fn6: (x: T6) => T7, fn7: (x: T7) => T8): (x0: V0) => T8;
        pipe<V0, V1, T1, T2, T3, T4, T5, T6, T7, T8>(fn0: (x0: V0, x1: V1) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4, fn4: (x: T4) => T5, fn5: (x: T5) => T6, fn6: (x: T6) => T7, fn7: (x: T7) => T8): (x0: V0, x1: V1) => T8;
        pipe<V0, V1, V2, T1, T2, T3, T4, T5, T6, T7, T8>(fn0: (x0: V0, x1: V1, x2: V2) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4, fn4: (x: T4) => T5, fn5: (x: T5) => T6, fn6: (x: T6) => T7, fn7: (x: T7) => T8): (x0: V0, x1: V1, x2: V2) => T8;
        pipe<V0, V1, V2, V3, T1, T2, T3, T4, T5, T6, T7, T8>(fn0: (x0: V0, x1: V1, x2: V2, x3: V3) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4, fn4: (x: T4) => T5, fn5: (x: T5) => T6, fn6: (x: T6) => T7, fn7: (x: T7) => T8): (x0: V0, x1: V1, x2: V2, x3: V3) => T8;
        pipe<V0, T1, T2, T3, T4, T5, T6, T7, T8, T9>(fn0: (x0: V0) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4, fn4: (x: T4) => T5, fn5: (x: T5) => T6, fn6: (x: T6) => T7, fn7: (x: T7) => T8, fn8: (x: T8) => T9): (x0: V0) => T9;
        pipe<V0, V1, T1, T2, T3, T4, T5, T6, T7, T8, T9>(fn0: (x0: V0, x1: V1) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4, fn4: (x: T4) => T5, fn5: (x: T5) => T6, fn6: (x: T6) => T7, fn7: (x: T7) => T8, fn8: (x: T8) => T9): (x0: V0, x1: V1) => T9;
        pipe<V0, V1, V2, T1, T2, T3, T4, T5, T6, T7, T8, T9>(fn0: (x0: V0, x1: V1, x2: V2) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4, fn4: (x: T4) => T5, fn5: (x: T5) => T6, fn6: (x: T6) => T7, fn7: (x: T7) => T8, fn8: (x: T8) => T9): (x0: V0, x1: V1, x2: V2) => T9;
        pipe<V0, V1, V2, V3, T1, T2, T3, T4, T5, T6, T7, T8, T9>(fn0: (x0: V0, x1: V1, x2: V2, x3: V3) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4, fn4: (x: T4) => T5, fn5: (x: T5) => T6, fn6: (x: T6) => T7, fn7: (x: T7) => T8, fn8: (x: T8) => T9): (x0: V0, x1: V1, x2: V2, x3: V3) => T9;

        /**
         * Performs left-to-right composition of one or more Promise-returning functions. The leftmost function may have any arity; the remaining functions must be unary.
         */
        pipeP<V0, T1>(fn0: (x0: V0) => Promise<T1>): (x0: V0) => Promise<T1>;
        pipeP<V0, V1, T1>(fn0: (x0: V0, x1: V1) => Promise<T1>): (x0: V0, x1: V1) => Promise<T1>;
        pipeP<V0, V1, V2, T1>(fn0: (x0: V0, x1: V1, x2: V2) => Promise<T1>): (x0: V0, x1: V1, x2: V2) => Promise<T1>;
        pipeP<V0, V1, V2, V3, T1>(fn0: (x0: V0, x1: V1, x2: V2, x3: V3) => Promise<T1>): (x0: V0, x1: V1, x2: V2, x3: V3) => Promise<T1>;
        pipeP<V0, T1, T2>(fn0: (x0: V0) => Promise<T1>, fn1: (x: T1) => Promise<T2>|T2): (x0: V0) => Promise<T2>;
        pipeP<V0, V1, T1, T2>(fn0: (x0: V0, x1: V1) => Promise<T1>, fn1: (x: T1) => Promise<T2>|T2): (x0: V0, x1: V1) => Promise<T2>;
        pipeP<V0, V1, V2, T1, T2>(fn0: (x0: V0, x1: V1, x2: V2) => Promise<T1>, fn1: (x: T1) => Promise<T2>|T2): (x0: V0, x1: V1, x2: V2) => Promise<T2>;
        pipeP<V0, V1, V2, V3, T1, T2>(fn0: (x0: V0, x1: V1, x2: V2, x3: V3) => Promise<T1>, fn1: (x: T1) => Promise<T2>|T2): (x0: V0, x1: V1, x2: V2, x3: V3) => Promise<T2>;
        pipeP<V0, T1, T2, T3>(fn0: (x0: V0) => Promise<T1>, fn1: (x: T1) => Promise<T2>|T2, fn2: (x: T2) => Promise<T3>|T3): (x0: V0) => Promise<T3>;
        pipeP<V0, V1, T1, T2, T3>(fn0: (x0: V0, x1: V1) => Promise<T1>, fn1: (x: T1) => Promise<T2>|T2, fn2: (x: T2) => Promise<T3>|T3): (x0: V0, x1: V1) => Promise<T3>;
        pipeP<V0, V1, V2, T1, T2, T3>(fn0: (x0: V0, x1: V1, x2: V2) => Promise<T1>, fn1: (x: T1) => Promise<T2>|T2, fn2: (x: T2) => Promise<T3>|T3): (x0: V0, x1: V1, x2: V2) => Promise<T3>;
        pipeP<V0, V1, V2, V3, T1, T2, T3>(fn0: (x0: V0, x1: V1, x2: V2, x3: V3) => Promise<T1>, fn1: (x: T1) => Promise<T2>|T2, fn2: (x: T2) => Promise<T3>|T3): (x0: V0, x1: V1, x2: V2, x3: V3) => Promise<T3>;
        pipeP<V0, T1, T2, T3, T4>(fn0: (x0: V0) => Promise<T1>, fn1: (x: T1) => Promise<T2>|T2, fn2: (x: T2) => Promise<T3>|T3, fn3: (x: T3) => Promise<T4>|T4): (x0: V0) => Promise<T4>;
        pipeP<V0, V1, T1, T2, T3, T4>(fn0: (x0: V0, x1: V1) => Promise<T1>, fn1: (x: T1) => Promise<T2>|T2, fn2: (x: T2) => Promise<T3>|T3, fn3: (x: T3) => Promise<T4>|T4): (x0: V0, x1: V1) => Promise<T4>;
        pipeP<V0, V1, V2, T1, T2, T3, T4>(fn0: (x0: V0, x1: V1, x2: V2) => Promise<T1>, fn1: (x: T1) => Promise<T2>|T2, fn2: (x: T2) => Promise<T3>|T3, fn3: (x: T3) => Promise<T4>|T4): (x0: V0, x1: V1, x2: V2) => Promise<T4>;
        pipeP<V0, V1, V2, V3, T1, T2, T3, T4>(fn0: (x0: V0, x1: V1, x2: V2, x3: V3) => Promise<T1>, fn1: (x: T1) => Promise<T2>|T2, fn2: (x: T2) => Promise<T3>|T3, fn3: (x: T3) => Promise<T4>|T4): (x0: V0, x1: V1, x2: V2, x3: V3) => Promise<T4>;
        pipeP<V0, T1, T2, T3, T4, T5>(fn0: (x0: V0) => Promise<T1>, fn1: (x: T1) => Promise<T2>|T2, fn2: (x: T2) => Promise<T3>|T3, fn3: (x: T3) => Promise<T4>|T4, fn4: (x: T4) => Promise<T5>|T5): (x0: V0) => Promise<T5>;
        pipeP<V0, V1, T1, T2, T3, T4, T5>(fn0: (x0: V0, x1: V1) => Promise<T1>, fn1: (x: T1) => Promise<T2>|T2, fn2: (x: T2) => Promise<T3>|T3, fn3: (x: T3) => Promise<T4>|T4, fn4: (x: T4) => Promise<T5>|T5): (x0: V0, x1: V1) => Promise<T5>;
        pipeP<V0, V1, V2, T1, T2, T3, T4, T5>(fn0: (x0: V0, x1: V1, x2: V2) => Promise<T1>, fn1: (x: T1) => Promise<T2>|T2, fn2: (x: T2) => Promise<T3>|T3, fn3: (x: T3) => Promise<T4>|T4, fn4: (x: T4) => Promise<T5>|T5): (x0: V0, x1: V1, x2: V2) => Promise<T5>;
        pipeP<V0, V1, V2, V3, T1, T2, T3, T4, T5>(fn0: (x0: V0, x1: V1, x2: V2, x3: V3) => Promise<T1>, fn1: (x: T1) => Promise<T2>|T2, fn2: (x: T2) => Promise<T3>|T3, fn3: (x: T3) => Promise<T4>|T4, fn4: (x: T4) => Promise<T5>|T5): (x0: V0, x1: V1, x2: V2, x3: V3) => Promise<T5>;
        pipeP<V0, T1, T2, T3, T4, T5, T6>(fn0: (x0: V0) => Promise<T1>, fn1: (x: T1) => Promise<T2>|T2, fn2: (x: T2) => Promise<T3>|T3, fn3: (x: T3) => Promise<T4>|T4, fn4: (x: T4) => Promise<T5>|T5, fn5: (x: T5) => Promise<T6>|T6): (x0: V0) => Promise<T6>;
        pipeP<V0, V1, T1, T2, T3, T4, T5, T6>(fn0: (x0: V0, x1: V1) => Promise<T1>, fn1: (x: T1) => Promise<T2>|T2, fn2: (x: T2) => Promise<T3>|T3, fn3: (x: T3) => Promise<T4>|T4, fn4: (x: T4) => Promise<T5>|T5, fn5: (x: T5) => Promise<T6>|T6): (x0: V0, x1: V1) => Promise<T6>;
        pipeP<V0, V1, V2, T1, T2, T3, T4, T5, T6>(fn0: (x0: V0, x1: V1, x2: V2) => Promise<T1>, fn1: (x: T1) => Promise<T2>|T2, fn2: (x: T2) => Promise<T3>|T3, fn3: (x: T3) => Promise<T4>|T4, fn4: (x: T4) => Promise<T5>|T5, fn5: (x: T5) => Promise<T6>|T6): (x0: V0, x1: V1, x2: V2) => Promise<T6>;
        pipeP<V0, V1, V2, V3, T1, T2, T3, T4, T5, T6>(fn0: (x0: V0, x1: V1, x2: V2, x3: V3) => Promise<T1>, fn1: (x: T1) => Promise<T2>|T2, fn2: (x: T2) => Promise<T3>|T3, fn3: (x: T3) => Promise<T4>|T4, fn4: (x: T4) => Promise<T5>|T5, fn5: (x: T5) => Promise<T6>|T6): (x0: V0, x1: V1, x2: V2, x3: V3) => Promise<T6>;
        pipeP<V0, T1, T2, T3, T4, T5, T6, T7>(fn0: (x0: V0) => Promise<T1>, fn1: (x: T1) => Promise<T2>|T2, fn2: (x: T2) => Promise<T3>|T3, fn3: (x: T3) => Promise<T4>|T4, fn4: (x: T4) => Promise<T5>|T5, fn5: (x: T5) => Promise<T6>|T6, fn6: (x: T6) => Promise<T7>|T7): (x0: V0) => Promise<T7>;
        pipeP<V0, V1, T1, T2, T3, T4, T5, T6, T7>(fn0: (x0: V0, x1: V1) => Promise<T1>, fn1: (x: T1) => Promise<T2>|T2, fn2: (x: T2) => Promise<T3>|T3, fn3: (x: T3) => Promise<T4>|T4, fn4: (x: T4) => Promise<T5>|T5, fn5: (x: T5) => Promise<T6>|T6, fn6: (x: T6) => Promise<T7>|T7): (x0: V0, x1: V1) => Promise<T7>;
        pipeP<V0, V1, V2, T1, T2, T3, T4, T5, T6, T7>(fn0: (x0: V0, x1: V1, x2: V2) => Promise<T1>, fn1: (x: T1) => Promise<T2>|T2, fn2: (x: T2) => Promise<T3>|T3, fn3: (x: T3) => Promise<T4>|T4, fn4: (x: T4) => Promise<T5>|T5, fn5: (x: T5) => Promise<T6>|T6, fn6: (x: T6) => Promise<T7>|T7): (x0: V0, x1: V1, x2: V2) => Promise<T7>;
        pipeP<V0, V1, V2, V3, T1, T2, T3, T4, T5, T6, T7>(fn0: (x0: V0, x1: V1, x2: V2, x3: V3) => Promise<T1>, fn1: (x: T1) => Promise<T2>|T2, fn2: (x: T2) => Promise<T3>|T3, fn3: (x: T3) => Promise<T4>|T4, fn4: (x: T4) => Promise<T5>|T5, fn5: (x: T5) => Promise<T6>|T6, fn6: (x: T6) => Promise<T7>|T7): (x0: V0, x1: V1, x2: V2, x3: V3) => Promise<T7>;
        pipeP<V0, T1, T2, T3, T4, T5, T6, T7, T8>(fn0: (x0: V0) => Promise<T1>, fn1: (x: T1) => Promise<T2>|T2, fn2: (x: T2) => Promise<T3>|T3, fn3: (x: T3) => Promise<T4>|T4, fn4: (x: T4) => Promise<T5>|T5, fn5: (x: T5) => Promise<T6>|T6, fn6: (x: T6) => Promise<T7>|T7, fn7: (x: T7) => Promise<T8>|T8): (x0: V0) => Promise<T8>;
        pipeP<V0, V1, T1, T2, T3, T4, T5, T6, T7, T8>(fn0: (x0: V0, x1: V1) => Promise<T1>, fn1: (x: T1) => Promise<T2>|T2, fn2: (x: T2) => Promise<T3>|T3, fn3: (x: T3) => Promise<T4>|T4, fn4: (x: T4) => Promise<T5>|T5, fn5: (x: T5) => Promise<T6>|T6, fn6: (x: T6) => Promise<T7>|T7, fn7: (x: T7) => Promise<T8>|T8): (x0: V0, x1: V1) => Promise<T8>;
        pipeP<V0, V1, V2, T1, T2, T3, T4, T5, T6, T7, T8>(fn0: (x0: V0, x1: V1, x2: V2) => Promise<T1>, fn1: (x: T1) => Promise<T2>|T2, fn2: (x: T2) => Promise<T3>|T3, fn3: (x: T3) => Promise<T4>|T4, fn4: (x: T4) => Promise<T5>|T5, fn5: (x: T5) => Promise<T6>|T6, fn6: (x: T6) => Promise<T7>|T7, fn7: (x: T7) => Promise<T8>|T8): (x0: V0, x1: V1, x2: V2) => Promise<T8>;
        pipeP<V0, V1, V2, V3, T1, T2, T3, T4, T5, T6, T7, T8>(fn0: (x0: V0, x1: V1, x2: V2, x3: V3) => Promise<T1>, fn1: (x: T1) => Promise<T2>|T2, fn2: (x: T2) => Promise<T3>|T3, fn3: (x: T3) => Promise<T4>|T4, fn4: (x: T4) => Promise<T5>|T5, fn5: (x: T5) => Promise<T6>|T6, fn6: (x: T6) => Promise<T7>|T7, fn7: (x: T7) => Promise<T8>|T8): (x0: V0, x1: V1, x2: V2, x3: V3) => Promise<T8>;
        pipeP<V0, T1, T2, T3, T4, T5, T6, T7, T8, T9>(fn0: (x0: V0) => Promise<T1>, fn1: (x: T1) => Promise<T2>|T2, fn2: (x: T2) => Promise<T3>|T3, fn3: (x: T3) => Promise<T4>|T4, fn4: (x: T4) => Promise<T5>|T5, fn5: (x: T5) => Promise<T6>|T6, fn6: (x: T6) => Promise<T7>|T7, fn7: (x: T7) => Promise<T8>|T8, fn8: (x: T8) => Promise<T9>|T9): (x0: V0) => Promise<T9>;
        pipeP<V0, V1, T1, T2, T3, T4, T5, T6, T7, T8, T9>(fn0: (x0: V0, x1: V1) => Promise<T1>, fn1: (x: T1) => Promise<T2>|T2, fn2: (x: T2) => Promise<T3>|T3, fn3: (x: T3) => Promise<T4>|T4, fn4: (x: T4) => Promise<T5>|T5, fn5: (x: T5) => Promise<T6>|T6, fn6: (x: T6) => Promise<T7>|T7, fn7: (x: T7) => Promise<T8>|T8, fn8: (x: T8) => Promise<T9>|T9): (x0: V0, x1: V1) => Promise<T9>;
        pipeP<V0, V1, V2, T1, T2, T3, T4, T5, T6, T7, T8, T9>(fn0: (x0: V0, x1: V1, x2: V2) => Promise<T1>, fn1: (x: T1) => Promise<T2>|T2, fn2: (x: T2) => Promise<T3>|T3, fn3: (x: T3) => Promise<T4>|T4, fn4: (x: T4) => Promise<T5>|T5, fn5: (x: T5) => Promise<T6>|T6, fn6: (x: T6) => Promise<T7>|T7, fn7: (x: T7) => Promise<T8>|T8, fn8: (x: T8) => Promise<T9>|T9): (x0: V0, x1: V1, x2: V2) => Promise<T9>;
        pipeP<V0, V1, V2, V3, T1, T2, T3, T4, T5, T6, T7, T8, T9>(fn0: (x0: V0, x1: V1, x2: V2, x3: V3) => Promise<T1>, fn1: (x: T1) => Promise<T2>|T2, fn2: (x: T2) => Promise<T3>|T3, fn3: (x: T3) => Promise<T4>|T4, fn4: (x: T4) => Promise<T5>|T5, fn5: (x: T5) => Promise<T6>|T6, fn6: (x: T6) => Promise<T7>|T7, fn7: (x: T7) => Promise<T8>|T8, fn8: (x: T8) => Promise<T9>|T9): (x0: V0, x1: V1, x2: V2, x3: V3) => Promise<T9>;

        /**
         * Returns the left-to-right Kleisli composition of the provided functions, each of which must return a value of a type supported by chain.
         */
        // skipped extra params on fn0 -- not mentioned in the docs!
        pipeK<V, T1>(fn0: (v: Chain<V>) => Chain<T1>): (v: V) => Chain<T1>;
        pipeK<V, T1, T2>(fn0: (v: Chain<V>) => Chain<T1>, fn1: (x: T1) => Chain<T2>): (v: V) => Chain<T2>;
        pipeK<V, T1, T2, T3>(fn0: (v: Chain<V>) => Chain<T1>, fn1: (x: T1) => Chain<T2>, fn2: (x: T2) => Chain<T3>): (v: V) => Chain<T3>;
        pipeK<V, T1, T2, T3, T4>(fn0: (v: Chain<V>) => Chain<T1>, fn1: (x: T1) => Chain<T2>, fn2: (x: T2) => Chain<T3>, fn3: (x: T3) => Chain<T4>): (v: V) => Chain<T4>;
        pipeK<V, T1, T2, T3, T4, T5>(fn0: (v: Chain<V>) => Chain<T1>, fn1: (x: T1) => Chain<T2>, fn2: (x: T2) => Chain<T3>, fn3: (x: T3) => Chain<T4>, fn4: (x: T4) => Chain<T5>): (v: V) => Chain<T5>;
        pipeK<V, T1, T2, T3, T4, T5, T6>(fn0: (v: Chain<V>) => Chain<T1>, fn1: (x: T1) => Chain<T2>, fn2: (x: T2) => Chain<T3>, fn3: (x: T3) => Chain<T4>, fn4: (x: T4) => Chain<T5>, fn5: (x: T5) => Chain<T6>): (v: V) => Chain<T6>;
        pipeK<V, T1, T2, T3, T4, T5, T6, T7>(fn0: (v: Chain<V>) => Chain<T1>, fn1: (x: T1) => Chain<T2>, fn2: (x: T2) => Chain<T3>, fn3: (x: T3) => Chain<T4>, fn4: (x: T4) => Chain<T5>, fn5: (x: T5) => Chain<T6>, fn6: (x: T6) => Chain<T7>): (v: V) => Chain<T7>;
        pipeK<V, T1, T2, T3, T4, T5, T6, T7, T8>(fn0: (v: Chain<V>) => Chain<T1>, fn1: (x: T1) => Chain<T2>, fn2: (x: T2) => Chain<T3>, fn3: (x: T3) => Chain<T4>, fn4: (x: T4) => Chain<T5>, fn5: (x: T5) => Chain<T6>, fn6: (x: T6) => Chain<T7>, fn7: (x: T7) => Chain<T8>): (v: V) => Chain<T8>;
        pipeK<V, T1, T2, T3, T4, T5, T6, T7, T8, T9>(fn0: (v: Chain<V>) => Chain<T1>, fn1: (x: T1) => Chain<T2>, fn2: (x: T2) => Chain<T3>, fn3: (x: T3) => Chain<T4>, fn4: (x: T4) => Chain<T5>, fn5: (x: T5) => Chain<T6>, fn6: (x: T6) => Chain<T7>, fn7: (x: T7) => Chain<T8>, fn8: (x: T8) => Chain<T9>): (v: V) => Chain<T9>;

        /**
         * Returns a new list by plucking the same named property off all objects in the list supplied.
         */
        // hard to mix cuz different generics

        // array

        // infer
        pluck<T extends Struct<any>, K extends keyof T>(p: K, list: List<T>): T[K][]; // fails on number keys
        // pluck<T extends Struct<any>, K extends keyof T>(p: K): (list: List<T>) => T[K][]; // doesn't work, T info late
        // pluck<T extends Struct<any>, K extends keyof T>: CurriedFunction2<K, List<T>, T[K][]>;

        // infer
        pluck<U, T extends Struct<U>, K extends keyof T>(p: K, list: List<T>): U[]; // fails on number keys
        // pluck<U, T extends Struct<U>, K extends keyof T>(p: K): (list: List<T>) => U[]; // doesn't work, T info late
        // pluck<U, T extends Struct<U>, K extends keyof T>: CurriedFunction2<K, List<T>, U[]>;

        // supply return object type manually when unable to infer it...
        pluck<T>(p: Prop, list: Struct<any>[]): T[];
        pluck(p: Prop): <T>(list: Struct<any>[]) => T[];
        // pluck<T>: CurriedFunction2<Prop, Struct<any>[], T[]>;

        // object

        // infer
        pluck<T extends Struct<any>, K extends keyof T>(p: K, list: Obj<T>): Obj<T[K]>; // fails on number keys
        // pluck<T extends Struct<any>, K extends keyof T>(p: K): (list: Obj<T>) => Obj<T[K]>; // doesn't work, T info late
        // pluck<T extends Struct<any>, K extends keyof T>: CurriedFunction2<K, Obj<T>, Obj<T[K]>>;

        // infer
        pluck<U, T extends Struct<U>, K extends keyof T>(p: K, list: Obj<T>): Obj<U>; // fails on number keys
        // pluck<U, T extends Struct<U>, K extends keyof T>(p: K): (list: Obj<T>) => Obj<U>; // doesn't work, T info late
        // pluck<U, T extends Struct<U>, K extends keyof T>: CurriedFunction2<K, Obj<T>, Obj<U>>;

        // supply return object type manually when unable to infer it...
        pluck<T>(p: Prop, list: Obj<Struct<any>>): Obj<T>;
        pluck(p: Prop): <T>(list: Obj<Struct<any>>) => Obj<T>;
        // pluck<T>: CurriedFunction2<Prop, Obj<Struct<any>>, Obj<T>>;

        /**
         * Returns a new list with the given element at the front, followed by the contents of the
         * list.
         */
        prepend<T>(el: T, list: List<T>): T[];
        prepend<T>(el: T): (list: List<T>) => T[];
        // prepend<T>: CurriedFunction2<T, List<T>, T[]>;

        /**
         * Multiplies together all the elements of a list.
         */
        product(list: List<number>): number;


        /**
         * Reasonable analog to SQL `select` statement.
         */
        // hard to mix cuz different generics

        // infer (keyof)
        project<T, K extends keyof T>(props: List<K>, objs: List<T>): Pick<T, K>[];
        // project<T, K extends keyof T>(props: List<K>): (objs: List<T>) => Pick<T, K>[]>; // T info probably too late
        // project<T, K extends keyof T>: CurriedFunction2<List<K>, List<T>, Pick<T, K>[]>;

        // fallback: presume the original structure is intact
        project<T>(props: List<Prop>, objs: List<T>): T[];
        project(props: List<Prop>): <T>(objs: List<T>) => T[];
        // project<T>: CurriedFunction2<List<Prop>, List<T>, T[];

        // manually typed: supply return array type by explicit generic
        project<T>(props: List<Prop>, objs: List<any>): T[];
        project(props: List<Prop>): <T>(objs: List<any>) => T[];
        // project<T,U>: CurriedFunction2<List<Prop>, List<any>, T[]>;

        /**
         * Returns a function that when supplied an object returns the indicated property of that object, if it exists.
         */

        // keyof version
        prop<T, K extends keyof T>(p: K, obj: T): T[K];
        // prop<T, K extends keyof T>(p: K): (obj: T) => T[K]; // T info late
        // prop<T, K extends keyof T>: CurriedFunction2<K, T, T[K]>;
        // prop<K extends Prop>(p: K): <T, K extends keyof T>(obj: T) => T[K]; // K redefined, fails
        // prop<T, K extends Prop>: CurriedFunction2<K, T, T[K]>;

        // Record version, more curry-friendly
        prop<K extends string, V, T extends Record<K, V>>(p: K, obj: T): V; // uncurried adds value only for {} from e.g. degeneration
        // prop<K extends string>(p: K): <V, T extends Record<K, V>>(obj: T) => V;
        // prop<K extends string, V, T extends Record<K,V>>: CurriedFunction2<K, T, V>;

        // manually type with explicit generic
        prop<T>(p: Prop, obj: Struct<any>): T;
        // prop(p: Prop): <T>(obj: Struct<any>) => T;
        // prop<T>: CurriedFunction2<Prop, Struct<any>, T>;

        // mixed for currying:
        prop<K extends string>(p: K): {
          // Record version
          <V, T extends Record<K, V>>(obj: T): V;
          // manually typed
          <T>(obj: Struct<any>): T;
        };

        /**
         * Determines whether the given property of an object has a specific
         * value according to strict equality (`===`).  Most likely used to
         * filter a list.
         */
        // propEq<T extends Struct<any>>(name: Prop, val: any, obj: T): boolean;
        // propEq<T extends Struct<any>>(name: Prop, val: any): (obj: T) => boolean;
        // propEq<T extends Struct<any>>(name: Prop): CurriedFunction2<any, T, boolean>;
        // // propEq<T extends Struct<any>>(name: Prop): (val: any, obj: T) => boolean;
        // // propEq<T extends Struct<any>>(name: Prop): (val: any) => (obj: T) => boolean;
        // // propEq<T extends Struct<any>>: CurriedFunction3<Prop, any, T, boolean>;

        // base
        propEq<T extends Struct<any>>(name: Prop, val: any, obj: T): boolean;
        propEq(name: Prop, val: any):{
            <T extends Struct<any>>(obj: T): boolean;
        };
        propEq(name: Prop):{
            <T extends Struct<any>>(val: any, obj: T): boolean;
            (val: any):{
                <T extends Struct<any>>(obj: T): boolean;
            };
        };


        /**
         * Returns true if the specified object property is of the given type; false otherwise.
         */

        // Record
        propIs<T extends Function, K extends string, V, U extends Record<K, V>>(type: T, name: K, obj: U): obj is (U & Record<K, T>);
        propIs<T extends Function, K extends string>(type: T, name: K): <V, U extends Record<K, V>>(obj: U) => obj is (U & Record<K, T>);
        // propIs<T extends Function>(type: T): {
        //     <K extends string, V, U extends Record<K,V>>(name: K, obj: U): obj is (U & Record<K, T>);
        //     <K extends string>(name: K): <V, U extends Record<K,V>>(obj: U) => obj is (U & Record<K, T>);
        // }
        // propIs<T extends Function, K extends string, V, U extends Record<K,V>>: CurriedFunction3<T, K, U, V is (V & Record<K, T>)>; // obj is? name unavailable...

        // inference, fails if name and object are supplied separately
        // propIs<T extends Function, V, K extends keyof V>(type: T, name: K, obj: V): obj is (V & Record<K, T>);
        // propIs<T extends Function, V, K extends keyof V>(type: T, name: K): (obj: V) => obj is (V & Record<K, T>);  // object info not available in time :(
        // propIs<T extends Function>(type: T): {
        //     <V, K extends keyof V>(name: K, obj: V): obj is (V & Record<K, T>);
        //     <V, K extends keyof V>(name: K): (obj: V) => obj is (V & Record<K, T>);  // object info not available in time :(
        // }
        // propIs<T extends Function, V, K extends keyof V>: CurriedFunction3<T, K, V, V is (V & Record<K, T>)>; // obj is? name unavailable...

        // trying to predict outcome without keyof
        propIs<T extends Function, V>(type: T, name: Prop, obj: V): obj is (V & Obj<T>);

        // curry-friendlier fallback
        propIs(type: Function, name: Prop, obj: Struct<any>): boolean; // overlap with above?
        propIs(type: Function, name: Prop): (obj: Struct<any>) => boolean;
        propIs(type: Function): CurriedFunction2<Prop, Struct<any>, boolean>;
        // propIs(type: Function): {
        //     (name: Prop, obj: Struct<any>): boolean;
        //     (name: Prop): (obj: Struct<any>) => boolean;
        // }
        // propIs: CurriedFunction3<Function, Prop, Struct<any>, boolean>;

        // mixed:
        propIs<T extends Function>(type: T): {
            // record
            <K extends string, V, U extends Obj<V>>(name: K, obj: U): obj is (U & Record<K, T>);
            <K extends string>(name: K): <V, U extends Obj<V>>(obj: U) => obj is (U & Record<K, T>);
            // keyof
            <V, K extends keyof V>(name: K, obj: V): obj is (V & Record<K, T>);
            <V>(name: Prop, obj: V): obj is (V & Obj<T>);
            // <V, K extends keyof V>(name: K): (obj: V) => obj is (V & Record<K, T>);  // object info not available in time :(
        };

        /**
         * If the given, non-null object has an own property with the specified name, returns the value of that property.
         * Otherwise returns the provided default value.
         */

        // // infer with Record (curry-friendly) -- can't use here: it'd error whenever the default should trigger
        // propOr<T, K extends string, V, U extends Record<K,V>>(val: T, p: K, obj: U): V|T;
        // propOr<T, K extends string>(val: T, p: K): <V, U extends Record<K,V>>(obj: U) => V|T;
        // propOr<T, K extends string, V, U extends Record<K,V>>(val: T): CurriedFunction2<K, U, V|T>;
        // // propOr<T, K extends string, V, U extends Record<K,V>>: CurriedFunction3<T, K, U, V|T>;

        // infer with keyof (not curry-friendly), allowing a default value with a type different from the actual one
        propOr<T,U,K extends keyof U>(val: T, p: K, obj: Obj<K>): K|T; // obj[K]?
        propOr<T,U,K extends keyof U>(val: T, p: K): (obj: Obj<K>) => K|T;  // generics too early?
        propOr<T,U,K extends keyof U>(val: T): CurriedFunction2<K, Obj<K>, K|T>;  // generics too early?
        // propOr<T>(val: T): <U,K extends keyof U>(p: K, obj: U) => U[K]|T;
        // propOr<T>(val: T): <U,K extends keyof U>(p: K) => (obj: U) => U[K]|T;  // U too early?
        // propOr<T,U,K extends keyof U>: CurriedFunction3<T, K, U, U[K]|T>;

        // presume the value at the given key matches the type of the default value, bad but less likely to fail with currying
        propOr<T>(val: T, p: Prop, obj: Struct<any>): T; // adds value only to protect against {} from e.g. generic degeneration
        // propOr<T>(val: T, p: Prop): (obj: Struct<any>) => T;
        // // propOr<T>(val: T): (p: Prop, obj: Struct<any>) => T;
        // propOr<T>(val: T): CurriedFunction2<Prop, Struct<any>, T>;
        // // propOr<T>: CurriedFunction3<T, Prop, Struct<any>, T>;
        propOr<T>(val: T, p: Prop): Struct<any>;
        propOr<T>(val: T):{
            (p: Prop): Struct<any>;
        };


        // // useless unbound generics?
        // propOr<T,U,V>(val: T, p: Prop, obj: U): V;
        // propOr<T>(val: T, p: Prop): <U,V>(obj: U) => V;
        // // propOr<T>(val: T): <U,V>(p: Prop, obj: U) => V;
        // propOr<T,U,V>(val: T): CurriedFunction2<Prop, U, V>;
        // // propOr<T,U,V>: CurriedFunction3<T, Prop, U, V>;

        /**
         * Acts as multiple `prop`: array of keys in, array of values out. Preserves order.
         */

        // generic version
        props<T>(ps: List<Prop>, obj: Struct<T>): T[];
        props(ps: List<Prop>): <T>(obj: Struct<T>) => T[];
        // props<T>: CurriedFunction2<List<Prop>, Struct<T>, T[]>;

        // TODO: heterogeneous version
        // Record-based?
        // props<K extends keyof T, T extends Struct<any>>(ps: List<K>, obj: Struct<T>): ???;

        /**
         * Returns true if the specified object property satisfies the given predicate; false otherwise.
         */

        // // Record (curry-friendly)
        // propSatisfies<V, K extends string, U extends Record<K,V>>(pred: Pred<V>, name: K, obj: U): boolean;
        // propSatisfies<V, K extends string>(pred: Pred<V>, name: K): <U extends Record<K,V>>(obj: U) => boolean;
        // propSatisfies<V, K extends string, U extends Record<K,V>>(pred: Pred<V>): CurriedFunction2<K, U, boolean>;
        // // propSatisfies<V, K extends string, U extends Record<K,V>>: CurriedFunction3<Pred<V>, K, U, boolean>;

        // // keyof, info too late on currying
        // propSatisfies<U extends Struct<any>, K extends keyof U>(pred: Pred<U[K]>, name: Prop, obj: U): boolean;
        // propSatisfies<T,U>(pred: Pred<T>, name: Prop): (obj: U) => boolean;
        // propSatisfies<T,U>(pred: Pred<T>): CurriedFunction2<Prop, U, boolean>;
        // // propSatisfies<T,U>: CurriedFunction3<Pred<T>, Prop, U, boolean>;

        // Record (curry-friendly)
        propSatisfies<V, K extends string, U extends Obj<V>>(pred: Pred<V>, name: K, obj: U): boolean;
        propSatisfies<V, K extends string>(pred: Pred<V>, name: K):{
            <U extends Obj<V>>(obj: U): boolean;
        };
        propSatisfies<V>(pred: Pred<V>):{
            <K extends string, U extends Record<K, V>>(name: K, obj: U): boolean;
            <K extends string>(name: K):{
                <U extends Obj<V>>(obj: U): boolean;
            };
        };

        // keyof, info too late on currying
        propSatisfies<T, U>(pred: Pred<T>, name: Prop, obj: U): boolean;
        propSatisfies<T>(pred: Pred<T>, name: Prop):{
            <U>(obj: U): boolean;
        };
        propSatisfies<T>(pred: Pred<T>):{
            <U>(name: Prop, obj: U): boolean;
            (name: Prop):{
                <U>(obj: U): boolean;
            };
        };


        /**
         * Returns a list of numbers from `from` (inclusive) to `to`
         * (exclusive). In mathematical terms, `range(a, b)` is equivalent to
         * the half-open interval `[a, b)`.
         */
        range(from: number, to: number): number[];
        range(from: number): (to: number) => number[];
        // range: CurriedFunction2<number, number, number[]>;

        /**
         * Returns a single item by iterating through the list, successively calling the iterator
         * function and passing it an accumulator value and the current value from the array, and
         * then passing the result to the next call.
         */
        // reduce<T, TResult, R extends List<T>>(fn: (acc: TResult, elem: T, idx: Number, list: R) => TResult|Reduced, acc: TResult, list: R): TResult;
        // reduce<T, TResult, R extends List<T>>(fn: (acc: TResult, elem: T, idx: Number, list: R) => TResult|Reduced, acc: TResult): (list: R) => TResult;
        // reduce<T, TResult, R extends List<T>>(fn: (acc: TResult, elem: T, idx: Number, list: R) => TResult|Reduced): CurriedFunction2<TResult, R, TResult>;
        // // reduce<T, TResult, R extends List<T>>(fn: (acc: TResult, elem: T, idx: Number, list: R) => TResult|Reduced): (acc: TResult, list: R) => TResult;
        // // reduce<T, TResult, R extends List<T>>: CurriedFunction3<(acc: TResult, elem: T, idx: Number, list: R) => TResult|Reduced, TResult, R, TResult>;
        // base
        reduce<T, TResult, R extends List<T>>(fn: (acc: TResult, elem: T, idx: number, list: R) => TResult|Reduced, acc: TResult, list: R): TResult;
        reduce<T, TResult, R extends List<T>>(fn: (acc: TResult, elem: T, idx: number, list: R) => TResult|Reduced, acc: TResult):{
            (list: R): TResult;
        };
        reduce<T, TResult, R extends List<T>>(fn: (acc: TResult, elem: T, idx: number, list: R) => TResult|Reduced):{
            (acc: TResult, list: R): TResult;
            (acc: TResult):{
                (list: R): TResult;
            };
        };


        /**
         * Groups the elements of the list according to the result of calling the String-returning function keyFn on each
         * element and reduces the elements of each group to a single value via the reducer function valueFn.
         */
        // // reason for 'any' on acc: somehow empty accumulators like '[]' won't work well when matching
        // reduceBy<T, TResult, R extends List<T>>(valueFn: (acc: TResult, elem: T, idx: number, list: R) => TResult, acc: TResult|any, keyFn: (elem: T) => string, list: R): TResult;
        // reduceBy<T, TResult, R extends List<T>>(valueFn: (acc: TResult, elem: T, idx: number, list: R) => TResult, acc: TResult|any, keyFn: (elem: T) => string): (list: R) => TResult;
        // reduceBy<T, TResult, R extends List<T>>(valueFn: (acc: TResult, elem: T, idx: number, list: R) => TResult, acc: TResult|any): CurriedFunction2<(elem: T) => string, R, TResult>;
        // reduceBy<T, TResult, R extends List<T>>(valueFn: (acc: TResult, elem: T, idx: number, list: R) => TResult): CurriedFunction3<TResult|any, (elem: T) => string, R, TResult>;
        // // reduceBy<T, TResult, R extends List<T>>: CurriedFunction4<(acc: TResult, elem: T, idx: number, list: R) => TResult, TResult|any, (elem: T) => string, R, TResult>;
        // base
        reduceBy<T, TResult, R extends List<T>>(valueFn: (acc: TResult, elem: T, idx: number, list: R) => TResult, acc: TResult|any, keyFn: (elem: T) => string, list: R): TResult;
        reduceBy<T, TResult, R extends List<T>>(valueFn: (acc: TResult, elem: T, idx: number, list: R) => TResult, acc: TResult|any, keyFn: (elem: T) => string):{
            (list: R): TResult;
        };
        reduceBy<T, TResult, R extends List<T>>(valueFn: (acc: TResult, elem: T, idx: number, list: R) => TResult, acc: TResult|any):{
            (keyFn: (elem: T) => string, list: R): TResult;
            (keyFn: (elem: T) => string):{
                (list: R): TResult;
            };
        };
        reduceBy<T, TResult, R extends List<T>>(valueFn: (acc: TResult, elem: T, idx: number, list: R) => TResult):{
            (acc: TResult|any, keyFn: (elem: T) => string, list: R): TResult;
            (acc: TResult|any, keyFn: (elem: T) => string):{
                (list: R): TResult;
            };
            (acc: TResult|any):{
                (keyFn: (elem: T) => string, list: R): TResult;
                (keyFn: (elem: T) => string):{
                    (list: R): TResult;
                };
            };
        };


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
        // // reason for 'any' on acc: somehow empty accumulators like '[]' won't work well when matching
        // reduceRight<T, TResult>(fn: (elem: T, acc: TResult) => TResult|Reduced, acc: TResult|any, list: List<T>): TResult;
        // reduceRight<T, TResult>(fn: (elem: T, acc: TResult) => TResult|Reduced, acc: TResult|any): (list: List<T>) => TResult;
        // reduceRight<T, TResult>(fn: (elem: T, acc: TResult) => TResult|Reduced): CurriedFunction2<TResult, List<T>, TResult>;
        // // reduceRight<T, TResult>(fn: (elem: T, acc: TResult) => TResult|Reduced): (acc: TResult|any, list: List<T>) => TResult;
        // // reduceRight<T, TResult>(fn: (elem: T, acc: TResult) => TResult|Reduced): (acc: TResult|any) => (list: List<T>) => TResult;
        // // reduceRight<T, TResult>: CurriedFunction3<(elem: T, acc: TResult) => TResult|Reduced, TResult|any, List<T>, TResult>;
        // base
        reduceRight<T, TResult>(fn: (elem: T, acc: TResult) => TResult|Reduced, acc: TResult|any, list: List<T>): TResult;
        reduceRight<T, TResult>(fn: (elem: T, acc: TResult) => TResult|Reduced, acc: TResult|any):{
            (list: List<T>): TResult;
        };
        reduceRight<T, TResult>(fn: (elem: T, acc: TResult) => TResult|Reduced):{
            (acc: TResult|any, list: List<T>): TResult;
            (acc: TResult|any):{
                (list: List<T>): TResult;
            };
        };


        /**
         * Like reduce, reduceWhile returns a single item by iterating through the list, successively calling the iterator function.
         * reduceWhile also takes a predicate that is evaluated before each step. If the predicate returns false, it "short-circuits"
         * the iteration and returns the current value of the accumulator.
         */
        // reduceWhile<T, TResult>(pred: (acc: TResult, elem: T) => boolean, fn: (acc: TResult, elem: T) => TResult|Reduced, acc: TResult, list: List<T>): TResult;
        // reduceWhile<T, TResult>(pred: (acc: TResult, elem: T) => boolean, fn: (acc: TResult, elem: T) => TResult|Reduced, acc: TResult): (list: List<T>) => TResult;
        // reduceWhile<T, TResult>(pred: (acc: TResult, elem: T) => boolean, fn: (acc: TResult, elem: T) => TResult|Reduced): CurriedFunction2<TResult, List<T>, TResult>;
        // reduceWhile<T, TResult>(pred: (acc: TResult, elem: T) => boolean): CurriedFunction3<(acc: TResult, elem: T) => TResult|Reduced, TResult, List<T>, TResult>;
        // // reduceWhile<T, TResult>: CurriedFunction4<(acc: TResult, elem: T) => boolean, (acc: TResult, elem: T) => TResult|Reduced, TResult, List<T>, TResult>;

        // base
        reduceWhile<T, TResult>(pred: (acc: TResult, elem: T) => boolean, fn: (acc: TResult, elem: T) => TResult|Reduced, acc: TResult, list: List<T>): TResult;
        reduceWhile<T, TResult>(pred: (acc: TResult, elem: T) => boolean, fn: (acc: TResult, elem: T) => TResult|Reduced, acc: TResult):{
            (list: List<T>): TResult;
        };
        reduceWhile<T, TResult>(pred: (acc: TResult, elem: T) => boolean, fn: (acc: TResult, elem: T) => TResult|Reduced):{
            (acc: TResult, list: List<T>): TResult;
            (acc: TResult):{
                (list: List<T>): TResult;
            };
        };
        reduceWhile<T, TResult>(pred: (acc: TResult, elem: T) => boolean):{
            (fn: (acc: TResult, elem: T) => TResult|Reduced, acc: TResult, list: List<T>): TResult;
            (fn: (acc: TResult, elem: T) => TResult|Reduced, acc: TResult):{
                (list: List<T>): TResult;
            };
            (fn: (acc: TResult, elem: T) => TResult|Reduced):{
                (acc: TResult, list: List<T>): TResult;
                (acc: TResult):{
                    (list: List<T>): TResult;
                };
            };
        };


        /**
         * Similar to `filter`, except that it keeps only values for which the given predicate
         * function returns falsy.
         */
        // = filter

        // array
        reject<T>(pred: Pred<T>, list: List<T>): T[];
        // reject<T>(pred: Pred<T>): (list: List<T>) => T[]; // mix
        // reject<T>: CurriedFunction2<Pred<T>, List<T>, T[]>;

        // functor to functor
        reject<T>(pred: Pred<T>, list: Functor<T>): Functor<T>;
        // reject<T>(pred: Pred<T>): (list: Functor<T>) => Functor<T>; // mix
        // reject<T>: CurriedFunction2<Pred<T>, Functor<T>, Functor<T>>;

        // functor to array
        reject<T>(pred: Pred<T>, list: Functor<T>): T[];
        // reject<T>(pred: Pred<T>): (list: Functor<T>) => T[]; // mix
        // reject<T>: CurriedFunction2<Pred<T>, Functor<T>, T[]>;

        // object
        reject<T,U extends Obj<T>>(pred: Pred<T>, obj: U) : U;
        // reject<T>(pred: Pred<T>): <U extends Obj<T>>(obj: U) => Partial<U>; // mix
        // reject<T,U extends Obj<T>>: CurriedFunction2<Pred<T>, U, Partial<U>>;

        // mixed
        reject<T>(pred: Pred<T>): {
          (list: List<T>): T[];
          (list: Functor<T>): Functor<T>;
          (list: Functor<T>): T[];
          <U extends Obj<T>>(obj: U): U;
        };

        /**
         * Removes the sub-list of `list` starting at index `start` and containing `count` elements.
         */
        // remove<T>(start: number, count: number, list: List<T>): T[];
        // remove<T>(start: number, count: number): (list: List<T>) => T[];
        // remove<T>(start: number): CurriedFunction2<number,List<T>,T[]>;
        // // remove<T>: CurriedFunction3<number, number, List<T>, T[]>;

        // base
        remove<T>(start: number, count: number, list: List<T>): T[];
        remove(start: number, count: number):{
            <T>(list: List<T>): T[];
        };
        remove(start: number):{
            <T>(count: number, list: List<T>): T[];
            (count: number):{
                <T>(list: List<T>): T[];
            };
        };


        /**
         * Returns a fixed list of size n containing a specified identical value.
         */
        repeat<T>(a: T, n: number): T[];
        repeat<T>(a: T): (n: number) => T[];
        // repeat<T>: CurriedFunction2<T, number, T[]>;


        /**
         * Replace a substring or regex match in a string with a replacement.
         */
        // replace(pattern: RegExp|Prop, replacement: Prop, str: string): string;
        // replace(pattern: RegExp|Prop, replacement: Prop): (str: string) => string;
        // replace(pattern: RegExp|Prop): CurriedFunction2<Prop, string, string>;
        // // replace(pattern: RegExp|Prop): (replacement: Prop, str: string) => string;
        // // replace(pattern: RegExp|Prop): (replacement: Prop) => (str: string) => string;
        // // replace: CurriedFunction3<RegExp|Prop, Prop, string, string>;

        // base
        replace(pattern: RegExp|Prop, replacement: Prop, str: string): string;
        replace(pattern: RegExp|Prop, replacement: Prop):{
            (str: string): string;
        };
        replace(pattern: RegExp|Prop):{
            (replacement: Prop, str: string): string;
            (replacement: Prop):{
                (str: string): string;
            };
        };



        /**
         * Returns a new list with the same elements as the original list, just in the reverse order.
         */
        reverse<T>(list: List<T>): T[];

        /**
         * Scan is similar to reduce, but returns a list of successively reduced values from the left.
         */
        // scan<T, TResult>(fn: (acc: TResult, elem: T) => TResult|Reduced, acc: TResult, list: List<T>): TResult[];
        // scan<T, TResult>(fn: (acc: TResult, elem: T) => TResult|Reduced, acc: TResult): (list: List<T>) => TResult[];
        // scan<T, TResult>(fn: (acc: TResult, elem: T) => TResult|Reduced): CurriedFunction2<TResult, List<T>, TResult[]>;
        // // scan<T, TResult>: CurriedFunction3<(acc: TResult, elem: T) => TResult|Reduced, TResult, List<T>, TResult[]>;

        // base
        scan<T, TResult>(fn: (acc: TResult, elem: T) => TResult|Reduced, acc: TResult, list: List<T>): TResult[];
        scan<T, TResult>(fn: (acc: TResult, elem: T) => TResult|Reduced, acc: TResult):{
            (list: List<T>): TResult[];
        };
        scan<T, TResult>(fn: (acc: TResult, elem: T) => TResult|Reduced):{
            (acc: TResult, list: List<T>): TResult[];
            (acc: TResult):{
                (list: List<T>): TResult[];
            };
        };


        /**
         * Transforms a Traversable of Applicative into an Applicative of Traversable.
         */

        // common case of array as traversable:
        sequence<T>(f: (v: T) => Applicative<T>, traversable: List<Applicative<T>>): Applicative<Array<T>>;
        // sequence<T>(f: (v: T) => Applicative<T>): (traversable: List<Applicative<T>>) => Applicative<Array<T>>;  // mix
        // sequence<T>: CurriedFunction2<(v: T) => Applicative<T>, List<Applicative<T>>, Applicative<Array<T>>>;

        // general ADT case:
        sequence<T>(f: (v: T) => Applicative<T>, traversable: Traversable<Applicative<T>>): Applicative<Traversable<T>>;
        // sequence<T>(f: (v: T) => Applicative<T>): (traversable: Traversable<Applicative<T>>) => Applicative<Traversable<T>>;  // mix
        // sequence<T>: CurriedFunction2<(v: T) => Applicative<T>, Traversable<Applicative<T>>, Applicative<Traversable<T>>>;

        // mixed:
        sequence<T>(f: (v: T) => Applicative<T>): {
          (traversable: List<Applicative<T>>): Applicative<Array<T>>;
          (traversable: Traversable<Applicative<T>>): Applicative<Traversable<T>>;
        };


        /**
         * Returns the result of "setting" the portion of the given data structure focused by the given lens to the
         * given value.
         */
        // hard to mix cuz different generics

        // // key lens:
        // set<T, K extends keyof T>(lens: KeyLens<T,K>, a: T[K], obj: T): T;
        // set<T, K extends keyof T>(lens: KeyLens<T,K>, a: T[K]): (obj: T) => T;
        // set<T, K extends keyof T>(lens: KeyLens<T,K>): CurriedFunction2<T[K], T, T>;
        // // set<T, K extends keyof T>: CurriedFunction3<KeyLens<T,K>, T[K], T, T>;

        // regular lenses:

        // // smart approach, unreliable:
        // set<T,U>(lens: Lens<T,U>, a: U, obj: T): T;
        // set<T,U>(lens: Lens<T,U>, a: U): (obj: T) => T;
        // // set<T,U>(lens: Lens<T,U>): (a: U, obj: T) => T;
        // set<T,U>(lens: Lens<T,U>): CurriedFunction2<U, T, T>;
        // // set<T,U>: CurriedFunction3<Lens<T,U>, U, T, T>;

        // // // manually set lens; is this useful?
        // // set<T,U>(lens: ManualLens<U>, a: U, obj: T): T;
        // // set<U>(lens: ManualLens<U>, a: U): <T>(obj: T) => T;
        // // set<T,U>(lens: ManualLens<U>): CurriedFunction2<U,T,T>;
        // // // set<T,U>: CurriedFunction3<ManualLens<U>, U, T, T>;

        // // assume result type equal to input object:
        // set<T>(lens: UnknownLens, a: any, obj: T): T;
        // set<T>(lens: UnknownLens, a: any): (obj: T) => T;
        // // set<T>(lens: UnknownLens): (a: any, obj: T) => T;
        // set<T>(lens: UnknownLens): CurriedFunction2<any, T, T>;
        // // set<T>: CurriedFunction3<UnknownLens, any, T, T>;

        // // // old version, with value as an unbound generic; is this useful?
        // // set<T,U>(lens: UnknownLens, a: U, obj: T): T;
        // // set<T,U>(lens: UnknownLens, a: U): (obj: T) => T;
        // // set<T,U>(lens: UnknownLens): CurriedFunction2<U,T,T>;
        // // // set<T,U>: CurriedFunction3<UnknownLens, U, T, T>;
        // base
        set<T, U>(lens: Lens<T, U>, a: U, obj: T): T;
        set<T, U>(lens: Lens<T, U>, a: U):{
            (obj: T): T;
        };
        set<T, U>(lens: Lens<T, U>):{
            (a: U, obj: T): T;
            (a: U):{
                (obj: T): T;
            };
        };

        // unknow
        set<T>(lens: UnknownLens, a: any, obj: T): T;
        set(lens: UnknownLens, a: any):{
            <T>(obj: T): T;
        };
        set(lens: UnknownLens):{
            <T>(a: any, obj: T): T;
            (a: any):{
                <T>(obj: T): T;
            };
        };


        /**
         * Returns the elements from `xs` starting at `a` and ending at `b - 1`.
         */
        // slice<T extends List<any>>(a: number, b: number, list: T): T;
        // slice(a: number, b: number): <T extends List<any>>(list: T) => T;
        // slice<T extends List<any>>(a: number): CurriedFunction2<number, T, T>;
        // // slice(a: number): <T extends List<any>>(b: number, list: T) => T;
        // // slice(a: number): <T extends List<any>>(b: number) => (list: T) => T;
        // // slice<T extends List<any>>: CurriedFunction3<number, number, T, T>;

        // base
        slice<T extends List<any>>(a: number, b: number, list: T): T;
        slice(a: number, b: number):{
            <T extends List<any>>(list: T): T;
        };
        slice(a: number):{
            <T extends List<any>>(b: number, list: T): T;
            (b: number):{
                <T extends List<any>>(list: T): T;
            };
        };


        /**
         * Returns a copy of the list, sorted according to the comparator function, which should accept two values at a
         * time and return a negative number if the first value is smaller, a positive number if it's larger, and zero
         * if they are equal.
         */
        sort<T>(fn: (a: T, b: T) => number, list: List<T>): T[];
        sort<T>(fn: (a: T, b: T) => number): (list: List<T>) => T[];
        // sort<T>: CurriedFunction2<(a: T, b: T) => number, List<T>, T[]>;


        /**
         * Sorts the list according to a key generated by the supplied function.
         */
        sortBy<T>(fn: (a: T) => Ord, list: List<T>): T[];
        sortBy<T>(fn: (a: T) => Ord): (list: List<T>) => T[];
        // sortBy<T>: CurriedFunction2<(a: T) => Ord, List<T>, T[]>;

        /**
         * Sorts a list according to a list of comparators.
         */
        sortWith<T>(comparators: List<(a: T, b: T) => number>, list: List<T>): T[];
        sortWith<T>(comparators: List<(a: T, b: T) => number>): (list: List<T>) => T[];
        // sortWith<T>: CurriedFunction2<List<(a: T, b: T) => number>, List<T>, T[]>;

        /**
         * Splits a string into an array of strings based on the given
         * separator.
         */
        split(sep: RegExp|Prop, str: string): string[];
        split(sep: RegExp|Prop): (str: string) => string[];
        // split: CurriedFunction2<RegExp|Prop, string, string[]>;

        /**
         * Splits a given list or string at a given index.
         */
        // string
        splitAt(index: number, list: string): [string, string];
        // splitAt(index: number): (list: string) => [string, string];
        // splitAt: CurriedFunction2<number, string, [string, string]>;
        // array
        splitAt<T>(index: number, list: List<T>): T[][];
        // splitAt(index: number): <T>(list: List<T>) => T[][];
        // splitAt<T>: CurriedFunction2<number, List<T>, T[][]>;
        // mixed
        splitAt(index: number): {
            (list: string): [string, string];
            <T>(list: List<T>): T[][];
        };

        /**
         * Splits a collection into slices of the specified length.
         */
        splitEvery<T, R extends List<T>>(a: number, list: R): R[];
        splitEvery(a: number): <T, R extends List<T>>(list: R) => R[];
        // splitEvery<T, R extends List<T>>: CurriedFunction2<number, R, R[]>;

        /**
         * Takes a list and a predicate and returns a pair of lists with the following properties:
         * - the result of concatenating the two output lists is equivalent to the input list;
         * - none of the elements of the first output list satisfies the predicate; and
         * - if the second output list is non-empty, its first element satisfies the predicate.
         */
        splitWhen<T, R extends List<T>>(pred: Pred<T>, list: R): R[];
        splitWhen<T>(pred: Pred<T>): <R extends List<T>>(list: R) => R[];
        // splitWhen<T, R extends List<T>>: CurriedFunction2<Pred<T>, R, R[]>;

        /**
         * Subtracts two numbers. Equivalent to `a - b` but curried.
         */
        subtract(a: number, b: number): number;
        subtract(a: number): (b: number) => number;
        // subtract: CurriedFunction2<number, number, number>;

        /**
         * Adds together all the elements of a list.
         */
        sum(list: List<number>): number;

        /**
         * Finds the set (i.e. no duplicates) of all elements contained in the first or second list, but not both.
         */
        symmetricDifference<T>(list1: List<T>, list2: List<T>): T[];
        symmetricDifference<T>(list: List<T>): (list: List<T>) => T[];
        // symmetricDifference<T>: CurriedFunction2<List<T>, List<T>, T[]>;

        /**
         * Finds the set (i.e. no duplicates) of all elements contained in the first or second list, but not both.
         * Duplication is determined according to the value returned by applying the supplied predicate to two list elements.
         */
        // symmetricDifferenceWith<T>(pred: (a: T, b: T) => boolean, list1: List<T>, list2: List<T>): T[];
        // symmetricDifferenceWith<T>(pred: (a: T, b: T) => boolean): CurriedFunction2<List<T>, List<T>, T[]>;
        // // symmetricDifferenceWith<T>: CurriedFunction3<(a: T, b: T) => boolean, List<T>, List<T>, T[]>;

        // base
        symmetricDifferenceWith<T>(pred: (a: T, b: T) => boolean, list1: List<T>, list2: List<T>): T[];
        symmetricDifferenceWith<T>(pred: (a: T, b: T) => boolean, list1: List<T>):{
            (list2: List<T>): T[];
        };
        symmetricDifferenceWith<T>(pred: (a: T, b: T) => boolean):{
            (list1: List<T>, list2: List<T>): T[];
            (list1: List<T>):{
                (list2: List<T>): T[];
            };
        };


        /**
         * A function that always returns true. Any passed in parameters are ignored.
         */
        T(): true;

        /**
         * Returns all but the first element of a list.
         */
        tail<T extends List<any>>(list: T): T;
        tail(list: string): string;

        /**
         * Returns a new list containing the first `n` elements of the given list.  If
         * `n > * list.length`, returns a list of `list.length` elements.
         */
        take<T extends List<any>>(n: number, xs: T): T;
        take(n: number): <T extends List<any>>(xs: T) => T;
        // take<T extends List<any>>: CurriedFunction2<number, T, T>;


        /**
         * Returns a new list containing the last n elements of the given list. If n > list.length,
         * returns a list of list.length elements.
         */
        // = take
        takeLast<T extends List<any>>(n: number, xs: T): T;
        takeLast(n: number): <T extends List<any>>(xs: T) => T;
        // takeLast<T extends List<any>>: CurriedFunction2<number, T, T>;

        /**
         * Returns a new list containing the last n elements of a given list, passing each value
         * to the supplied predicate function, and terminating when the predicate function returns
         * false. Excludes the element that caused the predicate function to fail. The predicate
         * function is passed one argument: (value).
         */
        // = takeWhile
        takeLastWhile<T, R extends List<T>>(pred: Pred<T>, list: R): R;
        takeLastWhile<T>(pred: Pred<T>): <R extends List<T>>(list: R) => R;
        // takeLastWhile<T, R extends List<T>>: CurriedFunction2<Pred<T>, R, R>;

        /**
         * Returns a new list containing the first `n` elements of a given list, passing each value
         * to the supplied predicate function, and terminating when the predicate function returns
         * `false`.
         */
        takeWhile<T, R extends List<T>>(pred: Pred<T>, list: R): R;
        takeWhile<T>(pred: Pred<T>): <R extends List<T>>(list: R) => R;
        // takeWhile<T, R extends List<T>>: CurriedFunction2<Pred<T>, R, R>;

        /**
         * The function to call with x. The return value of fn will be thrown away.
         */
        tap<T>(fn: (a: T) => any, value: T): T;
        tap<T>(fn: (a: T) => any): (value: T) => T;
        // tap<T>: CurriedFunction2<(a: T) => any, T, T>;

        /**
         * Determines whether a given string matches a given regular expression.
         */
        test(regexp: RegExp, str: Prop): boolean;
        test(regexp: RegExp): (str: Prop) => boolean;
        // test: CurriedFunction2<RegExp, Prop, boolean>;

        /**
         * Calls an input function `n` times, returning an array containing the results of those
         * function calls.
         */
        times<T>(fn: (i: number) => T, n: number): T[];
        times<T>(fn: (i: number) => T): (n: number) => T[];
        // times<T>: CurriedFunction2<(i: number) => T, number, T[]>;


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
        toPairs<T>(obj: Obj<T>): [string,T][];

        /**
         * Converts an object into an array of key, value arrays.
         * The object's own properties and prototype properties are used.
         * Note that the order of the output array is not guaranteed to be
         * consistent across different JS platforms.
         */
        toPairsIn<T>(obj: Obj<T>): [string,T][];
        toPairsIn(obj: Object): [string,any][];

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
        toString(val: StringRepresentable<string> | any): string;

        /**
         * The upper case version of a string.
         */
        toUpper(str: string): string;

        /**
         * Initializes a transducer using supplied iterator function. Returns a single item by iterating through the
         * list, successively calling the transformed iterator function and passing it an accumulator value and the
         * current value from the array, and then passing the result to the next call.
         */
        // transduce<T,U>(xf: (arg: List<T>) => List<T>, fn: (acc: List<U>, val: U) => List<U>, acc: List<T>, list: List<T>): U;
        // transduce<T,U>(xf: (arg: List<T>) => List<T>, fn: (acc: List<U>, val: U) => List<U>, acc: List<T>): (list: List<T>) => U;
        // transduce<T,U>(xf: (arg: List<T>) => List<T>, fn: (acc: List<U>, val: U) => List<U>): CurriedFunction2<List<T>,List<T>,U>;
        // transduce<T,U>(xf: (arg: List<T>) => List<T>): CurriedFunction3<(acc: List<U>, val: U) => List<U>,List<T>,List<T>,U>;
        // // transduce<T,U>: CurriedFunction4<(arg: List<T>) => List<T>, (acc: List<U>, val: U) => List<U>, List<T>, List<T>, U>;

        // base
        transduce<T, U>(xf: (arg: List<T>) => List<T>, fn: (acc: List<U>, val:U) => List<U>, acc: List<T>, list: List<T>): U;
        transduce<T, U>(xf: (arg: List<T>) => List<T>, fn: (acc: List<U>, val:U) => List<U>, acc: List<T>):{
            (list: List<T>): U;
        };
        transduce<T, U>(xf: (arg: List<T>) => List<T>, fn: (acc: List<U>, val:U) => List<U>):{
            (acc: List<T>, list: List<T>): U;
            (acc: List<T>):{
                (list: List<T>): U;
            };
        };
        transduce<T>(xf: (arg: List<T>) => List<T>):{
            <U>(fn: (acc: List<U>, val:U) => List<U>, acc: List<T>, list: List<T>): U;
            <U>(fn: (acc: List<U>, val:U) => List<U>, acc: List<T>):{
                (list: List<T>): U;
            };
            <U>(fn: (acc: List<U>, val:U) => List<U>):{
                (acc: List<T>, list: List<T>): U;
                (acc: List<T>):{
                    (list: List<T>): U;
                };
            };
        };


        /**
         * Transposes the rows and columns of a 2D list. When passed a list of n lists of length x, returns a list of x lists of length n.
         */
        transpose<T>(list: List<List<T>>): T[][];
        transpose(list: List<List<any>>): any[][];

        /**
         * Maps an Applicative-returning function over a Traversable, then uses
         * `sequence` to transform the resulting Traversable of Applicative into
         * an Applicative of Traversable.
         */

        //  // common case of array as traversable:
        //  traverse<T, U>(ap: (v: T) => Applicative<T>, fn: (v: T) => Applicative<U>, traversable: List<T>): Applicative<Array<U>>;
        //  // traverse<T, U>(ap: (v: T) => Applicative<T>, fn: (v: T) => Applicative<U>): (traversable: List<T>) => Applicative<Array<U>>; // mix
        //  traverse<T, U>(ap: (v: T) => Applicative<T>): CurriedFunction2<(v: T) => Applicative<U>, List<T>, Applicative<Array<U>>>;
        //  // traverse<T, U>: CurriedFunction3<(v: T) => Applicative<T>, (v: T) => Applicative<U>, List<T>, Applicative<Array<U>>>;

        //  // general ADT case:
        //  traverse<T, U>(ap: (v: T) => Applicative<T>, fn: (v: T) => Applicative<U>, traversable: Traversable<T>): Applicative<Traversable<U>>;
        // //  traverse<T, U>(ap: (v: T) => Applicative<T>, fn: (v: T) => Applicative<U>): (traversable: Traversable<T>) => Applicative<Traversable<U>>; // mix
        //  traverse<T, U>(ap: (v: T) => Applicative<T>): CurriedFunction2<(v: T) => Applicative<U>, Traversable<T>, Applicative<Traversable<U>>>;
        //  // traverse<T, U>: CurriedFunction3<(v: T) => Applicative<T>, (v: T) => Applicative<U>, Traversable<T>, Applicative<Traversable<U>>>;

        // // mixed:
        //  traverse<T, U>(ap: (v: T) => Applicative<T>, fn: (v: T) => Applicative<U>): {
        //    (traversable: List<T>): Applicative<Array<U>>;
        //    (traversable: Traversable<T>): Applicative<Traversable<U>>;
        //  };

        // base
        traverse<T, U>(ap: (v: T) => Applicative<T>, fn: (v: T) => Applicative<U>, traversable: List<T>): Applicative<Array<U>>;
        traverse<T, U>(ap: (v: T) => Applicative<T>, fn: (v: T) => Applicative<U>):{
            (traversable: List<T>): Applicative<Array<U>>;
        };
        traverse<T>(ap: (v: T) => Applicative<T>):{
            <U>(fn: (v: T) => Applicative<U>, traversable: List<T>): Applicative<Array<U>>;
            <U>(fn: (v: T) => Applicative<U>):{
                (traversable: List<T>): Applicative<Array<U>>;
            };
        };

        // general ADT case
        traverse<T, U>(ap: (v: T) => Applicative<T>, fn: (v: T) => Applicative<U>, traversable: List<T>): Applicative<Traversable<U>>;
        traverse<T, U>(ap: (v: T) => Applicative<T>, fn: (v: T) => Applicative<U>):{
            (traversable: List<T>): Applicative<Traversable<U>>;
        };
        traverse<T>(ap: (v: T) => Applicative<T>):{
            <U>(fn: (v: T) => Applicative<U>, traversable: List<T>): Applicative<Traversable<U>>;
            <U>(fn: (v: T) => Applicative<U>):{
                (traversable: List<T>): Applicative<Traversable<U>>;
            };
        };


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
        tryCatch<T>(tryer: Variadic<T>, catcher: Variadic<T>): Variadic<T>;
        // tryCatch<T>: CurriedFunction2<Variadic<T>, Variadic<T>, Variadic<T>>;

        /**
         * Gives a single-word string description of the (native) type of a value, returning such answers as 'Object',
         * 'Number', 'Array', or 'Null'. Does not attempt to distinguish user Object types any further, reporting them
         * all as 'Object'.
         */
        type(val: any): string;

        /**
         * Takes a function fn, which takes a single array argument, and returns a function which:
         * - takes any number of positional arguments;
         * - passes these arguments to fn as an array; and
         * - returns the result.
         * In other words, R.unapply derives a variadic function from a function which takes an array.
         * R.unapply is the inverse of R.apply.
         */
        unapply<T>(fn: (args: any[]) => T): Variadic<T>;

        /**
         * Wraps a function of any arity (including nullary) in a function that accepts exactly 1 parameter.
         * Any extraneous parameters will not be passed to the supplied function.
         */
        unary<T,U>(fn: (a: T, ...args: any[]) => U): (a: T) => U;

        /**
         * Returns a function of arity n from a (manually) curried function.
         */
        uncurryN<T>(len: number, fn: (a: any) => any): Variadic<T>;
        // uncurryN<T>: CurriedFunction2<number, (a: any) => any, Variadic<T>>;

        /**
         * Builds a list from a seed value. Accepts an iterator function, which returns either false
         * to stop iteration or an array of length 2 containing the value to add to the resulting
         * list and the seed to be used in the next call to the iterator function.
         */
        unfold<T, TResult>(fn: (seed: T) => [TResult, T]|false, seed: T): TResult[];
        unfold<T, TResult>(fn: (seed: T) => [TResult, T]|false): (seed: T) => TResult[];
        // unfold<T, TResult>: CurriedFunction2<(seed: T) => TResult[]|boolean, T, TResult[]>;

        /**
         * Combines two lists into a set (i.e. no duplicates) composed of the
         * elements of each list.
         */
        union<T>(as: List<T>, bs: List<T>): T[];
        union<T>(as: List<T>): (bs: List<T>) => T[];
        // union<T>: CurriedFunction2<List<T>, List<T>, T[]>;

        /**
         * Combines two lists into a set (i.e. no duplicates) composed of the elements of each list.  Duplication is
         * determined according to the value returned by applying the supplied predicate to two list elements.
         */
        // unionWith<T>(pred: (a: T, b: T) => boolean, list1: List<T>, list2: List<T>): T[];
        // unionWith<T>(pred: (a: T, b: T) => boolean, list1: List<T>): (list2: List<T>) => T[];
        // unionWith<T>(pred: (a: T, b: T) => boolean): CurriedFunction2<List<T>, List<T>, T[]>;
        // // unionWith<T>: CurriedFunction3<(a: T, b: T) => boolean, List<T>, List<T>, T[]>;

        // base
        unionWith<T>(pred: (a: T, b: T) => boolean, list1: List<T>, list2: List<T>): T[];
        unionWith<T>(pred: (a: T, b: T) => boolean, list1: List<T>):{
            (list2: List<T>): T[];
        };
        unionWith<T>(pred: (a: T, b: T) => boolean):{
            (list1: List<T>, list2: List<T>): T[];
            (list1: List<T>):{
                (list2: List<T>): T[];
            };
        };


        /**
         * Returns a new list containing only one copy of each element in the original list.
         */
        uniq<T>(list: List<T>): T[];

        /**
         * Returns a new list containing only one copy of each element in the original list, based upon the value returned by applying the supplied function to each list element. Prefers the first item if the supplied function produces the same value on two items. R.equals is used for comparison.
         */
        uniqBy<T,U>(fn: (a: T) => U, list: List<T>): T[];
        uniqBy<T,U>(fn: (a: T) => U): (list: List<T>) => T[];
        // uniqBy<T,U>: CurriedFunction2<(a: T) => U, List<T>, T[]>;

        /**
         * Returns a new list containing only one copy of each element in the original list, based upon the value
         * returned by applying the supplied predicate to two list elements.
         */
        uniqWith<T,U>(pred: (x: T, y: T) => boolean, list: List<T>): T[];
        uniqWith<T,U>(pred: (x: T, y: T) => boolean): (list: List<T>) => T[];
        // uniqWith<T,U>: CurriedFunction2<(x: T, y: T) => boolean, List<T>, T[]>;

        /**
         * Tests the final argument by passing it to the given predicate function. If the predicate is not satisfied,
         * the function will return the result of calling the whenFalseFn function with the same argument. If the
         * predicate is satisfied, the argument is returned as is.
         */
        unless<T,U>(pred: Pred<T>, whenFalseFn: (a: T) => U, obj: T): U;
        unless<T,U>(pred: Pred<T>, whenFalseFn: (a: T) => U): (obj: T) => U;
        // unless<T,U>: CurriedFunction3<Pred<T>, (a: T) => U, T, U>;

        /**
         * Returns a new list by pulling every item at the first level of nesting out, and putting
         * them in a new array.
         */
        unnest<T>(x: List<List<T>>): T[];
        unnest<T>(x: List<T>): T[];

        /**
         * Takes a predicate, a transformation function, and an initial value, and returns a value of the same type as
         * the initial value. It does so by applying the transformation until the predicate is satisfied, at which point
         * it returns the satisfactory value.
         */
        // until<T,U>(pred: Pred<T>, fn: (val: T) => U, init: U): U;
        // until<T,U>(pred: Pred<T>, fn: (val: T) => U): (init: U) => U;
        // until<T,U>(pred: Pred<T>): CurriedFunction2<(val: T) => U, U, U>;
        // // until<T,U>: CurriedFunction3<Pred<T>, (val: T) => U, U, U>;

        // base
        until<T, U>(pred: Pred<T>, fn: (val: T) => U, init: U): U;
        until<T, U>(pred: Pred<T>, fn: (val: T) => U):{
            (init: U): U;
        };
        until<T>(pred: Pred<T>):{
            <U>(fn: (val: T) => U, init: U): U;
            <U>(fn: (val: T) => U):{
                (init: U): U;
            };
        };


        /**
         * Returns a new copy of the array with the element at the provided index replaced with the given value.
         */
        // update<T>(index: number, value: T, list: List<T>): T[];
        // update<T>(index: number, value: T): (list: List<T>) => T[];
        // update<T>(index: number): CurriedFunction2<T,List<T>,T[]>;
        // // update<T>: CurriedFunction3<number, T, List<T>, T[]>;

         // base
        update<T>(index: number, value: T, list: List<T>): T[];
        update<T>(index: number, value: T):{
            (list: List<T>): T[];
        };
        update(index: number):{
            <T>(value: T, list: List<T>): T[];
            <T>(value: T):{
                (list: List<T>): T[];
            };
        };


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
        useWith<T>(fn: Variadic<T>, transformers: List<Function>): Variadic<T>;
        useWith<T>(fn: Variadic<T>): (transformers: List<Function>) => Variadic<T>;
        // useWith<T>: CurriedFunction2<Variadic<T>, List<Function>, Variadic<T>>;

        /**
         * Returns a list of all the enumerable own properties of the supplied object.
         * Note that the order of the output array is not guaranteed across
         * different JS platforms.
         */
        values<T>(obj: Struct<T>): T[];
        values<T>(obj: Object): any[];

        /**
         * Returns a list of all the properties, including prototype properties, of the supplied
         * object. Note that the order of the output array is not guaranteed to be consistent across different JS platforms.
         */
        valuesIn<T>(obj: Struct<T>): T[];
        valuesIn(obj: Object): any[];

        /**
         * Returns a "view" of the given data structure, determined by the given lens. The lens's focus determines which
         * portion of the data structure is visible.
         */
        // hard to mix cuz different generics

        // // key lens:
        // view<T, K extends keyof T>(lens: KeyLens<T,K>, obj: T): T[K];
        // view<T, K extends keyof T>(lens: KeyLens<T,K>): (obj: T) => T[K];
        // // view<T, K extends keyof T>: CurriedFunction2<KeyLens<T,K>, T, T[K]>;

        // regular lenses:

        // smart approach, unreliable:
        view<T,U>(lens: Lens<T,U>, obj: T): U;
        view<T,U>(lens: Lens<T,U>): (obj: T) => U;
        // view<T,U>: CurriedFunction2<Lens<T,U>, T, U>;

        // lens with type manually set
        view<T>(lens: ManualLens<T>, obj: Struct<any>): T;
        view<T>(lens: ManualLens<T>): (obj: Struct<any>) => T;
        // view<T>: CurriedFunction2<ManualLens<T>, Struct<any>, T>;

        // unknown lens, manually supply return type. does this add to the above case?
        view<T>(lens: UnknownLens, obj: Struct<any>): T;
        view<T>(lens: UnknownLens): (obj: Struct<any>) => T;
        // view<T>: CurriedFunction2<UnknownLens, Struct<any>, T>;

        /**
         * Tests the final argument by passing it to the given predicate function. If the predicate is satisfied, the function
         * will return the result of calling the whenTrueFn function with the same argument. If the predicate is not satisfied,
         * the argument is returned as is.
         */
        // when<T,U>(pred: Pred<T>, whenTrueFn: (a: T) => U, obj: T): U;
        // when<T,U>(pred: Pred<T>, whenTrueFn: (a: T) => U): (obj: T) => U;
        // when<T,U>(pred: Pred<T>): CurriedFunction2<(a: T) => U, T, U>;
        // // when<T,U>: CurriedFunction3<Pred<T>, (a: T) => U, T, U>;

        // base
        when<T, U>(pred: Pred<T>, whenTrueFn: (a: T) => U, obj: T): U;
        when<T, U>(pred: Pred<T>, whenTrueFn: (a: T) => U):{
            (obj: T): U;
        };
        when<T>(pred: Pred<T>):{
            <U>(whenTrueFn: (a: T) => U, obj: T): U;
            <U>(whenTrueFn: (a: T) => U):{
                (obj: T): U;
            };
        };



        /**
         * Takes a spec object and a test object and returns true if the test satisfies the spec.
         * Any property on the spec that is not a function is interpreted as an equality
         * relation.
         *
         * If the spec has a property mapped to a function, then `where` evaluates the function, passing in
         * the test object's value for the property in question, as well as the whole test object.
         *
         * `where` is well suited to declarativley expressing constraints for other functions, e.g.,
         * `filter`, `find`, etc.
         */
        // hard to mix cuz different generics

        // // heterogeneous version
        // where<T extends Obj<any>>(spec: { [P in keyof T]?: Pred<T[P]>; }, testObj: T): boolean;
        // where<T extends Obj<any>>(spec: { [P in keyof T]?: Pred<T[P]>; }): (testObj: T) => boolean;  // generics too early?
        // // where<T extends Obj<any>>: CurriedFunction2<{ [P in keyof T]?: Pred<T[P]>; }, T, boolean>;

        // homogeneous version
        where<T>(spec: Obj<Pred<T>>, testObj: Obj<T>): boolean;
        where<T>(spec: Obj<Pred<T>>): (testObj: Obj<T>) => boolean;
        // where<T>: CurriedFunction2<Obj<Pred<T>>, Obj<T>, boolean>;

        // DIY "fill in the type params yourself" version
        where<T,U>(spec: T, testObj: U): boolean;
        where<T>(spec: T): <U>(testObj: U) => boolean;
        // where<T,U>: CurriedFunction2<T, U, boolean>;

       /**
        * Takes a spec object and a test object; returns true if the test satisfies the spec,
        * false otherwise. An object satisfies the spec if, for each of the spec's own properties,
        * accessing that property of the object gives the same value (in R.eq terms) as accessing
        * that property of the spec.
        */
        // hard to mix cuz different generics

        // // heterogeneous version
        // whereEq<T extends Obj<any>>(spec: Partial<T>, testObj: T): boolean;
        // whereEq<T extends Obj<any>>(spec: Partial<T>): (testObj: T) => boolean;
        // // whereEq<T extends Obj<any>>: CurriedFunction2<Partial<T>, T, boolean>;

        // homogeneous version
        whereEq<T>(spec: Obj<T>, testObj: Obj<T>): boolean;
        whereEq<T>(spec: Obj<T>): (testObj: Obj<T>) => boolean;
        // whereEq<T>: CurriedFunction2<Obj<T>, Obj<T>, boolean>;

        // DIY "fill in the type params yourself" version
        whereEq<T,U>(spec: T, testObj: U): boolean;
        whereEq<T>(spec: T): <U>(testObj: U) => boolean;
        // whereEq<T,U>: CurriedFunction2<T, U, boolean>;

        /**
         * Returns a new list without values in the first argument. R.equals is used to determine equality.
         * Acts as a transducer if a transformer is given in list position.
         */
        without<T>(list1: List<T>, list2: List<T>): T[];
        without<T>(list1: List<T>): (list2: List<T>) => T[];
        // without<T>: CurriedFunction2<List<T>, List<T>, T[]>;

        /**
         * Creates a new list out of the two supplied by creating each possible pair from the lists.
         */
        xprod<K,V>(as: List<K>, bs: List<V>): KeyValuePair<K,V>[];
        xprod<K>(as: List<K>): <V>(bs: List<V>) => KeyValuePair<K,V>[];
        // xprod<K,V>: CurriedFunction2<List<K>, List<V>, KeyValuePair<K,V>[]>;

        /**
         * Creates a new list out of the two supplied by pairing up equally-positioned items from
         * both lists. Note: `zip` is equivalent to `zipWith(function(a, b) { return [a, b] })`.
         */
        zip<K,V>(list1: List<K>, list2: List<V>): KeyValuePair<K,V>[];
        zip<K>(list1: List<K>): <V>(list2: List<V>) => KeyValuePair<K,V>[];
        // zip<K,V>: CurriedFunction2<List<K>, List<V>, KeyValuePair<K,V>[]>;

        /**
         * Creates a new object out of a list of keys and a list of values.
         */
        // TODO: Obj<T> as a return value is to specific, any seems to loose
        zipObj<T>(keys: List<Prop>, values: List<T>): Obj<T>;
        zipObj(keys: List<Prop>): <T>(values: List<T>) => Obj<T>;
        // zipObj<T>: CurriedFunction2<List<Prop>, List<T>, Obj<T>>;


        /**
         * Creates a new list out of the two supplied by applying the function to each
         * equally-positioned pair in the lists.
         */
        zipWith<T, U, TResult>(fn: (x: T, y: U) => TResult, list1: List<T>, list2: List<U>): TResult[];
        zipWith<T, U, TResult>(fn: (x: T, y: U) => TResult, list1: List<T>): (list2: List<U>) => TResult[];
        zipWith<T, U, TResult>(fn: (x: T, y: U) => TResult): CurriedFunction2<List<T>, List<U>, TResult[]>;
        // zipWith<T, U, TResult>: CurriedFunction3<(x: T, y: U) => TResult, List<T>, List<U>, TResult[]>;

    }
}

export = R;
