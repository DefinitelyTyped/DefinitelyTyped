// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

import _ = require("../index");

interface Curry {
    <T1, R>(func: (t1: T1) => R): _.CurriedFunction1<T1, R>;
    <T1, T2, R>(func: (t1: T1, t2: T2) => R): _.CurriedFunction2<T1, T2, R>;
    <T1, T2, T3, R>(func: (t1: T1, t2: T2, t3: T3) => R): _.CurriedFunction3<T1, T2, T3, R>;
    <T1, T2, T3, T4, R>(func: (t1: T1, t2: T2, t3: T3, t4: T4) => R): _.CurriedFunction4<T1, T2, T3, T4, R>;
    <T1, T2, T3, T4, T5, R>(func: (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5) => R): _.CurriedFunction5<T1, T2, T3, T4, T5, R>;
    (func: (...args: any[]) => any): (...args: any[]) => any;
}

declare const curry: Curry;
export = curry;
