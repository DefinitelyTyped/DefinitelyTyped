// Type definitions for Benchmark 2.1
// Project: http://benchmarkjs.com
// Definitions by: Asana <https://asana.com>
//                 Ron Buckton <https://github.com/rbuckton>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

declare class Benchmark {
    /** A generic `Array#filter`-like method. */
    static filter<T>(arr: ArrayLike<T>, callback: (value: T, index: number, collection: ArrayLike<T>) => boolean): T[];

    /** A generic `Array#filter`-like method. */
    static filter(arr: ArrayLike<Benchmark>, filter: "successful" | "fastest" | "slowest"): Benchmark[];

    /** Converts a number to a more readable comma-separated string representation. */
    static formatNumber(num: number | string): string;

    /** Invokes a method on all items in an array. */
    static invoke(benches: ArrayLike<Benchmark>, name: keyof Benchmark, ...args: any[]): any[];

    /** Invokes a method on all items in an array. */
    static invoke(benches: ArrayLike<Benchmark>, options: Benchmark.InvokeOptions): any[];

    /** Creates a string of joined array values or object key-value pairs. */
    static join(obj: object, separator1?: string, separator2?: string): string;

    /** Create a new `Benchmark` class using the given context object (i.e. `global` or `window`) . */
    static runInContext(context?: Benchmark.Context): typeof Benchmark;

    static each<T>(values: ArrayLike<T>, callback?: (value: T, index: number, collection: ArrayLike<T>) => void): ArrayLike<T>;
    static forEach<T>(values: ArrayLike<T>, callback?: (value: T, index: number, collection: ArrayLike<T>) => void): ArrayLike<T>;
    static forOwn<T>(object: T, callback?: (value: T[keyof T], key: keyof T, object: T) => void): T;
    static has<T>(object: T, path: PropertyKey | PropertyKey[]): boolean;
    static indexOf<T>(arr: ArrayLike<T>, value: T, fromIndex?: number): number;
    static map<T, TResult>(values: ArrayLike<T>, callback?: (value: T, index: number, collection: ArrayLike<T>) => TResult): TResult[];
    static map<T, K extends keyof T>(values: ArrayLike<T>, property: K): T[K][];
    static map<T>(values: ArrayLike<T>, iteratee: Partial<T>): boolean[];
    static reduce<T, TResult>(values: ArrayLike<T>, callback: (prev: TResult, current: TResult, index: number, collection: ArrayLike<T>) => TResult, accumulator: TResult): TResult;
    static reduce<T>(values: ArrayLike<T>, callback: (prev: T, current: T, index: number, collection: ArrayLike<T>) => T): T;

    /** The default options copied by benchmark instances. */
    static options: Benchmark.BenchmarkOptions;

    /** Platform object with properties describing things like browser name, version, and operating system. See platform.js. */
    static platform: Benchmark.Platform;

    /** An object used to flag environments/features. */
    static support: Benchmark.Support;

    /** The semantic version number. */
    static version: string;

    constructor(name: string, fn: Function | string, options?: Benchmark.BenchmarkOptions);
    constructor(name: string, options?: Benchmark.BenchmarkOptions);
    constructor(fn: Function, options?: Benchmark.BenchmarkOptions);
    constructor(options: Benchmark.BenchmarkOptions);

    /** Unique id for the benchmark instance. */
    id: number;

    /** The name of the benchmark. */
    name?: string;

    /** A flag to indicate if the benchmark is aborted. */
    aborted: boolean;

    /** The compiled test function. */
    compiled: Function | undefined;

    /** The number of times a test was executed. */
    count: number;

    /** The number of cycles performed while benchmarking. */
    cycles: number;

    /** The error object if the test failed. */
    error: Error | undefined;

    /** The test to benchmark. */
    fn: Function | string | undefined;

    /** The number of executions per second. */
    hz: number;

    /** A flag to indicate if the benchmark is running. */
    running: boolean;

    /** Compiled into the test and executed immediately before the test loop. */
    setup: Function | string;

    /** Compiled into the test and executed immediately after the test loop. */
    teardown: Function | string;

    /** Options used to create the benchmark. */
    options: Benchmark.BenchmarkOptions;

    /** An object of stats including mean, margin or error, and standard deviation. */
    stats: Benchmark.Stats;

    /** An object of timing data including cycle, elapsed, period, start, and stop. */
    times: Benchmark.Times;

    /** Aborts the benchmark without recording times. */
    abort(): this;

    /** Creates a new benchmark using the same test and options. */
    clone(options?: Benchmark.BenchmarkOptions): this;

    /** Determines if a benchmark is faster than another. */
    compare(benchmark: Benchmark): number;

    /** Executes all registered listeners of the specified event type. */
    emit(type: string | Benchmark.Event, ...args: any[]): any;

    /** Returns an array of event listeners for a given type that can be manipulated to add or remove listeners. */
    listeners(type: string): Array<(this: Benchmark, event: Benchmark.Event, ...args: any[]) => void>;

    /** Unregisters a listener for the specified event type(s), or unregisters all listeners for the specified event type(s), or unregisters all listeners for all event types. */
    off(type?: string, listener?: (this: Benchmark, event: Benchmark.Event) => void): this;

    /** Registers a listener for the specified event type(s). */
    on(type: "complete", listener: (this: Benchmark, event: Benchmark.Event) => void): this;

    /** Registers a listener for the specified event type(s). */
    on(type: "abort", listener: (this: Benchmark, event: Benchmark.Event) => void): this;

    /** Registers a listener for the specified event type(s). */
    on(type: "start", listener: (this: Benchmark, event: Benchmark.Event) => void): this;

    /** Registers a listener for the specified event type(s). */
    on(type: "reset", listener: (this: Benchmark, event: Benchmark.Event) => void): this;

    /** Registers a listener for the specified event type(s). */
    on(type: "cycle", listener: (this: Benchmark, event: Benchmark.Event) => void): this;

    /** Registers a listener for the specified event type(s). */
    on(type: "error", listener: (this: Benchmark, event: Benchmark.Event) => void): this;

    /** Registers a listener for the specified event type(s). */
    on(type: string, listener: (this: Benchmark, event: Benchmark.Event) => void): this;

    /** Reset properties and abort if running. */
    reset(): this;

    /** Runs the benchmark. */
    run(options?: Benchmark.BenchmarkRunOptions): this;

    /** Displays relevant benchmark information when coerced to a string. */
    toString(): string;
}

import LocalBenchmark = Benchmark;

declare namespace Benchmark {
    export import Benchmark = LocalBenchmark;

    export interface Context {
        Array: typeof Array,
        Date: typeof Date,
        Function: typeof Function,
        Math: typeof Math,
        Object: typeof Object,
        RegExp: typeof RegExp,
        String: typeof String,
    }

    export interface InvokeOptions {
        /** The method to invoke */
        name: keyof Benchmark;

        /** Either an array of arguments, or a single argument value. */
        args?: any;

        /** Treats the input array as a queue, removing benchmarks from the front of the input array until empty. */
        queued?: boolean;

        /** Called before any benchmarks have been invoked. */
        onStart?: (this: Benchmark, event: Event) => void;

        /** Called between invoking benchmarks. */
        onCycle?: (this: Benchmark, event: Event) => void;

        /** Called after all benchmarks have been invoked. */
        onComplete?: (this: Benchmark, event: Event) => void;
    }

    export interface BenchmarkOptions {
        /** A flag to indicate that the benchmark clock is deferred. */
        defer?: boolean;

        /** The delay between cycles (secs). */
        delay?: number;

        /** Displayed by `Benchmark#toString` if name` is not available (auto-generated if absent). */
        id?: string;

        /** The default number of times to execute a test on a benchmark's first cycle. */
        initCount?: number;

        /** The maximum time a benchmark is allowed to run before finishing (secs). */
        maxTime?: number;

        /** The minimum sample size required to perform statistical analysis. */
        minSamples?: number;

        /** The time needed to reduce the percent of uncertainty of measurement to 1% (secs). */
        minTime?: number;

        /** The name of the benchmark. */
        name?: string;

        /** An event listener called when the benchmark is aborted. */
        onAbort?: (this: Benchmark, event: Event) => void;

        /** An event listener called when the benchmark completes running.*/
        onComplete?: (this: Benchmark, event: Event) => void;

        /** An event listener called after each run cycle. */
        onCycle?: (this: Benchmark, event: Event) => void;

        /** An event listener called when a test errors.*/
        onError?: (this: Benchmark, event: Event) => void;

        /** An event listener called when the benchmark is reset.*/
        onReset?: (this: Benchmark, event: Event) => void;

        /** An event listener called when the benchmark starts running.*/
        onStart?: (this: Benchmark, event: Event) => void;

        /** Setup code compiled into the test loop. */
        setup?: Function | string;

        /** Teardown code compiled into the test loop. */
        teardown?: Function | string;

        /** Benchmark test function. */
        fn?: Function | string;
    }

    export interface BenchmarkRunOptions extends BenchmarkOptions {
        /** A flag to indicate that benchmark cycles will execute asynchronously by default. */
        async?: boolean;
    }

    export interface SuiteRunOptions extends BenchmarkRunOptions {
        /** Treats the suite as a queue, removing benchmarks from the front of the suite until empty. */
        queued?: boolean;
    }

    export interface SuiteOptions {
        /** The name of the suite. */
        name?: string;

        /** An event listener called when a benchmark is aborted. */
        onAbort?: (this: Suite, event: Event) => void;

        /** An event listener called when a benchmark is added. */
        onAdd?: (this: Suite, event: Event) => void;

        /** An event listener called when a benchmark completes running.*/
        onComplete?: (this: Suite, event: Event) => void;

        /** An event listener called after each run cycle. */
        onCycle?: (this: Suite, event: Event) => void;

        /** An event listener called when a test errors.*/
        onError?: (this: Suite, event: Event) => void;

        /** An event listener called when the suite is reset.*/
        onReset?: (this: Suite, event: Event) => void;

        /** An event listener called when a benchmark starts running.*/
        onStart?: (this: Suite, event: Event) => void;
    }

    export interface Platform {
        description: string;
        layout: string;
        manufacturer: string;
        name: string;
        os: string;
        prerelease: string;
        product: string;
        version: string;
        toString(): string;
    }

    export interface Support {
        air: boolean;
        argumentsClass: boolean;
        browser: boolean;
        charByIndex: boolean;
        charByOwnIndex: boolean;
        decompilation: boolean;
        descriptors: boolean;
        getAllKeys: boolean;
        iteratesOwnFirst: boolean;
        java: boolean;
        nodeClass: boolean;
        timeout: boolean;
    }

    export interface Stats {
        /** The sample standard deviation. */
        deviation: number;

        /** The sample arithmetic mean (secs). */
        mean: number;

        /** The margin of error. */
        moe: number;

        /** The relative margin of error (expressed as a percentage of the mean). */
        rme: number;

        /** The array of sampled periods. */
        sample: any[];

        /** The standard error of the mean. */
        sem: number;

        /** The sample variance. */
        variance: number;
    }

    export interface Times {
        /** The time taken to complete the last cycle (secs). */
        cycle: number;

        /** The time taken to complete the benchmark (secs). */
        elapsed: number;

        /** The time taken to execute the test once (secs). */
        period: number;

        /** A timestamp of when the benchmark started (ms). */
        timeStamp: number;
    }

    export class Deferred {
        constructor(clone: Benchmark);

        /** The deferred benchmark instance. */
        benchmark: Benchmark;

        /** The number of deferred cycles performed while benchmarking. */
        cycles: number;

        /** The time taken to complete the deferred benchmark (secs). */
        elapsed: number;

        /** A timestamp of when the deferred benchmark started (ms). */
        timeStamp: number;
    }

    export class Event {
        constructor(type: string | Partial<Event>);

        /** A flag to indicate if the emitters listener iteration is aborted. */
        aborted: boolean;

        /** A flag to indicate if the default action is cancelled. */
        cancelled: boolean;

        /** The object whose listeners are currently being processed. */
        currentTarget: object;

        /** The return value of the last executed listener. */
        result: any;

        /** The object to which the event was originally emitted. */
        target: object;

        /** A timestamp of when the event was created (ms). */
        timeStamp: number;

        /** The event type. */
        type: string;
    }

    export class Suite {
        /** The default options copied by suite instances. */
        static options: SuiteOptions;

        constructor(name?: string, options?: BenchmarkOptions);

        [index: number]: Benchmark;

        /** The name of the suite. */
        name?: string;

        /** A flag to indicate if the suite is aborted. */
        aborted: boolean;

        /** The number of benchmarks in the suite. */
        length: number;

        /** A flag to indicate if the suite is running. */
        running: boolean;

        /** Aborts all benchmarks in the suite. */
        abort(): this;

        /** Adds a test to the benchmark suite. */
        add(name: string, fn: Function | string, options?: BenchmarkOptions): this;

        /** Adds a test to the benchmark suite. */
        add(name: string, options?: BenchmarkOptions): this;

        /** Adds a test to the benchmark suite. */
        add(fn: Function, options?: BenchmarkOptions): this;

        /** Adds a test to the benchmark suite. */
        add(options: BenchmarkOptions): this;

        /** Creates a new suite with cloned benchmarks. */
        clone(options?: SuiteOptions): this;

        /** Executes all registered listeners of the specified event type. */
        emit(type: string | Event): any;

        /** An `Array#filter`-like method. */
        filter(callback: (value: Benchmark, index: number, collection: this) => boolean): Suite;

        /** An `Array#filter`-like method. */
        filter(filter: "successful" | "fastest" | "slowest"): Suite;

        /** Returns an array of event listeners for a given type that can be manipulated to add or remove listeners. */
        listeners(type: string): Array<(this: Suite, event: Event, ...args: any[]) => void>;

        /** Unregisters a listener for the specified event type(s), or unregisters all listeners for the specified event type(s), or unregisters all listeners for all event types. */
        off(type?: string, callback?: (this: Suite, event: Event) => void): this;

        /** Registers a listener for the specified event type(s). */
        on(type: "abort", listener: (this: Suite, event: Event) => void): this;

        /** Registers a listener for the specified event type(s). */
        on(type: "add", listener: (this: Suite, event: Event) => void): this;

        /** Registers a listener for the specified event type(s). */
        on(type: "reset", listener: (this: Suite, event: Event) => void): this;

        /** Registers a listener for the specified event type(s). */
        on(type: "error", listener: (this: Suite, event: Event) => void): this;

        /** Registers a listener for the specified event type(s). */
        on(type: "start", listener: (this: Suite, event: Event) => void): this;

        /** Registers a listener for the specified event type(s). */
        on(type: "cycle", listener: (this: Suite, event: Event) => void): this;

        /** Registers a listener for the specified event type(s). */
        on(type: "complete", listener: (this: Suite, event: Event) => void): this;

        /** Registers a listener for the specified event type(s). */
        on(type: string, listener: (this: Suite, event: Event) => void): this;

        /** Resets all benchmarks in the suite. */
        reset(): this;

        /** Runs the suite. */
        run(options?: SuiteRunOptions): this;

        each(callback?: (value: Benchmark, index: number, collection: this) => void): this;
        forEach(callback?: (value: Benchmark, index: number, collection: this) => void): this;
        indexOf(value: Benchmark, fromIndex?: boolean | number): number;
        join(separator?: string): string;
        map<T = Benchmark>(callback?: (value: Benchmark, index: number, collection: this) => T): T[];
        map<K extends keyof Benchmark>(property: K): Benchmark[K][];
        map(iteratee: Partial<Benchmark>): boolean[];
        pop(): Benchmark | undefined;
        push(...items: Benchmark[]): number;
        reduce<T>(callback: (prev: T, current: T, index: number, collection: this) => T, accumulator: T): T;
        reverse(): Benchmark[];
        shift(): Benchmark | undefined;
        slice(start?: number, end?: number): Benchmark[];
        sort(compareFn?: (a: Benchmark, b: Benchmark) => number): this;
        splice(start: number, deleteCount?: number): Benchmark[];
        splice(start: number, deleteCount: number, ...items: Benchmark[]): Benchmark[];
        unshift(...items: Benchmark[]): number;
    }
}

export = Benchmark;
