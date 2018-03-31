// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

import _ = require("../index");

interface CurryRight {
    (): CurryRight;
    (arity: number): CurryRight1x1;
    <T1, R>(arity: _.__, func: (t1: T1) => R): CurryRight1x2<T1, R>;
    <T1, R>(arity: number, func: (t1: T1) => R): _.RightCurriedFunction1<T1, R>;
    <T1, T2, R>(arity: _.__, func: (t1: T1, t2: T2) => R): CurryRight2x2<T1, T2, R>;
    <T1, T2, R>(arity: number, func: (t1: T1, t2: T2) => R): _.RightCurriedFunction2<T1, T2, R>;
    <T1, T2, T3, R>(arity: _.__, func: (t1: T1, t2: T2, t3: T3) => R): CurryRight3x2<T1, T2, T3, R>;
    <T1, T2, T3, R>(arity: number, func: (t1: T1, t2: T2, t3: T3) => R): _.RightCurriedFunction3<T1, T2, T3, R>;
    <T1, T2, T3, T4, R>(arity: _.__, func: (t1: T1, t2: T2, t3: T3, t4: T4) => R): CurryRight4x2<T1, T2, T3, T4, R>;
    <T1, T2, T3, T4, R>(arity: number, func: (t1: T1, t2: T2, t3: T3, t4: T4) => R): _.RightCurriedFunction4<T1, T2, T3, T4, R>;
    <T1, T2, T3, T4, T5, R>(arity: _.__, func: (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5) => R): CurryRight5x2<T1, T2, T3, T4, T5, R>;
    <T1, T2, T3, T4, T5, R>(arity: number, func: (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5) => R): _.RightCurriedFunction5<T1, T2, T3, T4, T5, R>;
    (arity: _.__, func: (...args: any[]) => any): CurryRight6x2;
    (arity: number, func: (...args: any[]) => any): (...args: any[]) => any;
}
interface CurryRight1x1 {
    (): CurryRight1x1;
    <T1, R>(func: (t1: T1) => R): _.RightCurriedFunction1<T1, R>;
    <T1, T2, R>(func: (t1: T1, t2: T2) => R): _.RightCurriedFunction2<T1, T2, R>;
    <T1, T2, T3, R>(func: (t1: T1, t2: T2, t3: T3) => R): _.RightCurriedFunction3<T1, T2, T3, R>;
    <T1, T2, T3, T4, R>(func: (t1: T1, t2: T2, t3: T3, t4: T4) => R): _.RightCurriedFunction4<T1, T2, T3, T4, R>;
    <T1, T2, T3, T4, T5, R>(func: (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5) => R): _.RightCurriedFunction5<T1, T2, T3, T4, T5, R>;
    (func: (...args: any[]) => any): (...args: any[]) => any;
}
interface CurryRight1x2<T1, R> {
    (): CurryRight1x2<T1, R>;
    (arity: number): _.RightCurriedFunction1<T1, R>;
}
interface CurryRight2x2<T1, T2, R> {
    (): CurryRight2x2<T1, T2, R>;
    (arity: number): _.RightCurriedFunction2<T1, T2, R>;
}
interface CurryRight3x2<T1, T2, T3, R> {
    (): CurryRight3x2<T1, T2, T3, R>;
    (arity: number): _.RightCurriedFunction3<T1, T2, T3, R>;
}
interface CurryRight4x2<T1, T2, T3, T4, R> {
    (): CurryRight4x2<T1, T2, T3, T4, R>;
    (arity: number): _.RightCurriedFunction4<T1, T2, T3, T4, R>;
}
interface CurryRight5x2<T1, T2, T3, T4, T5, R> {
    (): CurryRight5x2<T1, T2, T3, T4, T5, R>;
    (arity: number): _.RightCurriedFunction5<T1, T2, T3, T4, T5, R>;
}
interface CurryRight6x2 {
    (): CurryRight6x2;
    (arity: number): (...args: any[]) => any;
}

declare const curryRightN: CurryRight;
export = curryRightN;
