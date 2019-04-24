import _ = require("../index");
declare module "../index" {
    // chain
    interface Stat {
        chain(value: string): ExpS;
        chain<TrapAny extends { __trapAny: any }, T = any>(value: TrapAny | List<T> | null | undefined): ExpL<T>;
        chain<T extends (...args:any[]) => any>(value: T | null | undefined): ExpF<T>;
        chain<T extends object>(value: T | null | undefined): ExpO<T>;
        chain(value: any): ExpU;
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
    interface ImpU {
        chain(): _.ExpU;
    }
    interface ImpF<T> {
        chain(): ExpF<T>;
    }
    interface Exp<TValue> {
        chain(): this;
    }
    // prototype.commit
    interface LoDashWrapper<TValue> {
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
    interface LoDashWrapper<TValue> {
        reverse(): this;
    }
    // prototype.toJSON
    interface LoDashWrapper<TValue> {
        toJSON(): TValue;
    }
    // prototype.toString
    interface LoDashWrapper<TValue> {
        toString(): string;
    }
    // prototype.value
    interface LoDashWrapper<TValue> {
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
    interface LoDashWrapper<TValue> {
        tap(interceptor: (value: TValue) => void): this;
    }
    // thru
    interface Stat {
        thru<T, TResult>(value: T, interceptor: (value: T) => TResult): TResult;
    }
    // interface Imp<TValue> {
    //     thru<TResult>(interceptor: (value: TValue) => TResult): Imp<TResult>;
    // }
    // interface Exp<TValue> {
    //     thru<TResult>(interceptor: (value: TValue) => TResult): Exp<TResult>;
    // }
}
