// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

import _ = require("../index");

interface Curry {
    (): Curry;
    (arity: number): Curry1x1;
    <T1, R>(p1: _.__, func: (t1: T1) => R): Curry1x2<T1, R>;
    <T1, R>(arity: number, func: (t1: T1) => R): _.CurriedFunction1<T1, R>;
    <T1, T2, R>(p1: _.__, func: (t1: T1, t2: T2) => R): Curry2x2<T1, T2, R>;
    <T1, T2, R>(arity: number, func: (t1: T1, t2: T2) => R): _.CurriedFunction2<T1, T2, R>;
    <T1, T2, T3, R>(p1: _.__, func: (t1: T1, t2: T2, t3: T3) => R): Curry3x2<T1, T2, T3, R>;
    <T1, T2, T3, R>(arity: number, func: (t1: T1, t2: T2, t3: T3) => R): _.CurriedFunction3<T1, T2, T3, R>;
    <T1, T2, T3, T4, R>(p1: _.__, func: (t1: T1, t2: T2, t3: T3, t4: T4) => R): Curry4x2<T1, T2, T3, T4, R>;
    <T1, T2, T3, T4, R>(arity: number, func: (t1: T1, t2: T2, t3: T3, t4: T4) => R): _.CurriedFunction4<T1, T2, T3, T4, R>;
    <T1, T2, T3, T4, T5, R>(p1: _.__, func: (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5) => R): Curry5x2<T1, T2, T3, T4, T5, R>;
    <T1, T2, T3, T4, T5, R>(arity: number, func: (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5) => R): _.CurriedFunction5<T1, T2, T3, T4, T5, R>;
    (p1: _.__, func: (...args: any[]) => any): Curry6x2;
    (arity: number, func: (...args: any[]) => any): (...args: any[]) => any;
}
interface Curry1x1 {
    (): Curry1x1;
    <T1, R>(func: (t1: T1) => R): _.CurriedFunction1<T1, R>;
    <T1, T2, R>(func: (t1: T1, t2: T2) => R): _.CurriedFunction2<T1, T2, R>;
    <T1, T2, T3, R>(func: (t1: T1, t2: T2, t3: T3) => R): _.CurriedFunction3<T1, T2, T3, R>;
    <T1, T2, T3, T4, R>(func: (t1: T1, t2: T2, t3: T3, t4: T4) => R): _.CurriedFunction4<T1, T2, T3, T4, R>;
    <T1, T2, T3, T4, T5, R>(func: (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5) => R): _.CurriedFunction5<T1, T2, T3, T4, T5, R>;
    (func: (...args: any[]) => any): (...args: any[]) => any;
}
interface Curry1x2<T1, R> {
    (): Curry1x2<T1, R>;
    (arity: number): _.CurriedFunction1<T1, R>;
}
interface Curry2x2<T1, T2, R> {
    (): Curry2x2<T1, T2, R>;
    (arity: number): _.CurriedFunction2<T1, T2, R>;
}
interface Curry3x2<T1, T2, T3, R> {
    (): Curry3x2<T1, T2, T3, R>;
    (arity: number): _.CurriedFunction3<T1, T2, T3, R>;
}
interface Curry4x2<T1, T2, T3, T4, R> {
    (): Curry4x2<T1, T2, T3, T4, R>;
    (arity: number): _.CurriedFunction4<T1, T2, T3, T4, R>;
}
interface Curry5x2<T1, T2, T3, T4, T5, R> {
    (): Curry5x2<T1, T2, T3, T4, T5, R>;
    (arity: number): _.CurriedFunction5<T1, T2, T3, T4, T5, R>;
}
interface Curry6x2 {
    (): Curry6x2;
    (arity: number): (...args: any[]) => any;
}

declare const curryN: Curry;
export = curryN;
