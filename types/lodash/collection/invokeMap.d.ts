import * as _ from "..";
declare module ".." {
    interface LoDashStatic {
        /**
        * Invokes the method named by methodName on each element in the collection returning
        * an array of the results of each invoked method. Additional arguments will be provided
        * to each invoked method. If methodName is a function it will be invoked for, and this
        * bound to, each element in the collection.
        * @param collection The collection to iterate over.
        * @param methodName The name of the method to invoke.
        * @param args Arguments to invoke the method with.
        **/
        invokeMap(
            collection: object | null | undefined,
            methodName: string,
            ...args: any[]): any[];

        /**
        * @see _.invokeMap
        **/
        invokeMap<TResult>(
            collection: object | null | undefined,
            method: (...args: any[]) => TResult,
            ...args: any[]): TResult[];
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
        * @see _.invokeMap
        **/
        invokeMap(
            methodName: string,
            ...args: any[]): LoDashImplicitWrapper<any[]>;

        /**
        * @see _.invokeMap
        **/
        invokeMap<TResult>(
            method: (...args: any[]) => TResult,
            ...args: any[]): LoDashImplicitWrapper<TResult[]>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
        * @see _.invokeMap
        **/
        invokeMap(
            methodName: string,
            ...args: any[]): LoDashExplicitWrapper<any[]>;

        /**
        * @see _.invokeMap
        **/
        invokeMap<TResult>(
            method: (...args: any[]) => TResult,
            ...args: any[]): LoDashExplicitWrapper<TResult[]>;
    }
}