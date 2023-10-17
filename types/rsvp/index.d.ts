// These types are derived in large part from the Microsoft-supplied types for
// ES2015 Promises. They have been tweaked to support RSVP's extensions to the
// Promises A+ spec and the additional helper functions it supplies.

declare namespace RSVP {
    // All the Promise methods essentially flatten existing promises, so that
    // you don't end up with `Promise<Promise<Promise<string>>>` if you happen
    // to return another `Promise` from a `.then()` invocation, etc. So all of
    // them can take a type or a promise-like/then-able type.
    type Arg<T> = T | PromiseLike<T>;

    // RSVP supplies status for promises in certain places.
    enum State {
        fulfilled = "fulfilled",
        rejected = "rejected",
        pending = "pending",
    }

    type Resolved<T> = {
        state: State.fulfilled;
        value: T;
    };

    type Rejected<T = any> = {
        state: State.rejected;
        reason: T;
    };

    type Pending = {
        state: State.pending;
    };

    type PromiseState<T> = Resolved<T> | Rejected | Pending;

    type Deferred<T> = {
        promise: Promise<T>;
        resolve: (value?: RSVP.Arg<T>) => void;
        reject: (reason?: any) => void;
    };

    interface InstrumentEvent {
        guid: string; // guid of promise. Must be globally unique, not just within the implementation
        childGuid: string; // child of child promise (for chained via `then`)
        eventName: string; // one of ['created', 'chained', 'fulfilled', 'rejected']
        detail: any; // fulfillment value or rejection reason, if applicable
        label: string; // label passed to promise's constructor
        timeStamp: number; // milliseconds elapsed since 1 January 1970 00:00:00 UTC up until now
    }

    interface ObjectWithEventMixins {
        on(
            eventName: "created" | "chained" | "fulfilled" | "rejected",
            listener: (event: InstrumentEvent) => void,
        ): void;
        on(eventName: "error", errorHandler: (reason: any) => void): void;
        on(eventName: string, callback: (value: any) => void): void;
        off(eventName: string, callback?: (value: any) => void): void;
        trigger(eventName: string, options?: any, label?: string): void;
    }

    class EventTarget {
        /** `RSVP.EventTarget.mixin` extends an object with EventTarget methods. */
        static mixin(object: object): ObjectWithEventMixins;

        /** Registers a callback to be executed when `eventName` is triggered */
        static on(
            eventName: "created" | "chained" | "fulfilled" | "rejected",
            listener: (event: InstrumentEvent) => void,
        ): void;
        static on(eventName: "error", errorHandler: (reason: any) => void): void;
        static on(eventName: string, callback: (value: any) => void): void;

        /**
         * You can use `off` to stop firing a particular callback for an event.
         *
         * If you don't pass a `callback` argument to `off`, ALL callbacks for the
         * event will not be executed when the event fires.
         */
        static off(eventName: string, callback?: (value: any) => void): void;

        /**
         * Use `trigger` to fire custom events.
         *
         * You can also pass a value as a second argument to `trigger` that will be
         * passed as an argument to all event listeners for the event
         */
        static trigger(eventName: string, options?: any, label?: string): void;
    }

    class Promise<T> implements PromiseLike<T> {
        constructor(
            executor: (resolve: (value?: RSVP.Arg<T>) => void, reject: (reason?: any) => void) => void,
            label?: string,
        );

        new<T>(
            executor: (resolve: (value?: RSVP.Arg<T>) => void, reject: (reason?: any) => void) => void,
        ): RSVP.Promise<T>;

        then<TResult1 = T, TResult2 = never>(
            onFulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | null,
            onRejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null,
            label?: string,
        ): RSVP.Promise<TResult1 | TResult2>;

        catch<TResult = never>(
            onRejected?: ((reason: any) => TResult | PromiseLike<TResult>) | null,
            label?: string,
        ): RSVP.Promise<T | TResult>;

        finally<U>(onFinally?: U | PromiseLike<U>): RSVP.Promise<T>;

        readonly [Symbol.toStringTag]: "Promise";

        static all<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(
            values: [Arg<T1>, Arg<T2>, Arg<T3>, Arg<T4>, Arg<T5>, Arg<T6>, Arg<T7>, Arg<T8>, Arg<T9>, Arg<T10>],
            label?: string,
        ): RSVP.Promise<[T1, T2, T3, T4, T5, T6, T7, T8, T9, T10]>;
        static all<T1, T2, T3, T4, T5, T6, T7, T8, T9>(
            values: [Arg<T1>, Arg<T2>, Arg<T3>, Arg<T4>, Arg<T5>, Arg<T6>, Arg<T7>, Arg<T8>, Arg<T9>],
            label?: string,
        ): RSVP.Promise<[T1, T2, T3, T4, T5, T6, T7, T8, T9]>;
        static all<T1, T2, T3, T4, T5, T6, T7, T8>(
            values: [Arg<T1>, Arg<T2>, Arg<T3>, Arg<T4>, Arg<T5>, Arg<T6>, Arg<T7>, Arg<T8>],
            label?: string,
        ): RSVP.Promise<[T1, T2, T3, T4, T5, T6, T7, T8]>;
        static all<T1, T2, T3, T4, T5, T6, T7>(
            values: [Arg<T1>, Arg<T2>, Arg<T3>, Arg<T4>, Arg<T5>, Arg<T6>, Arg<T7>],
            label?: string,
        ): RSVP.Promise<[T1, T2, T3, T4, T5, T6, T7]>;
        static all<T1, T2, T3, T4, T5, T6>(
            values: [Arg<T1>, Arg<T2>, Arg<T3>, Arg<T4>, Arg<T5>, Arg<T6>],
            label?: string,
        ): RSVP.Promise<[T1, T2, T3, T4, T5, T6]>;
        static all<T1, T2, T3, T4, T5>(
            values: [Arg<T1>, Arg<T2>, Arg<T3>, Arg<T4>, Arg<T5>],
            label?: string,
        ): RSVP.Promise<[T1, T2, T3, T4, T5]>;
        static all<T1, T2, T3, T4>(
            values: [Arg<T1>, Arg<T2>, Arg<T3>, Arg<T4>],
            label?: string,
        ): RSVP.Promise<[T1, T2, T3, T4]>;
        static all<T1, T2, T3>(values: [Arg<T1>, Arg<T2>, Arg<T3>], label?: string): RSVP.Promise<[T1, T2, T3]>;
        static all<T1, T2>(values: [Arg<T1>, Arg<T2>], label?: string): Promise<[T1, T2]>;
        static all<T>(values: (Arg<T>)[], label?: string): RSVP.Promise<T[]>;

        static race<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(
            values: [
                Arg<T1>,
                Arg<T2>,
                Arg<T3>,
                Arg<T4>,
                Arg<T5>,
                Arg<T6>,
                Arg<T7>,
                Arg<T8>,
                Arg<T9>,
                T10 | PromiseLike<T10>,
            ],
            label?: string,
        ): RSVP.Promise<T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8 | T9 | T10>;
        static race<T1, T2, T3, T4, T5, T6, T7, T8, T9>(
            values: [Arg<T1>, Arg<T2>, Arg<T3>, Arg<T4>, Arg<T5>, Arg<T6>, Arg<T7>, Arg<T8>, Arg<T9>],
            label?: string,
        ): RSVP.Promise<T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8 | T9>;
        static race<T1, T2, T3, T4, T5, T6, T7, T8>(
            values: [Arg<T1>, Arg<T2>, Arg<T3>, Arg<T4>, Arg<T5>, Arg<T6>, Arg<T7>, Arg<T8>],
            label?: string,
        ): RSVP.Promise<T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8>;
        static race<T1, T2, T3, T4, T5, T6, T7>(
            values: [Arg<T1>, Arg<T2>, Arg<T3>, Arg<T4>, Arg<T5>, Arg<T6>, Arg<T7>],
            label?: string,
        ): RSVP.Promise<T1 | T2 | T3 | T4 | T5 | T6 | T7>;
        static race<T1, T2, T3, T4, T5, T6>(
            values: [Arg<T1>, Arg<T2>, Arg<T3>, Arg<T4>, Arg<T5>, Arg<T6>],
            label?: string,
        ): RSVP.Promise<T1 | T2 | T3 | T4 | T5 | T6>;
        static race<T1, T2, T3, T4, T5>(
            values: [Arg<T1>, Arg<T2>, Arg<T3>, Arg<T4>, Arg<T5>],
            label?: string,
        ): RSVP.Promise<T1 | T2 | T3 | T4 | T5>;
        static race<T1, T2, T3, T4>(
            values: [Arg<T1>, Arg<T2>, Arg<T3>, Arg<T4>],
            label?: string,
        ): RSVP.Promise<T1 | T2 | T3 | T4>;
        static race<T1, T2, T3>(values: [Arg<T1>, Arg<T2>, Arg<T3>], label?: string): RSVP.Promise<T1 | T2 | T3>;
        static race<T1, T2>(values: [Arg<T1>, Arg<T2>], label?: string): RSVP.Promise<T1 | T2>;
        static race<T>(values: (Arg<T>)[], label?: string): RSVP.Promise<T>;

        static reject(reason?: any, label?: string): RSVP.Promise<never>;

        static resolve<T>(value?: Arg<T>, label?: string): RSVP.Promise<T>;
        static resolve(): RSVP.Promise<void>;

        /**
         * @deprecated
         */
        static cast: typeof RSVP.Promise.resolve;
    }

    const all: typeof Promise.all;
    const race: typeof Promise.race;
    const reject: typeof Promise.reject;
    const resolve: typeof Promise.resolve;
    function rethrow(reason: any): void;

    const cast: typeof Promise.cast;

    const on: typeof EventTarget.on;
    const off: typeof EventTarget.off;

    // ----- denodeify ----- //
    // Here be absurd things because we don't have variadic types. All of
    // this will go away if we can ever write this:
    //
    //     denodeify<...T, ...A>(
    //         nodeFunc: (...args: ...A, callback: (err: any, ...cbArgs: ...T) => any) => void,
    //         options?: false
    //     ): (...args: ...A) => RSVP.Promise<...T>
    //
    // That day, however, may never come. So, in the meantime, we do this.

    function denodeify<T1, T2, T3, A>(
        nodeFunc: (arg1: A, callback: (err: any, data1: T1, data2: T2, data3: T3) => void) => void,
        options?: false,
    ): (arg1: A) => RSVP.Promise<T1>;

    function denodeify<T1, T2, A>(
        nodeFunc: (arg1: A, callback: (err: any, data1: T1, data2: T2) => void) => void,
        options?: false,
    ): (arg1: A) => RSVP.Promise<T1>;

    function denodeify<T, A>(
        nodeFunc: (arg1: A, callback: (err: any, data: T) => void) => void,
        options?: false,
    ): (arg1: A) => RSVP.Promise<T>;

    function denodeify<T1, T2, T3, A>(
        nodeFunc: (arg1: A, callback: (err: any, data1: T1, data2: T2, data3: T3) => void) => void,
        options: true,
    ): (arg1: A) => RSVP.Promise<[T1, T2, T3]>;

    function denodeify<T1, T2, A>(
        nodeFunc: (arg1: A, callback: (err: any, data1: T1, data2: T2) => void) => void,
        options: true,
    ): (arg1: A) => RSVP.Promise<[T1, T2]>;

    function denodeify<T, A>(
        nodeFunc: (arg1: A, callback: (err: any, data: T) => void) => void,
        options: true,
    ): (arg1: A) => RSVP.Promise<[T]>;

    function denodeify<T1, T2, T3, A, K1 extends string, K2 extends string, K3 extends string>(
        nodeFunc: (arg1: A, callback: (err: any, data1: T1, data2: T2, data3: T3) => void) => void,
        options: [K1, K2, K3],
    ): (arg1: A) => RSVP.Promise<{ [K in K1]: T1 } & { [K in K2]: T2 } & { [K in K3]: T3 }>;

    function denodeify<T1, T2, A, K1 extends string, K2 extends string>(
        nodeFunc: (arg1: A, callback: (err: any, data1: T1, data2: T2) => void) => void,
        options: [K1, K2],
    ): (arg1: A) => RSVP.Promise<{ [K in K1]: T1 } & { [K in K2]: T2 }>;

    function denodeify<T, A, K1 extends string>(
        nodeFunc: (arg1: A, callback: (err: any, data: T) => void) => void,
        options: [K1],
    ): (arg1: A) => RSVP.Promise<{ [K in K1]: T }>;

    // ----- hash and hashSettled ----- //
    function hash<T>(object: { [P in keyof T]: Arg<T[P]> }, label?: string): RSVP.Promise<T>;
    function hashSettled<T>(
        object: { [P in keyof T]: Arg<T[P]> },
        label?: string,
    ): RSVP.Promise<{ [P in keyof T]: PromiseState<T[P]> }>;

    function allSettled<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(
        entries: [Arg<T1>, Arg<T2>, Arg<T3>, Arg<T4>, Arg<T5>, Arg<T6>, Arg<T7>, Arg<T8>, Arg<T9>, Arg<T10>],
        label?: string,
    ): RSVP.Promise<
        [
            PromiseState<T1>,
            PromiseState<T2>,
            PromiseState<T3>,
            PromiseState<T4>,
            PromiseState<T5>,
            PromiseState<T6>,
            PromiseState<T7>,
            PromiseState<T8>,
            PromiseState<T9>,
        ]
    >;
    function allSettled<T1, T2, T3, T4, T5, T6, T7, T8, T9>(
        entries: [Arg<T1>, Arg<T2>, Arg<T3>, Arg<T4>, Arg<T5>, Arg<T6>, Arg<T7>, Arg<T8>, Arg<T9>],
        label?: string,
    ): RSVP.Promise<
        [
            PromiseState<T1>,
            PromiseState<T2>,
            PromiseState<T3>,
            PromiseState<T4>,
            PromiseState<T5>,
            PromiseState<T6>,
            PromiseState<T7>,
            PromiseState<T8>,
            PromiseState<T9>,
        ]
    >;
    function allSettled<T1, T2, T3, T4, T5, T6, T7, T8>(
        entries: [Arg<T1>, Arg<T2>, Arg<T3>, Arg<T4>, Arg<T5>, Arg<T6>, Arg<T7>, Arg<T8>],
        label?: string,
    ): RSVP.Promise<
        [
            PromiseState<T1>,
            PromiseState<T2>,
            PromiseState<T3>,
            PromiseState<T4>,
            PromiseState<T5>,
            PromiseState<T6>,
            PromiseState<T7>,
            PromiseState<T8>,
        ]
    >;
    function allSettled<T1, T2, T3, T4, T5, T6, T7>(
        entries: [Arg<T1>, Arg<T2>, Arg<T3>, Arg<T4>, Arg<T5>, Arg<T6>, Arg<T7>],
        label?: string,
    ): RSVP.Promise<
        [
            PromiseState<T1>,
            PromiseState<T2>,
            PromiseState<T3>,
            PromiseState<T4>,
            PromiseState<T5>,
            PromiseState<T6>,
            PromiseState<T7>,
        ]
    >;
    function allSettled<T1, T2, T3, T4, T5, T6>(
        entries: [Arg<T1>, Arg<T2>, Arg<T3>, Arg<T4>, Arg<T5>, Arg<T6>],
        label?: string,
    ): RSVP.Promise<
        [PromiseState<T1>, PromiseState<T2>, PromiseState<T3>, PromiseState<T4>, PromiseState<T5>, PromiseState<T6>]
    >;
    function allSettled<T1, T2, T3, T4, T5>(
        entries: [Arg<T1>, Arg<T2>, Arg<T3>, Arg<T4>, Arg<T5>],
        label?: string,
    ): RSVP.Promise<[PromiseState<T1>, PromiseState<T2>, PromiseState<T3>, PromiseState<T4>, PromiseState<T5>]>;
    function allSettled<T1, T2, T3, T4>(
        entries: [Arg<T1>, Arg<T2>, Arg<T3>, Arg<T4>],
        label?: string,
    ): RSVP.Promise<[PromiseState<T1>, PromiseState<T2>, PromiseState<T3>, PromiseState<T4>]>;
    function allSettled<T1, T2, T3>(
        entries: [Arg<T1>, Arg<T2>, Arg<T3>],
        label?: string,
    ): RSVP.Promise<[PromiseState<T1>, PromiseState<T2>, PromiseState<T3>]>;
    function allSettled<T1, T2>(
        entries: [Arg<T1>, Arg<T2>],
        label?: string,
    ): RSVP.Promise<[PromiseState<T1>, PromiseState<T2>]>;
    function allSettled<T>(entries: Arg<T>[], label?: string): RSVP.Promise<[PromiseState<T>]>;

    function map<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, U>(
        entries: [Arg<T1>, Arg<T2>, Arg<T3>, Arg<T4>, Arg<T5>, Arg<T6>, Arg<T7>, Arg<T8>, Arg<T9>, Arg<T10>],
        mapFn: (item: T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8 | T9 | T10) => U,
        label?: string,
    ): RSVP.Promise<Array<U> & { length: 10 }>;

    function map<T1, T2, T3, T4, T5, T6, T7, T8, T9, U>(
        entries: [Arg<T1>, Arg<T2>, Arg<T3>, Arg<T4>, Arg<T5>, Arg<T6>, Arg<T7>, Arg<T8>, Arg<T9>],
        mapFn: (item: T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8 | T9) => U,
        label?: string,
    ): RSVP.Promise<Array<U> & { length: 9 }>;
    function map<T1, T2, T3, T4, T5, T6, T7, T8, U>(
        entries: [Arg<T1>, Arg<T2>, Arg<T3>, Arg<T4>, Arg<T5>, Arg<T6>, Arg<T7>, Arg<T8>],
        mapFn: (item: T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8) => U,
        label?: string,
    ): RSVP.Promise<Array<U> & { length: 8 }>;
    function map<T1, T2, T3, T4, T5, T6, T7, U>(
        entries: [Arg<T1>, Arg<T2>, Arg<T3>, Arg<T4>, Arg<T5>, Arg<T6>, Arg<T7>],
        mapFn: (item: T1 | T2 | T3 | T4 | T5 | T6 | T7) => U,
        label?: string,
    ): RSVP.Promise<Array<U> & { length: 7 }>;
    function map<T1, T2, T3, T4, T5, T6, U>(
        entries: [Arg<T1>, Arg<T2>, Arg<T3>, Arg<T4>, Arg<T5>, Arg<T6>],
        mapFn: (item: T1 | T2 | T3 | T4 | T5 | T6) => U,
        label?: string,
    ): RSVP.Promise<Array<U> & { length: 6 }>;
    function map<T1, T2, T3, T4, T5, U>(
        entries: [Arg<T1>, Arg<T2>, Arg<T3>, Arg<T4>, Arg<T5>],
        mapFn: (item: T1 | T2 | T3 | T4 | T5) => U,
        label?: string,
    ): RSVP.Promise<Array<U> & { length: 5 }>;
    function map<T1, T2, T3, T4, U>(
        entries: [Arg<T1>, Arg<T2>, Arg<T3>, Arg<T4>],
        mapFn: (item: T1 | T2 | T3 | T4) => U,
        label?: string,
    ): RSVP.Promise<Array<U> & { length: 4 }>;
    function map<T1, T2, T3, U>(
        entries: [Arg<T1>, Arg<T2>, Arg<T3>],
        mapFn: (item: T1 | T2 | T3) => U,
        label?: string,
    ): RSVP.Promise<Array<U> & { length: 3 }>;
    function map<T1, T2, U>(
        entries: [Arg<T1>, Arg<T2>],
        mapFn: (item: T1 | T2) => U,
        label?: string,
    ): RSVP.Promise<Array<U> & { length: 2 }>;
    function map<T, U>(
        entries: Arg<T>[],
        mapFn: (item: T) => U,
        label?: string,
    ): RSVP.Promise<Array<U> & { length: 1 }>;

    function filter<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(
        entries: [Arg<T1>, Arg<T2>, Arg<T3>, Arg<T4>, Arg<T5>, Arg<T6>, Arg<T7>, Arg<T8>, Arg<T9>, Arg<T10>],
        filterFn: (item: T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8 | T9 | T10) => boolean,
        label?: string,
    ): RSVP.Promise<Array<T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8 | T9 | T10>>;
    function filter<T1, T2, T3, T4, T5, T6, T7, T8, T9>(
        entries: [Arg<T1>, Arg<T2>, Arg<T3>, Arg<T4>, Arg<T5>, Arg<T6>, Arg<T7>, Arg<T8>, Arg<T9>],
        filterFn: (item: T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8 | T9) => boolean,
        label?: string,
    ): RSVP.Promise<Array<T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8 | T9>>;
    function filter<T1, T2, T3, T4, T5, T6, T7, T8>(
        entries: [Arg<T1>, Arg<T2>, Arg<T3>, Arg<T4>, Arg<T5>, Arg<T6>, Arg<T7>, Arg<T8>],
        filterFn: (item: T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8) => boolean,
        label?: string,
    ): RSVP.Promise<Array<T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8>>;
    function filter<T1, T2, T3, T4, T5, T6, T7>(
        entries: [Arg<T1>, Arg<T2>, Arg<T3>, Arg<T4>, Arg<T5>, Arg<T6>, Arg<T7>],
        filterFn: (item: T1 | T2 | T3 | T4 | T5 | T6 | T7) => boolean,
        label?: string,
    ): RSVP.Promise<Array<T1 | T2 | T3 | T4 | T5 | T6 | T7>>;
    function filter<T1, T2, T3, T4, T5, T6>(
        entries: [Arg<T1>, Arg<T2>, Arg<T3>, Arg<T4>, Arg<T5>, Arg<T6>],
        filterFn: (item: T1 | T2 | T3 | T4 | T5 | T6) => boolean,
        label?: string,
    ): RSVP.Promise<Array<T1 | T2 | T3 | T4 | T5 | T6> & { length: 6 }>;
    function filter<T1, T2, T3, T4, T5>(
        entries: [Arg<T1>, Arg<T2>, Arg<T3>, Arg<T4>, Arg<T5>],
        filterFn: (item: T1 | T2 | T3 | T4 | T5) => boolean,
        label?: string,
    ): RSVP.Promise<Array<T1 | T2 | T3 | T4 | T5>>;
    function filter<T1, T2, T3, T4>(
        entries: [Arg<T1>, Arg<T2>, Arg<T3>, Arg<T4>],
        filterFn: (item: T1 | T2 | T3 | T4) => boolean,
        label?: string,
    ): RSVP.Promise<Array<T1 | T2 | T3 | T4>>;
    function filter<T1, T2, T3>(
        entries: [Arg<T1>, Arg<T2>, Arg<T3>],
        filterFn: (item: T1 | T2 | T3) => boolean,
        label?: string,
    ): RSVP.Promise<Array<T1 | T2 | T3>>;
    function filter<T1, T2>(
        entries: [Arg<T1>, Arg<T2>],
        filterFn: (item: T1 | T2) => boolean,
        label?: string,
    ): RSVP.Promise<Array<T1 | T2>>;
    function filter<T>(entries: Arg<T>[], filterFn: (item: T) => boolean, label?: string): RSVP.Promise<Array<T>>;

    function defer<T>(label?: string): Deferred<T>;

    function configure<T>(name: string): T;
    function configure<T>(name: string, value: T): void;

    function asap<T, U>(callback: (callbackArg: T) => U, arg: T): void;

    const async: typeof asap;
}

export default RSVP;

export interface Promise<T> extends RSVP.Promise<T> {}
export const Promise: typeof RSVP.Promise;

export interface EventTarget extends RSVP.EventTarget {}
export const EventTarget: typeof RSVP.EventTarget;

export const asap: typeof RSVP.asap;
export const cast: typeof RSVP.cast;
export const all: typeof RSVP.all;
export const allSettled: typeof RSVP.allSettled;
export const race: typeof RSVP.race;
export const hash: typeof RSVP.hash;
export const hashSettled: typeof RSVP.hashSettled;
export const rethrow: typeof RSVP.rethrow;
export const defer: typeof RSVP.defer;
export const denodeify: typeof RSVP.denodeify;
export const configure: typeof RSVP.configure;
export const on: typeof RSVP.on;
export const off: typeof RSVP.off;
export const resolve: typeof RSVP.resolve;
export const reject: typeof RSVP.reject;
export const map: typeof RSVP.map;
export const async: typeof RSVP.async;
export const filter: typeof RSVP.filter;
