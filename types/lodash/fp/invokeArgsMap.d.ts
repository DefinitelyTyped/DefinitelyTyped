import _ = require("../index");

declare namespace Lodash {
    interface InvokeMap {
        /**
        * Invokes the method named by methodName on each element in the collection returning
        * an array of the results of each invoked method. Additional arguments will be provided
        * to each invoked method. If methodName is a function it will be invoked for, and this
        * bound to, each element in the collection.
        * @param collection The collection to iterate over.
        * @param methodName The name of the method to invoke.
        * @param args Arguments to invoke the method with.
        **/
        (): InvokeMap;
        /**
        * Invokes the method named by methodName on each element in the collection returning
        * an array of the results of each invoked method. Additional arguments will be provided
        * to each invoked method. If methodName is a function it will be invoked for, and this
        * bound to, each element in the collection.
        * @param collection The collection to iterate over.
        * @param methodName The name of the method to invoke.
        * @param args Arguments to invoke the method with.
        **/
        (methodName: string): InvokeMap1x1;
        /**
        * Invokes the method named by methodName on each element in the collection returning
        * an array of the results of each invoked method. Additional arguments will be provided
        * to each invoked method. If methodName is a function it will be invoked for, and this
        * bound to, each element in the collection.
        * @param collection The collection to iterate over.
        * @param methodName The name of the method to invoke.
        * @param args Arguments to invoke the method with.
        **/
        (methodName: string, args: any[]): InvokeMap1x2;
        /**
        * Invokes the method named by methodName on each element in the collection returning
        * an array of the results of each invoked method. Additional arguments will be provided
        * to each invoked method. If methodName is a function it will be invoked for, and this
        * bound to, each element in the collection.
        * @param collection The collection to iterate over.
        * @param methodName The name of the method to invoke.
        * @param args Arguments to invoke the method with.
        **/
        (methodName: string, args: any[], collection: object | null | undefined): any[];
        /**
        * Invokes the method named by methodName on each element in the collection returning
        * an array of the results of each invoked method. Additional arguments will be provided
        * to each invoked method. If methodName is a function it will be invoked for, and this
        * bound to, each element in the collection.
        * @param collection The collection to iterate over.
        * @param methodName The name of the method to invoke.
        * @param args Arguments to invoke the method with.
        **/
        <TResult>(method: (...args: any[]) => TResult): InvokeMap2x1<TResult>;
        /**
        * Invokes the method named by methodName on each element in the collection returning
        * an array of the results of each invoked method. Additional arguments will be provided
        * to each invoked method. If methodName is a function it will be invoked for, and this
        * bound to, each element in the collection.
        * @param collection The collection to iterate over.
        * @param methodName The name of the method to invoke.
        * @param args Arguments to invoke the method with.
        **/
        <TResult>(method: (...args: any[]) => TResult, args: any[]): InvokeMap2x2<TResult>;
        /**
        * Invokes the method named by methodName on each element in the collection returning
        * an array of the results of each invoked method. Additional arguments will be provided
        * to each invoked method. If methodName is a function it will be invoked for, and this
        * bound to, each element in the collection.
        * @param collection The collection to iterate over.
        * @param methodName The name of the method to invoke.
        * @param args Arguments to invoke the method with.
        **/
        <TResult>(method: (...args: any[]) => TResult, args: any[], collection: object | null | undefined): TResult[];
    }
    interface InvokeMap1x1 {
        /**
        * Invokes the method named by methodName on each element in the collection returning
        * an array of the results of each invoked method. Additional arguments will be provided
        * to each invoked method. If methodName is a function it will be invoked for, and this
        * bound to, each element in the collection.
        * @param collection The collection to iterate over.
        * @param methodName The name of the method to invoke.
        * @param args Arguments to invoke the method with.
        **/
        (): InvokeMap1x1;
        /**
        * Invokes the method named by methodName on each element in the collection returning
        * an array of the results of each invoked method. Additional arguments will be provided
        * to each invoked method. If methodName is a function it will be invoked for, and this
        * bound to, each element in the collection.
        * @param collection The collection to iterate over.
        * @param methodName The name of the method to invoke.
        * @param args Arguments to invoke the method with.
        **/
        (args: any[]): InvokeMap1x2;
        /**
        * Invokes the method named by methodName on each element in the collection returning
        * an array of the results of each invoked method. Additional arguments will be provided
        * to each invoked method. If methodName is a function it will be invoked for, and this
        * bound to, each element in the collection.
        * @param collection The collection to iterate over.
        * @param methodName The name of the method to invoke.
        * @param args Arguments to invoke the method with.
        **/
        (args: any[], collection: object | null | undefined): any[];
    }
    interface InvokeMap1x2 {
        /**
        * Invokes the method named by methodName on each element in the collection returning
        * an array of the results of each invoked method. Additional arguments will be provided
        * to each invoked method. If methodName is a function it will be invoked for, and this
        * bound to, each element in the collection.
        * @param collection The collection to iterate over.
        * @param methodName The name of the method to invoke.
        * @param args Arguments to invoke the method with.
        **/
        (): InvokeMap1x2;
        /**
        * Invokes the method named by methodName on each element in the collection returning
        * an array of the results of each invoked method. Additional arguments will be provided
        * to each invoked method. If methodName is a function it will be invoked for, and this
        * bound to, each element in the collection.
        * @param collection The collection to iterate over.
        * @param methodName The name of the method to invoke.
        * @param args Arguments to invoke the method with.
        **/
        (collection: object | null | undefined): any[];
    }
    interface InvokeMap2x1<TResult> {
        /**
        * Invokes the method named by methodName on each element in the collection returning
        * an array of the results of each invoked method. Additional arguments will be provided
        * to each invoked method. If methodName is a function it will be invoked for, and this
        * bound to, each element in the collection.
        * @param collection The collection to iterate over.
        * @param methodName The name of the method to invoke.
        * @param args Arguments to invoke the method with.
        **/
        (): InvokeMap2x1<TResult>;
        /**
        * Invokes the method named by methodName on each element in the collection returning
        * an array of the results of each invoked method. Additional arguments will be provided
        * to each invoked method. If methodName is a function it will be invoked for, and this
        * bound to, each element in the collection.
        * @param collection The collection to iterate over.
        * @param methodName The name of the method to invoke.
        * @param args Arguments to invoke the method with.
        **/
        (args: any[]): InvokeMap2x2<TResult>;
        /**
        * Invokes the method named by methodName on each element in the collection returning
        * an array of the results of each invoked method. Additional arguments will be provided
        * to each invoked method. If methodName is a function it will be invoked for, and this
        * bound to, each element in the collection.
        * @param collection The collection to iterate over.
        * @param methodName The name of the method to invoke.
        * @param args Arguments to invoke the method with.
        **/
        (args: any[], collection: object | null | undefined): TResult[];
    }
    interface InvokeMap2x2<TResult> {
        /**
        * Invokes the method named by methodName on each element in the collection returning
        * an array of the results of each invoked method. Additional arguments will be provided
        * to each invoked method. If methodName is a function it will be invoked for, and this
        * bound to, each element in the collection.
        * @param collection The collection to iterate over.
        * @param methodName The name of the method to invoke.
        * @param args Arguments to invoke the method with.
        **/
        (): InvokeMap2x2<TResult>;
        /**
        * Invokes the method named by methodName on each element in the collection returning
        * an array of the results of each invoked method. Additional arguments will be provided
        * to each invoked method. If methodName is a function it will be invoked for, and this
        * bound to, each element in the collection.
        * @param collection The collection to iterate over.
        * @param methodName The name of the method to invoke.
        * @param args Arguments to invoke the method with.
        **/
        (collection: object | null | undefined): TResult[];
    }
}

declare const invokeArgsMap: Lodash.InvokeMap;
export = invokeArgsMap;
