// Type definitions for once 1.4
// Project: https://github.com/isaacs/once
// Definitions by: Denis Sokolov <https://github.com/denis-sokolov>
//                 BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = once;

declare const once: Once;

interface Once extends once.OnceFn {
    proto(): void;
    strict: once.OnceFn;
}

declare namespace once {
    interface OnceFn {
        <R>(f: () => R): (() => R) & FnProps<R>;
        <T1, R>(f: (t1: T1) => R): ((t1: T1) => R) & FnProps<R>;
        <T1, T2, R>(f: (t1: T1, t2: T2) => R): ((t1: T1, t2: T2) => R) & FnProps<R>;
        <T1, T2, T3, R>(f: (t1: T1, t2: T2, t3: T3) => R): ((t1: T1, t2: T2, t3: T3) => R) & FnProps<R>;
        <T1, T2, T3, T4, R>(f: (t1: T1, t2: T2, t3: T3, t4: T4) => R): ((t1: T1, t2: T2, t3: T3, t4: T4) => R) & FnProps<R>;
        <T1, T2, T3, T4, T5, R>(f: (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5) => R): ((t1: T1, t2: T2, t3: T3, t4: T4, t5: T5) => R) & FnProps<R>;
        <T1, T2, T3, T4, T5, T6, R>(f: (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6) => R):
            ((t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6) => R) & FnProps<R>;
        <T1, T2, T3, T4, T5, T6, T7, R>(f: (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6, t7: T7) => R):
            ((t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6, t7: T7) => R) & FnProps<R>;
        <T1, T2, T3, T4, T5, T6, T7, T8, R>(f: (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6, t7: T7, t8: T8) => R):
            ((t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6, t7: T7, t8: T8) => R) & FnProps<R>;
        <T1, T2, T3, T4, T5, T6, T7, T8, T9, R>(f: (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6, t7: T7, t8: T8, t9: T9) => R):
            ((t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6, t7: T7, t8: T8, t9: T9) => R) & FnProps<R>;
        <T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, R>(f: (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6, t7: T7, t8: T8, t9: T9, t10: T10) => R):
            ((t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6, t7: T7, t8: T8, t9: T9, t10: T10) => R) & FnProps<R>;
        <R>(f: (...args: any[]) => R): ((...args: any[]) => R) & FnProps<R>;
    }

    interface FnProps<R> {
        called: boolean;
        value: R | undefined;
    }
}

declare global {
    interface Function {
        // tslint:disable-next-line ban-types
        once(): Function & once.FnProps<any>;
    }
}
