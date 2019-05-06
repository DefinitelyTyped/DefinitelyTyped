import _ = require("../index");
declare module "../index" {
    // chain
    interface LoDashStatic {
        chain<TrapAny extends { __lodashAnyHack: any }>(value: TrapAny): CollectionChain<any>;
        chain<T extends null | undefined>(value: T): PrimitiveChain<T>;
        chain(value: string | null | undefined): StringChain;
        chain<T extends (...args: any[]) => any>(value: T): FunctionChain<T>;
        chain<T = any>(value: List<T> | null | undefined): CollectionChain<T>;
        chain<T extends object>(value: T | null | undefined): ObjectChain<T>;
        chain<T>(value: T): PrimitiveChain<T>;
    }
    interface Collection<T> {
        chain(): CollectionChain<T>;
    }
    interface String {
        chain(): StringChain;
    }
    interface Object<T> {
        chain(): ObjectChain<T>;
    }
    interface Primitive<T> {
        chain(): PrimitiveChain<T>;
    }
    interface Function<T extends (...args: any) => any> {
        chain(): FunctionChain<T>;
    }
    interface LoDashExplicitWrapper<TValue> {
        chain(): this;
    }
    // prototype.commit
    interface LoDashImplicitWrapper<TValue> {
        commit(): this;
    }
    interface LoDashExplicitWrapper<TValue> {
        commit(): this;
    }
    // prototype.plant
    interface LoDashImplicitWrapper<TValue> {
        plant(value: unknown): this;
    }
    interface LoDashExplicitWrapper<TValue> {
        plant(value: unknown): this;
    }
    // prototype.reverse
    interface LoDashImplicitWrapper<TValue> {
        reverse(): this;
    }
    interface LoDashExplicitWrapper<TValue> {
        reverse(): this;
    }
    // prototype.toJSON
    interface LoDashImplicitWrapper<TValue> {
        toJSON(): TValue;
    }
    interface LoDashExplicitWrapper<TValue> {
        toJSON(): TValue;
    }
    // prototype.toString
    interface LoDashWrapper<TValue> {
        toString(): string;
    }
    // prototype.value
    interface LoDashImplicitWrapper<TValue> {
        value(): TValue;
    }
    interface LoDashExplicitWrapper<TValue> {
        value(): TValue;
    }
    // prototype.valueOf
    interface LoDashImplicitWrapper<TValue> {
        valueOf(): TValue;
    }
    interface LoDashExplicitWrapper<TValue> {
        valueOf(): TValue;
    }
    // tap
    interface LoDashStatic {
        tap<T>(value: T, interceptor: (value: T) => void): T;
    }
    interface LoDashImplicitWrapper<TValue> {
        tap(interceptor: (value: TValue) => void): this;
    }
    interface LoDashExplicitWrapper<TValue> {
        tap(interceptor: (value: TValue) => void): this;
    }
    // thru
    interface LoDashStatic {
        thru<T, TResult>(value: T, interceptor: (value: T) => TResult): TResult;
    }
    interface LoDashImplicitWrapper<TValue> {
        thru<TResult>(interceptor: (value: TValue) => TResult): ImpChain<TResult>;
    }
    interface LoDashExplicitWrapper<TValue> {
        thru<TResult>(interceptor: (value: TValue) => TResult): ExpChain<TResult>;
    }
}
