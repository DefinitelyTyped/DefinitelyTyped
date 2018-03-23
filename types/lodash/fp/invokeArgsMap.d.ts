// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

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
    (methodName: string, args: ReadonlyArray<any>): InvokeMap1x2;
    /**
    * Invokes the method named by methodName on each element in the collection returning
    * an array of the results of each invoked method. Additional arguments will be provided
    * to each invoked method. If methodName is a function it will be invoked for, and this
    * bound to, each element in the collection.
    * @param collection The collection to iterate over.
    * @param methodName The name of the method to invoke.
    * @param args Arguments to invoke the method with.
    **/
    (methodName: string, args: ReadonlyArray<any>, collection: object | null | undefined): any[];
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
    <TResult>(method: (...args: any[]) => TResult, args: ReadonlyArray<any>): InvokeMap2x2<TResult>;
    /**
    * Invokes the method named by methodName on each element in the collection returning
    * an array of the results of each invoked method. Additional arguments will be provided
    * to each invoked method. If methodName is a function it will be invoked for, and this
    * bound to, each element in the collection.
    * @param collection The collection to iterate over.
    * @param methodName The name of the method to invoke.
    * @param args Arguments to invoke the method with.
    **/
    <TResult>(method: (...args: any[]) => TResult, args: ReadonlyArray<any>, collection: object | null | undefined): TResult[];
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
    (args: ReadonlyArray<any>): InvokeMap1x2;
    /**
    * Invokes the method named by methodName on each element in the collection returning
    * an array of the results of each invoked method. Additional arguments will be provided
    * to each invoked method. If methodName is a function it will be invoked for, and this
    * bound to, each element in the collection.
    * @param collection The collection to iterate over.
    * @param methodName The name of the method to invoke.
    * @param args Arguments to invoke the method with.
    **/
    (args: ReadonlyArray<any>, collection: object | null | undefined): any[];
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
    (args: ReadonlyArray<any>): InvokeMap2x2<TResult>;
    /**
    * Invokes the method named by methodName on each element in the collection returning
    * an array of the results of each invoked method. Additional arguments will be provided
    * to each invoked method. If methodName is a function it will be invoked for, and this
    * bound to, each element in the collection.
    * @param collection The collection to iterate over.
    * @param methodName The name of the method to invoke.
    * @param args Arguments to invoke the method with.
    **/
    (args: ReadonlyArray<any>, collection: object | null | undefined): TResult[];
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

declare const invokeArgsMap: InvokeMap;
export = invokeArgsMap;
