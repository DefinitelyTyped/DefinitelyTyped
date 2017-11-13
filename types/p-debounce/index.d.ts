// Type definitions for p-debounce 1.0
// Project: https://github.com/sindresorhus/p-debounce#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = pDebounce;

declare function pDebounce<R>(fn: () => PromiseLike<R> | R, wait: number, options?: pDebounce.Options): (() => Promise<R>) & { abort(): void; };
declare function pDebounce<R, T1>(fn: (arg1: T1) => PromiseLike<R> | R, wait: number, options?: pDebounce.Options): ((arg1: T1) => Promise<R>) & { abort(): void; };
declare function pDebounce<R, T1, T2>(fn: (arg1: T1, arg2: T2) => PromiseLike<R> | R, wait: number, options?: pDebounce.Options): ((arg1: T1, arg2: T2) => Promise<R>) & { abort(): void; };
declare function pDebounce<R, T1, T2, T3>(fn: (arg1: T1, arg2: T2, arg3: T3) => PromiseLike<R> | R,
                                          wait: number,
                                          options?: pDebounce.Options): ((arg1: T1, arg2: T2, arg3: T3) => Promise<R>) & { abort(): void; };
declare function pDebounce<R, T1, T2, T3, T4>(fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4) => PromiseLike<R> | R,
                                              wait: number,
                                              options?: pDebounce.Options): ((arg1: T1, arg2: T2, arg3: T3, arg4: T4) => Promise<R>) & { abort(): void; };
declare function pDebounce<R, T1, T2, T3, T4, T5>(fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5) => PromiseLike<R> | R,
                                                  wait: number,
                                                  options?: pDebounce.Options): ((arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5) => Promise<R>) & { abort(): void; };
declare function pDebounce<R, T1, T2, T3, T4, T5, T6>(fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6) => PromiseLike<R> | R,
                                                      wait: number,
                                                      options?: pDebounce.Options): ((arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6) => Promise<R>) & { abort(): void; };
declare function pDebounce<R, T1, T2, T3, T4, T5, T6, T7>(
    fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7) => PromiseLike<R> | R,
    wait: number,
    options?: pDebounce.Options): ((arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7) => Promise<R>) & { abort(): void; };
declare function pDebounce<R, T1, T2, T3, T4, T5, T6, T7, T8>(
    fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8) => PromiseLike<R> | R,
    wait: number,
    options?: pDebounce.Options): ((arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8) => Promise<R>) & { abort(): void; };
declare function pDebounce<R, T1, T2, T3, T4, T5, T6, T7, T8, T9>(
    fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8, arg9: T9) => PromiseLike<R> | R,
    wait: number,
    options?: pDebounce.Options): ((arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8, arg9: T9) => Promise<R>) & { abort(): void; };
declare function pDebounce<R, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(
    fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8, arg9: T9, arg10: T10) => PromiseLike<R> | R,
    wait: number,
    options?: pDebounce.Options): ((arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8, arg9: T9, arg10: T10) => Promise<R>) & { abort(): void; };
declare function pDebounce<R>(fn: (...args: any[]) => PromiseLike<R> | R, wait: number, options?: pDebounce.Options): ((...args: any[]) => Promise<R>) & { abort(): void; };

declare namespace pDebounce {
    interface Options {
        leading?: boolean;
    }
}
