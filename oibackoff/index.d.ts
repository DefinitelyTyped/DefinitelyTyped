// Type definitions for oibackoff
// Project: https://github.com/chilts/oibackoff
// Definitions by: Joshua DeVinney <https://github.com/geoffreak>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export declare function backoff(opts: BackoffOptions): BackoffInstance;

export declare interface BackoffOptions {
    maxTries?: number;
    algorithm?: 'incremental' | 'exponential' | 'fibonacci';
    delayRatio?: number;
    maxDelay?: number;
}

export declare interface BackoffInstance {
    (fn: Function, callback: Function): void;
    (fn: Function, intermediate: BackoffIntermediate | Function, callback: Function): void;
    (fn: Function, data0: any, callback: Function): void;
    (fn: Function, data0: any, intermediate: BackoffIntermediate | Function, callback: Function): void;
    (fn: Function, data0: any, data1: any, callback: Function): void;
    (fn: Function, data0: any, data1: any, intermediate: BackoffIntermediate | Function, callback: Function): void;
    (fn: Function, data0: any, data1: any, data2: any, callback: Function): void;
    (fn: Function, data0: any, data1: any, data2: any, intermediate: BackoffIntermediate | Function, callback: Function): void;
    (fn: Function, data0: any, data1: any, data2: any, data3: any, callback: Function): void;
    (fn: Function, data0: any, data1: any, data2: any, data3: any, intermediate: BackoffIntermediate | Function, callback: Function): void;
    (fn: Function, data0: any, data1: any, data2: any, data3: any, data4: any, callback: Function): void;
    (fn: Function, data0: any, data1: any, data2: any, data3: any, data4: any, intermediate: BackoffIntermediate | Function, callback: Function): void;
    (fn: Function, data0: any, data1: any, data2: any, data3: any, data4: any, data5: any, callback: Function): void;
    (fn: Function, data0: any, data1: any, data2: any, data3: any, data4: any, data5: any, intermediate: BackoffIntermediate | Function, callback: Function): void;
    (fn: Function, data0: any, data1: any, data2: any, data3: any, data4: any, data5: any, data6: any, callback: Function): void;
    (fn: Function, data0: any, data1: any, data2: any, data3: any, data4: any, data5: any, data6: any, intermediate: BackoffIntermediate | Function, callback: Function): void;
    (fn: Function, data0: any, data1: any, data2: any, data3: any, data4: any, data5: any, data6: any, data7: any, callback: Function): void;
    (fn: Function, data0: any, data1: any, data2: any, data3: any, data4: any, data5: any, data6: any, data7: any, intermediate: BackoffIntermediate | Function, callback: Function): void;
    (fn: Function, data0: any, data1: any, data2: any, data3: any, data4: any, data5: any, data6: any, data7: any, data8: any, callback: Function): void;
    (fn: Function, data0: any, data1: any, data2: any, data3: any, data4: any, data5: any, data6: any, data7: any, data8: any, intermediate: BackoffIntermediate | Function, callback: Function): void;
    (fn: Function, data0: any, data1: any, data2: any, data3: any, data4: any, data5: any, data6: any, data7: any, data8: any, data9: any, callback: Function): void;
    (fn: Function, data0: any, data1: any, data2: any, data3: any, data4: any, data5: any, data6: any, data7: any, data8: any, data9: any, intermediate: BackoffIntermediate | Function, callback: Function): void;
}

export declare interface BackoffIntermediate {
    (err: any, tries: number, delay: number): boolean;
}

export declare function incremental(n: number): number;
export declare function exponential(n: number): number;
export declare function fibonacci(n: number): number;
