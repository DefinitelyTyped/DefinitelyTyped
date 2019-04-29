import _ = require("../index");
declare module "../index" {
    // chain
    interface Stat {
        chain(value: string): ExpS;
        chain<TrapAny extends { __lodashAnyHack: any }>(value: TrapAny): ExpL<any>;
        chain<T extends (...args:any[]) => any>(value: T): ExpF<T>;
        chain<T = any>(value: List<T> | null | undefined): ExpL<T>;
        chain<T extends object>(value: T | null | undefined): ExpO<T>;
        chain<T>(value: T): ExpU<T>;
    }
    interface ImpL<T> {
        chain(): ExpL<T>;
    }
    interface ImpS {
        chain(): ExpS;
    }
    interface ImpO<T> {
        chain(): ExpO<T>;
    }
    interface ImpU<T> {
        chain(): ExpU<T>;
    }
    interface ImpF<T extends (...args: any) => any> {
        chain(): ExpF<T>;
    }
    interface Exp<TValue> {
        chain(): this;
    }
    // prototype.commit
    interface Imp<TValue> {
        commit(): this;
    }
    interface Exp<TValue> {
        commit(): this;
    }
    // prototype.plant
    interface Imp<TValue> {
        plant<T>(value: T): Imp<T>;
    }
    interface Exp<TValue> {
        plant<T>(value: T): Exp<T>;
    }
    // prototype.reverse
    interface Imp<TValue> {
        reverse(): this;
    }
    interface Exp<TValue> {
        reverse(): this;
    }
    // prototype.toJSON
    interface Imp<TValue> {
        toJSON(): TValue;
    }
    interface Exp<TValue> {
        toJSON(): TValue;
    }
    // prototype.toString
    interface LoDashWrapper<TValue> {
        toString(): string;
    }
    // prototype.value
    interface Imp<TValue> {
        value(): TValue;
    }
    interface Exp<TValue> {
        value(): TValue;
    }
    // prototype.valueOf
    interface LoDashWrapper<TValue> {
        valueOf(): TValue;
    }
    // tap
    interface Stat {
        tap<T>(value: T, interceptor: (value: T) => void): T;
    }
    interface Imp<TValue> {
        tap(interceptor: (value: TValue) => void): this;
    }
    interface Exp<TValue> {
        tap(interceptor: (value: TValue) => void): this;
    }
    // thru
    interface Stat {
        thru<T, TResult>(value: T, interceptor: (value: T) => TResult): TResult;
    }
    interface Imp<TValue> {
        thru<TResult>(interceptor: (value: TValue) => TResult): Imp<TResult>;
    }
    interface Exp<TValue> {
        thru<TResult>(interceptor: (value: TValue) => TResult): Exp<TResult>;
    }
}
