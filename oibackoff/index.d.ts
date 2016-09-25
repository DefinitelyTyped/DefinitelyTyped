// Type definitions for oibackoff v1.0
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
    <A,B>(fn: (callback: (a: A, b?: B) => any) => any, intermediate: BackoffIntermediate<A>, callback: (a: A, b: (B | null), priorErrors?: A[]) => void): void;
    <A,B>(fn: (callback: (a: A, b?: B) => any) => any, callback: (a: A, b: (B | null), priorErrors?: A[]) => void): void;
    <A,B>(fn: (data0: any, callback: (a: A, b?: B) => any) => any, intermediate: BackoffIntermediate<A>, callback: (a: A, b: (B | null), priorErrors?: A[]) => void): void;
    <A,B>(fn: (data0: any, callback: (a: A, b?: B) => any) => any, callback: (a: A, b: (B | null), priorErrors?: A[]) => void): void;
    <A,B>(fn: (callback: (a: A, b?: B) => any) => any, data0: any, intermediate: BackoffIntermediate<A>, callback: (a: A, b: (B | null), priorErrors?: A[]) => void): void;
    <A,B>(fn: (callback: (a: A, b?: B) => any) => any, data0: any, callback: (a: A, b: (B | null), priorErrors?: A[]) => void): void;
    <A,B>(fn: (data0: any, callback: (a: A, b?: B) => any) => any, data0: any, intermediate: BackoffIntermediate<A>, callback: (a: A, b: (B | null), priorErrors?: A[]) => void): void;
    <A,B>(fn: (data0: any, callback: (a: A, b?: B) => any) => any, data0: any, callback: (a: A, b: (B | null), priorErrors?: A[]) => void): void;
    <A,B>(fn: (callback: (a: A, b?: B) => any) => any, data0: any, data1: any, intermediate: BackoffIntermediate<A>, callback: (a: A, b: (B | null), priorErrors?: A[]) => void): void;
    <A,B>(fn: (callback: (a: A, b?: B) => any) => any, data0: any, data1: any, callback: (a: A, b: (B | null), priorErrors?: A[]) => void): void;
    <A,B>(fn: (data0: any, callback: (a: A, b?: B) => any) => any, data0: any, data1: any, intermediate: BackoffIntermediate<A>, callback: (a: A, b: (B | null), priorErrors?: A[]) => void): void;
    <A,B>(fn: (data0: any, callback: (a: A, b?: B) => any) => any, data0: any, data1: any, callback: (a: A, b: (B | null), priorErrors?: A[]) => void): void;
    <A,B>(fn: (callback: (a: A, b?: B) => any) => any, data0: any, data1: any, data2: any, intermediate: BackoffIntermediate<A>, callback: (a: A, b: (B | null), priorErrors?: A[]) => void): void;
    <A,B>(fn: (callback: (a: A, b?: B) => any) => any, data0: any, data1: any, data2: any, callback: (a: A, b: (B | null), priorErrors?: A[]) => void): void;
    <A,B>(fn: (data0: any, callback: (a: A, b?: B) => any) => any, data0: any, data1: any, data2: any, intermediate: BackoffIntermediate<A>, callback: (a: A, b: (B | null), priorErrors?: A[]) => void): void;
    <A,B>(fn: (data0: any, callback: (a: A, b?: B) => any) => any, data0: any, data1: any, data2: any, callback: (a: A, b: (B | null), priorErrors?: A[]) => void): void;
    <A,B>(fn: (callback: (a: A, b?: B) => any) => any, data0: any, data1: any, data2: any, data3: any, intermediate: BackoffIntermediate<A>, callback: (a: A, b: (B | null), priorErrors?: A[]) => void): void;
    <A,B>(fn: (callback: (a: A, b?: B) => any) => any, data0: any, data1: any, data2: any, data3: any, callback: (a: A, b: (B | null), priorErrors?: A[]) => void): void;
    <A,B>(fn: (data0: any, callback: (a: A, b?: B) => any) => any, data0: any, data1: any, data2: any, data3: any, intermediate: BackoffIntermediate<A>, callback: (a: A, b: (B | null), priorErrors?: A[]) => void): void;
    <A,B>(fn: (data0: any, callback: (a: A, b?: B) => any) => any, data0: any, data1: any, data2: any, data3: any, callback: (a: A, b: (B | null), priorErrors?: A[]) => void): void;
    <A,B>(fn: (callback: (a: A, b?: B) => any) => any, data0: any, data1: any, data2: any, data3: any, data4: any, intermediate: BackoffIntermediate<A>, callback: (a: A, b: (B | null), priorErrors?: A[]) => void): void;
    <A,B>(fn: (callback: (a: A, b?: B) => any) => any, data0: any, data1: any, data2: any, data3: any, data4: any, callback: (a: A, b: (B | null), priorErrors?: A[]) => void): void;
    <A,B>(fn: (data0: any, callback: (a: A, b?: B) => any) => any, data0: any, data1: any, data2: any, data3: any, data4: any, intermediate: BackoffIntermediate<A>, callback: (a: A, b: (B | null), priorErrors?: A[]) => void): void;
    <A,B>(fn: (data0: any, callback: (a: A, b?: B) => any) => any, data0: any, data1: any, data2: any, data3: any, data4: any, callback: (a: A, b: (B | null), priorErrors?: A[]) => void): void;
    <A,B>(fn: (callback: (a: A, b?: B) => any) => any, data0: any, data1: any, data2: any, data3: any, data4: any, data5: any, intermediate: BackoffIntermediate<A>, callback: (a: A, b: (B | null), priorErrors?: A[]) => void): void;
    <A,B>(fn: (callback: (a: A, b?: B) => any) => any, data0: any, data1: any, data2: any, data3: any, data4: any, data5: any, callback: (a: A, b: (B | null), priorErrors?: A[]) => void): void;
    <A,B>(fn: (data0: any, callback: (a: A, b?: B) => any) => any, data0: any, data1: any, data2: any, data3: any, data4: any, data5: any, intermediate: BackoffIntermediate<A>, callback: (a: A, b: (B | null), priorErrors?: A[]) => void): void;
    <A,B>(fn: (data0: any, callback: (a: A, b?: B) => any) => any, data0: any, data1: any, data2: any, data3: any, data4: any, data5: any, callback: (a: A, b: (B | null), priorErrors?: A[]) => void): void;
    <A,B>(fn: (callback: (a: A, b?: B) => any) => any, data0: any, data1: any, data2: any, data3: any, data4: any, data5: any, data6: any, intermediate: BackoffIntermediate<A>, callback: (a: A, b: (B | null), priorErrors?: A[]) => void): void;
    <A,B>(fn: (callback: (a: A, b?: B) => any) => any, data0: any, data1: any, data2: any, data3: any, data4: any, data5: any, data6: any, callback: (a: A, b: (B | null), priorErrors?: A[]) => void): void;
    <A,B>(fn: (data0: any, callback: (a: A, b?: B) => any) => any, data0: any, data1: any, data2: any, data3: any, data4: any, data5: any, data6: any, intermediate: BackoffIntermediate<A>, callback: (a: A, b: (B | null), priorErrors?: A[]) => void): void;
    <A,B>(fn: (data0: any, callback: (a: A, b?: B) => any) => any, data0: any, data1: any, data2: any, data3: any, data4: any, data5: any, data6: any, callback: (a: A, b: (B | null), priorErrors?: A[]) => void): void;
    <A,B>(fn: (callback: (a: A, b?: B) => any) => any, data0: any, data1: any, data2: any, data3: any, data4: any, data5: any, data6: any, data7: any, intermediate: BackoffIntermediate<A>, callback: (a: A, b: (B | null), priorErrors?: A[]) => void): void;
    <A,B>(fn: (callback: (a: A, b?: B) => any) => any, data0: any, data1: any, data2: any, data3: any, data4: any, data5: any, data6: any, data7: any, callback: (a: A, b: (B | null), priorErrors?: A[]) => void): void;
    <A,B>(fn: (data0: any, callback: (a: A, b?: B) => any) => any, data0: any, data1: any, data2: any, data3: any, data4: any, data5: any, data6: any, data7: any, intermediate: BackoffIntermediate<A>, callback: (a: A, b: (B | null), priorErrors?: A[]) => void): void;
    <A,B>(fn: (data0: any, callback: (a: A, b?: B) => any) => any, data0: any, data1: any, data2: any, data3: any, data4: any, data5: any, data6: any, data7: any, callback: (a: A, b: (B | null), priorErrors?: A[]) => void): void;
    <A,B>(fn: (callback: (a: A, b?: B) => any) => any, data0: any, data1: any, data2: any, data3: any, data4: any, data5: any, data6: any, data7: any, data8: any, intermediate: BackoffIntermediate<A>, callback: (a: A, b: (B | null), priorErrors?: A[]) => void): void;
    <A,B>(fn: (callback: (a: A, b?: B) => any) => any, data0: any, data1: any, data2: any, data3: any, data4: any, data5: any, data6: any, data7: any, data8: any, callback: (a: A, b: (B | null), priorErrors?: A[]) => void): void;
    <A,B>(fn: (data0: any, callback: (a: A, b?: B) => any) => any, data0: any, data1: any, data2: any, data3: any, data4: any, data5: any, data6: any, data7: any, data8: any, intermediate: BackoffIntermediate<A>, callback: (a: A, b: (B | null), priorErrors?: A[]) => void): void;
    <A,B>(fn: (data0: any, callback: (a: A, b?: B) => any) => any, data0: any, data1: any, data2: any, data3: any, data4: any, data5: any, data6: any, data7: any, data8: any, callback: (a: A, b: (B | null), priorErrors?: A[]) => void): void;
}


export declare interface BackoffIntermediate<A> {
    (err: A, tries: number, delay: number): boolean;
}

export declare function incremental(n: number): number;
export declare function exponential(n: number): number;
export declare function fibonacci(n: number): number;
