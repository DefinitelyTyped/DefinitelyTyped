// Type definitions for p-throttle 1.1
// Project: https://github.com/sindresorhus/p-throttle#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = pThrottle;

declare function pThrottle<R>(fn: () => PromiseLike<R> | R, limit: number, interval: number): (() => Promise<R>) & { abort(): void; };
declare function pThrottle<R, T1>(fn: (arg1: T1) => PromiseLike<R> | R, limit: number, interval: number): ((arg1: T1) => Promise<R>) & { abort(): void; };
declare function pThrottle<R, T1, T2>(fn: (arg1: T1, arg2: T2) => PromiseLike<R> | R, limit: number, interval: number): ((arg1: T1, arg2: T2) => Promise<R>) & { abort(): void; };
declare function pThrottle<R, T1, T2, T3>(fn: (arg1: T1, arg2: T2, arg3: T3) => PromiseLike<R> | R,
                                          limit: number,
                                          interval: number): ((arg1: T1, arg2: T2, arg3: T3) => Promise<R>) & { abort(): void; };
declare function pThrottle<R, T1, T2, T3, T4>(fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4) => PromiseLike<R> | R,
                                              limit: number,
                                              interval: number): ((arg1: T1, arg2: T2, arg3: T3, arg4: T4) => Promise<R>) & { abort(): void; };
declare function pThrottle<R, T1, T2, T3, T4, T5>(fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5) => PromiseLike<R> | R,
                                                  limit: number,
                                                  interval: number): ((arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5) => Promise<R>) & { abort(): void; };
declare function pThrottle<R, T1, T2, T3, T4, T5, T6>(fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6) => PromiseLike<R> | R,
                                                      limit: number,
                                                      interval: number): ((arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6) => Promise<R>) & { abort(): void; };
declare function pThrottle<R, T1, T2, T3, T4, T5, T6, T7>(
    fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7) => PromiseLike<R> | R,
    limit: number,
    interval: number): ((arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7) => Promise<R>) & { abort(): void; };
declare function pThrottle<R, T1, T2, T3, T4, T5, T6, T7, T8>(
    fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8) => PromiseLike<R> | R,
    limit: number,
    interval: number): ((arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8) => Promise<R>) & { abort(): void; };
declare function pThrottle<R, T1, T2, T3, T4, T5, T6, T7, T8, T9>(
    fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8, arg9: T9) => PromiseLike<R> | R,
    limit: number,
    interval: number): ((arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8, arg9: T9) => Promise<R>) & { abort(): void; };
declare function pThrottle<R, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(
    fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8, arg9: T9, arg10: T10) => PromiseLike<R> | R,
    limit: number,
    interval: number): ((arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8, arg9: T9, arg10: T10) => Promise<R>) & { abort(): void; };
declare function pThrottle<R>(fn: (...args: any[]) => PromiseLike<R> | R, limit: number, interval: number): ((...args: any[]) => Promise<R>) & { abort(): void; };

declare namespace pThrottle {
    class AbortError extends Error {
        readonly name: 'AbortError';

        constructor();
    }
}
