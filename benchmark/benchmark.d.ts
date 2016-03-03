// Type definitions for Benchmark v1.0.0
// Project: http://benchmarkjs.com
// Definitions by: Asana <https://asana.com>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module "benchmark" {
    class Benchmark {
        static deepClone<T>(value: T): T;
        static each(obj: Object | any[], callback: Function, thisArg?: any): void;
        static extend(destination: Object, ...sources: Object[]): Object;
        static filter<T>(arr: T[], callback: (value: T) => any, thisArg?: any): T[];
        static filter<T>(arr: T[], filter: string, thisArg?: any): T[];
        static forEach<T>(arr: T[], callback: (value: T) => any, thisArg?: any): void;
        static formatNumber(num: number): string;
        static forOwn(obj: Object, callback: Function, thisArg?: any): void;
        static hasKey(obj: Object, key: string): boolean;
        static indexOf<T>(arr: T[], value: T, fromIndex?: number): number;
        static interpolate(template: string, values: Object): string;
        static invoke(benches: Benchmark[], name: string | Object, ...args: any[]): any[];
        static join(obj: Object, separator1?: string, separator2?: string): string;
        static map<T, K>(arr: T[], callback: (value: T) => K, thisArg?: any): K[];
        static pluck<T, K>(arr: T[], key: string): K[];
        static reduce<T, K>(arr: T[], callback: (accumulator: K, value: T) => K, thisArg?: any): K;

        static options: Benchmark.Options;
        static platform: Benchmark.Platform;
        static support: Benchmark.Support;
        static version: string;

        constructor(fn: Function | string, options?: Benchmark.Options);
        constructor(name: string, fn: Function | string, options?: Benchmark.Options);
        constructor(name: string, options?: Benchmark.Options);
        constructor(options: Benchmark.Options);

        aborted: boolean;
        compiled: Function | string;
        count: number;
        cycles: number;
        error: Error;
        fn: Function | string;
        hz: number;
        running: boolean;
        setup: Function | string;
        teardown: Function | string;

        stats: Benchmark.Stats;
        times: Benchmark.Times;

        abort(): Benchmark;
        clone(options: Benchmark.Options): Benchmark;
        compare(benchmark: Benchmark): number;
        emit(type: string | Object): any;
        listeners(type: string): Function[];
        off(type?: string, listener?: Function): Benchmark;
        off(types: string[]): Benchmark;
        on(type?: string, listener?: Function): Benchmark;
        on(types: string[]): Benchmark;
        reset(): Benchmark;
        run(options?: Benchmark.Options): Benchmark;
        toString(): string;
    }

    module Benchmark {
        export interface Options {
            async?: boolean;
            defer?: boolean;
            delay?: number;
            id?: string;
            initCount?: number;
            maxTime?: number;
            minSamples?: number;
            minTime?: number;
            name?: string;
            onAbort?: Function;
            onComplete?: Function;
            onCycle?: Function;
            onError?: Function;
            onReset?: Function;
            onStart?: Function;
            setup?: Function | string;
            teardown?: Function | string;
            fn?: Function | string;
            queued?: boolean;
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
            deviation: number;
            mean: number;
            moe: number;
            rme: number;
            sample: any[];
            sem: number;
            variance: number;
        }

        export interface Times {
            cycle: number;
            elapsed: number;
            period: number;
            timeStamp: number;
        }

        export class Deferred {
            constructor(clone: Benchmark);

            benchmark: Benchmark;
            cycles: number;
            elapsed: number;
            timeStamp: number;
        }

        export class Event {
            constructor(type: string | Object);

            aborted: boolean;
            cancelled: boolean;
            currentTarget: Object;
            result: any;
            target: Object;
            timeStamp: number;
            type: string;
        }

        export class Suite {
            static options: { name: string };

            constructor(name?: string, options?: Options);

            aborted: boolean;
            length: number;
            running: boolean;
            abort(): Suite;
            add(name: string, fn: Function | string, options?: Options): Suite;
            add(fn: Function | string, options?: Options): Suite;
            add(name: string, options?: Options): Suite;
            add(options: Options): Suite;
            clone(options: Options): Suite;
            emit(type: string | Object): any;
            filter(callback: Function | string): Suite;
            forEach(callback: Function): Suite;
            indexOf(value: any): number;
            invoke(name: string, ...args: any[]): any[];
            join(separator?: string): string;
            listeners(type: string): Function[];
            map(callback: Function): any[];
            off(type?: string, callback?: Function): Benchmark;
            off(types: string[]): Benchmark;
            on(type?: string, callback?: Function): Benchmark;
            on(types: string[]): Benchmark;
            pluck(property: string): any[];
            pop(): Function;
            push(benchmark: Benchmark): number;
            reduce<T>(callback: Function, accumulator: T): T;
            reset(): Suite;
            reverse(): any[];
            run(options?: Options): Suite;
            shift(): Benchmark;
            slice(start: number, end: number): any[];
            slice(start: number, deleteCount: number, ...values: any[]): any[];
            unshift(benchmark: Benchmark): number;
        }
    }

    export = Benchmark;
}
