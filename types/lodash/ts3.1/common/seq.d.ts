import _ = require("../index");
declare module "../index" {
    // chain
    interface LoDashStatic {
        /**
         * @see _.chain
         */
        chain<TrapAny extends { __lodashAnyHack: any }>(value: TrapAny): CollectionChain<any>;
        /**
         * @see _.chain
         */
        chain<T extends null | undefined>(value: T): PrimitiveChain<T>;
        /**
         * @see _.chain
         */
        chain(value: string | null | undefined): StringChain;
        /**
         * @see _.chain
         */
        chain<T extends (...args: any[]) => any>(value: T): FunctionChain<T>;
        /**
         * @see _.chain
         */
        chain<T = any>(value: List<T> | null | undefined): CollectionChain<T>;
        /**
         * @see _.chain
         */
        chain<T extends object>(value: T | null | undefined): ObjectChain<T>;
        /**
         * @see _.chain
         */
        chain<T>(value: T): PrimitiveChain<T>;
    }
    interface Collection<T> {
        /**
         * @see _.chain
         */
        chain(): CollectionChain<T>;
    }
    interface String {
        /**
         * @see _.chain
         */
        chain(): StringChain;
    }
    interface Object<T> {
        /**
         * @see _.chain
         */
        chain(): ObjectChain<T>;
    }
    interface Primitive<T> {
        /**
         * @see _.chain
         */
        chain(): PrimitiveChain<T>;
    }
    interface Function<T extends (...args: any) => any> {
        /**
         * @see _.chain
         */
        chain(): FunctionChain<T>;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.chain
         */
        chain(): this;
    }
    // prototype.commit
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.commit
         */
        commit(): this;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.commit
         */
        commit(): this;
    }
    // prototype.plant
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.plant
         */
        plant(value: unknown): this;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.plant
         */
        plant(value: unknown): this;
    }
    // prototype.reverse
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.reverse
         */
        reverse(): this;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.reverse
         */
        reverse(): this;
    }
    // prototype.toJSON
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.toJSON
         */
        toJSON(): TValue;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.toJSON
         */
        toJSON(): TValue;
    }
    // prototype.toString
    interface LoDashWrapper<TValue> {
        /**
         * @see _.toString
         */
        toString(): string;
    }
    // prototype.value
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.value
         */
        value(): TValue;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.value
         */
        value(): TValue;
    }
    // prototype.valueOf
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.valueOf
         */
        valueOf(): TValue;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.valueOf
         */
        valueOf(): TValue;
    }
    // tap
    interface LoDashStatic {
        /**
         * @see _.tap
         */
        tap<T>(value: T, interceptor: (value: T) => void): T;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.tap
         */
        tap(interceptor: (value: TValue) => void): this;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.tap
         */
        tap(interceptor: (value: TValue) => void): this;
    }
    // thru
    interface LoDashStatic {
        /**
         * @see _.thru
         */
        thru<T, TResult>(value: T, interceptor: (value: T) => TResult): TResult;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.thru
         */
        thru<TResult>(interceptor: (value: TValue) => TResult): ImpChain<TResult>;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.thru
         */
        thru<TResult>(interceptor: (value: TValue) => TResult): ExpChain<TResult>;
    }
}
