import _ = require("../index");
declare module "../index" {
    interface LoDashStatic {
        first: typeof _.head; // tslint:disable-line:no-unnecessary-qualifier
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.head
         */
        first<T>(this: LoDashImplicitWrapper<List<T> | null | undefined>): T | undefined;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.head
         */
        first<T>(this: LoDashExplicitWrapper<List<T> | null | undefined>): LoDashExplicitWrapper<T | undefined>;
    }

    interface RecursiveArray<T> extends Array<T|RecursiveArray<T>> {}
    interface ListOfRecursiveArraysOrValues<T> extends List<T|RecursiveArray<T>> {}
}