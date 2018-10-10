// Type definitions for onetime 2.0
// Project: https://github.com/sindresorhus/onetime#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = oneTime;

declare function oneTime<R>(fn: () => R, options?: oneTime.Options): () => R;
declare function oneTime<T1, R>(fn: (t1: T1) => R, options?: oneTime.Options): (t1: T1) => R;
declare function oneTime<T1, T2, R>(fn: (t1: T1, t2: T2) => R, options?: oneTime.Options): (t1: T1, t2: T2) => R;
declare function oneTime<T1, T2, T3, R>(fn: (t1: T1, t2: T2, t3: T3) => R, options?: oneTime.Options): (t1: T1, t2: T2, t3: T3) => R;
declare function oneTime<T1, T2, T3, T4, R>(
    fn: (t1: T1, t2: T2, t3: T3, t4: T4) => R, options?: oneTime.Options): (t1: T1, t2: T2, t3: T3, t4: T4) => R;
declare function oneTime<T1, T2, T3, T4, T5, R>(
    fn: (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5) => R, options?: oneTime.Options): (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5) => R;
declare function oneTime<T1, T2, T3, T4, T5, T6, R>(
    fn: (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6) => R, options?: oneTime.Options): (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6) => R;
declare function oneTime<T1, T2, T3, T4, T5, T6, T7, R>(
    fn: (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6, t7: T7) => R,
    options?: oneTime.Options): (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6, t7: T7) => R;
declare function oneTime<T1, T2, T3, T4, T5, T6, T7, T8, R>(
    fn: (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6, t7: T7, t8: T8) => R,
    options?: oneTime.Options): (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6, t7: T7, t8: T8) => R;
declare function oneTime<T1, T2, T3, T4, T5, T6, T7, T8, T9, R>(
    fn: (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6, t7: T7, t8: T8, t9: T9) => R,
    options?: oneTime.Options): (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6, t7: T7, t8: T8, t9: T9) => R;
declare function oneTime<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, R>(
    fn: (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6, t7: T7, t8: T8, t9: T9, t10: T10) => R,
    options?: oneTime.Options): (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6, t7: T7, t8: T8, t9: T9, t10: T10) => R;
declare function oneTime<R>(fn: (...args: any[]) => R, options?: oneTime.Options): (...args: any[]) => R;

declare namespace oneTime {
    interface Options {
        throw?: boolean;
    }
}
