import _ = require("../index");
declare module "../index" {
    // chain
    interface Stat {
        chain<T>(value: T): Exp<T>;
    }
    interface Imp<TValue> {
        chain(): Exp<TValue>;
    }
    interface Exp<TValue> {
        chain(): this;
    }
    // prototype.chain
    interface Stat {
        chain<T>(value: T): Exp<T>;
    }
    interface Imp<TValue> {
        chain(): Exp<TValue>;
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
    interface Imp<TValue> {
        thru<TResult>(interceptor: (value: TValue) => TResult): Imp<TResult>;
    }
    interface Exp<TValue> {
        thru<TResult>(interceptor: (value: TValue) => TResult): Exp<TResult>;
    }
}
